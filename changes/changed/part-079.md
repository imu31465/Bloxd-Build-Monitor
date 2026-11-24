# Changed — Bundle Modifications Report (Part 079 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `79 / 142` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 078](part-078.md) · [Part 080 →](part-080.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4724 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5649` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5220) · [Before (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5649)

```diff
-                 Jp(pp[Ep[6]] += pp[Ep[30]] * Ep[31], pp[Ep[17]] |= pp[Ep[6]] << pp[Ep[32]], pp[Ep[32]] += (pp[Ep[6]] & Ep[33]) > Ep[34] ? Ep[35] : Ep[36]);
+                 IT(gT += HT * tT[27], zT |= gT << MT, MT += (gT & tT[28]) > tT[29] ? tT[30] : tT[31]);
```

#### 729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5651-L5654` → after: `L5222-L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5222-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5222-L5227) · [Before (L5651-L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5651-L5654)

```diff
-                   Jp(pp[Ep[37]].push(pp[Ep[17]] & Ep[11]), pp[Ep[17]] >>= Ep[10], pp[Ep[32]] -= Ep[10])
-                 } while (pp[Ep[32]] > Ep[6]);
-                 pp[Ep[6]] = -Ep[0]
-               } return pp[Ep[6]] > -Ep[0] && pp[Ep[37]].push((pp[Ep[17]] | pp[Ep[6]] << pp[Ep[32]]) & Ep[11]), lp(pp[Ep[37]])
+                   IT(WT.push(zT & tT[11]), zT >>= tT[3], MT -= tT[3])
+                 } while (MT > tT[7]);
+                 gT = -tT[2]
+               }
+           }
+           return gT > -tT[2] && WT.push((zT | gT << MT) & tT[11]), yT(WT)
```

#### 730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5658` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5231) · [Before (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5658)

```diff
-           return ip[Ep[12]] = Ep[0], typeof dp[ip[Ep[2]]] === Ep[18] ? dp[ip[Ep[2]]] = pp(ep[ip[Ep[2]]]) : dp[ip[Ep[2]]]
+           return UT[tT[12]] = tT[2], typeof iT[UT[tT[1]]] === tT[17] ? iT[UT[tT[1]]] = TT(bT[UT[tT[1]]]) : iT[UT[tT[1]]]
```

#### 731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5662-L5857` → after: `L5235-L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5235-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5235-L5240) · [Before (L5662-L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5662-L5857)

