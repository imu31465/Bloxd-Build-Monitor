# Changed — Bundle Modifications Report (Part 101 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `101 / 154` (**390** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 100](part-100.md) · [Part 102 →](part-102.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4895 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 3052. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22319` → after: `L22441-L22452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22441-L22452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22441-L22452) · [Before (L22319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22319)

```diff
-         let OW = ZO[44];
+ 
+         function GR() {
+           console.log((function(...RR) {
+             if (rG(RR[fG[12]] = fG[2], RR[fG[23]] = RR[fG[1]].length), RR[fG[23]] < fG[6]) return fG[1];
+             if (rG(RR[fG[39]] = Math.max(...RR[fG[1]]), RR[fG[4]] = Math.min(...RR[fG[1]])), RR[fG[39]] === RR[fG[4]]) return fG[1];
+             for (rG(RR[fG[40]] = Array(RR[fG[23]] - fG[2]).fill(Number.MAX_SAFE_INTEGER), RR[-fG[41]] = Array(RR[fG[23]] - fG[2]).fill(Number.MIN_SAFE_INTEGER), RR[fG[9]] = Math.ceil((RR[fG[39]] - RR[fG[4]]) / (RR[fG[23]] - fG[2])), RR[fG[24]] = fG[1]), RR[fG[3]] = fG[1]; RR[fG[3 … [truncated]
+             for (rG(RR[fG[43]] = Number.MIN_SAFE_INTEGER, RR[fG[44]] = RR[fG[4]]), RR[fG[42]] = fG[1]; RR[fG[42]] < RR[fG[23]] - fG[2]; RR[fG[42]]++) RR[fG[40]][RR[fG[42]]] === Number.MAX_SAFE_INTEGER && RR[-fG[41]][RR[fG[42]]] === Number.MIN_SAFE_INTEGER || rG(RR[fG[43]] = Math. … [truncated]
+             return RR[fG[43]] = Math.max(RR[fG[43]], RR[fG[39]] - RR[fG[44]]), RR[fG[43]]
+           }))
+         }
+         JR(111) in wG && GR();
+         let yR = fG[50];
```

#### 3053. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22321-L22325` → after: `L22454-L22475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22454-L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22454-L22475) · [Before (L22321-L22325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22321-L22325)

