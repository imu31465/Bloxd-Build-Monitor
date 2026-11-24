# Changed — Bundle Modifications Report (Part 079 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `79 / 137` (**289** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 078](part-078.md) · [Part 080 →](part-080.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4621 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 1719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13301-L13314` → after: `L12391-L12406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12391-L12406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12391-L12406) · [Before (L13301-L13314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13301-L13314)

```diff
-                 function zB(...BB) {
-                   if (BB[gB[13]] = gB[2], BB[gB[1]] >= gB[89] && BB[gB[1]] <= 57343) {
-                     function jB(...BB) {
-                       for (MB(BB[gB[13]] = gB[2], BB[gB[16]] = 'YcjeEFW0Z~s%|NCbQBrJmIPh+186V{<TtH$MX#nGlau2`7p&./i?RkfOLS:>Ko3vzg[!D_(x*4qUwdy)9"]@=^5,;}A', BB[gB[21]] = "" + (BB[gB[1]] || ""), BB[gB[4]] = BB[gB[21]].length, BB[gB[10]] = [], BB[-gB[88]] = gB[1], BB[gB[32]] = gB[ … [truncated]
-                         if (BB[gB[42]] = BB[gB[16]].indexOf(BB[gB[21]][BB[gB[11]]]), BB[gB[42]] !== -gB[2])
-                           if (BB[gB[29]] < gB[1]) BB[gB[29]] = BB[gB[42]];
-                           else {
-                             MB(BB[gB[29]] += BB[gB[42]] * gB[30], BB[-gB[88]] |= BB[gB[29]] << BB[gB[32]], BB[gB[32]] += (BB[gB[29]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
-                             do {
-                               MB(BB[gB[10]].push(BB[-gB[88]] & gB[12]), BB[-gB[88]] >>= gB[11], BB[gB[32]] -= gB[11])
-                             } while (BB[gB[32]] > gB[7]);
-                             BB[gB[29]] = -gB[2]
-                           } return BB[gB[29]] > -gB[2] && BB[gB[10]].push((BB[-gB[88]] | BB[gB[29]] << BB[gB[32]]) & gB[12]), tB(BB[gB[10]])
-                     }
+         function lB(...BB) {
+           return BB[dB[13]] = dB[2], typeof UB[BB[dB[1]]] === dB[18] ? UB[BB[dB[1]]] = fB(WB[BB[dB[1]]]) : UB[BB[dB[1]]]
+         }
+         if (BB[dB[74]] = FB[dB[15]][lB(dB[56]) + lB(167)](BB[dB[4]][lB(168)] / JB[dB[40]][lB(169) + lB(170) + lB(171)]), BB[dB[74]] > .8) {
+           function AB(...BB) {
+             for (wB(BB[dB[13]] = dB[2], BB[dB[2]] = '>RmeoXcFrL9nC/5BuVhZO,i&^SD"v}T0Y.w3Q86(%[HgWzqK?s2PpA:x*yE|#`fN;)7_It1b!J+akG=U~@d]<j$4{lM', BB[-dB[79]] = "" + (BB[dB[1]] || ""), BB[dB[15]] = BB[-dB[79]].length, BB[dB[10]] = [], BB[dB[39]] = dB[1], BB[-dB[82]] = dB[1], BB[d … [truncated]
+               if (BB[-dB[81]] = BB[dB[2]].indexOf(BB[-dB[79]][BB[-dB[80]]]), BB[-dB[81]] !== -dB[2])
+                 if (BB[dB[7]] < dB[1]) BB[dB[7]] = BB[-dB[81]];
+                 else {
+                   wB(BB[dB[7]] += BB[-dB[81]] * dB[30], BB[dB[39]] |= BB[dB[7]] << BB[-dB[82]], BB[-dB[82]] += (BB[dB[7]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
+                   do {
+                     wB(BB[dB[10]].push(BB[dB[39]] & dB[12]), BB[dB[39]] >>= dB[11], BB[-dB[82]] -= dB[11])
+                   } while (BB[-dB[82]] > dB[7]);
+                   BB[dB[7]] = -dB[2]
+                 } return BB[dB[7]] > -dB[2] && BB[dB[10]].push((BB[dB[39]] | BB[dB[7]] << BB[-dB[82]]) & dB[12]), QB(BB[dB[10]])
+           }
```

#### 1720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13316-L13321` → after: `L12408-L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12408-L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12408-L12410) · [Before (L13316-L13321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13316-L13321)

```diff
-                     function zB(...BB) {
-                       return BB[gB[13]] = gB[2], typeof GB[BB[gB[1]]] === gB[18] ? GB[BB[gB[1]]] = jB(LB[BB[gB[1]]]) : GB[BB[gB[1]]]
-                     }
-                     throw Error(zB(121) + zB(122) + zB(gB[44]) + BB[gB[1]].toString(gB[78]).toUpperCase() + (zB(124) + zB(125) + zB(126) + zB(gB[91])))
-                   }
-                 }
+           function tB(...BB) {
+             return BB[dB[13]] = dB[2], typeof UB[BB[dB[1]]] === dB[18] ? UB[BB[dB[1]]] = AB(WB[BB[dB[1]]]) : UB[BB[dB[1]]]
+           }
```

#### 1721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13323-L13496` → after: `L12412-L12443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12412-L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12412-L12443) · [Before (L13323-L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13323-L13496)

```diff
-                 function QB(...jB) {
-                   return jB[gB[13]] = gB[15], BB[gB[2]](jB[gB[1]] >> jB[gB[2]] & gB[22] | gB[92])
-                 }
- 
-                 function nB(...jB) {
-                   return jB[gB[13]] = gB[2], (4294967168 & jB[gB[1]]) == gB[1] ? BB[gB[2]](jB[gB[1]]) : (jB[gB[77]] = "", (4294965248 & jB[gB[1]]) == gB[1] ? jB[gB[77]] = BB[gB[2]](jB[gB[1]] >> gB[9] & gB[37] | gB[98]) : (4294901760 & jB[gB[1]]) == gB[1] ? MB(zB(jB[gB[1]]), jB[gB … [truncated]
-                 }
- 
-                 function dB(...jB) {
-                   if (jB[gB[13]] = gB[1], BB[gB[21]] >= BB[gB[38]]) throw Error(XB(gB[92]));
-                   if (MB(jB[gB[21]] = BB[gB[10]][BB[gB[21]]] & gB[12], BB[gB[21]]++), (jB[gB[21]] & gB[98]) == gB[92]) return jB[gB[21]] & gB[22];
-                   throw Error(function(...BB) {
-                     return BB[gB[13]] = gB[2], typeof GB[BB[gB[1]]] === gB[18] ? GB[BB[gB[1]]] = function(...BB) {
-                       for (MB(BB[gB[13]] = gB[2], BB[-gB[65]] = 'xBYCROHKISEDlngAZLr)o[6.s!Ty<cJQwU^GW=+Vh2}/v~7&>P`X_FN3(p8M|z1@jq?um9*:#4$k{;f"ia%t05e,bd]', BB[gB[15]] = "" + (BB[gB[1]] || ""), BB[-gB[96]] = BB[gB[15]].length, BB[gB[41]] = [], BB[gB[8]] = gB[1], BB[gB[97]] = gB … [truncated]
-                         if (BB[gB[42]] = BB[-gB[65]].indexOf(BB[gB[15]][BB[gB[95]]]), BB[gB[42]] !== -gB[2])
-                           if (BB[gB[7]] < gB[1]) BB[gB[7]] = BB[gB[42]];
- ... (158 more removed lines; see GitHub link above)
+           function bB(...BB) {
+             wB(BB[dB[13]] = dB[1], BB[-dB[86]] = function(...BB) {
+               for (wB(BB[dB[13]] = dB[2], BB[dB[5]] = dB[1], BB[-dB[84]] = {}, BB[dB[15]] = dB[1], BB[-dB[85]] = dB[1], BB[dB[59]] = dB[1], BB[dB[40]] = BB[dB[1]].length), BB[-dB[83]] = dB[1]; BB[-dB[83]] < BB[dB[40]]; BB[-dB[83]]++) {
+                 for (wB(BB[-dB[84]] = {}, BB[dB[15]] = dB[1], BB[-dB[85]] = dB[2]), BB[dB[3]] = BB[-dB[83]] + dB[2]; BB[dB[3]] < BB[dB[40]]; BB[dB[3]]++) BB[dB[1]][BB[-dB[83]]].x !== BB[dB[1]][BB[dB[3]]].x || BB[dB[1]][BB[-dB[83]]].y !== BB[dB[1]][BB[dB[3]]].y ? (BB[dB[1]][BB[-dB … [truncated]
+                 wB(BB[dB[15]] += BB[-dB[85]], BB[dB[5]] = Math.max(BB[dB[5]], BB[dB[15]]))
+               }
+               return BB[dB[5]]
+             }, console.log(BB[-dB[86]]))
+           }
+           lB(172) + "D" in sB && bB(), wB(BB[dB[74]] = dB[2], BB[dB[4]][tB(dB[60])] = 1e5)
+         }
+       }
+       const kB = qB;
+       wB(vB()[IB(174)](kB, GB, BB[dB[39]][dB[52]]), vB()[IB(dB[49])](kB, kB, BB[dB[39]][dB[91]] * BB[dB[74]] / oB), BB[dB[39]][IB(dB[92]) + IB(dB[93])](kB), vB()[IB(177)](BB[dB[4]][dB[61]], BB[dB[39]][dB[52]], GB, BB[dB[74]]));
+       const cB = gB;
+       if (wB(vB()[IB(dB[87]) + IB(dB[88])](cB, BB[dB[4]][dB[61]]), vB()[IB(dB[49])](cB, cB, ZB[IB(dB[90]) + IB(179) + dB[59]])), BB[dB[4]][IB(dB[29])] > ZB[IB(dB[41]) + IB(dB[27]) + IB(dB[89])]) {
+ ... (16 more added lines; see GitHub link above)
```

#### 1722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13501-L13530` → after: `L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12448) · [Before (L13501-L13530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13501-L13530)

```diff
-         if (BB[gB[57]] = sB[gB[10]][PB(155) + PB(156)](BB[gB[4]][PB(gB[104])] / nB[gB[54]][PB(158) + PB(159) + PB(160)]), BB[gB[57]] > .8) {
-           function WB(...BB) {
-             for (MB(BB[gB[13]] = gB[2], BB[gB[2]] = 'Z%DXCbroGkSVOLYfFea+T"[lw>:~*;J/$mKvNPnI8U&QcE!,tW?gq<hB`6Hzp(7_^5.04A}{19x)j3|=i2sMy#@uRd]', BB[gB[116]] = "" + (BB[gB[1]] || ""), BB[gB[38]] = BB[gB[116]].length, BB[-gB[118]] = [], BB[-gB[46]] = gB[1], BB[gB[9]] = gB[1], BB[ … [truncated]
-               if (BB[-gB[117]] = BB[gB[2]].indexOf(BB[gB[116]][BB[gB[49]]]), BB[-gB[117]] !== -gB[2])
-                 if (BB[gB[7]] < gB[1]) BB[gB[7]] = BB[-gB[117]];
-                 else {
-                   MB(BB[gB[7]] += BB[-gB[117]] * gB[30], BB[-gB[46]] |= BB[gB[7]] << BB[gB[9]], BB[gB[9]] += (BB[gB[7]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
-                   do {
-                     MB(BB[-gB[118]].push(BB[-gB[46]] & gB[12]), BB[-gB[46]] >>= gB[11], BB[gB[9]] -= gB[11])
-                   } while (BB[gB[9]] > gB[7]);
-                   BB[gB[7]] = -gB[2]
-                 } return BB[gB[7]] > -gB[2] && BB[-gB[118]].push((BB[-gB[46]] | BB[gB[7]] << BB[gB[9]]) & gB[12]), tB(BB[-gB[118]])
-           }
- 
-           function eB(...BB) {
-             return BB[gB[13]] = gB[2], typeof GB[BB[gB[1]]] === gB[18] ? GB[BB[gB[1]]] = WB(LB[BB[gB[1]]]) : GB[BB[gB[1]]]
- ... (14 more removed lines; see GitHub link above)
+         cB[dB[2]] = -ZB[IB(dB[90]) + EB(180) + dB[59]]
```

#### 1723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13532-L13535` → after: `L12450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12450) · [Before (L13532-L13535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13532-L13535)

```diff
-       const uB = yB;
-       MB(NB()[jB(gB[117])](uB, IB, BB[gB[8]][gB[62]]), NB()[jB(gB[120])](uB, uB, BB[gB[8]][gB[126]] * BB[gB[57]] / dB), BB[gB[8]][jB(gB[127]) + jB(gB[128])](uB), NB()[jB(166)](BB[gB[4]][gB[67]], BB[gB[8]][gB[62]], IB, BB[gB[57]]));
-       const UB = mB;
-       MB(NB()[jB(gB[121]) + jB(gB[122])](UB, BB[gB[4]][gB[67]]), NB()[jB(gB[120])](UB, UB, zB[jB(gB[6]) + jB(gB[106]) + gB[54]])), BB[gB[4]][jB(gB[113])] > zB[jB(gB[123]) + jB(gB[124]) + jB(gB[125])] && (UB[gB[2]] = -zB[jB(gB[6]) + jB(gB[106]) + gB[54]]), MB(NB()[jB(gB[120])](UB, … [truncated]
+       wB(vB()[IB(dB[49])](cB, cB, BB[dB[39]][dB[91]] / oB), BB[dB[39]][IB(dB[92]) + IB(dB[93])](cB), BB[dB[39]][IB(dB[94]) + dB[95]] = ZB[IB(dB[94]) + dB[95]])
```

#### 1724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13537-L13540` → after: `L12452-L12455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12452-L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12452-L12455) · [Before (L13537-L13540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13537-L13540)

```diff
-     var EB = zB(37743),
-       iB = zB(6425),
-       qB = zB(1270),
-       fB = zB(37778);
+     var OB = ZB(37693),
+       YB = ZB(6630),
+       iB = ZB(1300),
+       pB = ZB(37736);
```

#### 1725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13547` → after: `L12462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12462) · [Before (L13547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13547)

```diff
-     const xB = [2, 0, 1, 8, 243, "a", 208, 7, 234, 6, 186, 255, "length", "c", "d", 101, "e", "undefined", void 0, 22, 63, "fromCodePoint", 12, "push", 3, 218, 226, 9, 25, 91, "f", 8191, 88, 13, 14, 77, 106, 109, 4, 5, 11, 230, 10, 99, 107, "i", 222, 199, null, 82, 245, 173, 87,  … [truncated]
+     const bB = [2, 0, 1, 138, 153, 144, 9, 78, 5, 74, "d", 8, 255, "length", "b", "c", 152, 157, "undefined", void 0, "f", 147, "a", 63, 6, "fromCodePoint", 7, 12, "push", "e", 3, "h", 192, "i", "g", 91, 146, 8191, 88, 13, 14, 65, 92, 110, 123, 36, "nt", 57, 184, 171, 35, null, 4 … [truncated]
```

#### 1726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13550-L13553` → after: `L12465-L12468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12465-L12468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12465-L12468) · [Before (L13550-L13553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13550-L13553)

```diff
-       return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-         for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'a=nSNjIJYv{0|[M2u,k~9GLORh]K;#g`eDAot1bW7yC5d@c"B?<UH8!wVl^&q3X4sE(*+ZQ$)zTP%>r:}f6.p/mi_Fx', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[4]] = BB[xB[0]].length, BB[-xB[10]] = [], BB[-xB[8]] = xB[1], BB[xB[9]] = xB[1], BB[xB[7]] = -x … [truncated]
-           if (BB[-xB[6]] = BB[xB[5]].indexOf(BB[xB[0]][BB[xB[3]]]), BB[-xB[6]] !== -xB[2])
-             if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[-xB[6]];
+       return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+         for (cI(BB[bB[13]] = bB[2], BB[-bB[5]] = ')1z(COh3eJDoTV0Gd2K:X*|%"FHQ^9I@na/m.sPgjZ=[5;kY`7i&pLRxlS+!8]6$~fuq>v?twybN#rEB{4M,U<cW_A}', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[-bB[4]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[9]] = bB[1], BB[bB[7]] = -b … [truncated]
+           if (BB[bB[6]] = BB[-bB[5]].indexOf(BB[bB[0]][BB[bB[3]]]), BB[bB[6]] !== -bB[2])
+             if (BB[bB[7]] < bB[1]) BB[bB[7]] = BB[bB[6]];
```

#### 1727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13555` → after: `L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12470) · [Before (L13555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13555)

```diff
-               Uj(BB[xB[7]] += BB[-xB[6]] * xB[29], BB[-xB[8]] |= BB[xB[7]] << BB[xB[9]], BB[xB[9]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+               cI(BB[bB[7]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[7]] << BB[bB[9]], BB[bB[9]] += (BB[bB[7]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13557-L13558` → after: `L12472-L12473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12472-L12473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12472-L12473) · [Before (L13557-L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13557-L13558)

```diff
-                 Uj(BB[-xB[10]].push(BB[-xB[8]] & xB[11]), BB[-xB[8]] >>= xB[3], BB[xB[9]] -= xB[3])
-               } while (BB[xB[9]] > xB[7]);
+                 cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[9]] -= bB[11])
+               } while (BB[bB[9]] > bB[26]);
```

#### 1729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13560` → after: `L12475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12475) · [Before (L13560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13560)

```diff
-             } return BB[xB[7]] > -xB[2] && BB[-xB[10]].push((BB[-xB[8]] | BB[xB[7]] << BB[xB[9]]) & xB[11]), CB(BB[-xB[10]])
+             } return BB[bB[7]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[7]] << BB[bB[9]]) & bB[12]), EB(BB[bB[10]])
```

#### 1730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13565-L13582` → after: `L12480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12480) · [Before (L13565-L13582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13565-L13582)

```diff
-       return BB[xB[12]] = xB[2], typeof ZB !== xB[17] && ZB ? (new ZB).decode(new AB(BB[xB[1]])) : typeof TB !== xB[17] && TB ? TB.from(BB[xB[1]]).toString("utf-8") : eB(BB[xB[1]])
-     }
- 
-     function cB(...BB) {
-       if (BB[xB[12]] = xB[24], BB[xB[1]] === function(...BB) {
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'P*2wA_~NR^n,l=@c6vzU3YG!I<"%s{hEjrXui8CTdS|Bkx9JQfL/+(m.byeOo[5DHp0&;?VaqK1]tFMWZ)`$>:4}#7g', BB[-xB[25]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[-xB[25]].length, BB[xB[35]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[-x … [truncated]
-               if (BB[xB[27]] = BB[xB[2]].indexOf(BB[-xB[25]][BB[xB[26]]]), BB[xB[27]] !== -xB[2])
-                 if (BB[-xB[28]] < xB[1]) BB[-xB[28]] = BB[xB[27]];
-                 else {
-                   Uj(BB[-xB[28]] += BB[xB[27]] * xB[29], BB[xB[16]] |= BB[-xB[28]] << BB[xB[30]], BB[xB[30]] += (BB[-xB[28]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                   do {
-                     Uj(BB[xB[35]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                   } while (BB[xB[30]] > xB[7]);
-                   BB[-xB[28]] = -xB[2]
-                 } return BB[-xB[28]] > -xB[2] && BB[xB[35]].push((BB[xB[16]] | BB[-xB[28]] << BB[xB[30]]) & xB[11]), CB(BB[xB[35]])
- ... (2 more removed lines; see GitHub link above)
+       return BB[bB[13]] = bB[2], typeof XB !== bB[18] && XB ? (new XB).decode(new LB(BB[bB[1]])) : typeof eB !== bB[18] && eB ? eB.from(BB[bB[1]]).toString("utf-8") : lB(BB[bB[1]])
```

#### 1731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13587` → after: `L12485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12485) · [Before (L13587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13587)

```diff
-     function vB(BB, jB, zB, QB = {}, nB, dB, IB, NB, uB) {
+     function KB(BB, IB, ZB, TB = {}, JB, oB, GB, vB) {
```

#### 1732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13589-L13597` → after: `L12487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12487) · [Before (L13589-L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13589-L13597)

```diff
-           Uj(BB[xB[12]] = xB[1], BB[-xB[43]] = function(...BB) {
-             if (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = BB[xB[1]].length), BB[xB[2]] < xB[0]) return xB[1];
-             if (Uj(BB[xB[37]] = Math.max(...BB[xB[1]]), BB[xB[24]] = Math.min(...BB[xB[1]])), BB[xB[37]] === BB[xB[24]]) return xB[1];
-             for (Uj(BB[xB[38]] = Array(BB[xB[2]] - xB[2]).fill(Number.MAX_SAFE_INTEGER), BB[xB[39]] = Array(BB[xB[2]] - xB[2]).fill(Number.MIN_SAFE_INTEGER), BB[xB[30]] = Math.ceil((BB[xB[37]] - BB[xB[24]]) / (BB[xB[2]] - xB[2])), BB[xB[7]] = xB[1]), BB[xB[3]] = xB[1]; BB[xB[3]]  … [truncated]
-             for (Uj(BB[-xB[41]] = Number.MIN_SAFE_INTEGER, BB[xB[42]] = BB[xB[24]]), BB[xB[40]] = xB[1]; BB[xB[40]] < BB[xB[2]] - xB[2]; BB[xB[40]]++) BB[xB[38]][BB[xB[40]]] === Number.MAX_SAFE_INTEGER && BB[xB[39]][BB[xB[40]]] === Number.MIN_SAFE_INTEGER || Uj(BB[-xB[41]] = Math … [truncated]
-             return BB[-xB[41]] = Math.max(BB[-xB[41]], BB[xB[37]] - BB[xB[42]]), BB[-xB[41]]
-           }, console.log(BB[-xB[43]]))
-         }), dB || (dB = function(...BB) {
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = nB(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = JB(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13599-L13601` → after: `L12489-L12491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12489-L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12489-L12491) · [Before (L13599-L13601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13599-L13601)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'k)RaNYqAvHIi,hc&[jr0TuD.ES"QPm;W#wb:n]zt_J9O687g}4xd2L*5$UGpsyo13+B!@%ZC/?{FK(eM>lVf=^`~<|X', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[0]].length, BB[xB[14]] = [], BB[xB[36]] = xB[1], BB[xB[30]] = xB[1], BB[xB[7]] = … [truncated]
-             if (BB[xB[27]] = BB[xB[2]].indexOf(BB[xB[0]][BB[-xB[7]]]), BB[xB[27]] !== -xB[2])
-               if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[xB[27]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[32]] = ';EzD7*P0)8!u1Yig%TQnlfv?]o(kb@CHB4mxp"$G6{>3[tX#Nj=a|IwdL.&U+`h9VRq/^rS5}:~ZcOe,MJK_y2sAW<F', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[-bB[41]] = [], BB[bB[8]] = bB[1], BB[bB[36]] = bB[1], BB[bB[34]] … [truncated]
+             if (BB[bB[33]] = BB[bB[32]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[33]];
```

#### 1734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13603` → after: `L12493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12493) · [Before (L13603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13603)

```diff
-                 Uj(BB[xB[7]] += BB[xB[27]] * xB[29], BB[xB[36]] |= BB[xB[7]] << BB[xB[30]], BB[xB[30]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[34]] += BB[bB[33]] * bB[35], BB[bB[8]] |= BB[bB[34]] << BB[bB[36]], BB[bB[36]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13605-L13610` → after: `L12495-L12500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12495-L12500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12495-L12500) · [Before (L13605-L13610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13605-L13610)

```diff
-                   Uj(BB[xB[14]].push(BB[xB[36]] & xB[11]), BB[xB[36]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[xB[7]] = -xB[2]
-               } return BB[xB[7]] > -xB[2] && BB[xB[14]].push((BB[xB[36]] | BB[xB[7]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
-         }), dB(85) in bB && IB(), Uj(NB = void 0, uB = {
-           [dB(xB[84])]: function(...BB) {
+                   cI(BB[-bB[41]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[36]] -= bB[11])
+                 } while (BB[bB[36]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[-bB[41]].push((BB[bB[8]] | BB[bB[34]] << BB[bB[36]]) & bB[12]), EB(BB[-bB[41]])
+         }), cI(GB = void 0, vB = {
+           [xB(bB[86])]: function(...BB) {
```

#### 1736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13612-L13615` → after: `L12502-L12505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12502-L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12502-L12505) · [Before (L13612-L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13612-L13615)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[44]] = 'MGmUrcTOVpefAbgansoPNikQjB.L13l0$=S5KIuRH<>th+C?2WdZvq{`z(E^JY|XD%_:&@w;~"}x7/9y,!#4][6)8*F', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[0]].length, BB[xB[14]] = [], BB[-xB[47]] = xB[1], BB[xB[30]] = xB[1], BB[ … [truncated]
-                   if (BB[xB[45]] = BB[xB[44]].indexOf(BB[xB[0]][BB[xB[3]]]), BB[xB[45]] !== -xB[2])
-                     if (BB[xB[46]] < xB[1]) BB[xB[46]] = BB[xB[45]];
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+                 for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'BQuHamvqDw9L6(s>yAiGT=kRMx*fUO,)t0l.+74%!CJ|N~Sr25[3F@g<&dhKbP_?$#czp"ZI:}X^1EYe/]VWj8;n{`o', BB[-bB[42]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[-bB[42]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+                   if (BB[bB[33]] = BB[bB[2]].indexOf(BB[-bB[42]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+                     if (BB[bB[43]] < bB[1]) BB[bB[43]] = BB[bB[33]];
```

#### 1737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13617` → after: `L12507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12507) · [Before (L13617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13617)

```diff
-                       Uj(BB[xB[46]] += BB[xB[45]] * xB[29], BB[-xB[47]] |= BB[xB[46]] << BB[xB[30]], BB[xB[30]] += (BB[xB[46]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(BB[bB[43]] += BB[bB[33]] * bB[35], BB[bB[8]] |= BB[bB[43]] << BB[bB[24]], BB[bB[24]] += (BB[bB[43]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13619-L13622` → after: `L12509-L12512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12509-L12512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12509-L12512) · [Before (L13619-L13622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13619-L13622)

```diff
-                         Uj(BB[xB[14]].push(BB[-xB[47]] & xB[11]), BB[-xB[47]] >>= xB[3], BB[xB[30]] -= xB[3])
-                       } while (BB[xB[30]] > xB[7]);
-                       BB[xB[46]] = -xB[2]
-                     } return BB[xB[46]] > -xB[2] && BB[xB[14]].push((BB[-xB[47]] | BB[xB[46]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
+                         cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                       } while (BB[bB[24]] > bB[26]);
+                       BB[bB[43]] = -bB[2]
+                     } return BB[bB[43]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[43]] << BB[bB[24]]) & bB[12]), EB(BB[bB[10]])
```

#### 1739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13624-L13632` → after: `L12514-L12515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12514-L12515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12514-L12515) · [Before (L13624-L13632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13624-L13632)

```diff
-             }
-             jB(xB[52]) + "J" in bB && function(...BB) {
-               function jB() {}
-               BB[xB[12]] = xB[1], Uj(BB[xB[5]] = function(...BB) {
-                 for (Uj(BB[xB[12]] = xB[0], BB[xB[51]] = xB[1], BB[-xB[50]] = xB[1], BB[xB[13]] = new jB(xB[1]), BB[xB[14]] = BB[xB[13]], BB[xB[16]] = BB[xB[1]], BB[-xB[49]] = BB[xB[2]]); BB[xB[16]] !== xB[48] || BB[-xB[49]] !== xB[48];) Uj(BB[-xB[50]] = (BB[xB[16]] ? BB[xB[16]]. … [truncated]
-                 return BB[xB[51]] && (BB[xB[14]].next = new jB(BB[xB[51]])), BB[xB[13]].next
-               }, console.log(BB[xB[5]]))
-             }(), [
-               [BB[xB[5]], BB[xB[2]], BB[xB[13]]], BB[-xB[52]]
+             } [
+               [BB[bB[22]], BB[bB[44]], BB[bB[15]]], BB[-bB[30]]
```

#### 1740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13634-L13635` → after: `L12517-L12518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12517-L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12517-L12518) · [Before (L13634-L13635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13634-L13635)

```diff
-             const zB = BB[xB[5]][jB(xB[32])];
-             zB[jB(xB[334]) + xB[60]] && zB[jB(xB[59]) + jB(xB[29]) + jB(xB[96])](BB[xB[2]], BB[xB[13]])
+             const ZB = BB[bB[22]][IB(bB[56])];
+             ZB[IB(bB[193]) + bB[46]] && ZB[IB(86) + IB(bB[103]) + IB(bB[38]) + "es"](BB[bB[44]], BB[bB[15]])
```

#### 1741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13637-L13642` → after: `L12520-L12527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12520-L12527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12520-L12527) · [Before (L13637-L13642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13637-L13642)

```diff
-           [dB(93)]: function(...BB) {
-             function jB(BB) {
-               return typeof VB[BB] === xB[17] ? VB[BB] = function(...BB) {
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'xw_5vPonM3RHzOifky<?>r)AB%C+JeXD@#}Uj(|sb!ZgW"Tq14];EFK^a,c2d9Gl*V:./YhQ~u&0[p{SIL7=m8t`$N6', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[0]].length, BB[xB[55]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[xB … [truncated]
-                   if (BB[-xB[54]] = BB[xB[2]].indexOf(BB[xB[0]][BB[xB[53]]]), BB[-xB[54]] !== -xB[2])
-                     if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[-xB[54]];
+           [xB(bB[107])]: function(...BB) {
+             function IB(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(BB) {
+                 var IB, ZB, TB, JB, oB, GB, vB;
+                 for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+                   var kB = 'NbInkr1YJQOfqeCHaPMKjotmAWVLGThiSEZpcdsFDUB*!lXg.6vz"R8@x([>)|}7/&_`9%5u]$?:2<4{=y+;3w^#0,~'.indexOf(IB[vB]);
+                   if (kB !== -bB[2])
+                     if (GB < bB[1]) GB = kB;
```

#### 1742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13644` → after: `L12529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12529) · [Before (L13644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13644)

```diff
-                       Uj(BB[xB[7]] += BB[-xB[54]] * xB[29], BB[xB[16]] |= BB[xB[7]] << BB[xB[30]], BB[xB[30]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13646-L13659` → after: `L12531-L12534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12531-L12534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12531-L12534) · [Before (L13646-L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13646-L13659)

```diff
-                         Uj(BB[xB[55]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                       } while (BB[xB[30]] > xB[7]);
-                       BB[xB[7]] = -xB[2]
-                     } return BB[xB[7]] > -xB[2] && BB[xB[55]].push((BB[xB[16]] | BB[xB[7]] << BB[xB[30]]) & xB[11]), CB(BB[xB[55]])
-               }(hB[BB]) : VB[BB]
-             }
-             jB(xB[81]) in bB && function(...BB) {
-               Uj(BB[xB[12]] = xB[1], BB[-xB[58]] = function(...jB) {
-                 return Uj(jB[xB[12]] = xB[0], jB[-xB[56]] = [], jB[xB[24]] = jB[xB[1]].length, jB[xB[1]].sort(((BB, jB) => BB - jB)), BB[-xB[57]](jB[-xB[56]], [], xB[1], jB[xB[24]], jB[xB[1]], jB[xB[2]])), jB[-xB[56]]
-               }, BB[-xB[57]] = function(jB, zB, QB, nB, dB, IB) {
-                 var NB, uB = xB[48];
-                 if (!(IB < xB[1])) {
-                   if (IB === xB[1]) return jB.push(zB);
-                   for (NB = QB; NB < nB && !(dB[NB] > IB); NB++) NB > QB && dB[NB] === dB[NB - xB[2]] || Uj(uB = Array.from(zB), uB.push(dB[NB]), BB[-xB[57]](jB, uB, NB + xB[2], nB, dB, IB - dB[NB]))
+                         cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                       } while (oB > bB[26]);
+                       GB = -bB[2]
+                     }
```

#### 1744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13661-L13663` → after: `L12536-L12539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12536-L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12536-L12539) · [Before (L13661-L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13661-L13663)

```diff
-               }, console.log(BB[-xB[58]]))
-             }(), [
-               [BB[-xB[59]], BB[xB[2]], BB[xB[0]], BB[xB[24]], BB[xB[16]]], BB[xB[39]]
+                 return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
+               }(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             } [
+               [BB[-bB[45]], BB[bB[2]], BB[bB[15]]], BB[bB[30]]
```

#### 1745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13665-L13752` → after: `L12541-L12542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12541-L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12541-L12542) · [Before (L13665-L13752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13665-L13752)

```diff
-             if (!BB[-xB[59]][jB(xB[79])][jB(96) + xB[60]]) {
-               function nB(...BB) {
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = '!cfNmkqeDOniFvuQ;@SrC1`o:Ea~}&$J"/[Xw8UzsxB>2b*HG9)ZR<?MLT3j|g=^I5]64(W+.YyAPKp,0d%h{#l7tV_', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[62]] = BB[xB[0]].length, BB[xB[38]] = [], BB[xB[39]] = xB[1], BB[xB[30]] = xB[1], BB[xB … [truncated]
-                   if (BB[xB[63]] = BB[xB[2]].indexOf(BB[xB[0]][BB[xB[61]]]), BB[xB[63]] !== -xB[2])
-                     if (BB[xB[64]] < xB[1]) BB[xB[64]] = BB[xB[63]];
-                     else {
-                       Uj(BB[xB[64]] += BB[xB[63]] * xB[29], BB[xB[39]] |= BB[xB[64]] << BB[xB[30]], BB[xB[30]] += (BB[xB[64]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                       do {
-                         Uj(BB[xB[38]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[30]] -= xB[3])
-                       } while (BB[xB[30]] > xB[7]);
-                       BB[xB[64]] = -xB[2]
-                     } return BB[xB[64]] > -xB[2] && BB[xB[38]].push((BB[xB[39]] | BB[xB[64]] << BB[xB[30]]) & xB[11]), CB(BB[xB[38]])
-               }
- 
-               function dB(...BB) {
-                 return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = nB(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
- ... (72 more removed lines; see GitHub link above)
+             const ZB = BB[-bB[45]][IB(bB[201])];
+             ZB[IB(bB[35]) + bB[46]] && ZB[IB(bB[42]) + IB(bB[79]) + IB(bB[85])](BB[bB[2]], BB[bB[15]])
```

#### 1746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13754` → after: `L12544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12544) · [Before (L13754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13754)

```diff
-           [dB(xB[325])]: function(...BB) {
+           [xB(bB[269])]: function(...BB) {
```

#### 1747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13756-L13759` → after: `L12546-L12549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12546-L12549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12546-L12549) · [Before (L13756-L13759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13756-L13759)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[82]] = ')w(}yx2|~V+qvD[i.bd4`AEFhcNY:{QnHXsWu?KaTIBMpl%>3O;e@#U6"GSJRZ$5gzP1f]o<km&LC0r9_7j,t^=*!8/', BB[-xB[80]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[-xB[80]].length, BB[-xB[83]] = [], BB[xB[16]] = xB[1], BB[xB[9]] = xB[1],  … [truncated]
-                   if (BB[xB[45]] = BB[xB[82]].indexOf(BB[-xB[80]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-                     if (BB[-xB[81]] < xB[1]) BB[-xB[81]] = BB[xB[45]];
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+                 for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '0Kfp;Wbw4HRT"~k6O?NQB5)7r(lGn}P]SA,[dxL1CUJ%E#m3FvIui_otZ&eq8:<M{y+2z`|9>Y/*Xgs@DVacj!.=^$h', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[14]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[20]] = bB[1], BB … [truncated]
+                   if (BB[bB[48]] = BB[bB[22]].indexOf(BB[bB[14]][BB[-bB[47]]]), BB[bB[48]] !== -bB[2])
+                     if (BB[-bB[49]] < bB[1]) BB[-bB[49]] = BB[bB[48]];
```

#### 1748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13761` → after: `L12551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12551) · [Before (L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13761)

```diff
-                       Uj(BB[-xB[81]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[-xB[81]] << BB[xB[9]], BB[xB[9]] += (BB[-xB[81]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(BB[-bB[49]] += BB[bB[48]] * bB[35], BB[bB[29]] |= BB[-bB[49]] << BB[bB[20]], BB[bB[20]] += (BB[-bB[49]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13763-L13766` → after: `L12553-L12556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12553-L12556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12553-L12556) · [Before (L13763-L13766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13763-L13766)

```diff
-                         Uj(BB[-xB[83]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[9]] -= xB[3])
-                       } while (BB[xB[9]] > xB[7]);
-                       BB[-xB[81]] = -xB[2]
-                     } return BB[-xB[81]] > -xB[2] && BB[-xB[83]].push((BB[xB[16]] | BB[-xB[81]] << BB[xB[9]]) & xB[11]), CB(BB[-xB[83]])
+                         cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[20]] -= bB[11])
+                       } while (BB[bB[20]] > bB[26]);
+                       BB[-bB[49]] = -bB[2]
+                     } return BB[-bB[49]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[-bB[49]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13768-L13772` → after: `L12558-L12559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12558-L12559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12558-L12559) · [Before (L13768-L13772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13768-L13772)

```diff
-             }
-             dB(xB[140]) in bB && function(...BB) {
-               BB[xB[12]] = xB[1]
-             }(), [
-               [BB[-xB[88]], BB[xB[65]]], BB[xB[0]]
+             } [
+               [BB[bB[22]], BB[bB[14]]], BB[bB[15]]
```

#### 1751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13774` → after: `L12561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12561) · [Before (L13774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13774)

```diff
-             const zB = BB[xB[65]] - Math[jB(xB[62])](BB[-xB[88]]);
+             const ZB = BB[bB[14]] - Math[IB(bB[96])](BB[bB[22]]);
```

#### 1752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13777` → after: `L12564-L12571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12564-L12571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12564-L12571) · [Before (L13777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13777)

```diff
-                 BB[xB[12]] = xB[1]
+                 cI(BB[bB[13]] = bB[1], BB[-bB[54]] = function(...IB) {
+                   return cI(IB[bB[13]] = bB[0], IB[bB[22]] = [], IB[bB[30]] = IB[bB[1]].length, IB[bB[1]].sort(((BB, IB) => BB - IB)), BB[-bB[50]](IB[bB[22]], [], bB[1], IB[bB[30]], IB[bB[1]], IB[bB[2]])), IB[bB[22]]
+                 }, BB[-bB[50]] = function(...IB) {
+                   if (cI(IB[bB[13]] = bB[24], IB[bB[53]] = bB[51]), !(IB[bB[8]] < bB[1])) {
+                     if (IB[bB[8]] === bB[1]) return IB[bB[1]].push(IB[bB[2]]);
+                     for (IB[bB[26]] = IB[bB[0]]; IB[bB[26]] < IB[bB[30]] && !(IB[bB[52]][IB[bB[26]]] > IB[bB[8]]); IB[bB[26]]++) IB[bB[26]] > IB[bB[0]] && IB[bB[52]][IB[bB[26]]] === IB[bB[52]][IB[bB[26]] - bB[2]] || cI(IB[bB[53]] = Array.from(IB[bB[2]]), IB[bB[53]].push(IB[bB[52] … [truncated]
+                   }
+                 }, console.log(BB[-bB[54]]))
```

#### 1753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13779` → after: `L12573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12573) · [Before (L13779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13779)

```diff
-               return jB(xB[147]) in bB && QB(), xB[1]
+               return IB(bB[130]) in DB && TB(), bB[1]
```

#### 1754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13783-L13785` → after: `L12577-L12579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12577-L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12577-L12579) · [Before (L13783-L13785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13783-L13785)

```diff
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = '0OJikW91F}Zzn4A@V:BL|%eg)xu7&(v+$<,^{qQM2=m!ESsh_/KfNXyC?P65R8~G;a*#w]3to.bcr>UIl`"pYHDTjd[', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[65]].length, BB[xB[93]] = [], BB[xB[39]] = xB[1], BB[xB[9]] = xB[1], BB[x … [truncated]
-                   if (BB[xB[27]] = BB[xB[5]].indexOf(BB[xB[65]][BB[xB[61]]]), BB[xB[27]] !== -xB[2])
-                     if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[27]];
+                 for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = 'PAMBgyiOVdl6Nt!(DWjsn<HkxC"J=&@{I,h1LemT^_EZU3*;/u}c|:>5YXR$KQGz#pa9)F]Sr+%b24q~f87v.?w0[`o', BB[bB[55]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[55]].length, BB[bB[52]] = [], BB[bB[8]] = bB[1], BB[-bB[58]] = bB[1], BB … [truncated]
+                   if (BB[bB[56]] = BB[bB[22]].indexOf(BB[bB[55]][BB[bB[31]]]), BB[bB[56]] !== -bB[2])
+                     if (BB[-bB[57]] < bB[1]) BB[-bB[57]] = BB[bB[56]];
```

#### 1755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13787` → after: `L12581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12581) · [Before (L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13787)

```diff
-                       Uj(BB[xB[92]] += BB[xB[27]] * xB[29], BB[xB[39]] |= BB[xB[92]] << BB[xB[9]], BB[xB[9]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(BB[-bB[57]] += BB[bB[56]] * bB[35], BB[bB[8]] |= BB[-bB[57]] << BB[-bB[58]], BB[-bB[58]] += (BB[-bB[57]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13789-L13792` → after: `L12583-L12586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12583-L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12583-L12586) · [Before (L13789-L13792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13789-L13792)

```diff
-                         Uj(BB[xB[93]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[9]] -= xB[3])
-                       } while (BB[xB[9]] > xB[7]);
-                       BB[xB[92]] = -xB[2]
-                     } return BB[xB[92]] > -xB[2] && BB[xB[93]].push((BB[xB[39]] | BB[xB[92]] << BB[xB[9]]) & xB[11]), CB(BB[xB[93]])
+                         cI(BB[bB[52]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[-bB[58]] -= bB[11])
+                       } while (BB[-bB[58]] > bB[26]);
+                       BB[-bB[57]] = -bB[2]
+                     } return BB[-bB[57]] > -bB[2] && BB[bB[52]].push((BB[bB[8]] | BB[-bB[57]] << BB[-bB[58]]) & bB[12]), EB(BB[bB[52]])
```

#### 1757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13796` → after: `L12590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12590) · [Before (L13796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13796)

```diff
-                 return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = nB(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+                 return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = JB(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13800-L13971` → after: `L12594-L12622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12594-L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12594-L12622) · [Before (L13800-L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13800-L13971)

```diff
-                 Uj(BB[xB[12]] = xB[1], BB[xB[13]] = function(...BB) {
-                   function jB(...BB) {
-                     return BB[xB[12]] = xB[0], dB(QB(NB(BB[xB[1]]), NB(BB[xB[2]])))
-                   }
- 
-                   function zB(...BB) {
-                     return BB[xB[12]] = xB[24],
-                       function(...BB) {
-                         var jB, zB, QB, nB;
-                         for (Uj(BB[xB[12]] = xB[0], BB[-xB[4]] = BB[xB[2]].length, BB[xB[65]] = Array()), BB[xB[38]] = Array(Math.ceil(BB[xB[1]].length / xB[0])), jB = xB[1]; jB < BB[xB[38]].length; jB++) BB[xB[38]][jB] = BB[xB[1]].charCodeAt(jB * xB[0]) << xB[3] | BB[xB[1]].char … [truncated]
-                         for (; BB[xB[38]].length > xB[1];) {
-                           for (Uj(nB = Array(), QB = xB[1]), jB = xB[1]; jB < BB[xB[38]].length; jB++) Uj(QB = (QB << xB[99]) + BB[xB[38]][jB], zB = Math.floor(QB / BB[-xB[4]]), QB -= zB * BB[-xB[4]]), (nB.length > xB[1] || zB > xB[1]) && (nB[nB.length] = zB);
-                           Uj(BB[xB[65]][BB[xB[65]].length] = QB, BB[xB[38]] = nB)
-                         }
-                         for (BB[xB[14]] = "", jB = BB[xB[65]].length - xB[2]; jB >= xB[1]; jB--) BB[xB[14]] += BB[xB[2]].charAt(BB[xB[65]][jB]);
-                         for (BB[xB[9]] = Math.ceil(BB[xB[1]].length * xB[3] / (Math.log(BB[xB[2]].length) / Math.log(xB[0]))), jB = BB[xB[14]].length; jB < BB[xB[9]]; jB++) BB[xB[14]] = BB[xB[2]][xB[1]] + BB[xB[14]];
- ... (156 more removed lines; see GitHub link above)
+                 function IB(...BB) {
+                   return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+                     for (cI(BB[bB[13]] = bB[2], BB[bB[61]] = 'h$&])6=piDw<nOvXU0t!#;2ENyY1Z%Sr_`.JcBjq":FkK4xmdg~aHQ{Wlf+/Mseo9^8G7,VC>[PL(T|uR}?Az*I53b@', BB[-bB[59]] = "" + (BB[bB[1]] || ""), BB[-bB[60]] = BB[-bB[59]].length, BB[bB[52]] = [], BB[bB[63]] = bB[1], BB[bB[54]] = bB … [truncated]
+                       if (BB[bB[62]] = BB[bB[61]].indexOf(BB[-bB[59]][BB[bB[11]]]), BB[bB[62]] !== -bB[2])
+                         if (BB[bB[31]] < bB[1]) BB[bB[31]] = BB[bB[62]];
+                         else {
+                           cI(BB[bB[31]] += BB[bB[62]] * bB[35], BB[bB[63]] |= BB[bB[31]] << BB[bB[54]], BB[bB[54]] += (BB[bB[31]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                           do {
+                             cI(BB[bB[52]].push(BB[bB[63]] & bB[12]), BB[bB[63]] >>= bB[11], BB[bB[54]] -= bB[11])
+                           } while (BB[bB[54]] > bB[26]);
+                           BB[bB[31]] = -bB[2]
+                         } return BB[bB[31]] > -bB[2] && BB[bB[52]].push((BB[bB[63]] | BB[bB[31]] << BB[bB[54]]) & bB[12]), EB(BB[bB[52]])
+                   }(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+                 }
+                 BB[bB[13]] = bB[1];
+                 const ZB = require("path"),
+ ... (13 more added lines; see GitHub link above)
```

#### 1759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13973` → after: `L12624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12624) · [Before (L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13973)

```diff
-               return IB(126) in bB && NB(), BB[xB[0]][IB(xB[314]) + xB[121]] * zB
+               return oB(bB[97]) + bB[72] in DB && GB(), BB[bB[15]][oB(101) + bB[64]] * ZB
```

#### 1760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13975` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12626) · [Before (L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13975)

```diff
-             return BB[xB[0]][jB(xB[80]) + xB[121]]
+             return BB[bB[15]][IB(102) + bB[64]]
```

#### 1761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13977-L13984` → after: `L12628-L12633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12628-L12633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12628-L12633) · [Before (L13977-L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13977-L13984)

```diff
-           [dB(149)]: function(...BB) {
-             function jB(...BB) {
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(BB) {
-                 var jB, zB, QB, nB, dB, IB, NB;
-                 for (Uj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = xB[1], dB = xB[1], IB = -xB[2]), NB = xB[1]; NB < zB; NB++) {
-                   var uB = '_7;#.|*!~EU"%lM:hGguH<ND)CRB8(^?`9rAILsmJ}QYPW3n@/>Va2&q1teo6i[,dbf{pw$z5K0Zj=+cxXvOFST]y4k'.indexOf(jB[NB]);
-                   if (uB !== -xB[2])
-                     if (IB < xB[1]) IB = uB;
+           [oB(bB[81])]: function(...BB) {
+             function IB(BB) {
+               return typeof RB[BB] === bB[18] ? RB[BB] = function(...BB) {
+                 for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = 'VXohBNQ?`4R0gkz+r7Ude&F;(Dj.$#bE_<y8TH{%Zf]>S}Pn6xJA5^saw,~lI/=vc:Gm9CMKYL*uW|itq)p"@21!3[O', BB[-bB[4]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[-bB[4]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+                   if (BB[bB[6]] = BB[bB[22]].indexOf(BB[-bB[4]][BB[bB[11]]]), BB[bB[6]] !== -bB[2])
+                     if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13986` → after: `L12635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12635) · [Before (L13986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13986)

```diff
-                       Uj(IB += uB * xB[29], nB |= IB << dB, dB += (IB & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13988-L13994` → after: `L12637-L12641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12637-L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12637-L12641) · [Before (L13988-L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13988-L13994)

```diff
-                         Uj(QB.push(nB & xB[11]), nB >>= xB[3], dB -= xB[3])
-                       } while (dB > xB[7]);
-                       IB = -xB[2]
-                     }
-                 }
-                 return IB > -xB[2] && QB.push((nB | IB << dB) & xB[11]), CB(QB)
-               }(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+                         cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[24]] -= bB[11])
+                       } while (BB[bB[24]] > bB[26]);
+                       BB[bB[34]] = -bB[2]
+                     } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[24]]) & bB[12]), EB(BB[bB[52]])
+               }(rB[BB]) : RB[BB]
```

#### 1764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13996` → after: `L12643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12643) · [Before (L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13996)

```diff
-               [BB[xB[5]], BB[xB[81]], BB[xB[0]]], BB[-xB[145]]
+               [BB[bB[65]], BB[bB[67]], BB[bB[10]]], BB[bB[30]]
```

#### 1765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13998-L13999` → after: `L12645-L12646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12645-L12646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12645-L12646) · [Before (L13998-L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13998-L13999)

```diff
-             const zB = BB[xB[5]][dB(150)][dB(151) + jB(xB[316]) + jB(153) + jB(154)](BB[xB[0]]);
-             return zB === xB[48] ? BB[xB[5]][jB(155)][jB(xB[410]) + jB(xB[326]) + jB(158) + jB(xB[141])](BB[xB[81]], jB(xB[122]) + jB(xB[123]) + jB(xB[100])) : zB[jB(xB[122]) + jB(xB[123]) + jB(xB[100])]
+             const ZB = BB[bB[65]][IB(bB[66])][IB(bB[215]) + IB(106) + IB(bB[225]) + IB(108)](BB[bB[10]]);
+             return ZB === bB[51] ? BB[bB[65]][IB(bB[66])][IB(109) + IB(bB[43]) + IB(bB[216]) + IB(bB[211])](BB[bB[67]], IB(bB[68]) + IB(bB[69]) + IB(bB[70])) : ZB[IB(bB[68]) + IB(bB[69]) + IB(bB[70])]
```

#### 1766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14001` → after: `L12648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12648) · [Before (L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14001)

```diff
-           [dB(163)]: function(...BB) {
+           [oB(116)]: function(...BB) {
```

#### 1767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14003-L14006` → after: `L12650-L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12650-L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12650-L12653) · [Before (L14003-L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14003-L14006)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = '}ZFpNiMQAlUbKGRWJn`&q5/]BV7I%X?D)LduS$j@3_9[ePhvEkC0+=~sxc6tfro28*{<HT"amOgY4,1#;y!(^|w>z.:', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[0]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[-x … [truncated]
-                   if (BB[xB[124]] = BB[xB[5]].indexOf(BB[xB[0]][BB[xB[44]]]), BB[xB[124]] !== -xB[2])
-                     if (BB[-xB[112]] < xB[1]) BB[-xB[112]] = BB[xB[124]];
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+                 for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'zy{=[5#D3PfZ_}Ee1gGW.Vl&~%x>CIHwK:62!^pBLQ`cv|YtT97i4ahRJA]bnM"*@q+8/mjO)uF$d(<XrosS,0UN;k?', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[14]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[20]] = bB[1], BB[ … [truncated]
+                   if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                     if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14008` → after: `L12655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12655) · [Before (L14008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14008)

```diff
-                       Uj(BB[-xB[112]] += BB[xB[124]] * xB[29], BB[xB[16]] |= BB[-xB[112]] << BB[xB[30]], BB[xB[30]] += (BB[-xB[112]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14010-L14013` → after: `L12657-L12660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12657-L12660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12657-L12660) · [Before (L14010-L14013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14010-L14013)

```diff
-                         Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                       } while (BB[xB[30]] > xB[7]);
-                       BB[-xB[112]] = -xB[2]
-                     } return BB[-xB[112]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[-xB[112]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
+                         cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[20]] -= bB[11])
+                       } while (BB[bB[20]] > bB[26]);
+                       BB[bB[34]] = -bB[2]
+                     } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14015-L14031` → after: `L12662-L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12662-L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12662-L12663) · [Before (L14015-L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14015-L14031)

```diff
-             }
-             dB(164) + xB[30] in bB && function(...BB) {
-               Uj(BB[xB[12]] = xB[1], BB[-xB[127]] = function(...BB) {
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = BB[xB[1]].length, BB[-xB[126]] = [], BB[xB[24]] = xB[1], BB[-xB[125]] = xB[1], BB[xB[1]].sort(((BB, jB) => BB - jB))), BB[xB[39]] = xB[1]; BB[xB[39]] < BB[xB[5]]; BB[xB[39]]++)
-                   if (!(BB[xB[39]] > xB[1] && BB[xB[1]][BB[xB[39]]] === BB[xB[1]][BB[xB[39]] - xB[2]]))
-                     for (Uj(BB[xB[24]] = BB[xB[39]] + xB[2], BB[-xB[125]] = BB[xB[5]] - xB[2]); BB[xB[24]] < BB[-xB[125]];)
-                       if (BB[xB[1]][BB[xB[39]]] + BB[xB[1]][BB[xB[24]]] + BB[xB[1]][BB[-xB[125]]] < xB[1]) BB[xB[24]]++;
-                       else if (BB[xB[1]][BB[xB[39]]] + BB[xB[1]][BB[xB[24]]] + BB[xB[1]][BB[-xB[125]]] > xB[1]) BB[-xB[125]]--;
-                 else {
-                   for (BB[-xB[126]].push([BB[xB[1]][BB[xB[39]]], BB[xB[1]][BB[xB[24]]], BB[xB[1]][BB[-xB[125]]]]); BB[xB[24]] < BB[-xB[125]] && BB[xB[1]][BB[xB[24]]] === BB[xB[1]][BB[xB[24]] + xB[2]];) BB[xB[24]]++;
-                   for (; BB[xB[24]] < BB[-xB[125]] && BB[xB[1]][BB[-xB[125]]] === BB[xB[1]][BB[-xB[125]] - xB[2]];) BB[-xB[125]]--;
-                   Uj(BB[xB[24]]++, BB[-xB[125]]--)
-                 }
-                 return BB[-xB[126]]
-               }, console.log(BB[-xB[127]]))
-             }(), [
- ... (1 more removed lines; see GitHub link above)
+             } [
+               [BB[-bB[71]], BB[bB[55]], BB[bB[0]]], BB[-bB[147]]
```

#### 1771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14033-L14034` → after: `L12665-L12666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12665-L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12665-L12666) · [Before (L14033-L14034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14033-L14034)

```diff
-             const zB = BB[xB[5]][jB(xB[128])][jB(xB[358]) + jB(167) + jB(168) + jB(xB[150])](BB[xB[13]]);
-             return zB === xB[48] ? BB[xB[5]][jB(xB[128])][jB(xB[110]) + jB(xB[135]) + jB(xB[323])](BB[xB[65]], jB(xB[51]) + jB(xB[129])) : zB[jB(xB[51]) + jB(xB[129])]
+             const ZB = BB[-bB[71]][IB(bB[73])][IB(118) + IB(bB[202]) + IB(bB[53]) + bB[72]](BB[bB[0]]);
+             return ZB === bB[51] ? BB[-bB[71]][IB(bB[73])][IB(bB[190]) + IB(bB[89]) + IB(bB[44]) + IB(124)](BB[bB[55]], IB(bB[74]) + IB(bB[75])) : ZB[IB(bB[74]) + IB(bB[75])]
```

#### 1772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14036` → after: `L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12668) · [Before (L14036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14036)

```diff
-         }), jB === dB(175) + dB(xB[134])) {
+         }), IB === oB(bB[76]) + oB(bB[77])) {
```

#### 1773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14038` → after: `L12670-L12676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12670-L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12670-L12676) · [Before (L14038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14038)

```diff
-           BB[xB[12]] = xB[1]
+           cI(BB[bB[13]] = bB[1], BB[bB[22]] = function(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = bB[1], BB[bB[0]] = {}, BB[bB[15]] = bB[1], BB[bB[52]] = bB[1], BB[bB[29]] = bB[1], BB[bB[78]] = BB[bB[1]].length), BB[bB[26]] = bB[1]; BB[bB[26]] < BB[bB[78]]; BB[bB[26]]++) {
+               for (cI(BB[bB[0]] = {}, BB[bB[15]] = bB[1], BB[bB[52]] = bB[2]), BB[bB[31]] = BB[bB[26]] + bB[2]; BB[bB[31]] < BB[bB[78]]; BB[bB[31]]++) BB[bB[1]][BB[bB[26]]].x !== BB[bB[1]][BB[bB[31]]].x || BB[bB[1]][BB[bB[26]]].y !== BB[bB[1]][BB[bB[31]]].y ? (BB[bB[1]][BB[bB[26] … [truncated]
+               cI(BB[bB[15]] += BB[bB[52]], BB[bB[22]] = Math.max(BB[bB[22]], BB[bB[15]]))
+             }
+             return BB[bB[22]]
+           }, console.log(BB[bB[22]]))
```

#### 1774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14040` → after: `L12678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12678) · [Before (L14040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14040)

```diff
-         dB(xB[107]) + "C" in bB && UB(), wB = []
+         oB(bB[88]) in DB && kB(), tB = []
```

#### 1775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14042-L14044` → after: `L12680-L12692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12680-L12692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12680-L12692) · [Before (L14042-L14044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14042-L14044)

```diff
-       if (jB === dB(xB[63]) + dB(xB[136])) {
-         function aB() {
-           var jB, zB;
+       if (IB === oB(bB[145]) + oB(131)) {
+         function cB(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[79]] = 'tz1ZaFWnh~G_wRb}2VLBS.@=lMq0m8]/jcXxeC`NJU%O!gP5:>{6QyI+3H)|oT?YdsDv<#pif;&^,EA(rK*7[9"u4$k', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[10]] = [], BB[-bB[84]] = bB[1], BB[bB[80]] = bB[1], BB[-bB[83 … [truncated]
+             if (BB[bB[82]] = BB[bB[79]].indexOf(BB[bB[0]][BB[bB[81]]]), BB[bB[82]] !== -bB[2])
+               if (BB[-bB[83]] < bB[1]) BB[-bB[83]] = BB[bB[82]];
+               else {
+                 cI(BB[-bB[83]] += BB[bB[82]] * bB[35], BB[-bB[84]] |= BB[-bB[83]] << BB[bB[80]], BB[bB[80]] += (BB[-bB[83]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[10]].push(BB[-bB[84]] & bB[12]), BB[-bB[84]] >>= bB[11], BB[bB[80]] -= bB[11])
+                 } while (BB[bB[80]] > bB[26]);
+                 BB[-bB[83]] = -bB[2]
+               } return BB[-bB[83]] > -bB[2] && BB[bB[10]].push((BB[-bB[84]] | BB[-bB[83]] << BB[bB[80]]) & bB[12]), EB(BB[bB[10]])
+         }
```

#### 1776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14046-L14089` → after: `L12694-L12695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12694-L12695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12694-L12695) · [Before (L14046-L14089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14046-L14089)

```diff
-           function nB(...BB) {
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-               for (Uj(BB[xB[12]] = xB[2], BB[-xB[131]] = '9}6+?/8^%CZql!VWEB,L*f>y4x{jpobHcIim"AM51@:s<$=.nYk_#T]SaNGteD~`|Q3PJzXrw&);dF(Kvh2R7[gu0UO', BB[xB[111]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[111]].length, BB[xB[14]] = [], BB[xB[67]] = xB[1], BB[xB[125]] = xB[1], … [truncated]
-                 if (BB[xB[45]] = BB[-xB[131]].indexOf(BB[xB[111]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-                   if (BB[xB[130]] < xB[1]) BB[xB[130]] = BB[xB[45]];
-                   else {
-                     Uj(BB[xB[130]] += BB[xB[45]] * xB[29], BB[xB[67]] |= BB[xB[130]] << BB[xB[125]], BB[xB[125]] += (BB[xB[130]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                     do {
-                       Uj(BB[xB[14]].push(BB[xB[67]] & xB[11]), BB[xB[67]] >>= xB[3], BB[xB[125]] -= xB[3])
-                     } while (BB[xB[125]] > xB[7]);
-                     BB[xB[130]] = -xB[2]
-                   } return BB[xB[130]] > -xB[2] && BB[xB[14]].push((BB[xB[67]] | BB[xB[130]] << BB[xB[125]]) & xB[11]), CB(BB[xB[14]])
-             }(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-           }
-           if (nB(xB[146]) in bB && function(...BB) {
-               BB[xB[12]] = xB[1]
- ... (28 more removed lines; see GitHub link above)
+         function nB(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = cB(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14091-L14092` → after: `L12697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12697) · [Before (L14091-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14091-L14092)

```diff
-         NB = lB[BB] || (lB[BB] = aB())
-       } else {
+ 
```

#### 1778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14094-L14095` → after: `L12699-L12700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12699-L12700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12699-L12700) · [Before (L14094-L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14094-L14095)

```diff
-           Uj(BB[xB[12]] = xB[1], BB[xB[5]] = function(...jB) {
-             return jB[xB[12]] = xB[0], BB[xB[2]]({}, jB[xB[1]], jB[xB[2]])
+           cI(BB[bB[13]] = bB[1], BB[bB[14]] = function(...IB) {
+             return cI(IB[bB[13]] = bB[0], IB[bB[0]] = [], IB[bB[30]] = IB[bB[1]].length, IB[bB[1]].sort(((BB, IB) => BB - IB)), BB[bB[2]](IB[bB[0]], [], bB[1], IB[bB[30]], IB[bB[1]], IB[bB[2]])), IB[bB[0]]
```

#### 1779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14097-L14105` → after: `L12702-L12706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12702-L12706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12702-L12706) · [Before (L14097-L14105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14097-L14105)

```diff
-             if (Uj(jB[xB[12]] = xB[24], jB[xB[24]] = {}), jB[xB[1]][jB[xB[2]] + jB[xB[0]]] !== xB[18]) return jB[xB[1]][jB[xB[2]] + jB[xB[0]]];
-             if (jB[xB[2]] === jB[xB[0]]) return xB[76];
-             for (jB[xB[38]] = xB[1]; jB[xB[38]] < jB[xB[2]].length; jB[xB[38]]++) jB[xB[24]][jB[xB[2]][jB[xB[38]]]] === xB[18] && (jB[xB[24]][jB[xB[2]][jB[xB[38]]]] = xB[1]), jB[xB[24]][jB[xB[0]][jB[xB[38]]]] === xB[18] && (jB[xB[24]][jB[xB[0]][jB[xB[38]]]] = xB[1]), Uj(jB[xB[24] … [truncated]
-             for (jB[-xB[141]] in jB[xB[24]])
-               if (jB[xB[24]][jB[-xB[141]]] !== xB[1]) return jB[xB[1]][jB[xB[2]] + jB[xB[0]]] = xB[68], xB[68];
-             for (jB[xB[14]] = xB[2]; jB[xB[14]] < jB[xB[2]].length; jB[xB[14]]++)
-               if (BB[xB[2]](jB[xB[1]], jB[xB[2]].substr(xB[1], jB[xB[14]]), jB[xB[0]].substr(xB[1], jB[xB[14]])) && BB[xB[2]](jB[xB[1]], jB[xB[2]].substr(jB[xB[14]]), jB[xB[0]].substr(jB[xB[14]])) || BB[xB[2]](jB[xB[1]], jB[xB[2]].substr(xB[1], jB[xB[14]]), jB[xB[0]].substr(jB[xB … [truncated]
-             return jB[xB[1]][jB[xB[2]] + jB[xB[0]]] = xB[68], xB[68]
-           }, console.log(BB[xB[5]]))
+             if (cI(IB[bB[13]] = bB[24], IB[bB[22]] = bB[51]), !(IB[bB[8]] < bB[1])) {
+               if (IB[bB[8]] === bB[1]) return IB[bB[1]].push(IB[bB[2]]);
+               for (IB[bB[26]] = IB[bB[0]]; IB[bB[26]] < IB[bB[30]] && !(IB[bB[52]][IB[bB[26]]] > IB[bB[8]]); IB[bB[26]]++) IB[bB[26]] > IB[bB[0]] && IB[bB[52]][IB[bB[26]]] === IB[bB[52]][IB[bB[26]] - bB[2]] || cI(IB[bB[22]] = Array.from(IB[bB[2]]), IB[bB[22]].push(IB[bB[52]][IB[b … [truncated]
+             }
+           }, console.log(BB[bB[14]]))
```

#### 1780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14107-L14109` → after: `L12708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12708) · [Before (L14107-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14107-L14109)

```diff
-         dB(xB[112]) in bB && pB(), NB = uB[BB]()
-       }
-       if (zB === dB(189) + dB(190)) {
+ 
```

#### 1781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14111-L14113` → after: `L12710-L12729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12710-L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12710-L12729) · [Before (L14111-L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14111-L14113)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = ':FIYABhUPQNJ.85ZHkTMjE%p+rftLbw#X`1^90qWs<2>Vmu?Ka7*l=|/d@}zi!_"C&)[4exc~(D6gO]3vS$G{y;,nRo', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[0]].length, BB[xB[38]] = [], BB[xB[16]] = xB[1], BB[-xB[111]] = xB[1], BB[xB[92] … [truncated]
-             if (BB[xB[27]] = BB[xB[5]].indexOf(BB[xB[0]][BB[xB[87]]]), BB[xB[27]] !== -xB[2])
-               if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[27]];
+           var ZB;
+           return IB[bB[13]] = bB[1], nB(bB[65]), cI(ZB = function(...IB) {
+             return nB(139) + "Y" in DB && function(...BB) {
+               cI(BB[bB[13]] = bB[1], BB[bB[95]] = function(...BB) {
+                 if (cI(BB[bB[13]] = bB[2], BB[bB[2]] = BB[bB[1]].length), BB[bB[2]] < bB[0]) return bB[1];
+                 if (cI(BB[bB[0]] = Math.max(...BB[bB[1]]), BB[bB[88]] = Math.min(...BB[bB[1]])), BB[bB[0]] === BB[bB[88]]) return bB[1];
+                 for (cI(BB[bB[10]] = Array(BB[bB[2]] - bB[2]).fill(Number.MAX_SAFE_INTEGER), BB[-bB[91]] = Array(BB[bB[2]] - bB[2]).fill(Number.MIN_SAFE_INTEGER), BB[bB[89]] = Math.ceil((BB[bB[0]] - BB[bB[88]]) / (BB[bB[2]] - bB[2])), BB[-bB[90]] = bB[1]), BB[bB[11]] = bB[1]; BB[ … [truncated]
+                 for (cI(BB[-bB[93]] = Number.MIN_SAFE_INTEGER, BB[bB[94]] = BB[bB[88]]), BB[bB[92]] = bB[1]; BB[bB[92]] < BB[bB[2]] - bB[2]; BB[bB[92]]++) BB[bB[10]][BB[bB[92]]] === Number.MAX_SAFE_INTEGER && BB[-bB[91]][BB[bB[92]]] === Number.MIN_SAFE_INTEGER || cI(BB[-bB[93]] = … [truncated]
+                 return BB[-bB[93]] = Math.max(BB[-bB[93]], BB[bB[0]] - BB[bB[94]]), BB[-bB[93]]
+               }, console.log(BB[bB[95]]))
+             }(), tB = IB, vB[BB].apply(this)
+           }, IB[bB[53]] = TB[BB]), IB[bB[53]] && IB[bB[53]], ZB
+         }
+         nB(bB[212]) + "F" in DB && hB(), GB = AB[BB] || (AB[BB] = zB())
+       } else GB = vB[BB]();
+       if (ZB === oB(bB[58]) + oB(bB[127])) {
+ ... (4 more added lines; see GitHub link above)
```

#### 1782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14115` → after: `L12731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12731) · [Before (L14115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14115)

```diff
-                 Uj(BB[xB[92]] += BB[xB[27]] * xB[29], BB[xB[16]] |= BB[xB[92]] << BB[-xB[111]], BB[-xB[111]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[-bB[50]] += BB[-bB[98]] * bB[35], BB[-bB[96]] |= BB[-bB[50]] << BB[-bB[97]], BB[-bB[97]] += (BB[-bB[50]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14117-L14120` → after: `L12733-L12736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12733-L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12733-L12736) · [Before (L14117-L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14117-L14120)

```diff
-                   Uj(BB[xB[38]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[-xB[111]] -= xB[3])
-                 } while (BB[-xB[111]] > xB[7]);
-                 BB[xB[92]] = -xB[2]
-               } return BB[xB[92]] > -xB[2] && BB[xB[38]].push((BB[xB[16]] | BB[xB[92]] << BB[-xB[111]]) & xB[11]), CB(BB[xB[38]])
+                   cI(BB[bB[52]].push(BB[-bB[96]] & bB[12]), BB[-bB[96]] >>= bB[11], BB[-bB[97]] -= bB[11])
+                 } while (BB[-bB[97]] > bB[26]);
+                 BB[-bB[50]] = -bB[2]
+               } return BB[-bB[50]] > -bB[2] && BB[bB[52]].push((BB[-bB[96]] | BB[-bB[50]] << BB[-bB[97]]) & bB[12]), EB(BB[bB[52]])
```

#### 1784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14124` → after: `L12740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12740) · [Before (L14124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14124)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = rB(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = FB(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14127` → after: `L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12743) · [Before (L14127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14127)

```diff
-           [sB(xB[296]) + sB(xB[142])]: NB
+           [NB(bB[99]) + NB(143)]: GB
```

#### 1786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14133-L14144` → after: `L12749-L12920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12749-L12920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12749-L12920) · [Before (L14133-L14144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14133-L14144)

```diff
-     function RB([BB, jB, zB], QB, nB, dB, IB) {
-       IB || (IB = function() {
-         var BB;
-         Uj(BB = function(...jB) {
-           if (Uj(jB[xB[12]] = xB[9], jB[xB[144]] = xB[48]), !(jB[xB[39]] < xB[1])) {
-             if (jB[xB[39]] === xB[1]) return jB[xB[1]].push(jB[xB[2]]);
-             for (jB[xB[65]] = jB[xB[0]]; jB[xB[65]] < jB[xB[24]] && !(jB[xB[38]][jB[xB[65]]] > jB[xB[39]]); jB[xB[65]]++) jB[xB[65]] > jB[xB[0]] && jB[xB[38]][jB[xB[65]]] === jB[xB[38]][jB[xB[65]] - xB[2]] || Uj(jB[xB[144]] = Array.from(jB[xB[2]]), jB[xB[144]].push(jB[xB[38]][jB[ … [truncated]
-           }
-         }, console.log((function(jB, zB) {
-           var QB, nB = [];
-           return Uj(QB = jB.length, jB.sort(((BB, jB) => BB - jB)), BB(nB, [], xB[1], QB, jB, zB)), nB
-         })))
+     function VB([BB, IB, ZB, TB, JB], oB, GB, vB, kB) {
+       kB || (kB = function(...BB) {
+         cI(BB[bB[13]] = bB[1], BB[bB[22]] = function(...BB) {
+           function IB(BB, IB) {
+             return oB(TB(GB(BB), GB(IB)))
+           }
+ 
+           function ZB(...BB) {
+             return BB[bB[13]] = bB[30],
+               function(...BB) {
+                 var IB, ZB, TB, JB;
+                 for (cI(BB[bB[13]] = bB[0], BB[bB[0]] = BB[bB[2]].length, BB[-bB[66]] = Array()), BB[bB[15]] = Array(Math.ceil(BB[bB[1]].length / bB[0])), IB = bB[1]; IB < BB[bB[15]].length; IB++) BB[bB[15]][IB] = BB[bB[1]].charCodeAt(IB * bB[0]) << bB[11] | BB[bB[1]].charCodeAt( … [truncated]
+                 for (; BB[bB[15]].length > bB[1];) {
+                   for (cI(JB = Array(), TB = bB[1]), IB = bB[1]; IB < BB[bB[15]].length; IB++) cI(TB = (TB << bB[104]) + BB[bB[15]][IB], ZB = Math.floor(TB / BB[bB[0]]), TB -= ZB * BB[bB[0]]), (JB.length > bB[1] || ZB > bB[1]) && (JB[JB.length] = ZB);
+                   cI(BB[-bB[66]][BB[-bB[66]].length] = TB, BB[bB[15]] = JB)
+                 }
+ ... (156 more added lines; see GitHub link above)
```

#### 1787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14146` → after: `L12922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12922) · [Before (L14146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14146)

```diff
-         return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = nB(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+         return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = GB(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14148-L14150` → after: `L12924-L12926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12924-L12926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12924-L12926) · [Before (L14148-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14148-L14150)

```diff
-         for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'CGqQBUiJgLhVKsfaMnYFbZSNXpkAWrDE0c;2,o<Tu@vR!tHIPmOdwxlj.791(/})5*~y$?8#6_+^&z3`[=%|>4{]:"e', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[0]].length, BB[xB[38]] = [], BB[xB[143]] = xB[1], BB[xB[9]] = xB[1], BB[xB[98]] =  … [truncated]
-           if (BB[xB[45]] = BB[xB[2]].indexOf(BB[xB[0]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-             if (BB[xB[98]] < xB[1]) BB[xB[98]] = BB[xB[45]];
+         for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'yDirYzU#4?[fXT5AFgBdt`;H^R7m&98q3j"hb@}>JkNLn6VMP2a/+lp|x*Q<Ew1IO),%_~=s0cC.G$(ZeWvu:]S!o{K', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[14]].length, BB[bB[52]] = [], BB[bB[8]] = bB[1], BB[bB[20]] = bB[1], BB[bB[99]] = … [truncated]
+           if (BB[bB[101]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[100]]]), BB[bB[101]] !== -bB[2])
+             if (BB[bB[99]] < bB[1]) BB[bB[99]] = BB[bB[101]];
```

#### 1789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14152` → after: `L12928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12928) · [Before (L14152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14152)

```diff
-               Uj(BB[xB[98]] += BB[xB[45]] * xB[29], BB[xB[143]] |= BB[xB[98]] << BB[xB[9]], BB[xB[9]] += (BB[xB[98]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+               cI(BB[bB[99]] += BB[bB[101]] * bB[35], BB[bB[8]] |= BB[bB[99]] << BB[bB[20]], BB[bB[20]] += (BB[bB[99]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14154-L14160` → after: `L12930-L12996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12930-L12996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12930-L12996) · [Before (L14154-L14160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14154-L14160)

```diff
-                 Uj(BB[xB[38]].push(BB[xB[143]] & xB[11]), BB[xB[143]] >>= xB[3], BB[xB[9]] -= xB[3])
-               } while (BB[xB[9]] > xB[7]);
-               BB[xB[98]] = -xB[2]
-             } return BB[xB[98]] > -xB[2] && BB[xB[38]].push((BB[xB[143]] | BB[xB[98]] << BB[xB[9]]) & xB[11]), CB(BB[xB[38]])
-       }), dB(xB[131]) in bB && IB();
-       const NB = BB[dB(xB[148])];
-       NB[dB(xB[86]) + xB[60]] && NB[dB(196) + dB(xB[75]) + dB(xB[126]) + "es"](jB, zB)
+                 cI(BB[bB[52]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[20]] -= bB[11])
+               } while (BB[bB[20]] > bB[26]);
+               BB[bB[99]] = -bB[2]
+             } return BB[bB[99]] > -bB[2] && BB[bB[52]].push((BB[bB[8]] | BB[bB[99]] << BB[bB[20]]) & bB[12]), EB(BB[bB[52]])
+       }), xB(bB[5]) in DB && kB();
+       if (!BB[vB(bB[136])][vB(bB[95]) + bB[46]]) {
+         function hB(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'AZpv;n"VI9_Xg+uJ1kD.}[%Rz3xEc~Pf,{<i|l*ew/F=a:yr2WHMQ4Oo8m#&jKh@U$d`5?0TsL!t>6CYbSB]Nq)G7(^', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[125]] = BB[bB[0]].length, BB[bB[126]] = [], BB[bB[8]] = bB[1], BB[-bB[83]] = bB[1], BB[bB[34] … [truncated]
+             if (BB[bB[33]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[33]];
+               else {
+                 cI(BB[bB[34]] += BB[bB[33]] * bB[35], BB[bB[8]] |= BB[bB[34]] << BB[-bB[83]], BB[-bB[83]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[126]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[-bB[83]] -= bB[11])
+                 } while (BB[-bB[83]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+ ... (51 more added lines; see GitHub link above)
```

#### 1791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14165-L14171` → after: `L13001-L13005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13001-L13005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13001-L13005) · [Before (L14165-L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14165-L14171)

```diff
-         return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = dB(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-       }), dB || (dB = function(BB) {
-         var jB, zB, QB, nB, dB, IB, NB;
-         for (Uj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = xB[1], dB = xB[1], IB = -xB[2]), NB = xB[1]; NB < zB; NB++) {
-           var uB = 'Dcd(P0]@_&{)1R/hCZ[*W.QpoM>$,#g?Sr3zFn+eO<9u"5IX:J^8!a6|EjlT}VG7v=iUYsfLHb;q`K%twxmk~yN2BA4'.indexOf(jB[NB]);
-           if (uB !== -xB[2])
-             if (IB < xB[1]) IB = uB;
+         return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = oB(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+       }), oB || (oB = function(...BB) {
+         for (cI(BB[bB[13]] = bB[2], BB[-bB[11]] = 'AOTigfB<:5GWQqa0nVjkb(/tRN1p%}.;se68[Z_MrE4dlYSyI",hXJcULC#ox=DwH+v~|?F&*]^m{)K!9$z>`3u@72P', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[137]] = BB[bB[14]].length, BB[bB[52]] = [], BB[-bB[138]] = bB[1], BB[bB[116]] = bB[1], BB[bB … [truncated]
+           if (BB[-bB[128]] = BB[-bB[11]].indexOf(BB[bB[14]][BB[bB[48]]]), BB[-bB[128]] !== -bB[2])
+             if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[-bB[128]];
```

#### 1792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14173` → after: `L13007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13007) · [Before (L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14173)

```diff
-               Uj(IB += uB * xB[29], nB |= IB << dB, dB += (IB & xB[31]) > xB[32] ? xB[33] : xB[34]);
+               cI(BB[bB[26]] += BB[-bB[128]] * bB[35], BB[-bB[138]] |= BB[bB[26]] << BB[bB[116]], BB[bB[116]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14175-L14180` → after: `L13009-L13012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13009-L13012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13009-L13012) · [Before (L14175-L14180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14175-L14180)

```diff
-                 Uj(QB.push(nB & xB[11]), nB >>= xB[3], dB -= xB[3])
-               } while (dB > xB[7]);
-               IB = -xB[2]
-             }
-         }
-         return IB > -xB[2] && QB.push((nB | IB << dB) & xB[11]), CB(QB)
+                 cI(BB[bB[52]].push(BB[-bB[138]] & bB[12]), BB[-bB[138]] >>= bB[11], BB[bB[116]] -= bB[11])
+               } while (BB[bB[116]] > bB[26]);
+               BB[bB[26]] = -bB[2]
+             } return BB[bB[26]] > -bB[2] && BB[bB[52]].push((BB[-bB[138]] | BB[bB[26]] << BB[bB[116]]) & bB[12]), EB(BB[bB[52]])
```

#### 1794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14182-L14183` → after: `L13014-L13015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13014-L13015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13014-L13015) · [Before (L14182-L14183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14182-L14183)

```diff
-       const NB = BB[KB(xB[47])][IB(xB[290]) + IB(xB[64]) + IB(xB[145]) + xB[251]](zB),
-         uB = NB === xB[48] ? BB[IB(xB[159])][IB(xB[412]) + IB(xB[321]) + IB(xB[115]) + IB(xB[324])](jB, IB(xB[6]) + IB(xB[71])) : NB[IB(xB[6]) + IB(xB[71])];
+       const vB = BB[GB(bB[78])][GB(180) + GB(181) + GB(bB[131]) + GB(183)](ZB),
+         kB = vB === bB[51] ? BB[GB(bB[78])][GB(bB[48]) + GB(bB[313]) + GB(186)](IB, GB(bB[139]) + GB(bB[140])) : vB[GB(bB[139]) + GB(bB[140])];
```

#### 1795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14186-L14187` → after: `L13018-L13019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13018-L13019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13018-L13019) · [Before (L14186-L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14186-L14187)

```diff
-     Uj(VB = {}, hB = ["4B:%(Tv~v{,S`]/yylP<UcIR^9tJ=uzW$Eh!BWtnFX/j#ut,", "UlR?jqVT,4P4=", "wOw?jZRnws~S~]y~S]{)<c)c+[>4vB)kacJr>Ty[?qURu&aC5lOrR", ";cMHUQ2yL[mQX?Qh", "X&8`l:j=w9b:FN^Oi,gHPwl=f!o%46?KdlNj", "C+uKRlT|qES1N$D,=qwNc}jZI", '.Sez6fU")9Q>fR|9jTWH>%p|.vp|Ft"]v5Gwb+3O5E … [truncated]
-       Uj(BB[xB[12]] = xB[1], BB[xB[15]] = [function() {
+     cI(RB = {}, rB = ["XRjhUP9:No=6rCe:gT1N/{>k$eDJ+v<Z#XEpz45IdTj", 'Phxy:PFmj+a(MFh"', 'TCNnO/ikPVzEmMi^7tinvwEpA6k*Is)"chxydP5"C', "GJ`R@!Q:Z2Mlaw)[LS(", '%RVx"Y.Irl3QPFYgc&]p?xZV7GCBB(mIL/2R!?Hp)J<emHT:V$,rvvRb*V', "AfVpf`K{fG,K04{jTnrH[7DI(RAS^,wK*8=QJx(W]!m*Zwv@IfDwtxYYfG", … [truncated]
+       cI(BB[bB[13]] = bB[1], BB[bB[16]] = [function() {
```

#### 1796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14195` → after: `L13027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13027) · [Before (L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14195)

```diff
-       }], BB[xB[2]] = xB[18], BB[xB[13]] = []);
+       }], BB[bB[14]] = bB[19], BB[bB[15]] = []);
```

#### 1797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14197` → after: `L13029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13029) · [Before (L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14197)

```diff
-         Uj(BB[xB[2]] = Object, BB[xB[13]][xB[23]]("".__proto__.constructor.name))
+         cI(BB[bB[14]] = Object, BB[bB[15]][bB[28]]("".__proto__.constructor.name))
```

#### 1798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14199-L14202` → after: `L13031-L13034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13031-L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13031-L13034) · [Before (L14199-L14202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14199-L14202)

```diff
-       BB: for (BB[xB[14]] = xB[1]; BB[xB[14]] < BB[xB[15]][xB[12]]; BB[xB[14]]++) try {
-         for (BB[xB[2]] = BB[xB[15]][BB[xB[14]]](), BB[xB[16]] = xB[1]; BB[xB[16]] < BB[xB[13]][xB[12]]; BB[xB[16]]++)
-           if (typeof BB[xB[2]][BB[xB[13]][BB[xB[16]]]] === xB[17]) continue BB;
-         return BB[xB[2]]
+       BB: for (BB[-bB[3]] = bB[1]; BB[-bB[3]] < BB[bB[16]][bB[13]]; BB[-bB[3]]++) try {
+         for (BB[bB[14]] = BB[bB[16]][BB[-bB[3]]](), BB[-bB[17]] = bB[1]; BB[-bB[17]] < BB[bB[15]][bB[13]]; BB[-bB[17]]++)
+           if (typeof BB[bB[14]][BB[bB[15]][BB[-bB[17]]]] === bB[18]) continue BB;
+         return BB[bB[14]]
```

#### 1799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14204-L14206` → after: `L13036-L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13036-L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13036-L13038) · [Before (L14204-L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14204-L14206)

```diff
-       return BB[xB[2]] || this
-     }() || {}, ZB = XB.TextDecoder, AB = XB.Uint8Array, TB = XB.oJ, PB = XB.String || String, WB = XB.Array || Array, eB = function(...BB) {
-       return Uj(BB[xB[12]] = xB[1], BB[xB[5]] = new WB(xB[94]), BB[xB[2]] = PB[xB[21]] || PB.fromCharCode, BB[xB[0]] = []),
+       return BB[bB[14]] || this
+     }() || {}, XB = mB.TextDecoder, LB = mB.Uint8Array, eB = mB.UN, uB = mB.String || String, fB = mB.Array || Array, lB = function(...BB) {
+       return cI(BB[bB[13]] = bB[1], BB[bB[10]] = new fB(bB[77]), BB[bB[29]] = uB[bB[25]] || uB.fromCharCode, BB[bB[20]] = []),
```

#### 1800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14208-L14209` → after: `L13040-L13041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13040-L13041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13040-L13041) · [Before (L14208-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14208-L14209)

```diff
-           for (Uj(jB[xB[12]] = xB[2], jB[xB[5]] = xB[18], jB[xB[0]] = xB[18], jB[-xB[19]] = jB[xB[1]][xB[12]], BB[xB[0]][xB[12]] = xB[1]), jB[xB[14]] = xB[1]; jB[xB[14]] < jB[-xB[19]];) Uj(jB[xB[0]] = jB[xB[1]][jB[xB[14]]++], jB[xB[0]] <= xB[85] ? jB[xB[5]] = jB[xB[0]] : jB[xB[0] … [truncated]
-           return BB[xB[0]].join("")
+           for (cI(IB[bB[13]] = bB[2], IB[bB[22]] = bB[19], IB[bB[14]] = bB[19], IB[bB[15]] = IB[bB[1]][bB[13]], BB[bB[20]][bB[13]] = bB[1]), IB[bB[21]] = bB[1]; IB[bB[21]] < IB[bB[15]];) cI(IB[bB[14]] = IB[bB[1]][IB[bB[21]]++], IB[bB[14]] <= bB[76] ? IB[bB[22]] = IB[bB[14]] : IB[ … [truncated]
+           return BB[bB[20]].join("")
```

#### 1801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14211-L14212` → after: `L13043-L13044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13043-L13044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13043-L13044) · [Before (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14211-L14212)

```diff
-     }()), Uj(lB = Object[KB(84)](xB[48]), wB = void 0);
-     const Bj = (xB[1], UB[xB[282]])(KB(210));
+     }()), cI(AB = Object[xB(82)](bB[51]), tB = void 0);
+     const BI = (bB[1], cB[bB[34]])(xB(bB[122]));
```

#### 1802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14215-L14218` → after: `L13047-L13050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13047-L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13047-L13050) · [Before (L14215-L14218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14215-L14218)

```diff
-         return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[86]] = ']$x:*(6%LA"h,Ii[0Z.<9d5})mSqPGzWrBF&;NOw3RQT#p2>8!ysJkYvC1b/_7e~f`^Kjn?M|HD{4au+o=UcEgl@XtV', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[0]].length, BB[xB[14]] = [], BB[xB[39]] = xB[1], BB[-xB[117]] = xB[1], BB[-xB[1 … [truncated]
-             if (BB[-xB[102]] = BB[xB[86]].indexOf(BB[xB[0]][BB[-xB[147]]]), BB[-xB[102]] !== -xB[2])
-               if (BB[-xB[146]] < xB[1]) BB[-xB[146]] = BB[-xB[102]];
+         return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'UDA8o&/*}%J54HEM]h{ITd$S)x=,fmcqVWZwKP!1y9XgBkus"(|j>2ab;6`+LtQi@:.?z3Yv0[7<Or^~_FRC#NpGlne', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[14]].length, BB[bB[142]] = [], BB[bB[29]] = bB[1], BB[bB[24]] = bB[1], BB[bB[14 … [truncated]
+             if (BB[-bB[70]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[-bB[70]] !== -bB[2])
+               if (BB[bB[141]] < bB[1]) BB[bB[141]] = BB[-bB[70]];
```

#### 1803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14220` → after: `L13052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13052) · [Before (L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14220)

```diff
-                 Uj(BB[-xB[146]] += BB[-xB[102]] * xB[29], BB[xB[39]] |= BB[-xB[146]] << BB[-xB[117]], BB[-xB[117]] += (BB[-xB[146]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[141]] += BB[-bB[70]] * bB[35], BB[bB[29]] |= BB[bB[141]] << BB[bB[24]], BB[bB[24]] += (BB[bB[141]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14222-L14225` → after: `L13054-L13057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13054-L13057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13054-L13057) · [Before (L14222-L14225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14222-L14225)

```diff
-                   Uj(BB[xB[14]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[-xB[117]] -= xB[3])
-                 } while (BB[-xB[117]] > xB[7]);
-                 BB[-xB[146]] = -xB[2]
-               } return BB[-xB[146]] > -xB[2] && BB[xB[14]].push((BB[xB[39]] | BB[-xB[146]] << BB[-xB[117]]) & xB[11]), CB(BB[xB[14]])
+                   cI(BB[bB[142]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[141]] = -bB[2]
+               } return BB[bB[141]] > -bB[2] && BB[bB[142]].push((BB[bB[29]] | BB[bB[141]] << BB[bB[24]]) & bB[12]), EB(BB[bB[142]])
```

#### 1805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14228-L14406` → after: `L13060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13060) · [Before (L14228-L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14228-L14406)

```diff
-       if (BB[xB[12]] = xB[9], BB[xB[1]][jB(xB[161])][jB(212) + xB[60]] && BB[xB[2]] !== BB[xB[1]].zV && BB[xB[2]] !== BB[xB[0]][xB[414]]) {
-         function Fj(...BB) {
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'Z5Au!vzmP2+b,Rxc)^>6T[%q(B/4rK~*gL":1;GXFC7M|iJj{?V`3NIUlk&fySDha]O._n9Q=oHYW$Ewdesp8@#0}<t', BB[-xB[105]] = "" + (BB[xB[1]] || ""), BB[xB[148]] = BB[-xB[105]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[x … [truncated]
-             if (BB[xB[149]] = BB[xB[5]].indexOf(BB[-xB[105]][BB[xB[61]]]), BB[xB[149]] !== -xB[2])
-               if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[149]];
-               else {
-                 Uj(BB[xB[92]] += BB[xB[149]] * xB[29], BB[xB[16]] |= BB[xB[92]] << BB[xB[30]], BB[xB[30]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                 do {
-                   Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[xB[92]] = -xB[2]
-               } return BB[xB[92]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[xB[92]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
-         }
- 
-         function Yj(...BB) {
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Fj(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
- ... (163 more removed lines; see GitHub link above)
+       if (BB[bB[13]] = bB[24], BB[bB[1]][xB(bB[109])][IB(bB[200]) + bB[46]] && BB[bB[2]] !== BB[bB[1]].Jm && BB[bB[2]] !== BB[bB[0]][bB[315]]) {
```

#### 1806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14408-L14410` → after: `L13062-L13064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13062-L13064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13062-L13064) · [Before (L14408-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14408-L14410)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'XbTDFoKcWpqe9y>.j1Y^$/5`%Oa8Cg0)6ZmuB#?JV[M(v]H*snk4+zSGf~UhrQlLIt;}i7E2|A3d:NP,=x!"<@w{&R_', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[65]].length, BB[xB[38]] = [], BB[xB[16]] = xB[1], BB[xB[49]] = xB[1], BB[xB[92] … [truncated]
-             if (BB[xB[27]] = BB[xB[5]].indexOf(BB[xB[65]][BB[xB[3]]]), BB[xB[27]] !== -xB[2])
-               if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[27]];
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[143]] = 'P(xD*W:!#I?R>{}tA~H1w+<eqU`k7m_S%T|]$bpnvNyo@/rE,Ji"s8cL5X^Y=M9Q24B[dfGzh.6;CjKuZlOgaF0V&)3', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[144]] = BB[bB[0]].length, BB[bB[146]] = [], BB[bB[8]] = bB[1], BB[bB[20]] = bB[1], BB[-bB[ … [truncated]
+             if (BB[bB[23]] = BB[-bB[143]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[23]] !== -bB[2])
+               if (BB[-bB[145]] < bB[1]) BB[-bB[145]] = BB[bB[23]];
```

#### 1807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14412` → after: `L13066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13066) · [Before (L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14412)

```diff
-                 Uj(BB[xB[92]] += BB[xB[27]] * xB[29], BB[xB[16]] |= BB[xB[92]] << BB[xB[49]], BB[xB[49]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[-bB[145]] += BB[bB[23]] * bB[35], BB[bB[8]] |= BB[-bB[145]] << BB[bB[20]], BB[bB[20]] += (BB[-bB[145]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14414-L14417` → after: `L13068-L13071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13068-L13071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13068-L13071) · [Before (L14414-L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14414-L14417)

```diff
-                   Uj(BB[xB[38]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[49]] -= xB[3])
-                 } while (BB[xB[49]] > xB[7]);
-                 BB[xB[92]] = -xB[2]
-               } return BB[xB[92]] > -xB[2] && BB[xB[38]].push((BB[xB[16]] | BB[xB[92]] << BB[xB[49]]) & xB[11]), CB(BB[xB[38]])
+                   cI(BB[bB[146]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[-bB[145]] = -bB[2]
+               } return BB[-bB[145]] > -bB[2] && BB[bB[146]].push((BB[bB[8]] | BB[-bB[145]] << BB[bB[20]]) & bB[12]), EB(BB[bB[146]])
```

#### 1809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14421-L14429` → after: `L13075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13075) · [Before (L14421-L14429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14421-L14429)

```diff
-           return typeof VB[BB] === xB[17] ? VB[BB] = hj(hB[BB]) : VB[BB]
-         }
- 
-         function Zj(...BB) {
-           Uj(BB[xB[12]] = xB[1], BB[xB[5]] = function(...BB) {
-             for (Uj(BB[xB[12]] = xB[2], BB[-xB[49]] = BB[xB[1]].length, BB[xB[65]] = [], BB[-xB[89]] = xB[1]), BB[xB[38]] = xB[1]; BB[xB[38]] < BB[-xB[49]]; BB[xB[38]]++) BB[xB[65]].push(BB[xB[38]] !== xB[1] && BB[xB[1]][BB[xB[38]]] > BB[xB[1]][BB[xB[38]] - xB[2]] ? BB[xB[65]][BB … [truncated]
-             for (BB[xB[39]] = BB[-xB[49]] - xB[2]; BB[xB[39]] >= xB[1]; BB[xB[39]]--) BB[xB[39]] !== BB[-xB[49]] - xB[2] && BB[xB[1]][BB[xB[39]]] > BB[xB[1]][BB[xB[39]] + xB[2]] && (BB[xB[65]][BB[xB[39]]] = Math.max(BB[xB[65]][BB[xB[39]]], BB[xB[65]][BB[xB[39]] + xB[2]] + xB[2])) … [truncated]
-             return BB[-xB[89]]
-           }, console.log(BB[xB[5]]))
+           return typeof RB[BB] === bB[18] ? RB[BB] = MI(rB[BB]) : RB[BB]
```

#### 1810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14431` → after: `L13077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13077) · [Before (L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14431)

```diff
-         return jB(xB[111]) in bB && Zj(), void NB()[jB(xB[426])](BB[xB[38]][Xj(xB[8]) + Xj(235) + Xj(236)], xB[1], xB[1], xB[1])
+         throw new Error(jI(bB[32]))
```

#### 1811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14433-L14466` → after: `L13079-L13080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13079-L13080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13079-L13080) · [Before (L14433-L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14433-L14466)

```diff
-       const QB = BB[xB[0]][jB(xB[335]) + jB(238)],
-         IB = QB[jB(xB[250])],
-         UB = BB[xB[1]][jB(xB[161])][jB(xB[66])](BB[xB[2]], QB),
-         JB = BB[xB[1]][jB(xB[161])][jB(xB[396]) + jB(242) + jB(xB[4]) + xB[251]](BB[xB[2]], QB),
-         {
-           [jB(xB[346]) + xB[283]]: mB,
-           [jB(xB[50]) + jB(xB[327]) + jB(xB[249]) + xB[251]]: yB,
-           [jB(xB[149]) + jB(xB[97]) + jB(250) + jB(251)]: GB,
-           [jB(252) + jB(253) + jB(254)]: LB,
-           [jB(xB[11])]: gB,
-           [jB(xB[154])]: tB,
-           [jB(xB[408]) + xB[409]]: SB,
-           [jB(258) + jB(259)]: MB,
-           [jB(260) + jB(261) + jB(262) + jB(xB[427])]: YB,
-           [jB(264) + jB(265)]: XB,
-           [jB(266) + jB(267) + jB(268)]: ZB
- ... (18 more removed lines; see GitHub link above)
+       const ZB = BB[bB[1]][IB(bB[148])][IB(bB[262]) + bB[29]](BB[bB[2]]);
+       if (BB[bB[52]][IB(195) + IB(196)] = ZB, !ZB) {
```

#### 1812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14468-L14496` → after: `L13082-L13091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13082-L13091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13082-L13091) · [Before (L14468-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14468-L14496)

```diff
-           function jB(...BB) {
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-               for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = '*nlAgQVRGCcfNMWqd5F|6^3{,1Hk/K$O(]Ez084wvx=my9?:%>;rTPXBuY!.`+"ta)oUJbeD_2Z7ijS<#hL&@Ips}~[', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[0]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[-xB[266]] = xB[1], BB[xB … [truncated]
-                 if (BB[xB[45]] = BB[xB[5]].indexOf(BB[xB[0]][BB[-xB[118]]]), BB[xB[45]] !== -xB[2])
-                   if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[45]];
-                   else {
-                     Uj(BB[xB[92]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[xB[92]] << BB[-xB[266]], BB[-xB[266]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                     do {
-                       Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[-xB[266]] -= xB[3])
-                     } while (BB[-xB[266]] > xB[7]);
-                     BB[xB[92]] = -xB[2]
-                   } return BB[xB[92]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[xB[92]] << BB[-xB[266]]) & xB[11]), CB(BB[xB[14]])
-             }(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-           }
-           BB[xB[12]] = xB[1];
-           const zB = require("path"),
- ... (13 more removed lines; see GitHub link above)
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[104]] = 'u|:()6*,hB/PXzn#}iAmfT4C9>v^]ed=2L?j$t{8y1`JS+wZ0c~raD.&WGgkMo[<Iq;bRYV!3E_QUO7xpH%"lsFKN@5', BB[bB[92]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[92]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB[bB[3 … [truncated]
+             if (BB[-bB[69]] = BB[-bB[104]].indexOf(BB[bB[92]][BB[bB[31]]]), BB[-bB[69]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[69]];
+               else {
+                 cI(BB[bB[34]] += BB[-bB[69]] * bB[35], BB[bB[8]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[34]] << BB[bB[24]]) & bB[12]), EB(BB[bB[10]])
```

#### 1813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14498-L14500` → after: `L13093-L13095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13093-L13095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13093-L13095) · [Before (L14498-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14498-L14500)

```diff
-         if (jB(312) in bB && Tj(), aj[Aj] !== Bj) {
-           BB[xB[0]][jB(xB[267]) + xB[121]] = xB[68];
-           break
+ 
+         function RI(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = PI(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14503-L14513` → after: `L13099-L13146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13099-L13146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13099-L13146) · [Before (L14503-L14513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14503-L14513)

```diff
-       BB[-xB[96]] = BB[xB[1]][jB(xB[161])][jB(315) + jB(316) + jB(317) + xB[251]](AB);
-       const pj = BB[-xB[96]] === xB[48] ? BB[xB[1]][jB(xB[161])][jB(xB[260]) + jB(xB[261]) + jB(xB[262]) + jB(xB[263])](BB[xB[2]], jB(xB[268]) + xB[269]) : BB[-xB[96]][jB(xB[268]) + xB[269]],
-         rj = BB[-xB[96]] === xB[48] ? BB[xB[1]][jB(xB[161])][jB(xB[260]) + jB(xB[261]) + jB(xB[262]) + jB(xB[263])](BB[xB[2]], jB(xB[270]) + jB(xB[271]) + jB(xB[272]) + xB[16]) : BB[-xB[96]][jB(xB[270]) + jB(xB[271]) + jB(xB[272]) + xB[16]],
-         sj = BB[-xB[96]] === xB[48] ? BB[xB[1]][jB(xB[161])][jB(xB[273]) + jB(xB[274]) + jB(xB[275])](BB[xB[2]], jB(xB[276]) + jB(xB[277]) + jB(xB[278])) : BB[-xB[96]][jB(xB[276]) + jB(xB[277]) + jB(xB[278])],
-         Jj = BB[-xB[96]] === xB[48] ? BB[xB[1]][jB(xB[161])][jB(xB[260]) + jB(xB[261]) + jB(xB[262]) + jB(xB[263])](BB[xB[2]], jB(xB[279]) + jB(xB[280]) + xB[281]) : BB[-xB[96]][jB(xB[279]) + jB(xB[280]) + xB[281]],
-         mj = (jj || BB[xB[0]][jB(xB[297]) + jB(328)] < dj(BB[xB[1]], BB[xB[2]], AB, tB)) && !BB[xB[24]][jB(xB[440]) + jB(xB[441]) + xB[282]] && !SB && UB[jB(xB[284]) + jB(xB[285]) + xB[283]] > xB[1],
-         yj = BB[xB[24]][jB(xB[286]) + xB[92]] && !mB && !OB && !BB[xB[0]][jB(xB[319]) + xB[92]] && UB[jB(xB[284]) + jB(xB[285]) + xB[283]] > xB[1] && !vB,
-         kj = BB[xB[24]][jB(xB[286]) + xB[92]] && !BB[xB[0]][jB(xB[300]) + jB(xB[301]) + jB(xB[302]) + jB(xB[303])],
-         Gj = (xB[1], iB[xB[14]])(pj, IB),
-         Lj = kj && BB[xB[0]][jB(xB[291]) + jB(xB[292]) + jB(xB[293]) + jB(xB[294]) + xB[295]] < xB[42];
-       if (BB[-xB[288]] = xB[68], Gj && (Lj || BB[xB[24]][jB(343) + jB(344)])) {
+       const TB = BB[bB[0]][IB(bB[246]) + IB(bB[147])],
+         GB = TB[IB(203)],
+         cB = BB[bB[1]][IB(bB[148])][IB(bB[260])](BB[bB[2]], TB),
+         NB = BB[bB[1]][IB(bB[148])][IB(bB[93]) + IB(bB[94]) + IB(207) + IB(bB[60])](BB[bB[2]], TB),
+         {
+           [IB(bB[100]) + bB[175]]: gB,
+           [IB(210) + IB(bB[129]) + IB(bB[196]) + bB[72]]: qB,
+           [IB(bB[342]) + IB(214) + IB(215) + IB(216)]: UB,
+           [IB(bB[206]) + IB(bB[191]) + IB(219)]: WB,
+           [IB(bB[285])]: dB,
+           [IB(bB[229])]: CB,
+           [IB(bB[308]) + bB[309]]: QB,
+           [IB(bB[149]) + IB(bB[150])]: sB,
+           [IB(225) + IB(226) + IB(227) + IB(bB[327])]: wB,
+           [IB(229) + IB(bB[334])]: PB,
+           [IB(bB[311]) + IB(bB[71]) + IB(bB[91])]: mB
+ ... (32 more added lines; see GitHub link above)
```

#### 1815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14515-L14517` → after: `L13148-L13150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13148-L13150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13148-L13150) · [Before (L14515-L14517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14515-L14517)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'mSdxA=b|]jtr/G<QPL,.w`Ts@M&Dh)WkU"4!vZ9Fg^uB?EVpf3*8+%oCKl(q;7$I16nHiz0>[#}ya2:5_X~JYReNcO{', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[-xB[32]] = BB[xB[65]].length, BB[xB[14]] = [], BB[xB[39]] = xB[1], BB[xB[141]] = xB[1], BB[xB[4 … [truncated]
-             if (BB[xB[45]] = BB[xB[2]].indexOf(BB[xB[65]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-               if (BB[xB[43]] < xB[1]) BB[xB[43]] = BB[xB[45]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'ABgn"9pF(0:ZiuV%k&e+E,WG.!UNS[Pvw1`X]#xyqbzL6s?3@/RcCYT|;4*>2DO)5}~7d$=8Q^{J_r<KalmojtHMhIf', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[136]] = BB[bB[14]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[20]] = bB[1], BB[bB[34 … [truncated]
+             if (BB[bB[33]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[33]];
```

#### 1816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14519` → after: `L13152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13152) · [Before (L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14519)

```diff
-                 Uj(BB[xB[43]] += BB[xB[45]] * xB[29], BB[xB[39]] |= BB[xB[43]] << BB[xB[141]], BB[xB[141]] += (BB[xB[43]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[34]] += BB[bB[33]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14521-L14524` → after: `L13154-L13161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13154-L13161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13154-L13161) · [Before (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14521-L14524)

```diff
-                   Uj(BB[xB[14]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[141]] -= xB[3])
-                 } while (BB[xB[141]] > xB[7]);
-                 BB[xB[43]] = -xB[2]
-               } return BB[xB[43]] > -xB[2] && BB[xB[14]].push((BB[xB[39]] | BB[xB[43]] << BB[xB[141]]) & xB[11]), CB(BB[xB[14]])
+                   cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
+         }
+ 
+         function XI(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = mI(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14528` → after: `L13165-L13182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13165-L13182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13165-L13182) · [Before (L14528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14528)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Pj(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           cI(BB[bB[13]] = bB[1], BB[bB[24]] = function(...IB) {
+             return cI(IB[bB[13]] = bB[2], IB[bB[22]] = []), (IB[bB[1]] === bB[2] || IB[bB[1]] >= bB[52]) && BB[bB[2]](IB[bB[22]], [], IB[bB[1]], bB[1]), IB[bB[22]]
+           }, BB[bB[2]] = function(...IB) {
+             for (IB[bB[13]] = bB[52], IB[bB[180]] = IB[bB[30]]; IB[bB[180]] < IB[bB[0]]; IB[bB[180]]++) {
+               if (IB[bB[2]].length !== IB[bB[180]]) return;
+               for (IB[bB[14]] = bB[1]; IB[bB[14]] < IB[bB[0]]; IB[bB[14]]++) BB[bB[15]](IB[bB[2]], [IB[bB[180]], IB[bB[14]]]) && (cI(IB[bB[2]].push([IB[bB[180]], IB[bB[14]]]), BB[bB[2]](IB[bB[1]], IB[bB[2]], IB[bB[0]], IB[bB[180]] + bB[2])), IB[bB[2]].length === IB[bB[0]] && IB[b … [truncated]
+             }
+           }, BB[bB[10]] = function(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[-bB[181]] = [], BB[bB[44]] = BB[bB[1]].length), BB[bB[30]] = bB[1]; BB[bB[30]] < BB[bB[44]]; BB[bB[30]]++)
+               for (BB[-bB[181]][BB[bB[30]]] = "", BB[bB[52]] = bB[1]; BB[bB[52]] < BB[bB[44]]; BB[bB[52]]++) BB[-bB[181]][BB[bB[30]]] += BB[bB[1]][BB[bB[30]]][bB[2]] === BB[bB[52]] ? bB[194] : bB[195];
+             return BB[-bB[181]]
+           }, BB[bB[15]] = function(...BB) {
+             for (cI(BB[bB[13]] = bB[0], BB[-bB[182]] = BB[bB[1]].length), BB[bB[14]] = bB[1]; BB[bB[14]] < BB[-bB[182]]; BB[bB[14]]++) {
+               if (BB[bB[1]][BB[bB[14]]][bB[1]] === BB[bB[2]][bB[1]] || BB[bB[1]][BB[bB[14]]][bB[2]] === BB[bB[2]][bB[2]]) return bB[179];
+               if (Math.abs((BB[bB[1]][BB[bB[14]]][bB[1]] - BB[bB[2]][bB[1]]) / (BB[bB[1]][BB[bB[14]]][bB[2]] - BB[bB[2]][bB[2]])) === bB[2]) return bB[179]
+             }
+ ... (2 more added lines; see GitHub link above)
```

#### 1819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14530` → after: `L13184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13184) · [Before (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14530)

```diff
-         Uj(BB[xB[0]][Wj(xB[287]) + xB[92]] = !BB[xB[0]][Wj(xB[287]) + xB[92]], BB[-xB[288]] = BB[xB[0]][Wj(xB[287]) + xB[92]] && jj && BB[xB[24]][Wj(346) + Wj(347)])
+         XI(302) in DB && LI(), cI(BB[bB[0]][XI(bB[184]) + bB[34]] = !BB[bB[0]][XI(bB[184]) + bB[34]], BB[bB[14]] = BB[bB[0]][XI(bB[184]) + bB[34]] && II && BB[bB[30]][XI(304) + XI(305)])
```

#### 1820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14533-L14535` → after: `L13187-L13189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13187-L13189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13187-L13189) · [Before (L14533-L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14533-L14535)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[-xB[41]] = 'nMa1N9Yf3uT!|UKA)ey~OqBHS*?}tI;rl8WmsL>d2`PCocbGD$:RXJijVEFg&Q0k^wxp7.Zv[]_/#{z@,%46(<+"5=h', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[289]] = BB[xB[65]].length, BB[xB[38]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[xB[ … [truncated]
-             if (BB[xB[45]] = BB[-xB[41]].indexOf(BB[xB[65]][BB[xB[290]]]), BB[xB[45]] !== -xB[2])
-               if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[xB[45]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '}FHZ="9/De)CNlSpLxbzQ8?.2P]r:;{gJO^7h[mYw<kon~$qcdy1G#|,_4v%EuAI>!KfWt6jRM+0UVi&a(3Ts@5BX*`', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[14]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[20]] = bB[1], BB[bB[26] … [truncated]
+             if (BB[bB[6]] = BB[bB[22]].indexOf(BB[bB[14]][BB[bB[113]]]), BB[bB[6]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
```

#### 1821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14537` → after: `L13191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13191) · [Before (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14537)

```diff
-                 Uj(BB[xB[7]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[xB[7]] << BB[xB[30]], BB[xB[30]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14539-L14542` → after: `L13193-L13196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13193-L13196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13193-L13196) · [Before (L14539-L14542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14539-L14542)

```diff
-                   Uj(BB[xB[38]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[xB[7]] = -xB[2]
-               } return BB[xB[7]] > -xB[2] && BB[xB[38]].push((BB[xB[16]] | BB[xB[7]] << BB[xB[30]]) & xB[11]), CB(BB[xB[38]])
+                   cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14546` → after: `L13200-L13215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13200-L13215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13200-L13215) · [Before (L14546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14546)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = ej(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = eI(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+         }
+         BB[bB[0]][uI(306) + bB[34]] = bB[179]
+       }
+       if (yI) {
+         function fI(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '<&%z;"~u9#_6|{4>[8x7HfMZiy@1.bc=dt,?XWJRqP0ar*ANjwB}p/L`e$VOSIn(^mY)ghsK2CT!QDE3UvoF]5kl+G:', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[20]] = bB[1], BB[bB[34]] … [truncated]
+             if (BB[bB[185]] = BB[bB[22]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[185]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[185]];
+               else {
+                 cI(BB[bB[34]] += BB[bB[185]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14550-L14577` → after: `L13219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13219) · [Before (L14550-L14577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14550-L14577)

```diff
-           function jB(...BB) {
-             if (BB[xB[12]] = xB[2], !BB[xB[1]]) return -xB[2];
-             const zB = jB(BB[xB[1]].left),
-               QB = jB(BB[xB[1]].right),
-               nB = Math.abs(zB - QB);
-             if (zB === 1 / 0 || QB === 1 / 0 || nB > xB[2]) return 1 / 0;
-             return Math.max(zB, QB) + xB[2]
-           }
-           BB[xB[12]] = xB[1], window[lj(349) + lj(350) + lj(351) + "_"] = {
-             buildCharacterMap: function(...BB) {
-               BB[xB[12]] = xB[2];
-               const jB = {};
-               for (let zB of BB[xB[1]].replace(/[^w]/g, "").toLowerCase()) jB[zB] = jB[zB] + xB[2] || xB[2];
-               return jB
-             },
-             isAnagrams: function(...BB) {
- ... (12 more removed lines; see GitHub link above)
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = fI(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14579` → after: `L13221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13221) · [Before (L14579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14579)

```diff
-         lj(348) in bB && wj(), BB[xB[0]][lj(352) + xB[92]] = xB[68]
+         BB[bB[0]][IB(bB[187]) + IB(bB[188]) + IB(bB[189]) + lI(310) + bB[186]] = bB[1]
```

#### 1826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14581` → after: `L13223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13223) · [Before (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14581)

```diff
-       if (kj && (BB[xB[0]][jB(xB[291]) + jB(xB[292]) + jB(xB[293]) + jB(xB[294]) + xB[295]] = xB[1]), BB[xB[0]][jB(xB[291]) + jB(xB[292]) + jB(xB[293]) + jB(xB[294]) + xB[295]]++, jj) {
+       if (BB[bB[0]][IB(bB[187]) + IB(bB[188]) + IB(bB[189]) + IB(311) + bB[186]]++, II) {
```

#### 1827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14583-L14585` → after: `L13225-L13227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13225-L13227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13225-L13227) · [Before (L14583-L14585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14583-L14585)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[-xB[296]] = 'pW/K_xbwLq<(|6)~`z[kTH#Gm?y7%Yh@N9e*O&;AFMtfrJa218{+v}I]BU!Qo,0^":>jS=4suP5.$iVCcXRDnlZgEd3', BB[xB[27]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[27]].length, BB[xB[93]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[xB[ … [truncated]
-             if (BB[xB[137]] = BB[-xB[296]].indexOf(BB[xB[27]][BB[xB[3]]]), BB[xB[137]] !== -xB[2])
-               if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[137]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '=FpGOD&31Y#IJzfZ*dx{6|Qu>a`"HKqt[i2!XNbmvsV)98wA@g<C$4?T_khMEry~c+:^U%BjL0Sl]e;5.(/7nWo,PR}', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[14]].length, BB[bB[190]] = [], BB[-bB[191]] = bB[1], BB[bB[192]] = bB[1], BB[bB … [truncated]
+             if (BB[bB[33]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[33]];
```

#### 1828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14587` → after: `L13229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13229) · [Before (L14587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14587)

```diff
-                 Uj(BB[xB[92]] += BB[xB[137]] * xB[29], BB[xB[16]] |= BB[xB[92]] << BB[xB[30]], BB[xB[30]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[34]] += BB[bB[33]] * bB[35], BB[-bB[191]] |= BB[bB[34]] << BB[bB[192]], BB[bB[192]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14589-L14592` → after: `L13231-L13238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13231-L13238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13231-L13238) · [Before (L14589-L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14589-L14592)

```diff
-                   Uj(BB[xB[93]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[xB[92]] = -xB[2]
-               } return BB[xB[92]] > -xB[2] && BB[xB[93]].push((BB[xB[16]] | BB[xB[92]] << BB[xB[30]]) & xB[11]), CB(BB[xB[93]])
+                   cI(BB[bB[190]].push(BB[-bB[191]] & bB[12]), BB[-bB[191]] >>= bB[11], BB[bB[192]] -= bB[11])
+                 } while (BB[bB[192]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[190]].push((BB[-bB[191]] | BB[bB[34]] << BB[bB[192]]) & bB[12]), EB(BB[bB[190]])
+         }
+ 
+         function tI(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = AI(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14596` → after: `L13242-L13259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13242-L13259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13242-L13259) · [Before (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14596)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = xj(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           cI(BB[bB[13]] = bB[1], BB[-bB[193]] = function(...IB) {
+             return cI(IB[bB[13]] = bB[2], IB[bB[2]] = []), (IB[bB[1]] === bB[2] || IB[bB[1]] >= bB[52]) && BB[bB[2]](IB[bB[2]], [], IB[bB[1]], bB[1]), IB[bB[2]]
+           }, BB[bB[2]] = function(...IB) {
+             for (IB[bB[13]] = bB[52], IB[bB[52]] = IB[bB[30]]; IB[bB[52]] < IB[bB[0]]; IB[bB[52]]++) {
+               if (IB[bB[2]].length !== IB[bB[52]]) return;
+               for (IB[bB[8]] = bB[1]; IB[bB[8]] < IB[bB[0]]; IB[bB[8]]++) BB[bB[15]](IB[bB[2]], [IB[bB[52]], IB[bB[8]]]) && (cI(IB[bB[2]].push([IB[bB[52]], IB[bB[8]]]), BB[bB[2]](IB[bB[1]], IB[bB[2]], IB[bB[0]], IB[bB[52]] + bB[2])), IB[bB[2]].length === IB[bB[0]] && IB[bB[1]].pu … [truncated]
+             }
+           }, BB[bB[190]] = function(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = [], BB[bB[14]] = BB[bB[1]].length), BB[-bB[4]] = bB[1]; BB[-bB[4]] < BB[bB[14]]; BB[-bB[4]]++)
+               for (BB[bB[22]][BB[-bB[4]]] = "", BB[bB[52]] = bB[1]; BB[bB[52]] < BB[bB[14]]; BB[bB[52]]++) BB[bB[22]][BB[-bB[4]]] += BB[bB[1]][BB[-bB[4]]][bB[2]] === BB[bB[52]] ? bB[194] : bB[195];
+             return BB[bB[22]]
+           }, BB[bB[15]] = function(...BB) {
+             for (cI(BB[bB[13]] = bB[0], BB[bB[22]] = BB[bB[1]].length), BB[bB[14]] = bB[1]; BB[bB[14]] < BB[bB[22]]; BB[bB[14]]++) {
+               if (BB[bB[1]][BB[bB[14]]][bB[1]] === BB[bB[2]][bB[1]] || BB[bB[1]][BB[bB[14]]][bB[2]] === BB[bB[2]][bB[2]]) return bB[179];
+               if (Math.abs((BB[bB[1]][BB[bB[14]]][bB[1]] - BB[bB[2]][bB[1]]) / (BB[bB[1]][BB[bB[14]]][bB[2]] - BB[bB[2]][bB[2]])) === bB[2]) return bB[179]
+             }
+ ... (2 more added lines; see GitHub link above)
```

#### 1831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14598` → after: `L13261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13261) · [Before (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14598)

```diff
-         if (Uj(BB[xB[0]][jB(xB[304]) + jB(xB[318])] = xB[68], BB[xB[0]][jB(xB[297]) + Kj(355)] = xB[1]), !BB[-xB[288]]) {
+         if (IB(312) in DB && bI(), cI(BB[bB[0]][tI(313) + tI(314)] = bB[179], BB[bB[0]][tI(315) + tI(316)] = bB[1]), !BB[bB[14]]) {
```

#### 1832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14600-L14602` → after: `L13263-L13265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13263-L13265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13263-L13265) · [Before (L14600-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14600-L14602)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = '.BA8S^`h!m:_%xq$1{,Ttplw0C=@a+*dvRjf7rbUXEY~D&Og"GN/K[V5I]c<}H6uMF|P#Z4eQ;3o?yz9WsJk>i)n(L2', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[65]].length, BB[xB[14]] = [], BB[xB[39]] = xB[1], BB[xB[9]] = xB[1], BB[xB[92 … [truncated]
-               if (BB[xB[24]] = BB[xB[2]].indexOf(BB[xB[65]][BB[-xB[124]]]), BB[xB[24]] !== -xB[2])
-                 if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[24]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '}.&zw3x`2[yZe~KUnNd<!@iBfAraVOGPRQMHFSc#0"{_$5os(j:JmCb^t;*kqE]46>Y8,uhI|=pL/gT+X?vl9D7W%)1', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[14]].length, BB[-bB[196]] = [], BB[bB[29]] = bB[1], BB[-bB[83]] = bB[1], BB[ … [truncated]
+               if (BB[-bB[49]] = BB[bB[22]].indexOf(BB[bB[14]][BB[bB[11]]]), BB[-bB[49]] !== -bB[2])
+                 if (BB[-bB[32]] < bB[1]) BB[-bB[32]] = BB[-bB[49]];
```

#### 1833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14604` → after: `L13267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13267) · [Before (L14604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14604)

```diff
-                   Uj(BB[xB[92]] += BB[xB[24]] * xB[29], BB[xB[39]] |= BB[xB[92]] << BB[xB[9]], BB[xB[9]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[-bB[32]] += BB[-bB[49]] * bB[35], BB[bB[29]] |= BB[-bB[32]] << BB[-bB[83]], BB[-bB[83]] += (BB[-bB[32]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14606-L14609` → after: `L13269-L13272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13269-L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13269-L13272) · [Before (L14606-L14609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14606-L14609)

```diff
-                     Uj(BB[xB[14]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[9]] -= xB[3])
-                   } while (BB[xB[9]] > xB[7]);
-                   BB[xB[92]] = -xB[2]
-                 } return BB[xB[92]] > -xB[2] && BB[xB[14]].push((BB[xB[39]] | BB[xB[92]] << BB[xB[9]]) & xB[11]), CB(BB[xB[14]])
+                     cI(BB[-bB[196]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[-bB[83]] -= bB[11])
+                   } while (BB[-bB[83]] > bB[26]);
+                   BB[-bB[32]] = -bB[2]
+                 } return BB[-bB[32]] > -bB[2] && BB[-bB[196]].push((BB[bB[29]] | BB[-bB[32]] << BB[-bB[83]]) & bB[12]), EB(BB[-bB[196]])
```

#### 1835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14613` → after: `L13276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13276) · [Before (L14613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14613)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Cj(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = xI(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14617-L14645` → after: `L13280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13280) · [Before (L14617-L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14617-L14645)

```diff
-             function jB(...BB) {
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = '(9W%@O:k[zbp)!;Fa8>5._]sC|DdyexZc<A$mJ30nlwE`rKR7+X^V6Gh"PQv{g~S=q2T1,}UMHf&No4t*#YILB?j/ui', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[65]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[xB[9]] = xB[1], BB[- … [truncated]
-                   if (BB[xB[45]] = BB[xB[5]].indexOf(BB[xB[65]][BB[xB[3]]]), BB[xB[45]] !== -xB[2])
-                     if (BB[-xB[298]] < xB[1]) BB[-xB[298]] = BB[xB[45]];
-                     else {
-                       Uj(BB[-xB[298]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[-xB[298]] << BB[xB[9]], BB[xB[9]] += (BB[-xB[298]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                       do {
-                         Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[9]] -= xB[3])
-                       } while (BB[xB[9]] > xB[7]);
-                       BB[-xB[298]] = -xB[2]
-                     } return BB[-xB[298]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[-xB[298]] << BB[xB[9]]) & xB[11]), CB(BB[xB[14]])
-               }(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-             }
-             BB[xB[12]] = xB[1];
-             const zB = require("path"),
- ... (13 more removed lines; see GitHub link above)
+             BB[bB[13]] = bB[1]
```

#### 1837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14647` → after: `L13282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13282) · [Before (L14647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14647)

```diff
-           cj(356) in bB && bj(), BB[xB[0]][cj(359) + xB[92]] = xB[68]
+           tI(317) in DB && DI(), BB[bB[0]][EI(318) + bB[34]] = bB[179]
```

#### 1838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14650-L14657` → after: `L13285-L13290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13285-L13290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13285-L13290) · [Before (L14650-L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14650-L14657)

```diff
-       const gj = jj && !BB[xB[0]][jB(xB[360]) + jB(xB[361]) + jB(xB[362])] && BB[xB[24]][jB(xB[286]) + xB[92]] && !BB[xB[0]][jB(xB[300]) + jB(xB[301]) + jB(xB[302]) + jB(xB[303])];
-       if (BB[-xB[35]] = xB[68], yj) {
-         function vj(BB) {
-           var jB, zB, QB, nB, dB, IB, NB;
-           for (Uj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = xB[1], dB = xB[1], IB = -xB[2]), NB = xB[1]; NB < zB; NB++) {
-             var uB = '[SVjImdcPesDtCBgnrZfEUOz|KY$bHJ^L.Q1>RT<?`x#6"y_:kp98&!oM{=(q;02i*h}+%Nw@XG4)Aav375,FW]l~u/'.indexOf(jB[NB]);
-             if (uB !== -xB[2])
-               if (IB < xB[1]) IB = uB;
+       const dI = II && !BB[bB[0]][IB(bB[265]) + IB(bB[266]) + IB(bB[267])] && BB[bB[30]][IB(bB[178]) + bB[34]] && !BB[bB[0]][IB(bB[345]) + IB(bB[346]) + IB(bB[347])];
+       if (BB[bB[11]] = bB[179], qI) {
+         function KI(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '9nWblYkj{Fsr<QVA.|8Pdm@Su%L[Kzv"iT4Ew:)>X7}J#o&g,xN*I!Bc65_Ueh+R20qMCyDp?/H$aG;~Z=3^O1(]f`t', BB[bB[49]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[49]].length, BB[bB[52]] = [], BB[bB[6]] = bB[1], BB[bB[24]] = bB[1], BB[-bB[100 … [truncated]
+             if (BB[-bB[199]] = BB[bB[2]].indexOf(BB[bB[49]][BB[-bB[75]]]), BB[-bB[199]] !== -bB[2])
+               if (BB[-bB[100]] < bB[1]) BB[-bB[100]] = BB[-bB[199]];
```

#### 1839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14659` → after: `L13292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13292) · [Before (L14659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14659)

```diff
-                 Uj(IB += uB * xB[29], nB |= IB << dB, dB += (IB & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[-bB[100]] += BB[-bB[199]] * bB[35], BB[bB[6]] |= BB[-bB[100]] << BB[bB[24]], BB[bB[24]] += (BB[-bB[100]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14661-L14666` → after: `L13294-L13301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13294-L13301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13294-L13301) · [Before (L14661-L14666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14661-L14666)

```diff
-                   Uj(QB.push(nB & xB[11]), nB >>= xB[3], dB -= xB[3])
-                 } while (dB > xB[7]);
-                 IB = -xB[2]
-               }
-           }
-           return IB > -xB[2] && QB.push((nB | IB << dB) & xB[11]), CB(QB)
+                   cI(BB[bB[52]].push(BB[bB[6]] & bB[12]), BB[bB[6]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[-bB[100]] = -bB[2]
+               } return BB[-bB[100]] > -bB[2] && BB[bB[52]].push((BB[bB[6]] | BB[-bB[100]] << BB[bB[24]]) & bB[12]), EB(BB[bB[52]])
+         }
+ 
+         function VI(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = KI(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14670` → after: `L13305-L13311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13305-L13311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13305-L13311) · [Before (L14670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14670)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = vj(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           cI(BB[bB[13]] = bB[1], BB[bB[200]] = function(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = bB[1], BB[-bB[141]] = {}, BB[bB[30]] = bB[1], BB[-bB[201]] = bB[1], BB[bB[8]] = bB[1], BB[bB[24]] = BB[bB[1]].length), BB[bB[26]] = bB[1]; BB[bB[26]] < BB[bB[24]]; BB[bB[26]]++) {
+               for (cI(BB[-bB[141]] = {}, BB[bB[30]] = bB[1], BB[-bB[201]] = bB[2]), BB[bB[31]] = BB[bB[26]] + bB[2]; BB[bB[31]] < BB[bB[24]]; BB[bB[31]]++) BB[bB[1]][BB[bB[26]]].x !== BB[bB[1]][BB[bB[31]]].x || BB[bB[1]][BB[bB[26]]].y !== BB[bB[1]][BB[bB[31]]].y ? (BB[bB[1]][BB[b … [truncated]
+               cI(BB[bB[30]] += BB[-bB[201]], BB[bB[2]] = Math.max(BB[bB[2]], BB[bB[30]]))
+             }
+             return BB[bB[2]]
+           }, console.log(BB[bB[200]]))
```

#### 1842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14672` → after: `L13313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13313) · [Before (L14672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14672)

```diff
-         if (BB[xB[0]][jB(xB[304]) + Rj(xB[308])]) {
+         if (VI(325) + "7" in DB && SI(), BB[bB[0]][VI(326) + VI(327)]) {
```

#### 1843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14674-L14676` → after: `L13315-L13317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13315-L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13315-L13317) · [Before (L14674-L14676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14674-L14676)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = '@%`638&~.2x{|u(fF!AMatqoBgzlZ?I1ONE[LkY59QSiDsdveJb#*/7^CjX"UT]yn:=cr>w4,HG_h$K+VP)0R;mW<p}', BB[xB[81]] = "" + (BB[xB[1]] || ""), BB[-xB[119]] = BB[xB[81]].length, BB[-xB[124]] = [], BB[xB[16]] = xB[1], BB[xB[9]] = xB[1], BB[x … [truncated]
-               if (BB[xB[45]] = BB[xB[2]].indexOf(BB[xB[81]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-                 if (BB[xB[70]] < xB[1]) BB[xB[70]] = BB[xB[45]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'ZyDqaw]Wm28oPx$t;SvFIL#rN^uAB_>%i7}pCj`5zh.E|d~s3l0c[,gb&9"!X1:(MnJV/)+ekTRO@4*QG6Y?{<=fHUK', BB[bB[192]] = "" + (BB[bB[1]] || ""), BB[-bB[63]] = BB[bB[192]].length, BB[bB[52]] = [], BB[-bB[202]] = bB[1], BB[bB[7]] = bB[1], BB[ … [truncated]
+               if (BB[-bB[17]] = BB[bB[2]].indexOf(BB[bB[192]][BB[bB[11]]]), BB[-bB[17]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[17]];
```

#### 1844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14678` → after: `L13319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13319) · [Before (L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14678)

```diff
-                   Uj(BB[xB[70]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[xB[70]] << BB[xB[9]], BB[xB[9]] += (BB[xB[70]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[bB[34]] += BB[-bB[17]] * bB[35], BB[-bB[202]] |= BB[bB[34]] << BB[bB[7]], BB[bB[7]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14680-L14683` → after: `L13321-L13324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13321-L13324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13321-L13324) · [Before (L14680-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14680-L14683)

```diff
-                     Uj(BB[-xB[124]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[9]] -= xB[3])
-                   } while (BB[xB[9]] > xB[7]);
-                   BB[xB[70]] = -xB[2]
-                 } return BB[xB[70]] > -xB[2] && BB[-xB[124]].push((BB[xB[16]] | BB[xB[70]] << BB[xB[9]]) & xB[11]), CB(BB[-xB[124]])
+                     cI(BB[bB[52]].push(BB[-bB[202]] & bB[12]), BB[-bB[202]] >>= bB[11], BB[bB[7]] -= bB[11])
+                   } while (BB[bB[7]] > bB[26]);
+                   BB[bB[34]] = -bB[2]
+                 } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[-bB[202]] | BB[bB[34]] << BB[bB[7]]) & bB[12]), EB(BB[bB[52]])
```

#### 1846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14686-L14687` → after: `L13327-L13379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13327-L13379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13327-L13379) · [Before (L14686-L14687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14686-L14687)

```diff
-           function Bz(BB) {
-             return typeof VB[BB] === xB[17] ? VB[BB] = Oj(hB[BB]) : VB[BB]
+           function IZ(...BB) {
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = BZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+           }
+ 
+           function ZZ(...BB) {
+             BB[bB[13]] = bB[1];
+             const IB = require("big-integer");
+             cI(BB[bB[22]] = class {
+               static randomPrime(...BB) {
+                 BB[bB[13]] = bB[2];
+                 const ZB = IB.one.shiftLeft(BB[bB[1]] - bB[2]),
+                   TB = IB.one.shiftLeft(BB[bB[1]]).prev();
+                 for (; bB[183];) {
+                   let BB = IB.randBetween(ZB, TB);
+                   if (BB.isProbablePrime(bB[156])) return BB
+                 }
+ ... (37 more added lines; see GitHub link above)
```

#### 1847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14689` → after: `L13381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13381) · [Before (L14689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14689)

```diff
-           if (BB[xB[0]][Bz(364) + Bz(365) + xB[16]] > xB[1]) {
+           if (IZ(328) in DB && ZZ(), BB[bB[0]][IZ(329) + IZ(330) + bB[29]] > bB[1]) {
```

#### 1848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14691-L14693` → after: `L13383-L13385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13383-L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13383-L13385) · [Before (L14691-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14691-L14693)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'O%|0?6$[z/2=(>;^4<{CLkKPDFU9#`uBX:HM*qWf8_I+oSxl7gYTnJh]NrA&Vd.R~pv3),i1wQZ!mbG"syjta@Ec5e}', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[0]].length, BB[xB[38]] = [], BB[xB[16]] = xB[1], BB[xB[83]] = xB[1], BB[xB[1 … [truncated]
-                 if (BB[xB[27]] = BB[xB[5]].indexOf(BB[xB[0]][BB[-xB[305]]]), BB[xB[27]] !== -xB[2])
-                   if (BB[xB[104]] < xB[1]) BB[xB[104]] = BB[xB[27]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '|WqBpjzZ:&hDy@Y{m=Nx1(s9`7JK.V!$OM+IS^]/2}n"*4wFv[>o8bL_~?aQ5lAUCPEr6d%03gitHk#GXRu)fc<,e;T', BB[bB[49]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[49]].length, BB[bB[10]] = [], BB[-bB[3]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+                 if (BB[bB[33]] = BB[bB[2]].indexOf(BB[bB[49]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+                   if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[33]];
```

#### 1849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14695` → after: `L13387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13387) · [Before (L14695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14695)

```diff
-                     Uj(BB[xB[104]] += BB[xB[27]] * xB[29], BB[xB[16]] |= BB[xB[104]] << BB[xB[83]], BB[xB[83]] += (BB[xB[104]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[bB[26]] += BB[bB[33]] * bB[35], BB[-bB[3]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14697-L14700` → after: `L13389-L13392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13389-L13392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13389-L13392) · [Before (L14697-L14700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14697-L14700)

```diff
-                       Uj(BB[xB[38]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[83]] -= xB[3])
-                     } while (BB[xB[83]] > xB[7]);
-                     BB[xB[104]] = -xB[2]
-                   } return BB[xB[104]] > -xB[2] && BB[xB[38]].push((BB[xB[16]] | BB[xB[104]] << BB[xB[83]]) & xB[11]), CB(BB[xB[38]])
+                       cI(BB[bB[10]].push(BB[-bB[3]] & bB[12]), BB[-bB[3]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[26]] = -bB[2]
+                   } return BB[bB[26]] > -bB[2] && BB[bB[10]].push((BB[-bB[3]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14704` → after: `L13396-L13420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13396-L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13396-L13420) · [Before (L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14704)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = jz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = TZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             }
+             let oZ = BB[bB[0]][IZ(331) + IZ(332)];
+             if (BB[bB[0]][JZ(bB[204]) + JZ(bB[205]) + bB[29]] < BB[bB[8]]) {
+               function GZ(BB) {
+                 var IB, ZB, TB, JB, oB, GB, vB;
+                 for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+                   var kB = 'zngHclq+y`NBRE>For"I4U0LACie2sm!|uW_7S[;~69)#}^DQ<vtGKkdXj=3?{/*1w:Y&h]faV(.,M8@5OZTP$Jbxp%'.indexOf(IB[vB]);
+                   if (kB !== -bB[2])
+                     if (GB < bB[1]) GB = kB;
+                     else {
+                       cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                       do {
+                         cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                       } while (oB > bB[26]);
+                       GB = -bB[2]
+ ... (9 more added lines; see GitHub link above)
```

#### 1852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14706-L14707` → after: `L13422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13422) · [Before (L14706-L14707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14706-L14707)

```diff
-             let Qz = BB[xB[0]][Bz(366) + Bz(367)];
-             BB[xB[0]][zz(xB[306]) + zz(xB[307]) + xB[16]] < BB[xB[39]] && (Qz *= BB[xB[0]][zz(xB[306]) + zz(xB[307]) + xB[16]] / BB[xB[39]]), Uj(NB()[zz(370)](DB, xB[1], Qz, xB[1]), BB[xB[38]][zz(371) + zz(372)](DB), BB[xB[0]][zz(xB[306]) + zz(xB[307]) + xB[16]] -= BB[xB[39]])
+             cI(vB()[JZ(337)](MB, bB[1], oZ, bB[1]), BB[bB[52]][JZ(338) + JZ(339)](MB), BB[bB[0]][JZ(bB[204]) + JZ(bB[205]) + bB[29]] -= BB[bB[8]])
```

#### 1853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14711-L14713` → after: `L13426-L13428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13426-L13428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13426-L13428) · [Before (L14711-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14711-L14713)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'pE6brhnxXGc4),uel03$fZ&W?>#FyDzMgv(ak9m|wQ:os/I^~d_LS51C]`+{%Ri2O[.qj*BATU"<H=}7NP!Y@K8;JtV', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[65]].length, BB[xB[38]] = [], BB[xB[16]] = xB[1], BB[xB[9]] = xB[1], BB[-xB[5 … [truncated]
-               if (BB[xB[45]] = BB[xB[5]].indexOf(BB[xB[65]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-                 if (BB[-xB[57]] < xB[1]) BB[-xB[57]] = BB[xB[45]];
+             for (cI(BB[bB[13]] = bB[2], BB[-bB[119]] = 'ChuBvH29jlw,a?no=Ixz~Y<(tE071sV)@.AN_LK8|3k`gbm"q4Ri^GpMr:W>!#/TXD*fyUP+$]6;&eQFc%d5O{SJZ}[', BB[-bB[206]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[-bB[206]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[207]] = bB[1], … [truncated]
+               if (BB[bB[208]] = BB[-bB[119]].indexOf(BB[-bB[206]][BB[bB[11]]]), BB[bB[208]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[208]];
```

#### 1854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14715` → after: `L13430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13430) · [Before (L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14715)

```diff
-                   Uj(BB[-xB[57]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[-xB[57]] << BB[xB[9]], BB[xB[9]] += (BB[-xB[57]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[bB[34]] += BB[bB[208]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[207]], BB[bB[207]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14717-L14720` → after: `L13432-L13435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13432-L13435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13432-L13435) · [Before (L14717-L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14717-L14720)

```diff
-                     Uj(BB[xB[38]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[9]] -= xB[3])
-                   } while (BB[xB[9]] > xB[7]);
-                   BB[-xB[57]] = -xB[2]
-                 } return BB[-xB[57]] > -xB[2] && BB[xB[38]].push((BB[xB[16]] | BB[-xB[57]] << BB[xB[9]]) & xB[11]), CB(BB[xB[38]])
+                     cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[207]] -= bB[11])
+                   } while (BB[bB[207]] > bB[26]);
+                   BB[bB[34]] = -bB[2]
+                 } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[207]]) & bB[12]), EB(BB[bB[52]])
```

#### 1856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14724` → after: `L13439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13439) · [Before (L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14724)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = nz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = kZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14726` → after: `L13441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13441) · [Before (L14726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14726)

```diff
-           if (Uj(BB[xB[0]][Rj(373) + Rj(xB[308])] = xB[76], NB()[Rj(374)](DB, xB[1], zj(BB[xB[1]], BB[xB[2]], AB) * BB[xB[24]][dz(xB[309]) + dz(xB[310]) + xB[283]][dz(377) + dz(378) + dz(379) + dz(380)]() * UB[dz(xB[309]) + dz(xB[310]) + xB[283]], xB[1]), BB[xB[38]][dz(381) + dz( … [truncated]
+           if (cI(BB[bB[0]][cZ(340) + cZ(341)] = bB[183], vB()[cZ(342)](MB, bB[1], ZI(BB[bB[1]], BB[bB[2]], XB) * BB[bB[30]][cZ(bB[209]) + cZ(bB[210]) + bB[175]][cZ(345) + cZ(346) + cZ(347) + cZ(348)]() * cB[cZ(bB[209]) + cZ(bB[210]) + bB[175]], bB[1]), BB[bB[52]][cZ(349) + cZ(350 … [truncated]
```

#### 1858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14728-L14730` → after: `L13443-L13445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13443-L13445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13443-L13445) · [Before (L14728-L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14728-L14730)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'Dx%pe2)Xg+_6${|BV>^KGbAJSM<Cl!q5`,.jWRFiszvEHd8?3fkhTI/O=aL~[*91y7}40o@Q(]Pu#&N:w;mn"rUZYtc', BB[xB[311]] = "" + (BB[xB[1]] || ""), BB[xB[44]] = BB[xB[311]].length, BB[-xB[66]] = [], BB[xB[39]] = xB[1], BB[xB[30]] = xB[1], BB … [truncated]
-                 if (BB[-xB[312]] = BB[xB[2]].indexOf(BB[xB[311]][BB[xB[61]]]), BB[-xB[312]] !== -xB[2])
-                   if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[-xB[312]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '^tXAFLNhWOoJfedRl*kEnQg!_19HYUybuV?&.8qB]:MC20(=s<`|%DZpT/cIK)S6>@P;7,m"G3z4vi[jaw$r#~+}5x{', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[211]] = BB[bB[14]].length, BB[bB[52]] = [], BB[bB[212]] = bB[1], BB[bB[118]] = bB[1], BB … [truncated]
+                 if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14732` → after: `L13447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13447) · [Before (L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14732)

```diff
-                     Uj(BB[xB[92]] += BB[-xB[312]] * xB[29], BB[xB[39]] |= BB[xB[92]] << BB[xB[30]], BB[xB[30]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[212]] |= BB[bB[34]] << BB[bB[118]], BB[bB[118]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14734-L14737` → after: `L13449-L13452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13449-L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13449-L13452) · [Before (L14734-L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14734-L14737)

```diff
-                       Uj(BB[-xB[66]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[30]] -= xB[3])
-                     } while (BB[xB[30]] > xB[7]);
-                     BB[xB[92]] = -xB[2]
-                   } return BB[xB[92]] > -xB[2] && BB[-xB[66]].push((BB[xB[39]] | BB[xB[92]] << BB[xB[30]]) & xB[11]), CB(BB[-xB[66]])
+                       cI(BB[bB[52]].push(BB[bB[212]] & bB[12]), BB[bB[212]] >>= bB[11], BB[bB[118]] -= bB[11])
+                     } while (BB[bB[118]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[bB[212]] | BB[bB[34]] << BB[bB[118]]) & bB[12]), EB(BB[bB[52]])
```

#### 1861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14741` → after: `L13456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13456) · [Before (L14741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14741)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Iz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = nZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14743-L14744` → after: `L13458-L13474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13458-L13474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13458-L13474) · [Before (L14743-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14743-L14744)

```diff
-             const uz = BB[xB[24]][Nz(386) + Nz(387) + Nz(388)];
-             if (gj && BB[xB[24]][xB[331]] && !uz) {
+ 
+             function zZ(...BB) {
+               function IB(...BB) {
+                 return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+                   for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '3eILkdVTRPFOanHNfcqDporXUZtbKmslGY{]WxA<.:M=$}h/6g>"SEJ`BCQzw,8ij^!(v+%)[10|@7_&5#y?u4;92*~', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[10]] = [], BB[-bB[213]] = bB[1], BB[bB[24]] = bB[1],  … [truncated]
+                     if (BB[bB[33]] = BB[bB[22]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+                       if (BB[bB[84]] < bB[1]) BB[bB[84]] = BB[bB[33]];
+                       else {
+                         cI(BB[bB[84]] += BB[bB[33]] * bB[35], BB[-bB[213]] |= BB[bB[84]] << BB[bB[24]], BB[bB[24]] += (BB[bB[84]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                         do {
+                           cI(BB[bB[10]].push(BB[-bB[213]] & bB[12]), BB[-bB[213]] >>= bB[11], BB[bB[24]] -= bB[11])
+                         } while (BB[bB[24]] > bB[26]);
+                         BB[bB[84]] = -bB[2]
+                       } return BB[bB[84]] > -bB[2] && BB[bB[10]].push((BB[-bB[213]] | BB[bB[84]] << BB[bB[24]]) & bB[12]), EB(BB[bB[10]])
+                 }(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+               }
+ ... (1 more added lines; see GitHub link above)
```

#### 1863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14746-L14748` → after: `L13476-L13512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13476-L13512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13476-L13512) · [Before (L14746-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14746-L14748)

```diff
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = '1"/|yg~7;#G$En]j5oi.Aa`P(ZBI%8h!e&9{mMXpK6Ux[r*z3>DW0=HfwbCQq:T,s@^v<}LVkd_YSF+?24RucOl)JtN', BB[-xB[96]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[-xB[96]].length, BB[xB[14]] = [], BB[xB[39]] = xB[1], BB[-xB[140]] = xB[1], … [truncated]
-                   if (BB[-xB[313]] = BB[xB[5]].indexOf(BB[-xB[96]][BB[xB[3]]]), BB[-xB[313]] !== -xB[2])
-                     if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[-xB[313]];
+                 if (BB[bB[13]] = bB[2], !BB[bB[1]]) return -bB[2];
+                 const IB = ZB(BB[bB[1]].left),
+                   TB = ZB(BB[bB[1]].right),
+                   JB = Math.abs(IB - TB);
+                 if (IB === 1 / 0 || TB === 1 / 0 || JB > bB[2]) return 1 / 0;
+                 return Math.max(IB, TB) + bB[2]
+               }
+               BB[bB[13]] = bB[1], window[cZ(355) + IB(356) + IB(357) + "_"] = {
+                 buildCharacterMap: function(...BB) {
+                   BB[bB[13]] = bB[2];
+                   const IB = {};
+                   for (let ZB of BB[bB[1]].replace(/[^w]/g, "").toLowerCase()) IB[ZB] = IB[ZB] + bB[2] || bB[2];
+                   return IB
+                 },
+                 isAnagrams: function(...BB) {
+                   BB[bB[13]] = bB[0];
+ ... (21 more added lines; see GitHub link above)
```

#### 1864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14750` → after: `L13514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13514) · [Before (L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14750)

```diff
-                       Uj(BB[xB[92]] += BB[-xB[313]] * xB[29], BB[xB[39]] |= BB[xB[92]] << BB[-xB[140]], BB[-xB[140]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14752-L14755` → after: `L13516-L13525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13516-L13525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13516-L13525) · [Before (L14752-L14755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14752-L14755)

```diff
-                         Uj(BB[xB[14]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[-xB[140]] -= xB[3])
-                       } while (BB[-xB[140]] > xB[7]);
-                       BB[xB[92]] = -xB[2]
-                     } return BB[xB[92]] > -xB[2] && BB[xB[14]].push((BB[xB[39]] | BB[xB[92]] << BB[-xB[140]]) & xB[11]), CB(BB[xB[14]])
+                         cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                       } while (oB > bB[26]);
+                       GB = -bB[2]
+                     }
+                 }
+                 return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
+               }
+ 
+               function gZ(...BB) {
+                 return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = NZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14759` → after: `L13529-L13576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13529-L13576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13529-L13576) · [Before (L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14759)

```diff
-                 return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Uz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+                 BB[bB[13]] = bB[1];
+                 const IB = require("big-integer");
+                 cI(BB[bB[10]] = class {
+                   static randomPrime(...BB) {
+                     BB[bB[13]] = bB[2];
+                     const ZB = IB.one.shiftLeft(BB[bB[1]] - bB[2]),
+                       TB = IB.one.shiftLeft(BB[bB[1]]).prev();
+                     for (; bB[183];) {
+                       let BB = IB.randBetween(ZB, TB);
+                       if (BB.isProbablePrime(bB[156])) return BB
+                     }
+                   }
+                   static generate(...BB) {
+                     BB[bB[13]] = bB[2];
+                     const ZB = IB(bB[214]);
+                     let TB, JB;
+ ... (32 more added lines; see GitHub link above)
```

#### 1867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14761` → after: `L13578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13578) · [Before (L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14761)

```diff
-               Uj(BB[xB[1]][az(389)][az(390)](BB[xB[2]], BB[xB[24]], BB[xB[0]], BB[xB[0]][az(391) + az(392)] + xB[2]), BB[-xB[35]] = xB[76])
+               hZ(361) in DB && qZ(), cI(BB[bB[1]][hZ(362)][gZ(363)](BB[bB[2]], BB[bB[30]], BB[bB[0]], BB[bB[0]][gZ(364) + gZ(365)] + bB[2]), BB[bB[11]] = bB[183])
```

#### 1868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14764-L14766` → after: `L13581-L13583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13581-L13583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13581-L13583) · [Before (L14764-L14766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14764-L14766)

```diff
-                 for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'WPNSfCjDsdFB^Z&9(IkK<=4o>T"uer;mz/5UM?2HqA#[YL+$abJOxGhi%QnpX1@tc.RE|8g_ylv,w}`0*])~{367!:V', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[0]].length, BB[xB[14]] = [], BB[-xB[0]] = xB[1], BB[xB[30]] = xB[1], BB[xB … [truncated]
-                   if (BB[xB[314]] = BB[xB[2]].indexOf(BB[xB[0]][BB[xB[3]]]), BB[xB[314]] !== -xB[2])
-                     if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[314]];
+                 for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'ADh0mksFeXwrJ~lpObdvjn3ZYM$7S/t8NT9BqiK=f[?@}5<&.cRCLy^,!;|QzUa)IgPHE`oW6V{x2*"(1u4>+%]:#G_', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[-bB[109]] = BB[bB[0]].length, BB[bB[215]] = [], BB[bB[130]] = bB[1], BB[bB[82]] = bB[1], B … [truncated]
+                   if (BB[bB[79]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[79]] !== -bB[2])
+                     if (BB[-bB[136]] < bB[1]) BB[-bB[136]] = BB[bB[79]];
```

#### 1869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14768` → after: `L13585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13585) · [Before (L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14768)

```diff
-                       Uj(BB[xB[92]] += BB[xB[314]] * xB[29], BB[-xB[0]] |= BB[xB[92]] << BB[xB[30]], BB[xB[30]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                       cI(BB[-bB[136]] += BB[bB[79]] * bB[35], BB[bB[130]] |= BB[-bB[136]] << BB[bB[82]], BB[bB[82]] += (BB[-bB[136]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14770-L14773` → after: `L13587-L13590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13587-L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13587-L13590) · [Before (L14770-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14770-L14773)

```diff
-                         Uj(BB[xB[14]].push(BB[-xB[0]] & xB[11]), BB[-xB[0]] >>= xB[3], BB[xB[30]] -= xB[3])
-                       } while (BB[xB[30]] > xB[7]);
-                       BB[xB[92]] = -xB[2]
-                     } return BB[xB[92]] > -xB[2] && BB[xB[14]].push((BB[-xB[0]] | BB[xB[92]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
+                         cI(BB[bB[215]].push(BB[bB[130]] & bB[12]), BB[bB[130]] >>= bB[11], BB[bB[82]] -= bB[11])
+                       } while (BB[bB[82]] > bB[26]);
+                       BB[-bB[136]] = -bB[2]
+                     } return BB[-bB[136]] > -bB[2] && BB[bB[215]].push((BB[bB[130]] | BB[-bB[136]] << BB[bB[82]]) & bB[12]), EB(BB[bB[215]])
```

#### 1871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14777` → after: `L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13594) · [Before (L14777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14777)

```diff
-                 return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = pz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+                 return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = yZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14779` → after: `L13596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13596) · [Before (L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14779)

```diff
-               BB[xB[1]][rz(393)][rz(394)](BB[xB[2]], BB[xB[24]], BB[xB[0]], xB[1])
+               BB[bB[1]][UZ(366)][UZ(367)](BB[bB[2]], BB[bB[30]], BB[bB[0]], bB[1])
```

#### 1873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14783-L14785` → after: `L13600-L13602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13600-L13602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13600-L13602) · [Before (L14783-L14785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14783-L14785)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = '=FMlnqTJkSmY1}oIxuEUDLPNe3>|VH9)~<W^jC#2zBc]8id&Xs+.rZRQ@7v!g*K0$,b?OpA5w`;{/_6y(%G4at:[fh"', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[65]].length, BB[xB[14]] = [], BB[xB[315]] = xB[1], BB[xB[30]] = xB[1], BB[x … [truncated]
-                 if (BB[-xB[26]] = BB[xB[2]].indexOf(BB[xB[65]][BB[xB[316]]]), BB[-xB[26]] !== -xB[2])
-                   if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[-xB[26]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[218]] = 'D;FKnZu=78J]IE@<zv9XH1e?Trc$w4GM.}A!,):dsOP/q+[o#f%2R_klSh&`|gx>mCiL*3pBV~^bWy"Q0(YjUa5{Nt6', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[216]] = BB[bB[14]].length, BB[bB[220]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+                 if (BB[bB[219]] = BB[bB[218]].indexOf(BB[bB[14]][BB[-bB[217]]]), BB[bB[219]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[219]];
```

#### 1874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14787` → after: `L13604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13604) · [Before (L14787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14787)

```diff
-                     Uj(BB[xB[92]] += BB[-xB[26]] * xB[29], BB[xB[315]] |= BB[xB[92]] << BB[xB[30]], BB[xB[30]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[bB[34]] += BB[bB[219]] * bB[35], BB[bB[8]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14789-L14792` → after: `L13606-L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13606-L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13606-L13609) · [Before (L14789-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14789-L14792)

```diff
-                       Uj(BB[xB[14]].push(BB[xB[315]] & xB[11]), BB[xB[315]] >>= xB[3], BB[xB[30]] -= xB[3])
-                     } while (BB[xB[30]] > xB[7]);
-                     BB[xB[92]] = -xB[2]
-                   } return BB[xB[92]] > -xB[2] && BB[xB[14]].push((BB[xB[315]] | BB[xB[92]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
+                       cI(BB[bB[220]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                     } while (BB[bB[24]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[220]].push((BB[bB[8]] | BB[bB[34]] << BB[bB[24]]) & bB[12]), EB(BB[bB[220]])
```

#### 1876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14796` → after: `L13613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13613) · [Before (L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14796)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = sz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = WZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14798` → after: `L13615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13615) · [Before (L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14798)

```diff
-             BB[xB[0]][dz(395) + Jz(396)]++, BB[xB[38]][xB[317]][xB[2]] < xB[1] && (BB[xB[38]][xB[317]][xB[2]] = xB[1])
+             BB[bB[0]][dZ(368) + dZ(369)]++, BB[bB[52]][bB[221]][bB[2]] < bB[1] && (BB[bB[52]][bB[221]][bB[2]] = bB[1])
```

#### 1878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14801-L14802` → after: `L13618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13618) · [Before (L14801-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14801-L14802)

```diff
-       } else BB[xB[0]][jB(xB[304]) + jB(xB[318])] = xB[68], jj && BB[xB[1]][jB(xB[161])][jB(397)](BB[xB[2]], BB[xB[24]], BB[xB[0]], xB[1]);
-       if (BB[xB[0]][jB(xB[319]) + xB[92]]) {
+       } else {
```

#### 1879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14804-L14806` → after: `L13620-L13622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13620-L13622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13620-L13622) · [Before (L14804-L14806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14804-L14806)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'Qy(/*}0Pxqo4[pe_^GwA6]t"S&IK=8aJ157D~iOljbB2hrMVd>;9Nv3zE+:,F|UXcf`#nYuR%$@C<)g!.{?mTksZHWL', BB[-xB[320]] = "" + (BB[xB[1]] || ""), BB[-xB[321]] = BB[-xB[320]].length, BB[xB[14]] = [], BB[xB[39]] = xB[1], BB[xB[30]] = xB[1], BB[ … [truncated]
-             if (BB[-xB[322]] = BB[xB[5]].indexOf(BB[-xB[320]][BB[xB[3]]]), BB[-xB[322]] !== -xB[2])
-               if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[-xB[322]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[27]] = 'zpiPeKOSGwREJhdl`;BF:$N%4~<MXb2,q)QsL*x=y[!j50VU1_I&^+A9YtHv3(Cc6.rD@gZaf{?"ou7W/m>k#]8|}nT', BB[bB[222]] = "" + (BB[bB[1]] || ""), BB[-bB[143]] = BB[bB[222]].length, BB[bB[52]] = [], BB[-bB[223]] = bB[1], BB[bB[20]] = bB[1], BB … [truncated]
+             if (BB[bB[6]] = BB[bB[27]].indexOf(BB[bB[222]][BB[-bB[200]]]), BB[bB[6]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14808` → after: `L13624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13624) · [Before (L14808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14808)

```diff
-                 Uj(BB[xB[7]] += BB[-xB[322]] * xB[29], BB[xB[39]] |= BB[xB[7]] << BB[xB[30]], BB[xB[30]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[-bB[223]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14810-L14813` → after: `L13626-L13666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13626-L13666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13626-L13666) · [Before (L14810-L14813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14810-L14813)

```diff
-                   Uj(BB[xB[14]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[xB[7]] = -xB[2]
-               } return BB[xB[7]] > -xB[2] && BB[xB[14]].push((BB[xB[39]] | BB[xB[7]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
+                   cI(BB[bB[52]].push(BB[-bB[223]] & bB[12]), BB[-bB[223]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[-bB[223]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[52]])
+         }
+ 
+         function QZ(BB) {
+           return typeof RB[BB] === bB[18] ? RB[BB] = CZ(rB[BB]) : RB[BB]
+         }
+         if (BB[bB[0]][IB(370) + QZ(371)] = bB[179], II) {
+           function sZ(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = 'u+3:y9`]@x"<z2|Lb&oU?%_~s.rVHNWZnmCaMjG>!${Jk=PQTl7#*}vYhK1SFgB4R(XqD6[/A,wIe0tE5f;O)^p8cdi', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[20]] = bB[1], BB[bB[34 … [truncated]
+               if (BB[bB[45]] = BB[bB[22]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[45]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[45]];
+                 else {
+                   cI(BB[bB[34]] += BB[bB[45]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+ ... (25 more added lines; see GitHub link above)
```

#### 1882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14817` → after: `L13670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13670) · [Before (L14817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14817)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = mz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = OZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14819` → after: `L13672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13672) · [Before (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14819)

```diff
-         BB[xB[38]][jB(xB[252]) + yz(398) + yz(399)] = xB[1];
+         BB[bB[52]][YZ(374) + YZ(375) + YZ(376)] = bB[1];
```

#### 1884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14821-L14823` → after: `L13674-L13675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13674-L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13674-L13675) · [Before (L14821-L14823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14821-L14823)

```diff
-           Gz = xB[68];
-         if (BB[xB[24]][yz(400) + xB[92]] || BB[-xB[288]]) Uj(kz = xB[2], Gz = BB[-xB[288]] || !BB[xB[0]][yz(401) + yz(402) + yz(403) + yz(404)]);
-         else {
+           pZ = bB[179];
+         if (BB[bB[30]][YZ(377) + bB[34]] || BB[bB[14]]) {
```

#### 1885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14825-L14827` → after: `L13677-L13679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13677-L13679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13677-L13679) · [Before (L14825-L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14825-L14827)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[-xB[323]] = ',(91_w=z3eN)qk{a>rvC*mV0Qn$A~UP|;?X&DKfEOMlJRLGYTpjIyx`+24@b%g!htcZ"#F^B}su/68:Wi.7d]S<[Ho5', BB[xB[324]] = "" + (BB[xB[1]] || ""), BB[-xB[22]] = BB[xB[324]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], B … [truncated]
-               if (BB[xB[45]] = BB[-xB[323]].indexOf(BB[xB[324]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-                 if (BB[xB[142]] < xB[1]) BB[xB[142]] = BB[xB[45]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[227]] = ',x53u<6/#7%|0>;2$T[aEf@nWAQMZVBIC)do9O"lRgLN1}HrzY^Gi_kSm&evt?*`w:sPU4~X.cbDJ+ypK8!=({Fh]jq', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[226]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[98]] = bB[1], BB[bB[20]] = bB[1], BB[bB[ … [truncated]
+               if (BB[bB[6]] = BB[bB[227]].indexOf(BB[bB[0]][BB[-bB[225]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14829` → after: `L13681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13681) · [Before (L14829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14829)

```diff
-                   Uj(BB[xB[142]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[xB[142]] << BB[xB[30]], BB[xB[30]] += (BB[xB[142]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[98]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14831-L14834` → after: `L13683-L13686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13683-L13686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13683-L13686) · [Before (L14831-L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14831-L14834)

```diff
-                     Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                   } while (BB[xB[30]] > xB[7]);
-                   BB[xB[142]] = -xB[2]
-                 } return BB[xB[142]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[xB[142]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
+                     cI(BB[bB[10]].push(BB[bB[98]] & bB[12]), BB[bB[98]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[bB[34]] = -bB[2]
+                 } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[98]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14838` → after: `L13690-L13704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13690-L13704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13690-L13704) · [Before (L14838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14838)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = gz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = HZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+           }
+           cI(iZ = bB[2], pZ = BB[bB[14]] || !BB[bB[0]][MZ(378) + MZ(379) + MZ(380) + MZ(381)])
+         } else if (BB[bB[30]][YZ(382) + YZ(383)]) {
+           function jZ(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '0#]+3zwc:n{SOA51U*.}iugKQb7G/8@f?xBM%Fe=lYNpX6Cjm)vP>[oZ2^T_V"9HLq4<WI&DRt`rJds!|;,Eya~$h(k', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[208]] = BB[bB[14]].length, BB[bB[217]] = [], BB[bB[29]] = bB[1], BB[-bB[89]] = bB[1], BB[b … [truncated]
+               if (BB[-bB[228]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[-bB[228]] !== -bB[2])
+                 if (BB[bB[223]] < bB[1]) BB[bB[223]] = BB[-bB[228]];
+                 else {
+                   cI(BB[bB[223]] += BB[-bB[228]] * bB[35], BB[bB[29]] |= BB[bB[223]] << BB[-bB[89]], BB[-bB[89]] += (BB[bB[223]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                   do {
+                     cI(BB[bB[217]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[-bB[89]] -= bB[11])
+                   } while (BB[-bB[89]] > bB[26]);
+                   BB[bB[223]] = -bB[2]
+                 } return BB[bB[223]] > -bB[2] && BB[bB[217]].push((BB[bB[29]] | BB[bB[223]] << BB[-bB[89]]) & bB[12]), EB(BB[bB[217]])
```

#### 1889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14854-L14857` → after: `L13707-L13724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13707-L13724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13707-L13724) · [Before (L14854-L14857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14854-L14857)

```diff
-             function Mz(...BB) {
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Sz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-             }
-             Uj(kz = -xB[2], Gz = !BB[xB[0]][Mz(407) + Mz(408) + Mz(409) + Mz(410)])
+           function PZ(...BB) {
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = jZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+           }
+ 
+           function RZ(...BB) {
+             var IB;
+             cI(BB[bB[13]] = bB[1], IB = function(...BB) {
+               cI(BB[bB[13]] = bB[2], this.ah = BB[bB[1]], this.length = bB[1], this.map = {}, this.head = bB[51], this.tail = bB[51])
+             }, IB.prototype.get = function(...BB) {
+               var IB;
+               return cI(BB[bB[13]] = bB[2], IB = this.map[BB[bB[1]]]), IB ? (this.remove(IB), this.insert(IB.key, IB.val), IB.val) : -bB[2]
+             }, IB.prototype.put = function(...BB) {
+               cI(BB[bB[13]] = bB[0], this.map[BB[bB[1]]] ? (this.remove(this.map[BB[bB[1]]]), this.insert(BB[bB[1]], BB[bB[2]])) : this.length === this.ah ? (this.remove(this.head), this.insert(BB[bB[1]], BB[bB[2]])) : (this.insert(BB[bB[1]], BB[bB[2]]), this.length++))
+             }, IB.prototype.remove = function(...BB) {
+               cI(BB[bB[13]] = bB[2], BB[bB[2]] = BB[bB[1]].prev, BB[-bB[128]] = BB[bB[1]].next), BB[-bB[128]] && (BB[-bB[128]].prev = BB[bB[2]]), BB[bB[2]] && (BB[bB[2]].next = BB[-bB[128]]), this.head === BB[bB[1]] && (this.head = BB[-bB[128]]), this.tail === BB[bB[1]] && (this. … [truncated]
+             }, IB.prototype.insert = function(...BB) {
+ ... (2 more added lines; see GitHub link above)
```

#### 1890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14860-L14862` → after: `L13728-L13730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13728-L13730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13728-L13730) · [Before (L14860-L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14860-L14862)

```diff
-         BB[xB[0]][yz(xB[329]) + xB[330]][yz(xB[332]) + yz(xB[333])] = BB[xB[38]][xB[317]][xB[2]];
-         const Lz = (xB[1], iB[xB[30]])(BB[xB[0]][yz(xB[329]) + xB[330]], BB[xB[24]][xB[331]] !== xB[1], kz, Gz);
-         Uj(NB()[yz(414)](DB, xB[1], Lz, xB[1]), BB[xB[38]][yz(415) + yz(416)](DB), BB[xB[38]][xB[317]][xB[2]] = BB[xB[0]][yz(xB[329]) + xB[330]][yz(xB[332]) + yz(xB[333])], BB[xB[24]][yz(417)][yz(418) + yz(419) + yz(420)](yz(421) + yz(422) + yz(423), xB[2] + BB[xB[0]][yz(xB[329]) … [truncated]
+         BB[bB[0]][YZ(bB[230]) + bB[231]][YZ(bB[233]) + YZ(bB[234])] = BB[bB[52]][bB[221]][bB[2]];
+         const aZ = (bB[1], YB[bB[34]])(BB[bB[0]][YZ(bB[230]) + bB[231]], BB[bB[30]][bB[232]] !== bB[1], iZ, pZ);
+         cI(vB()[YZ(392)](MB, bB[1], aZ, bB[1]), BB[bB[52]][YZ(393) + YZ(394)](MB), BB[bB[52]][bB[221]][bB[2]] = BB[bB[0]][YZ(bB[230]) + bB[231]][YZ(bB[233]) + YZ(bB[234])], BB[bB[30]][YZ(395)][YZ(396) + YZ(397) + YZ(398)](YZ(399) + YZ(400) + YZ(401), bB[2] + BB[bB[0]][YZ(bB[230]) … [truncated]
```

#### 1891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14865-L14867` → after: `L13733-L13735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13733-L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13733-L13735) · [Before (L14865-L14867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14865-L14867)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[-xB[69]] = 'O46Lu/*h[McDYpU]z{J3ZBNRqo|,^9Hvjl7wAre"+@kC8:<!TV1XS$aGEP}Wx5?0dIbKm;(int.F=Q#`%gf)2y>~_&s', BB[-xB[334]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[-xB[334]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[ … [truncated]
-             if (BB[-xB[335]] = BB[-xB[69]].indexOf(BB[-xB[334]][BB[xB[61]]]), BB[-xB[335]] !== -xB[2])
-               if (BB[-xB[75]] < xB[1]) BB[-xB[75]] = BB[-xB[335]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'ful]pn+vD?hC(SB7=XbFz|N%Aw)O}is_mP#6GQU"dWcaT1V0.54Zxk8y<{;*@!grqHIKoEJjYL2~R9,/:`[$>Me&^3t', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[14]].length, BB[-bB[236]] = [], BB[bB[147]] = bB[1], BB[bB[24]] = bB[1], BB[bB[ … [truncated]
+             if (BB[bB[235]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[33]]]), BB[bB[235]] !== -bB[2])
+               if (BB[bB[31]] < bB[1]) BB[bB[31]] = BB[bB[235]];
```

#### 1892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14869` → after: `L13737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13737) · [Before (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14869)

```diff
-                 Uj(BB[-xB[75]] += BB[-xB[335]] * xB[29], BB[xB[16]] |= BB[-xB[75]] << BB[xB[30]], BB[xB[30]] += (BB[-xB[75]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[31]] += BB[bB[235]] * bB[35], BB[bB[147]] |= BB[bB[31]] << BB[bB[24]], BB[bB[24]] += (BB[bB[31]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14871-L14874` → after: `L13739-L13742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13739-L13742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13739-L13742) · [Before (L14871-L14874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14871-L14874)

```diff
-                   Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[-xB[75]] = -xB[2]
-               } return BB[-xB[75]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[-xB[75]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
+                   cI(BB[-bB[236]].push(BB[bB[147]] & bB[12]), BB[bB[147]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[31]] = -bB[2]
+               } return BB[bB[31]] > -bB[2] && BB[-bB[236]].push((BB[bB[147]] | BB[bB[31]] << BB[bB[24]]) & bB[12]), EB(BB[-bB[236]])
```

#### 1894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14877-L14878` → after: `L13745-L13746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13745-L13746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13745-L13746) · [Before (L14877-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14877-L14878)

```diff
-         function iz(BB) {
-           return typeof VB[BB] === xB[17] ? VB[BB] = Ez(hB[BB]) : VB[BB]
+         function mZ(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = rZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14880` → after: `L13748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13748) · [Before (L14880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14880)

```diff
-         Uj(BB[xB[0]][jB(424) + xB[330]].reset(), BB[xB[24]][iz(425)][iz(426) + iz(427) + iz(428)](iz(429) + iz(430) + iz(431), xB[2]))
+         cI(BB[bB[0]][IB(402) + bB[231]].reset(), BB[bB[30]][IB(bB[292])][IB(bB[293]) + mZ(405) + mZ(406)](mZ(407) + mZ(408) + mZ(409), bB[2]))
```

#### 1896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14882-L14884` → after: `L13750-L13752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13750-L13752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13750-L13752) · [Before (L14882-L14884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14882-L14884)

```diff
-       BB[-xB[336]] = xB[68];
-       const tj = LB[xB[1]] || gB[xB[1]] && BB[xB[38]][jB(xB[344]) + xB[92]][xB[1]] !== xB[1] && (WB > xB[1] || UB[jB(xB[337]) + jB(xB[338]) + jB(xB[339]) + xB[340]] > xB[1] && Math[jB(xB[345])](BB[xB[0]][jB(xB[341]) + jB(xB[342]) + jB(xB[343])][xB[1]]) >= UB[jB(434) + jB(435) + j … [truncated]
-         Sj = LB[xB[0]] || gB[xB[0]] && BB[xB[38]][jB(xB[344]) + xB[92]][xB[0]] !== xB[1] && (WB > xB[1] || UB[jB(437) + jB(438) + jB(xB[259])] > xB[1] && Math[jB(xB[345])](BB[xB[0]][jB(xB[341]) + jB(xB[342]) + jB(xB[343])][xB[0]]) >= UB[jB(439) + jB(440) + jB(441) + jB(442) + xB[ … [truncated]
+       BB[-bB[118]] = bB[179];
+       const CI = WB[bB[1]] || dB[bB[1]] && BB[bB[52]][IB(bB[239]) + bB[34]][bB[1]] !== bB[1] && (uB > bB[1] || cB[IB(411) + IB(412) + IB(bB[159])] > bB[1] && Math[IB(bB[243])](BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(bB[237])][bB[1]]) >= cB[IB(bB[244]) + IB(bB[245]) + IB(bB[238])] … [truncated]
+         QI = WB[bB[0]] || dB[bB[0]] && BB[bB[52]][IB(bB[239]) + bB[34]][bB[0]] !== bB[1] && (uB > bB[1] || cB[IB(bB[240]) + IB(bB[213]) + IB(bB[241]) + bB[242]] > bB[1] && Math[IB(bB[243])](BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(bB[237])][bB[0]]) >= cB[IB(bB[244]) + IB(bB[245])  … [truncated]
```

#### 1897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14886-L14889` → after: `L13754-L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13754-L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13754-L13757) · [Before (L14886-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14886-L14889)

```diff
-         const qz = xB[9],
-           fz = xB[99],
-           oz = xB[70];
-         if (BB[xB[38]][xB[359]](), tj) {
+         const XZ = bB[24],
+           LZ = bB[104],
+           eZ = bB[108];
+         if (BB[bB[52]][bB[264]](), CI) {
```

#### 1898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14891-L14893` → after: `L13759-L13761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13759-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13759-L13761) · [Before (L14891-L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14891-L14893)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = '+AnaBdPsgYwTJ`z9h&~f7e/"GMOCpL_8y!rN$[m6#|UuF54<^%.QV;{XW@]SkZb=0xKcjI:>,l*?}otv3HD2i)1(qER', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[65]].length, BB[xB[84]] = [], BB[-xB[346]] = xB[1], BB[xB[9]] = xB[1], BB[-xB … [truncated]
-               if (BB[-xB[315]] = BB[xB[5]].indexOf(BB[xB[65]][BB[xB[3]]]), BB[-xB[315]] !== -xB[2])
-                 if (BB[-xB[26]] < xB[1]) BB[-xB[26]] = BB[-xB[315]];
+             for (cI(BB[bB[13]] = bB[2], BB[-bB[246]] = 'E<P=l1t^2+mN|U)jRoAOBZ4u.$g3d>WVGJIH"6{5D}FnScb*@Msi[vhzr:KC7kQ?wyL9YapX]e&q#%,f;0`x8(_!/~T', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[247]] = BB[bB[0]].length, BB[-bB[222]] = [], BB[bB[69]] = bB[1], BB[bB[20]] = bB[1], BB[ … [truncated]
+               if (BB[bB[240]] = BB[-bB[246]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[240]] !== -bB[2])
+                 if (BB[-bB[248]] < bB[1]) BB[-bB[248]] = BB[bB[240]];
```

#### 1899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14895` → after: `L13763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13763) · [Before (L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14895)

```diff
-                   Uj(BB[-xB[26]] += BB[-xB[315]] * xB[29], BB[-xB[346]] |= BB[-xB[26]] << BB[xB[9]], BB[xB[9]] += (BB[-xB[26]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[-bB[248]] += BB[bB[240]] * bB[35], BB[bB[69]] |= BB[-bB[248]] << BB[bB[20]], BB[bB[20]] += (BB[-bB[248]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14897-L14900` → after: `L13765-L13768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13765-L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13765-L13768) · [Before (L14897-L14900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14897-L14900)

```diff
-                     Uj(BB[xB[84]].push(BB[-xB[346]] & xB[11]), BB[-xB[346]] >>= xB[3], BB[xB[9]] -= xB[3])
-                   } while (BB[xB[9]] > xB[7]);
-                   BB[-xB[26]] = -xB[2]
-                 } return BB[-xB[26]] > -xB[2] && BB[xB[84]].push((BB[-xB[346]] | BB[-xB[26]] << BB[xB[9]]) & xB[11]), CB(BB[xB[84]])
+                     cI(BB[-bB[222]].push(BB[bB[69]] & bB[12]), BB[bB[69]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[-bB[248]] = -bB[2]
+                 } return BB[-bB[248]] > -bB[2] && BB[-bB[222]].push((BB[bB[69]] | BB[-bB[248]] << BB[bB[20]]) & bB[12]), EB(BB[-bB[222]])
```

#### 1901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14904` → after: `L13772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13772) · [Before (L14904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14904)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Hz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = uZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14906-L14908` → after: `L13774-L13776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13774-L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13774-L13776) · [Before (L14906-L14908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14906-L14908)

```diff
-           const Fz = BB[xB[0]][Dz(xB[347]) + Dz(xB[348]) + Dz(xB[349])][xB[1]] <= xB[1] ? xB[2] : -xB[2],
-             Yz = Math[Dz(446)](oz, Math[Dz(447)](BB[xB[0]][Dz(xB[347]) + Dz(xB[348]) + Dz(xB[349])][xB[1]]));
-           Uj(BB[xB[38]][xB[317]][xB[1]] = Fz * Yz * (LB[xB[1]] ? xB[2] : eB), uj(BB[xB[1]], LB[xB[1]], [BB[xB[38]][Dz(448) + xB[92]][xB[1]], xB[1], xB[1]]))
+           const lZ = BB[bB[0]][IB(bB[12]) + fZ(bB[249]) + fZ(bB[250])][bB[1]] <= bB[1] ? bB[2] : -bB[2],
+             AZ = Math[fZ(418)](eZ, Math[fZ(419)](BB[bB[0]][fZ(420) + fZ(bB[249]) + fZ(bB[250])][bB[1]]));
+           cI(BB[bB[52]][bB[221]][bB[1]] = lZ * AZ * (WB[bB[1]] ? bB[2] : fB), kI(BB[bB[1]], WB[bB[1]], [BB[bB[52]][fZ(421) + bB[34]][bB[1]], bB[1], bB[1]]))
```

#### 1903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14912-L14914` → after: `L13780-L13782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13780-L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13780-L13782) · [Before (L14912-L14914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14912-L14914)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'RtjblPEiWSYadLAXNFUDkgecrVHfKsBqm|u)vTZQM&CO^(:0G{opIJn,!4%}3#/.*[@8<$hz?=6~5;7]>y_92`1xw"+', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[65]].length, BB[xB[102]] = [], BB[xB[39]] = xB[1], BB[xB[112]] = xB[1], BB[xB … [truncated]
-               if (BB[xB[27]] = BB[xB[5]].indexOf(BB[xB[65]][BB[xB[3]]]), BB[xB[27]] !== -xB[2])
-                 if (BB[xB[350]] < xB[1]) BB[xB[350]] = BB[xB[27]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '9vO1eC/Pb6~jw3A#Iz!FYZ7n;x?]{Vq2fy4N)<MR0($=H>Bs&p:dQ5LuaTE^toh8_Kr%[l@UmSg"*+}`c|G,kJW.iXD', BB[bB[251]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[251]].length, BB[bB[10]] = [], BB[bB[142]] = bB[1], BB[bB[20]] = bB[1], BB[b … [truncated]
+               if (BB[bB[33]] = BB[bB[2]].indexOf(BB[bB[251]][BB[bB[11]]]), BB[bB[33]] !== -bB[2])
+                 if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[33]];
```

#### 1904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14916` → after: `L13784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13784) · [Before (L14916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14916)

```diff
-                   Uj(BB[xB[350]] += BB[xB[27]] * xB[29], BB[xB[39]] |= BB[xB[350]] << BB[xB[112]], BB[xB[112]] += (BB[xB[350]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[bB[26]] += BB[bB[33]] * bB[35], BB[bB[142]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14918-L14921` → after: `L13786-L13789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13786-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13786-L13789) · [Before (L14918-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14918-L14921)

```diff
-                     Uj(BB[xB[102]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[112]] -= xB[3])
-                   } while (BB[xB[112]] > xB[7]);
-                   BB[xB[350]] = -xB[2]
-                 } return BB[xB[350]] > -xB[2] && BB[xB[102]].push((BB[xB[39]] | BB[xB[350]] << BB[xB[112]]) & xB[11]), CB(BB[xB[102]])
+                     cI(BB[bB[10]].push(BB[bB[142]] & bB[12]), BB[bB[142]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[bB[26]] = -bB[2]
+                 } return BB[bB[26]] > -bB[2] && BB[bB[10]].push((BB[bB[142]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14925` → after: `L13793-L13848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13793-L13848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13793-L13848) · [Before (L14925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14925)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Vz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = tZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+           }
+           const xZ = BB[bB[0]][bZ(bB[252]) + bZ(bB[253]) + bZ(bB[254])][bB[2]] <= bB[1] ? bB[2] : -bB[2];
+           let EZ = Math[bZ(425)](XZ, Math[bZ(426)](BB[bB[0]][bZ(bB[252]) + bZ(bB[253]) + bZ(bB[254])][bB[2]]));
+           if (EZ < LZ && BB[bB[30]][bZ(427) + bB[34]] && xZ === bB[2]) {
+             function DZ(...BB) {
+               BB[bB[13]] = bB[1];
+               const IB = require("big-integer");
+               cI(BB[bB[200]] = class {
+                 static randomPrime(...BB) {
+                   BB[bB[13]] = bB[2];
+                   const ZB = IB.one.shiftLeft(BB[bB[1]] - bB[2]),
+                     TB = IB.one.shiftLeft(BB[bB[1]]).prev();
+                   for (; bB[183];) {
+                     let BB = IB.randBetween(ZB, TB);
+                     if (BB.isProbablePrime(bB[156])) return BB
+ ... (40 more added lines; see GitHub link above)
```

#### 1907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14927-L14929` → after: `L13850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13850) · [Before (L14927-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14927-L14929)

```diff
-           const Xz = BB[xB[0]][jB(xB[341]) + jB(xB[342]) + jB(xB[343])][xB[2]] <= xB[1] ? xB[2] : -xB[2];
-           let Zz = Math[jB(xB[417])](qz, Math[hz(450)](BB[xB[0]][hz(451) + hz(452) + hz(453)][xB[2]]));
-           if (Zz < fz && BB[xB[24]][hz(454) + xB[92]] && Xz === xB[2] && (Zz = Math[hz(455)](Zz + xB[19] / Zz + 2.3, fz)), gj && BB[xB[0]][hz(xB[351])] && Uj(BB[xB[0]][hz(xB[351])] = xB[68], Zz += xB[39], BB[-xB[336]] = xB[76]), BB[xB[38]][xB[317]][xB[2]] = Xz * Zz * (LB[xB[2]] ? … [truncated]
+           if (dI && BB[bB[0]][bZ(bB[256])] && cI(BB[bB[0]][bZ(bB[256])] = bB[179], EZ += bB[8], BB[-bB[118]] = bB[183]), BB[bB[52]][bB[221]][bB[2]] = xZ * EZ * (WB[bB[2]] ? bB[2] : lB), BB[-bB[118]]) {
```

#### 1908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14931-L14933` → after: `L13852-L13854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13852-L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13852-L13854) · [Before (L14931-L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14931-L14933)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'm#PKa1jAO{]V|z5oWTt<DY8Uw/rL_*nBFiqcI3Jbv[>&sR)u(@EQ=edH:.ky^Cp,lg6ZfNG!S?M"09X7$}4~x%2+;`h', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[0]].length, BB[-xB[326]] = [], BB[xB[16]] = xB[1], BB[-xB[352]] = xB[1], BB[ … [truncated]
-                 if (BB[xB[27]] = BB[xB[2]].indexOf(BB[xB[0]][BB[xB[3]]]), BB[xB[27]] !== -xB[2])
-                   if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[xB[27]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'PVNFOZup7~jLkf`v8@oX;|*>y)#=0%<2+^,:5$"}[6z]1/9rnQGswY!3xmgC.ED4KI&t_(?RlqBAThcaeWiJHUMSbd{', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[-bB[212]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[30]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+                 if (BB[-bB[213]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[247]]]), BB[-bB[213]] !== -bB[2])
+                   if (BB[bB[257]] < bB[1]) BB[bB[257]] = BB[-bB[213]];
```

#### 1909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14935` → after: `L13856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13856) · [Before (L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14935)

```diff
-                     Uj(BB[xB[7]] += BB[xB[27]] * xB[29], BB[xB[16]] |= BB[xB[7]] << BB[-xB[352]], BB[-xB[352]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[bB[257]] += BB[-bB[213]] * bB[35], BB[bB[30]] |= BB[bB[257]] << BB[bB[20]], BB[bB[20]] += (BB[bB[257]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14937-L14940` → after: `L13858-L13861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13858-L13861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13858-L13861) · [Before (L14937-L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14937-L14940)

```diff
-                       Uj(BB[-xB[326]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[-xB[352]] -= xB[3])
-                     } while (BB[-xB[352]] > xB[7]);
-                     BB[xB[7]] = -xB[2]
-                   } return BB[xB[7]] > -xB[2] && BB[-xB[326]].push((BB[xB[16]] | BB[xB[7]] << BB[-xB[352]]) & xB[11]), CB(BB[-xB[326]])
+                       cI(BB[bB[10]].push(BB[bB[30]] & bB[12]), BB[bB[30]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[257]] = -bB[2]
+                   } return BB[bB[257]] > -bB[2] && BB[bB[10]].push((BB[bB[30]] | BB[bB[257]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14944` → after: `L13865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13865) · [Before (L14944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14944)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Az(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = KZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14946-L14947` → after: `L13867-L13868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13867-L13868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13867-L13868) · [Before (L14946-L14947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14946-L14947)

```diff
-             Nj(BB[xB[1]], qB[xB[92]][Tz(457) + Tz(458) + xB[353]], [xB[1], BB[xB[38]][Tz(459) + xB[92]][xB[2]], xB[1]])
-           } else uj(BB[xB[1]], LB[xB[2]], [xB[1], BB[xB[38]][hz(460) + xB[92]][xB[2]], xB[1]])
+             vI(BB[bB[1]], iB[bB[20]][bZ(431) + VZ(432) + bB[282]], [bB[1], BB[bB[52]][VZ(433) + bB[34]][bB[2]], bB[1]])
+           } else kI(BB[bB[1]], WB[bB[2]], [bB[1], BB[bB[52]][bZ(434) + bB[34]][bB[2]], bB[1]])
```

#### 1913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14953` → after: `L13874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13874) · [Before (L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14953)

```diff
-               var uB = 'z2S>JOKecgp3&wHXa%=+C"8#nlo$Vv0(.u@;hU~1B/F5^jdNE}TbkM!GP*WYf4:qy`ZD9iR?r]AQIL<x|[m7t)6{_s,'.indexOf(jB[NB]);
+               var kB = '!xw4<~qG_[5L>%WXjlAg}Mn|6B&"cJF`Zb?ao(O],#P7*sNyHYe^2C0:=Uh$vkEIQ{VtDr.8udz3m)1KT+i;@fRp9/S'.indexOf(IB[vB]);
```

#### 1914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14957` → after: `L13878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13878) · [Before (L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14957)

```diff
-                   Uj(IB += uB * xB[29], nB |= IB << dB, dB += (IB & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14959-L14960` → after: `L13880-L13881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13880-L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13880-L13881) · [Before (L14959-L14960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14959-L14960)

```diff
-                     Uj(QB.push(nB & xB[11]), nB >>= xB[3], dB -= xB[3])
-                   } while (dB > xB[7]);
+                     cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                   } while (oB > bB[26]);
```

#### 1916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14964` → after: `L13885-L13898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13885-L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13885-L13898) · [Before (L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14964)

```diff
-             return IB > -xB[2] && QB.push((nB | IB << dB) & xB[11]), CB(QB)
+             return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
+           }
+ 
+           function BT(...BB) {
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = SZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+           }
+           const IT = BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(bB[237])][bB[0]] <= bB[1] ? bB[2] : -bB[2],
+             ZT = Math[IB(bB[319])](eZ, Math[IB(bB[243])](BB[bB[0]][BT(436) + BT(437) + BT(438)][bB[0]]));
+           cI(BB[bB[52]][bB[221]][bB[0]] = IT * ZT * (WB[bB[0]] ? bB[2] : fB), kI(BB[bB[1]], WB[bB[0]], [bB[1], bB[1], BB[bB[52]][BT(439) + bB[34]][bB[0]]]))
+         }
+       } else if (II) {
+         function TT(...BB) {
+           function IB(...BB) {
+             return BB[bB[13]] = bB[2], BB[bB[1]][bB[2]] * bB[259] + (BB[bB[1]][bB[1]] < bB[1] ? bB[258] | BB[bB[1]][bB[1]] : BB[bB[1]][bB[1]])
```

#### 1917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14968` → after: `L13902-L13911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13902-L13911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13902-L13911) · [Before (L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14968)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Pz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             switch (BB[bB[13]] = bB[2], ((BB[bB[1]] & bB[258]) !== bB[1]) * bB[2] + (BB[bB[1]] < bB[1]) * bB[0]) {
+               case bB[1]:
+                 return [BB[bB[1]] % bB[258], Math.trunc(BB[bB[1]] / bB[259])];
+               case bB[2]:
+                 return [BB[bB[1]] % bB[258] - bB[258], Math.trunc(BB[bB[1]] / bB[259]) + bB[2]];
+               case bB[0]:
+                 return [((BB[bB[1]] + bB[258]) % bB[258] + bB[258]) % bB[258], Math.round(BB[bB[1]] / bB[259])];
+               case bB[30]:
+                 return [BB[bB[1]] % bB[258], Math.trunc(BB[bB[1]] / bB[259])]
+             }
```

#### 1918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14970-L14972` → after: `L13913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13913) · [Before (L14970-L14972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14970-L14972)

```diff
-           const ez = BB[xB[0]][Wz(xB[354]) + Wz(xB[355]) + Wz(xB[356])][xB[0]] <= xB[1] ? xB[2] : -xB[2],
-             lz = Math[Wz(464)](oz, Math[Wz(465)](BB[xB[0]][Wz(xB[354]) + Wz(xB[355]) + Wz(xB[356])][xB[0]]));
-           Uj(BB[xB[38]][xB[317]][xB[0]] = ez * lz * (LB[xB[0]] ? xB[2] : eB), uj(BB[xB[1]], LB[xB[0]], [xB[1], xB[1], BB[xB[38]][Wz(466) + xB[92]][xB[0]]]))
+           BB[bB[13]] = bB[1], cI(BB[-bB[260]] = IB([bB[0], bB[52]]), BB[-bB[261]] = IB([bB[2], bB[0]]), BB[bB[218]] = BB[-bB[260]] + BB[-bB[261]], BB[bB[31]] = BB[bB[218]] - BB[-bB[261]], BB[bB[262]] = BB[bB[31]] * bB[0], BB[bB[263]] = BB[bB[262]] / bB[0], console.log(ZB(BB[bB[21 … [truncated]
```

#### 1919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14974-L14975` → after: `L13915-L13917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13915-L13917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13915-L13917) · [Before (L14974-L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14974-L14975)

```diff
-       } else jj && (BB[xB[0]][jB(467)] = xB[76]);
-       if (Uj(Ij(BB[xB[1]], BB[xB[2]], UB[jB(468)], BB[xB[38]][jB(xB[344]) + xB[92]][xB[2]], BB[xB[0]][jB(xB[341]) + jB(xB[342]) + jB(xB[343])][xB[2]]), BB[xB[16]] = xB[1]), BB[xB[38]][jB(xB[344]) + xB[92]][xB[1]] !== xB[1] && (BB[xB[16]] = BB[xB[0]][jB(xB[341]) + jB(xB[342]) + jB … [truncated]
+         IB(440) + "1" in DB && TT(), BB[bB[0]][IB(441)] = bB[183]
+       }
+       if (cI(GI(BB[bB[1]], BB[bB[2]], cB[IB(442)], BB[bB[52]][IB(bB[239]) + bB[34]][bB[2]], BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(bB[237])][bB[2]]), BB[-bB[5]] = bB[1]), BB[bB[52]][IB(bB[239]) + bB[34]][bB[1]] !== bB[1] && (BB[-bB[5]] = BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(b … [truncated]
```

#### 1920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14977-L14979` → after: `L13919-L13921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13919-L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13919-L13921) · [Before (L14977-L14979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14977-L14979)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = '}HPjhWAJnMB$6CI^DoGU8)12X~ROQ`wy#caY7k3<5pv0:{/Z,lqEidN+=esz!@;]F*x(u"4S.9&Tm|K_fLgtr%>Vb?[', BB[xB[357]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[357]].length, BB[xB[14]] = [], BB[-xB[124]] = xB[1], BB[xB[327]] = xB[1], BB[x … [truncated]
-             if (BB[-xB[358]] = BB[xB[2]].indexOf(BB[xB[357]][BB[xB[3]]]), BB[-xB[358]] !== -xB[2])
-               if (BB[xB[163]] < xB[1]) BB[xB[163]] = BB[-xB[358]];
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[98]] = 'cTQuGm}*PFj~[Xo4yONbl(|2Ud"7H+/MAtIVk$fD1nWC:)<J8K#>aY`xS!wBzERqih{;L@vZ=9e,p6sg30^&]?%5_r.', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[bB[141]] = [], BB[bB[29]] = bB[1], BB[bB[24]] = bB[1], BB[bB[34 … [truncated]
+             if (BB[-bB[129]] = BB[-bB[98]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[-bB[129]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[129]];
```

#### 1921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14981` → after: `L13923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13923) · [Before (L14981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14981)

```diff
-                 Uj(BB[xB[163]] += BB[-xB[358]] * xB[29], BB[-xB[124]] |= BB[xB[163]] << BB[xB[327]], BB[xB[327]] += (BB[xB[163]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[34]] += BB[-bB[129]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14983-L14986` → after: `L13925-L13928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13925-L13928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13925-L13928) · [Before (L14983-L14986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14983-L14986)

```diff
-                   Uj(BB[xB[14]].push(BB[-xB[124]] & xB[11]), BB[-xB[124]] >>= xB[3], BB[xB[327]] -= xB[3])
-                 } while (BB[xB[327]] > xB[7]);
-                 BB[xB[163]] = -xB[2]
-               } return BB[xB[163]] > -xB[2] && BB[xB[14]].push((BB[-xB[124]] | BB[xB[163]] << BB[xB[327]]) & xB[11]), CB(BB[xB[14]])
+                   cI(BB[bB[141]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[141]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[24]]) & bB[12]), EB(BB[bB[141]])
```

#### 1923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14990` → after: `L13932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13932) · [Before (L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14990)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = wz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = JT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14992` → after: `L13934-L13943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13934-L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13934-L13943) · [Before (L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14992)

```diff
-         BB[xB[16]] = BB[xB[0]][xz(469) + xz(470) + xz(471)][xB[0]]
+         IB(444) in DB && (module.exports = async (BB = () => {
+           throw new Error(IB(445))
+         }) => {
+           const ZB = new Set(process.argv.slice(bB[0]));
+           if (!ZB.has(IB(446))) {
+             if (ZB.size !== bB[2]) return bB[179];
+             if (!ZB.has("-v")) return bB[179]
+           }
+           return await (async () => void 0 === await BB() ? IB(449) + "l)" : "")(), bB[183]
+         }), vI(BB[bB[1]], iB[bB[20]][oT(450) + "op"], [bB[1], -bB[2], bB[1]])
```

#### 1925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14994` → after: `L13945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13945) · [Before (L14994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14994)

```diff
-       if (Ij(BB[xB[1]], BB[xB[2]], UB[jB(472)], BB[xB[38]][jB(xB[344]) + xB[92]][xB[1]] || BB[xB[38]][jB(xB[344]) + xB[92]][xB[0]], BB[xB[16]]), BB[-xB[35]] && !BB[-xB[336]] && Nj(BB[xB[1]], qB[xB[92]][jB(473) + "op"], [xB[1], -xB[2], xB[1]]), BB[xB[0]][jB(474)] = MB, YB > xB[1]  … [truncated]
+       if (BB[bB[0]][IB(451)] = sB, wB > bB[1] && BB[bB[52]][bB[221]][bB[2]] < wB ? cI(BB[bB[52]][bB[221]][bB[2]] = wB, BB[bB[52]][bB[264]](), vI(BB[bB[1]], iB[bB[20]][IB(bB[268]) + bB[10]], [bB[1], -bB[2], bB[1]])) : II && !BB[bB[0]][IB(bB[265]) + IB(bB[266]) + IB(bB[267])] && sB … [truncated]
```

#### 1926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14997-L14999` → after: `L13948-L13950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13948-L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13948-L13950) · [Before (L14997-L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L14997-L14999)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = '1?;^}4qz`6[/YK{&y35HI#S|PAhBgsr0!J7DZ2ljx,REN@kan%e>mC~$*F]t.QMw:v=<iUb_8VL"G+doO9p)(uXTfWc', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[65]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[xB[9]] = xB[1], BB[xB[7] … [truncated]
-               if (BB[xB[364]] = BB[xB[2]].indexOf(BB[xB[65]][BB[xB[266]]]), BB[xB[364]] !== -xB[2])
-                 if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[xB[364]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[269]] = 'woFrBkZ}YA)!D]KUg:zI^{>C&*5bmj(/;84VH=Pid9X6a@c.s|yN_2,QJStn[7vTxqL%uGpE~MO3<?"fh`+WelR#01$', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[270]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[272]] = bB[1], BB[bB … [truncated]
+               if (BB[bB[6]] = BB[bB[269]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[271]] < bB[1]) BB[bB[271]] = BB[bB[6]];
```

#### 1927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15001` → after: `L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13952) · [Before (L15001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15001)

```diff
-                   Uj(BB[xB[7]] += BB[xB[364]] * xB[29], BB[xB[16]] |= BB[xB[7]] << BB[xB[9]], BB[xB[9]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[bB[271]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[271]] << BB[bB[272]], BB[bB[272]] += (BB[bB[271]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15003-L15006` → after: `L13954-L13957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13954-L13957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13954-L13957) · [Before (L15003-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15003-L15006)

```diff
-                     Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[9]] -= xB[3])
-                   } while (BB[xB[9]] > xB[7]);
-                   BB[xB[7]] = -xB[2]
-                 } return BB[xB[7]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[xB[7]] << BB[xB[9]]) & xB[11]), CB(BB[xB[14]])
+                     cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[272]] -= bB[11])
+                   } while (BB[bB[272]] > bB[26]);
+                   BB[bB[271]] = -bB[2]
+                 } return BB[bB[271]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[bB[271]] << BB[bB[272]]) & bB[12]), EB(BB[bB[10]])
```

#### 1929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15010` → after: `L13961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13961) · [Before (L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15010)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Kz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = GT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15012` → after: `L13963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13963) · [Before (L15012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15012)

```diff
-           if (BB[xB[38]][xB[317]][xB[2]] <= xB[1]) {
+           if (BB[bB[52]][bB[221]][bB[2]] <= bB[1]) {
```

#### 1931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15014-L15016` → after: `L13965-L13967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13965-L13967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13965-L13967) · [Before (L15014-L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15014-L15016)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'fS:A&1ZB{tOLajeJC=w5>(|;9?,"_+zyu2)6.<HrMV[pEDn/U]FQ!0%7vK~@ld#oR*ix^}$34I`mXGkTPhYgscWNbq8', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[-xB[67]] = BB[xB[0]].length, BB[-xB[4]] = [], BB[xB[39]] = xB[1], BB[xB[9]] = xB[1], BB[xB[9 … [truncated]
-                 if (BB[xB[27]] = BB[xB[2]].indexOf(BB[xB[0]][BB[xB[61]]]), BB[xB[27]] !== -xB[2])
-                   if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[27]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '9is8YWF@g#jOd|<6o$ukQ]ACftNx&R1m2l~ZV`BJGrH3bP_5Epcv7yTawqL0S)!hDK4e{"U,z>}nI:M+X(%[=;/*^.?', BB[bB[96]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[96]].length, BB[bB[10]] = [], BB[-bB[185]] = bB[1], BB[bB[20]] = bB[1], BB … [truncated]
+                 if (BB[-bB[83]] = BB[bB[22]].indexOf(BB[bB[96]][BB[-bB[53]]]), BB[-bB[83]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[83]];
```

#### 1932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15018` → after: `L13969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13969) · [Before (L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15018)

```diff
-                     Uj(BB[xB[92]] += BB[xB[27]] * xB[29], BB[xB[39]] |= BB[xB[92]] << BB[xB[9]], BB[xB[9]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[bB[34]] += BB[-bB[83]] * bB[35], BB[-bB[185]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15020-L15023` → after: `L13971-L13974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13971-L13974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13971-L13974) · [Before (L15020-L15023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15020-L15023)

```diff
-                       Uj(BB[-xB[4]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[9]] -= xB[3])
-                     } while (BB[xB[9]] > xB[7]);
-                     BB[xB[92]] = -xB[2]
-                   } return BB[xB[92]] > -xB[2] && BB[-xB[4]].push((BB[xB[39]] | BB[xB[92]] << BB[xB[9]]) & xB[11]), CB(BB[-xB[4]])
+                       cI(BB[bB[10]].push(BB[-bB[185]] & bB[12]), BB[-bB[185]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[-bB[185]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15027` → after: `L13978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13978) · [Before (L15027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15027)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = vz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = nT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15029` → after: `L13980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13980) · [Before (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15029)

```diff
-             BB[xB[0]][Rz(xB[365]) + Rz(xB[366]) + Rz(xB[367]) + xB[368]] && (BB[xB[0]][Rz(479)] = xB[1]), BB[xB[0]][Rz(xB[365]) + Rz(xB[366]) + Rz(xB[367]) + xB[368]] = xB[68]
+             BB[bB[0]][hT(bB[273]) + hT(bB[274]) + hT(bB[275]) + bB[276]] && (BB[bB[0]][hT(456)] = bB[1]), BB[bB[0]][hT(bB[273]) + hT(bB[274]) + hT(bB[275]) + bB[276]] = bB[179]
```

#### 1936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15032-L15034` → after: `L13983-L13985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13983-L13985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13983-L13985) · [Before (L15032-L15034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15032-L15034)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'TiyN0AF5v+mj2wh;@7qSHzG1ncEI[elk({)Y8:sZ_WuB*OC,g^Mf=pL?o4>Pr]VRxdb#%D."a/tQJ}!X<&U9~36`$K|', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[65]].length, BB[xB[38]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[xB … [truncated]
-                 if (BB[xB[45]] = BB[xB[2]].indexOf(BB[xB[65]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-                   if (BB[xB[119]] < xB[1]) BB[xB[119]] = BB[xB[45]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '_HXQvZ>GL/W9g0(${ABOuo,tIE`+!2[)^7n1Ns~?Ujwipek"Mya|rcmPD8T<fR:.]xb=zqY4FJ&#}3VlhK*S5C%6;d@', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[20]] = bB[1], BB[bB[3 … [truncated]
+                 if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15036` → after: `L13987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13987) · [Before (L15036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15036)

```diff
-                     Uj(BB[xB[119]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[xB[119]] << BB[xB[30]], BB[xB[30]] += (BB[xB[119]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15038-L15041` → after: `L13989-L13992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13989-L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13989-L13992) · [Before (L15038-L15041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15038-L15041)

```diff
-                       Uj(BB[xB[38]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                     } while (BB[xB[30]] > xB[7]);
-                     BB[xB[119]] = -xB[2]
-                   } return BB[xB[119]] > -xB[2] && BB[xB[38]].push((BB[xB[16]] | BB[xB[119]] << BB[xB[30]]) & xB[11]), CB(BB[xB[38]])
+                       cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15045` → after: `L13996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13996) · [Before (L15045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15045)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = Oz(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = zT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15047` → after: `L13998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13998) · [Before (L15047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15047)

```diff
-             BB[xB[0]][BQ(xB[369]) + BQ(xB[370]) + BQ(xB[371]) + xB[368]] || (BB[xB[0]][BQ(483)] = xB[1]), BB[xB[0]][BQ(xB[369]) + BQ(xB[370]) + BQ(xB[371]) + xB[368]] = xB[76]
+             BB[bB[0]][IB(bB[277]) + IB(bB[278]) + IB(459) + bB[276]] || (BB[bB[0]][IB(bB[295])] = bB[1]), BB[bB[0]][IB(bB[277]) + IB(bB[278]) + FT(461) + bB[276]] = bB[183]
```

#### 1941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15049-L15051` → after: `L14000-L14002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14000-L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14000-L14002) · [Before (L15049-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15049-L15051)

```diff
-           const cz = Math[jB(xB[418])](BB[xB[0]][jB(485)], BB[xB[0]][jB(xB[389]) + Cz(xB[372]) + Cz(xB[373])]) / BB[xB[0]][Cz(xB[374]) + Cz(xB[372]) + Cz(xB[373])],
-             bz = BB[xB[0]][Cz(xB[374]) + Cz(xB[375]) + xB[353]] + cz * (BB[xB[0]][Cz(xB[374]) + Cz(491) + xB[353]] - BB[xB[0]][Cz(xB[374]) + Cz(xB[375]) + xB[353]]);
-           if (BB[xB[38]][xB[317]][xB[2]] <= xB[1] && BB[xB[24]][Cz(492) + Cz(493)]) BB[xB[38]][Cz(xB[379]) + Cz(495) + Cz(496)] = xB[1];
+           const kT = Math[vT(462)](BB[bB[0]][vT(bB[291])], BB[bB[0]][vT(bB[279]) + vT(bB[280]) + vT(bB[281])]) / BB[bB[0]][vT(bB[279]) + vT(bB[280]) + vT(bB[281])],
+             cT = BB[bB[0]][vT(bB[279]) + vT(bB[283]) + bB[282]] + kT * (BB[bB[0]][vT(bB[279]) + vT(468) + bB[282]] - BB[bB[0]][vT(bB[279]) + vT(bB[283]) + bB[282]]);
+           if (BB[bB[52]][bB[221]][bB[2]] <= bB[1] && BB[bB[30]][vT(469) + vT(470)]) BB[bB[52]][vT(bB[284]) + vT(472) + vT(473)] = bB[1];
```

#### 1942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15054-L15056` → after: `L14005-L14007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14005-L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14005-L14007) · [Before (L15054-L15056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15054-L15056)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[-xB[150]] = '5TNYXneGcUpPhJbsBiQK+If~*k)!/#|@gu[Z}A$tS>vdm:`aLy73Fjz"R,=_D42%w.18W;MxH0ECol(]rq?V&69<^{O', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[65]].length, BB[xB[14]] = [], BB[-xB[376]] = xB[1], BB[xB[377]] = xB[1], … [truncated]
-                 if (BB[xB[45]] = BB[-xB[150]].indexOf(BB[xB[65]][BB[xB[61]]]), BB[xB[45]] !== -xB[2])
-                   if (BB[-xB[378]] < xB[1]) BB[-xB[378]] = BB[xB[45]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'lDOxCzU@MRWXyP>S`n*28(0[%F:p"}k?9B5ac#{TqQNg)d/|4Vu6&;ov~<Ast7iYL1w,3Z_b^KrE.$!fG=+HmJejhI]', BB[-bB[39]] = "" + (BB[bB[1]] || ""), BB[bB[49]] = BB[-bB[39]].length, BB[bB[10]] = [], BB[bB[128]] = bB[1], BB[bB[235]] = bB[1], B … [truncated]
+                 if (BB[-bB[76]] = BB[bB[2]].indexOf(BB[-bB[39]][BB[bB[31]]]), BB[-bB[76]] !== -bB[2])
+                   if (BB[-bB[180]] < bB[1]) BB[-bB[180]] = BB[-bB[76]];
```

#### 1943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15058` → after: `L14009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14009) · [Before (L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15058)

```diff
-                     Uj(BB[-xB[378]] += BB[xB[45]] * xB[29], BB[-xB[376]] |= BB[-xB[378]] << BB[xB[377]], BB[xB[377]] += (BB[-xB[378]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[-bB[180]] += BB[-bB[76]] * bB[35], BB[bB[128]] |= BB[-bB[180]] << BB[bB[235]], BB[bB[235]] += (BB[-bB[180]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15060-L15063` → after: `L14011-L14014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14011-L14014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14011-L14014) · [Before (L15060-L15063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15060-L15063)

```diff
-                       Uj(BB[xB[14]].push(BB[-xB[376]] & xB[11]), BB[-xB[376]] >>= xB[3], BB[xB[377]] -= xB[3])
-                     } while (BB[xB[377]] > xB[7]);
-                     BB[-xB[378]] = -xB[2]
-                   } return BB[-xB[378]] > -xB[2] && BB[xB[14]].push((BB[-xB[376]] | BB[-xB[378]] << BB[xB[377]]) & xB[11]), CB(BB[xB[14]])
+                       cI(BB[bB[10]].push(BB[bB[128]] & bB[12]), BB[bB[128]] >>= bB[11], BB[bB[235]] -= bB[11])
+                     } while (BB[bB[235]] > bB[26]);
+                     BB[-bB[180]] = -bB[2]
+                   } return BB[-bB[180]] > -bB[2] && BB[bB[10]].push((BB[bB[128]] | BB[-bB[180]] << BB[bB[235]]) & bB[12]), EB(BB[bB[10]])
```

#### 1945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15067` → after: `L14018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14018) · [Before (L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15067)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = jQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = NT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15069` → after: `L14020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14020) · [Before (L15069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15069)

```diff
-             BB[xB[38]][Cz(xB[379]) + zQ(497) + zQ(498)] = bz / xB[132]
+             BB[bB[52]][vT(bB[284]) + gT(474) + gT(475)] = cT / bB[185]
```

#### 1947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15071` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14022) · [Before (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15071)

```diff
-           if (Uj(BB[xB[24]][Cz(499)][Cz(500) + Cz(501) + Cz(502)](Cz(xB[374]), .7), BB[xB[38]][Cz(503) + xB[390]] = .25, BB[xB[38]][xB[317]][xB[2]] = xB[1]), mB) {
+           if (cI(BB[bB[30]][vT(476)][vT(477) + vT(478) + vT(479)](vT(bB[279]), .7), BB[bB[52]][vT(480) + bB[294]] = .25, BB[bB[52]][bB[221]][bB[2]] = bB[1]), gB) {
```

#### 1948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15073-L15075` → after: `L14024-L14026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14024-L14026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14024-L14026) · [Before (L15073-L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15073-L15075)

```diff
-               for (Uj(BB[xB[12]] = xB[2], BB[-xB[380]] = '8RZqWoTFVXEHJ?axz4,}+s`|w]DQSf(>2ePC1vkc#hOp9y_;n:/~N7)B$dj6riU3.t^ug"=LY[&AG<%lm@K*50Ib{!M', BB[xB[381]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[381]].length, BB[xB[14]] = [], BB[xB[16]] = xB[1], BB[xB[9]] = xB[1], B … [truncated]
-                 if (BB[xB[27]] = BB[-xB[380]].indexOf(BB[xB[381]][BB[xB[61]]]), BB[xB[27]] !== -xB[2])
-                   if (BB[xB[350]] < xB[1]) BB[xB[350]] = BB[xB[27]];
+               for (cI(BB[bB[13]] = bB[2], BB[-bB[285]] = 'c8`6pUD"C)^$k!Q*K+[3ew,;/1#x=2JfZVI{9(Gl7b4s]WE:r~&0Fq%ji?}vyuHS_mL<>Y5@hTz.|nBXtaPRgAdNMoO', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[52]] = [], BB[bB[8]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+                 if (BB[bB[6]] = BB[-bB[285]].indexOf(BB[bB[0]][BB[bB[286]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
```

#### 1949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15077` → after: `L14028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14028) · [Before (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15077)

```diff
-                     Uj(BB[xB[350]] += BB[xB[27]] * xB[29], BB[xB[16]] |= BB[xB[350]] << BB[xB[9]], BB[xB[9]] += (BB[xB[350]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                     cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15079-L15082` → after: `L14030-L14033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14030-L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14030-L14033) · [Before (L15079-L15082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15079-L15082)

```diff
-                       Uj(BB[xB[14]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[9]] -= xB[3])
-                     } while (BB[xB[9]] > xB[7]);
-                     BB[xB[350]] = -xB[2]
-                   } return BB[xB[350]] > -xB[2] && BB[xB[14]].push((BB[xB[16]] | BB[xB[350]] << BB[xB[9]]) & xB[11]), CB(BB[xB[14]])
+                       cI(BB[bB[52]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[26]] = -bB[2]
+                   } return BB[bB[26]] > -bB[2] && BB[bB[52]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[52]])
```

#### 1951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15086-L15126` → after: `L14037-L14043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14037-L14043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14037-L14043) · [Before (L15086-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15086-L15126)

```diff
-               return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = QQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-             }
-             for (let dQ = xB[1]; dQ < FB[nQ(504)]; dQ++) {
-               const IQ = FB[dQ];
-               if (yB[IQ]) {
-                 function NQ(...BB) {
-                   for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'Nq>&YJ`1A<!D[C#5oIun+fWke4v)p(b_KT?6L|g~Q*rd0;3i]:hl"w82BcHM$OE@./}9PZG=Fs7SRXtUyaj%mzx,{^V', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[-xB[118]] = BB[xB[65]].length, BB[xB[38]] = [], BB[xB[85]] = xB[1], BB[-xB[290]] = xB[1 … [truncated]
-                     if (BB[xB[157]] = BB[xB[2]].indexOf(BB[xB[65]][BB[xB[111]]]), BB[xB[157]] !== -xB[2])
-                       if (BB[-xB[116]] < xB[1]) BB[-xB[116]] = BB[xB[157]];
-                       else {
-                         Uj(BB[-xB[116]] += BB[xB[157]] * xB[29], BB[xB[85]] |= BB[-xB[116]] << BB[-xB[290]], BB[-xB[290]] += (BB[-xB[116]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                         do {
-                           Uj(BB[xB[38]].push(BB[xB[85]] & xB[11]), BB[xB[85]] >>= xB[3], BB[-xB[290]] -= xB[3])
-                         } while (BB[-xB[290]] > xB[7]);
-                         BB[-xB[116]] = -xB[2]
-                       } return BB[-xB[116]] > -xB[2] && BB[xB[38]].push((BB[xB[85]] | BB[-xB[116]] << BB[-xB[290]]) & xB[11]), CB(BB[xB[38]])
- ... (25 more removed lines; see GitHub link above)
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = qT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             }
+             for (let UT = bB[1]; UT < jB[yT(481)]; UT++) {
+               const WT = jB[UT];
+               if (qB[WT]) {
+                 const dT = qB[WT];
+                 cI(vB()[yT(482)](MB, bB[1], cT * pB[bB[10]][dT], bB[1]), BB[bB[52]][yT(483) + yT(484)](MB)), BB[bB[30]][yT(485) + bB[34]] && BB[bB[0]][yT(486)] && cI(BB[bB[0]][yT(487)] = bB[1], BB[bB[0]][yT(bB[287]) + yT(bB[288]) + yT(490)] = WT, BB[bB[0]][yT(bB[287]) + yT(bB[288 … [truncated]
```

#### 1952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15129-L15130` → after: `L14046-L14063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14046-L14063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14046-L14063) · [Before (L15129-L15130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15129-L15130)

```diff
-           } else if (RB)
-             for (let rQ = xB[1]; rQ < FB[Cz(518)]; rQ++) {
+           } else if (VB) {
+             function CT(...BB) {
+               for (cI(BB[bB[13]] = bB[2], BB[-bB[208]] = 'z[0*$yx3)9AaB+1]FMts|CETH#w=V,:LQ^GYk6J<N?vm}p_b8WDiu>(Xqo`!;Icdfh@&rR4K5Z.Se/27lUg~"nO%j{P', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[-bB[58]] = [], BB[bB[8]] = bB[1], BB[bB[228]] = bB[1], BB[ … [truncated]
+                 if (BB[bB[6]] = BB[-bB[208]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
+                   else {
+                     cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[228]], BB[bB[228]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                     do {
+                       cI(BB[-bB[58]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[228]] -= bB[11])
+                     } while (BB[bB[228]] > bB[26]);
+                     BB[bB[26]] = -bB[2]
+                   } return BB[bB[26]] > -bB[2] && BB[-bB[58]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[228]]) & bB[12]), EB(BB[-bB[58]])
+             }
+ 
+             function QT(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = CT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+ ... (2 more added lines; see GitHub link above)
```

#### 1953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15132-L15147` → after: `L14065-L14079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14065-L14079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14065-L14079) · [Before (L15132-L15147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15132-L15147)

```diff
-               gB[sQ] && BB[xB[38]][Cz(519) + xB[92]][sQ] !== xB[1] && Uj(NB()[Cz(xB[383])](DB, xB[1], 1.05 * bz, xB[1]), BB[xB[38]][Cz(xB[384]) + Cz(xB[385])](DB))
-             } else BB[xB[24]][Cz(xB[386]) + xB[92]] && Uj(NB()[Cz(xB[383])](DB, xB[1], bz * fB[xB[14]][GB], xB[1]), BB[xB[38]][Cz(xB[384]) + Cz(xB[385])](DB));
-           BB[xB[24]][Cz(xB[386]) + xB[92]] || (BB[xB[0]][Cz(524)] = xB[76]), BB[xB[0]][Cz(525)]++
-         } else {
-           function JQ(...BB) {
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'DNFPdYEUgMHnisoCKZhBWVLr6(5QbkG`f"I&_J9{p2zwca=TA?R)3m/]O:SXle1j$q[;+v4*|<7~x#},0yu.^@>%8t!', BB[-xB[387]] = "" + (BB[xB[1]] || ""), BB[-xB[388]] = BB[-xB[387]].length, BB[xB[38]] = [], BB[xB[39]] = xB[1], BB[xB[30]] = xB[1], B … [truncated]
-               if (BB[xB[296]] = BB[xB[2]].indexOf(BB[-xB[387]][BB[xB[3]]]), BB[xB[296]] !== -xB[2])
-                 if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[296]];
-                 else {
-                   Uj(BB[xB[92]] += BB[xB[296]] * xB[29], BB[xB[39]] |= BB[xB[92]] << BB[xB[30]], BB[xB[30]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                   do {
-                     Uj(BB[xB[38]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[30]] -= xB[3])
-                   } while (BB[xB[30]] > xB[7]);
-                   BB[xB[92]] = -xB[2]
-                 } return BB[xB[92]] > -xB[2] && BB[xB[38]].push((BB[xB[39]] | BB[xB[92]] << BB[xB[30]]) & xB[11]), CB(BB[xB[38]])
-           }
+               dB[wT] && BB[bB[52]][QT(495) + bB[34]][wT] !== bB[1] && cI(vB()[QT(496)](MB, bB[1], 1.05 * cT, bB[1]), BB[bB[52]][QT(497) + QT(498)](MB))
+             }
+           } else if (BB[bB[30]][vT(bB[290]) + bB[34]]) {
+             function OT(...BB) {
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'PyDRBx6TOe/8X@zl]|?3$9[LCrWjqhUofEHswm,pn#!`vMkI01t=S.%7_+Z;dQu4:*)Vg<i~2J{(^>&}5A"caYKFbNG', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[223]] = BB[bB[14]].length, BB[-bB[286]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB[ … [truncated]
+                 if (BB[-bB[129]] = BB[bB[2]].indexOf(BB[bB[14]][BB[-bB[108]]]), BB[-bB[129]] !== -bB[2])
+                   if (BB[bB[289]] < bB[1]) BB[bB[289]] = BB[-bB[129]];
+                   else {
+                     cI(BB[bB[289]] += BB[-bB[129]] * bB[35], BB[bB[8]] |= BB[bB[289]] << BB[bB[24]], BB[bB[24]] += (BB[bB[289]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                     do {
+                       cI(BB[-bB[286]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                     } while (BB[bB[24]] > bB[26]);
+                     BB[bB[289]] = -bB[2]
+                   } return BB[bB[289]] > -bB[2] && BB[-bB[286]].push((BB[bB[8]] | BB[bB[289]] << BB[bB[24]]) & bB[12]), EB(BB[-bB[286]])
+             }
```

#### 1954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15149-L15150` → after: `L14081-L14084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14081-L14084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14081-L14084) · [Before (L15149-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15149-L15150)

```diff
-           function mQ(...BB) {
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = JQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             function YT(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = OT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             }
+             cI(vB()[YT(500)](MB, bB[1], cT * pB[bB[10]][UB], bB[1]), BB[bB[52]][YT(501) + YT(502)](MB))
```

#### 1955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15152-L15154` → after: `L14086-L14088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14086-L14088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14086-L14088) · [Before (L15152-L15154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15152-L15154)

```diff
-           Uj(BB[xB[24]][jB(xB[402])][jB(xB[403]) + jB(xB[404]) + jB(xB[405])](jB(xB[389]), xB[2]), BB[xB[38]][mQ(530) + mQ(531) + mQ(532)] = PB, BB[xB[38]][mQ(533) + xB[390]] = jj ? rj : sj, BB[xB[0]][mQ(534)] = xB[68], BB[xB[0]][mQ(535)] = xB[1])
-         }
-         if (BB[xB[0]][jB(xB[391])] !== -xB[2]) {
+           BB[bB[30]][vT(bB[290]) + bB[34]] || (BB[bB[0]][vT(503)] = bB[183]), BB[bB[0]][vT(bB[291])]++
+         } else cI(BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(506), bB[2]), BB[bB[52]][IB(bB[61]) + IB(bB[152]) + IB(bB[55])] = eB, BB[bB[52]][IB(bB[333]) + bB[294]] = II ? zI : FI, BB[bB[0]][IB(508)] = bB[179], BB[bB[0]][IB(bB[295])] = bB[1]);
+         if (BB[bB[0]][IB(bB[297])] !== -bB[2]) {
```

#### 1956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15156-L15158` → after: `L14090-L14092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14090-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14090-L14092) · [Before (L15156-L15158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15156-L15158)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[-xB[288]] = '*bOnYBChxk"6VLs%`w>UXWdeN?{T}I4A1zi<v|,S]Q_K78/aj.(:ymru3o+$p)9H^PJ!#=RE2&@Mfl0tFZD[~qG;cg5', BB[xB[266]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[266]].length, BB[xB[130]] = [], BB[xB[16]] = xB[1], BB[xB[9]] = xB[1], BB … [truncated]
-               if (BB[xB[45]] = BB[-xB[288]].indexOf(BB[xB[266]][BB[-xB[334]]]), BB[xB[45]] !== -xB[2])
-                 if (BB[xB[80]] < xB[1]) BB[xB[80]] = BB[xB[45]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[296]] = 'jtM2hN;{:1F%OdDa90Crq|zI^_,Qn5Z#gbW!Pcky(x[@wXBHlRf6Gvo.U+E7]TuLJm~AKp/es<$SV}8Y4=*`?)3>"&i', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[240]] = [], BB[-bB[48]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+               if (BB[bB[6]] = BB[bB[296]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
```

#### 1957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15160` → after: `L14094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14094) · [Before (L15160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15160)

```diff
-                   Uj(BB[xB[80]] += BB[xB[45]] * xB[29], BB[xB[16]] |= BB[xB[80]] << BB[xB[9]], BB[xB[9]] += (BB[xB[80]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[-bB[48]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15162-L15165` → after: `L14096-L14099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14096-L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14096-L14099) · [Before (L15162-L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15162-L15165)

```diff
-                     Uj(BB[xB[130]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[9]] -= xB[3])
-                   } while (BB[xB[9]] > xB[7]);
-                   BB[xB[80]] = -xB[2]
-                 } return BB[xB[80]] > -xB[2] && BB[xB[130]].push((BB[xB[16]] | BB[xB[80]] << BB[xB[9]]) & xB[11]), CB(BB[xB[130]])
+                     cI(BB[bB[240]].push(BB[-bB[48]] & bB[12]), BB[-bB[48]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[bB[26]] = -bB[2]
+                 } return BB[bB[26]] > -bB[2] && BB[bB[240]].push((BB[-bB[48]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[240]])
```

#### 1959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15169` → after: `L14103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14103) · [Before (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15169)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = yQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = iT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15171-L15173` → after: `L14105-L14107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14105-L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14105-L14107) · [Before (L15171-L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15171-L15173)

```diff
-           const GQ = BB[xB[0]][jB(xB[391])] / BB[xB[0]][jB(537) + jB(538) + jB(539) + jB(540)],
-             LQ = BB[xB[0]][jB(xB[392]) + jB(xB[393]) + jB(543) + jB(544)] + GQ * (BB[xB[0]][jB(xB[392]) + jB(xB[393]) + kQ(545) + kQ(xB[394])] - BB[xB[0]][kQ(547) + kQ(548) + kQ(549) + kQ(xB[394])]);
-           if (NB()[kQ(550)](DB, xB[1], xB[1], xB[1]), BB[xB[0]][kQ(xB[395])] > xB[1]) {
+           const aT = BB[bB[0]][IB(bB[297])] / BB[bB[0]][pT(bB[298]) + pT(bB[299]) + pT(bB[106]) + pT(513) + pT(514) + "ks"],
+             HT = BB[bB[0]][pT(bB[298]) + pT(bB[299]) + pT(515) + pT(bB[300])] + aT * (BB[bB[0]][pT(bB[298]) + pT(bB[299]) + pT(517) + pT(bB[300])] - BB[bB[0]][pT(518) + pT(519) + pT(520)]);
+           if (vB()[pT(521)](MB, bB[1], bB[1], bB[1]), BB[bB[0]][pT(bB[301])] > bB[1]) {
```

#### 1961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15177-L15178` → after: `L14111-L14112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14111-L14112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14111-L14112) · [Before (L15177-L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15177-L15178)

```diff
-           const gQ = LQ * BB[xB[0]][kQ(552) + kQ(553) + kQ(554)];
-           Uj(DB[BB[xB[0]][kQ(555) + kQ(556) + kQ(557)]] = gQ, BB[xB[38]][kQ(558) + kQ(559)](DB)), ++BB[xB[0]][kQ(xB[395])] > BB[xB[0]][kQ(560) + kQ(561) + kQ(562)] && (BB[xB[0]][kQ(xB[395])] = -xB[2])
+           const MT = HT * BB[bB[0]][pT(523) + pT(524) + pT(525)];
+           cI(MB[BB[bB[0]][pT(526) + pT(527) + pT(528)]] = MT, BB[bB[52]][pT(529) + pT(530)](MB)), ++BB[bB[0]][pT(bB[301])] > BB[bB[0]][pT(531) + pT(532) + pT(533)] && (BB[bB[0]][pT(bB[301])] = -bB[2])
```

#### 1962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15182-L15184` → after: `L14116-L14118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14116-L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14116-L14118) · [Before (L15182-L15184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15182-L15184)

```diff
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'e1#^Bln*NfuRIA,5gGS}jr+WXO`$/U<sC._Yb?V(JPMEv7@Z3z|9~d6h0>K"cqw)L2D&Hk;QoptTxm{i8%=[y]Fa:!4', BB[xB[314]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[xB[314]].length, BB[-xB[377]] = [], BB[-xB[396]] = xB[1], BB[xB[9]] = xB[1], BB … [truncated]
-               if (BB[xB[27]] = BB[xB[5]].indexOf(BB[xB[314]][BB[xB[157]]]), BB[xB[27]] !== -xB[2])
-                 if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[xB[27]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '7DHfPX+$0[5&S@cQKmiWU_Y|?8oVqC>x#vnu"%{9LR4`^MBNy*ws2gGl.};,/IThdk]OaFjzt6=<pEeJ1A3)Zb:(r!~', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[139]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[-bB[257]] = bB[1], BB[bB[3 … [truncated]
+               if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15186` → after: `L14120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14120) · [Before (L15186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15186)

```diff
-                   Uj(BB[xB[92]] += BB[xB[27]] * xB[29], BB[-xB[396]] |= BB[xB[92]] << BB[xB[9]], BB[xB[9]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[34]] << BB[-bB[257]], BB[-bB[257]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15188-L15191` → after: `L14122-L14125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14122-L14125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14122-L14125) · [Before (L15188-L15191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15188-L15191)

```diff
-                     Uj(BB[-xB[377]].push(BB[-xB[396]] & xB[11]), BB[-xB[396]] >>= xB[3], BB[xB[9]] -= xB[3])
-                   } while (BB[xB[9]] > xB[7]);
-                   BB[xB[92]] = -xB[2]
-                 } return BB[xB[92]] > -xB[2] && BB[-xB[377]].push((BB[-xB[396]] | BB[xB[92]] << BB[xB[9]]) & xB[11]), CB(BB[-xB[377]])
+                     cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[-bB[257]] -= bB[11])
+                   } while (BB[-bB[257]] > bB[26]);
+                   BB[bB[34]] = -bB[2]
+                 } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[34]] << BB[-bB[257]]) & bB[12]), EB(BB[bB[10]])
```

#### 1965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15195` → after: `L14129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14129) · [Before (L15195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15195)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = SQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = PT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15197-L15199` → after: `L14131-L14133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14131-L14133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14131-L14133) · [Before (L15197-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15197-L15199)

```diff
-           if (Uj(BB[xB[0]][jB(563)] = xB[1], BB[xB[24]][MQ(564)][MQ(565) + MQ(566) + MQ(567)](MQ(568), .8)), BB[xB[24]][MQ(569) + MQ(570)] && IB === dB[xB[406]][MQ(571) + xB[407]]) {
-             const EQ = nj(BB[xB[38]][xB[317]][xB[2]], xB[39]);
-             Uj(NB()[MQ(xB[397])](DB, xB[1], -EQ, xB[1]), BB[xB[38]][MQ(xB[398]) + MQ(xB[399])](DB))
+           if (cI(BB[bB[0]][IB(534)] = bB[1], BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(535), .8)), BB[bB[30]][IB(bB[348]) + IB(bB[324])] && GB === oB[bB[186]][RT(538) + bB[307]]) {
+             const rT = JI(BB[bB[52]][bB[221]][bB[2]], bB[8]);
+             cI(vB()[RT(bB[304])](MB, bB[1], -rT, bB[1]), BB[bB[52]][RT(bB[305]) + RT(bB[306])](MB))
```

#### 1967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15201-L15203` → after: `L14135-L14137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14135-L14137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14135-L14137) · [Before (L15201-L15203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15201-L15203)

```diff
-           if (BB[xB[24]][MQ(575) + xB[92]]) {
-             const iQ = nj(BB[xB[38]][xB[317]][xB[2]], xB[24]);
-             Uj(NB()[MQ(xB[397])](DB, xB[1], iQ, xB[1]), BB[xB[38]][MQ(xB[398]) + MQ(xB[399])](DB))
+           if (BB[bB[30]][RT(542) + bB[34]]) {
+             const mT = JI(BB[bB[52]][bB[221]][bB[2]], bB[30]);
+             cI(vB()[RT(bB[304])](MB, bB[1], mT, bB[1]), BB[bB[52]][RT(bB[305]) + RT(bB[306])](MB))
```

#### 1968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15206-L15209` → after: `L14140-L14145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14140-L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14140-L14145) · [Before (L15206-L15209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15206-L15209)

```diff
-           function qQ(...BB) {
-             for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'QXPmlz:>Evc.G?6F[eMu#Ra0g!KyV8;(@Zs"5=JIWwN~+HxD&rof$`U*i%3dOb_nA|^/L1<p79}2h{)B]j4,SqTtCkY', BB[xB[65]] = "" + (BB[xB[1]] || ""), BB[xB[135]] = BB[xB[65]].length, BB[-xB[400]] = [], BB[xB[39]] = xB[1], BB[-xB[401]] = xB[1], BB … [truncated]
-               if (BB[xB[27]] = BB[xB[2]].indexOf(BB[xB[65]][BB[xB[3]]]), BB[xB[27]] !== -xB[2])
-                 if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[xB[27]];
+           function XT(BB) {
+             var IB, ZB, TB, JB, oB, GB, vB;
+             for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+               var kB = '&^u`]vbA"O<w:MN,BXxU|ny)Iz07ZT.;~iJ9ro$S[+5Caf1qkDH(c=Vh6@QsELY!glWKFG*}d/2R3_m{jPp4%8e>#t?'.indexOf(IB[vB]);
+               if (kB !== -bB[2])
+                 if (GB < bB[1]) GB = kB;
```

#### 1969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15211` → after: `L14147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14147) · [Before (L15211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15211)

```diff
-                   Uj(BB[xB[7]] += BB[xB[27]] * xB[29], BB[xB[39]] |= BB[xB[7]] << BB[-xB[401]], BB[-xB[401]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                   cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15213-L15216` → after: `L14149-L14154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14149-L14154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14149-L14154) · [Before (L15213-L15216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15213-L15216)

```diff
-                     Uj(BB[-xB[400]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[-xB[401]] -= xB[3])
-                   } while (BB[-xB[401]] > xB[7]);
-                   BB[xB[7]] = -xB[2]
-                 } return BB[xB[7]] > -xB[2] && BB[-xB[400]].push((BB[xB[39]] | BB[xB[7]] << BB[-xB[401]]) & xB[11]), CB(BB[-xB[400]])
+                     cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                   } while (oB > bB[26]);
+                   GB = -bB[2]
+                 }
+             }
+             return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
```

#### 1971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15220` → after: `L14158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14158) · [Before (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15220)

```diff
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = qQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = XT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15222-L15224` → after: `L14160-L14182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14160-L14182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14160-L14182) · [Before (L15222-L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15222-L15224)

```diff
-           if (Uj(BB[xB[24]][jB(xB[402])][jB(xB[403]) + jB(xB[404]) + jB(xB[405])](jB(576), xB[2]), BB[xB[0]][fQ(577)]++), Jj && BB[xB[24]][fQ(578) + xB[92]] && !jj && !mB && !OB && !RB && !SB && IB === dB[xB[406]][fQ(579) + xB[407]]) {
-             const oQ = Math[fQ(580)](xB[2], Math[fQ(581)](xB[1], Jj[fQ(582) + fQ(583)] - BB[xB[38]][xB[317]][xB[2]]));
-             Uj(NB()[fQ(584)](DB, xB[1], Jj[fQ(585)] * oQ, xB[1]), BB[xB[38]][fQ(586) + fQ(587)](DB))
+           if (cI(BB[bB[30]][LT(543)][LT(544) + LT(545) + LT(546)](LT(547), bB[2]), BB[bB[0]][LT(548)]++), NI && BB[bB[30]][LT(549) + bB[34]] && !II && !gB && !SB && !VB && !QB && GB === oB[bB[186]][LT(550) + bB[307]]) {
+             function eT(BB) {
+               var IB, ZB, TB, JB, oB, GB, vB;
+               for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+                 var kB = 'GZqFJes0UMn1(<,3;xkNVWtESrdHQDbgioCBmOYLTAjhIXRPpl*w6Ky+_#]2>v~|^:@z9{4)7=%!"[.`/58$?&u}caf'.indexOf(IB[vB]);
+                 if (kB !== -bB[2])
+                   if (GB < bB[1]) GB = kB;
+                   else {
+                     cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                     do {
+                       cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                     } while (oB > bB[26]);
+                     GB = -bB[2]
+                   }
+               }
+               return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
+ ... (7 more added lines; see GitHub link above)
```

#### 1973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15228` → after: `L14186-L14205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14186-L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14186-L14205) · [Before (L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15228)

```diff
-       if (BB[xB[24]][jB(xB[402])][jB(xB[403]) + jB(xB[404]) + jB(xB[405])](jB(xB[408]) + xB[409], !BB[xB[0]][jB(xB[319]) + xB[92]] && SB ? .07 : xB[2]), SB && !BB[xB[0]][jB(xB[319]) + xB[92]] && !jj) {
+       if (BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(bB[308]) + bB[309], !BB[bB[0]][IB(bB[224]) + bB[34]] && QB ? .07 : bB[2]), !QB || BB[bB[0]][IB(bB[224]) + bB[34]] || II || cI(BB[bB[52]][bB[221]][bB[2]] = bB[1], BB[bB[52]][IB(bB[61]) + IB(bB[152]) + IB … [truncated]
+         function lT(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[311]] = ';kQmCctOHDZdsa0nhI&y}=94uX[8^)bL1P~qB%r35+V"K*2pM.7i{#(N_e$FxjWGAT6,Y:vw>]S`fl<?!@zoRJg|U/E', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[94]] = bB[1], BB[bB[26] … [truncated]
+             if (BB[bB[6]] = BB[bB[311]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[6]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
+               else {
+                 cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[26]] << BB[bB[94]], BB[bB[94]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[94]] -= bB[11])
+                 } while (BB[bB[94]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[bB[52]].push((BB[bB[29]] | BB[bB[26]] << BB[bB[94]]) & bB[12]), EB(BB[bB[52]])
+         }
+ 
+         function AT(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = lT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+ ... (4 more added lines; see GitHub link above)
```

#### 1974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15230-L15232` → after: `L14207-L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14207-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14207-L14209) · [Before (L15230-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15230-L15232)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = '&6uy{>BH<ePVJGUF"8z$}KZ1!59b|h:aj[vt;xAOiDL/0(WR2`E%C@orIYQ#+3SsM?g,Tc4qnf~=^d)m*N7wX]_plk.', BB[-xB[250]] = "" + (BB[xB[1]] || ""), BB[xB[13]] = BB[-xB[250]].length, BB[xB[38]] = [], BB[xB[410]] = xB[1], BB[xB[30]] = xB[1], BB[x … [truncated]
-             if (BB[-xB[80]] = BB[xB[2]].indexOf(BB[-xB[250]][BB[xB[61]]]), BB[-xB[80]] !== -xB[2])
-               if (BB[xB[92]] < xB[1]) BB[xB[92]] = BB[-xB[80]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '1YA(P784WlBFo6hZ!^@=5D)JXjRqmu$<.I`0>"a;_e*bCS?O9z,[Q2#{}GV~:ULN+%d]rxtcTEH&vnKw3fMgyki/|sp', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[312]] = BB[bB[0]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[218]] = bB[1], BB[bB[26 … [truncated]
+             if (BB[-bB[39]] = BB[bB[22]].indexOf(BB[bB[0]][BB[bB[313]]]), BB[-bB[39]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[-bB[39]];
```

#### 1975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15234` → after: `L14211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14211) · [Before (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15234)

```diff
-                 Uj(BB[xB[92]] += BB[-xB[80]] * xB[29], BB[xB[410]] |= BB[xB[92]] << BB[xB[30]], BB[xB[30]] += (BB[xB[92]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[26]] += BB[-bB[39]] * bB[35], BB[bB[29]] |= BB[bB[26]] << BB[bB[218]], BB[bB[218]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15236-L15239` → after: `L14213-L14216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14213-L14216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14213-L14216) · [Before (L15236-L15239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15236-L15239)

```diff
-                   Uj(BB[xB[38]].push(BB[xB[410]] & xB[11]), BB[xB[410]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[xB[92]] = -xB[2]
-               } return BB[xB[92]] > -xB[2] && BB[xB[38]].push((BB[xB[410]] | BB[xB[92]] << BB[xB[30]]) & xB[11]), CB(BB[xB[38]])
+                   cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[218]] -= bB[11])
+                 } while (BB[bB[218]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[bB[52]].push((BB[bB[29]] | BB[bB[26]] << BB[bB[218]]) & bB[12]), EB(BB[bB[52]])
```

#### 1977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15243` → after: `L14220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14220) · [Before (L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15243)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = HQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = bT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15245` → after: `L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14222) · [Before (L15245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15245)

```diff
-         Uj(BB[xB[38]][xB[317]][xB[2]] = xB[1], BB[xB[38]][DQ(588) + DQ(589) + DQ(590)] = .15 * PB)
+         BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + xT(562)](xT(563) + xT(564) + bB[314], bB[2])
```

#### 1979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15247-L15250` → after: `L14224-L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14224-L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14224-L14234) · [Before (L15247-L15250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15247-L15250)

```diff
-       if (aj[jB(xB[411])] > xB[1]) {
-         const FQ = BB[xB[1]][jB(xB[161])][jB(591)](BB[xB[2]], aj);
-         BB[xB[24]][jB(xB[402])][jB(xB[403]) + jB(xB[404]) + jB(xB[405])](jB(592) + jB(593) + xB[413], FQ)
-       } else if (BB[xB[0]][jB(xB[319]) + xB[92]]) {
+       if (BB[-bB[0]] = bB[2], NB[IB(bB[292])] && II && !CB)
+         for (let ET = bB[1]; ET < nI[IB(bB[310])]; ET++) {
+           const DT = NB[IB(bB[292])][nI[ET]];
+           Math[IB(bB[243])](DT - bB[2]) > Math[IB(bB[243])](BB[-bB[0]] - bB[2]) && (BB[-bB[0]] = DT)
+         }
+       BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(565) + IB(566) + IB(567) + IB(568), BB[-bB[0]]);
+       const sI = (bB[1], nB.x)(cB, CB, II);
+       cI(BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(569) + IB(570) + IB(571) + bB[316], sI), BB[bB[1]].zW.vx(BB[bB[0]][bB[315]]).Tl = (bB[1], nB[bB[316]])(NB[IB(bB[317]) + IB(bB[318])], nI, cB[IB(bB[317]) + IB(bB[318])])), GB === oB[bB[186]][IB(574) + bB[ … [truncated]
+       const wI = BB[bB[30]][bB[232]] * BB[bB[30]][IB(bB[292])][IB(578) + IB(579) + IB(580) + IB(581)]() * (BB[bB[0]][IB(bB[224]) + bB[34]] ? TI(BB[bB[1]], BB[bB[2]], XB) : bB[2]),
+         OI = Number[IB(582)](wI) ? bB[1] : Math[IB(bB[319])](-JB[bB[20]][IB(bB[320]) + IB(bB[237])], Math[IB(584)](wI, JB[bB[20]][IB(bB[320]) + IB(bB[237])]));
+       if (cB[IB(bB[321]) + bB[322]] && cB[IB(bB[321]) + bB[322]][IB(586) + IB(587)] > bB[1] && (II || CB && cB[IB(bB[321]) + bB[322]][IB(588)])) {
```

#### 1980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15252-L15254` → after: `L14236-L14238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14236-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14236-L14238) · [Before (L15252-L15254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15252-L15254)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'NmOTiDGRCWfBEgqxw"IY,sno}_r<kt)8U+Xd09L2A6[!3{JbVMSlZFKa`@ePjHQpc=;]4:*|yv>5~1?^/u7z$#%(&.h', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[0]].length, BB[-xB[412]] = [], BB[xB[16]] = xB[1], BB[xB[30]] = xB[1], BB[-xB[29 … [truncated]
-             if (BB[-xB[122]] = BB[xB[2]].indexOf(BB[xB[0]][BB[xB[3]]]), BB[-xB[122]] !== -xB[2])
-               if (BB[-xB[29]] < xB[1]) BB[-xB[29]] = BB[-xB[122]];
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[215]] = 'wG9@ZxV{;ojCpL?3)nmryvMOUI!FN"W>,]+%/SsRJ}8H:f1&Qe*_A$^uT=KgPXD7[<B.5EYk4h~(azlc06#2d`qbt|i', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[110]] = BB[bB[14]].length, BB[-bB[68]] = [], BB[-bB[311]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+             if (BB[-bB[323]] = BB[-bB[215]].indexOf(BB[bB[14]][BB[bB[11]]]), BB[-bB[323]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[323]];
```

#### 1981. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15256` → after: `L14240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14240) · [Before (L15256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15256)

```diff
-                 Uj(BB[-xB[29]] += BB[-xB[122]] * xB[29], BB[xB[16]] |= BB[-xB[29]] << BB[xB[30]], BB[xB[30]] += (BB[-xB[29]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[34]] += BB[-bB[323]] * bB[35], BB[-bB[311]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1982. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15258-L15261` → after: `L14242-L14245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14242-L14245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14242-L14245) · [Before (L15258-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15258-L15261)

```diff
-                   Uj(BB[-xB[412]].push(BB[xB[16]] & xB[11]), BB[xB[16]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[-xB[29]] = -xB[2]
-               } return BB[-xB[29]] > -xB[2] && BB[-xB[412]].push((BB[xB[16]] | BB[-xB[29]] << BB[xB[30]]) & xB[11]), CB(BB[-xB[412]])
+                   cI(BB[-bB[68]].push(BB[-bB[311]] & bB[12]), BB[-bB[311]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[-bB[68]].push((BB[-bB[311]] | BB[bB[34]] << BB[bB[24]]) & bB[12]), EB(BB[-bB[68]])
```

#### 1983. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15265-L15280` → after: `L14249-L14252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14249-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14249-L14252) · [Before (L15265-L15280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15265-L15280)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = YQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-         }
-         BB[xB[24]][VQ(594)][VQ(595) + VQ(596) + VQ(597)](VQ(598) + VQ(599) + xB[413], xB[2])
-       }
-       if (BB[xB[30]] = xB[2], JB[jB(xB[402])] && jj && !tB)
-         for (let hQ = xB[1]; hQ < aj[jB(xB[411])]; hQ++) {
-           const XQ = JB[jB(xB[402])][aj[hQ]];
-           Math[jB(xB[345])](XQ - xB[2]) > Math[jB(xB[345])](BB[xB[30]] - xB[2]) && (BB[xB[30]] = XQ)
-         }
-       BB[xB[24]][jB(xB[402])][jB(xB[403]) + jB(xB[404]) + jB(xB[405])](jB(600) + jB(601) + jB(602) + jB(603), BB[xB[30]]);
-       const Mj = (xB[1], aB.v)(UB, tB, jj);
-       Uj(BB[xB[24]][jB(xB[402])][jB(xB[403]) + jB(xB[404]) + jB(xB[405])](jB(xB[335]) + jB(604) + jB(605) + jB(606) + xB[406], Mj), BB[xB[1]].vG.pT(BB[xB[0]][xB[414]]).sZ = (xB[1], aB.q)(JB[jB(xB[415]) + jB(xB[416])], aj, UB[jB(xB[415]) + jB(xB[416])])), IB === dB[xB[406]][jB(609 … [truncated]
-       const Ej = BB[xB[24]][xB[331]] * BB[xB[24]][jB(xB[402])][jB(613) + jB(614) + jB(615) + jB(616)]() * (BB[xB[0]][jB(xB[319]) + xB[92]] ? Qj(BB[xB[1]], BB[xB[2]], AB) : xB[2]),
-         ij = Number[jB(617)](Ej) ? xB[1] : Math[jB(xB[417])](-nB[xB[16]][jB(xB[419]) + jB(xB[343])], Math[jB(xB[418])](Ej, nB[xB[16]][jB(xB[419]) + jB(xB[343])]));
-       UB[jB(xB[420]) + xB[421]] && UB[jB(xB[420]) + xB[421]][jB(xB[422]) + jB(xB[423])] > xB[1] && (jj || tB && UB[jB(xB[420]) + xB[421]][jB(622)]) && (xB[1], EB[xB[13]])(BB[xB[38]], BB[xB[0]][jB(xB[420]) + jB(623) + jB(xB[439])], UB[jB(xB[420]) + xB[421]][jB(xB[422]) + jB(xB[423 … [truncated]
-       const qj = UB[jB(625)];
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = KT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+         }(bB[1], OB[bB[29]])(BB[bB[52]], BB[bB[0]][IB(bB[321]) + IB(589) + IB(bB[324])], cB[IB(bB[321]) + bB[322]][VT(590) + VT(591)], BB[bB[8]])
+       }
+       const YI = cB[IB(592)];
```

#### 1984. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15282-L15286` → after: `L14254-L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14254-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14254-L14290) · [Before (L15282-L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15282-L15286)

```diff
-         const ZQ = (Math[jB(626)](BB[xB[38]][xB[317]][xB[1]] * BB[xB[38]][xB[317]][xB[1]] + BB[xB[38]][xB[317]][xB[0]] * BB[xB[38]][xB[317]][xB[0]]) - qj[jB(627) + xB[78]]) * qj[jB(xB[425]) + jB(629) + jB(630) + "n"];
-         if (ZQ > xB[1] && BB[xB[38]][xB[317]][xB[2]] < ZQ) {
-           const AQ = BB[xB[39]] / xB[424],
-             TQ = (ZQ - BB[xB[38]][xB[317]][xB[2]]) * sB[xB[14]][jB(631) + jB(632)](qj[jB(xB[425]) + jB(633) + jB(634)] * AQ);
-           Uj(NB()[jB(xB[426])](DB, xB[1], TQ * BB[xB[38]].fN / AQ, xB[1]), BB[xB[38]][jB(635) + jB(636)](DB))
+         function ST(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'xcPJWiDsrnHlOgGCmkpqRZ,14+=7`w~y6bjQBN{<v>(9[*K8Ad)3?Y;u!2z@/$S:TE.5%|fIMUV#XF}"_]^&Lohae0t', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[-bB[201]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB[bB[26]] … [truncated]
+             if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[0]][BB[-bB[8]]]), BB[bB[6]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
+               else {
+                 cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[24]], BB[bB[24]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[-bB[201]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[-bB[201]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[24]]) & bB[12]), EB(BB[-bB[201]])
+         }
+ 
+         function BJ(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = ST(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+         }
+ ... (21 more added lines; see GitHub link above)
```

#### 1985. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15294-L15295` → after: `L14298-L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14298-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14298-L14299) · [Before (L15294-L15295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15294-L15295)

```diff
-             pB = null === uB.durationMs || !QB.floatStartTicksAgo || QB.floatStartTicksAgo < uB.durationMs / 1e3 * nB.e.clientTicksPerSecond,
-             rB = QB.isInAir && !NB && (IB.Hy[1] < 0 || aB === UB) && !QB.hitWhilstAirborne(UB) && pB,
+             hB = null === kB.durationMs || !TB.floatStartTicksAgo || TB.floatStartTicksAgo < kB.durationMs / 1e3 * JB.f.clientTicksPerSecond,
+             zB = TB.isInAir && !vB && (GB.zq[1] < 0 || nB === cB) && !TB.hitWhilstAirborne(cB) && hB,
```

#### 1986. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15297-L15299` → after: `L14301-L14303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14301-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14301-L14303) · [Before (L15297-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15297-L15299)

```diff
-             JB = !rB && aB !== dB.r.NORMAL;
-           return QB.movementType = rB ? UB : dB.r.NORMAL, sB ? jB.bloxd.updatePositionAndPhysics(zB, QB.physicsState, !1, void 0, !0) : JB && (uB.exitsVehicleOnEnd ? jB.bloxd.removeConsumableVehiclePhysics(zB, QB.hasTakenOffTheGround) : jB.bloxd.updatePositionAndPhysics(zB, {
-             type: dB.t.DEFAULT,
+             NB = !zB && nB !== oB.l.NORMAL;
+           return TB.movementType = zB ? cB : oB.l.NORMAL, FB ? IB.bloxd.updatePositionAndPhysics(ZB, TB.physicsState, !1, void 0, !0) : NB && (kB.exitsVehicleOnEnd ? IB.bloxd.removeConsumableVehiclePhysics(ZB, TB.hasTakenOffTheGround) : IB.bloxd.updatePositionAndPhysics(ZB, {
+             type: oB.o.DEFAULT,
```

#### 1987. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15301-L15303` → after: `L14305-L14307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14305-L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14305-L14307) · [Before (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15301-L15303)

```diff
-           }, !1, void 0, !0)), (sB || JB) && jB.bloxd.onMovementTypeChanged(zB, QB.movementType, aB), QB.isOnGround() ? (QB.setHitWhilstAirborne(UB, !1), null !== uB.durationMs && (QB.hasTakenOffTheGround = !1, QB.floatStartTicksAgo = null)) : null !== uB.durationMs && IB.Hy[1] < … [truncated]
-         }(UB, BB[xB[1]], BB[xB[2]], BB[xB[0]], BB[xB[38]], tB),
-         oj = BB[xB[38]][jB(637) + jB(638) + jB(xB[427])],
+           }, !1, void 0, !0)), (FB || NB) && IB.bloxd.onMovementTypeChanged(ZB, TB.movementType, nB), TB.isOnGround() ? (TB.setHitWhilstAirborne(cB, !1), null !== kB.durationMs && (TB.hasTakenOffTheGround = !1, TB.floatStartTicksAgo = null)) : null !== kB.durationMs && GB.zq[1] < … [truncated]
+         }(cB, BB[bB[1]], BB[bB[2]], BB[bB[0]], BB[bB[52]], CB),
+         pI = BB[bB[52]][IB(606) + IB(607) + IB(bB[327])],
```

#### 1988. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15305` → after: `L14309-L14341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14309-L14341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14309-L14341) · [Before (L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15305)

```diff
-       if (Hj ? Uj(NB()[jB(xB[442])](oj, ZB), BB[xB[38]][xB[359]]()) : oj[xB[1]] === xB[1] && oj[xB[2]] === xB[1] && oj[xB[0]] === xB[1] || NB()[jB(xB[426])](oj, xB[1], xB[1], xB[1]), !UB[jB(640) + jB(641) + jB(642) + xB[406]]) {
+       if (aI ? cI(vB()[IB(bB[352])](pI, mB), BB[bB[52]][bB[264]]()) : pI[bB[1]] === bB[1] && pI[bB[2]] === bB[1] && pI[bB[0]] === bB[1] || vB()[IB(bB[341])](pI, bB[1], bB[1], bB[1]), !cB[IB(610) + IB(611) + IB(612) + bB[316]]) {
+         aI && vB()[IB(613) + "ct"](BB[bB[52]][bB[221]], BB[bB[52]][bB[221]], pI);
+         const GJ = cB[IB(bB[330]) + IB(615)];
+         GJ !== bB[51] && BB[bB[0]][IB(bB[328]) + IB(bB[329])] === GJ[IB(616) + IB(617) + IB(bB[329])] && cB[IB(bB[330]) + IB(bB[331]) + IB(bB[332])] !== bB[51] ? yB(cB, BB[bB[1]], BB[bB[2]], BB[bB[0]], BB[bB[30]], BB[bB[52]], OI, BB[bB[8]], iI) : cB[IB(bB[330]) + IB(bB[331]) + IB … [truncated]
+       }
+       const HI = vB()[IB(bB[337])](BB[bB[52]][bB[221]]);
+       if (Number[bB[336]](HI)) {
+         if (HI > JB[bB[20]][IB(bB[320]) + IB(bB[237])]) {
+           aB++;
+           const vJ = Date[IB(633)]();
+           if (vJ - HB >= 6e4) {
+             function cJ(...BB) {
+               for (cI(BB[bB[13]] = bB[2], BB[-bB[141]] = '>7`?<.)u,]OAafvB:zLoCw"YHnRDElZQk&xM4V+pNhF=q(s1*cd^eJy~5TS9}K%|i#2/$3[rG8Xt;W@jmU{gb06_P!I', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[126]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[20]] = bB[1], BB[b … [truncated]
+                 if (BB[bB[6]] = BB[-bB[141]].indexOf(BB[bB[0]][BB[bB[200]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
+                   else {
+ ... (17 more added lines; see GitHub link above)
```

#### 1989. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15307-L15309` → after: `L14343-L14345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14343-L14345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14343-L14345) · [Before (L15307-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15307-L15309)

```diff
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[5]] = 'R2^cy[>]9zx!itJ`lAsK=Q#jwH"@_)?ZG;mPBbqgCp1vT&*aL.eX%D+8(hVn70f,3/4oud:~Mk{<W$U56|rSEF}INOY', BB[xB[0]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[0]].length, BB[xB[38]] = [], BB[-xB[20]] = xB[1], BB[xB[9]] = xB[1], BB[xB[7]] = … [truncated]
-             if (BB[xB[45]] = BB[xB[5]].indexOf(BB[xB[0]][BB[xB[3]]]), BB[xB[45]] !== -xB[2])
-               if (BB[xB[7]] < xB[1]) BB[xB[7]] = BB[xB[45]];
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[269]] = '/%^0LD2"V?xFiC`h_O+!]3<lAcBe[uZsK:754PtQg1R~MTWESy#|I{&fv>,Nd.wkX*jzm9)JHUG($}ro6Y8;apb=n@q', BB[-bB[334]] = "" + (BB[bB[1]] || ""), BB[-bB[47]] = BB[-bB[334]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+             if (BB[bB[33]] = BB[-bB[269]].indexOf(BB[-bB[334]][BB[-bB[99]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[33]];
```

#### 1990. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15311` → after: `L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14347) · [Before (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15311)

```diff
-                 Uj(BB[xB[7]] += BB[xB[45]] * xB[29], BB[-xB[20]] |= BB[xB[7]] << BB[xB[9]], BB[xB[9]] += (BB[xB[7]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
+                 cI(BB[bB[26]] += BB[bB[33]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[24]], BB[bB[24]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1991. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15313-L15316` → after: `L14349-L14352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14349-L14352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14349-L14352) · [Before (L15313-L15316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15313-L15316)

```diff
-                   Uj(BB[xB[38]].push(BB[-xB[20]] & xB[11]), BB[-xB[20]] >>= xB[3], BB[xB[9]] -= xB[3])
-                 } while (BB[xB[9]] > xB[7]);
-                 BB[xB[7]] = -xB[2]
-               } return BB[xB[7]] > -xB[2] && BB[xB[38]].push((BB[-xB[20]] | BB[xB[7]] << BB[xB[9]]) & xB[11]), CB(BB[xB[38]])
+                   cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[24]]) & bB[12]), EB(BB[bB[10]])
```

#### 1992. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15320` → after: `L14356-L14371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14356-L14371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14356-L14371) · [Before (L15320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15320)

```diff
-           return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = PQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = hJ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+         }
+         cI(console[IB(bB[338])](new Error(IB(626) + IB(627) + IB(628) + IB(629) + IB(630) + ": " + BB[bB[52]][bB[221]])[IB(bB[340])]), vB()[zJ(632)](BB[bB[52]][bB[221]], bB[1], bB[1], bB[1]), BB[bB[52]][bB[264]]())
+       }
+       if (Number[bB[336]](vB()[IB(bB[337])](BB[bB[52]][bB[339]])) || cI(console[IB(bB[338])](new Error(IB(644) + IB(645) + IB(646) + IB(647) + BB[bB[52]][bB[339]])[IB(bB[340])]), vB()[IB(bB[341])](BB[bB[52]][bB[339]], bB[1], bB[1], bB[1]), BB[bB[52]][bB[264]]()), !Number[bB[336]] … [truncated]
+         function FJ(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'cLqXIAdhUnj~)}!tY8HxW`i0>Er<bJ,M#VaDfG3gP1yZeQFp^RT;ouB=OCkKSlm_N9(:2?+"|v{7[4%5$z*.&@w/]6s', BB[-bB[343]] = "" + (BB[bB[1]] || ""), BB[bB[342]] = BB[-bB[343]].length, BB[bB[10]] = [], BB[bB[136]] = bB[1], BB[bB[20]] = bB[1], BB[ … [truncated]
+             if (BB[bB[33]] = BB[bB[2]].indexOf(BB[-bB[343]][BB[bB[11]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[33]];
+               else {
+                 cI(BB[bB[34]] += BB[bB[33]] * bB[35], BB[bB[136]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[10]].push(BB[bB[136]] & bB[12]), BB[bB[136]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[136]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1993. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15339-L15342` → after: `L14374-L14375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14374-L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14374-L14375) · [Before (L15339-L15342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15339-L15342)

```diff
-           function wQ(...BB) {
-             return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = lQ(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-           }
-           UB[wQ(653) + wQ(654) + wQ(655)] !== xB[48] ? BB[xB[24]][xB[331]] ? (xB[1], rB[xB[16]])(BB[xB[1]], BB[xB[2]], BB[xB[0]], BB[xB[24]], BB[xB[38]], ij, UB) : BB[xB[38]][wQ(656) + xB[390]] = UB[wQ(657) + wQ(658) + wQ(659)] : (xB[1], pB[xB[13]])(UB, BB[xB[1]], BB[xB[2]], BB[x … [truncated]
+         function NJ(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = FJ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1994. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15344` → after: `L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14377) · [Before (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15344)

```diff
-         Hj && NB()[WQ(660)](BB[xB[38]][xB[317]], BB[xB[38]][xB[317]], oj)
+         cI(console[IB(bB[338])](new Error(NJ(648) + NJ(649) + NJ(650) + NJ(651) + NJ(652) + NJ(653) + BB[bB[52]][bB[344]])[NJ(654)]), vB()[NJ(655)](BB[bB[52]][bB[344]], bB[1], bB[1], bB[1]), BB[bB[52]][bB[264]]())
```

#### 1995. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15346-L15356` → after: `L14379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14379) · [Before (L15346-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15346-L15356)

```diff
-       const Dj = NB()[jB(xB[431])](BB[xB[38]][xB[317]]);
-       if (Number[xB[430]](Dj)) {
-         if (Dj > nB[xB[16]][jB(xB[419]) + jB(xB[343])]) {
-           oB++;
-           const xQ = Date[jB(669)]();
-           xQ - HB >= 6e4 && Uj(console[jB(670)](jB(671) + jB(672) + jB(673) + jB(674) + jB(675) + xB[429] + Dj + jB(676) + nB[xB[16]][jB(xB[419]) + jB(xB[343])] + " (" + oB + jB(677)), oB = xB[1], HB = xQ);
-           const KQ = nB[xB[16]][jB(xB[419]) + jB(xB[343])] / Dj;
-           Uj(NB()[jB(678)](BB[xB[38]][xB[317]], BB[xB[38]][xB[317]], KQ), BB[xB[38]][xB[359]]())
-         }
-       } else Uj(console[jB(xB[432])](new Error(jB(663) + jB(664) + jB(665) + jB(666) + jB(667) + xB[429] + BB[xB[38]][xB[317]])[jB(xB[434])]), NB()[jB(xB[426])](BB[xB[38]][xB[317]], xB[1], xB[1], xB[1]), BB[xB[38]][xB[359]]());
-       Number[xB[430]](NB()[jB(xB[431])](BB[xB[38]][xB[433]])) || Uj(console[jB(xB[432])](new Error(jB(xB[435]) + jB(680) + jB(681) + jB(682) + BB[xB[38]][xB[433]])[jB(xB[434])]), NB()[jB(xB[426])](BB[xB[38]][xB[433]], xB[1], xB[1], xB[1]), BB[xB[38]][xB[359]]()), Number[xB[430]]( … [truncated]
+       cI(BB[bB[0]][IB(656) + IB(657) + IB(658)] = BB[bB[0]][IB(bB[328]) + IB(bB[329])], BB[bB[0]][IB(bB[265]) + IB(bB[266]) + IB(bB[267])] = II, BB[bB[0]][IB(bB[345]) + IB(bB[346]) + IB(bB[347])] = BB[bB[30]][IB(bB[178]) + bB[34]], BB[bB[0]][IB(659) + IB(660) + IB(661) + IB(662)] … [truncated]
```

#### 1996. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15358` → after: `L14381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14381) · [Before (L15358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15358)

```diff
-     const jj = xB[328];
+     const II = bB[146];
```

#### 1997. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15361` → after: `L14384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14384) · [Before (L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15361)

```diff
-       return wB = [BB, {}], vB(KB(695), KB(xB[443]) + KB(xB[444]), KB(xB[445]) + KB(xB[446]))[KB(xB[447]) + KB(xB[448])]
+       return tB = [BB, {}], KB(xB(663))
```

#### 1998. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15365` → after: `L14388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14388) · [Before (L15365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15365)

```diff
-       return wB = [BB, {}], vB(KB(702))
+       return tB = [BB, {}], KB(xB(664), xB(665) + xB(666), xB(667) + xB(668))[xB(669) + xB(670)]
```

#### 1999. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15370` → after: `L14393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14393) · [Before (L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15370)

```diff
-         get [KB(703) + xB[121]]() {
+         get [xB(671) + bB[64]]() {
```

#### 2000. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15374` → after: `L14397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14397) · [Before (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15374)

```diff
-       return wB = [BB, jB], vB(KB(704), KB(xB[443]) + KB(xB[444]), KB(xB[445]) + KB(xB[446]))[KB(xB[447]) + KB(xB[448])]
+       return tB = [BB, IB], KB(xB(bB[269]))
```

#### 2001. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15382-L15396` → after: `L14405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14405) · [Before (L15382-L15396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15382-L15396)

```diff
-       function jB(...BB) {
-         return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(...BB) {
-           for (Uj(BB[xB[12]] = xB[2], BB[xB[2]] = 'xHoJdmBjOMav7/_4q:}zb[I*w8;iW&!39kRyFU>C="G2uQPYVt%^g1<.As?cDSE|X0$6Z5K(n#{Lpl@f]T)+e`r~,hN', BB[xB[82]] = "" + (BB[xB[1]] || ""), BB[xB[24]] = BB[xB[82]].length, BB[xB[14]] = [], BB[xB[39]] = xB[1], BB[xB[30]] = xB[1], BB[-xB[83 … [truncated]
-             if (BB[-xB[29]] = BB[xB[2]].indexOf(BB[xB[82]][BB[xB[3]]]), BB[-xB[29]] !== -xB[2])
-               if (BB[-xB[83]] < xB[1]) BB[-xB[83]] = BB[-xB[29]];
-               else {
-                 Uj(BB[-xB[83]] += BB[-xB[29]] * xB[29], BB[xB[39]] |= BB[-xB[83]] << BB[xB[30]], BB[xB[30]] += (BB[-xB[83]] & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                 do {
-                   Uj(BB[xB[14]].push(BB[xB[39]] & xB[11]), BB[xB[39]] >>= xB[3], BB[xB[30]] -= xB[3])
-                 } while (BB[xB[30]] > xB[7]);
-                 BB[-xB[83]] = -xB[2]
-               } return BB[-xB[83]] > -xB[2] && BB[xB[14]].push((BB[xB[39]] | BB[-xB[83]] << BB[xB[30]]) & xB[11]), CB(BB[xB[14]])
-         }(hB[BB[xB[1]]]) : VB[BB[xB[1]]]
-       }
-       return wB = [BB, {}], vB(jB(705), jB(706) + jB(707), jB(708) + jB(709))[jB(710) + jB(711)]
+       return VB(BB)
```

#### 2002. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15400-L15418` → after: `L14409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14409) · [Before (L15400-L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15400-L15418)

```diff
-       function jB(...BB) {
-         return BB[xB[12]] = xB[2], typeof VB[BB[xB[1]]] === xB[17] ? VB[BB[xB[1]]] = function(BB) {
-           var jB, zB, QB, nB, dB, IB, NB;
-           for (Uj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = xB[1], dB = xB[1], IB = -xB[2]), NB = xB[1]; NB < zB; NB++) {
-             var uB = '1OWpBmgViAlKtJPjofaCErZuGQ9I`>=D[cT<xw@NqS"b3?4s&8HMh^(dFRkX#0_$nLeU)5Y2!+/7|z~.}*v,%;y]:6{'.indexOf(jB[NB]);
-             if (uB !== -xB[2])
-               if (IB < xB[1]) IB = uB;
-               else {
-                 Uj(IB += uB * xB[29], nB |= IB << dB, dB += (IB & xB[31]) > xB[32] ? xB[33] : xB[34]);
-                 do {
-                   Uj(QB.push(nB & xB[11]), nB >>= xB[3], dB -= xB[3])
-                 } while (dB > xB[7]);
-                 IB = -xB[2]
-               }
-           }
-           return IB > -xB[2] && QB.push((nB | IB << dB) & xB[11]), CB(QB)
- ... (3 more removed lines; see GitHub link above)
+       return tB = [BB, {}], KB(xB(bB[107]))
```

#### 2003. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15422` → after: `L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14413) · [Before (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15422)

```diff
-       return RB(BB)
+       return tB = [BB, {}], KB(xB(bB[86]))
```

#### 2004. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15428` → after: `L14419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14419) · [Before (L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15428)

```diff
-     const aj = QB.e;
+     const nI = TB.g;
```

#### 2005. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15432-L15433` → after: `L14423-L14424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14423-L14424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14423-L14424) · [Before (L15432-L15433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15432-L15433)

```diff
-         vG: zB
-       } = BB, QB = BB.vG.FY("movement");
+         zW: ZB
+       } = BB, TB = BB.zW.fR("movement");
```

#### 2006. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15436-L15439` → after: `L14427-L14430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14427-L14430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14427-L14430) · [Before (L15436-L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15436-L15439)

```diff
-         if (zB.rBB(dB.VY)) {
-           const QB = zB.pT(dB.VY),
-             nB = zB.JjB(dB.VY);
-           BB.bloxd.regrowPlayerBody(dB.VY), YB(BB, dB.VY, dB, nB, QB, jB)
+         if (ZB.eBB(oB.bR)) {
+           const TB = ZB.vx(oB.bR),
+             JB = ZB.uIB(oB.bR);
+           BB.bloxd.regrowPlayerBody(oB.bR), PB(BB, oB.bR, oB, JB, TB, IB)
```

#### 2007. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15444` → after: `L14435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14435) · [Before (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L15444)

```diff
-   37844: (BB, jB, zB) => {
+   37809: (BB, IB, ZB) => {
```
