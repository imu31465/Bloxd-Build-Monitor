# Changed — Bundle Modifications Report (Part 052 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `52 / 154` (**444** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (115 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 92. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L971-L982` → after: `L984-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L984-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L984-L990) · [Before (L971-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L971-L982)

```diff
-             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
-               for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';qOUtWhkdC,K~0/f_XuTe?|[)Jv@3N*Ra<V8pYmo=>r15#gbzQBHlxPwF4{!9D(EA&"^Gi.M:26}sc$y7]+`ISLZjn%', WW[jW[81]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[81]].length, WW[jW[83]] = [], WW[jW[47]] = jW[1], WW[jW[8]] = jW[1], WW[jW[5 … [truncated]
-                 if (WW[-jW[73]] = WW[jW[4]].indexOf(WW[jW[81]][WW[-jW[82]]]), WW[-jW[73]] !== -jW[2])
-                   if (WW[jW[51]] < jW[1]) WW[jW[51]] = WW[-jW[73]];
-                   else {
-                     HW(WW[jW[51]] += WW[-jW[73]] * jW[30], WW[jW[47]] |= WW[jW[51]] << WW[jW[8]], WW[jW[8]] += (WW[jW[51]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
-                     do {
-                       HW(WW[jW[83]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[jW[8]] -= jW[10])
-                     } while (WW[jW[8]] > jW[25]);
-                     WW[jW[51]] = -jW[2]
-                   } return WW[jW[51]] > -jW[2] && WW[jW[83]].push((WW[jW[47]] | WW[jW[51]] << WW[jW[8]]) & jW[11]), kW(WW[jW[83]])
-             }(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
+             bR(RR[LR[12]] = LR[2], RR[LR[105]] = function(...RR) {
+               if (bR(RR[LR[12]] = LR[0], RR[LR[31]] = RR[LR[2]].length), RR[LR[31]] < LR[22]) return LR[2];
+               if (bR(RR[LR[100]] = Math.max(...RR[LR[2]]), RR[LR[101]] = Math.min(...RR[LR[2]])), RR[LR[100]] === RR[LR[101]]) return LR[2];
+               for (bR(RR[LR[0]] = Array(RR[LR[31]] - LR[0]).fill(Number.MAX_SAFE_INTEGER), RR[-LR[102]] = Array(RR[LR[31]] - LR[0]).fill(Number.MIN_SAFE_INTEGER), RR[LR[8]] = Math.ceil((RR[LR[100]] - RR[LR[101]]) / (RR[LR[31]] - LR[0])), RR[LR[27]] = LR[2]), RR[LR[10]] = LR[2]; R … [truncated]
+               for (bR(RR[LR[5]] = Number.MIN_SAFE_INTEGER, RR[LR[104]] = RR[LR[101]]), RR[-LR[103]] = LR[2]; RR[-LR[103]] < RR[LR[31]] - LR[0]; RR[-LR[103]]++) RR[LR[0]][RR[-LR[103]]] === Number.MAX_SAFE_INTEGER && RR[-LR[102]][RR[-LR[103]]] === Number.MIN_SAFE_INTEGER || bR(RR[L … [truncated]
+               return RR[LR[5]] = Math.max(RR[LR[5]], RR[LR[100]] - RR[LR[104]]), RR[LR[5]]
+             }, console.log(RR[LR[105]]))
```

#### 93. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L984` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L992) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L984)

```diff
-           WW[jW[12]] = jW[1], HW(WW[jW[84]] = iW(144) + iW(145) + OW(146), WW[jW[2]] = OW(147) + OW(148) + OW(149) + OW(150) + "?", WW[jW[19]] = OW(151) + OW(152) + OW(153) + OW(154), WW[jW[84]].match(WW[jW[2]] + WW[jW[19]]))
+           SR(172) + "Y" in WR && jR(), tR()[SR(LR[73])](AR, AR, XR, mR)
```

#### 94. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L986` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L994) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L986)

```diff
-         iW(143) in sW && dW(), WW[jW[3]] *= WW[jW[77]]
+         bR(vR = (0, uR.t)(vR, 1, Math[cR(LR[106])](LR[0], Math[cR(LR[44])](LR[2], -IR, LR[0] - PR / fR))), tR()[cR(LR[77])](AR, AR, MR))
```

#### 95. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L988-L992` → after: `L996-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L996-L999) · [Before (L988-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L988-L992)

```diff
-       const ZW = WW[jW[23]][iW(155) + iW(156) + iW(157)],
-         xW = ZW ? Math[iW(158)](ZW, WW[jW[3]]) : WW[jW[3]];
-       EW()[iW(jW[84]) + iW(jW[39])](tW, tW);
-       const lW = WW[jW[25]] !== jW[59] && WW[jW[25]] !== void jW[1] ? WW[jW[25]] : WW[jW[23]][iW(161) + iW(162) + iW(jW[82]) + iW(jW[88])];
-       if (xW > jW[1]) {
+       const OR = BR;
+       bR(tR()[wR(LR[66])](OR, AR, pR), OR[LR[0]] = LR[2]);
+       let xR = tR()[wR(177)](OR);
+       if (!lR) {
```

#### 96. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L994-L996` → after: `L1001-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1001-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1001-L1003) · [Before (L994-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L994-L996)

```diff
-           for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ':%[2~39NF(pfX{5+AOdP=8J|x`kU6thunajgI,v"ZD>bBr_lC7y1Q?0EeHm]*Ts!}&K4YRLwcW$#iMV;zG/)@^So.<q', WW[jW[13]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[13]].length, WW[jW[19]] = [], WW[jW[47]] = jW[1], WW[jW[23]] = jW[1], WW[jW[51]] … [truncated]
-             if (WW[jW[57]] = WW[jW[4]].indexOf(WW[jW[13]][WW[jW[85]]]), WW[jW[57]] !== -jW[2])
-               if (WW[jW[51]] < jW[1]) WW[jW[51]] = WW[jW[57]];
+           for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = '*4KnHF}MjR3)x7c2Bs{~]mNyES,98TdLI+[Vlgt=PX?5Y/Zwr`faAzi"6%eDJ;p#v1$qW0&^@u!>G._Cho(UOk|:Qb<', RR[LR[22]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[LR[22]].length, RR[LR[62]] = [], RR[LR[46]] = LR[2], RR[LR[8]] = LR[2], RR[LR[27]] … [truncated]
+             if (RR[LR[5]] = RR[LR[0]].indexOf(RR[LR[22]][RR[LR[82]]]), RR[LR[5]] !== -LR[0])
+               if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[5]];
```

#### 97. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L998` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1005) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L998)

```diff
-                 HW(WW[jW[51]] += WW[jW[57]] * jW[30], WW[jW[47]] |= WW[jW[51]] << WW[jW[23]], WW[jW[23]] += (WW[jW[51]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+                 bR(RR[LR[27]] += RR[LR[5]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[LR[8]], RR[LR[8]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
```

#### 98. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1000-L1003` → after: `L1007-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1007-L1010) · [Before (L1000-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1000-L1003)

```diff
-                   HW(WW[jW[19]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[jW[23]] -= jW[10])
-                 } while (WW[jW[23]] > jW[25]);
-                 WW[jW[51]] = -jW[2]
-               } return WW[jW[51]] > -jW[2] && WW[jW[19]].push((WW[jW[47]] | WW[jW[51]] << WW[jW[23]]) & jW[11]), kW(WW[jW[19]])
+                   bR(RR[LR[62]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[LR[8]] -= LR[10])
+                 } while (RR[LR[8]] > LR[27]);
+                 RR[LR[27]] = -LR[0]
+               } return RR[LR[27]] > -LR[0] && RR[LR[62]].push((RR[LR[46]] | RR[LR[27]] << RR[LR[8]]) & LR[11]), UR(RR[LR[62]])
```

#### 99. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1007` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1014) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1007)

```diff
-           return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = eW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
+           return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = dR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
```

#### 100. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1011` → after: `L1018-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1018-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1018-L1043) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1011)

```diff
-           WW[jW[12]] = jW[1]
+           bR(RR[LR[12]] = LR[2], RR[LR[1]] = function(...RR) {
+             if (bR(RR[LR[12]] = LR[0], RR[LR[0]] = RR[LR[2]].length), RR[LR[0]] < LR[22]) return LR[2];
+             if (bR(RR[LR[1]] = Math.max(...RR[LR[2]]), RR[LR[21]] = Math.min(...RR[LR[2]])), RR[LR[1]] === RR[LR[21]]) return LR[2];
+             for (bR(RR[LR[47]] = Array(RR[LR[0]] - LR[0]).fill(Number.MAX_SAFE_INTEGER), RR[LR[107]] = Array(RR[LR[0]] - LR[0]).fill(Number.MIN_SAFE_INTEGER), RR[LR[25]] = Math.ceil((RR[LR[1]] - RR[LR[21]]) / (RR[LR[0]] - LR[0])), RR[LR[41]] = LR[2]), RR[LR[10]] = LR[2]; RR[LR[10 … [truncated]
+             for (bR(RR[LR[5]] = Number.MIN_SAFE_INTEGER, RR[-LR[108]] = RR[LR[21]]), RR[LR[103]] = LR[2]; RR[LR[103]] < RR[LR[0]] - LR[0]; RR[LR[103]]++) RR[LR[47]][RR[LR[103]]] === Number.MAX_SAFE_INTEGER && RR[LR[107]][RR[LR[103]]] === Number.MIN_SAFE_INTEGER || bR(RR[LR[5]] =  … [truncated]
+             return RR[LR[5]] = Math.max(RR[LR[5]], RR[LR[1]] - RR[-LR[108]]), RR[LR[5]]
+           }, console.log(RR[LR[1]]))
+         }
+         ER(178) in WR && YR(), xR *= vR
+       }
+       const NR = VR[wR(179) + wR(180) + wR(LR[109])],
+         DR = NR ? Math[wR(LR[30])](NR, xR) : xR;
+       tR()[wR(183) + wR(LR[49])](OR, OR);
+       const HR = KR !== LR[84] && void 0 !== KR ? KR : VR[wR(185) + wR(186) + wR(187) + wR(188)];
+       if (DR > LR[2]) {
+         function kR(...RR) {
+ ... (10 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1029-L1032` → after: `L1046-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1046-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1046-L1047) · [Before (L1029-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1029-L1032)

```diff
-           function fW(...WW) {
-             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = pW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
-           }
-           DW *= WW[jW[0]][fW(170) + fW(jW[89])]
+         function QR(...RR) {
+           return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = kR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
```

#### 102. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1034-L1035` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1049-L1050) · [Before (L1034-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1034-L1035)

```diff
-         let VW = WW[jW[0]][vW(172) + vW(173) + "ss"] * xW;
-         if (xW < .3) {
+         let FR = GR[QR(189) + QR(190)] * HR;
+         if (!lR) {
```

#### 103. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1037-L1039` → after: `L1052-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1052-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1052-L1054) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1037-L1039)

```diff
-             for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';IEWPRFDblVCX5QwqUB6m$>j+x7KYohTzg%@8!#GsLkv~JO92/_,dZec)[SnM3uy<:r"=]H&A}N|4tf{*p(`1.i0?a^', WW[-jW[88]] = "" + (WW[jW[1]] || ""), WW[jW[14]] = WW[-jW[88]].length, WW[jW[19]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[-jW[ … [truncated]
-               if (WW[jW[5]] = WW[jW[4]].indexOf(WW[-jW[88]][WW[jW[10]]]), WW[jW[5]] !== -jW[2])
-                 if (WW[-jW[89]] < jW[1]) WW[-jW[89]] = WW[jW[5]];
+             for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = '+PHbimoThrQWdCJXDYyu`az9Gf$j.e#=V03BkF"%tN5IqEc6(MLv/wR&l4x}Z]np:A;~?K*8g1O!^)U@<s_S{7[|>,2', RR[LR[22]] = "" + (RR[LR[2]] || ""), RR[LR[15]] = RR[LR[22]].length, RR[LR[47]] = [], RR[LR[8]] = LR[2], RR[LR[25]] = LR[2], RR[-LR[1 … [truncated]
+               if (RR[LR[111]] = RR[LR[0]].indexOf(RR[LR[22]][RR[LR[10]]]), RR[LR[111]] !== -LR[0])
+                 if (RR[-LR[112]] < LR[2]) RR[-LR[112]] = RR[LR[111]];
```

#### 104. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1041` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1056) · [Before (L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1041)

```diff
-                   HW(WW[-jW[89]] += WW[jW[5]] * jW[30], WW[jW[7]] |= WW[-jW[89]] << WW[jW[8]], WW[jW[8]] += (WW[-jW[89]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+                   bR(RR[-LR[112]] += RR[LR[111]] * LR[33], RR[LR[8]] |= RR[-LR[112]] << RR[LR[25]], RR[LR[25]] += (RR[-LR[112]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
```

#### 105. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1043-L1050` → after: `L1058-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1058-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1058-L1061) · [Before (L1043-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1043-L1050)

```diff
-                     HW(WW[jW[19]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
-                   } while (WW[jW[8]] > jW[25]);
-                   WW[-jW[89]] = -jW[2]
-                 } return WW[-jW[89]] > -jW[2] && WW[jW[19]].push((WW[jW[7]] | WW[-jW[89]] << WW[jW[8]]) & jW[11]), kW(WW[jW[19]])
-           }
- 
-           function XW(...WW) {
-             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = CW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
+                     bR(RR[LR[47]].push(RR[LR[8]] & LR[11]), RR[LR[8]] >>= LR[10], RR[LR[25]] -= LR[10])
+                   } while (RR[LR[25]] > LR[27]);
+                   RR[-LR[112]] = -LR[0]
+                 } return RR[-LR[112]] > -LR[0] && RR[LR[47]].push((RR[LR[8]] | RR[-LR[112]] << RR[LR[25]]) & LR[11]), UR(RR[LR[47]])
```

#### 106. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1054-L1058` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1065) · [Before (L1054-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1054-L1058)

```diff
-             function iW() {}
-             WW[jW[12]] = jW[1], HW(WW[-jW[21]] = function(...WW) {
-               for (HW(WW[jW[12]] = jW[0], WW[jW[0]] = jW[1], WW[jW[92]] = jW[1], WW[-jW[90]] = new iW(jW[1]), WW[-jW[93]] = WW[-jW[90]], WW[jW[91]] = WW[jW[1]], WW[jW[25]] = WW[jW[2]]); WW[jW[91]] !== jW[59] || WW[jW[25]] !== jW[59];) HW(WW[jW[92]] = (WW[jW[91]] ? WW[jW[91]].val  … [truncated]
-               return WW[jW[0]] && (WW[-jW[93]].next = new iW(WW[jW[0]])), WW[-jW[90]].next
-             }, console.log(WW[-jW[21]]))
+             return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = sR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
```

#### 107. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1060` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1067) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1060)

```diff
-           XW(174) + "s" in sW && BW(), VW *= xW
+           FR *= GR[hR(LR[112]) + hR(LR[63])]
```

#### 108. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1062` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1069-L1070) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1062)

```diff
-         DW > VW && (DW = VW), HW(EW()[vW(175)](tW, tW, DW), WW[jW[36]][vW(176) + vW(177)](tW))
+         let TR = GR[QR(193) + QR(194) + "ss"] * DR;
+         DR < .3 && (TR *= DR), FR > TR && (FR = TR), bR(tR()[QR(LR[104])](OR, OR, FR), ZR[QR(196) + QR(197)](OR))
```

#### 109. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1064` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1072) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1064)

```diff
-       WW[jW[36]][iW(jW[48]) + jW[95]] = WW[jW[0]][iW(jW[52]) + iW(jW[45]) + jW[95]] * (wW ? mW : PW)
+       ZR[wR(198) + LR[113]] = GR[wR(199) + wR(LR[82]) + LR[113]] * (lR ? aR : nR)
```

#### 110. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1067` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1075) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1067)

```diff
-   38824: (WW, iW, OW) => {
+   38821: (RR, JR, GR) => {
```

#### 111. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1069-L1070` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1077-L1078) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1069-L1070)

```diff
-       b: () => cW,
-       e: () => LW
+       e: () => iR,
+       g: () => qR
```

#### 112. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1072-L1073` → after: `L1080-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1080-L1081) · [Before (L1072-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1072-L1073)

```diff
-     var mW = OW(38831),
-       EW = OW(2012);
+     var yR = GR(38827),
+       tR = GR(2102);
```

#### 113. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1077` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1085) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1077)

```diff
-         FP: 1,
+         yq: 1,
```

#### 114. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1122` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1130) · [Before (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1122)

```diff
-         bW = ZW ? lW : AW,
+         aR = KR ? rR : eR,
```

#### 115. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1125-L1126` → after: `L1133-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1133-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/257.js#L1133-L1134) · [Before (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/257.js#L1125-L1126)

```diff
-         kW = (0, EW.v)(jW, bW, UW);
-       wW.friction = WW.standingFriction * ((null === xW ? iW.bloxd.getClientPredictedOption(OW, "airMomentumConservation") : xW.airMomentumConservation) ? kW : bW), cW.ticksToReachMaxIdleFriction > 0 && cW.ticksToReachMaxIdleFriction--
+         UR = (0, tR.t)(LR, aR, nR);
+       fR.friction = RR.standingFriction * ((null === wR ? JR.bloxd.getClientPredictedOption(GR, "airMomentumConservation") : wR.airMomentumConservation) ? UR : aR), iR.ticksToReachMaxIdleFriction > 0 && iR.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   41327: (WW, iW, OW) => {
+   41331: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L12-L15` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L12-L15) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L12-L15)

```diff
-     var mW = OW(5174),
-       EW = OW(38195),
-       NW = OW(10484),
-       PW = OW(4344);
+     var yR = GR(5268),
+       tR = GR(38150),
+       uR = GR(10582),
+       ZR = GR(4428);
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L22)

```diff
-         console.warn(`Docs gallery: no default texture for ${cW.size} names`, [...cW]), cW.clear(), wW = null
+         console.warn(`Docs gallery: no default texture for ${iR.size} names`, [...iR]), iR.clear(), fR = null
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L36)

```diff
-       const NW = EW.n[WW];
+       const uR = tR.o[RR];
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L42)

```diff
-         return "string" === typeof(iW = cW && Array.isArray(LW) ? LW[cW[WW]] : LW) ? ZW(iW, PW.g.BLOCK) : iW && "object" === typeof iW && "animTextures" in iW ? ZW((0, mW.l)(iW), PW.g.BLOCK) : null;
+         return "string" === typeof(JR = iR && Array.isArray(qR) ? qR[iR[RR]] : qR) ? KR(JR, ZR.k.BLOCK) : JR && "object" === typeof JR && "animTextures" in JR ? KR((0, yR.l)(JR), ZR.k.BLOCK) : null;
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L47-L48` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L47-L48) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L47-L48)

```diff
-         left: null !== (iW = wW(4)) && void 0 !== iW ? iW : tW,
-         right: null !== (OW = wW(0)) && void 0 !== OW ? OW : tW
+         left: null !== (JR = fR(4)) && void 0 !== JR ? JR : VR,
+         right: null !== (GR = fR(0)) && void 0 !== GR ? GR : VR
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L54-L55)

```diff
-       const OW = EW.n[WW];
-       return ZW(null !== (iW = null === OW || void 0 === OW ? void 0 : OW.itemTexture) && void 0 !== iW ? iW : "string" === typeof(null === OW || void 0 === OW ? void 0 : OW.textureInfo) ? OW.textureInfo : WW, PW.g.ITEM)
+       const GR = tR.o[RR];
+       return KR(null !== (JR = null === GR || void 0 === GR ? void 0 : GR.itemTexture) && void 0 !== JR ? JR : "string" === typeof(null === GR || void 0 === GR ? void 0 : GR.textureInfo) ? GR.textureInfo : RR, ZR.k.ITEM)
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L60-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L60-L64) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L60-L64)

```diff
-       return EW.n[WW] ? null !== (iW = null === (OW = xW(WW)) || void 0 === OW ? void 0 : OW.top) && void 0 !== iW ? iW : lW(WW) : null
-     }
- 
-     function bW(WW) {
-       return ZW(WW, PW.g.ICON)
+       return tR.o[RR] ? null !== (JR = null === (GR = wR(RR)) || void 0 === GR ? void 0 : GR.top) && void 0 !== JR ? JR : rR(RR) : null
+     }
+ 
+     function aR(RR) {
+       return KR(RR, ZR.k.ICON)
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L69)

```diff
-         return OW(4478)(`./${WW}.png`)
+         return GR(4589)(`./${RR}.png`)
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L75)

```diff
-   38214: (WW, iW, OW) => {
+   38176: (RR, JR, GR) => {
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/258.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/258.js#L77)

```diff
-       c: () => mW
+       e: () => yR
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   38249: (WW, iW, OW) => {
+   38213: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L15)

```diff
-   38285: (WW, iW, OW) => {
+   38239: (RR, JR, GR) => {
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L31)

```diff
-       return WW === iW ? WW : Math.random() * (iW - WW) + WW
+       return RR === JR ? RR : Math.random() * (JR - RR) + RR
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L116)

```diff
-       return mW = Math.abs(iW - WW) <= OW ? iW : WW + Math.sign(iW - WW) * OW, mW
+       return yR = Math.abs(JR - RR) <= GR ? JR : RR + Math.sign(JR - RR) * GR, yR
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L122)

```diff
-       return EW = -OW < mW && mW < OW ? iW : SW(WW, iW = WW + mW, OW), EW
+       return tR = -GR < yR && yR < GR ? JR : XR(RR, JR = RR + yR, GR), tR
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L135)

```diff
-       return 0 === OW ? iW : JW(iW, OW)
+       return 0 === GR ? JR : pR(JR, GR)
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L164)

```diff
-   38235: (WW, iW, OW) => {
+   38195: (RR, JR, GR) => {
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L166-L167` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L166-L167) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L166-L167)