```diff
-           pp[Ep[12]] = Ep[2],
-             function(...pp) {
-               function cp(...pp) {
-                 for (Jp(pp[Ep[12]] = Ep[0], pp[Ep[19]] = [], pp[Ep[21]] = Ep[2], pp[Ep[14]] = pp[Ep[2]].length, pp[Ep[22]] = Ep[20], pp[-Ep[43]] = Ep[20]); pp[Ep[21]] < pp[Ep[14]];) Jp(pp[Ep[22]] = pp[Ep[2]].charCodeAt(pp[Ep[21]]++), pp[Ep[22]] >= Ep[48] && pp[Ep[22]] <= Ep[93] & … [truncated]
-                 return pp[Ep[19]]
-               }
- 
-               function Op(...pp) {
-                 if (pp[Ep[12]] = Ep[0], pp[Ep[2]] >= Ep[48] && pp[Ep[2]] <= Ep[99]) {
-                   function ip(...pp) {
-                     for (Jp(pp[Ep[12]] = Ep[0], pp[Ep[19]] = 'AmtBC=Z/3`o_wMEiP"zeISbk>*v]R;d2T&$1?gU6:x!{KL|FGqH[pD@W,%usj5J97N8.rh)Q<fnyc4XVaO0l(^#+}~Y', pp[-Ep[50]] = "" + (pp[Ep[2]] || ""), pp[Ep[14]] = pp[-Ep[50]].length, pp[Ep[37]] = [], pp[Ep[17]] = Ep[2], pp[Ep[32]] = Ep[ … [truncated]
-                       if (pp[Ep[30]] = pp[Ep[19]].indexOf(pp[-Ep[50]][pp[Ep[3]]]), pp[Ep[30]] !== -Ep[0])
-                         if (pp[Ep[6]] < Ep[2]) pp[Ep[6]] = pp[Ep[30]];
-                         else {
-                           Jp(pp[Ep[6]] += pp[Ep[30]] * Ep[31], pp[Ep[17]] |= pp[Ep[6]] << pp[Ep[32]], pp[Ep[32]] += (pp[Ep[6]] & Ep[33]) > Ep[34] ? Ep[35] : Ep[36]);
-                           do {
- ... (180 more removed lines; see GitHub link above)
+           TT[tT[12]] = tT[1]
+         }
+         UT(tT[53]) in XT && mT();
+         let WT = tT[63];
+         IT(setInterval((() => {
+           if (!WT && (0, gT[tT[37]])()) {
```

#### 732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5859-L5861` → after: `L5242-L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5242-L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5242-L5244) · [Before (L5859-L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5859-L5861)

```diff
-               for (Jp(pp[Ep[12]] = Ep[0], pp[Ep[19]] = '(bU,fQYX~q<IDCmAw9Vey2Pk1J+#^Ec3xOv5uo74H>}*M.8Z_jRB!r{6t:zKih$0/?SWN&;sd`nlG@|F")gL%]=T[pa', pp[Ep[21]] = "" + (pp[Ep[2]] || ""), pp[Ep[45]] = pp[Ep[21]].length, pp[-Ep[85]] = [], pp[Ep[84]] = Ep[2], pp[Ep[8]] = Ep[2], pp[E … [truncated]
-                 if (pp[-Ep[83]] = pp[Ep[19]].indexOf(pp[Ep[21]][pp[-Ep[82]]]), pp[-Ep[83]] !== -Ep[0])
-                   if (pp[Ep[6]] < Ep[2]) pp[Ep[6]] = pp[-Ep[83]];
+               for (IT(TT[tT[12]] = tT[2], TT[-tT[48]] = '"UAmiX.Bc+f|Fkz}Z92EuIv]>e`7ys:djMl?^H%WaY(Cp;oL$whRP{!QNgGnKDS/TVtJ0rO3qb~_<8&#4,5*=x1)[@6', TT[-tT[47]] = "" + (TT[tT[1]] || ""), TT[tT[14]] = TT[-tT[47]].length, TT[tT[34]] = [], TT[tT[44]] = tT[1], TT[tT[45]] = tT[1], T … [truncated]
+                 if (TT[tT[49]] = TT[-tT[48]].indexOf(TT[-tT[47]][TT[tT[37]]]), TT[tT[49]] !== -tT[2])
+                   if (TT[tT[50]] < tT[1]) TT[tT[50]] = TT[tT[49]];
```

#### 733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5863` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5246) · [Before (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5863)

```diff
-                     Jp(pp[Ep[6]] += pp[-Ep[83]] * Ep[31], pp[Ep[84]] |= pp[Ep[6]] << pp[Ep[8]], pp[Ep[8]] += (pp[Ep[6]] & Ep[33]) > Ep[34] ? Ep[35] : Ep[36]);
+                     IT(TT[tT[50]] += TT[tT[49]] * tT[27], TT[tT[44]] |= TT[tT[50]] << TT[tT[45]], TT[tT[45]] += (TT[tT[50]] & tT[28]) > tT[29] ? tT[30] : tT[31]);
```

#### 734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5865-L5868` → after: `L5248-L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5248-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5248-L5251) · [Before (L5865-L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5865-L5868)

```diff
-                       Jp(pp[-Ep[85]].push(pp[Ep[84]] & Ep[11]), pp[Ep[84]] >>= Ep[10], pp[Ep[8]] -= Ep[10])
-                     } while (pp[Ep[8]] > Ep[6]);
-                     pp[Ep[6]] = -Ep[0]
-                   } return pp[Ep[6]] > -Ep[0] && pp[-Ep[85]].push((pp[Ep[84]] | pp[Ep[6]] << pp[Ep[8]]) & Ep[11]), lp(pp[-Ep[85]])
+                       IT(TT[tT[34]].push(TT[tT[44]] & tT[11]), TT[tT[44]] >>= tT[3], TT[tT[45]] -= tT[3])
+                     } while (TT[tT[45]] > tT[7]);
+                     TT[tT[50]] = -tT[2]
+                   } return TT[tT[50]] > -tT[2] && TT[tT[34]].push((TT[tT[44]] | TT[tT[50]] << TT[tT[45]]) & tT[11]), yT(TT[tT[34]])
```

#### 735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5872` → after: `L5255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5255) · [Before (L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5872)

```diff
-               return pp[Ep[12]] = Ep[0], typeof dp[pp[Ep[2]]] === Ep[18] ? dp[pp[Ep[2]]] = cp(ep[pp[Ep[2]]]) : dp[pp[Ep[2]]]
+               return UT[tT[12]] = tT[2], typeof iT[UT[tT[1]]] === tT[17] ? iT[UT[tT[1]]] = TT(bT[UT[tT[1]]]) : iT[UT[tT[1]]]
```

#### 736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5880-L5888` → after: `L5258-L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5258-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5258-L5266) · [Before (L5880-L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5880-L5888)

```diff
-               [ip(Ep[108]) + ip(125)]: op(Ep[117]) + op(Ep[86]),
-               [op(Ep[51]) + op(Ep[87])]: op(Ep[91]) + "go",
-               [op(131) + op(Ep[72]) + Ep[17]]: op(133),
-               [op(Ep[42]) + Ep[132]]: op(135) + op(136),
-               [op(Ep[119]) + op(138)]: op(139) + "af",
-               [op(140)]: op(141),
-               [op(142) + "3"]: "1h",
-               [op(143) + "2b"]: op(144) + op(145),
-               [op(146)]: op(Ep[69]) + op(148)
+               [UT(106) + UT(tT[33])]: UT(108) + UT(109),
+               [UT(110) + UT(111)]: UT(112) + "go",
+               [UT(113) + UT(114) + "e"]: UT(115),
+               [UT(tT[58]) + tT[71]]: UT(117) + UT(118),
+               [UT(119) + UT(120)]: UT(121) + "af",
+               [UT(122)]: UT(123),
+               [UT(tT[66]) + "3"]: "1h",
+               [UT(125) + "2b"]: UT(126) + UT(tT[42]),
+               [UT(tT[51])]: UT(129) + UT(130)
```

#### 737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5890` → after: `L5268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5268) · [Before (L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5890)

```diff
-             Jp(Op = Ep[81], (Ep[2], xp[op(149)])(Yp.ci, Lp))
+             IT(WT = tT[52], (0, nT[UT(131)])(kT.ii, mT))
```

#### 738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5892-L5893` → after: `L5270-L5310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5270-L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5270-L5310) · [Before (L5892-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5892-L5893)

```diff
-         }), 7899), (Ep[2], xp[ip(150) + ip(151)])(((...pp) => {
-           pp[Ep[12]] = Ep[2], ip(152) + "Q" in Qp && function() {
+         }), 3240), (0, nT[UT(132) + UT(133)])(((...TT) => {
+           TT[tT[12]] = tT[1],
+             function(...TT) {
+               return TT[tT[12]] = tT[2], typeof iT[TT[tT[1]]] === tT[17] ? iT[TT[tT[1]]] = function(...TT) {
+                 for (IT(TT[tT[12]] = tT[2], TT[tT[15]] = 'Aln{dcBRgWaOFPqhIEUsmCTiZKjQefw|Xkpbx;?Y*LHz#JD_7Mr^$3!0Gv.,t6u)N"2<VoS4]&`y9>@81}=/%(:+[~5', TT[tT[32]] = "" + (TT[tT[1]] || ""), TT[tT[54]] = TT[tT[32]].length, TT[tT[57]] = [], TT[tT[44]] = tT[1], TT[tT[22]] = tT[1], TT … [truncated]
+                   if (TT[tT[55]] = TT[tT[15]].indexOf(TT[tT[32]][TT[-tT[53]]]), TT[tT[55]] !== -tT[2])
+                     if (TT[-tT[56]] < tT[1]) TT[-tT[56]] = TT[tT[55]];
+                     else {
+                       IT(TT[-tT[56]] += TT[tT[55]] * tT[27], TT[tT[44]] |= TT[-tT[56]] << TT[tT[22]], TT[tT[22]] += (TT[-tT[56]] & tT[28]) > tT[29] ? tT[30] : tT[31]);
+                       do {
+                         IT(TT[tT[57]].push(TT[tT[44]] & tT[11]), TT[tT[44]] >>= tT[3], TT[tT[22]] -= tT[3])
+                       } while (TT[tT[22]] > tT[7]);
+                       TT[-tT[56]] = -tT[2]
+                     } return TT[-tT[56]] > -tT[2] && TT[tT[57]].push((TT[tT[44]] | TT[-tT[56]] << TT[tT[22]]) & tT[11]), yT(TT[tT[57]])
+               }(bT[TT[tT[1]]]) : iT[TT[tT[1]]]
+             }(tT[36]) in XT && function(...TT) {
+ ... (25 more added lines; see GitHub link above)
```

#### 739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5895-L5897` → after: `L5312-L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5312-L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5312-L5314) · [Before (L5895-L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5895-L5897)

```diff
-               for (Jp(pp[Ep[12]] = Ep[0], pp[Ep[19]] = 'P:HNSL70{_XC6w%zF]@^B5>2/$E<lQYnOJqGKTpMurk?Rc|+3)h!Z[,I~bmjsUf8;eVWi#ox`y=dA.g}v(&9a14*Dt"', pp[Ep[1]] = "" + (pp[Ep[2]] || ""), pp[Ep[88]] = pp[Ep[1]].length, pp[Ep[37]] = [], pp[Ep[90]] = Ep[2], pp[Ep[32]] = Ep[2], pp[Ep[ … [truncated]
-                 if (pp[-Ep[89]] = pp[Ep[19]].indexOf(pp[Ep[1]][pp[Ep[3]]]), pp[-Ep[89]] !== -Ep[0])
-                   if (pp[Ep[6]] < Ep[2]) pp[Ep[6]] = pp[-Ep[89]];
+               for (IT(TT[tT[12]] = tT[2], TT[tT[69]] = 'War%01D!`~c;H7<BUS{n93TOMXKu2?F#[hjNv>Z8x)^q&+:GeAd(6m$5o"/.g@E,Qyp4f|z}b=w_CiVJ*LPI]lYRtsk', TT[tT[32]] = "" + (TT[tT[1]] || ""), TT[tT[14]] = TT[tT[32]].length, TT[tT[10]] = [], TT[tT[44]] = tT[1], TT[tT[22]] = tT[1], TT[t … [truncated]
+                 if (TT[-tT[70]] = TT[tT[69]].indexOf(TT[tT[32]][TT[tT[3]]]), TT[-tT[70]] !== -tT[2])
+                   if (TT[tT[7]] < tT[1]) TT[tT[7]] = TT[-tT[70]];
```

#### 740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5899` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5316) · [Before (L5899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5899)

```diff
-                     Jp(pp[Ep[6]] += pp[-Ep[89]] * Ep[31], pp[Ep[90]] |= pp[Ep[6]] << pp[Ep[32]], pp[Ep[32]] += (pp[Ep[6]] & Ep[33]) > Ep[34] ? Ep[35] : Ep[36]);
+                     IT(TT[tT[7]] += TT[-tT[70]] * tT[27], TT[tT[44]] |= TT[tT[7]] << TT[tT[22]], TT[tT[22]] += (TT[tT[7]] & tT[28]) > tT[29] ? tT[30] : tT[31]);
```

#### 741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5901-L5904` → after: `L5318-L5321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5318-L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5318-L5321) · [Before (L5901-L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5901-L5904)

```diff
-                       Jp(pp[Ep[37]].push(pp[Ep[90]] & Ep[11]), pp[Ep[90]] >>= Ep[10], pp[Ep[32]] -= Ep[10])
-                     } while (pp[Ep[32]] > Ep[6]);
-                     pp[Ep[6]] = -Ep[0]
-                   } return pp[Ep[6]] > -Ep[0] && pp[Ep[37]].push((pp[Ep[90]] | pp[Ep[6]] << pp[Ep[32]]) & Ep[11]), lp(pp[Ep[37]])
+                       IT(TT[tT[10]].push(TT[tT[44]] & tT[11]), TT[tT[44]] >>= tT[3], TT[tT[22]] -= tT[3])
+                     } while (TT[tT[22]] > tT[7]);
+                     TT[tT[7]] = -tT[2]
+                   } return TT[tT[7]] > -tT[2] && TT[tT[10]].push((TT[tT[44]] | TT[tT[7]] << TT[tT[22]]) & tT[11]), yT(TT[tT[10]])
```

#### 742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5908-L5913` → after: `L5325-L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5325-L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5325-L5363) · [Before (L5908-L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5908-L5913)

```diff
-               return ip[Ep[12]] = Ep[0], typeof dp[ip[Ep[2]]] === Ep[18] ? dp[ip[Ep[2]]] = pp(ep[ip[Ep[2]]]) : dp[ip[Ep[2]]]
-             }! function(...pp) {
-               function cp(...pp) {
-                 for (Jp(pp[Ep[12]] = Ep[0], pp[Ep[0]] = [], pp[Ep[92]] = Ep[2], pp[Ep[14]] = pp[Ep[2]].length, pp[-Ep[91]] = Ep[20], pp[Ep[41]] = Ep[20]); pp[Ep[92]] < pp[Ep[14]];) Jp(pp[-Ep[91]] = pp[Ep[2]].charCodeAt(pp[Ep[92]]++), pp[-Ep[91]] >= Ep[48] && pp[-Ep[91]] <= Ep[93] … [truncated]
-                 return pp[Ep[0]]
-               }
+               return UT[tT[12]] = tT[2], typeof iT[UT[tT[1]]] === tT[17] ? iT[UT[tT[1]]] = TT(bT[UT[tT[1]]]) : iT[UT[tT[1]]]
+             }
+             let WT = {
+               [UT(140) + UT(141)]: UT(142) + UT(143),
+               [UT(144) + UT(145) + tT[49]]: UT(tT[26]) + UT(147) + tT[19],
+               [UT(tT[65])]: UT(tT[70]) + UT(tT[69]),
+               [UT(151) + UT(152)]: UT(153) + UT(154),
+               [UT(155) + UT(156)]: UT(157) + "0k",
+               [UT(158)]: UT(tT[47]) + "er",
+               [UT(160) + UT(161)]: UT(162) + UT(163) + tT[71],
+               [UT(164)]: UT(165)
+             };
+             IT(mT = tT[52], (0, nT[UT(166)])(kT.ji, WT))
+           }
+         }), 11592), (0, nT[aT(167) + UT(168)])((() => {
+           mT = tT[63]
+ ... (23 more added lines; see GitHub link above)
```

#### 743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5915-L6152` → after: `L5365-L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5365-L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5365-L5367) · [Before (L5915-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5915-L6152)

```diff
-               function Op(...ip) {
-                 for (Jp(ip[Ep[12]] = Ep[0], ip[-Ep[96]] = ip[Ep[2]].length, ip[-Ep[95]] = -Ep[0], ip[Ep[14]] = Ep[20], ip[Ep[98]] = ""); ++ip[-Ep[95]] < ip[-Ep[96]];) ip[Ep[14]] = ip[Ep[2]][ip[-Ep[95]]], ip[Ep[14]] > Ep[97] && Jp(ip[Ep[14]] -= Ep[46], ip[Ep[98]] += pp[Ep[19]](ip[ … [truncated]
-                 return ip[Ep[98]]
-               }
- 
-               function op(...pp) {
-                 if (pp[Ep[12]] = Ep[0], pp[Ep[2]] >= Ep[48] && pp[Ep[2]] <= Ep[99]) {
-                   function ip(...pp) {
-                     for (Jp(pp[Ep[12]] = Ep[0], pp[Ep[19]] = ',ORFXSQAfbELWaogHk<`3iZ4_8qs*dtz+uVM1v:r={#"$P)h/2jB;C^%]ywT(5@[Dl0>.n&m~Ip!c7GKJU9|xN}Ye?6', pp[Ep[21]] = "" + (pp[Ep[2]] || ""), pp[Ep[100]] = pp[Ep[21]].length, pp[Ep[101]] = [], pp[Ep[17]] = Ep[2], pp[Ep[8]] = Ep[2 … [truncated]
-                       if (pp[Ep[64]] = pp[Ep[19]].indexOf(pp[Ep[21]][pp[Ep[10]]]), pp[Ep[64]] !== -Ep[0])
-                         if (pp[Ep[6]] < Ep[2]) pp[Ep[6]] = pp[Ep[64]];
-                         else {
-                           Jp(pp[Ep[6]] += pp[Ep[64]] * Ep[31], pp[Ep[17]] |= pp[Ep[6]] << pp[Ep[8]], pp[Ep[8]] += (pp[Ep[6]] & Ep[33]) > Ep[34] ? Ep[35] : Ep[36]);
-                           do {
-                             Jp(pp[Ep[101]].push(pp[Ep[17]] & Ep[11]), pp[Ep[17]] >>= Ep[10], pp[Ep[8]] -= Ep[10])
-                           } while (pp[Ep[8]] > Ep[6]);
- ... (222 more removed lines; see GitHub link above)
+     function nT(TT) {
+       return WT.b.includes(TT)
+     }
```

#### 744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6163` → after: `L5378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5378) · [Before (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6163)

```diff
-       return pp.physicsState.type === op.l.GLIDER && pp.movementType === op.k.GLIDING && Yp(ip)
+       return TT.physicsState.type === zT.q.GLIDER && TT.movementType === zT.p.GLIDING && kT(UT)
```

#### 745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6172-L6174` → after: `L5387-L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5387-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5387-L5389) · [Before (L6172-L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6172-L6174)

```diff
-       const cp = pp.Yk.Bip(pp.NJ),
-         Op = pp.Yk.xip(pp.NJ);
-       return pp.Tu.canAltAction && void 0 !== cp && void 0 !== Op && Dp(Op, null === (ip = cp.selectedItem) || void 0 === ip ? void 0 : ip.name) ? (0, Ip.c)(cp.inventory) : 0
+       const mT = TT.pY.tUT(TT.VV),
+         WT = TT.pY.gUT(TT.VV);
+       return TT.kY.canAltAction && void 0 !== mT && void 0 !== WT && jT(WT, null === (UT = mT.selectedItem) || void 0 === UT ? void 0 : UT.name) ? (0, MT.b)(mT.inventory) : 0
```

#### 746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6180` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5395) · [Before (L6180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6180)

```diff
-     const yp = new Map(Object.entries(Sp.i).map((pp => {
+     const BT = new Map(Object.entries(gT.g).map((TT => {
```

#### 747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6190` → after: `L5405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5405) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6190)

```diff
-       } = cp, Dp = (null !== xp && void 0 !== xp ? xp : []).map((pp => {
+       } = mT, jT = (null !== nT && void 0 !== nT ? nT : []).map((TT => {
```

#### 748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6198` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5413) · [Before (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6198)

```diff
-         food: new Set([...null !== op && void 0 !== op ? op : [], ...null !== Ip && void 0 !== Ip ? Ip : [], ...null !== Sp && void 0 !== Sp ? Sp : [], ...Dp]),
+         food: new Set([...null !== zT && void 0 !== zT ? zT : [], ...null !== MT && void 0 !== MT ? MT : [], ...null !== gT && void 0 !== gT ? gT : [], ...jT]),
```

#### 749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6200` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5415) · [Before (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6200)

```diff
-         saddle: Lp ? null !== Yp && void 0 !== Yp ? Yp : "Saddle" : null
+         saddle: HT ? null !== kT && void 0 !== kT ? kT : "Saddle" : null
```

#### 750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6230` → after: `L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5445) · [Before (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6230)

```diff
-   38013: (pp, ip, cp) => {
+   37911: (TT, UT, mT) => {
```

#### 751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6234-L6237` → after: `L5449-L5452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5449-L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5449-L5452) · [Before (L6234-L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6234-L6237)

```diff
-       g: () => ti,
-       h: () => ki,
-       l: () => Hi,
-       p: () => mi,
+       i: () => cU,
+       j: () => bU,
+       k: () => vU,
+       o: () => OU,
```

#### 752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6239-L6242` → after: `L5454-L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5454-L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5454-L5456) · [Before (L6239-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6239-L6242)

```diff
-       u: () => gi,
-       w: () => Ic,
-       z: () => ji,
-       B: () => Yc,
+       v: () => CU,
+       y: () => Um,
+       C: () => iU,
```

#### 753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6244` → after: `L5458-L5459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5458-L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5458-L5459) · [Before (L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6244)

```diff
-       E: () => Ri
+       F: () => uU,
+       I: () => eU
```

#### 754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6246-L6249` → after: `L5461-L5464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5461-L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5461-L5464) · [Before (L6246-L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6246-L6249)

```diff
-     var Op = cp(9338),
-       op = cp(38033);
-     const Ip = Op.e.Water.id,
-       Sp = Op.e.Ice.id,
+     var WT = mT(9330),
+       zT = mT(37936);
+     const MT = WT.g.Water.id,
+       gT = WT.g.Ice.id,
```

#### 755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6260-L6276` → after: `L5475-L5491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5475-L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5475-L5491) · [Before (L6260-L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6260-L6276)

```diff
-       return (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta.rootId) === Ip
-     }
-     var Yp = cp(38211),
-       Dp = cp(195),
-       Ap = cp(38215),
-       Pp = cp(38226),
-       Wp = cp(337),
-       yp = cp(1234),
-       Up = cp(37246),
-       wp = cp(4543),
-       vp = cp(4580),
-       tp = cp(3246),
-       Hp = cp(38017),
-       dp = cp(38077),
-       ep = cp(38023),
-       jp = cp(38080),
- ... (1 more removed lines; see GitHub link above)
+       return (null === (UT = WT.g[TT]) || void 0 === UT ? void 0 : UT.meta.rootId) === MT
+     }
+     var kT = mT(38124),
+       jT = mT(208),
+       lT = mT(38133),
+       LT = mT(38139),
+       pT = mT(366),
+       BT = mT(1321),
+       ZT = mT(37125),
+       cT = mT(4581),
+       vT = mT(4602),
+       fT = mT(3289),
+       qT = mT(37919),
+       iT = mT(37981),
+       bT = mT(37926),
+       OT = mT(37987),
+ ... (1 more added lines; see GitHub link above)
```

#### 756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6278-L6295` → after: `L5493-L5510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5493-L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5493-L5510) · [Before (L6278-L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6278-L6295)

```diff
-       Rp = cp(3774),
-       qp = cp(38086),
-       Mp = cp(36948),
-       Cp = cp(36942),
-       Ep = cp(38090),
-       Xp = cp(3837),
-       lp = cp(34),
-       Qp = cp(38096),
-       Jp = cp(38100),
-       Bp = cp(37537),
-       Np = cp(38132),
-       Tp = cp(3250),
-       fp = cp(1211),
-       bp = cp(38142),
-       hp = cp(38157),
-       ap = cp(37411),
- ... (2 more removed lines; see GitHub link above)
+       JT = mT(3781),
+       xT = mT(37993),
+       dT = mT(36855),
+       wT = mT(36851),
+       tT = mT(37996),
+       aT = mT(3841),
+       yT = mT(31),
+       XT = mT(37998),
+       IT = mT(38007),
+       QT = mT(37421),
+       sT = mT(38058),
+       FT = mT(3292),
+       PT = mT(1302),
+       VT = mT(38074),
+       uT = mT(38083),
+       CT = mT(37273),
+ ... (2 more added lines; see GitHub link above)
```

#### 757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6298-L6319` → after: `L5513-L5534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5513-L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5513-L5534) · [Before (L6298-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6298-L6319)

```diff
-     var rp = cp(37514),
-       Zp = cp(37505),
-       zp = cp(38151),
-       sp = cp(37473),
-       Kp = cp(37830),
-       Vp = cp(37800);
-     var ii = cp(38178),
-       ci = cp(37475),
-       Oi = cp(38118),
-       oi = cp(37667),
-       Ii = cp(37642),
-       Si = cp(37436),
-       xi = cp(37676),
-       Li = cp(37448),
-       Yi = cp(37822),
-       Di = cp(2849),
- ... (6 more removed lines; see GitHub link above)
+     var NT = mT(37393),
+       ET = mT(37385),
+       hT = mT(38079),
+       DT = mT(37351),
+       oT = mT(37740),
+       AT = mT(37708);
+     var RT = mT(38101),
+       TU = mT(37359),
+       UU = mT(38036),
+       mU = mT(37552),
+       WU = mT(37526),
+       zU = mT(37302),
+       MU = mT(37559),
+       gU = mT(37321),
+       nU = mT(37738),
+       HU = mT(2875),
+ ... (6 more added lines; see GitHub link above)
```

#### 758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6321-L6325` → after: `L5536-L5540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5536-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5536-L5540) · [Before (L6321-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6321-L6325)

```diff
-         Helmet: cp(38183),
-         Chestplate: cp(38190),
-         Leggings: cp(38198),
-         Boots: cp(38200),
-         Gauntlets: cp(38206)
+         Helmet: mT(38108),
+         Chestplate: mT(38114),
+         Leggings: mT(38117),
+         Boots: mT(38120),
+         Gauntlets: mT(38122)
```

#### 759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6330` → after: `L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5545) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6330)

```diff
-       lp.m.GA("localBlockMined");
+       yT.j.EZ("localBlockMined");
```

#### 760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6332` → after: `L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5547) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6332)

```diff
-         Yp = cp.nH(pp[0], pp[1], pp[2]);
+         kT = mT.uq(TT[0], TT[1], TT[2]);
```

#### 761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6335-L6338` → after: `L5550-L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5550-L5553) · [Before (L6335-L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6335-L6338)

```diff
-         Ap = null === (ip = Op.e[Dp].solid) || void 0 === ip || ip,
-         Pp = Np.c.getUniqueColoursForParticleSystem(pp);
-       Np.j.emit(50, {
-         ...(0, Wi.b)(pp, Op.e[Yp].Ww, .05, .95),
+         lT = null === (UT = WT.g[jT].solid) || void 0 === UT || UT,
+         LT = sT.b.getUniqueColoursForParticleSystem(TT);
+       sT.h.emit(50, {
+         ...(0, lU.b)(TT, WT.g[kT].oZ, .05, .95),
```

#### 762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6345-L6347` → after: `L5560-L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5560-L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5560-L5562) · [Before (L6345-L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6345-L6347)

```diff
-       const Wp = cp.getClientPredictedOption((0, Di.g)().NJ, "fillBrokenBlocksWithWater") ? function(pp, ip, cp, Yp, Dp) {
-           const Ap = Op.e[Dp];
-           if (0 === Dp || Ap.tW || Dp in op.d) return 0;
+       const pT = mT.getClientPredictedOption((0, HU.h)().VV, "fillBrokenBlocksWithWater") ? function(TT, UT, mT, kT, jT) {
+           const lT = WT.g[jT];
+           if (0 === jT || lT.RL || jT in zT.e) return 0;
```

#### 763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6353` → after: `L5568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5568) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6353)

```diff
-           return Pp || Wp ? Ip : 0
+           return LT || pT ? MT : 0
```

#### 764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6358-L6364` → after: `L5573-L5579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5573-L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5573-L5579) · [Before (L6358-L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6358-L6364)

```diff
-             Vx: 0,
-             XD: mp().copy([], pp),
-             lD: Hi(),
-             QD: !1,
-             JD: !1,
-             BD: ip,
-             Ax: cp
+             bn: 0,
+             jj: YT().copy([], TT),
+             lj: vU(),
+             Lj: !1,
+             pj: !1,
+             Bj: UT,
+             Pg: mT
```

#### 765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6368-L6369` → after: `L5583-L5584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5583-L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5583-L5584) · [Before (L6368-L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6368-L6369)

```diff
-           NJ: Up
-         } = (0, Di.g)();
+           VV: ZT
+         } = (0, HU.h)();
```

#### 766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6372` → after: `L5587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5587) · [Before (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6372)

```diff
-         const ip = cp.getBlockBreakDrop(Up, Yp, null !== (wp = null === (vp = cp.getInvenHeldItem(Up)) || void 0 === vp ? void 0 : vp.name) && void 0 !== wp ? wp : null);
+         const UT = mT.getBlockBreakDrop(ZT, kT, null !== (cT = null === (vT = mT.getInvenHeldItem(ZT)) || void 0 === vT ? void 0 : vT.name) && void 0 !== cT ? cT : null);
```

#### 767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6375` → after: `L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5590) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6375)

```diff
-       cp.qE(pp[0], pp[1], pp[2], Wp), (0, yi.h)(pp[0], pp[1], pp[2]), cp.client.triggerGameCallback("onPlayerChangeBlock", (0, Di.g)().NJ, pp[0], pp[1], pp[2], (0, Op.d)(Yp), "Air")
+       mT.EQ(TT[0], TT[1], TT[2], pT), (0, LU.l)(TT[0], TT[1], TT[2]), mT.client.triggerGameCallback("onPlayerChangeBlock", (0, HU.h)().VV, TT[0], TT[1], TT[2], (0, WT.e)(kT), "Air")
```

#### 768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6378` → after: `L5593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5593) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6378)

```diff
-     const di = ["length", 0, "a", 1, 33554432, 2, 67108864, "b", 3, 60, 157, 226, null];
+     const fU = ["length", 0, "b", 120, "c", 5, 1, 115, !1];
```

#### 769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6387-L6396` → after: `L5598-L5607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5598-L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5598-L5607) · [Before (L6387-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6387-L6396)

```diff
-       const cp = (0, Mp.d)((0, Yp.b)(pp, ip));
-       Cp.b.play(cp, 1)
-     }((...pp) => {
-       pp[di[0]] = di[1], "_zLvFBg" in ei && function(...pp) {
-         pp[di[0]] = di[1]
-       }(), ui(pp[-di[11]] = di[1], Hi = () => {
-         if ("UDWMeu" in ei && function(...pp) {
-             function ip(...pp) {
-               return pp[di[0]] = di[3], pp[di[1]][di[3]] * di[6] + (pp[di[1]][di[1]] < di[1] ? di[4] | pp[di[1]][di[1]] : pp[di[1]][di[1]])
-             }
+       const mT = (0, dT.d)((0, kT.d)(TT, UT));
+       wT.c.play(mT, 1)
+     }(() => {
+       "AjDjtX4" in qU && function(...TT) {
+         function UT(...TT) {
+           TT[fU[0]] = fU[6];
+           const UT = {};
+           for (let mT of TT[fU[1]].replace(/[^w]/g, "").toLowerCase()) UT[mT] = UT[mT] + fU[6] || fU[6];
+           return UT
+         }
```

#### 770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6398-L6430` → after: `L5609-L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5609-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5609-L5639) · [Before (L6398-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6398-L6430)

```diff
-             function cp(...pp) {
-               switch (pp[di[0]] = di[3], ((pp[di[1]] & di[4]) !== di[1]) * di[3] + (pp[di[1]] < di[1]) * di[5]) {
-                 case di[1]:
-                   return [pp[di[1]] % di[4], Math.trunc(pp[di[1]] / di[6])];
-                 case di[3]:
-                   return [pp[di[1]] % di[4] - di[4], Math.trunc(pp[di[1]] / di[6]) + di[3]];
-                 case di[5]:
-                   return [((pp[di[1]] + di[4]) % di[4] + di[4]) % di[4], Math.round(pp[di[1]] / di[6])];
-                 case di[8]:
-                   return [pp[di[1]] % di[4], Math.trunc(pp[di[1]] / di[6])]
-               }
-             }
-             pp[di[0]] = di[1], ui(pp[di[7]] = ip([di[5], 4]), pp[di[3]] = ip([di[3], di[5]]), pp[di[5]] = pp[di[7]] + pp[di[3]], pp[di[8]] = pp[di[5]] - pp[di[3]], pp[-di[9]] = pp[di[8]] * di[5], pp[di[10]] = pp[-di[9]] / di[5], console.log(cp(pp[di[5]])), console.log(cp(pp[di[8] … [truncated]
-           }(), pp[-di[11]]++, 5 === pp[-di[11]]) {
-           function ip(...pp) {
-             var ip;
- ... (17 more removed lines; see GitHub link above)
+         function mT(...TT) {
+           TT[fU[0]] = 2;
+           const UT = buildCharMap(TT[fU[1]]),
+             mT = buildCharMap(TT[fU[6]]);
+           for (let WT in UT)
+             if (UT[WT] !== mT[WT]) return fU[8];
+           return Object.keys(UT).length === Object.keys(mT).length || fU[8]
+         }
+ 
+         function WT(...TT) {
+           TT[fU[0]] = fU[6];
+           return zT(TT[fU[1]]) !== 1 / 0
+         }
+ 
+         function zT(...TT) {
+           if (TT[fU[0]] = fU[6], !TT[fU[1]]) return -fU[6];
+ ... (15 more added lines; see GitHub link above)
```

#### 771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6437` → after: `L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5646) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6437)

```diff
-         Vo: xp = !1,
+         wz: nT = !1,
```

#### 772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6445-L6446` → after: `L5654-L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5654-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5654-L5655) · [Before (L6445-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6445-L6446)

```diff
-       } = Dp.g;
-       if (ip ??= String(pp.Yk.iZ([])), pp.Yk.add([cp[0], cp[1], cp[2]], wp, wp, null, null, void 0 !== Yp, !1, ip), pp.Yk.vJ(ip, "autoRemoveMesh"), pp.Yk.vJ(ip, "itemState", {
+       } = jT.f;
+       if (UT ??= String(TT.pY.XN([])), TT.pY.add([mT[0], mT[1], mT[2]], cT, cT, null, null, void 0 !== kT, !1, UT), TT.pY.YV(UT, "autoRemoveMesh"), TT.pY.YV(UT, "itemState", {
```

#### 773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6450-L6452` → after: `L5659-L5661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5659-L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5659-L5661) · [Before (L6450-L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6450-L6452)

```diff
-           attributes: (0, Ap.k)(Up, Sp),
-           Vo: xp,
-           creationTime: null !== Wp && void 0 !== Wp ? Wp : Date.now(),
+           attributes: (0, lT.l)(ZT, gT),
+           wz: nT,
+           creationTime: null !== pT && void 0 !== pT ? pT : Date.now(),
```

#### 774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6455-L6457` → after: `L5664-L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5664-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5664-L5666) · [Before (L6455-L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6455-L6457)

```diff
-         const cp = pp.Yk.fn(ip);
-         (0, Pp.e)(cp), cp.applyImpulse(Yp)
-       } else pp.Yk.vJ(ip, "smoothToServerPos", {
+         const mT = TT.pY.rK(UT);
+         (0, LT.d)(mT), mT.applyImpulse(kT)
+       } else TT.pY.YV(UT, "smoothToServerPos", {
```

#### 775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6465-L6466` → after: `L5674-L5675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5674-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5674-L5675) · [Before (L6465-L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6465-L6466)

```diff
-       const op = null === (cp = pp.Yk.getState(ip, "autoRotate")) || void 0 === cp ? void 0 : cp.heading,
-         Ip = null === (Op = pp.Yk.Rip(ip)) || void 0 === Op ? void 0 : Op.offset;
+       const zT = null === (mT = TT.pY.getState(UT, "autoRotate")) || void 0 === mT ? void 0 : mT.heading,
+         MT = null === (WT = TT.pY.bUT(UT)) || void 0 === WT ? void 0 : WT.offset;
```

#### 776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6479` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5688) · [Before (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6479)

```diff
-       } = pp.Yk.getState(ip, "itemState"), Yp = (0, Qp.d)() * Lp, Ap = Sp.droppedMeshTypeScale * Yp;
+       } = TT.pY.getState(UT, "itemState"), kT = (0, XT.b)() * HT, lT = gT.droppedMeshTypeScale * kT;
```

#### 777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6481` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5690) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6481)

```diff
-       pp.Yk.vJ(ip, "hidingMeshManager", {
+       TT.pY.YV(UT, "hidingMeshManager", {
```

#### 778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6487` → after: `L5696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5696) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6487)

```diff
-             const xp = pp.WU.EQ;
+             const nT = TT.GB.mV;
```

#### 779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6489` → after: `L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5698) · [Before (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6489)

```diff
-             xp.setEntityId(Op, ip), xp.setScale(Op, Ap, Ap, Ap), xp.eC(Op, !0);
+             nT.setEntityId(WT, UT), nT.setScale(WT, lT, lT, lT), nT.Qy(WT, !0);
```

#### 780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6491` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5700) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6491)

```diff
-               Yk: Lp
+               pY: HT
```

#### 781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6493-L6497` → after: `L5702-L5706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5702-L5706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5702-L5706) · [Before (L6493-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6493-L6497)

```diff
-             Lp.vJ(ip, Lp.names.mesh, {
-               FQ: Op,
-               iOp: xp.QOp(Op, 0),
-               offset: mp().pp(0, null !== (Ip = null === cp || void 0 === cp ? void 0 : cp.yOffset) && void 0 !== Ip ? Ip : Sp.droppedMeshOffset * Yp + .05 * Math.random(), 0)
-             }), Lp.vJ(ip, "autoRotate"), cp && (Lp.getState(ip, "autoRotate").heading = cp.heading)
+             HT.YV(UT, HT.names.mesh, {
+               zV: WT,
+               PmT: nT.BWT(WT, 0),
+               offset: YT().tm(0, null !== (MT = null === mT || void 0 === mT ? void 0 : mT.yOffset) && void 0 !== MT ? MT : gT.droppedMeshOffset * kT + .05 * Math.random(), 0)
+             }), HT.YV(UT, "autoRotate"), mT && (HT.getState(UT, "autoRotate").heading = mT.heading)
```

#### 782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6503` → after: `L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5712) · [Before (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6503)

```diff
-             Yk: cp
+             pY: mT
```

#### 783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6505` → after: `L5714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5714) · [Before (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6505)

```diff
-           cp.HJ(ip, cp.names.mesh), cp.HJ(ip, "autoRotate")
+           mT.JV(UT, mT.names.mesh), mT.JV(UT, "autoRotate")
```

#### 784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6508-L6509` → after: `L5717-L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5717-L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5717-L5718) · [Before (L6508-L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6508-L6509)

```diff
-         shadowSize: Dp.g.droppedBlockSize,
-         canSee: !1 !== (null === (op = pp.QJ[pp.NJ]) || void 0 === op || null === (Ip = op[ip]) || void 0 === Ip ? void 0 : Ip.canSee),
+         shadowSize: jT.f.droppedBlockSize,
+         canSee: !1 !== (null === (zT = TT.sV[TT.VV]) || void 0 === zT || null === (MT = zT[UT]) || void 0 === MT ? void 0 : MT.canSee),
```

#### 785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6515` → after: `L5724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5724) · [Before (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6515)

```diff
-       (0, Di.g)().Dy && (pp.qJ("aShaderPackItem", 4), pp.MJ.aShaderPackItem = Pi.Vector4.FromArray(ip))
+       (0, HU.h)().Np && (TT.yV("aShaderPackItem", 4), TT.XV.aShaderPackItem = jU.Vector4.FromArray(UT))
```

#### 786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6527` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5736) · [Before (L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6527)

```diff
-         ...ep.e,
+         ...bT.d,
```

#### 787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6532` → after: `L5741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5741) · [Before (L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6532)

```diff
-         sx: !1,
+         fn: !1,
```

#### 788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6538-L6541` → after: `L5747-L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5747-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5747-L5750) · [Before (L6538-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6538-L6541)

```diff
-       const op = (0, Di.g)();
-       cp && (ip.sideOrientation = ci.b.ClockWiseSideOrientation);
-       const Ip = op.WU.EQ,
-         Sp = op.Dy ? {
+       const zT = (0, HU.h)();
+       mT && (UT.sideOrientation = TU.e.ClockWiseSideOrientation);
+       const MT = zT.GB.mV,
+         gT = zT.Np ? {
```

#### 789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6545` → after: `L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5754) · [Before (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6545)

```diff
-         TA: 16,
+         fl: 16,
```

#### 790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6552` → after: `L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5761) · [Before (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6552)

```diff
-       }), Ip.setPickableForType(pp, !1), op.WU.LJ(ip), pp
+       }), MT.setPickableForType(TT, !1), zT.GB.fV(UT), TT
```

#### 791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6562` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5771) · [Before (L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6562)

```diff
-       const Ip = (0, Ui.h)(ip, cp),
+       const MT = (0, pU.n)(UT, mT),
```

#### 792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6566` → after: `L5775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5775) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6566)

```diff
-       return op && (Sp.color = (0, sp.r)(Ip.positions.length / 3, sp.e)), (0, Oi.o)((0, Di.g)().WU, pp, {
+       return zT && (gT.color = (0, DT.l)(MT.positions.length / 3, DT.b)), (0, UU.m)((0, HU.h)().GB, TT, {
```

#### 793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6574` → after: `L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5783) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6574)

```diff
-       }, (() => new Pi.Vector4(0, 1 - dp.e, 1, dp.e)));
+       }, (() => new jU.Vector4(0, 1 - iT.b, 1, iT.b)));
```

#### 794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6577` → after: `L5786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5786) · [Before (L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6577)

```diff
-       return !pp || "object" !== typeof pp || Array.isArray(pp) ? null : "animTextures" in pp ? pp : null
+       return !TT || "object" !== typeof TT || Array.isArray(TT) ? null : "animTextures" in TT ? TT : null
```

#### 795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6582-L6585` → after: `L5791-L5794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5791-L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5791-L5794) · [Before (L6582-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6582-L6585)

```diff
-       const Op = `cuboidBlock|${cp.name}|${ip.key}|${(0,Kp.k)(pp)}`;
-       if ((0, Di.g)().WU.EQ.hasType(Op)) return Op;
-       const op = Ji(Op, ip, Ni, (0, Ui.r)(ip, Bi));
-       return op.material = cp, (0, bp.f)(op), op.eC(!1), op.Ow = !1, fi.set(Op, op), li(Op, op, pp, Qi)
+       const WT = `cuboidBlock|${mT.name}|${UT.key}|${(0,oT.i)(TT)}`;
+       if ((0, HU.h)().GB.mV.hasType(WT)) return WT;
+       const zT = yU(WT, UT, IU, (0, pU.y)(UT, XU));
+       return zT.material = mT, (0, VT.k)(zT), zT.Qy(!1), zT.QZ = !1, sU.set(WT, zT), tU(WT, zT, TT, aU)
```

#### 796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6590-L6592` → after: `L5799-L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5799-L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5799-L5801) · [Before (L6590-L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6590-L6592)

```diff
-       if (pp.WU.yU || !(0, dp.i)()) return !0;
-       const ip = Hp.b.getBlockAtlasMaterial(pp.WU.Gl(), !1, !1),
-         cp = fi.get(bi(!1, Ui.b, ip));
+       if (TT.GB.NB || !(0, iT.h)()) return !0;
+       const UT = qT.e.getBlockAtlasMaterial(TT.GB.KF(), !1, !1),
+         mT = sU.get(FU(!1, pU.e, UT));
```

#### 797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6595-L6596` → after: `L5804-L5805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5804-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5804-L5805) · [Before (L6595-L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6595-L6596)

```diff
-         if (!ip || pp.uR()) return !1;
-         const cp = new((0, Vp.e)().SubMesh)(0, 0, 0, 0, 0, pp, void 0, !1, !1),
+         if (!UT || TT.bJ()) return !1;
+         const mT = new((0, AT.d)().SubMesh)(0, 0, 0, 0, 0, TT, void 0, !1, !1),
```

#### 798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6610-L6611` → after: `L5819-L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5819-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5819-L5820) · [Before (L6610-L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6610-L6611)

```diff
-         pp.once("LP", (() => {
-           const Op = pp.WU.Gl().onAfterRenderObservable;
+         TT.once("Cl", (() => {
+           const WT = TT.GB.KF().onAfterRenderObservable;
```

#### 799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6631` → after: `L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5840) · [Before (L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6631)

```diff
-       return Array.isArray(pp) ? Pi.Zy.FromArray(pp) : new Pi.Zy(pp, pp, pp)
+       return Array.isArray(TT) ? jU.JB.FromArray(TT) : new jU.JB(TT, TT, TT)
```

#### 800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6636-L6637` → after: `L5845-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5845-L5846) · [Before (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6636-L6637)

```diff
-         this.bakeInScaling = void 0, this.name = void 0, this.pw = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
-         const xp = (0, Di.d)().UW.metadatas[pp];
+         this.bakeInScaling = void 0, this.name = void 0, this.XZ = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
+         const nT = (0, HU.d)().DL.metadatas[TT];
```

#### 801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6639` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5848) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6639)

```diff
-         this.bakeInScaling = 1, this.name = pp, this.pw = ip, this.weight = null !== (cp = xp.weight) && void 0 !== cp ? cp : 1, this.heldItemScale = null !== (Op = xp.heldItemScale) && void 0 !== Op ? Op : 1, this.stackable = null === (op = xp.stackable) || void 0 === op || op,  … [truncated]
+         this.bakeInScaling = 1, this.name = TT, this.XZ = UT, this.weight = null !== (mT = nT.weight) && void 0 !== mT ? mT : 1, this.heldItemScale = null !== (WT = nT.heldItemScale) && void 0 !== WT ? WT : 1, this.stackable = null === (zT = nT.stackable) || void 0 === zT || zT,  … [truncated]
```

#### 802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6641-L6642` → after: `L5850-L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5850-L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5850-L5851) · [Before (L6641-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6641-L6642)

```diff
-           type: Tp.e.ITEM
-         }, this.modelSource = tp.d.getModel(this.modelDefault.name, Tp.e.ITEM), this.displayName = pp
+           type: FT.d.ITEM
+         }, this.modelSource = fT.e.getModel(this.modelDefault.name, FT.d.ITEM), this.displayName = TT
```

#### 803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6665` → after: `L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5874) · [Before (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6665)

```diff
-         return (0, Kp.k)(pp.flippedWinding)
+         return (0, oT.i)(TT.flippedWinding)
```

#### 804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6669-L6671` → after: `L5878-L5880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5878-L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5878-L5880) · [Before (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6669-L6671)

```diff
-           const Ip = `item|${pp}|${ip}|${cp.uniqueId}`;
-           cp.material || console.error(`${pp} thin base has no material`);
-           const Sp = cp.clone(`${pp}ThinBase|${ip}`, null);
+           const MT = `item|${TT}|${UT}|${mT.uniqueId}`;
+           mT.material || console.error(`${TT} thin base has no material`);
+           const gT = mT.clone(`${TT}ThinBase|${UT}`, null);
```

#### 805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6678` → after: `L5887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5887) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6678)

```diff
-         const Op = (0, Di.g)().WU.EQ,
+         const WT = (0, HU.h)().GB.mV,
```

#### 806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6680-L6681` → after: `L5889-L5890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5889-L5890) · [Before (L6680-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6680-L6681)

```diff
-         if (Op.set(op, "aLightLevels", Ii.c), Op.set(op, "aOpacity", 1), (0, Di.g)().Dy) {
-           const cp = pp.sx ? ii.d.sx : pp.dropped ? ii.d.dropped : 0;
+         if (WT.set(zT, "aLightLevels", WU.b), WT.set(zT, "aOpacity", 1), (0, HU.h)().Np) {
+           const mT = TT.fn ? RT.c.fn : TT.dropped ? RT.c.dropped : 0;
```

#### 807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6690` → after: `L5899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5899) · [Before (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6690)

```diff
-         return [(0, ii.k)(this.Tl() | pp, (0, jp.e)(ip)), ...this.shaderPackLocalFrame()]
+         return [(0, RT.m)(this.uF() | TT, (0, OT.b)(UT)), ...this.shaderPackLocalFrame()]
```

#### 808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6693-L6694` → after: `L5902-L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5902-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5902-L5903) · [Before (L6693-L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6693-L6694)

```diff
-         const pp = Op.e[this.name];
-         if (null === pp || void 0 === pp || !pp.blockModelItem) return [Jp.d / this.bakeInScaling, 0, 0];
+         const TT = WT.g[this.name];
+         if (null === TT || void 0 === TT || !TT.blockModelItem) return [IT.b / this.bakeInScaling, 0, 0];
```

#### 809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6700` → after: `L5909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5909) · [Before (L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6700)

```diff
-         } = (0, Jp.j)((0, Jp.r)(pp));
+         } = (0, IT.j)((0, IT.l)(TT));
```

#### 810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6704` → after: `L5913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5913) · [Before (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6704)

```diff
-         (0, Di.g)().Dy && (pp.MJ.aShaderPackItem = Pi.Vector4.FromArray(this.shaderPackItem(ip, cp)))
+         (0, HU.h)().Np && (TT.XV.aShaderPackItem = jU.Vector4.FromArray(this.shaderPackItem(UT, mT)))
```

#### 811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6713` → after: `L5922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5922) · [Before (L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6713)

```diff
-         const ip = Op.e[this.name],
+         const UT = WT.g[this.name],
```

#### 812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6715` → after: `L5924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5924) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6715)

```diff
-         return cp && ip.blockModelItem ? cp * this.bakeInScaling / (0, Jp.g)(ip) : 0
+         return mT && UT.blockModelItem ? mT * this.bakeInScaling / (0, IT.f)(UT) : 0
```

#### 813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6722-L6724` → after: `L5931-L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5931-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5931-L5933) · [Before (L6722-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6722-L6724)

```diff
-         const Ip = (0, Di.g)().WU.EQ,
-           Sp = null !== (Op = qp.r[ip]) && void 0 !== Op ? Op : qp.r.None;
-         Ip.set(pp, "aEnchantmentColour", Sp.r, Sp.g, Sp.b), Ip.set(pp, "aEnchantmentSpeed", null !== (op = Wp.jb[ip]) && void 0 !== op ? op : Wp.jb.None)
+         const MT = (0, HU.h)().GB.mV,
+           gT = null !== (WT = xT.p[UT]) && void 0 !== WT ? WT : xT.p.None;
+         MT.set(TT, "aEnchantmentColour", gT.r, gT.g, gT.b), MT.set(TT, "aEnchantmentSpeed", null !== (zT = pT.yb[UT]) && void 0 !== zT ? zT : pT.yb.None)
```

#### 814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6732` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5941) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6732)

```diff
-           cp.MJ.aEnchantmentColour = null !== (Op = qp.r[pp]) && void 0 !== Op ? Op : qp.r.None, cp.MJ.aEnchantmentSpeed = null !== (op = Wp.jb[pp]) && void 0 !== op ? op : Wp.jb.None, this._markForShaderPack(cp, wi, pp)
+           mT.XV.aEnchantmentColour = null !== (WT = xT.p[TT]) && void 0 !== WT ? WT : xT.p.None, mT.XV.aEnchantmentSpeed = null !== (zT = pT.yb[TT]) && void 0 !== zT ? zT : pT.yb.None, this._markForShaderPack(mT, BU, TT)
```

#### 815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6742-L6743` → after: `L5951-L5952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5951-L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5951-L5952) · [Before (L6742-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6742-L6743)

```diff
-           const cp = (0, Oi.p)((0, Di.g)().WU, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return cp.ei = Gi(pp), this._attachNewMeshInstanceToParent(cp, ip), cp
+           const mT = (0, UU.n)((0, HU.h)().GB, `${this.name}AbstractMeshParent${this._meshCounter++}`);
+           return mT.gp = rU(TT), this._attachNewMeshInstanceToParent(mT, UT), mT
```

#### 816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6746-L6747` → after: `L5955-L5956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5955-L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5955-L5956) · [Before (L6746-L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6746-L6747)

```diff
-           const cp = (0, Oi.p)((0, Di.g)().WU, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return cp.ei = Gi(pp), this._sourceMeshLoadFailed || this._meshParents.push({
+           const mT = (0, UU.n)((0, HU.h)().GB, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
+           return mT.gp = rU(TT), this._sourceMeshLoadFailed || this._meshParents.push({
```

#### 817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6754` → after: `L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5963) · [Before (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6754)

```diff
-         pp.qJ("aEnchantmentColour", 3), pp.qJ("aEnchantmentSpeed", 1), pp.MJ.aEnchantmentColour = (0, qp.i)(0, 0, 0), pp.MJ.aEnchantmentSpeed = 0, (0, bp.f)(pp), (0, hp.c)(pp), qi(pp, this.shaderPackItem(0, void 0))
+         TT.yV("aEnchantmentColour", 3), TT.yV("aEnchantmentSpeed", 1), TT.XV.aEnchantmentColour = (0, xT.g)(0, 0, 0), TT.XV.aEnchantmentSpeed = 0, (0, VT.k)(TT), (0, uT.b)(TT), YU(TT, this.shaderPackItem(0, void 0))
```

#### 818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6762` → after: `L5971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5971) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6762)

```diff
-           const op = Op === Tp.k.BASE64;
+           const zT = WT === FT.j.BASE64;
```

#### 819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6764` → after: `L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5973) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6764)

```diff
-             source: op ? cp : "",
+             source: zT ? mT : "",
```

#### 820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6778` → after: `L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5987) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6778)

```diff
-             return pp && tp.d.getModelOverride(pp.name) ? ip(tp.d.getModel(pp.name, pp.type, !0)) : null
+             return TT && fT.e.getModelOverride(TT.name) ? UT(fT.e.getModel(TT.name, TT.type, !0)) : null
```

#### 821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6787` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5996) · [Before (L6787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6787)

```diff
-         } = this.modelGlbLoad(ip), Ip = (await (0, Bp.e)(cp, pp, Op, op)).meshes.filter((pp => pp.getTotalVertices() > 0));
+         } = this.modelGlbLoad(UT), MT = (await (0, QT.b)(mT, TT, WT, zT)).meshes.filter((TT => TT.getTotalVertices() > 0));
```

#### 822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6791-L6792` → after: `L6000-L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6000-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6000-L6001) · [Before (L6791-L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6791-L6792)

```diff
-         const Sp = (0, Oi.k)(Ip, !ip, !1);
-         return Sp.name = `${this.name}GlbModel`, Sp.Ow = !1, (0, sp.j)(Sp, this.bakeInScaling), Sp
+         const gT = (0, UU.l)(MT, !UT, !1);
+         return gT.name = `${this.name}GlbModel`, gT.QZ = !1, (0, DT.g)(gT, this.bakeInScaling), gT
```

#### 823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6797` → after: `L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6006) · [Before (L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6797)

```diff
-         this.loadModel(this.pw, !!ip).then((pp => {
+         this.loadModel(this.XZ, !!UT).then((TT => {
```

#### 824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6800-L6803` → after: `L6009-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6009-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6009-L6012) · [Before (L6800-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6800-L6803)

```diff
-             for (const ip of pp.material.u9) ip.name = `${this.name}ItemMat`;
-           (0, zp.e)(pp.material, (pp => {
-             (0, Si.J)((0, Si.$)(pp)), (0, rp.e)(pp, (() => {
-               (0, Si.n)((0, Si.$)(pp), np.i)
+             for (const UT of TT.material.w6) UT.name = `${this.name}ItemMat`;
+           (0, hT.d)(TT.material, (TT => {
+             (0, zU.C)((0, zU.R)(TT)), (0, NT.e)(TT, (() => {
+               (0, zU.m)((0, zU.R)(TT), rT.c)
```

#### 825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6805` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6014) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6805)

```diff
-           })), pp.eC(!1), this._registerSourceMeshBuffers(pp), (0, zp.e)(pp.material, rp.i), this._sourceMesh = pp;
+           })), TT.Qy(!1), this._registerSourceMeshBuffers(TT), (0, hT.d)(TT.material, NT.f), this._sourceMesh = TT;
```

#### 826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6810` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6019) · [Before (L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6810)

```diff
-             of this._meshParents) ip.uR() || this._attachNewMeshInstanceToParent(ip, Op);
+             of this._meshParents) UT.bJ() || this._attachNewMeshInstanceToParent(UT, WT);
```

#### 827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6831-L6833` → after: `L6040-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6040-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6040-L6042) · [Before (L6831-L6833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6831-L6833)

```diff
-           WU: Op
-         } = (0, Di.g)();
-         Op.Iw(cp, !1), (0, xi.r)(cp, 0, 0, 0), null === ip || void 0 === ip || ip(pp, cp)
+           GB: WT
+         } = (0, HU.h)();
+         WT.FZ(mT, !1), (0, MU.n)(mT, 0, 0, 0), null === UT || void 0 === UT || UT(TT, mT)
```

#### 828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6839` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6048) · [Before (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6839)

```diff
-               Op = cp.UW.metadatas;
+               WT = mT.DL.metadatas;
```

#### 829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6842` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6051) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6842)

```diff
-               for (const ip in (0, yp.W)(Up.o)) {
+               for (const UT in (0, BT.eb)(ZT.s)) {
```

#### 830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6852` → after: `L6061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6061) · [Before (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6852)

```diff
-             return null !== (ip = Zi.byRoot.get(pp)) && void 0 !== ip ? ip : zi
+             return null !== (UT = SU.byRoot.get(TT)) && void 0 !== UT ? UT : GU
```

#### 831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6864` → after: `L6073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6073) · [Before (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6864)

```diff
-         const cp = (0, Di.d)().UW.metadatas[pp];
+         const mT = (0, HU.d)().DL.metadatas[TT];
```

#### 832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6869` → after: `L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6078) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6869)

```diff
-         return null !== (pp = (0, Di.g)().UW.A4(this.id)) && void 0 !== pp ? pp : 0
+         return null !== (TT = (0, HU.h)().DL.j_(this.id)) && void 0 !== TT ? TT : 0
```

#### 833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6874-L6875` → after: `L6083-L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6083-L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6083-L6084) · [Before (L6874-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6874-L6875)

```diff
-         super(pp, ip), this.cuboidShape = Ui.b, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const cp = Op.e[pp];
+         super(TT, UT), this.cuboidShape = pU.e, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
+         const mT = WT.g[TT];
```

#### 834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6891` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6100) · [Before (L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6891)

```diff
-         if (this.usesBlockAtlasMaterial()) Op = Hp.b.getBlockAtlasMaterial(pp, this.transTex, null !== (op = this.unlitStandaloneMesh) && void 0 !== op && op);
+         if (this.usesBlockAtlasMaterial()) WT = qT.e.getBlockAtlasMaterial(TT, this.transTex, null !== (zT = this.unlitStandaloneMesh) && void 0 !== zT && zT);
```

#### 835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6895-L6896` → after: `L6104-L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6104-L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6104-L6105) · [Before (L6895-L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6895-L6896)

```diff
-             name: `${ip}BlockMaterial`,
-             pw: pp,
+             name: `${UT}BlockMaterial`,
+             XZ: TT,
```

#### 836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6902` → after: `L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6111) · [Before (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6902)

```diff
-                 transparencyMode: Si.k.alphaTest,
+                 transparencyMode: zU.j.alphaTest,
```

#### 837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6908` → after: `L6117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6117) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6908)

```diff
-               (0, ap.d)(pp, !0), (0, Si.J)(pp)
+               (0, CT.c)(TT, !0), (0, zU.C)(TT)
```

#### 838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6923` → after: `L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6132) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6923)

```diff
-           sx: !0
+           fn: !0
```

#### 839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6928` → after: `L6137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6137) · [Before (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6928)

```diff
-         return this._needsHeldBase(pp) ? `${ip}|held` : ip
+         return this._needsHeldBase(TT) ? `${UT}|held` : UT
```

#### 840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6931` → after: `L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6140) · [Before (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6931)

```diff
-         if (!pp.sx || this._canShareThinBase()) return !1;
+         if (!TT.fn || this._canShareThinBase()) return !1;
```

#### 841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6941` → after: `L6150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6150) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6941)

```diff
-         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, dp.i)() && null !== (pp = null === (ip = this._perFaceAtlasIdx(!1)) || void 0 === ip ? void 0 : ip.every(Number.isFinite)) && void 0 !== pp && pp, this._shareThinBase
+         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, iT.h)() && null !== (TT = null === (UT = this._perFaceAtlasIdx(!1)) || void 0 === UT ? void 0 : UT.every(Number.isFinite)) && void 0 !== TT && TT, this._shareThinBase
```

#### 842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6948-L6949` → after: `L6157-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6157-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6157-L6158) · [Before (L6948-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6948-L6949)

```diff
-         const Op = this._perFaceAtlasIdx(cp.sx),
-           op = (0, Di.g)().WU.EQ;
+         const WT = this._perFaceAtlasIdx(mT.fn),
+           zT = (0, HU.h)().GB.mV;
```

#### 843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6953` → after: `L6162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6162) · [Before (L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6953)

```diff
-         const ip = pp ? Gp : gp,
+         const UT = TT ? GT : ST,
```

#### 844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6960` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6169) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6960)

```diff
-           return ip.map((pp => Op.p[(0, wp.p)(cp[op[pp]])]))
+           return UT.map((TT => WT.s[(0, cT.o)(mT[zT[TT]])]))
```

#### 845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6962` → after: `L6171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6171) · [Before (L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6962)

```diff
-         const Ip = "string" === typeof cp ? cp : Ti(cp);
+         const MT = "string" === typeof mT ? mT : QU(mT);
```

#### 846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6964` → after: `L6173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6173) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6964)

```diff
-           const pp = Op.p[(0, wp.p)(Ip)];
+           const TT = WT.s[(0, cT.o)(MT)];
```

#### 847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6980-L6982` → after: `L6189-L6191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6189-L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6189-L6191) · [Before (L6980-L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6980-L6982)

```diff
-             WU: op
-           } = (0, Di.g)();
-         op.Iw(Op, !1);
+             GB: zT
+           } = (0, HU.h)();
+         zT.FZ(WT, !1);
```

#### 848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6984` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6193) · [Before (L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6984)

```diff
-         return (0, xi.r)(Op, 0, 0, 0), Op.ei.set(Ip.x, Ip.y, Ip.z), Op.MJ.aLightLevels === (null === (pp = this._sourceMesh.MJ) || void 0 === pp ? void 0 : pp.aLightLevels) && (Op.MJ.aLightLevels = (0, Ii.j)()), null === cp || void 0 === cp || cp(Op, Op), Op
+         return (0, MU.n)(WT, 0, 0, 0), WT.gp.set(MT.x, MT.y, MT.z), WT.XV.aLightLevels === (null === (TT = this._sourceMesh.XV) || void 0 === TT ? void 0 : TT.aLightLevels) && (WT.XV.aLightLevels = (0, WU.l)()), null === mT || void 0 === mT || mT(WT, WT), WT
```

#### 849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6990` → after: `L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6199) · [Before (L6990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6990)

```diff
-           const ip = (0, Di.g)().WU.Gl();
+           const UT = (0, HU.h)().GB.KF();
```

#### 850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6992` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6201) · [Before (L6992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6992)

```diff
-             materialOverride: Hp.b.getBlockAtlasMaterialForGrowing(ip, this.transTex, null !== (pp = this.unlitStandaloneMesh) && void 0 !== pp && pp)
+             materialOverride: qT.e.getBlockAtlasMaterialForGrowing(UT, this.transTex, null !== (TT = this.unlitStandaloneMesh) && void 0 !== TT && TT)
```

#### 851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6997-L6999` → after: `L6206-L6208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6206-L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6206-L6208) · [Before (L6997-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L6997-L6999)

```diff
-             WU: cp
-           } = (0, Di.g)();
-         return cp.Iw(ip, !1), (0, xi.r)(ip, 0, 0, 0), ip
+             GB: mT
+           } = (0, HU.h)();
+         return mT.FZ(UT, !1), (0, MU.n)(UT, 0, 0, 0), UT
```

#### 852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7004` → after: `L6213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6213) · [Before (L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7004)

```diff
-           sx: cp = !1,
+           fn: mT = !1,
```

#### 853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7007` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6216) · [Before (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7007)

```diff
-         } = null !== pp && void 0 !== pp ? pp : {}, Ip = [], Sp = (0, dp.i)(), xp = this._perFaceAtlasIdx(cp);
+         } = null !== TT && void 0 !== TT ? TT : {}, MT = [], gT = (0, iT.h)(), nT = this._perFaceAtlasIdx(mT);
```

#### 854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7011-L7012` → after: `L6220-L6221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6220-L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6220-L6221) · [Before (L7011-L7012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7011-L7012)

```diff
-               ip = (0, dp.f)(pp, 0, Sp),
-               cp = (0, dp.f)(pp, 1, Sp);
+               UT = (0, iT.e)(TT, 0, gT),
+               mT = (0, iT.e)(TT, 1, gT);
```

#### 855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7016-L7018` → after: `L6225-L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6225-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6225-L6227) · [Before (L7016-L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7016-L7018)

```diff
-         const Lp = xp ? (0, Ui.r)(Op, xp) : void 0,
-           Yp = Ji(`${this.name}${cp?"Held":""}Block`, Op, Ip, Lp, op);
-         return Yp.material = null !== ip && void 0 !== ip ? ip : this.meshMaterial, ip || ((0, bp.f)(Yp), (0, hp.c)(Yp), qi(Yp, this.shaderPackItem(0, void 0))), Yp.eC(!1), Yp.Ow = !1, Yp
+         const HT = nT ? (0, pU.y)(WT, nT) : void 0,
+           kT = yU(`${this.name}${mT?"Held":""}Block`, WT, MT, HT, zT);
+         return kT.material = null !== UT && void 0 !== UT ? UT : this.meshMaterial, UT || ((0, VT.k)(kT), (0, uT.b)(kT), YU(kT, this.shaderPackItem(0, void 0))), kT.Qy(!1), kT.QZ = !1, kT
```

#### 856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7023` → after: `L6232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6232) · [Before (L7023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7023)

```diff
-         super(pp, ip), this.type = "SlabBlock", this.cuboidShape = Ui.f
+         super(TT, UT), this.type = "SlabBlock", this.cuboidShape = pU.g
```

#### 857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7028` → after: `L6237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6237) · [Before (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7028)

```diff
-         super(pp, ip), this.type = "StairsBlock", this.cuboidShape = Ui.g
+         super(TT, UT), this.type = "StairsBlock", this.cuboidShape = pU.j
```

#### 858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7034-L7036` → after: `L6243-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6243-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6243-L6245) · [Before (L7034-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7034-L7036)

```diff
-         super(pp, ip), this.droppedMeshTypeScale = .8 * Dp.g.droppedBlockSize, this.droppedMeshOffset = 1.3 * Dp.g.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (cp = this.heldItemScale) && void 0 !== cp ? cp : 1);
-         const op = Op.e[pp];
-         op.blockModelItem && (console.assert(void 0 !== op.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${pp}`), this.modelDefault = {
+         super(TT, UT), this.droppedMeshTypeScale = .8 * jT.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * jT.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (mT = this.heldItemScale) && void 0 !== mT ? mT : 1);
+         const zT = WT.g[TT];
+         zT.blockModelItem && (console.assert(void 0 !== zT.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${TT}`), this.modelDefault = {
```

#### 859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7038-L7039` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6247-L6248) · [Before (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7038-L7039)

```diff
-           type: Tp.e.BLOCK
-         }, this.modelSource = tp.d.getModel(this.modelDefault.name, Tp.e.BLOCK)), this.type = "TwoDBlock"
+           type: FT.d.BLOCK
+         }, this.modelSource = fT.e.getModel(this.modelDefault.name, FT.d.BLOCK)), this.type = "TwoDBlock"
```

#### 860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7045` → after: `L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6254) · [Before (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7045)

```diff
-         super(pp, ip), this.droppedMeshTypeScale = .8 * Dp.g.droppedBlockSize, this.droppedMeshOffset = 1.3 * Dp.g.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (cp = this.heldItemScale) && void 0 !== cp ? cp : 1), this.type = "TwoDItem"
+         super(TT, UT), this.droppedMeshTypeScale = .8 * jT.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * jT.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (mT = this.heldItemScale) && void 0 !== mT ? mT : 1), this.type = "TwoDItem"
```

#### 861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7050` → after: `L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6259) · [Before (L7050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7050)

```diff
-         super(pp, ip), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = Up.m[pp].armourReduction
+         super(TT, UT), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = ZT.n[TT].armourReduction
```

#### 862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7055` → after: `L6264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6264) · [Before (L7055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7055)

```diff
-       (0, Qp.j)(), Di.k.itemsClient = Ic, Di.k.blocksClient = Sc, Di.k.nonBlocksClient = xc
+       (0, XT.g)(), HU.j.itemsClient = Um, HU.j.blocksClient = mm, HU.j.nonBlocksClient = Wm
```

#### 863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7064-L7066` → after: `L6273-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6273-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6273-L6275) · [Before (L7064-L7066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7064-L7066)

```diff
-             super(pp, ip), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
-             const Lp = Up.m[pp];
-             this.gunType = Lp.gunType, this.scopeType = Lp.scopeType, this.fireRate = Lp.fireRate, this.fireRateWithHeldTouch = Lp.fireRateWithHeldTouch, this.equipDelay = Lp.equipDelay, this.damage = Lp.damage, this.shotPelletCount = Lp.shotPelletCount, this.msPerRound = Lp.msPe … [truncated]
+             super(TT, UT), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
+             const HT = ZT.n[TT];
+             this.gunType = HT.gunType, this.scopeType = HT.scopeType, this.fireRate = HT.fireRate, this.fireRateWithHeldTouch = HT.fireRateWithHeldTouch, this.equipDelay = HT.equipDelay, this.damage = HT.damage, this.shotPelletCount = HT.shotPelletCount, this.msPerRound = HT.msPe … [truncated]
```

#### 864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7068-L7069` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6277-L6278) · [Before (L7068-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7068-L7069)

```diff
-                 name: `${pp}BulletMeshMaterial`,
-                 pw: ip,
+                 name: `${TT}BulletMeshMaterial`,
+                 XZ: UT,
```

#### 865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7078-L7080` → after: `L6287-L6289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6287-L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6287-L6289) · [Before (L7078-L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7078-L7080)

```diff
-                 WU: Dp
-               } = (0, Di.g)();
-             this.bulletCasingMesh = (0, Oi.o)(Dp, `${this.name}BulletCasingMesh`, (0, Yi.e)({
+                 GB: jT
+               } = (0, HU.h)();
+             this.bulletCasingMesh = (0, UU.m)(jT, `${this.name}BulletCasingMesh`, (0, nU.b)({
```

#### 866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7084` → after: `L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6293) · [Before (L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7084)

```diff
-             })), this.bulletCasingMesh.material = Yp, this.bulletCasingMesh.Ow = !1;
+             })), this.bulletCasingMesh.material = kT, this.bulletCasingMesh.QZ = !1;
```

#### 867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7086-L7087` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6295-L6296) · [Before (L7086-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7086-L7087)

```diff
-               name: `${pp}BulletHitBillboard`,
-               pw: ip,
+               name: `${TT}BulletHitBillboard`,
+               XZ: UT,
```

#### 868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7094` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6303) · [Before (L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7094)

```diff
-             this.bulletHitBillboardPlane = (0, Oi.o)(Dp, `${this.name}BulletHitBillboardPlane`, (0, Yi.i)({
+             this.bulletHitBillboardPlane = (0, UU.m)(jT, `${this.name}BulletHitBillboardPlane`, (0, nU.g)({
```

#### 869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7097` → after: `L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6306) · [Before (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7097)

```diff
-             })), this.bulletHitBillboardPlane.Ow = !1, this.bulletHitBillboardPlane.material = Ap;
+             })), this.bulletHitBillboardPlane.QZ = !1, this.bulletHitBillboardPlane.material = lT;
```

#### 870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7099-L7100` → after: `L6308-L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6308-L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6308-L6309) · [Before (L7099-L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7099-L7100)

```diff
-               name: `${pp}BulletMeshMaterial`,
-               pw: ip,
+               name: `${TT}BulletMeshMaterial`,
+               XZ: UT,
```

#### 871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7109` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6318) · [Before (L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7109)

```diff
-             this.movingBulletMesh = (0, Oi.o)(Dp, `${this.name}MovingBulletMesh`, (0, Yi.e)({
+             this.movingBulletMesh = (0, UU.m)(jT, `${this.name}MovingBulletMesh`, (0, nU.b)({
```

#### 872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7113` → after: `L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6322) · [Before (L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7113)

```diff
-             })), this.movingBulletMesh.material = Pp, this.movingBulletMesh.Ow = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
+             })), this.movingBulletMesh.material = LT, this.movingBulletMesh.QZ = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
```

#### 873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7132` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6341) · [Before (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7132)

```diff
-             super(pp, ip), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = Up.m[pp].harvests, this.multiplier = Up.m[pp].multiplier, this.level = Up.m[pp].level
+             super(TT, UT), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = ZT.n[TT].harvests, this.multiplier = ZT.n[TT].multiplier, this.level = ZT.n[TT].level
```

#### 874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7139-L7140` → after: `L6348-L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6348-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6348-L6349) · [Before (L7139-L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7139-L7140)

```diff
-             super(pp, ip), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (cp = (0, vp.g)(pp)) && void 0 !== cp ? cp : [255, 255, 255];
-             const Op = `Wood ${(0,Wp.vb)(pp)}`;
+             super(TT, UT), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (mT = (0, vT.d)(TT)) && void 0 !== mT ? mT : [255, 255, 255];
+             const WT = `Wood ${(0,pT.Mb)(TT)}`;
```

#### 875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7142-L7143` → after: `L6351-L6352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6351-L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6351-L6352) · [Before (L7142-L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7142-L7143)

```diff
-               type: Tp.k.HTTP,
-               url: this.isCustom ? `${fp.clientSideServerUrls.staticUrl}/models/${(0,Wp.Mb)((0,Ai.d)().gameNameWithVariation)}/${Op}.glb` : `${fp.clientSideServerUrls.staticUrl}/models/${Op}.glb`
+               type: FT.j.HTTP,
+               url: this.isCustom ? `${PT.clientSideServerUrls.staticUrl}/models/${(0,pT.dc)((0,kU.c)().gameNameWithVariation)}/${WT}.glb` : `${PT.clientSideServerUrls.staticUrl}/models/${WT}.glb`
```

#### 876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7149` → after: `L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6358) · [Before (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7149)

```diff
-               pw: ip
+               XZ: UT
```

#### 877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7153` → after: `L6362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6362) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7153)

```diff
-             } = ep.e;
+             } = bT.d;
```

#### 878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7156` → after: `L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6365) · [Before (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7156)

```diff
-               pw: ip,
+               XZ: UT,
```

#### 879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7160` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6369) · [Before (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7160)

```diff
-                   url: vi[(0, Wp.vb)(pp)],
+                   url: ZU[(0, pT.Mb)(TT)],
```

#### 880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7163` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6372) · [Before (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7163)

```diff
-                   samplingMode: Li.g.nearestNearestMipLinear,
+                   samplingMode: gU.k.nearestNearestMipLinear,
```

#### 881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7165-L7166` → after: `L6374-L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6374-L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6374-L6375) · [Before (L7165-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7165-L7166)

```diff
-                     wrapU: Li.b.clamp,
-                     wrapV: Li.b.clamp
+                     wrapU: gU.e.clamp,
+                     wrapV: gU.e.clamp
```

#### 882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7174` → after: `L6383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6383) · [Before (L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7174)

```diff
-                 (0, Si.n)(pp, Fp.d, {
+                 (0, zU.m)(TT, KT.c, {
```

#### 883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7181` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6390) · [Before (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7181)

```diff
-             super._registerSourceMeshBuffers(pp), pp.qJ("aArmourTint", 4), pp.qJ("aAtlasIdx1", 1), pp.MJ.aArmourTint = (0, qp.n)(...this._armourTint, 0), pp.MJ.aAtlasIdx1 = 0
+             super._registerSourceMeshBuffers(TT), TT.yV("aArmourTint", 4), TT.yV("aAtlasIdx1", 1), TT.XV.aArmourTint = (0, xT.m)(...this._armourTint, 0), TT.XV.aAtlasIdx1 = 0
```

#### 884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7192` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6401) · [Before (L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7192)

```diff
-             const Op = (0, Di.g)().WU.EQ,
+             const WT = (0, HU.h)().GB.mV,
```

#### 885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7213` → after: `L6422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6422) · [Before (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7213)

```diff
-       if (pp in Op.e) {
+       if (TT in WT.g) {
```

#### 886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7215-L7216` → after: `L6424-L6425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6424-L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6424-L6425) · [Before (L7215-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7215-L7216)

```diff
-         const op = null === (Sp = Op.e[pp].model) || void 0 === Sp ? void 0 : Sp.split("|")[0];
-         Ip = Op.e[pp].model || Op.e[pp].twoDBlockItem ? Lc[op] ? new Lc[op](pp, cp) : new ic(pp, cp) : new Ki(pp, cp), Sc[pp] = Ip, Sc[ip] = Ip
+         const zT = null === (gT = WT.g[TT].model) || void 0 === gT ? void 0 : gT.split("|")[0];
+         MT = WT.g[TT].model || WT.g[TT].twoDBlockItem ? zm[zT] ? new zm[zT](TT, mT) : new oU(TT, mT) : new EU(TT, mT), mm[TT] = MT, mm[UT] = MT
```

#### 887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7221` → after: `L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6430) · [Before (L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7221)

```diff
-   38357: (pp, ip, cp) => {
+   38282: (TT, UT, mT) => {
```

#### 888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7223` → after: `L6432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6432) · [Before (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7223)

```diff
-       c: () => tp,
+       b: () => fT,
```

#### 889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7225` → after: `L6434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6434) · [Before (L7225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7225)

```diff
-       h: () => vp
+       g: () => vT
```

#### 890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7227-L7231` → after: `L6436-L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6436-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6436-L6440) · [Before (L7227-L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7227-L7231)

```diff
-     var Op = cp(37313),
-       op = cp(37667),
-       Ip = cp(38118),
-       Sp = cp(37800),
-       xp = cp(37473);
+     var WT = mT(37185),
+       zT = mT(37552),
+       MT = mT(38036),
+       gT = mT(37708),
+       nT = mT(37351);
```

#### 891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7234` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6443) · [Before (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7234)

```diff
-         this.modelUrl = pp, this.container = ip, this.adoptedNodes = cp, this.pw = Op
+         this.modelUrl = TT, this.container = UT, this.adoptedNodes = mT, this.XZ = WT
```

#### 892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7239` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6448) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7239)

```diff
-         if (!op) throw new Error(`Could not find root node in model: ${Op}`);
+         if (!zT) throw new Error(`Could not find root node in model: ${WT}`);
```

#### 893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7241` → after: `L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6450) · [Before (L7241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7241)

```diff
-         op.ei.set(-op.ei.x, op.ei.y, op.ei.z), Ap(op, Ip);
+         zT.gp.set(-zT.gp.x, zT.gp.y, zT.gp.z), lT(zT, MT);
```

#### 894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7251` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6460) · [Before (L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7251)

```diff
-         return Ip.ei.set(-Ip.ei.x, Ip.ei.y, Ip.ei.z), {
+         return MT.gp.set(-MT.gp.x, MT.gp.y, MT.gp.z), {
```

#### 895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7262` → after: `L6471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6471) · [Before (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7262)

```diff
-         if (0 === Op.length) return void console.warn(`Mesh "${cp}" not found in model: ${this.modelUrl}`);
+         if (0 === WT.length) return void console.warn(`Mesh "${mT}" not found in model: ${this.modelUrl}`);
```

#### 896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7264` → after: `L6473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6473) · [Before (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7264)

```diff
-         if (!op) throw new Error(`Could not merge the meshes named ${cp} in model: ${this.modelUrl}`);
+         if (!zT) throw new Error(`Could not merge the meshes named ${mT} in model: ${this.modelUrl}`);
```

#### 897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7278` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6487) · [Before (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7278)

```diff
-             const pp = Pp(cp, Ip, this.pw),
+             const TT = LT(mT, MT, this.XZ),
```

#### 898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7283` → after: `L6492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6492) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7283)

```diff
-         else console.warn(`Node "${cp}" not found in model: ${this.modelUrl}`)
+         else console.warn(`Node "${mT}" not found in model: ${this.modelUrl}`)
```

#### 899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7293` → after: `L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6502) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7293)

```diff
-             const pp = "string" === typeof xp ? xp : xp.nodeName;
+             const TT = "string" === typeof nT ? nT : nT.nodeName;
```

#### 900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7299` → after: `L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6508) · [Before (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7299)

```diff
-         if (0 === Yp.length) return void console.warn(`No descendant meshes under "${Op}" to merge in model: ${this.modelUrl}`);
+         if (0 === kT.length) return void console.warn(`No descendant meshes under "${WT}" to merge in model: ${this.modelUrl}`);
```

#### 901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7313` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6522) · [Before (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7313)

```diff
-         if (!Up) return void console.warn(`Merge failed for "${Op}" in model: ${this.modelUrl}`);
+         if (!ZT) return void console.warn(`Merge failed for "${WT}" in model: ${this.modelUrl}`);
```

#### 902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7319-L7320` → after: `L6528-L6529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6528-L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6528-L6529) · [Before (L7319-L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7319-L7320)

```diff
-           of Pp) null === Wp || Wp.uR() || (Wp.computeWorldMatrix(!0), yp(xp, Wp), Dp(xp, wp.multiply(Wp.getWorldMatrix().clone().invert())));
-         Up.name = op, (0, xp.A)(Up, (() => {
+           of LT) null === pT || pT.bJ() || (pT.computeWorldMatrix(!0), BT(nT, pT), jT(nT, cT.multiply(pT.getWorldMatrix().clone().invert())));
+         ZT.name = zT, (0, nT.t)(ZT, (() => {
```

#### 903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7329` → after: `L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6538) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7329)

```diff
-         return null !== (ip = null !== (cp = this.container.transformNodes.find((ip => ip.name === pp))) && void 0 !== cp ? cp : this.container.meshes.find((ip => ip.name === pp))) && void 0 !== ip ? ip : null
+         return null !== (UT = null !== (mT = this.container.transformNodes.find((UT => UT.name === TT))) && void 0 !== mT ? mT : this.container.meshes.find((UT => UT.name === TT))) && void 0 !== UT ? UT : null
```

#### 904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7338` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6547) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7338)

```diff
-         for (const ip of [...pp]) ip.uR() || this.adoptedNodes.has(ip) || ip.dispose()
+         for (const UT of [...TT]) UT.bJ() || this.adoptedNodes.has(UT) || UT.dispose()
```

#### 905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7347` → after: `L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6556) · [Before (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7347)

```diff
-       const cp = new Op.Zy,
+       const mT = new WT.JB,
```

#### 906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7349-L7350` → after: `L6558-L6559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6558-L6559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6558-L6559) · [Before (L7349-L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7349-L7350)

```diff
-         Ip = new Op.Zy;
-       ip.decompose(Ip, op, cp), pp.position = cp, pp.rotationQuaternion = op, pp.ei = Ip
+         MT = new WT.JB;
+       UT.decompose(MT, zT, mT), TT.position = mT, TT.rotationQuaternion = zT, TT.gp = MT
```

#### 907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7355` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6564) · [Before (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7355)

```diff
-       ip.position = pp.position.clone(), cp ? ip.rotationQuaternion = new Op.Quaternion(cp.x, cp.y, cp.z, cp.w) : ip.rotation = pp.rotation.clone(), ip.ei = pp.ei.clone()
+       UT.position = TT.position.clone(), mT ? UT.rotationQuaternion = new WT.Quaternion(mT.x, mT.y, mT.z, mT.w) : UT.rotation = TT.rotation.clone(), UT.gp = TT.gp.clone()
```

#### 908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7359` → after: `L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6568) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7359)

```diff
-       return (0, op.f)(ip) ? (0, Ip.p)(ip.WU, pp) : new((0, Sp.e)().TransformNode)(pp, cp)
+       return (0, zT.f)(UT) ? (0, MT.n)(UT.GB, TT) : new((0, gT.d)().TransformNode)(TT, mT)
```

#### 909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7363` → after: `L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6572) · [Before (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7363)

```diff
-       return (0, op.f)(pp[0]) ? (0, Ip.k)(pp, !1) : (0, xp.B)(pp)
+       return (0, zT.f)(TT[0]) ? (0, MT.l)(TT, !1) : (0, nT.u)(TT)
```

#### 910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7371` → after: `L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6580) · [Before (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7371)

```diff
-       return ["Mesh", "LiteMesh"].includes(pp.getClassName()) && pp.getTotalVertices() > 0 ? pp : null
+       return ["Mesh", "LiteMesh"].includes(TT.getClassName()) && TT.getTotalVertices() > 0 ? TT : null
```

#### 911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7391` → after: `L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6600) · [Before (L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7391)

```diff
-   38132: (pp, ip, cp) => {
+   38058: (TT, UT, mT) => {
```

#### 912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7393-L7396` → after: `L6602-L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6602-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6602-L6605) · [Before (L7393-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7393-L7396)

```diff
-       c: () => jp,
-       f: () => lp,
-       j: () => Mp,
-       l: () => Qp,
+       b: () => OT,
+       d: () => yT,
+       h: () => dT,
+       i: () => XT,
```

#### 913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7399` → after: `L6609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6609) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7399)

```diff
-       r: () => Bp,
+       t: () => sT,
```

#### 914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7401-L7402` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6611) · [Before (L7401-L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7401-L7402)

```diff
-       v: () => Xp,
-       y: () => mp
+       x: () => YT
```

#### 915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7404-L7410` → after: `L6613-L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6613-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6613-L6619) · [Before (L7404-L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7404-L7410)

```diff
-     var Op = cp(4341),
-       op = cp(9338),
-       Ip = cp(195),
-       Sp = cp(1251),
-       xp = cp(1927),
-       Lp = cp(3246),
-       Yp = cp(343),
+     var WT = mT(4328),
+       zT = mT(9330),
+       MT = mT(208),
+       gT = mT(1336),
+       nT = mT(2014),
+       HT = mT(3289),
+       kT = mT(375),
```

#### 916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7412-L7417` → after: `L6621-L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6621-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6621-L6626) · [Before (L7412-L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7412-L7417)

```diff
-       Ap = cp(2849),
-       Pp = cp(38086),
-       Wp = cp(37448),
-       yp = cp(37313),
-       Up = cp(640),
-       wp = cp(38134);
+       lT = mT(2875),
+       LT = mT(37993),
+       pT = mT(37321),
+       BT = mT(37185),
+       ZT = mT(653),
+       cT = mT(38066);
```

#### 917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7425-L7427` → after: `L6634-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6634-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6634-L6636) · [Before (L7425-L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7425-L7427)

```diff
-         this.pSystem = void 0, this.startedSystem = !1, this.HP = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.HP = pp;
-         const ip = pp.WU.eJ("breakingParticles", 430);
-         this.pSystem = ip, ip.texture = (0, Wp.s)(pp.WU.Gl(), dp), ip.blendMode = Op.g.Standard, this.pSystem.addColorGradient(1, (0, Pp.n)(255, 255, 255, ep), (0, Pp.n)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, ep, 1), this.pSy … [truncated]
+         this.pSystem = void 0, this.startedSystem = !1, this.Rl = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.Rl = TT;
+         const UT = TT.GB.wV("breakingParticles", 430);
+         this.pSystem = UT, UT.texture = (0, pT.w)(TT.GB.KF(), iT), UT.blendMode = WT.e.Standard, this.pSystem.addColorGradient(1, (0, LT.m)(255, 255, 255, bT), (0, LT.m)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, bT, 1), this.pSy … [truncated]
```

#### 918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7430-L7431` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6639-L6640) · [Before (L7430-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7430-L7431)

```diff
-         if (!pp || null === this.HP.Epp) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
-         const ip = this.HP.Epp,
+         if (!TT || null === this.Rl.aTT) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
+         const UT = this.Rl.aTT,
```

#### 919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7435-L7436` → after: `L6644-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6644-L6645) · [Before (L7435-L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7435-L7436)

```diff
-           } = (0, wp.b)(ip.position, op.e[ip.KV].Ww, 0, this.boxWidth);
-         (0, Pp.v)(this.pSystem, cp, Op), this.updateParticleSystemColour();
+           } = (0, cT.b)(UT.position, zT.g[UT.oR].oZ, 0, this.boxWidth);
+         (0, LT.s)(this.pSystem, mT, WT), this.updateParticleSystemColour();
```

#### 920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7439` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6648) · [Before (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7439)

```diff
-         Ip.x = this.HP.Epp.normal[0] + 1, Ip.y = this.HP.Epp.normal[1] + 1, Ip.z = this.HP.Epp.normal[2] + 1, Sp.x = this.HP.Epp.normal[0] - 1, Sp.y = this.HP.Epp.normal[1] - 1, Sp.z = this.HP.Epp.normal[2] - 1, 0 !== this.HP.Epp.normal[0] ? (Ip.x = this.HP.Epp.normal[0], Sp.x =  … [truncated]
+         MT.x = this.Rl.aTT.normal[0] + 1, MT.y = this.Rl.aTT.normal[1] + 1, MT.z = this.Rl.aTT.normal[2] + 1, gT.x = this.Rl.aTT.normal[0] - 1, gT.y = this.Rl.aTT.normal[1] - 1, gT.z = this.Rl.aTT.normal[2] - 1, 0 !== this.Rl.aTT.normal[0] ? (MT.x = this.Rl.aTT.normal[0], gT.x =  … [truncated]
```

#### 921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7442` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6651) · [Before (L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7442)

```diff
-         const pp = this.HP.nH(this.HP.Epp.position);
+         const TT = this.Rl.uq(this.Rl.aTT.position);
```

#### 922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7444` → after: `L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6653) · [Before (L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7444)

```diff
-         const ip = jp.getUniqueColoursForParticleSystem(this.HP.Epp.position);
+         const UT = OT.getUniqueColoursForParticleSystem(this.Rl.aTT.position);
```

#### 923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7454` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6663) · [Before (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7454)

```diff
-         pp.addRampGradient(0, (0, Pp.g)(Op));
+         TT.addRampGradient(0, (0, LT.e)(WT));
```

#### 924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7458` → after: `L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6667) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7458)

```diff
-           pp.addRampGradient(Ip / ip.length - 1e-4, (0, Pp.g)(cp)), pp.addRampGradient(Ip / ip.length, (0, Pp.g)(Op))
+           TT.addRampGradient(MT / UT.length - 1e-4, (0, LT.e)(mT)), TT.addRampGradient(MT / UT.length, (0, LT.e)(WT))
```

#### 925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7461` → after: `L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6670) · [Before (L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7461)

```diff
-         pp.addRampGradient(1, (0, Pp.g)(op))
+         TT.addRampGradient(1, (0, LT.e)(zT))
```

#### 926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7464-L7466` → after: `L6673-L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6673-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6673-L6675) · [Before (L7464-L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7464-L7466)

```diff
-         const ip = (0, Ap.g)().nH(pp);
-         if (0 !== ip) return Lp.d.getAverageColours((0, Ap.d)().getMetaInfo(ip).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(pp)}`).stack)
+         const UT = (0, lT.h)().uq(TT);
+         if (0 !== UT) return HT.e.getAverageColours((0, lT.d)().getMetaInfo(UT).rootName);
+         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(TT)}`).stack)
```

#### 927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7475-L7480` → after: `L6684-L6689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6684-L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6684-L6689) · [Before (L7475-L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7475-L7480)

```diff
-       const ip = pp.WU.eJ("sprintParticles", 50);
-       ip.texture = (0, Wp.s)(pp.WU.Gl(), kp), ip.blendMode = Op.g.Standard, ip.addColorGradient(0, (0, Pp.n)(213, 237, 255, 1), (0, Pp.n)(109, 170, 238, 1)), ip.addColorGradient(.2, (0, Pp.n)(213, 237, 255, 1), (0, Pp.n)(109, 170, 238, 1)), ip.addColorGradient(1, (0, Pp.n)(213, 2 … [truncated]
-       ip.minLifeTime = .2, ip.maxLifeTime = .4, ip.minEmitPower = 30, ip.maxEmitPower = 50, ip.emitRate = 5, ip.gravity = new yp.Zy(0, -100, 0), ip.minSize = .15, ip.maxSize = .3, ip.addVelocityGradient(0, .075, .15), ip.addVelocityGradient(1, .075, .15), (0, Pp.C)(pp, ip), ip.cr … [truncated]
-       const cp = pp.WU.eJ("lp", 50);
-       cp.texture = (0, Wp.s)(pp.WU.Gl(), Rp), cp.blendMode = Op.g.Standard, cp.addColorGradient(0, (0, Pp.n)(255, 167, 0, 1), (0, Pp.n)(255, 103, 0, 1)), cp.addColorGradient(.2, (0, Pp.n)(255, 167, 0, 1), (0, Pp.n)(255, 103, 0, 1)), cp.addColorGradient(1, (0, Pp.n)(255, 167, 0, 0 … [truncated]
-       cp.minLifeTime = .15, cp.maxLifeTime = .3, cp.minEmitPower = 30, cp.maxEmitPower = 50, cp.emitRate = 5, cp.gravity = new yp.Zy(0, -100, 0), cp.minSize = .15, cp.maxSize = .3, cp.addVelocityGradient(0, .075, .15), cp.addVelocityGradient(1, .075, .15), (0, Pp.C)(pp, cp), cp.c … [truncated]
+       const UT = TT.GB.wV("sprintParticles", 50);
+       UT.texture = (0, pT.w)(TT.GB.KF(), eT), UT.blendMode = WT.e.Standard, UT.addColorGradient(0, (0, LT.m)(213, 237, 255, 1), (0, LT.m)(109, 170, 238, 1)), UT.addColorGradient(.2, (0, LT.m)(213, 237, 255, 1), (0, LT.m)(109, 170, 238, 1)), UT.addColorGradient(1, (0, LT.m)(213, 2 … [truncated]
+       UT.minLifeTime = .2, UT.maxLifeTime = .4, UT.minEmitPower = 30, UT.maxEmitPower = 50, UT.emitRate = 5, UT.gravity = new BT.JB(0, -100, 0), UT.minSize = .15, UT.maxSize = .3, UT.addVelocityGradient(0, .075, .15), UT.addVelocityGradient(1, .075, .15), (0, LT.x)(TT, UT), UT.cr … [truncated]
+       const mT = TT.GB.wV("wT", 50);
+       mT.texture = (0, pT.w)(TT.GB.KF(), JT), mT.blendMode = WT.e.Standard, mT.addColorGradient(0, (0, LT.m)(255, 167, 0, 1), (0, LT.m)(255, 103, 0, 1)), mT.addColorGradient(.2, (0, LT.m)(255, 167, 0, 1), (0, LT.m)(255, 103, 0, 1)), mT.addColorGradient(1, (0, LT.m)(255, 167, 0, 0 … [truncated]
+       mT.minLifeTime = .15, mT.maxLifeTime = .3, mT.minEmitPower = 30, mT.maxEmitPower = 50, mT.emitRate = 5, mT.gravity = new BT.JB(0, -100, 0), mT.minSize = .15, mT.maxSize = .3, mT.addVelocityGradient(0, .075, .15), mT.addVelocityGradient(1, .075, .15), (0, LT.x)(TT, mT), mT.c … [truncated]
```

#### 928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7502` → after: `L6711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6711) · [Before (L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7502)

```diff
-         blendMode: Op.g.Standard
+         blendMode: WT.e.Standard
```

#### 929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7539` → after: `L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6748) · [Before (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7539)

```diff
-         blendMode: Op.g.Standard
+         blendMode: WT.e.Standard
```

#### 930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7576` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6785) · [Before (L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7576)

```diff
-         blendMode: Op.g.Standard
+         blendMode: WT.e.Standard
```

#### 931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7581` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6790) · [Before (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7581)

```diff
-         this.pSystem = pp, this.maxLifetimeSecs = ip, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.Ry = !1, pp.manualEmitCount = 0
+         this.pSystem = TT, this.maxLifetimeSecs = UT, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.kB = !1, TT.manualEmitCount = 0
```

#### 932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7584` → after: `L6793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6793) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7584)

```diff
-         this.Ry || (this.pSystem.manualEmitCount = pp, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.kB || (this.pSystem.manualEmitCount = TT, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7587` → after: `L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6796) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7587)

```diff
-         this.Ry = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.kB = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7599` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6808) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7599)

```diff
-       (0, Pp.C)(pp, ip.pSystem), (0, Pp.z)(ip.pSystem, cp), ip.emitAmount(Op)
+       (0, LT.x)(TT, UT.pSystem), (0, LT.t)(UT.pSystem, mT), UT.emitAmount(WT)
```

#### 935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7601` → after: `L6810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6810) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7601)

```diff
-     const Jp = (0, op.f)("Fat Brown Mushroom");
+     const IT = (0, zT.j)("Fat Brown Mushroom");
```

#### 936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7605` → after: `L6814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6814) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7605)

```diff
-       Np(pp, ip === Jp ? Sp.g.BounceBrownMushroom : Sp.g.BounceRedMushroom, cp)
+       sT(TT, UT === IT ? gT.d.BounceBrownMushroom : gT.d.BounceRedMushroom, mT)
```

#### 937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7609` → after: `L6818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6818) · [Before (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7609)

```diff
-       const Op = ip === Sp.g.Bunnyhop || ip === Sp.g.JumpPad;
+       const WT = UT === gT.d.Bunnyhop || UT === gT.d.JumpPad;
```

#### 938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7611-L7612` → after: `L6820-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6820-L6821) · [Before (L7611-L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7611-L7612)

```diff
-       ip === Sp.g.Bunnyhop ? (op = [213, 237, 255], xp = [109, 170, 238]) : ip === Sp.g.BounceRedMushroom ? (op = [196, 63, 63], xp = [148, 53, 53]) : ip === Sp.g.BounceBrownMushroom ? (op = [186, 132, 91], xp = [153, 107, 72]) : ip === Sp.g.BunnyhopBounce ? (op = [217, 170, 2],  … [truncated]
-       const Lp = pp.Yk.sH(pp.NJ);
+       UT === gT.d.Bunnyhop ? (zT = [213, 237, 255], nT = [109, 170, 238]) : UT === gT.d.BounceRedMushroom ? (zT = [196, 63, 63], nT = [148, 53, 53]) : UT === gT.d.BounceBrownMushroom ? (zT = [186, 132, 91], nT = [153, 107, 72]) : UT === gT.d.BunnyhopBounce ? (zT = [217, 170, 2],  … [truncated]
+       const HT = TT.pY.Aq(TT.VV);
```

#### 939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7615` → after: `L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6824) · [Before (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7615)

```diff
-         const pp = 1 === cp[1] ? Ip.g.Vw - .4 : 0;
+         const TT = 1 === mT[1] ? MT.f.Fc - .4 : 0;
```

#### 940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7623` → after: `L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6832) · [Before (L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7623)

```diff
-       const Ap = Op ? Cp : Ep;
+       const lT = WT ? wT : tT;
```

#### 941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7644` → after: `L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6853) · [Before (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7644)

```diff
-         this.HP = pp, this.cfg = cp, this.pool = [], this.currentIndex = 0;
+         this.Rl = TT, this.cfg = mT, this.pool = [], this.currentIndex = 0;
```

#### 942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7655` → after: `L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6864) · [Before (L7655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7655)

```diff
-         const yp = this.HP.camera.sH();
+         const BT = this.Rl.camera.Aq();
```

#### 943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7657` → after: `L6866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6866) · [Before (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7657)

```diff
-         const Up = null !== (cp = ip.hideDist) && void 0 !== cp ? cp : this.cfg.hideDist;
+         const ZT = null !== (mT = UT.hideDist) && void 0 !== mT ? mT : this.cfg.hideDist;
```

#### 944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7662` → after: `L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6871) · [Before (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7662)

```diff
-         (0, Pp.v)(dp, tp, Hp), dp.minEmitPower = null !== (Op = ip.minEmitPower) && void 0 !== Op ? Op : dp.minEmitPower, dp.maxEmitPower = null !== (op = ip.maxEmitPower) && void 0 !== op ? op : dp.maxEmitPower, dp.minSize = null !== (Ip = ip.minSize) && void 0 !== Ip ? Ip : dp. … [truncated]
+         (0, LT.s)(iT, fT, qT), iT.minEmitPower = null !== (WT = UT.minEmitPower) && void 0 !== WT ? WT : iT.minEmitPower, iT.maxEmitPower = null !== (zT = UT.maxEmitPower) && void 0 !== zT ? zT : iT.maxEmitPower, iT.minSize = null !== (MT = UT.minSize) && void 0 !== MT ? MT : iT. … [truncated]
```

#### 945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7666` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6875) · [Before (L7666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7666)

```diff
-           cp = this.HP.WU.eJ(`particlePool_${pp}`, 50),
+           mT = this.Rl.GB.wV(`particlePool_${TT}`, 50),
```

#### 946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7668` → after: `L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6877) · [Before (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7668)

```diff
-         cp.texture = (0, Wp.s)(this.HP.WU.Gl(), Op), cp.blendMode = ip.blendMode, cp.minLifeTime = ip.minLifeTime, cp.maxLifeTime = ip.maxLifeTime, cp.minEmitPower = ip.minEmitPower, cp.maxEmitPower = ip.maxEmitPower, cp.minSize = ip.minSize, cp.maxSize = ip.maxSize, cp.gravity = … [truncated]
+         mT.texture = (0, pT.w)(this.Rl.GB.KF(), WT), mT.blendMode = UT.blendMode, mT.minLifeTime = UT.minLifeTime, mT.maxLifeTime = UT.maxLifeTime, mT.minEmitPower = UT.minEmitPower, mT.maxEmitPower = UT.maxEmitPower, mT.minSize = UT.minSize, mT.maxSize = UT.maxSize, mT.gravity = … [truncated]
```

#### 947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7670` → after: `L6879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6879) · [Before (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7670)

```diff
-         this.applyColorGradients(cp, ip.colorGradients), (0, Pp.C)(this.HP, cp), cp.createBoxEmitter(new yp.Zy(Math.min(ip.dir1[0], ip.dir2[0]), Math.min(ip.dir1[1], ip.dir2[1]), Math.min(ip.dir1[2], ip.dir2[2])), new yp.Zy(Math.max(ip.dir1[0], ip.dir2[0]), Math.max(ip.dir1[1], i … [truncated]
+         this.applyColorGradients(mT, UT.colorGradients), (0, LT.x)(this.Rl, mT), mT.createBoxEmitter(new BT.JB(Math.min(UT.dir1[0], UT.dir2[0]), Math.min(UT.dir1[1], UT.dir2[1]), Math.min(UT.dir1[2], UT.dir2[2])), new BT.JB(Math.max(UT.dir1[0], UT.dir2[0]), Math.max(UT.dir1[1], U … [truncated]
```

#### 948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7680` → after: `L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6889) · [Before (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7680)

```diff
-             const ip = (0, Pp.n)(Ip.color[0], Ip.color[1], Ip.color[2], 1);
+             const UT = (0, LT.m)(MT.color[0], MT.color[1], MT.color[2], 1);
```

#### 949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7684-L7685` → after: `L6893-L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6893-L6894) · [Before (L7684-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7684-L7685)

```diff
-             const ip = (0, Pp.n)(Ip.minColor[0], Ip.minColor[1], Ip.minColor[2], null !== (Op = Ip.minColor[3]) && void 0 !== Op ? Op : 1),
-               cp = (0, Pp.n)(Ip.maxColor[0], Ip.maxColor[1], Ip.maxColor[2], null !== (op = Ip.maxColor[3]) && void 0 !== op ? op : 1);
+             const UT = (0, LT.m)(MT.minColor[0], MT.minColor[1], MT.minColor[2], null !== (WT = MT.minColor[3]) && void 0 !== WT ? WT : 1),
+               mT = (0, LT.m)(MT.maxColor[0], MT.maxColor[1], MT.maxColor[2], null !== (zT = MT.maxColor[3]) && void 0 !== zT ? zT : 1);
```

#### 950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7692` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6901) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7692)

```diff
-       if (!(0, Up.G)(ip.hideDist)) {
+       if (!(0, ZT.E)(UT.hideDist)) {
```

#### 951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7694-L7695` → after: `L6903-L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6903-L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6903-L6904) · [Before (L7694-L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7694-L7695)

```diff
-         for (let pp = 0; pp < 3; pp++) cp.push((0, xp.y)(ip.pos1[pp], ip.pos2[pp], .5));
-         const Op = pp.Yk.sH(pp.NJ),
+         for (let TT = 0; TT < 3; TT++) mT.push((0, nT.z)(UT.pos1[TT], UT.pos2[TT], .5));
+         const WT = TT.pY.Aq(TT.VV),
```

#### 952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7702` → after: `L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6911) · [Before (L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7702)

```diff
-   38017: (pp, ip, cp) => {
+   37919: (TT, UT, mT) => {
```

#### 953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7704` → after: `L6913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6913) · [Before (L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7704)

```diff
-       b: () => vp
+       e: () => vT
```

#### 954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7706-L7718` → after: `L6915-L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6915-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6915-L6927) · [Before (L7706-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7706-L7718)

```diff
-     var Op = cp(37436),
-       op = cp(38041),
-       Ip = cp(38069),
-       Sp = cp(37646),
-       xp = cp(38055),
-       Lp = cp(38071),
-       Yp = cp(3246),
-       Dp = cp(38025),
-       Ap = cp(38023),
-       Pp = cp(37411),
-       Wp = cp(37505),
-       yp = cp(37519),
-       Up = cp(2849);
+     var WT = mT(37302),
+       zT = mT(37938),
+       MT = mT(37974),
+       gT = mT(37531),
+       nT = mT(37959),
+       HT = mT(37976),
+       kT = mT(3289),
+       jT = mT(37929),
+       lT = mT(37926),
+       LT = mT(37273),
+       pT = mT(37385),
+       BT = mT(37397),
+       ZT = mT(2875);
```

#### 955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7729-L7730` → after: `L6938-L6939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6938-L6939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6938-L6939) · [Before (L7729-L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7729-L7730)

```diff
-           ambientLevel: Ap.e.ambient,
-           diffuseLevel: Ap.e.diffuse
+           ambientLevel: lT.d.ambient,
+           diffuseLevel: lT.d.diffuse
```

#### 956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7751` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6960) · [Before (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7751)

```diff
-           alpha: Dp.f
+           alpha: jT.g
```

#### 957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7769-L7770` → after: `L6978-L6979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6978-L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6978-L6979) · [Before (L7769-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7769-L7770)

```diff
-           name: `${jp}${Ap}`,
-           pw: ip,
+           name: `${OT}${lT}`,
+           XZ: UT,
```

#### 958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7773-L7775` → after: `L6982-L6984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6982-L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6982-L6984) · [Before (L7773-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7773-L7775)

```diff
-         wp && (0, Op.J)(kp);
-         const Rp = Yp.d.getBlockAtlasArr().map((pp => (0, op.g)(pp, ip, cp)));
-         if ((0, Wp.f)(mp, {
+         cT && (0, WT.C)(eT);
+         const JT = kT.e.getBlockAtlasArr().map((TT => (0, zT.c)(TT, UT, mT)));
+         if ((0, pT.c)(YT, {
```

#### 959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7777` → after: `L6986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L6986) · [Before (L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7777)

```diff
-               transparencyMode: Op.k.alphaTest,
+               transparencyMode: WT.j.alphaTest,
```

#### 960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7791` → after: `L7000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7000) · [Before (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7791)

```diff
-               transparencyMode: Op.k.alphaBlend
+               transparencyMode: WT.j.alphaBlend
```

#### 961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7793` → after: `L7002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7002) · [Before (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7793)

```diff
-           }), vp && (0, Sp.e)(kp, (0, Up.g)().WU), tp && (0, Pp.d)(kp, !0), Rp.length > 0) {
+           }), vT && (0, gT.d)(eT, (0, ZT.h)().GB), fT && (0, LT.c)(eT, !0), JT.length > 0) {
```

#### 962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7795-L7797` → after: `L7004-L7006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7004-L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7004-L7006) · [Before (L7795-L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7795-L7797)

```diff
-             urls: Yp.d.getBlockAtlasArr(),
-             pixels: Yp.d.getBlockAtlasPixels(),
-             layerWidth: Yp.d.getBlockAtlasWidth()
+             urls: kT.e.getBlockAtlasArr(),
+             pixels: kT.e.getBlockAtlasPixels(),
+             layerWidth: kT.e.getBlockAtlasWidth()
```

#### 963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7799` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7008) · [Before (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7799)

```diff
-           (0, Op.n)(kp, xp.f, (0, Ip.j)(pp, Rp, void 0, this.dU(), !1))
+           (0, WT.m)(eT, nT.i, (0, MT.j)(TT, JT, void 0, this.RB(), !1))
```

#### 964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7801` → after: `L7010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7010) · [Before (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7801)

```diff
-         return (0, yp.m)(mp), pp[jp] = mp, mp
+         return (0, BT.k)(YT), TT[OT] = YT, YT
```

#### 965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7810` → after: `L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7019) · [Before (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7810)

```diff
-     (0, Lp.p)(wp);
+     (0, HT.i)(cT);
```

#### 966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7813` → after: `L7022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7022) · [Before (L7813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7813)

```diff
-   38300: (pp, ip, cp) => {
+   38219: (TT, UT, mT) => {
```

#### 967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7815` → after: `L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7024) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7815)

```diff
-       c: () => Tp,
+       b: () => FT,
```

#### 968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7818` → after: `L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7027) · [Before (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7818)

```diff
-     var Op = cp(37602);
+     var WT = mT(37486);
```

#### 969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7839` → after: `L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7048) · [Before (L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7839)

```diff
-     var Sp = cp(37376);
+     var gT = mT(37246);
```

#### 970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7867-L7868` → after: `L7076-L7077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7076-L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7076-L7077) · [Before (L7867-L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7867-L7868)

```diff
-             Op = Number.isNaN(Op) ? pp : Op, ip += this.childWeights[op], cp += this.childWeights[op] * pp
-           } return ip > 0 ? cp / ip : Number.isNaN(Op) ? 0 : Op
+             WT = Number.isNaN(WT) ? TT : WT, UT += this.childWeights[zT], mT += this.childWeights[zT] * TT
+           } return UT > 0 ? mT / UT : Number.isNaN(WT) ? 0 : WT
```

#### 971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7880` → after: `L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7089) · [Before (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7880)

```diff
-         Op = cp > 0 ? Op / cp : 1 / op;
+         WT = mT > 0 ? WT / mT : 1 / zT;
```

#### 972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7895` → after: `L7104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7104) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7895)

```diff
-           const pp = this.gaitPhase + this.restGap() * (0, Sp.o)(8 * cp, ip);
+           const TT = this.gaitPhase + this.restGap() * (0, gT.n)(8 * mT, UT);
```

#### 973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7912` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7121) · [Before (L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7912)

```diff
-         Sp !== (null !== (Op = null === (op = this.current) || void 0 === op ? void 0 : op.state) && void 0 !== Op ? Op : null) && (this.current = null === Sp ? null : this.enter(Sp, Ip)), this.updateWeights(ip, cp)
+         gT !== (null !== (WT = null === (zT = this.current) || void 0 === zT ? void 0 : zT.state) && void 0 !== WT ? WT : null) && (this.current = null === gT ? null : this.enter(gT, MT)), this.updateWeights(UT, mT)
```

#### 974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7927` → after: `L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7136) · [Before (L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7927)

```diff
-           const pp = this.instances.reduce(((pp, ip) => ip !== Op && (pp === Op || ip.weight < pp.weight) ? ip : pp));
+           const TT = this.instances.reduce(((TT, UT) => UT !== WT && (TT === WT || UT.weight < TT.weight) ? UT : TT));
```

#### 975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7942` → after: `L7151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7151) · [Before (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7942)

```diff
-         for (const Ap of this.instances) Ap.weight = Ap === Op ? Sp : Ap.weight * Yp, (Ap === Op || Ap.weight > xp) && (this.instances[Dp++] = Ap);
+         for (const lT of this.instances) lT.weight = lT === WT ? gT : lT.weight * kT, (lT === WT || lT.weight > nT) && (this.instances[jT++] = lT);
```

#### 976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7949` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7158) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7949)

```diff
-         this.inputs = new Float64Array(Op.h.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(WT.l.Count), this.states = [], this.sleptSeconds = 0
```

#### 977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7952` → after: `L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7161) · [Before (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7952)

```diff
-         for (let cp = 0; cp < Op.h.Count; cp++) this.inputs[cp] = pp[cp];
+         for (let mT = 0; mT < WT.l.Count; mT++) this.inputs[mT] = TT[mT];
```

#### 978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7997-L7998` → after: `L7206-L7207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7206-L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7206-L7207) · [Before (L7997-L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L7997-L7998)

```diff
-     var wp = cp(37557),
-       vp = cp(37608);
+     var cT = mT(37443),
+       vT = mT(37495);
```

#### 979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8016` → after: `L7225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7225) · [Before (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8016)

```diff
-         return null !== (ip = this.indexByLowerName.get(pp.toLowerCase())) && void 0 !== ip ? ip : -1
+         return null !== (UT = this.indexByLowerName.get(TT.toLowerCase())) && void 0 !== UT ? UT : -1
```

#### 980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8019-L8020` → after: `L7228-L7229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7228-L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7228-L7229) · [Before (L8019-L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8019-L8020)

```diff
-     var dp = cp(37566),
-       ep = cp(37575);
+     var iT = mT(37453),
+       bT = mT(37465);
```

#### 981. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8025` → after: `L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7234) · [Before (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8025)

```diff
-         this.name = pp, this.clip = ip, this.pool = cp, this.mode = op, this.mask = Ip, this.fadeInSeconds = Sp, this.fadeOutSeconds = xp, this.speed = Lp, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(Op.c.length), this.elapsed =  … [truncated]
+         this.name = TT, this.clip = UT, this.pool = mT, this.mode = zT, this.mask = MT, this.fadeInSeconds = gT, this.fadeOutSeconds = nT, this.speed = HT, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(WT.e.length), this.elapsed =  … [truncated]
```

#### 982. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8033` → after: `L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7242) · [Before (L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8033)

```diff
-         return pp === ep.g.Once && (cp > 0 ? this.elapsed >= Op : this.elapsed > Op)
+         return TT === bT.l.Once && (mT > 0 ? this.elapsed >= WT : this.elapsed > WT)
```

#### 983. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8064` → after: `L7273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7273) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8064)

```diff
-           cp.elapsed < ip.startDelaySeconds || (cp.weight = cp.fadeInSeconds > 0 ? Math.min(1, cp.weight + pp / cp.fadeInSeconds) : 1, ip.loop === ep.g.Once && cp.weight >= 1 && cp.elapsed >= ip.startDelaySeconds + ip.lengthSeconds - cp.fadeOutSeconds * cp.speed && (cp.stopping = … [truncated]
+           mT.elapsed < UT.startDelaySeconds || (mT.weight = mT.fadeInSeconds > 0 ? Math.min(1, mT.weight + TT / mT.fadeInSeconds) : 1, UT.loop === bT.l.Once && mT.weight >= 1 && mT.elapsed >= UT.startDelaySeconds + UT.lengthSeconds - mT.fadeOutSeconds * mT.speed && (mT.stopping = … [truncated]
```

#### 984. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8076-L8079` → after: `L7285-L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7285-L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7285-L7288) · [Before (L8076-L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8076-L8079)

```diff
-     var mp = cp(37589),
-       Rp = cp(37617),
-       qp = cp(37399),
-       Mp = cp(37580);
+     var YT = mT(37474),
+       JT = mT(37501),
+       xT = mT(37268),
+       dT = mT(37468);
```

#### 985. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8086-L8087` → after: `L7295-L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7295-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7295-L7296) · [Before (L8086-L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8086-L8087)

```diff
-         this.pose = new qp.e(cp), this.accumulator = new qp.c(cp), this.inputs = new Float64Array(Op.h.Count + ip.filters.length), this.layers = ip.layers.map(((ip, cp) => new Yp(ip, pp.layerMasks[cp]))), this.runtimes = ip.pools.map((pp => ({
-           queries: new Float64Array(Mp.h.Count),
+         this.pose = new xT.g(mT), this.accumulator = new xT.e(mT), this.inputs = new Float64Array(WT.l.Count + UT.filters.length), this.layers = UT.layers.map(((UT, mT) => new kT(UT, TT.layerMasks[mT]))), this.runtimes = UT.pools.map((TT => ({
+           queries: new Float64Array(dT.d.Count),
```

#### 986. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8091` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7300) · [Before (L8091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8091)

```diff
-           return null !== (cp = pp.variables.slots.get(ip.name)) && void 0 !== cp ? cp : -1
+           return null !== (mT = TT.variables.slots.get(UT.name)) && void 0 !== mT ? mT : -1
```

#### 987. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8095` → after: `L7304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7304) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8095)

```diff
-             const Ip = Op.c.indexOf(ip.variables[op].input);
+             const MT = WT.e.indexOf(UT.variables[zT].input);
```

#### 988. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8107` → after: `L7316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7316) · [Before (L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8107)

```diff
-         this.inputs[pp] = Number.isFinite(ip) ? ip : 0
+         this.inputs[TT] = Number.isFinite(UT) ? UT : 0
```

#### 989. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8125` → after: `L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7334) · [Before (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8125)

```diff
-         for (let ip = 0; ip < Op.c.length; ip++) pp.heldInputs[ip] = this.inputs[Op.c[ip]];
+         for (let UT = 0; UT < WT.e.length; UT++) TT.heldInputs[UT] = this.inputs[WT.e[UT]];
```

#### 990. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8134` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7343) · [Before (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8134)

```diff
-           xp = (0, mp.l)(this.rigged.binding.pools, pp);
+           nT = (0, YT.h)(this.rigged.binding.pools, TT);
```

#### 991. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8139` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7348) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8139)

```diff
-         } = xp, Dp = Qp(cp, 0, 1), Ap = (Dp > 0 || 0 === Sp ? Lp.startDelaySeconds + Dp * Lp.lengthSeconds : 0) + Qp(op, 0, lp) * Sp, Pp = new jp(Cp + Lp.id, Lp, Yp, dp.l.Add, null, Ip, Ip, Sp, Ap);
+         } = nT, jT = XT(mT, 0, 1), lT = (jT > 0 || 0 === gT ? HT.startDelaySeconds + jT * HT.lengthSeconds : 0) + XT(zT, 0, yT) * gT, LT = new OT(wT + HT.id, HT, kT, iT.j.Add, null, MT, MT, gT, lT);
```

#### 992. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8143` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7352) · [Before (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8143)

```diff
-         const ip = (0, mp.l)(this.rigged.binding.pools, pp);
+         const UT = (0, YT.h)(this.rigged.binding.pools, TT);
```

#### 993. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8147` → after: `L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7356) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8147)

```diff
-         const ip = (0, mp.l)(this.rigged.binding.pools, pp);
+         const UT = (0, YT.h)(this.rigged.binding.pools, TT);
```

#### 994. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8158` → after: `L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7367) · [Before (L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8158)

```diff
-         const cp = Math.max(0, Number.isFinite(pp) ? pp : 0);
+         const mT = Math.max(0, Number.isFinite(TT) ? TT : 0);
```

#### 995. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8165` → after: `L7374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7374) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8165)

```diff
-         const Ip = this.travelBacklog * (0, Sp.o)(20, cp);
+         const MT = this.travelBacklog * (0, gT.n)(20, mT);
```

#### 996. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8173` → after: `L7382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7382) · [Before (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8173)

```diff
-               for (let cp = 0; cp < pp.length; cp++) ip[Op.h.Count + cp] = (0, Op.i)(pp[cp], ip)
+               for (let mT = 0; mT < TT.length; mT++) UT[WT.l.Count + mT] = (0, WT.n)(TT[mT], UT)
```

#### 997. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8191-L8192` → after: `L7400-L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7400-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7400-L7401) · [Before (L8191-L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8191-L8192)

```diff
-               const op = (0, Op.i)(pp[cp], ip);
-               if (Math.abs(ip[Op.h.Count + cp] - op) > 1e-6 * Math.max(1, Math.abs(op))) return !1
+               const zT = (0, WT.n)(TT[mT], UT);
+               if (Math.abs(UT[WT.l.Count + mT] - zT) > 1e-6 * Math.max(1, Math.abs(zT))) return !1
```

#### 998. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8205-L8206` → after: `L7414-L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7414-L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7414-L7415) · [Before (L8205-L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8205-L8206)

```diff
-             xp = (0, Op.i)(Ip, this.inputs),
-             Lp = Op.h.Count + op,
+             nT = (0, WT.n)(MT, this.inputs),
+             HT = WT.l.Count + zT,
```

#### 999. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8209` → after: `L7418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7418) · [Before (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8209)

```diff
-           this.inputs[Lp] = ip ? xp : Yp + (xp - Yp) * (0, Sp.o)(Dp, pp)
+           this.inputs[HT] = UT ? nT : kT + (nT - kT) * (0, gT.n)(jT, TT)
```

#### 1000. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8217` → after: `L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7426) · [Before (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8217)

```diff
-           (0, Op.l)(op, this.inputs, this.ageSeconds, pp, this.travelled);
+           (0, WT.q)(zT, this.inputs, this.ageSeconds, TT, this.travelled);
```

#### 1001. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8246` → after: `L7455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7455) · [Before (L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8246)

```diff
-         Lp && this.accumulator.applyTo(this.pose, pp.weight, Ip.mode === dp.l.Override), this.accumulator.clear()
+         HT && this.accumulator.applyTo(this.pose, TT.weight, MT.mode === iT.j.Override), this.accumulator.clear()
```

#### 1002. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8259` → after: `L7468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7468) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8259)

```diff
-           Op.strideBlocks > 0 ? Wp = pp.gaitPhase * Ip.lengthSeconds : (pp.elapsed[Yp] = Pp ? Xp(Ip, pp.elapsed[Yp], cp * Lp, Dp) : pp.elapsed[Yp] + cp * Lp, Wp = (0, Rp.d)(Ip, pp.elapsed[Yp])), pp.childTimes[Yp] = Wp, Pp && !Number.isNaN(Wp) && this.sampleClip(Ip, Dp, Wp, Ap, ip … [truncated]
+           WT.strideBlocks > 0 ? pT = TT.gaitPhase * MT.lengthSeconds : (TT.elapsed[kT] = LT ? aT(MT, TT.elapsed[kT], mT * HT, jT) : TT.elapsed[kT] + mT * HT, pT = (0, JT.g)(MT, TT.elapsed[kT])), TT.childTimes[kT] = pT, LT && !Number.isNaN(pT) && this.sampleClip(MT, jT, pT, lT, UT … [truncated]
```

#### 1003. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8271` → after: `L7480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7480) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8271)

```diff
-               op = (0, Rp.d)(Op.clip, Op.elapsed);
+               zT = (0, JT.g)(WT.clip, WT.elapsed);
```

#### 1004. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8279` → after: `L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7488) · [Before (L8279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8279)

```diff
-           this.accumulator.applyTo(this.pose, 1, pp.mode === dp.l.Override, !0), this.accumulator.clear()
+           this.accumulator.applyTo(this.pose, 1, TT.mode === iT.j.Override, !0), this.accumulator.clear()
```

#### 1005. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8283-L8284` → after: `L7492-L7493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7492-L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7492-L7493) · [Before (L8283-L8284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8283-L8284)

```diff
-         ip.queries[Mp.h.AnimTime] = cp;
-         const Ip = Op * Math.max(0, (0, Rp.b)(pp.blendWeight, ip));
+         UT.queries[dT.d.AnimTime] = mT;
+         const MT = WT * Math.max(0, (0, JT.c)(TT.blendWeight, UT));
```

#### 1006. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8287` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7496) · [Before (L8287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8287)

```diff
-           Lp = pp.loop === ep.g.Loop,
+           HT = TT.loop === bT.l.Loop,
```

#### 1007. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8296` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7505) · [Before (L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8296)

```diff
-             (0, Rp.f)(Ap.rotation, cp, Lp, ip, Dp);
+             (0, JT.h)(lT.rotation, mT, HT, UT, jT);
```

#### 1008. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8300` → after: `L7509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7509) · [Before (L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8300)

```diff
-             (0, Rp.f)(Ap.position, cp, Lp, ip, Dp);
+             (0, JT.h)(lT.position, mT, HT, UT, jT);
```

#### 1009. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8304` → after: `L7513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7513) · [Before (L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8304)

```diff
-             (0, Rp.f)(Ap.scale, cp, Lp, ip, Dp);
+             (0, JT.h)(lT.scale, mT, HT, UT, jT);
```

#### 1010. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8315` → after: `L7524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7524) · [Before (L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8315)

```diff
-         return cp < 0 ? pp.constant : cp < Op.h.Count ? ip[cp] : this.inputs[cp]
+         return mT < 0 ? TT.constant : mT < WT.l.Count ? UT[mT] : this.inputs[mT]
```

#### 1011. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8329` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7538) · [Before (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8329)

```diff
-           inputs: [...[...Op.g].map((pp => {
+           inputs: [...[...WT.h].map((TT => {
```

#### 1012. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8338-L8339` → after: `L7547-L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7547-L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7547-L7548) · [Before (L8338-L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8338-L8339)

```diff
-             raw: (0, Op.i)(pp, this.inputs),
-             value: this.inputs[Op.h.Count + ip]
+             raw: (0, WT.n)(TT, this.inputs),
+             value: this.inputs[WT.l.Count + UT]
```

#### 1013. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8369-L8370` → after: `L7578-L7579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7578-L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7578-L7579) · [Before (L8369-L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8369-L8370)

```diff
-       const op = Op.queries[Mp.h.DeltaTime];
-       Op.queries[Mp.h.AnimTime] = ip, Op.queries[Mp.h.DeltaTime] = cp;
+       const zT = WT.queries[dT.d.DeltaTime];
+       WT.queries[dT.d.AnimTime] = UT, WT.queries[dT.d.DeltaTime] = mT;
```

#### 1014. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8372` → after: `L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7581) · [Before (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8372)

```diff
-       return Op.queries[Mp.h.DeltaTime] = op, Ip
+       return WT.queries[dT.d.DeltaTime] = zT, MT
```

#### 1015. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8378` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7587) · [Before (L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8378)

```diff
-       return Number.isNaN(pp) ? Op : Math.min(cp, Math.max(ip, pp))
+       return Number.isNaN(TT) ? WT : Math.min(mT, Math.max(UT, TT))
```

#### 1016. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8380-L8381` → after: `L7589-L7590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7589-L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7589-L7590) · [Before (L8380-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8380-L8381)

```diff
-     var Jp = cp(37561),
-       Bp = cp(3383);
+     var IT = mT(37449),
+       QT = mT(3395);
```

#### 1017. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8387` → after: `L7596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7596) · [Before (L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8387)

```diff
-         (cp.severity === ep.b.Error ? console.error : console.warn)(`Animation for ${pp}: ${cp.source}: ${cp.message}`)
+         (mT.severity === bT.d.Error ? console.error : console.warn)(`Animation for ${TT}: ${mT.source}: ${mT.message}`)
```

#### 1018. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8392` → after: `L7601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7601) · [Before (L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8392)

```diff
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.jT = 0
+           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.lK = 0
```

#### 1019. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8395` → after: `L7604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7604) · [Before (L8395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8395)

```diff
-           return this.jT
+           return this.lK
```

#### 1020. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8398` → after: `L7607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7607) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8398)

```diff
-           this.jT++
+           this.lK++
```

#### 1021. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8421` → after: `L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7630) · [Before (L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8421)

```diff
-           return [cp, Op].some((cp => null !== cp && new vp.d(cp, new Hp(pp, ip)).animatesAnyBone))
+           return [mT, WT].some((mT => null !== mT && new vT.b(mT, new qT(TT, UT)).animatesAnyBone))
```

#### 1022. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8431` → after: `L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7640) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8431)

```diff
-             for (const pp of null === op ? [] : (0, vp.h)(op)) Op.add(pp);
+             for (const TT of null === zT ? [] : (0, vT.g)(zT)) WT.add(TT);
```

#### 1023. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8447` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7656) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8447)

```diff
-               Op = Array.from(op, (pp => null !== pp && void 0 !== pp ? pp : "")), hp.set(cp, Op)
+               WT = Array.from(zT, (TT => null !== TT && void 0 !== TT ? TT : "")), uT.set(mT, WT)
```

#### 1024. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8464` → after: `L7673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7673) · [Before (L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8464)

```diff
-             op = new vp.d(ip, new Hp(pp, cp));
+             zT = new vT.b(UT, new qT(TT, mT));
```

#### 1025. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8466` → after: `L7675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7675) · [Before (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8466)

```diff
-             fp(Ip ? `${pp} (texture pack)` : pp, op.diagnostics), Ip && !op.animatesAnyBone && console.error(`Animation for ${pp} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), Op.set(cp, op)
+             PT(MT ? `${TT} (texture pack)` : TT, zT.diagnostics), MT && !zT.animatesAnyBone && console.error(`Animation for ${TT} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), WT.set(mT, zT)
```

#### 1026. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8475-L8477` → after: `L7684-L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7684-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7684-L7686) · [Before (L8475-L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8475-L8477)

```diff
-           const ip = (0, wp.c)(),
-             cp = Jp.c.has(pp) || this.drawnWithPlayerRig(pp),
-             Op = (0, Jp.l)(ip, cp ? Tp : pp, []);
+           const UT = (0, cT.e)(),
+             mT = IT.d.has(TT) || this.drawnWithPlayerRig(TT),
+             WT = (0, IT.j)(UT, mT ? FT : TT, []);
```

#### 1027. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8481-L8482` → after: `L7690-L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7690-L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7690-L7691) · [Before (L8481-L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8481-L8482)

```diff
-             const cp = (0, Jp.n)(this.getPack(), ip, pp);
-             fp(`${pp} (texture pack)`, cp.diagnostics), op = cp.binding
+             const mT = (0, IT.l)(this.getPack(), UT, TT);
+             PT(`${TT} (texture pack)`, mT.diagnostics), zT = mT.binding
```

#### 1028. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8490` → after: `L7699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7699) · [Before (L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8490)

```diff
-           null === this.pack && (this.pack = (0, Jp.t)(null !== null ? null : (0, Bp.b)(), "texturePack"), fp("the texture pack", this.pack.diagnostics));
+           null === this.pack && (this.pack = (0, IT.q)(null !== null ? null : (0, QT.b)(), "texturePack"), PT("the texture pack", this.pack.diagnostics));
```

#### 1029. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8496` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7705) · [Before (L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8496)

```diff
-   37551: (pp, ip, cp) => {
+   37437: (TT, UT, mT) => {
```

#### 1030. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8498-L8499` → after: `L7707-L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7707-L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7707-L7708) · [Before (L8498-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8498-L8499)

```diff
-       c: () => Dp,
-       e: () => Yp
+       d: () => jT,
+       h: () => kT
```

#### 1031. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8501-L8505` → after: `L7710-L7714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7710-L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7710-L7714) · [Before (L8501-L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8501-L8505)

```diff
-     var Op = cp(37557),
-       op = cp(37617),
-       Ip = cp(37575),
-       Sp = cp(37376),
-       xp = cp(37580);
+     var WT = mT(37443),
+       zT = mT(37501),
+       MT = mT(37465),
+       gT = mT(37246),
+       nT = mT(37468);
```

#### 1032. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8515` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7724) · [Before (L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8515)

```diff
-           null !== ip ? (Op.push(Sp.name), op.push(Sp.rotation), Ip.push(ip)) : console.warn(`${pp.id} animates ${Sp.name}, which the attachment has no node for`)
+           null !== UT ? (WT.push(gT.name), zT.push(gT.rotation), MT.push(UT)) : console.warn(`${TT.id} animates ${gT.name}, which the attachment has no node for`)
```

#### 1033. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8529` → after: `L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7738) · [Before (L8529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8529)

```diff
-           queries: new Float64Array(xp.h.Count),
+           queries: new Float64Array(nT.d.Count),
```

#### 1034. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8543-L8545` → after: `L7752-L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7752-L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7752-L7754) · [Before (L8543-L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8543-L8545)

```diff
-         } = this, Ap = (0, op.d)(ip, pp);
-         cp.queries[xp.h.AnimTime] = Ap, cp.queries[xp.h.LifeTime] = pp;
-         const Pp = ip.loop === Ip.g.Loop;
+         } = this, lT = (0, zT.g)(UT, TT);
+         mT.queries[nT.d.AnimTime] = lT, mT.queries[nT.d.LifeTime] = TT;
+         const LT = UT.loop === MT.l.Loop;
```

#### 1035. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8548` → after: `L7757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7757) · [Before (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8548)

```diff
-           Number.isNaN(Ap) ? Op.fill(0) : (0, op.f)(this.channels[Ip], Ap, Pp, cp, Op), (0, Sp.l)(Yp[pp] + Op[0], Yp[pp + 1] + Op[1], Yp[pp + 2] + Op[2], this.trigs[Ip], Lp), Dp.set(Lp, 4 * Ip)
+           Number.isNaN(lT) ? WT.fill(0) : (0, zT.h)(this.channels[MT], lT, LT, mT, WT), (0, gT.l)(kT[TT] + WT[0], kT[TT + 1] + WT[1], kT[TT + 2] + WT[2], this.trigs[MT], HT), jT.set(HT, 4 * MT)
```

#### 1036. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8556-L8557` → after: `L7765-L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7765-L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7765-L7766) · [Before (L8556-L8557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8556-L8557)

```diff
-       } = (0, Op.c)(), op = cp.find(pp);
-       return null === op ? (console.warn(`Cosmetic attachment clip ${pp} is not a built-in clip`), null) : new Lp(op, cp.variables.createValues(), ip)
+       } = (0, WT.e)(), zT = mT.find(TT);
+       return null === zT ? (console.warn(`Cosmetic attachment clip ${TT} is not a built-in clip`), null) : new HT(zT, mT.variables.createValues(), UT)
```

#### 1037. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8584` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7793) · [Before (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8584)

```diff
-   38335: (pp, ip, cp) => {
+   38250: (TT, UT, mT) => {
```

#### 1038. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8588-L8589` → after: `L7797-L7798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7797-L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7797-L7798) · [Before (L8588-L8589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8588-L8589)

```diff
-     var Op = cp(37313),
-       op = cp(37305);
+     var WT = mT(37185),
+       zT = mT(37176);
```

#### 1039. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8592` → after: `L7801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7801) · [Before (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8592)

```diff
-       xp = new Op.Zy;
+       nT = new WT.JB;
```

#### 1040. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8596` → after: `L7805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7805) · [Before (L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8596)

```diff
-       const Yp = pp.Yk.getState(ip, "animator");
+       const kT = TT.pY.getState(UT, "animator");
```

#### 1041. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8600` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7809) · [Before (L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8600)

```diff
-         FQ: Ap
+         zV: lT
```

#### 1042. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8603` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7812) · [Before (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8603)

```diff
-       const Pp = null !== (Lp = Yp.getDrawnNode(Ip)) && void 0 !== Lp ? Lp : Yp.getDrawnNode(Sp);
+       const LT = null !== (HT = kT.getDrawnNode(MT)) && void 0 !== HT ? HT : kT.getDrawnNode(gT);
```

#### 1043. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8606` → after: `L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7815) · [Before (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8606)

```diff
-       null !== Wp && (Op.Zy.TransformNormalFromFloatsToRef(Pp.currentPosX, Pp.currentPosY, Pp.currentPosZ, Dp.getNodeWorldMatrix(Ap, Wp), xp), cp[0] += xp.x, cp[1] += xp.y, cp[2] += xp.z)
+       null !== pT && (WT.JB.TransformNormalFromFloatsToRef(LT.currentPosX, LT.currentPosY, LT.currentPosZ, jT.getNodeWorldMatrix(lT, pT), nT), mT[0] += nT.x, mT[1] += nT.y, mT[2] += nT.z)
```

#### 1044. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8609` → after: `L7818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7818) · [Before (L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8609)

```diff
-   38077: (pp, ip, cp) => {
+   37981: (TT, UT, mT) => {
```

#### 1045. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8612-L8613` → after: `L7822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7822) · [Before (L8612-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8612-L8613)

```diff
-       f: () => xp,
-       i: () => Sp
+       h: () => gT
```

#### 1046. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8615-L8616` → after: `L7824-L7825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7824-L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7824-L7825) · [Before (L8615-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8615-L8616)

```diff
-     var Op = cp(3246),
-       op = cp(38017);
+     var WT = mT(3289),
+       zT = mT(37919);
```

#### 1047. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8620` → after: `L7829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7829) · [Before (L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8620)

```diff
-       return Op.d.getImagesPerAtlas().length > 1 && op.b.dU()
+       return WT.e.getImagesPerAtlas().length > 1 && zT.e.RB()
```

#### 1048. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8625` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7834) · [Before (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8625)

```diff
-       return cp ? op : (pp + op) / Op.d.getImagesPerAtlas()[0]
+       return mT ? zT : (TT + zT) / WT.e.getImagesPerAtlas()[0]
```

#### 1049. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8628` → after: `L7837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7837) · [Before (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8628)

```diff
-   38100: (pp, ip, cp) => {
+   38007: (TT, UT, mT) => {
```

#### 1050. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8630` → after: `L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7839) · [Before (L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8630)

```diff
-       d: () => Qp,
+       b: () => XT,
```

#### 1051. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8632-L8634` → after: `L7841-L7843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7841-L7843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7841-L7843) · [Before (L8632-L8634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8632-L8634)

```diff
-       g: () => Jp,
-       n: () => gp,
-       r: () => Np
+       f: () => IT,
+       k: () => ST,
+       l: () => sT
```

#### 1052. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8636-L8650` → after: `L7845-L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7845-L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7845-L7859) · [Before (L8636-L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8636-L8650)

```diff
-     var Op = cp(37313),
-       op = cp(4543),
-       Ip = cp(9338),
-       Sp = cp(640),
-       xp = cp(37475),
-       Lp = cp(37519),
-       Yp = cp(38118),
-       Dp = cp(37436),
-       Ap = cp(38045),
-       Pp = cp(38109),
-       Wp = cp(3309),
-       yp = cp(38103),
-       Up = cp(37473),
-       wp = cp(3246),
-       vp = cp(3250);
+     var WT = mT(37185),
+       zT = mT(4581),
+       MT = mT(9330),
+       gT = mT(653),
+       nT = mT(37359),
+       HT = mT(37397),
+       kT = mT(38036),
+       jT = mT(37302),
+       lT = mT(37947),
+       LT = mT(38029),
+       pT = mT(3327),
+       BT = mT(38013),
+       ZT = mT(37351),
+       cT = mT(3289),
+       vT = mT(3292);
```

#### 1053. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8668` → after: `L7877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7877) · [Before (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8668)

```diff
-               const Op = [...null !== (ip = pp.extensionsUsed) && void 0 !== ip ? ip : [], ...null !== (cp = pp.extensionsRequired) && void 0 !== cp ? cp : []];
+               const WT = [...null !== (UT = TT.extensionsUsed) && void 0 !== UT ? UT : [], ...null !== (mT = TT.extensionsRequired) && void 0 !== mT ? mT : []];
```

#### 1054. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8671-L8672` → after: `L7880-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7880-L7881) · [Before (L8671-L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8671-L8672)

```diff
-           const Wp = null !== (ip = Ap.materials) && void 0 !== ip ? ip : [],
-             yp = null !== (cp = Ap.meshes) && void 0 !== cp ? cp : [];
+           const pT = null !== (UT = lT.materials) && void 0 !== UT ? UT : [],
+             BT = null !== (mT = lT.meshes) && void 0 !== mT ? mT : [];
```

#### 1055. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8674` → after: `L7883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7883) · [Before (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8674)

```diff
-           const Up = null !== (Op = yp[0].primitives) && void 0 !== Op ? Op : [];
+           const ZT = null !== (WT = BT[0].primitives) && void 0 !== WT ? WT : [];
```

#### 1056. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8678` → after: `L7887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7887) · [Before (L8678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8678)

```diff
-               const cp = null !== (ip = pp.nodes) && void 0 !== ip ? ip : [];
+               const mT = null !== (UT = TT.nodes) && void 0 !== UT ? UT : [];
```

#### 1057. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8682` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7891) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8682)

```diff
-             vp = null !== (op = wp.pbrMetallicRoughness) && void 0 !== op ? op : {},
+             vT = null !== (zT = cT.pbrMetallicRoughness) && void 0 !== zT ? zT : {},
```

#### 1058. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8686` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7895) · [Before (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8686)

```diff
-           return JSON.stringify([tp, Hp, null !== (Ip = vp.baseColorFactor) && void 0 !== Ip ? Ip : [1, 1, 1, 1], null !== (Sp = wp.emissiveFactor) && void 0 !== Sp ? Sp : [0, 0, 0], null !== (xp = wp.doubleSided) && void 0 !== xp && xp, null !== (Lp = wp.alphaMode) && void 0 !== … [truncated]
+           return JSON.stringify([fT, qT, null !== (MT = vT.baseColorFactor) && void 0 !== MT ? MT : [1, 1, 1, 1], null !== (gT = cT.emissiveFactor) && void 0 !== gT ? gT : [0, 0, 0], null !== (nT = cT.doubleSided) && void 0 !== nT && nT, null !== (HT = cT.alphaMode) && void 0 !== … [truncated]
```

#### 1059. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8715` → after: `L7924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7924) · [Before (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8715)

```diff
-         if ("extensions" === ip && Object.keys(null !== cp && void 0 !== cp ? cp : {}).some((pp => !kp.has(pp))) || Rp(cp)) return !0
+         if ("extensions" === UT && Object.keys(null !== mT && void 0 !== mT ? mT : {}).some((TT => !eT.has(TT))) || JT(mT)) return !0
```

#### 1060. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8727` → after: `L7936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7936) · [Before (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8727)

```diff
-       const Up = null !== (Sp = yp.byteOffset) && void 0 !== Sp ? Sp : 0,
+       const ZT = null !== (gT = BT.byteOffset) && void 0 !== gT ? gT : 0,
```

#### 1061. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8733` → after: `L7942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7942) · [Before (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8733)

```diff
-       return [(Hp = ip.subarray(Up, Up + wp), `${Mp(Hp,2166136261).toString(16)}-${Mp(Hp,1867293075).toString(16)}-${Hp.length}`), Wp.mimeType, null !== (xp = cp.texCoord) && void 0 !== xp ? xp : 0, null !== (Lp = vp.wrapS) && void 0 !== Lp ? Lp : ep, null !== (Yp = vp.wrapT) &&  … [truncated]
+       return [(qT = UT.subarray(ZT, ZT + cT), `${dT(qT,2166136261).toString(16)}-${dT(qT,1867293075).toString(16)}-${qT.length}`), pT.mimeType, null !== (nT = mT.texCoord) && void 0 !== nT ? nT : 0, null !== (HT = vT.wrapS) && void 0 !== HT ? HT : bT, null !== (kT = vT.wrapT) &&  … [truncated]
```

#### 1062. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8741-L8744` → after: `L7950-L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7950-L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7950-L7953) · [Before (L8741-L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8741-L8744)

```diff
-     var Cp = cp(38106),
-       Ep = cp(37537),
-       Xp = cp(37505),
-       lp = cp(2849);
+     var wT = mT(38020),
+       tT = mT(37421),
+       aT = mT(37385),
+       yT = mT(2875);
```

#### 1063. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8749` → after: `L7958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7958) · [Before (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8749)

```diff
-       return Qp * (null !== (ip = pp.modelScale) && void 0 !== ip ? ip : 1)
+       return XT * (null !== (UT = TT.modelScale) && void 0 !== UT ? UT : 1)
```

#### 1064. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8758` → after: `L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7967) · [Before (L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8758)

```diff
-       } = null !== (ip = pp.customModelInfo) && void 0 !== ip ? ip : {}, Lp = null !== (cp = null === (Op = pp.model) || void 0 === Op ? void 0 : Op.split("|")) && void 0 !== cp ? cp : [], Yp = Lp.includes("rotatable") && op.h.includes(Lp[0]), Dp = Yp || "CustomModel" === Lp[0];
+       } = null !== (UT = TT.customModelInfo) && void 0 !== UT ? UT : {}, HT = null !== (mT = null === (WT = TT.model) || void 0 === WT ? void 0 : WT.split("|")) && void 0 !== mT ? mT : [], kT = HT.includes("rotatable") && zT.h.includes(HT[0]), jT = kT || "CustomModel" === HT[0];
```

#### 1065. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8761-L8763` → after: `L7970-L7972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7970-L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7970-L7972) · [Before (L8761-L8763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8761-L8763)

```diff
-         yOffset: Dp ? Ip : 0,
-         yRotation: Yp ? Sp : 0,
-         xRotation: Yp ? xp : 0
+         yOffset: jT ? MT : 0,
+         yRotation: kT ? gT : 0,
+         xRotation: kT ? nT : 0
```

#### 1066. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8768-L8769` → after: `L7977-L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7977-L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L7977-L7978) · [Before (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8768-L8769)

```diff
-       const ip = Ip.e[pp.meta.rootName];
-       return (0, Sp.G)(pp.blockModel) || pp.blockModel === ip.blockModel ? ip : pp
+       const UT = MT.g[TT.meta.rootName];
+       return (0, gT.E)(TT.blockModel) || TT.blockModel === UT.blockModel ? UT : TT
```

#### 1067. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8796-L8797` → after: `L8005-L8006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8005-L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8005-L8006) · [Before (L8796-L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8796-L8797)

```diff
-         emissiveColor: null !== (ip = null === (cp = pp.emissiveColor) || void 0 === cp ? void 0 : cp.join(",")) && void 0 !== ip ? ip : "",
-         textureAnimation: pp.textureAnimation ? `${pp.textureAnimation.frames}x${pp.textureAnimation.animationInterval}` : ""
+         emissiveColor: null !== (UT = null === (mT = TT.emissiveColor) || void 0 === mT ? void 0 : mT.join(",")) && void 0 !== UT ? UT : "",
+         textureAnimation: TT.textureAnimation ? `${TT.textureAnimation.frames}x${TT.textureAnimation.animationInterval}` : ""
```

#### 1068. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8808` → after: `L8017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8017) · [Before (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8808)

```diff
-       if (wp.d.getModelOverride(ip)) return null;
+       if (cT.e.getModelOverride(UT)) return null;
```

#### 1069. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8812` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8021) · [Before (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8812)

```diff
-         const cp = (0, Wp.h)(wp.d.getModel(pp, vp.e.BLOCK).url);
+         const mT = (0, pT.h)(cT.e.getModel(TT, vT.d.BLOCK).url);
```

#### 1070. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8815` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8024) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8815)

```diff
-           Op = mp((0, Wp.d)(cp.base64))
+           WT = YT((0, pT.c)(mT.base64))
```

#### 1071. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8821` → after: `L8030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8030) · [Before (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8821)

```diff
-       return null === Op ? null : `${Op}|${ap(cp)}`
+       return null === WT ? null : `${WT}|${CT(mT)}`
```

#### 1072. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8825` → after: `L8034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8034) · [Before (L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8825)

```diff
-       if ((0, yp.d)(pp), !ip.blockModel) throw new Error(`"${ip.name}" has a GLB model type ("${ip.model}") but no blockModel`);
+       if ((0, BT.e)(TT), !UT.blockModel) throw new Error(`"${UT.name}" has a GLB model type ("${UT.model}") but no blockModel`);
```

#### 1073. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8863-L8866` → after: `L8072-L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8072-L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8072-L8075) · [Before (L8863-L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8863-L8866)

```diff
-           await wp.d.requiredAssetsAreGenerated();
-           const yp = wp.d.getModelOverride(Ip) ? void 0 : Wp.textureAnimation,
-             tp = wp.d.getModel(Ip, vp.e.BLOCK).url,
-             Hp = () => wp.d.getModelOverride(Ip) ? {
+           await cT.e.requiredAssetsAreGenerated();
+           const BT = cT.e.getModelOverride(MT) ? void 0 : pT.textureAnimation,
+             fT = cT.e.getModel(MT, vT.d.BLOCK).url,
+             qT = () => cT.e.getModelOverride(MT) ? {
```

#### 1074. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8869` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8078) · [Before (L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8869)

```diff
-                 rootUrl: wp.d.getModel(Ip, vp.e.BLOCK, !0).url
+                 rootUrl: cT.e.getModel(MT, vT.d.BLOCK, !0).url
```

#### 1075. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8873` → after: `L8082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8082) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8873)

```diff
-           const ep = await (0, Ep.k)("", pp, tp, Hp, (async ip => {
+           const bT = await (0, tT.e)("", TT, fT, qT, (async UT => {
```

#### 1076. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8888-L8889` → after: `L8097-L8098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8097-L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8097-L8098) · [Before (L8888-L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8888-L8889)

```diff
-                   name: `${Ip}BlockModelMeshMat`,
-                   pw: pp,
+                   name: `${MT}BlockModelMeshMat`,
+                   XZ: TT,
```

#### 1077. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8891` → after: `L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8100) · [Before (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8891)

```diff
-                     ...(0, Cp.d)(ip, op, Gp, !!Wp.unlit),
+                     ...(0, wT.b)(UT, zT, GT, !!pT.unlit),
```

#### 1078. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8898` → after: `L8107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8107) · [Before (L8898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8898)

```diff
-                     fillMode: 0 === Op.primitive.mode ? xp.b.PointListDrawMode : xp.b.TriangleFillMode
+                     fillMode: 0 === WT.primitive.mode ? nT.e.PointListDrawMode : nT.e.TriangleFillMode
```

#### 1079. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8901` → after: `L8110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8110) · [Before (L8901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8901)

```diff
-                     (0, Dp.n)(pp, Ap.d, (0, Ap.k)(yp.frames, yp.animationInterval))
+                     (0, jT.m)(TT, lT.b, (0, lT.g)(BT.frames, BT.animationInterval))
```

#### 1080. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8908` → after: `L8117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8117) · [Before (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8908)

```diff
-             const Pp = (await Promise.allSettled([ip.decodeGeometries(), Yp && (0, Lp.A)(Yp)])).find((pp => "rejected" === pp.status));
+             const LT = (await Promise.allSettled([UT.decodeGeometries(), kT && (0, HT.w)(kT)])).find((TT => "rejected" === TT.status));
```

#### 1081. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8918` → after: `L8127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8127) · [Before (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8918)

```diff
-           if (!dp) throw new Error(`"${Ip}" imported no renderable mesh`);
+           if (!iT) throw new Error(`"${MT}" imported no renderable mesh`);
```

#### 1082. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8922` → after: `L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8131) · [Before (L8922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8922)

```diff
-           } = dp, mp = null !== (op = dp.material) && void 0 !== op ? op : await cp, Rp = (0, Up.u)(ep, jp);
+           } = iT, YT = null !== (zT = iT.material) && void 0 !== zT ? zT : await mT, JT = (0, ZT.o)(bT, OT);
```

#### 1083. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8925` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8134) · [Before (L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8925)

```diff
-           (0, Pp.i)(Rp, ep.worldMatrix(jp, !0, Sp.scale), !0);
+           (0, LT.h)(JT, bT.worldMatrix(OT, !0, gT.scale), !0);
```

#### 1084. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8934` → after: `L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8143) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8934)

```diff
-           qp.isIdentity() || (0, Pp.i)(Rp, qp.m, !0);
+           xT.isIdentity() || (0, LT.h)(JT, xT.m, !0);
```

#### 1085. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8936-L8938` → after: `L8145-L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8145-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8145-L8147) · [Before (L8936-L8938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8936-L8938)

```diff
-           Wp.unlit || kp || (Rp.named.color = (0, Up.r)(Rp.positions.length / 3, Up.e, Rp.named.color));
-           const Mp = (0, Yp.o)((0, lp.g)().WU, `${Ip}blockGlbMesh`, Rp);
-           return Mp.sideOrientation = xp.b.ClockWiseSideOrientation, Mp.rotationQuaternion = jp.part ? null : Op.Quaternion.Identity(), Mp.hasVertexAlpha = !jp.primitive.draco && (0, Cp.g)(jp.primitive), Mp.material = mp, Mp.Ow = !1, Mp
+           pT.unlit || eT || (JT.named.color = (0, ZT.l)(JT.positions.length / 3, ZT.b, JT.named.color));
+           const dT = (0, kT.m)((0, yT.h)().GB, `${MT}blockGlbMesh`, JT);
+           return dT.sideOrientation = nT.e.ClockWiseSideOrientation, dT.rotationQuaternion = OT.part ? null : WT.Quaternion.Identity(), dT.hasVertexAlpha = !OT.primitive.draco && (0, wT.f)(OT.primitive), dT.material = YT, dT.QZ = !1, dT
```

#### 1086. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8957` → after: `L8166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8166) · [Before (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8957)

```diff
-   38103: (pp, ip, cp) => {
+   38013: (TT, UT, mT) => {
```

#### 1087. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8959` → after: `L8168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8168) · [Before (L8959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8959)

```diff
-       d: () => Op
+       e: () => WT
```

#### 1088. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8964` → after: `L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8173) · [Before (L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8964)

```diff
-   38134: (pp, ip, cp) => {
+   38066: (TT, UT, mT) => {
```

#### 1089. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8968` → after: `L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8177) · [Before (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8968)

```diff
-     var Op = cp(37720);
+     var WT = mT(37610);
```

#### 1090. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8985` → after: `L8194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8194) · [Before (L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8985)

```diff
-   38276: (pp, ip, cp) => {
+   38193: (TT, UT, mT) => {
```

#### 1091. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8987-L8988` → after: `L8196-L8197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8196-L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8196-L8197) · [Before (L8987-L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8987-L8988)

```diff
-       b: () => xp,
-       d: () => Lp
+       e: () => nT,
+       g: () => HT
```

#### 1092. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8990-L8992` → after: `L8199-L8201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8199-L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8199-L8201) · [Before (L8990-L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8990-L8992)

```diff
-     var Op = cp(37720),
-       op = cp(37676),
-       Ip = cp(37473);
+     var WT = mT(37610),
+       zT = mT(37559),
+       MT = mT(37351);
```

#### 1093. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L8996-L8998` → after: `L8205-L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8205-L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8205-L8207) · [Before (L8996-L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L8996-L8998)

```diff
-       const xp = pp.WU.HLp[cp];
-       xp.eC(!0);
-       const Lp = pp.UW.XT(pp.nH(ip)),
+       const nT = TT.GB.AnT[mT];
+       nT.Qy(!0);
+       const HT = TT.DL.bK(TT.uq(UT)),
```

#### 1094. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9000-L9001` → after: `L8209-L8210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8209-L8210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8209-L8210) · [Before (L9000-L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9000-L9001)

```diff
-         Dp = ip.map(((ip, cp) => ip + (Yp[cp] + Yp[cp + 3]) / 2 - pp.BP[cp]));
-       xp.ei.set(Yp[3] - Yp[0], Yp[4] - Yp[1], Yp[5] - Yp[2]);
+         jT = UT.map(((UT, mT) => UT + (kT[mT] + kT[mT + 3]) / 2 - TT.ZL[mT]));
+       nT.gp.set(kT[3] - kT[0], kT[4] - kT[1], kT[5] - kT[2]);
```

#### 1095. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9009-L9011` → after: `L8218-L8220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8218-L8220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8218-L8220) · [Before (L9009-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9009-L9011)

```diff
-             Ip = Op ? xp.ei.y : op ? xp.ei.z : xp.ei.x,
-             Sp = Op ? xp.ei.z : op ? xp.ei.x : xp.ei.y;
-           return .5 + (pp - .5) * (ip % 2 === 0 ? Ip : Sp)
+             MT = WT ? nT.gp.y : zT ? nT.gp.z : nT.gp.x,
+             gT = WT ? nT.gp.z : zT ? nT.gp.x : nT.gp.y;
+           return .5 + (TT - .5) * (UT % 2 === 0 ? MT : gT)
```

#### 1096. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9013` → after: `L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8222) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9013)

```diff
-       return (0, Ip.A)(xp, (() => {
+       return (0, MT.t)(nT, (() => {
```

#### 1097. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9015` → after: `L8224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8224) · [Before (L9015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9015)

```diff
-       })), (0, op.r)(xp, Dp[0], Dp[1], Dp[2]), xp
+       })), (0, zT.n)(nT, jT[0], jT[1], jT[2]), nT
```

#### 1098. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9023` → after: `L8232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8232) · [Before (L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9023)

```diff
-           ei: cp
+           gp: mT
```

#### 1099. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9025` → after: `L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8234) · [Before (L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9025)

```diff
-         ip[Lp].ei.set(cp.x, 1 / Op, cp.z), (0, op.r)(ip[Lp], pp.x, (0 === Lp ? 1 : -1) * (Ip - Sp / (2 * Op)), pp.z)
+         UT[HT].gp.set(mT.x, 1 / WT, mT.z), (0, zT.n)(UT[HT], TT.x, (0 === HT ? 1 : -1) * (MT - gT / (2 * WT)), TT.z)
```

#### 1100. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9030` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8239) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9030)

```diff
-           ei: Yp
+           gp: kT
```

#### 1101. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9032` → after: `L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8241) · [Before (L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9032)

```diff
-         ip[Lp].ei.set(1 / cp, (xp * Op - 2 * Sp) / ((xp - 2 * Sp) * Op), Yp.z), (0, op.r)(ip[Lp], (2 === Lp ? -1 : 1) * (Ip - Sp / (2 * cp)), pp.y, pp.z)
+         UT[HT].gp.set(1 / mT, (nT * WT - 2 * gT) / ((nT - 2 * gT) * WT), kT.z), (0, zT.n)(UT[HT], (2 === HT ? -1 : 1) * (MT - gT / (2 * mT)), TT.y, TT.z)
```

#### 1102. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9036` → after: `L8245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8245) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9036)

```diff
-   37305: (pp, ip, cp) => {
+   37176: (TT, UT, mT) => {
```

#### 1103. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9044-L9049` → after: `L8253-L8258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8253-L8258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8253-L8258) · [Before (L9044-L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9044-L9049)

```diff
-     var Op = cp(337),
-       op = cp(1927),
-       Ip = cp(37385),
-       Sp = cp(37403),
-       xp = cp(37313),
-       Lp = cp(37376);
+     var WT = mT(366),
+       zT = mT(2014),
+       MT = mT(37253),
+       gT = mT(37270),
+       nT = mT(37185),
+       HT = mT(37246);
```

#### 1104. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9116` → after: `L8325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8325) · [Before (L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9116)

```diff
-           } = Dp, Pp = Ap.currentAnimationType, yp = null !== Pp && Pp !== Ip.e.Movement;
+           } = jT, LT = lT.currentAnimationType, BT = null !== LT && LT !== MT.g.Movement;
```

#### 1105. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9147` → after: `L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8356) · [Before (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9147)

```diff
-             tp[0] = -Pp[0], tp[1] = -Pp[1], tp[2] = -Pp[2], tp[3] = Pp[3], pp.takeoverRotation.set([ip.x, ip.y, ip.z, ip.w]), (0, Lp.h)(tp, pp.takeoverRotation, pp.takeoverRotation), pp.takeoverPosition.set([Ip.currentPosX, Ip.currentPosY, Ip.currentPosZ]);
+             fT[0] = -LT[0], fT[1] = -LT[1], fT[2] = -LT[2], fT[3] = LT[3], TT.takeoverRotation.set([UT.x, UT.y, UT.z, UT.w]), (0, HT.j)(fT, TT.takeoverRotation, TT.takeoverRotation), TT.takeoverPosition.set([MT.currentPosX, MT.currentPosY, MT.currentPosZ]);
```

#### 1106. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9151` → after: `L8360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8360) · [Before (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9151)

```diff
-           if (pp.takeover += (1 - pp.takeover) * (0, Lp.o)(12, op), pp.takeover > .999) pp.takeover = 1;
+           if (TT.takeover += (1 - TT.takeover) * (0, HT.n)(12, zT), TT.takeover > .999) TT.takeover = 1;
```

#### 1107. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9174` → after: `L8383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8383) · [Before (L9174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9174)

```diff
-           (0, Lp.h)(Pp, vp, vp);
+           (0, HT.j)(LT, vT, vT);
```

#### 1108. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9191` → after: `L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8400) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9191)

```diff
-         return (Op[0] !== ip.baseRotX || Op[1] !== ip.baseRotY || Op[2] !== ip.baseRotZ) && (Op[0] = ip.baseRotX, Op[1] = ip.baseRotY, Op[2] = ip.baseRotZ, xp.Quaternion.RotationYawPitchRollToRef(ip.baseRotY, ip.baseRotX, ip.baseRotZ, Hp), cp[0] = Hp.x, cp[1] = Hp.y, cp[2] = Hp.z … [truncated]
+         return (WT[0] !== UT.baseRotX || WT[1] !== UT.baseRotY || WT[2] !== UT.baseRotZ) && (WT[0] = UT.baseRotX, WT[1] = UT.baseRotY, WT[2] = UT.baseRotZ, nT.Quaternion.RotationYawPitchRollToRef(UT.baseRotY, UT.baseRotX, UT.baseRotZ, qT), mT[0] = qT.x, mT[1] = qT.y, mT[2] = qT.z … [truncated]
```

#### 1109. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9216-L9217` → after: `L8425-L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8425-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8425-L8426) · [Before (L9216-L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9216-L9217)

```diff
-         const [Sp, xp, Lp] = Op.d.eulerYXZFromQuaternion(Ip.thinNode.rotationQuat);
-         Ip.currentRotX = Op.d.computeShortestRotation(Ip.baseRotX, Sp), Ip.currentRotY = Op.d.computeShortestRotation(Ip.baseRotY, xp), Ip.currentRotZ = Op.d.computeShortestRotation(Ip.baseRotZ, Lp), op ? (pp.heldForClip = !0, Ip.rotX = Ip.currentRotX, Ip.rotY = Ip.currentRotY, I … [truncated]
+         const [gT, nT, HT] = WT.e.eulerYXZFromQuaternion(MT.thinNode.rotationQuat);
+         MT.currentRotX = WT.e.computeShortestRotation(MT.baseRotX, gT), MT.currentRotY = WT.e.computeShortestRotation(MT.baseRotY, nT), MT.currentRotZ = WT.e.computeShortestRotation(MT.baseRotZ, HT), zT ? (TT.heldForClip = !0, MT.rotX = MT.currentRotX, MT.rotY = MT.currentRotY, M … [truncated]
```

#### 1110. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9238` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8447) · [Before (L9238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9238)

```diff
-     var mp = cp(37387);
+     var YT = mT(37259);
```

#### 1111. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9242` → after: `L8451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8451) · [Before (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9242)

```diff
-       const Ip = pp.WU.EQ,
+       const MT = TT.GB.mV,
```

#### 1112. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9244` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8453) · [Before (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9244)

```diff
-           NJ: Sp
+           VV: gT
```

#### 1113. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9246` → after: `L8455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8455) · [Before (L9246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9246)

```diff
-       return Ip.has(cp) && Ip.getCulledForEntity(cp, ip) && ip !== Sp && (null === (Op = pp.Yk.qcp(ip)) || void 0 === Op ? void 0 : Op.vy) !== Sp && (null === (op = pp.Yk.qcp(Sp)) || void 0 === op ? void 0 : op.vy) !== ip
+       return MT.has(mT) && MT.getCulledForEntity(mT, UT) && UT !== gT && (null === (WT = TT.pY.LmT(UT)) || void 0 === WT ? void 0 : WT.UB) !== gT && (null === (zT = TT.pY.LmT(gT)) || void 0 === zT ? void 0 : zT.UB) !== UT
```

#### 1114. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9250` → after: `L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8459) · [Before (L9250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9250)

```diff
-         this.yJ = void 0, this.HP = void 0, this.thinInstMgr = void 0, this.FQ = null, this.iOp = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = pp => {
+         this.bV = void 0, this.Rl = void 0, this.thinInstMgr = void 0, this.zV = null, this.PmT = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = TT => {
```

#### 1115. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9260` → after: `L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8469) · [Before (L9260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9260)

```diff
-           Do: op
+           EW: zT
```

#### 1116. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9269` → after: `L8478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8478) · [Before (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9269)

```diff
-           Do: Op
+           EW: WT
```

#### 1117. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9281` → after: `L8490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8490) · [Before (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9281)

```diff
-         (null === (ip = this.rigPose) || void 0 === ip ? void 0 : ip.controller) !== pp && (null === (cp = this.rigPose) || void 0 === cp || cp.releaseAll(this.thinInstMgr, this.FQ), this.rigPose = null === pp ? null : new ep(pp, ((pp, ip) => this.getRigNodeTransform(pp, ip)), (( … [truncated]
+         (null === (UT = this.rigPose) || void 0 === UT ? void 0 : UT.controller) !== TT && (null === (mT = this.rigPose) || void 0 === mT || mT.releaseAll(this.thinInstMgr, this.zV), this.rigPose = null === TT ? null : new bT(TT, ((TT, UT) => this.getRigNodeTransform(TT, UT)), (( … [truncated]
```

#### 1118. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9287` → after: `L8496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8496) · [Before (L9287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9287)

```diff
-         return null !== (pp = null === (ip = this.rigPose) || void 0 === ip ? void 0 : ip.controller) && void 0 !== pp ? pp : null
+         return null !== (TT = null === (UT = this.rigPose) || void 0 === UT ? void 0 : UT.controller) && void 0 !== TT ? TT : null
```

#### 1119. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9291` → after: `L8500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8500) · [Before (L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9291)

```diff
-         return null !== (ip = this.nodeTransforms[this.getAliasedNodeName(pp)]) && void 0 !== ip ? ip : null
+         return null !== (UT = this.nodeTransforms[this.getAliasedNodeName(TT)]) && void 0 !== UT ? UT : null
```

#### 1120. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9295-L9296` → after: `L8504-L8505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8504-L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8504-L8505) · [Before (L9295-L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9295-L9296)

```diff
-           if (this.thinInstMgr.getNamedNodeOrNull(this.FQ, Jp) !== ip) return null;
-           const pp = `${Jp}#${ip}`;
+           if (this.thinInstMgr.getNamedNodeOrNull(this.zV, IT) !== UT) return null;
+           const TT = `${IT}#${UT}`;
```

#### 1121. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9299-L9300` → after: `L8508-L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8508-L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8508-L8509) · [Before (L9299-L9300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9299-L9300)

```diff
-         const cp = this.getOrCreateTransformIfNodeExists(ip === Bp ? Jp : pp);
-         return (null === cp || void 0 === cp ? void 0 : cp.thinNodeIndex) === ip ? cp : null
+         const mT = this.getOrCreateTransformIfNodeExists(UT === QT ? IT : TT);
+         return (null === mT || void 0 === mT ? void 0 : mT.thinNodeIndex) === UT ? mT : null
```

#### 1122. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9303` → after: `L8512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8512) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9303)

```diff
-         if (this.thinInstMgr.has(this.FQ))
+         if (this.thinInstMgr.has(this.zV))
```

#### 1123. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9315` → after: `L8524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8524) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9315)

```diff
-             cp || this.thinInstMgr.setNodePosition(this.FQ, ip, Op, op, Ip), this.thinInstMgr.setNodeRotationEuler(this.FQ, ip, Sp, xp, Lp), Wp(pp, this.thinInstMgr, this.FQ)
+             mT || this.thinInstMgr.setNodePosition(this.zV, UT, WT, zT, MT), this.thinInstMgr.setNodeRotationEuler(this.zV, UT, gT, nT, HT), pT(TT, this.thinInstMgr, this.zV)
```

#### 1124. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9332` → after: `L8541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8541) · [Before (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9332)

```diff
-         null !== op && void 0 !== op && op.scaleBase ? (op.scaleBase = [ip, cp, Op], Pp(op, this.thinInstMgr, this.FQ)) : this.thinInstMgr.setNodeScale(this.FQ, pp, ip, cp, Op)
+         null !== zT && void 0 !== zT && zT.scaleBase ? (zT.scaleBase = [UT, mT, WT], LT(zT, this.thinInstMgr, this.zV)) : this.thinInstMgr.setNodeScale(this.zV, TT, UT, mT, WT)
```

#### 1125. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9337` → after: `L8546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8546) · [Before (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9337)

```diff
-           if (!this.iOp.cOp) return;
+           if (!this.PmT.VmT) return;
```

#### 1126. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9341` → after: `L8550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8550) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9341)

```diff
-         if (!this.iOp.cOp) return;
+         if (!this.PmT.VmT) return;
```

#### 1127. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9345` → after: `L8554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8554) · [Before (L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9345)

```diff
-         null !== Ip && (this.rigFrame++, Sp = Ip.apply((pp + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.FQ, this.writeRigNodePosition, ip)), this.paused = !1, this.pausedDt = 0;
+         null !== MT && (this.rigFrame++, gT = MT.apply((TT + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.zV, this.writeRigNodePosition, UT)), this.paused = !1, this.pausedDt = 0;
```

#### 1128. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9349` → after: `L8558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8558) · [Before (L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9349)

```diff
-           if (!op.thinNode.cOp) {
+           if (!zT.thinNode.VmT) {
```

#### 1129. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9356` → after: `L8565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8565) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9356)

```diff
-           null !== pp && 0 !== pp.rotation.length ? this.renderNodeAnimatedRotation(op, Op) : op.isRotDirty && this.flushNodeRotation(op, Op), null !== pp && 0 !== pp.position.length ? this.renderNodeAnimatedPosition(op, Op) : op.isPosDirty && this.flushNodePosition(op, Op), null … [truncated]
+           null !== TT && 0 !== TT.rotation.length ? this.renderNodeAnimatedRotation(zT, WT) : zT.isRotDirty && this.flushNodeRotation(zT, WT), null !== TT && 0 !== TT.position.length ? this.renderNodeAnimatedPosition(zT, WT) : zT.isPosDirty && this.flushNodePosition(zT, WT), null … [truncated]
```

#### 1130. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9370` → after: `L8579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8579) · [Before (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9370)

```diff
-           if (Op.LP(pp), !Op.hasCurrentAnimationFinished()) {
+           if (WT.Cl(TT), !WT.hasCurrentAnimationFinished()) {
```

#### 1131. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9375` → after: `L8584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8584) · [Before (L9375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9375)

```diff
-           op.Yo !== Ip.j.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(op, cp), this.stopAnimation(cp)) : (Op.rewindPastLoops(), this.rewindNodeAnimationTimelines(op, cp), ip = !0)
+           zT.NW !== MT.k.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(zT, mT), this.stopAnimation(mT)) : (WT.rewindPastLoops(), this.rewindNodeAnimationTimelines(zT, mT), UT = !0)
```

#### 1132. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9381` → after: `L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8590) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9381)

```diff
-           Do: cp
+           EW: mT
```

#### 1133. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9391` → after: `L8600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8600) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9391)

```diff
-           Do: cp
+           EW: mT
```

#### 1134. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9413` → after: `L8622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R8622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L8622) · [Before (L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L9413)

```diff
-               pp[0] = ip[0], pp[1] = ip[1], pp[2] = ip[2], Pp(op, this.thinInstMgr, this.FQ)
+               TT[0] = UT[0], TT[1] = UT[1], TT[2] = UT[2], LT(zT, this.thinInstMgr, this.zV)
```
