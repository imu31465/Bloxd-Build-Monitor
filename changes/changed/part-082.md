# Changed — Bundle Modifications Report (Part 082 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `82 / 142` (**287** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 081](part-081.md) · [Part 083 →](part-083.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4717 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 1771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12611` → after: `L13085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13085) · [Before (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12611)

```diff
-     function nu(uu, Eu, ju, su = {}, Uu, Zu, Xu, lu) {
+     function BG(GG, bG, ZG, wG = {}, SG, LG, yG, kG, UG) {
```

#### 1772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12613` → after: `L13087-L13117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13087-L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13087-L13117) · [Before (L12613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12613)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Uu(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           function bG(...GG) {
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(...GG) {
+               for (pb(GG[tG[13]] = tG[2], GG[tG[41]] = 'B<dmA(0wO1ShFIp*9/}+NxERQH,g@zWv$T6Lyq&ui=Vfa?7b2o`%X4P#U3D]G{KMs_:re"[jC5>|^JY~nck8!;Zl)t.', GG[tG[38]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[38]].length, GG[-tG[39]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[tG … [truncated]
+                 if (GG[tG[6]] = GG[tG[41]].indexOf(GG[tG[38]][GG[tG[40]]]), GG[tG[6]] !== -tG[2])
+                   if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[6]];
+                   else {
+                     pb(GG[tG[20]] += GG[tG[6]] * tG[27], GG[tG[39]] |= GG[tG[20]] << GG[tG[9]], GG[tG[9]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                     do {
+                       pb(GG[-tG[39]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                     } while (GG[tG[9]] > tG[20]);
+                     GG[tG[20]] = -tG[2]
+                   } return GG[tG[20]] > -tG[2] && GG[-tG[39]].push((GG[tG[39]] | GG[tG[20]] << GG[tG[9]]) & tG[12]), NG(GG[-tG[39]])
+             }(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+           }
+           GG[tG[13]] = tG[1];
+           const ZG = require("path"),
+ ... (15 more added lines; see GitHub link above)
```

#### 1773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12615-L12617` → after: `L13119-L13121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13119-L13121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13119-L13121) · [Before (L12615-L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12615-L12617)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'u#)"@_P}`OrVneZTv?Hy<g~J^*pmcDICBa]j=6EY31s%S$WU7iL+&xN>2F(;XR.fh8AwlG59z0t,k[Kqb4!/:odMQ{|', uu[-xu[25]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[-xu[25]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], uu[xu[19] … [truncated]
-             if (uu[xu[26]] = uu[xu[8]].indexOf(uu[-xu[25]][uu[xu[2]]]), uu[xu[26]] !== -xu[1])
-               if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[26]];
+           for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = '(NW&$ul4+1FRxH^T[cqw7fa]Sm;2L|`Qy#~jBto.G_:@iE<nKUX,dYz?}5kDe%9r)vg{3!VPOC>0JZ6=/8I"pbhM*sA', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[34]] = GG[tG[0]].length, GG[tG[37]] = [], GG[-tG[36]] = tG[1], GG[tG[18]] = tG[1], GG[-tG[35] … [truncated]
+             if (GG[tG[26]] = GG[tG[5]].indexOf(GG[tG[0]][GG[-tG[33]]]), GG[tG[26]] !== -tG[2])
+               if (GG[-tG[35]] < tG[1]) GG[-tG[35]] = GG[tG[26]];
```

#### 1774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12619` → after: `L13123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13123) · [Before (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12619)

```diff
-                 XE(uu[xu[19]] += uu[xu[26]] * xu[23], uu[xu[27]] |= uu[xu[19]] << uu[xu[17]], uu[xu[17]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[-tG[35]] += GG[tG[26]] * tG[27], GG[-tG[36]] |= GG[-tG[35]] << GG[tG[18]], GG[tG[18]] += (GG[-tG[35]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12621-L12700` → after: `L13125-L13148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13125-L13148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13125-L13148) · [Before (L12621-L12700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12621-L12700)

```diff
-                   XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-                 } while (uu[xu[17]] > xu[19]);
-                 uu[xu[19]] = -xu[1]
-               } return uu[xu[19]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[19]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[7]])
-         }), XE(Xu = void 0, lu = {
-           [Zu(92)]: function(...uu) {
-             function Eu(...uu) {
-               return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(...uu) {
-                 for (XE(uu[xu[4]] = xu[1], uu[-xu[32]] = 'UOS`+m1~[zBHc*0A:Q3MgbeR4NWEqkYa"?(=^<J2d7Lj@Xtfyp6>o/Cr;iI&$uln_#{sDG5)PFThZ%V,!vw.x9}8|]K', uu[xu[31]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[31]].length, uu[xu[14]] = [], uu[xu[34]] = xu[0], uu[xu[17]] = xu[0], uu … [truncated]
-                   if (uu[xu[26]] = uu[-xu[32]].indexOf(uu[xu[31]][uu[xu[2]]]), uu[xu[26]] !== -xu[1])
-                     if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[26]];
-                     else {
-                       XE(uu[xu[33]] += uu[xu[26]] * xu[23], uu[xu[34]] |= uu[xu[33]] << uu[xu[17]], uu[xu[17]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                       do {
-                         XE(uu[xu[14]].push(uu[xu[34]] & xu[3]), uu[xu[34]] >>= xu[2], uu[xu[17]] -= xu[2])
-                       } while (uu[xu[17]] > xu[19]);
- ... (64 more removed lines; see GitHub link above)
+                   pb(GG[tG[37]].push(GG[-tG[36]] & tG[12]), GG[-tG[36]] >>= tG[11], GG[tG[18]] -= tG[11])
+                 } while (GG[tG[18]] > tG[20]);
+                 GG[-tG[35]] = -tG[2]
+               } return GG[-tG[35]] > -tG[2] && GG[tG[37]].push((GG[-tG[36]] | GG[-tG[35]] << GG[tG[18]]) & tG[12]), NG(GG[tG[37]])
+         }), LG(tG[65]) + "R" in xG && yG(), pb(kG = void 0, UG = {
+           [LG(tG[49])]: function(GG, bG, ZG) {
+             ZG || (ZG = function(...GG) {
+               GG[tG[13]] = tG[1]
+             }), bG || (bG = function(...bG) {
+               return bG[tG[13]] = tG[2], typeof PG[bG[tG[1]]] === tG[14] ? PG[bG[tG[1]]] = GG(MG[bG[tG[1]]]) : PG[bG[tG[1]]]
+             }), GG || (GG = function(...GG) {
+               for (pb(GG[tG[13]] = tG[2], GG[-tG[42]] = 'ZmuLrIXGEobHQYkgDpWhMdt%]^v<J3F6U5[!1>*Kf({&O?e$Ca.S);,}w#syTxB"q/R+|APjz9=i`c0l2NV:~4_n78@', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[0]].length, GG[tG[37]] = [], GG[tG[8]] = tG[1], GG[tG[9]] = tG[1], GG[-tG[ … [truncated]
+                 if (GG[tG[6]] = GG[-tG[42]].indexOf(GG[tG[0]][GG[tG[3]]]), GG[tG[6]] !== -tG[2])
+                   if (GG[-tG[43]] < tG[1]) GG[-tG[43]] = GG[tG[6]];
+                   else {
+                     pb(GG[-tG[43]] += GG[tG[6]] * tG[27], GG[tG[8]] |= GG[-tG[43]] << GG[tG[9]], GG[tG[9]] += (GG[-tG[43]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+ ... (8 more added lines; see GitHub link above)
```

#### 1776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12702-L12726` → after: `L13150-L13152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13150-L13152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13150-L13152) · [Before (L12702-L12726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12702-L12726)

```diff
-             const Eu = uu[xu[48]] - Math[Zu(xu[132])](uu[xu[19]]);
-             if (Eu <= xu[0]) {
-               function ju(...uu) {
-                 for (XE(uu[xu[4]] = xu[1], uu[xu[52]] = '!ceELoAMlHTaRg`^I3kiuS5sjB*9r{/v<pt=C[+nw7;1x>DZ@"y,]mFz%~VhYUQq_(80)$}Kd?&f.b|#X6NP24G:JOW', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[-xu[51]] = uu[xu[39]].length, uu[-xu[49]] = [], uu[xu[9]] = xu[0], uu[xu[17]] = xu[0], uu … [truncated]
-                   if (uu[xu[26]] = uu[xu[52]].indexOf(uu[xu[39]][uu[-xu[50]]]), uu[xu[26]] !== -xu[1])
-                     if (uu[xu[53]] < xu[0]) uu[xu[53]] = uu[xu[26]];
-                     else {
-                       XE(uu[xu[53]] += uu[xu[26]] * xu[23], uu[xu[9]] |= uu[xu[53]] << uu[xu[17]], uu[xu[17]] += (uu[xu[53]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                       do {
-                         XE(uu[-xu[49]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[17]] -= xu[2])
-                       } while (uu[xu[17]] > xu[19]);
-                       uu[xu[53]] = -xu[1]
-                     } return uu[xu[53]] > -xu[1] && uu[-xu[49]].push((uu[xu[9]] | uu[xu[53]] << uu[xu[17]]) & xu[3]), Hu(uu[-xu[49]])
-               }
- 
-               function su(...uu) {
- ... (9 more removed lines; see GitHub link above)
+             const UG = wG[bG(tG[36])];
+             if (UG[bG(tG[81]) + tG[95]]) UG[bG(122) + bG(123) + bG(tG[171]) + "es"](SG, yG);
+             else {
```

#### 1777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12728-L12730` → after: `L13154-L13156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13154-L13156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13154-L13156) · [Before (L12728-L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12728-L12730)

```diff
-                 for (XE(uu[xu[4]] = xu[1], uu[-xu[58]] = '*KepiDHXdgJU=]Au01lvVwS^<R{;G47Oq>$)BoC6!.b32InQ"_8#/|Ecx@fj&FZy:+M,~P`rWLm}(?5Nst%T9[Yhazk', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[xu[7]] = [], uu[-xu[56]] = xu[0], uu[xu[60]] = xu[0], uu … [truncated]
-                   if (uu[xu[59]] = uu[-xu[58]].indexOf(uu[xu[39]][uu[xu[57]]]), uu[xu[59]] !== -xu[1])
-                     if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[59]];
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = '.MHEKD8><]Or29hijaI7!$,"S=`F6qxTL@J4lV1:GCWgB~|mw+P&0_nzv*p;u{s?(5QX%#dfc}Aktoe)3RYy[^bNZU/', GG[-tG[48]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[-tG[48]].length, GG[tG[10]] = [], GG[-tG[49]] = tG[1], GG[tG[9]] = tG[1], GG … [truncated]
+                   if (GG[tG[26]] = GG[tG[2]].indexOf(GG[-tG[48]][GG[tG[50]]]), GG[tG[26]] !== -tG[2])
+                     if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[26]];
```

#### 1778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12732` → after: `L13158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13158) · [Before (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12732)

```diff
-                       XE(uu[xu[33]] += uu[xu[59]] * xu[23], uu[-xu[56]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                       pb(GG[tG[7]] += GG[tG[26]] * tG[27], GG[-tG[49]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12734-L12737` → after: `L13160-L13163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13160-L13163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13160-L13163) · [Before (L12734-L12737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12734-L12737)

```diff
-                         XE(uu[xu[7]].push(uu[-xu[56]] & xu[3]), uu[-xu[56]] >>= xu[2], uu[xu[60]] -= xu[2])
-                       } while (uu[xu[60]] > xu[19]);
-                       uu[xu[33]] = -xu[1]
-                     } return uu[xu[33]] > -xu[1] && uu[xu[7]].push((uu[-xu[56]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[7]])
+                         pb(GG[tG[10]].push(GG[-tG[49]] & tG[12]), GG[-tG[49]] >>= tG[11], GG[tG[9]] -= tG[11])
+                       } while (GG[tG[9]] > tG[20]);
+                       GG[tG[7]] = -tG[2]
+                     } return GG[tG[7]] > -tG[2] && GG[tG[10]].push((GG[-tG[49]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[tG[10]])
```

#### 1780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12741` → after: `L13167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13167) · [Before (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12741)

```diff
-                 return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Xu(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                 return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = YG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12745` → after: `L13171-L13182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13171-L13182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13171-L13182) · [Before (L12745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12745)

```diff
-                 uu[xu[4]] = xu[0]
+                 pb(GG[tG[13]] = tG[1], GG[tG[4]] = function(...bG) {
+                   return bG[tG[13]] = tG[0], GG[tG[10]]({}, bG[tG[1]], bG[tG[2]])
+                 }, GG[tG[10]] = function(...bG) {
+                   if (pb(bG[tG[13]] = tG[16], bG[tG[5]] = {}), bG[tG[1]][bG[tG[2]] + bG[tG[0]]] !== tG[15]) return bG[tG[1]][bG[tG[2]] + bG[tG[0]]];
+                   if (bG[tG[2]] === bG[tG[0]]) return tG[53];
+                   for (bG[-tG[51]] = tG[1]; bG[-tG[51]] < bG[tG[2]].length; bG[-tG[51]]++) bG[tG[5]][bG[tG[2]][bG[-tG[51]]]] === tG[15] && (bG[tG[5]][bG[tG[2]][bG[-tG[51]]]] = tG[1]), bG[tG[5]][bG[tG[0]][bG[-tG[51]]]] === tG[15] && (bG[tG[5]][bG[tG[0]][bG[-tG[51]]]] = tG[1]), pb( … [truncated]
+                   for (bG[tG[39]] in bG[tG[5]])
+                     if (bG[tG[5]][bG[tG[39]]] !== tG[1]) return bG[tG[1]][bG[tG[2]] + bG[tG[0]]] = tG[52], tG[52];
+                   for (bG[tG[10]] = tG[2]; bG[tG[10]] < bG[tG[2]].length; bG[tG[10]]++)
+                     if (GG[tG[10]](bG[tG[1]], bG[tG[2]].substr(tG[1], bG[tG[10]]), bG[tG[0]].substr(tG[1], bG[tG[10]])) && GG[tG[10]](bG[tG[1]], bG[tG[2]].substr(bG[tG[10]]), bG[tG[0]].substr(bG[tG[10]])) || GG[tG[10]](bG[tG[1]], bG[tG[2]].substr(tG[1], bG[tG[10]]), bG[tG[0]].sub … [truncated]
+                   return bG[tG[1]][bG[tG[2]] + bG[tG[0]]] = tG[52], tG[52]
+                 }, console.log(GG[tG[4]]))
```

#### 1782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12747-L12777` → after: `L13184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13184) · [Before (L12747-L12777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12747-L12777)

```diff
-               return Zu(xu[61]) in Au && qu(), uu[xu[13]][lu(xu[63]) + xu[7]] * Eu
-             }
-             return uu[xu[13]][function(...uu) {
-               return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(...uu) {
-                 for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'By~A6q/hjOFH@;P&EkT7J#$RSe},1o!8vQ0^x9V%2=f<b4|(sziaMY_C]m`+pZdG?L.WwIDlKgnU3:5Xu)[tN*">r{c', uu[xu[43]] = "" + (uu[xu[0]] || ""), uu[-xu[44]] = uu[xu[43]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[47]] = xu[0], uu[x … [truncated]
-                   if (uu[xu[45]] = uu[xu[1]].indexOf(uu[xu[43]][uu[xu[2]]]), uu[xu[45]] !== -xu[1])
-                     if (uu[xu[46]] < xu[0]) uu[xu[46]] = uu[xu[45]];
-                     else {
-                       XE(uu[xu[46]] += uu[xu[45]] * xu[23], uu[xu[27]] |= uu[xu[46]] << uu[xu[47]], uu[xu[47]] += (uu[xu[46]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                       do {
-                         XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[47]] -= xu[2])
-                       } while (uu[xu[47]] > xu[19]);
-                       uu[xu[46]] = -xu[1]
-                     } return uu[xu[46]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[46]] << uu[xu[47]]) & xu[3]), Hu(uu[xu[7]])
-               }(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-             }(xu[284]) + xu[7]]
- ... (15 more removed lines; see GitHub link above)
+               VG(tG[243]) + "I" in xG && pG()
```

#### 1783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12799` → after: `L13187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13187) · [Before (L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12799)

```diff
-           [Zu(144)]: function(...uu) {
+           [LG(tG[41])]: function(...GG) {
```

#### 1784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12801-L12820` → after: `L13189-L13194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13189-L13194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13189-L13194) · [Before (L12801-L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12801-L12820)

```diff
-               return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(...uu) {
-                 for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'u"?@7|~y!5)6+qA0PB4I&rtW[ONza(bUiHQ<:;G/29.d_^fkXmV,Cj=D`sKxE$eS1Mo8gL#vlF]*}Y3nhJcZp{wR>T%', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[13]].length, uu[xu[74]] = [], uu[xu[9]] = xu[0], uu[xu[60]] = xu[0], uu[xu[ … [truncated]
-                   if (uu[xu[66]] = uu[xu[8]].indexOf(uu[xu[13]][uu[-xu[73]]]), uu[xu[66]] !== -xu[1])
-                     if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[66]];
-                     else {
-                       XE(uu[xu[33]] += uu[xu[66]] * xu[23], uu[xu[9]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                       do {
-                         XE(uu[xu[74]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[60]] -= xu[2])
-                       } while (uu[xu[60]] > xu[19]);
-                       uu[xu[33]] = -xu[1]
-                     } return uu[xu[33]] > -xu[1] && uu[xu[74]].push((uu[xu[9]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[74]])
-               }(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-             }
-             Eu(145) + "U" in Au && function(...uu) {
-               function ju(uu) {
-                 var Eu, ju, su, Uu, Zu, Xu, lu, qu = '2x,.{;Uq(YOh"fuzCP6+s#J[a%Q8m_RMd5H9eo<vAFVG!k>Xr&iI=LNB@?]t^/3:Dcw`0yZ4W$E)~T17jKnbpg|S*}l';
- ... (4 more removed lines; see GitHub link above)
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(GG) {
+                 var bG, ZG, wG, SG, LG, yG, kG;
+                 for (pb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = tG[1], LG = tG[1], yG = -tG[2]), kG = tG[1]; kG < ZG; kG++) {
+                   var UG = 'YfUeNIlaZGkctBP0!V%[5K4>ix]3E2q_`g,Fdr9M<hs~yjJC#/+n*;L){&^W18QRH|DvT6A?p7XS:bOmu"$(.=z@}ow'.indexOf(bG[kG]);
+                   if (UG !== -tG[2])
+                     if (yG < tG[1]) yG = UG;
```

#### 1785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12822` → after: `L13196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13196) · [Before (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12822)

```diff
-                       XE(Xu += fu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                       pb(yG += UG * tG[27], SG |= yG << LG, LG += (yG & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12824-L12826` → after: `L13198-L13200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13198-L13200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13198-L13200) · [Before (L12824-L12826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12824-L12826)

```diff
-                         XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                       } while (Zu > xu[19]);
-                       Xu = -xu[1]
+                         pb(wG.push(SG & tG[12]), SG >>= tG[11], LG -= tG[11])
+                       } while (LG > tG[20]);
+                       yG = -tG[2]
```

#### 1787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12829-L12855` → after: `L13203-L13204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13203-L13204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13203-L13204) · [Before (L12829-L12855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12829-L12855)

```diff
-                 return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
-               }
- 
-               function su(...uu) {
-                 return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = ju(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-               }
-               uu[xu[4]] = xu[0], XE(uu[xu[8]] = Eu(xu[108]) + su(147) + su(148) + su(xu[258]) + su(xu[223]) + su(xu[249]) + "om", uu[xu[1]] = su(xu[286]) + su(xu[198]) + su(154) + xu[75], uu[xu[13]] = su(155) + su(156) + su(xu[203]) + xu[113], uu[xu[8]].match(uu[xu[1]] + uu[xu[13 … [truncated]
-             }(), [
-               [uu[xu[8]], uu[xu[39]], uu[xu[6]]], uu[xu[24]]
-             ] = tu;
-             const ju = uu[xu[8]][Eu(xu[76])][Eu(159) + Eu(160) + Eu(xu[42]) + Eu(xu[105])](uu[xu[6]]);
-             return ju === xu[35] ? uu[xu[8]][Eu(xu[76])][Eu(163) + Eu(xu[82]) + Eu(165) + Eu(166)](uu[xu[39]], Eu(xu[77]) + Eu(xu[78])) : ju[Eu(xu[77]) + Eu(xu[78])]
-           },
-           [Zu(169)]: function(...uu) {
-             function Eu(...uu) {
-               return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(...uu) {
- ... (11 more removed lines; see GitHub link above)
+                 return yG > -tG[2] && wG.push((SG | yG << LG) & tG[12]), NG(wG)
+               }(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12857-L12858` → after: `L13206-L13213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13206-L13213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13206-L13213) · [Before (L12857-L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12857-L12858)

```diff
-             Eu(170) + xu[162] in Au && function() {
-               ! function(...uu) {
+             bG(tG[112]) in xG && function(...GG) {
+               pb(GG[tG[13]] = tG[1], GG[tG[5]] = function() {
+                 var GG, bG, ZG = tG[1];
+ 
+                 function wG(GG) {
+                   return YG(kG(fG(GG)))
+                 }
+ 
```

#### 1789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12860-L12869` → after: `L13215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13215) · [Before (L12860-L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12860-L12869)

```diff
-                   for (XE(uu[xu[4]] = xu[1], uu[-xu[80]] = '!cG_8%[v0jotM1suayi]5S2p9?#NW.=Zk{h:m34$J}IP|lQK6V&>BCARxbUOF~rEz/`w"qH@()*7^efDL+X<n,dTYg;', uu[-xu[81]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[-xu[81]].length, uu[xu[14]] = [], uu[xu[27]] = xu[0], uu[xu[82]] = xu[0] … [truncated]
-                     if (uu[xu[66]] = uu[-xu[80]].indexOf(uu[-xu[81]][uu[-xu[76]]]), uu[xu[66]] !== -xu[1])
-                       if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[66]];
-                       else {
-                         XE(uu[xu[33]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[xu[82]], uu[xu[82]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                         do {
-                           XE(uu[xu[14]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[82]] -= xu[2])
-                         } while (uu[xu[82]] > xu[19]);
-                         uu[xu[33]] = -xu[1]
-                       } return uu[xu[33]] > -xu[1] && uu[xu[14]].push((uu[xu[27]] | uu[xu[33]] << uu[xu[82]]) & xu[3]), Hu(uu[xu[14]])
+                   return GG[tG[13]] = tG[0], YG(UG(fG(GG[tG[1]]), fG(GG[tG[2]])))
```

#### 1790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12873` → after: `L13219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13219) · [Before (L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12873)

```diff
-                   return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = ju(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                   return GG[tG[13]] = tG[0], VG(UG(fG(GG[tG[1]]), fG(GG[tG[2]])))
```

#### 1791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12877-L12878` → after: `L13223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13223) · [Before (L12877-L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12877-L12878)

```diff
-                   for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = [], uu[-xu[84]] = xu[0], uu[-xu[83]] = uu[xu[0]].length, uu[xu[14]] = xu[12], uu[xu[9]] = xu[12]); uu[-xu[84]] < uu[-xu[83]];) XE(uu[xu[14]] = uu[xu[0]].charCodeAt(uu[-xu[84]]++), uu[xu[14]] >= xu[87] && uu[xu[14]] <= xu[12 … [truncated]
-                   return uu[xu[1]]
+                   return GG[tG[13]] = tG[16], pG(UG(fG(GG[tG[1]]), fG(GG[tG[2]])), GG[tG[0]])
```

#### 1792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12882-L12883` → after: `L13227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13227) · [Before (L12882-L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12882-L12883)

```diff
-                   for (XE(Eu[xu[4]] = xu[1], Eu[xu[8]] = Eu[xu[0]].length, Eu[xu[13]] = -xu[1], Eu[-xu[27]] = xu[12], Eu[xu[14]] = ""); ++Eu[xu[13]] < Eu[xu[8]];) Eu[-xu[27]] = Eu[xu[0]][Eu[xu[13]]], Eu[-xu[27]] > xu[125] && XE(Eu[-xu[27]] -= xu[86], Eu[xu[14]] += uu[xu[1]](Eu[-x … [truncated]
-                   return Eu[xu[14]]
+                   return GG[tG[13]] = tG[2], KG(uG(QG(GG[tG[1]]), GG[tG[1]].length * tG[11]))
```

#### 1793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12886-L12903` → after: `L13230-L13324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13230-L13324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13230-L13324) · [Before (L12886-L12903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12886-L12903)

```diff
-                 function Xu(uu) {
-                   if (uu >= xu[87] && uu <= xu[126]) {
-                     function ju(uu) {
-                       var Eu, ju, su, Uu, Zu, Xu, lu, qu = 'aAPHlfBb3G/n[qsK^]pg56;R_d#LCTm}Dh7ZF+>i`M=vEOuI%VjXSx.(Q@<?w*&9UoNcYkWJret2:~4)!1|"80yz,{$';
-                       for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-                         var fu = qu.indexOf(Eu[lu]);
-                         if (fu !== -xu[1])
-                           if (Xu < xu[0]) Xu = fu;
-                           else {
-                             XE(Xu += fu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                             do {
-                               XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                             } while (Zu > xu[19]);
-                             Xu = -xu[1]
-                           }
-                       }
- ... (2 more removed lines; see GitHub link above)
+                 function UG(...GG) {
+                   function bG(...GG) {
+                     for (pb(GG[tG[13]] = tG[2], GG[-tG[59]] = 'EKgZTQWbHhclmsGRtILkVdOrfeoqMJnSa%`D<AX3u@8p]zB"~CiYFjP2N^(/1+)#9,|7y.=}[0;5w:&?x{!6_$v*4U>', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[58]] = GG[tG[23]].length, GG[tG[10]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1] … [truncated]
+                       if (GG[tG[6]] = GG[-tG[59]].indexOf(GG[tG[23]][GG[tG[11]]]), GG[tG[6]] !== -tG[2])
+                         if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[6]];
+                         else {
+                           pb(GG[tG[7]] += GG[tG[6]] * tG[27], GG[tG[39]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                           do {
+                             pb(GG[tG[10]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                           } while (GG[tG[9]] > tG[20]);
+                           GG[tG[7]] = -tG[2]
+                         } return GG[tG[7]] > -tG[2] && GG[tG[10]].push((GG[tG[39]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[tG[10]])
+                   }
+ 
+                   function ZG(...GG) {
+                     return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = bG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+ ... (79 more added lines; see GitHub link above)
```

#### 1794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12905-L12909` → after: `L13326-L13327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13326-L13327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13326-L13327) · [Before (L12905-L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12905-L12909)

```diff
-                     function su(uu) {
-                       return typeof Vu[uu] === xu[10] ? Vu[uu] = ju(ru[uu]) : Vu[uu]
-                     }
-                     throw Error(Eu(171) + Eu(xu[95]) + su(xu[254]) + uu.toString(xu[127]).toUpperCase() + (su(xu[183]) + su(175) + su(xu[199]) + su(xu[37])))
-                   }
+                 function hG(...GG) {
+                   return GG[tG[13]] = tG[0], GG[tG[1]] >>> GG[tG[2]] | GG[tG[1]] << tG[87] - GG[tG[2]]
```

#### 1795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12913` → after: `L13331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13331) · [Before (L12913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12913)

```diff
-                   return Eu[xu[4]] = xu[13], uu[xu[1]](Eu[xu[0]] >> Eu[xu[1]] & xu[16] | xu[63])
+                   return GG[tG[13]] = tG[0], GG[tG[1]] >>> GG[tG[2]]
```

#### 1796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12916-L12918` → after: `L13334-L13335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13334-L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13334-L13335) · [Before (L12916-L12918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12916-L12918)

```diff
-                 function qu(Eu) {
-                   var ju;
-                   return (Eu & xu[128]) == xu[0] ? uu[xu[1]](Eu) : (ju = "", (Eu & xu[129]) == xu[0] ? ju = uu[xu[1]](Eu >> xu[17] & xu[89] | xu[98]) : (Eu & xu[130]) == xu[0] ? XE(Xu(Eu), ju = uu[xu[1]](Eu >> xu[20] & xu[90] | xu[44]), ju += lu(Eu, xu[17])) : (Eu & xu[131]) == x … [truncated]
+                 function JG(...GG) {
+                   return GG[tG[13]] = tG[16], GG[tG[1]] & GG[tG[2]] ^ ~GG[tG[1]] & GG[tG[0]]
```

#### 1797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12922-L12923` → after: `L13339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13339) · [Before (L12922-L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12922-L12923)

```diff
-                   for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = Uu(uu[xu[0]]), uu[xu[39]] = uu[xu[1]].length, uu[xu[92]] = -xu[1], uu[-xu[93]] = xu[12], uu[xu[94]] = ""); ++uu[xu[92]] < uu[xu[39]];) XE(uu[-xu[93]] = uu[xu[1]][uu[xu[92]]], uu[xu[94]] += qu(uu[-xu[93]]));
-                   return uu[xu[94]]
+                   return GG[tG[13]] = tG[16], GG[tG[1]] & GG[tG[2]] ^ GG[tG[1]] & GG[tG[0]] ^ GG[tG[2]] & GG[tG[0]]
```

#### 1798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12927-L12942` → after: `L13343-L13344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13343-L13344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13343-L13344) · [Before (L12927-L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12927-L12942)

```diff
-                   function ju(uu) {
-                     var Eu, ju, su, Uu, Zu, Xu, lu, qu = 'qM&"()WC>Usrdme4`gKpHYIn*N<JlQf/D3ZkG5Lx:?.SXtBj=;Foib1PzV+2Aa~$[]T9!yE8cwh67O|%@,v{#u}_0^R';
-                     for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-                       var fu = qu.indexOf(Eu[lu]);
-                       if (fu !== -xu[1])
-                         if (Xu < xu[0]) Xu = fu;
-                         else {
-                           XE(Xu += fu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                           do {
-                             XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                           } while (Zu > xu[19]);
-                           Xu = -xu[1]
-                         }
-                     }
-                     return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
-                   }
+                   return GG[tG[13]] = tG[2], hG(GG[tG[1]], tG[0]) ^ hG(GG[tG[1]], tG[30]) ^ hG(GG[tG[1]], tG[265])
+                 }
```

#### 1799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12944-L12959` → after: `L13346-L13348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13346-L13348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13346-L13348) · [Before (L12944-L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12944-L12959)

```diff
-                   function su(uu) {
-                     return typeof Vu[uu] === xu[10] ? Vu[uu] = ju(ru[uu]) : Vu[uu]
-                   }
-                   if (Eu[xu[4]] = xu[0], uu[xu[13]] >= uu[xu[6]]) {
-                     function Uu(...uu) {
-                       for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'jcCQSVhfemEYaTG~pJ*IuKF|Ag<,Lilt5o(M^U+}P1Dk)rX2H;NB${v]b#/sOW3RZ>qd:9z&!y@0_6`w=84.?x%[7n"', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[96]] = uu[xu[39]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[xu[17]] = xu[0], … [truncated]
-                         if (uu[-xu[54]] = uu[xu[1]].indexOf(uu[xu[39]][uu[xu[2]]]), uu[-xu[54]] !== -xu[1])
-                           if (uu[-xu[95]] < xu[0]) uu[-xu[95]] = uu[-xu[54]];
-                           else {
-                             XE(uu[-xu[95]] += uu[-xu[54]] * xu[23], uu[xu[9]] |= uu[-xu[95]] << uu[xu[17]], uu[xu[17]] += (uu[-xu[95]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                             do {
-                               XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[17]] -= xu[2])
-                             } while (uu[xu[17]] > xu[19]);
-                             uu[-xu[95]] = -xu[1]
-                           } return uu[-xu[95]] > -xu[1] && uu[xu[14]].push((uu[xu[9]] | uu[-xu[95]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[14]])
-                     }
+                 function EG(...GG) {
+                   return GG[tG[13]] = tG[2], hG(GG[tG[1]], tG[18]) ^ hG(GG[tG[1]], tG[320]) ^ hG(GG[tG[1]], 25)
+                 }
```

#### 1800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12961-L12967` → after: `L13350-L13351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13350-L13351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13350-L13351) · [Before (L12961-L12967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12961-L12967)

```diff
-                     function Zu(uu) {
-                       return typeof Vu[uu] === xu[10] ? Vu[uu] = Uu(ru[uu]) : Vu[uu]
-                     }
-                     throw Error(Zu(xu[232]))
-                   }
-                   if (XE(Eu[xu[97]] = uu[xu[7]][uu[xu[13]]] & xu[3], uu[xu[13]]++), (Eu[xu[97]] & xu[98]) == xu[63]) return Eu[xu[97]] & xu[16];
-                   throw Error(su(179))
+                 function oG(...GG) {
+                   return GG[tG[13]] = tG[2], hG(GG[tG[1]], tG[20]) ^ hG(GG[tG[1]], tG[84]) ^ dG(GG[tG[1]], tG[16])
```

#### 1801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12971-L12992` → after: `L13355-L13356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13355-L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13355-L13356) · [Before (L12971-L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12971-L12992)

```diff
-                   if (XE(ju[xu[4]] = xu[0], ju[xu[39]] = xu[12], ju[xu[99]] = xu[12], ju[xu[7]] = xu[12], ju[xu[24]] = xu[12], ju[xu[60]] = xu[12]), uu[xu[13]] > uu[xu[6]]) throw Error(Eu(xu[250]));
-                   if (uu[xu[13]] == uu[xu[6]]) return xu[62];
-                   if (XE(ju[xu[39]] = uu[xu[7]][uu[xu[13]]] & xu[3], uu[xu[13]]++), (ju[xu[39]] & xu[63]) == xu[0]) return ju[xu[39]];
-                   if ((ju[xu[39]] & xu[44]) == xu[98]) {
-                     if (XE(ju[xu[99]] = Cu(), ju[xu[60]] = (ju[xu[39]] & xu[89]) << xu[17] | ju[xu[99]]), ju[xu[60]] >= xu[63]) return ju[xu[60]];
-                     throw Error(Eu(181))
-                   }
-                   if ((ju[xu[39]] & xu[100]) == xu[44]) {
-                     if (XE(ju[xu[99]] = Cu(), ju[xu[7]] = Cu(), ju[xu[60]] = (ju[xu[39]] & xu[90]) << xu[20] | ju[xu[99]] << xu[17] | ju[xu[7]]), ju[xu[60]] >= xu[135]) return Xu(ju[xu[60]]), ju[xu[60]];
-                     {
-                       function su(...uu) {
-                         for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'r%+J[5BnX:GY^{UQ~m}Ve@h|.9&D$<07wvoR?3NLklab,/#`"c*EIK)AZ8Mgq_=ySOpzi16HxCT4FjtsPf]>d(;u!2W', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[39]].length, uu[-xu[101]] = [], uu[xu[9]] = xu[0], uu[xu[17]] = xu[ … [truncated]
-                           if (uu[xu[66]] = uu[xu[8]].indexOf(uu[xu[39]][uu[xu[57]]]), uu[xu[66]] !== -xu[1])
-                             if (uu[-xu[93]] < xu[0]) uu[-xu[93]] = uu[xu[66]];
-                             else {
-                               XE(uu[-xu[93]] += uu[xu[66]] * xu[23], uu[xu[9]] |= uu[-xu[93]] << uu[xu[17]], uu[xu[17]] += (uu[-xu[93]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
- ... (6 more removed lines; see GitHub link above)
+                   return GG[tG[13]] = tG[2], hG(GG[tG[1]], 17) ^ hG(GG[tG[1]], tG[89]) ^ dG(GG[tG[1]], tG[88])
+                 }
```

#### 1802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12994-L12998` → after: `L13358-L13362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13358-L13362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13358-L13362) · [Before (L12994-L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L12994-L12998)

```diff
-                       function Uu(...uu) {
-                         return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = su(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-                       }
-                       throw Error(Uu(182))
-                     }
+                 function uG(...GG) {
+                   var ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG;
+                   for (pb(GG[tG[13]] = tG[0], GG[tG[79]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), GG[-tG[91]] = new Array(tG[90])), pb(GG[tG[1]][GG[tG[2]] >> tG[39]] |= tG[57] << tG[85] - GG[tG[2]] % tG[87], GG … [truncated]
+                     for (pb(ZG = GG[tG[79]][tG[1]], wG = GG[tG[79]][tG[2]], SG = GG[tG[79]][tG[0]], LG = GG[tG[79]][tG[16]], yG = GG[tG[79]][tG[37]], kG = GG[tG[79]][tG[39]], UG = GG[tG[79]][tG[18]], YG = GG[tG[79]][tG[20]]), pG = tG[1]; pG < tG[90]; pG++) pb(pG < tG[61] ? GG[-tG … [truncated]
+                     pb(GG[tG[79]][tG[1]] = iG(ZG, GG[tG[79]][tG[1]]), GG[tG[79]][tG[2]] = iG(wG, GG[tG[79]][tG[2]]), GG[tG[79]][tG[0]] = iG(SG, GG[tG[79]][tG[0]]), GG[tG[79]][tG[16]] = iG(LG, GG[tG[79]][tG[16]]), GG[tG[79]][tG[37]] = iG(yG, GG[tG[79]][tG[37]]), GG[tG[79]][tG[39]] … [truncated]
```

#### 1803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13000-L13001` → after: `L13364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13364) · [Before (L13000-L13001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13000-L13001)

```diff
-                   if ((ju[xu[39]] & xu[137]) == xu[100] && (XE(ju[xu[99]] = Cu(), ju[xu[7]] = Cu(), ju[xu[24]] = Cu(), ju[xu[60]] = (ju[xu[39]] & xu[19]) << xu[91] | ju[xu[99]] << xu[20] | ju[xu[7]] << xu[17] | ju[xu[24]]), ju[xu[60]] >= xu[86] && ju[xu[60]] <= xu[138])) return j … [truncated]
-                   throw Error(Eu(183))
+                   return GG[tG[79]]
```

#### 1804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13005-L13007` → after: `L13368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13368) · [Before (L13005-L13007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13005-L13007)

```diff
-                   for (XE(Eu[xu[4]] = xu[1], uu[xu[7]] = Uu(Eu[xu[0]]), uu[xu[6]] = uu[xu[7]].length, uu[xu[13]] = xu[0], Eu[xu[1]] = [], Eu[xu[13]] = xu[12]);
-                     (Eu[xu[13]] = bu()) !== xu[62];) Eu[xu[1]].push(Eu[xu[13]]);
-                   return Zu(Eu[xu[1]])
+                   return pb(GG[tG[13]] = tG[0], GG[tG[0]] = (GG[tG[1]] & tG[92]) + (GG[tG[2]] & tG[92]), GG[tG[23]] = (GG[tG[1]] >> tG[61]) + (GG[tG[2]] >> tG[61]) + (GG[tG[0]] >> tG[61])), GG[tG[23]] << tG[61] | GG[tG[0]] & tG[92]
```

#### 1805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13009-L13047` → after: `L13370-L13388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13370-L13388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13370-L13388) · [Before (L13009-L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13009-L13047)

```diff
-                 uu[xu[4]] = xu[1], uu[xu[1]] = String.fromCharCode, XE(uu[xu[7]] = xu[12], uu[xu[6]] = xu[12], uu[xu[13]] = xu[12]), XE(uu[xu[0]].version = su(184), uu[xu[0]].encode = fu, uu[xu[0]].decode = cu)
-               }(typeof exports === Eu(185) + Eu(xu[102]) ? this.utf8 = {} : exports)
-             }(), [uu[-xu[103]], uu[xu[99]], uu[xu[13]]] = tu;
-             const ju = uu[-xu[103]][Eu(xu[257])];
-             ju[Eu(188) + xu[104]] && ju[Eu(189) + Eu(190) + Eu(191)](uu[xu[99]], uu[xu[13]])
-           }
-         }), Eu === Zu(xu[98]) + Zu(193) && (tu = []), Eu === Zu(194) + Zu(xu[253])) {
-         function qu(...uu) {
-           for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = '+A;^BuTh3s~24J7)vWfHxODm@9?ewC1tPno*R5=qlr|.XNkE!I%Za6/iQU>yFz:KVp,_L[08#jY<d}G&]"(`${SMgcb', uu[-xu[105]] = "" + (uu[xu[0]] || ""), uu[xu[43]] = uu[-xu[105]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], uu[xu[1 … [truncated]
-             if (uu[xu[66]] = uu[xu[1]].indexOf(uu[-xu[105]][uu[xu[57]]]), uu[xu[66]] !== -xu[1])
-               if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[66]];
-               else {
-                 XE(uu[xu[19]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[19]] << uu[xu[17]], uu[xu[17]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                 do {
-                   XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-                 } while (uu[xu[17]] > xu[19]);
- ... (23 more removed lines; see GitHub link above)
+                 return GG = "", bG = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604 … [truncated]
+                   hex: wG,
+                   b64: LG,
+                   any: yG,
+                   hex_hmac: SG,
+                   b64_hmac: LG,
+                   any_hmac: yG
+                 }
+               }(), console.log(GG[tG[5]]))
+             }(), [
+               [GG[tG[93]], GG[tG[2]], GG[-tG[94]]], GG[tG[16]]
+             ] = HG;
+             const ZG = GG[tG[93]][bG(tG[94])];
+             if (ZG[bG(tG[80]) + tG[95]]) ZG[bG(tG[70]) + bG(tG[38]) + bG(146)](GG[tG[2]], GG[-tG[94]]);
+             else {
+               function wG(...GG) {
+ ... (3 more added lines; see GitHub link above)
```

#### 1806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13049-L13051` → after: `L13390-L13430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13390-L13430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13390-L13430) · [Before (L13049-L13051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13049-L13051)

```diff
-           }
-           uu[xu[4]] = xu[0], XE(uu[xu[95]] = Eu([xu[13], xu[14]]), uu[xu[108]] = Eu([xu[1], xu[13]]), uu[xu[6]] = uu[xu[95]] + uu[xu[108]], uu[xu[109]] = uu[xu[6]] - uu[xu[108]], uu[xu[14]] = uu[xu[109]] * xu[13], uu[xu[60]] = uu[xu[14]] / xu[13], console.log(ju(uu[xu[6]])), cons … [truncated]
-         }
+           },
+           [LG(tG[54])]: function(...GG) {
+             function bG(...GG) {
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(...GG) {
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[97]] = 'c1DsqCJ(a|Q7uOv).$h/9!T~+%}b#ZdEV`:jXI^p4lUr*BYG&28"]Ry>H3zx0MNWP_m@,kL{et5finwA6gSo[;?<K=F', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[23]].length, GG[tG[100]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1], GG … [truncated]
+                   if (GG[tG[99]] = GG[tG[97]].indexOf(GG[tG[23]][GG[-tG[98]]]), GG[tG[99]] !== -tG[2])
+                     if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[99]];
+                     else {
+                       pb(GG[tG[7]] += GG[tG[99]] * tG[27], GG[tG[8]] |= GG[tG[7]] << GG[tG[18]], GG[tG[18]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                       do {
+                         pb(GG[tG[100]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                       } while (GG[tG[18]] > tG[20]);
+                       GG[tG[7]] = -tG[2]
+                     } return GG[tG[7]] > -tG[2] && GG[tG[100]].push((GG[tG[8]] | GG[tG[7]] << GG[tG[18]]) & tG[12]), NG(GG[tG[100]])
+               }(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+             }
+ ... (25 more added lines; see GitHub link above)
```

#### 1807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13053-L13054` → after: `L13432-L13434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13432-L13434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13432-L13434) · [Before (L13053-L13054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13053-L13054)

```diff
-         function bu(...Eu) {
-           var ju;
+               function yG(GG) {
+                 return typeof PG[GG] === tG[14] ? PG[GG] = SG(MG[GG]) : PG[GG]
+               }
```

#### 1808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13056-L13069` → after: `L13436-L13441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13436-L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13436-L13441) · [Before (L13056-L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13056-L13069)

```diff
-           function Uu(...uu) {
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(uu) {
-               var Eu, ju, su, Uu, Zu, Xu, lu;
-               for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-                 var qu = 'sWKbjRcAtkToPmrdVLGNnMhap[$|IE*;XFS<8e6`%JBlUZ!5u^fqCv,0DH]YzQ:O1/g9x(@>2")~?w.4+#_}=y37{&i'.indexOf(Eu[lu]);
-                 if (qu !== -xu[1])
-                   if (Xu < xu[0]) Xu = qu;
-                   else {
-                     XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                     do {
-                       XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                     } while (Zu > xu[19]);
-                     Xu = -xu[1]
-                   }
+               function kG(...GG) {
+                 pb(GG[tG[13]] = tG[1], GG[tG[5]] = function(...bG) {
+                   return pb(bG[tG[13]] = tG[16], bG[tG[106]] = {}), bG[tG[0]].length !== bG[tG[1]].length + bG[tG[2]].length ? tG[52] : GG[tG[107]](bG[tG[1]], bG[tG[2]], bG[tG[0]], tG[1], tG[1], tG[1], bG[tG[106]])
+                 }, GG[tG[107]] = function(...bG) {
+                   return pb(bG[tG[13]] = tG[20], bG[-tG[73]] = tG[52]), bG[tG[39]] >= bG[tG[0]].length ? tG[53] : bG[tG[18]]["" + bG[tG[16]] + bG[tG[37]] + bG[tG[39]]] !== tG[15] ? bG[tG[18]]["" + bG[tG[16]] + bG[tG[37]] + bG[tG[39]]] : (bG[tG[0]][bG[tG[39]]] === bG[tG[1]][bG[tG[ … [truncated]
+                 }, console.log(GG[tG[5]]))
```

#### 1809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13071-L13076` → after: `L13443-L13446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13443-L13446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13443-L13446) · [Before (L13071-L13076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13071-L13076)

```diff
-               return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
-             }(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-           }
-           if (Eu[xu[4]] = xu[0], Uu(197) + "j" in Au && (module.exports = async (uu = () => {
-               throw new Error(Uu(xu[94]))
-             }) => {
+               return void(yG(tG[122]) + "7" in xG && kG())
+             }
+             const ZG = Math[bG(tG[304])](GG[tG[37]]);
+             if (ZG <= GG[tG[0]][bG(tG[42]) + tG[111]]) {
```

#### 1810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13078-L13080` → after: `L13448-L13450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13448-L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13448-L13450) · [Before (L13078-L13080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13078-L13080)

```diff
-                 for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'uNrLohI!e1tHDz"qvMb4p+[sV]_>%8S=*Gx|Z?&U{X:c`#g~}YnQdJw/3$T<E)WAjC2^6R;yP90a,5Bf@Kk(7mF.Oli', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[xu[110]] = [], uu[xu[9]] = xu[0], uu[xu[60]] = xu[0], uu[x … [truncated]
-                   if (uu[xu[66]] = uu[xu[8]].indexOf(uu[xu[39]][uu[xu[2]]]), uu[xu[66]] !== -xu[1])
-                     if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[66]];
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[108]] = '2918yx>;[0|!"7=3%u]sLAIZfSVNrtdRlpYPWnbBhQa^5UOimC{T&JD~g<E#ezMK)oqj@H:Fk.G6X4c_v+w`?(}/$*,', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[0]].length, GG[tG[37]] = [], GG[tG[39]] = tG[1], GG[tG[41]] = tG[1], GG[ … [truncated]
+                   if (GG[tG[26]] = GG[tG[108]].indexOf(GG[tG[0]][GG[tG[3]]]), GG[tG[26]] !== -tG[2])
+                     if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[26]];
```

#### 1811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13082` → after: `L13452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13452) · [Before (L13082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13082)

```diff
-                       XE(uu[xu[33]] += uu[xu[66]] * xu[23], uu[xu[9]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                       pb(GG[tG[7]] += GG[tG[26]] * tG[27], GG[tG[39]] |= GG[tG[7]] << GG[tG[41]], GG[tG[41]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13084-L13087` → after: `L13454-L13457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13454-L13457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13454-L13457) · [Before (L13084-L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13084-L13087)

```diff
-                         XE(uu[xu[110]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[60]] -= xu[2])
-                       } while (uu[xu[60]] > xu[19]);
-                       uu[xu[33]] = -xu[1]
-                     } return uu[xu[33]] > -xu[1] && uu[xu[110]].push((uu[xu[9]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[110]])
+                         pb(GG[tG[37]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[41]] -= tG[11])
+                       } while (GG[tG[41]] > tG[20]);
+                       GG[tG[7]] = -tG[2]
+                     } return GG[tG[7]] > -tG[2] && GG[tG[37]].push((GG[tG[39]] | GG[tG[7]] << GG[tG[41]]) & tG[12]), NG(GG[tG[37]])
```

#### 1813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13091` → after: `L13461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13461) · [Before (L13091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13091)

```diff
-                 return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Eu(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                 return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = UG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13093-L13096` → after: `L13463-L13477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13463-L13477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13463-L13477) · [Before (L13093-L13096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13093-L13096)

```diff
-               const su = new Set(process.argv.slice(xu[13]));
-               if (!su.has(ju(199))) {
-                 if (su.size !== xu[1]) return xu[62];
-                 if (!su.has("-v")) return xu[62]
+ 
+               function VG(...GG) {
+                 pb(GG[tG[13]] = tG[1], GG[tG[5]] = function(...GG) {
+                   for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = GG[tG[1]].length, GG[tG[110]] = [], GG[tG[109]] = tG[1], GG[tG[37]] = tG[1], GG[tG[1]].sort(((GG, bG) => GG - bG))), GG[tG[39]] = tG[1]; GG[tG[39]] < GG[tG[2]]; GG[tG[39]]++)
+                     if (!(GG[tG[39]] > tG[1] && GG[tG[1]][GG[tG[39]]] === GG[tG[1]][GG[tG[39]] - tG[2]]))
+                       for (pb(GG[tG[109]] = GG[tG[39]] + tG[2], GG[tG[37]] = GG[tG[2]] - tG[2]); GG[tG[109]] < GG[tG[37]];)
+                         if (GG[tG[1]][GG[tG[39]]] + GG[tG[1]][GG[tG[109]]] + GG[tG[1]][GG[tG[37]]] < tG[1]) GG[tG[109]]++;
+                         else if (GG[tG[1]][GG[tG[39]]] + GG[tG[1]][GG[tG[109]]] + GG[tG[1]][GG[tG[37]]] > tG[1]) GG[tG[37]]--;
+                   else {
+                     for (GG[tG[110]].push([GG[tG[1]][GG[tG[39]]], GG[tG[1]][GG[tG[109]]], GG[tG[1]][GG[tG[37]]]]); GG[tG[109]] < GG[tG[37]] && GG[tG[1]][GG[tG[109]]] === GG[tG[1]][GG[tG[109]] + tG[2]];) GG[tG[109]]++;
+                     for (; GG[tG[109]] < GG[tG[37]] && GG[tG[1]][GG[tG[37]]] === GG[tG[1]][GG[tG[37]] - tG[2]];) GG[tG[37]]--;
+                     pb(GG[tG[109]]++, GG[tG[37]]--)
+                   }
+                   return GG[tG[110]]
+                 }, console.log(GG[tG[5]]))
```

#### 1815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13098-L13110` → after: `L13479-L13552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13479-L13552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13479-L13552) · [Before (L13098-L13110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13098-L13110)

```diff
-               return await (async (Eu, ju) => {
-                 function su(...uu) {
-                   for (XE(uu[xu[4]] = xu[1], uu[-xu[111]] = 'wLApiydV9o)5#0B!mKk|jbqt{.$T2&O}DW3vRn[Xs4FZ@lga"NfU%uMCGz+:E(rcH~8J6]?/eS_^7;xQ=h1,*I><PY`', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[39]].length, uu[-xu[112]] = [], uu[xu[76]] = xu[0], uu[xu[60]] = xu[0] … [truncated]
-                     if (uu[xu[66]] = uu[-xu[111]].indexOf(uu[xu[39]][uu[xu[57]]]), uu[xu[66]] !== -xu[1])
-                       if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[66]];
-                       else {
-                         XE(uu[xu[33]] += uu[xu[66]] * xu[23], uu[xu[76]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                         do {
-                           XE(uu[-xu[112]].push(uu[xu[76]] & xu[3]), uu[xu[76]] >>= xu[2], uu[xu[60]] -= xu[2])
-                         } while (uu[xu[60]] > xu[19]);
-                         uu[xu[33]] = -xu[1]
-                       } return uu[xu[33]] > -xu[1] && uu[-xu[112]].push((uu[xu[76]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[-xu[112]])
-                 }
+               return void(YG(154) in xG && VG())
+             }
+             const wG = Math[bG(tG[287])]((ZG - GG[tG[0]][bG(tG[42]) + tG[111]]) * GG[tG[0]][bG(tG[238]) + bG(tG[337]) + bG(158)], GG[tG[0]][bG(tG[151]) + bG(tG[91])]);
+             GG[tG[103]][bG(tG[60])][bG(tG[48])](GG[tG[23]], wG, GG[tG[0]][bG(tG[34]) + bG(tG[165])])
+           },
+           [LG(tG[156])]: function(...GG) {
+             function bG(...GG) {
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(...GG) {
+                 for (pb(GG[tG[13]] = tG[2], GG[-tG[112]] = '914@[#8_{FLGKZmI7Q"]Aft/>OhkSMc}0a*ngioU$%!WPNlzy+2J).(RVB<=ebj`r,^dx5D;Cw~q:s6XvY|EH&3?puT', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[113]] = GG[tG[23]].length, GG[tG[37]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1],  … [truncated]
+                   if (GG[tG[26]] = GG[-tG[112]].indexOf(GG[tG[23]][GG[tG[103]]]), GG[tG[26]] !== -tG[2])
+                     if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[26]];
+                     else {
+                       pb(GG[tG[20]] += GG[tG[26]] * tG[27], GG[tG[8]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                       do {
+                         pb(GG[tG[37]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                       } while (GG[tG[18]] > tG[20]);
+ ... (58 more added lines; see GitHub link above)
```

#### 1816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13112-L13117` → after: `L13554-L13556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13554-L13556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13554-L13556) · [Before (L13112-L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13112-L13117)

```diff
-                 function Uu(...uu) {
-                   return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = su(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-                 }
-                 return ju === await uu() ? Uu(202) + "l)" : ""
-               })(), xu[68]
-             }), XE(ju = function(...Eu) {
+         function VG(...bG) {
+           var ZG;
+           if (pb(bG[tG[13]] = tG[1], ZG = function(...bG) {
```

#### 1817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13119` → after: `L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13558) · [Before (L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13119)

```diff
-             }, Eu[-xu[16]] = su[uu]), Eu[-xu[16]]) {
+             }, bG[-tG[130]] = wG[GG]), bG[-tG[130]]) {
```

#### 1818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13121-L13134` → after: `L13560-L13581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13560-L13581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13560-L13581) · [Before (L13121-L13134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13121-L13134)

```diff
-               var Eu;
-               XE(uu[xu[4]] = xu[0], Eu = function(uu) {
-                 XE(this.Mb = uu, this.length = xu[0], this.map = {}, this.head = xu[35], this.tail = xu[35])
-               }, Eu.prototype.get = function(...uu) {
-                 var Eu;
-                 return XE(uu[xu[4]] = xu[1], Eu = this.map[uu[xu[0]]]), Eu ? (this.remove(Eu), this.insert(Eu.key, Eu.val), Eu.val) : -xu[1]
-               }, Eu.prototype.put = function(...uu) {
-                 XE(uu[xu[4]] = xu[13], this.map[uu[xu[0]]] ? (this.remove(this.map[uu[xu[0]]]), this.insert(uu[xu[0]], uu[xu[1]])) : this.length === this.Mb ? (this.remove(this.head), this.insert(uu[xu[0]], uu[xu[1]])) : (this.insert(uu[xu[0]], uu[xu[1]]), this.length++))
-               }, Eu.prototype.remove = function(uu) {
-                 var Eu, ju = uu.prev;
-                 (Eu = uu.next) && (Eu.prev = ju), ju && (ju.next = Eu), this.head === uu && (this.head = Eu), this.tail === uu && (this.tail = ju), delete this.map[uu.key]
-               }, Eu.prototype.insert = function(...uu) {
-                 XE(uu[xu[4]] = xu[13], uu[xu[70]] = new List(uu[xu[0]], uu[xu[1]]), this.tail ? (this.tail.next = uu[xu[70]], uu[xu[70]].prev = this.tail, this.tail = uu[xu[70]]) : (this.tail = uu[xu[70]], this.head = uu[xu[70]]), this.map[uu[xu[0]]] = uu[xu[70]])
-               }, console.log(Eu))
+               for (pb(GG[tG[13]] = tG[2], GG[tG[73]] = 'UqPWHVKxDp!%+38&vGOAtfakgrJbTRMenmsjcIhQiBZS/F}9<dXN=Col?E5*L^z1:uw[~`_y4.>0{2|7#(])6$,";Y@', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[132]] = GG[tG[0]].length, GG[tG[37]] = [], GG[tG[84]] = tG[1], GG[tG[18]] = tG[1], GG[tG … [truncated]
+                 if (GG[tG[6]] = GG[tG[73]].indexOf(GG[tG[0]][GG[tG[131]]]), GG[tG[6]] !== -tG[2])
+                   if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[6]];
+                   else {
+                     pb(GG[tG[20]] += GG[tG[6]] * tG[27], GG[tG[84]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                     do {
+                       pb(GG[tG[37]].push(GG[tG[84]] & tG[12]), GG[tG[84]] >>= tG[11], GG[tG[18]] -= tG[11])
+                     } while (GG[tG[18]] > tG[20]);
+                     GG[tG[20]] = -tG[2]
+                   } return GG[tG[20]] > -tG[2] && GG[tG[37]].push((GG[tG[84]] | GG[tG[20]] << GG[tG[18]]) & tG[12]), NG(GG[tG[37]])
+             }
+ 
+             function LG(...GG) {
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = SG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+             }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 1819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13136` → after: `L13583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13583) · [Before (L13136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13136)

```diff
-             Uu(xu[79]) in Au && Zu(), Eu[-xu[16]]
+             LG(194) in xG && yG(), bG[-tG[130]]
```

#### 1820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13140` → after: `L13587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13587) · [Before (L13140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13140)

```diff
-         fu(xu[5]) in Au && Cu(), Xu = Lu[uu] || (Lu[uu] = bu())
+         LG(tG[262]) in xG && YG(), kG = TG[GG] || (TG[GG] = VG())
```

#### 1821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13143-L13149` → after: `L13590-L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13590-L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13590-L13594) · [Before (L13143-L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13143-L13149)

```diff
-           XE(uu[xu[4]] = xu[0], uu[xu[65]] = function(...uu) {
-             if (XE(uu[xu[4]] = xu[1], uu[xu[1]] = uu[xu[0]].length), uu[xu[1]] < xu[13]) return xu[0];
-             if (XE(uu[-xu[114]] = Math.max(...uu[xu[0]]), uu[xu[24]] = Math.min(...uu[xu[0]])), uu[-xu[114]] === uu[xu[24]]) return xu[0];
-             for (XE(uu[xu[7]] = Array(uu[xu[1]] - xu[1]).fill(Number.MAX_SAFE_INTEGER), uu[xu[60]] = Array(uu[xu[1]] - xu[1]).fill(Number.MIN_SAFE_INTEGER), uu[xu[17]] = Math.ceil((uu[-xu[114]] - uu[xu[24]]) / (uu[xu[1]] - xu[1])), uu[xu[19]] = xu[0]), uu[-xu[115]] = xu[0]; uu[-x … [truncated]
-             for (XE(uu[-xu[38]] = Number.MIN_SAFE_INTEGER, uu[xu[117]] = uu[xu[24]]), uu[xu[116]] = xu[0]; uu[xu[116]] < uu[xu[1]] - xu[1]; uu[xu[116]]++) uu[xu[7]][uu[xu[116]]] === Number.MAX_SAFE_INTEGER && uu[xu[60]][uu[xu[116]]] === Number.MIN_SAFE_INTEGER || XE(uu[-xu[38]] = … [truncated]
-             return uu[-xu[38]] = Math.max(uu[-xu[38]], uu[-xu[114]] - uu[xu[117]]), uu[-xu[38]]
-           }, console.log(uu[xu[65]]))
+           pb(GG[tG[13]] = tG[1], GG[-tG[44]] = function(...GG) {
+             for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = GG[tG[1]].length, GG[tG[0]] = [], GG[tG[16]] = tG[1]), GG[-tG[106]] = tG[1]; GG[-tG[106]] < GG[tG[2]]; GG[-tG[106]]++) GG[tG[0]].push(GG[-tG[106]] !== tG[1] && GG[tG[1]][GG[-tG[106]]] > GG[tG[1]][GG[-tG[106]] - tG[2]] ? GG[tG[0] … [truncated]
+             for (GG[tG[39]] = GG[tG[2]] - tG[2]; GG[tG[39]] >= tG[1]; GG[tG[39]]--) GG[tG[39]] !== GG[tG[2]] - tG[2] && GG[tG[1]][GG[tG[39]]] > GG[tG[1]][GG[tG[39]] + tG[2]] && (GG[tG[0]][GG[tG[39]]] = Math.max(GG[tG[0]][GG[tG[39]]], GG[tG[0]][GG[tG[39]] + tG[2]] + tG[2])), GG[tG … [truncated]
+             return GG[tG[16]]
+           }, console.log(GG[-tG[44]]))
```

#### 1822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13151` → after: `L13596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13596) · [Before (L13151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13151)

```diff
-         Zu(xu[187]) + "B" in Au && cu(), Xu = lu[uu]()
+         LG(tG[134]) + tG[136] in xG && pG(), kG = UG[GG]()
```

#### 1823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13153-L13159` → after: `L13598-L13602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13598-L13602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13598-L13602) · [Before (L13153-L13159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13153-L13159)

```diff
-       if (ju === Zu(205) + Zu(xu[36])) {
-         function Nu(uu) {
-           var Eu, ju, su, Uu, Zu, Xu, lu;
-           for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-             var qu = 'P{y@)uRvYmQzwn8ZcV}<!+"bi|N%5fAUL6>lG]q$*hK9/re12,jX_x7s#4aBOIo`.CTHk;pW?dtDE~=FgS03J(:^[&M'.indexOf(Eu[lu]);
-             if (qu !== -xu[1])
-               if (Xu < xu[0]) Xu = qu;
+       if (ZG === LG(196) + LG(tG[73])) {
+         function fG(...GG) {
+           for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'yDd>?Sqs&pw(CzGQ^nb_*lK6v5rO!"]HF7N3o@j[,U;k/fx<XBPgc`T1|}#R+h%MtEV8Lm=Ae:JWYiI$a.)u9Z{~240', GG[-tG[133]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[-tG[133]].length, GG[tG[10]] = [], GG[-tG[134]] = tG[1], GG[-tG[75]] = tG[1], GG … [truncated]
+             if (GG[tG[26]] = GG[tG[5]].indexOf(GG[-tG[133]][GG[-tG[54]]]), GG[tG[26]] !== -tG[2])
+               if (GG[-tG[135]] < tG[1]) GG[-tG[135]] = GG[tG[26]];
```

#### 1824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13161` → after: `L13604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13604) · [Before (L13161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13161)

```diff
-                 XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[-tG[135]] += GG[tG[26]] * tG[27], GG[-tG[134]] |= GG[-tG[135]] << GG[-tG[75]], GG[-tG[75]] += (GG[-tG[135]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13163-L13165` → after: `L13606-L13626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13606-L13626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13606-L13626) · [Before (L13163-L13165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13163-L13165)

```diff
-                   XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                 } while (Zu > xu[19]);
-                 Xu = -xu[1]
+                   pb(GG[tG[10]].push(GG[-tG[134]] & tG[12]), GG[-tG[134]] >>= tG[11], GG[-tG[75]] -= tG[11])
+                 } while (GG[-tG[75]] > tG[20]);
+                 GG[-tG[135]] = -tG[2]
+               } return GG[-tG[135]] > -tG[2] && GG[tG[10]].push((GG[-tG[134]] | GG[-tG[135]] << GG[-tG[75]]) & tG[12]), NG(GG[tG[10]])
+         }
+ 
+         function QG(...GG) {
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = fG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+         }
+ 
+         function KG(...GG) {
+           GG[tG[13]] = tG[1];
+           const bG = require("big-integer");
+           pb(GG[tG[98]] = class {
+             static randomPrime(...GG) {
+               GG[tG[13]] = tG[2];
+ ... (5 more added lines; see GitHub link above)
```

#### 1826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13167-L13168` → after: `L13628-L13680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13628-L13680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13628-L13680) · [Before (L13167-L13168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13167-L13168)

```diff
-           }
-           return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
+             }
+             static generate(...GG) {
+               GG[tG[13]] = tG[2];
+               const ZG = bG(65537);
+               let wG, SG;
+               GG[-tG[99]] = tG[15];
+               do {
+                 pb(wG = this.randomPrime(GG[tG[1]] / tG[0]), SG = this.randomPrime(GG[tG[1]] / tG[0]), GG[-tG[99]] = bG.lcm(wG.prev(), SG.prev()))
+               } while (bG.gcd(ZG, GG[-tG[99]]).notEquals(tG[2]) || wG.minus(SG).abs().shiftRight(GG[tG[1]] / tG[0] - tG[158]).isZero());
+               return {
+                 e: ZG,
+                 n: wG.multiply(SG),
+                 d: ZG.modInv(GG[-tG[99]])
+               }
+             }
+             static encrypt(...GG) {
+ ... (37 more added lines; see GitHub link above)
```

#### 1827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13172` → after: `L13684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13684) · [Before (L13172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13172)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Nu(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = hG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13177-L13180` → after: `L13689-L13692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13689-L13692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13689-L13692) · [Before (L13177-L13180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13177-L13180)

```diff
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(...uu) {
-               for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'Z<&zu|v:y+;~#`.!7@"8(x}=1?2%3_w*]FAcOTSgGtmqVkCWILfNMjleKaoBspYidbDrXUJPHQn$6)^5,/h>{4RE0[9', uu[-xu[77]] = "" + (uu[xu[0]] || ""), uu[xu[118]] = uu[-xu[77]].length, uu[-xu[120]] = [], uu[-xu[119]] = xu[0], uu[-xu[76]] = xu[0] … [truncated]
-                 if (uu[xu[66]] = uu[xu[1]].indexOf(uu[-xu[77]][uu[xu[57]]]), uu[xu[66]] !== -xu[1])
-                   if (uu[-xu[89]] < xu[0]) uu[-xu[89]] = uu[xu[66]];
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(...GG) {
+               for (pb(GG[tG[13]] = tG[2], GG[tG[139]] = 'iLh0aICUnrAdojGOSbFPVpJsqcWQfRmgBN/E8XM;DkHZ(TeY4:Ktluv|`2!1x#=.y_,w69&%}<"7>~[*5]3{+^)?z$@', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[0]].length, GG[tG[10]] = [], GG[tG[8]] = tG[1], GG[-tG[30]] = tG[1], GG[tG … [truncated]
+                 if (GG[-tG[140]] = GG[tG[139]].indexOf(GG[tG[0]][GG[tG[3]]]), GG[-tG[140]] !== -tG[2])
+                   if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[-tG[140]];
```

#### 1829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13182` → after: `L13694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13694) · [Before (L13182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13182)

```diff
-                     XE(uu[-xu[89]] += uu[xu[66]] * xu[23], uu[-xu[119]] |= uu[-xu[89]] << uu[-xu[76]], uu[-xu[76]] += (uu[-xu[89]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                     pb(GG[tG[7]] += GG[-tG[140]] * tG[27], GG[tG[8]] |= GG[tG[7]] << GG[-tG[30]], GG[-tG[30]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13184-L13188` → after: `L13696-L13700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13696-L13700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13696-L13700) · [Before (L13184-L13188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13184-L13188)

```diff
-                       XE(uu[-xu[120]].push(uu[-xu[119]] & xu[3]), uu[-xu[119]] >>= xu[2], uu[-xu[76]] -= xu[2])
-                     } while (uu[-xu[76]] > xu[19]);
-                     uu[-xu[89]] = -xu[1]
-                   } return uu[-xu[89]] > -xu[1] && uu[-xu[120]].push((uu[-xu[119]] | uu[-xu[89]] << uu[-xu[76]]) & xu[3]), Hu(uu[-xu[120]])
-             }(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                       pb(GG[tG[10]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[-tG[30]] -= tG[11])
+                     } while (GG[-tG[30]] > tG[20]);
+                     GG[tG[7]] = -tG[2]
+                   } return GG[tG[7]] > -tG[2] && GG[tG[10]].push((GG[tG[8]] | GG[tG[7]] << GG[-tG[30]]) & tG[12]), NG(GG[tG[10]])
+             }(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13190-L13207` → after: `L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13702) · [Before (L13190-L13207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13190-L13207)

```diff
-           uu[xu[4]] = xu[0];
-           const ju = require("path"),
-             {
-               version: su
-             } = require("../../package"),
-             {
-               version: Uu
-             } = require("@redacted/enterprise-plugin/package"),
-             {
-               version: Zu
-             } = require("@redacted/components/package"),
-             {
-               sdkVersion: Xu
-             } = require("@redacted/enterprise-plugin");
-           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ju.resolve(__dirname, Eu(xu[201]) + Eu(xu[136]) + "js")
-         }
- ... (2 more removed lines; see GitHub link above)
+           GG[tG[13]] = tG[1], pb(GG[tG[5]] = bG(tG[308]) + bG(203) + bG(tG[141]) + bG(205) + bG(206), GG[tG[54]] = bG(tG[227]) + bG(208) + bG(tG[242]) + bG(210) + bG(tG[72]) + "?", GG[tG[4]] = bG(tG[117]) + bG(tG[50]) + bG(tG[44]) + bG(tG[107]) + bG(216) + bG(tG[167]) + bG(tG[55] … [truncated]
```

#### 1832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13213-L13224` → after: `L13708-L13710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13708-L13710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13708-L13710) · [Before (L13213-L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13213-L13224)

```diff
-     function yu([uu, Eu, ju, su, Uu], Zu, Xu, lu, qu) {
-       qu || (qu = function(...uu) {
-         XE(uu[xu[4]] = xu[0], uu[xu[17]] = function(uu) {
-           var Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu = uu.length;
-           if (bu < xu[13]) return xu[0];
-           if (XE(Eu = Math.max(...uu), ju = Math.min(...uu)), Eu === ju) return xu[0];
-           for (XE(su = Array(bu - xu[1]).fill(Number.MAX_SAFE_INTEGER), Uu = Array(bu - xu[1]).fill(Number.MIN_SAFE_INTEGER), Zu = Math.ceil((Eu - ju) / (bu - xu[1])), Xu = xu[0]), lu = xu[0]; lu < bu; lu++) uu[lu] !== ju && uu[lu] !== Eu && XE(Xu = Math.floor((uu[lu] - ju) / Zu) … [truncated]
-           for (XE(qu = Number.MIN_SAFE_INTEGER, fu = ju), Cu = xu[0]; Cu < bu - xu[1]; Cu++) su[Cu] === Number.MAX_SAFE_INTEGER && Uu[Cu] === Number.MIN_SAFE_INTEGER || XE(qu = Math.max(qu, su[Cu] - fu), fu = Uu[Cu]);
-           return qu = Math.max(qu, Eu - fu)
-         }, console.log(uu[xu[17]]))
-       }), lu || (lu = function(...uu) {
-         return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Xu(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+     function Gb([GG, bG], ZG, wG, SG) {
+       SG || (SG = function(GG) {
+         return typeof PG[GG] === tG[14] ? PG[GG] = wG(MG[GG]) : PG[GG]
```

#### 1833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13226-L13228` → after: `L13712-L13714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13712-L13714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13712-L13714) · [Before (L13226-L13228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13226-L13228)

```diff
-         for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'G%=Si"|AXu^8B[j3r!0;gJ{oQx._H~2yvL>ed(NPtwUs@+6Vkb5CYT19lDIKf4W:qchEp]O<Ra/F$}zMm*Z?,7&`#)n', uu[xu[11]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[11]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], uu[xu[19]] =  … [truncated]
-           if (uu[xu[66]] = uu[xu[1]].indexOf(uu[xu[11]][uu[xu[2]]]), uu[xu[66]] !== -xu[1])
-             if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[66]];
+         for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = '5$_};+.7O%:W{h`X643EAZ@m2NFqnjL^1B#J0sKf,zgTir=pVdyaCx&P~</H|?w9kl(etYIcv*u)o>UDGQ8[!RM"]Sb', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[tG[141]] = [], GG[tG[124]] = tG[1], GG[tG[18]] = tG[1], GG[tG[20]] = … [truncated]
+           if (GG[tG[6]] = GG[tG[2]].indexOf(GG[tG[0]][GG[-tG[142]]]), GG[tG[6]] !== -tG[2])
+             if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[6]];
```

#### 1834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13230` → after: `L13716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13716) · [Before (L13230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13230)

```diff
-               XE(uu[xu[19]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[19]] << uu[xu[17]], uu[xu[17]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+               pb(GG[tG[20]] += GG[tG[6]] * tG[27], GG[tG[124]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13232-L13244` → after: `L13718-L13742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13718-L13742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13718-L13742) · [Before (L13232-L13244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13232-L13244)

```diff
-                 XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-               } while (uu[xu[17]] > xu[19]);
-               uu[xu[19]] = -xu[1]
-             } return uu[xu[19]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[19]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[7]])
-       }), lu(xu[320]) + "2" in Au && qu();
-       if (!uu[lu(xu[120])][lu(xu[269]) + xu[104]]) {
-         function bu() {
-           ! function(...uu) {
-             function Eu(uu) {
-               var Eu, ju, su, Uu, Zu = [];
-               for (XE(Eu = xu[0], ju = uu.length, su = void 0, Uu = void 0); Eu < ju;) XE(su = uu.charCodeAt(Eu++), su >= xu[87] && su <= xu[121] && Eu < ju ? ((Uu = uu.charCodeAt(Eu++)) & xu[122]) == xu[88] ? Zu.push(((su & xu[85]) << xu[48]) + (Uu & xu[85]) + xu[86]) : (Zu.push … [truncated]
-               return Zu
-             }
+                 pb(GG[tG[141]].push(GG[tG[124]] & tG[12]), GG[tG[124]] >>= tG[11], GG[tG[18]] -= tG[11])
+               } while (GG[tG[18]] > tG[20]);
+               GG[tG[20]] = -tG[2]
+             } return GG[tG[20]] > -tG[2] && GG[tG[141]].push((GG[tG[124]] | GG[tG[20]] << GG[tG[18]]) & tG[12]), NG(GG[tG[141]])
+       });
+       const LG = bG - Math[SG(219)](GG);
+       if (LG <= tG[1]) {
+         function yG(...GG) {
+           function bG(...GG) {
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(...GG) {
+               for (pb(GG[tG[13]] = tG[2], GG[tG[85]] = '>G6b`?FSyigOn,R(qwA4^vY+!$k1}5L%p"Tj3c)QJ@7s=UBmV;M]~deXZEt|ahl9xrPuI/&.oN:<8*#DCzK_{f0[H2W', GG[-tG[143]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[-tG[143]].length, GG[tG[10]] = [], GG[tG[57]] = tG[1], GG[tG[18]] = tG[1],  … [truncated]
+                 if (GG[tG[26]] = GG[tG[85]].indexOf(GG[-tG[143]][GG[tG[144]]]), GG[tG[26]] !== -tG[2])
+                   if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[26]];
+                   else {
+                     pb(GG[tG[20]] += GG[tG[26]] * tG[27], GG[tG[57]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                     do {
+ ... (9 more added lines; see GitHub link above)
```

#### 1836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13246-L13260` → after: `L13744-L13761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13744-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13744-L13761) · [Before (L13246-L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13246-L13260)

```diff
-             function ju(...uu) {
-               if (uu[xu[4]] = xu[1], uu[xu[0]] >= xu[87] && uu[xu[0]] <= xu[126]) {
-                 function Eu(uu) {
-                   var Eu, ju, su, Uu, Zu, Xu, lu;
-                   for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-                     var qu = '+iraIUGNqTXobe8m_YDZpQd"5vz,/1gx~L)cj:.&*W(=6^h{2MSJ|7`0?C@<tP[9fK3By#Onku4EsAHFw!%VRl>];}$'.indexOf(Eu[lu]);
-                     if (qu !== -xu[1])
-                       if (Xu < xu[0]) Xu = qu;
-                       else {
-                         XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                         do {
-                           XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                         } while (Zu > xu[19]);
-                         Xu = -xu[1]
-                       }
+               function yG(...GG) {
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = [], GG[tG[0]] = tG[1], GG[tG[145]] = GG[tG[1]].length, GG[-tG[146]] = tG[15], GG[tG[39]] = tG[15]); GG[tG[0]] < GG[tG[145]];) pb(GG[-tG[146]] = GG[tG[1]].charCodeAt(GG[tG[0]]++), GG[-tG[146]] >= tG[147] && GG[-tG[146]] <= tG … [truncated]
+                 return GG[tG[2]]
+               }
+ 
+               function kG(...GG) {
+                 if (GG[tG[13]] = tG[2], GG[tG[1]] >= tG[147] && GG[tG[1]] <= tG[153]) {
+                   function bG(...GG) {
+                     for (pb(GG[tG[13]] = tG[2], GG[tG[35]] = '2QGx(Nu7A"k@M1/^$B#H3}t5]YqE?<h6_m>C0PKdZf4FDR%Xba|j`:~.!e,gIU+*nov=[J)L9;iW{swTVlSOz&8pcry', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[23]].length, GG[tG[10]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1],  … [truncated]
+                       if (GG[-tG[93]] = GG[tG[35]].indexOf(GG[tG[23]][GG[tG[11]]]), GG[-tG[93]] !== -tG[2])
+                         if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[-tG[93]];
+                         else {
+                           pb(GG[tG[7]] += GG[-tG[93]] * tG[27], GG[tG[8]] |= GG[tG[7]] << GG[tG[18]], GG[tG[18]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                           do {
+                             pb(GG[tG[10]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                           } while (GG[tG[18]] > tG[20]);
+ ... (2 more added lines; see GitHub link above)
```

#### 1837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13265-L13266` → after: `L13764-L13767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13764-L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13764-L13767) · [Before (L13265-L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13265-L13266)

```diff
-                 function ju(uu) {
-                   return typeof Vu[uu] === xu[10] ? Vu[uu] = Eu(ru[uu]) : Vu[uu]
+                   function ZG(...GG) {
+                     return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = bG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+                   }
+                   throw Error(ZG(221) + ZG(tG[79]) + ZG(tG[154]) + GG[tG[1]].toString(tG[61]).toUpperCase() + (ZG(tG[145]) + ZG(tG[33]) + ZG(226) + ZG(tG[293])))
```

#### 1838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13280-L13294` → after: `L13771-L13773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13771-L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13771-L13773) · [Before (L13280-L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13280-L13294)

```diff
-             function Zu() {
-               var Eu;
-               if (uu[xu[39]] >= uu[xu[96]]) {
-                 function ju(...uu) {
-                   for (XE(uu[xu[4]] = xu[1], uu[-xu[77]] = 'bGs}De@6:8j>fNK_/7d;JoL,R~%=zX?lCV1Q[TI"tpcBZ4g|k#E)9n&qYr^y.O({3i$hua]`M*wAx0+SW2P<UvHF!5m', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[13]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[xu[17]] = xu[0], u … [truncated]
-                     if (uu[xu[66]] = uu[-xu[77]].indexOf(uu[xu[13]][uu[xu[2]]]), uu[xu[66]] !== -xu[1])
-                       if (uu[xu[61]] < xu[0]) uu[xu[61]] = uu[xu[66]];
-                       else {
-                         XE(uu[xu[61]] += uu[xu[66]] * xu[23], uu[xu[9]] |= uu[xu[61]] << uu[xu[17]], uu[xu[17]] += (uu[xu[61]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                         do {
-                           XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[17]] -= xu[2])
-                         } while (uu[xu[17]] > xu[19]);
-                         uu[xu[61]] = -xu[1]
-                       } return uu[xu[61]] > -xu[1] && uu[xu[14]].push((uu[xu[9]] | uu[xu[61]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[14]])
-                 }
+               function UG(...GG) {
+                 return GG[tG[13]] = tG[0], LG(GG[tG[1]] >> GG[tG[2]] & tG[17] | tG[57])
+               }
```

#### 1839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13296-L13299` → after: `L13775-L13776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13775-L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13775-L13776) · [Before (L13296-L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13296-L13299)

```diff
-                 function su(...uu) {
-                   return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = ju(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-                 }
-                 throw Error(su(xu[109]))
+               function YG(...GG) {
+                 return GG[tG[13]] = tG[2], (4294967168 & GG[tG[1]]) == tG[1] ? LG(GG[tG[1]]) : (GG[tG[2]] = "", (4294965248 & GG[tG[1]]) == tG[1] ? GG[tG[2]] = LG(GG[tG[1]] >> tG[18] & tG[83] | tG[127]) : (4294901760 & GG[tG[1]]) == tG[1] ? pb(kG(GG[tG[1]]), GG[tG[2]] = LG(GG[tG[ … [truncated]
```

#### 1840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13318-L13324` → after: `L13779-L13782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13779-L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13779-L13782) · [Before (L13318-L13324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13318-L13324)

```diff
-             function Xu(...Eu) {
-               if (XE(Eu[xu[4]] = xu[0], Eu[xu[8]] = xu[12], Eu[xu[1]] = xu[12], Eu[xu[134]] = xu[12], Eu[xu[24]] = xu[12], Eu[-xu[133]] = xu[12]), uu[xu[39]] > uu[xu[96]]) throw Error(lu(225));
-               if (uu[xu[39]] == uu[xu[96]]) return xu[62];
-               if (XE(Eu[xu[8]] = uu[xu[7]][uu[xu[39]]] & xu[3], uu[xu[39]]++), (Eu[xu[8]] & xu[63]) == xu[0]) return Eu[xu[8]];
-               if ((Eu[xu[8]] & xu[44]) == xu[98]) {
-                 if (XE(Eu[xu[1]] = Zu(), Eu[-xu[133]] = (Eu[xu[8]] & xu[89]) << xu[17] | Eu[xu[1]]), Eu[-xu[133]] >= xu[63]) return Eu[-xu[133]];
-                 throw Error(lu(226))
+               function VG(...GG) {
+                 if (GG[tG[13]] = tG[1], wG >= ZG) throw Error(SG(tG[132]));
+                 if (pb(GG[tG[58]] = bG[wG] & tG[12], wG++), (GG[tG[58]] & tG[127]) == tG[57]) return GG[tG[58]] & tG[17];
+                 throw Error(SG(tG[43]))
```

#### 1841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13326-L13328` → after: `L13784-L13786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13784-L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13784-L13786) · [Before (L13326-L13328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13326-L13328)

```diff
-               if ((Eu[xu[8]] & xu[100]) == xu[44]) {
-                 if (XE(Eu[xu[1]] = Zu(), Eu[xu[134]] = Zu(), Eu[-xu[133]] = (Eu[xu[8]] & xu[90]) << xu[20] | Eu[xu[1]] << xu[17] | Eu[xu[134]]), Eu[-xu[133]] >= xu[135]) return ju(Eu[-xu[133]]), Eu[-xu[133]];
-                 {
+ 
+               function pG(...GG) {
+                 if (GG[tG[13]] = tG[1], pb(GG[tG[5]] = tG[15], GG[-tG[107]] = tG[15], GG[-tG[75]] = tG[15], GG[-tG[156]] = tG[15], GG[tG[151]] = tG[15]), wG > ZG) {
```

#### 1842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13330-L13332` → after: `L13788-L13790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13788-L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13788-L13790) · [Before (L13330-L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13330-L13332)

```diff
-                     for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'cu"861`v}<w=2#9{,fNyE^VBKxiozjZ/>WGAsO4!Y3b.R~e0r]qpld%?J[DatC|FmMgT_S5&$I7@:Q(kHLnX*PU)+h;', uu[xu[103]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[103]].length, uu[xu[14]] = [], uu[xu[27]] = xu[0], uu[xu[60]] = xu[0], … [truncated]
-                       if (uu[xu[66]] = uu[xu[1]].indexOf(uu[xu[103]][uu[xu[136]]]), uu[xu[66]] !== -xu[1])
-                         if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[66]];
+                     for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'buFrYCqLogZ4;A_,(cUfRB)E[5?.nd7Qy{I`t&9%T]V:>$GOklszi/M1@SDW"|~xpX!v<=}2ewa3^0j6hP+Hm*J#NK8', GG[tG[157]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[157]].length, GG[-tG[121]] = [], GG[tG[8]] = tG[1], GG[tG[9]] = tG[1] … [truncated]
+                       if (GG[tG[6]] = GG[tG[5]].indexOf(GG[tG[157]][GG[tG[11]]]), GG[tG[6]] !== -tG[2])
+                         if (GG[tG[120]] < tG[1]) GG[tG[120]] = GG[tG[6]];
```

#### 1843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13334` → after: `L13792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13792) · [Before (L13334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13334)

```diff
-                           XE(uu[xu[19]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[19]] << uu[xu[60]], uu[xu[60]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                           pb(GG[tG[120]] += GG[tG[6]] * tG[27], GG[tG[8]] |= GG[tG[120]] << GG[tG[9]], GG[tG[9]] += (GG[tG[120]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13336-L13339` → after: `L13794-L13797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13794-L13797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13794-L13797) · [Before (L13336-L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13336-L13339)

```diff
-                             XE(uu[xu[14]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[60]] -= xu[2])
-                           } while (uu[xu[60]] > xu[19]);
-                           uu[xu[19]] = -xu[1]
-                         } return uu[xu[19]] > -xu[1] && uu[xu[14]].push((uu[xu[27]] | uu[xu[19]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[14]])
+                             pb(GG[-tG[121]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[9]] -= tG[11])
+                           } while (GG[tG[9]] > tG[20]);
+                           GG[tG[120]] = -tG[2]
+                         } return GG[tG[120]] > -tG[2] && GG[-tG[121]].push((GG[tG[8]] | GG[tG[120]] << GG[tG[9]]) & tG[12]), NG(GG[-tG[121]])
```

#### 1845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13343` → after: `L13801-L13830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13801-L13830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13801-L13830) · [Before (L13343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13343)

```diff
-                     return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = su(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                     return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = LG(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+                   }
+                   throw Error(yG(230))
+                 }
+                 if (wG == ZG) return tG[52];
+                 if (pb(GG[tG[5]] = bG[wG] & tG[12], wG++), (GG[tG[5]] & tG[57]) == tG[1]) return GG[tG[5]];
+                 if ((GG[tG[5]] & tG[145]) == tG[127]) {
+                   if (pb(GG[-tG[107]] = VG(), GG[tG[151]] = (GG[tG[5]] & tG[83]) << tG[18] | GG[-tG[107]]), GG[tG[151]] >= tG[57]) return GG[tG[151]];
+                   throw Error(SG(tG[43]))
+                 }
+                 if ((GG[tG[5]] & tG[63]) == tG[145]) {
+                   if (pb(GG[-tG[107]] = VG(), GG[-tG[75]] = VG(), GG[tG[151]] = (GG[tG[5]] & tG[69]) << tG[21] | GG[-tG[107]] << tG[18] | GG[-tG[75]]), GG[tG[151]] >= 2048) return kG(GG[tG[151]]), GG[tG[151]];
+                   {
+                     function UG(...GG) {
+                       for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'AB+C2[895iQPD/x^c,&t4`LMg$HI|ys0_Kze6N3%J)T!@Eu.=pd(<}vYm{~r]*FlVw>1?jf;k:S"Rh7GbUXoZnW#Oaq', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[23]].length, GG[-tG[120]] = [], GG[tG[158]] = tG[1], GG[-tG[87]] = t … [truncated]
+                         if (GG[tG[26]] = GG[tG[2]].indexOf(GG[tG[23]][GG[tG[3]]]), GG[tG[26]] !== -tG[2])
+ ... (14 more added lines; see GitHub link above)
```

#### 1846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13348-L13362` → after: `L13849-L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13849-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13849-L13860) · [Before (L13348-L13362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13348-L13362)

```diff
-               if ((Eu[xu[8]] & xu[137]) == xu[100] && (XE(Eu[xu[1]] = Zu(), Eu[xu[134]] = Zu(), Eu[xu[24]] = Zu(), Eu[-xu[133]] = (Eu[xu[8]] & xu[19]) << xu[91] | Eu[xu[1]] << xu[20] | Eu[xu[134]] << xu[17] | Eu[xu[24]]), Eu[-xu[133]] >= xu[86] && Eu[-xu[133]] <= xu[138])) return … [truncated]
-               throw Error(lu(xu[81]))
-             }
-             XE(uu[xu[4]] = xu[1], uu[xu[1]] = String.fromCharCode), XE(uu[xu[7]] = xu[12], uu[xu[96]] = xu[12], uu[xu[39]] = xu[12]), XE(uu[xu[0]].version = lu(229), uu[xu[0]].encode = function(...uu) {
-               for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = Eu(uu[xu[0]]), uu[xu[39]] = uu[xu[1]].length, uu[xu[24]] = -xu[1], uu[xu[14]] = xu[12], uu[xu[27]] = ""); ++uu[xu[24]] < uu[xu[39]];) XE(uu[xu[14]] = uu[xu[1]][uu[xu[24]]], uu[xu[27]] += Uu(uu[xu[14]]));
-               return uu[xu[27]]
-             }, uu[xu[0]].decode = function(...ju) {
-               for (XE(ju[xu[4]] = xu[1], uu[xu[7]] = Eu(ju[xu[0]]), uu[xu[96]] = uu[xu[7]].length, uu[xu[39]] = xu[0], ju[xu[8]] = [], ju[xu[13]] = xu[12]);
-                 (ju[xu[13]] = Xu()) !== xu[62];) ju[xu[8]].push(ju[xu[13]]);
-               return function(...Eu) {
-                 for (XE(Eu[xu[4]] = xu[1], Eu[xu[1]] = Eu[xu[0]].length, Eu[xu[123]] = -xu[1], Eu[xu[124]] = xu[12], Eu[xu[14]] = ""); ++Eu[xu[123]] < Eu[xu[1]];) Eu[xu[124]] = Eu[xu[0]][Eu[xu[123]]], Eu[xu[124]] > xu[125] && XE(Eu[xu[124]] -= xu[86], Eu[xu[14]] += uu[xu[1]](Eu[x … [truncated]
-                 return Eu[xu[14]]
-               }(ju[xu[8]])
-             })
-           }(typeof exports === lu(230) + lu(xu[110]) ? this.utf8 = {} : exports)
+               pb(bG = void 0, ZG = void 0, wG = void 0), pb(GG.version = SG(tG[175]), GG.encode = function(...GG) {
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = yG(GG[tG[1]]), GG[tG[0]] = GG[tG[5]].length, GG[tG[16]] = -tG[2], GG[tG[37]] = tG[15], GG[tG[8]] = ""); ++GG[tG[16]] < GG[tG[0]];) pb(GG[tG[37]] = GG[tG[5]][GG[tG[16]]], GG[tG[8]] += YG(GG[tG[37]]));
+                 return GG[tG[8]]
+               }, GG.decode = function(...GG) {
+                 for (pb(GG[tG[13]] = tG[2], bG = yG(GG[tG[1]]), ZG = bG.length, wG = tG[1], GG[tG[5]] = [], GG[tG[0]] = tG[15]);
+                   (GG[tG[0]] = pG()) !== tG[52];) GG[tG[5]].push(GG[tG[0]]);
+                 return function(...GG) {
+                   for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = GG[tG[1]].length, GG[-tG[151]] = -tG[2], GG[-tG[77]] = tG[15], GG[tG[152]] = ""); ++GG[-tG[151]] < GG[tG[5]];) GG[-tG[77]] = GG[tG[1]][GG[-tG[151]]], GG[-tG[77]] > tG[92] && pb(GG[-tG[77]] -= tG[150], GG[tG[152]] += LG(GG[ … [truncated]
+                   return GG[tG[152]]
+                 }(GG[tG[5]])
+               })
+             }(typeof exports === bG(tG[339]) + bG(tG[109]) ? this.utf8 = {} : exports)
```

#### 1847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13364` → after: `L13862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13862) · [Before (L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13364)

```diff
-         return void(lu(215) in Au && bu())
+         return SG(220) + "H" in xG && yG(), tG[1]
```

#### 1848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13366-L13382` → after: `L13864-L13865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13864-L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13864-L13865) · [Before (L13366-L13382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13366-L13382)

```diff
-       if (!ju || su === xu[0]) {
-         function cu(...uu) {
-           for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'xu8dz<+7vp;}NI%HW(.QnE)Ao#m/XFwc|Lt$By^2]1JCMD64jRT!0sh3`_"?e:G&ZP=[bfiU*r{g9@KYa5~l>OkS,qV', uu[-xu[78]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[-xu[78]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[xu[17]] = xu[0], uu[xu[19]] … [truncated]
-             if (uu[xu[66]] = uu[xu[1]].indexOf(uu[-xu[78]][uu[-xu[54]]]), uu[xu[66]] !== -xu[1])
-               if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[66]];
-               else {
-                 XE(uu[xu[19]] += uu[xu[66]] * xu[23], uu[xu[9]] |= uu[xu[19]] << uu[xu[17]], uu[xu[17]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                 do {
-                   XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[17]] -= xu[2])
-                 } while (uu[xu[17]] > xu[19]);
-                 uu[xu[19]] = -xu[1]
-               } return uu[xu[19]] > -xu[1] && uu[xu[14]].push((uu[xu[9]] | uu[xu[19]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[14]])
-         }
- 
-         function Nu(uu) {
-           return typeof Vu[uu] === xu[10] ? Vu[uu] = cu(ru[uu]) : Vu[uu]
- ... (1 more removed lines; see GitHub link above)
+       return LG < tG[2] ? ZG[SG(tG[159]) + tG[160]] * LG : ZG[SG(tG[159]) + tG[160]]
+     }
```

#### 1849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13385` → after: `L13870-L13881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13870-L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13870-L13881) · [Before (L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13385)

```diff
-           uu[xu[4]] = xu[0]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(...GG) {
+             for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = '(FMfxAVU8oB_hPmkG+z97HgiCt`jT@KNa}4%"<D^*~;/XlI:RdE)n|]wr>.Wv=Ou,&bp!250{Yc6sL[1y3JS$QeZ#?q', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[0]].length, GG[tG[10]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[-tG[39] … [truncated]
+               if (GG[tG[26]] = GG[tG[5]].indexOf(GG[tG[0]][GG[tG[3]]]), GG[tG[26]] !== -tG[2])
+                 if (GG[-tG[39]] < tG[1]) GG[-tG[39]] = GG[tG[26]];
+                 else {
+                   pb(GG[-tG[39]] += GG[tG[26]] * tG[27], GG[tG[39]] |= GG[-tG[39]] << GG[tG[9]], GG[tG[9]] += (GG[-tG[39]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                   do {
+                     pb(GG[tG[10]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                   } while (GG[tG[9]] > tG[20]);
+                   GG[-tG[39]] = -tG[2]
+                 } return GG[-tG[39]] > -tG[2] && GG[tG[10]].push((GG[tG[39]] | GG[-tG[39]] << GG[tG[9]]) & tG[12]), NG(GG[tG[10]])
+           }(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13387-L13392` → after: `L13883-L13913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13883-L13913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13883-L13913) · [Before (L13387-L13392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13387-L13392)

```diff
-         return void(Nu(xu[139]) + "l" in Au && Ou())
-       }
-       const fu = Math[lu(233)](Uu);
-       if (fu <= ju[lu(xu[140]) + xu[141]]) return;
-       const Cu = Math[lu(235)]((fu - ju[lu(xu[140]) + xu[141]]) * ju[lu(xu[124]) + lu(xu[34]) + lu(238)], ju[lu(xu[142]) + lu(xu[100])]);
-       uu[lu(xu[120])][lu(xu[59])](Eu, Cu, ju[lu(xu[344]) + lu(xu[212])])
+         GG[tG[13]] = tG[1];
+         const ZG = require("path"),
+           {
+             version: wG
+           } = require("../../package"),
+           {
+             version: SG
+           } = require("@redacted/enterprise-plugin/package"),
+           {
+             version: LG
+           } = require("@redacted/components/package"),
+           {
+             sdkVersion: yG
+           } = require("@redacted/enterprise-plugin");
+         require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ZG.resolve(__dirname, bG(238) + bG(tG[104]) + tG[161])
+       }), LG || (LG = function(...GG) {
+ ... (15 more added lines; see GitHub link above)
```

#### 1851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13394-L13395` → after: `L13915-L13916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13915-L13916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13915-L13916) · [Before (L13394-L13395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13394-L13395)

```diff
-     XE(Vu = {}, ru = ['|r@RDte4#%gpU5}+2"b>', 'J`8?7RLC]`Q"~+z._@9Tom^&*uK@t1os@vUL1+A*b/4v`t.CJdm]"}[g[.', "W9H9@).Zz@qkdYs:Tgs=MMhku/OjjtlC", "NVoVP(4c5d5p3", 'UWM>C{"9`jut[z&4&#:69eNNFbZr`I*TLbr|4assoj?6HII./rT#s', "V?RFc2_x;qI`5+p", '}@*srIiZ7*bN1/V4P^(NxqWWBAm"6^z.`m?{K+R$Ac … [truncated]
-       XE(uu[xu[4]] = xu[0], uu[xu[8]] = [function() {
+     pb(PG = {}, MG = ["G8`El,7?/)F!w9%E)v<A3Q~J<<2", "GJi.M!?tCLa%G", "LEiU6Y&&RhOrz#JgR,q}6Y[yL^0%%5)*QiBPCJa#&%kx[Od_3PlkOU^2P", "B}IPML}a", "_}P~V#i2N^w#s3t<gSY0fQBG", '9^arUl"hbk|!di', '$`R~"q$4]ki%/BWyyLz.X,=o8f=4YwP2>ed4a?n^O', "&CpXIM#,okQ)+OGy{?[QLKEY4<", "T``P5CmG", "qC( … [truncated]
+       var GG, bG, ZG, wG = [function() {
```

#### 1852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13403` → after: `L13924-L13925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13924-L13925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13924-L13925) · [Before (L13403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13403)

```diff
-       }], uu[-xu[5]] = xu[12], uu[xu[6]] = []);
+       }];
+       pb(GG = void 0, bG = []);
```

#### 1853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13405` → after: `L13927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13927) · [Before (L13405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13405)

```diff
-         XE(uu[-xu[5]] = Object, uu[xu[6]][xu[21]]("".__proto__.constructor.name))
+         pb(GG = Object, bG[tG[22]]("".__proto__.constructor.name))
```

#### 1854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13407-L13410` → after: `L13929-L13933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13929-L13933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13929-L13933) · [Before (L13407-L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13407-L13410)

```diff
-       uu: for (uu[xu[7]] = xu[0]; uu[xu[7]] < uu[xu[8]][xu[4]]; uu[xu[7]]++) try {
-         for (uu[-xu[5]] = uu[xu[8]][uu[xu[7]]](), uu[xu[9]] = xu[0]; uu[xu[9]] < uu[xu[6]][xu[4]]; uu[xu[9]]++)
-           if (typeof uu[-xu[5]][uu[xu[6]][uu[xu[9]]]] === xu[10]) continue uu;
-         return uu[-xu[5]]
+       GG: for (ZG = tG[1]; ZG < wG[tG[13]]; ZG++) try {
+         var SG;
+         for (GG = wG[ZG](), SG = tG[1]; SG < bG[tG[13]]; SG++)
+           if (typeof GG[bG[SG]] === tG[14]) continue GG;
+         return GG
```

#### 1855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13412-L13414` → after: `L13935-L13938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13935-L13938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13935-L13938) · [Before (L13412-L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13412-L13414)

```diff
-       return uu[-xu[5]] || this
-     }() || {}, iu = Qu.TextDecoder, Wu = Qu.Uint8Array, Su = Qu.qO, Iu = Qu.String || String, Fu = Qu.Array || Array, Bu = function(...uu) {
-       return XE(uu[xu[4]] = xu[0], uu[xu[11]] = new Fu(xu[63]), uu[xu[22]] = Iu[xu[18]] || Iu.fromCharCode, uu[xu[13]] = []),
+       return GG || this
+     }() || {}, sG = AG.TextDecoder, qG = AG.Uint8Array, nG = AG.VK, gG = AG.String || String, eG = AG.Array || Array, RG = function() {
+       var GG, bG, ZG = new eG(tG[57]);
+       return pb(GG = gG[tG[19]] || gG.fromCharCode, bG = []),
```

#### 1856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13416-L13417` → after: `L13940-L13941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13940-L13941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13940-L13941) · [Before (L13416-L13417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13416-L13417)

```diff
-           for (XE(Eu[xu[4]] = xu[1], Eu[-xu[15]] = xu[12], Eu[xu[13]] = xu[12], Eu[xu[6]] = Eu[xu[0]][xu[4]], uu[xu[13]][xu[4]] = xu[0]), Eu[xu[14]] = xu[0]; Eu[xu[14]] < Eu[xu[6]];) XE(Eu[xu[13]] = Eu[xu[0]][Eu[xu[14]]++], Eu[xu[13]] <= xu[61] ? Eu[-xu[15]] = Eu[xu[13]] : Eu[xu[ … [truncated]
-           return uu[xu[13]].join("")
+           for (pb(wG[tG[13]] = tG[2], wG[tG[2]] = tG[15], wG[tG[0]] = tG[15], wG[tG[16]] = wG[tG[1]][tG[13]], bG[tG[13]] = tG[1]), wG[tG[10]] = tG[1]; wG[tG[10]] < wG[tG[16]];) pb(wG[tG[0]] = wG[tG[1]][wG[tG[10]]++], wG[tG[0]] <= tG[56] ? wG[tG[2]] = wG[tG[0]] : wG[tG[0]] <= tG[1 … [truncated]
+           return bG.join("")
```

#### 1857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13419-L13420` → after: `L13943-L13944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13943-L13944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13943-L13944) · [Before (L13419-L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13419-L13420)

```diff
-     }()), XE(Lu = Object[Tu(xu[23])](xu[35]), tu = void 0);
-     const zu = (xu[0], fu[xu[33]])(Tu(244));
+     }()), pb(TG = Object[DG(tG[128])](tG[96]), HG = void 0);
+     const Zb = (tG[1], YG[tG[273]])(DG(250));
```

#### 1858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13423-L13426` → after: `L13947-L13950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13947-L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13947-L13950) · [Before (L13423-L13426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13423-L13426)

```diff
-         return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(...uu) {
-           for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = '|+xvg<H&:@DN8z_{]=/C?T;V.fc1uFbB2XE5%!}~*KW>o$P6JsRnyhG)^e97wqLASQad"ZOY3l,#iUp0[j(rtk`mIM4', uu[xu[143]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[143]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[45]] = xu[0], uu[xu[19] … [truncated]
-             if (uu[xu[66]] = uu[xu[1]].indexOf(uu[xu[143]][uu[-xu[5]]]), uu[xu[66]] !== -xu[1])
-               if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[66]];
+         return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = function(...GG) {
+           for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = ':tZJWmrqBfSKaMhYodO>E_%.zlRu9@c[s&P`UV?N,|1]8A^v$3*D2=i#Tw4IHGC5g/yXn!p<"exQ+{)6jkL}07~(Fb;', GG[tG[164]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[164]].length, GG[tG[37]] = [], GG[tG[131]] = tG[1], GG[-tG[165]] = tG[1], GG[t … [truncated]
+             if (GG[-tG[152]] = GG[tG[2]].indexOf(GG[tG[164]][GG[tG[166]]]), GG[-tG[152]] !== -tG[2])
+               if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[-tG[152]];
```

#### 1859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13428` → after: `L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13952) · [Before (L13428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13428)

```diff
-                 XE(uu[xu[19]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[19]] << uu[xu[45]], uu[xu[45]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[7]] += GG[-tG[152]] * tG[27], GG[tG[131]] |= GG[tG[7]] << GG[-tG[165]], GG[-tG[165]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13430-L13488` → after: `L13954-L13958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13954-L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13954-L13958) · [Before (L13430-L13488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13430-L13488)

```diff
-                   XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[45]] -= xu[2])
-                 } while (uu[xu[45]] > xu[19]);
-                 uu[xu[19]] = -xu[1]
-               } return uu[xu[19]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[19]] << uu[xu[45]]) & xu[3]), Hu(uu[xu[7]])
-         }(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-       }
-       if (uu[xu[4]] = xu[17], uu[xu[0]][Eu(xu[144])][Eu(xu[342]) + xu[104]] && uu[xu[1]] !== uu[xu[0]].FQ && uu[xu[1]] !== uu[xu[13]][xu[322]]) throw new Error(Eu(247));
-       const ju = uu[xu[0]][Eu(xu[144])][Eu(xu[137]) + xu[9]](uu[xu[1]]);
-       if (uu[xu[14]][Eu(xu[251]) + Eu(250)] = ju, !ju) {
-         function vE() {
-           const uu = require("big-integer");
-           module.exports = class {
-             static randomPrime(...Eu) {
-               Eu[xu[4]] = xu[1];
-               const ju = uu.one.shiftLeft(Eu[xu[0]] - xu[1]),
-                 su = uu.one.shiftLeft(Eu[xu[0]]).prev();
- ... (43 more removed lines; see GitHub link above)
+                   pb(GG[tG[37]].push(GG[tG[131]] & tG[12]), GG[tG[131]] >>= tG[11], GG[-tG[165]] -= tG[11])
+                 } while (GG[-tG[165]] > tG[20]);
+                 GG[tG[7]] = -tG[2]
+               } return GG[tG[7]] > -tG[2] && GG[tG[37]].push((GG[tG[131]] | GG[tG[7]] << GG[-tG[165]]) & tG[12]), NG(GG[tG[37]])
+         }(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13490-L13542` → after: `L13960-L13972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13960-L13972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13960-L13972) · [Before (L13490-L13542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13490-L13542)

```diff
-       const su = uu[xu[13]][Eu(xu[145]) + Eu(257)],
-         Xu = su[Eu(258)],
-         fu = uu[xu[0]][Eu(xu[144])][Eu(259)](uu[xu[1]], su),
-         Ou = uu[xu[0]][Eu(xu[144])][Eu(260) + Eu(261) + Eu(262) + Eu(263)](uu[xu[1]], su),
-         {
-           [Eu(264) + xu[179]]: Yu,
-           [Eu(265) + Eu(266) + Eu(267) + xu[159]]: hu,
-           [Eu(268) + Eu(269) + Eu(270)]: gu,
-           [Eu(271) + Eu(272) + Eu(273)]: Mu,
-           [Eu(274)]: eu,
-           [Eu(275)]: Gu,
-           [Eu(xu[316]) + xu[317]]: pu,
-           [Eu(277) + Eu(278)]: wu,
-           [Eu(279) + Eu(280) + Eu(281) + Eu(xu[3])]: Ku,
-           [Eu(282) + Eu(283)]: Qu,
-           [Eu(284) + Eu(285) + Eu(286)]: iu
- ... (37 more removed lines; see GitHub link above)
+       if (GG[tG[13]] = tG[18], GG[tG[1]][bG(tG[170])][bG(252) + tG[95]] && GG[tG[2]] !== GG[tG[1]].sA && GG[tG[2]] !== GG[tG[0]][tG[324]]) {
+         function vb(...GG) {
+           for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'T]$KbO?DxM^wXnHi`1{mP;}U0Es/Ncl(#yvfBo96=Ap|"e%LQ!qaWVj.Y2FzCd&JR~t8k:*I53Sr[uh4>GZ@<_,)+7g', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[167]] = GG[tG[23]].length, GG[tG[37]] = [], GG[tG[120]] = tG[1], GG[tG[9]] = tG[1], GG[tG[20 … [truncated]
+             if (GG[tG[166]] = GG[tG[2]].indexOf(GG[tG[23]][GG[tG[11]]]), GG[tG[166]] !== -tG[2])
+               if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[166]];
+               else {
+                 pb(GG[tG[20]] += GG[tG[166]] * tG[27], GG[tG[120]] |= GG[tG[20]] << GG[tG[9]], GG[tG[9]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                 do {
+                   pb(GG[tG[37]].push(GG[tG[120]] & tG[12]), GG[tG[120]] >>= tG[11], GG[tG[9]] -= tG[11])
+                 } while (GG[tG[9]] > tG[20]);
+                 GG[tG[20]] = -tG[2]
+               } return GG[tG[20]] > -tG[2] && GG[tG[37]].push((GG[tG[120]] | GG[tG[20]] << GG[tG[9]]) & tG[12]), NG(GG[tG[37]])
+         }
```

#### 1862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13544-L13570` → after: `L13974-L13975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13974-L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13974-L13975) · [Before (L13544-L13570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13544-L13570)

```diff
-           function ju(...uu) {
-             if (uu[xu[4]] = xu[1], !uu[xu[0]]) return -xu[1];
-             const Eu = ju(uu[xu[0]].left),
-               su = ju(uu[xu[0]].right),
-               Uu = Math.abs(Eu - su);
-             if (Eu === 1 / 0 || su === 1 / 0 || Uu > xu[1]) return 1 / 0;
-             return Math.max(Eu, su) + xu[1]
-           }
-           window[Eu(328) + uu(329) + uu(330) + "_"] = {
-             buildCharacterMap: function(...uu) {
-               uu[xu[4]] = xu[1];
-               const Eu = {};
-               for (let ju of uu[xu[0]].replace(/[^w]/g, "").toLowerCase()) Eu[ju] = Eu[ju] + xu[1] || xu[1];
-               return Eu
-             },
-             isAnagrams: function(uu, Eu) {
- ... (11 more removed lines; see GitHub link above)
+         function ab(...GG) {
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = vb(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13572-L13574` → after: `L13977-L13985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13977-L13985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13977-L13985) · [Before (L13572-L13574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13572-L13574)

```diff
-         if (Eu(327) in Au && VE(), CE[KE] !== zu) {
-           uu[xu[13]][Eu(xu[163]) + xu[162]] = xu[62];
-           break
+ 
+         function cb(...GG) {
+           pb(GG[tG[13]] = tG[1], GG[tG[169]] = function(...GG) {
+             for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = tG[1], GG[tG[23]] = {}, GG[tG[168]] = tG[1], GG[tG[61]] = tG[1], GG[tG[44]] = tG[1], GG[tG[18]] = GG[tG[1]].length), GG[tG[20]] = tG[1]; GG[tG[20]] < GG[tG[18]]; GG[tG[20]]++) {
+               for (pb(GG[tG[23]] = {}, GG[tG[168]] = tG[1], GG[tG[61]] = tG[2]), GG[-tG[75]] = GG[tG[20]] + tG[2]; GG[-tG[75]] < GG[tG[18]]; GG[-tG[75]]++) GG[tG[1]][GG[tG[20]]].x !== GG[tG[1]][GG[-tG[75]]].x || GG[tG[1]][GG[tG[20]]].y !== GG[tG[1]][GG[-tG[75]]].y ? (GG[tG[1]][GG … [truncated]
+               pb(GG[tG[168]] += GG[tG[61]], GG[tG[2]] = Math.max(GG[tG[2]], GG[tG[168]]))
+             }
+             return GG[tG[2]]
+           }, console.log(GG[tG[169]]))
```

#### 1864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13577-L13587` → after: `L13989-L13990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13989-L13990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13989-L13990) · [Before (L13577-L13587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13577-L13587)

```diff
-       uu[-xu[146]] = uu[xu[0]][Eu(xu[144])][Eu(xu[164]) + Eu(xu[165]) + Eu(xu[166]) + Eu(xu[167])](Wu);
-       const bE = uu[-xu[146]] === xu[35] ? uu[xu[0]][Eu(xu[144])][Eu(xu[150]) + Eu(xu[151]) + Eu(xu[152]) + Eu(xu[153])](uu[xu[1]], Eu(xu[168]) + xu[169]) : uu[-xu[146]][Eu(xu[168]) + xu[169]],
-         cE = uu[-xu[146]] === xu[35] ? uu[xu[0]][Eu(xu[144])][Eu(xu[150]) + Eu(xu[151]) + Eu(xu[152]) + Eu(xu[153])](uu[xu[1]], Eu(xu[170]) + Eu(xu[171]) + Eu(xu[172]) + xu[9]) : uu[-xu[146]][Eu(xu[170]) + Eu(xu[171]) + Eu(xu[172]) + xu[9]],
-         NE = uu[-xu[146]] === xu[35] ? uu[xu[0]][Eu(xu[144])][Eu(xu[150]) + Eu(xu[151]) + Eu(xu[152]) + Eu(xu[153])](uu[xu[1]], Eu(xu[173]) + Eu(xu[174]) + Eu(xu[175])) : uu[-xu[146]][Eu(xu[173]) + Eu(xu[174]) + Eu(xu[175])],
-         OE = uu[-xu[146]] === xu[35] ? uu[xu[0]][Eu(xu[144])][Eu(xu[150]) + Eu(xu[151]) + Eu(xu[152]) + Eu(xu[153])](uu[xu[1]], Eu(xu[176]) + Eu(xu[177]) + xu[178]) : uu[-xu[146]][Eu(xu[176]) + Eu(xu[177]) + xu[178]],
-         YE = (fE || uu[xu[13]][Eu(340) + Eu(341)] < sE(uu[xu[0]], uu[xu[1]], Wu, Gu)) && !uu[xu[24]][Eu(xu[351]) + Eu(xu[352]) + xu[117]] && !pu && fu[Eu(xu[180]) + Eu(xu[181]) + xu[179]] > xu[0],
-         hE = uu[xu[24]][Eu(xu[182]) + xu[33]] && !Yu && !qE && !uu[xu[13]][Eu(xu[218]) + xu[33]] && fu[Eu(xu[180]) + Eu(xu[181]) + xu[179]] > xu[0] && !Ru,
-         DE = uu[xu[24]][Eu(xu[182]) + xu[33]] && !uu[xu[13]][Eu(xu[194]) + Eu(xu[195]) + Eu(xu[196]) + Eu(xu[197])],
-         gE = (xu[0], du[xu[7]])(bE, Xu),
-         ME = DE && uu[xu[13]][Eu(xu[192]) + Eu(353) + Eu(354) + Eu(355) + xu[193]] < xu[48];
-       if (uu[xu[19]] = xu[62], gE && (ME || uu[xu[24]][Eu(356) + Eu(357)])) {
+       const ZG = GG[tG[1]][bG(tG[170])][bG(tG[12]) + tG[8]](GG[tG[2]]);
+       if (GG[tG[37]][bG(tG[137]) + bG(257)] = ZG, !ZG) {
```

#### 1865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13589-L13591` → after: `L13992-L13994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13992-L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13992-L13994) · [Before (L13589-L13591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13589-L13591)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'dxKXry|j%LV6A~s;DutG.m[c=Q/27v*Zl)P"?!HhgRS(aoJ$Bi,+I0w5O3eEMW}UCnb4_{qp]:&YTkF`<f@^#1zN9>8', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[13]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[-xu[183]] = xu[0], uu[xu[19] … [truncated]
-             if (uu[xu[26]] = uu[xu[1]].indexOf(uu[xu[13]][uu[xu[55]]]), uu[xu[26]] !== -xu[1])
-               if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[26]];
+           for (pb(GG[tG[13]] = tG[2], GG[tG[65]] = 'GmcCdUQTkjBgKf8v!A1O{3Y)P:>}w=Stz[Lh]$7/^V.~_oE`6uDy2X*%IZ"#(rJp|5W9&F4@xq,iM;+0?nHaNRsbel<', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[0]].length, GG[-tG[48]] = [], GG[tG[8]] = tG[1], GG[tG[171]] = tG[1], GG[tG[7]] … [truncated]
+             if (GG[tG[6]] = GG[tG[65]].indexOf(GG[tG[0]][GG[tG[3]]]), GG[tG[6]] !== -tG[2])
+               if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[6]];
```

#### 1866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13593` → after: `L13996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13996) · [Before (L13593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13593)

```diff
-                 XE(uu[xu[19]] += uu[xu[26]] * xu[23], uu[xu[9]] |= uu[xu[19]] << uu[-xu[183]], uu[-xu[183]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[7]] += GG[tG[6]] * tG[27], GG[tG[8]] |= GG[tG[7]] << GG[tG[171]], GG[tG[171]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13595-L13598` → after: `L13998-L14001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13998-L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L13998-L14001) · [Before (L13595-L13598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13595-L13598)

```diff
-                   XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[-xu[183]] -= xu[2])
-                 } while (uu[-xu[183]] > xu[19]);
-                 uu[xu[19]] = -xu[1]
-               } return uu[xu[19]] > -xu[1] && uu[xu[14]].push((uu[xu[9]] | uu[xu[19]] << uu[-xu[183]]) & xu[3]), Hu(uu[xu[14]])
+                   pb(GG[-tG[48]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[171]] -= tG[11])
+                 } while (GG[tG[171]] > tG[20]);
+                 GG[tG[7]] = -tG[2]
+               } return GG[tG[7]] > -tG[2] && GG[-tG[48]].push((GG[tG[8]] | GG[tG[7]] << GG[tG[171]]) & tG[12]), NG(GG[-tG[48]])
```

#### 1868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13602` → after: `L14005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14005) · [Before (L13602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13602)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = rE(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = lb(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13604-L13605` → after: `L14007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14007) · [Before (L13604-L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13604-L13605)

```diff
-         XE(uu[xu[13]][QE(xu[184]) + xu[33]] = !uu[xu[13]][QE(xu[184]) + xu[33]], uu[xu[19]] = uu[xu[13]][QE(xu[184]) + xu[33]] && fE && uu[xu[24]][QE(359) + QE(360)])
-       } else {
+ 
```

#### 1870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13607` → after: `L14009-L14071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14009-L14071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14009-L14071) · [Before (L13607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13607)

```diff
-           uu[xu[4]] = xu[0]
+           GG[tG[13]] = tG[1]
+         }
+         return bG(258) in xG && Pb(), void kG()[jb(264)](GG[tG[37]][jb(265) + jb(266) + jb(267)], tG[1], tG[1], tG[1])
+       }
+       const wG = GG[tG[0]][bG(tG[323]) + bG(269)],
+         yG = wG[bG(270)],
+         YG = GG[tG[1]][bG(tG[170])][bG(271)](GG[tG[2]], wG),
+         KG = GG[tG[1]][bG(tG[170])][bG(272) + bG(273) + bG(274) + bG(275)](GG[tG[2]], wG),
+         {
+           [bG(276) + tG[212]]: hG,
+           [bG(277) + bG(278) + bG(279) + tG[187]]: dG,
+           [bG(280) + bG(281) + bG(282)]: rG,
+           [bG(283) + bG(284) + bG(285)]: zG,
+           [bG(286)]: EG,
+           [bG(287)]: oG,
+           [bG(tG[315]) + tG[316]]: XG,
+ ... (47 more added lines; see GitHub link above)
```

#### 1871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13623-L13626` → after: `L14074-L14075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14074-L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14074-L14075) · [Before (L13623-L13626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13623-L13626)

```diff
-           function SE(uu) {
-             return typeof Vu[uu] === xu[10] ? Vu[uu] = WE(ru[uu]) : Vu[uu]
-           }
-           uu[xu[13]][SE(362) + xu[33]] = xu[62]
+         function sb(...GG) {
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = Ab(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13628-L13635` → after: `L14077-L14100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14077-L14100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14077-L14100) · [Before (L13628-L13635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13628-L13635)

```diff
-       }
-       if (DE) {
-         function IE(uu) {
-           var Eu, ju, su, Uu, Zu, Xu, lu;
-           for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-             var qu = 'y;+3[06BID/kzcFwoe*R|xm>,]r1v&l9f<MK#).gN!qU^$%JC"Z~=E`8iWA?X{S(Q7hb:}H5@aYT4LP2Gj_sutndpOV'.indexOf(Eu[lu]);
-             if (qu !== -xu[1])
-               if (Xu < xu[0]) Xu = qu;
+ 
+         function qb(...GG) {
+           GG[tG[13]] = tG[1];
+           const ZG = require("path"),
+             {
+               version: wG
+             } = require("../../package"),
+             {
+               version: SG
+             } = require("@redacted/enterprise-plugin/package"),
+             {
+               version: LG
+             } = require("@redacted/components/package"),
+             {
+               sdkVersion: yG
+             } = require("@redacted/enterprise-plugin");
+ ... (8 more added lines; see GitHub link above)
```

#### 1873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13637` → after: `L14102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14102) · [Before (L13637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13637)

```diff
-                 XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[7]] += GG[tG[6]] * tG[27], GG[tG[90]] |= GG[tG[7]] << GG[-tG[88]], GG[-tG[88]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13639-L13644` → after: `L14104-L14107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14104-L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14104-L14107) · [Before (L13639-L13644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13639-L13644)

```diff
-                   XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                 } while (Zu > xu[19]);
-                 Xu = -xu[1]
-               }
-           }
-           return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
+                   pb(GG[tG[37]].push(GG[tG[90]] & tG[12]), GG[tG[90]] >>= tG[11], GG[-tG[88]] -= tG[11])
+                 } while (GG[-tG[88]] > tG[20]);
+                 GG[tG[7]] = -tG[2]
+               } return GG[tG[7]] > -tG[2] && GG[tG[37]].push((GG[tG[90]] | GG[tG[7]] << GG[-tG[88]]) & tG[12]), NG(GG[tG[37]])
```

#### 1875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13647-L13648` → after: `L14110-L14111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14110-L14111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14110-L14111) · [Before (L13647-L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13647-L13648)

```diff
-         function FE(uu) {
-           return typeof Vu[uu] === xu[10] ? Vu[uu] = IE(ru[uu]) : Vu[uu]
+         function gb(...GG) {
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = nb(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13650` → after: `L14113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14113) · [Before (L13650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13650)

```diff
-         uu[xu[13]][Eu(xu[192]) + FE(363) + FE(364) + FE(365) + xu[193]] = xu[0]
+         GG[tG[0]][gb(376) + tG[7]] = tG[52]
```

#### 1877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13652-L13658` → after: `L14115-L14119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14115-L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14115-L14119) · [Before (L13652-L13658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13652-L13658)

```diff
-       if (uu[xu[13]][Eu(366) + Eu(367) + Eu(368) + xu[193]]++, fE) {
-         function BE(uu) {
-           var Eu, ju, su, Uu, Zu, Xu, lu;
-           for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-             var qu = 'GEu$:&Swm2jMx@3PkQr;#"a{ZJ*+N%}z7FpXBI4iDV.T)y,YqlcghAWoed_9?|]0=U/!8vsf(Ct^<[bHL~OnKR15>`6'.indexOf(Eu[lu]);
-             if (qu !== -xu[1])
-               if (Xu < xu[0]) Xu = qu;
+       if (db) {
+         function eb(...GG) {
+           for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'IzAVbLGKhStHTeQjEZpx9|P,co`:50yf_B}+NUYC(>mg~#%&/D]k3r.ql)F6=^47Ms@Rv;{d2Xa?8["1!JW*n<u$iOw', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[23]].length, GG[tG[10]] = [], GG[-tG[101]] = tG[1], GG[tG[18]] = tG[1], GG[tG[20 … [truncated]
+             if (GG[tG[6]] = GG[tG[5]].indexOf(GG[tG[23]][GG[tG[3]]]), GG[tG[6]] !== -tG[2])
+               if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[6]];
```

#### 1878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13660` → after: `L14121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14121) · [Before (L13660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13660)

```diff
-                 XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[20]] += GG[tG[6]] * tG[27], GG[-tG[101]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13662-L13667` → after: `L14123-L14126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14123-L14126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14123-L14126) · [Before (L13662-L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13662-L13667)

```diff
-                   XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                 } while (Zu > xu[19]);
-                 Xu = -xu[1]
-               }
-           }
-           return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
+                   pb(GG[tG[10]].push(GG[-tG[101]] & tG[12]), GG[-tG[101]] >>= tG[11], GG[tG[18]] -= tG[11])
+                 } while (GG[tG[18]] > tG[20]);
+                 GG[tG[20]] = -tG[2]
+               } return GG[tG[20]] > -tG[2] && GG[tG[10]].push((GG[-tG[101]] | GG[tG[20]] << GG[tG[18]]) & tG[12]), NG(GG[tG[10]])
```

#### 1880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13670-L13671` → after: `L14129-L14130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14129-L14130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14129-L14130) · [Before (L13670-L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13670-L13671)

```diff
-         function LE(...uu) {
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = BE(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+         function Rb(GG) {
+           return typeof PG[GG] === tG[14] ? PG[GG] = eb(MG[GG]) : PG[GG]
```

#### 1881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13673` → after: `L14132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14132) · [Before (L13673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13673)

```diff
-         XE(uu[xu[13]][Eu(xu[217]) + LE(370)] = xu[62], uu[xu[13]][LE(371) + LE(372)] = xu[0]), uu[xu[19]] || (uu[xu[13]][LE(373) + xu[33]] = xu[62])
+         GG[tG[0]][bG(tG[223]) + bG(tG[224]) + Rb(377) + Rb(378) + tG[216]] = tG[1]
```

#### 1882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13675-L13676` → after: `L14134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14134) · [Before (L13675-L13676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13675-L13676)

```diff
-       const eE = fE && !uu[xu[13]][Eu(xu[261]) + Eu(xu[262]) + Eu(xu[263])] && uu[xu[24]][Eu(xu[182]) + xu[33]] && !uu[xu[13]][Eu(xu[194]) + Eu(xu[195]) + Eu(xu[196]) + Eu(xu[197])];
-       if (uu[xu[120]] = xu[62], hE) {
+       if (GG[tG[0]][bG(tG[223]) + bG(tG[224]) + bG(tG[225]) + bG(tG[226]) + tG[216]]++, BG) {
```

#### 1883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13678-L13680` → after: `L14136-L14138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14136-L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14136-L14138) · [Before (L13678-L13680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13678-L13680)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[xu[96]] = '[ZJ6}uX5rhoe+E(tvlp1j"3!mVAPG7SQi>.zFW4Kb{w]d:OIn?),#^yqHc2;90~BfT|g8DxNsk%R_=U<@`M$aL/&*CY', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[-xu[198]] = uu[xu[13]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[xu[60]] = xu[0], uu[xu[19 … [truncated]
-             if (uu[xu[26]] = uu[xu[96]].indexOf(uu[xu[13]][uu[xu[199]]]), uu[xu[26]] !== -xu[1])
-               if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[26]];
+           for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = '*!7@xLNTw.MYIv"cV#>tz<0Qd,l:D(bKJ;$&{]^+ojem}fgXCp36_EORHSs/U1hkr%q)4y`GWB~=i?n5aZ[Au2F|98P', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[0]].length, GG[tG[37]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[tG[61]] = … [truncated]
+             if (GG[tG[26]] = GG[tG[2]].indexOf(GG[tG[0]][GG[tG[32]]]), GG[tG[26]] !== -tG[2])
+               if (GG[tG[61]] < tG[1]) GG[tG[61]] = GG[tG[26]];
```

#### 1884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13682` → after: `L14140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14140) · [Before (L13682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13682)

```diff
-                 XE(uu[xu[19]] += uu[xu[26]] * xu[23], uu[xu[9]] |= uu[xu[19]] << uu[xu[60]], uu[xu[60]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[61]] += GG[tG[26]] * tG[27], GG[tG[39]] |= GG[tG[61]] << GG[tG[9]], GG[tG[9]] += (GG[tG[61]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13684-L13687` → after: `L14142-L14145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14142-L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14142-L14145) · [Before (L13684-L13687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13684-L13687)

```diff
-                   XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[60]] -= xu[2])
-                 } while (uu[xu[60]] > xu[19]);
-                 uu[xu[19]] = -xu[1]
-               } return uu[xu[19]] > -xu[1] && uu[xu[14]].push((uu[xu[9]] | uu[xu[19]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[14]])
+                   pb(GG[tG[37]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                 } while (GG[tG[9]] > tG[20]);
+                 GG[tG[61]] = -tG[2]
+               } return GG[tG[61]] > -tG[2] && GG[tG[37]].push((GG[tG[39]] | GG[tG[61]] << GG[tG[9]]) & tG[12]), NG(GG[tG[37]])
```

#### 1886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13691` → after: `L14149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14149) · [Before (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13691)

```diff
-           return typeof Vu[uu] === xu[10] ? Vu[uu] = tE(ru[uu]) : Vu[uu]
+           return typeof PG[GG] === tG[14] ? PG[GG] = Tb(MG[GG]) : PG[GG]
```

#### 1887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13693` → after: `L14151-L14155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14151-L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14151-L14155) · [Before (L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13693)

```diff
-         if (uu[xu[13]][xE(xu[209]) + xE(378)]) {
+         pb(GG[tG[0]][Hb(379) + Hb(380)] = tG[52], GG[tG[0]][Hb(381) + Hb(382)] = tG[1]), GG[tG[69]] || (GG[tG[0]][Hb(383) + tG[7]] = tG[52])
+       }
+       const zb = BG && !GG[tG[0]][bG(tG[359]) + bG(tG[360]) + bG(tG[361])] && GG[tG[16]][bG(tG[215]) + tG[7]] && !GG[tG[0]][bG(tG[362]) + bG(tG[363]) + bG(tG[364])];
+       if (GG[tG[4]] = tG[52], hb) {
+         if (GG[tG[0]][bG(tG[236]) + bG(tG[237])]) {
```

#### 1888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13695-L13697` → after: `L14157-L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14157-L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14157-L14159) · [Before (L13695-L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13695-L13697)

```diff
-             for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'P`5+)2&/w4ljXfstq~_vA8B6F}pZS$nCkhuJ=%^LY?:K1]g#@EeM;T[VxID<!oOyz9UmcaQi>d"b3r*RHG{,N7(0|W.', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[13]].length, uu[xu[200]] = [], uu[xu[27]] = xu[0], uu[xu[60]] = xu[0], uu[xu[19 … [truncated]
-               if (uu[xu[188]] = uu[xu[1]].indexOf(uu[xu[13]][uu[-xu[201]]]), uu[xu[188]] !== -xu[1])
-                 if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[188]];
+             for (pb(GG[tG[13]] = tG[2], GG[-tG[228]] = 'ZxD,K&LNOC#UahMfo|%mB[TJud)4H?v2(F9P_Ai}$jIb.;RnEkV0<lcs61XGpzyqrW!gQ7S~]Y@`t{":w^358*+/=>e', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[23]].length, GG[-tG[229]] = [], GG[-tG[227]] = tG[1], GG[tG[18]] = tG[1],  … [truncated]
+               if (GG[tG[6]] = GG[-tG[228]].indexOf(GG[tG[23]][GG[-tG[48]]]), GG[tG[6]] !== -tG[2])
+                 if (GG[-tG[87]] < tG[1]) GG[-tG[87]] = GG[tG[6]];
```

#### 1889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13699` → after: `L14161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14161) · [Before (L13699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13699)

```diff
-                   XE(uu[xu[19]] += uu[xu[188]] * xu[23], uu[xu[27]] |= uu[xu[19]] << uu[xu[60]], uu[xu[60]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[-tG[87]] += GG[tG[6]] * tG[27], GG[-tG[227]] |= GG[-tG[87]] << GG[tG[18]], GG[tG[18]] += (GG[-tG[87]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13701-L13708` → after: `L14163-L14166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14163-L14166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14163-L14166) · [Before (L13701-L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13701-L13708)

```diff
-                     XE(uu[xu[200]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[60]] -= xu[2])
-                   } while (uu[xu[60]] > xu[19]);
-                   uu[xu[19]] = -xu[1]
-                 } return uu[xu[19]] > -xu[1] && uu[xu[200]].push((uu[xu[27]] | uu[xu[19]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[200]])
-           }
- 
-           function HE(...uu) {
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = TE(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                     pb(GG[-tG[229]].push(GG[-tG[227]] & tG[12]), GG[-tG[227]] >>= tG[11], GG[tG[18]] -= tG[11])
+                   } while (GG[tG[18]] > tG[20]);
+                   GG[-tG[87]] = -tG[2]
+                 } return GG[-tG[87]] > -tG[2] && GG[-tG[229]].push((GG[-tG[227]] | GG[-tG[87]] << GG[tG[18]]) & tG[12]), NG(GG[-tG[229]])
```

#### 1891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13711-L13718` → after: `L14169-L14170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14169-L14170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14169-L14170) · [Before (L13711-L13718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13711-L13718)

```diff
-           function AE(...uu) {
-             XE(uu[xu[4]] = xu[0], uu[xu[8]] = function(...uu) {
-               for (XE(uu[xu[4]] = xu[1], uu[xu[202]] = xu[0], uu[-xu[22]] = {}, uu[xu[6]] = xu[0], uu[-xu[203]] = xu[0], uu[xu[205]] = xu[0], uu[xu[60]] = uu[xu[0]].length), uu[-xu[204]] = xu[0]; uu[-xu[204]] < uu[xu[60]]; uu[-xu[204]]++) {
-                 for (XE(uu[-xu[22]] = {}, uu[xu[6]] = xu[0], uu[-xu[203]] = xu[1]), uu[xu[57]] = uu[-xu[204]] + xu[1]; uu[xu[57]] < uu[xu[60]]; uu[xu[57]]++) uu[xu[0]][uu[-xu[204]]].x !== uu[xu[0]][uu[xu[57]]].x || uu[xu[0]][uu[-xu[204]]].y !== uu[xu[0]][uu[xu[57]]].y ? (uu[xu[0] … [truncated]
-                 XE(uu[xu[6]] += uu[-xu[203]], uu[xu[202]] = Math.max(uu[xu[202]], uu[xu[6]]))
-               }
-               return uu[xu[202]]
-             }, console.log(uu[xu[8]]))
+           function Db(GG) {
+             return typeof PG[GG] === tG[14] ? PG[GG] = tb(MG[GG]) : PG[GG]
```

#### 1892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13720` → after: `L14172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14172) · [Before (L13720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13720)

```diff
-           if (xE(379) in Au && AE(), uu[xu[13]][HE(380) + HE(381) + xu[9]] > xu[0]) {
+           if (GG[tG[0]][Db(tG[232]) + Db(393) + tG[8]] > tG[1]) {
```

#### 1893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13722-L13724` → after: `L14174-L14176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14174-L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14174-L14176) · [Before (L13722-L13724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13722-L13724)

```diff
-               for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = '6MFfDQgtnOkbUEJSWBs=q^r@hv.3wLRdC7Xc9>y$?(Vme"+){!~pl|jAi}_N0]5zK`#I1x<%P,u2GH&/4:o8aT*Z[Y;', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], uu[xu[8 … [truncated]
-                 if (uu[xu[66]] = uu[xu[8]].indexOf(uu[xu[39]][uu[-xu[118]]]), uu[xu[66]] !== -xu[1])
-                   if (uu[xu[84]] < xu[0]) uu[xu[84]] = uu[xu[66]];
+               for (pb(GG[tG[13]] = tG[2], GG[-tG[66]] = '=GgkNeQnL/;Cd>,iDX:.7?~o_w4<bv6y&p]TO}|J1^5"U%uq*r`VmF+S#f8Y0$BjH!IA9K@ztM3E)2cZ[(hsxPR{lWa', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[-tG[230]] = [], GG[tG[39]] = tG[1], GG[tG[18]] = tG[1], GG[t … [truncated]
+                 if (GG[-tG[231]] = GG[-tG[66]].indexOf(GG[tG[0]][GG[tG[11]]]), GG[-tG[231]] !== -tG[2])
+                   if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[-tG[231]];
```

#### 1894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13726` → after: `L14178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14178) · [Before (L13726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13726)

```diff
-                     XE(uu[xu[84]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[84]] << uu[xu[17]], uu[xu[17]] += (uu[xu[84]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                     pb(GG[tG[20]] += GG[-tG[231]] * tG[27], GG[tG[39]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13728-L13731` → after: `L14180-L14183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14180-L14183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14180-L14183) · [Before (L13728-L13731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13728-L13731)

```diff
-                       XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-                     } while (uu[xu[17]] > xu[19]);
-                     uu[xu[84]] = -xu[1]
-                   } return uu[xu[84]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[84]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[7]])
+                       pb(GG[-tG[230]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[18]] -= tG[11])
+                     } while (GG[tG[18]] > tG[20]);
+                     GG[tG[20]] = -tG[2]
+                   } return GG[tG[20]] > -tG[2] && GG[-tG[230]].push((GG[tG[39]] | GG[tG[20]] << GG[tG[18]]) & tG[12]), NG(GG[-tG[230]])
```

#### 1896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13735` → after: `L14187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14187) · [Before (L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13735)

```diff
-               return typeof Vu[uu] === xu[10] ? Vu[uu] = nE(ru[uu]) : Vu[uu]
+               return typeof PG[GG] === tG[14] ? PG[GG] = Nb(MG[GG]) : PG[GG]
```

#### 1897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13737-L13739` → after: `L14189-L14202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14189-L14202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14189-L14202) · [Before (L13737-L13739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13737-L13739)

```diff
- 
-             function zE() {
-               var uu, Eu, ju;
+             let xb = GG[tG[0]][Db(394) + Db(395)];
+             if (GG[tG[0]][Db(tG[232]) + Ob(tG[235]) + tG[8]] < GG[tG[39]]) {
+               function Bb(...GG) {
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'vHYEJnjaiqFmKQrGlfebDotcp,CI!zM:ZSs|kN]~"[6PL2B#(3)_X$`?58{&7RTyu>09=@x^4.AO1<+d}U/W;gw%*Vh', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[0]].length, GG[-tG[109]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1], GG[- … [truncated]
+                   if (GG[tG[26]] = GG[tG[2]].indexOf(GG[tG[0]][GG[tG[11]]]), GG[tG[26]] !== -tG[2])
+                     if (GG[-tG[233]] < tG[1]) GG[-tG[233]] = GG[tG[26]];
+                     else {
+                       pb(GG[-tG[233]] += GG[tG[26]] * tG[27], GG[tG[8]] |= GG[-tG[233]] << GG[tG[18]], GG[tG[18]] += (GG[-tG[233]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                       do {
+                         pb(GG[-tG[109]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                       } while (GG[tG[18]] > tG[20]);
+                       GG[-tG[233]] = -tG[2]
+                     } return GG[-tG[233]] > -tG[2] && GG[-tG[109]].push((GG[tG[8]] | GG[-tG[233]] << GG[tG[18]]) & tG[12]), NG(GG[-tG[109]])
+               }
```

#### 1898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13742-L13753` → after: `L14205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14205) · [Before (L13742-L13753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13742-L13753)

```diff
-                 return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = function(...uu) {
-                   for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = '#cHjqgVDoKQiBeLPfOu:WNA9S>X"7=$M|vY(s~{)*hl?CFE_a3IJ/t}!R8r0&xd2<yk;@]UzTG^.5wmZb`,6n[4%1p+', uu[xu[71]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[71]].length, uu[xu[206]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], uu … [truncated]
-                     if (uu[xu[26]] = uu[xu[8]].indexOf(uu[xu[71]][uu[xu[57]]]), uu[xu[26]] !== -xu[1])
-                       if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[26]];
-                       else {
-                         XE(uu[xu[33]] += uu[xu[26]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[xu[17]], uu[xu[17]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                         do {
-                           XE(uu[xu[206]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-                         } while (uu[xu[17]] > xu[19]);
-                         uu[xu[33]] = -xu[1]
-                       } return uu[xu[33]] > -xu[1] && uu[xu[206]].push((uu[xu[27]] | uu[xu[33]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[206]])
-                 }(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                 return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = Bb(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13755` → after: `L14207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14207) · [Before (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13755)

```diff
-               XE(uu = su(383) + su(384) + su(385), Eu = su(386) + su(387) + su(388) + su(389) + xu[75], ju = su(390) + su(391) + su(392) + su(393) + su(394) + su(395) + su(396) + xu[113], uu.match(Eu + ju))
+               xb *= GG[tG[0]][Ob(tG[234]) + GZ(398) + tG[8]] / GG[tG[39]]
```

#### 1900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13757-L13759` → after: `L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14209) · [Before (L13757-L13759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13757-L13759)

```diff
-             HE(382) + "N" in Au && zE();
-             let RE = uu[xu[13]][yE(397) + yE(398)];
-             uu[xu[13]][yE(xu[207]) + yE(xu[208]) + xu[9]] < uu[xu[27]] && (RE *= uu[xu[13]][yE(xu[207]) + yE(xu[208]) + xu[9]] / uu[xu[27]]), XE(lu()[yE(401)](mu, xu[0], RE, xu[0]), uu[xu[14]][yE(402) + yE(403)](mu), uu[xu[13]][yE(xu[207]) + yE(xu[208]) + xu[9]] -= uu[xu[27]])
+             pb(kG()[Ob(399)](cG, tG[1], xb, tG[1]), GG[tG[37]][Ob(400) + Ob(401)](cG), GG[tG[0]][Ob(tG[234]) + Ob(tG[235]) + tG[8]] -= GG[tG[39]])
```

#### 1901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13762-L13767` → after: `L14212-L14215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14212-L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14212-L14215) · [Before (L13762-L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13762-L13767)

```diff
-           function uj(uu) {
-             var Eu, ju, su, Uu, Zu, Xu, lu;
-             for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-               var qu = '3JbwvAS]!9s&#?RhG^u)zXIk{`7x|p+:BnL"jo[t$N}i*6y_Tr>eW1~=2HC8/,.Q4KfMDa0OU5g@c%qml(ZEdV;FPY<'.indexOf(Eu[lu]);
-               if (qu !== -xu[1])
-                 if (Xu < xu[0]) Xu = qu;
+           function bZ(...GG) {
+             for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'uJnGkNPOHhaAqBCjcUreVpFDZfWsIRKEgSYtTdmMioblL"v<`XQw:?!0)}_>281;=7#+%x@36]/&y(^5.9|4~[$z{*,', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[tG[37]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1], GG[tG[20]]  … [truncated]
+               if (GG[tG[26]] = GG[tG[2]].indexOf(GG[tG[0]][GG[tG[11]]]), GG[tG[26]] !== -tG[2])
+                 if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[26]];
```

#### 1902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13769` → after: `L14217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14217) · [Before (L13769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13769)

```diff
-                   XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[tG[20]] += GG[tG[26]] * tG[27], GG[tG[8]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13771-L13776` → after: `L14219-L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14219-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14219-L14222) · [Before (L13771-L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13771-L13776)

```diff
-                     XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                   } while (Zu > xu[19]);
-                   Xu = -xu[1]
-                 }
-             }
-             return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
+                     pb(GG[tG[37]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                   } while (GG[tG[18]] > tG[20]);
+                   GG[tG[20]] = -tG[2]
+                 } return GG[tG[20]] > -tG[2] && GG[tG[37]].push((GG[tG[8]] | GG[tG[20]] << GG[tG[18]]) & tG[12]), NG(GG[tG[37]])
```

#### 1904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13780` → after: `L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14226) · [Before (L13780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13780)

```diff
-             return typeof Vu[uu] === xu[10] ? Vu[uu] = uj(ru[uu]) : Vu[uu]
+             return typeof PG[GG] === tG[14] ? PG[GG] = bZ(MG[GG]) : PG[GG]
```

#### 1905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13782` → after: `L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14228) · [Before (L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13782)

```diff
-           if (XE(uu[xu[13]][xE(xu[209]) + Ej(404)] = xu[68], lu()[Ej(405)](mu, xu[0], uE(uu[xu[0]], uu[xu[1]], Wu) * uu[xu[24]][Ej(xu[210]) + Ej(xu[211]) + xu[179]][Ej(408) + Ej(409) + Ej(410) + Ej(411)]() * fu[Ej(xu[210]) + Ej(xu[211]) + xu[179]], xu[0]), uu[xu[14]][Ej(412) + Ej … [truncated]
+           if (pb(GG[tG[0]][bG(tG[236]) + bG(tG[237])] = tG[53], kG()[bG(tG[306])](cG, tG[1], Sb(GG[tG[1]], GG[tG[2]], AG) * GG[tG[16]][bG(tG[213]) + bG(tG[214]) + tG[212]][ZZ(403) + ZZ(404) + ZZ(405) + ZZ(406)]() * YG[ZZ(407) + ZZ(408) + tG[212]], tG[1]), GG[tG[37]][ZZ(409) + ZZ( … [truncated]
```

#### 1906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13784-L13786` → after: `L14230-L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14230-L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14230-L14232) · [Before (L13784-L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13784-L13786)

```diff
-               for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = '0PrlRASqoVCgGdiQbOsmZp1Kt%$a{7n[H3#k84>(X*YNF`^Mf!:x/v@W_TE95jJDh"&2IezLc6B.}U+]=wy?|<,;u~)', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[13]].length, uu[xu[14]] = [], uu[-xu[23]] = xu[0], uu[xu[17]] = xu[0], uu[-xu … [truncated]
-                 if (uu[xu[26]] = uu[xu[8]].indexOf(uu[xu[13]][uu[xu[2]]]), uu[xu[26]] !== -xu[1])
-                   if (uu[-xu[212]] < xu[0]) uu[-xu[212]] = uu[xu[26]];
+               for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = '7aOMUKlETnqYmJDHjPriVQdkZfLthpFRAGz8CcgIWS%N61.XB|05(beos^:=!&3,`u"}~v_9w2)x$]<y#/*{[?+;@>4', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[tG[108]] = [], GG[-tG[238]] = tG[1], GG[tG[18]] = tG[1], GG[tG … [truncated]
+                 if (GG[tG[26]] = GG[tG[5]].indexOf(GG[tG[0]][GG[tG[11]]]), GG[tG[26]] !== -tG[2])
+                   if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[26]];
```

#### 1907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13788` → after: `L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14234) · [Before (L13788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13788)

```diff
-                     XE(uu[-xu[212]] += uu[xu[26]] * xu[23], uu[-xu[23]] |= uu[-xu[212]] << uu[xu[17]], uu[xu[17]] += (uu[-xu[212]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                     pb(GG[tG[20]] += GG[tG[26]] * tG[27], GG[-tG[238]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13790-L13793` → after: `L14236-L14239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14236-L14239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14236-L14239) · [Before (L13790-L13793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13790-L13793)

```diff
-                       XE(uu[xu[14]].push(uu[-xu[23]] & xu[3]), uu[-xu[23]] >>= xu[2], uu[xu[17]] -= xu[2])
-                     } while (uu[xu[17]] > xu[19]);
-                     uu[-xu[212]] = -xu[1]
-                   } return uu[-xu[212]] > -xu[1] && uu[xu[14]].push((uu[-xu[23]] | uu[-xu[212]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[14]])
+                       pb(GG[tG[108]].push(GG[-tG[238]] & tG[12]), GG[-tG[238]] >>= tG[11], GG[tG[18]] -= tG[11])
+                     } while (GG[tG[18]] > tG[20]);
+                     GG[tG[20]] = -tG[2]
+                   } return GG[tG[20]] > -tG[2] && GG[tG[108]].push((GG[-tG[238]] | GG[tG[20]] << GG[tG[18]]) & tG[12]), NG(GG[tG[108]])
```

#### 1909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13796-L13797` → after: `L14242-L14243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14242-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14242-L14243) · [Before (L13796-L13797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13796-L13797)

```diff
-             function sj(uu) {
-               return typeof Vu[uu] === xu[10] ? Vu[uu] = jj(ru[uu]) : Vu[uu]
+             function SZ(...GG) {
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = wZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13799-L13800` → after: `L14245-L14246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14245-L14246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14245-L14246) · [Before (L13799-L13800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13799-L13800)

```diff
-             const Uj = uu[xu[24]][Ej(417) + sj(418) + sj(419)];
-             if (eE && uu[xu[24]][xu[226]] && !Uj) {
+             const LZ = GG[tG[16]][SZ(414) + SZ(415) + SZ(416)];
+             if (zb && GG[tG[16]][tG[246]] && !LZ) {
```

#### 1911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13802-L13804` → after: `L14248-L14250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14248-L14250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14248-L14250) · [Before (L13802-L13804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13802-L13804)

```diff
-                 for (XE(uu[xu[4]] = xu[1], uu[-xu[214]] = '6cCOSGI`;x5vF[9TY&fV+^"zbkot#,ep|BA?0H!ls7N.~g<DrQ4}mK2R@%]q{:Ea*n/1>Wuw=UZJL)PMyd(83ih_jX$', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[-xu[213]] = uu[xu[39]].length, uu[-xu[110]] = [], uu[xu[94]] = xu[0], uu[xu[215]] = xu[ … [truncated]
-                   if (uu[xu[26]] = uu[-xu[214]].indexOf(uu[xu[39]][uu[xu[57]]]), uu[xu[26]] !== -xu[1])
-                     if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[26]];
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'Bd6IaApmESLgtJHQM]OPu)NYzD"Ue@Gs4:?RKv9+;f~<_or|q7wj*0Z1W[h&2{>Tx!CV=%85/l#nk3Xi^yb}$Fc.,(`', GG[tG[106]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[106]].length, GG[tG[37]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[ … [truncated]
+                   if (GG[tG[26]] = GG[tG[2]].indexOf(GG[tG[106]][GG[tG[239]]]), GG[tG[26]] !== -tG[2])
+                     if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[26]];
```

#### 1912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13806` → after: `L14252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14252) · [Before (L13806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13806)

```diff
-                       XE(uu[xu[19]] += uu[xu[26]] * xu[23], uu[xu[94]] |= uu[xu[19]] << uu[xu[215]], uu[xu[215]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                       pb(GG[tG[7]] += GG[tG[26]] * tG[27], GG[tG[39]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13808-L13811` → after: `L14254-L14257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14254-L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14254-L14257) · [Before (L13808-L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13808-L13811)

```diff
-                         XE(uu[-xu[110]].push(uu[xu[94]] & xu[3]), uu[xu[94]] >>= xu[2], uu[xu[215]] -= xu[2])
-                       } while (uu[xu[215]] > xu[19]);
-                       uu[xu[19]] = -xu[1]
-                     } return uu[xu[19]] > -xu[1] && uu[-xu[110]].push((uu[xu[94]] | uu[xu[19]] << uu[xu[215]]) & xu[3]), Hu(uu[-xu[110]])
+                         pb(GG[tG[37]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                       } while (GG[tG[9]] > tG[20]);
+                       GG[tG[7]] = -tG[2]
+                     } return GG[tG[7]] > -tG[2] && GG[tG[37]].push((GG[tG[39]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[tG[37]])
```

#### 1914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13815` → after: `L14261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14261) · [Before (L13815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13815)

```diff
-                 return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Zj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                 return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = yZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13817` → after: `L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14263) · [Before (L13817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13817)

```diff
-               XE(uu[xu[0]][Xj(420)][Xj(421)](uu[xu[1]], uu[xu[24]], uu[xu[13]], uu[xu[13]][Xj(422) + Xj(423)] + xu[1]), uu[xu[120]] = xu[68])
+               pb(GG[tG[1]][SZ(tG[240])][kZ(418)](GG[tG[2]], GG[tG[16]], GG[tG[0]], GG[tG[0]][kZ(419) + kZ(420)] + tG[2]), GG[tG[4]] = tG[53])
```

#### 1916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13820-L13822` → after: `L14266-L14268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14266-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14266-L14268) · [Before (L13820-L13822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13820-L13822)

```diff
-                 for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'P)!={*_<(+E`jq^D?xbXo}JpL$eu[8lAQO]@WMk#r,Bf/5~6v|m>It%a9"23Hhns;T7RyZG:dC.SwFVKU4zY&c1iNg0', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[13]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[73]] = xu[0], uu[xu[ … [truncated]
-                   if (uu[xu[26]] = uu[xu[8]].indexOf(uu[xu[13]][uu[xu[57]]]), uu[xu[26]] !== -xu[1])
-                     if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[26]];
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = '%pFqjVK81!O):N~$a;GyQwDYb2J/P*[d#C0^B{6RhAWl>@x`c"=v?zro5n4(f|&iu7k+tLmZ_]<MXTEI3USH9,eg.s}', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[23]].length, GG[tG[10]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[tG … [truncated]
+                   if (GG[tG[6]] = GG[tG[5]].indexOf(GG[tG[23]][GG[tG[3]]]), GG[tG[6]] !== -tG[2])
+                     if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[6]];
```

#### 1917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13824` → after: `L14270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14270) · [Before (L13824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13824)

```diff
-                       XE(uu[xu[33]] += uu[xu[26]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[xu[73]], uu[xu[73]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                       pb(GG[tG[7]] += GG[tG[6]] * tG[27], GG[tG[39]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13826-L13829` → after: `L14272-L14275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14272-L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14272-L14275) · [Before (L13826-L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13826-L13829)

```diff
-                         XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[73]] -= xu[2])
-                       } while (uu[xu[73]] > xu[19]);
-                       uu[xu[33]] = -xu[1]
-                     } return uu[xu[33]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[33]] << uu[xu[73]]) & xu[3]), Hu(uu[xu[7]])
+                         pb(GG[tG[10]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                       } while (GG[tG[9]] > tG[20]);
+                       GG[tG[7]] = -tG[2]
+                     } return GG[tG[7]] > -tG[2] && GG[tG[10]].push((GG[tG[39]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[tG[10]])
```

#### 1919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13833` → after: `L14279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14279) · [Before (L13833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13833)

```diff
-                 return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = lj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                 return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = UZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13835` → after: `L14281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14281) · [Before (L13835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13835)

```diff
-               uu[xu[0]][sj(424)][qj(425)](uu[xu[1]], uu[xu[24]], uu[xu[13]], xu[0])
+               GG[tG[1]][SZ(tG[240])][YZ(421)](GG[tG[2]], GG[tG[16]], GG[tG[0]], tG[1])
```

#### 1921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13837` → after: `L14283-L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14283-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14283-L14304) · [Before (L13837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13837)

```diff
-           } else uu[xu[13]][Ej(426) + Ej(427)]++, uu[xu[14]][xu[216]][xu[1]] < xu[0] && (uu[xu[14]][xu[216]][xu[1]] = xu[0])
+           } else GG[tG[0]][ZZ(422) + ZZ(423)]++, GG[tG[37]][tG[241]][tG[2]] < tG[1] && (GG[tG[37]][tG[241]][tG[2]] = tG[1])
+         }
+       } else if (GG[tG[0]][bG(tG[236]) + bG(tG[237])] = tG[52], BG) {
+         function VZ(GG) {
+           var bG, ZG, wG, SG, LG, yG, kG;
+           for (pb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = tG[1], LG = tG[1], yG = -tG[2]), kG = tG[1]; kG < ZG; kG++) {
+             var UG = 'd30vz>u[|)(9<#_~tWsn{$MV"qCaTi,rBLINj8p=4}YO!7wQP5J:ZbX/F1&k?2eGAl`6@gR^xKUH]D%+;mcoy*hfES.'.indexOf(bG[kG]);
+             if (UG !== -tG[2])
+               if (yG < tG[1]) yG = UG;
+               else {
+                 pb(yG += UG * tG[27], SG |= yG << LG, LG += (yG & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                 do {
+                   pb(wG.push(SG & tG[12]), SG >>= tG[11], LG -= tG[11])
+                 } while (LG > tG[20]);
+                 yG = -tG[2]
+               }
+ ... (6 more added lines; see GitHub link above)
```

#### 1922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13839-L13840` → after: `L14306-L14308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14306-L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14306-L14308) · [Before (L13839-L13840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13839-L13840)

```diff
-       } else uu[xu[13]][Eu(xu[217]) + Eu(428)] = xu[62], fE && uu[xu[0]][Eu(xu[144])][Eu(429)](uu[xu[1]], uu[xu[24]], uu[xu[13]], xu[0]);
-       if (uu[xu[13]][Eu(xu[218]) + xu[33]]) {
+         GG[tG[1]][bG(tG[170])][pZ(424)](GG[tG[2]], GG[tG[16]], GG[tG[0]], tG[1])
+       }
+       if (GG[tG[0]][bG(tG[220]) + tG[7]]) {
```

#### 1923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13842-L13844` → after: `L14310-L14312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14310-L14312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14310-L14312) · [Before (L13842-L13844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13842-L13844)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = '&5][^x/a1HBNoZL}ztAsX3jwWPkh4p@_g>KI)UY%`vd|iV(!rMC+GT2Q{?b8u$O*6"n#F=9:EDl~Rq;<meJSf,cy07.', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[13]].length, uu[xu[7]] = [], uu[xu[219]] = xu[0], uu[xu[58]] = xu[0], uu[xu[19]]  … [truncated]
-             if (uu[xu[26]] = uu[xu[1]].indexOf(uu[xu[13]][uu[xu[76]]]), uu[xu[26]] !== -xu[1])
-               if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[26]];
+           for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'zMOhLHBAnkfeEDKoZiVRsvQpy,7:C/Y~mIgtNP&l1USF^5Gjaw!?$3bWxd)q@9u}T4"2*%rJX{8c<_;|#]+0[.=>(`6', GG[tG[242]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[242]].length, GG[-tG[61]] = [], GG[tG[39]] = tG[1], GG[-tG[51]] = tG[1], GG[tG … [truncated]
+             if (GG[tG[120]] = GG[tG[5]].indexOf(GG[tG[242]][GG[tG[11]]]), GG[tG[120]] !== -tG[2])
+               if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[120]];
```

#### 1924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13846` → after: `L14314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14314) · [Before (L13846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13846)

```diff
-                 XE(uu[xu[19]] += uu[xu[26]] * xu[23], uu[xu[219]] |= uu[xu[19]] << uu[xu[58]], uu[xu[58]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[20]] += GG[tG[120]] * tG[27], GG[tG[39]] |= GG[tG[20]] << GG[-tG[51]], GG[-tG[51]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13848-L13851` → after: `L14316-L14319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14316-L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14316-L14319) · [Before (L13848-L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13848-L13851)

```diff
-                   XE(uu[xu[7]].push(uu[xu[219]] & xu[3]), uu[xu[219]] >>= xu[2], uu[xu[58]] -= xu[2])
-                 } while (uu[xu[58]] > xu[19]);
-                 uu[xu[19]] = -xu[1]
-               } return uu[xu[19]] > -xu[1] && uu[xu[7]].push((uu[xu[219]] | uu[xu[19]] << uu[xu[58]]) & xu[3]), Hu(uu[xu[7]])
+                   pb(GG[-tG[61]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[-tG[51]] -= tG[11])
+                 } while (GG[-tG[51]] > tG[20]);
+                 GG[tG[20]] = -tG[2]
+               } return GG[tG[20]] > -tG[2] && GG[-tG[61]].push((GG[tG[39]] | GG[tG[20]] << GG[-tG[51]]) & tG[12]), NG(GG[-tG[61]])
```

#### 1926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13855` → after: `L14323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14323) · [Before (L13855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13855)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = fj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = fZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13857-L13860` → after: `L14325-L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14325-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14325-L14328) · [Before (L13857-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13857-L13860)

```diff
-         uu[xu[14]][Cj(430) + Cj(431) + Cj(432)] = xu[0];
-         let bj = xu[0],
-           cj = xu[62];
-         if (uu[xu[24]][Cj(433) + xu[33]] || uu[xu[19]]) {
+         GG[tG[37]][bG(tG[176]) + bG(tG[177]) + bG(tG[178])] = tG[1];
+         let KZ = tG[1],
+           hZ = tG[52];
+         if (GG[tG[16]][QZ(425) + tG[7]] || GG[tG[69]]) {
```

#### 1928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13862-L13864` → after: `L14330-L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14330-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14330-L14332) · [Before (L13862-L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13862-L13864)

```diff
-             for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = '7EiTcKYOgCae24Jw3(?BSq{`hv#Zj):mxtu6FQ^D,;&1N_~MoV"%8Wnfz/I+H50pU<[Pl$b]Rd*rs|k.GX=@}9y!A>L', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[39]].length, uu[xu[14]] = [], uu[xu[27]] = xu[0], uu[xu[60]] = xu[0], uu[xu[33] … [truncated]
-               if (uu[-xu[111]] = uu[xu[1]].indexOf(uu[xu[39]][uu[xu[57]]]), uu[-xu[111]] !== -xu[1])
-                 if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[-xu[111]];
+             for (pb(GG[tG[13]] = tG[2], GG[-tG[86]] = 'e?FlUEPOz*Si5rBu8s.H:0>D)my=o#xtQ+<4,C/~"AvnwG@pVX7!^MW&(6`|I2h$bak1[_d9Y]%3Z}T;{jJqgKcfLRN', GG[-tG[70]] = "" + (GG[tG[1]] || ""), GG[tG[24]] = GG[-tG[70]].length, GG[-tG[33]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[ … [truncated]
+               if (GG[tG[6]] = GG[-tG[86]].indexOf(GG[-tG[70]][GG[tG[11]]]), GG[tG[6]] !== -tG[2])
+                 if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[6]];
```

#### 1929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13866` → after: `L14334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14334) · [Before (L13866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13866)

```diff
-                   XE(uu[xu[33]] += uu[-xu[111]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[tG[7]] += GG[tG[6]] * tG[27], GG[tG[39]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13868-L13871` → after: `L14336-L14339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14336-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14336-L14339) · [Before (L13868-L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13868-L13871)

```diff
-                     XE(uu[xu[14]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[60]] -= xu[2])
-                   } while (uu[xu[60]] > xu[19]);
-                   uu[xu[33]] = -xu[1]
-                 } return uu[xu[33]] > -xu[1] && uu[xu[14]].push((uu[xu[27]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[14]])
+                     pb(GG[-tG[33]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                   } while (GG[tG[9]] > tG[20]);
+                   GG[tG[7]] = -tG[2]
+                 } return GG[tG[7]] > -tG[2] && GG[-tG[33]].push((GG[tG[39]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[-tG[33]])
```

#### 1931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13875` → after: `L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14343) · [Before (L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13875)

```diff
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Oj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = JZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13877-L13878` → after: `L14345-L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14345-L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14345-L14346) · [Before (L13877-L13878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13877-L13878)

```diff
-           XE(bj = xu[1], cj = uu[xu[19]] || !uu[xu[13]][Yj(434) + Yj(435) + Yj(436)])
-         } else {
+           pb(KZ = tG[2], hZ = GG[tG[69]] || !GG[tG[0]][QZ(426) + QZ(427) + rZ(428) + rZ(429)])
+         } else if (GG[tG[16]][QZ(430) + QZ(431)]) {
```

#### 1933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13880-L13882` → after: `L14348-L14350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14348-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14348-L14350) · [Before (L13880-L13882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13880-L13882)

```diff
-             for (XE(uu[xu[4]] = xu[1], uu[xu[132]] = 'zyx>3j*0;HUX_D.w&OTYi:/]NvJt5f7|asVI@ZQSgbdA=$q,MLmBCRl2r+o#[P{Eh"K1`?p8)<e4F~G}9^6%!(Wcnku', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[39]].length, uu[xu[7]] = [], uu[xu[220]] = xu[0], uu[xu[60]] = xu[0], uu[xu[3 … [truncated]
-               if (uu[xu[221]] = uu[xu[132]].indexOf(uu[xu[39]][uu[xu[63]]]), uu[xu[221]] !== -xu[1])
-                 if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[221]];
+             for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = '"ZaLXgVdrjKcPTfq/<b6#3uv`%]nzYA4O&BNmo_SF;>:Q=iHIk!9?s8UCD50h+2Gl^$J,y*{x7E}(t@[W).R|Mewp~1', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[tG[37]] = [], GG[tG[139]] = tG[1], GG[tG[18]] = tG[1], GG[tG[20] … [truncated]
+               if (GG[-tG[243]] = GG[tG[2]].indexOf(GG[tG[0]][GG[tG[26]]]), GG[-tG[243]] !== -tG[2])
+                 if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[-tG[243]];
```

#### 1934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13884` → after: `L14352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14352) · [Before (L13884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13884)

```diff
-                   XE(uu[xu[33]] += uu[xu[221]] * xu[23], uu[xu[220]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[tG[20]] += GG[-tG[243]] * tG[27], GG[tG[139]] |= GG[tG[20]] << GG[tG[18]], GG[tG[18]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13886-L13889` → after: `L14354-L14357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14354-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14354-L14357) · [Before (L13886-L13889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13886-L13889)

```diff
-                     XE(uu[xu[7]].push(uu[xu[220]] & xu[3]), uu[xu[220]] >>= xu[2], uu[xu[60]] -= xu[2])
-                   } while (uu[xu[60]] > xu[19]);
-                   uu[xu[33]] = -xu[1]
-                 } return uu[xu[33]] > -xu[1] && uu[xu[7]].push((uu[xu[220]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[7]])
+                     pb(GG[tG[37]].push(GG[tG[139]] & tG[12]), GG[tG[139]] >>= tG[11], GG[tG[18]] -= tG[11])
+                   } while (GG[tG[18]] > tG[20]);
+                   GG[tG[20]] = -tG[2]
+                 } return GG[tG[20]] > -tG[2] && GG[tG[37]].push((GG[tG[139]] | GG[tG[20]] << GG[tG[18]]) & tG[12]), NG(GG[tG[37]])
```

#### 1936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13893-L13912` → after: `L14361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14361) · [Before (L13893-L13912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13893-L13912)

```diff
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = hj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-           }
-           if (uu[xu[24]][Cj(437) + Dj(438)]) {
-             function gj(...uu) {
-               for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'T%#O=BamgAIWj[uN<0Zn:S*q_X6+{e`4EMU19d^ov,Fh]y)lPk;}YL3>!(ciwQ&GC|J~/5bH8x?r2$@pzD"V.7sKfRt', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[13]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], uu[xu[19 … [truncated]
-                 if (uu[-xu[223]] = uu[xu[8]].indexOf(uu[xu[13]][uu[xu[222]]]), uu[-xu[223]] !== -xu[1])
-                   if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[-xu[223]];
-                   else {
-                     XE(uu[xu[19]] += uu[-xu[223]] * xu[23], uu[xu[27]] |= uu[xu[19]] << uu[xu[17]], uu[xu[17]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                     do {
-                       XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-                     } while (uu[xu[17]] > xu[19]);
-                     uu[xu[19]] = -xu[1]
-                   } return uu[xu[19]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[19]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[7]])
-             }
- 
- ... (4 more removed lines; see GitHub link above)
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = zZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13915-L13917` → after: `L14365-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14365-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14365-L14367) · [Before (L13915-L13917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13915-L13917)

```diff
-         uu[xu[13]][Cj(xu[224]) + xu[225]][Cj(xu[227]) + Cj(xu[228])] = uu[xu[14]][xu[216]][xu[1]];
-         const Nj = (xu[0], du[xu[9]])(uu[xu[13]][Cj(xu[224]) + xu[225]], uu[xu[24]][xu[226]] !== xu[0], bj, cj);
-         XE(lu()[Cj(446)](mu, xu[0], Nj, xu[0]), uu[xu[14]][Cj(447) + Cj(448)](mu), uu[xu[14]][xu[216]][xu[1]] = uu[xu[13]][Cj(xu[224]) + xu[225]][Cj(xu[227]) + Cj(xu[228])], uu[xu[24]][Cj(449)][Cj(450) + Cj(451) + Cj(452)](Cj(453) + Cj(454) + Cj(455), xu[1] + uu[xu[13]][Cj(xu[224 … [truncated]
+         GG[tG[0]][QZ(tG[244]) + tG[245]][QZ(tG[247]) + QZ(tG[248])] = GG[tG[37]][tG[241]][tG[2]];
+         const dZ = (tG[1], mG[tG[6]])(GG[tG[0]][QZ(tG[244]) + tG[245]], GG[tG[16]][tG[246]] !== tG[1], KZ, hZ);
+         pb(kG()[QZ(439)](cG, tG[1], dZ, tG[1]), GG[tG[37]][QZ(440) + QZ(441)](cG), GG[tG[37]][tG[241]][tG[2]] = GG[tG[0]][QZ(tG[244]) + tG[245]][QZ(tG[247]) + QZ(tG[248])], GG[tG[16]][QZ(442)][QZ(443) + QZ(444) + QZ(445)](QZ(446) + QZ(447) + QZ(448), tG[2] + GG[tG[0]][QZ(tG[244]) … [truncated]
```

#### 1938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13920-L13922` → after: `L14370-L14372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14370-L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14370-L14372) · [Before (L13920-L13922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13920-L13922)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[-xu[229]] = '#4/*3u2@9L]5nEI%vJwa~qxj}=7R,"Vye(>tmGgAX&Hr<6pz+1Ub;[YBd)!D.`_$Q0h:CZfT^N|?cKW{FlPSM8oiOks', uu[-xu[137]] = "" + (uu[xu[0]] || ""), uu[-xu[231]] = uu[-xu[137]].length, uu[xu[7]] = [], uu[xu[56]] = xu[0], uu[xu[95]] = xu[0], uu … [truncated]
-             if (uu[xu[66]] = uu[-xu[229]].indexOf(uu[-xu[137]][uu[xu[230]]]), uu[xu[66]] !== -xu[1])
-               if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[66]];
+           for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'YuDFTkgMQLCBpmV05f_7"N[v2{,GX^wy;a4rH~@}qc]W>toI$J<3jE%1n8ObA!&i9dP*S=/Zel)s|z+#Ux6(:R.hK`?', GG[tG[80]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[80]].length, GG[-tG[249]] = [], GG[tG[8]] = tG[1], GG[-tG[80]] = tG[1], GG[tG[7 … [truncated]
+             if (GG[tG[6]] = GG[tG[2]].indexOf(GG[tG[80]][GG[tG[88]]]), GG[tG[6]] !== -tG[2])
+               if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[6]];
```

#### 1939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13924` → after: `L14374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14374) · [Before (L13924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13924)

```diff
-                 XE(uu[xu[33]] += uu[xu[66]] * xu[23], uu[xu[56]] |= uu[xu[33]] << uu[xu[95]], uu[xu[95]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[7]] += GG[tG[6]] * tG[27], GG[tG[8]] |= GG[tG[7]] << GG[-tG[80]], GG[-tG[80]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13926-L13929` → after: `L14376-L14379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14376-L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14376-L14379) · [Before (L13926-L13929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13926-L13929)

```diff
-                   XE(uu[xu[7]].push(uu[xu[56]] & xu[3]), uu[xu[56]] >>= xu[2], uu[xu[95]] -= xu[2])
-                 } while (uu[xu[95]] > xu[19]);
-                 uu[xu[33]] = -xu[1]
-               } return uu[xu[33]] > -xu[1] && uu[xu[7]].push((uu[xu[56]] | uu[xu[33]] << uu[xu[95]]) & xu[3]), Hu(uu[xu[7]])
+                   pb(GG[-tG[249]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[-tG[80]] -= tG[11])
+                 } while (GG[-tG[80]] > tG[20]);
+                 GG[tG[7]] = -tG[2]
+               } return GG[tG[7]] > -tG[2] && GG[-tG[249]].push((GG[tG[8]] | GG[tG[7]] << GG[-tG[80]]) & tG[12]), NG(GG[-tG[249]])
```

#### 1941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13933` → after: `L14383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14383) · [Before (L13933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13933)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = ej(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = oZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13935` → after: `L14385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14385) · [Before (L13935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13935)

```diff
-         XE(uu[xu[13]][Eu(456) + xu[225]].reset(), uu[xu[24]][Eu(xu[289])][Eu(xu[290]) + Eu(xu[291]) + Eu(xu[292])](Gj(461) + Gj(462) + Gj(463), xu[1]))
+         pb(GG[tG[0]][bG(449) + tG[245]].reset(), GG[tG[16]][XZ(450)][XZ(451) + XZ(452) + XZ(453)](XZ(454) + XZ(455) + XZ(456), tG[2]))
```

#### 1943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13937-L13939` → after: `L14387-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14387-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14387-L14389) · [Before (L13937-L13939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13937-L13939)

```diff
-       uu[-xu[232]] = xu[62];
-       const GE = Mu[xu[0]] || eu[xu[0]] && uu[xu[14]][Eu(xu[240]) + xu[33]][xu[0]] !== xu[0] && (Fu > xu[0] || fu[Eu(xu[233]) + Eu(xu[234]) + Eu(xu[235]) + xu[236]] > xu[0] && Math[Eu(xu[241])](uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + Eu(xu[239])][xu[0]]) >= fu[Eu(xu[242]) + Eu(xu[ … [truncated]
-         pE = Mu[xu[13]] || eu[xu[13]] && uu[xu[14]][Eu(xu[240]) + xu[33]][xu[13]] !== xu[0] && (Fu > xu[0] || fu[Eu(xu[233]) + Eu(xu[234]) + Eu(xu[235]) + xu[236]] > xu[0] && Math[Eu(xu[241])](uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + Eu(xu[239])][xu[13]]) >= fu[Eu(xu[242]) + Eu(xu[ … [truncated]
+       GG[-tG[65]] = tG[52];
+       const Eb = zG[tG[1]] || EG[tG[1]] && GG[tG[37]][bG(tG[257]) + tG[7]][tG[1]] !== tG[1] && (nG > tG[1] || YG[bG(tG[250]) + bG(tG[251]) + bG(tG[252]) + tG[253]] > tG[1] && Math[bG(tG[258])](GG[tG[0]][bG(tG[254]) + bG(tG[255]) + bG(tG[256])][tG[1]]) >= YG[bG(459) + bG(460) + bG … [truncated]
+         ob = zG[tG[0]] || EG[tG[0]] && GG[tG[37]][bG(tG[257]) + tG[7]][tG[0]] !== tG[1] && (nG > tG[1] || YG[bG(tG[250]) + bG(tG[251]) + bG(tG[252]) + tG[253]] > tG[1] && Math[bG(tG[258])](GG[tG[0]][bG(tG[254]) + bG(tG[255]) + bG(tG[256])][tG[0]]) >= YG[bG(462) + bG(463) + bG(464 … [truncated]
```

#### 1944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13941-L13944` → after: `L14391-L14394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14391-L14394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14391-L14394) · [Before (L13941-L13944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13941-L13944)

```diff
-         const pj = xu[17],
-           wj = xu[127],
-           Jj = xu[90];
-         if (uu[xu[14]][xu[259]](), GE) {
+         const uZ = tG[18],
+           iZ = tG[61],
+           CZ = tG[69];
+         if (GG[tG[37]][tG[271]](), Eb) {
```

#### 1945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13946-L13948` → after: `L14396-L14398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14396-L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14396-L14398) · [Before (L13946-L13948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13946-L13948)

```diff
-             for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'HAIhP,Y0Xa?"`cOvbTB;R&%M57U1il!t>s]|oymu.x$[Jj9ZW6@3NfE(Cgz#QL=/GDqK4)SF*pnd<w{rek^28_+:}~V', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[39]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[xu[17]] = xu[0], uu[-xu[247 … [truncated]
-               if (uu[xu[66]] = uu[xu[1]].indexOf(uu[xu[39]][uu[xu[97]]]), uu[xu[66]] !== -xu[1])
-                 if (uu[-xu[247]] < xu[0]) uu[-xu[247]] = uu[xu[66]];
+             for (pb(GG[tG[13]] = tG[2], GG[-tG[259]] = '[~y,0x)6AB"qU3jN;LwXWVIMH}E9J/:&hOi2ne={g1m+%C`5v4R?<spF|TrQ$_uKtPfal.#!oGSkZc^DYb@dz(7*>]8', GG[-tG[35]] = "" + (GG[tG[1]] || ""), GG[-tG[173]] = GG[-tG[35]].length, GG[tG[10]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], G … [truncated]
+               if (GG[tG[26]] = GG[-tG[259]].indexOf(GG[-tG[35]][GG[tG[3]]]), GG[tG[26]] !== -tG[2])
+                 if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[26]];
```

#### 1946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13950` → after: `L14400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14400) · [Before (L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13950)

```diff
-                   XE(uu[-xu[247]] += uu[xu[66]] * xu[23], uu[xu[9]] |= uu[-xu[247]] << uu[xu[17]], uu[xu[17]] += (uu[-xu[247]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[tG[20]] += GG[tG[26]] * tG[27], GG[tG[39]] |= GG[tG[20]] << GG[tG[9]], GG[tG[9]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13952-L13955` → after: `L14402-L14405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14402-L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14402-L14405) · [Before (L13952-L13955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13952-L13955)

```diff
-                     XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[17]] -= xu[2])
-                   } while (uu[xu[17]] > xu[19]);
-                   uu[-xu[247]] = -xu[1]
-                 } return uu[-xu[247]] > -xu[1] && uu[xu[14]].push((uu[xu[9]] | uu[-xu[247]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[14]])
+                     pb(GG[tG[10]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                   } while (GG[tG[9]] > tG[20]);
+                   GG[tG[20]] = -tG[2]
+                 } return GG[tG[20]] > -tG[2] && GG[tG[10]].push((GG[tG[39]] | GG[tG[20]] << GG[tG[9]]) & tG[12]), NG(GG[tG[10]])
```

#### 1948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13959` → after: `L14409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14409) · [Before (L13959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13959)

```diff
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = dj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = WZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13961-L13963` → after: `L14411-L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14411-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14411-L14413) · [Before (L13961-L13963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13961-L13963)

```diff
-           const Pj = uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + Eu(xu[239])][xu[0]] <= xu[0] ? xu[1] : -xu[1],
-             oj = Math[Eu(xu[248])](Jj, Math[Eu(xu[241])](uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + aj(471)][xu[0]]));
-           XE(uu[xu[14]][xu[216]][xu[0]] = Pj * oj * (Mu[xu[0]] ? xu[1] : Bu), ZE(uu[xu[0]], Mu[xu[0]], [uu[xu[14]][aj(472) + xu[33]][xu[0]], xu[0], xu[0]]))
+           const IZ = GG[tG[0]][bG(tG[254]) + bG(tG[255]) + mZ(tG[260])][tG[1]] <= tG[1] ? tG[2] : -tG[2],
+             FZ = Math[mZ(467)](CZ, Math[mZ(468)](GG[tG[0]][mZ(469) + mZ(470) + mZ(tG[260])][tG[1]]));
+           pb(GG[tG[37]][tG[241]][tG[1]] = IZ * FZ * (zG[tG[1]] ? tG[2] : gG), Vb(GG[tG[1]], zG[tG[1]], [GG[tG[37]][mZ(471) + tG[7]][tG[1]], tG[1], tG[1]]))
```

#### 1950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13967-L13969` → after: `L14417-L14419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14417-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14417-L14419) · [Before (L13967-L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13967-L13969)

```diff
-             for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'Ad6uc`^hORv}XV!tpoB])rzT$L*9y/"iP[&kx7=|D5E_W<Y4Iq#1%{nef2F,Kl?M+@NC:g>0Z8UHG~;w3(QJjab.msS', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[60]] = xu[0], uu[xu[33] … [truncated]
-               if (uu[xu[66]] = uu[xu[1]].indexOf(uu[xu[39]][uu[xu[57]]]), uu[xu[66]] !== -xu[1])
-                 if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[66]];
+             for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'd_hcBGo:v^WJuK~3PX<4)"0Ajpm]{w;,6[+QzyO@(&fE!%e/RskI1aDLxbqi`V7*gn.?8TZUHF|Mltr}>Y#S=$NC259', GG[-tG[174]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[-tG[174]].length, GG[tG[10]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1], GG[-t … [truncated]
+               if (GG[tG[263]] = GG[tG[5]].indexOf(GG[-tG[174]][GG[-tG[262]]]), GG[tG[263]] !== -tG[2])
+                 if (GG[-tG[261]] < tG[1]) GG[-tG[261]] = GG[tG[263]];
```

#### 1951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13971` → after: `L14421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14421) · [Before (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13971)

```diff
-                   XE(uu[xu[33]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[-tG[261]] += GG[tG[263]] * tG[27], GG[tG[8]] |= GG[-tG[261]] << GG[tG[18]], GG[tG[18]] += (GG[-tG[261]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13973-L13976` → after: `L14423-L14426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14423-L14426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14423-L14426) · [Before (L13973-L13976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13973-L13976)

```diff
-                     XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[60]] -= xu[2])
-                   } while (uu[xu[60]] > xu[19]);
-                   uu[xu[33]] = -xu[1]
-                 } return uu[xu[33]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[7]])
+                     pb(GG[tG[10]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                   } while (GG[tG[18]] > tG[20]);
+                   GG[-tG[261]] = -tG[2]
+                 } return GG[-tG[261]] > -tG[2] && GG[tG[10]].push((GG[tG[8]] | GG[-tG[261]] << GG[tG[18]]) & tG[12]), NG(GG[tG[10]])
```

#### 1953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13980-L14001` → after: `L14430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14430) · [Before (L13980-L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L13980-L14001)

```diff
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = kj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-           }
-           const vj = uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + Eu(xu[239])][xu[1]] <= xu[0] ? xu[1] : -xu[1];
-           let Kj = Math[Eu(xu[248])](pj, Math[mj(473)](uu[xu[13]][mj(474) + mj(475) + mj(476)][xu[1]]));
-           if (Kj < wj && uu[xu[24]][mj(477) + xu[33]] && vj === xu[1] && (Kj = Math[mj(478)](Kj + 22 / Kj + 2.3, wj)), eE && uu[xu[13]][mj(479)]) {
-             function Vj(...uu) {
-               for (XE(uu[xu[4]] = xu[1], uu[xu[252]] = '54$@^xF8A:l&ik{.byYT[W(6#jd%QcZS*EPm_~HG!oL]}9Mz3VRDue7X;ahJwIsq,"g`Btr0?vN/nOU<K)+2Cfp1=>|', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[249]] = uu[xu[13]].length, uu[-xu[250]] = [], uu[xu[9]] = xu[0], uu[xu[60]] = xu[0], uu … [truncated]
-                 if (uu[xu[26]] = uu[xu[252]].indexOf(uu[xu[13]][uu[xu[251]]]), uu[xu[26]] !== -xu[1])
-                   if (uu[-xu[41]] < xu[0]) uu[-xu[41]] = uu[xu[26]];
-                   else {
-                     XE(uu[-xu[41]] += uu[xu[26]] * xu[23], uu[xu[9]] |= uu[-xu[41]] << uu[xu[60]], uu[xu[60]] += (uu[-xu[41]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                     do {
-                       XE(uu[-xu[250]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[60]] -= xu[2])
-                     } while (uu[xu[60]] > xu[19]);
-                     uu[-xu[41]] = -xu[1]
-                   } return uu[-xu[41]] > -xu[1] && uu[-xu[250]].push((uu[xu[9]] | uu[-xu[41]] << uu[xu[60]]) & xu[3]), Hu(uu[-xu[250]])
- ... (6 more removed lines; see GitHub link above)
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = vZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14003-L14027` → after: `L14432-L14434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14432-L14434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14432-L14434) · [Before (L14003-L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14003-L14027)

```diff
-           if (uu[xu[14]][xu[216]][xu[1]] = vj * Kj * (Mu[xu[1]] ? xu[1] : Lu), uu[-xu[232]]) {
-             function Qj(uu) {
-               var Eu, ju, su, Uu, Zu, Xu, lu;
-               for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-                 var qu = 'EXx)[~pNq;3!iDJPHQh(O"]?a7|6uk}2Wz9<j.*/Lb5Yt4%c&y+{1r>^GM`ngF:,Im=wATBeov0@8s_RC$l#VKSZUdf'.indexOf(Eu[lu]);
-                 if (qu !== -xu[1])
-                   if (Xu < xu[0]) Xu = qu;
-                   else {
-                     XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                     do {
-                       XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                     } while (Zu > xu[19]);
-                     Xu = -xu[1]
-                   }
-               }
-               return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
- ... (9 more removed lines; see GitHub link above)
+           const cZ = GG[tG[0]][bG(tG[254]) + bG(tG[255]) + aZ(tG[264])][tG[2]] <= tG[1] ? tG[2] : -tG[2];
+           let lZ = Math[aZ(473)](uZ, Math[aZ(474)](GG[tG[0]][aZ(475) + aZ(476) + aZ(tG[264])][tG[2]]));
+           lZ < iZ && GG[tG[16]][aZ(477) + tG[7]] && cZ === tG[2] && (lZ = Math[aZ(478)](lZ + tG[265] / lZ + 2.3, iZ)), zb && GG[tG[0]][aZ(tG[266])] && pb(GG[tG[0]][aZ(tG[266])] = tG[52], lZ += tG[39], GG[-tG[65]] = tG[53]), pb(GG[tG[37]][tG[241]][tG[2]] = cZ * lZ * (zG[tG[2]] ? t … [truncated]
```

#### 1955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14030-L14048` → after: `L14437-L14439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14437-L14439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14437-L14439) · [Before (L14030-L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14030-L14048)

```diff
-           function Wj(...uu) {
-             for (XE(uu[xu[4]] = xu[1], uu[-xu[253]] = 'g1Y0*Smu`vf]2|[Gp5#X7EDTQ9C=Nb(O:sdz/wRUBk{Le>lqK_<A~$+c)Z!&x3I6y4n.%J8tj@i;?F}^PWa,"HhMroV', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[97]] = uu[xu[13]].length, uu[-xu[67]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], uu[x … [truncated]
-               if (uu[xu[66]] = uu[-xu[253]].indexOf(uu[xu[13]][uu[xu[254]]]), uu[xu[66]] !== -xu[1])
-                 if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[66]];
-                 else {
-                   XE(uu[xu[33]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[xu[17]], uu[xu[17]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                   do {
-                     XE(uu[-xu[67]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-                   } while (uu[xu[17]] > xu[19]);
-                   uu[xu[33]] = -xu[1]
-                 } return uu[xu[33]] > -xu[1] && uu[-xu[67]].push((uu[xu[27]] | uu[xu[33]] << uu[xu[17]]) & xu[3]), Hu(uu[-xu[67]])
-           }
- 
-           function Sj(...uu) {
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Wj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-           }
- ... (3 more removed lines; see GitHub link above)
+           const jZ = GG[tG[0]][bG(tG[254]) + bG(tG[255]) + bG(tG[256])][tG[0]] <= tG[1] ? tG[2] : -tG[2],
+             PZ = Math[bG(tG[328])](CZ, Math[bG(tG[258])](GG[tG[0]][bG(tG[254]) + bG(tG[255]) + bG(tG[256])][tG[0]]));
+           pb(GG[tG[37]][tG[241]][tG[0]] = jZ * PZ * (zG[tG[0]] ? tG[2] : gG), Vb(GG[tG[1]], zG[tG[0]], [tG[1], tG[1], GG[tG[37]][bG(tG[257]) + tG[7]][tG[0]]]))
```

#### 1956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14050` → after: `L14441-L14442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14441-L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14441-L14442) · [Before (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14050)

```diff
-       } else if (fE) {
+       } else BG && (GG[tG[0]][bG(484)] = tG[53]);
+       if (pb(Ub(GG[tG[1]], GG[tG[2]], YG[bG(485)], GG[tG[37]][bG(tG[257]) + tG[7]][tG[2]], GG[tG[0]][bG(tG[254]) + bG(tG[255]) + bG(tG[256])][tG[2]]), GG[tG[9]] = tG[1]), GG[tG[37]][bG(tG[257]) + tG[7]][tG[1]] !== tG[1] && (GG[tG[9]] = GG[tG[0]][bG(tG[254]) + bG(tG[255]) + bG(tG[ … [truncated]
```

#### 1957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14052-L14054` → after: `L14444-L14446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14444-L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14444-L14446) · [Before (L14052-L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14052-L14054)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'OMlrWq]HIYdiu1Tft^gs<PE`VJ&k_{o;+[F?Sy:nvm$UAB#.>DXc=Nh/K"axz*CQ!2w@,}0Gj~e|p9)4RLZ3b(65%78', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[-xu[247]] = uu[xu[13]].length, uu[-xu[257]] = [], uu[xu[9]] = xu[0], uu[-xu[258]] = xu[0], uu[xu … [truncated]
-             if (uu[xu[26]] = uu[xu[1]].indexOf(uu[xu[13]][uu[xu[2]]]), uu[xu[26]] !== -xu[1])
-               if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[26]];
+           for (pb(GG[tG[13]] = tG[2], GG[-tG[30]] = 'hJH3uc$gt`,sABfzoIm+}CXSr>M;7vW)9]DK*i#q&/8{1%0QbaNne(6_2":!|?[dR5jEF@<wZGx.Py=~TVkULlpOY^4', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[tG[37]] = [], GG[-tG[269]] = tG[1], GG[tG[270]] = tG[1], GG[tG[1 … [truncated]
+             if (GG[tG[26]] = GG[-tG[30]].indexOf(GG[tG[0]][GG[tG[11]]]), GG[tG[26]] !== -tG[2])
+               if (GG[tG[132]] < tG[1]) GG[tG[132]] = GG[tG[26]];
```

#### 1958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14056` → after: `L14448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14448) · [Before (L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14056)

```diff
-                 XE(uu[xu[33]] += uu[xu[26]] * xu[23], uu[xu[9]] |= uu[xu[33]] << uu[-xu[258]], uu[-xu[258]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[132]] += GG[tG[26]] * tG[27], GG[-tG[269]] |= GG[tG[132]] << GG[tG[270]], GG[tG[270]] += (GG[tG[132]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14058-L14061` → after: `L14450-L14453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14450-L14453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14450-L14453) · [Before (L14058-L14061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14058-L14061)

```diff
-                   XE(uu[-xu[257]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[-xu[258]] -= xu[2])
-                 } while (uu[-xu[258]] > xu[19]);
-                 uu[xu[33]] = -xu[1]
-               } return uu[xu[33]] > -xu[1] && uu[-xu[257]].push((uu[xu[9]] | uu[xu[33]] << uu[-xu[258]]) & xu[3]), Hu(uu[-xu[257]])
+                   pb(GG[tG[37]].push(GG[-tG[269]] & tG[12]), GG[-tG[269]] >>= tG[11], GG[tG[270]] -= tG[11])
+                 } while (GG[tG[270]] > tG[20]);
+                 GG[tG[132]] = -tG[2]
+               } return GG[tG[132]] > -tG[2] && GG[tG[37]].push((GG[-tG[269]] | GG[tG[132]] << GG[tG[270]]) & tG[12]), NG(GG[tG[37]])
```

#### 1960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14065` → after: `L14457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14457) · [Before (L14065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14065)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Bj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = MZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14067` → after: `L14459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14459) · [Before (L14067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14067)

```diff
-         uu[xu[13]][Lj(492)] = xu[68]
+         Yb(GG[tG[1]], IG[tG[7]][AZ(487) + "op"], [tG[1], -tG[2], tG[1]])
```

#### 1962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14069` → after: `L14461-L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14461-L14462) · [Before (L14069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14069)

```diff
-       if (XE(UE(uu[xu[0]], uu[xu[1]], fu[Eu(493)], uu[xu[14]][Eu(xu[240]) + xu[33]][xu[1]], uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + Eu(xu[239])][xu[1]]), uu[xu[9]] = xu[0]), uu[xu[14]][Eu(xu[240]) + xu[33]][xu[0]] !== xu[0]) {
+       if (GG[tG[0]][bG(488)] = uG, iG > tG[1] && GG[tG[37]][tG[241]][tG[2]] < iG) pb(GG[tG[37]][tG[241]][tG[2]] = iG, GG[tG[37]][tG[271]](), Yb(GG[tG[1]], IG[tG[7]][bG(489) + tG[10]], [tG[1], -tG[2], tG[1]]));
+       else {
```

#### 1963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14071-L14073` → after: `L14464-L14466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14464-L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14464-L14466) · [Before (L14071-L14073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14071-L14073)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[-xu[2]] = ']ARm$;Du@X{Ne8[hb|p)r:_F4WVGOZidL(vS*nJ}!q0TB,wgKo/3xIaUc>%1y95Y2s.7fkP=<~"+lz`MHjCE#&6^tQ?', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[xu[7]] = [], uu[xu[27]] = xu[0], uu[xu[60]] = xu[0], uu[xu[33]] … [truncated]
-             if (uu[xu[26]] = uu[-xu[2]].indexOf(uu[xu[39]][uu[xu[215]]]), uu[xu[26]] !== -xu[1])
-               if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[26]];
+           for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'V?aNRG7s.#U+ACqK8[B~iTt,FEc$:n!Z%]d0)r3LlMP|/5@=w*DWh&1x2j`b^SgIu<{Hv(_"p4J9kQ}zOXef>;myoY6', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[23]].length, GG[tG[37]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1], GG[tG[7]] = … [truncated]
+             if (GG[-tG[217]] = GG[tG[5]].indexOf(GG[tG[23]][GG[tG[3]]]), GG[-tG[217]] !== -tG[2])
+               if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[-tG[217]];
```

#### 1964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14075` → after: `L14468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14468) · [Before (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14075)

```diff
-                 XE(uu[xu[33]] += uu[xu[26]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[xu[60]], uu[xu[60]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[7]] += GG[-tG[217]] * tG[27], GG[tG[8]] |= GG[tG[7]] << GG[tG[18]], GG[tG[18]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14077-L14080` → after: `L14470-L14473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14470-L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14470-L14473) · [Before (L14077-L14080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14077-L14080)

```diff
-                   XE(uu[xu[7]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[60]] -= xu[2])
-                 } while (uu[xu[60]] > xu[19]);
-                 uu[xu[33]] = -xu[1]
-               } return uu[xu[33]] > -xu[1] && uu[xu[7]].push((uu[xu[27]] | uu[xu[33]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[7]])
+                   pb(GG[tG[37]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                 } while (GG[tG[18]] > tG[20]);
+                 GG[tG[7]] = -tG[2]
+               } return GG[tG[7]] > -tG[2] && GG[tG[37]].push((GG[tG[8]] | GG[tG[7]] << GG[tG[18]]) & tG[12]), NG(GG[tG[37]])
```

#### 1966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14084-L14108` → after: `L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14477) · [Before (L14084-L14108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14084-L14108)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = tj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-         }
-         uu[xu[9]] = uu[xu[13]][xj(494) + xj(495) + xj(496)][xu[0]]
-       }
-       if (uu[xu[14]][Eu(xu[240]) + xu[33]][xu[13]] !== xu[0] && Math[Eu(xu[241])](uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + Eu(xu[239])][xu[13]]) > Math[Eu(xu[241])](uu[xu[9]]) && (uu[xu[9]] = uu[xu[13]][Eu(xu[237]) + Eu(xu[238]) + Eu(xu[239])][xu[13]]), UE(uu[xu[0]], uu[xu[1]], fu[ … [truncated]
-           [xu[0], -xu[1], xu[0]]
-         ], nu(Eu(xu[260]), Eu(xu[268]) + Eu(501), Eu(502) + Eu(503))[Eu(504) + Eu(505)]), uu[xu[13]][Eu(506)] = wu, Ku > xu[0] && uu[xu[14]][xu[216]][xu[1]] < Ku) XE(uu[xu[14]][xu[216]][xu[1]] = Ku, uu[xu[14]][xu[259]](), tu = [uu[xu[0]], au[xu[7]][Eu(xu[267]) + xu[7]],
-         [xu[0], -xu[1], xu[0]]
-       ], nu(Eu(xu[260])));
-       else if (fE && !uu[xu[13]][Eu(xu[261]) + Eu(xu[262]) + Eu(xu[263])] && wu) {
-         function Tj(...uu) {
-           for (XE(uu[xu[4]] = xu[1], uu[xu[230]] = 'r@}_u!"924&*5.v<0w3xy^]%#h,LpKMmj/zitT6dq:OHk~XAS(RVgIBD8e1EnfU|+$CF?Y;lNb7JsP>Q{G)WoZ`[ac=', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[13]].length, uu[-xu[264]] = [], uu[xu[27]] = xu[0], uu[xu[60]] = xu[0], uu[xu[2 … [truncated]
-             if (uu[xu[78]] = uu[xu[230]].indexOf(uu[xu[13]][uu[xu[266]]]), uu[xu[78]] !== -xu[1])
-               if (uu[xu[265]] < xu[0]) uu[xu[265]] = uu[xu[78]];
-               else {
-                 XE(uu[xu[265]] += uu[xu[78]] * xu[23], uu[xu[27]] |= uu[xu[265]] << uu[xu[60]], uu[xu[60]] += (uu[xu[265]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
- ... (9 more removed lines; see GitHub link above)
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = sZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14110-L14112` → after: `L14479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14479) · [Before (L14110-L14112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14110-L14112)

```diff
-         XE(tu = [uu[xu[0]], au[xu[7]][Eu(xu[267]) + xu[7]],
-           [xu[0], -xu[1], xu[0]]
-         ], new nu(Eu(xu[260]), Eu(xu[268]) + Hj(508), Hj(509) + Hj(510))[Hj(511) + Hj(512)])
+         BG && !GG[tG[0]][qZ(490) + qZ(491) + qZ(492)] && uG && Yb(GG[tG[1]], IG[tG[7]][qZ(493) + tG[10]], [tG[1], -tG[2], tG[1]])
```

#### 1968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14114-L14130` → after: `L14481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14481) · [Before (L14114-L14130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14114-L14130)

```diff
-       if (!uu[xu[13]][Eu(xu[218]) + xu[33]]) {
-         function Aj(...uu) {
-           for (XE(uu[xu[4]] = xu[1], uu[xu[132]] = 'k?073u"|)!6n_@tlr9WPLMvSmU*=h8Rbig+F1]s$w[&E;K^ODX}C>.#eV{JBI:o/x%A<Zca~,Gy(zNTp5Q4fHjYq2d`', uu[xu[45]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[45]].length, uu[xu[14]] = [], uu[-xu[253]] = xu[0], uu[xu[79]] = xu[0], uu[xu[ … [truncated]
-             if (uu[xu[269]] = uu[xu[132]].indexOf(uu[xu[45]][uu[-xu[108]]]), uu[xu[269]] !== -xu[1])
-               if (uu[xu[17]] < xu[0]) uu[xu[17]] = uu[xu[269]];
-               else {
-                 XE(uu[xu[17]] += uu[xu[269]] * xu[23], uu[-xu[253]] |= uu[xu[17]] << uu[xu[79]], uu[xu[79]] += (uu[xu[17]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                 do {
-                   XE(uu[xu[14]].push(uu[-xu[253]] & xu[3]), uu[-xu[253]] >>= xu[2], uu[xu[79]] -= xu[2])
-                 } while (uu[xu[79]] > xu[19]);
-                 uu[xu[17]] = -xu[1]
-               } return uu[xu[17]] > -xu[1] && uu[xu[14]].push((uu[-xu[253]] | uu[xu[17]] << uu[xu[79]]) & xu[3]), Hu(uu[xu[14]])
-         }
- 
-         function nj(...uu) {
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Aj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
- ... (1 more removed lines; see GitHub link above)
+       if (!GG[tG[0]][bG(tG[220]) + tG[7]]) {
```

#### 1969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14133-L14135` → after: `L14484-L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14484-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14484-L14486) · [Before (L14133-L14135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14133-L14135)

```diff
-             for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'EuPI0:[i73]QD^$v>dZ/*CTpUwa)(@K}2e`OVY4_<8cnjHx"sRJB%!f;6X?&#59yqt.,zg|=k{1+~NrFALWohSbGmMl', uu[xu[13]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[13]].length, uu[xu[14]] = [], uu[-xu[270]] = xu[0], uu[xu[60]] = xu[0], uu[xu[ … [truncated]
-               if (uu[xu[26]] = uu[xu[8]].indexOf(uu[xu[13]][uu[xu[81]]]), uu[xu[26]] !== -xu[1])
-                 if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[26]];
+             for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'FGXEAguB0ZCH/3iv@<QTo2p";k*}IYb.=JM,twf[>r:]xdKD_ORys+`^Pe(q4LS$chNlWVUzamj17%#9!5&|8)?{6n~', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[23]].length, GG[tG[37]] = [], GG[tG[8]] = tG[1], GG[tG[18]] = tG[1], GG[tG[27 … [truncated]
+               if (GG[tG[26]] = GG[tG[2]].indexOf(GG[tG[23]][GG[tG[38]]]), GG[tG[26]] !== -tG[2])
+                 if (GG[tG[272]] < tG[1]) GG[tG[272]] = GG[tG[26]];
```

#### 1970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14137` → after: `L14488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14488) · [Before (L14137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14137)

```diff
-                   XE(uu[xu[19]] += uu[xu[26]] * xu[23], uu[-xu[270]] |= uu[xu[19]] << uu[xu[60]], uu[xu[60]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[tG[272]] += GG[tG[26]] * tG[27], GG[tG[8]] |= GG[tG[272]] << GG[tG[18]], GG[tG[18]] += (GG[tG[272]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14139-L14142` → after: `L14490-L14493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14490-L14493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14490-L14493) · [Before (L14139-L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14139-L14142)

```diff
-                     XE(uu[xu[14]].push(uu[-xu[270]] & xu[3]), uu[-xu[270]] >>= xu[2], uu[xu[60]] -= xu[2])
-                   } while (uu[xu[60]] > xu[19]);
-                   uu[xu[19]] = -xu[1]
-                 } return uu[xu[19]] > -xu[1] && uu[xu[14]].push((uu[-xu[270]] | uu[xu[19]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[14]])
+                     pb(GG[tG[37]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[18]] -= tG[11])
+                   } while (GG[tG[18]] > tG[20]);
+                   GG[tG[272]] = -tG[2]
+                 } return GG[tG[272]] > -tG[2] && GG[tG[37]].push((GG[tG[8]] | GG[tG[272]] << GG[tG[18]]) & tG[12]), NG(GG[tG[37]])
```

#### 1972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14145-L14146` → after: `L14496-L14497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14496-L14497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14496-L14497) · [Before (L14145-L14146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14145-L14146)

```diff
-           function zj(...uu) {
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = yj(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           function gZ(GG) {
+             return typeof PG[GG] === tG[14] ? PG[GG] = nZ(MG[GG]) : PG[GG]
```

#### 1973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14148-L14176` → after: `L14499-L14507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14499-L14507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14499-L14507) · [Before (L14148-L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14148-L14176)

```diff
-           if (uu[xu[14]][xu[216]][xu[1]] <= xu[0]) {
-             function Es(uu) {
-               var Eu, ju, su, Uu, Zu, Xu, lu;
-               for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-                 var qu = 'u2{09n=1};)NdG&v,xj_%#UA^]o[6gL/FP<IHM@i|"+ql`8fX$swzymkDWZBK~V*SJ:.e(cCErth>QYp?3a5Rb4TO7!'.indexOf(Eu[lu]);
-                 if (qu !== -xu[1])
-                   if (Xu < xu[0]) Xu = qu;
-                   else {
-                     XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                     do {
-                       XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                     } while (Zu > xu[19]);
-                     Xu = -xu[1]
-                   }
-               }
-               return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
- ... (13 more removed lines; see GitHub link above)
+           GG[tG[37]][tG[241]][tG[2]] <= tG[1] ? (GG[tG[0]][bG(tG[274]) + bG(tG[275]) + bG(tG[276]) + tG[273]] && (GG[tG[0]][bG(tG[277])] = tG[1]), GG[tG[0]][bG(tG[274]) + bG(tG[275]) + bG(tG[276]) + tG[273]] = tG[52]) : (GG[tG[0]][bG(tG[274]) + bG(tG[275]) + bG(tG[276]) + tG[273] … [truncated]
+           const eZ = Math[bG(tG[329])](GG[tG[0]][bG(tG[277])], GG[tG[0]][bG(499) + bG(500) + gZ(tG[278])]) / GG[tG[0]][gZ(tG[279]) + gZ(503) + gZ(tG[278])],
+             RZ = GG[tG[0]][gZ(tG[279]) + gZ(tG[280]) + tG[267]] + eZ * (GG[tG[0]][gZ(tG[279]) + gZ(505) + tG[267]] - GG[tG[0]][gZ(tG[279]) + gZ(tG[280]) + tG[267]]);
+           if (GG[tG[37]][tG[241]][tG[2]] <= tG[1] && GG[tG[16]][gZ(506) + gZ(507)]) GG[tG[37]][gZ(tG[282]) + gZ(509) + gZ(510)] = tG[1];
+           else {
+             function TZ(...GG) {
+               for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'GZ&`pSzx%Je~Hasf^Or531/W9o4Qh2wvP_XiY:V;Id(Eku!.<RC0M>[D6@$b+#yj)?tm7]A8=}L*Tn{",qF|cBNgKUl', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[-tG[66]] = GG[tG[23]].length, GG[tG[37]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[tG … [truncated]
+                 if (GG[tG[26]] = GG[tG[5]].indexOf(GG[tG[23]][GG[-tG[281]]]), GG[tG[26]] !== -tG[2])
+                   if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[26]];
```

#### 1974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14178` → after: `L14509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14509) · [Before (L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14178)

```diff
-                     XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                     pb(GG[tG[20]] += GG[tG[26]] * tG[27], GG[tG[39]] |= GG[tG[20]] << GG[tG[9]], GG[tG[9]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14180-L14185` → after: `L14511-L14514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14511-L14514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14511-L14514) · [Before (L14180-L14185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14180-L14185)

```diff
-                       XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                     } while (Zu > xu[19]);
-                     Xu = -xu[1]
-                   }
-               }
-               return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
+                       pb(GG[tG[37]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                     } while (GG[tG[9]] > tG[20]);
+                     GG[tG[20]] = -tG[2]
+                   } return GG[tG[20]] > -tG[2] && GG[tG[37]].push((GG[tG[39]] | GG[tG[20]] << GG[tG[9]]) & tG[12]), NG(GG[tG[37]])
```

#### 1976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14189` → after: `L14518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14518) · [Before (L14189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14189)

```diff
-               return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Us(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = TZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14191` → after: `L14520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14520) · [Before (L14191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14191)

```diff
-             uu[xu[13]][Eu(xu[273]) + Eu(xu[274]) + Zs(xu[275]) + xu[272]] || (uu[xu[13]][Zs(520)] = xu[0]), uu[xu[13]][Zs(521) + Zs(522) + Zs(xu[275]) + xu[272]] = xu[68]
+             GG[tG[37]][gZ(tG[282]) + HZ(511) + HZ(tG[64])] = RZ / tG[106]
```

#### 1978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14193-L14196` → after: `L14522-L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14522-L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14522-L14523) · [Before (L14193-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14193-L14196)

```diff
-           const Rj = Math[Eu(xu[325])](uu[xu[13]][Eu(xu[294])], uu[xu[13]][zj(xu[276]) + zj(xu[277]) + zj(xu[278])]) / uu[xu[13]][zj(xu[276]) + zj(xu[277]) + zj(xu[278])],
-             us = uu[xu[13]][zj(xu[276]) + zj(xu[279]) + xu[246]] + Rj * (uu[xu[13]][zj(xu[276]) + zj(529) + xu[246]] - uu[xu[13]][zj(xu[276]) + zj(xu[279]) + xu[246]]);
-           if (XE(uu[xu[14]][xu[216]][xu[1]] <= xu[0] && uu[xu[24]][zj(530) + zj(531)] ? uu[xu[14]][zj(xu[280]) + zj(xu[281]) + zj(xu[282])] = xu[0] : uu[xu[14]][zj(xu[280]) + zj(xu[281]) + zj(xu[282])] = us / xu[188], uu[xu[24]][zj(535)][zj(536) + zj(537) + zj(538)](zj(xu[276]),  … [truncated]
-             for (let Xs = xu[0]; Xs < vu[zj(xu[283])]; Xs++) {
+           if (pb(GG[tG[16]][gZ(513)][gZ(514) + gZ(515) + gZ(516)](gZ(tG[279]), .7), GG[tG[37]][gZ(517) + tG[294]] = .25, GG[tG[37]][tG[241]][tG[2]] = tG[1]), hG)
+             for (let tZ = tG[1]; tZ < lG[gZ(518)]; tZ++) {
```

#### 1979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14200-L14204` → after: `L14543-L14549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14543-L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14543-L14549) · [Before (L14200-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14200-L14204)

```diff
-                 if (XE(lu()[zj(xu[287])](mu, xu[0], us * Pu[xu[39]][qs], xu[0]), uu[xu[14]][zj(542) + zj(543)](mu)), uu[xu[24]][zj(xu[285]) + xu[33]] && uu[xu[13]][zj(xu[288])]) {
-                   function fs(...uu) {
-                     for (XE(uu[xu[4]] = xu[1], uu[-xu[71]] = '7SBJaCEsv;{#UOAd_[p&>PizM/m3ty1r@oe$ZkQV]+`8:*2L.uRX(fI4=Y^Gw<"%?5g|x960!qhH}nDj~)KNTlWbcF,', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[39]].length, uu[xu[14]] = [], uu[xu[27]] = xu[0], uu[xu[17]] = xu[0], … [truncated]
-                       if (uu[xu[26]] = uu[-xu[71]].indexOf(uu[xu[39]][uu[xu[114]]]), uu[xu[26]] !== -xu[1])
-                         if (uu[-xu[81]] < xu[0]) uu[-xu[81]] = uu[xu[26]];
+                 if (pb(kG()[gZ(tG[289])](cG, tG[1], RZ * FG[tG[23]][xZ], tG[1]), GG[tG[37]][gZ(tG[290]) + gZ(tG[291])](cG)), GG[tG[16]][gZ(tG[288]) + tG[7]] && GG[tG[0]][OZ(523)]) {
+                   function BZ(GG) {
+                     var bG, ZG, wG, SG, LG, yG, kG;
+                     for (pb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = tG[1], LG = tG[1], yG = -tG[2]), kG = tG[1]; kG < ZG; kG++) {
+                       var UG = 'R8ErS32WDx<Tj7w0ma]Kk%*PY$Z[Ud~f1+C!GylINvp_B`Mh=VstFgc9iJXQ,{zH6oL"/b#&^}:eA;@q45|.)n?u(>O'.indexOf(bG[kG]);
+                       if (UG !== -tG[2])
+                         if (yG < tG[1]) yG = UG;
```

#### 1980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14206` → after: `L14551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14551) · [Before (L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14206)

```diff
-                           XE(uu[-xu[81]] += uu[xu[26]] * xu[23], uu[xu[27]] |= uu[-xu[81]] << uu[xu[17]], uu[xu[17]] += (uu[-xu[81]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                           pb(yG += UG * tG[27], SG |= yG << LG, LG += (yG & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1981. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14208-L14211` → after: `L14553-L14558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14553-L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14553-L14558) · [Before (L14208-L14211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14208-L14211)

```diff
-                             XE(uu[xu[14]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[17]] -= xu[2])
-                           } while (uu[xu[17]] > xu[19]);
-                           uu[-xu[81]] = -xu[1]
-                         } return uu[-xu[81]] > -xu[1] && uu[xu[14]].push((uu[xu[27]] | uu[-xu[81]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[14]])
+                             pb(wG.push(SG & tG[12]), SG >>= tG[11], LG -= tG[11])
+                           } while (LG > tG[20]);
+                           yG = -tG[2]
+                         }
+                     }
+                     return yG > -tG[2] && wG.push((SG | yG << LG) & tG[12]), NG(wG)
```

#### 1982. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14215` → after: `L14562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14562) · [Before (L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14215)

```diff
-                     return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = fs(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+                     return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = BZ(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1983. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14217` → after: `L14564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14564) · [Before (L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14217)

```diff
-                   XE(uu[xu[13]][zj(546)] = xu[0], uu[xu[13]][zj(547) + zj(548) + zj(549)] = ls, uu[xu[13]][zj(550) + zj(551) + zj(552)] = -uu[xu[14]][Cs(553) + xu[33]][ls])
+                   pb(GG[tG[0]][Gw(524)] = tG[1], GG[tG[0]][Gw(tG[285]) + Gw(tG[286]) + Gw(527)] = DZ, GG[tG[0]][Gw(tG[285]) + Gw(tG[286]) + Gw(528) + Gw(529)] = -GG[tG[37]][Gw(530) + tG[7]][DZ])
```

#### 1984. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14220-L14233` → after: `L14567-L14579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14567-L14579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14567-L14579) · [Before (L14220-L14233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14220-L14233)

```diff
-             } else if (lE)
-               for (let bs = xu[0]; bs < vu[zj(xu[283])]; bs++) {
-                 function cs(...uu) {
-                   for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'fXDEiJnQZeraP@(wo+cBkHt=S~y;8,lO^{mI$6jp[WxzY:3K#?A|1_L&R4Ub}]s!T0Cd/9G.h2FV>)7M"g`vN<uq5%*', uu[-xu[132]] = "" + (uu[xu[0]] || ""), uu[xu[7]] = uu[-xu[132]].length, uu[xu[14]] = [], uu[xu[284]] = xu[0], uu[-xu[213]] = xu[ … [truncated]
-                     if (uu[xu[26]] = uu[xu[1]].indexOf(uu[-xu[132]][uu[xu[2]]]), uu[xu[26]] !== -xu[1])
-                       if (uu[xu[57]] < xu[0]) uu[xu[57]] = uu[xu[26]];
-                       else {
-                         XE(uu[xu[57]] += uu[xu[26]] * xu[23], uu[xu[284]] |= uu[xu[57]] << uu[-xu[213]], uu[-xu[213]] += (uu[xu[57]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                         do {
-                           XE(uu[xu[14]].push(uu[xu[284]] & xu[3]), uu[xu[284]] >>= xu[2], uu[-xu[213]] -= xu[2])
-                         } while (uu[-xu[213]] > xu[19]);
-                         uu[xu[57]] = -xu[1]
-                       } return uu[xu[57]] > -xu[1] && uu[xu[14]].push((uu[xu[284]] | uu[xu[57]] << uu[-xu[213]]) & xu[3]), Hu(uu[xu[14]])
-                 }
+             } else if (DG) {
+               function bw(...GG) {
+                 for (pb(GG[tG[13]] = tG[2], GG[tG[5]] = 'eKA}H7aub[sYqL(SUdXpm:#Nl%]D~jEtQgO)>.!9r<J8"InWT`c|iFBV4Cv@;*/y{fGP2_?=5^1&6z0$+3w,RoMxkZh', GG[tG[165]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[165]].length, GG[-tG[287]] = [], GG[tG[39]] = tG[1], GG[tG[18]] = tG[1],  … [truncated]
+                   if (GG[tG[26]] = GG[tG[5]].indexOf(GG[tG[165]][GG[tG[11]]]), GG[tG[26]] !== -tG[2])
+                     if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[26]];
+                     else {
+                       pb(GG[tG[7]] += GG[tG[26]] * tG[27], GG[tG[39]] |= GG[tG[7]] << GG[tG[18]], GG[tG[18]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                       do {
+                         pb(GG[-tG[287]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[18]] -= tG[11])
+                       } while (GG[tG[18]] > tG[20]);
+                       GG[tG[7]] = -tG[2]
+                     } return GG[tG[7]] > -tG[2] && GG[-tG[287]].push((GG[tG[39]] | GG[tG[7]] << GG[tG[18]]) & tG[12]), NG(GG[-tG[287]])
+               }
```

#### 1985. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14235-L14237` → after: `L14581-L14584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14581-L14584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14581-L14584) · [Before (L14235-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14235-L14237)

```diff
-                 function Ns(...uu) {
-                   return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = cs(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-                 }
+               function Zw(GG) {
+                 return typeof PG[GG] === tG[14] ? PG[GG] = bw(MG[GG]) : PG[GG]
+               }
+               for (let ww = tG[1]; ww < lG[Zw(531)]; ww++) {
```

#### 1986. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14239-L14252` → after: `L14586-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14586-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14586-L14601) · [Before (L14239-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14239-L14252)

```diff
-                 eu[Os] && uu[xu[14]][Ns(554) + xu[33]][Os] !== xu[0] && XE(lu()[Ns(555)](mu, xu[0], 1.05 * us, xu[0]), uu[xu[14]][Ns(556) + Ns(557)](mu))
-               } else if (uu[xu[24]][zj(xu[285]) + xu[33]]) {
-                 function Ys(...uu) {
-                   for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'f~!`VoxHLenr;DRZ@Nba3XiQuK$J"kvC+|pF,&m1d:j*PMw/Sg=WE]G%B7q6c^)I8z0y#O>AstY}2[UTl5.9?<_(4{h', uu[xu[89]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[89]].length, uu[xu[7]] = [], uu[xu[286]] = xu[0], uu[xu[60]] = xu[0], uu[ … [truncated]
-                     if (uu[xu[26]] = uu[xu[1]].indexOf(uu[xu[89]][uu[xu[284]]]), uu[xu[26]] !== -xu[1])
-                       if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[26]];
-                       else {
-                         XE(uu[xu[19]] += uu[xu[26]] * xu[23], uu[xu[286]] |= uu[xu[19]] << uu[xu[60]], uu[xu[60]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                         do {
-                           XE(uu[xu[7]].push(uu[xu[286]] & xu[3]), uu[xu[286]] >>= xu[2], uu[xu[60]] -= xu[2])
-                         } while (uu[xu[60]] > xu[19]);
-                         uu[xu[19]] = -xu[1]
-                       } return uu[xu[19]] > -xu[1] && uu[xu[7]].push((uu[xu[286]] | uu[xu[19]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[7]])
-                 }
+                 EG[Sw] && GG[tG[37]][Zw(532) + tG[7]][Sw] !== tG[1] && pb(kG()[Zw(533)](cG, tG[1], 1.05 * RZ, tG[1]), GG[tG[37]][Zw(534) + Zw(535)](cG))
+               }
+             } else GG[tG[16]][gZ(tG[288]) + tG[7]] && pb(kG()[gZ(tG[289])](cG, tG[1], RZ * FG[tG[23]][rG], tG[1]), GG[tG[37]][gZ(tG[290]) + gZ(tG[291])](cG));
+           if (!GG[tG[16]][gZ(tG[288]) + tG[7]]) {
+             function Lw(...GG) {
+               for (pb(GG[tG[13]] = tG[2], GG[tG[130]] = '"1.LH]j}8WctGKhlTbFg7NQ|?=Z[YE*9pJaV&D2P<m!Cf#rekvBsi>/RX{nI$@yAz53od6M(UO,~)^+S:q%x;uw_`04', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[23]].length, GG[tG[242]] = [], GG[tG[39]] = tG[1], GG[-tG[39]] = tG[1], G … [truncated]
+                 if (GG[tG[6]] = GG[tG[130]].indexOf(GG[tG[23]][GG[tG[37]]]), GG[tG[6]] !== -tG[2])
+                   if (GG[tG[292]] < tG[1]) GG[tG[292]] = GG[tG[6]];
+                   else {
+                     pb(GG[tG[292]] += GG[tG[6]] * tG[27], GG[tG[39]] |= GG[tG[292]] << GG[-tG[39]], GG[-tG[39]] += (GG[tG[292]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                     do {
+                       pb(GG[tG[242]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[-tG[39]] -= tG[11])
+                     } while (GG[-tG[39]] > tG[20]);
+                     GG[tG[292]] = -tG[2]
+                   } return GG[tG[292]] > -tG[2] && GG[tG[242]].push((GG[tG[39]] | GG[tG[292]] << GG[-tG[39]]) & tG[12]), NG(GG[tG[242]])
+             }
```

#### 1987. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14254-L14260` → after: `L14603-L14628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14603-L14628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14603-L14628) · [Before (L14254-L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14254-L14260)

```diff
-                 function hs(...uu) {
-                   return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Ys(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-                 }
-                 XE(lu()[zj(xu[287])](mu, xu[0], us * Pu[xu[39]][gu], xu[0]), uu[xu[14]][hs(558) + hs(559)](mu))
-               } uu[xu[24]][zj(xu[285]) + xu[33]] || (uu[xu[13]][zj(xu[288])] = xu[68]), uu[xu[13]][zj(560)]++
-         } else XE(uu[xu[24]][Eu(xu[289])][Eu(xu[290]) + Eu(xu[291]) + Eu(xu[292])](Eu(561), xu[1]), uu[xu[14]][Eu(xu[147]) + Eu(xu[148]) + Eu(xu[149])] = Iu, uu[xu[14]][Eu(562) + xu[293]] = fE ? cE : NE, uu[xu[13]][Eu(563)] = xu[62], uu[xu[13]][Eu(xu[294])] = xu[0]);
-         if (uu[xu[13]][nj(xu[297])] !== -xu[1]) {
+             function yw(...GG) {
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = Lw(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+             }
+             GG[tG[0]][yw(536)] = tG[53]
+           }
+           GG[tG[0]][gZ(537)]++
+         } else {
+           function kw(...GG) {
+             for (pb(GG[tG[13]] = tG[2], GG[tG[293]] = '<x,%u!;:0[A5~9nWKBCy&^HPjT4U?bVksgR6Dr>ze=*Qoqvfw}X.$Ea"IMi@]L2#h/J`)p3cdFl{tZ_18GN|SOY7+(m', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[-tG[56]] = [], GG[tG[8]] = tG[1], GG[tG[9]] = tG[1], GG[tG[47] … [truncated]
+               if (GG[tG[26]] = GG[tG[293]].indexOf(GG[tG[0]][GG[tG[3]]]), GG[tG[26]] !== -tG[2])
+                 if (GG[tG[47]] < tG[1]) GG[tG[47]] = GG[tG[26]];
+                 else {
+                   pb(GG[tG[47]] += GG[tG[26]] * tG[27], GG[tG[8]] |= GG[tG[47]] << GG[tG[9]], GG[tG[9]] += (GG[tG[47]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                   do {
+                     pb(GG[-tG[56]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[9]] -= tG[11])
+                   } while (GG[tG[9]] > tG[20]);
+ ... (10 more added lines; see GitHub link above)
```

#### 1988. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14262-L14264` → after: `L14630-L14632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14630-L14632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14630-L14632) · [Before (L14262-L14264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14262-L14264)

```diff
-             for (XE(uu[xu[4]] = xu[1], uu[-xu[296]] = 'c0u`vmz3r+2BAtLEM>X=gDyewZ<|[9QG5_a!?H4k1Y&h,jTq/U:.Pix6CbO7}]R8)p;${FSV@*%sK#f~^("lIJWnodN', uu[xu[109]] = "" + (uu[xu[0]] || ""), uu[xu[295]] = uu[xu[109]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[xu[17]] = xu[0], uu[ … [truncated]
-               if (uu[xu[26]] = uu[-xu[296]].indexOf(uu[xu[109]][uu[-xu[55]]]), uu[xu[26]] !== -xu[1])
-                 if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[xu[26]];
+             for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'w+?,vFm6CyUDB.%@)zNSLE>H;tTxpIMRuPaQ}on]&$:Z{*s8!WkdfVb5[h_Y9"rq402^JGA(3K<Oj=|eXg#1c~7l/`i', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[23]].length, GG[tG[37]] = [], GG[tG[39]] = tG[1], GG[tG[18]] = tG[1], GG[-tG[1 … [truncated]
+               if (GG[tG[249]] = GG[tG[2]].indexOf(GG[tG[23]][GG[tG[86]]]), GG[tG[249]] !== -tG[2])
+                 if (GG[-tG[174]] < tG[1]) GG[-tG[174]] = GG[tG[249]];
```

#### 1989. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14266` → after: `L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14634) · [Before (L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14266)

```diff
-                   XE(uu[xu[33]] += uu[xu[26]] * xu[23], uu[xu[9]] |= uu[xu[33]] << uu[xu[17]], uu[xu[17]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                   pb(GG[-tG[174]] += GG[tG[249]] * tG[27], GG[tG[39]] |= GG[-tG[174]] << GG[tG[18]], GG[tG[18]] += (GG[-tG[174]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1990. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14268-L14271` → after: `L14636-L14639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14636-L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14636-L14639) · [Before (L14268-L14271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14268-L14271)

```diff
-                     XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[17]] -= xu[2])
-                   } while (uu[xu[17]] > xu[19]);
-                   uu[xu[33]] = -xu[1]
-                 } return uu[xu[33]] > -xu[1] && uu[xu[14]].push((uu[xu[9]] | uu[xu[33]] << uu[xu[17]]) & xu[3]), Hu(uu[xu[14]])
+                     pb(GG[tG[37]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[18]] -= tG[11])
+                   } while (GG[tG[18]] > tG[20]);
+                   GG[-tG[174]] = -tG[2]
+                 } return GG[-tG[174]] > -tG[2] && GG[tG[37]].push((GG[tG[39]] | GG[-tG[174]] << GG[tG[18]]) & tG[12]), NG(GG[tG[37]])
```

#### 1991. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14275` → after: `L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14643) · [Before (L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14275)

```diff
-             return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Ds(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = Yw(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 1992. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14277-L14279` → after: `L14645-L14647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14645-L14647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14645-L14647) · [Before (L14277-L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14277-L14279)

```diff
-           const Ms = uu[xu[13]][nj(xu[297])] / uu[xu[13]][nj(565) + nj(566) + nj(567)],
-             es = uu[xu[13]][nj(568) + nj(569) + nj(570) + nj(571)] + Ms * (uu[xu[13]][nj(572) + nj(573) + nj(574)] - uu[xu[13]][gs(xu[301]) + gs(xu[302]) + gs(577) + gs(578)]);
-           if (lu()[gs(579)](mu, xu[0], xu[0], xu[0]), uu[xu[13]][gs(xu[300])] > xu[0]) {
+           const pw = GG[tG[0]][bG(tG[295])] / GG[tG[0]][bG(550) + bG(551) + bG(552)],
+             fw = GG[tG[0]][Vw(tG[296]) + Vw(tG[297]) + Vw(tG[299]) + Vw(tG[298])] + pw * (GG[tG[0]][Vw(tG[296]) + Vw(tG[297]) + Vw(557) + Vw(tG[298])] - GG[tG[0]][Vw(tG[296]) + Vw(tG[297]) + Vw(tG[299]) + Vw(tG[298])]);
+           if (kG()[Vw(558)](cG, tG[1], tG[1], tG[1]), GG[tG[0]][Vw(tG[302])] > tG[1]) {
```

#### 1993. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14281` → after: `L14649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14649) · [Before (L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14281)

```diff
-             mu[xu[1]] = es * ps
+             cG[tG[2]] = fw * Kw
```

#### 1994. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14283-L14284` → after: `L14651-L14652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14651-L14652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14651-L14652) · [Before (L14283-L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14283-L14284)

```diff
-           const Gs = es * uu[xu[13]][gs(xu[298]) + gs(xu[299]) + gs(583) + gs(584)];
-           XE(mu[uu[xu[13]][gs(xu[298]) + gs(xu[299]) + gs(585)]] = Gs, uu[xu[14]][gs(586) + gs(587)](mu)), ++uu[xu[13]][gs(xu[300])] > uu[xu[13]][gs(xu[301]) + gs(xu[302]) + gs(588) + gs(589) + gs(590) + "ks"] && (uu[xu[13]][gs(xu[300])] = -xu[1])
+           const Qw = fw * GG[tG[0]][Vw(tG[300]) + Vw(tG[301]) + Vw(562) + Vw(563)];
+           pb(cG[GG[tG[0]][Vw(tG[300]) + Vw(tG[301]) + Vw(564)]] = Qw, GG[tG[37]][Vw(565) + Vw(566)](cG)), ++GG[tG[0]][Vw(tG[302])] > GG[tG[0]][Vw(tG[296]) + Vw(tG[297]) + Vw(567) + Vw(568) + Vw(569) + "ks"] && (GG[tG[0]][Vw(tG[302])] = -tG[2])
```

#### 1995. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14287-L14289` → after: `L14655-L14690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14655-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14655-L14690) · [Before (L14287-L14289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14287-L14289)

```diff
-           if (XE(uu[xu[13]][nj(xu[311])] = xu[0], uu[xu[24]][nj(xu[306])][nj(xu[307]) + nj(xu[308]) + nj(xu[309])](nj(xu[310]), .8)), uu[xu[24]][nj(597) + nj(598)] && Xu === Zu[xu[313]][nj(xu[314]) + xu[315]]) {
-             const ws = jE(uu[xu[14]][xu[216]][xu[1]], xu[27]);
-             XE(lu()[nj(xu[303])](mu, xu[0], -ws, xu[0]), uu[xu[14]][nj(xu[304]) + nj(xu[305])](mu))
+           if (pb(GG[tG[0]][bG(570)] = tG[1], GG[tG[16]][bG(tG[303])][bG(tG[312]) + bG(tG[313]) + bG(tG[314])](bG(574), .8)), GG[tG[16]][bG(tG[365]) + bG(tG[333])] && yG === LG[tG[310]][bG(tG[327]) + tG[311]]) {
+             function hw(...GG) {
+               for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'OTXqcPIUJenSFrZsKakfQApbLlmoYVHCNMREB!DigdWhG:~u_jv,(#>]@$}+4w5&/6|x?=3*19%.`";y0[^z2<{7t)8', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[-tG[162]] = GG[tG[23]].length, GG[tG[305]] = [], GG[tG[8]] = tG[1], GG[tG[229]] = tG[1], GG … [truncated]
+                 if (GG[tG[26]] = GG[tG[2]].indexOf(GG[tG[23]][GG[-tG[304]]]), GG[tG[26]] !== -tG[2])
+                   if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[26]];
+                   else {
+                     pb(GG[tG[7]] += GG[tG[26]] * tG[27], GG[tG[8]] |= GG[tG[7]] << GG[tG[229]], GG[tG[229]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                     do {
+                       pb(GG[tG[305]].push(GG[tG[8]] & tG[12]), GG[tG[8]] >>= tG[11], GG[tG[229]] -= tG[11])
+                     } while (GG[tG[229]] > tG[20]);
+                     GG[tG[7]] = -tG[2]
+                   } return GG[tG[7]] > -tG[2] && GG[tG[305]].push((GG[tG[8]] | GG[tG[7]] << GG[tG[229]]) & tG[12]), NG(GG[tG[305]])
+             }
+ 
+             function dw(...GG) {
+               return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = hw(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+ ... (20 more added lines; see GitHub link above)
```

#### 1996. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14291-L14293` → after: `L14692-L14698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14692-L14698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14692-L14698) · [Before (L14291-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14291-L14293)

```diff
-           if (uu[xu[24]][nj(xu[312]) + xu[33]]) {
-             const ds = jE(uu[xu[14]][xu[216]][xu[1]], xu[24]);
-             XE(lu()[nj(xu[303])](mu, xu[0], ds, xu[0]), uu[xu[14]][nj(xu[304]) + nj(xu[305])](mu))
+ 
+           function Ew(...GG) {
+             return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = zw(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
+           }
+           if (pb(GG[tG[16]][Ew(583)][Ew(584) + Ew(585) + Ew(586)](Ew(587), tG[2]), GG[tG[0]][Ew(588)]++), Qb && GG[tG[16]][Ew(589) + tG[7]] && !BG && !hG && !OG && !DG && !XG && yG === LG[tG[310]][Ew(590) + tG[311]]) {
+             const ow = Math[Ew(591)](tG[2], Math[Ew(592)](tG[1], Qb[Ew(593) + Ew(594)] - GG[tG[37]][tG[241]][tG[2]]));
+             pb(kG()[Ew(595)](cG, tG[1], Qb[Ew(596)] * ow, tG[1]), GG[tG[37]][Ew(597) + Ew(598)](cG))
```

#### 1997. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14300-L14304` → after: `L14702-L14708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14702-L14708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14702-L14708) · [Before (L14300-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14300-L14304)

```diff
-       if (uu[xu[24]][Eu(xu[289])][Eu(xu[290]) + Eu(xu[291]) + Eu(xu[292])](Eu(xu[316]) + xu[317], !uu[xu[13]][Eu(xu[218]) + xu[33]] && pu ? .07 : xu[1]), pu && !uu[xu[13]][Eu(xu[218]) + xu[33]] && !fE) {
-         function Ps(...uu) {
-           for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'ux{`=~>#6(7,&5*dJt1vj8LqX/c:hU42g@Qz|.yI3+w_Zm^0"$li)HOD!%S;e]}Mp9[GsCFEYTKBrPNfAbnWkRoVa<?', uu[xu[214]] = "" + (uu[xu[0]] || ""), uu[-xu[200]] = uu[xu[214]].length, uu[xu[23]] = [], uu[-xu[109]] = xu[0], uu[xu[60]] = xu[0], uu[- … [truncated]
-             if (uu[xu[26]] = uu[xu[1]].indexOf(uu[xu[214]][uu[-xu[124]]]), uu[xu[26]] !== -xu[1])
-               if (uu[-xu[89]] < xu[0]) uu[-xu[89]] = uu[xu[26]];
+       if (GG[tG[16]][bG(tG[303])][bG(tG[312]) + bG(tG[313]) + bG(tG[314])](bG(tG[315]) + tG[316], !GG[tG[0]][bG(tG[220]) + tG[7]] && XG ? .07 : tG[2]), XG && !GG[tG[0]][bG(tG[220]) + tG[7]] && !BG) {
+         function Xw(GG) {
+           var bG, ZG, wG, SG, LG, yG, kG;
+           for (pb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = tG[1], LG = tG[1], yG = -tG[2]), kG = tG[1]; kG < ZG; kG++) {
+             var UG = 'CVA$RjSb0KZkfaY5utr&H?,qd(9J:;sghlF_3cPXUQeB^=OD@mnGE<pW"T`#MIv[Li!wN/+z18x6|.%y2~>]}47){o*'.indexOf(bG[kG]);
+             if (UG !== -tG[2])
+               if (yG < tG[1]) yG = UG;
```

#### 1998. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14306` → after: `L14710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14710) · [Before (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14306)

```diff
-                 XE(uu[-xu[89]] += uu[xu[26]] * xu[23], uu[-xu[109]] |= uu[-xu[89]] << uu[xu[60]], uu[xu[60]] += (uu[-xu[89]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(yG += UG * tG[27], SG |= yG << LG, LG += (yG & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 1999. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14308-L14311` → after: `L14712-L14717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14712-L14717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14712-L14717) · [Before (L14308-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14308-L14311)

```diff
-                   XE(uu[xu[23]].push(uu[-xu[109]] & xu[3]), uu[-xu[109]] >>= xu[2], uu[xu[60]] -= xu[2])
-                 } while (uu[xu[60]] > xu[19]);
-                 uu[-xu[89]] = -xu[1]
-               } return uu[-xu[89]] > -xu[1] && uu[xu[23]].push((uu[-xu[109]] | uu[-xu[89]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[23]])
+                   pb(wG.push(SG & tG[12]), SG >>= tG[11], LG -= tG[11])
+                 } while (LG > tG[20]);
+                 yG = -tG[2]
+               }
+           }
+           return yG > -tG[2] && wG.push((SG | yG << LG) & tG[12]), NG(wG)
```

#### 2000. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14314-L14315` → after: `L14720-L14721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14720-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14720-L14721) · [Before (L14314-L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14314-L14315)

```diff
-         function os(uu) {
-           return typeof Vu[uu] === xu[10] ? Vu[uu] = Ps(ru[uu]) : Vu[uu]
+         function uw(...GG) {
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = Xw(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 2001. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14317` → after: `L14723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14723) · [Before (L14317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14317)

```diff
-         XE(uu[xu[14]][xu[216]][xu[1]] = xu[0], uu[xu[14]][Eu(xu[147]) + os(609) + os(610)] = .15 * Iu)
+         pb(GG[tG[37]][tG[241]][tG[2]] = tG[1], GG[tG[37]][bG(tG[176]) + uw(599) + uw(600)] = .15 * qG)
```

#### 2002. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14319` → after: `L14725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14725) · [Before (L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14319)

```diff
-       if (CE[Eu(xu[318])] > xu[0]) {
+       if (Gb[bG(tG[317])] > tG[1]) {
```

#### 2003. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14321-L14323` → after: `L14727-L14729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14727-L14729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14727-L14729) · [Before (L14321-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14321-L14323)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = '=fu13IqhDyo{$C6&~04B)vGj9`AF?|bHnc]7W}.<ENP:!te@%MswzU*m8p#RQ2+Tig,5V(kKSx>^JYar_XL;/"O[ldZ', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[xu[319]] = [], uu[xu[27]] = xu[0], uu[-xu[59]] = xu[0], uu[xu[33 … [truncated]
-             if (uu[-xu[320]] = uu[xu[8]].indexOf(uu[xu[39]][uu[xu[5]]]), uu[-xu[320]] !== -xu[1])
-               if (uu[xu[33]] < xu[0]) uu[xu[33]] = uu[-xu[320]];
+           for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'Gj%N#Di9`.IbO6tM}lz/oK5~Up,Xx1gYRTfw(*n=3]P>+q&che^Hyr!kFV{CSBZav[QLdEmJ"uA@4:W_8?|$20;7)s<', GG[tG[0]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[0]].length, GG[tG[10]] = [], GG[tG[39]] = tG[1], GG[tG[9]] = tG[1], GG[tG[7]] = - … [truncated]
+             if (GG[-tG[318]] = GG[tG[2]].indexOf(GG[tG[0]][GG[tG[3]]]), GG[-tG[318]] !== -tG[2])
+               if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[-tG[318]];
```

#### 2004. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14325` → after: `L14731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14731) · [Before (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14325)

```diff
-                 XE(uu[xu[33]] += uu[-xu[320]] * xu[23], uu[xu[27]] |= uu[xu[33]] << uu[-xu[59]], uu[-xu[59]] += (uu[xu[33]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[7]] += GG[-tG[318]] * tG[27], GG[tG[39]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 2005. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14327-L14330` → after: `L14733-L14736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14733-L14736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14733-L14736) · [Before (L14327-L14330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14327-L14330)

```diff
-                   XE(uu[xu[319]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[-xu[59]] -= xu[2])
-                 } while (uu[-xu[59]] > xu[19]);
-                 uu[xu[33]] = -xu[1]
-               } return uu[xu[33]] > -xu[1] && uu[xu[319]].push((uu[xu[27]] | uu[xu[33]] << uu[-xu[59]]) & xu[3]), Hu(uu[xu[319]])
+                   pb(GG[tG[10]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[tG[9]] -= tG[11])
+                 } while (GG[tG[9]] > tG[20]);
+                 GG[tG[7]] = -tG[2]
+               } return GG[tG[7]] > -tG[2] && GG[tG[10]].push((GG[tG[39]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[tG[10]])
```

#### 2006. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14334` → after: `L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14740) · [Before (L14334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14334)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = ks(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = iw(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 2007. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14336-L14344` → after: `L14742-L14749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14742-L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14742-L14749) · [Before (L14336-L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14336-L14344)

```diff
-         const vs = uu[xu[0]][ms(611)][ms(612)](uu[xu[1]], CE);
-         uu[xu[24]][ms(613)][ms(614) + ms(615) + ms(616)](ms(617) + ms(618) + xu[321], vs)
-       } else if (uu[xu[13]][Eu(xu[218]) + xu[33]]) {
-         function Ks(uu) {
-           var Eu, ju, su, Uu, Zu, Xu, lu;
-           for (XE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = xu[0], Zu = xu[0], Xu = -xu[1]), lu = xu[0]; lu < ju; lu++) {
-             var qu = '=PrCZQoiqAaDXHLEMmNBnRfu3{W#b&9*0z]p/vTOI`%>[F(s!G4ejh?.c+d_JtU<KV|2~6l7"SxY8;1g$5w)ky:,^@}'.indexOf(Eu[lu]);
-             if (qu !== -xu[1])
-               if (Xu < xu[0]) Xu = qu;
+         const Ww = GG[tG[1]][bG(tG[170])][Cw(601)](GG[tG[2]], Gb);
+         GG[tG[16]][Cw(602)][Cw(603) + Cw(604) + Cw(605)](Cw(606) + Cw(607) + tG[319], Ww)
+       } else GG[tG[0]][bG(tG[220]) + tG[7]] && GG[tG[16]][bG(tG[303])][bG(tG[312]) + bG(tG[313]) + bG(tG[314])](bG(608) + bG(609) + tG[319], tG[2]);
+       if (GG[tG[320]] = tG[2], KG[bG(tG[303])] && BG && !oG) {
+         function mw(...GG) {
+           for (pb(GG[tG[13]] = tG[2], GG[tG[2]] = 'ciPb0F(utVQXA/~I&:o46@pevG)kjMW#8Dyg`NfLh_9sS,B+7waRUl*Kx<;Zd!>%.H}C|Jnq5Y?2O[1E$z^m3r]=T{"', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[16]] = GG[tG[23]].length, GG[tG[321]] = [], GG[tG[39]] = tG[1], GG[-tG[173]] = tG[1], GG[tG[ … [truncated]
+             if (GG[tG[98]] = GG[tG[2]].indexOf(GG[tG[23]][GG[tG[109]]]), GG[tG[98]] !== -tG[2])
+               if (GG[tG[20]] < tG[1]) GG[tG[20]] = GG[tG[98]];
```

#### 2008. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14346` → after: `L14751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14751) · [Before (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14346)

```diff
-                 XE(Xu += qu * xu[23], Uu |= Xu << Zu, Zu += (Xu & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[20]] += GG[tG[98]] * tG[27], GG[tG[39]] |= GG[tG[20]] << GG[-tG[173]], GG[-tG[173]] += (GG[tG[20]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 2009. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14348-L14353` → after: `L14753-L14756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14753-L14756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14753-L14756) · [Before (L14348-L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14348-L14353)

```diff
-                   XE(su.push(Uu & xu[3]), Uu >>= xu[2], Zu -= xu[2])
-                 } while (Zu > xu[19]);
-                 Xu = -xu[1]
-               }
-           }
-           return Xu > -xu[1] && su.push((Uu | Xu << Zu) & xu[3]), Hu(su)
+                   pb(GG[tG[321]].push(GG[tG[39]] & tG[12]), GG[tG[39]] >>= tG[11], GG[-tG[173]] -= tG[11])
+                 } while (GG[-tG[173]] > tG[20]);
+                 GG[tG[20]] = -tG[2]
+               } return GG[tG[20]] > -tG[2] && GG[tG[321]].push((GG[tG[39]] | GG[tG[20]] << GG[-tG[173]]) & tG[12]), NG(GG[tG[321]])
```

#### 2010. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14357-L14372` → after: `L14760-L14773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14760-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14760-L14773) · [Before (L14357-L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14357-L14372)

```diff
-           return typeof Vu[uu] === xu[10] ? Vu[uu] = Ks(ru[uu]) : Vu[uu]
-         }
-         uu[xu[24]][Eu(xu[289])][Vs(619) + Vs(620) + Vs(621)](Vs(622) + Vs(623) + xu[321], xu[1])
-       }
-       if (uu[xu[60]] = xu[1], Ou[Eu(xu[289])] && fE && !Gu)
-         for (let rs = xu[0]; rs < CE[Eu(xu[318])]; rs++) {
-           const Qs = Ou[Eu(xu[289])][CE[rs]];
-           Math[Eu(xu[241])](Qs - xu[1]) > Math[Eu(xu[241])](uu[xu[60]] - xu[1]) && (uu[xu[60]] = Qs)
-         }
-       uu[xu[24]][Eu(xu[289])][Eu(xu[290]) + Eu(xu[291]) + Eu(xu[292])](Eu(624) + Eu(625) + Eu(626) + Eu(627), uu[xu[60]]);
-       const wE = (xu[0], Cu[xu[313]])(fu, Gu, fE);
-       XE(uu[xu[24]][Eu(xu[289])][Eu(xu[290]) + Eu(xu[291]) + Eu(xu[292])](Eu(xu[145]) + Eu(628) + Eu(629) + Eu(630) + xu[335], wE), uu[xu[0]].YG.SF(uu[xu[13]][xu[322]]).xI = (xu[0], Cu.q)(Ou[Eu(xu[323]) + Eu(xu[324])], CE, fu[Eu(xu[323]) + Eu(xu[324])])), Xu === Zu[xu[313]][Eu(63 … [truncated]
-       const JE = uu[xu[24]][xu[226]] * uu[xu[24]][Eu(xu[289])][Eu(637) + Eu(638) + Eu(639) + Eu(640)]() * (uu[xu[13]][Eu(xu[218]) + xu[33]] ? EE(uu[xu[0]], uu[xu[1]], Wu) : xu[1]),
-         dE = Number[Eu(641)](JE) ? xu[0] : Math[Eu(xu[248])](-Uu[xu[9]][Eu(xu[326]) + Eu(xu[239])], Math[Eu(xu[325])](JE, Uu[xu[9]][Eu(xu[326]) + Eu(xu[239])]));
-       fu[Eu(xu[327]) + xu[328]] && fu[Eu(xu[327]) + xu[328]][Eu(xu[329]) + Eu(xu[330])] > xu[0] && (fE || Gu && fu[Eu(xu[327]) + xu[328]][Eu(646)]) && (xu[0], Ju[xu[6]])(uu[xu[14]], uu[xu[13]][Eu(xu[327]) + Eu(647) + Eu(xu[350])], fu[Eu(xu[327]) + xu[328]][Eu(xu[329]) + Eu(xu[330 … [truncated]
-       const aE = fu[Eu(649)];
+           return typeof PG[GG] === tG[14] ? PG[GG] = mw(MG[GG]) : PG[GG]
+         }
+         for (let Fw = tG[1]; Fw < Gb[Iw(610)]; Fw++) {
+           const vw = KG[Iw(611)][Gb[Fw]];
+           Math[Iw(tG[322])](vw - tG[2]) > Math[Iw(tG[322])](GG[tG[320]] - tG[2]) && (GG[tG[320]] = vw)
+         }
+       }
+       GG[tG[16]][bG(tG[303])][bG(tG[312]) + bG(tG[313]) + bG(tG[314])](bG(613) + bG(614) + bG(615) + bG(616), GG[tG[320]]);
+       const Xb = (tG[1], VG.u)(YG, oG, BG);
+       pb(GG[tG[16]][bG(tG[303])][bG(tG[312]) + bG(tG[313]) + bG(tG[314])](bG(tG[323]) + bG(617) + bG(618) + bG(619) + tG[343], Xb), GG[tG[1]].Hr.qT(GG[tG[0]][tG[324]]).fR = (tG[1], VG[tG[336]])(KG[bG(tG[325]) + bG(tG[326])], Gb, YG[bG(tG[325]) + bG(tG[326])])), yG === LG[tG[310]] … [truncated]
+       const ub = GG[tG[16]][tG[246]] * GG[tG[16]][bG(tG[303])][bG(625) + bG(626) + bG(627) + bG(628)]() * (GG[tG[0]][bG(tG[220]) + tG[7]] ? Lb(GG[tG[1]], GG[tG[2]], AG) : tG[2]),
+         ib = Number[bG(629)](ub) ? tG[1] : Math[bG(tG[328])](-SG[tG[10]][bG(tG[330]) + bG(tG[256])], Math[bG(tG[329])](ub, SG[tG[10]][bG(tG[330]) + bG(tG[256])]));
+       YG[bG(tG[331]) + tG[332]] && YG[bG(tG[331]) + tG[332]][bG(tG[334]) + bG(tG[335])] > tG[1] && (BG || oG && YG[bG(tG[331]) + tG[332]][bG(634)]) && (tG[1], WG[tG[23]])(GG[tG[37]], GG[tG[0]][bG(tG[331]) + bG(635) + bG(tG[333])], YG[bG(tG[331]) + tG[332]][bG(tG[334]) + bG(tG[335 … [truncated]
+       const Cb = YG[bG(636)];
```

#### 2011. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14374-L14378` → after: `L14775-L14795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14775-L14795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14775-L14795) · [Before (L14374-L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14374-L14378)

```diff
-         const is = (Math[Eu(650)](uu[xu[14]][xu[216]][xu[0]] * uu[xu[14]][xu[216]][xu[0]] + uu[xu[14]][xu[216]][xu[13]] * uu[xu[14]][xu[216]][xu[13]]) - aE[Eu(651) + xu[141]]) * aE[Eu(xu[331]) + Eu(653) + Eu(654) + "n"];
-         if (is > xu[0] && uu[xu[14]][xu[216]][xu[1]] < is) {
-           const Ws = uu[xu[27]] / 1e3,
-             Ss = (is - uu[xu[14]][xu[216]][xu[1]]) * Nu[xu[39]][Eu(655) + Eu(656)](aE[Eu(xu[331]) + Eu(657) + Eu(658)] * Ws);
-           XE(lu()[Eu(xu[332])](mu, xu[0], Ss * uu[xu[14]].pl / Ws, xu[0]), uu[xu[14]][Eu(659) + Eu(660)](mu))
+         const aw = (Math[bG(637)](GG[tG[37]][tG[241]][tG[1]] * GG[tG[37]][tG[241]][tG[1]] + GG[tG[37]][tG[241]][tG[0]] * GG[tG[37]][tG[241]][tG[0]]) - Cb[bG(638) + tG[111]]) * Cb[bG(tG[341]) + bG(640) + bG(641) + tG[336]];
+         if (aw > tG[1] && GG[tG[37]][tG[241]][tG[2]] < aw) {
+           function lw(...GG) {
+             for (pb(GG[tG[13]] = tG[2], GG[tG[337]] = 'Mzuxv!LGpiRN(3:y^)1hU0PeFEA}&<,4r_?`gJWI8bnma@X9j{$[+#O/B".kt|s;>~qd6lQC27KwZH*f=TD%S]5YoVc', GG[tG[338]] = "" + (GG[tG[1]] || ""), GG[-tG[339]] = GG[tG[338]].length, GG[tG[37]] = [], GG[-tG[21]] = tG[1], GG[tG[9]] = tG[1], G … [truncated]
+               if (GG[tG[6]] = GG[tG[337]].indexOf(GG[tG[338]][GG[tG[3]]]), GG[tG[6]] !== -tG[2])
+                 if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[6]];
+                 else {
+                   pb(GG[tG[7]] += GG[tG[6]] * tG[27], GG[-tG[21]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
+                   do {
+                     pb(GG[tG[37]].push(GG[-tG[21]] & tG[12]), GG[-tG[21]] >>= tG[11], GG[tG[9]] -= tG[11])
+                   } while (GG[tG[9]] > tG[20]);
+                   GG[tG[7]] = -tG[2]
+                 } return GG[tG[7]] > -tG[2] && GG[tG[37]].push((GG[-tG[21]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[tG[37]])
+           }
+ 
+           function jw(...GG) {
+ ... (5 more added lines; see GitHub link above)
```

#### 2012. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14386-L14387` → after: `L14803-L14804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14803-L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14803-L14804) · [Before (L14386-L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14386-L14387)

```diff
-             bu = null === qu.durationMs || !su.floatStartTicksAgo || su.floatStartTicksAgo < qu.durationMs / 1e3 * Uu.e.clientTicksPerSecond,
-             cu = su.isInAir && !lu && (Xu.RY[1] < 0 || Cu === fu) && !su.hitWhilstAirborne(fu) && bu,
+             pG = null === UG.durationMs || !wG.floatStartTicksAgo || wG.floatStartTicksAgo < UG.durationMs / 1e3 * SG.d.clientTicksPerSecond,
+             fG = wG.isInAir && !kG && (yG.Sd[1] < 0 || VG === YG) && !wG.hitWhilstAirborne(YG) && pG,
```

#### 2013. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14389-L14391` → after: `L14806-L14808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14806-L14808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14806-L14808) · [Before (L14389-L14391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14389-L14391)

```diff
-             Ou = !cu && Cu !== Zu.r.NORMAL;
-           return su.movementType = cu ? fu : Zu.r.NORMAL, Nu ? Eu.bloxd.updatePositionAndPhysics(ju, su.physicsState, !1, void 0, !0) : Ou && (qu.exitsVehicleOnEnd ? Eu.bloxd.removeConsumableVehiclePhysics(ju, su.hasTakenOffTheGround) : Eu.bloxd.updatePositionAndPhysics(ju, {
-             type: Zu.v.DEFAULT,
+             KG = !fG && VG !== LG.o.NORMAL;
+           return wG.movementType = fG ? YG : LG.o.NORMAL, QG ? bG.bloxd.updatePositionAndPhysics(ZG, wG.physicsState, !1, void 0, !0) : KG && (UG.exitsVehicleOnEnd ? bG.bloxd.removeConsumableVehiclePhysics(ZG, wG.hasTakenOffTheGround) : bG.bloxd.updatePositionAndPhysics(ZG, {
+             type: LG.q.DEFAULT,
```

#### 2014. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14393-L14395` → after: `L14810-L14812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14810-L14812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14810-L14812) · [Before (L14393-L14395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14393-L14395)

```diff
-           }, !1, void 0, !0)), (Nu || Ou) && Eu.bloxd.onMovementTypeChanged(ju, su.movementType, Cu), su.isOnGround() ? (su.setHitWhilstAirborne(fu, !1), null !== qu.durationMs && (su.hasTakenOffTheGround = !1, su.floatStartTicksAgo = null)) : null !== qu.durationMs && Xu.RY[1] < … [truncated]
-         }(fu, uu[xu[0]], uu[xu[1]], uu[xu[13]], uu[xu[14]], Gu),
-         oE = uu[xu[14]][Eu(xu[333]) + Eu(xu[334]) + Eu(xu[3])],
+           }, !1, void 0, !0)), (QG || KG) && bG.bloxd.onMovementTypeChanged(ZG, wG.movementType, VG), wG.isOnGround() ? (wG.setHitWhilstAirborne(YG, !1), null !== UG.durationMs && (wG.hasTakenOffTheGround = !1, wG.floatStartTicksAgo = null)) : null !== UG.durationMs && yG.Sd[1] < … [truncated]
+         }(YG, GG[tG[1]], GG[tG[2]], GG[tG[0]], GG[tG[37]], oG),
+         mb = GG[tG[37]][bG(649) + bG(650) + bG(tG[342])],
```

#### 2015. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14397` → after: `L14814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14814) · [Before (L14397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14397)

```diff
-       if (kE ? XE(lu()[Eu(xu[353])](oE, iu), uu[xu[14]][xu[259]]()) : oE[xu[0]] === xu[0] && oE[xu[1]] === xu[0] && oE[xu[13]] === xu[0] || lu()[Eu(xu[332])](oE, xu[0], xu[0], xu[0]), !fu[Eu(662) + Eu(663) + Eu(664) + xu[335]]) {
+       if (Ib ? pb(kG()[bG(tG[368])](mb, jG), GG[tG[37]][tG[271]]()) : mb[tG[1]] === tG[1] && mb[tG[2]] === tG[1] && mb[tG[0]] === tG[1] || kG()[bG(tG[306])](mb, tG[1], tG[1], tG[1]), !YG[bG(652) + bG(653) + bG(654) + tG[343]]) {
```

#### 2016. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14399-L14401` → after: `L14816-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14816-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14816-L14818) · [Before (L14399-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14399-L14401)

```diff
-           for (XE(uu[xu[4]] = xu[1], uu[-xu[27]] = '4)$^u_eXsAnvk~%`9hO35(K7dBVC*qL|<Q!ZlMgr.,UDEcHN6io}1+T0WF{2w>R8[GY"y@S?bxaz=Jp:#&/PItj;f]m', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[-xu[41]] = [], uu[xu[27]] = xu[0], uu[xu[336]] = xu[0], uu[-xu … [truncated]
-             if (uu[xu[66]] = uu[-xu[27]].indexOf(uu[xu[39]][uu[xu[2]]]), uu[xu[66]] !== -xu[1])
-               if (uu[-xu[136]] < xu[0]) uu[-xu[136]] = uu[xu[66]];
+           for (pb(GG[tG[13]] = tG[2], GG[-tG[110]] = 'J}odiHAjgRIrBP~@{TN/;LXu,C8D^E(3?1%v2ZW.6FqG)Qa!05wY"xyh[$<_nK`M:Oef#Vl4p|ms>bSU=c]7+k9z*t&', GG[tG[23]] = "" + (GG[tG[1]] || ""), GG[tG[4]] = GG[tG[23]].length, GG[-tG[222]] = [], GG[tG[344]] = tG[1], GG[tG[9]] = tG[1], GG[tG … [truncated]
+             if (GG[tG[26]] = GG[-tG[110]].indexOf(GG[tG[23]][GG[tG[3]]]), GG[tG[26]] !== -tG[2])
+               if (GG[tG[7]] < tG[1]) GG[tG[7]] = GG[tG[26]];
```

#### 2017. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14403` → after: `L14820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14820) · [Before (L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14403)

```diff
-                 XE(uu[-xu[136]] += uu[xu[66]] * xu[23], uu[xu[27]] |= uu[-xu[136]] << uu[xu[336]], uu[xu[336]] += (uu[-xu[136]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
+                 pb(GG[tG[7]] += GG[tG[26]] * tG[27], GG[tG[344]] |= GG[tG[7]] << GG[tG[9]], GG[tG[9]] += (GG[tG[7]] & tG[28]) > tG[29] ? tG[30] : tG[31]);
```

#### 2018. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14405-L14408` → after: `L14822-L14825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14822-L14825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14822-L14825) · [Before (L14405-L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14405-L14408)

```diff
-                   XE(uu[-xu[41]].push(uu[xu[27]] & xu[3]), uu[xu[27]] >>= xu[2], uu[xu[336]] -= xu[2])
-                 } while (uu[xu[336]] > xu[19]);
-                 uu[-xu[136]] = -xu[1]
-               } return uu[-xu[136]] > -xu[1] && uu[-xu[41]].push((uu[xu[27]] | uu[-xu[136]] << uu[xu[336]]) & xu[3]), Hu(uu[-xu[41]])
+                   pb(GG[-tG[222]].push(GG[tG[344]] & tG[12]), GG[tG[344]] >>= tG[11], GG[tG[9]] -= tG[11])
+                 } while (GG[tG[9]] > tG[20]);
+                 GG[tG[7]] = -tG[2]
+               } return GG[tG[7]] > -tG[2] && GG[-tG[222]].push((GG[tG[344]] | GG[tG[7]] << GG[tG[9]]) & tG[12]), NG(GG[-tG[222]])
```

#### 2019. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14412` → after: `L14829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14829) · [Before (L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14412)

```diff
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = Is(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
+           return GG[tG[13]] = tG[2], typeof PG[GG[tG[1]]] === tG[14] ? PG[GG[tG[1]]] = Aw(MG[GG[tG[1]]]) : PG[GG[tG[1]]]
```

#### 2020. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14414-L14439` → after: `L14831-L14833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14831-L14833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14831-L14833) · [Before (L14414-L14439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14414-L14439)

```diff
-         kE && lu()[Eu(665) + "ct"](uu[xu[14]][xu[216]], uu[xu[14]][xu[216]], oE);
-         const Bs = fu[Eu(xu[339]) + Eu(667)];
-         if (Bs !== xu[35] && uu[xu[13]][Eu(xu[337]) + Eu(xu[338])] === Bs[Eu(668) + Eu(669) + Eu(xu[338])] && fu[Eu(xu[339]) + Fs(xu[340]) + Fs(xu[341])] !== xu[35]) Du(fu, uu[xu[0]], uu[xu[1]], uu[xu[13]], uu[xu[24]], uu[xu[14]], dE, uu[xu[27]], PE);
-         else if (fu[Fs(672) + Fs(xu[340]) + Fs(xu[341])] !== xu[35])
-           if (uu[xu[24]][xu[226]])(xu[0], cu[xu[7]])(uu[xu[0]], uu[xu[1]], uu[xu[13]], uu[xu[24]], uu[xu[14]], dE, fu);
-           else {
-             function Ls(...uu) {
-               for (XE(uu[xu[4]] = xu[1], uu[xu[1]] = 'CedaBorWtcqZj%;[^w|!5+~}nuU8:N#1MX<pmS,4Q0)(J]i"xszhIbF.*`vADE$O@2T6>GVl=RL93/fy?{gY7_KHkP&', uu[-xu[187]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[-xu[187]].length, uu[xu[14]] = [], uu[xu[9]] = xu[0], uu[xu[60]] = xu[0], uu[x … [truncated]
-                 if (uu[xu[66]] = uu[xu[1]].indexOf(uu[-xu[187]][uu[xu[57]]]), uu[xu[66]] !== -xu[1])
-                   if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[66]];
-                   else {
-                     XE(uu[xu[19]] += uu[xu[66]] * xu[23], uu[xu[9]] |= uu[xu[19]] << uu[xu[60]], uu[xu[60]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                     do {
-                       XE(uu[xu[14]].push(uu[xu[9]] & xu[3]), uu[xu[9]] >>= xu[2], uu[xu[60]] -= xu[2])
-                     } while (uu[xu[60]] > xu[19]);
-                     uu[xu[19]] = -xu[1]
- ... (10 more removed lines; see GitHub link above)
+         Ib && kG()[bG(655) + "ct"](GG[tG[37]][tG[241]], GG[tG[37]][tG[241]], mb);
+         const qw = YG[bG(656) + bG(657)];
+         qw !== tG[96] && GG[tG[0]][bG(tG[345]) + bG(tG[346])] === qw[sw(658) + sw(659) + sw(660)] && YG[sw(tG[347]) + sw(tG[348]) + sw(tG[349])] !== tG[96] ? JG(YG, GG[tG[1]], GG[tG[2]], GG[tG[0]], GG[tG[16]], GG[tG[37]], ib, GG[tG[39]], Wb) : YG[sw(tG[347]) + sw(tG[348]) + sw(tG … [truncated]
```

#### 2021. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14441-L14459` → after: `L14835-L14837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14835-L14837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14835-L14837) · [Before (L14441-L14459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14441-L14459)

```diff
-       const mE = lu()[Eu(xu[346])](uu[xu[14]][xu[216]]);
-       if (Number[xu[345]](mE)) {
-         if (mE > Uu[xu[9]][Eu(xu[326]) + Eu(xu[239])]) {
-           function xs(...uu) {
-             for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'w,{"=RZlcJgbEqO4)^+YF70#DT&rK;1v_([MpV/C6`hB2nQ>8~zL.aymI?$tHPjXAfu%<Nx:d]Ge|S@i3U5sk!Wo9*}', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[24]] = uu[xu[39]].length, uu[-xu[319]] = [], uu[-xu[5]] = xu[0], uu[xu[60]] = xu[0], uu[xu[ … [truncated]
-               if (uu[xu[344]] = uu[xu[8]].indexOf(uu[xu[39]][uu[xu[343]]]), uu[xu[344]] !== -xu[1])
-                 if (uu[xu[342]] < xu[0]) uu[xu[342]] = uu[xu[344]];
-                 else {
-                   XE(uu[xu[342]] += uu[xu[344]] * xu[23], uu[-xu[5]] |= uu[xu[342]] << uu[xu[60]], uu[xu[60]] += (uu[xu[342]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                   do {
-                     XE(uu[-xu[319]].push(uu[-xu[5]] & xu[3]), uu[-xu[5]] >>= xu[2], uu[xu[60]] -= xu[2])
-                   } while (uu[xu[60]] > xu[19]);
-                   uu[xu[342]] = -xu[1]
-                 } return uu[xu[342]] > -xu[1] && uu[-xu[319]].push((uu[-xu[5]] | uu[xu[342]] << uu[xu[60]]) & xu[3]), Hu(uu[-xu[319]])
-           }
- 
- ... (3 more removed lines; see GitHub link above)
+       const Fb = kG()[bG(tG[351])](GG[tG[37]][tG[241]]);
+       if (Number[tG[350]](Fb)) {
+         if (Fb > SG[tG[10]][bG(tG[330]) + bG(tG[256])]) {
```

#### 2022. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14461-L14518` → after: `L14839-L14842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14839-L14842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14839-L14842) · [Before (L14461-L14518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14461-L14518)

```diff
-           const Hs = Date[Eu(685)]();
-           if (Hs - ku >= 6e4) {
-             function ns(...uu) {
-               for (XE(uu[xu[4]] = xu[1], uu[xu[8]] = 'BCT9wmxOF?=|,iqJ3[jDLa]yM}7Xs_~#cl%)KNr!Edu:H>(e;Qn+52V{Phv8^$<6YtAgR&fU"b1WZzI@`okG/4p*0S.', uu[xu[39]] = "" + (uu[xu[0]] || ""), uu[xu[6]] = uu[xu[39]].length, uu[xu[14]] = [], uu[xu[79]] = xu[0], uu[xu[60]] = xu[0], uu[xu[1 … [truncated]
-                 if (uu[xu[231]] = uu[xu[8]].indexOf(uu[xu[39]][uu[xu[2]]]), uu[xu[231]] !== -xu[1])
-                   if (uu[xu[19]] < xu[0]) uu[xu[19]] = uu[xu[231]];
-                   else {
-                     XE(uu[xu[19]] += uu[xu[231]] * xu[23], uu[xu[79]] |= uu[xu[19]] << uu[xu[60]], uu[xu[60]] += (uu[xu[19]] & xu[28]) > xu[29] ? xu[11] : xu[30]);
-                     do {
-                       XE(uu[xu[14]].push(uu[xu[79]] & xu[3]), uu[xu[79]] >>= xu[2], uu[xu[60]] -= xu[2])
-                     } while (uu[xu[60]] > xu[19]);
-                     uu[xu[19]] = -xu[1]
-                   } return uu[xu[19]] > -xu[1] && uu[xu[14]].push((uu[xu[79]] | uu[xu[19]] << uu[xu[60]]) & xu[3]), Hu(uu[xu[14]])
-             }
- 
-             function ys(uu) {
- ... (42 more removed lines; see GitHub link above)
+           const nw = Date[bG(676)]();
+           nw - aG >= 6e4 && pb(console[bG(677)](bG(tG[356]) + bG(tG[357]) + bG(680) + bG(681) + bG(682) + ": " + Fb + bG(683) + SG[tG[10]][bG(tG[330]) + bG(tG[256])] + " (" + vG + bG(684)), vG = tG[1], aG = nw);
+           const gw = SG[tG[10]][bG(tG[330]) + bG(tG[256])] / Fb;
+           pb(kG()[bG(685)](GG[tG[37]][tG[241]], GG[tG[37]][tG[241]], gw), GG[tG[37]][tG[271]]())
```

#### 2023. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14520-L14526` → after: `L14844-L14845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14844-L14845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14844-L14845) · [Before (L14520-L14526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14520-L14526)

```diff
- 
-         function EU(...uu) {
-           return uu[xu[4]] = xu[1], typeof Vu[uu[xu[0]]] === xu[10] ? Vu[uu[xu[0]]] = uU(ru[uu[xu[0]]]) : Vu[uu[xu[0]]]
-         }
-         XE(console[Eu(xu[347])](new Error(Eu(696) + Eu(697) + Eu(698) + Eu(699) + Eu(700) + xu[189] + uu[xu[14]][xu[348]])[EU(701)]), lu()[EU(702)](uu[xu[14]][xu[348]], xu[0], xu[0], xu[0]), uu[xu[14]][xu[259]]())
-       }
-       Number[xu[345]](lu()[Eu(xu[346])](uu[xu[14]][xu[349]])) || XE(console[Eu(xu[347])](new Error(Eu(703) + Eu(704) + Eu(705) + Eu(706) + Eu(707) + uu[xu[14]][xu[349]])[Eu(708)]), lu()[Eu(xu[332])](uu[xu[14]][xu[349]], xu[0], xu[0], xu[0]), uu[xu[14]][xu[259]]()), XE(uu[xu[13]][ … [truncated]
+       } else pb(console[bG(tG[352])](new Error(bG(671) + bG(672) + bG(673) + bG(674) + GG[tG[37]][tG[241]])[bG(tG[355])]), kG()[bG(tG[306])](GG[tG[37]][tG[241]], tG[1], tG[1], tG[1]), GG[tG[37]][tG[271]]());
+       Number[tG[350]](kG()[bG(tG[351])](GG[tG[37]][tG[354]])) || pb(console[bG(tG[352])](new Error(bG(686) + bG(687) + bG(688) + tG[353] + GG[tG[37]][tG[354]])[bG(tG[355])]), kG()[bG(tG[306])](GG[tG[37]][tG[354]], tG[1], tG[1], tG[1]), GG[tG[37]][tG[271]]()), Number[tG[350]](kG() … [truncated]
```

#### 2024. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14528` → after: `L14847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14847) · [Before (L14528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14528)

```diff
-     const Ru = xu[190];
+     const wb = tG[101];
```

#### 2025. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14531` → after: `L14850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14850) · [Before (L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14531)

```diff
-       return tu = [uu, {}], nu(Tu(720))
+       return bb(GG)
```

#### 2026. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14535` → after: `L14854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14854) · [Before (L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14535)

```diff
-       return tu = [uu, {}], nu(Tu(721), Tu(xu[354]) + Tu(xu[355]), Tu(xu[356]) + Tu(xu[357]))[Tu(xu[358]) + Tu(xu[359])]
+       return HG = [GG, {}], BG(DG(697), DG(tG[369]) + DG(tG[370]), DG(tG[371]) + DG(tG[372]))[DG(tG[373]) + DG(tG[374])]
```

#### 2027. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14539-L14540` → after: `L14858-L14859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14858-L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14858-L14859) · [Before (L14539-L14540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14539-L14540)

```diff
-       var Eu = {
-         get [Tu(728) + xu[7]]() {
+       return Gb(GG, {
+         get [DG(704) + tG[160]]() {
```

#### 2028. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14543-L14544` → after: `L14862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14862) · [Before (L14543-L14544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14543-L14544)

```diff
-       };
-       return tu = [uu, Eu], nu(Tu(729))
+       })
```

#### 2029. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14548` → after: `L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14866) · [Before (L14548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14548)

```diff
-       return tu = [uu, {}], new nu(Tu(730), Tu(xu[354]) + Tu(xu[355]), Tu(xu[356]) + Tu(xu[357]))[Tu(xu[358]) + Tu(xu[359])]
+       return HG = [GG, {}], new BG(DG(705), DG(tG[369]) + DG(tG[370]), DG(tG[371]) + DG(tG[372]))[DG(tG[373]) + DG(tG[374])]
```

#### 2030. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14552` → after: `L14870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14870) · [Before (L14552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14552)

```diff
-       return yu(uu)
+       return HG = [GG, {}], BG(DG(706))
```

#### 2031. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14556` → after: `L14874-L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14874-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14874-L14878) · [Before (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14556)

```diff
-       return tu = [uu, {}], nu(Tu(731))
+       return HG = [GG, {}], BG(DG(707))
+     }
+ 
+     function Vb(...GG) {
+       return HG = [GG, {}], BG(DG(708))
```

#### 2032. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14562` → after: `L14884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14884) · [Before (L14562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14562)

```diff
-     const lE = su.d;
+     const fb = wG.e;
```

#### 2033. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14566-L14567` → after: `L14888-L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14888-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14888-L14889) · [Before (L14566-L14567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14566-L14567)

```diff
-         YG: ju
-       } = uu, su = uu.YG.xV("movement");
+         Hr: ZG
+       } = GG, wG = GG.Hr.Bl("movement");
```

#### 2034. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14570-L14573` → after: `L14892-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14892-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14892-L14895) · [Before (L14570-L14573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14570-L14573)

```diff
-         if (ju.Puu(Zu.HV)) {
-           const su = ju.SF(Zu.HV),
-             Uu = ju.PEu(Zu.HV);
-           uu.bloxd.regrowPlayerBody(Zu.HV), Ku(uu, Zu.HV, Zu, Uu, su, Eu)
+         if (ZG.nGG(LG.RP)) {
+           const wG = ZG.qT(LG.RP),
+             SG = ZG.qbG(LG.RP);
+           GG.bloxd.regrowPlayerBody(LG.RP), jG(GG, LG.RP, LG, SG, wG, bG)
```

#### 2035. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14578` → after: `L14900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14900) · [Before (L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14578)

```diff
-   38136: (uu, Eu, ju) => {
+   38149: (GG, bG, ZG) => {
```

#### 2036. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14584-L14599` → after: `L14906-L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14906-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14906-L14921) · [Before (L14584-L14599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14584-L14599)

```diff
-     var su = ju(22),
-       Uu = ju(24),
-       Zu = ju(38141),
-       Xu = ju(1369),
-       lu = ju(1183),
-       qu = ju(38173),
-       fu = ju(37194),
-       Cu = ju(6677),
-       bu = ju(349),
-       cu = ju(1255),
-       Nu = ju(38029),
-       Ou = ju(37803),
-       Yu = ju(770),
-       hu = ju(36988),
-       Du = ju(38074),
-       gu = ju(38165);
+     var wG = ZG(17),
+       SG = ZG(19),
+       LG = ZG(38155),
+       yG = ZG(1287),
+       kG = ZG(1096),
+       UG = ZG(38189),
+       YG = ZG(37154),
+       VG = ZG(6488),
+       pG = ZG(352),
+       fG = ZG(1163),
+       QG = ZG(38042),
+       KG = ZG(37763),
+       hG = ZG(703),
+       dG = ZG(36940),
+       JG = ZG(38080),
+       rG = ZG(38182);
```

#### 2037. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14605` → after: `L14927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14927) · [Before (L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14605)

```diff
-       if (!Uu) return su._edgeGuardHold = qu.e, !1;
+       if (!SG) return wG._edgeGuardHold = UG.b, !1;
```

#### 2038. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14609` → after: `L14931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14931) · [Before (L14609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14609)

```diff
-       } = uu.YG.PEu(Eu), Cu = uu.YG.SF(Eu), bu = lu > 0, {
+       } = GG.Hr.qbG(bG), VG = GG.Hr.qT(bG), pG = kG > 0, {
```

#### 2039. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14613` → after: `L14935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14935) · [Before (L14613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14613)

```diff
-       } = uu.YG.wT(Eu), Yu = cu, hu = Nu / 2, pu = (0, gu.e)(uu), wu = (Eu, ju, su) => {
+       } = GG.Hr.kN(bG), hG = fG, dG = QG / 2, XG = (0, rG.b)(GG), uG = (bG, ZG, wG) => {
```

#### 2040. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14616-L14617` → after: `L14938-L14939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14938-L14939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14938-L14939) · [Before (L14616-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14616-L14617)

```diff
-           Xu = "empty" === Zu ? uu.zb.dL(Eu, ju, su) : 0;
-         return 0 !== Xu && (null !== (Uu = Du.b[uu.bloxd.getMetaInfo(Xu).rootId]) && void 0 !== Uu ? Uu : 0) > 0 ? "ground" : Zu
+           yG = "empty" === LG ? GG.Op.KD(bG, ZG, wG) : 0;
+         return 0 !== yG && (null !== (SG = JG.b[GG.bloxd.getMetaInfo(yG).rootId]) && void 0 !== SG ? SG : 0) > 0 ? "ground" : LG
```

#### 2041. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14620` → after: `L14942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14942) · [Before (L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14620)

```diff
-         RY: [Math.sin(fu), 0, Math.cos(fu)],
+         Sd: [Math.sin(YG), 0, Math.cos(YG)],
```

#### 2042. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14622-L14624` → after: `L14944-L14946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14944-L14946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14944-L14946) · [Before (L14622-L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14622-L14624)

```diff
-       }, du = bu && ((0, gu.h)(Ju, wu) || (0, gu.k)(Yu, hu, wu)), au = ju.isOnGround(), Pu = hu + Mu, ou = hu - Gu, ku = Math.floor(Yu[1] + eu), mu = Math.floor(Yu[1] + Ou - eu), vu = (Eu, ju) => [-ou, ou].some((su => {
-         const Uu = Math.floor(Yu[0] + Eu * Pu + (0 === Eu ? su : 0)),
-           Zu = Math.floor(Yu[2] + ju * Pu + (0 === ju ? su : 0));
+       }, CG = pG && ((0, rG.f)(iG, uG) || (0, rG.j)(hG, dG, uG)), WG = ZG.isOnGround(), mG = dG + zG, IG = dG - oG, FG = Math.floor(hG[1] + EG), vG = Math.floor(hG[1] + KG - EG), aG = (bG, ZG) => [-IG, IG].some((wG => {
+         const SG = Math.floor(hG[0] + bG * mG + (0 === bG ? wG : 0)),
+           LG = Math.floor(hG[2] + ZG * mG + (0 === ZG ? wG : 0));
```

#### 2043. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14626` → after: `L14948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14948) · [Before (L14626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14626)

```diff
-           if (uu.zb.tL(Uu, Eu, Zu)) return !0;
+           if (GG.Op.dD(SG, bG, LG)) return !0;
```

#### 2044. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14629` → after: `L14951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14951) · [Before (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14629)

```diff
-       return su._edgeGuardHold = (0, qu.l)(su._edgeGuardHold, bu, du, au, iu, Xu, Zu), (0, qu.p)(su._edgeGuardHold, bu, du)
+       return wG._edgeGuardHold = (0, UG.k)(wG._edgeGuardHold, pG, CG, WG, MG, yG, LG), (0, UG.n)(wG._edgeGuardHold, pG, CG)
```

#### 2045. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14656` → after: `L14978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14978) · [Before (L14656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14656)

```diff
-           _edgeGuardHold: qu.e,
+           _edgeGuardHold: UG.b,
```

#### 2046. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14660-L14661` → after: `L14982-L14983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14982-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14982-L14983) · [Before (L14660-L14661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14660-L14661)

```diff
-         lG: function(uu, Eu) {
-           Eu.canRunCombinator = new fu.b, Eu.canRunCombinator.setBooleanType("standardCanRun", !0)
+         Kr: function(GG, bG) {
+           bG.canRunCombinator = new YG.e, bG.canRunCombinator.setBooleanType("standardCanRun", !0)
```

#### 2047. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14667` → after: `L14989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14989) · [Before (L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14667)

```diff
-       const ju = uu.YG.xV("movementInputs"),
+       const ZG = GG.Hr.Bl("movementInputs"),
```

#### 2048. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14669` → after: `L14991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14991) · [Before (L14669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14669)

```diff
-           YG: Uu
+           Hr: SG
```

#### 2049. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14673-L14674` → after: `L14995-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14995-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14995-L14996) · [Before (L14673-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14673-L14674)

```diff
-         const ju = Uu.PEu(Xu.HV),
-           lu = Uu.qEu(Xu.HV),
+         const ZG = SG.qbG(yG.RP),
+           kG = SG.EbG(yG.RP),
```

#### 2050. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14676` → after: `L14998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L14998) · [Before (L14676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14676)

```diff
-           fu = uu.bloxd.getResolvedPhysicsSettings(Xu.HV, qu),
+           YG = GG.bloxd.getResolvedPhysicsSettings(yG.RP, UG),
```

#### 2051. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14683` → after: `L15005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L15005) · [Before (L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14683)

```diff
-             const su = vu(uu, ju, lu, Xu, (0, hu.i)());
+             const wG = aG(GG, ZG, kG, yG, (0, dG.f)());
```

#### 2052. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14686` → after: `L15008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L15008) · [Before (L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14686)

```diff
-           uu.sG.canCrouch || (ju.setCrouching(!1), Xu.padSneakToggled = !1), cu = su.d.get("clientEscMenuOptions").touchEdgeGuard && uu.sG.canCrouch && qu.type === Cu.v.DEFAULT && !lu._flying && !mu(ju, lu, Xu)
+           GG.Qr.canCrouch || (ZG.setCrouching(!1), yG.padSneakToggled = !1), fG = wG.e.get("clientEscMenuOptions").touchEdgeGuard && GG.Qr.canCrouch && UG.type === VG.q.DEFAULT && !kG._flying && !vG(ZG, kG, yG)
```

#### 2053. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14688` → after: `L15010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L15010) · [Before (L14688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14688)

```diff
-         ju.edgeGuard = pu(uu, Xu.HV, lu, Xu, cu, (0, Yu.l)(), Eu), ju.toggleFly = Xu.toggleFly, Xu.toggleFly = !1, Xu.towerJump && (ju.jumping = !0), Xu.towerJump = !1, Xu.HV === uu.FQ && (ju.cameraPitch = Ou.d.getPlayerFacingPitch(uu), Ou.d.copyPlayerFacingDirection(uu, ju.camer … [truncated]
+         ZG.edgeGuard = XG(GG, yG.RP, kG, yG, fG, (0, hG.l)(), bG), ZG.toggleFly = yG.toggleFly, yG.toggleFly = !1, yG.towerJump && (ZG.jumping = !0), yG.towerJump = !1, yG.RP === GG.sA && (ZG.cameraPitch = KG.d.getPlayerFacingPitch(GG), KG.d.copyPlayerFacingDirection(GG, ZG.camer … [truncated]
```

#### 2054. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14694` → after: `L15016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L15016) · [Before (L14694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14694)

```diff
-         sG: qu
+         Qr: UG
```

#### 2055. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14699` → after: `L15021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L15021) · [Before (L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14699)

```diff
-       qu.canCrouch ? (ju.shouldIgnoreCrouchingSpeedReduction() && (Zu.padSneakToggled = !1), su.d.get("clientEscMenuOptions").crouchIsToggle ? Eu.setCrouching(Zu.crouchToggled || Zu.padSneakToggled) : (Eu.setCrouching(!!Zu.crouch || Zu.padSneakToggled), Zu.crouchToggled = !1)) :  … [truncated]
+       UG.canCrouch ? (ZG.shouldIgnoreCrouchingSpeedReduction() && (LG.padSneakToggled = !1), wG.e.get("clientEscMenuOptions").crouchIsToggle ? bG.setCrouching(LG.crouchToggled || LG.padSneakToggled) : (bG.setCrouching(!!LG.crouch || LG.padSneakToggled), LG.crouchToggled = !1)) :  … [truncated]
```

#### 2056. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14721` → after: `L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L15043) · [Before (L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14721)

```diff
-         sG: qu
+         Qr: UG
```

#### 2057. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14745` → after: `L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L15067) · [Before (L14745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L14745)

```diff
-         sG: Zu
+         Qr: LG
```