```diff
-       Matrix: () => mW.d,
-       Quaternion: () => mW.g,
+       Matrix: () => yR.e,
+       Quaternion: () => yR.i,
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L170-L174` → after: `L170-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L170-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L170-L174) · [Before (L170-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L170-L174)

```diff
-       Vector2: () => mW.m,
-       fA: () => mW.q,
-       Vector4: () => mW.r
-     });
-     var mW = OW(38241);
+       Vector2: () => yR.n,
+       Fe: () => yR.r,
+       Vector4: () => yR.s
+     });
+     var yR = GR(38204);
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L177)

```diff
-   38253: (WW, iW, OW) => {
+   38217: (RR, JR, GR) => {
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L189-L190` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L189-L190) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L189-L190)

```diff
-       f: () => EW,
-       j: () => PW
+       g: () => tR,
+       i: () => ZR
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L215)

```diff
-   38299: (WW, iW, OW) => {
+   38253: (RR, JR, GR) => {
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/259.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/259.js#L217-L218)

```diff
-       d: () => NW,
-       h: () => EW
+       e: () => uR,
+       f: () => tR
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (107 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1)

```diff
- /*! For license information please see 1yqdn.260.993ae5af.chunk.js.LICENSE.txt */
+ /*! For license information please see 4udp6d.260.68443e07.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L5)

```diff
-   39459: WW => {
+   39451: RR => {
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L10-L13` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L10-L13) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L10-L13)

```diff
-   39443: (WW, iW, OW) => {
-     var mW = OW(39452),
-       EW = OW(39456),
-       NW = OW(39459);
+   39438: (RR, JR, GR) => {
+     var yR = GR(39442),
+       tR = GR(39448),
+       uR = GR(39451);
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L135)

```diff
-   39452: (WW, iW) => {
+   39442: (RR, JR) => {
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L189)

```diff
-   39441: (WW, iW, OW) => {
+   39430: (RR, JR, GR) => {
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L205-L207` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L205-L207) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L205-L207)

```diff
-     var mW, EW = OW(39443),
-       NW = OW(39468),
-       PW = OW(39482);
+     var yR, tR = GR(39438),
+       uR = GR(39453),
+       ZR = GR(39460);
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L252)

```diff
-   39485: (WW, iW) => {
+   39465: (RR, JR) => {
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L291)

```diff
-   39482: (WW, iW, OW) => {
+   39460: (RR, JR, GR) => {
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L367-L369` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L367-L369) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L367-L369)

```diff
-     var mW = OW(39443),
-       EW = OW(39452),
-       NW = OW(39485),
+     var yR = GR(39438),
+       tR = GR(39442),
+       uR = GR(39465),
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L372-L374)

```diff
-       cW = OW(39468),
-       wW = OW(39487),
-       tW = OW(39494),
+       iR = GR(39453),
+       fR = GR(39470),
+       VR = GR(39479),
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L400)

```diff
-       WW: for (var AW = EW, bW = EW * ZW; AW < NW; ++AW, bW += ZW) {
+       RR: for (var eR = tR, aR = tR * KR; eR < uR; ++eR, aR += KR) {
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L419)

```diff
-       WW: for (var lW = mW, AW = mW * tW; lW < EW; ++lW, AW += tW) {
+       RR: for (var rR = yR, eR = yR * VR; rR < tR; ++rR, eR += VR) {
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L438)

```diff
-   39487: (WW, iW, OW) => {
+   39470: (RR, JR, GR) => {
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L481)

```diff
-     var mW = OW(39494)("lo<p0", ["p0"]),
+     var yR = GR(39479)("lo<p0", ["p0"]),
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L496)

```diff
-   39494: WW => {
+   39479: RR => {
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L506)

```diff
-   39476: WW => {
+   39458: RR => {
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L595)

```diff
-   39468: (WW, iW, OW) => {
+   39453: (RR, JR, GR) => {
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L689)

```diff
-         mW ? yW = PW : YW = PW;
+         yR ? BR = ZR : MR = ZR;
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L713)

```diff
-               WW: for (var VW = 0; VW < uW; ++VW) {
+               RR: for (var PR = 0; PR < OR; ++PR) {
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L750)

```diff
-               WW: for (var uW = 0; uW < yW; ++uW) {
+               RR: for (var OR = 0; OR < BR; ++OR) {
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L773-L775` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L773-L775) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L773-L775)

```diff
-     var mW = OW(39443),
-       EW = OW(39452),
-       NW = OW(39476),
+     var yR = GR(39438),
+       tR = GR(39442),
+       uR = GR(39458),
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L796)

```diff
-   39456: WW => {
+   39448: RR => {
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L822)

```diff
-   39404: (WW, iW, OW) => {
+   39393: (RR, JR, GR) => {
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L841-L843)

```diff
-         PW && (NW.remove(WW), mW.mH && (mW.multi ? (PW.forEach((iW => {
-           iW && mW.mH(WW, iW)
-         })), PW.length = 0) : mW.mH(WW, PW)), LW.removals.push(NW), wW())
+         ZR && (uR.remove(RR), yR.eD && (yR.multi ? (ZR.forEach((JR => {
+           JR && yR.eD(RR, JR)
+         })), ZR.length = 0) : yR.eD(RR, ZR)), qR.removals.push(uR), fR())
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L874)

```diff
-       this.Tb = EW, this._systems = NW, this._renderSystems = PW, this.sG = function(iW) {
+       this.Ha = tR, this._systems = uR, this._renderSystems = ZR, this.Z6 = function(JR) {
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L876)

```diff
-         return Array.isArray(iW) && iW.forEach((iW => WW.zD(mW, iW))), mW
+         return Array.isArray(JR) && JR.forEach((JR => RR.Jm(yR, JR))), yR
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L881)

```diff
-       }, this.bOW = function(WW) {
+       }, this.GyR = function(RR) {
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L887)

```diff
-         if (EW[OW]) throw new Error(`Component ${OW} already exists.`);
+         if (tR[GR]) throw new Error(`Component ${GR} already exists.`);
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L889` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L889) · [Before (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L889)

```diff
-         return LW.name = OW, LW.multi = !!WW.multi, LW.order = isNaN(WW.order) ? 99 : WW.order, LW.stateConstructor = WW.stateConstructor || null, LW.state = WW.state || {}, LW.mY = WW.mY || null, LW.mH = WW.mH || null, LW.system = WW.system || null, LW.ZY = WW.ZY || null, iW[OW] … [truncated]
+         return qR.name = GR, qR.multi = !!RR.multi, qR.order = isNaN(RR.order) ? 99 : RR.order, qR.stateConstructor = RR.stateConstructor || null, qR.state = RR.state || {}, qR.mC = RR.mC || null, qR.eD = RR.eD || null, qR.system = RR.system || null, qR.YC = RR.YC || null, JR[GR] … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L892)

```diff
-         if (!mW) throw new Error(`Unknown component: ${WW}`);
+         if (!yR) throw new Error(`Unknown component: ${RR}`);
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L896)

```diff
-         LW.name = WW, LW.multi = !!OW.multi, LW.order = isNaN(OW.order) ? 99 : OW.order, LW.state = OW.state || {}, LW.mY = OW.mY || null, LW.mH = OW.mH || null, LW.system = OW.system || null, LW.ZY = OW.ZY || null, iW[WW] = LW, EW[WW]._pendingMultiCleanup = !1, EW[WW]._multiClea … [truncated]
+         qR.name = RR, qR.multi = !!GR.multi, qR.order = isNaN(GR.order) ? 99 : GR.order, qR.state = GR.state || {}, qR.mC = GR.mC || null, qR.eD = GR.eD || null, qR.system = GR.system || null, qR.YC = GR.YC || null, JR[RR] = qR, tR[RR]._pendingMultiCleanup = !1, tR[RR]._multiClea … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L900)

```diff
-         LW.ZY && wW < 0 && PW.push(WW), !LW.ZY && wW >= 0 && PW.splice(wW, 1), PW.sort(((WW, OW) => iW[WW].order - iW[OW].order));
+         qR.YC && fR < 0 && ZR.push(RR), !qR.YC && fR >= 0 && ZR.splice(fR, 1), ZR.sort(((RR, GR) => JR[RR].order - JR[GR].order));
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L902)

```diff
-         return this.RD(WW).forEach((WW => {
+         return this.mI(RR).forEach((RR => {
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L904)

```diff
-           LW.mY && LW.mY(WW.rD, WW)
+           qR.mC && qR.mC(RR.Rm, RR)
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L908)

```diff
-         if (!mW) throw new Error(`Unknown component: ${OW}`);
+         if (!yR) throw new Error(`Unknown component: ${GR}`);
```

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L910)

```diff
-           WW && cW(WW.rD || WW[0].rD, OW)
+           RR && iR(RR.Rm || RR[0].Rm, GR)
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L915)

```diff
-       }, this.zD = function(WW, OW, mW) {
+       }, this.Jm = function(RR, GR, yR) {
```

#### 38. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L918-L919` → after: `L918-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L918-L919) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L918-L919)

```diff
-         if (!LW) throw new Error(`Unknown component: ${OW}.`);
-         if (LW.hash[WW] && !PW.multi) throw new Error(`Entity ${WW} already has component: ${OW}.`);
+         if (!qR) throw new Error(`Unknown component: ${GR}.`);
+         if (qR.hash[RR] && !ZR.multi) throw new Error(`Entity ${RR} already has component: ${GR}.`);
```

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L921)

```diff
-           if (!(NW = new PW.stateConstructor).hasOwnProperty("rD")) throw new Error(`Component ${PW.name} stateConstructor type does not have property __id`);
+           if (!(uR = new ZR.stateConstructor).hasOwnProperty("Rm")) throw new Error(`Component ${ZR.name} stateConstructor type does not have property __id`);
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L924)

```diff
-           rD: WW,
+           Rm: RR,
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L928)

```diff
-         if (NW.rD = WW, PW.multi) {
+         if (uR.Rm = RR, ZR.multi) {
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L932-L933` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L932-L933) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L932-L933)

```diff
-         return PW.mY && PW.mY(WW, NW), this
-       }, this.liW = function(WW, iW) {
+         return ZR.mC && ZR.mC(RR, uR), this
+       }, this.RGR = function(RR, JR) {
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L935)

```diff
-         if (!OW) throw new Error(`Unknown component: ${iW}.`);
+         if (!GR) throw new Error(`Unknown component: ${JR}.`);
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L937-L938` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L937-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L937-L938)

```diff
-       }, this.mV = function(iW, OW) {
-         if (!EW[OW]) throw new Error(`Unknown component: ${OW}.`);
+       }, this.Zm = function(JR, GR) {
+         if (!tR[GR]) throw new Error(`Unknown component: ${GR}.`);
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L942)

```diff
-         if (!OW) throw new Error(`Unknown component: ${iW}.`);
+         if (!GR) throw new Error(`Unknown component: ${JR}.`);
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L944)

```diff
-       }, this.RD = function(WW) {
+       }, this.mI = function(RR) {
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L946)

```diff
-         if (!iW) throw new Error(`Unknown component: ${WW}.`);
+         if (!JR) throw new Error(`Unknown component: ${RR}.`);
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L948-L949` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L948-L949) · [Before (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L948-L949)

```diff
-       }, this.IiW = function(WW) {
-         if (!EW[WW]) throw new Error(`Unknown component: ${WW}.`);
+       }, this.HGR = function(RR) {
+         if (!tR[RR]) throw new Error(`Unknown component: ${RR}.`);
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L952-L953` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L952-L953) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L952-L953)

```diff
-       }, this.WOW = function(WW) {
-         if (!EW[WW]) throw new Error(`Unknown component: ${WW}.`);
+       }, this.zGR = function(RR) {
+         if (!tR[RR]) throw new Error(`Unknown component: ${RR}.`);
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L956)

```diff
-       }, this.hZ = function(OW) {
+       }, this.gK = function(GR) {
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L971)

```diff
-           LW.ZY(OW, cW.list), ZW()
+           qR.YC(GR, iR.list), KR()
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L977)

```diff
-         if (!cW) throw new Error(`Unknown component: ${mW}.`);
+         if (!iR) throw new Error(`Unknown component: ${yR}.`);
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L983)

```diff
-             NW && (EW[mW] = null, iW.mH && iW.mH(WW, NW), LW.multiComps.push({
+             uR && (tR[yR] = null, JR.eD && JR.eD(RR, uR), qR.multiComps.push({
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L991)

```diff
-     var mW = OW(39412)
+     var yR = GR(39402)
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L993)

```diff
-   39412: WW => {
+   39402: RR => {
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1030)

```diff
-   39234: (WW, iW, OW) => {
+   39214: (RR, JR, GR) => {
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1121)

```diff
-         return WW ? "Symbol(src)_1." + WW : ""
+         return RR ? "Symbol(src)_1." + RR : ""
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1127)

```diff
-       Ei = fW ? DW.OZ : void 0,
+       tJ = mR ? cR.GK : void 0,
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1237` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1237) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1237)

```diff
-           if (qW(WW)) return lW ? WW : {};
+           if (dR(RR)) return rR ? RR : {};
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1247` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1247) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1247)

```diff
-           if (!eW[vW]) return lW ? WW : {};
+           if (!DR[HR]) return rR ? RR : {};
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1251)

```diff
-               case sW:
+               case WR:
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1253-L1254` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1253-L1254) · [Before (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1253-L1254)

```diff
-               case PW:
-               case LW:
+               case ZR:
+               case qR:
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1256)

```diff
-               case MW:
+               case AR:
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1261-L1269` → after: `L1261-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1261-L1269) · [Before (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1261-L1269)

```diff
-               case KW:
-               case SW:
-               case YW:
-               case yW:
-               case TW:
-               case JW:
-               case hW:
-               case HW:
-               case nW:
+               case CR:
+               case XR:
+               case MR:
+               case BR:
+               case lR:
+               case pR:
+               case gR:
+               case bR:
+               case vR:
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1274)

```diff
-               case tW:
+               case VR:
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1279-L1280` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1279-L1280) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1279-L1280)

```diff
-               case ZW:
-               case jW:
+               case KR:
+               case LR:
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1282)

```diff
-               case AW:
+               case eR:
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1287)

```diff
-               case bW:
+               case aR:
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1292)

```diff
-               case UW:
+               case nR:
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1305)

```diff
-           return ri(WW) ? mW : function(WW, iW) {
+           return kJ(RR) ? yR : function(RR, JR) {
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1319)

```diff
-       return !(!WO(WW) || (iW = WW, QW && QW in iW)) && (Qi(WW) || qW(WW) ? mi : oW).test(Ii(WW));
+       return !(!sJ(RR) || (JR = RR, hR && hR in JR)) && (TJ(RR) || dR(RR) ? yJ : xR).test(EJ(RR));
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1342)

```diff
-         return "string" == iW || "number" == iW || "symbol" == iW || "boolean" == iW ? "__proto__" !== WW : null === WW
+         return "string" == JR || "number" == JR || "symbol" == JR || "boolean" == JR ? "__proto__" !== RR : null === RR
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1350)

```diff
-       return Di(OW) ? OW : void 0
+       return oJ(GR) ? GR : void 0
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1367)

```diff
-       return this.__data__[WW] = si && void 0 === iW ? mW : iW, this
+       return this.__data__[RR] = WJ && void 0 === JR ? yR : JR, this
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1423)

```diff
-       return !!(iW = null == iW ? EW : iW) && ("number" == typeof WW || dW.test(WW)) && WW > -1 && WW % 1 == 0 && WW < iW
+       return !!(JR = null == JR ? tR : JR) && ("number" == typeof RR || NR.test(RR)) && RR > -1 && RR % 1 == 0 && RR < JR
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1450)

```diff
-         case Mi:
+         case AJ:
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1452)

```diff
-         case Ki:
+         case CJ:
```

#### 78. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1454)

```diff
-         case Si:
+         case XJ:
```

#### 79. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1456` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1456) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1456)

```diff
-         case Yi:
+         case MJ:
```

#### 80. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1458)

```diff
-         case yi:
+         case BJ:
```

#### 81. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1496` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1496) · [Before (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1496)

```diff
-   39638: WW => {
+   39611: RR => {
```

#### 82. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1520-L1521` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1520-L1521) · [Before (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1520-L1521)

```diff
-   38900: (WW, iW, OW) => {
-     var mW = OW(38905);
+   38891: (RR, JR, GR) => {
+     var yR = GR(38898);
```

#### 83. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1553)

```diff
-   38905: (WW, iW) => {
+   38898: (RR, JR) => {
```

#### 84. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1607)

```diff
-   38369: (WW, iW, OW) => {
+   38329: (RR, JR, GR) => {
```

#### 85. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1609-L1610` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1609-L1610) · [Before (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1609-L1610)

```diff
-       Color3: () => mW.b,
-       c: () => mW.d
+       Color3: () => yR.d,
+       e: () => yR.e
```

#### 86. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1612-L1613)

```diff
-     var mW = OW(38372);
-     (0, mW.f)()
+     var yR = GR(38331);
+     (0, yR.g)()
```

#### 87. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1615)

```diff
-   38937: (WW, iW, OW) => {
+   38928: (RR, JR, GR) => {
```

#### 88. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1619` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1619) · [Before (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1619)

```diff
-     var mW = OW(38939);
+     var yR = GR(38933);
```

#### 89. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1660)

```diff
-   38939: (WW, iW, OW) => {
+   38933: (RR, JR, GR) => {
```

#### 90. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1664)

```diff
-     var mW = OW(38241);
+     var yR = GR(38204);
```

#### 91. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1667)

```diff
-         this.normal = new mW.q(WW, iW, OW), this.d = EW
+         this.normal = new yR.r(RR, JR, GR), this.d = tR
```

#### 92. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1669)

```diff
-       wEW() {
+       QtR() {
```

#### 93. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1716)

```diff
-         return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
+         return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
```

#### 94. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1719)

```diff
-         return mW.q.Dot(this.normal, WW) <= iW
+         return yR.r.Dot(this.normal, RR) <= JR
```

#### 95. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1722)

```diff
-         return mW.q.Dot(WW, this.normal) + this.d
+         return yR.r.Dot(RR, this.normal) + this.d
```

#### 96. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1736)

```diff
-         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+         return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
```

#### 97. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1740)

```diff
-         return mW.q.Dot(OW, iW) + EW
+         return yR.r.Dot(GR, JR) + tR
```

#### 98. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1743)

```diff
-     EW._TmpMatrix = mW.d.Identity()
+     tR._TmpMatrix = yR.e.Identity()
```

#### 99. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1745` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1745) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1745)

```diff
-   38235: (WW, iW, OW) => {
+   38195: (RR, JR, GR) => {
```

#### 100. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1747-L1748` → after: `L1747-L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1747-L1748) · [Before (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1747-L1748)

```diff
-       Matrix: () => mW.d,
-       Quaternion: () => mW.g,
+       Matrix: () => yR.e,
+       Quaternion: () => yR.i,
```

#### 101. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1751-L1753` → after: `L1751-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1751-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1751-L1753) · [Before (L1751-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1751-L1753)

```diff
-       Vector2: () => mW.m,
-       fA: () => mW.q,
-       Vector4: () => mW.r
+       Vector2: () => yR.n,
+       Fe: () => yR.r,
+       Vector4: () => yR.s
```

#### 102. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1755` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1755) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1755)

```diff
-     var mW = OW(38241);
+     var yR = GR(38204);
```

#### 103. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1758)

```diff
-   39271: (WW, iW, OW) => {
+   39248: (RR, JR, GR) => {
```

#### 104. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1760)

```diff
-       e: () => mW
+       c: () => yR
```

#### 105. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1777)

```diff
-   39088: (WW, iW, OW) => {
+   39062: (RR, JR, GR) => {
```

#### 106. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1781)

```diff
-         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
```

#### 107. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/260.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/260.js#L1785)

```diff
-       b: () => mW
+       c: () => yR
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   41753: (WW, iW, OW) => {
+   41764: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L6-L7)

```diff
-       d: () => PW,
-       f: () => LW
+       e: () => ZR,
+       i: () => qR
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L9-L11)

```diff
-     var mW = OW(39911),
-       EW = OW(41538),
-       NW = OW(41723),
+     var yR = GR(39914),
+       tR = GR(41542),
+       uR = GR(41732),
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L19)

```diff
-         this.attached[iW] ? mW.b.Warn("camera input of type " + iW + " already exists on camera") : (this.attached[iW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(t … [truncated]
+         this.attached[JR] ? yR.c.Warn("camera input of type " + JR + " already exists on camera") : (this.attached[JR] = RR, RR.camera = this.camera, RR.checkInputs && (this.checkInputs = this._addCheckInputs(RR.checkInputs.bind(RR))), this.attachedToElement && RR.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L45)

```diff
-           WW = !NW.e.ForceAttachControlToAlwaysPreventDefault && WW, this.attachedToElement = !0, this.noPreventDefault = WW;
+           RR = !uR.b.ForceAttachControlToAlwaysPreventDefault && RR, this.attachedToElement = !0, this.noPreventDefault = RR;
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L68)

```diff
-             mW = EW.d.Serialize(WW);
+             yR = tR.c.Serialize(RR);
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L81)

```diff
-                 NW = EW.d.Parse((() => new OW), mW, null);
+                 uR = tR.c.Parse((() => new GR), yR, null);
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L89)

```diff
-               const mW = EW.d.Parse((() => new iW), WW, null);
+               const yR = tR.c.Parse((() => new JR), RR, null);
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L96)

```diff
-   41760: (WW, iW, OW) => {
+   41768: (RR, JR, GR) => {
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L98)

```diff
-       b: () => mW.c
+       b: () => yR.b
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L100-L101)

```diff
-     var mW = OW(41765);
-     (0, mW.e)()
+     var yR = GR(41773);
+     (0, yR.c)()
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L103)

```diff
-   41765: (WW, iW, OW) => {
+   41773: (RR, JR, GR) => {
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L105-L106)

```diff
-       c: () => tW,
-       e: () => xW
+       b: () => VR,
+       c: () => wR
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L108-L114` → after: `L108-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L108-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L108-L114) · [Before (L108-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L108-L114)

```diff
-     var mW = OW(41516),
-       EW = OW(41519),
-       NW = OW(38241),
-       PW = OW(38372),
-       LW = OW(41773),
-       cW = OW(41732),
-       wW = OW(38299);
+     var yR = GR(41520),
+       tR = GR(41524),
+       uR = GR(38204),
+       ZR = GR(38331),
+       qR = GR(41777),
+       iR = GR(41741),
+       fR = GR(38253);
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L117)

```diff
-         let iW, OW, cW = LW.b,
+         let JR, GR, iR = qR.c,
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L124)

```diff
-             super(WW, OW, EW), this.groundColor = (0, mW.g)(this, wW, new PW.b(0, 0, 0)), this.direction = ((0, mW.g)(this, tW), (0, mW.g)(this, ZW, void 0)), (0, mW.g)(this, xW), this.direction = iW || NW.q.Up()
+             super(RR, GR, tR), this.groundColor = (0, yR.m)(this, fR, new ZR.d(0, 0, 0)), this.direction = ((0, yR.m)(this, VR), (0, yR.m)(this, KR, void 0)), (0, yR.m)(this, wR), this.direction = JR || uR.r.Up()
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L133)

```diff
-             return this.direction = NW.q.Normalize(WW.subtract(NW.q.Zero())), this.direction
+             return this.direction = uR.r.Normalize(RR.subtract(uR.r.Zero())), this.direction
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L139)

```diff
-             const OW = NW.q.Normalize(this.direction);
+             const GR = uR.r.Normalize(this.direction);
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L143)

```diff
-             const OW = NW.q.Normalize(this.direction);
+             const GR = uR.r.Normalize(this.direction);
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L147)

```diff
-             return this._worldMatrix || (this._worldMatrix = NW.d.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = uR.e.Identity()), this._worldMatrix
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L150)

```diff
-             return LW.b.LIGHTTYPEID_HEMISPHERICLIGHT
+             return qR.c.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L157)

```diff
-           iW = [(0, EW.n)()], OW = [(0, EW.K)()], (0, mW.e)(null, null, iW, {
+           JR = [(0, tR.k)()], GR = [(0, tR.G)()], (0, yR.l)(null, null, JR, {
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L170)

```diff
-           }, wW, tW), (0, mW.e)(null, null, OW, {
+           }, fR, VR), (0, yR.l)(null, null, GR, {
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L194)

```diff
-       ZW || (ZW = !0, cW.d.AddNodeConstructor("Light_Type_3", ((WW, iW) => () => new tW(WW, NW.q.Zero(), iW))), (0, wW.h)("BABYLON.HemisphericLight", tW))
+       KR || (KR = !0, iR.d.AddNodeConstructor("Light_Type_3", ((RR, JR) => () => new VR(RR, uR.r.Zero(), JR))), (0, fR.f)("BABYLON.HemisphericLight", VR))
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L197)

```diff
-   38369: (WW, iW, OW) => {
+   38329: (RR, JR, GR) => {
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L199-L200)

```diff
-       Color3: () => mW.b,
-       c: () => mW.d
+       Color3: () => yR.d,
+       e: () => yR.e
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L202-L203` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L202-L203) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L202-L203)

```diff
-     var mW = OW(38372);
-     (0, mW.f)()
+     var yR = GR(38331);
+     (0, yR.g)()
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L205)

```diff
-   38937: (WW, iW, OW) => {
+   38928: (RR, JR, GR) => {
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L209)

```diff
-     var mW = OW(38939);
+     var yR = GR(38933);
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L250)

```diff
-   38939: (WW, iW, OW) => {
+   38933: (RR, JR, GR) => {
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L254)

```diff
-     var mW = OW(38241);
+     var yR = GR(38204);
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L257)

```diff
-         this.normal = new mW.q(WW, iW, OW), this.d = EW
+         this.normal = new yR.r(RR, JR, GR), this.d = tR
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L259)

```diff
-       wEW() {
+       QtR() {
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L306)

```diff
-         return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
+         return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L309)

```diff
-         return mW.q.Dot(this.normal, WW) <= iW
+         return yR.r.Dot(this.normal, RR) <= JR
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L312)

```diff
-         return mW.q.Dot(WW, this.normal) + this.d
+         return yR.r.Dot(RR, this.normal) + this.d
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L326)

```diff
-         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+         return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L330)

```diff
-         return mW.q.Dot(OW, iW) + EW
+         return yR.r.Dot(GR, JR) + tR
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L333)

```diff
-     EW._TmpMatrix = mW.d.Identity()
+     tR._TmpMatrix = yR.e.Identity()
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L335)

```diff
-   38235: (WW, iW, OW) => {
+   38195: (RR, JR, GR) => {
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L337-L338` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L337-L338) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L337-L338)

```diff
-       Matrix: () => mW.d,
-       Quaternion: () => mW.g,
+       Matrix: () => yR.e,
+       Quaternion: () => yR.i,
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L341-L343` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L341-L343) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L341-L343)

```diff
-       Vector2: () => mW.m,
-       fA: () => mW.q,
-       Vector4: () => mW.r
+       Vector2: () => yR.n,
+       Fe: () => yR.r,
+       Vector4: () => yR.s
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L345)

```diff
-     var mW = OW(38241);
+     var yR = GR(38204);
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L348)

```diff
-   39271: (WW, iW, OW) => {
+   39248: (RR, JR, GR) => {
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L350)

```diff
-       e: () => mW
+       c: () => yR
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L367)

```diff
-   41916: (WW, iW, OW) => {
+   41932: (RR, JR, GR) => {
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L369)

```diff
-       c: () => wW
+       e: () => fR
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L371-L375` → after: `L371-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L371-L375) · [Before (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L371-L375)

```diff
-     var mW = OW(38241),
-       EW = OW(38372),
-       NW = OW(41919),
-       PW = OW(41927),
-       LW = OW(41940);
+     var yR = GR(38204),
+       tR = GR(38331),
+       uR = GR(41941),
+       ZR = GR(41951),
+       qR = GR(41972);
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L417)

```diff
-       for (let PW = 0; PW < 6; PW++) void 0 === MW[PW] && (MW[PW] = new mW.r(0, 0, 1, 1)), KW && void 0 === KW[PW] && (KW[PW] = new EW.d(1, 1, 1, 1));
+       for (let ZR = 0; ZR < 6; ZR++) void 0 === AR[ZR] && (AR[ZR] = new yR.s(0, 0, 1, 1)), CR && void 0 === CR[ZR] && (CR[ZR] = new tR.e(1, 1, 1, 1));
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L419)

```diff
-         if (NW.push(MW[mW].z, LW.b ? 1 - MW[mW].w : MW[mW].w), NW.push(MW[mW].x, LW.b ? 1 - MW[mW].w : MW[mW].w), NW.push(MW[mW].x, LW.b ? 1 - MW[mW].y : MW[mW].y), NW.push(MW[mW].z, LW.b ? 1 - MW[mW].y : MW[mW].y), KW)
+         if (uR.push(AR[yR].z, qR.d ? 1 - AR[yR].w : AR[yR].w), uR.push(AR[yR].x, qR.d ? 1 - AR[yR].w : AR[yR].w), uR.push(AR[yR].x, qR.d ? 1 - AR[yR].y : AR[yR].y), uR.push(AR[yR].z, qR.d ? 1 - AR[yR].y : AR[yR].y), CR)
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L446)

```diff
-   41966: (WW, iW, OW) => {
+   41987: (RR, JR, GR) => {
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L450-L455` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L450-L455) · [Before (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L450-L455)

```diff
-     var mW = OW(38241),
-       EW = OW(41919),
-       NW = OW(41927),
-       PW = OW(41969),
-       LW = OW(41660),
-       cW = OW(39911);
+     var yR = GR(38204),
+       tR = GR(41941),
+       uR = GR(41951),
+       ZR = GR(41994),
+       qR = GR(41663),
+       iR = GR(39914);
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L496)

```diff
-         wW = mW.q.Zero();
+         fR = yR.r.Zero();
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L516)

```diff
-         const WW = mW.getVerticesData(LW.k.PositionKind);
+         const RR = yR.getVerticesData(qR.l.PositionKind);
```

#### 55. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L518)

```diff
-         NW && (iW = mW.getVerticesData(LW.k.ColorKind));
+         uR && (JR = yR.getVerticesData(qR.l.ColorKind));
```

#### 56. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L525)

```diff
-         return mW.updateVerticesData(LW.k.PositionKind, WW, !1, !1), NW && iW && mW.updateVerticesData(LW.k.ColorKind, iW, !1, !1), mW.refreshBoundingInfo(), mW
+         return yR.updateVerticesData(qR.l.PositionKind, RR, !1, !1), uR && JR && yR.updateVerticesData(qR.l.ColorKind, JR, !1, !1), yR.refreshBoundingInfo(), yR
```

#### 57. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L553)

```diff
-           const iW = mW.q.Zero(),
+           const JR = yR.r.Zero(),
```

#### 58. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L565)

```diff
-         return (iW.dashNb || iW.dashSize || iW.gapSize || iW.useVertexAlpha || iW.material) && cW.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), LW.updateMeshPositions(WW, !1), LW
+         return (JR.dashNb || JR.dashSize || JR.gapSize || JR.useVertexAlpha || JR.material) && iR.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), qR.updateMeshPositions(RR, !1), qR
```

#### 59. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L568)

```diff
-       return tW(iW).applyToMesh(xW, iW.updatable), xW._creationDataStorage = new EW.j, xW._creationDataStorage.dashSize = ZW, xW._creationDataStorage.gapSize = wW, xW
+       return VR(JR).applyToMesh(wR, JR.updatable), wR._creationDataStorage = new tR.h, wR._creationDataStorage.dashSize = KR, wR._creationDataStorage.gapSize = fR, wR
```

#### 60. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L588)

```diff
-   41969: (WW, iW, OW) => {
+   41994: (RR, JR, GR) => {
```

#### 61. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L591)

```diff
-       d: () => bW
+       e: () => aR
```

#### 62. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L593-L599` → after: `L593-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L593-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L593-L599) · [Before (L593-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L593-L599)

```diff
-     var mW, EW, NW = OW(38372),
-       PW = OW(41660),
-       LW = OW(41919),
-       cW = OW(41976),
-       wW = OW(41805),
-       tW = OW(41985),
-       ZW = OW(41415);
+     var yR, tR, uR = GR(38331),
+       ZR = GR(41663),
+       qR = GR(41941),
+       iR = GR(42003),
+       fR = GR(41810),
+       VR = GR(42005),
+       KR = GR(41407);
```

#### 63. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L609)

```diff
-         super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, iW, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = mW, this.useVertexAlpha = EW, this.color = new  … [truncated]
+         super(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, JR, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = yR, this.useVertexAlpha = tR, this.color = new  … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L611)

```diff
-           attributes: [PW.k.PositionKind],
+           attributes: [ZR.l.PositionKind],
```

#### 65. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L618)

```diff
-         if (this.useVertexAlpha ? cW.defines.push("#define VERTEXALPHA") : cW.needAlphaBlending = !1, this.useVertexColor ? (cW.defines.push("#define VERTEXCOLOR"), cW.attributes.push(PW.k.ColorKind)) : (cW.uniforms.push("color"), this._color4 = new NW.d), LW) this.material = LW;
+         if (this.useVertexAlpha ? iR.defines.push("#define VERTEXALPHA") : iR.needAlphaBlending = !1, this.useVertexColor ? (iR.defines.push("#define VERTEXCOLOR"), iR.attributes.push(ZR.l.ColorKind)) : (iR.uniforms.push("color"), this._color4 = new uR.e), qR) this.material = qR;
```

#### 66. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L620-L621` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L620-L621) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L620-L621)

```diff
-           this.bD().VA().isWebGPU && !xW.ForceGLSL && (this._shaderLanguage = 1), cW.shaderLanguage = this._shaderLanguage, cW.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([OW.e(662).then((() => OW(54717))), OW.e(668).then((() => OW(54719)))]) : await Promise.all([OW.e(644).then((() => OW(54721))), OW.e(650).then((() => OW(54726)))])
+           this.jH().ke().isWebGPU && !wR.ForceGLSL && (this._shaderLanguage = 1), iR.shaderLanguage = this._shaderLanguage, iR.extraInitializationsAsync = async () => {
+             1 === this._shaderLanguage ? await Promise.all([GR.e(662).then((() => GR(54561))), GR.e(668).then((() => GR(54565)))]) : await Promise.all([GR.e(644).then((() => GR(54571))), GR.e(650).then((() => GR(54573)))])
```

#### 67. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L623)

```diff
-           const WW = new tW.o("colorShader", this.bD(), "color", cW, !1);
+           const RR = new VR.q("colorShader", this.jH(), "color", iR, !1);
```

#### 68. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L661)

```diff
-         const mW = this.bD().VA();
+         const yR = this.jH().ke();
```

#### 69. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L673)

```diff
-           return OW.source = this, new xW(WW, this.bD(), OW.parent, OW.source, OW.doNotCloneChildren)
+           return GR.source = this, new wR(RR, this.jH(), GR.parent, GR.source, GR.doNotCloneChildren)
```

#### 70. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L675` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L675) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L675)

```diff
-         return new xW(WW, this.bD(), iW, this, OW)
+         return new wR(RR, this.jH(), JR, this, GR)
```

#### 71. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L679-L681` → after: `L679-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L679-L681) · [Before (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L679-L681)

```diff
-         if (this.bV) {
-           iW.bV = {};
-           for (const WW in this.bV) iW.bV[WW] = this.bV[WW]
+         if (this.Im) {
+           JR.Im = {};
+           for (const RR in this.Im) JR.Im[RR] = this.Im[RR]
```

#### 72. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L686)

```diff
-         super.serialize(WW), WW.color = this.color.wEW(), WW.alpha = this.alpha
+         super.serialize(RR), RR.color = this.color.QtR(), RR.alpha = this.alpha
```

#### 73. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L690)

```diff
-         return OW.color = NW.b.FromArray(WW.color), OW.alpha = WW.alpha, OW
+         return GR.color = uR.d.FromArray(RR.color), GR.alpha = RR.alpha, GR
```

#### 74. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L694)

```diff
-     class lW extends cW.e {
+     class rR extends iR.d {
```

#### 75. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L706)

```diff
-     }(mW = xW.prototype).enableEdgesRendering ?? (mW.enableEdgesRendering = (0, ZW.k)("LinesMesh", "enableEdgesRendering")), (EW = lW.prototype).enableEdgesRendering ?? (EW.enableEdgesRendering = (0, ZW.k)("InstancedLinesMesh", "enableEdgesRendering"))
+     }(yR = wR.prototype).enableEdgesRendering ?? (yR.enableEdgesRendering = (0, KR.f)("LinesMesh", "enableEdgesRendering")), (tR = rR.prototype).enableEdgesRendering ?? (tR.enableEdgesRendering = (0, KR.f)("InstancedLinesMesh", "enableEdgesRendering"))
```

#### 76. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L708)

```diff
-   39908: (WW, iW, OW) => {
+   39912: (RR, JR, GR) => {
```

#### 77. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L710)

```diff
-       c: () => NW
+       b: () => uR
```

#### 78. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L712)

```diff
-     var mW = OW(39911);
+     var yR = GR(39914);
```

#### 79. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L745)

```diff
-             mW.b.Warn(cW.message)
+             yR.c.Warn(iR.message)
```

#### 80. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L751)

```diff
-   39088: (WW, iW, OW) => {
+   39062: (RR, JR, GR) => {
```

#### 81. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L755)

```diff
-         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
```

#### 82. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L759)

```diff
-       b: () => mW
+       c: () => yR
```

#### 83. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L762` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L762)

```diff
-   39911: (WW, iW, OW) => {
+   39914: (RR, JR, GR) => {
```

#### 84. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L764)

```diff
-       b: () => mW
+       c: () => yR
```

#### 85. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L785)

```diff
-         const iW = WW => WW < 10 ? "0" + WW : "" + WW,
+         const JR = RR => RR < 10 ? "0" + RR : "" + RR,
```

#### 86. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L800)

```diff
-         const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
+         const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
```

#### 87. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L833)

```diff
-   41604: (WW, iW, OW) => {
+   41610: (RR, JR, GR) => {
```

#### 88. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L835)

```diff
-       c: () => mW.i
+       c: () => yR.g
```

#### 89. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/261.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/261.js#L838)

```diff
-     (0, mW.e)()
+     (0, yR.c)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (1462 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   54015: (WW, iW, OW) => {
+   53863: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       c: () => PW
+       d: () => ZR
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L8-L9)

```diff
-     var mW = OW(53951),
-       EW = OW(41511);
+     var yR = GR(53798),
+       tR = GR(41514);
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L19)

```diff
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = mW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = yR.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L33)

```diff
-   38369: (WW, iW, OW) => {
+   38329: (RR, JR, GR) => {
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L35-L36` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L35-L36) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L35-L36)

```diff
-       Color3: () => mW.b,
-       c: () => mW.d
+       Color3: () => yR.d,
+       e: () => yR.e
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L38-L39` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L38-L39) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L38-L39)

```diff
-     var mW = OW(38372);
-     (0, mW.f)()
+     var yR = GR(38331);
+     (0, yR.g)()
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L41)

```diff
-   38937: (WW, iW, OW) => {
+   38928: (RR, JR, GR) => {
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L45)

```diff
-     var mW = OW(38939);
+     var yR = GR(38933);
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L86)

```diff
-   38939: (WW, iW, OW) => {
+   38933: (RR, JR, GR) => {
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L90)

```diff
-     var mW = OW(38241);
+     var yR = GR(38204);
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L93)

```diff
-         this.normal = new mW.q(WW, iW, OW), this.d = EW
+         this.normal = new yR.r(RR, JR, GR), this.d = tR
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L95)

```diff
-       wEW() {
+       QtR() {
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L142)

```diff
-         return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
+         return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L145)

```diff
-         return mW.q.Dot(this.normal, WW) <= iW
+         return yR.r.Dot(this.normal, RR) <= JR
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L148)

```diff
-         return mW.q.Dot(WW, this.normal) + this.d
+         return yR.r.Dot(RR, this.normal) + this.d
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L162)

```diff
-         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+         return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L166)

```diff
-         return mW.q.Dot(OW, iW) + EW
+         return yR.r.Dot(GR, JR) + tR
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L169)

```diff
-     EW._TmpMatrix = mW.d.Identity()
+     tR._TmpMatrix = yR.e.Identity()
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L171)

```diff
-   38235: (WW, iW, OW) => {
+   38195: (RR, JR, GR) => {
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L173-L174` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L173-L174) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L173-L174)

```diff
-       Matrix: () => mW.d,
-       Quaternion: () => mW.g,
+       Matrix: () => yR.e,
+       Quaternion: () => yR.i,
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L177-L179` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L177-L179) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L177-L179)

```diff
-       Vector2: () => mW.m,
-       fA: () => mW.q,
-       Vector4: () => mW.r
+       Vector2: () => yR.n,
+       Fe: () => yR.r,
+       Vector4: () => yR.s
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L181)

```diff
-     var mW = OW(38241);
+     var yR = GR(38204);
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L184)

```diff
-   39271: (WW, iW, OW) => {
+   39248: (RR, JR, GR) => {
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L186)

```diff
-       e: () => mW
+       c: () => yR
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L203)

```diff
-   53951: (WW, iW, OW) => {
+   53798: (RR, JR, GR) => {
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L205)

```diff
-       b: () => wW
+       e: () => fR
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L207-L211` → after: `L207-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L207-L211) · [Before (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L207-L211)

```diff
-     var mW = OW(38241),
-       EW = OW(38285),
-       NW = OW(41506),
-       PW = OW(38249),
-       LW = OW(38372);
+     var yR = GR(38204),
+       tR = GR(38239),
+       uR = GR(41509),
+       ZR = GR(38213),
+       qR = GR(38331);
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L223)

```diff
-         WW.bD()?.VA().flushFramebuffer();
+         RR.jH()?.ke().flushFramebuffer();
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L266)

```diff
-         const EW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
+         const tR = RR instanceof Float32Array ? RR : Float32Array.from(RR),
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L305)

```diff
-         const mW = new NW.e;
+         const yR = new uR.c;
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L334)

```diff
-               const KW = new LW.b(UW, kW, sW);
+               const CR = new qR.d(nR, UR, WR);
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L341)

```diff
-         return mW.scaleInPlace(lW), mW.convertIncidentRadianceToIrradiance(), mW.convertIrradianceToLambertianRadiance(), NW.f.FromHarmonics(mW)
+         return yR.scaleInPlace(rR), yR.convertIncidentRadianceToIrradiance(), yR.convertIrradianceToLambertianRadiance(), uR.g.FromHarmonics(yR)
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L344)

```diff
-     wW._FileFaces = [new cW("right", new mW.q(1, 0, 0), new mW.q(0, 0, -1), new mW.q(0, -1, 0)), new cW("left", new mW.q(-1, 0, 0), new mW.q(0, 0, 1), new mW.q(0, -1, 0)), new cW("up", new mW.q(0, 1, 0), new mW.q(1, 0, 0), new mW.q(0, 0, 1)), new cW("down", new mW.q(0, -1, 0), ne … [truncated]
+     fR._FileFaces = [new iR("right", new yR.r(1, 0, 0), new yR.r(0, 0, -1), new yR.r(0, -1, 0)), new iR("left", new yR.r(-1, 0, 0), new yR.r(0, 0, 1), new yR.r(0, -1, 0)), new iR("up", new yR.r(0, 1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, 1)), new iR("down", new yR.r(0, -1, 0), ne … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L346)

```diff
-   53812: (WW, iW, OW) => {
+   53632: (RR, JR, GR) => {
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L348-L349` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L348-L349) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L348-L349)

```diff
-       e: () => mW.i,
-       f: () => mW.s
+       d: () => yR.h,
+       h: () => yR.q
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L351-L352` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L351-L352) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L351-L352)

```diff
-     var mW = OW(41558);
-     (0, mW.z)()
+     var yR = GR(41564);
+     (0, yR.u)()
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L354)

```diff
-   39088: (WW, iW, OW) => {
+   39062: (RR, JR, GR) => {
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L358)

```diff
-         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L362)

```diff
-       b: () => mW
+       c: () => yR
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L365)

```diff
-   53986: (WW, iW, OW) => {
+   53831: (RR, JR, GR) => {
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L367)

```diff
-       b: () => NW
+       e: () => uR
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L369-L370)

```diff
-     var mW = OW(53977),
-       EW = OW(53995);
+     var yR = GR(53823),
+       tR = GR(53836);
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L375)

```diff
-         const EW = iW.VA(),
+         const tR = JR.ke(),
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L383)

```diff
-           iW.isReady = !1, NW ? await OW.e(660).then((() => OW(64519))) : await OW.e(642).then((() => OW(64523)));
+           JR.isReady = !1, uR ? await GR.e(660).then((() => GR(64253))) : await GR.e(642).then((() => GR(64257)));
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L398)

```diff
-               }, WW.bD()?.postProcessManager.directRender([LW], cW, !0), EW.restoreDefaultFramebuffer(), EW._releaseTexture(iW), LW && LW.dispose(), cW._swapAndDie(iW), iW.isReady = !0
+               }, RR.jH()?.postProcessManager.directRender([qR], iR, !0), tR.restoreDefaultFramebuffer(), tR._releaseTexture(JR), qR && qR.dispose(), iR._swapAndDie(JR), JR.isReady = !0
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L406)

```diff
-         return iW.VA().isWebGPU ? await OW.e(661).then((() => OW(64545))) : await OW.e(643).then((() => OW(64537))), await (0, EW.c)("rgbdEncode", WW, iW, mW, 1, 5)
+         return JR.ke().isWebGPU ? await GR.e(661).then((() => GR(64281))) : await GR.e(643).then((() => GR(64274))), await (0, tR.e)("rgbdEncode", RR, JR, yR, 1, 5)
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L410)

```diff
-   64385: (WW, iW, OW) => {
+   64132: (RR, JR, GR) => {
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L412-L415` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L412-L415) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L412-L415)

```diff
-       AsyncLoop: () => mW.b,
-       RegisterTools: () => mW.c,
-       Tools: () => mW.f,
-       className: () => mW.h
+       AsyncLoop: () => yR.c,
+       RegisterTools: () => yR.e,
+       Tools: () => yR.h,
+       className: () => yR.k
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L417-L418)

```diff
-     var mW = OW(41620);
-     (0, mW.c)()
+     var yR = GR(41616);
+     (0, yR.e)()
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L420)

```diff
-   54026: (WW, iW, OW) => {
+   53887: (RR, JR, GR) => {
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L422)

```diff
-       d: () => EW
+       e: () => tR
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L486)

```diff
-   64419: (WW, iW, OW) => {
+   64157: (RR, JR, GR) => {
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L615-L617` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L615-L617) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L615-L617)

```diff
-     var mW = OW(38235),
-       EW = OW(64385),
-       NW = OW(41805);
+     var yR = GR(38195),
+       tR = GR(64132),
+       uR = GR(41810);
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L626-L627` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L626-L627) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L626-L627)

```diff
-             ZW = OW.name || `mesh${tW}}`;
-           LW.push(`o ${ZW}`);
+             KR = GR.name || `mesh${VR}}`;
+           qR.push(`o ${KR}`);
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L645)

```diff
-             UW = lW.IEW();
+             nR = rR.NuR();
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L652)

```diff
-           const MW = WW[0].bD().useRightHandedSystem ? 1 : -1;
+           const AR = RR[0].jH().useRightHandedSystem ? 1 : -1;
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L659)

```diff
-             SW = (OW.material || OW.bD().defaultMaterial)._getEffectiveOrientation(OW),
+             XR = (GR.material || GR.jH().defaultMaterial)._getEffectiveOrientation(GR),
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L665-L666` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L665-L666) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L665-L666)

```diff
-               EW = null != jW ? OW : KW,
-               NW = null != bW ? iW : KW;
+               tR = null != LR ? GR : CR,
+               uR = null != aR ? JR : CR;
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L683` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L683) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L683)

```diff
-       cW = OW(53812);
+       iR = GR(53632);
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L695)

```diff
-               type: (0, cW.e)(WW)
+               type: (0, iR.d)(RR)
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L701-L708` → after: `L701-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L701-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L701-L708) · [Before (L701-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L701-L708)

```diff
-     var tW = OW(42635),
-       ZW = OW(42588),
-       xW = OW(53801),
-       lW = OW(42599),
-       AW = OW(41359),
-       bW = OW(38270),
-       jW = OW(38369),
-       UW = OW(38285);
+     var VR = GR(42711),
+       KR = GR(42644),
+       wR = GR(53615),
+       rR = GR(42657),
+       eR = GR(41352),
+       aR = GR(38224),
+       LR = GR(38329),
+       nR = GR(38239);
```

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L717-L721` → after: `L717-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L717-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L717-L721) · [Before (L717-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L717-L721)

```diff
-     var MW = OW(53995),
-       KW = OW(42616),
-       SW = OW(53763),
-       YW = OW(53769),
-       yW = OW(54011);
+     var AR = GR(53836),
+       CR = GR(42685),
+       XR = GR(53579),
+       MR = GR(53584),
+       BR = GR(53856);
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L723-L728` → after: `L723-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L723-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L723-L728) · [Before (L723-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L723-L728)

```diff
-     var TW = OW(41516),
-       JW = OW(41519),
-       hW = OW(39911),
-       HW = OW(41628),
-       nW = OW(41992),
-       uW = OW(53986);
+     var lR = GR(41520),
+       pR = GR(41524),
+       gR = GR(39914),
+       bR = GR(41626),
+       vR = GR(42011),
+       OR = GR(53831);
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L736` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L736) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L736)

```diff
-           const PW = nW.h.CreateFromBase64String(iW, mW + oW++, WW, !0, !1, nW.h.BILINEAR_SAMPLINGMODE);
+           const ZR = vR.f.CreateFromBase64String(JR, yR + xR++, RR, !0, !1, vR.f.BILINEAR_SAMPLINGMODE);
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L738-L740` → after: `L738-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L738-L740) · [Before (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L738-L740)

```diff
-           const LW = WW.VA().getLoadedTexturesCache(),
-             cW = LW.indexOf(PW.getInternalTexture()); - 1 !== cW && LW.splice(cW, 1), PW.isRGBD = !0, PW.wrapU = nW.h.CLAMP_ADDRESSMODE, PW.wrapV = nW.h.CLAMP_ADDRESSMODE, WW[OW] = PW, WW.useDelayedTextureLoading = EW, uW.b.ExpandRGBDTexture(PW);
-           const wW = WW.VA().DA.add((() => {
+           const qR = RR.ke().getLoadedTexturesCache(),
+             iR = qR.indexOf(ZR.getInternalTexture()); - 1 !== iR && qR.splice(iR, 1), ZR.isRGBD = !0, ZR.wrapU = vR.f.CLAMP_ADDRESSMODE, ZR.wrapV = vR.f.CLAMP_ADDRESSMODE, RR[GR] = ZR, RR.useDelayedTextureLoading = tR, OR.e.ExpandRGBDTexture(ZR);
+           const fR = RR.ke().Ye.add((() => {
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L743` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L743) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L743)

```diff
-               PW.isReady() && (WW.onBeforeRenderObservable.remove(iW), uW.b.ExpandRGBDTexture(PW))
+               ZR.isReady() && (RR.onBeforeRenderObservable.remove(JR), OR.e.ExpandRGBDTexture(ZR))
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L746-L747` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L746-L747) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L746-L747)

```diff
-           WW.jD.add((() => {
-             WW.VA().DA.remove(wW)
+           RR.YH.add((() => {
+             RR.ke().Ye.remove(fR)
```

#### 69. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L756-L760` → after: `L756-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L756-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L756-L760) · [Before (L756-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L756-L760)

```diff
-       VW = OW(38241),
-       pW = OW(41660),
-       fW = OW(41801),
-       CW = OW(41877);
-     class XW extends fW.c {
+       PR = GR(38204),
+       IR = GR(41663),
+       mR = GR(41803),
+       zR = GR(41890);
+     class SR extends mR.b {
```

#### 70. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L767)

```diff
-       let tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW = CW.e,
+       let VR, KR, wR, rR, eR, aR, LR, nR, UR, WR = zR.b,
```

#### 71. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L788)

```diff
-           return (0, TW.b)(this, iW, "f")
+           return (0, lR.e)(this, JR, "f")
```

#### 72. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L791)

```diff
-           (0, TW.d)(this, iW, WW, "f")
+           (0, lR.i)(this, JR, RR, "f")
```

#### 73. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L794)

```diff
-           return (0, TW.b)(this, OW, "f")
+           return (0, lR.e)(this, GR, "f")
```

#### 74. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L797)

```diff
-           (0, TW.d)(this, OW, WW, "f")
+           (0, lR.i)(this, GR, RR, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L800)

```diff
-           return (0, TW.b)(this, mW, "f")
+           return (0, lR.e)(this, yR, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L803)

```diff
-           (0, TW.d)(this, mW, WW, "f")
+           (0, lR.i)(this, yR, RR, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L806)

```diff
-           return (0, TW.b)(this, EW, "f")
+           return (0, lR.e)(this, tR, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L809)

```diff
-           (0, TW.d)(this, EW, WW, "f")
+           (0, lR.i)(this, tR, RR, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L812)

```diff
-           return (0, TW.b)(this, NW, "f")
+           return (0, lR.e)(this, uR, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L815)

```diff
-           (0, TW.d)(this, NW, WW, "f")
+           (0, lR.i)(this, uR, RR, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L818)

```diff
-           return (0, TW.b)(this, PW, "f")
+           return (0, lR.e)(this, ZR, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L821)

```diff
-           (0, TW.d)(this, PW, WW, "f")
+           (0, lR.i)(this, ZR, RR, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L824` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L824) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L824)

```diff
-           return (0, TW.b)(this, LW, "f")
+           return (0, lR.e)(this, qR, "f")
```

#### 84. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L827)

```diff
-           (0, TW.d)(this, LW, WW, "f")
+           (0, lR.i)(this, qR, RR, "f")
```

#### 85. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L830)

```diff
-           return (0, TW.b)(this, cW, "f")
+           return (0, lR.e)(this, iR, "f")
```

#### 86. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L833)

```diff
-           (0, TW.d)(this, cW, WW, "f")
+           (0, lR.i)(this, iR, RR, "f")
```

#### 87. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L836)

```diff
-           return (0, TW.b)(this, wW, "f")
+           return (0, lR.e)(this, fR, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L839)

```diff
-           (0, TW.d)(this, wW, WW, "f")
+           (0, lR.i)(this, fR, RR, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L849)

```diff
-           super(tW, "PBRBRDF", 90, new XW, ZW), this._useEnergyConservation = WW.DEFAULT_USE_ENERGY_CONSERVATION, iW.set(this, (0, TW.g)(this, MW, WW.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, TW.g)(this, KW), WW.DEFAULT_USE_SMITH_VISIBILIT … [truncated]
+           super(VR, "PBRBRDF", 90, new SR, KR), this._useEnergyConservation = RR.DEFAULT_USE_ENERGY_CONSERVATION, JR.set(this, (0, lR.m)(this, AR, RR.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, lR.m)(this, CR), RR.DEFAULT_USE_SMITH_VISIBILIT … [truncated]
```

#### 90. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L859` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L859) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L859)

```diff
-         tW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], ZW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], xW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], lW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], AW = [(0, JW.M)(), ( … [truncated]
+         VR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], KR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], wR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], rR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], eR = [(0, pR.H)(), ( … [truncated]
```

#### 91. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L872)

```diff
-         }, MW, KW), (0, TW.e)(WW, null, ZW, {
+         }, AR, CR), (0, lR.l)(RR, null, KR, {
```

#### 92. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L885` → after: `L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L885) · [Before (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L885)

```diff
-         }, SW, YW), (0, TW.e)(WW, null, xW, {
+         }, XR, MR), (0, lR.l)(RR, null, wR, {
```

#### 93. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L898` → after: `L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L898) · [Before (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L898)

```diff
-         }, yW, hW), (0, TW.e)(WW, null, lW, {
+         }, BR, gR), (0, lR.l)(RR, null, rR, {
```

#### 94. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L911` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L911) · [Before (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L911)

```diff
-         }, HW, nW), (0, TW.e)(WW, null, AW, {
+         }, bR, vR), (0, lR.l)(RR, null, eR, {
```

#### 95. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L924)

```diff
-         }, uW, oW), (0, TW.e)(WW, null, bW, {
+         }, OR, xR), (0, lR.l)(RR, null, aR, {
```

#### 96. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L937)

```diff
-         }, dW, eW), (0, TW.e)(WW, null, jW, {
+         }, NR, DR), (0, lR.l)(RR, null, LR, {
```

#### 97. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L950)

```diff
-         }, vW, gW), (0, TW.e)(WW, null, UW, {
+         }, HR, oR), (0, lR.l)(RR, null, nR, {
```

#### 98. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L963)

```diff
-         }, DW, VW), (0, TW.e)(WW, null, kW, {
+         }, cR, PR), (0, lR.l)(RR, null, UR, {
```

#### 99. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L984-L986` → after: `L984-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L984-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L984-L986) · [Before (L984-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L984-L986)

```diff
-     var qW = OW(41792),
-       RW = OW(38372),
-       GW = OW(41795),
+     var dR = GR(41789),
+       ER = GR(38331),
+       YR = GR(41797),
```

#### 100. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L988-L992` → after: `L988-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L988-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L988-L992) · [Before (L988-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L988-L992)

```diff
-       aW = OW(41861),
-       rW = OW(41857),
-       zW = OW(41867),
-       FW = OW(41845);
-     class QW extends fW.c {
+       QR = GR(41869),
+       FR = GR(41860),
+       TR = GR(41873),
+       sR = GR(41852);
+     class hR extends mR.b {
```

#### 101. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L999` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L999) · [Before (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L999)

```diff
-       let tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW = CW.e,
+       let VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR = zR.b,
```

#### 102. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1030)

```diff
-           return (0, TW.b)(this, iW, "f")
+           return (0, lR.e)(this, JR, "f")
```

#### 103. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1033` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1033) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1033)

```diff
-           (0, TW.d)(this, iW, WW, "f")
+           (0, lR.i)(this, JR, RR, "f")
```

#### 104. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1036)

```diff
-           return (0, TW.b)(this, OW, "f")
+           return (0, lR.e)(this, GR, "f")
```

#### 105. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1039` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1039) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1039)

```diff
-           (0, TW.d)(this, OW, WW, "f")
+           (0, lR.i)(this, GR, RR, "f")
```

#### 106. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1042)

```diff
-           return (0, TW.b)(this, mW, "f")
+           return (0, lR.e)(this, yR, "f")
```

#### 107. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1045)

```diff
-           (0, TW.d)(this, mW, WW, "f")
+           (0, lR.i)(this, yR, RR, "f")
```

#### 108. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1048` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1048) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1048)

```diff
-           return (0, TW.b)(this, EW, "f")
+           return (0, lR.e)(this, tR, "f")
```

#### 109. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1051` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1051) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1051)

```diff
-           (0, TW.d)(this, EW, WW, "f")
+           (0, lR.i)(this, tR, RR, "f")
```

#### 110. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1054)

```diff
-           return (0, TW.b)(this, NW, "f")
+           return (0, lR.e)(this, uR, "f")
```

#### 111. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1057)

```diff
-           (0, TW.d)(this, NW, WW, "f")
+           (0, lR.i)(this, uR, RR, "f")
```

#### 112. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1060)

```diff
-           return (0, TW.b)(this, PW, "f")
+           return (0, lR.e)(this, ZR, "f")
```

#### 113. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1063` → after: `L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1063) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1063)

```diff
-           (0, TW.d)(this, PW, WW, "f")
+           (0, lR.i)(this, ZR, RR, "f")
```

#### 114. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1066)

```diff
-           return (0, TW.b)(this, LW, "f")
+           return (0, lR.e)(this, qR, "f")
```

#### 115. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1069)

```diff
-           (0, TW.d)(this, LW, WW, "f")
+           (0, lR.i)(this, qR, RR, "f")
```

#### 116. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1072` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1072) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1072)

```diff
-           return (0, TW.b)(this, cW, "f")
+           return (0, lR.e)(this, iR, "f")
```

#### 117. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1075` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1075) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1075)

```diff
-           (0, TW.d)(this, cW, WW, "f")
+           (0, lR.i)(this, iR, RR, "f")
```

#### 118. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1078` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1078) · [Before (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1078)

```diff
-           return (0, TW.b)(this, wW, "f")
+           return (0, lR.e)(this, fR, "f")
```

#### 119. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1081` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1081) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1081)

```diff
-           (0, TW.d)(this, wW, WW, "f")
+           (0, lR.i)(this, fR, RR, "f")
```

#### 120. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1091)

```diff
-           super(tW, "PBRClearCoat", 100, new QW, ZW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, hW, !1)), this.intensity = ((0, TW.g)(this, HW), (0, TW.g)(this, nW, 1)), this.roughness = ((0, TW.g)(this, uW), (0, TW.g)(this, oW, 0)), this._indexOfRefraction = ((0, TW.g)( … [truncated]
+           super(VR, "PBRClearCoat", 100, new hR, KR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, gR, !1)), this.intensity = ((0, lR.m)(this, bR), (0, lR.m)(this, vR, 1)), this.roughness = ((0, lR.m)(this, OR), (0, lR.m)(this, xR, 0)), this._indexOfRefraction = ((0, lR.m)( … [truncated]
```

#### 121. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1097-L1100` → after: `L1097-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1097-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1097-L1100) · [Before (L1097-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1097-L1100)

```diff
-             if (this._texture && rW.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
-             if (this._textureRoughness && rW.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
-             if (OW.getCaps().standardDerivatives && this._bumpTexture && rW.e.ClearCoatBumpTextureEnabled && !mW && !this._bumpTexture.isReady()) return !1;
-             if (this._isTintEnabled && this._tintTexture && rW.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
+             if (this._texture && FR.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
+             if (this._textureRoughness && FR.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
+             if (GR.getCaps().standardDerivatives && this._bumpTexture && FR.b.ClearCoatBumpTextureEnabled && !yR && !this._bumpTexture.isReady()) return !1;
+             if (this._isTintEnabled && this._tintTexture && FR.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
```

#### 122. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1105)

```diff
-           this._isEnabled ? (iW.CLEARCOAT = !0, iW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, iW.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, iW._areTexturesDirty && OW.texturesEnabled && (this._texture && rW.e.ClearCoatTextureEnabled ?  … [truncated]
+           this._isEnabled ? (JR.CLEARCOAT = !0, JR.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, JR.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, JR._areTexturesDirty && GR.texturesEnabled && (this._texture && FR.b.ClearCoatTextureEnabled ?  … [truncated]
```

#### 123. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1115)

```diff
-             (this._texture || this._textureRoughness) && rW.e.ClearCoatTextureEnabled && (WW.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._ … [truncated]
+             (this._texture || this._textureRoughness) && FR.b.ClearCoatTextureEnabled && (RR.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._ … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1122` → after: `L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1122) · [Before (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1122)

```diff
-           iW.texturesEnabled && (this._texture && rW.e.ClearCoatTextureEnabled && WW.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !EW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && rW.e.ClearCoatTextureEnabled && WW.setTexture("clearCoatRoughnessSampler", … [truncated]
+           JR.texturesEnabled && (this._texture && FR.b.ClearCoatTextureEnabled && RR.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !tR.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && FR.b.ClearCoatTextureEnabled && RR.setTexture("clearCoatRoughnessSampler", … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1200` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1200) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1200)

```diff
-         tW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, JW.M)()], xW = [(0, JW.M)()], lW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, JW.M)(), (0, JW.h)("_ … [truncated]
+         VR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], KR = [(0, pR.H)()], wR = [(0, pR.H)()], rR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], eR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], aR = [(0, pR.H)(), (0, pR.d)("_ … [truncated]
```

#### 126. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1213` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1213) · [Before (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1213)

```diff
-         }, hW, HW), (0, TW.e)(WW, null, lW, {
+         }, gR, bR), (0, lR.l)(RR, null, rR, {
```

#### 127. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1226)

```diff
-         }, eW, vW), (0, TW.e)(WW, null, AW, {
+         }, DR, HR), (0, lR.l)(RR, null, eR, {
```

#### 128. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1239)

```diff
-         }, gW, DW), (0, TW.e)(WW, null, bW, {
+         }, oR, cR), (0, lR.l)(RR, null, aR, {
```

#### 129. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1252)

```diff
-         }, VW, pW), (0, TW.e)(WW, null, jW, {
+         }, PR, IR), (0, lR.l)(RR, null, LR, {
```

#### 130. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1265` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1265) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1265)

```diff
-         }, fW, XW), (0, TW.e)(WW, null, UW, {
+         }, mR, SR), (0, lR.l)(RR, null, nR, {
```

#### 131. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1278)

```diff
-         }, BW, qW), (0, TW.e)(WW, null, kW, {
+         }, jR, dR), (0, lR.l)(RR, null, UR, {
```

#### 132. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1291` → after: `L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1291) · [Before (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1291)

```diff
-         }, GW, IW), (0, TW.e)(WW, null, sW, {
+         }, YR, kR), (0, lR.l)(RR, null, WR, {
```

#### 133. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1304` → after: `L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1304) · [Before (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1304)

```diff
-         }, aW, zW), (0, TW.e)(WW, null, YW, {
+         }, QR, TR), (0, lR.l)(RR, null, MR, {
```

#### 134. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1317)

```diff
-         }, Pi, Li), (0, TW.e)(null, null, ZW, {
+         }, ZJ, qJ), (0, lR.l)(null, null, KR, {
```

#### 135. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1330)

```diff
-         }, nW, uW), (0, TW.e)(null, null, xW, {
+         }, vR, OR), (0, lR.l)(null, null, wR, {
```

#### 136. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1343` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1343) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1343)

```diff
-         }, oW, dW), (0, TW.e)(null, null, MW, {
+         }, xR, NR), (0, lR.l)(null, null, AR, {
```

#### 137. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1356)

```diff
-         }, Wi, ii), (0, TW.e)(null, null, KW, {
+         }, RJ, JJ), (0, lR.l)(null, null, CR, {
```

#### 138. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1369)

```diff
-         }, Oi, mi), (0, TW.e)(null, null, SW, {
+         }, GJ, yJ), (0, lR.l)(null, null, XR, {
```

#### 139. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1390` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1390) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1390)

```diff
-     class ii extends fW.c {
+     class JJ extends mR.b {
```

#### 140. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1397` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1397) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1397)

```diff
-       let EW, NW, PW, LW, cW, wW, tW, ZW = CW.e,
+       let tR, uR, ZR, qR, iR, fR, VR, KR = zR.b,
```

#### 141. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1414` → after: `L1414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1414) · [Before (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1414)

```diff
-           return (0, TW.b)(this, iW, "f")
+           return (0, lR.e)(this, JR, "f")
```

#### 142. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1417)

```diff
-           (0, TW.d)(this, iW, WW, "f")
+           (0, lR.i)(this, JR, RR, "f")
```

#### 143. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1420` → after: `L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1420) · [Before (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1420)

```diff
-           return (0, TW.b)(this, OW, "f")
+           return (0, lR.e)(this, GR, "f")
```

#### 144. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1423)

```diff
-           (0, TW.d)(this, OW, WW, "f")
+           (0, lR.i)(this, GR, RR, "f")
```

#### 145. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1426)

```diff
-           return (0, TW.b)(this, mW, "f")
+           return (0, lR.e)(this, yR, "f")
```

#### 146. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1429)

```diff
-           (0, TW.d)(this, mW, WW, "f")
+           (0, lR.i)(this, yR, RR, "f")
```

#### 147. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1439)

```diff
-           super(EW, "PBRIridescence", 110, new ii, NW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, xW, !1)), this.intensity = ((0, TW.g)(this, lW), (0, TW.g)(this, AW, 1)), this.minimumThickness = ((0, TW.g)(this, bW), (0, TW.g)(this, jW, WW._DefaultMinimumThickness)), th … [truncated]
+           super(tR, "PBRIridescence", 110, new JJ, uR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, wR, !1)), this.intensity = ((0, lR.m)(this, rR), (0, lR.m)(this, eR, 1)), this.minimumThickness = ((0, lR.m)(this, aR), (0, lR.m)(this, LR, RR._DefaultMinimumThickness)), th … [truncated]
```

#### 148. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1444-L1445` → after: `L1444-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1444-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1444-L1445) · [Before (L1444-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1444-L1445)

```diff
-             if (this._texture && rW.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
-             if (this._thicknessTexture && rW.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
+             if (this._texture && FR.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
+             if (this._thicknessTexture && FR.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
```

#### 149. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1450)

```diff
-           this._isEnabled ? (WW.IRIDESCENCE = !0, WW._areTexturesDirty && iW.texturesEnabled && (this._texture && rW.e.IridescenceTextureEnabled ? (0, FW.W)(this._texture, WW, "IRIDESCENCE_TEXTURE") : WW.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && rW.e.IridescenceTextureE … [truncated]
+           this._isEnabled ? (RR.IRIDESCENCE = !0, RR._areTexturesDirty && JR.texturesEnabled && (this._texture && FR.b.IridescenceTextureEnabled ? (0, sR.db)(this._texture, RR, "IRIDESCENCE_TEXTURE") : RR.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && FR.b.IridescenceTexture … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1455)

```diff
-           WW.useUbo && OW && WW.isSync || ((this._texture || this._thicknessTexture) && rW.e.IridescenceTextureEnabled && (WW.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._th … [truncated]
+           RR.useUbo && GR && RR.isSync || ((this._texture || this._thicknessTexture) && FR.b.IridescenceTextureEnabled && (RR.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._th … [truncated]
```

#### 151. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1501` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1501) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1501)

```diff
-         EW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, JW.M)()], PW = [(0, JW.M)()], LW = [(0, JW.M)()], cW = [(0, JW.M)()], wW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesD … [truncated]
+         tR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], uR = [(0, pR.H)()], ZR = [(0, pR.H)()], qR = [(0, pR.H)()], iR = [(0, pR.H)()], fR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesD … [truncated]
```

#### 152. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1514` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1514) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1514)

```diff
-         }, xW, lW), (0, TW.e)(WW, null, wW, {
+         }, wR, rR), (0, lR.l)(RR, null, fR, {
```

#### 153. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1527` → after: `L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1527) · [Before (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1527)

```diff
-         }, SW, YW), (0, TW.e)(WW, null, tW, {
+         }, XR, MR), (0, lR.l)(RR, null, VR, {
```

#### 154. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1540` → after: `L1540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1540) · [Before (L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1540)

```diff
-         }, yW, hW), (0, TW.e)(null, null, NW, {
+         }, BR, gR), (0, lR.l)(null, null, uR, {
```

#### 155. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1553)

```diff
-         }, AW, bW), (0, TW.e)(null, null, PW, {
+         }, eR, aR), (0, lR.l)(null, null, ZR, {
```

#### 156. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1566` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1566) · [Before (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1566)

```diff
-         }, jW, UW), (0, TW.e)(null, null, LW, {
+         }, LR, nR), (0, lR.l)(null, null, qR, {
```

#### 157. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1579` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1579) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1579)

```diff
-         }, kW, sW), (0, TW.e)(null, null, cW, {
+         }, UR, WR), (0, lR.l)(null, null, iR, {
```

#### 158. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1600)

```diff
-     class mi extends fW.c {
+     class yJ extends mR.b {
```

#### 159. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1607)

```diff
-       let EW, NW, PW, LW, cW, wW = CW.e,
+       let tR, uR, ZR, qR, iR, fR = zR.b,
```

#### 160. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1620` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1620) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1620)

```diff
-           return (0, TW.b)(this, iW, "f")
+           return (0, lR.e)(this, JR, "f")
```

#### 161. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1623)

```diff
-           (0, TW.d)(this, iW, WW, "f")
+           (0, lR.i)(this, JR, RR, "f")
```

#### 162. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1632)

```diff
-           return (0, TW.b)(this, OW, "f")
+           return (0, lR.e)(this, GR, "f")
```

#### 163. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1635` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1635) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1635)

```diff
-           (0, TW.d)(this, OW, WW, "f")
+           (0, lR.i)(this, GR, RR, "f")
```

#### 164. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1638)

```diff
-           return (0, TW.b)(this, mW, "f")
+           return (0, lR.e)(this, yR, "f")
```

#### 165. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1641)

```diff
-           (0, TW.d)(this, mW, WW, "f")
+           (0, lR.i)(this, yR, RR, "f")
```

#### 166. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1654` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1654) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1654)

```diff
-           super(WW, "PBRAnisotropic", 110, new mi, EW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, tW, !1)), this.intensity = ((0, TW.g)(this, ZW), (0, TW.g)(this, xW, 1)), this.direction = ((0, TW.g)(this, lW), (0, TW.g)(this, AW, new VW.m(1, 0))), this._texture = ((0, T … [truncated]
+           super(RR, "PBRAnisotropic", 110, new yJ, tR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, VR, !1)), this.intensity = ((0, lR.m)(this, KR), (0, lR.m)(this, wR, 1)), this.direction = ((0, lR.m)(this, rR), (0, lR.m)(this, eR, new PR.n(1, 0))), this._texture = ((0, l … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1657)

```diff
-           return !this._isEnabled || !(WW._areTexturesDirty && iW.texturesEnabled && this._texture && rW.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
+           return !this._isEnabled || !(RR._areTexturesDirty && JR.texturesEnabled && this._texture && FR.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
```

#### 168. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1660)

```diff
-           this._isEnabled ? (WW.ANISOTROPIC = this._isEnabled, this._isEnabled && !OW.isVerticesDataPresent(pW.k.TangentKind) && (WW._needUVs = !0, WW.MAINUV1 = !0), WW._areTexturesDirty && iW.texturesEnabled && (this._texture && rW.e.AnisotropicTextureEnabled ? (0, FW.W)(this._t … [truncated]
+           this._isEnabled ? (RR.ANISOTROPIC = this._isEnabled, this._isEnabled && !GR.isVerticesDataPresent(IR.l.TangentKind) && (RR._needUVs = !0, RR.MAINUV1 = !0), RR._areTexturesDirty && JR.texturesEnabled && (this._texture && FR.b.AnisotropicTextureEnabled ? (0, sR.db)(this._ … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1665)

```diff
-           WW.useUbo && OW && WW.isSync || (this._texture && rW.e.AnisotropicTextureEnabled && (WW.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, FW.v)(this._texture, WW, "anisotropy")), WW.updateFloat3("vAnisotropy", this.direction.x, t … [truncated]
+           RR.useUbo && GR && RR.isSync || (this._texture && FR.b.AnisotropicTextureEnabled && (RR.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, sR.B)(this._texture, RR, "anisotropy")), RR.updateFloat3("vAnisotropy", this.direction.x, t … [truncated]
```

#### 170. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1710` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1710) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1710)

```diff
-         EW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, JW.M)()], PW = [(0, JW.H)()], LW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], cW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], (0, TW.e)(WW, null, EW, {
+         tR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], uR = [(0, pR.H)()], ZR = [(0, pR.F)()], qR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], (0, lR.l)(RR, null, tR, {
```

#### 171. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1723)

```diff
-         }, tW, ZW), (0, TW.e)(WW, null, LW, {
+         }, VR, KR), (0, lR.l)(RR, null, qR, {
```

#### 172. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1736)

```diff
-         }, jW, UW), (0, TW.e)(WW, null, cW, {
+         }, LR, nR), (0, lR.l)(RR, null, iR, {
```

#### 173. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1749` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1749) · [Before (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1749)

```diff
-         }, kW, sW), (0, TW.e)(null, null, NW, {
+         }, UR, WR), (0, lR.l)(null, null, uR, {
```

#### 174. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1762` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1762) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1762)

```diff
-         }, xW, lW), (0, TW.e)(null, null, PW, {
+         }, wR, rR), (0, lR.l)(null, null, ZR, {
```

#### 175. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1783)

```diff
-     class Ni extends fW.c {
+     class uJ extends mR.b {
```

#### 176. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1790)

```diff
-       let cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW = CW.e,
+       let iR, fR, VR, KR, wR, rR, eR, aR, LR, nR = zR.b,
```

#### 177. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1811` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1811) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1811)

```diff
-           return (0, TW.b)(this, iW, "f")
+           return (0, lR.e)(this, JR, "f")
```

#### 178. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1814)

```diff
-           (0, TW.d)(this, iW, WW, "f")
+           (0, lR.i)(this, JR, RR, "f")
```

#### 179. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1817)

```diff
-           return (0, TW.b)(this, OW, "f")
+           return (0, lR.e)(this, GR, "f")
```

#### 180. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1820)

```diff
-           (0, TW.d)(this, OW, WW, "f")
+           (0, lR.i)(this, GR, RR, "f")
```

#### 181. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1823` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1823) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1823)

```diff
-           return (0, TW.b)(this, mW, "f")
+           return (0, lR.e)(this, yR, "f")
```

#### 182. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1826` → after: `L1826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1826) · [Before (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1826)

```diff
-           (0, TW.d)(this, mW, WW, "f")
+           (0, lR.i)(this, yR, RR, "f")
```

#### 183. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1829` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1829) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1829)

```diff
-           return (0, TW.b)(this, EW, "f")
+           return (0, lR.e)(this, tR, "f")
```

#### 184. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1832)

```diff
-           (0, TW.d)(this, EW, WW, "f")
+           (0, lR.i)(this, tR, RR, "f")
```

#### 185. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1835` → after: `L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1835) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1835)

```diff
-           return (0, TW.b)(this, NW, "f")
+           return (0, lR.e)(this, uR, "f")
```

#### 186. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1838)

```diff
-           (0, TW.d)(this, NW, WW, "f")
+           (0, lR.i)(this, uR, RR, "f")
```

#### 187. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1841` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1841) · [Before (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1841)

```diff
-           return (0, TW.b)(this, PW, "f")
+           return (0, lR.e)(this, ZR, "f")
```

#### 188. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1844` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1844) · [Before (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1844)

```diff
-           (0, TW.d)(this, PW, WW, "f")
+           (0, lR.i)(this, ZR, RR, "f")
```

#### 189. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1847)

```diff
-           return (0, TW.b)(this, LW, "f")
+           return (0, lR.e)(this, qR, "f")
```

#### 190. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1850` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1850) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1850)

```diff
-           (0, TW.d)(this, LW, WW, "f")
+           (0, lR.i)(this, qR, RR, "f")
```

#### 191. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1860)

```diff
-           super(WW, "Sheen", 120, new Ni, cW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, kW, !1)), this._linkSheenWithAlbedo = ((0, TW.g)(this, sW), !1), OW.set(this, (0, TW.g)(this, MW, !1)), this.intensity = ((0, TW.g)(this, KW), (0, TW.g)(this, SW, 1)), this.color = ( … [truncated]
+           super(RR, "Sheen", 120, new uJ, iR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, UR, !1)), this._linkSheenWithAlbedo = ((0, lR.m)(this, WR), !1), GR.set(this, (0, lR.m)(this, AR, !1)), this.intensity = ((0, lR.m)(this, CR), (0, lR.m)(this, XR, 1)), this.color = ( … [truncated]
```

#### 192. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1865-L1866` → after: `L1865-L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1865-L1866) · [Before (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1865-L1866)

```diff
-             if (this._texture && rW.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
-             if (this._textureRoughness && rW.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
+             if (this._texture && FR.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
+             if (this._textureRoughness && FR.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
```

#### 193. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1871)

```diff
-           this._isEnabled ? (WW.SHEEN = !0, WW.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, WW.SHEEN_ROUGHNESS = null !== this._roughness, WW.SHEEN_ALBEDOSCALING = this._albedoScaling, WW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, WW._areTextur … [truncated]
+           this._isEnabled ? (RR.SHEEN = !0, RR.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, RR.SHEEN_ROUGHNESS = null !== this._roughness, RR.SHEEN_ALBEDOSCALING = this._albedoScaling, RR.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, RR._areTextur … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1877` → after: `L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1877) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1877)

```diff
-           WW.useUbo && NW && WW.isSync || ((this._texture || this._textureRoughness) && rW.e.SheenTextureEnabled && (WW.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughne … [truncated]
+           RR.useUbo && uR && RR.isSync || ((this._texture || this._textureRoughness) && FR.b.SheenTextureEnabled && (RR.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughne … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1927)

```diff
-         cW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, JW.M)()], ZW = [(0, JW.n)()], xW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], lW = [(0, JW.M)(), (0, JW.h)("_ … [truncated]
+         iR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], fR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, pR.H)()], KR = [(0, pR.k)()], wR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], rR = [(0, pR.H)(), (0, pR.d)("_ … [truncated]
```

#### 196. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1940` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1940) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1940)

```diff
-         }, kW, sW), (0, TW.e)(WW, null, wW, {
+         }, UR, WR), (0, lR.l)(RR, null, fR, {
```

#### 197. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1953` → after: `L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1953) · [Before (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1953)

```diff
-         }, MW, KW), (0, TW.e)(WW, null, xW, {
+         }, AR, CR), (0, lR.l)(RR, null, wR, {
```

#### 198. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1966)

```diff
-         }, HW, nW), (0, TW.e)(WW, null, lW, {
+         }, bR, vR), (0, lR.l)(RR, null, rR, {
```

#### 199. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1979` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1979) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1979)

```diff
-         }, uW, oW), (0, TW.e)(WW, null, AW, {
+         }, OR, xR), (0, lR.l)(RR, null, eR, {
```

#### 200. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1992` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/262.js#L1992) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/262.js#L1992)

```diff
-         }, dW, eW), (0, TW.e)(WW, null, bW, {
+         }, NR, DR), (0, lR.l)(RR, null, aR, {
```