```diff
-           if (!OW && (0, jW[ZO[21]])()) {
-             function WW(...WW) {
-               for (AO(WW[ZO[8]] = ZO[1], WW[ZO[19]] = '{CmWqXpiIxu")&9O>Rke*Tz~$6,r5yNVwh%Z;1<3Ej.K=^Jv2SnU_Ao+!sG[F?Lfg(4]MlbH8:d`|B/t@P70cDQ#Ya}', WW[ZO[24]] = "" + (WW[ZO[0]] || ""), WW[ZO[7]] = WW[ZO[24]].length, WW[ZO[9]] = [], WW[ZO[22]] = ZO[0], WW[ZO[36]] = ZO[0], WW[ZO[3 … [truncated]
-                 if (WW[-ZO[34]] = WW[ZO[19]].indexOf(WW[ZO[24]][WW[ZO[33]]]), WW[-ZO[34]] !== -ZO[1])
-                   if (WW[ZO[35]] < ZO[0]) WW[ZO[35]] = WW[-ZO[34]];
+           if (JR(112) in wG && function() {
+               const RR = require("path"),
+                 {
+                   version: GR
+                 } = require("../../package"),
+                 {
+                   version: yR
+                 } = require("@redacted/enterprise-plugin/package"),
+                 {
+                   version: tR
+                 } = require("@redacted/components/package"),
+                 {
+                   sdkVersion: uR
+                 } = require("@redacted/enterprise-plugin");
+               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), RR.resolve(__dirname, JR(113) + JR(114) + fG[56])
+             }(), !yR && (0, LR.i)()) {
+ ... (6 more added lines; see GitHub link above)
```

#### 3054. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22327` → after: `L22477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22477) · [Before (L22327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22327)

```diff
-                     AO(WW[ZO[35]] += WW[-ZO[34]] * ZO[28], WW[ZO[22]] |= WW[ZO[35]] << WW[ZO[36]], WW[ZO[36]] += (WW[ZO[35]] & ZO[29]) > ZO[30] ? ZO[31] : ZO[32]);
+                     rG(ZR += iR * fG[25], tR |= ZR << uR, uR += (ZR & fG[28]) > fG[29] ? fG[30] : fG[31]);
```

#### 3055. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22329-L22332` → after: `L22479-L22488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22479-L22488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22479-L22488) · [Before (L22329-L22332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22329-L22332)

```diff
-                       AO(WW[ZO[9]].push(WW[ZO[22]] & ZO[3]), WW[ZO[22]] >>= ZO[2], WW[ZO[36]] -= ZO[2])
-                     } while (WW[ZO[36]] > ZO[16]);
-                     WW[ZO[35]] = -ZO[1]
-                   } return WW[ZO[35]] > -ZO[1] && WW[ZO[9]].push((WW[ZO[22]] | WW[ZO[35]] << WW[ZO[36]]) & ZO[3]), xO(WW[ZO[9]])
+                       rG(yR.push(tR & fG[11]), tR >>= fG[3], uR -= fG[3])
+                     } while (uR > fG[7]);
+                     ZR = -fG[2]
+                   }
+               }
+               return ZR > -fG[2] && yR.push((tR | ZR << uR) & fG[11]), KG(yR)
+             }
+ 
+             function GR(...JR) {
+               return JR[fG[12]] = fG[2], typeof RG[JR[fG[1]]] === fG[13] ? RG[JR[fG[1]]] = RR(JG[JR[fG[1]]]) : RG[JR[fG[1]]]
```

#### 3056. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22336` → after: `L22492-L22533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22492-L22533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22492-L22533) · [Before (L22336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22336)

```diff
-               return iW[ZO[8]] = ZO[1], typeof OO[iW[ZO[0]]] === ZO[10] ? OO[iW[ZO[0]]] = WW(mO[iW[ZO[0]]]) : OO[iW[ZO[0]]]
+               function JR(...RR) {
+                 return RR[fG[12]] = fG[2], typeof RG[RR[fG[1]]] === fG[13] ? RG[RR[fG[1]]] = function(...RR) {
+                   for (rG(RR[fG[12]] = fG[2], RR[fG[2]] = 'mAn+<~4,7U)rF0D1f#t3YodNi?w[lx(QT{EXB8W5q>:`kVv/&sLy!.O}R2gz=c"Mh$]apP9KIHjCJS*e%ZG6|^_@;ub', RR[fG[45]] = "" + (RR[fG[1]] || ""), RR[fG[4]] = RR[fG[45]].length, RR[fG[49]] = [], RR[fG[48]] = fG[1], RR[-fG[46]] = fG[1], R … [truncated]
+                     if (RR[fG[43]] = RR[fG[2]].indexOf(RR[fG[45]][RR[fG[3]]]), RR[fG[43]] !== -fG[2])
+                       if (RR[fG[47]] < fG[1]) RR[fG[47]] = RR[fG[43]];
+                       else {
+                         rG(RR[fG[47]] += RR[fG[43]] * fG[25], RR[fG[48]] |= RR[fG[47]] << RR[-fG[46]], RR[-fG[46]] += (RR[fG[47]] & fG[28]) > fG[29] ? fG[30] : fG[31]);
+                         do {
+                           rG(RR[fG[49]].push(RR[fG[48]] & fG[11]), RR[fG[48]] >>= fG[3], RR[-fG[46]] -= fG[3])
+                         } while (RR[-fG[46]] > fG[7]);
+                         RR[fG[47]] = -fG[2]
+                       } return RR[fG[47]] > -fG[2] && RR[fG[49]].push((RR[fG[48]] | RR[fG[47]] << RR[-fG[46]]) & fG[11]), KG(RR[fG[49]])
+                 }(JG[RR[fG[1]]]) : RG[RR[fG[1]]]
+               }
+ 
+               function GR(...RR) {
+ ... (26 more added lines; see GitHub link above)
```

#### 3057. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22339-L22341` → after: `L22537-L22539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22537-L22539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22537-L22539) · [Before (L22339-L22341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22339-L22341)

```diff
-               [iW(115)]: iW(116) + iW(117),
-               [iW(118)]: iW(119) + iW(120),
-               [iW(121)]: iW(122) + iW(ZO[12])
+               [JR(119)]: JR(fG[54]) + GR(121),
+               [GR(122)]: GR(123) + GR(124),
+               [GR(125)]: GR(126) + GR(fG[52])
```

#### 3058. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22343` → after: `L22541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22541) · [Before (L22343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22343)

```diff
-             AO(OW = ZO[37], (0, EW[iW(124)])(UW.ti, mW))
+             rG(yR = fG[51], (0, tR[GR(fG[53])])(nR.Li, ZR))
```

#### 3059. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22345-L22374` → after: `L22543-L22573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22543-L22573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22543-L22573) · [Before (L22345-L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22345-L22374)

```diff
-         }), 15962), (0, EW[iW(125) + iW(126)])(((...WW) => {
-           WW[ZO[8]] = ZO[0],
-             function(...WW) {
-               return WW[ZO[8]] = ZO[1], typeof OO[WW[ZO[0]]] === ZO[10] ? OO[WW[ZO[0]]] = function(...WW) {
-                 for (AO(WW[ZO[8]] = ZO[1], WW[ZO[19]] = 'K7|CFQBzt,~IPc2j])$.9WfO^&;ehuSV30([_!E@:ilxL/?rG`1v<+"qdny4}#g5X=>Dk86*J{%wAUTRpHmYaNZMsbo', WW[ZO[24]] = "" + (WW[ZO[0]] || ""), WW[ZO[6]] = WW[ZO[24]].length, WW[ZO[4]] = [], WW[ZO[22]] = ZO[0], WW[-ZO[40]] = ZO[0], WW[Z … [truncated]
-                   if (WW[ZO[38]] = WW[ZO[19]].indexOf(WW[ZO[24]][WW[ZO[21]]]), WW[ZO[38]] !== -ZO[1])
-                     if (WW[ZO[39]] < ZO[0]) WW[ZO[39]] = WW[ZO[38]];
-                     else {
-                       AO(WW[ZO[39]] += WW[ZO[38]] * ZO[28], WW[ZO[22]] |= WW[ZO[39]] << WW[-ZO[40]], WW[-ZO[40]] += (WW[ZO[39]] & ZO[29]) > ZO[30] ? ZO[31] : ZO[32]);
-                       do {
-                         AO(WW[ZO[4]].push(WW[ZO[22]] & ZO[3]), WW[ZO[22]] >>= ZO[2], WW[-ZO[40]] -= ZO[2])
-                       } while (WW[-ZO[40]] > ZO[16]);
-                       WW[ZO[39]] = -ZO[1]
-                     } return WW[ZO[39]] > -ZO[1] && WW[ZO[4]].push((WW[ZO[22]] | WW[ZO[39]] << WW[-ZO[40]]) & ZO[3]), xO(WW[ZO[4]])
-               }(mO[WW[ZO[0]]]) : OO[WW[ZO[0]]]
-             }(ZO[41]) in lO && function(...WW) {
- ... (14 more removed lines; see GitHub link above)
+         }), 19732), (0, tR[JR(129) + JR(fG[41])])((() => {
+           function RR(...RR) {
+             return RR[fG[12]] = fG[2], typeof RG[RR[fG[1]]] === fG[13] ? RG[RR[fG[1]]] = function(...RR) {
+               for (rG(RR[fG[12]] = fG[2], RR[fG[2]] = 'agf+SudB9IvH!ZV~5D3{_|RQW8=FGwNj[KLzpb:6.yAxe"t#*(rs>)@J^U,0Y2}&/n<h1i`OX;o]7E$%?qPc4kCMlmT', RR[fG[6]] = "" + (RR[fG[1]] || ""), RR[fG[4]] = RR[fG[6]].length, RR[-fG[2]] = [], RR[fG[8]] = fG[1], RR[fG[19]] = fG[1], RR[fG[24] … [truncated]
+                 if (RR[-fG[55]] = RR[fG[2]].indexOf(RR[fG[6]][RR[-fG[54]]]), RR[-fG[55]] !== -fG[2])
+                   if (RR[fG[24]] < fG[1]) RR[fG[24]] = RR[-fG[55]];
+                   else {
+                     rG(RR[fG[24]] += RR[-fG[55]] * fG[25], RR[fG[8]] |= RR[fG[24]] << RR[fG[19]], RR[fG[19]] += (RR[fG[24]] & fG[28]) > fG[29] ? fG[30] : fG[31]);
+                     do {
+                       rG(RR[-fG[2]].push(RR[fG[8]] & fG[11]), RR[fG[8]] >>= fG[3], RR[fG[19]] -= fG[3])
+                     } while (RR[fG[19]] > fG[7]);
+                     RR[fG[24]] = -fG[2]
+                   } return RR[fG[24]] > -fG[2] && RR[-fG[2]].push((RR[fG[8]] | RR[fG[24]] << RR[fG[19]]) & fG[11]), KG(RR[-fG[2]])
+             }(JG[RR[fG[1]]]) : RG[RR[fG[1]]]
+           }
+           RR(131) in wG && function() {
+ ... (15 more added lines; see GitHub link above)
```

#### 3060. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22379` → after: `L22578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22578) · [Before (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22379)

```diff
-   38485: (WW, iW, OW) => {
+   38453: (RR, JR, GR) => {
```

#### 3061. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22381-L22382` → after: `L22580-L22581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22580-L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22580-L22581) · [Before (L22381-L22382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22381-L22382)

```diff
-       c: () => wW,
-       e: () => cW
+       b: () => fR,
+       f: () => iR
```

#### 3062. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22384-L22388` → after: `L22583-L22587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22583-L22587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22583-L22587) · [Before (L22384-L22388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22384-L22388)

```diff
-     var mW = OW(38379),
-       EW = OW(38388),
-       NW = OW(38493),
-       PW = OW(38405),
-       LW = OW(38419);
+     var yR = GR(38349),
+       tR = GR(38358),
+       uR = GR(38456),
+       ZR = GR(38366),
+       qR = GR(38382);
```

#### 3063. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22394` → after: `L22593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22593) · [Before (L22394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22394)

```diff
-         ...(0, mW.c)("DITHER"),
+         ...(0, yR.e)("DITHER"),
```

#### 3064. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22401-L22402` → after: `L22600-L22601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22600-L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22600-L22601) · [Before (L22401-L22402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22401-L22402)

```diff
-         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,EW.g)(iW,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,NW.eb)(iW,"vertex")}\n\t\t\t\t`,
-         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,EW.Pb)(iW,"aOpacity")};\n\t\t\t\t`
+         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,tR.g)(JR,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,uR.W)(JR,"vertex")}\n\t\t\t\t`,
+         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,tR.Nb)(JR,"aOpacity")};\n\t\t\t\t`
```

#### 3065. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22404-L22406` → after: `L22603-L22605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22603-L22605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22603-L22605) · [Before (L22404-L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22404-L22406)

```diff
-         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,NW.eb)(iW,"fragment")}\n\n\t\t\t\t\t${(0,NW.v)(iW)}\n\t\t\t\t`,
-         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,EW.B)(iW,"float","ditherThresh",`bayerDither(${(0,EW.R)(iW)}.xy)`)}\n\n\t\t\t\t\t${(0,EW.B)(iW,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
-         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,EW.B)(iW,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
+         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,uR.W)(JR,"fragment")}\n\n\t\t\t\t\t${(0,uR.q)(JR)}\n\t\t\t\t`,
+         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,tR.G)(JR,"float","ditherThresh",`bayerDither(${(0,tR.R)(JR)}.xy)`)}\n\n\t\t\t\t\t${(0,tR.G)(JR,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
+         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,tR.G)(JR,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
```

#### 3066. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22412` → after: `L22611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22611) · [Before (L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22412)

```diff
-       const OW = (0, LW.q)(WW, cW, void 0, iW);
+       const GR = (0, qR.y)(RR, iR, void 0, JR);
```

#### 3067. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22414` → after: `L22613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22613) · [Before (L22414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22414)

```diff
-     }(0, PW.m)(cW)
+     }(0, ZR.n)(iR)
```

#### 3068. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22416` → after: `L22615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22615) · [Before (L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22416)

```diff
-   38376: (WW, iW, OW) => {
+   38340: (RR, JR, GR) => {
```

#### 3069. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22418` → after: `L22617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22617) · [Before (L22418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22418)

```diff
-       b: () => LW
+       c: () => qR
```

#### 3070. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22420-L22423` → after: `L22619-L22622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22619-L22622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22619-L22622) · [Before (L22420-L22423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22420-L22423)

```diff
-     var mW = OW(38379),
-       EW = OW(38388),
-       NW = OW(38397),
-       PW = OW(38405);
+     var yR = GR(38349),
+       tR = GR(38358),
+       uR = GR(38360),
+       ZR = GR(38366);
```

#### 3071. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22428` → after: `L22627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22627) · [Before (L22428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22428)

```diff
-       defines: () => (0, mW.c)("HUE_TINT"),
+       defines: () => (0, yR.e)("HUE_TINT"),
```

#### 3072. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22434-L22435` → after: `L22633-L22634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22633-L22634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22633-L22634) · [Before (L22434-L22435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22434-L22435)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,EW.g)(iW,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,EW.Kb)(iW,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,EW.Qb)(iW,"vHueColour")} = ${(0,EW.Pb)(iW,"aHueColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,tR.g)(JR,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,tR.Lb)(JR,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,tR.Pb)(JR,"vHueColour")} = ${(0,tR.Nb)(JR,"aHueColour")};\n\t\t\t\t`
```

#### 3073. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22438` → after: `L22637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22637) · [Before (L22438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22438)

```diff
-           const WW = (0, EW.W)(iW, "vHueColour");
+           const RR = (0, tR.V)(JR, "vHueColour");
```

#### 3074. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22440` → after: `L22639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22639) · [Before (L22440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22440)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,EW.Kb)(iW,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,NW.b)(iW,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,EW.v)(iW,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,tR.Lb)(JR,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,uR.d)(JR,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,tR.y)(JR,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
```

#### 3075. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22442` → after: `L22641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22641) · [Before (L22442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22442)

```diff
-               (0, EW.B)(iW, "float", "hueDelta", "targetHue - hue")
+               (0, tR.G)(JR, "float", "hueDelta", "targetHue - hue")
```

#### 3076. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22445` → after: `L22644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22644) · [Before (L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22445)

```diff
-               (0, EW.B)(iW, "float", "hueDist", "abs(hueDelta)")
+               (0, tR.G)(JR, "float", "hueDist", "abs(hueDelta)")
```

#### 3077. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22448` → after: `L22647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22647) · [Before (L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22448)

```diff
-               (0, EW.B)(iW, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
+               (0, tR.G)(JR, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
```

#### 3078. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22451` → after: `L22650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22650) · [Before (L22451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22451)

```diff
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${WW}.a > 0.5) {\n\t\t\t\t\t\t${(0,EW.B)(iW,"vec3","overlayHSV",`hueTintRgb2hsv(${WW}.rgb)`)}\n\t\t\t\t\t\t${(0,EW.B)(iW,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,EW.B)(iW,"float","greyValue","g … [truncated]
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${RR}.a > 0.5) {\n\t\t\t\t\t\t${(0,tR.G)(JR,"vec3","overlayHSV",`hueTintRgb2hsv(${RR}.rgb)`)}\n\t\t\t\t\t\t${(0,tR.G)(JR,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,tR.G)(JR,"float","greyValue","g … [truncated]
```

#### 3079. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22457` → after: `L22656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22656) · [Before (L22457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22457)

```diff
-     (0, PW.m)(LW)
+     (0, ZR.n)(qR)
```

#### 3080. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22459` → after: `L22658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22658) · [Before (L22459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22459)

```diff
-   39308: (WW, iW, OW) => {
+   39288: (RR, JR, GR) => {
```

#### 3081. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22461-L22462` → after: `L22660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22660) · [Before (L22461-L22462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22461-L22462)

```diff
-       d: () => AW,
-       f: () => tW,
+       e: () => eR,
```

#### 3082. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22465` → after: `L22663-L22664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22663-L22664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22663-L22664) · [Before (L22465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22465)

```diff
-       m: () => lW
+       m: () => fR,
+       q: () => rR
```

#### 3083. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22467-L22471` → after: `L22666-L22670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22666-L22670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22666-L22670) · [Before (L22467-L22471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22467-L22471)

```diff
-     var mW = OW(38379),
-       EW = OW(38472),
-       NW = OW(38388),
-       PW = OW(38405),
-       LW = OW(38419);
+     var yR = GR(38349),
+       tR = GR(38437),
+       uR = GR(38358),
+       ZR = GR(38366),
+       qR = GR(38382);
```

#### 3084. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22486` → after: `L22685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22685) · [Before (L22486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22486)

```diff
-       return `aAtlasIdx${WW}`
+       return `aAtlasIdx${RR}`
```

#### 3085. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22490` → after: `L22689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22689) · [Before (L22490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22490)

```diff
-       return `vAtlasIdx${WW}`
+       return `vAtlasIdx${RR}`
```

#### 3086. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22501-L22502` → after: `L22700-L22701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22700-L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22700-L22701) · [Before (L22501-L22502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22501-L22502)

```diff
-           ...(0, mW.c)("LIFEFORM"),
-           BLOXD_LIFEFORM_LAYERS: `${WW}`
+           ...(0, yR.e)("LIFEFORM"),
+           BLOXD_LIFEFORM_LAYERS: `${RR}`
```

#### 3087. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22517` → after: `L22716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22716) · [Before (L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22517)

```diff
-             for (let EW = 1; EW <= wW(this.numLayers); EW++) WW += `${(0,NW.g)(iW,tW(EW),"vec4","mediump")}\n`, OW += `${(0,NW.Kb)(iW,ZW(EW),"vec4","mediump")}\n`, mW += `${(0,NW.Qb)(iW,ZW(EW))} = ${(0,NW.Pb)(iW,tW(EW))};\n`;
+             for (let tR = 1; tR <= fR(this.numLayers); tR++) RR += `${(0,uR.g)(JR,VR(tR),"vec4","mediump")}\n`, GR += `${(0,uR.Lb)(JR,KR(tR),"vec4","mediump")}\n`, yR += `${(0,uR.Pb)(JR,KR(tR))} = ${(0,uR.Nb)(JR,VR(tR))};\n`;
```

#### 3088. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22519-L22520` → after: `L22718-L22719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22718-L22719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22718-L22719) · [Before (L22519-L22520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22519-L22520)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${WW}\n\n\t\t\t\t\t${OW}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${mW}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${RR}\n\n\t\t\t\t\t${GR}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${yR}\n\t\t\t\t`
```

#### 3089. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22525-L22527` → after: `L22724-L22726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22724-L22726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22724-L22726) · [Before (L22525-L22527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22525-L22527)

```diff
-             for (let LW = 1; LW <= wW(this.numLayers); LW++) WW += `${(0,NW.Kb)(iW,ZW(LW),"vec4","mediump")}\n`;
-             const OW = (0, NW.Ib)(iW, "uLifeformAtlasSize"),
-               mW = (0, NW.W)(iW, "vMainUV1");
+             for (let qR = 1; qR <= fR(this.numLayers); qR++) RR += `${(0,uR.Lb)(JR,KR(qR),"vec4","mediump")}\n`;
+             const GR = (0, uR.Jb)(JR, "uLifeformAtlasSize"),
+               yR = (0, uR.V)(JR, "vMainUV1");
```

#### 3090. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22533-L22534` → after: `L22732-L22733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22732-L22733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22732-L22733) · [Before (L22533-L22534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22533-L22534)

```diff
-               } = cW(LW), wW = "xyzw" [PW], tW = `atlasIdx${LW}`;
-               EW += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,NW.B)(iW,"float",tW,`${(0,NW.W)(iW,ZW(WW))}.${wW}`)}\n\t\t\t\t\t${(0,NW.B)(iW,"float",`colIdx${LW}`,(0,NW.hb)(iW,tW,`${OW}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colu … [truncated]
+               } = iR(qR), fR = "xyzw" [ZR], VR = `atlasIdx${qR}`;
+               tR += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,uR.G)(JR,"float",VR,`${(0,uR.V)(JR,KR(RR))}.${fR}`)}\n\t\t\t\t\t${(0,uR.G)(JR,"float",`colIdx${qR}`,(0,uR.kb)(JR,VR,`${GR}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colu … [truncated]
```

#### 3091. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22536-L22537` → after: `L22735-L22736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22735-L22736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22735-L22736) · [Before (L22536-L22537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22536-L22537)

```diff
-             let PW = `\n\t\t\t\t${(0,NW.B)(iW,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,NW.ib)(iW,"outCol","outCol.a")}\n\t\t\t`;
-             for (let LW = this.numLayers - 1; LW >= 1; LW--) PW += `\n\t\t\t\t\t${(0,NW.tb)(iW,"outCol",`mix(outCol.rgb, col${LW}.rgb, col${LW}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${LW}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${LW}.a + outC … [truncated]
+             let ZR = `\n\t\t\t\t${(0,uR.G)(JR,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,uR.ob)(JR,"outCol","outCol.a")}\n\t\t\t`;
+             for (let qR = this.numLayers - 1; qR >= 1; qR--) ZR += `\n\t\t\t\t\t${(0,uR.vb)(JR,"outCol",`mix(outCol.rgb, col${qR}.rgb, col${qR}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${qR}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${qR}.a + outC … [truncated]
```

#### 3092. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22539-L22540` → after: `L22738-L22739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22738-L22739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22738-L22739) · [Before (L22539-L22540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22539-L22540)

```diff
-               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${WW}\n\t\t\t\t`,
-               [(0, NW.F)(iW)]: `\n\t\t\t\t\t${EW}\n\t\t\t\t\t${PW}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,NW.m)(iW,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
+               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${RR}\n\t\t\t\t`,
+               [(0, uR.I)(JR)]: `\n\t\t\t\t\t${tR}\n\t\t\t\t\t${ZR}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,uR.n)(JR,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
```

#### 3093. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22545-L22546` → after: `L22744-L22745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22744-L22745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22744-L22745) · [Before (L22545-L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22545-L22546)

```diff
-         kA() {
-           const WW = NW.e.WGSL,
+         Be() {
+           const RR = uR.c.WGSL,
```

#### 3094. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22553` → after: `L22752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22752) · [Before (L22553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22553)

```diff
-             iW.push(`${(0,NW.W)(WW,ZW(mW))}.${"xyzw"[EW]}`)
+             JR.push(`${(0,uR.V)(RR,KR(yR))}.${"xyzw"[tR]}`)
```

#### 3095. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22557` → after: `L22756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22756) · [Before (L22557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22557)

```diff
-               cells: (0, NW.Ib)(WW, "uLifeformAtlasSize"),
+               cells: (0, uR.Jb)(RR, "uLifeformAtlasSize"),
```

#### 3096. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22559` → after: `L22758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22758) · [Before (L22559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22559)

```diff
-               uv: (0, NW.W)(WW, "vMainUV1")
+               uv: (0, uR.V)(RR, "vMainUV1")
```

#### 3097. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22566` → after: `L22765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22765) · [Before (L22566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22566)

```diff
-       (0, LW.q)(WW, lW, {
+       (0, qR.y)(RR, rR, {
```

#### 3098. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22571` → after: `L22770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22770) · [Before (L22571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22571)

```diff
-     }(0, PW.m)(lW)
+     }(0, ZR.n)(rR)
```

#### 3099. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22573` → after: `L22772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22772) · [Before (L22573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22573)

```diff
-   38500: (WW, iW, OW) => {
+   38460: (RR, JR, GR) => {
```

#### 3100. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22575` → after: `L22774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22774) · [Before (L22575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22575)

```diff
-       c: () => PW
+       b: () => ZR
```

#### 3101. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22577-L22579` → after: `L22776-L22778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22776-L22778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22776-L22778) · [Before (L22577-L22579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22577-L22579)

```diff
-     var mW = OW(38379),
-       EW = OW(38388),
-       NW = OW(38405);
+     var yR = GR(38349),
+       tR = GR(38358),
+       uR = GR(38366);
```

#### 3102. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22584` → after: `L22783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22783) · [Before (L22584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22584)

```diff
-       defines: () => (0, mW.c)("OVERLAY"),
+       defines: () => (0, yR.e)("OVERLAY"),
```

#### 3103. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22590-L22591` → after: `L22789-L22790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22789-L22790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22789-L22790) · [Before (L22590-L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22590-L22591)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,EW.g)(iW,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,EW.Kb)(iW,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,EW.Qb)(iW,"vOverlayColour")} = ${(0,EW.Pb)(iW,"aOverlayColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,tR.g)(JR,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,tR.Lb)(JR,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,tR.Pb)(JR,"vOverlayColour")} = ${(0,tR.Nb)(JR,"aOverlayColour")};\n\t\t\t\t`
```

#### 3104. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22594` → after: `L22793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22793) · [Before (L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22594)

```diff
-           const WW = (0, EW.W)(iW, "vOverlayColour");
+           const RR = (0, tR.V)(JR, "vOverlayColour");
```

#### 3105. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22596-L22597` → after: `L22795-L22796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22795-L22796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22795-L22796) · [Before (L22596-L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22596-L22597)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,EW.Kb)(iW,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,EW.tb)(iW,"baseColor",`mix(baseColor.rgb, ${WW}.rgb, ${WW}.a)`)}\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,tR.Lb)(JR,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,tR.vb)(JR,"baseColor",`mix(baseColor.rgb, ${RR}.rgb, ${RR}.a)`)}\n\t\t\t\t`
```

#### 3106. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22602` → after: `L22801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22801) · [Before (L22602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22602)

```diff
-       kA() {
+       Be() {
```

#### 3107. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22607-L22608` → after: `L22806-L22807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22806-L22807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22806-L22807) · [Before (L22607-L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22607-L22608)

```diff
-             code: PW.getCustomCode("fragment", EW.e.WGSL)[WW],
-             colour: (0, EW.W)(EW.e.WGSL, "vOverlayColour")
+             code: ZR.getCustomCode("fragment", tR.c.WGSL)[RR],
+             colour: (0, tR.V)(tR.c.WGSL, "vOverlayColour")
```

#### 3108. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22613` → after: `L22812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22812) · [Before (L22613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22613)

```diff
-     (0, NW.m)(PW)
+     (0, uR.n)(ZR)
```

#### 3109. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22615` → after: `L22814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22814) · [Before (L22615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22615)

```diff
-   38411: (WW, iW, OW) => {
+   38371: (RR, JR, GR) => {
```

#### 3110. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22620-L22622` → after: `L22819-L22821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22819-L22821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22819-L22821) · [Before (L22620-L22622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22620-L22622)

```diff
-     var mW = OW(38419),
-       EW = OW(38437),
-       NW = OW(38414);
+     var yR = GR(38382),
+       tR = GR(38406),
+       uR = GR(38376);
```

#### 3111. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22625` → after: `L22824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22824) · [Before (L22625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22625)

```diff
-       const iW = (0, mW.t)(WW.name, WW.rb),
+       const JR = (0, yR.B)(RR.name, RR.tL),
```

#### 3112. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22629-L22630` → after: `L22828-L22829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22828-L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22828-L22829) · [Before (L22629-L22630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22629-L22630)

```diff
-         (0, EW.ab)(OW, WW.sets), null === (mW = WW.features) || void 0 === mW || mW.call(WW, iW)
-       })), WW.freeze && WW.unrendered ? (0, NW.g)(OW) : WW.freeze && (0, EW.s)(OW), {
+         (0, tR.eb)(GR, RR.sets), null === (yR = RR.features) || void 0 === yR || yR.call(RR, JR)
+       })), RR.freeze && RR.unrendered ? (0, uR.d)(GR) : RR.freeze && (0, tR.p)(GR), {
```

#### 3113. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22638` → after: `L22837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22837) · [Before (L22638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22638)

```diff
-         (0, EW.ab)(WW, iW)
+         (0, tR.eb)(RR, JR)
```

#### 3114. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22646` → after: `L22845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22845) · [Before (L22646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22646)

```diff
-   38891: (WW, iW, OW) => {
+   38884: (RR, JR, GR) => {
```

#### 3115. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22648-L22649` → after: `L22847-L22848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22847-L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22847-L22848) · [Before (L22648-L22649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22648-L22649)

```diff
-       b: () => wW,
-       e: () => xW
+       e: () => fR,
+       f: () => wR
```

#### 3116. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22659` → after: `L22858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22858) · [Before (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22659)

```diff
-       return LW ? mW : cW ? EW : null
+       return qR ? yR : iR ? tR : null
```

#### 3117. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22686` → after: `L22885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22885) · [Before (L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22686)

```diff
-         values: [WW.lK, WW.zOW, mW, mW.pack, OW, OW.send, EW, EW.send, NW],
+         values: [RR.JC, RR.cyR, yR, yR.pack, GR, GR.send, tR, tR.send, uR],
```

#### 3118. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22718` → after: `L22917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22917) · [Before (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22718)

```diff
-   39615: (WW, iW, OW) => {
+   39594: (RR, JR, GR) => {
```

#### 3119. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22720-L22722` → after: `L22919-L22921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22919-L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22919-L22921) · [Before (L22720-L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22720-L22722)

```diff
-       d: () => NW,
-       g: () => LW,
-       h: () => cW
+       c: () => uR,
+       e: () => qR,
+       i: () => iR
```

#### 3120. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22724-L22725` → after: `L22923-L22924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22923-L22924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22923-L22924) · [Before (L22724-L22725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22724-L22725)

```diff
-     var mW = OW(37626),
-       EW = OW(2365);
+     var yR = GR(37537),
+       tR = GR(2435);
```

#### 3121. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22727` → after: `L22926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22926) · [Before (L22727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22727)

```diff
-     const PW = new mW.j((function() {
+     const ZR = new yR.k((function() {
```

#### 3122. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22729-L22730` → after: `L22928-L22929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22928-L22929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22928-L22929) · [Before (L22729-L22730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22729-L22730)

```diff
-           iW = (0, EW.h)().camera;
-         iW.iG = WW, iW.mG = WW
+           JR = (0, tR.i)().camera;
+         JR.W9 = RR, JR.N9 = RR
```

#### 3123. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22739` → after: `L22938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22938) · [Before (L22739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22739)

```diff
-   39037: (WW, iW, OW) => {
+   39017: (RR, JR, GR) => {
```

#### 3124. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22743` → after: `L22942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22942) · [Before (L22743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22743)

```diff
-     var mW = OW(38797);
+     var yR = GR(38800);
```

#### 3125. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22749` → after: `L22948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22948) · [Before (L22749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22749)

```diff
-   38888: (WW, iW, OW) => {
+   38875: (RR, JR, GR) => {
```

#### 3126. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22751-L22752` → after: `L22950-L22951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22950-L22951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22950-L22951) · [Before (L22751-L22752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22751-L22752)

```diff
-       b: () => LW,
-       e: () => wW
+       d: () => qR,
+       f: () => fR
```

#### 3127. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22755-L22756` → after: `L22954-L22955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22954-L22955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22954-L22955) · [Before (L22755-L22756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22755-L22756)

```diff
-       EW = OW(2365),
-       NW = OW(27);
+       tR = GR(2435),
+       uR = GR(32);
```

#### 3128. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22760` → after: `L22959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22959) · [Before (L22760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22760)

```diff
-       cW(WW.TZ)
+       iR(RR.lK)
```

#### 3129. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22764` → after: `L22963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22963) · [Before (L22764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22764)

```diff
-       WW && (WW.kcW = mW.d.get("clientEscMenuOptions").chunkFadeIn)
+       RR && (RR.ufR = yR.d.get("clientEscMenuOptions").chunkFadeIn)
```

#### 3130. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22768` → after: `L22967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22967) · [Before (L22768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22768)

```diff
-       WW.TZ.HcW(PW)
+       RR.lK.afR(ZR)
```

#### 3131. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22770` → after: `L22969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22969) · [Before (L22770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22770)

```diff
-     NW.l.subscribe("localPlayerTeleported", (WW => {
+     uR.n.subscribe("localPlayerTeleported", (RR => {
```

#### 3132. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22774-L22775` → after: `L22973-L22974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22973-L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22973-L22974) · [Before (L22774-L22775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22774-L22775)

```diff
-       iW || (0, EW.h)().TZ.HcW(1500)
-     })), NW.l.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+       JR || (0, tR.i)().lK.afR(1500)
+     })), uR.n.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 3133. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22777` → after: `L22976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22976) · [Before (L22777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22777)

```diff
-       cW(null === (WW = (0, EW.h)()) || void 0 === WW ? void 0 : WW.TZ)
+       iR(null === (RR = (0, tR.i)()) || void 0 === RR ? void 0 : RR.lK)
```

#### 3134. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22780` → after: `L22979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22979) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22780)

```diff
-   38789: (WW, iW, OW) => {
+   38796: (RR, JR, GR) => {
```

#### 3135. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22785-L22787` → after: `L22984-L22986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22984-L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22984-L22986) · [Before (L22785-L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22785-L22787)

```diff
-       e: () => EW,
-       h: () => mW,
-       i: () => NW
+       d: () => tR,
+       f: () => yR,
+       j: () => uR
```

#### 3136. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22795` → after: `L22994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22994) · [Before (L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22795)

```diff
-   38414: (WW, iW, OW) => {
+   38376: (RR, JR, GR) => {
```

#### 3137. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22798` → after: `L22997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22997) · [Before (L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22798)

```diff
-       g: () => NW
+       d: () => uR
```

#### 3138. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22800` → after: `L22999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22999) · [Before (L22800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22800)

```diff
-     var mW = OW(38419);
+     var yR = GR(38382);
```

#### 3139. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22814` → after: `L23013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23013) · [Before (L22814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22814)

```diff
-       WW.checkReadyOnlyOnce = !0, (0, mW.eb)(WW, !0)
+       RR.checkReadyOnlyOnce = !0, (0, yR.db)(RR, !0)
```

#### 3140. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22817` → after: `L23016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23016) · [Before (L22817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22817)

```diff
-   38866: (WW, iW, OW) => {
+   38853: (RR, JR, GR) => {
```

#### 3141. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22819-L22822` → after: `L23018-L23019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23018-L23019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23018-L23019) · [Before (L22819-L22822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22819-L22822)

```diff
-       b: () => Wi,
-       e: () => fW,
-       f: () => RW,
-       h: () => IW,
+       c: () => RJ,
+       g: () => mR,
```

#### 3142. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22824-L22825` → after: `L23021-L23024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23021-L23024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23021-L23024) · [Before (L22824-L22825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22824-L22825)

```diff
-       l: () => Ni,
-       r: () => ci,
+       j: () => kR,
+       k: () => sR,
+       o: () => uJ,
+       t: () => iJ,
```

#### 3143. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22828-L22832` → after: `L23027-L23031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23027-L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23027-L23031) · [Before (L22828-L22832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22828-L22832)

```diff
-     var mW = OW(3822),
-       EW = OW(2350),
-       NW = OW(38871),
-       PW = OW(182),
-       LW = OW(3891),
+     var yR = GR(3918),
+       tR = GR(2421),
+       uR = GR(38861),
+       ZR = GR(203),
+       qR = GR(3991),
```

#### 3144. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22834` → after: `L23033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23033) · [Before (L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22834)

```diff
-       wW = OW(38591);
+       fR = GR(38568);
```

#### 3145. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22883-L22901` → after: `L23082-L23100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23082-L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23082-L23100) · [Before (L22883-L22901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22883-L22901)

```diff
-     var ZW = OW(38879),
-       xW = OW(38895),
-       lW = OW(2478),
-       AW = OW(4655),
-       bW = OW(2365),
-       jW = OW(27),
-       UW = OW(38888),
-       kW = OW(643),
-       sW = OW(38862),
-       MW = OW(38911),
-       KW = OW(5427),
-       SW = OW(38891),
-       YW = OW(3870),
-       yW = OW(3884),
-       TW = OW(5725),
-       JW = OW(1303);
- ... (3 more removed lines; see GitHub link above)
+     var KR = GR(38866),
+       wR = GR(38887),
+       rR = GR(2532),
+       eR = GR(4763),
+       aR = GR(2435),
+       LR = GR(32),
+       nR = GR(38875),
+       UR = GR(679),
+       WR = GR(38851),
+       AR = GR(38902),
+       CR = GR(5554),
+       XR = GR(38884),
+       MR = GR(3965),
+       BR = GR(3982),
+       lR = GR(5844),
+       pR = GR(1406);
+ ... (3 more added lines; see GitHub link above)
```

#### 3146. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22904` → after: `L23103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23103) · [Before (L22904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22904)

```diff
-       return `${WW}|${iW}|${OW}`
+       return `${RR}|${JR}|${GR}`
```

#### 3147. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22910` → after: `L23109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23109) · [Before (L22910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22910)

```diff
-     var dW = OW(3876);
+     var NR = GR(3968);
```

#### 3148. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22916` → after: `L23115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23115) · [Before (L22916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22916)

```diff
-           tt: null,
+           eV: null,
```

#### 3149. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22918` → after: `L23117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23117) · [Before (L22918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22918)

```diff
-         }), eW[WW].blockArr = iW, eW[WW].tt = Date.now(), eW[WW].sharedBlockData = OW.length > 0 ? dW.d.deflate(JSON.stringify(OW)) : null
+         }), DR[RR].blockArr = JR, DR[RR].eV = Date.now(), DR[RR].sharedBlockData = GR.length > 0 ? NR.d.deflate(JSON.stringify(GR)) : null
```

#### 3150. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22920` → after: `L23119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23119) · [Before (L22920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22920)

```diff
-     jW.l.subscribe("changeBlockFail", (WW => {
+     LR.n.subscribe("changeBlockFail", (RR => {
```

#### 3151. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22922` → after: `L23121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23121) · [Before (L22922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22922)

```diff
-           Zi: iW
+           rJ: JR
```

#### 3152. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22925-L22926` → after: `L23124-L23125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23124-L23125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23124-L23125) · [Before (L22925-L22926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22925-L22926)

```diff
-         if (!(0, bW.d)().JR(iW[0], iW[1], iW[2])) {
-           const WW = `${(0,kW.$)(iW)}|${QW}`;
+         if (!(0, aR.e)().lT(JR[0], JR[1], JR[2])) {
+           const RR = `${(0,UR.cb)(JR)}|${hR}`;
```

#### 3153. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22933` → after: `L23132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23132) · [Before (L22933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22933)

```diff
-         this.blockMetadata = WW, this.itemMetadata = iW, this.getWorker = OW, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new tW((() => this.liveWorker())), this.busynessTracker = new wW.d(1)
+         this.blockMetadata = RR, this.itemMetadata = JR, this.getWorker = GR, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new VR((() => this.liveWorker())), this.busynessTracker = new fR.b(1)
```

#### 3154. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22943` → after: `L23142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23142) · [Before (L22943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22943)

```diff
-           jZ: PW.f.jZ,
+           LK: ZR.g.LK,
```

#### 3155. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22953` → after: `L23152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23152) · [Before (L22953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22953)

```diff
-         return null !== (WW = this.worker) && void 0 !== WW ? WW : this.startWorker()
+         return null !== (RR = this.worker) && void 0 !== RR ? RR : this.startWorker()
```

#### 3156. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22974` → after: `L23173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23173) · [Before (L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22974)

```diff
-             } = iW, EW = cW()(new Uint16Array(OW.data.buffer), [PW.f.jZ, PW.f.jZ, PW.f.jZ]);
+             } = JR, tR = iR()(new Uint16Array(GR.data.buffer), [ZR.g.LK, ZR.g.LK, ZR.g.LK]);
```

#### 3157. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23012-L23014` → after: `L23211-L23213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23211-L23213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23211-L23213) · [Before (L23012-L23014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23012-L23014)

```diff
-           wm: OW,
-           Zm: mW
-         }), this.generatorInitReqCounts.set(WW, (null !== (EW = this.generatorInitReqCounts.get(WW)) && void 0 !== EW ? EW : 0) + 1)
+           Zy: GR,
+           iy: yR
+         }), this.generatorInitReqCounts.set(RR, (null !== (tR = this.generatorInitReqCounts.get(RR)) && void 0 !== tR ? tR : 0) + 1)
```

#### 3158. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23018` → after: `L23217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23217) · [Before (L23018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23018)

```diff
-         const mW = (null !== (iW = this.generatorInitReqCounts.get(WW)) && void 0 !== iW ? iW : 0) - 1;
+         const yR = (null !== (JR = this.generatorInitReqCounts.get(RR)) && void 0 !== JR ? JR : 0) - 1;
```

#### 3159. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23027` → after: `L23226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23226) · [Before (L23027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23027)

```diff
-           cW = null !== (PW = this.waitingChunkCallbacks[LW]) && void 0 !== PW ? PW : [];
+           iR = null !== (ZR = this.waitingChunkCallbacks[qR]) && void 0 !== ZR ? ZR : [];
```

#### 3160. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23048-L23049` → after: `L23247-L23248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23247-L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23247-L23248) · [Before (L23048-L23049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23048-L23049)

```diff
-     }(null, null, (() => (0, ZW.b)()));
-     mW.b.setWorldgenStatsProvider((() => fW.getAndResetWorkerThroughputStats()));
+     }(null, null, (() => (0, KR.e)()));
+     yR.c.setWorldgenStatsProvider((() => mR.getAndResetWorkerThroughputStats()));
```

#### 3161. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23072` → after: `L23271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23271) · [Before (L23072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23072)

```diff
-             bm: Math.floor(WW) + 199
+             ey: Math.floor(RR) + 199
```

#### 3162. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23119` → after: `L23318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23318) · [Before (L23119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23119)

```diff
-         for (let NW = OW.y; NW <= OW.bm; NW++) {
+         for (let uR = GR.y; uR <= GR.ey; uR++) {
```

#### 3163. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23173` → after: `L23372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23372) · [Before (L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23173)

```diff
-       XW[WW.id] || (XW[WW.id] = []), XW[WW.id].push(WW), null === (iW = NW.d.chunkRequested) || void 0 === iW || iW.call(NW.d, WW.id)
+       SR[RR.id] || (SR[RR.id] = []), SR[RR.id].push(RR), null === (JR = uR.c.chunkRequested) || void 0 === JR || JR.call(uR.c, RR.id)
```

#### 3164. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23177` → after: `L23376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23376) · [Before (L23177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23177)

```diff
-       CW.clear(), pW = !1, DW = !1, fW.destroySeed(VW), VW = null, WW.oZ.dOW(), eW = {}, XW = {}
+       zR.clear(), IR = !1, cR = !1, mR.destroySeed(PR), PR = null, RR.NK.WyR(), DR = {}, SR = {}
```

#### 3165. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23181-L23182` → after: `L23380-L23381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23380-L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23380-L23381) · [Before (L23181-L23182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23181-L23182)

```diff
-       const iW = WW.oZ;
-       iW.POW.forEach((WW => {
+       const JR = RR.NK;
+       JR.kGR.forEach((RR => {
```

#### 3166. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23184-L23185` → after: `L23383-L23384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23383-L23384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23383-L23384) · [Before (L23184-L23185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23184-L23185)

```diff
-         iW.Pj.remove(OW, mW, EW)
-       })), iW.POW.empty(), iW.lwW = 0, XW = {}, eW = {}
+         JR.eL.remove(GR, yR, tR)
+       })), JR.kGR.empty(), JR.RVR = 0, SR = {}, DR = {}
```

#### 3167. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23194-L23195` → after: `L23393-L23394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23393-L23394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23393-L23394) · [Before (L23194-L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23194-L23195)

```diff
-       const [OW, mW, EW] = (0, xW.l)(iW), NW = PW.f.jZ;
-       BW = !0, WW.oZ.VOW(OW * NW, mW * NW, EW * NW), BW = !1, (0, bW.d)().removingChunk(OW, mW, EW, !1);
+       const [GR, yR, tR] = (0, wR.h)(JR), uR = ZR.g.LK;
+       jR = !0, RR.NK.ByR(GR * uR, yR * uR, tR * uR), jR = !1, (0, aR.e)().removingChunk(GR, yR, tR, !1);
```

#### 3168. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23197` → after: `L23396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23396) · [Before (L23197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23197)

```diff
-       delete eW[`${(0,xW.e)(OW,mW,EW)}|${LW}`]
+       delete DR[`${(0,wR.b)(GR,yR,tR)}|${qR}`]
```

#### 3169. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23202` → after: `L23401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23401) · [Before (L23202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23202)

```diff
-       (0, UW.e)(WW), WW.oZ.dOW(), GW(WW), rW.clear(), pW = !0
+       (0, nR.f)(RR), RR.NK.WyR(), YR(RR), FR.clear(), IR = !0
```

#### 3170. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23221` → after: `L23420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23420) · [Before (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23221)

```diff
-             Ni = WW ? `4 ${JSON.stringify(iW)} ${JSON.stringify(OW)}` : "4"
+             uJ = RR ? `4 ${JSON.stringify(JR)} ${JSON.stringify(GR)}` : "4"
```

#### 3171. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23226` → after: `L23425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23425) · [Before (L23226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23226)

```diff
-       }(WW), WW.RWW = QW, (0, EW.onColyMessage)(lW.Cc, (WW => {
+       }(RR), RR.OJR = hR, (0, tR.onColyMessage)(rR.sc, (RR => {
```

#### 3172. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23228-L23231` → after: `L23427-L23430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23427-L23430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23427-L23430) · [Before (L23228-L23231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23228-L23231)

```diff
-           ON: iW,
-           mN: OW,
-           EN: mW,
-           NN: EW
+           fu: JR,
+           Vu: GR,
+           Ku: yR,
+           wu: tR
```

#### 3173. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23239` → after: `L23438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23438) · [Before (L23239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23239)

```diff
-       })), (0, EW.onColyMessage)(lW.Xc, (iW => {
+       })), (0, tR.onColyMessage)(rR.Oc, (JR => {
```

#### 3174. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23241-L23244` → after: `L23440-L23443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23440-L23443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23440-L23443) · [Before (L23241-L23244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23241-L23244)

```diff
-           Pm: OW,
-           Lm: mW,
-           wm: EW,
-           Zm: NW
+           ty: GR,
+           uy: yR,
+           Zy: tR,
+           iy: uR
```

#### 3175. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23247` → after: `L23446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23446) · [Before (L23247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23247)

```diff
-       })), WW.oZ.BiW = 10, WW.oZ.on("worldDataNeeded", (function(iW, OW, mW, NW, LW, cW) {
+       })), RR.NK.OGR = 10, RR.NK.on("worldDataNeeded", (function(JR, GR, yR, uR, qR, iR) {
```

#### 3176. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23256` → after: `L23455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23455) · [Before (L23256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23256)

```diff
-           RWW: cW,
+           OJR: iR,
```

#### 3177. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23259-L23264` → after: `L23458-L23463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23458-L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23458-L23463) · [Before (L23259-L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23259-L23264)

```diff
-         }), (0, EW.sendColyMessage)(lW.Mh, {
-           wt: iW,
-           tt: eW[iW].tt,
-           Zt: null,
-           xt: wW,
-           lt: AW.g
+         }), (0, tR.sendColyMessage)(rR.bi, {
+           rV: JR,
+           eV: DR[JR].eV,
+           aV: null,
+           LV: fR,
+           nV: eR.g
```

#### 3178. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23275` → after: `L23474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23474) · [Before (L23275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23275)

```diff
-                 RWW: cW,
+                 OJR: iR,
```

#### 3179. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23278-L23283` → after: `L23477-L23482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23477-L23482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23477-L23482) · [Before (L23278-L23283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23278-L23283)

```diff
-               }), (0, EW.sendColyMessage)(lW.Mh, {
-                 wt: iW,
-                 tt: null,
-                 Zt: OW || null,
-                 xt: wW,
-                 lt: AW.g
+               }), (0, tR.sendColyMessage)(rR.bi, {
+                 rV: JR,
+                 eV: null,
+                 aV: GR || null,
+                 LV: fR,
+                 nV: eR.g
```

#### 3180. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23290` → after: `L23489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23489) · [Before (L23290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23290)

```diff
-             fW.threadedGetChunk(VW, null !== OW && void 0 !== OW ? OW : (0, yW.j)(PW.f.jZ), mW, NW, LW, ((WW, iW) => {
+             mR.threadedGetChunk(PR, null !== GR && void 0 !== GR ? GR : (0, BR.j)(ZR.g.LK), yR, uR, qR, ((RR, JR) => {
```

#### 3181. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23294` → after: `L23493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23493) · [Before (L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23294)

```diff
-             WW.nb("Error in worldgen", tW), console.error(tW.stack)
+             RR.Ia("Error in worldgen", VR), console.error(VR.stack)
```

#### 3182. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23302` → after: `L23501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23501) · [Before (L23302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23302)

```diff
-           RWW: cW,
+           OJR: iR,
```

#### 3183. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23305-L23310` → after: `L23504-L23509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23504-L23509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23504-L23509) · [Before (L23305-L23310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23305-L23310)

```diff
-         }), (0, EW.sendColyMessage)(lW.Mh, {
-           wt: iW,
-           tt: null,
-           Zt: null,
-           xt: wW,
-           lt: AW.g
+         }), (0, tR.sendColyMessage)(rR.bi, {
+           rV: JR,
+           eV: null,
+           aV: null,
+           LV: fR,
+           nV: eR.g
```

#### 3184. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23312` → after: `L23511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23511) · [Before (L23312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23312)

```diff
-       })), (0, EW.onColyMessage)(lW.Lb, (iW => {
+       })), (0, tR.onColyMessage)(rR.ub, (JR => {
```

#### 3185. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23315-L23322` → after: `L23514-L23521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23514-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23514-L23521) · [Before (L23315-L23322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23315-L23322)

```diff
-             const mW = XW[iW.FE].shift();
-             iW.FE !== mW.id && console.error("serverResp.chunkId !== noaRequest.id", iW.FE, mW.id);
-             0 === XW[iW.FE].length && delete XW[iW.FE];
-             const [EW, NW, LW] = (0, xW.l)(iW.FE);
-             if (iW.uW) {
-               YW.n.cancels++, aW(WW, iW.FE);
-               const OW = PW.f.jZ;
-               return void WW.oZ.ewW(EW * OW, NW * OW, LW * OW)
+             const yR = SR[JR.uu].shift();
+             JR.uu !== yR.id && console.error("serverResp.chunkId !== noaRequest.id", JR.uu, yR.id);
+             0 === SR[JR.uu].length && delete SR[JR.uu];
+             const [tR, uR, qR] = (0, wR.h)(JR.uu);
+             if (JR.xR) {
+               MR.l.cancels++, QR(RR, JR.uu);
+               const GR = ZR.g.LK;
+               return void RR.NK.XVR(tR * GR, uR * GR, qR * GR)
```

#### 3186. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23324` → after: `L23523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23523) · [Before (L23324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23324)

```diff
-             YW.n.replies++, mW.preloaded && iW.QE && CW.countReplaced();
+             MR.l.replies++, yR.preloaded && JR.Zu && zR.countReplaced();
```

#### 3187. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23326` → after: `L23525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23525) · [Before (L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23326)

```diff
-             if (iW.QE) {
+             if (JR.Zu) {
```

#### 3188. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23329` → after: `L23528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23528) · [Before (L23329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23329)

```diff
-                 EW = (0, YW.d)(WW, mW.array, iW)
+                 tR = (0, MR.e)(RR, yR.array, JR)
```

#### 3189. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23331` → after: `L23530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23530) · [Before (L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23331)

```diff
-                 return void OW(iW.FE, wW)
+                 return void GR(JR.uu, fR)
```

#### 3190. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23334` → after: `L23533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23533) · [Before (L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23334)

```diff
-               cW = (0, YW.j)(WW, iW.FE, EW, iW)
+               iR = (0, MR.k)(RR, JR.uu, tR, JR)
```

#### 3191. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23341-L23342` → after: `L23540-L23541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23540-L23541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23540-L23541) · [Before (L23341-L23342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23341-L23342)

```diff
-                 if (!EW) return void OW(iW.FE, wW);
-                 throw aW(WW, iW.FE), wW
+                 if (!tR) return void GR(JR.uu, fR);
+                 throw QR(RR, JR.uu), fR
```

#### 3192. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23345` → after: `L23544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23544) · [Before (L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23345)

```diff
-             cW && (rW.delete(iW.FE), (0, bW.d)().chunkAdded(EW, NW, LW, cW.El, cW.blockData))
+             iR && (FR.delete(JR.uu), (0, aR.e)().chunkAdded(tR, uR, qR, iR.Rr, iR.blockData))
```

#### 3193. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23348` → after: `L23547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23547) · [Before (L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23348)

```diff
-           console.error("err in processChunk func\n", mW.stack), WW.nb("Error in worldgen processChunk func", mW)
+           console.error("err in processChunk func\n", yR.stack), RR.Ia("Error in worldgen processChunk func", yR)
```

#### 3194. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23354-L23361` → after: `L23553-L23560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23553-L23560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23553-L23560) · [Before (L23354-L23361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23354-L23361)

```diff
-         if (WW.oZ.UwW(iW), !rW.has(iW)) throw rW.add(iW), OW
-       }
-       jW.l.subscribe(`otherEntitySettingsClientifiedEId|${WW.Dv}|_isAlive`, (OW => {
-         OW && !iW && WW.oZ.vwW(), iW = OW
-       })), WW.oZ.on("chunkBeingRemoved", (function(iW, OW, mW) {
-         const [EW, NW, PW] = (0, xW.l)(iW);
-         !BW && pW && gW(iW, WW.oZ.Pb.encode(OW), (0, bW.d)().blockDataOwner.getSharedBlockArr(EW, NW, PW)), (0, bW.d)().removingChunk(EW, NW, PW, !1)
-       })), (0, EW.onColyMessage)(lW.Y, (WW => {
+         if (RR.NK.tVR(JR), !FR.has(JR)) throw FR.add(JR), GR
+       }
+       LR.n.subscribe(`otherEntitySettingsClientifiedEId|${RR.WH}|_isAlive`, (GR => {
+         GR && !JR && RR.NK.BVR(), JR = GR
+       })), RR.NK.on("chunkBeingRemoved", (function(JR, GR, yR) {
+         const [tR, uR, ZR] = (0, wR.h)(JR);
+         !jR && IR && oR(JR, RR.NK.aa.encode(GR), (0, aR.e)().blockDataOwner.getSharedBlockArr(tR, uR, ZR)), (0, aR.e)().removingChunk(tR, uR, ZR, !1)
+       })), (0, tR.onColyMessage)(rR.N, (RR => {
```

#### 3195. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23363-L23364` → after: `L23562-L23563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23562-L23563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23562-L23563) · [Before (L23363-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23363-L23364)

```diff
-           Ri: iW,
-           qi: OW
+           jJ: JR,
+           SJ: GR
```

#### 3196. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23366` → after: `L23565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23565) · [Before (L23366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23366)

```diff
-         const mW = (0, bW.d)();
+         const yR = (0, aR.e)();
```

#### 3197. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23370-L23372` → after: `L23569-L23571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23569-L23571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23569-L23571) · [Before (L23370-L23372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23370-L23372)

```diff
-       })), (0, EW.onColyMessage)(lW.qe, (() => {
-         eW = {}, rW.clear(), (0, UW.e)(WW), BW = !0, WW.oZ.dOW(), BW = !1
-       })), (0, EW.onColyMessage)(lW.oe, (iW => {
+       })), (0, tR.onColyMessage)(rR.we, (() => {
+         DR = {}, FR.clear(), (0, nR.f)(RR), jR = !0, RR.NK.WyR(), jR = !1
+       })), (0, tR.onColyMessage)(rR.te, (JR => {
```

#### 3198. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23383` → after: `L23582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23582) · [Before (L23383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23383)

```diff
-       Ei = "pG";
+       tJ = "q_";
```

#### 3199. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23402-L23406` → after: `L23601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23601) · [Before (L23402-L23406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23402-L23406)

```diff
-     const ti = ["length", 0, 90, 3, 2, "a", 1, void 0, 176, "getPro", "pVal", "kojo63", "onb", "b", 5, !1, 214, !0, "d", "e", 1023, 220, 196, 65536, 10, 55296, 56320, 68, 6, 12, 63, 128, 47, "c", 57, 156, 192, "Invalid byte index", 255, 224, 52, 31, "Invalid continuation byte", 2 … [truncated]
- 
-     function Zi(...WW) {
-       if (WW[ti[0]] = ti[3], WW[ti[1]] === ti[56]) return WW[ti[6]] + WW[ti[4]]
-     }
+     const VJ = ["length", 0, 31, 3, "a", 2, 1, void 0, "getPro", "pVal", "kojo63", "onb", "d", !1, 8, 16, 4, "xeGhcY", 512, 155, "012345", 101, "b", 15, "c", "f", "e", 6, 1023, 63, 128, 12, 255, 205, 32, 5, 24, 7, 18, 10, 19, 64, 69, 65535, 239, 142, 13, 55296, 56319, 56320, 6553 … [truncated]
```

#### 3200. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23413-L23414` → after: `L23608-L23610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23608-L23610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23608-L23610) · [Before (L23413-L23414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23413-L23414)

```diff
-       li(WW[ti[0]] = ti[1], WW[-ti[2]] = ti[1], wi = (...iW) => {
-         if (li(iW[ti[0]] = ti[1], iW[-ti[8]] = "1|1|0"), WW[-ti[2]]++ === ti[3]) {
+       wJ(RR[VJ[0]] = VJ[1], RR[VJ[2]] = VJ[1], fJ = (...JR) => {
+         if (wJ(JR[VJ[0]] = VJ[1], JR[VJ[4]] = "1|1|0"), RR[VJ[2]]++ === VJ[3]) return wJ(RR[VJ[2]] = VJ[1], JR[VJ[4]] = VJ[12]), JR[VJ[4]];
+         if ((VJ[1], tR[VJ[8] + VJ[9]])(VJ[10] + VJ[11])) {
```

#### 3201. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23418-L23437` → after: `L23614-L23617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23614-L23617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23614-L23617) · [Before (L23418-L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23418-L23437)

```diff
-           return "ZEJ0TW" in xi && OW(), li(WW[-ti[2]] = ti[1], iW[-ti[8]] = ti[18]), iW[-ti[8]]
-         }
-         if ((ti[1], EW[ti[9] + ti[10]])(ti[11] + ti[12])) iW[-ti[8]] = (ti[1], EW[ti[9] + ti[10]])(ti[11] + ti[12]);
-         else if ((ti[1], EW[ti[9] + ti[10]])("iojfwe83j")) {
-           function mW(...WW) {
-             li(WW[ti[0]] = ti[1], WW[ti[5]] = function(...iW) {
-               return iW[ti[0]] = ti[4], WW[ti[6]]({}, iW[ti[1]], iW[ti[6]])
-             }, WW[ti[6]] = function(...iW) {
-               if (li(iW[ti[0]] = ti[3], iW[ti[5]] = {}), iW[ti[1]][iW[ti[6]] + iW[ti[4]]] !== ti[7]) return iW[ti[1]][iW[ti[6]] + iW[ti[4]]];
-               if (iW[ti[6]] === iW[ti[4]]) return ti[17];
-               for (iW[ti[13]] = ti[1]; iW[ti[13]] < iW[ti[6]].length; iW[ti[13]]++) iW[ti[5]][iW[ti[6]][iW[ti[13]]]] === ti[7] && (iW[ti[5]][iW[ti[6]][iW[ti[13]]]] = ti[1]), iW[ti[5]][iW[ti[4]][iW[ti[13]]]] === ti[7] && (iW[ti[5]][iW[ti[4]][iW[ti[13]]]] = ti[1]), li(iW[ti[5]][iW[ … [truncated]
-               for (iW[ti[14]] in iW[ti[5]])
-                 if (iW[ti[5]][iW[ti[14]]] !== ti[1]) return iW[ti[1]][iW[ti[6]] + iW[ti[4]]] = ti[15], ti[15];
-               for (iW[ti[16]] = ti[6]; iW[ti[16]] < iW[ti[6]].length; iW[ti[16]]++)
-                 if (WW[ti[6]](iW[ti[1]], iW[ti[6]].substr(ti[1], iW[ti[16]]), iW[ti[4]].substr(ti[1], iW[ti[16]])) && WW[ti[6]](iW[ti[1]], iW[ti[6]].substr(iW[ti[16]]), iW[ti[4]].substr(iW[ti[16]])) || WW[ti[6]](iW[ti[1]], iW[ti[6]].substr(ti[1], iW[ti[16]]), iW[ti[4]].substr(iW[ … [truncated]
-               return iW[ti[1]][iW[ti[6]] + iW[ti[4]]] = ti[15], ti[15]
- ... (4 more removed lines; see GitHub link above)
+           "JfUj_gI" in KJ && GR(), JR[VJ[4]] = (VJ[1], tR[VJ[8] + VJ[9]])(VJ[10] + VJ[11])
+         } else if ((VJ[1], tR[VJ[8] + VJ[9]])("iojfwe83j")) JR[VJ[4]] = "2";
+         else if ((VJ[1], WR[VJ[12]])((VJ[1], aR.i)())) JR[VJ[4]] = "3";
+         else if ((VJ[1], tR[VJ[8] + VJ[9]])("kpj")) {
```

#### 3202. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23439-L23441` → after: `L23619-L23651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23619-L23651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23619-L23651) · [Before (L23439-L23441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23439-L23441)

```diff
-             ! function(WW) {
-               var iW, OW, mW, EW = String.fromCharCode;
- 
+             function RR(...JR) {
+               if (JR[VJ[0]] = VJ[6], !JR[VJ[1]]) return -VJ[6];
+               const GR = RR(JR[VJ[1]].left),
+                 yR = RR(JR[VJ[1]].right),
+                 tR = Math.abs(GR - yR);
+               if (GR === 1 / 0 || yR === 1 / 0 || tR > VJ[6]) return 1 / 0;
+               return Math.max(GR, yR) + VJ[6]
+             }
+             window[VJ[67] + VJ[68] + VJ[69] + VJ[70]] = {
+               buildCharacterMap: function(...RR) {
+                 RR[VJ[0]] = VJ[6];
+                 const JR = {};
+                 for (let GR of RR[VJ[1]].replace(/[^w]/g, "").toLowerCase()) JR[GR] = JR[GR] + VJ[6] || VJ[6];
+                 return JR
+               },
+               isAnagrams: function(...RR) {
+ ... (17 more added lines; see GitHub link above)
```

#### 3203. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23443-L23444` → after: `L23653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23653) · [Before (L23443-L23444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23443-L23444)

```diff
-                 for (li(WW[ti[0]] = ti[6], WW[ti[5]] = [], WW[ti[13]] = ti[1], WW[ti[3]] = WW[ti[1]].length, WW[ti[18]] = ti[7], WW[ti[19]] = ti[7]); WW[ti[13]] < WW[ti[3]];) li(WW[ti[18]] = WW[ti[1]].charCodeAt(WW[ti[13]]++), WW[ti[18]] >= ti[25] && WW[ti[18]] <= ti[64] && WW[ti … [truncated]
-                 return WW[ti[5]]
+                 return RR[VJ[0]] = VJ[5], uR(yR(ZR(RR[VJ[1]]), ZR(RR[VJ[6]])))
```

#### 3204. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23447-L23448` → after: `L23656-L23667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23656-L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23656-L23667) · [Before (L23447-L23448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23447-L23448)

```diff
-               function PW(WW) {
-                 if (WW >= ti[25] && WW <= ti[65]) throw Error(ti[84] + ti[85] + ti[86] + WW.toString(ti[53]).toUpperCase() + (ti[87] + ti[88] + ti[89] + ti[90]))
+               function GR(RR, JR, GR) {
+                 return function(RR, JR) {
+                   var GR, yR, tR, uR, ZR, qR, iR, fR, VR = JR.length;
+                   for (GR = Array(), yR = Array(Math.ceil(RR.length / VJ[5])), ZR = VJ[1]; ZR < yR.length; ZR++) yR[ZR] = RR.charCodeAt(ZR * VJ[5]) << VJ[14] | RR.charCodeAt(ZR * VJ[5] + VJ[6]);
+                   for (; yR.length > VJ[1];) {
+                     for (wJ(fR = Array(), iR = VJ[1]), ZR = VJ[1]; ZR < yR.length; ZR++) wJ(iR = (iR << VJ[15]) + yR[ZR], qR = Math.floor(iR / VR), iR -= qR * VR), (fR.length > VJ[1] || qR > VJ[1]) && (fR[fR.length] = qR);
+                     wJ(GR[GR.length] = iR, yR = fR)
+                   }
+                   for (tR = "", ZR = GR.length - VJ[6]; ZR >= VJ[1]; ZR--) tR += JR.charAt(GR[ZR]);
+                   for (uR = Math.ceil(RR.length * VJ[14] / (Math.log(JR.length) / Math.log(VJ[5]))), ZR = tR.length; ZR < uR; ZR++) tR = JR[VJ[1]] + tR;
+                   return tR
+                 }(yR(ZR(RR), ZR(JR)), GR)
```

#### 3205. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23452` → after: `L23671-L23677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23671-L23677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23671-L23677) · [Before (L23452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23452)

```diff
-                 return WW[ti[0]] = ti[4], EW(WW[ti[1]] >> WW[ti[6]] & ti[30] | ti[31])
+                 wJ(RR[VJ[0]] = VJ[5], RR[VJ[5]] = qR(RR[VJ[1]])), RR[VJ[5]].length > VJ[15] && (RR[VJ[5]] = nR(RR[VJ[5]], RR[VJ[1]].length * VJ[14]));
+                 var JR = Array(VJ[15]),
+                   GR = Array(VJ[15]);
+                 for (RR[VJ[3]] = VJ[1]; RR[VJ[3]] < VJ[15]; RR[VJ[3]]++) wJ(JR[RR[VJ[3]]] = 909522486 ^ RR[VJ[5]][RR[VJ[3]]], GR[RR[VJ[3]]] = 1549556828 ^ RR[VJ[5]][RR[VJ[3]]]);
+                 return RR[VJ[16]] = nR(JR.concat(qR(RR[VJ[6]])), VJ[18] + RR[VJ[6]].length * VJ[14]), iR(nR(GR.concat(RR[VJ[16]]), function(...RR) {
+                   if (RR[VJ[0]] = VJ[3], RR[VJ[1]] === VJ[17]) return RR[VJ[6]] + RR[VJ[5]]
+                 }(VJ[17], VJ[18], VJ[72])))
```

#### 3206. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23456` → after: `L23681-L23688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23681-L23688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23681-L23688) · [Before (L23456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23456)

```diff
-                 return WW[ti[0]] = ti[6], (WW[ti[1]] & ti[91]) == ti[1] ? EW(WW[ti[1]]) : (WW[ti[27]] = "", (WW[ti[1]] & ti[92]) == ti[1] ? WW[ti[27]] = EW(WW[ti[1]] >> ti[28] & ti[41] | ti[36]) : (WW[ti[1]] & ti[93]) == ti[1] ? li(PW(WW[ti[1]]), WW[ti[27]] = EW(WW[ti[1]] >> ti[2 … [truncated]
+                 JR[VJ[0]] = VJ[6];
+                 try {
+                   RR[-VJ[19]]
+                 } catch (GR) {
+                   RR[-VJ[19]] = VJ[1]
+                 }
+                 for (wJ(JR[VJ[6]] = RR[-VJ[19]] ? VJ[20] + "6789ABCDEF" : VJ[20] + "6789abcdef", JR[VJ[22]] = "", JR[VJ[21]] = VJ[7]), JR[VJ[12]] = VJ[1]; JR[VJ[12]] < JR[VJ[1]].length; JR[VJ[12]]++) wJ(JR[VJ[21]] = JR[VJ[1]].charCodeAt(JR[VJ[12]]), JR[VJ[22]] += JR[VJ[6]].charAt … [truncated]
+                 return JR[VJ[22]]
```

#### 3207. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23460-L23462` → after: `L23692-L23706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23692-L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23692-L23706) · [Before (L23460-L23462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23460-L23462)

```diff
-                 if (WW[ti[0]] = ti[1], mW >= OW) throw Error(ti[37]);
-                 if (li(WW[ti[35]] = iW[mW] & ti[38], mW++), (WW[ti[35]] & ti[36]) == ti[31]) return WW[ti[35]] & ti[30];
-                 throw Error(ti[42])
+                 JR[VJ[0]] = VJ[6];
+                 try {
+                   RR[VJ[6]]
+                 } catch (GR) {
+                   RR[VJ[6]] = ""
+                 }
+                 for (wJ(JR[VJ[6]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + VJ[77], JR[VJ[22]] = "", JR[VJ[24]] = JR[VJ[1]].length), JR[VJ[12]] = VJ[1]; JR[VJ[12]] < JR[VJ[24]]; JR[VJ[12]] += VJ[3])
+                   for (JR[VJ[26]] = JR[VJ[1]].charCodeAt(JR[VJ[12]]) << VJ[15] | (JR[VJ[12]] + VJ[6] < JR[VJ[24]] ? JR[VJ[1]].charCodeAt(JR[VJ[12]] + VJ[6]) << VJ[14] : VJ[1]) | (JR[VJ[12]] + VJ[5] < JR[VJ[24]] ? JR[VJ[1]].charCodeAt(JR[VJ[12]] + VJ[5]) : VJ[1]), JR[VJ[25]] = VJ[ … [truncated]
+                 return JR[VJ[22]]
+               }
+ 
+               function ZR(RR) {
+                 var JR, GR, yR, tR = "";
+                 for (JR = -VJ[6]; ++JR < RR.length;) wJ(GR = RR.charCodeAt(JR), yR = JR + VJ[6] < RR.length ? RR.charCodeAt(JR + VJ[6]) : VJ[1]), VJ[47] <= GR && GR <= VJ[48] && VJ[49] <= yR && yR <= VJ[52] && wJ(GR = VJ[50] + ((GR & VJ[28]) << VJ[39]) + (yR & VJ[28]), JR++), GR  … [truncated]
+                 return tR
```

#### 3208. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23466-L23478` → after: `L23710-L23712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23710-L23712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23710-L23712) · [Before (L23466-L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23466-L23478)

```diff
-                 if (li(WW[ti[0]] = ti[1], WW[ti[13]] = ti[7], WW[ti[33]] = ti[7], WW[ti[4]] = ti[7], WW[ti[19]] = ti[7], WW[-ti[40]] = ti[7]), mW > OW) throw Error(ti[37]);
-                 if (mW == OW) return ti[15];
-                 if (li(WW[ti[13]] = iW[mW] & ti[38], mW++), (WW[ti[13]] & ti[31]) == ti[1]) return WW[ti[13]];
-                 if ((WW[ti[13]] & ti[39]) == ti[36]) {
-                   if (li(WW[ti[33]] = wW(), WW[-ti[40]] = (WW[ti[13]] & ti[41]) << ti[28] | WW[ti[33]]), WW[-ti[40]] >= ti[31]) return WW[-ti[40]];
-                   throw Error(ti[42])
-                 }
-                 if ((WW[ti[13]] & ti[43]) == ti[39]) {
-                   if (li(WW[ti[33]] = wW(), WW[ti[4]] = wW(), WW[-ti[40]] = (WW[ti[13]] & ti[44]) << ti[29] | WW[ti[33]] << ti[28] | WW[ti[4]]), WW[-ti[40]] >= ti[96]) return PW(WW[-ti[40]]), WW[-ti[40]];
-                   throw Error(ti[42])
-                 }
-                 if ((WW[ti[13]] & ti[97]) == ti[43] && (li(WW[ti[33]] = wW(), WW[ti[4]] = wW(), WW[ti[19]] = wW(), WW[-ti[40]] = (WW[ti[13]] & ti[45]) << ti[46] | WW[ti[33]] << ti[29] | WW[ti[4]] << ti[28] | WW[ti[19]]), WW[-ti[40]] >= ti[23] && WW[-ti[40]] <= ti[98])) return WW[ … [truncated]
-                 throw Error(ti[99])
+                 for (wJ(RR[VJ[0]] = VJ[6], RR[-VJ[33]] = Array(RR[VJ[1]].length >> VJ[5])), RR[VJ[5]] = VJ[1]; RR[VJ[5]] < RR[-VJ[33]].length; RR[VJ[5]]++) RR[-VJ[33]][RR[VJ[5]]] = VJ[1];
+                 for (RR[VJ[5]] = VJ[1]; RR[VJ[5]] < RR[VJ[1]].length * VJ[14]; RR[VJ[5]] += VJ[14]) RR[-VJ[33]][RR[VJ[5]] >> VJ[35]] |= (RR[VJ[1]].charCodeAt(RR[VJ[5]] / VJ[14]) & VJ[32]) << VJ[36] - RR[VJ[5]] % VJ[34];
+                 return RR[-VJ[33]]
```

#### 3209. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23480-L23515` → after: `L23714-L23717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23714-L23717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23714-L23717) · [Before (L23480-L23515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23480-L23515)

```diff
-               li(iW = void 0, OW = void 0, mW = void 0), li(WW.version = ti[100], WW.encode = function(...WW) {
-                 for (li(WW[ti[0]] = ti[6], WW[ti[32]] = NW(WW[ti[1]]), WW[ti[4]] = WW[ti[32]].length, WW[ti[33]] = -ti[6], WW[ti[34]] = ti[7], WW[-ti[24]] = ""); ++WW[ti[33]] < WW[ti[4]];) li(WW[ti[34]] = WW[ti[32]][WW[ti[33]]], WW[-ti[24]] += cW(WW[ti[34]]));
-                 return WW[-ti[24]]
-               }, WW.decode = function(...WW) {
-                 for (li(WW[ti[0]] = ti[6], iW = NW(WW[ti[1]]), OW = iW.length, mW = ti[1], WW[-ti[47]] = [], WW[ti[21]] = ti[7]);
-                   (WW[ti[21]] = tW()) !== ti[15];) WW[-ti[47]].push(WW[ti[21]]);
-                 return function(...WW) {
-                   for (li(WW[ti[0]] = ti[6], WW[ti[5]] = WW[ti[1]].length, WW[ti[21]] = -ti[6], WW[ti[22]] = ti[7], WW[ti[18]] = ""); ++WW[ti[21]] < WW[ti[5]];) WW[ti[22]] = WW[ti[1]][WW[ti[21]]], WW[ti[22]] > ti[67] && li(WW[ti[22]] -= ti[23], WW[ti[18]] += EW(WW[ti[22]] >>> ti[ … [truncated]
-                   return WW[ti[18]]
-                 }(WW[-ti[47]])
-               })
-             }(typeof exports === ti[101] + ti[102] ? this.utf8 = {} : exports)
-           }
-           "jATIvv" in xi && NW(), iW[-ti[8]] = "3"
-         } else if ((ti[1], EW[ti[9] + ti[10]])("kpj")) {
-           function PW(...WW) {
- ... (20 more removed lines; see GitHub link above)
+ 
+               function iR(...RR) {
+                 for (wJ(RR[VJ[0]] = VJ[6], RR[VJ[4]] = ""), RR[VJ[5]] = VJ[1]; RR[VJ[5]] < RR[VJ[1]].length * VJ[34]; RR[VJ[5]] += VJ[14]) RR[VJ[4]] += String.fromCharCode(RR[VJ[1]][RR[VJ[5]] >> VJ[35]] >>> VJ[36] - RR[VJ[5]] % VJ[34] & VJ[32]);
+                 return RR[VJ[4]]
```

#### 3210. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23517-L23529` → after: `L23719-L23721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23719-L23721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23719-L23721) · [Before (L23517-L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23517-L23529)

```diff
-               static generate(...WW) {
-                 WW[ti[0]] = ti[6];
-                 const OW = iW(ti[78]);
-                 let mW, EW;
-                 WW[-ti[52]] = ti[7];
-                 do {
-                   li(mW = this.randomPrime(WW[ti[1]] / ti[4]), EW = this.randomPrime(WW[ti[1]] / ti[4]), WW[-ti[52]] = iW.lcm(mW.prev(), EW.prev()))
-                 } while (iW.gcd(OW, WW[-ti[52]]).notEquals(ti[6]) || mW.minus(EW).abs().shiftRight(WW[ti[1]] / ti[4] - ti[79]).isZero());
-                 return {
-                   e: OW,
-                   n: mW.multiply(EW),
-                   d: OW.modInv(WW[-ti[52]])
-                 }
+ 
+               function fR(...RR) {
+                 return RR[VJ[0]] = VJ[5], RR[VJ[1]] >>> RR[VJ[6]] | RR[VJ[1]] << VJ[34] - RR[VJ[6]]
```

#### 3211. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23531-L23532` → after: `L23723-L23725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23723-L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23723-L23725) · [Before (L23531-L23532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23531-L23532)

```diff
-               static encrypt(...WW) {
-                 return WW[ti[0]] = ti[3], iW(WW[ti[1]]).modPow(WW[ti[4]], WW[ti[6]])
+ 
+               function VR(...RR) {
+                 return RR[VJ[0]] = VJ[5], RR[VJ[1]] >>> RR[VJ[6]]
```

#### 3212. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23534-L23535` → after: `L23727-L23729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23727-L23729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23727-L23729) · [Before (L23534-L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23534-L23535)

```diff
-               static decrypt(...WW) {
-                 return WW[ti[0]] = ti[3], iW(WW[ti[1]]).modPow(WW[ti[6]], WW[ti[4]])
+ 
+               function KR(...RR) {
+                 return RR[VJ[0]] = VJ[3], RR[VJ[1]] & RR[VJ[6]] ^ ~RR[VJ[1]] & RR[VJ[5]]
```

#### 3213. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23537-L23540` → after: `L23731-L23733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23731-L23733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23731-L23733) · [Before (L23537-L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23537-L23540)

```diff
-               static encode(...WW) {
-                 WW[ti[0]] = ti[6];
-                 const OW = WW[ti[1]].split("").map((WW => WW.charCodeAt())).join("");
-                 return iW(OW)
+ 
+               function wR(...RR) {
+                 return RR[VJ[0]] = VJ[3], RR[VJ[1]] & RR[VJ[6]] ^ RR[VJ[1]] & RR[VJ[5]] ^ RR[VJ[6]] & RR[VJ[5]]
```

#### 3214. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23542-L23549` → after: `L23735-L23737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23735-L23737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23735-L23737) · [Before (L23542-L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23542-L23549)

```diff
-               static decode(WW) {
-                 const iW = WW.toString();
-                 let OW = "";
-                 for (let mW = ti[1]; mW < iW.length; mW += ti[4]) {
-                   let WW = Number(iW.substr(mW, ti[4]));
-                   WW <= ti[80] ? (OW += String.fromCharCode(Number(iW.substr(mW, ti[3]))), mW++) : OW += String.fromCharCode(WW)
-                 }
-                 return OW
+ 
+               function rR(...RR) {
+                 return RR[VJ[0]] = VJ[6], fR(RR[VJ[1]], VJ[5]) ^ fR(RR[VJ[1]], VJ[46]) ^ fR(RR[VJ[1]], VJ[97])
```

#### 3215. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23551-L23572` → after: `L23739-L23741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23739-L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23739-L23741) · [Before (L23551-L23572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23551-L23572)

```diff
-             }, module.exports = WW[ti[5]])
-           }
-           "ojbvT3" in xi && LW(), iW[-ti[8]] = ti[77]
-         } else if (atob.toString().includes("native"))
-           if (Object.getOwnPropertyDescriptor(window, "atob").get !== ti[7]) iW[-ti[8]] = ti[62];
-           else if ((ti[1], EW[ti[9] + ti[10]])("y4ynb")) {
-           function cW(...WW) {
-             WW[ti[0]] = ti[1]
-           }
-           "psziq3" + ti[77] in xi && cW(), iW[-ti[8]] = "p"
-         } else if ((ti[1], EW[ti[9] + ti[10]])("y4ynl")) {
-           function wW() {
-             const WW = require("big-integer");
-             module.exports = class {
-               static randomPrime(...iW) {
-                 iW[ti[0]] = ti[6];
- ... (6 more removed lines; see GitHub link above)
+ 
+               function eR(...RR) {
+                 return RR[VJ[0]] = VJ[6], fR(RR[VJ[1]], VJ[27]) ^ fR(RR[VJ[1]], VJ[81]) ^ fR(RR[VJ[1]], 25)
```

#### 3216. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23574-L23586` → after: `L23743-L23745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23743-L23745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23743-L23745) · [Before (L23574-L23586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23574-L23586)

```diff
-               static generate(...iW) {
-                 iW[ti[0]] = ti[6];
-                 const OW = WW(ti[78]);
-                 let mW, EW;
-                 iW[ti[5]] = ti[7];
-                 do {
-                   li(mW = this.randomPrime(iW[ti[1]] / ti[4]), EW = this.randomPrime(iW[ti[1]] / ti[4]), iW[ti[5]] = WW.lcm(mW.prev(), EW.prev()))
-                 } while (WW.gcd(OW, iW[ti[5]]).notEquals(ti[6]) || mW.minus(EW).abs().shiftRight(iW[ti[1]] / ti[4] - ti[79]).isZero());
-                 return {
-                   e: OW,
-                   n: mW.multiply(EW),
-                   d: OW.modInv(iW[ti[5]])
-                 }
+ 
+               function aR(RR) {
+                 return fR(RR, VJ[37]) ^ fR(RR, VJ[38]) ^ VR(RR, VJ[3])
```

#### 3217. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23588-L23589` → after: `L23747-L23749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23747-L23749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23747-L23749) · [Before (L23588-L23589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23588-L23589)

```diff
-               static encrypt(...iW) {
-                 return iW[ti[0]] = ti[3], WW(iW[ti[1]]).modPow(iW[ti[4]], iW[ti[6]])
+ 
+               function LR(...RR) {
+                 return RR[VJ[0]] = VJ[6], fR(RR[VJ[1]], 17) ^ fR(RR[VJ[1]], VJ[40]) ^ VR(RR[VJ[1]], VJ[39])
```

#### 3218. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23591-L23592` → after: `L23751-L23758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23751-L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23751-L23758) · [Before (L23591-L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23591-L23592)

```diff
-               static decrypt(...iW) {
-                 return iW[ti[0]] = ti[3], WW(iW[ti[1]]).modPow(iW[ti[6]], iW[ti[4]])
+ 
+               function nR(...JR) {
+                 var GR, yR, tR, uR, ZR, qR, iR, fR, VR, nR, WR, AR;
+                 for (wJ(JR[VJ[0]] = VJ[5], JR[VJ[42]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), JR[VJ[3]] = new Array(VJ[41])), wJ(JR[VJ[1]][JR[VJ[6]] >> VJ[35]] |= VJ[30] << VJ[36] - JR[VJ[6]] % VJ[34], JR[VJ[1 … [truncated]
+                   for (wJ(GR = JR[VJ[42]][VJ[1]], yR = JR[VJ[42]][VJ[6]], tR = JR[VJ[42]][VJ[5]], uR = JR[VJ[42]][VJ[3]], ZR = JR[VJ[42]][VJ[16]], qR = JR[VJ[42]][VJ[35]], iR = JR[VJ[42]][VJ[27]], fR = JR[VJ[42]][VJ[37]]), nR = VJ[1]; nR < VJ[41]; nR++) wJ(nR < VJ[15] ? JR[VJ[3]] … [truncated]
+                   wJ(JR[VJ[42]][VJ[1]] = UR(GR, JR[VJ[42]][VJ[1]]), JR[VJ[42]][VJ[6]] = UR(yR, JR[VJ[42]][VJ[6]]), JR[VJ[42]][VJ[5]] = UR(tR, JR[VJ[42]][VJ[5]]), JR[VJ[42]][VJ[3]] = UR(uR, JR[VJ[42]][VJ[3]]), JR[VJ[42]][VJ[16]] = UR(ZR, JR[VJ[42]][VJ[16]]), JR[VJ[42]][VJ[35]] = U … [truncated]
+                 }
+                 return JR[VJ[42]]
```

#### 3219. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23594-L23597` → after: `L23760-L23762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23760-L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23760-L23762) · [Before (L23594-L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23594-L23597)

```diff
-               static encode(...iW) {
-                 iW[ti[0]] = ti[6];
-                 const OW = iW[ti[1]].split("").map((WW => WW.charCodeAt())).join("");
-                 return WW(OW)
+ 
+               function UR(...RR) {
+                 return wJ(RR[VJ[0]] = VJ[5], RR[VJ[44]] = (RR[VJ[1]] & VJ[43]) + (RR[VJ[6]] & VJ[43]), RR[VJ[3]] = (RR[VJ[1]] >> VJ[15]) + (RR[VJ[6]] >> VJ[15]) + (RR[VJ[44]] >> VJ[15])), RR[VJ[3]] << VJ[15] | RR[VJ[44]] & VJ[43]
```

#### 3220. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23599-L23606` → after: `L23764-L23776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23764-L23776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23764-L23776) · [Before (L23599-L23606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23599-L23606)

```diff
-               static decode(WW) {
-                 const iW = WW.toString();
-                 let OW = "";
-                 for (let mW = ti[1]; mW < iW.length; mW += ti[4]) {
-                   let WW = Number(iW.substr(mW, ti[4]));
-                   WW <= ti[80] ? (OW += String.fromCharCode(Number(iW.substr(mW, ti[3]))), mW++) : OW += String.fromCharCode(WW)
-                 }
-                 return OW
+               return wJ(RR[VJ[0]] = VJ[1], RR[-VJ[19]] = VJ[1], RR[VJ[6]] = ""), RR[VJ[5]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079 … [truncated]
+                 hex: function(...RR) {
+                   return RR[VJ[0]] = VJ[6], tR(function(...RR) {
+                     return RR[VJ[0]] = VJ[6], iR(nR(qR(RR[VJ[1]]), RR[VJ[1]].length * VJ[14]))
+                   }(ZR(RR[VJ[1]])))
+                 },
+                 b64: JR,
+                 any: GR,
+                 hex_hmac: function(...RR) {
+                   return RR[VJ[0]] = VJ[5], tR(yR(ZR(RR[VJ[1]]), ZR(RR[VJ[6]])))
+                 },
+                 b64_hmac: JR,
+                 any_hmac: GR
```

#### 3221. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23608` → after: `L23778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23778) · [Before (L23608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23608)

```diff
-             }
+             }(), console.log(RR[VJ[45]]))
```

#### 3222. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23610-L23611` → after: `L23780-L23781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23780-L23781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23780-L23781) · [Before (L23610-L23611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23610-L23611)

```diff
-           "z5PFPs" in xi && wW(), iW[-ti[8]] = "o"
-         } else if ((ti[1], EW[ti[9] + ti[10]])("y4yns")) {
+           "dV_lFD" in KJ && uR(), JR[VJ[4]] = "5"
+         } else {
```

#### 3223. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23613` → after: `L23783-L23785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23783-L23785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23783-L23785) · [Before (L23613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23613)

```diff
-             ! function(...WW) {
+             ! function(RR) {
+               var JR, GR, yR, tR = String.fromCharCode;
+ 
```

#### 3224. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23615` → after: `L23787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23787) · [Before (L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23615)

```diff
-                 for (li(WW[ti[0]] = ti[6], WW[ti[6]] = [], WW[ti[4]] = ti[1], WW[-ti[81]] = WW[ti[1]].length, WW[ti[49]] = ti[7], WW[ti[19]] = ti[7]); WW[ti[4]] < WW[-ti[81]];) li(WW[ti[49]] = WW[ti[1]].charCodeAt(WW[ti[4]]++), WW[ti[49]] >= ti[25] && WW[ti[49]] <= ti[64] && WW[t … [truncated]
+                 for (wJ(RR[VJ[0]] = VJ[6], RR[VJ[6]] = [], RR[VJ[5]] = VJ[1], RR[-VJ[46]] = RR[VJ[1]].length, RR[VJ[12]] = VJ[7], RR[VJ[26]] = VJ[7]); RR[VJ[5]] < RR[-VJ[46]];) wJ(RR[VJ[12]] = RR[VJ[1]].charCodeAt(RR[VJ[5]]++), RR[VJ[12]] >= VJ[47] && RR[VJ[12]] <= VJ[48] && RR[V … [truncated]
```

#### 3225. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23620` → after: `L23792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23792) · [Before (L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23620)

```diff
-                 if (WW[ti[0]] = ti[6], WW[ti[1]] >= ti[25] && WW[ti[1]] <= ti[65]) throw Error(ti[84] + ti[85] + ti[86] + WW[ti[1]].toString(ti[53]).toUpperCase() + (ti[87] + ti[88] + ti[89] + ti[90]))
+                 if (RR[VJ[0]] = VJ[6], RR[VJ[1]] >= VJ[47] && RR[VJ[1]] <= VJ[52]) throw Error("Lone surrogate U+" + RR[VJ[1]].toString(VJ[15]).toUpperCase() + " is not a scalar value")
```

#### 3226. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23624` → after: `L23796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23796) · [Before (L23624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23624)

```diff
-                 return iW[ti[0]] = ti[4], WW[ti[6]](iW[ti[1]] >> iW[ti[6]] & ti[30] | ti[31])
+                 return RR[VJ[0]] = VJ[5], tR(RR[VJ[1]] >> RR[VJ[6]] & VJ[29] | VJ[30])
```

#### 3227. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23628` → after: `L23800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23800) · [Before (L23628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23628)

```diff
-                 return iW[ti[0]] = ti[6], (iW[ti[1]] & ti[91]) == ti[1] ? WW[ti[6]](iW[ti[1]]) : (iW[ti[6]] = "", (iW[ti[1]] & ti[92]) == ti[1] ? iW[ti[6]] = WW[ti[6]](iW[ti[1]] >> ti[28] & ti[41] | ti[36]) : (iW[ti[1]] & ti[93]) == ti[1] ? li(OW(iW[ti[1]]), iW[ti[6]] = WW[ti[6]] … [truncated]
+                 return RR[VJ[0]] = VJ[6], (4294967168 & RR[VJ[1]]) == VJ[1] ? tR(RR[VJ[1]]) : (RR[VJ[6]] = "", (4294965248 & RR[VJ[1]]) == VJ[1] ? RR[VJ[6]] = tR(RR[VJ[1]] >> VJ[27] & VJ[2] | VJ[53]) : (4294901760 & RR[VJ[1]]) == VJ[1] ? wJ(ZR(RR[VJ[1]]), RR[VJ[6]] = tR(RR[VJ[1]] … [truncated]
```

#### 3228. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23632-L23634` → after: `L23804-L23806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23804-L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23804-L23806) · [Before (L23632-L23634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23632-L23634)

```diff
-                 if (iW[ti[0]] = ti[1], WW[ti[59]] >= WW[ti[3]]) throw Error(ti[37]);
-                 if (li(iW[ti[95]] = WW[ti[18]][WW[ti[59]]] & ti[38], WW[ti[59]]++), (iW[ti[95]] & ti[36]) == ti[31]) return iW[ti[95]] & ti[30];
-                 throw Error(ti[42])
+                 if (RR[VJ[0]] = VJ[1], yR >= GR) throw Error(VJ[56]);
+                 if (wJ(RR[VJ[4]] = JR[yR] & VJ[32], yR++), (RR[VJ[4]] & VJ[53]) == VJ[30]) return RR[VJ[4]] & VJ[29];
+                 throw Error(VJ[57])
```

#### 3229. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23637-L23644` → after: `L23809-L23815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23809-L23815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23809-L23815) · [Before (L23637-L23644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23637-L23644)

```diff
-               function PW() {
-                 var iW, mW, EW, PW, LW;
-                 if (li(mW = void 0, EW = void 0, PW = void 0, LW = void 0), WW[ti[59]] > WW[ti[3]]) throw Error(ti[37]);
-                 if (WW[ti[59]] == WW[ti[3]]) return ti[15];
-                 if (li(iW = WW[ti[18]][WW[ti[59]]] & ti[38], WW[ti[59]]++), (iW & ti[31]) == ti[1]) return iW;
-                 if ((iW & ti[39]) == ti[36]) {
-                   if (li(mW = NW(), LW = (iW & ti[41]) << ti[28] | mW), LW >= ti[31]) return LW;
-                   throw Error(ti[42])
+               function VR(...RR) {
+                 if (wJ(RR[VJ[0]] = VJ[1], RR[VJ[4]] = VJ[7], RR[VJ[22]] = VJ[7], RR[-VJ[58]] = VJ[7], RR[VJ[12]] = VJ[7], RR[VJ[26]] = VJ[7]), yR > GR) throw Error(VJ[56]);
+                 if (yR == GR) return VJ[13];
+                 if (wJ(RR[VJ[4]] = JR[yR] & VJ[32], yR++), (RR[VJ[4]] & VJ[30]) == VJ[1]) return RR[VJ[4]];
+                 if ((RR[VJ[4]] & VJ[54]) == VJ[53]) {
+                   if (wJ(RR[VJ[22]] = fR(), RR[VJ[26]] = (RR[VJ[4]] & VJ[2]) << VJ[27] | RR[VJ[22]]), RR[VJ[26]] >= VJ[30]) return RR[VJ[26]];
+                   throw Error(VJ[57])
```

#### 3230. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23646-L23648` → after: `L23817-L23819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23817-L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23817-L23819) · [Before (L23646-L23648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23646-L23648)

```diff
-                 if ((iW & ti[43]) == ti[39]) {
-                   if (li(mW = NW(), EW = NW(), LW = (iW & ti[44]) << ti[29] | mW << ti[28] | EW), LW >= ti[96]) return OW(LW), LW;
-                   throw Error(ti[42])
+                 if ((RR[VJ[4]] & VJ[55]) == VJ[54]) {
+                   if (wJ(RR[VJ[22]] = fR(), RR[-VJ[58]] = fR(), RR[VJ[26]] = (RR[VJ[4]] & VJ[23]) << VJ[31] | RR[VJ[22]] << VJ[27] | RR[-VJ[58]]), RR[VJ[26]] >= 2048) return ZR(RR[VJ[26]]), RR[VJ[26]];
+                   throw Error(VJ[57])
```

#### 3231. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23650-L23651` → after: `L23821-L23822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23821-L23822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23821-L23822) · [Before (L23650-L23651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23650-L23651)

```diff
-                 if ((iW & ti[97]) == ti[43] && (li(mW = NW(), EW = NW(), PW = NW(), LW = (iW & ti[45]) << ti[46] | mW << ti[29] | EW << ti[28] | PW), LW >= ti[23] && LW <= ti[98])) return LW;
-                 throw Error(ti[99])
+                 if ((248 & RR[VJ[4]]) == VJ[55] && (wJ(RR[VJ[22]] = fR(), RR[-VJ[58]] = fR(), RR[VJ[12]] = fR(), RR[VJ[26]] = (RR[VJ[4]] & VJ[37]) << VJ[38] | RR[VJ[22]] << VJ[31] | RR[-VJ[58]] << VJ[27] | RR[VJ[12]]), RR[VJ[26]] >= VJ[50] && RR[VJ[26]] <= 1114111)) return RR[VJ[ … [truncated]
+                 throw Error("Invalid UTF-8 detected")
```

#### 3232. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23653` → after: `L23824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23824) · [Before (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23653)

```diff
-               li(WW[ti[0]] = ti[6], WW[ti[6]] = String.fromCharCode), li(WW[ti[18]] = ti[7], WW[ti[3]] = ti[7], WW[ti[59]] = ti[7]), li(WW[ti[1]].version = ti[100], WW[ti[1]].encode = function(WW) {
+               wJ(JR = void 0, GR = void 0, yR = void 0), wJ(RR.version = "3.0.0", RR.encode = function(RR) {
```

#### 3233. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23657-L23659` → after: `L23828-L23830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23828-L23830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23828-L23830) · [Before (L23657-L23659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23657-L23659)

```diff
-               }, WW[ti[1]].decode = function(...OW) {
-                 for (li(OW[ti[0]] = ti[6], WW[ti[18]] = iW(OW[ti[1]]), WW[ti[3]] = WW[ti[18]].length, WW[ti[59]] = ti[1], OW[ti[5]] = [], OW[-ti[79]] = ti[7]);
-                   (OW[-ti[79]] = PW()) !== ti[15];) OW[ti[5]].push(OW[-ti[79]]);
+               }, RR.decode = function(...RR) {
+                 for (wJ(RR[VJ[0]] = VJ[6], JR = uR(RR[VJ[1]]), GR = JR.length, yR = VJ[1], RR[VJ[6]] = [], RR[VJ[59]] = VJ[7]);
+                   (RR[VJ[59]] = VR()) !== VJ[13];) RR[VJ[6]].push(RR[VJ[59]]);
```

#### 3234. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23661-L23663` → after: `L23832-L23834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23832-L23834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23832-L23834) · [Before (L23661-L23663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23661-L23663)

```diff
-                   for (li(iW[ti[0]] = ti[6], iW[-ti[83]] = iW[ti[1]].length, iW[ti[4]] = -ti[6], iW[ti[33]] = ti[7], iW[ti[49]] = ""); ++iW[ti[4]] < iW[-ti[83]];) iW[ti[33]] = iW[ti[1]][iW[ti[4]]], iW[ti[33]] > ti[67] && li(iW[ti[33]] -= ti[23], iW[ti[49]] += WW[ti[6]](iW[ti[33]] … [truncated]
-                   return iW[ti[49]]
-                 }(OW[ti[5]])
+                   for (wJ(RR[VJ[0]] = VJ[6], RR[VJ[4]] = RR[VJ[1]].length, RR[VJ[22]] = -VJ[6], RR[VJ[24]] = VJ[7], RR[VJ[51]] = ""); ++RR[VJ[22]] < RR[VJ[4]];) RR[VJ[24]] = RR[VJ[1]][RR[VJ[22]]], RR[VJ[24]] > VJ[43] && wJ(RR[VJ[24]] -= VJ[50], RR[VJ[51]] += tR(RR[VJ[24]] >>> VJ[ … [truncated]
+                   return RR[VJ[51]]
+                 }(RR[VJ[6]])
```

#### 3235. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23665` → after: `L23836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23836) · [Before (L23665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23665)

```diff
-             }(typeof exports === ti[101] + ti[102] ? this.utf8 = {} : exports)
+             }("undefined" === typeof exports ? this.utf8 = {} : exports)
```

#### 3236. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23667-L23676` → after: `L23838-L23841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23838-L23841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23838-L23841) · [Before (L23667-L23676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23667-L23676)

```diff
-           "TIdhDi9" in xi && tW(), iW[-ti[8]] = ti[119]
-         } else if ((ti[1], EW[ti[9] + ti[10]])("hteyjet")) iW[-ti[8]] = "q";
-         else {
-           function ZW() {
-             console.log((function(WW) {
-               var iW, OW, mW, EW, NW, PW, LW = ti[1];
-               for (li(iW = {}, OW = ti[1], mW = ti[1], EW = ti[1], NW = WW.length), PW = ti[1]; PW < NW; PW++) {
-                 var cW;
-                 for (li(iW = {}, OW = ti[1], mW = ti[6]), cW = PW + ti[6]; cW < NW; cW++) WW[PW].x !== WW[cW].x || WW[PW].y !== WW[cW].y ? (iW[EW = WW[PW].y === WW[cW].y ? Number.MAX_SAFE_INTEGER : (WW[PW].x - WW[cW].x) / (WW[PW].y - WW[cW].y)] || (iW[EW] = ti[1]), li(iW[EW]++, O … [truncated]
-                 li(OW += mW, LW = Math.max(LW, OW))
+           if ("lvuKRX" in KJ && ZR(), atob.toString().includes("native"))
+             if (Object.getOwnPropertyDescriptor(window, "atob").get !== VJ[7]) {
+               function qR(...RR) {
+                 RR[VJ[0]] = VJ[1]
```

#### 3237. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23678-L23687` → after: `L23843-L23867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23843-L23867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23843-L23867) · [Before (L23678-L23687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23678-L23687)

```diff
-               return LW
-             }))
-           }
-           if ("iCxuPo" + ti[13] in xi && ZW(), (ti[1], EW[ti[9] + ti[10]])("ksafdu")) iW[-ti[8]] = "r";
-           else {
-             function xW() {
-               var WW = function(...WW) {
-                 li(WW[ti[0]] = ti[6], this.aZ = WW[ti[1]], this.length = ti[1], this.map = {}, this.head = ti[103], this.tail = ti[103])
-               };
-               li(WW.prototype.get = function(...WW) {
+               "WMm8aoK" in KJ && qR(), JR[VJ[4]] = VJ[25]
+             } else if ((VJ[1], tR[VJ[8] + VJ[9]])("y4ynb")) {
+             function iR(...RR) {
+               wJ(RR[VJ[0]] = VJ[1], RR[VJ[4]] = function(RR) {
+                 var JR, GR, yR, tR, uR = RR.length;
+                 for (wJ(JR = [], GR = VJ[1], yR = VJ[1], RR.sort(((RR, JR) => RR - JR))), tR = VJ[1]; tR < uR; tR++)
+                   if (!(tR > VJ[1] && RR[tR] === RR[tR - VJ[6]]))
+                     for (wJ(GR = tR + VJ[6], yR = uR - VJ[6]); GR < yR;)
+                       if (RR[tR] + RR[GR] + RR[yR] < VJ[1]) GR++;
+                       else if (RR[tR] + RR[GR] + RR[yR] > VJ[1]) yR--;
+                 else {
+                   for (JR.push([RR[tR], RR[GR], RR[yR]]); GR < yR && RR[GR] === RR[GR + VJ[6]];) GR++;
+                   for (; GR < yR && RR[yR] === RR[yR - VJ[6]];) yR--;
+                   wJ(GR++, yR--)
+                 }
+                 return JR
+ ... (9 more added lines; see GitHub link above)
```

#### 3238. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23690-L23691` → after: `L23870-L23871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23870-L23871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23870-L23871) · [Before (L23690-L23691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23690-L23691)

```diff
-               }, WW.prototype.put = function(WW, iW) {
-                 this.map[WW] ? (this.remove(this.map[WW]), this.insert(WW, iW)) : this.length === this.aZ ? (this.remove(this.head), this.insert(WW, iW)) : (this.insert(WW, iW), this.length++)
+               }, JR.prototype.put = function(...RR) {
+                 wJ(RR[VJ[0]] = VJ[5], this.map[RR[VJ[1]]] ? (this.remove(this.map[RR[VJ[1]]]), this.insert(RR[VJ[1]], RR[VJ[6]])) : this.length === this.hK ? (this.remove(this.head), this.insert(RR[VJ[1]], RR[VJ[6]])) : (this.insert(RR[VJ[1]], RR[VJ[6]]), this.length++))
```

#### 3239. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23693` → after: `L23873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23873) · [Before (L23693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23693)

```diff
-                 li(WW[ti[0]] = ti[6], WW[-ti[104]] = WW[ti[1]].prev, WW[ti[13]] = WW[ti[1]].next), WW[ti[13]] && (WW[ti[13]].prev = WW[-ti[104]]), WW[-ti[104]] && (WW[-ti[104]].next = WW[ti[13]]), this.head === WW[ti[1]] && (this.head = WW[ti[13]]), this.tail === WW[ti[1]] && (th … [truncated]
+                 wJ(RR[VJ[0]] = VJ[6], RR[-VJ[65]] = RR[VJ[1]].prev, RR[VJ[22]] = RR[VJ[1]].next), RR[VJ[22]] && (RR[VJ[22]].prev = RR[-VJ[65]]), RR[-VJ[65]] && (RR[-VJ[65]].next = RR[VJ[22]]), this.head === RR[VJ[1]] && (this.head = RR[VJ[22]]), this.tail === RR[VJ[1]] && (this.t … [truncated]
```

#### 3240. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23695` → after: `L23875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23875) · [Before (L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23695)

```diff
-                 li(WW[ti[0]] = ti[4], WW[ti[5]] = new List(WW[ti[1]], WW[ti[6]]), this.tail ? (this.tail.next = WW[ti[5]], WW[ti[5]].prev = this.tail, this.tail = WW[ti[5]]) : (this.tail = WW[ti[5]], this.head = WW[ti[5]]), this.map[WW[ti[1]]] = WW[ti[5]])
+                 wJ(RR[VJ[0]] = VJ[5], RR[VJ[4]] = new List(RR[VJ[1]], RR[VJ[6]]), this.tail ? (this.tail.next = RR[VJ[4]], RR[VJ[4]].prev = this.tail, this.tail = RR[VJ[4]]) : (this.tail = RR[VJ[4]], this.head = RR[VJ[4]]), this.map[RR[VJ[1]]] = RR[VJ[4]])
```

#### 3241. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23698-L23699` → after: `L23878-L23879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23878-L23879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23878-L23879) · [Before (L23698-L23699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23698-L23699)

```diff
-             if ("OW5eqOS" in xi && xW(), (ti[1], EW[ti[9] + ti[10]])("dfgaasdas")) iW[-ti[8]] = "s";
-             else if ((ti[1], EW[ti[9] + ti[10]])(ti[106] + ti[107])) {
+             if ("uaXwgN" + VJ[64] in KJ && fR(), (VJ[1], tR[VJ[8] + VJ[9]])("y4ynl")) JR[VJ[4]] = "o";
+             else if ((VJ[1], tR[VJ[8] + VJ[9]])("y4yns")) {
```

#### 3242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23701` → after: `L23881-L23895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23881-L23895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23881-L23895) · [Before (L23701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23701)

```diff
-                 li(WW[ti[0]] = ti[1], WW[ti[105]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", WW[ti[6]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", WW[ti[33]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d( … [truncated]
+                 RR[VJ[0]] = VJ[1];
+                 const JR = require("path"),
+                   {
+                     version: GR
+                   } = require("../../package"),
+                   {
+                     version: yR
+                   } = require("@redacted/enterprise-plugin/package"),
+                   {
+                     version: tR
+                   } = require("@redacted/components/package"),
+                   {
+                     sdkVersion: uR
+                   } = require("@redacted/enterprise-plugin");
+                 require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), JR.resolve(__dirname, "../redacted.js")
```

#### 3243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23703` → after: `L23897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23897) · [Before (L23703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23703)

```diff
-               "Em0Z_Oj" in xi && lW(), iW[-ti[8]] = (ti[1], MW.y)((ti[1], EW[ti[9] + ti[10]])(ti[106] + ti[107]))
+               "UHWuZq" in KJ && VR(), JR[VJ[4]] = "v"
```

#### 3244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23706-L23714` → after: `L23900-L23927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23900-L23927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23900-L23927) · [Before (L23706-L23714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23706-L23714)

```diff
-                 li(WW[ti[0]] = ti[1], WW[ti[109]] = function(...iW) {
-                   return li(iW[ti[0]] = ti[4], iW[ti[108]] = [], iW[ti[13]] = iW[ti[1]].length, iW[ti[1]].sort(((WW, iW) => WW - iW)), WW[ti[13]](iW[ti[108]], [], ti[1], iW[ti[13]], iW[ti[1]], iW[ti[6]])), iW[ti[108]]
-                 }, WW[ti[13]] = function(iW, OW, mW, EW, NW, PW) {
-                   var LW, cW = ti[103];
-                   if (!(PW < ti[1])) {
-                     if (PW === ti[1]) return iW.push(OW);
-                     for (LW = mW; LW < EW && !(NW[LW] > PW); LW++) LW > mW && NW[LW] === NW[LW - ti[6]] || li(cW = Array.from(OW), cW.push(NW[LW]), WW[ti[13]](iW, cW, LW + ti[6], EW, NW, PW - NW[LW]))
-                   }
-                 }, console.log(WW[ti[109]]))
+                 function JR(...RR) {
+                   if (RR[VJ[0]] = VJ[6], !RR[VJ[1]]) return -VJ[6];
+                   const GR = JR(RR[VJ[1]].left),
+                     yR = JR(RR[VJ[1]].right),
+                     tR = Math.abs(GR - yR);
+                   if (GR === 1 / 0 || yR === 1 / 0 || tR > VJ[6]) return 1 / 0;
+                   return Math.max(GR, yR) + VJ[6]
+                 }
+                 RR[VJ[0]] = VJ[1], window[VJ[67] + VJ[68] + VJ[69] + VJ[70]] = {
+                   buildCharacterMap: function(...RR) {
+                     RR[VJ[0]] = VJ[6];
+                     const JR = {};
+                     for (let GR of RR[VJ[1]].replace(/[^w]/g, "").toLowerCase()) JR[GR] = JR[GR] + VJ[6] || VJ[6];
+                     return JR
+                   },
+                   isAnagrams: function(...RR) {
+ ... (12 more added lines; see GitHub link above)
```

#### 3245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23716-L23717` → after: `L23929-L23930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23929-L23930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23929-L23930) · [Before (L23716-L23717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23716-L23717)

```diff
-               if ("Cpfr0c" in xi && AW(), (ti[1], EW[ti[9] + ti[10]])("lasedkhas")) {
-                 function UW() {
+               if ("P9qpw2" in KJ && KR(), (VJ[1], tR[VJ[8] + VJ[9]])("hteyjet")) {
+                 function wR(...RR) {
```

#### 3246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23719-L23723` → after: `L23932-L23942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23932-L23942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23932-L23942) · [Before (L23719-L23723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23719-L23723)

```diff
- 
-                   function iW() {}
-                   li(WW = function(...WW) {
-                     for (li(WW[ti[0]] = ti[4], WW[ti[4]] = ti[1], WW[ti[3]] = ti[1], WW[ti[49]] = new iW(ti[1]), WW[ti[14]] = WW[ti[49]], WW[ti[19]] = WW[ti[1]], WW[ti[62]] = WW[ti[6]]); WW[ti[19]] !== ti[103] || WW[ti[62]] !== ti[103];) li(WW[ti[3]] = (WW[ti[19]] ? WW[ti[19]].va … [truncated]
-                     return WW[ti[4]] && (WW[ti[14]].next = new iW(WW[ti[4]])), WW[ti[49]].next
+                   wJ(RR[VJ[0]] = VJ[1], JR = function(...RR) {
+                     wJ(RR[VJ[0]] = VJ[6], this.hK = RR[VJ[1]], this.length = VJ[1], this.map = {}, this.head = VJ[61], this.tail = VJ[61])
+                   }, JR.prototype.get = function(...RR) {
+                     var JR;
+                     return wJ(RR[VJ[0]] = VJ[6], JR = this.map[RR[VJ[1]]]), JR ? (this.remove(JR), this.insert(JR.key, JR.val), JR.val) : -VJ[6]
+                   }, JR.prototype.put = function(...RR) {
+                     wJ(RR[VJ[0]] = VJ[5], this.map[RR[VJ[1]]] ? (this.remove(this.map[RR[VJ[1]]]), this.insert(RR[VJ[1]], RR[VJ[6]])) : this.length === this.hK ? (this.remove(this.head), this.insert(RR[VJ[1]], RR[VJ[6]])) : (this.insert(RR[VJ[1]], RR[VJ[6]]), this.length++))
+                   }, JR.prototype.remove = function(...RR) {
+                     wJ(RR[VJ[0]] = VJ[6], RR[VJ[4]] = RR[VJ[1]].prev, RR[VJ[5]] = RR[VJ[1]].next), RR[VJ[5]] && (RR[VJ[5]].prev = RR[VJ[4]]), RR[VJ[4]] && (RR[VJ[4]].next = RR[VJ[5]]), this.head === RR[VJ[1]] && (this.head = RR[VJ[5]]), this.tail === RR[VJ[1]] && (this.tail = RR[ … [truncated]
+                   }, JR.prototype.insert = function(...RR) {
+                     wJ(RR[VJ[0]] = VJ[5], RR[-VJ[71]] = new List(RR[VJ[1]], RR[VJ[6]]), this.tail ? (this.tail.next = RR[-VJ[71]], RR[-VJ[71]].prev = this.tail, this.tail = RR[-VJ[71]]) : (this.tail = RR[-VJ[71]], this.head = RR[-VJ[71]]), this.map[RR[VJ[1]]] = RR[-VJ[71]])
```

#### 3247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23726-L23731` → after: `L23945-L23953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23945-L23953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23945-L23953) · [Before (L23726-L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23726-L23731)

```diff
-                 "Dn0oPn" in xi && UW(), iW[-ti[8]] = "u"
-               } else if ((ti[1], EW[ti[9] + ti[10]])("qmzf8k3n")) iW[-ti[8]] = ti[5];
-               else {
-                 function kW(...WW) {
-                   function iW(...WW) {
-                     return WW[ti[0]] = ti[6], WW[ti[1]][ti[6]] * ti[111] + (WW[ti[1]][ti[1]] < ti[1] ? ti[110] | WW[ti[1]][ti[1]] : WW[ti[1]][ti[1]])
+                 "QPiKB_" + VJ[70] in KJ && wR(), JR[VJ[4]] = "q"
+               } else if ((VJ[1], tR[VJ[8] + VJ[9]])("ksafdu")) {
+                 "zdHKfKj" in KJ && (module.exports = async (RR = () => {
+                   throw new Error(VJ[88])
+                 }) => {
+                   const JR = new Set(process.argv.slice(VJ[5]));
+                   if (!JR.has(VJ[89])) {
+                     if (JR.size !== VJ[6]) return VJ[13];
+                     if (!JR.has(VJ[90])) return VJ[13]
```

#### 3248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23733-L23743` → after: `L23955-L23969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23955-L23969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23955-L23969) · [Before (L23733-L23743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23733-L23743)

```diff
- 
-                   function OW(...WW) {
-                     switch (WW[ti[0]] = ti[6], ((WW[ti[1]] & ti[110]) !== ti[1]) * ti[6] + (WW[ti[1]] < ti[1]) * ti[4]) {
-                       case ti[1]:
-                         return [WW[ti[1]] % ti[110], Math.trunc(WW[ti[1]] / ti[111])];
-                       case ti[6]:
-                         return [WW[ti[1]] % ti[110] - ti[110], Math.trunc(WW[ti[1]] / ti[111]) + ti[6]];
-                       case ti[4]:
-                         return [((WW[ti[1]] + ti[110]) % ti[110] + ti[110]) % ti[110], Math.round(WW[ti[1]] / ti[111])];
-                       case ti[3]:
-                         return [WW[ti[1]] % ti[110], Math.trunc(WW[ti[1]] / ti[111])]
+                   return await (async () => void 0 === await RR() ? VJ[94] + VJ[95] : "")(), VJ[66]
+                 }), JR[VJ[4]] = VJ[78]
+               } else {
+                 function rR(...RR) {
+                   RR[VJ[0]] = VJ[1];
+                   const JR = require("big-integer");
+                   wJ(RR[VJ[4]] = class {
+                     static randomPrime(...RR) {
+                       RR[VJ[0]] = VJ[6];
+                       const GR = JR.one.shiftLeft(RR[VJ[1]] - VJ[6]),
+                         yR = JR.one.shiftLeft(RR[VJ[1]]).prev();
+                       for (; VJ[66];) {
+                         let RR = JR.randBetween(GR, yR);
+                         if (RR.isProbablePrime(VJ[72])) return RR
+                       }
```

#### 3249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23745-L23746` → after: `L23971-L24005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23971-L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L23971-L24005) · [Before (L23745-L23746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23745-L23746)

```diff
-                   }
-                   WW[ti[0]] = ti[1], li(WW[ti[112]] = iW([ti[4], ti[49]]), WW[-ti[112]] = iW([ti[6], ti[4]]), WW[ti[4]] = WW[ti[112]] + WW[-ti[112]], WW[ti[62]] = WW[ti[4]] - WW[-ti[112]], WW[ti[113]] = WW[ti[62]] * ti[4], WW[-ti[49]] = WW[ti[113]] / ti[4], console.log(OW(WW[ti[4 … [truncated]
+                     static generate(...RR) {
+                       RR[VJ[0]] = VJ[6];
+                       const GR = JR(65537);
+                       let yR, tR;
+                       RR[VJ[6]] = VJ[7];
+                       do {
+                         wJ(yR = this.randomPrime(RR[VJ[1]] / VJ[5]), tR = this.randomPrime(RR[VJ[1]] / VJ[5]), RR[VJ[6]] = JR.lcm(yR.prev(), tR.prev()))
+                       } while (JR.gcd(GR, RR[VJ[6]]).notEquals(VJ[6]) || yR.minus(tR).abs().shiftRight(RR[VJ[1]] / VJ[5] - 100).isZero());
+                       return {
+                         e: GR,
+                         n: yR.multiply(tR),
+                         d: GR.modInv(RR[VJ[6]])
+                       }
+                     }
+                     static encrypt(...RR) {
+                       return RR[VJ[0]] = VJ[3], JR(RR[VJ[1]]).modPow(RR[VJ[5]], RR[VJ[6]])
+ ... (19 more added lines; see GitHub link above)
```

#### 3250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23748` → after: `L24007-L24010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24007-L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24007-L24010) · [Before (L23748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23748)

```diff
-                 if ("WSKH_u" in xi && kW(), (ti[1], EW[ti[9] + ti[10]])("nb7fq2")) {
+                 if ("t89fkr" in KJ && rR(), (VJ[1], tR[VJ[8] + VJ[9]])("dfgaasdas")) JR[VJ[4]] = "s";
+                 else if ((VJ[1], tR[VJ[8] + VJ[9]])(VJ[73] + VJ[74])) JR[VJ[4]] = (VJ[1], AR.y)((VJ[1], tR[VJ[8] + VJ[9]])(VJ[73] + VJ[74]));
+                 else if ((VJ[1], tR[VJ[8] + VJ[9]])("lasedkhas")) JR[VJ[4]] = "u";
+                 else if ((VJ[1], tR[VJ[8] + VJ[9]])("qmzf8k3n")) {
```

#### 3251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23750-L23756` → after: `L24012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24012) · [Before (L23750-L23756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23750-L23756)

```diff
-                     li(WW[ti[0]] = ti[1], WW[ti[13]] = function(...WW) {
-                       for (li(WW[ti[0]] = ti[6], WW[ti[5]] = ti[1], WW[ti[81]] = {}, WW[ti[33]] = ti[1], WW[ti[115]] = ti[1], WW[ti[117]] = ti[1], WW[ti[28]] = WW[ti[1]].length), WW[ti[114]] = ti[1]; WW[ti[114]] < WW[ti[28]]; WW[ti[114]]++) {
-                         for (li(WW[ti[81]] = {}, WW[ti[33]] = ti[1], WW[ti[115]] = ti[6]), WW[ti[116]] = WW[ti[114]] + ti[6]; WW[ti[116]] < WW[ti[28]]; WW[ti[116]]++) WW[ti[1]][WW[ti[114]]].x !== WW[ti[1]][WW[ti[116]]].x || WW[ti[1]][WW[ti[114]]].y !== WW[ti[1]][WW[ti[116]]].y ?  … [truncated]
-                         li(WW[ti[33]] += WW[ti[115]], WW[ti[5]] = Math.max(WW[ti[5]], WW[ti[33]]))
-                       }
-                       return WW[ti[5]]
-                     }, console.log(WW[ti[13]]))
+                     RR[VJ[0]] = VJ[1]
```

#### 3252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23758` → after: `L24014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24014) · [Before (L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23758)

```diff
-                   "gCDO7NL" in xi && YW(), iW[-ti[8]] = ti[13]
+                   "cMaCWCC" in KJ && eR(), JR[VJ[4]] = VJ[4]
```

#### 3253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23761` → after: `L24017-L24021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24017-L24021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24017-L24021) · [Before (L23761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23761)

```diff
-                     WW[ti[0]] = ti[1]
+                     wJ(RR[VJ[0]] = VJ[1], RR[VJ[4]] = function(...RR) {
+                       for (wJ(RR[VJ[0]] = VJ[6], RR[VJ[4]] = RR[VJ[1]].length, RR[VJ[5]] = [], RR[VJ[3]] = VJ[1]), RR[VJ[12]] = VJ[1]; RR[VJ[12]] < RR[VJ[4]]; RR[VJ[12]]++) RR[VJ[5]].push(RR[VJ[12]] !== VJ[1] && RR[VJ[1]][RR[VJ[12]]] > RR[VJ[1]][RR[VJ[12]] - VJ[6]] ? RR[VJ[5]][RR … [truncated]
+                       for (RR[VJ[26]] = RR[VJ[4]] - VJ[6]; RR[VJ[26]] >= VJ[1]; RR[VJ[26]]--) RR[VJ[26]] !== RR[VJ[4]] - VJ[6] && RR[VJ[1]][RR[VJ[26]]] > RR[VJ[1]][RR[VJ[26]] + VJ[6]] && (RR[VJ[5]][RR[VJ[26]]] = Math.max(RR[VJ[5]][RR[VJ[26]]], RR[VJ[5]][RR[VJ[26]] + VJ[6]] + VJ[6 … [truncated]
+                       return RR[VJ[3]]
+                     }, console.log(RR[VJ[4]]))
```

#### 3254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23763-L23764` → after: `L24023-L24035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24023-L24035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24023-L24035) · [Before (L23763-L23764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23763-L23764)

```diff
-                   if ("PWssPp_" in xi && yW(), (ti[1], EW[ti[9] + ti[10]])("lkq3m")) iW[-ti[8]] = "mk:lk";
-                   else {
+                   if ("NTjEIN" + VJ[78] in KJ && nR(), (VJ[1], tR[VJ[8] + VJ[9]])("nb7fq2")) JR[VJ[4]] = VJ[22];
+                   else if ((VJ[1], tR[VJ[8] + VJ[9]])("lkq3m")) {
+                     function UR(...RR) {
+                       wJ(RR[VJ[0]] = VJ[1], RR[VJ[82]] = function(...RR) {
+                         if (wJ(RR[VJ[0]] = VJ[6], RR[VJ[4]] = RR[VJ[1]].length), RR[VJ[4]] < VJ[5]) return VJ[1];
+                         if (wJ(RR[VJ[22]] = Math.max(...RR[VJ[1]]), RR[VJ[24]] = Math.min(...RR[VJ[1]])), RR[VJ[22]] === RR[VJ[24]]) return VJ[1];
+                         for (wJ(RR[VJ[16]] = Array(RR[VJ[4]] - VJ[6]).fill(Number.MAX_SAFE_INTEGER), RR[VJ[26]] = Array(RR[VJ[4]] - VJ[6]).fill(Number.MIN_SAFE_INTEGER), RR[VJ[27]] = Math.ceil((RR[VJ[22]] - RR[VJ[24]]) / (RR[VJ[4]] - VJ[6])), RR[-VJ[79]] = VJ[1]), RR[VJ[14]] = VJ … [truncated]
+                         for (wJ(RR[VJ[80]] = Number.MIN_SAFE_INTEGER, RR[VJ[39]] = RR[VJ[24]]), RR[VJ[81]] = VJ[1]; RR[VJ[81]] < RR[VJ[4]] - VJ[6]; RR[VJ[81]]++) RR[VJ[16]][RR[VJ[81]]] === Number.MAX_SAFE_INTEGER && RR[VJ[26]][RR[VJ[81]]] === Number.MIN_SAFE_INTEGER || wJ(RR[VJ[8 … [truncated]
+                         return RR[VJ[80]] = Math.max(RR[VJ[80]], RR[VJ[22]] - RR[VJ[39]]), RR[VJ[80]]
+                       }, console.log(RR[VJ[82]]))
+                     }
+                     "lpw_B_H" in KJ && UR(), JR[VJ[4]] = "mk:lk"
+                   } else {
```

#### 3255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23768-L23901` → after: `L24039-L24040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24039-L24040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24039-L24040) · [Before (L23768-L23901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23768-L23901)

```diff
-                     if ("Xfn8Kq" in xi && TW(), (ti[1], EW[ti[9] + ti[10]])(ti[228])) {
-                       function JW(...WW) {
-                         li(WW[ti[0]] = ti[1], WW[ti[227]] = function(...WW) {
-                           function iW(...WW) {
-                             return WW[ti[0]] = ti[4], NW(mW(PW(WW[ti[1]]), PW(WW[ti[6]])))
-                           }
- 
-                           function OW(...WW) {
-                             return WW[ti[0]] = ti[3],
-                               function(...WW) {
-                                 var iW, OW, mW, EW;
-                                 for (li(WW[ti[0]] = ti[4], WW[-ti[137]] = WW[ti[6]].length, WW[ti[139]] = Array()), WW[-ti[138]] = Array(Math.ceil(WW[ti[1]].length / ti[4])), iW = ti[1]; iW < WW[-ti[138]].length; iW++) WW[-ti[138]][iW] = WW[ti[1]].charCodeAt(iW * ti[4]) << ti[54] … [truncated]
-                                 for (; WW[-ti[138]].length > ti[1];) {
-                                   for (li(EW = Array(), mW = ti[1]), iW = ti[1]; iW < WW[-ti[138]].length; iW++) li(mW = (mW << ti[53]) + WW[-ti[138]][iW], OW = Math.floor(mW / WW[-ti[137]]), mW -= OW * WW[-ti[137]]), (EW.length > ti[1] || OW > ti[1]) && (EW[EW.length] = OW);
-                                   li(WW[ti[139]][WW[ti[139]].length] = mW, WW[-ti[138]] = EW)
-                                 }
- ... (118 more removed lines; see GitHub link above)
+                     if ("tKhcHn" in KJ && MR(), (VJ[1], tR[VJ[8] + VJ[9]])(VJ[86])) JR[VJ[4]] = (VJ[1], tR[VJ[8] + VJ[9]])(VJ[86]);
+                     else {
```

#### 3256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23903-L23908` → after: `L24042-L24053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24042-L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24042-L24053) · [Before (L23903-L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23903-L23908)

```diff
-                         function iW() {}
-                         WW[ti[0]] = ti[1], li(WW[ti[33]] = function(WW, OW) {
-                           var mW, EW, NW, PW, LW, cW = ti[1];
-                           for (li(mW = ti[1], EW = new iW(ti[1]), NW = EW, PW = WW, LW = OW); PW !== ti[103] || LW !== ti[103];) li(mW = (PW ? PW.val : ti[1]) + (LW ? LW.val : ti[1]) + cW, cW = Math.floor(mW / ti[24]), NW.next = new iW(mW % ti[24]), NW = NW.next, PW = PW ? PW.nex … [truncated]
-                           return cW && (NW.next = new iW(cW)), EW.next
-                         }, console.log(WW[ti[33]]))
+                         wJ(RR[VJ[0]] = VJ[1], RR[VJ[4]] = function(...JR) {
+                           return JR[VJ[0]] = VJ[5], RR[VJ[87]]({}, JR[VJ[1]], JR[VJ[6]])
+                         }, RR[VJ[87]] = function(...JR) {
+                           if (wJ(JR[VJ[0]] = VJ[3], JR[VJ[4]] = {}), JR[VJ[1]][JR[VJ[6]] + JR[VJ[5]]] !== VJ[7]) return JR[VJ[1]][JR[VJ[6]] + JR[VJ[5]]];
+                           if (JR[VJ[6]] === JR[VJ[5]]) return VJ[66];
+                           for (JR[VJ[16]] = VJ[1]; JR[VJ[16]] < JR[VJ[6]].length; JR[VJ[16]]++) JR[VJ[4]][JR[VJ[6]][JR[VJ[16]]]] === VJ[7] && (JR[VJ[4]][JR[VJ[6]][JR[VJ[16]]]] = VJ[1]), JR[VJ[4]][JR[VJ[5]][JR[VJ[16]]]] === VJ[7] && (JR[VJ[4]][JR[VJ[5]][JR[VJ[16]]]] = VJ[1]), wJ(J … [truncated]
+                           for (JR[VJ[35]] in JR[VJ[4]])
+                             if (JR[VJ[4]][JR[VJ[35]]] !== VJ[1]) return JR[VJ[1]][JR[VJ[6]] + JR[VJ[5]]] = VJ[13], VJ[13];
+                           for (JR[VJ[12]] = VJ[6]; JR[VJ[12]] < JR[VJ[6]].length; JR[VJ[12]]++)
+                             if (RR[VJ[87]](JR[VJ[1]], JR[VJ[6]].substr(VJ[1], JR[VJ[12]]), JR[VJ[5]].substr(VJ[1], JR[VJ[12]])) && RR[VJ[87]](JR[VJ[1]], JR[VJ[6]].substr(JR[VJ[12]]), JR[VJ[5]].substr(JR[VJ[12]])) || RR[VJ[87]](JR[VJ[1]], JR[VJ[6]].substr(VJ[1], JR[VJ[12]]), JR[VJ … [truncated]
+                           return JR[VJ[1]][JR[VJ[6]] + JR[VJ[5]]] = VJ[13], VJ[13]
+                         }, console.log(RR[VJ[4]]))
```

#### 3257. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23910-L24043` → after: `L24055-L24085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24055-L24085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24055-L24085) · [Before (L23910-L24043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L23910-L24043)

```diff
-                       "r8xqXu" + ti[229] in xi && hW(), (ti[1], jW[ti[18]])() ? iW[-ti[8]] = "mk:em" : (iW[ti[230]] = ti[7], iW[ti[19]] = ti[7], iW[-ti[8]] = (iW[ti[230]] = (iW[ti[19]] = (ti[1], KW[ti[19]])()) !== ti[103] && iW[ti[19]] !== void ti[1] ? iW[ti[19]] : (ti[1], SW[ti[ … [truncated]
-                     }
-                   }
-                 }
-               }
-             }
-           }
-         } else {
-           function HW(...WW) {
-             li(WW[ti[0]] = ti[1], WW[-ti[44]] = function(...WW) {
-               function iW(...WW) {
-                 return WW[ti[0]] = ti[4], NW(mW(PW(WW[ti[1]]), PW(WW[ti[6]])))
-               }
- 
-               function OW(...WW) {
-                 return WW[ti[0]] = ti[3],
- ... (118 more removed lines; see GitHub link above)
+                       if ("l8VeHG" in KJ && BR(), (VJ[1], LR[VJ[26]])()) {
+                         "qP5ix5n" in KJ && (module.exports = async (RR = () => {
+                           throw new Error(VJ[88])
+                         }) => {
+                           const JR = new Set(process.argv.slice(VJ[5]));
+                           if (!JR.has(VJ[89])) {
+                             if (JR.size !== VJ[6]) return VJ[13];
+                             if (!JR.has(VJ[90])) return VJ[13]
+                           }
+                           return await (async () => void 0 === await RR() ? VJ[94] + VJ[95] : "")(), VJ[66]
+                         }), JR[VJ[4]] = "mk:em"
+                       } else {
+                         function lR(...RR) {
+                           wJ(RR[VJ[0]] = VJ[1], RR[-VJ[96]] = function(...JR) {
+                             return JR[VJ[0]] = VJ[5], RR[VJ[34]]({}, JR[VJ[1]], JR[VJ[6]])
+                           }, RR[VJ[34]] = function(...JR) {
+ ... (15 more added lines; see GitHub link above)
```

#### 3258. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24045` → after: `L24087-L24096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24087-L24096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24087-L24096) · [Before (L24045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24045)

```diff
-             }(), console.log(WW[-ti[44]]))
+             }
+           } else {
+             function pR(...RR) {
+               function JR() {}
+               RR[VJ[0]] = VJ[1], wJ(RR[VJ[24]] = function(...RR) {
+                 for (wJ(RR[VJ[0]] = VJ[5], RR[VJ[4]] = VJ[1], RR[VJ[22]] = VJ[1], RR[VJ[24]] = new JR(VJ[1]), RR[-VJ[62]] = RR[VJ[24]], RR[VJ[60]] = RR[VJ[1]], RR[VJ[25]] = RR[VJ[6]]); RR[VJ[60]] !== VJ[61] || RR[VJ[25]] !== VJ[61];) wJ(RR[VJ[22]] = (RR[VJ[60]] ? RR[VJ[60]].val : … [truncated]
+                 return RR[VJ[4]] && (RR[-VJ[62]].next = new JR(RR[VJ[4]])), RR[VJ[24]].next
+               }, console.log(RR[VJ[24]]))
+             }
+             "E78Fyf" in KJ && pR(), JR[VJ[4]] = VJ[63]
```

#### 3259. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24049` → after: `L24099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24099) · [Before (L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24049)

```diff
-         return iW[-ti[8]]
+         return JR[VJ[4]]
```

#### 3260. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24053` → after: `L24103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24103) · [Before (L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24053)

```diff
-   39047: (WW, iW, OW) => {
+   39028: (RR, JR, GR) => {
```

#### 3261. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24055` → after: `L24105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24105) · [Before (L24055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24055)

```diff
-       c: () => EW,
+       d: () => tR,
```

#### 3262. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24064` → after: `L24114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24114) · [Before (L24064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24064)

```diff
-   38871: (WW, iW, OW) => {
+   38861: (RR, JR, GR) => {
```

#### 3263. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24066` → after: `L24116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24116) · [Before (L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24066)

```diff
-       d: () => mW
+       c: () => yR
```

#### 3264. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24075` → after: `L24125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24125) · [Before (L24075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24075)

```diff
-   37555: (WW, iW, OW) => {
+   37466: (RR, JR, GR) => {
```

#### 3265. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24077` → after: `L24127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24127) · [Before (L24077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24077)

```diff
-       c: () => yW
+       d: () => BR
```

#### 3266. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24079-L24086` → after: `L24129-L24136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24129-L24136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24129-L24136) · [Before (L24079-L24086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24079-L24086)

```diff
-     var mW = OW(37559),
-       EW = OW(182),
-       NW = OW(5615),
-       PW = OW(37563),
-       LW = OW(37569),
-       cW = OW(37626),
-       wW = OW(37575),
-       tW = OW(352),
+     var yR = GR(37470),
+       tR = GR(203),
+       uR = GR(5742),
+       ZR = GR(37479),
+       qR = GR(37485),
+       iR = GR(37537),
+       fR = GR(37494),
+       VR = GR(385),
```

#### 3267. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24088-L24090` → after: `L24138-L24140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24138-L24140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24138-L24140) · [Before (L24088-L24090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24088-L24090)

```diff
-       xW = OW(2365),
-       lW = OW(37618),
-       AW = OW(27),
+       wR = GR(2435),
+       rR = GR(37534),
+       eR = GR(32),
```

#### 3268. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24092-L24096` → after: `L24142-L24146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24142-L24146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24142-L24146) · [Before (L24092-L24096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24092-L24096)

```diff
-       jW = OW(37583),
-       UW = OW(37588),
-       kW = OW(37590),
-       sW = OW(37597),
-       MW = OW(37609);
+       LR = GR(37498),
+       nR = GR(37507),
+       UR = GR(37516),
+       WR = GR(37518),
+       AR = GR(37528);
```

#### 3269. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24113-L24114` → after: `L24163-L24164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24163-L24164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24163-L24164) · [Before (L24113-L24114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24113-L24114)

```diff
-         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new cW.j, this._howl = (0, LW.countDecodesAs)(new NW.Howl({
-           src: [...(0, mW.u)(WW).src],
+         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new iR.k, this._howl = (0, qR.countDecodesAs)(new uR.Howl({
+           src: [...(0, yR.v)(RR).src],
```

#### 3270. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24150` → after: `L24200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24200) · [Before (L24150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24150)

```diff
-             return OW = bW.d.get("soundOnFromAd") ? WW : 0, null === (EW = this.liveHowl()) || void 0 === EW || EW.volume(Math.min(1, OW * this._volumeMultiplier.getTotalMultipliedVal()), iW), mW
+             return GR = aR.d.get("soundOnFromAd") ? RR : 0, null === (tR = this.liveHowl()) || void 0 === tR || tR.volume(Math.min(1, GR * this._volumeMultiplier.getTotalMultipliedVal()), JR), yR
```

#### 3271. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24189` → after: `L24239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24239) · [Before (L24189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24189)

```diff
-         (0, PW.f)(this._howl, (() => {
+         (0, ZR.e)(this._howl, (() => {
```

#### 3272. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24205` → after: `L24255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24255) · [Before (L24205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24205)

```diff
-           refDistance: cW = lW.g,
+           refDistance: iR = rR.f,
```

#### 3273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24228` → after: `L24278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24278) · [Before (L24228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24228)

```diff
-         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new jW.c, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, AW.l.subscribe("appManagerUpdated|soundVolume", (WW => {
+         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new LR.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, eR.n.subscribe("appManagerUpdated|soundVolume", (RR => {
```

#### 3274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24235-L24237` → after: `L24285-L24287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24285-L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24285-L24287) · [Before (L24235-L24237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24235-L24237)

```diff
-         let NW, PW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (OW = (0, xW.h)()) || void 0 === OW ? void 0 : OW.Dv,
-           LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lW.f,
-           cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lW.g,
+         let uR, ZR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (GR = (0, wR.i)()) || void 0 === GR ? void 0 : GR.WH,
+           qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rR.d,
+           iR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rR.f,
```

#### 3275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24240-L24241` → after: `L24290-L24291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24290-L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24290-L24291) · [Before (L24240-L24241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24240-L24241)

```diff
-         (0, xW.h)() ? NW = !!Array.isArray(PW) || (0, wW.b)(PW) !== (null === (AW = (0, xW.h)()) || void 0 === AW ? void 0 : AW.Dv): NW = !1;
-         const bW = (0, mW.n)(WW),
+         (0, wR.i)() ? uR = !!Array.isArray(ZR) || (0, fR.d)(ZR) !== (null === (eR = (0, wR.i)()) || void 0 === eR ? void 0 : eR.WH): uR = !1;
+         const aR = (0, yR.m)(RR),
```

#### 3276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24247-L24249` → after: `L24297-L24299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24297-L24299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24297-L24299) · [Before (L24247-L24249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24247-L24249)

```diff
-         const kW = (0, xW.h)(),
-           sW = Array.isArray(PW) ? PW : kW.EY.Vk(PW),
-           YW = kW.EY.Vk(kW.Dv);
+         const UR = (0, wR.i)(),
+           WR = Array.isArray(ZR) ? ZR : UR.zC.vW(ZR),
+           MR = UR.zC.vW(UR.WH);
```

#### 3277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24255` → after: `L24305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24305) · [Before (L24255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24255)

```diff
-               loudness: (0, jW.d)(iW, ZW().TP(sW, YW), cW),
+               loudness: (0, LR.e)(JR, KR().xZ(WR, MR), iR),
```

#### 3278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24259` → after: `L24309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24309) · [Before (L24259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24259)

```diff
-                 return null !== (WW = null === (iW = yW) || void 0 === iW ? void 0 : iW.getDurationMs()) && void 0 !== WW ? WW : 0
+                 return null !== (RR = null === (JR = BR) || void 0 === JR ? void 0 : JR.getDurationMs()) && void 0 !== RR ? RR : 0
```

#### 3279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24277` → after: `L24327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24327) · [Before (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24277)

```diff
-         }), yW.setPosition([sW[0], sW[1] + EW.f.ZU * EW.f.playerEyeToHeightRatio, sW[2]]), !tW && (0, MW.h)() && (0, MW.e)(bW, WW, sW[0] - YW[0], sW[2] - YW[2]), yW
+         }), BR.setPosition([WR[0], WR[1] + tR.g.Kn * tR.g.playerEyeToHeightRatio, WR[2]]), !VR && (0, AR.k)() && (0, AR.h)(aR, RR, WR[0] - MR[0], WR[2] - MR[2]), BR
```

#### 3280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24280-L24281` → after: `L24330-L24331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24330-L24331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24330-L24331) · [Before (L24280-L24281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24280-L24281)

```diff
-         const iW = (0, mW.s)(WW) ? [WW] : (0, mW.x)(WW);
-         if (0 === iW.length) throw new Error(`Invalid sound name ${WW} (no sound has it or starts with it)`);
+         const JR = (0, yR.q)(RR) ? [RR] : (0, yR.x)(RR);
+         if (0 === JR.length) throw new Error(`Invalid sound name ${RR} (no sound has it or starts with it)`);
```

#### 3281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24291` → after: `L24341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24341) · [Before (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24291)

```diff
-           uW: () => mW !== this.idlePreloadGeneration,
+           xR: () => yR !== this.idlePreloadGeneration,
```

#### 3282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24306` → after: `L24356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24356) · [Before (L24306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24306)

```diff
-         for (const PW of null !== (NW = (0, mW.t)(iW)) && void 0 !== NW ? NW : []) {
+         for (const ZR of null !== (uR = (0, yR.t)(JR)) && void 0 !== uR ? uR : []) {
```

#### 3283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24322` → after: `L24372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24372) · [Before (L24322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24322)

```diff
-           for (const [iW, OW] of Object.entries(WW)) !UW.e.has((0, mW.n)(iW)) && OW.loaded() && (OW.unloadOnceIdle(), delete WW[iW])
+           for (const [JR, GR] of Object.entries(RR)) !nR.e.has((0, yR.m)(JR)) && GR.loaded() && (GR.unloadOnceIdle(), delete RR[JR])
```

#### 3284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24326` → after: `L24376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24376) · [Before (L24326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24326)

```diff
-   37646: (WW, iW, OW) => {
+   37561: (RR, JR, GR) => {
```

#### 3285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24328` → after: `L24378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24378) · [Before (L24328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24328)

```diff
-       e: () => EW
+       b: () => tR
```

#### 3286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24366` → after: `L24416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24416) · [Before (L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24366)

```diff
-           if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
+           if (JR > 0 && GR.searchParams.set("cache-bust", `${Date.now()}-${JR}`), await this.fetchWhole(GR, RR)) return this.scriptUrl = GR, !0;
```

#### 3287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24408` → after: `L24458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24458) · [Before (L24408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24408)

```diff
-   39514: (WW, iW, OW) => {
+   39492: (RR, JR, GR) => {
```

#### 3288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24412-L24417` → after: `L24462-L24467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24462-L24467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24462-L24467) · [Before (L24412-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24412-L24417)

```diff
-     var mW = OW(38235),
-       EW = OW(38437),
-       NW = OW(39083),
-       PW = OW(38694),
-       LW = OW(38419),
-       cW = OW(352);
+     var yR = GR(38195),
+       tR = GR(38406),
+       uR = GR(39055),
+       ZR = GR(38682),
+       qR = GR(38382),
+       iR = GR(385);
```

#### 3289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24422-L24423` → after: `L24472-L24473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24472-L24473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24472-L24473) · [Before (L24422-L24423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24422-L24423)

```diff
-         JiW: [0, 0, 0],
-         hiW: [0, 0, 0]
+         rGR: [0, 0, 0],
+         eGR: [0, 0, 0]
```

#### 3290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24427-L24428` → after: `L24477-L24478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24477-L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24477-L24478) · [Before (L24427-L24428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24427-L24428)

```diff
-       const mW = WW.lB(OW, wW, iW, null, tW);
-       return mW ? mW.position[1] - WW.Wl[1] - .01 * mW.normal[1] : null
+       const yR = RR.Vk(GR, fR, JR, null, VR);
+       return yR ? yR.position[1] - RR.Fw[1] - .01 * yR.normal[1] : null
```

#### 3291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24434` → after: `L24484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24484) · [Before (L24434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24434)

```diff
-           const EW = WW.Wl;
+           const tR = RR.Fw;
```

#### 3292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24442` → after: `L24492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24492) · [Before (L24442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24442)

```diff
-                   const mW = WW.ZZ.ul(WW.oZ.jR(iW._groundColumnX, OW, iW._groundColumnZ));
+                   const yR = RR.KK.vr(RR.NK.eT(JR._groundColumnX, GR, JR._groundColumnZ));
```

#### 3293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24457` → after: `L24507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24507) · [Before (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24457)

```diff
-       const cW = WW.Wl,
+       const iR = RR.Fw,
```

#### 3294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24460` → after: `L24510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24510) · [Before (L24460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24460)

```diff
-       return OW._groundColumnX = wW, OW._groundColumnZ = tW, OW._groundOffsetY = cW[1], OW._groundTopChunk = WW.oZ.HwW(wW, Math.floor(mW[1]) + cW[1], tW), OW._groundTopVersion = null !== (EW = null === (NW = OW._groundTopChunk) || void 0 === NW ? void 0 : NW.Ob) && void 0 !== EW  … [truncated]
+       return GR._groundColumnX = fR, GR._groundColumnZ = VR, GR._groundOffsetY = iR[1], GR._groundTopChunk = RR.NK.aVR(fR, Math.floor(yR[1]) + iR[1], VR), GR._groundTopVersion = null !== (tR = null === (uR = GR._groundTopChunk) || void 0 === uR ? void 0 : uR.Ka) && void 0 !== tR  … [truncated]
```

#### 3295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24474` → after: `L24524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24524) · [Before (L24474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24474)

```diff
-       return null !== WW && !WW.Ay && WW.Ob === iW
+       return null !== RR && !RR.oB && RR.Ka === JR
```

#### 3296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24484` → after: `L24534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24534) · [Before (L24484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24484)

```diff
-       const EW = WW.EY.YG(mW.rD);
+       const tR = RR.zC.f6(yR.Rm);
```

#### 3297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24487` → after: `L24537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24537) · [Before (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24487)

```diff
-         const OW = WW.EY.zWW(iW.rD);
+         const GR = RR.zC.oJR(JR.Rm);
```

#### 3298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24490` → after: `L24540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24540) · [Before (L24490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24490)

```diff
-       if (null !== PW) NW = PW.Mx.base[1], AW(mW);
+       if (null !== ZR) uR = ZR.Xw.base[1], eR(yR);
```

#### 3299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24492` → after: `L24542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24542) · [Before (L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24492)

```diff
-         const PW = xW(WW, OW, mW, EW.Yz);
+         const ZR = wR(RR, GR, yR, tR.B_);
```

#### 3300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24498` → after: `L24548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24548) · [Before (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24498)

```diff
-       const cW = .7 * mW.size * (1 - (EW.JiW[1] - NW) / OW);
+       const iR = .7 * yR.size * (1 - (tR.rGR[1] - uR) / GR);
```

#### 3301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24504-L24505` → after: `L24554-L24555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24554-L24555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24554-L24555) · [Before (L24504-L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24504-L24505)

```diff
-       const NW = null !== (mW = null === (EW = iW.enabledCombinator) || void 0 === EW ? void 0 : EW.setBooleanType("placeToPutShadowExists", OW)) && void 0 !== mW ? mW : OW;
-       iW._enabled !== NW && (iW._enabled = NW, WW.WK(iW._thinObjectId, NW))
+       const uR = null !== (yR = null === (tR = JR.enabledCombinator) || void 0 === tR ? void 0 : tR.setBooleanType("placeToPutShadowExists", GR)) && void 0 !== yR ? yR : GR;
+       JR._enabled !== uR && (JR._enabled = uR, RR.JA(JR._thinObjectId, uR))
```

#### 3302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24512` → after: `L24562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24562) · [Before (L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24512)

```diff
-       const OW = (0, NW.r)(WW.TZ, "nZ", (0, PW.e)({
+       const GR = (0, uR.m)(RR.lK, "vK", (0, ZR.i)({
```

#### 3303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24518-L24519` → after: `L24568-L24569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24568-L24569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24568-L24569) · [Before (L24518-L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24518-L24519)

```diff
-         const iW = (0, LW.t)("shadow_component_mat", WW.TZ.rb);
-         (0, LW.mb)(iW, {
+         const JR = (0, qR.B)("shadow_component_mat", RR.lK.tL);
+         (0, qR.gb)(JR, {
```

#### 3304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24527` → after: `L24577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24577) · [Before (L24527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24527)

```diff
-         }), OW.material = iW.mirror, (0, EW.s)(OW.material)
+         }), GR.material = JR.mirror, (0, tR.p)(GR.material)
```

#### 3305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24529-L24531` → after: `L24579-L24581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24579-L24581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24579-L24581) · [Before (L24529-L24531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24529-L24531)

```diff
-       const cW = WW.TZ.nD;
-       return cW.newObjectType("nZ", OW, {
-         aZ: 32,
+       const iR = RR.lK.RP;
+       return iR.newObjectType("vK", GR, {
+         hK: 32,
```

#### 3306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24536-L24537` → after: `L24586-L24587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24586-L24587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24586-L24587) · [Before (L24536-L24537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24536-L24537)

```diff
-       }), OW.rotationQuaternion.set(0, 0, 0, 1), WW.TZ.qD(OW, !0), OW.dD(), {
-         name: "nZ",
+       }), GR.rotationQuaternion.set(0, 0, 0, 1), RR.lK.xI(GR, !0), GR.yI(), {
+         name: "vK",
```

#### 3307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24561-L24562` → after: `L24611-L24612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24611-L24612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24611-L24612) · [Before (L24561-L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24561-L24562)

```diff
-         mY: function(WW, iW) {
-           iW._thinObjectId = cW.instantiate("nZ"), cW.setEntityId(iW._thinObjectId, WW), cW.setPickable(iW._thinObjectId, !1)
+         mC: function(RR, JR) {
+           JR._thinObjectId = iR.instantiate("vK"), iR.setEntityId(JR._thinObjectId, RR), iR.setPickable(JR._thinObjectId, !1)
```

#### 3308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24564` → after: `L24614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24614) · [Before (L24564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24564)

```diff
-         mH: function(WW, iW) {
+         eD: function(RR, JR) {
```

#### 3309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24569` → after: `L24619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24619) · [Before (L24569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24569)

```diff
-           const PW = null === (EW = null === (NW = WW.kA) || void 0 === NW ? void 0 : NW.showsCircleShadows()) || void 0 === EW || EW;
+           const ZR = null === (tR = null === (uR = RR.Be) || void 0 === uR ? void 0 : uR.showsCircleShadows()) || void 0 === tR || tR;
```

#### 3310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24577-L24578` → after: `L24627-L24628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24627-L24628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24627-L24628) · [Before (L24577-L24578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24577-L24578)

```diff
-             const EW = WW.EY.XiW(OW.rD);
-             OW.rD === WW.Dv || EW && (null !== (LW = null === (wW = EW.OmW) || void 0 === wW ? void 0 : wW.mmW) && void 0 !== LW ? LW : null === (tW = EW.mesh) || void 0 === tW ? void 0 : tW.isEnabled()) ? sW(WW, cW, iW, OW) : kW(cW, OW)
+             const tR = RR.zC.vGR(GR.Rm);
+             GR.Rm === RR.WH || tR && (null !== (qR = null === (fR = tR.SyR) || void 0 === fR ? void 0 : fR.jyR) && void 0 !== qR ? qR : null === (VR = tR.mesh) || void 0 === VR ? void 0 : VR.isEnabled()) ? WR(RR, iR, JR, GR) : UR(iR, GR)
```

#### 3311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24581` → after: `L24631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24631) · [Before (L24581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24581)

```diff
-         ZY: function(iW, OW) {
+         YC: function(JR, GR) {
```

#### 3312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24585` → after: `L24635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24635) · [Before (L24585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24585)

```diff
-             const EW = WW.EY.YG(iW.rD).Yz;
+             const tR = RR.zC.f6(JR.Rm).B_;
```

#### 3313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24592` → after: `L24642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24642) · [Before (L24592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24592)

```diff
-   38678: (WW, iW, OW) => {
+   38658: (RR, JR, GR) => {
```

#### 3314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24594-L24595` → after: `L24644-L24645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24644-L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24644-L24645) · [Before (L24594-L24595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24594-L24595)

```diff
-       b: () => EW,
-       e: () => LW
+       c: () => tR,
+       d: () => qR
```

#### 3315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24597` → after: `L24647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24647) · [Before (L24597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24597)

```diff
-     var mW = OW(38235);
+     var yR = GR(38195);
```

#### 3316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24656` → after: `L24706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24706) · [Before (L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24656)

```diff
-         return EW.matInverseToRef(WW, iW) ? iW : null
+         return tR.matInverseToRef(RR, JR) ? JR : null
```

#### 3317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24693` → after: `L24743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24743) · [Before (L24693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24693)

```diff
-       return mW.Quaternion.RotationYawPitchRollToRef(WW.rotation.y, WW.rotation.x, WW.rotation.z, NW), mW.Matrix.ComposeToRef(WW.YZ, NW, WW.position, PW), PW.m
+       return yR.Quaternion.RotationYawPitchRollToRef(RR.rotation.y, RR.rotation.x, RR.rotation.z, uR), yR.Matrix.ComposeToRef(RR.MK, uR, RR.position, ZR), ZR.m
```

#### 3318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24696` → after: `L24746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24746) · [Before (L24696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24696)

```diff
-   38470: (WW, iW, OW) => {
+   38433: (RR, JR, GR) => {
```

#### 3319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24699-L24700` → after: `L24749-L24750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24749-L24750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24749-L24750) · [Before (L24699-L24700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24699-L24700)

```diff
-       h: () => EW,
-       j: () => PW
+       f: () => tR,
+       h: () => ZR
```

#### 3320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24712` → after: `L24762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24762) · [Before (L24712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24712)

```diff
-       if ((null === OW || void 0 === OW ? void 0 : OW.frameId) === iW) return OW.hZ;
+       if ((null === GR || void 0 === GR ? void 0 : GR.frameId) === JR) return GR.gK;
```

#### 3321. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24716` → after: `L24766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24766) · [Before (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24716)

```diff
-         hZ: mW
+         gK: yR
```

#### 3322. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24720` → after: `L24770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24770) · [Before (L24720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24720)

```diff
-   38661: (WW, iW, OW) => {
+   38640: (RR, JR, GR) => {
```

#### 3323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24723` → after: `L24773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24773) · [Before (L24723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24723)

```diff
-         TZ: iW
+         lK: JR
```

#### 3324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24725` → after: `L24775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24775) · [Before (L24725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24725)

```diff
-       return !!iW.Lb || iW.Ab()
+       return !!JR.La || JR.Xa()
```

#### 3325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24729-L24730` → after: `L24779-L24780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24779-L24780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24779-L24780) · [Before (L24729-L24730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24729-L24730)

```diff
-       f: () => LW,
-       i: () => cW,
+       g: () => qR,
+       j: () => iR,
```

#### 3326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24732` → after: `L24782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24782) · [Before (L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24732)

```diff
-       p: () => NW
+       m: () => uR
```

#### 3327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24738-L24741` → after: `L24788-L24791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24788-L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24788-L24791) · [Before (L24738-L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24738-L24741)

```diff
-         E_: iW,
-         N_: OW
-       } = WW, mW = WW.m_;
-       if (WW.Kb || !iW || !OW || !(mW >= 0) || mW !== Math.floor(mW)) return !1;
+         K8: JR,
+         W8: GR
+       } = RR, yR = RR.Z8;
+       if (RR.Oa || !JR || !GR || !(yR >= 0) || yR !== Math.floor(yR)) return !1;
```

#### 3328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24768` → after: `L24818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24818) · [Before (L24768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24768)

```diff
-       const cW = WW.Kj;
+       const iR = RR.ML;
```

#### 3329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24784` → after: `L24834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24834) · [Before (L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24784)

```diff
-       return mW(WW) && iW.m_ >= 0 && !NW(iW) ? PW(OW) : OW
+       return yR(RR) && JR.Z8 >= 0 && !uR(JR) ? ZR(GR) : GR
```

#### 3330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24792-L24794` → after: `L24842-L24844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24842-L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24842-L24844) · [Before (L24792-L24794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24792-L24794)

```diff
-       const mW = WW.Hx.ZZ.Mb(iW),
-         EW = WW._texURLtoTerrainID[PW(mW.I3[0])],
-         NW = cW(WW.Hx, mW) ? void 0 === EW ? null : WW.BA(EW) : OW;
+       const yR = RR.xw.KK.va(JR),
+         tR = RR._texURLtoTerrainID[ZR(yR.B3[0])],
+         uR = iR(RR.xw, yR) ? void 0 === tR ? null : RR.he(tR) : GR;
```

#### 3331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24798` → after: `L24848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24848) · [Before (L24798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24798)

```diff
-   39017: (WW, iW, OW) => {
+   39007: (RR, JR, GR) => {
```

#### 3332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24800-L24801` → after: `L24850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24850) · [Before (L24800-L24801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24800-L24801)

```diff
-       d: () => xW,
-       f: () => ZW,
+       e: () => wR,
```

#### 3333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24803` → after: `L24852-L24853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24852-L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24852-L24853) · [Before (L24803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24803)

```diff
-       h: () => tW
+       j: () => fR,
+       l: () => VR
```

#### 3334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24805-L24809` → after: `L24855-L24859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24855-L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24855-L24859) · [Before (L24805-L24809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24805-L24809)

```diff
-     var mW = OW(38235),
-       EW = OW(39004),
-       NW = OW(38419),
-       PW = OW(38470);
-     const LW = new mW.fA(0, PW.d, 0),
+     var yR = GR(38195),
+       tR = GR(38988),
+       uR = GR(38382),
+       ZR = GR(38433);
+     const qR = new yR.Fe(0, ZR.d, 0),
```

#### 3335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24832` → after: `L24882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24882) · [Before (L24832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24832)

```diff
-       } = EW.e, NW = [OW.call(WW, "vertex", iW), OW.call(WW, "fragment", iW), mW.call(WW, iW), (0, EW.b)(WW).width];
+       } = tR.j, uR = [GR.call(RR, "vertex", JR), GR.call(RR, "fragment", JR), yR.call(RR, JR), (0, tR.e)(RR).width];
```

#### 3336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24852` → after: `L24902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24902) · [Before (L24852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24852)

```diff
-       EW && (WW.unfreeze(), (0, NW.eb)(WW, !1)), (0, NW.S)(WW), EW && requestAnimationFrame((() => {
+       tR && (RR.unfreeze(), (0, uR.db)(RR, !1)), (0, uR.R)(RR), tR && requestAnimationFrame((() => {
```

#### 3337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24854` → after: `L24904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24904) · [Before (L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24854)

```diff
-           WW.freeze(), (0, NW.eb)(WW, !0)
+           RR.freeze(), (0, uR.db)(RR, !0)
```

#### 3338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24859` → after: `L24909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24909) · [Before (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24859)

```diff
-   38669: (WW, iW, OW) => {
+   38650: (RR, JR, GR) => {
```

#### 3339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24862` → after: `L24912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24912) · [Before (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24862)

```diff
-       f: () => NW
+       g: () => uR
```

#### 3340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24875` → after: `L24925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24925) · [Before (L24875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24875)

```diff
-   38364: (WW, iW, OW) => {
+   38325: (RR, JR, GR) => {
```

#### 3341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24877-L24878` → after: `L24927-L24928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24927-L24928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24927-L24928) · [Before (L24877-L24878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24877-L24878)

```diff
-       e: () => mW,
-       i: () => EW
+       d: () => yR,
+       h: () => tR
```

#### 3342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24906` → after: `L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24956) · [Before (L24906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24906)

```diff
-   38626: (WW, iW, OW) => {
+   38616: (RR, JR, GR) => {
```

#### 3343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24908-L24909` → after: `L24958-L24959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24958-L24959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24958-L24959) · [Before (L24908-L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24908-L24909)

```diff
-       d: () => wW,
-       g: () => LW,
+       e: () => fR,
+       h: () => qR,
```

#### 3344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24912-L24913` → after: `L24962-L24963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24962-L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24962-L24963) · [Before (L24912-L24913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24912-L24913)

```diff
-     var mW = OW(38623),
-       EW = OW(38631);
+     var yR = GR(38612),
+       tR = GR(38619);
```

#### 3345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24918-L24919` → after: `L24968-L24969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24968-L24969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24968-L24969) · [Before (L24918-L24919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24918-L24919)

```diff
-       OW._noaFaceGroups = null !== iW && void 0 !== iW ? iW : null, OW._noaFaceEpoch = -1, OW._noaFaceMask = -1, OW._noaFaceCount = -1, OW._noaFaceMaterial = null;
-       const mW = WW.hY;
+       GR._noaFaceGroups = null !== JR && void 0 !== JR ? JR : null, GR._noaFaceEpoch = -1, GR._noaFaceMask = -1, GR._noaFaceCount = -1, GR._noaFaceMaterial = null;
+       const yR = RR.XM;
```

#### 3346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24936` → after: `L24986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24986) · [Before (L24936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24936)

```diff
-       for (let PW = 0; PW < mW.f; PW++) {
+       for (let ZR = 0; ZR < yR.g; ZR++) {
```

#### 3347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24945` → after: `L24995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L24995) · [Before (L24945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24945)

```diff
-         this.jZ = WW, this.engine = iW, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+         this.LK = RR, this.engine = JR, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 3348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24960` → after: `L25010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25010) · [Before (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24960)

```diff
-         } = this, lW = this.jZ / 2, AW = lW * Math.sqrt(3), bW = WW.data, jW = WW.length;
+         } = this, rR = this.LK / 2, eR = rR * Math.sqrt(3), aR = RR.data, LR = RR.length;
```

#### 3349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24967` → after: `L25017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25017) · [Before (L24967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24967)

```diff
-             const OW = WW.hY,
+             const GR = RR.XM,
```

#### 3350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24970` → after: `L25020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25020) · [Before (L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24970)

```diff
-             if (PW && NW && (0, mW.w)(WW.material)) {
+             if (ZR && uR && (0, yR.s)(RR.material)) {
```

#### 3351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24979` → after: `L25029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25029) · [Before (L24979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24979)

```diff
-               wW = (0, EW.m)(iW, mW, NW, PW, (0, EW.h)(bW, tW))
+               fR = (0, tR.k)(JR, yR, uR, ZR, (0, tR.f)(aR, VR))
```

#### 3352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24984` → after: `L25034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25034) · [Before (L24984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24984)

```diff
-                 EW = iW[mW.f]; - 1 !== wW && (EW = cW(iW, wW, xW), OW = xW[0]), WW._noaFaceCount = EW, NW.indexStart = 6 * OW, NW.indexCount = 6 * EW, NW.setBoundingInfo(WW.KV())
+                 tR = JR[yR.g]; - 1 !== fR && (tR = iR(JR, fR, wR), GR = wR[0]), RR._noaFaceCount = tR, uR.indexStart = 6 * GR, uR.indexCount = 6 * tR, uR.setBoundingInfo(RR.Tm())
```

#### 3353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24993` → after: `L25043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25043) · [Before (L24993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24993)

```diff
-   39588: (WW, iW, OW) => {
+   39568: (RR, JR, GR) => {
```

#### 3354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24995` → after: `L25045-L25046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25045-L25046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25045-L25046) · [Before (L24995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24995)

```diff
-       D: () => PW,
+       $: () => dR,
+       B: () => tR,
```

#### 3355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24999-L25001` → after: `L25051-L25053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25051-L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25051-L25053) · [Before (L24999-L25001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L24999-L25001)

```diff
-       M: () => KW,
-       O: () => vW,
-       R: () => yW,
+       N: () => BR,
+       P: () => rR,
+       Q: () => wR,
```

#### 3356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25003-L25008` → after: `L25055-L25061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25055-L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25055-L25061) · [Before (L25003-L25008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25003-L25008)

```diff
-       W: () => xW,
-       Z: () => jW,
-       ab: () => AW,
-       e: () => SW,
-       eb: () => bW,
-       fb: () => DW,
+       U: () => eR,
+       V: () => aR,
+       Y: () => cR,
+       c: () => XR,
+       db: () => jR,
+       g: () => oR,
+       hb: () => IR,
```

#### 3357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25011` → after: `L25064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25064) · [Before (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25011)

```diff
-       m: () => kW,
+       l: () => WR,
```

#### 3358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25014-L25015` → after: `L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25067) · [Before (L25014-L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25014-L25015)

```diff
-       nb: () => pW,
-       ob: () => VW,
+       p: () => nR,
```

#### 3359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25021-L25022` → after: `L25072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25072) · [Before (L25021-L25022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25021-L25022)

```diff
-       x: () => LW,
-       z: () => NW
+       x: () => ZR
```

#### 3360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25024` → after: `L25074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25074) · [Before (L25024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25024)

```diff
-     var mW = OW(3884);
+     var yR = GR(3982);
```

#### 3361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25046` → after: `L25096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25096) · [Before (L25046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25046)

```diff
-       return WW.hA.get((iW / 9 | 0) - 1, (iW / 3 | 0) % 3 - 1, iW % 3 - 1)
+       return RR.oe.get((JR / 9 | 0) - 1, (JR / 3 | 0) % 3 - 1, JR % 3 - 1)
```

#### 3362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25104` → after: `L25154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25154) · [Before (L25104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25104)

```diff
-         if (mW = WW.size, mW >= OW) throw new Error(`More than ${OW} distinct registry values`);
+         if (yR = RR.size, yR >= GR) throw new Error(`More than ${GR} distinct registry values`);
```

#### 3363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25111` → after: `L25161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25161) · [Before (L25111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25111)

```diff
-       return `${typeof WW}:${String(WW)}`
+       return `${typeof RR}:${String(RR)}`
```

#### 3364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25116` → after: `L25166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25166) · [Before (L25116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25116)

```diff
-         return Math.max(WW.el.length, WW.tb.length, WW.lT.length, WW.jT.length, WW.jb.length, WW.Ub.length, WW.kb.length)
+         return Math.max(RR.Dr.length, RR.Ua.length, RR.Av.length, RR.Dv.length, RR.Ba.length, RR.la.length, RR.ga.length)
```

#### 3365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25123-L25126` → after: `L25173-L25176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25173-L25176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25173-L25176) · [Before (L25123-L25126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25123-L25126)

```diff
-         const OW = WW.tb[AW],
-           bW = WW.jT[AW],
-           jW = `${lW=WW.jb[AW],lW?`[${Array.from(lW).join()}]`:"none"}|${XW(WW.Ub[AW])}|${XW(WW.kb[AW])}`;
-         xW[AW] = CW(mW, WW.el[AW], 16) | CW(EW, OW, 16) << 4 | (OW ? PW : 0) | (WW.lT[AW] ? LW : 0) | (bW ? cW : 0) | (bW && (bW.eT || bW.hT) ? wW : 0) | (null !== iW && void 0 !== iW && iW(AW) ? tW : 0) | CW(NW, jW, 65536) << ZW >>> 0
+         const GR = RR.Ua[eR],
+           aR = RR.Dv[eR],
+           LR = `${rR=RR.Ba[eR],rR?`[${Array.from(rR).join()}]`:"none"}|${SR(RR.la[eR])}|${SR(RR.ga[eR])}`;
+         wR[eR] = zR(yR, RR.Dr[eR], 16) | zR(tR, GR, 16) << 4 | (GR ? ZR : 0) | (RR.Av[eR] ? qR : 0) | (aR ? iR : 0) | (aR && (aR.Fv || aR.Qv) ? fR : 0) | (null !== JR && void 0 !== JR && JR(eR) ? VR : 0) | zR(uR, LR, 65536) << KR >>> 0
```

#### 3366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25140` → after: `L25190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25190) · [Before (L25140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25140)

```diff
-       } = iW, tW = null === (EW = WW.Hx.TZ) || void 0 === EW ? void 0 : EW.qb, ZW = [];
+       } = JR, VR = null === (tR = RR.xw.lK) || void 0 === tR ? void 0 : tR.sa, KR = [];
```

#### 3367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25144` → after: `L25194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25194) · [Before (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25144)

```diff
-           EW = null !== (vW = WW.Tb.Jb(PW[iW], PW[iW + 1], PW[iW + 2])) && void 0 !== vW ? vW : null;
+           tR = null !== (HR = RR.Ha.oa(ZR[JR], ZR[JR + 1], ZR[JR + 2])) && void 0 !== HR ? HR : null;
```

#### 3368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25149` → after: `L25199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25199) · [Before (L25149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25149)

```diff
-         EW.Rb = !1, EW.Ob += PW[iW + JW];
+         tR.ha = !1, tR.Ka += ZR[JR + pR];
```

#### 3369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25151-L25152` → after: `L25201-L25202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25201-L25202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25201-L25202) · [Before (L25151-L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25151-L25152)

```diff
-         NW & xW && (EW.sA = !1), NW & lW && (EW.YA = !1), NW & AW && (EW.jy = !0), NW & bW && (EW.Yb = !0, EW.Hb = !0);
-         for (let WW = 0; WW < 3; WW++) EW.Sb[WW] += PW[iW + HW + WW];
+         uR & wR && (tR.le = !1), uR & rR && (tR.xe = !1), uR & eR && (tR.zB = !0), uR & aR && (tR.Na = !0, tR.Pa = !0);
+         for (let RR = 0; RR < 3; RR++) tR.xa[RR] += ZR[JR + bR + RR];
```

#### 3370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25158` → after: `L25208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25208) · [Before (L25158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25158)

```diff
-           iW && (wW >>> OW & 1 && (iW.Rb = !1), cW >>> OW & 1 && (iW.Yb = !0, iW.Hb = !0, iW.Eb = !0))
+           JR && (fR >>> GR & 1 && (JR.ha = !1), iR >>> GR & 1 && (JR.Na = !0, JR.Pa = !0, JR.ra = !0))
```

#### 3371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25162-L25164` → after: `L25212-L25214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25212-L25214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25212-L25214) · [Before (L25162-L25164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25162-L25164)

```diff
-           MW = EW.zl;
-         for (let WW = kW, OW = 0; 0 !== WW; WW >>>= 1, OW++) 0 === (1 & WW) || 0 === (sW >>> OW & 1) && MW[OW] === LW[2 * iW + eW + OW] || (MW[OW] = mW.i);
-         NW & jW && (tW ? (EW.Yb = !0, EW.Eb = !0) : EW.Db = !1), EW.Yb && (EW.Eb = !0)
+           AR = tR.hr;
+         for (let RR = UR, GR = 0; 0 !== RR; RR >>>= 1, GR++) 0 === (1 & RR) || 0 === (WR >>> GR & 1) && AR[GR] === qR[2 * JR + DR + GR] || (AR[GR] = yR.g);
+         uR & LR && (VR ? (tR.Na = !0, tR.ra = !0) : tR.da = !1), tR.Na && (tR.ra = !0)
```

#### 3372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25166` → after: `L25216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25216) · [Before (L25166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25166)

```diff
-       const gW = WW.Hx.fb;
+       const oR = RR.xw.ka;
```

#### 3373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25175-L25176` → after: `L25225-L25226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25225-L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25225-L25226) · [Before (L25175-L25176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25175-L25176)

```diff
-           case UW:
-             gW.pT(WW, cW[mW + 1] >>> 16, OW, EW, NW);
+           case nR:
+             oR.LO(RR, iR[yR + 1] >>> 16, GR, tR, uR);
```

#### 3374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25178-L25179` → after: `L25228-L25229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25228-L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25228-L25229) · [Before (L25178-L25179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25178-L25179)

```diff
-           case kW:
-             WW.Sy.add(OW, EW, NW);
+           case UR:
+             RR.YB.add(GR, tR, uR);
```

#### 3375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25181-L25182` → after: `L25231-L25232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25231-L25232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25231-L25232) · [Before (L25181-L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25181-L25182)

```diff
-           case sW:
-             WW.Sy.remove(OW, EW, NW)
+           case WR:
+             RR.YB.remove(GR, tR, uR)
```

#### 3376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25189-L25190` → after: `L25239-L25240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25239-L25240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25239-L25240) · [Before (L25189-L25190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25189-L25190)

```diff
-           EW = OW === SW ? iW : YW(iW, OW);
-         EW && WW.yb(EW, !0)
+           tR = GR === XR ? JR : MR(JR, GR);
+         tR && RR.Da(tR, !0)
```

#### 3377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25194` → after: `L25244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25244) · [Before (L25194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25194)

```diff
-   38584: (WW, iW, OW) => {
+   38557: (RR, JR, GR) => {
```

#### 3378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25196-L25197` → after: `L25246-L25247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25246-L25247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25246-L25247) · [Before (L25196-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25196-L25197)

```diff
-       b: () => NW,
-       c: () => EW
+       e: () => uR,
+       h: () => tR
```

#### 3379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25202` → after: `L25252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25252) · [Before (L25202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25202)

```diff
-       return 6 === (null === WW || void 0 === WW ? void 0 : WW.length) ? WW : mW
+       return 6 === (null === RR || void 0 === RR ? void 0 : RR.length) ? RR : yR
```

#### 3380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25217` → after: `L25267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25267) · [Before (L25217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25217)

```diff
-   38443: (WW, iW, OW) => {
+   38409: (RR, JR, GR) => {
```

#### 3381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25219-L25220` → after: `L25269-L25270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25269-L25270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25269-L25270) · [Before (L25219-L25220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25219-L25220)

```diff
-       c: () => LW,
-       d: () => wW
+       e: () => qR,
+       f: () => fR
```

#### 3382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25248` → after: `L25298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25298) · [Before (L25248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25248)

```diff
-   38645: (WW, iW, OW) => {
+   38628: (RR, JR, GR) => {
```

#### 3383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25250-L25251` → after: `L25300-L25301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25300-L25301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25300-L25301) · [Before (L25250-L25251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25250-L25251)

```diff
-       e: () => PW,
-       f: () => NW
+       b: () => ZR,
+       d: () => uR
```

#### 3384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25253-L25254` → after: `L25303-L25304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25303-L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25303-L25304) · [Before (L25253-L25254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25253-L25254)

```diff
-     var mW = OW(3911),
-       EW = OW(38639);
+     var yR = GR(4006),
+       tR = GR(38624);
```

#### 3385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25266` → after: `L25316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25316) · [Before (L25266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25266)

```diff
-         const cW = (0, mW.e)(WW, iW, OW),
+         const iR = (0, yR.g)(RR, JR, GR),
```

#### 3386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25295` → after: `L25345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25345) · [Before (L25295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25295)

```diff
-         this.records.delete((0, mW.e)(WW, iW, OW)) && this.recordChanged(WW, iW, OW)
+         this.records.delete((0, yR.g)(RR, JR, GR)) && this.recordChanged(RR, JR, GR)
```

#### 3387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25298-L25299` → after: `L25348-L25349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25348-L25349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25348-L25349) · [Before (L25298-L25299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25298-L25299)

```diff
-         if (!Number.isFinite(WW) || !Number.isFinite(iW) || !Number.isFinite(OW) || mW % EW.e !== 0) return !1;
-         const cW = mW / EW.e,
+         if (!Number.isFinite(RR) || !Number.isFinite(JR) || !Number.isFinite(GR) || yR % tR.f !== 0) return !1;
+         const iR = yR / tR.f,
```

#### 3388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25313` → after: `L25363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25363) · [Before (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25313)

```diff
-           const WW = EW.e,
+           const RR = tR.f,
```

#### 3389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25331` → after: `L25381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25381) · [Before (L25331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25331)

```diff
-               if (this.opaque[NW.jR(LW, WW, iW)]) return !1;
+               if (this.opaque[uR.eT(qR, RR, JR)]) return !1;
```

#### 3390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25350` → after: `L25400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25400) · [Before (L25350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25350)

```diff
-         const cW = EW.e;
+         const iR = tR.f;
```

#### 3391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25385` → after: `L25435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25435) · [Before (L25385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25385)

```diff
-         const NW = EW.e,
+         const uR = tR.f,
```

#### 3392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25431` → after: `L25481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25481) · [Before (L25431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25431)

```diff
-                 this.ringRecords[JW] = this.records.get((0, mW.e)(WW - 1 + EW, iW - 1 + NW, OW - 1 + PW)), this.ringAir[3 * JW] = this.ringAir[3 * JW + 1] = this.ringAir[3 * JW + 2] = NaN, this.ringChunks[JW] = this.air ? this.air.chunkAt(WW - 1 + EW, iW - 1 + NW, OW - 1 + PW) :  … [truncated]
+                 this.ringRecords[pR] = this.records.get((0, yR.g)(RR - 1 + tR, JR - 1 + uR, GR - 1 + ZR)), this.ringAir[3 * pR] = this.ringAir[3 * pR + 1] = this.ringAir[3 * pR + 2] = NaN, this.ringChunks[pR] = this.air ? this.air.chunkAt(RR - 1 + tR, JR - 1 + uR, GR - 1 + ZR) :  … [truncated]
```

#### 3393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25451` → after: `L25501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25501) · [Before (L25451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25451)

```diff
-           WW >= 0 && NW >= 0 && PW >= 0 && WW < cW && NW < wW && PW < tW && (this.ringRecords[(WW * wW + NW) * tW + PW] = this.records.get((0, mW.e)(ZW[lW], ZW[lW + 1], ZW[lW + 2])), this.around(WW - 1, NW - 1, PW - 1))
+           RR >= 0 && uR >= 0 && ZR >= 0 && RR < iR && uR < fR && ZR < VR && (this.ringRecords[(RR * fR + uR) * VR + ZR] = this.records.get((0, yR.g)(KR[rR], KR[rR + 1], KR[rR + 2])), this.around(RR - 1, uR - 1, ZR - 1))
```

#### 3394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25502` → after: `L25552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25552) · [Before (L25502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25502)

```diff
-         return EW < iW && NW < OW && PW < mW ? (EW * OW + NW) * mW + PW : -1
+         return tR < JR && uR < GR && ZR < yR ? (tR * GR + uR) * yR + ZR : -1
```

#### 3395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25524` → after: `L25574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25574) · [Before (L25524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25524)

```diff
-         const AW = EW.e,
+         const eR = tR.f,
```

#### 3396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25532` → after: `L25582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25582) · [Before (L25532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25532)

```diff
-             for (let iW = 0; iW < AW; iW++, NW++) kW[NW] = lW ? lW[(0, EW.s)(tW, WW, iW)] : sW
+             for (let JR = 0; JR < eR; JR++, uR++) UR[uR] = rR ? rR[(0, tR.r)(VR, RR, JR)] : WR
```

#### 3397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25540` → after: `L25590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25590) · [Before (L25540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25540)

```diff
-         const WW = EW.e,
+         const RR = tR.f,
```

#### 3398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25563` → after: `L25613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25613) · [Before (L25563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25563)

```diff
-         const WW = EW.e;
+         const RR = tR.f;
```

#### 3399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25567` → after: `L25617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25617) · [Before (L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25567)

```diff
-         const WW = EW.e,
+         const RR = tR.f,
```

#### 3400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25583-L25585` → after: `L25633-L25635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25633-L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25633-L25635) · [Before (L25583-L25585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25583-L25585)

```diff
-             jW = iW > 0 ? NW - 1 - cW : cW,
-             KW = OW > 0 ? PW - 1 - wW : wW,
-             SW = mW > 0 ? LW - 1 - tW : tW,
+             LR = JR > 0 ? uR - 1 - iR : iR,
+             CR = GR > 0 ? ZR - 1 - fR : fR,
+             XR = yR > 0 ? qR - 1 - VR : VR,
```

#### 3401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25607` → after: `L25657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25657) · [Before (L25607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25607)

```diff
-                 if (DW + iW + WW <= 1) OW = DW + iW + WW === 0 ? ZW[NW] & UW ? sW : 63 : DW > 0 ? MW(JW[NW - hW], ZW[NW - hW], uW, !0, xW) : iW > 0 ? MW(JW[NW - HW], ZW[NW - HW], oW, !0, xW) : MW(JW[NW - nW], ZW[NW - nW], dW, !0, xW);
+                 if (cR + JR + RR <= 1) GR = cR + JR + RR === 0 ? KR[uR] & nR ? WR : 63 : cR > 0 ? AR(pR[uR - gR], KR[uR - gR], OR, !0, wR) : JR > 0 ? AR(pR[uR - bR], KR[uR - bR], xR, !0, wR) : AR(pR[uR - vR], KR[uR - vR], NR, !0, wR);
```

#### 3402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25613` → after: `L25663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25663) · [Before (L25613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25613)

```diff
-                       OW = WW & kW || iW & UW ? sW : WW & xW[iW * EW.h + uW] ? eW : 0
+                       GR = RR & UR || JR & nR ? WR : RR & wR[JR * tR.g + OR] ? DR : 0
```

#### 3403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25620` → after: `L25670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25670) · [Before (L25620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25620)

```diff
-                       OW |= WW & kW || iW & UW ? sW : WW & xW[iW * EW.h + oW] ? vW : 0
+                       GR |= RR & UR || JR & nR ? WR : RR & wR[JR * tR.g + xR] ? HR : 0
```

#### 3404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25627` → after: `L25677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25677) · [Before (L25627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25627)

```diff
-                       OW |= WW & kW || iW & UW ? sW : WW & xW[iW * EW.h + dW] ? gW : 0
+                       GR |= RR & UR || JR & nR ? WR : RR & wR[JR * tR.g + NR] ? oR : 0
```

#### 3405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25642` → after: `L25692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25692) · [Before (L25642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25642)

```diff
-         const PW = EW.e,
+         const ZR = tR.f,
```

#### 3406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25650-L25652` → after: `L25700-L25702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25700-L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25700-L25702) · [Before (L25650-L25652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25650-L25652)

```diff
-           jW = Math.min(NW, lW > 0 ? LW - 1 - tW : tW),
-           UW = AW > 0 ? cW - 1 - ZW : ZW,
-           kW = bW > 0 ? wW - 1 - xW : xW,
+           LR = Math.min(uR, rR > 0 ? qR - 1 - VR : VR),
+           nR = eR > 0 ? iR - 1 - KR : KR,
+           UR = aR > 0 ? fR - 1 - wR : wR,
```

#### 3407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25654` → after: `L25704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25704) · [Before (L25654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25654)

```diff
-         return sW[0] = Math.floor((lW > 0 ? tW + iW : tW - jW) / PW), sW[1] = Math.floor((lW > 0 ? tW + jW : tW - iW) / PW), sW[2] = Math.floor((AW > 0 ? ZW + OW : ZW - UW) / PW), sW[3] = Math.floor((AW > 0 ? ZW + UW : ZW - OW) / PW), sW[4] = Math.floor((bW > 0 ? xW + mW : xW - k … [truncated]
+         return WR[0] = Math.floor((rR > 0 ? VR + JR : VR - LR) / ZR), WR[1] = Math.floor((rR > 0 ? VR + LR : VR - JR) / ZR), WR[2] = Math.floor((eR > 0 ? KR + GR : KR - nR) / ZR), WR[3] = Math.floor((eR > 0 ? KR + nR : KR - GR) / ZR), WR[4] = Math.floor((aR > 0 ? wR + yR : wR - U … [truncated]
```

#### 3408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25662` → after: `L25712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25712) · [Before (L25662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25662)

```diff
-         const PW = EW.e,
+         const ZR = tR.f,
```

#### 3409. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25684-L25686` → after: `L25734-L25736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25734-L25736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25734-L25736) · [Before (L25684-L25686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25684-L25686)

```diff
-                         const PW = 1 & iW ? AW - mW : mW - AW,
-                           LW = 2 & iW ? bW - EW : EW - bW,
-                           cW = 4 & iW ? jW - NW : NW - jW;
+                         const ZR = 1 & JR ? eR - yR : yR - eR,
+                           qR = 2 & JR ? aR - tR : tR - aR,
+                           iR = 4 & JR ? LR - uR : uR - LR;
```

#### 3410. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25727` → after: `L25777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25777) · [Before (L25727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25727)

```diff
-         return 0 === WW ? (this.size[1] + 2) * iW : 1 === WW ? iW : 1
+         return 0 === RR ? (this.size[1] + 2) * JR : 1 === RR ? JR : 1
```

#### 3411. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25738-L25739` → after: `L25788-L25789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25788-L25789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25788-L25789) · [Before (L25738-L25739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25738-L25739)

```diff
-       const mW = WW + EW.e - 1;
-       return (OW > 0 ? mW - iW : iW - WW) < 0 ? -1 : Math.max(0, OW > 0 ? WW - iW : iW - mW)
+       const yR = RR + tR.f - 1;
+       return (GR > 0 ? yR - JR : JR - RR) < 0 ? -1 : Math.max(0, GR > 0 ? RR - JR : JR - yR)
```

#### 3412. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25755` → after: `L25805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25805) · [Before (L25755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25755)

```diff
-       return 0 === WW ? 0 : WW & kW || iW & UW ? sW : mW || WW & NW[iW * EW.h + OW] ? 1 << (1 ^ OW) : 0
+       return 0 === RR ? 0 : RR & UR || JR & nR ? WR : yR || RR & uR[JR * tR.g + GR] ? 1 << (1 ^ GR) : 0
```

#### 3413. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25761` → after: `L25811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25811) · [Before (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25761)

```diff
-       if (0 === SW.length && (KW = new Uint8Array((EW.b + 1) * EW.h), SW = new Uint8Array(EW.b + 1)), !SW[WW]) {
+       if (0 === XR.length && (CR = new Uint8Array((tR.b + 1) * tR.g), XR = new Uint8Array(tR.b + 1)), !XR[RR]) {
```

#### 3414. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25763` → after: `L25813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25813) · [Before (L25763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25763)

```diff
-         for (let iW = 0; iW < EW.h; iW++) KW[WW * EW.h + iW] = (0, EW.u)(WW, iW)
+         for (let JR = 0; JR < tR.g; JR++) CR[RR * tR.g + JR] = (0, tR.u)(RR, JR)
```

#### 3415. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25767` → after: `L25817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25817) · [Before (L25767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25767)

```diff
-   38639: (WW, iW, OW) => {
+   38624: (RR, JR, GR) => {
```

#### 3416. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25770-L25772` → after: `L25820-L25822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25820-L25822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25820-L25822) · [Before (L25770-L25772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25770-L25772)

```diff
-       e: () => PW,
-       h: () => mW,
-       l: () => xW,
+       f: () => ZR,
+       g: () => yR,
+       j: () => wR,
```

#### 3417. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25775` → after: `L25825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25825) · [Before (L25775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25775)

```diff
-       s: () => ZW,
+       r: () => KR,
```

#### 3418. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25850` → after: `L25900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25900) · [Before (L25850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25850)

```diff
-           const EW = null === NW ? lW : NW[mW];
+           const tR = null === uR ? rR : uR[yR];
```

#### 3419. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25872` → after: `L25922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L25922) · [Before (L25872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25872)

```diff
-       return iW ? cW.fill(EW) : bW(WW, OW, mW, NW, cW, PW) ? cW : null
+       return JR ? iR.fill(tR) : aR(RR, GR, yR, uR, iR, ZR) ? iR : null
```

#### 3420. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25966` → after: `L26016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26016) · [Before (L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25966)

```diff
-   39580: (WW, iW, OW) => {
+   39564: (RR, JR, GR) => {
```

#### 3421. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25968` → after: `L26018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26018) · [Before (L25968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25968)

```diff
-       e: () => PW
+       c: () => ZR
```

#### 3422. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25970` → after: `L26020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26020) · [Before (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25970)

```diff
-     var mW = OW(3891),
+     var yR = GR(3991),
```

#### 3423. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25972` → after: `L26022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26022) · [Before (L25972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25972)

```diff
-       NW = OW(38900);
+       uR = GR(38891);
```

#### 3424. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25978` → after: `L26028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26028) · [Before (L25978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25978)

```diff
-         return 32 === WW && iW.isBloxdWasmReady() ? new PW(WW, iW, iW.getBloxdWasm().HE.Ml(), OW) : PW.js(WW)
+         return 32 === RR && JR.isBloxdWasmReady() ? new ZR(RR, JR, JR.getBloxdWasm().BG.nr(), GR) : ZR.js(RR)
```

#### 3425. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25981` → after: `L26031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26031) · [Before (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25981)

```diff
-         this.size = WW, this.wasm = iW, this.wZ = mW, this.volume = void 0, this.oZ = void 0, this.BL = new Map, this.unsubscribe = [], this.volume = WW * WW * WW, this.oZ = OW, iW && this.unsubscribe.push(iW.onBloxdWasmMemoryGrown((WW => {
+         this.size = RR, this.wasm = JR, this.fK = yR, this.volume = void 0, this.NK = void 0, this.Qq = new Map, this.unsubscribe = [], this.volume = RR * RR * RR, this.NK = GR, JR && this.unsubscribe.push(JR.onBloxdWasmMemoryGrown((RR => {
```

#### 3426. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25988` → after: `L26038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26038) · [Before (L25988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25988)

```diff
-         return this.oZ
+         return this.NK
```

#### 3427. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25990-L25991` → after: `L26040-L26041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26040-L26041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26040-L26041) · [Before (L25990-L25991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25990-L25991)

```diff
-       DwW() {
-         return this.oZ ? null : this.newArray()
+       pVR() {
+         return this.NK ? null : this.newArray()
```

#### 3428. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25994` → after: `L26044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26044) · [Before (L25994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25994)

```diff
-         if (WW && (this.BL.has(WW) || !this.oZ)) return WW;
+         if (RR && (this.Qq.has(RR) || !this.NK)) return RR;
```

#### 3429. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25996` → after: `L26046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26046) · [Before (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25996)

```diff
-           const OW = iW.Nl(!WW);
+           const GR = JR.Jr(!RR);
```

#### 3430. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25999` → after: `L26049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26049) · [Before (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L25999)

```diff
-             ptr: iW.Dl(OW)
+             ptr: JR.Ir(GR)
```

#### 3431. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26002` → after: `L26052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26052) · [Before (L26002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26002)

```diff
-         if (!iW) return null !== WW && void 0 !== WW ? WW : this.newArray();
+         if (!JR) return null !== RR && void 0 !== RR ? RR : this.newArray();
```

#### 3432. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26006` → after: `L26056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26056) · [Before (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26006)

```diff
-         return this.BL.set(mW, iW), mW
+         return this.Qq.set(yR, JR), yR
```

#### 3433. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26009-L26011` → after: `L26059-L26061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26059-L26061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26059-L26061) · [Before (L26009-L26011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26009-L26011)

```diff
-         const iW = this.BL.get(WW);
-         return iW && this.oZ ? {
-           oZ: this.oZ,
+         const JR = this.Qq.get(RR);
+         return JR && this.NK ? {
+           NK: this.NK,
```

#### 3434. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26016-L26017` → after: `L26066-L26067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26066-L26067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26066-L26067) · [Before (L26016-L26017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26016-L26017)

```diff
-         if (!this.oZ) return null;
-         for (const iW of this.BL.values())
+         if (!this.NK) return null;
+         for (const JR of this.Qq.values())
```

#### 3435. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26022` → after: `L26072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26072) · [Before (L26022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26022)

```diff
-         const EW = this.BL.get(mW);
+         const tR = this.Qq.get(yR);
```

#### 3436. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26024` → after: `L26074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26074) · [Before (L26024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26024)

```diff
-           mW.Yl(WW, iW, OW, EW.slot)
+           yR.Ar(RR, JR, GR, tR.slot)
```

#### 3437. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26028-L26030` → after: `L26078-L26080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26078-L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26078-L26080) · [Before (L26028-L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26028-L26030)

```diff
-         const iW = this.BL.get(WW);
-         iW && (this.BL.delete(WW), WW.data = new Uint16Array(0), this.call("freeing a chunk's slot", (WW => {
-           WW.ll(iW.slot)
+         const JR = this.Qq.get(RR);
+         JR && (this.Qq.delete(RR), RR.data = new Uint16Array(0), this.call("freeing a chunk's slot", (RR => {
+           RR.Vr(JR.slot)
```

#### 3438. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26034-L26036` → after: `L26084-L26086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26084-L26086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26084-L26086) · [Before (L26034-L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26034-L26036)

```diff
-         const iW = this.BL.get(WW),
-           OW = iW && this.call("encoding a chunk", (WW => WW.tl(iW.slot)));
-         return null !== OW && void 0 !== OW ? OW : NW.encode(WW.data)
+         const JR = this.Qq.get(RR),
+           GR = JR && this.call("encoding a chunk", (RR => RR.Zr(JR.slot)));
+         return null !== GR && void 0 !== GR ? GR : uR.encode(RR.data)
```

#### 3439. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26039` → after: `L26089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26089) · [Before (L26039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26039)

```diff
-         return this.BL.size
+         return this.Qq.size
```

#### 3440. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26043-L26044` → after: `L26093-L26094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26093-L26094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26093-L26094) · [Before (L26043-L26044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26043-L26044)

```diff
-         const OW = null !== (WW = null === (iW = this.oZ) || void 0 === iW ? void 0 : iW.Al()) && void 0 !== WW ? WW : 0;
-         if (OW !== this.BL.size) throw new Error(`The chunk store holds ${OW} slots for ${this.BL.size} arrays`)
+         const GR = null !== (RR = null === (JR = this.NK) || void 0 === JR ? void 0 : JR.Kr()) && void 0 !== RR ? RR : 0;
+         if (GR !== this.Qq.size) throw new Error(`The chunk store holds ${GR} slots for ${this.Qq.size} arrays`)
```

#### 3441. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26050` → after: `L26100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L26100) · [Before (L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L26050)

```diff
-         if (!this.oZ) return null;
+         if (!this.NK) return null;
```
