# Changed — Bundle Modifications Report (Part 019 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `19 / 140` (**402** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4683 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 2537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18410-L18421` → after: `L18384-L18396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18384-L18396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18384-L18396) · [Before (L18410-L18421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18410-L18421)

```diff
-               if (SS[wS[13]] = wS[2], !SS[wS[1]]) return -wS[2];
-               const HS = NS(SS[wS[1]].left),
-                 gS = NS(SS[wS[1]].right),
-                 tS = Math.abs(HS - gS);
-               if (HS === 1 / 0 || gS === 1 / 0 || tS > wS[2]) return 1 / 0;
-               return Math.max(HS, gS) + wS[2]
-             }
-             SS[wS[13]] = wS[1], window[HS(wS[43]) + tS(122) + tS(123) + "_"] = {
-               buildCharacterMap: bS,
-               isAnagrams: XS,
-               isBalanced: xS,
-               getHeightBalanced: NS
+               Sk(kk[sk[13]] = sk[1], kk[sk[49]] = function(...kk) {
+                 for (Sk(kk[sk[13]] = sk[2], kk[sk[47]] = kk[sk[1]].length, kk[sk[15]] = [], kk[sk[29]] = sk[1], kk[sk[48]] = sk[1], kk[sk[1]].sort(((kk, Fk) => kk - Fk))), kk[sk[46]] = sk[1]; kk[sk[46]] < kk[sk[47]]; kk[sk[46]]++)
+                   if (!(kk[sk[46]] > sk[1] && kk[sk[1]][kk[sk[46]]] === kk[sk[1]][kk[sk[46]] - sk[2]]))
+                     for (Sk(kk[sk[29]] = kk[sk[46]] + sk[2], kk[sk[48]] = kk[sk[47]] - sk[2]); kk[sk[29]] < kk[sk[48]];)
+                       if (kk[sk[1]][kk[sk[46]]] + kk[sk[1]][kk[sk[29]]] + kk[sk[1]][kk[sk[48]]] < sk[1]) kk[sk[29]]++;
+                       else if (kk[sk[1]][kk[sk[46]]] + kk[sk[1]][kk[sk[29]]] + kk[sk[1]][kk[sk[48]]] > sk[1]) kk[sk[48]]--;
+                 else {
+                   for (kk[sk[15]].push([kk[sk[1]][kk[sk[46]]], kk[sk[1]][kk[sk[29]]], kk[sk[1]][kk[sk[48]]]]); kk[sk[29]] < kk[sk[48]] && kk[sk[1]][kk[sk[29]]] === kk[sk[1]][kk[sk[29]] + sk[2]];) kk[sk[29]]++;
+                   for (; kk[sk[29]] < kk[sk[48]] && kk[sk[1]][kk[sk[48]]] === kk[sk[1]][kk[sk[48]] - sk[2]];) kk[sk[48]]--;
+                   Sk(kk[sk[29]]++, kk[sk[48]]--)
+                 }
+                 return kk[sk[15]]
+               }, console.log(kk[sk[49]]))
```

#### 2538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18423` → after: `L18398-L18409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18398-L18409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18398-L18409) · [Before (L18423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18423)

```diff
-           }(), gS = wS[50]
+             Fk(79) + "u" in zk && Xk();
+             let Tk = {
+               [Fk(sk[66]) + "pb"]: Fk(sk[14]) + Fk(82),
+               [Fk(83) + "zi"]: Fk(84),
+               [Fk(85) + Fk(sk[52])]: Fk(sk[21]) + Fk(sk[39]),
+               [Fk(89)]: Fk(90),
+               [Fk(sk[35]) + Fk(92)]: Fk(93)
+             };
+             Sk(Ik = sk[50], (0, xk[Fk(94)])(Pk.qi, Tk))
+           }
+         }), 2011), (0, xk[Fk(95) + Fk(96)])((() => {
+           Ik = sk[51]
```

#### 2539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18427` → after: `L18413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18413) · [Before (L18427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18427)

```diff
-       if ([][wS[13]] = wS[1], function(...SS) {
+       if (function(...kk) {
```

#### 2540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18429-L18431` → after: `L18415-L18417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18415-L18417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18415-L18417) · [Before (L18429-L18431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18429-L18431)

```diff
-             for (OS(SS[wS[13]] = wS[2], SS[wS[58]] = '`WTdCLKVApUDMFboPIBYXNuR;1xSr3Hhs[E@tQv5jc]8i"!Z$76z={+/_0()~%,#*}>w9e2f.^n<kmaq|l&GgJ4?:Oy', SS[wS[30]] = "" + (SS[wS[1]] || ""), SS[wS[31]] = SS[wS[30]].length, SS[wS[7]] = [], SS[wS[48]] = wS[1], SS[wS[17]] = wS[1], SS[wS[5 … [truncated]
-               if (SS[wS[10]] = SS[wS[58]].indexOf(SS[wS[30]][SS[wS[11]]]), SS[wS[10]] !== -wS[2])
-                 if (SS[wS[59]] < wS[1]) SS[wS[59]] = SS[wS[10]];
+             for (Sk(kk[sk[13]] = sk[2], kk[-sk[53]] = '=wu*^eb,3tFRThAs4a([XU8fB9WE.c>Qd6|rZ;Y0#gS&V1ky`GM+5N<liPpIzH?C){"$7j@xL%!oJq}m2_D/:K]~vnO', kk[sk[52]] = "" + (kk[sk[1]] || ""), kk[sk[22]] = kk[sk[52]].length, kk[sk[56]] = [], kk[sk[54]] = sk[1], kk[-sk[55]] = sk[1], kk[s … [truncated]
+               if (kk[-sk[34]] = kk[-sk[53]].indexOf(kk[sk[52]][kk[sk[43]]]), kk[-sk[34]] !== -sk[2])
+                 if (kk[sk[7]] < sk[1]) kk[sk[7]] = kk[-sk[34]];
```

#### 2541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18433` → after: `L18419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18419) · [Before (L18433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18433)

```diff
-                   OS(SS[wS[59]] += SS[wS[10]] * wS[36], SS[wS[48]] |= SS[wS[59]] << SS[wS[17]], SS[wS[17]] += (SS[wS[59]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
+                   Sk(kk[sk[7]] += kk[-sk[34]] * sk[35], kk[sk[54]] |= kk[sk[7]] << kk[-sk[55]], kk[-sk[55]] += (kk[sk[7]] & sk[38]) > sk[39] ? sk[40] : sk[41]);
```

#### 2542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18435-L18438` → after: `L18421-L18424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18421-L18424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18421-L18424) · [Before (L18435-L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18435-L18438)

```diff
-                     OS(SS[wS[7]].push(SS[wS[48]] & wS[12]), SS[wS[48]] >>= wS[11], SS[wS[17]] -= wS[11])
-                   } while (SS[wS[17]] > wS[7]);
-                   SS[wS[59]] = -wS[2]
-                 } return SS[wS[59]] > -wS[2] && SS[wS[7]].push((SS[wS[48]] | SS[wS[59]] << SS[wS[17]]) & wS[12]), ZS(SS[wS[7]])
+                     Sk(kk[sk[56]].push(kk[sk[54]] & sk[12]), kk[sk[54]] >>= sk[11], kk[-sk[55]] -= sk[11])
+                   } while (kk[-sk[55]] > sk[26]);
+                   kk[sk[7]] = -sk[2]
+                 } return kk[sk[7]] > -sk[2] && kk[sk[56]].push((kk[sk[54]] | kk[sk[7]] << kk[-sk[55]]) & sk[12]), Vk(kk[sk[56]])
```

#### 2543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18440-L18446` → after: `L18426-L18478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18426-L18478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18426-L18478) · [Before (L18440-L18446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18440-L18446)

```diff
-         }(124) + "F" in JS && function(...SS) {
-           OS(SS[wS[13]] = wS[1], SS[wS[29]] = function(...HS) {
-             return OS(HS[wS[13]] = wS[31], HS[wS[60]] = {}), HS[wS[20]].length !== HS[wS[1]].length + HS[wS[2]].length ? wS[50] : SS[wS[2]](HS[wS[1]], HS[wS[2]], HS[wS[20]], wS[1], wS[1], wS[1], HS[wS[60]])
-           }, SS[wS[2]] = function(...HS) {
-             return OS(HS[wS[13]] = wS[7], HS[wS[7]] = wS[50]), HS[wS[48]] >= HS[wS[20]].length ? wS[53] : HS[wS[26]]["" + HS[wS[31]] + HS[wS[10]] + HS[wS[48]]] !== wS[19] ? HS[wS[26]]["" + HS[wS[31]] + HS[wS[10]] + HS[wS[48]]] : (HS[wS[20]][HS[wS[48]]] === HS[wS[1]][HS[wS[31]]] & … [truncated]
-           }, console.log(SS[wS[29]]))
-         }(), wS[53]) {
+         }(97) + "M" in zk && function(...kk) {
+           function Fk(...kk) {
+             for (Sk(kk[sk[13]] = sk[2], kk[sk[5]] = '5sBpFh_U79^]SRV<m?!vH,:#eQaIw|0zZ6Jr$4cbLP/q"dD8+>xiOu1W%to;C~*3fYMylEn&K(NA@T.[=2G)`j{}Xkg', kk[sk[15]] = "" + (kk[sk[1]] || ""), kk[sk[22]] = kk[sk[15]].length, kk[sk[48]] = [], kk[sk[59]] = sk[1], kk[sk[60]] = sk[1], kk[sk[5 … [truncated]
+               if (kk[sk[45]] = kk[sk[5]].indexOf(kk[sk[15]][kk[-sk[57]]]), kk[sk[45]] !== -sk[2])
+                 if (kk[sk[58]] < sk[1]) kk[sk[58]] = kk[sk[45]];
+                 else {
+                   Sk(kk[sk[58]] += kk[sk[45]] * sk[35], kk[sk[59]] |= kk[sk[58]] << kk[sk[60]], kk[sk[60]] += (kk[sk[58]] & sk[38]) > sk[39] ? sk[40] : sk[41]);
+                   do {
+                     Sk(kk[sk[48]].push(kk[sk[59]] & sk[12]), kk[sk[59]] >>= sk[11], kk[sk[60]] -= sk[11])
+                   } while (kk[sk[60]] > sk[26]);
+                   kk[sk[58]] = -sk[2]
+                 } return kk[sk[58]] > -sk[2] && kk[sk[48]].push((kk[sk[59]] | kk[sk[58]] << kk[sk[60]]) & sk[12]), Vk(kk[sk[48]])
+           }
+ 
+           function Ik(...kk) {
+             return kk[sk[13]] = sk[2], typeof Zk[kk[sk[1]]] === sk[18] ? Zk[kk[sk[1]]] = Fk(jk[kk[sk[1]]]) : Zk[kk[sk[1]]]
+ ... (37 more added lines; see GitHub link above)
```

#### 2544. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18448-L18450` → after: `L18480-L18482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18480-L18482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18480-L18482) · [Before (L18448-L18450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18448-L18450)

```diff
-           for (OS(SS[wS[13]] = wS[2], SS[wS[62]] = 'w/^v!ziKtGRsH,J_2MkYA~(T6p.35WrmNFu}|D#gxL]*7f&PE+:IQynq8"C4lO%Uj>1eoXd$);`S@[c?=ahb0{9VB<Z', SS[wS[30]] = "" + (SS[wS[1]] || ""), SS[-wS[61]] = SS[wS[30]].length, SS[-wS[63]] = [], SS[wS[48]] = wS[1], SS[wS[26]] = wS[1], SS[wS[ … [truncated]
-             if (SS[wS[44]] = SS[wS[62]].indexOf(SS[wS[30]][SS[-wS[16]]]), SS[wS[44]] !== -wS[2])
-               if (SS[wS[7]] < wS[1]) SS[wS[7]] = SS[wS[44]];
+           for (Sk(kk[sk[13]] = sk[2], kk[-sk[63]] = 'dPactCeBNbpf5O8Uu*~+Gn&)ZF%V"qk?sr}Yzml4@HwK!L02iI<gR$XA]h|/QEo>1(D^M:{j[xS=JT;793`,#W_y.v6', kk[sk[0]] = "" + (kk[sk[1]] || ""), kk[sk[62]] = kk[sk[0]].length, kk[-sk[65]] = [], kk[sk[36]] = sk[1], kk[-sk[64]] = sk[1], kk[sk[2 … [truncated]
+             if (kk[sk[45]] = kk[-sk[63]].indexOf(kk[sk[0]][kk[sk[61]]]), kk[sk[45]] !== -sk[2])
+               if (kk[sk[26]] < sk[1]) kk[sk[26]] = kk[sk[45]];
```

#### 2545. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18452` → after: `L18484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18484) · [Before (L18452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18452)

```diff
-                 OS(SS[wS[7]] += SS[wS[44]] * wS[36], SS[wS[48]] |= SS[wS[7]] << SS[wS[26]], SS[wS[26]] += (SS[wS[7]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
+                 Sk(kk[sk[26]] += kk[sk[45]] * sk[35], kk[sk[36]] |= kk[sk[26]] << kk[-sk[64]], kk[-sk[64]] += (kk[sk[26]] & sk[38]) > sk[39] ? sk[40] : sk[41]);
```

#### 2546. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18454-L18457` → after: `L18486-L18489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18486-L18489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18486-L18489) · [Before (L18454-L18457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18454-L18457)

```diff
-                   OS(SS[-wS[63]].push(SS[wS[48]] & wS[12]), SS[wS[48]] >>= wS[11], SS[wS[26]] -= wS[11])
-                 } while (SS[wS[26]] > wS[7]);
-                 SS[wS[7]] = -wS[2]
-               } return SS[wS[7]] > -wS[2] && SS[-wS[63]].push((SS[wS[48]] | SS[wS[7]] << SS[wS[26]]) & wS[12]), ZS(SS[-wS[63]])
+                   Sk(kk[-sk[65]].push(kk[sk[36]] & sk[12]), kk[sk[36]] >>= sk[11], kk[-sk[64]] -= sk[11])
+                 } while (kk[-sk[64]] > sk[26]);
+                 kk[sk[26]] = -sk[2]
+               } return kk[sk[26]] > -sk[2] && kk[-sk[65]].push((kk[sk[36]] | kk[sk[26]] << kk[-sk[64]]) & sk[12]), Vk(kk[-sk[65]])
```

#### 2547. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18465-L18483` → after: `L18497-L18498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18497-L18498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18497-L18498) · [Before (L18465-L18483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18465-L18483)

```diff
-           var HS;
-           OS(SS[wS[13]] = wS[1], HS = function(...SS) {
-             OS(SS[wS[13]] = wS[2], this.hf = SS[wS[1]], this.length = wS[1], this.map = {}, this.head = wS[64], this.tail = wS[64])
-           }, HS.prototype.get = function(...SS) {
-             var HS;
-             return OS(SS[wS[13]] = wS[2], HS = this.map[SS[wS[1]]]), HS ? (this.remove(HS), this.insert(HS.key, HS.val), HS.val) : -wS[2]
-           }, HS.prototype.put = function(...SS) {
-             OS(SS[wS[13]] = wS[20], this.map[SS[wS[1]]] ? (this.remove(this.map[SS[wS[1]]]), this.insert(SS[wS[1]], SS[wS[2]])) : this.length === this.hf ? (this.remove(this.head), this.insert(SS[wS[1]], SS[wS[2]])) : (this.insert(SS[wS[1]], SS[wS[2]]), this.length++))
-           }, HS.prototype.remove = function(...SS) {
-             OS(SS[wS[13]] = wS[2], SS[wS[29]] = SS[wS[1]].prev, SS[wS[30]] = SS[wS[1]].next), SS[wS[30]] && (SS[wS[30]].prev = SS[wS[29]]), SS[wS[29]] && (SS[wS[29]].next = SS[wS[30]]), this.head === SS[wS[1]] && (this.head = SS[wS[30]]), this.tail === SS[wS[1]] && (this.tail = S … [truncated]
-           }, HS.prototype.insert = function(...SS) {
-             OS(SS[wS[13]] = wS[20], SS[wS[29]] = new List(SS[wS[1]], SS[wS[2]]), this.tail ? (this.tail.next = SS[wS[29]], SS[wS[29]].prev = this.tail, this.tail = SS[wS[29]]) : (this.tail = SS[wS[29]], this.head = SS[wS[29]]), this.map[SS[wS[1]]] = SS[wS[29]])
-           }, console.log(HS))
-         }
-         HS(125) in JS && gS();
-         let tS = wS[50];
- ... (3 more removed lines; see GitHub link above)
+           function Fk(...kk) {
+             return kk[sk[13]] = sk[2], typeof Zk[kk[sk[1]]] === sk[18] ? Zk[kk[sk[1]]] = function(kk) {
```

#### 2548. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18486` → after: `L18501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18501) · [Before (L18486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18486)

```diff
-                 var qS = '.CYSsuDw)fot{5z@h~gm*!<%LB+Ji7q`aE]kxUVpl1y"nMO&XPFR;Z0Qrd|83IHAGev2K/>(jN$=?,TbW[4c:#^_6}9'.indexOf(HS[NS]);
+                 var ak = '$Bv{g&+szw,pN2=A>o[H9|Juq]hXZf376WTiDy?:0I#SGQ}E@M1%aK_~)<xPtn4clR5jVYdLC!8k^Urb/(.FO*"m`e;'.indexOf(Fk[lk]);
```

#### 2549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18490` → after: `L18505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18505) · [Before (L18490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18490)

```diff
-                     OS(xS += qS * wS[36], bS |= xS << XS, XS += (xS & wS[39]) > wS[40] ? wS[41] : wS[42]);
+                     Sk(yk += ak * sk[35], Tk |= yk << ik, ik += (yk & sk[38]) > sk[39] ? sk[40] : sk[41]);
```

#### 2550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18493` → after: `L18508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18508) · [Before (L18493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18493)

```diff
-                     } while (XS > wS[7]);
+                     } while (ik > sk[26]);
```

#### 2551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18504-L18505` → after: `L18538-L18539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18538-L18539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18538-L18539) · [Before (L18504-L18505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18504-L18505)

```diff
-               [HS(126) + HS(wS[65])]: gS(wS[66]),
-               [gS(wS[35]) + "k"]: gS(130) + "xx"
+               [Fk(sk[6]) + Fk(116)]: Ik(sk[56]),
+               [Ik(sk[42]) + "k"]: Ik(119) + "xx"
```

#### 2552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18507` → after: `L18541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18541) · [Before (L18507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18507)

```diff
-             OS(tS = wS[53], (0, nS[gS(131)])(PS.bj, bS))
+             Sk(Xk = sk[50], (0, xk[Ik(120)])(Pk.si, Tk))
```

#### 2553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18509-L18531` → after: `L18543-L18544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18543-L18544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18543-L18544) · [Before (L18509-L18531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18509-L18531)

```diff
-         }), 8158), (0, nS[HS(132) + HS(133)])(((...SS) => {
-           SS[wS[13]] = wS[1],
-             function(SS) {
-               return typeof kS[SS] === wS[18] ? kS[SS] = function(...SS) {
-                 for (OS(SS[wS[13]] = wS[2], SS[wS[69]] = 'PzA<Yg:*5Gi>403f}+1#?_xDh].r[yb^QTN%LX6qkB=o7JVM,we&2!EvSCu"|`mHd/ZpIRFOcs;tK8$~9jUna{l@)W(', SS[-wS[68]] = "" + (SS[wS[1]] || ""), SS[-wS[67]] = SS[-wS[68]].length, SS[wS[10]] = [], SS[wS[8]] = wS[1], SS[wS[17]] = wS[1],  … [truncated]
-                   if (SS[wS[44]] = SS[wS[69]].indexOf(SS[-wS[68]][SS[wS[3]]]), SS[wS[44]] !== -wS[2])
-                     if (SS[wS[7]] < wS[1]) SS[wS[7]] = SS[wS[44]];
-                     else {
-                       OS(SS[wS[7]] += SS[wS[44]] * wS[36], SS[wS[8]] |= SS[wS[7]] << SS[wS[17]], SS[wS[17]] += (SS[wS[7]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
-                       do {
-                         OS(SS[wS[10]].push(SS[wS[8]] & wS[12]), SS[wS[8]] >>= wS[11], SS[wS[17]] -= wS[11])
-                       } while (SS[wS[17]] > wS[7]);
-                       SS[wS[7]] = -wS[2]
-                     } return SS[wS[7]] > -wS[2] && SS[wS[10]].push((SS[wS[8]] | SS[wS[7]] << SS[wS[17]]) & wS[12]), ZS(SS[wS[10]])
-               }(aS[SS]) : kS[SS]
-             }(wS[71]) in JS && function(...SS) {
- ... (7 more removed lines; see GitHub link above)
+         }), 15768), (0, xk[Fk(121) + Fk(122)])((() => {
+           Xk = sk[51]
```

#### 2554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18535-L18543` → after: `L18548-L18549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18548-L18549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18548-L18549) · [Before (L18535-L18543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18535-L18543)

```diff
-     var dS, cS, vS, ES, LS, YS, AS, yS, VS, iS = gS(38162),
-       WS = gS(38169),
-       zS = gS(37247),
-       US = gS(37441),
-       pS = gS(37193),
-       sS = gS(38494),
-       BS = gS(3320),
-       MS = gS(3325),
-       FS = gS(37322),
+     var vk, Ek, Ok, nk, Gk, pk, uk, bk, Rk, Uk = Ik(38123),
+       Ck = Ik(38126),
```

#### 2555. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18545-L18546` → after: `L18551-L18559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18551-L18559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18551-L18559) · [Before (L18545-L18546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18545-L18546)

```diff
-       TS = gS(37242),
-       oS = gS(37225);
+       ck = Ik(37457),
+       Wk = Ik(37236),
+       fk = Ik(38445),
+       Bk = Ik(3089),
+       dk = Ik(3096),
+       Yk = Ik(37352),
+       Ak = Ik(37324),
+       gk = Ik(37277),
+       mk = Ik(37259);
```

#### 2556. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18552` → after: `L18565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18565) · [Before (L18552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18552)

```diff
-           Bj: gS,
+           Yw: Ik,
```

#### 2557. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18559` → after: `L18572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18572) · [Before (L18559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18559)

```diff
-           } = bS[XS], xS = BS.d.getTexture(`${HS}${XS}_Atlas`, MS.g.LIFEFORM_ATLAS).url, {
+           } = Tk[ik], yk = Bk.b.getTexture(`${Fk}${ik}_Atlas`, dk.j.LIFEFORM_ATLAS).url, {
```

#### 2558. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18562-L18563` → after: `L18575-L18576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18575-L18576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18575-L18576) · [Before (L18562-L18563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18562-L18563)

```diff
-             name: `${HS}${XS}SpriteSheet`,
-             Bj: gS,
+             name: `${Fk}${ik}SpriteSheet`,
+             Yw: Ik,
```

#### 2559. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18571` → after: `L18584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18584) · [Before (L18571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18571)

```diff
-                 samplingMode: TS.h.nearestNearestMipLinear,
+                 samplingMode: gk.i.nearestNearestMipLinear,
```

#### 2560. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18580` → after: `L18593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18593) · [Before (L18580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18580)

```diff
-               (0, WS.d)(HS, SS, 1, 1), (0, oS.p)(HS, zS.d), (0, US.c)(HS, (0, CS.e)().Hj), (0, pS.d)(HS), (0, oS.Q)(HS)
+               (0, Ck.c)(Fk, kk, 1, 1), (0, mk.v)(Fk, Nk.d), (0, ck.c)(Fk, (0, Jk.e)().Xw), (0, Wk.c)(Fk), (0, mk.O)(Fk)
```

#### 2561. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18589` → after: `L18602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18602) · [Before (L18589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18589)

```diff
-         if (!tS) return void console.error(`No texture metadata found for variation "${gS}" of mob type "${HS}"`);
+         if (!Xk) return void console.error(`No texture metadata found for variation "${Ik}" of mob type "${Fk}"`);
```

#### 2562. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18605-L18620` → after: `L18618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18618) · [Before (L18605-L18620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18605-L18620)

```diff
-     const mS = [2, 0, 1, "h", "c", "a", "i", 29, 5, 90, 189, 8, 255, "length", "d", 3, 159, 4, "undefined", void 0, 201, 66, 63, 6, "fromCodePoint", 7, 12, "push", 88, 198, 9, "g", 91, "e", "f", 8191, 13, 14, 162, 15, 145, 35, 118, 133, 52, 160, 16, 512, "b", 223, 243, 161, 62, 1 … [truncated]
- 
-     function eS(SS) {
-       return typeof dS[SS] === mS[18] ? dS[SS] = function(...SS) {
-         for (gH(SS[mS[13]] = mS[2], SS[mS[5]] = '&57z=~:*u6^$4y9>D]Q}OkAqJ8mvKrh/E|iwoYx#ZfSLU)+l0P(Bd.1VHjCcMFpG,I_e"32`?s@;R%[{<!bTXngNWat', SS[mS[0]] = "" + (SS[mS[1]] || ""), SS[mS[4]] = SS[mS[0]].length, SS[mS[10]] = [], SS[mS[8]] = mS[1], SS[mS[9]] = mS[1], SS[-mS[7]] = -mS … [truncated]
-           if (SS[mS[6]] = SS[mS[5]].indexOf(SS[mS[0]][SS[mS[3]]]), SS[mS[6]] !== -mS[2])
-             if (SS[-mS[7]] < mS[1]) SS[-mS[7]] = SS[mS[6]];
-             else {
-               gH(SS[-mS[7]] += SS[mS[6]] * mS[32], SS[mS[8]] |= SS[-mS[7]] << SS[mS[9]], SS[mS[9]] += (SS[-mS[7]] & mS[35]) > mS[28] ? mS[36] : mS[37]);
-               do {
-                 gH(SS[mS[10]].push(SS[mS[8]] & mS[12]), SS[mS[8]] >>= mS[11], SS[mS[9]] -= mS[11])
-               } while (SS[mS[9]] > mS[25]);
-               SS[-mS[7]] = -mS[2]
-             } return SS[-mS[7]] > -mS[2] && SS[mS[10]].push((SS[mS[8]] | SS[-mS[7]] << SS[mS[9]]) & mS[12]), rS(SS[mS[10]])
-       }(cS[SS]) : dS[SS]
-     }
+     const rk = [1, "b", 0, "h", "c", 21, 7, "e", 6, "d", 8, 255, "length", "undefined", "a", void 0, 23, 2, 63, "fromCodePoint", 12, "push", 33, 3, "i", "j", 91, 220, "g", 8191, 88, 13, 14, 4, 18, 34, 243, 197, 190, "f", 206, 11, 9, 10, 150, 59, 110, 126, 5, 69, !0, !1];
```

#### 2563. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18623-L18627` → after: `L18621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18621) · [Before (L18623-L18627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18623-L18627)

```diff
-       return SS[mS[13]] = mS[2], typeof ES !== mS[18] && ES ? (new ES).decode(new LS(SS[mS[1]])) : typeof YS !== mS[18] && YS ? YS.from(SS[mS[1]]).toString("utf-8") : VS(SS[mS[1]])
-     }
- 
-     function SH(...SS) {
-       if (SS[mS[13]] = mS[15], SS[mS[1]] === eS(mS[28])) return SS[mS[2]] + SS[mS[0]]
+       return kk[rk[12]] = rk[0], typeof nk !== rk[13] && nk ? (new nk).decode(new Gk(kk[rk[2]])) : typeof pk !== rk[13] && pk ? pk.from(kk[rk[2]]).toString("utf-8") : Rk(kk[rk[2]])
```

#### 2564. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18635-L18636` → after: `L18629-L18630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18629-L18630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18629-L18630) · [Before (L18635-L18636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18635-L18636)

```diff
-     gH(dS = {}, cS = ["@O{R>pOu&G]yPMxY5EJ[7!W++cE", 'y",Bt|&', "P4e~GV&", "{O1KNTR+x,R%yo3/ur[dnd*f04vv5", "QBd/lBwwNy@%h9`J1B^;I.xhs]+*:!+m:6V6", "LZ(uM0}w(4JR?`trq1`KtRUZ1y", "2zh=WTRQEkm3|Paq", '^4`R<dSCNy+/5DJSH]drG%cG}6hC"TNrV9SBwn!*69&O3=mq;&', 'vZ`dF0QJ|6,9PMzQ`S"mo[m7*', … [truncated]
-       gH(SS[mS[13]] = mS[1], SS[mS[16]] = [function() {
+     kF(vk = {}, Ek = ['n.l4ULv,JK"g]a~,1FCHUcyK<"@J}wY,C6dnX', '(ICd8$32TBQ@QWkT>m|(;@4`&KW5iGjXBF"/!;Aq#X', "rT?H$.j(UtfGqP9x|?Iii+`jo8y%;I,j.:i<}6q@y1a2be+^", "Tk%4<#]C", "AI+iyO~,b2=brG;G(^vhL&F`h+HQlWK", "{#Z_G|gz1Val/!X!Wp}xMp2Cn?p.CGtXvz>FG#K+s1A]lW", 'iFsp$Hp(4:wYgtjPwp.4V … [truncated]
+       var kk, Fk, Ik, Xk = [function() {
```

#### 2565. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18644` → after: `L18638-L18639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18638-L18639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18638-L18639) · [Before (L18644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18644)

```diff
-       }], SS[mS[4]] = mS[19], SS[mS[14]] = []);
+       }];
+       kF(kk = void 0, Fk = []);
```

#### 2566. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18646` → after: `L18641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18641) · [Before (L18646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18646)

```diff
-         gH(SS[mS[4]] = Object, SS[mS[14]][mS[27]]("".__proto__.constructor.name))
+         kF(kk = Object, Fk[rk[21]]("".__proto__.constructor.name))
```

#### 2567. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18648-L18651` → after: `L18643-L18647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18643-L18647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18643-L18647) · [Before (L18648-L18651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18648-L18651)

```diff
-       SS: for (SS[mS[15]] = mS[1]; SS[mS[15]] < SS[mS[16]][mS[13]]; SS[mS[15]]++) try {
-         for (SS[mS[4]] = SS[mS[16]][SS[mS[15]]](), SS[mS[17]] = mS[1]; SS[mS[17]] < SS[mS[14]][mS[13]]; SS[mS[17]]++)
-           if (typeof SS[mS[4]][SS[mS[14]][SS[mS[17]]]] === mS[18]) continue SS;
-         return SS[mS[4]]
+       kk: for (Ik = rk[2]; Ik < Xk[rk[12]]; Ik++) try {
+         var Tk;
+         for (kk = Xk[Ik](), Tk = rk[2]; Tk < Fk[rk[12]]; Tk++)
+           if (typeof kk[Fk[Tk]] === rk[13]) continue kk;
+         return kk
```

#### 2568. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18653-L18655` → after: `L18649-L18651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18649-L18651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18649-L18651) · [Before (L18653-L18655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18653-L18655)

```diff
-       return SS[mS[4]] || this
-     }() || {}, ES = vS.TextDecoder, LS = vS.Uint8Array, YS = vS.CK, AS = vS.String || String, yS = vS.Array || Array, VS = function(...SS) {
-       return gH(SS[mS[13]] = mS[1], SS[mS[5]] = new yS(mS[59]), SS[mS[2]] = AS[mS[24]] || AS.fromCharCode, SS[mS[0]] = []),
+       return kk || this
+     }() || {}, nk = Ok.TextDecoder, Gk = Ok.Uint8Array, pk = Ok.je, uk = Ok.String || String, bk = Ok.Array || Array, Rk = function(...kk) {
+       return kF(kk[rk[12]] = rk[2], kk[rk[14]] = new bk(128), kk[-rk[22]] = uk[rk[19]] || uk.fromCharCode, kk[rk[4]] = []),
```

#### 2569. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18657-L18658` → after: `L18653-L18654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18653-L18654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18653-L18654) · [Before (L18657-L18658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18657-L18658)

```diff
-           for (gH(HS[mS[13]] = mS[2], HS[mS[2]] = mS[19], HS[mS[0]] = mS[19], HS[mS[21]] = HS[mS[1]][mS[13]], SS[mS[0]][mS[13]] = mS[1]), HS[mS[20]] = mS[1]; HS[mS[20]] < HS[mS[21]];) gH(HS[mS[0]] = HS[mS[1]][HS[mS[20]]++], HS[mS[0]] <= mS[57] ? HS[mS[2]] = HS[mS[0]] : HS[mS[0]]  … [truncated]
-           return SS[mS[0]].join("")
+           for (kF(Fk[rk[12]] = rk[0], Fk[rk[14]] = rk[15], Fk[rk[17]] = rk[15], Fk[-rk[16]] = Fk[rk[2]][rk[12]], kk[rk[4]][rk[12]] = rk[2]), Fk[rk[9]] = rk[2]; Fk[rk[9]] < Fk[-rk[16]];) kF(Fk[rk[17]] = Fk[rk[2]][Fk[rk[9]]++], Fk[rk[17]] <= 127 ? Fk[rk[14]] = Fk[rk[17]] : Fk[rk[17 … [truncated]
+           return kk[rk[4]].join("")
```

#### 2570. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18661` → after: `L18657-L18678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18657-L18678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18657-L18678) · [Before (L18661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18661)

```diff
-       if (mS[69]) {
+       if ([][rk[12]] = rk[2], function(...kk) {
+           return kk[rk[12]] = rk[0], typeof vk[kk[rk[2]]] === rk[13] ? vk[kk[rk[2]]] = function(...kk) {
+             for (kF(kk[rk[12]] = rk[0], kk[rk[35]] = 'F~7xD+tZj_rq|bO>45VI]ga?w,X9T#ei{yG6$k(flK<h03}!CB&;:MJ*Lz.v8Ap@dH%EuS"21)^om[`Rn=/YNPQsWUc', kk[rk[17]] = "" + (kk[rk[2]] || ""), kk[rk[23]] = kk[rk[17]].length, kk[-rk[34]] = [], kk[rk[7]] = rk[2], kk[rk[37]] = rk[2], kk[-rk … [truncated]
+               if (kk[rk[24]] = kk[rk[35]].indexOf(kk[rk[17]][kk[rk[3]]]), kk[rk[24]] !== -rk[0])
+                 if (kk[-rk[36]] < rk[2]) kk[-rk[36]] = kk[rk[24]];
+                 else {
+                   kF(kk[-rk[36]] += kk[rk[24]] * rk[26], kk[rk[7]] |= kk[-rk[36]] << kk[rk[37]], kk[rk[37]] += (kk[-rk[36]] & rk[29]) > rk[30] ? rk[31] : rk[32]);
+                   do {
+                     kF(kk[-rk[34]].push(kk[rk[7]] & rk[11]), kk[rk[7]] >>= rk[10], kk[rk[37]] -= rk[10])
+                   } while (kk[rk[37]] > rk[6]);
+                   kk[-rk[36]] = -rk[0]
+                 } return kk[-rk[36]] > -rk[0] && kk[-rk[34]].push((kk[rk[7]] | kk[-rk[36]] << kk[rk[37]]) & rk[11]), Dk(kk[-rk[34]])
+           }(Ek[kk[rk[2]]]) : vk[kk[rk[2]]]
+         }(95) + rk[4] in Mk && function(...kk) {
+           kF(kk[rk[12]] = rk[2], kk[-rk[44]] = function(...kk) {
+             if (kF(kk[rk[12]] = rk[0], kk[rk[14]] = kk[rk[2]].length), kk[rk[14]] < rk[17]) return rk[2];
+ ... (6 more added lines; see GitHub link above)
```

#### 2571. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18663-L18665` → after: `L18680-L18682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18680-L18682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18680-L18682) · [Before (L18663-L18665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18663-L18665)

```diff
-           for (gH(SS[mS[13]] = mS[2], SS[-mS[29]] = '!GhsEtFj#~r$_L0&Ku+2x<}A)e*>dv1k(wypD.gcOZBHznU?/bqV@"[`QR=8l^XTPN4o5MfSJi6;%9{m|C37W]I,Ya:', SS[mS[0]] = "" + (SS[mS[1]] || ""), SS[mS[4]] = SS[mS[0]].length, SS[-mS[38]] = [], SS[mS[33]] = mS[1], SS[mS[34]] = mS[1], SS[mS[31] … [truncated]
-             if (SS[mS[30]] = SS[-mS[29]].indexOf(SS[mS[0]][SS[mS[3]]]), SS[mS[30]] !== -mS[2])
-               if (SS[mS[31]] < mS[1]) SS[mS[31]] = SS[mS[30]];
+           for (kF(kk[rk[12]] = rk[0], kk[rk[14]] = ')^u$[;5bD8CV%pm(i#*x?EeHG`kqhYB{vKA]F7~3dojlUgMy:w0RJW2>64zfQ/N9!}<cTZI,S_|=Xr@1.sL&Pta+On"', kk[-rk[45]] = "" + (kk[rk[2]] || ""), kk[-rk[47]] = kk[-rk[45]].length, kk[rk[9]] = [], kk[rk[48]] = rk[2], kk[rk[39]] = rk[2], kk[rk[ … [truncated]
+             if (kk[rk[24]] = kk[rk[14]].indexOf(kk[-rk[45]][kk[-rk[46]]]), kk[rk[24]] !== -rk[0])
+               if (kk[rk[6]] < rk[2]) kk[rk[6]] = kk[rk[24]];
```

#### 2572. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18667` → after: `L18684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18684) · [Before (L18667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18667)

```diff
-                 gH(SS[mS[31]] += SS[mS[30]] * mS[32], SS[mS[33]] |= SS[mS[31]] << SS[mS[34]], SS[mS[34]] += (SS[mS[31]] & mS[35]) > mS[28] ? mS[36] : mS[37]);
+                 kF(kk[rk[6]] += kk[rk[24]] * rk[26], kk[rk[48]] |= kk[rk[6]] << kk[rk[39]], kk[rk[39]] += (kk[rk[6]] & rk[29]) > rk[30] ? rk[31] : rk[32]);
```

#### 2573. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18669-L18672` → after: `L18686-L18689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18686-L18689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18686-L18689) · [Before (L18669-L18672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18669-L18672)

```diff
-                   gH(SS[-mS[38]].push(SS[mS[33]] & mS[12]), SS[mS[33]] >>= mS[11], SS[mS[34]] -= mS[11])
-                 } while (SS[mS[34]] > mS[25]);
-                 SS[mS[31]] = -mS[2]
-               } return SS[mS[31]] > -mS[2] && SS[-mS[38]].push((SS[mS[33]] | SS[mS[31]] << SS[mS[34]]) & mS[12]), rS(SS[-mS[38]])
+                   kF(kk[rk[9]].push(kk[rk[48]] & rk[11]), kk[rk[48]] >>= rk[10], kk[rk[39]] -= rk[10])
+                 } while (kk[rk[39]] > rk[6]);
+                 kk[rk[6]] = -rk[0]
+               } return kk[rk[6]] > -rk[0] && kk[rk[9]].push((kk[rk[48]] | kk[rk[6]] << kk[rk[39]]) & rk[11]), Dk(kk[rk[9]])
```

#### 2574. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18676` → after: `L18693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18693) · [Before (L18676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18676)

```diff
-           return HS[mS[13]] = mS[2], typeof dS[HS[mS[1]]] === mS[18] ? dS[HS[mS[1]]] = SS(cS[HS[mS[1]]]) : dS[HS[mS[1]]]
+           return Fk[rk[12]] = rk[0], typeof vk[Fk[rk[2]]] === rk[13] ? vk[Fk[rk[2]]] = kk(Ek[Fk[rk[2]]]) : vk[Fk[rk[2]]]
```

#### 2575. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18678` → after: `L18695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18695) · [Before (L18678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18678)

```diff
-         let gS = mS[70];
+         let Ik = rk[51];
```

#### 2576. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18680` → after: `L18697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18697) · [Before (L18680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18680)

```diff
-           if (!gS && (0, CS[mS[33]])()) {
+           if (!Ik && (0, Jk[rk[7]])()) {
```

#### 2577. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18682-L18684` → after: `L18699-L18701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18699-L18701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18699-L18701) · [Before (L18682-L18684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18682-L18684)

```diff
-               for (gH(SS[mS[13]] = mS[2], SS[mS[2]] = '+YmAHTrf:9>V3(*#&eL;htbB8Snw"@G%Eals1NvdP)IUC.JMQO2p=ckWXy4!^}0z<K5${q`xj[],~Zi|u_7R/DF6o?g', SS[mS[40]] = "" + (SS[mS[1]] || ""), SS[-mS[39]] = SS[mS[40]].length, SS[mS[17]] = [], SS[-mS[42]] = mS[1], SS[mS[34]] = mS[1], SS[ … [truncated]
-                 if (SS[mS[6]] = SS[mS[2]].indexOf(SS[mS[40]][SS[mS[41]]]), SS[mS[6]] !== -mS[2])
-                   if (SS[-mS[20]] < mS[1]) SS[-mS[20]] = SS[mS[6]];
+               for (kF(kk[rk[12]] = rk[0], kk[-rk[49]] = '8AlqBNbnScpiRKJHPz#~+LC<$xXOr(_W%Q};5D]Y|{0GfE"gwUystma971[o!ZF.Ie=dM2T3,V6>kjh:&^?v)`u4@*/', kk[rk[1]] = "" + (kk[rk[2]] || ""), kk[rk[23]] = kk[rk[1]].length, kk[rk[33]] = [], kk[rk[48]] = rk[2], kk[rk[44]] = rk[2], kk[rk … [truncated]
+                 if (kk[rk[42]] = kk[-rk[49]].indexOf(kk[rk[1]][kk[rk[10]]]), kk[rk[42]] !== -rk[0])
+                   if (kk[rk[6]] < rk[2]) kk[rk[6]] = kk[rk[42]];
```

#### 2578. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18686` → after: `L18703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18703) · [Before (L18686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18686)

```diff
-                     gH(SS[-mS[20]] += SS[mS[6]] * mS[32], SS[-mS[42]] |= SS[-mS[20]] << SS[mS[34]], SS[mS[34]] += (SS[-mS[20]] & mS[35]) > mS[28] ? mS[36] : mS[37]);
+                     kF(kk[rk[6]] += kk[rk[42]] * rk[26], kk[rk[48]] |= kk[rk[6]] << kk[rk[44]], kk[rk[44]] += (kk[rk[6]] & rk[29]) > rk[30] ? rk[31] : rk[32]);
```

#### 2579. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18688-L18695` → after: `L18705-L18708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18705-L18708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18705-L18708) · [Before (L18688-L18695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18688-L18695)

```diff
-                       gH(SS[mS[17]].push(SS[-mS[42]] & mS[12]), SS[-mS[42]] >>= mS[11], SS[mS[34]] -= mS[11])
-                     } while (SS[mS[34]] > mS[25]);
-                     SS[-mS[20]] = -mS[2]
-                   } return SS[-mS[20]] > -mS[2] && SS[mS[17]].push((SS[-mS[42]] | SS[-mS[20]] << SS[mS[34]]) & mS[12]), rS(SS[mS[17]])
-             }
- 
-             function HS(...HS) {
-               return HS[mS[13]] = mS[2], typeof dS[HS[mS[1]]] === mS[18] ? dS[HS[mS[1]]] = SS(cS[HS[mS[1]]]) : dS[HS[mS[1]]]
+                       kF(kk[rk[33]].push(kk[rk[48]] & rk[11]), kk[rk[48]] >>= rk[10], kk[rk[44]] -= rk[10])
+                     } while (kk[rk[44]] > rk[6]);
+                     kk[rk[6]] = -rk[0]
+                   } return kk[rk[6]] > -rk[0] && kk[rk[33]].push((kk[rk[48]] | kk[rk[6]] << kk[rk[44]]) & rk[11]), Dk(kk[rk[33]])
```

#### 2580. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18699-L18854` → after: `L18712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18712) · [Before (L18699-L18854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18699-L18854)

```diff
-               gH(SS[mS[13]] = mS[1], SS[mS[4]] = function(...SS) {
-                 function gS(...SS) {
-                   return SS[mS[13]] = mS[0], xS(bS(NS(SS[mS[1]]), NS(SS[mS[2]])))
-                 }
- 
-                 function tS(...SS) {
-                   return SS[mS[13]] = mS[15],
-                     function(...SS) {
-                       var HS, gS, tS, bS;
-                       for (gH(SS[mS[13]] = mS[0], SS[mS[5]] = SS[mS[2]].length, SS[-mS[10]] = Array()), SS[mS[17]] = Array(Math.ceil(SS[mS[1]].length / mS[0])), HS = mS[1]; HS < SS[mS[17]].length; HS++) SS[mS[17]][HS] = SS[mS[1]].charCodeAt(HS * mS[0]) << mS[11] | SS[mS[1]].charC … [truncated]
-                       for (; SS[mS[17]].length > mS[1];) {
-                         for (gH(bS = Array(), tS = mS[1]), HS = mS[1]; HS < SS[mS[17]].length; HS++) gH(tS = (tS << mS[46]) + SS[mS[17]][HS], gS = Math.floor(tS / SS[mS[5]]), tS -= gS * SS[mS[5]]), (bS.length > mS[1] || gS > mS[1]) && (bS[bS.length] = gS);
-                         gH(SS[-mS[10]][SS[-mS[10]].length] = tS, SS[mS[17]] = bS)
-                       }
-                       for (SS[mS[8]] = "", HS = SS[-mS[10]].length - mS[2]; HS >= mS[1]; HS--) SS[mS[8]] += SS[mS[2]].charAt(SS[-mS[10]][HS]);
-                       for (SS[mS[33]] = Math.ceil(SS[mS[1]].length * mS[11] / (Math.log(SS[mS[2]].length) / Math.log(mS[0]))), HS = SS[mS[8]].length; HS < SS[mS[33]]; HS++) SS[mS[8]] = SS[mS[2]][mS[1]] + SS[mS[8]];
- ... (140 more removed lines; see GitHub link above)
+               return Fk[rk[12]] = rk[0], typeof vk[Fk[rk[2]]] === rk[13] ? vk[Fk[rk[2]]] = kk(Ek[Fk[rk[2]]]) : vk[Fk[rk[2]]]
```

#### 2581. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18858-L18864` → after: `L18715-L18721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18715-L18721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18715-L18721) · [Before (L18858-L18864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18858-L18864)

```diff
-               [HS(109) + "y"]: HS(110),
-               [HS(111) + HS(112) + "5n"]: HS(113) + HS(114),
-               [HS(mS[54]) + HS(116)]: HS(117) + "qd",
-               [HS(mS[42]) + HS(119)]: HS(120) + HS(121),
-               [HS(122) + "6p"]: HS(123),
-               [HS(124) + "7w"]: HS(125),
-               [HS(126)]: HS(mS[57]) + HS(mS[59]) + "9"
+               [Fk(96) + "y"]: Fk(97),
+               [Fk(98) + Fk(99) + "5n"]: Fk(100) + Fk(101),
+               [Fk(102) + Fk(103)]: Fk(104) + "qd",
+               [Fk(105) + Fk(106)]: Fk(107) + Fk(108),
+               [Fk(109) + "6p"]: Fk(rk[46]),
+               [Fk(111) + "7w"]: Fk(112),
+               [Fk(113)]: Fk(114) + Fk(115) + "9"
```

#### 2582. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18866` → after: `L18723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18723) · [Before (L18866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18866)

```diff
-             gH(gS = mS[69], (0, nS[HS(mS[53])])(PS.dj, bS))
+             kF(Ik = rk[50], (0, xk[Fk(116)])(Pk.ti, Xk))
```

#### 2583. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18868-L18885` → after: `L18725-L18726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18725-L18726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18725-L18726) · [Before (L18868-L18885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18868-L18885)

```diff
-         }), 14256), (0, nS[HS(130) + HS(131)])(((...SS) => {
-           SS[mS[13]] = mS[1], HS(132) + "4" in HH && function(...SS) {
-             SS[mS[13]] = mS[1];
-             const gS = require("path"),
-               {
-                 version: tS
-               } = require("../../package"),
-               {
-                 version: bS
-               } = require("@redacted/enterprise-plugin/package"),
-               {
-                 version: XS
-               } = require("@redacted/components/package"),
-               {
-                 sdkVersion: xS
-               } = require("@redacted/enterprise-plugin");
- ... (2 more removed lines; see GitHub link above)
+         }), 16567), (0, xk[Fk(117) + Fk(118)])((() => {
+           Ik = rk[51]
```

#### 2584. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18889` → after: `L18730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18730) · [Before (L18889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18889)

```diff
-     var tH = gS(680);
+     var FF = Ik(628);
```

#### 2585. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19002` → after: `L18843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18843) · [Before (L19002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19002)

```diff
-     class XH extends KS.e {
+     class XF extends ek.b {
```

#### 2586. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19004` → after: `L18845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18845) · [Before (L19004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19004)

```diff
-         if (super(SS), SS.lifeformType !== xH) throw new Error(`NPC Meshes are not supported for lifeform type "${SS.lifeformType}"`)
+         if (super(kk), kk.lifeformType !== TF) throw new Error(`NPC Meshes are not supported for lifeform type "${kk.lifeformType}"`)
```

#### 2587. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19007` → after: `L18848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18848) · [Before (L19007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19007)

```diff
-         const tS = (0, CS.e)().Hj.fY.getEntityId(SS),
+         const Xk = (0, Jk.e)().Xw.kp.getEntityId(kk),
```

#### 2588. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19028` → after: `L18869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18869) · [Before (L19028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19028)

```diff
-               xS.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", SS)
+               yk.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", kk)
```

#### 2589. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19036` → after: `L18877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18877) · [Before (L19036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19036)

```diff
-               xS.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", SS)
+               yk.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", kk)
```

#### 2590. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19044` → after: `L18885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18885) · [Before (L19044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19044)

```diff
-               xS.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", SS)
+               yk.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", kk)
```

#### 2591. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19053` → after: `L18894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18894) · [Before (L19053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19053)

```diff
-             super.onChangeClient(SS, HS), "ownerDbId" === SS && this.setCollarVisible(!(0, tH.K)(HS))
+             super.onChangeClient(kk, Fk), "ownerDbId" === kk && this.setCollarVisible(!(0, FF.Q)(Fk))
```

#### 2592. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19056` → after: `L18897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18897) · [Before (L19056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19056)

```diff
-             xS.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", SS)
+             yk.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", kk)
```

#### 2593. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19061` → after: `L18902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18902) · [Before (L19061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19061)

```diff
-         Player: KS.e,
+         Player: ek.b,
```

#### 2594. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19064` → after: `L18905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18905) · [Before (L19064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19064)

```diff
-       IH = Object.fromEntries(Object.entries(tS.d).map((SS => {
+       aF = Object.fromEntries(Object.entries(Xk.b).map((kk => {
```

#### 2595. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19068` → after: `L18909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18909) · [Before (L19068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19068)

```diff
-           xS = null !== (HS = uH[gS]) && void 0 !== HS ? HS : lS,
+           yk = null !== (Fk = lF[Ik]) && void 0 !== Fk ? Fk : hk,
```

#### 2596. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19082` → after: `L18923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18923) · [Before (L19082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19082)

```diff
-                 atlas: null === SS.atlasTexture ? BS.d.getArmourAtlas() : BS.d.getTexture(SS.atlasTexture, MS.g.LIFEFORM_ATLAS).url,
+                 atlas: null === kk.atlasTexture ? Bk.b.getArmourAtlas() : Bk.b.getTexture(kk.atlasTexture, dk.j.LIFEFORM_ATLAS).url,
```

#### 2597. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19091` → after: `L18932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18932) · [Before (L19091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19091)

```diff
-           Kx: qH[tS.handler],
+           Zy: yF[Xk.handler],
```

#### 2598. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19097` → after: `L18938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18938) · [Before (L19097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19097)

```diff
-   38147: (SS, HS, gS) => {
+   38109: (kk, Fk, Ik) => {
```

#### 2599. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19101` → after: `L18942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18942) · [Before (L19101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19101)

```diff
-     var tS = gS(37276);
+     var Xk = Ik(37314);
```

#### 2600. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19104` → after: `L18945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18945) · [Before (L19104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19104)

```diff
-       return null !== HS && void 0 !== HS ? HS : tS.b[SS]
+       return null !== Fk && void 0 !== Fk ? Fk : Xk.c[kk]
```

#### 2601. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19107` → after: `L18948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18948) · [Before (L19107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19107)

```diff
-   38149: (SS, HS, gS) => {
+   38111: (kk, Fk, Ik) => {
```

#### 2602. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19109-L19110` → after: `L18950-L18951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18950-L18951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18950-L18951) · [Before (L19109-L19110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19109-L19110)

```diff
-       e: () => tS,
-       g: () => bS
+       b: () => Xk,
+       e: () => Tk
```

#### 2603. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19118` → after: `L18959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18959) · [Before (L19118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19118)

```diff
-   37252: (SS, HS, gS) => {
+   37293: (kk, Fk, Ik) => {
```

#### 2604. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19121-L19126` → after: `L18962-L18967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18962-L18967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18962-L18967) · [Before (L19121-L19126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19121-L19126)

```diff
-       e: () => aS,
-       h: () => KS,
-       i: () => nS,
-       m: () => PS,
-       o: () => GS,
-       s: () => QS
+       f: () => jk,
+       j: () => ek,
+       l: () => xk,
+       p: () => Pk,
+       t: () => Hk,
+       v: () => Kk
```

#### 2605. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19128-L19137` → after: `L18969-L18978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18969-L18978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18969-L18978) · [Before (L19128-L19137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19128-L19137)

```diff
-     var tS = gS(37261),
-       bS = gS(37278),
-       XS = gS(37294),
-       xS = gS(37286),
-       NS = gS(37242),
-       qS = gS(37225),
-       uS = gS(37113),
-       IS = gS(37306),
-       fS = gS(37322),
-       kS = gS(37345);
+     var Xk = Ik(37299),
+       Tk = Ik(37319),
+       ik = Ik(37327),
+       yk = Ik(37324),
+       lk = Ik(37277),
+       ak = Ik(37259),
+       qk = Ik(37144),
+       Lk = Ik(37340),
+       tk = Ik(37352),
+       Zk = Ik(37373);
```

#### 2606. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19140` → after: `L18981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18981) · [Before (L19140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19140)

```diff
-       return HS ? `${SS}|${HS}` : SS
+       return Fk ? `${kk}|${Fk}` : kk
```

#### 2607. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19144` → after: `L18985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18985) · [Before (L19144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19144)

```diff
-       const gS = (0, tS.p)("Player", `${SS}.glb`).replace("model/gltf-binary;", "");
+       const Ik = (0, Xk.k)("Player", `${kk}.glb`).replace("model/gltf-binary;", "");
```

#### 2608. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19151` → after: `L18992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18992) · [Before (L19151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19151)

```diff
-       SS.position.o_(0), SS.rotation = uS.VK.Zero(), SS.nf.o_(1), SS.aY();
+       kk.position.I6(0), kk.rotation = qk.Ge.Zero(), kk.ci.I6(1), kk.Xp();
```

#### 2609. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19158` → after: `L18999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18999) · [Before (L19158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19158)

```diff
-         SS.position.o_(0), SS.rotationQuaternion ? SS.rotationQuaternion.set(0, 0, 0, 1) : SS.rotation.o_(0), SS.nf.o_(1), SS.aY();
+         kk.position.I6(0), kk.rotationQuaternion ? kk.rotationQuaternion.set(0, 0, 0, 1) : kk.rotation.I6(0), kk.ci.I6(1), kk.Xp();
```

#### 2610. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19166-L19167` → after: `L19007-L19008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19007-L19008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19007-L19008) · [Before (L19166-L19167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19166-L19167)

```diff
-         name: `${SS}Attachment`,
-         Bj: HS,
+         name: `${kk}Attachment`,
+         Yw: Fk,
```

#### 2611. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19173` → after: `L19014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19014) · [Before (L19173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19173)

```diff
-             url: (0, tS.p)("Player", `${SS}.png`),
+             url: (0, Xk.k)("Player", `${kk}.png`),
```

#### 2612. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19176` → after: `L19017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19017) · [Before (L19176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19176)

```diff
-             samplingMode: NS.h.nearestNearestMipLinear,
+             samplingMode: lk.i.nearestNearestMipLinear,
```

#### 2613. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19185` → after: `L19026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19026) · [Before (L19185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19185)

```diff
-           (0, qS.p)(SS, IS.d), null === gS || void 0 === gS || gS(SS)
+           (0, ak.v)(kk, Lk.d), null === Ik || void 0 === Ik || Ik(kk)
```

#### 2614. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19197` → after: `L19038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19038) · [Before (L19197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19197)

```diff
-         if (NS.getVerticesData("uv")) NS.material = HS, (0, bS.o)(NS) || (0, bS.s)(NS, 1 / 512), NS.sideOrientation = xS.d.CounterClockWiseSideOrientation, null === gS || void 0 === gS || null === (tS = gS.onProcessedMesh) || void 0 === tS || tS.call(gS, NS);
+         if (lk.getVerticesData("uv")) lk.material = Fk, (0, Tk.r)(lk) || (0, Tk.u)(lk, 1 / 512), lk.sideOrientation = yk.d.CounterClockWiseSideOrientation, null === Ik || void 0 === Ik || null === (Xk = Ik.onProcessedMesh) || void 0 === Xk || Xk.call(Ik, lk);
```

#### 2615. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19203` → after: `L19044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19044) · [Before (L19203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19203)

```diff
-       SS.lY("aHueColour", 4), SS.mY.aHueColour = new XS.b(0, 0, 0, 0)
+       kk.jR("aHueColour", 4), kk.JR.aHueColour = new ik.b(0, 0, 0, 0)
```

#### 2616. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19208` → after: `L19049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19049) · [Before (L19208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19208)

```diff
-       for (const tS of [SS, ...SS.getChildMeshes()]) void 0 !== tS.mY && (tS.mY.aHueColour = gS)
+       for (const Xk of [kk, ...kk.getChildMeshes()]) void 0 !== Xk.JR && (Xk.JR.aHueColour = Ik)
```

#### 2617. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19211` → after: `L19052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19052) · [Before (L19211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19211)

```diff
-   37261: (SS, HS, gS) => {
+   37299: (kk, Fk, Ik) => {
```

#### 2618. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19213-L19214` → after: `L19054-L19056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19054-L19056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19054-L19056) · [Before (L19213-L19214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19213-L19214)

```diff
-       d: () => aS,
-       g: () => kS,
+       b: () => jk,
+       c: () => Zk,
+       f: () => ak,
```

#### 2619. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19216` → after: `L19058-L19059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19058-L19059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19058-L19059) · [Before (L19216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19216)

```diff
-       l: () => KS,
+       k: () => lk,
+       n: () => wk,
```

#### 2620. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19218-L19220` → after: `L19061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19061) · [Before (L19218-L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19218-L19220)

```diff
-       r: () => jS,
-       u: () => uS,
-       x: () => fS
+       t: () => tk
```

#### 2621. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19222-L19225` → after: `L19063-L19066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19063-L19066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19063-L19066) · [Before (L19222-L19225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19222-L19225)

```diff
-     var tS = gS(31),
-       bS = gS(37276),
-       XS = gS(36785),
-       xS = gS(2910);
+     var Xk = Ik(34),
+       Tk = Ik(37314),
+       ik = Ik(36783),
+       yk = Ik(2700);
```

#### 2622. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19228` → after: `L19069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19069) · [Before (L19228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19228)

```diff
-       return gS(37267)(`./${SS}/${HS}`)
+       return Ik(37306)(`./${kk}/${Fk}`)
```

#### 2623. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19237` → after: `L19078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19078) · [Before (L19237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19237)

```diff
-       const XS = tS.k.subscribe(`otherEntitySettingsClientifiedEId|${HS}|multilineTextBox`, (gS => {
+       const ik = Xk.g.subscribe(`otherEntitySettingsClientifiedEId|${Fk}|multilineTextBox`, (Ik => {
```

#### 2624. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19240` → after: `L19081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19081) · [Before (L19240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19240)

```diff
-       return IS(SS, HS, null === (gS = SS.rY[SS.HA]) || void 0 === gS || null === (bS = gS[HS]) || void 0 === bS ? void 0 : bS.multilineTextBox), XS
+       return Lk(kk, Fk, null === (Ik = kk.xR[kk.oR]) || void 0 === Ik || null === (Tk = Ik[Fk]) || void 0 === Tk ? void 0 : Tk.multilineTextBox), ik
```

#### 2625. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19244-L19245` → after: `L19085-L19086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19085-L19086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19085-L19086) · [Before (L19244-L19245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19244-L19245)

```diff
-       const tS = SS.FQ.ZSS(HS, "entityMultilineTextBox");
-       null === gS || void 0 === gS ? tS && SS.FQ.pY(HS, "entityMultilineTextBox") : tS || SS.FQ.VY(HS, "entityMultilineTextBox")
+       const Xk = kk.MJ.Ukk(Fk, "entityMultilineTextBox");
+       null === Ik || void 0 === Ik ? Xk && kk.MJ.Eu(Fk, "entityMultilineTextBox") : Xk || kk.MJ.Tu(Fk, "entityMultilineTextBox")
```

#### 2626. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19250` → after: `L19091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19091) · [Before (L19250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19250)

```diff
-         XS = SS.FQ.getState(HS, "meshRotation");
+         ik = kk.MJ.getState(Fk, "meshRotation");
```

#### 2627. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19256-L19258` → after: `L19097-L19099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19097-L19099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19097-L19099) · [Before (L19256-L19258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19256-L19258)

```diff
-       if (HS.rY[HS.HA][SS]) return;
-       const gS = (0, XS.e)(SS);
-       HS.rY[HS.HA][SS] = {}, HS.rY[HS.HA][gS] = {}, HS.rY[HS.OSS][SS] = {}, HS.rY[HS.OSS][gS] = {}
+       if (Fk.xR[Fk.oR][kk]) return;
+       const Ik = (0, ik.c)(kk);
+       Fk.xR[Fk.oR][kk] = {}, Fk.xR[Fk.oR][Ik] = {}, Fk.xR[Fk.Nkk][kk] = {}, Fk.xR[Fk.Nkk][Ik] = {}
```

#### 2628. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19263-L19264` → after: `L19104-L19105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19104-L19105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19104-L19105) · [Before (L19263-L19264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19263-L19264)

```diff
-         bS = (0, XS.e)(SS);
-       tS.rY[tS.HA][SS][HS] = gS, tS.rY[tS.HA][bS][HS] = gS, tS.rY[tS.OSS][SS][HS] = gS, tS.rY[tS.OSS][bS][HS] = gS, KS(SS, HS, gS)
+         Tk = (0, ik.c)(kk);
+       Xk.xR[Xk.oR][kk][Fk] = Ik, Xk.xR[Xk.oR][Tk][Fk] = Ik, Xk.xR[Xk.Nkk][kk][Fk] = Ik, Xk.xR[Xk.Nkk][Tk][Fk] = Ik, ek(kk, Fk, Ik)
```

#### 2629. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19268-L19270` → after: `L19109-L19111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19109-L19111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19109-L19111) · [Before (L19268-L19270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19268-L19270)

```diff
-       const xS = void 0 === gS ? bS.b[HS] : gS,
-         NS = (0, XS.e)(SS);
-       tS.k.cj(`otherEntitySettings|${HS}`, {
+       const yk = void 0 === Ik ? Tk.c[Fk] : Ik,
+         lk = (0, ik.c)(kk);
+       Xk.g.GL(`otherEntitySettings|${Fk}`, {
```

#### 2630. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19273` → after: `L19114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19114) · [Before (L19273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19273)

```diff
-       }), tS.k.cj(`otherEntitySettings|${SS}|${HS}`, xS), tS.k.cj(`otherEntitySettingsClientifiedEId|${NS}|${HS}`, xS)
+       }), Xk.g.GL(`otherEntitySettings|${kk}|${Fk}`, yk), Xk.g.GL(`otherEntitySettingsClientifiedEId|${lk}|${Fk}`, yk)
```

#### 2631. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19277-L19278` → after: `L19118-L19119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19118-L19119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19118-L19119) · [Before (L19277-L19278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19277-L19278)

```diff
-       const tS = SS.FQ.tHS(HS);
-       tS && (null !== tS.kY ? SS.Hj.fY.MJ(tS.kY, gS) : SS.Hj.WNS(tS.mesh, gS))
+       const Xk = kk.MJ.eFk(Fk);
+       Xk && (null !== Xk.Ip ? kk.Xw.kp.Av(Xk.Ip, Ik) : kk.Xw.rlk(Xk.mesh, Ik))
```

#### 2632. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19281` → after: `L19122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19122) · [Before (L19281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19281)

```diff
-   38119: (SS, HS, gS) => {
+   38092: (kk, Fk, Ik) => {
```

#### 2633. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19284` → after: `L19125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19125) · [Before (L19284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19284)

```diff
-       const bS = null === (gS = SS.FQ.YHS(HS)) || void 0 === gS ? void 0 : gS.RD;
+       const Tk = null === (Ik = kk.MJ.fFk(Fk)) || void 0 === Ik ? void 0 : Ik.VK;
```

#### 2634. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19291` → after: `L19132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19132) · [Before (L19291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19291)

```diff
-   37959: (SS, HS, gS) => {
+   37922: (kk, Fk, Ik) => {
```

#### 2635. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19294-L19295` → after: `L19135-L19136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19135-L19136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19135-L19136) · [Before (L19294-L19295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19294-L19295)

```diff
-       g: () => IS,
-       h: () => uS
+       i: () => Lk,
+       k: () => qk
```

#### 2636. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19297-L19301` → after: `L19138-L19142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19138-L19142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19138-L19142) · [Before (L19297-L19301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19297-L19301)

```diff
-     var tS = gS(37225),
-       bS = gS(37432),
-       XS = gS(37961),
-       xS = gS(37441),
-       NS = gS(2910);
+     var Xk = Ik(37259),
+       Tk = Ik(37455),
+       ik = Ik(37930),
+       yk = Ik(37457),
+       lk = Ik(2700);
```

#### 2637. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19305-L19306` → after: `L19146-L19147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19146-L19147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19146-L19147) · [Before (L19305-L19306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19305-L19306)

```diff
-         const HS = (0, tS.cb)(SS);
-         HS && !(0, tS.v)(HS, xS.e.name) && (0, xS.c)(HS, (0, NS.e)().Hj)
+         const Fk = (0, Xk.X)(kk);
+         Fk && !(0, Xk.B)(Fk, yk.e.name) && (0, yk.c)(Fk, (0, lk.e)().Xw)
```

#### 2638. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19315` → after: `L19156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19156) · [Before (L19315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19315)

```diff
-       SS.lY("aLightLevels", 4), SS.mY.aLightLevels = (0, bS.o)()
+       kk.jR("aLightLevels", 4), kk.JR.aLightLevels = (0, Tk.l)()
```

#### 2639. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19318` → after: `L19159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19159) · [Before (L19318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19318)

```diff
-   37097: (SS, HS, gS) => {
+   37127: (kk, Fk, Ik) => {
```

#### 2640. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19320` → after: `L19161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19161) · [Before (L19320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19320)

```diff
-       e: () => PS,
+       c: () => Pk,
```

#### 2641. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19322` → after: `L19163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19163) · [Before (L19322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19322)

```diff
-       j: () => nS
+       h: () => xk
```

#### 2642. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19324-L19336` → after: `L19165-L19177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19165-L19177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19165-L19177) · [Before (L19324-L19336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19324-L19336)

```diff
-     var tS = gS(37432),
-       bS = gS(37479),
-       XS = gS(37286),
-       xS = gS(2910),
-       NS = gS(3811),
-       qS = gS(36785),
-       uS = gS(37101),
-       IS = gS(37419),
-       fS = gS(37648),
-       kS = gS(37113),
-       aS = gS(4356),
-       KS = gS(37652),
-       jS = gS(37176);
+     var Xk = Ik(37455),
+       Tk = Ik(37488),
+       ik = Ik(37324),
+       yk = Ik(2700),
+       lk = Ik(3631),
+       ak = Ik(36783),
+       qk = Ik(37134),
+       Lk = Ik(37438),
+       tk = Ik(37657),
+       Zk = Ik(37144),
+       jk = Ik(4210),
+       ek = Ik(37660),
+       wk = Ik(37217);
```

#### 2643. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19348-L19351` → after: `L19189-L19192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19189-L19192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19189-L19192) · [Before (L19348-L19351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19348-L19351)

```diff
-           QX: gS,
-           DX: tS,
-           wX: bS
-         } = HS, XS = (0, qS.e)(gS), xS = (0, jS.d)(SS);
+           ji: Ik,
+           Hi: Xk,
+           Ji: Tk
+         } = Fk, ik = (0, ak.c)(Ik), yk = (0, wk.b)(kk);
```

#### 2644. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19353-L19354` → after: `L19194-L19195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19194-L19195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19194-L19195) · [Before (L19353-L19354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19353-L19354)

```diff
-         const NS = SS.FQ.tHS(XS);
-         if (NS && null === NS.kY) return;
+         const lk = kk.MJ.eFk(ik);
+         if (lk && null === lk.Ip) return;
```

#### 2645. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19360` → after: `L19201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19201) · [Before (L19360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19360)

```diff
-       for (const gS of (0, jS.d)(SS).getAttachments(HS)) QS(SS, gS)
+       for (const Ik of (0, wk.b)(kk).getAttachments(Fk)) Kk(kk, Ik)
```

#### 2646. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19364` → after: `L19205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19205) · [Before (L19364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19364)

```diff
-       (0, jS.d)((0, xS.e)()).clearAttachments((0, qS.e)(SS))
+       (0, wk.b)((0, yk.e)()).clearAttachments((0, ak.c)(kk))
```

#### 2647. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19370-L19373` → after: `L19211-L19214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19211-L19214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19211-L19214) · [Before (L19370-L19373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19370-L19373)

```diff
-           QX: gS,
-           DX: tS,
-           wX: bS
-         } = HS, XS = (0, qS.e)(gS), xS = SS.FQ.tHS(XS);
+           ji: Ik,
+           Hi: Xk,
+           Ji: Tk
+         } = Fk, ik = (0, ak.c)(Ik), yk = kk.MJ.eFk(ik);
```

#### 2648. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19375-L19377` → after: `L19216-L19218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19216-L19218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19216-L19218) · [Before (L19375-L19377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19375-L19377)

```diff
-         const NS = xS.kY;
-         if (null === NS) return console.error(`attachMeshToEntity: parent ${gS} has no thin instance - not supported`), null;
-         const uS = SS.Hj.fY,
+         const lk = yk.Ip;
+         if (null === lk) return console.error(`attachMeshToEntity: parent ${Ik} has no thin instance - not supported`), null;
+         const qk = kk.Xw.kp,
```

#### 2649. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19379` → after: `L19220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19220) · [Before (L19379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19379)

```diff
-         return null === IS ? (console.error(`Couldn't find node ${tS} on ${gS} to attach mesh ${bS}`), null) : {
+         return null === Lk ? (console.error(`Couldn't find node ${Xk} on ${Ik} to attach mesh ${Tk}`), null) : {
```

#### 2650. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19395` → after: `L19236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19236) · [Before (L19395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19395)

```diff
-       }(SS, gS), HS.wX && function(SS, HS, gS) {
+       }(kk, Ik), Fk.Ji && function(kk, Fk, Ik) {
```

#### 2651. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19397-L19401` → after: `L19238-L19242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19238-L19242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19238-L19242) · [Before (L19397-L19401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19397-L19401)

```diff
-           QX: tS,
-           wX: NS,
-           DX: qS,
-           hX: uS,
-           ZX: IS
+           ji: Xk,
+           Ji: lk,
+           Hi: ak,
+           xi: qk,
+           Pi: Lk
```

#### 2652. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19407` → after: `L19248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19248) · [Before (L19407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19407)

```diff
-         } = HS, QS = (0, aS.r)(NS);
+         } = Fk, Kk = (0, jk.m)(lk);
```

#### 2653. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19412` → after: `L19253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19253) · [Before (L19412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19412)

```diff
-         } = QS, LS = (0, jS.d)(SS).bumpAttachmentGeneration(PS, qS), YS = {
+         } = Kk, pk = (0, wk.b)(kk).bumpAttachmentGeneration(Pk, ak), uk = {
```

#### 2654. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19415-L19416` → after: `L19256-L19257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19256-L19257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19256-L19257) · [Before (L19415-L19416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19415-L19416)

```diff
-           hX: uS,
-           ZX: IS,
+           xi: qk,
+           Pi: Lk,
```

#### 2655. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19418` → after: `L19259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19259) · [Before (L19418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19418)

```diff
-           DX: qS,
+           Hi: ak,
```

#### 2656. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19427` → after: `L19268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19268) · [Before (L19427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19427)

```diff
-           } = gS, qS = xS.g.itemsClient[bS];
+           } = Ik, ak = yk.f.itemsClient[Tk];
```

#### 2657. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19430` → after: `L19271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19271) · [Before (L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19430)

```diff
-             [IS, fS, kS] = Array.isArray(XS) ? XS : [XS, XS, XS],
+             [Lk, tk, Zk] = Array.isArray(ik) ? ik : [ik, ik, ik],
```

#### 2658. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19437` → after: `L19278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19278) · [Before (L19437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19437)

```diff
-             GS = KS.f.includes(NS) ? NS : void 0;
+             Hk = ek.e.includes(lk) ? lk : void 0;
```

#### 2659. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19439` → after: `L19280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19280) · [Before (L19439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19439)

```diff
-             Ku: !1,
+             eq: !1,
```

#### 2660. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19446` → after: `L19287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19287) · [Before (L19446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19446)

```diff
-         const yS = (0, xS.b)().client.meshCreator.getEntityMesh(vS, ES, (HS => {
+         const Rk = (0, yk.c)().client.meshCreator.getEntityMesh(nk, Gk, (Fk => {
```

#### 2661. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19448` → after: `L19289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19289) · [Before (L19448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19448)

```diff
-             if (bS = gS, !("qY" in bS) || !0 !== bS.qY) return void console.error(`Box attachment ${gS.name} is not an instance`);
+             if (Tk = Ik, !("rG" in Tk) || !0 !== Tk.rG) return void console.error(`Box attachment ${Ik.name} is not an instance`);
```

#### 2662. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19451` → after: `L19292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19292) · [Before (L19451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19451)

```diff
-               NS = hS(gS.nf, xS),
+               lk = Vk(Ik.ci, yk),
```

#### 2663. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19453-L19455` → after: `L19294-L19296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19294-L19296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19294-L19296) · [Before (L19453-L19455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19453-L19455)

```diff
-                 const bS = gS.mY.aShaderPackItem,
-                   xS = (0, fS.l)(tS),
-                   NS = `nodeAttachment|${gS.name}|${gS.uniqueId}|${xS}`;
+                 const Tk = Ik.JR.aShaderPackItem,
+                   yk = (0, tk.h)(Xk),
+                   lk = `nodeAttachment|${Ik.name}|${Ik.uniqueId}|${yk}`;
```

#### 2664. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19457` → after: `L19298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19298) · [Before (L19457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19457)

```diff
-                   const qS = gS.clone(`thinNodeAttachment_${gS.name}|${xS}`, null);
+                   const ak = Ik.clone(`thinNodeAttachment_${Ik.name}|${yk}`, null);
```

#### 2665. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19459` → after: `L19300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19300) · [Before (L19459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19459)

```diff
-                     hf: 4,
+                     St: 4,
```

#### 2666. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19461-L19462` → after: `L19302-L19303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19302-L19303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19302-L19303) · [Before (L19461-L19462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19461-L19462)

```diff
-                     strides: bS ? cS : dS
-                   }), HS.setPickableForType(NS, !1), SS.Hj.JY(qS)
+                     strides: Tk ? Ok : Ek
+                   }), Fk.setPickableForType(lk, !1), kk.Xw.mp(ak)
```

#### 2667. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19467` → after: `L19308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19308) · [Before (L19467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19467)

```diff
-               }(SS, HS, gS.MtS, ZS(NS, xS));
+               }(kk, Fk, Ik.DXk, zk(lk, yk));
```

#### 2668. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19474` → after: `L19315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19315) · [Before (L19474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19474)

```diff
-           kY: iS
+           Ip: Ck
```

#### 2669. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19477-L19479` → after: `L19318-L19320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19318-L19320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19318-L19320) · [Before (L19477-L19479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19477-L19479)

```diff
-         VS && !VS.Ow() && (! function(SS, HS, gS, tS) {
-           (0, bS.r)(HS, gS[0], gS[1], gS[2]), HS.rotation.set(tS[0], tS[1], tS[2])
-         }(SS.Hj, VS, uS, IS), kS.attachTransformNode(VS, CS, nS))
+         Uk && !Uk.Hs() && (! function(kk, Fk, Ik, Xk) {
+           (0, Tk.q)(Fk, Ik[0], Ik[1], Ik[2]), Fk.rotation.set(Xk[0], Xk[1], Xk[2])
+         }(kk.Xw, Uk, qk, Lk), Zk.attachTransformNode(Uk, Jk, xk))
```

#### 2670. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19484` → after: `L19325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19325) · [Before (L19484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19484)

```diff
-       return !HS.has(gS.parentThinObjectId) || (0, jS.d)(SS).getAttachmentGeneration(gS.clientifiedAttachToEId, gS.DX) !== gS.generation
+       return !Fk.has(Ik.parentThinObjectId) || (0, wk.b)(kk).getAttachmentGeneration(Ik.clientifiedAttachToEId, Ik.Hi) !== Ik.generation
```

#### 2671. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19492` → after: `L19333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19333) · [Before (L19492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19492)

```diff
-       return new kS.VK(HS ? -SS.x : SS.x, SS.y, SS.z)
+       return new Zk.Ge(Fk ? -kk.x : kk.x, kk.y, kk.z)
```

#### 2672. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19496` → after: `L19337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19337) · [Before (L19496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19496)

```diff
-       return (0, fS.h)(SS.x * SS.y * SS.z < 0, HS)
+       return (0, tk.g)(kk.x * kk.y * kk.z < 0, Fk)
```

#### 2673. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19504-L19505` → after: `L19345-L19346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19345-L19346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19345-L19346) · [Before (L19504-L19505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19504-L19505)

```diff
-         hX: fS,
-         ZX: kS,
+         xi: tk,
+         Pi: Zk,
```

#### 2674. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19508` → after: `L19349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19349) · [Before (L19508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19508)

```diff
-       OS(HS, gS, fS, kS), HS.setScale(gS, bS.x, bS.y, bS.z), HS.attachThinObject(gS, qS, uS), HS.set(gS, "aOpacity", (0, IS.holderAttachmentOpacity)(SS, aS)), HS.set(gS, "aLightLevels", null !== (xS = null === (NS = SS.FQ.JHS(aS)) || void 0 === NS ? void 0 : NS._lightLevels) && v … [truncated]
+       vk(Fk, Ik, tk, Zk), Fk.setScale(Ik, Tk.x, Tk.y, Tk.z), Fk.attachThinObject(Ik, ak, qk), Fk.set(Ik, "aOpacity", (0, Lk.holderAttachmentOpacity)(kk, jk)), Fk.set(Ik, "aLightLevels", null !== (yk = null === (lk = kk.MJ.RFk(jk)) || void 0 === lk ? void 0 : lk._lightLevels) && v … [truncated]
```

#### 2675. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19516-L19522` → after: `L19357-L19363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19357-L19363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19357-L19363) · [Before (L19516-L19522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19516-L19522)

```diff
-           DX: gS
-         }] of(0, jS.d)(SS).iterateAttachments()) QS(SS, {
-         QX: HS,
-         DX: gS,
-         wX: null,
-         hX: [0, 0, 0],
-         ZX: [0, 0, 0]
+           Hi: Ik
+         }] of(0, wk.b)(kk).iterateAttachments()) Kk(kk, {
+         ji: Fk,
+         Hi: Ik,
+         Ji: null,
+         xi: [0, 0, 0],
+         Pi: [0, 0, 0]
```

#### 2676. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19535` → after: `L19376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19376) · [Before (L19535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19535)

```diff
-   37963: (SS, HS, gS) => {
+   37932: (kk, Fk, Ik) => {
```

#### 2677. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19537-L19538` → after: `L19378-L19379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19378-L19379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19378-L19379) · [Before (L19537-L19538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19537-L19538)

```diff
-       c: () => xS,
-       f: () => NS
+       b: () => yk,
+       d: () => lk
```

#### 2678. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19540-L19542` → after: `L19381-L19383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19381-L19383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19381-L19383) · [Before (L19540-L19542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19540-L19542)

```diff
-     var tS = gS(37961),
-       bS = gS(37193),
-       XS = gS(37225);
+     var Xk = Ik(37930),
+       Tk = Ik(37236),
+       ik = Ik(37259);
```

#### 2679. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19546-L19548` → after: `L19387-L19389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19387-L19389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19387-L19389) · [Before (L19546-L19548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19546-L19548)

```diff
-       SS.lY("aOpacity", 1), SS.mY.aOpacity = 1, SS.material && (HS = SS.material, (0, tS.b)(HS, (SS => {
-         const HS = (0, XS.cb)(SS);
-         HS && (0, bS.d)(HS, !0)
+       kk.jR("aOpacity", 1), kk.JR.aOpacity = 1, kk.material && (Fk = kk.material, (0, Xk.b)(Fk, (kk => {
+         const Fk = (0, ik.X)(kk);
+         Fk && (0, Tk.c)(Fk, !0)
```

#### 2680. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19561` → after: `L19402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19402) · [Before (L19561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19561)

```diff
-         mY: gS
+         JR: Ik
```

#### 2681. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19566` → after: `L19407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19407) · [Before (L19566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19566)

```diff
-   38490: (SS, HS, gS) => {
+   38440: (kk, Fk, Ik) => {
```

#### 2682. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19569-L19571` → after: `L19410-L19412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19410-L19412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19410-L19412) · [Before (L19569-L19571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19569-L19571)

```diff
-       f: () => fS,
-       g: () => bS,
-       k: () => XS
+       d: () => tk,
+       h: () => Tk,
+       l: () => ik
```

#### 2683. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19573` → after: `L19414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19414) · [Before (L19573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19573)

```diff
-     var tS = gS(2910);
+     var Xk = Ik(2700);
```

#### 2684. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19577` → after: `L19418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19418) · [Before (L19577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19577)

```diff
-       const HS = (0, tS.b)().client;
+       const Fk = (0, Xk.c)().client;
```

#### 2685. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19591` → after: `L19432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19432) · [Before (L19591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19591)

```diff
-       (xS = !1, null !== SS && void 0 !== SS && SS.isChargeable()) ? SS.clearChargingPose(): null === (gS = HS.FQ.getState(HS.HA, "playerCameraAdjustment")) || void 0 === gS || gS.fovMultiplier.removeMultiplier("chargeableZoom")
+       (yk = !1, null !== kk && void 0 !== kk && kk.isChargeable()) ? kk.clearChargingPose(): null === (Ik = Fk.MJ.getState(Fk.oR, "playerCameraAdjustment")) || void 0 === Ik || Ik.fovMultiplier.removeMultiplier("chargeableZoom")
```

#### 2686. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19604` → after: `L19445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19445) · [Before (L19604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19604)

```diff
-       } = gS, fS = SS.FQ.WHS(HS);
+       } = Ik, tk = kk.MJ.gFk(Fk);
```

#### 2687. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19606-L19607` → after: `L19447-L19448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19447-L19448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19447-L19448) · [Before (L19606-L19607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19606-L19607)

```diff
-       const kS = SS.FQ.YHS(HS),
-         aS = SS.FQ.AHS(HS);
+       const Zk = kk.MJ.fFk(Fk),
+         jk = kk.MJ.BFk(Fk);
```

#### 2688. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19611` → after: `L19452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19452) · [Before (L19611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19611)

```diff
-         kS.replayUseFirstPersonMesh = tS, SS !== tS && (null === aS || void 0 === aS || aS.eqS())
+         Zk.replayUseFirstPersonMesh = Xk, kk !== Xk && (null === jk || void 0 === jk || jk.Kqk())
```

#### 2689. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19613` → after: `L19454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19454) · [Before (L19613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19613)

```diff
-       const jS = SS.FQ.JHS(HS);
+       const wk = kk.MJ.RFk(Fk);
```

#### 2690. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19623` → after: `L19464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19464) · [Before (L19623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19623)

```diff
-       const gS = SS.FQ.WHS(HS);
+       const Ik = kk.MJ.gFk(Fk);
```

#### 2691. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19625-L19628` → after: `L19466-L19469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19466-L19469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19466-L19469) · [Before (L19625-L19628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19625-L19628)

```diff
-       const tS = SS.FQ.YHS(HS),
-         bS = SS.FQ.AHS(HS);
-       void 0 !== (null === tS || void 0 === tS ? void 0 : tS.replayUseFirstPersonMesh) && (tS.replayUseFirstPersonMesh = void 0, null === bS || void 0 === bS || bS.eqS());
-       const XS = SS.FQ.JHS(HS);
+       const Xk = kk.MJ.fFk(Fk),
+         Tk = kk.MJ.BFk(Fk);
+       void 0 !== (null === Xk || void 0 === Xk ? void 0 : Xk.replayUseFirstPersonMesh) && (Xk.replayUseFirstPersonMesh = void 0, null === Tk || void 0 === Tk || Tk.Kqk());
+       const ik = kk.MJ.RFk(Fk);
```

#### 2692. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19632` → after: `L19473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19473) · [Before (L19632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19632)

```diff
-   37348: (SS, HS, gS) => {
+   37381: (kk, Fk, Ik) => {
```

#### 2693. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19634-L19635` → after: `L19475-L19476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19475-L19476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19475-L19476) · [Before (L19634-L19635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19634-L19635)

```diff
-       d: () => bS,
-       e: () => tS
+       e: () => Tk,
+       h: () => Xk
```

#### 2694. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19652` → after: `L19493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19493) · [Before (L19652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19652)

```diff
-   37345: (SS, HS, gS) => {
+   37373: (kk, Fk, Ik) => {
```

#### 2695. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19654` → after: `L19495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19495) · [Before (L19654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19654)

```diff
-       c: () => qS,
+       b: () => ak,
```

#### 2696. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19656` → after: `L19497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19497) · [Before (L19656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19656)

```diff
-       i: () => IS,
+       h: () => Lk,
```

#### 2697. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19659` → after: `L19500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19500) · [Before (L19659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19659)

```diff
-     var tS = gS(37348);
+     var Xk = Ik(37381);
```

#### 2698. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19663` → after: `L19504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19504) · [Before (L19663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19663)

```diff
-       return bS ??= Promise.all([gS.e(203), gS.e(205)]).then((() => gS(41508))).then((SS => SS), (SS => {
+       return Tk ??= Promise.all([Ik.e(203), Ik.e(205)]).then((() => Ik(41490))).then((kk => kk), (kk => {
```

#### 2699. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19678` → after: `L19519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19519) · [Before (L19678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19678)

```diff
-         tS.e.failed++;
+         Xk.h.failed++;
```

#### 2700. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19686` → after: `L19527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19527) · [Before (L19686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19686)

```diff
-       return (0, tS.d)("importMesh"), NS(SS, gS, bS, ((SS, gS, tS) => {
+       return (0, Xk.e)("importMesh"), lk(kk, Ik, Tk, ((kk, Ik, Xk) => {
```

#### 2701. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19688` → after: `L19529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19529) · [Before (L19688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19688)

```diff
-         return SS.loadGlbTree(gS, HS, null !== (bS = tS.rootUrl) && void 0 !== bS ? bS : "", !1, tS.materials)
+         return kk.loadGlbTree(Ik, Fk, null !== (Tk = Xk.rootUrl) && void 0 !== Tk ? Tk : "", !1, Xk.materials)
```

#### 2702. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19693` → after: `L19534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19534) · [Before (L19693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19693)

```diff
-       return (0, tS.d)("assetContainer"), NS(SS, gS, bS, ((SS, gS, tS) => {
+       return (0, Xk.e)("assetContainer"), lk(kk, Ik, Tk, ((kk, Ik, Xk) => {
```

#### 2703. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19695` → after: `L19536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19536) · [Before (L19695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19695)

```diff
-         return SS.loadGlbTree(gS, HS, null !== (bS = tS.rootUrl) && void 0 !== bS ? bS : "", !0, tS.materials)
+         return kk.loadGlbTree(Ik, Fk, null !== (Tk = Xk.rootUrl) && void 0 !== Tk ? Tk : "", !0, Xk.materials)
```

#### 2704. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19700` → after: `L19541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19541) · [Before (L19700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19700)

```diff
-       return (0, tS.d)("importMesh"), NS(SS, {
+       return (0, Xk.e)("importMesh"), lk(kk, {
```

#### 2705. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19704` → after: `L19545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19545) · [Before (L19704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19704)

```diff
-         return SS.loadGlbAsset(gS, HS, null !== (bS = tS.rootUrl) && void 0 !== bS ? bS : "", XS)
+         return kk.loadGlbAsset(Ik, Fk, null !== (Tk = Xk.rootUrl) && void 0 !== Tk ? Tk : "", ik)
```

#### 2706. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19708` → after: `L19549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19549) · [Before (L19708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19708)

```diff
-   37917: (SS, HS, gS) => {
+   37884: (kk, Fk, Ik) => {
```

#### 2707. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19711` → after: `L19552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19552) · [Before (L19711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19711)

```diff
-       e: () => IS
+       f: () => Lk
```

#### 2708. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19713-L19714` → after: `L19554-L19555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19554-L19555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19554-L19555) · [Before (L19713-L19714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19713-L19714)

```diff
-     var tS = gS(37225),
-       bS = gS(37294);
+     var Xk = Ik(37259),
+       Tk = Ik(37327);
```

#### 2709. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19725` → after: `L19566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19566) · [Before (L19725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19725)

```diff
-     var NS = gS(37335);
+     var lk = Ik(37365);
```

#### 2710. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19742` → after: `L19583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19583) · [Before (L19742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19742)

```diff
-         emissiveTexture: SS.emissionColorTexture ? (0, NS.y)(SS.emissionColorTexture) : null,
+         emissiveTexture: kk.emissionColorTexture ? (0, lk.B)(kk.emissionColorTexture) : null,
```

#### 2711. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19746` → after: `L19587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19587) · [Before (L19746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19746)

```diff
-         ...null !== HS && HS !== tS.n.opaque ? {
+         ...null !== Fk && Fk !== Xk.r.opaque ? {
```

#### 2712. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19761-L19762` → after: `L19602-L19603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19602-L19603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19602-L19603) · [Before (L19761-L19762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19761-L19762)

```diff
-           return tS && (SS.baseColor = bS.Color3.FromArray(tS), SS.geometryOpacity = tS[3]), HS.unlit ? SS.isUnlit = !0 : SS.emissionColor = HS.emissiveFactor ? bS.Color3.FromArray(HS.emissiveFactor) : new bS.Color3(0, 0, 0), HS.doubleSided && (SS.backFaceCulling = !1, SS.twoSide … [truncated]
-         }(uS, HS) : tS.n.opaque;
+           return Xk && (kk.baseColor = Tk.Color3.FromArray(Xk), kk.geometryOpacity = Xk[3]), Fk.unlit ? kk.isUnlit = !0 : kk.emissionColor = Fk.emissiveFactor ? Tk.Color3.FromArray(Fk.emissiveFactor) : new Tk.Color3(0, 0, 0), Fk.doubleSided && (kk.backFaceCulling = !1, kk.twoSide … [truncated]
+         }(qk, Fk) : Xk.r.opaque;
```

#### 2713. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19765` → after: `L19606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19606) · [Before (L19765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19765)

```diff
-         ...qS(uS, IS, gS, NS, null !== HS && void 0 !== HS && HS.pbr && HS.baseColorTexture ? SS.textureDesc(HS.baseColorTexture, IS !== tS.n.opaque) : null)
+         ...ak(qk, Lk, Ik, lk, null !== Fk && void 0 !== Fk && Fk.pbr && Fk.baseColorTexture ? kk.textureDesc(Fk.baseColorTexture, Lk !== Xk.r.opaque) : null)
```

#### 2714. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19783` → after: `L19624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19624) · [Before (L19783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19783)

```diff
-   38216: (SS, HS, gS) => {
+   38176: (kk, Fk, Ik) => {
```

#### 2715. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19787` → after: `L19628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19628) · [Before (L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19787)

```diff
-     var tS = gS(680);
+     var Xk = Ik(628);
```

#### 2716. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19790` → after: `L19631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19631) · [Before (L19790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19790)

```diff
-       const tS = HS => SS.qk.bloxd.getMetaInfo(HS).rootName,
+       const Xk = Fk => kk.qZ.bloxd.getMetaInfo(Fk).rootName,
```

#### 2717. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19792` → after: `L19633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19633) · [Before (L19792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19792)

```diff
-       return bS && tS(bS.name) === tS(gS) ? bS : null
+       return Tk && Xk(Tk.name) === Xk(Ik) ? Tk : null
```

#### 2718. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19806` → after: `L19647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19647) · [Before (L19806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19806)

```diff
-         return !(!xS || (null !== (XS = xS.amount) && void 0 !== XS ? XS : 1) < HS) && tS.removeItem(SS, HS)
+         return !(!yk || (null !== (ik = yk.amount) && void 0 !== ik ? ik : 1) < Fk) && Xk.removeItem(kk, Fk)
```

#### 2719. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19823` → after: `L19664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19664) · [Before (L19823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19823)

```diff
-       return XS => SS.craftItem(HS, XS.playerInventory, gS, tS, bS).XN === bS
+       return ik => kk.craftItem(Fk, ik.playerInventory, Ik, Xk, Tk).il === Tk
```

#### 2720. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19828` → after: `L19669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19669) · [Before (L19828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19828)

```diff
-         return null !== XS && gS <= (null !== (bS = XS.amount) && void 0 !== bS ? bS : 0) && SS.salvageItem(tS.playerInventory, HS, XS.name, gS)
+         return null !== ik && Ik <= (null !== (Tk = ik.amount) && void 0 !== Tk ? Tk : 0) && kk.salvageItem(Xk.playerInventory, Fk, ik.name, Ik)
```

#### 2721. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19843` → after: `L19684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19684) · [Before (L19843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19843)

```diff
-         return !!xS && (XS.playerInventory.setItemSlot(SS, gS, 1, null !== tS && void 0 !== tS ? tS : xS.attributes), !0)
+         return !!yk && (ik.playerInventory.setItemSlot(kk, Ik, 1, null !== Xk && void 0 !== Xk ? Xk : yk.attributes), !0)
```

#### 2722. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19849` → after: `L19690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19690) · [Before (L19849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19849)

```diff
-         return (null === NS || void 0 === NS ? void 0 : NS.name) === HS && (1 === NS.amount || null === NS.amount ? (xS.setItemSlot(SS, gS, 1, {}), !0) : !(null === bS || bS < 0 || bS >= tS.q || null !== xS.getItemAtIdx(bS)) && (xS.setItemSlot(SS, HS, NS.amount - 1, {}), xS.setIt … [truncated]
+         return (null === lk || void 0 === lk ? void 0 : lk.name) === Fk && (1 === lk.amount || null === lk.amount ? (yk.setItemSlot(kk, Ik, 1, {}), !0) : !(null === Tk || Tk < 0 || Tk >= Xk.o || null !== yk.getItemAtIdx(Tk)) && (yk.setItemSlot(kk, Fk, lk.amount - 1, {}), yk.setIt … [truncated]
```

#### 2723. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19852` → after: `L19693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19693) · [Before (L19852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19852)

```diff
-       return tS => !!bS(tS, HS, gS) && (tS.qk.bloxd.removeEatenItem(SS, tS.playerInventory, HS), !0)
+       return Xk => !!Tk(Xk, Fk, Ik) && (Xk.qZ.bloxd.removeEatenItem(kk, Xk.playerInventory, Fk), !0)
```

#### 2724. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19861` → after: `L19702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19702) · [Before (L19861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19861)

```diff
-   37815: (SS, HS, gS) => {
+   37801: (kk, Fk, Ik) => {
```

#### 2725. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19863` → after: `L19704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19704) · [Before (L19863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19863)

```diff
-       e: () => tS
+       b: () => Xk
```

#### 2726. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19870` → after: `L19711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19711) · [Before (L19870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19870)

```diff
-   37900: (SS, HS, gS) => {
+   37866: (kk, Fk, Ik) => {
```

#### 2727. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19874` → after: `L19714-L19715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19714-L19715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19714-L19715) · [Before (L19874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19874)

```diff
-       i: () => ZS
+       f: () => qk,
+       j: () => zk
```

#### 2728. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19876-L19881` → after: `L19717-L19722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19717-L19722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19717-L19722) · [Before (L19876-L19881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19876-L19881)

```diff
-     var tS = gS(215),
-       bS = gS(9361),
-       XS = gS(2083),
-       xS = gS(3811),
-       NS = gS(31),
-       qS = gS(2910);
+     var Xk = Ik(198),
+       Tk = Ik(9183),
+       ik = Ik(1894),
+       yk = Ik(3631),
+       lk = Ik(34),
+       ak = Ik(2700);
```

#### 2729. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19895-L19896` → after: `L19736-L19737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19736-L19737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19736-L19737) · [Before (L19895-L19896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19895-L19896)

```diff
-       const gS = (0, tS.c)(SS, HS);
-       return (null === gS || void 0 === gS ? void 0 : gS.name) === HS ? gS : void 0
+       const Ik = (0, Xk.d)(kk, Fk);
+       return (null === Ik || void 0 === Ik ? void 0 : Ik.name) === Fk ? Ik : void 0
```

#### 2730. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19904` → after: `L19745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19745) · [Before (L19904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19904)

```diff
-       nS(qS.g.blocksClient, SS)
+       xk(ak.f.blocksClient, kk)
```

#### 2731. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19916` → after: `L19757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19757) · [Before (L19916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19916)

```diff
-       return bS.j[SS.name].ttb
+       return Tk.g[kk.name].ttb
```

#### 2732. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19920` → after: `L19761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19761) · [Before (L19920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19920)

```diff
-       if ("droppedItemScale" === SS) kS = "number" === typeof HS && isFinite(HS) ? HS : 1;
+       if ("droppedItemScale" === kk) Zk = "number" === typeof Fk && isFinite(Fk) ? Fk : 1;
```

#### 2733. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19924` → after: `L19765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19765) · [Before (L19924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19924)

```diff
-         const gS = CS(qS.g.itemsClient, SS.slice(0, -IS.length));
+         const Ik = Jk(ak.f.itemsClient, kk.slice(0, -Lk.length));
```

#### 2734. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19927` → after: `L19768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19768) · [Before (L19927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19927)

```diff
-         const gS = CS(qS.g.blocksClient, SS.slice(0, -fS.length));
+         const Ik = Jk(ak.f.blocksClient, kk.slice(0, -tk.length));
```

#### 2735. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19933` → after: `L19774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19774) · [Before (L19933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19933)

```diff
-       XS.d.subscribeAll((SS => {
+       ik.e.subscribeAll((kk => {
```

#### 2736. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19935` → after: `L19776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19776) · [Before (L19935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19935)

```diff
-       })), NS.k.subscribe("ttbEffectMultiplier", (SS => {
+       })), lk.g.subscribe("ttbEffectMultiplier", (kk => {
```

#### 2737. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19938` → after: `L19779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19779) · [Before (L19938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19938)

```diff
-         kS = 1, aS = !1, KS = 1, jS = 1, nS(qS.g.itemsClient, (SS => {
+         Zk = 1, jk = !1, ek = 1, wk = 1, xk(ak.f.itemsClient, (kk => {
```

#### 2738. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19946` → after: `L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19787) · [Before (L19946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L19946)

```diff
-   37734: (SS, HS, gS) => {
+   37728: (kk, Fk, Ik) => {
```

#### 2739. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20048` → after: `L19889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19889) · [Before (L20048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20048)

```diff
-         const tS = Array.isArray(HS) ? HS : null !== (gS = null === HS || void 0 === HS ? void 0 : HS.transfer) && void 0 !== gS ? gS : [];
+         const Xk = Array.isArray(Fk) ? Fk : null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.transfer) && void 0 !== Ik ? Ik : [];
```

#### 2740. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20087` → after: `L19928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19928) · [Before (L20087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20087)

```diff
-   37664: (SS, HS, gS) => {
+   37670: (kk, Fk, Ik) => {
```

#### 2741. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20089-L20090` → after: `L19930-L19931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19930-L19931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19930-L19931) · [Before (L20089-L20090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20089-L20090)

```diff
-       let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SS.FQ.THS(HS);
-       return HS === SS.HA || (null === gS || void 0 === gS ? void 0 : gS.fK) === SS.HA && gS.oHS
+       let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.MJ.XIk(Fk);
+       return Fk === kk.oR || (null === Ik || void 0 === Ik ? void 0 : Ik.le) === kk.oR && Ik.TIk
```

#### 2742. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20093` → after: `L19934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19934) · [Before (L20093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20093)

```diff
-       e: () => tS
+       d: () => Xk
```

#### 2743. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20096` → after: `L19937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19937) · [Before (L20096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20096)

```diff
-   37961: (SS, HS, gS) => {
+   37930: (kk, Fk, Ik) => {
```

#### 2744. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20098-L20099` → after: `L19939-L19940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19939-L19940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19939-L19940) · [Before (L20098-L20099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20098-L20099)

```diff
-       if ("Q8" in SS && Array.isArray(SS.Q8))
-         for (const gS of SS.Q8) gS && HS(gS);
+       if ("W8" in kk && Array.isArray(kk.W8))
+         for (const Ik of kk.W8) Ik && Fk(Ik);
```

#### 2745. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20106` → after: `L19947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19947) · [Before (L20106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20106)

```diff
-   37278: (SS, HS, gS) => {
+   37319: (kk, Fk, Ik) => {
```

#### 2746. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20108-L20111` → after: `L19949-L19951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19949-L19951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19949-L19951) · [Before (L20108-L20111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20108-L20111)

```diff
-       c: () => xS,
-       d: () => nS,
-       h: () => KS,
-       i: () => GS,
+       b: () => yk,
+       e: () => xk,
+       g: () => ek,
```

#### 2747. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20114-L20116` → after: `L19954-L19955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19954-L19955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19954-L19955) · [Before (L20114-L20116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20114-L20116)

```diff
-       o: () => kS,
-       p: () => qS,
-       q: () => uS,
+       n: () => Lk,
+       r: () => Zk,
```

#### 2748. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20118` → after: `L19957-L19959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19957-L19959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19957-L19959) · [Before (L20118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20118)

```diff
-       v: () => CS
+       t: () => qk,
+       u: () => tk,
+       w: () => Jk
```

#### 2749. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20120-L20122` → after: `L19961-L19963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19961-L19963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19961-L19963) · [Before (L20120-L20122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20120-L20122)

```diff
-     var tS = gS(37113),
-       bS = gS(2022),
-       XS = gS(37286);
+     var Xk = Ik(37144),
+       Tk = Ik(1844),
+       ik = Ik(37324);
```

#### 2750. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20148` → after: `L19989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L19989) · [Before (L20148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20148)

```diff
-         tS = null !== gS && void 0 !== gS && gS.model ? gS : null;
+         Xk = null !== Ik && void 0 !== Ik && Ik.model ? Ik : null;
```

#### 2751. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20168` → after: `L20009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20009) · [Before (L20168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20168)

```diff
-         indices: null !== (gS = null === (tS = HS.geometry.indexData) || void 0 === tS ? void 0 : tS.slice()) && void 0 !== gS ? gS : [],
+         indices: null !== (Ik = null === (Xk = Fk.geometry.indexData) || void 0 === Xk ? void 0 : Xk.slice()) && void 0 !== Ik ? Ik : [],
```

#### 2752. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20185` → after: `L20026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20026) · [Before (L20185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20185)

```diff
-         NS(tS, SS.mgS(), HS), SS.setVerticesData(gS, tS)
+         lk(Xk, kk.yXk(), Fk), kk.setVerticesData(Ik, Xk)
```

#### 2753. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20191` → after: `L20032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20032) · [Before (L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20191)

```diff
-       return !!(null !== (HS = SS.metadata) && void 0 !== HS && null !== (gS = HS.wL) && void 0 !== gS && null !== (tS = gS.extras) && void 0 !== tS && tS.bloxdProcessed || null !== (bS = SS.parent) && void 0 !== bS && null !== (XS = bS.metadata) && void 0 !== XS && null !== (xS  … [truncated]
+       return !!(null !== (Fk = kk.metadata) && void 0 !== Fk && null !== (Ik = Fk.vG) && void 0 !== Ik && null !== (Xk = Ik.extras) && void 0 !== Xk && Xk.bloxdProcessed || null !== (Tk = kk.parent) && void 0 !== Tk && null !== (ik = Tk.metadata) && void 0 !== ik && null !== (yk  … [truncated]
```

#### 2754. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20207` → after: `L20048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20048) · [Before (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20207)

```diff
-         SS.nf.set(HS, HS, HS), SS.bakeCurrentTransformIntoVertices(!1)
+         kk.ci.set(Fk, Fk, Fk), kk.bakeCurrentTransformIntoVertices(!1)
```

#### 2755. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20213` → after: `L20054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20054) · [Before (L20213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20213)

```diff
-       return (0, bS.u)(`v${jS}|${JSON.stringify(SS)}|${HS}`)
+       return (0, Tk.r)(`v${wk}|${JSON.stringify(kk)}|${Fk}`)
```

#### 2756. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20234` → after: `L20075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20075) · [Before (L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20234)

```diff
-         }(SS)) || void 0 === gS || null === (tS = gS.extras) || void 0 === tS ? void 0 : tS.bloxdBuildHash) && void 0 !== HS ? HS : null
+         }(kk)) || void 0 === Ik || null === (Xk = Ik.extras) || void 0 === Xk ? void 0 : Xk.bloxdBuildHash) && void 0 !== Fk ? Fk : null
```

#### 2757. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20247-L20248` → after: `L20088-L20089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20088-L20089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20088-L20089) · [Before (L20247-L20248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20247-L20248)

```diff
-         gS = tS.VK.One(),
-         bS = new tS.VK;
+         Ik = Xk.Ge.One(),
+         Tk = new Xk.Ge;
```

#### 2758. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20255` → after: `L20096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20096) · [Before (L20255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20255)

```diff
-         const SS = tS.Matrix.Compose(gS, tS.Quaternion.RotationYawPitchRoll(kS, aS, 0), new tS.VK(uS, IS, fS)),
+         const kk = Xk.Matrix.Compose(Ik, Xk.Quaternion.RotationYawPitchRoll(Zk, jk, 0), new Xk.Ge(qk, Lk, tk)),
```

#### 2759. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20257` → after: `L20098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20098) · [Before (L20257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20257)

```diff
-         for (let gS = 0; gS < XS.length; gS += 3) tS.VK.TransformCoordinatesFromFloatsToRef(XS[gS], XS[gS + 1], XS[gS + 2], SS, bS), HS.positions.push(bS.x, bS.y, bS.z), tS.VK.TransformNormalFromFloatsToRef(xS[gS], xS[gS + 1], xS[gS + 2], SS, bS), HS.normals.push(bS.x, bS.y, bS.z … [truncated]
+         for (let Ik = 0; Ik < ik.length; Ik += 3) Xk.Ge.TransformCoordinatesFromFloatsToRef(ik[Ik], ik[Ik + 1], ik[Ik + 2], kk, Tk), Fk.positions.push(Tk.x, Tk.y, Tk.z), Xk.Ge.TransformNormalFromFloatsToRef(yk[Ik], yk[Ik + 1], yk[Ik + 2], kk, Tk), Fk.normals.push(Tk.x, Tk.y, Tk.z … [truncated]
```

#### 2760. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20264` → after: `L20105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20105) · [Before (L20264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20264)

```diff
-   38060: (SS, HS, gS) => {
+   38054: (kk, Fk, Ik) => {
```

#### 2761. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20267-L20268` → after: `L20108-L20109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20108-L20109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20108-L20109) · [Before (L20267-L20268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20267-L20268)

```diff
-       e: () => pH,
-       f: () => iH,
+       g: () => fF,
+       h: () => CF,
```

#### 2762. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20271-L20274` → after: `L20112-L20115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20112-L20115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20112-L20115) · [Before (L20271-L20274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20271-L20274)

```diff
-     var tS = gS(37063),
-       bS = gS(3811),
-       XS = gS(37806),
-       xS = gS(38068),
+     var Xk = Ik(37079),
+       Tk = Ik(3631),
+       ik = Ik(37794),
+       yk = Ik(38063),
```

#### 2763. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20276-L20294` → after: `L20117-L20135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20117-L20135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20117-L20135) · [Before (L20276-L20294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20276-L20294)

```diff
-       qS = gS(9361),
-       uS = gS(38038),
-       IS = gS(31),
-       fS = gS(160),
-       kS = gS(3320),
-       aS = gS(37811),
-       KS = gS(3325),
-       jS = gS(24),
-       GS = gS(2910),
-       CS = gS(3870),
-       nS = gS(37908),
-       PS = gS(37322),
-       QS = gS(37345),
-       DS = gS(37113),
-       wS = gS(37242),
-       hS = gS(37286),
- ... (3 more removed lines; see GitHub link above)
+       ak = Ik(9183),
+       qk = Ik(38014),
+       Lk = Ik(34),
+       tk = Ik(149),
+       Zk = Ik(3089),
+       jk = Ik(37797),
+       ek = Ik(3096),
+       wk = Ik(25),
+       Hk = Ik(2700),
+       Jk = Ik(3702),
+       xk = Ik(37875),
+       Pk = Ik(37352),
+       Kk = Ik(37373),
+       Qk = Ik(37144),
+       sk = Ik(37277),
+       Vk = Ik(37324),
+ ... (3 more added lines; see GitHub link above)
```

#### 2764. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20299` → after: `L20140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20140) · [Before (L20299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20299)

```diff
-       const gS = kS.d.getTexture(HS, KS.g.BLOCK).url,
+       const Ik = Zk.b.getTexture(Fk, ek.j.BLOCK).url,
```

#### 2765. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20302` → after: `L20143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20143) · [Before (L20302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20302)

```diff
-       const bS = (0, wS.q)(SS, {
+       const Tk = (0, sk.v)(kk, {
```

#### 2766. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20306` → after: `L20147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20147) · [Before (L20306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20306)

```diff
-           samplingMode: wS.h.nearestNearestMipLinear,
+           samplingMode: sk.i.nearestNearestMipLinear,
```

#### 2767. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20308-L20309` → after: `L20149-L20150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20149-L20150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20149-L20150) · [Before (L20308-L20309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20308-L20309)

```diff
-             wrapU: wS.b.clamp,
-             wrapV: wS.b.clamp,
+             wrapU: sk.d.clamp,
+             wrapV: sk.d.clamp,
```

#### 2768. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20316-L20317` → after: `L20157-L20158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20157-L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20157-L20158) · [Before (L20316-L20317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20316-L20317)

```diff
-           name: `${HS}BlockModelMeshMat`,
-           Bj: SS,
+           name: `${Fk}BlockModelMeshMat`,
+           Yw: kk,
```

#### 2769. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20340` → after: `L20181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20181) · [Before (L20340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20340)

```diff
-       return (0, ZS.j)((0, GS.e)().Hj, SS, (0, JS.h)({
+       return (0, zk.m)((0, Hk.e)().Xw, kk, (0, Sk.i)({
```

#### 2770. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20355-L20356` → after: `L20196-L20197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20196-L20197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20196-L20197) · [Before (L20355-L20356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20355-L20356)

```diff
-         const gS = ES(`${HS}CstmPlnMdl1`);
-         gS.Fj = !1, gS.rotation.set(...NS.rotation), gS.bakeCurrentTransformIntoVertices();
+         const Ik = Gk(`${Fk}CstmPlnMdl1`);
+         Ik.gw = !1, Ik.rotation.set(...lk.rotation), Ik.bakeCurrentTransformIntoVertices();
```

#### 2771. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20360-L20361` → after: `L20201-L20202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20201-L20202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20201-L20202) · [Before (L20360-L20361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20360-L20361)

```diff
-       const xS = (0, ZS.i)(bS, XS.size > 1, !1);
-       return xS.Fj = !1, xS
+       const yk = (0, zk.j)(Tk, ik.size > 1, !1);
+       return yk.gw = !1, yk
```

#### 2772. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20392` → after: `L20233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20233) · [Before (L20392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20392)

```diff
-     const yS = new DS.VK(.5, .5, .5);
+     const Rk = new Qk.Ge(.5, .5, .5);
```

#### 2773. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20396` → after: `L20237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20237) · [Before (L20396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20396)

```diff
-           const gS = DS.Matrix.Compose(DS.VK.One(), DS.Quaternion.RotationYawPitchRoll(SS.rotation[1], SS.rotation[0], SS.rotation[2]), DS.VK.FromArray(SS.position)),
+           const Ik = Qk.Matrix.Compose(Qk.Ge.One(), Qk.Quaternion.RotationYawPitchRoll(kk.rotation[1], kk.rotation[0], kk.rotation[2]), Qk.Ge.FromArray(kk.position)),
```

#### 2774. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20400` → after: `L20241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20241) · [Before (L20400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20400)

```diff
-               nf: XS
+               ci: ik
```

#### 2775. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20405-L20407` → after: `L20246-L20248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20246-L20248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20246-L20248) · [Before (L20405-L20407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20405-L20407)

```diff
-         bS = DS.VK.TransformCoordinates(DS.VK.Zero(), tS),
-         XS = DS.VK.TransformNormal(new DS.VK(1, 0, 0), tS),
-         xS = DS.VK.TransformNormal(new DS.VK(0, 1, 0), tS),
+         Tk = Qk.Ge.TransformCoordinates(Qk.Ge.Zero(), Xk),
+         ik = Qk.Ge.TransformNormal(new Qk.Ge(1, 0, 0), Xk),
+         yk = Qk.Ge.TransformNormal(new Qk.Ge(0, 1, 0), Xk),
```

#### 2776. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20413` → after: `L20254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20254) · [Before (L20413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20413)

```diff
-         texture: kS.d.getTexture(HS, KS.g.BLOCK).url
+         texture: Zk.b.getTexture(Fk, ek.j.BLOCK).url
```

#### 2777. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20423` → after: `L20264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20264) · [Before (L20423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20423)

```diff
-           return YS("CentreCross" === gS ? vS : SS.customPlanesInfo).map((SS => {
+           return uk("CentreCross" === Ik ? nk : kk.customPlanesInfo).map((kk => {
```

#### 2778. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20461` → after: `L20302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20302) · [Before (L20461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20461)

```diff
-       return sS(SS, HS, zS(SS, HS.name, XS.d))
+       return Bk(kk, Fk, ck(kk, Fk.name, ik.e))
```

#### 2779. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20465` → after: `L20306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20306) · [Before (L20465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20465)

```diff
-       return sS(SS, HS, zS(SS, HS.name, XS.e), gS)
+       return Bk(kk, Fk, ck(kk, Fk.name, ik.h), Ik)
```

#### 2780. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20469` → after: `L20310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20310) · [Before (L20469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20469)

```diff
-       const bS = aS.c.getBlockAtlasMaterialForPlacement(SS, !!HS.transTex, !!HS.unlitStandaloneMesh),
+       const Tk = jk.d.getBlockAtlasMaterialForPlacement(kk, !!Fk.transTex, !!Fk.unlitStandaloneMesh),
```

#### 2781. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20475` → after: `L20316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20316) · [Before (L20475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20475)

```diff
-       return XS.MJ(!0), XS
+       return ik.Av(!0), ik
```

#### 2782. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20477-L20484` → after: `L20318-L20325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20318-L20325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20318-L20325) · [Before (L20477-L20484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20477-L20484)

```diff
-     var BS = gS(9411),
-       MS = gS(1309),
-       FS = gS(38077),
-       RS = gS(37974),
-       TS = gS(9416),
-       oS = gS(4586),
-       lS = gS(37926),
-       mS = gS(37278);
+     var dk = Ik(9237),
+       Yk = Ik(1217),
+       Ak = Ik(38066),
+       gk = Ik(37947),
+       mk = Ik(9241),
+       hk = Ik(4449),
+       rk = Ik(37887),
+       Dk = Ik(37319);
```

#### 2783. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20488` → after: `L20329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20329) · [Before (L20488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20488)

```diff
-         NS: gS,
+         lk: Ik,
```

#### 2784. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20500` → after: `L20341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20341) · [Before (L20500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20500)

```diff
-           NS: gS[1],
+           lk: Ik[1],
```

#### 2785. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20505-L20506` → after: `L20346-L20347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20346-L20347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20346-L20347) · [Before (L20505-L20506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20505-L20506)

```diff
-       }(HS((0, TS.j)(SS.postPiece, null))), xS = DS.Matrix.Translation(-bS, -gS, -XS).multiply(DS.Matrix.Scaling(1 / tS, 1 / tS, 1 / tS)).multiply(DS.Matrix.Translation(0, -.5, 0)), NS = (SS, gS) => {
-         const tS = tS => (0, lS.g)((0, lS.b)(HS((0, TS.j)(SS, tS))), gS.m);
+       }(Fk((0, mk.k)(kk.postPiece, null))), yk = Qk.Matrix.Translation(-Tk, -Ik, -ik).multiply(Qk.Matrix.Scaling(1 / Xk, 1 / Xk, 1 / Xk)).multiply(Qk.Matrix.Translation(0, -.5, 0)), lk = (kk, Ik) => {
+         const Xk = Xk => (0, rk.j)((0, rk.e)(Fk((0, mk.k)(kk, Xk))), Ik.m);
```

#### 2786. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20509` → after: `L20350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20350) · [Before (L20509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20509)

```diff
-           arms: TS.o.map(((SS, HS) => tS(HS)))
+           arms: mk.m.map(((kk, Fk) => Xk(Fk)))
```

#### 2787. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20517` → after: `L20358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20358) · [Before (L20517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20517)

```diff
-           arms: qS.arms.map(((SS, HS) => (0, lS.e)([
+           arms: ak.arms.map(((kk, Fk) => (0, rk.i)([
```

#### 2788. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20531` → after: `L20372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20372) · [Before (L20531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20531)

```diff
-       return (0, lS.e)([gS, ...bS].map((SS => [SS, null])))
+       return (0, rk.i)([Ik, ...Tk].map((kk => [kk, null])))
```

#### 2789. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20543-L20544` → after: `L20384-L20385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20384-L20385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20384-L20385) · [Before (L20543-L20544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20543-L20544)

```diff
-       if (!tS) throw new Error(`"${gS}" has no node named "${HS}"`);
-       if (!tS.length) throw new Error(`"${gS}" node "${HS}" has no mesh`);
+       if (!Xk) throw new Error(`"${Ik}" has no node named "${Fk}"`);
+       if (!Xk.length) throw new Error(`"${Ik}" node "${Fk}" has no mesh`);
```

#### 2790. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20546-L20547` → after: `L20387-L20388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20387-L20388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20387-L20388) · [Before (L20546-L20547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20546-L20547)

```diff
-         const gS = (0, mS.m)(SS, HS);
-         return (0, lS.g)(gS, SS.worldMatrix(HS, !1)),
+         const Ik = (0, Dk.n)(kk, Fk);
+         return (0, rk.j)(Ik, kk.worldMatrix(Fk, !1)),
```

#### 2791. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20561` → after: `L20402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20402) · [Before (L20561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20561)

```diff
-       return (0, lS.e)(bS)
+       return (0, rk.i)(Tk)
```

#### 2792. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20563` → after: `L20404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20404) · [Before (L20563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20563)

```diff
-     var gH = gS(37878);
+     var XF = Ik(37843);
```

#### 2793. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20571-L20572` → after: `L20412-L20413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20412-L20413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20412-L20413) · [Before (L20571-L20572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20571-L20572)

```diff
-       const tS = kS.d.getModel(HS, KS.c.BLOCK).url,
-         bS = await (0, QS.i)("", SS, tS, (() => kS.d.getModelOverride(HS) ? {
+       const Xk = Zk.b.getModel(Fk, ek.h.BLOCK).url,
+         Tk = await (0, Kk.h)("", kk, Xk, (() => Zk.b.getModelOverride(Fk) ? {
```

#### 2794. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20575` → after: `L20416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20416) · [Before (L20575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20575)

```diff
-             rootUrl: kS.d.getModel(HS, KS.c.BLOCK, !0).url
+             rootUrl: Zk.b.getModel(Fk, ek.h.BLOCK, !0).url
```

#### 2795. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20587` → after: `L20428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20428) · [Before (L20587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20587)

```diff
-       const XS = qS.w[(0, oS.i)(HS.textureInfo)];
+       const ik = ak.x[(0, hk.i)(Fk.textureInfo)];
```

#### 2796. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20592-L20593` → after: `L20433-L20434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20433-L20434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20433-L20434) · [Before (L20592-L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20592-L20593)

```diff
-         const tS = (0, gH.k)();
-         for (let bS = 1; bS < gS.length; bS += 2) gS[bS] = (0, gH.g)(HS, gS[bS], tS)
+         const Xk = (0, XF.g)();
+         for (let Tk = 1; Tk < Ik.length; Tk += 2) Ik[Tk] = (0, XF.e)(Fk, Ik[Tk], Xk)
```

#### 2797. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20599` → after: `L20440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20440) · [Before (L20599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20599)

```diff
-         } = null !== (bS = tS.named) && void 0 !== bS ? bS : {},
+         } = null !== (Tk = Xk.named) && void 0 !== Tk ? Tk : {},
```

#### 2798. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20601` → after: `L20442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20442) · [Before (L20601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20601)

```diff
-         fS = (0, ZS.j)((0, GS.e)().Hj, gS, {
+         tk = (0, zk.m)((0, Hk.e)().Xw, Ik, {
```

#### 2799. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20606` → after: `L20447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20447) · [Before (L20606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20606)

```diff
-             color: (0, mS.j)(xS, mS.c, NS)
+             color: (0, Dk.m)(yk, Dk.b, lk)
```

#### 2800. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20609` → after: `L20450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20450) · [Before (L20609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20609)

```diff
-       return fS.material = aS.c.getBlockAtlasMaterialForPlacement(SS, !!HS.transTex, !!HS.unlitStandaloneMesh), fS.Fj = !1, fS
+       return tk.material = jk.d.getBlockAtlasMaterialForPlacement(kk, !!Fk.transTex, !!Fk.unlitStandaloneMesh), tk.gw = !1, tk
```

#### 2801. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20613` → after: `L20454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20454) · [Before (L20613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20613)

```diff
-       if (!gS) throw new Error(`"${HS.name}" has no connecting model GLB for model "${HS.model}"`);
+       if (!Ik) throw new Error(`"${Fk.name}" has no connecting model GLB for model "${Fk.model}"`);
```

#### 2802. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20618-L20619` → after: `L20459-L20460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20459-L20460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20459-L20460) · [Before (L20618-L20619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20618-L20619)

```diff
-       }(SS, gS), bS = void 0 !== HS.attachedTop, XS = bS ? [...TS.d, ...TS.d.map((SS => SS | TS.f))] : TS.d, xS = new Map;
-       for (const NS of XS) xS.set(NS, (() => uH(SS, HS, `${HS.name}|${NS}ConnectingModel`, rS(qH(tS, bS, NS), NS))));
+       }(kk, Ik), Tk = void 0 !== Fk.attachedTop, ik = Tk ? [...mk.e, ...mk.e.map((kk => kk | mk.f))] : mk.e, yk = new Map;
+       for (const lk of ik) yk.set(lk, (() => LF(kk, Fk, `${Fk.name}|${lk}ConnectingModel`, kF(qF(Xk, Tk, lk), lk))));
```

#### 2803. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20625-L20626` → after: `L20466-L20467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20466-L20467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20466-L20467) · [Before (L20625-L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20625-L20626)

```diff
-       if (!gS) throw new Error(`"${SS}" variants registered before its connecting meshes were built`);
-       return gS.get((0, TS.m)(HS))
+       if (!Ik) throw new Error(`"${kk}" variants registered before its connecting meshes were built`);
+       return Ik.get((0, mk.l)(Fk))
```

#### 2804. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20628` → after: `L20469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20469) · [Before (L20628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20628)

```diff
-     var kH = gS(9420);
+     var jF = Ik(9244);
```

#### 2805. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20646` → after: `L20487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20487) · [Before (L20646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20646)

```diff
-       const [HS, gS] = kH.o.bottom.map(SS), {
+       const [Fk, Ik] = jF.j.bottom.map(kk), {
```

#### 2806. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20652-L20653` → after: `L20493-L20494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20493-L20494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20493-L20494) · [Before (L20652-L20653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20652-L20653)

```diff
-           left: (0, lS.g)((0, lS.b)(gS), HS.m),
-           right: (0, lS.g)((0, lS.b)(tS), HS.m)
+           left: (0, rk.j)((0, rk.e)(Ik), Fk.m),
+           right: (0, rk.j)((0, rk.e)(Xk), Fk.m)
```

#### 2807. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20655` → after: `L20496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20496) · [Before (L20655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20655)

```diff
-       }, [qS, uS] = kH.o.top.map(SS);
+       }, [ak, qk] = jF.j.top.map(kk);
```

#### 2808. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20667` → after: `L20508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20508) · [Before (L20667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20667)

```diff
-       return (0, lS.g)((0, lS.b)(SS), xS.m)
+       return (0, rk.j)((0, rk.e)(kk), yk.m)
```

#### 2809. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20676` → after: `L20517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20517) · [Before (L20676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20676)

```diff
-         xS = (0, lS.e)([
+         yk = (0, rk.i)([
```

#### 2810. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20680` → after: `L20521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20521) · [Before (L20680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20680)

```diff
-       return (0, lS.g)(xS, DS.Matrix.RotationY((HS - 1) * Math.PI / 2).m)
+       return (0, rk.j)(yk, Qk.Matrix.RotationY((Fk - 1) * Math.PI / 2).m)
```

#### 2811. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20687` → after: `L20528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20528) · [Before (L20687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20687)

```diff
-       return `${SS}|${HS}`
+       return `${kk}|${Fk}`
```

#### 2812. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20692` → after: `L20533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20533) · [Before (L20692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20692)

```diff
-       if (!tS) throw new Error(`"${SS}" variants registered before its fence gate meshes were built`);
+       if (!Xk) throw new Error(`"${kk}" variants registered before its fence gate meshes were built`);
```

#### 2813. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20695` → after: `L20536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20536) · [Before (L20695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20695)

```diff
-     var wH = gS(37977);
+     var VF = Ik(37954);
```

#### 2814. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20722-L20726` → after: `L20563-L20567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20563-L20567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20563-L20567) · [Before (L20722-L20726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20722-L20726)

```diff
-     var EH = gS(37225),
-       LH = gS(37335),
-       YH = gS(38084),
-       AH = gS(3437),
-       yH = gS(4784);
+     var GF = Ik(37259),
+       pF = Ik(37365),
+       uF = Ik(38073),
+       bF = Ik(3229),
+       RF = Ik(4649);
```

#### 2815. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20730` → after: `L20571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20571) · [Before (L20730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20730)

```diff
-       return [SS.animTextures.length - 1, 1, null !== (HS = SS.animationInterval) && void 0 !== HS ? HS : 200]
+       return [kk.animTextures.length - 1, 1, null !== (Fk = kk.animationInterval) && void 0 !== Fk ? Fk : 200]
```

#### 2816. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20734` → after: `L20575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20575) · [Before (L20734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20734)

```diff
-       (0, AH.j)(function() {
+       (0, bF.o)(function() {
```

#### 2817. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20736` → after: `L20577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20577) · [Before (L20736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20736)

```diff
-         for (const HS of [qS.j, tS.t])
+         for (const Fk of [ak.g, Xk.o])
```

#### 2818. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20741-L20742` → after: `L20582-L20583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20582-L20583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20582-L20583) · [Before (L20741-L20742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20741-L20742)

```diff
-         return Array.from(SS, (SS => null !== SS && void 0 !== SS ? SS : ""))
-       }()), await (0, yH.u)("block textures");
+         return Array.from(kk, (kk => null !== kk && void 0 !== kk ? kk : ""))
+       }()), await (0, RF.v)("block textures");
```

#### 2819. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20749-L20750` → after: `L20590-L20591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20590-L20591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20590-L20591) · [Before (L20749-L20750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20749-L20750)

```diff
-         nS = gS(38093);
-       CS(new window.FontFace("Jetbrains Mono", `url(${nS})`).load().then((SS => {
+         xk = Ik(38077);
+       Jk(new window.FontFace("Jetbrains Mono", `url(${xk})`).load().then((kk => {
```

#### 2820. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20752` → after: `L20593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20593) · [Before (L20752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20752)

```diff
-       }))), SS.FQ.vHS({
+       }))), kk.MJ.cFk({
```

#### 2821. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20754-L20755` → after: `L20595-L20596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20595-L20596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20595-L20596) · [Before (L20754-L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20754-L20755)

```diff
-       }), (0, QS.l)(), await kS.d.requiredAssetsAreGenerated();
-       const DS = kS.d.getGenerationFailure();
+       }), (0, Kk.l)(), await Zk.b.requiredAssetsAreGenerated();
+       const Qk = Zk.b.getGenerationFailure();
```

#### 2822. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20757-L20761` → after: `L20598-L20602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20598-L20602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20598-L20602) · [Before (L20757-L20761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20757-L20761)

```diff
-       await (0, yH.u)("items object"), (0, XS.u)(), await (0, yH.u)("pick helper"), GS.g.localPlayerPickActionHelper = new uS.b(SS, SS.HA), await (0, yH.u)("block atlas");
-       const hS = kS.d.getBlockAtlasArr(),
-         OS = kS.d.getBlockAtlasPixels(),
-         dS = kS.d.getBlockAtlasWidth(),
-         cS = qS.t.flatMap((SS => {
+       await (0, RF.v)("items object"), (0, ik.x)(), await (0, RF.v)("pick helper"), Hk.f.localPlayerPickActionHelper = new qk.b(kk, kk.oR), await (0, RF.v)("block atlas");
+       const Vk = Zk.b.getBlockAtlasArr(),
+         vk = Zk.b.getBlockAtlasPixels(),
+         Ek = Zk.b.getBlockAtlasWidth(),
+         Ok = ak.w.flatMap((kk => {
```

#### 2823. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20770-L20771` → after: `L20611-L20612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20611-L20612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20611-L20612) · [Before (L20770-L20771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20770-L20771)

```diff
-       const vS = SS.Hj.qj();
-       aS.c.setUseWebGL2(vS);
+       const nk = kk.Xw.Lw();
+       jk.d.setUseWebGL2(nk);
```

#### 2824. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20774-L20775` → after: `L20615-L20616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20615-L20616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20615-L20616) · [Before (L20774-L20775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20774-L20775)

```diff
-       jS.b.get("clientEscMenuOptions").disableTexAtlas && !SS.bK && (ES = !1, LS = "options");
-       let YS = kS.d.getImagesPerAtlas();
+       wk.d.get("clientEscMenuOptions").disableTexAtlas && !kk.ke && (Gk = !1, pk = "options");
+       let uk = Zk.b.getImagesPerAtlas();
```

#### 2825. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20777` → after: `L20618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20618) · [Before (L20777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20777)

```diff
-         const SS = `imagesPerAtlas = ${YS}`;
+         const kk = `imagesPerAtlas = ${uk}`;
```

#### 2826. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20780-L20782` → after: `L20621-L20623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20621-L20623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20621-L20623) · [Before (L20780-L20782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20780-L20782)

```diff
-       const AS = SS.Hj.engine.getCaps().texture2DArrayMaxLayerCount;
-       ES && vS && AS < YS[0] && (ES = !1, LS = `maxLayerCount = ${AS}, layerCount = ${YS[0]}`);
-       const yS = SS.Hj.engine.getCaps().maxTextureSize,
+       const bk = kk.Xw.engine.getCaps().texture2DArrayMaxLayerCount;
+       Gk && nk && bk < uk[0] && (Gk = !1, pk = `maxLayerCount = ${bk}, layerCount = ${uk[0]}`);
+       const Rk = kk.Xw.engine.getCaps().maxTextureSize,
```

#### 2827. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20784-L20785` → after: `L20625-L20626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20625-L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20625-L20626) · [Before (L20784-L20785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20784-L20785)

```diff
-       ES && yS < VS && (ES = !1, LS = `maxTextureSize = ${yS}, textureSize = ${VS}`), console.log("Graphics backend", null !== (HS = null === (bS = SS.Hj.gj) || void 0 === bS ? void 0 : bS.backendName) && void 0 !== HS ? HS : `webgl${SS.Hj.engine.uj}`, "useTexAtlas", ES, "reason" … [truncated]
-       const iS = Math.floor(Object.keys((0, MS._)(qS.j)).length / 50);
+       Gk && Rk < Uk && (Gk = !1, pk = `maxTextureSize = ${Rk}, textureSize = ${Uk}`), console.log("Graphics backend", null !== (Fk = null === (Tk = kk.Xw.Tw) || void 0 === Tk ? void 0 : Tk.backendName) && void 0 !== Fk ? Fk : `webgl${kk.Xw.engine.tw}`, "useTexAtlas", Gk, "reason" … [truncated]
+       const Ck = Math.floor(Object.keys((0, Yk.X)(ak.g)).length / 50);
```

#### 2828. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20787-L20788` → after: `L20628-L20629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20628-L20629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20628-L20629) · [Before (L20787-L20788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20787-L20788)

```diff
-         zS += 1, zS % 50 === 0 && (IS.k.cj("matchmakeAndPlayStepCompleted", {
-           step: fS.g.REGISTRATION,
+         ck += 1, ck % 50 === 0 && (Lk.g.GL("matchmakeAndPlayStepCompleted", {
+           step: tk.j.REGISTRATION,
```

#### 2829. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20792` → after: `L20633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20633) · [Before (L20792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20792)

```diff
-         }))), await (0, yH.u)(`block ${SS}`)
+         }))), await (0, RF.v)(`block ${kk}`)
```

#### 2830. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20795-L20796` → after: `L20636-L20637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20636-L20637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20636-L20637) · [Before (L20795-L20796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20795-L20796)

```diff
-       for (const gS in (0, MS._)(qS.j)) {
-         const HS = qS.j[gS],
+       for (const Ik in (0, Yk.X)(ak.g)) {
+         const Fk = ak.g[Ik],
```

#### 2831. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20800` → after: `L20641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20641) · [Before (L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20800)

```diff
-           if (TH(qS.j[SS], HS)) {
+           if (mF(ak.g[kk], Fk)) {
```

#### 2832. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20806` → after: `L20647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20647) · [Before (L20806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20806)

```diff
-           await (0, yH.u)(`block ${gS} model`);
+           await (0, RF.v)(`block ${Ik} model`);
```

#### 2833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20809` → after: `L20650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20650) · [Before (L20809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20809)

```diff
-               Jm: await FH(HS.model).getMesh(SS.Hj.lL(), HS),
+               T_: await AF(Fk.model).getMesh(kk.Xw.mG(), Fk),
```

#### 2834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20812-L20818` → after: `L20653-L20659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20653-L20659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20653-L20659) · [Before (L20812-L20818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20812-L20818)

```diff
-               tG: HS.tG,
-               Kw: oH(gS),
-               dK: null !== (bS = HS.dK) && void 0 !== bS ? bS : null,
-               bG: null !== (XS = HS.bG) && void 0 !== XS ? XS : null,
-               cK: HS.cK,
-               RL: vH(gS, HS.model),
-               Tl: () => mH(HS, HS)
+               Re: Fk.Re,
+               FQ: hF(Ik),
+               Ve: null !== (Tk = Fk.Ve) && void 0 !== Tk ? Tk : null,
+               ge: null !== (ik = Fk.ge) && void 0 !== ik ? ik : null,
+               ze: Fk.ze,
+               YG: nF(Ik, Fk.model),
+               gM: () => DF(Fk, Fk)
```

#### 2835. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20820` → after: `L20661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20661) · [Before (L20820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20820)

```diff
-             SS.Ia.zW(HS.id, xS), null !== HS.meta.metaStr && await WH(SS, gS, xS), await WS(gS)
+             kk.yj.zN(Fk.id, yk), null !== Fk.meta.metaStr && await NF(kk, Ik, yk), await Nk(Ik)
```

#### 2836. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20826-L20827` → after: `L20667-L20668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20667-L20668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20667-L20668) · [Before (L20826-L20827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20826-L20827)

```diff
-             if ("number" === typeof HS.textureInfo[0]) HS.textureInfo.length > 3 && (bS = !0), SS.Ia.Wm(gS, {
-               qm: [],
+             if ("number" === typeof Fk.textureInfo[0]) Fk.textureInfo.length > 3 && (Tk = !0), kk.yj.y_(Ik, {
+               rM: [],
```

#### 2837. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20829` → after: `L20670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20670) · [Before (L20829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20829)

```diff
-               Im: bS
+               E1: Tk
```

#### 2838. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20836-L20843` → after: `L20677-L20684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20677-L20684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20677-L20684) · [Before (L20836-L20843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20836-L20843)

```diff
-                 const NS = `${gS}${xS}`;
-                 if (ES && void 0 !== HS.atlasIdx[xS]) SS.Ia.Wm(NS, {
-                   qm: hS,
-                   Qm: OS,
-                   Zm: dS,
-                   Km: HS.atlasIdx[xS],
-                   Im: bS,
-                   XG: cS
+                 const lk = `${Ik}${yk}`;
+                 if (Gk && void 0 !== Fk.atlasIdx[yk]) kk.yj.y_(lk, {
+                   rM: Vk,
+                   k_: vk,
+                   F_: Ek,
+                   U1: Fk.atlasIdx[yk],
+                   E1: Tk,
+                   XH: Ok
```

#### 2839. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20848-L20849` → after: `L20689-L20690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20689-L20690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20689-L20690) · [Before (L20848-L20849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20848-L20849)

```diff
-                       qm: [kS.d.getTexture("string" === typeof HS ? HS : NS, KS.g.BLOCK).url],
-                       Im: bS
+                       rM: [Zk.b.getTexture("string" === typeof Fk ? Fk : lk, ek.j.BLOCK).url],
+                       E1: Tk
```

#### 2840. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20851` → after: `L20692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20692) · [Before (L20851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20851)

```diff
-                   ("string" === typeof HS ? 0 : HS.animTextures.length) > 0 && (gS.XG = VH(HS)), SS.Ia.Wm(NS, gS)
+                   ("string" === typeof Fk ? 0 : Fk.animTextures.length) > 0 && (Ik.XH = UF(Fk)), kk.yj.y_(lk, Ik)
```

#### 2841. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20857` → after: `L20698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20698) · [Before (L20857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20857)

```diff
-                   const HS = `${gS}${SS}`;
+                   const Fk = `${Ik}${kk}`;
```

#### 2842. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20863-L20866` → after: `L20704-L20707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20704-L20707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20704-L20707) · [Before (L20863-L20866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20863-L20866)

```diff
-             if (bS ||= HS.transTex, bS ||= (null === (BS = HS.textureInfo.colour) || void 0 === BS ? void 0 : BS.length) > 3, ES && void 0 !== HS.atlasIdx) SS.Ia.Wm(gS, {
-               qm: hS,
-               Qm: OS,
-               Zm: dS,
+             if (Tk ||= Fk.transTex, Tk ||= (null === (dk = Fk.textureInfo.colour) || void 0 === dk ? void 0 : dk.length) > 3, Gk && void 0 !== Fk.atlasIdx) kk.yj.y_(Ik, {
+               rM: Vk,
+               k_: vk,
+               F_: Ek,
```

#### 2843. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20868-L20871` → after: `L20709-L20712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20709-L20712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20709-L20712) · [Before (L20868-L20871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20868-L20871)

```diff
-               Rm: !1,
-               Km: HS.atlasIdx[0],
-               Im: bS,
-               XG: cS
+               l_: !1,
+               U1: Fk.atlasIdx[0],
+               E1: Tk,
+               XH: Ok
```

#### 2844. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20874-L20876` → after: `L20715-L20717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20715-L20717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20715-L20717) · [Before (L20874-L20876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20874-L20876)

```diff
-               const tS = kS.d.getTexture(gS, KS.g.BLOCK).url;
-               SS.Ia.Wm(gS, {
-                 qm: [tS],
+               const Xk = Zk.b.getTexture(Ik, ek.j.BLOCK).url;
+               kk.yj.y_(Ik, {
+                 rM: [Xk],
```

#### 2845. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20878-L20880` → after: `L20719-L20721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20719-L20721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20719-L20721) · [Before (L20878-L20880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20878-L20880)

```diff
-                 Rm: !1,
-                 Im: bS,
-                 XG: VH(HS.textureInfo)
+                 l_: !1,
+                 E1: Tk,
+                 XH: UF(Fk.textureInfo)
```

#### 2846. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20885-L20891` → after: `L20726-L20732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20726-L20732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20726-L20732) · [Before (L20885-L20891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20885-L20891)

```diff
-             SS.Ia.Wm(gS, {
-               qm: hS,
-               Qm: OS,
-               Zm: dS,
-               Km: tS,
-               Im: bS,
-               XG: cS
+             kk.yj.y_(Ik, {
+               rM: Vk,
+               k_: vk,
+               F_: Ek,
+               U1: Xk,
+               E1: Tk,
+               XH: Ok
```

#### 2847. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20894-L20897` → after: `L20735-L20738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20735-L20738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20735-L20738) · [Before (L20894-L20897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20894-L20897)

```diff
-             const tS = kS.d.getTexture(HS.textureInfo, KS.g.BLOCK).url;
-             SS.Ia.Wm(gS, {
-               qm: [tS],
-               Im: bS
+             const Xk = Zk.b.getTexture(Fk.textureInfo, ek.j.BLOCK).url;
+             kk.yj.y_(Ik, {
+               rM: [Xk],
+               E1: Tk
```

#### 2848. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20900-L20904` → after: `L20741-L20745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20741-L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20741-L20745) · [Before (L20900-L20904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20900-L20904)

```diff
-           SS.Ia.zW(HS.id, {
-             material: void 0 === tS ? gS : tS,
-             aa: HS.aa,
-             solid: null !== (US = HS.solid) && void 0 !== US ? US : !HS.aa,
-             tG: HS.tG,
+           kk.yj.zN(Fk.id, {
+             material: void 0 === Xk ? Ik : Xk,
+             qj: Fk.qj,
+             solid: null !== (Wk = Fk.solid) && void 0 !== Wk ? Wk : !Fk.qj,
+             Re: Fk.Re,
```

#### 2849. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20906-L20909` → after: `L20747-L20750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20747-L20750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20747-L20750) · [Before (L20906-L20909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20906-L20909)

```diff
-             dK: null !== (pS = HS.dK) && void 0 !== pS ? pS : null,
-             bG: null !== (sS = HS.bG) && void 0 !== sS ? sS : null,
-             cK: HS.cK,
-             RL: vH(gS, HS.model)
+             Ve: null !== (fk = Fk.Ve) && void 0 !== fk ? fk : null,
+             ge: null !== (Bk = Fk.ge) && void 0 !== Bk ? Bk : null,
+             ze: Fk.ze,
+             YG: nF(Ik, Fk.model)
```

#### 2850. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20911` → after: `L20752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20752) · [Before (L20911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20911)

```diff
-         }(0, XS.F)(gS, HS.id, SS.Hj.lL(), void 0)
+         }(0, ik.I)(Ik, Fk.id, kk.Xw.mG(), void 0)
```

#### 2851. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20913` → after: `L20754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20754) · [Before (L20913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20913)

```diff
-       for (const gS in tS.t) {
+       for (const Ik in Xk.o) {
```

#### 2852. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20915-L20916` → after: `L20756-L20757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20756-L20757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20756-L20757) · [Before (L20915-L20916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20915-L20916)

```diff
-         const HS = tS.t[gS];
-         await (0, yH.u)(`item ${gS}`), (0, XS.F)(gS, HS.id, SS.Hj.lL(), HS.type)
+         const Fk = Xk.o[Ik];
+         await (0, RF.v)(`item ${Ik}`), (0, ik.I)(Ik, Fk.id, kk.Xw.mG(), Fk.type)
```

#### 2853. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20918` → after: `L20759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20759) · [Before (L20918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20918)

```diff
-       return await (0, yH.u)("block overlays"),
+       return await (0, RF.v)("block overlays"),
```

#### 2854. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20920` → after: `L20761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20761) · [Before (L20920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20920)

```diff
-           const HS = SS.Hj.lL();
+           const Fk = kk.Xw.mG();
```

#### 2855. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20923` → after: `L20764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20764) · [Before (L20923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20923)

```diff
-             const bS = kS.d.getTexture(`destroy_stage_${tS}`, KS.g.BLOCK).url,
+             const Tk = Zk.b.getTexture(`destroy_stage_${Xk}`, ek.j.BLOCK).url,
```

#### 2856. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20925-L20926` → after: `L20766-L20767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20766-L20767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20766-L20767) · [Before (L20925-L20926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20925-L20926)

```diff
-                 wrapU: wS.b.clamp,
-                 wrapV: wS.b.clamp,
+                 wrapU: sk.d.clamp,
+                 wrapV: sk.d.clamp,
```

#### 2857. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20929` → after: `L20770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20770) · [Before (L20929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20929)

```diff
-               xS = (0, wS.q)(HS, {
+               yk = (0, sk.v)(Fk, {
```

#### 2858. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20933` → after: `L20774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20774) · [Before (L20933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20933)

```diff
-                 samplingMode: wS.h.nearestNearestMipLinear,
+                 samplingMode: sk.i.nearestNearestMipLinear,
```

#### 2859. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20937` → after: `L20778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20778) · [Before (L20937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20937)

```diff
-                 transparencyMode: EH.n.alphaTest,
+                 transparencyMode: GF.r.alphaTest,
```

#### 2860. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20943-L20944` → after: `L20784-L20785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20784-L20785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20784-L20785) · [Before (L20943-L20944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20943-L20944)

```diff
-                 name: `breakingBoxTexture${tS}`,
-                 Bj: HS,
+                 name: `breakingBoxTexture${Xk}`,
+                 Yw: Fk,
```

#### 2861. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20948-L20949` → after: `L20789-L20790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20789-L20790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20789-L20790) · [Before (L20948-L20949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20948-L20949)

```diff
-             null === (gS = SS.Hj.gj) || void 0 === gS || gS.prepareTexture(xS);
-             const uS = (0, ZS.j)(SS.Hj, `breakingBox${tS}`, (0, JS.d)({
+             null === (Ik = kk.Xw.Tw) || void 0 === Ik || Ik.prepareTexture(yk);
+             const qk = (0, zk.m)(kk.Xw, `breakingBox${Xk}`, (0, Sk.e)({
```

#### 2862. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20954` → after: `L20795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20795) · [Before (L20954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20954)

```diff
-             uS.material = qS, SS.Hj.Tj(uS), uS.MJ(!1), SS.Hj.PNS.push(uS)
+             qk.material = ak, kk.Xw.hw(qk), qk.Av(!1), kk.Xw.Glk.push(qk)
```

#### 2863. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20959-L20960` → after: `L20800-L20801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20800-L20801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20800-L20801) · [Before (L20959-L20960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20959-L20960)

```diff
-             Bj: HS
-           } = SS.Hj, gS = (0, JS.d)({
+             Yw: Fk
+           } = kk.Xw, Ik = (0, Sk.e)({
```

#### 2864. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20965-L20966` → after: `L20806-L20807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20806-L20807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20806-L20807) · [Before (L20965-L20966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20965-L20966)

```diff
-           for (let kS = 0; kS < tS; kS++) bS[4 * kS + 3] = gS.positions[3 * kS + 2] < 0 ? zH : YH.g;
-           const XS = (0, ZS.j)(SS.Hj, "highlight", {
+           for (let Zk = 0; Zk < Xk; Zk++) Tk[4 * Zk + 3] = Ik.positions[3 * Zk + 2] < 0 ? cF : uF.g;
+           const ik = (0, zk.m)(kk.Xw, "highlight", {
```

#### 2865. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20973` → after: `L20814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20814) · [Before (L20973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20973)

```diff
-               ...LH.e,
+               ...pF.d,
```

#### 2866. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20977` → after: `L20818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20818) · [Before (L20977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20977)

```diff
-               transparencyMode: EH.n.alphaBlend
+               transparencyMode: GF.r.alphaBlend
```

#### 2867. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20981` → after: `L20822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20822) · [Before (L20981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20981)

```diff
-             Bj: HS,
+             Yw: Fk,
```

#### 2868. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20987` → after: `L20828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20828) · [Before (L20987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20987)

```diff
-               Bj: HS,
+               Yw: Fk,
```

#### 2869. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20990-L20991` → after: `L20831-L20832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20831-L20832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20831-L20832) · [Before (L20990-L20991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20990-L20991)

```diff
-             qS = YH.h,
-             uS = YH.l,
+             ak = uF.k,
+             qk = uF.s,
```

#### 2870. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20993` → after: `L20834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20834) · [Before (L20993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L20993)

```diff
-               const xS = (0, ZS.j)(SS.Hj, HS, (0, JS.h)({
+               const yk = (0, zk.m)(kk.Xw, Fk, (0, Sk.i)({
```

#### 2871. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21000-L21003` → after: `L20841-L20844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20841-L20844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20841-L20844) · [Before (L21000-L21003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21000-L21003)

```diff
-           for (const kS of fS) kS.material = NS, kS.parent = XS, kS.Fj = !1, SS.Hj.Tj(kS);
-           XS.Fj = !1, XS.yK = !0, XS.WK = !0, SS.Hj.Tj(XS), XS.metadata.YNS = () => {
-             (0, FS.e)(SS, fS, XS.nf.x, XS.nf.y, YH.h, YH.l)
-           }, XS.MJ(!1), SS.Hj.nNS = XS
+           for (const Zk of tk) Zk.material = lk, Zk.parent = ik, Zk.gw = !1, kk.Xw.hw(Zk);
+           ik.gw = !1, ik.ne = !0, ik.ue = !0, kk.Xw.hw(ik), ik.metadata.dlk = () => {
+             (0, Ak.d)(kk, tk, ik.ci.x, ik.ci.y, uF.k, uF.s)
+           }, ik.Av(!1), kk.Xw.nlk = ik
```

#### 2872. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21007-L21008` → after: `L20848-L20849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20848-L20849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20848-L20849) · [Before (L21007-L21008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21007-L21008)

```diff
-             Bj: HS
-           } = SS.Hj, gS = (0, ZS.j)(SS.Hj, "floating", (0, JS.h)({
+             Yw: Fk
+           } = kk.Xw, Ik = (0, zk.m)(kk.Xw, "floating", (0, Sk.i)({
```

#### 2873. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21012` → after: `L20853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20853) · [Before (L21012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21012)

```diff
-             ...LH.e,
+             ...pF.d,
```

#### 2874. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21019` → after: `L20860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20860) · [Before (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21019)

```diff
-             Bj: HS,
+             Yw: Fk,
```

#### 2875. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21022-L21023` → after: `L20863-L20864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20863-L20864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20863-L20864) · [Before (L21022-L21023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21022-L21023)

```diff
-           }).mirror, gS.rotation.set(-Math.PI / 2, 0, 0), gS.yK = !0, gS.WK = !0, SS.Hj.Tj(gS), gS.Fj = !1, gS.MJ(!1), SS.Hj.CgS = gS
-         }(SS), IS.k.cj("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(xS), {
+           }).mirror, Ik.rotation.set(-Math.PI / 2, 0, 0), Ik.ne = !0, Ik.ue = !0, kk.Xw.hw(Ik), Ik.gw = !1, Ik.Av(!1), kk.Xw.oIk = Ik
+         }(kk), Lk.g.GL("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(yk), {
```

#### 2876. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21032` → after: `L20873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20873) · [Before (L21032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21032)

```diff
-       const xS = qS.j[HS],
+       const yk = ak.g[Fk],
```

#### 2877. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21038` → after: `L20879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20879) · [Before (L21038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21038)

```diff
-         const tS = qS.j[PS];
+         const Xk = ak.g[Pk];
```

#### 2878. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21041` → after: `L20882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20882) · [Before (L21041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21041)

```diff
-           await (0, yH.u)(`block ${PS}`);
+           await (0, RF.v)(`block ${Pk}`);
```

#### 2879. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21043` → after: `L20884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20884) · [Before (L21043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21043)

```diff
-           let qS = gS.Jm;
+           let ak = Ik.T_;
```

#### 2880. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21049-L21050` → after: `L20890-L20891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20890-L20891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20890-L20891) · [Before (L21049-L21050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21049-L21050)

```diff
-             } = tS.meta, XS = (0, RS.l)(HS === BS.b.top, gS, null !== bS && void 0 !== bS ? bS : 1);
-             XS !== RS.i && (NS.has(XS.key) || NS.set(XS.key, (() => pS(SS.Hj.lL(), xS, XS))), qS = NS.get(XS.key))
+             } = Xk.meta, ik = (0, gk.m)(Fk === dk.d.top, Ik, null !== Tk && void 0 !== Tk ? Tk : 1);
+             ik !== gk.i && (lk.has(ik.key) || lk.set(ik.key, (() => fk(kk.Xw.mG(), yk, ik))), ak = lk.get(ik.key))
```

#### 2881. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21053-L21055` → after: `L20894-L20896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20894-L20896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20894-L20896) · [Before (L21053-L21055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21053-L21055)

```diff
-             HS !== fS && (uS.has(HS) || uS.set(HS, (() => US(SS.Hj.lL(), tS))), qS = uS.get(HS))
-           } else(0, TS.w)(xS) ? qS = fH(HS, tS.meta.metaStr) : (0, kH.B)(xS) && (qS = DH(HS, tS.meta.rot, tS.meta.open));
-           SS.Ia.zW(tS.id, {
+             Fk !== tk && (qk.has(Fk) || qk.set(Fk, (() => Wk(kk.Xw.mG(), Xk))), ak = qk.get(Fk))
+           } else(0, mk.z)(yk) ? ak = ZF(Fk, Xk.meta.metaStr) : (0, jF.t)(yk) && (ak = sF(Fk, Xk.meta.rot, Xk.meta.open));
+           kk.yj.zN(Xk.id, {
```

#### 2882. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21057-L21058` → after: `L20898-L20899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20898-L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20898-L20899) · [Before (L21057-L21058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21057-L21058)

```diff
-             Jm: qS,
-             Kw: bS,
+             T_: ak,
+             FQ: Tk,
```

#### 2883. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21060-L21066` → after: `L20901-L20907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20901-L20907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20901-L20907) · [Before (L21060-L21066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21060-L21066)

```diff
-             tG: tS.tG,
-             dK: null !== (aS = null !== (KS = tS.dK) && void 0 !== KS ? KS : gS.dK) && void 0 !== aS ? aS : null,
-             bG: null !== (jS = null !== (GS = tS.bG) && void 0 !== GS ? GS : gS.bG) && void 0 !== jS ? jS : null,
-             cK: null !== (CS = tS.cK) && void 0 !== CS ? CS : gS.cK,
-             RL: vH(PS, null !== (nS = tS.model) && void 0 !== nS ? nS : xS.model),
-             Tl: () => mH(xS, tS)
-           }), (0, XS.F)(PS, tS.id, SS.Hj.lL(), void 0)
+             Re: Xk.Re,
+             Ve: null !== (jk = null !== (ek = Xk.Ve) && void 0 !== ek ? ek : Ik.Ve) && void 0 !== jk ? jk : null,
+             ge: null !== (wk = null !== (Hk = Xk.ge) && void 0 !== Hk ? Hk : Ik.ge) && void 0 !== wk ? wk : null,
+             ze: null !== (Jk = Xk.ze) && void 0 !== Jk ? Jk : Ik.ze,
+             YG: nF(Pk, null !== (xk = Xk.model) && void 0 !== xk ? xk : yk.model),
+             gM: () => DF(yk, Xk)
+           }), (0, ik.I)(Pk, Xk.id, kk.Xw.mG(), void 0)
```

#### 2884. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21074` → after: `L20915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20915) · [Before (L21074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21074)

```diff
-         alpha: YH.j
+         alpha: uF.o
```

#### 2885. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21079` → after: `L20920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20920) · [Before (L21079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21079)

```diff
-         Hj: HS
+         Xw: Fk
```

#### 2886. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21081-L21082` → after: `L20922-L20923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20922-L20923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20922-L20923) · [Before (L21081-L21082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21081-L21082)

```diff
-         Bj: gS
-       } = HS, tS = (0, ZS.j)(HS, "ezBridgeGhost", (0, JS.d)({
+         Yw: Ik
+       } = Fk, Xk = (0, zk.m)(Fk, "ezBridgeGhost", (0, Sk.e)({
```

#### 2887. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21087` → after: `L20928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20928) · [Before (L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21087)

```diff
-         ...LH.e,
+         ...pF.d,
```

#### 2888. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21090` → after: `L20931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20931) · [Before (L21090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21090)

```diff
-         transparencyMode: EH.n.alphaBlend,
+         transparencyMode: GF.r.alphaBlend,
```

#### 2889. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21097` → after: `L20938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20938) · [Before (L21097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21097)

```diff
-         Bj: gS,
+         Yw: Ik,
```

#### 2890. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21101` → after: `L20942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20942) · [Before (L21101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21101)

```diff
-       const XS = (0, ZS.j)(HS, "ezBridgeGhostOutline", (0, mS.d)((0, YH.b)().map((SS => {
+       const ik = (0, zk.m)(Fk, "ezBridgeGhostOutline", (0, Dk.e)((0, uF.b)().map((kk => {
```

#### 2891. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21103` → after: `L20944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20944) · [Before (L21103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21103)

```diff
-         return [(0, JS.d)({
+         return [(0, Sk.e)({
```

#### 2892. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21109` → after: `L20950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20950) · [Before (L21109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21109)

```diff
-       return XS.Fj = !1, XS.yK = !0, XS.WK = !0, XS.material = (0, PS.e)({
+       return ik.gw = !1, ik.ne = !0, ik.ue = !0, ik.material = (0, Pk.e)({
```

#### 2893. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21111` → after: `L20952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20952) · [Before (L21111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21111)

```diff
-         Bj: gS,
+         Yw: Ik,
```

#### 2894. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21113` → after: `L20954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20954) · [Before (L21113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21113)

```diff
-       }).mirror, XS.parent = tS, HS.Tj(XS), tS.Fj = !1, tS.yK = !0, tS.WK = !0, HS.Tj(tS), tS.MJ(!1), tS
+       }).mirror, ik.parent = Xk, Fk.hw(ik), Xk.gw = !1, Xk.ne = !0, Xk.ue = !0, Fk.hw(Xk), Xk.Av(!1), Xk
```

#### 2895. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21115` → after: `L20956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20956) · [Before (L21115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21115)

```diff
-     const sH = MH(nS.k),
+     const BF = YF(xk.n),
```

#### 2896. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21131-L21132` → after: `L20972-L20973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20972-L20973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20972-L20973) · [Before (L21131-L21132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21131-L21132)

```diff
-                 const xS = ES(`${HS.name}BlkMdl${tS<2?1:2}`);
-                 return xS.Fj = !1, xS.rotation.set(...bS), xS.position.set(...XS), xS.bakeCurrentTransformIntoVertices(), xS.material = gS, xS
+                 const yk = Gk(`${Fk.name}BlkMdl${Xk<2?1:2}`);
+                 return yk.gw = !1, yk.rotation.set(...Tk), yk.position.set(...ik), yk.bakeCurrentTransformIntoVertices(), yk.material = Ik, yk
```

#### 2897. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21134-L21135` → after: `L20975-L20976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20975-L20976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20975-L20976) · [Before (L21134-L21135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21134-L21135)

```diff
-               bS = (0, ZS.i)(tS, !1, !1);
-             return bS.Fj = !1, bS
+               Tk = (0, zk.j)(Xk, !1, !1);
+             return Tk.gw = !1, Tk
```

#### 2898. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21146` → after: `L20987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20987) · [Before (L21146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21146)

```diff
-             const gS = (0, GS.b)().getMetaInfo(HS).metaStr;
+             const Ik = (0, Hk.c)().getMetaInfo(Fk).metaStr;
```

#### 2899. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21153-L21154` → after: `L20994-L20995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20994-L20995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L20994-L20995) · [Before (L21153-L21154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21153-L21154)

```diff
-             const gS = (0, GS.b)().getMetaInfo(HS);
-             SS.rotation.y = (0, RS.n)(gS.rot, gS.stairsCorner)
+             const Ik = (0, Hk.c)().getMetaInfo(Fk);
+             kk.rotation.y = (0, gk.p)(Ik.rot, Ik.stairsCorner)
```

#### 2900. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21170` → after: `L21011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21011) · [Before (L21170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21170)

```diff
-               CH ??= NH(SS, kH.d, KH);
+               xF ??= aF(kk, jF.b, wF);
```

#### 2901. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21172` → after: `L21013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21013) · [Before (L21172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21172)

```diff
-                 tS = (0, kH.z)(HS) ? gS.gate : gS.top,
+                 Xk = (0, jF.s)(Fk) ? Ik.gate : Ik.top,
```

#### 2902. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21178` → after: `L21019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21019) · [Before (L21178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21178)

```diff
-                 of kH.k) {
+                 of jF.g) {
```

#### 2903. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21180` → after: `L21021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21021) · [Before (L21180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21180)

```diff
-                 bS.set(gS, (() => uH(SS, HS, `${HS.name}|${gS}FenceGateModel`, GH(tS, XS, xS))))
+                 Tk.set(Ik, (() => LF(kk, Fk, `${Fk.name}|${Ik}FenceGateModel`, JF(Xk, ik, yk))))
```

#### 2904. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21190` → after: `L21031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21031) · [Before (L21190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21190)

```diff
-             (0, GS.b)().getMetaInfo(HS).halfblockPlacement === BS.b.top && (SS.rotation.x = Math.PI)
+             (0, Hk.c)().getMetaInfo(Fk).halfblockPlacement === dk.d.top && (kk.rotation.x = Math.PI)
```

#### 2905. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21198-L21201` → after: `L21039-L21042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21039-L21042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21039-L21042) · [Before (L21198-L21201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21198-L21201)

```diff
-               XS = qS.j[HS].name,
-               xS = null !== (gS = XS.split("|")[2]) && void 0 !== gS ? gS : "rot1",
-               NS = "open" === (null !== (tS = XS.split("|")[3]) && void 0 !== tS ? tS : "closed");
-             "rot1" === xS && NS ? (SS.position.x += bS, SS.rotation.y += 3 * Math.PI / 2) : "rot1" !== xS || NS ? "rot2" === xS && NS ? SS.position.z -= bS : "rot2" !== xS || NS ? "rot3" === xS && NS ? (SS.position.x -= bS, SS.rotation.y += Math.PI / 2) : "rot3" !== xS || NS ? "r … [truncated]
+               ik = ak.g[Fk].name,
+               yk = null !== (Ik = ik.split("|")[2]) && void 0 !== Ik ? Ik : "rot1",
+               lk = "open" === (null !== (Xk = ik.split("|")[3]) && void 0 !== Xk ? Xk : "closed");
+             "rot1" === yk && lk ? (kk.position.x += Tk, kk.rotation.y += 3 * Math.PI / 2) : "rot1" !== yk || lk ? "rot2" === yk && lk ? kk.position.z -= Tk : "rot2" !== yk || lk ? "rot3" === yk && lk ? (kk.position.x -= Tk, kk.rotation.y += Math.PI / 2) : "rot3" !== yk || lk ? "r … [truncated]
```

#### 2906. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21208-L21209` → after: `L21049-L21050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21049-L21050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21049-L21050) · [Before (L21208-L21209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21208-L21209)

```diff
-             const tS = qS.j[HS].name,
-               bS = "open" === (null !== (gS = tS.split("|")[3]) && void 0 !== gS ? gS : "closed"),
+             const Xk = ak.g[Fk].name,
+               Tk = "open" === (null !== (Ik = Xk.split("|")[3]) && void 0 !== Ik ? Ik : "closed"),
```

#### 2907. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21213-L21214` → after: `L21054-L21055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21054-L21055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21054-L21055) · [Before (L21213-L21214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21213-L21214)

```diff
-               const HS = null !== (xS = tS.split("|")[2]) && void 0 !== xS ? xS : "rot1";
-               "rot4" === HS ? (SS.position.x += XS, SS.rotation.y += 3 * Math.PI / 2) : "rot1" === HS ? SS.position.z -= XS : "rot2" === HS ? (SS.position.x -= XS, SS.rotation.y += Math.PI / 2) : "rot3" === HS && (SS.position.z += XS, SS.rotation.y += Math.PI)
+               const Fk = null !== (yk = Xk.split("|")[2]) && void 0 !== yk ? yk : "rot1";
+               "rot4" === Fk ? (kk.position.x += ik, kk.rotation.y += 3 * Math.PI / 2) : "rot1" === Fk ? kk.position.z -= ik : "rot2" === Fk ? (kk.position.x -= ik, kk.rotation.y += Math.PI / 2) : "rot3" === Fk && (kk.position.z += ik, kk.rotation.y += Math.PI)
```

#### 2908. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21235` → after: `L21076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21076) · [Before (L21235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21235)

```diff
-       if (!gS) throw new Error(`Unknown block mesh type: ${SS}`);
+       if (!Ik) throw new Error(`Unknown block mesh type: ${kk}`);
```

#### 2909. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21247` → after: `L21088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21088) · [Before (L21247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21247)

```diff
-       return void 0 !== SS.model && (0, nS.n)(HS) === SS
+       return void 0 !== kk.model && (0, xk.r)(Fk) === kk
```

#### 2910. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21251` → after: `L21092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21092) · [Before (L21251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21251)

```diff
-       const HS = qS.j[SS],
+       const Fk = ak.g[kk],
```

#### 2911. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21253` → after: `L21094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21094) · [Before (L21253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21253)

```diff
-         bS = qS.j[gS],
+         Tk = ak.g[Ik],
```

#### 2912. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21262` → after: `L21103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21103) · [Before (L21262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21262)

```diff
-       } = qS.j[HS];
+       } = ak.g[Fk];
```

#### 2913. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21270-L21271` → after: `L21111-L21112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21111-L21112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21111-L21112) · [Before (L21270-L21271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21270-L21271)

```diff
-           rotation: DS.VK.Zero(),
-           nf: DS.VK.One()
+           rotation: Qk.Ge.Zero(),
+           ci: Qk.Ge.One()
```

#### 2914. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21280-L21282` → after: `L21121-L21123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21121-L21123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21121-L21123) · [Before (L21280-L21282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21280-L21282)

```diff
-       rH(SS, HS), void 0 !== qS.j[HS].rotatableOffsetAmt && (tS = qS.j[HS].rotatableOffsetAmt);
-       const bS = null !== (gS = qS.j[HS].name.split("|")[2]) && void 0 !== gS ? gS : "rot1";
-       "rot1" === bS ? SS.position.z -= tS : "rot2" === bS ? SS.position.x -= tS : "rot3" === bS ? SS.position.z += tS : "rot4" === bS && (SS.position.x += tS)
+       kI(kk, Fk), void 0 !== ak.g[Fk].rotatableOffsetAmt && (Xk = ak.g[Fk].rotatableOffsetAmt);
+       const Tk = null !== (Ik = ak.g[Fk].name.split("|")[2]) && void 0 !== Ik ? Ik : "rot1";
+       "rot1" === Tk ? kk.position.z -= Xk : "rot2" === Tk ? kk.position.x -= Xk : "rot3" === Tk ? kk.position.z += Xk : "rot4" === Tk && (kk.position.x += Xk)
```

#### 2915. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21287-L21288` → after: `L21128-L21129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21128-L21129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21128-L21129) · [Before (L21287-L21288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21287-L21288)

```diff
-       const bS = qS.j[HS],
-         XS = null !== (gS = bS.name.split("|")[2]) && void 0 !== gS ? gS : "rot1",
+       const Tk = ak.g[Fk],
+         ik = null !== (Ik = Tk.name.split("|")[2]) && void 0 !== Ik ? Ik : "rot1",
```

#### 2916. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21293-L21294` → after: `L21134-L21135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21134-L21135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21134-L21135) · [Before (L21293-L21294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21293-L21294)

```diff
-         } = null !== (tS = bS.customModelInfo) && void 0 !== tS ? tS : {},
-         IS = (0, nS.g)((0, nS.n)(bS));
+         } = null !== (Xk = Tk.customModelInfo) && void 0 !== Xk ? Xk : {},
+         Lk = (0, xk.j)((0, xk.r)(Tk));
```

#### 2917. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21308` → after: `L21149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21149) · [Before (L21308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21308)

```diff
-     const ug = [1, 50, 0, "h", 102, 9, 7, "e", 6, 97, 8, 255, "length", "undefined", void 0, 2, 168, 3, 203, 155, 63, "fromCodePoint", 12, "push", 41, "b", 82, "g", 91, 5, 130, 8191, 88, 13, 14, "d", "c", 120, 143, "f", 33554432, 67108864, !0, !1, 208, 169, "i", 4, 70, "a", 187,  … [truncated]
+     const LI = ["b", 0, 1, "h", 3, 249, 9, 74, 5, "f", 4, 8, 255, "length", "c", "d", "a", 121, "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 81, 167, "g", 91, 8191, 88, 13, 14, 120, 195, 64, 78, !1, 127, 73, 186, "i", 146, 43, !0, 26, 183, 205, 2, 130, 97, 10, ")", 128, "e … [truncated]
```

#### 2918. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21311` → after: `L21152-L21167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21152-L21167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21152-L21167) · [Before (L21311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21311)

```diff
-       return SS[ug[12]] = ug[0], typeof tg !== ug[13] && tg ? (new tg).decode(new bg(SS[ug[2]])) : typeof Xg !== ug[13] && Xg ? Xg.from(SS[ug[2]]).toString("utf-8") : qg(SS[ug[2]])
+       return kk[LI[13]] = LI[2], typeof FI[kk[LI[1]]] === LI[18] ? FI[kk[LI[1]]] = function(...kk) {
+         for (eI(kk[LI[13]] = LI[2], kk[-LI[5]] = '0"x@~_#})1&,MHn|u2=^lX4SdW5zCD($FP{[Evym`:Q6;Lp.U3ji><%gOto9h8?JBAbIrNkK+ZewV7YsfGqRcaT!*/]', kk[LI[0]] = "" + (kk[LI[1]] || ""), kk[LI[4]] = kk[LI[0]].length, kk[LI[10]] = [], kk[LI[8]] = LI[1], kk[LI[9]] = LI[1], kk[-LI[7]] = -L … [truncated]
+           if (kk[LI[6]] = kk[-LI[5]].indexOf(kk[LI[0]][kk[LI[3]]]), kk[LI[6]] !== -LI[2])
+             if (kk[-LI[7]] < LI[1]) kk[-LI[7]] = kk[LI[6]];
+             else {
+               eI(kk[-LI[7]] += kk[LI[6]] * LI[28], kk[LI[8]] |= kk[-LI[7]] << kk[LI[9]], kk[LI[9]] += (kk[-LI[7]] & LI[29]) > LI[30] ? LI[31] : LI[32]);
+               do {
+                 eI(kk[LI[10]].push(kk[LI[8]] & LI[12]), kk[LI[8]] >>= LI[11], kk[LI[9]] -= LI[11])
+               } while (kk[LI[9]] > LI[22]);
+               kk[-LI[7]] = -LI[2]
+             } return kk[-LI[7]] > -LI[2] && kk[LI[10]].push((kk[LI[8]] | kk[-LI[7]] << kk[LI[9]]) & LI[12]), ZI(kk[LI[10]])
+       }(II[kk[LI[1]]]) : FI[kk[LI[1]]]
+     }
+ 
+     function ZI(...kk) {
+       return kk[LI[13]] = LI[2], typeof TI !== LI[18] && TI ? (new TI).decode(new iI(kk[LI[1]])) : typeof yI !== LI[18] && yI ? yI.from(kk[LI[1]]).toString("utf-8") : qI(kk[LI[1]])
```

#### 2919. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21319-L21320` → after: `L21175-L21176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21175-L21176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21175-L21176) · [Before (L21319-L21320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21319-L21320)

```diff
-     kg(Sg = {}, Hg = ["uit}^4),Q#{9Zu;pU@uoP6x[wGb:J4Bu.|A", 'UcN(Lksc"<XOrp&O>DAbJaO?!83=+kzug|{!w7"cE@i}!o:CtYA', '8"#333tsFiF&D8q+NP&QE}ifL[', "3kso3pgO&9M", "1TAzj*m+X[1#8nkN3AkQ^KS:jngCk6guskj,Q89*Id5.C3eD&pfH", "=uE,V`^^m%Y&3qgu", "OA%CUvy9O8,Q$u<", "cOE!ygX*L:U<+k|^}NSu9]@ … [truncated]
-       var SS, HS, gS, tS = [function() {
+     eI(FI = {}, II = ["8nhePZ2}0={syHoQ?vPiej&=}g(nqW;^`#6DdYvNAte77dDD}K!ZTK0", "rUL}>m+T{hckfRn`fAm(!NzN9,r7Ou|", "G#:wW9>=qJy&O|+yye3i(Z=obJ]B%HEv)r<~@p<D?JxY8W@2", "VLP+HEB=l^`2^x%`XSIF[Z]p8n~v[jY5v@V<?{=EQnr<W~c{LKE}H", "tL$>|G!Ss|)8FR=`z5`Z{`m[#", ':i<~&hs"Ko4&d9r=hA!~{Z.w{ … [truncated]
+       eI(kk[LI[13]] = LI[1], kk[LI[16]] = [function() {
```

#### 2920. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21328-L21329` → after: `L21184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21184) · [Before (L21328-L21329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21328-L21329)

```diff
-       }];
-       kg(SS = void 0, HS = []);
+       }], kk[LI[2]] = void 0, kk[LI[14]] = []);
```

#### 2921. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21331` → after: `L21186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21186) · [Before (L21331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21331)

```diff
-         kg(SS = Object, HS[ug[23]]("".__proto__.constructor.name))
+         eI(kk[LI[2]] = Object, kk[LI[14]][LI[24]]("".__proto__.constructor.name))
```

#### 2922. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21333-L21337` → after: `L21188-L21191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21188-L21191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21188-L21191) · [Before (L21333-L21337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21333-L21337)

```diff
-       SS: for (gS = ug[2]; gS < tS[ug[12]]; gS++) try {
-         var bS;
-         for (SS = tS[gS](), bS = ug[2]; bS < HS[ug[12]]; bS++)
-           if (typeof SS[HS[bS]] === ug[13]) continue SS;
-         return SS
+       kk: for (kk[LI[15]] = LI[1]; kk[LI[15]] < kk[LI[16]][LI[13]]; kk[LI[15]]++) try {
+         for (kk[LI[2]] = kk[LI[16]][kk[LI[15]]](), kk[LI[17]] = LI[1]; kk[LI[17]] < kk[LI[14]][LI[13]]; kk[LI[17]]++)
+           if (typeof kk[LI[2]][kk[LI[14]][kk[LI[17]]]] === LI[18]) continue kk;
+         return kk[LI[2]]
```

#### 2923. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21339-L21344` → after: `L21193-L21199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21193-L21199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21193-L21199) · [Before (L21339-L21344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21339-L21344)

```diff
-       return SS || this
-     }() || {}, tg = gg.TextDecoder, bg = gg.Uint8Array, Xg = gg.CK, xg = gg.String || String, Ng = gg.Array || Array, qg = function(...SS) {
-       return kg(SS[ug[12]] = ug[2], SS[ug[24]] = new Ng(128), SS[ug[25]] = xg[ug[21]] || xg.fromCharCode, SS[ug[15]] = []),
-         function(...HS) {
-           for (kg(HS[ug[12]] = ug[0], HS[ug[19]] = ug[14], HS[-ug[18]] = ug[14], HS[ug[17]] = HS[ug[2]][ug[12]], SS[ug[15]][ug[12]] = ug[2]), HS[ug[16]] = ug[2]; HS[ug[16]] < HS[ug[17]];) kg(HS[-ug[18]] = HS[ug[2]][HS[ug[16]]++], HS[-ug[18]] <= 127 ? HS[ug[19]] = HS[-ug[18]] : HS … [truncated]
-           return SS[ug[15]].join("")
+       return kk[LI[2]] || this
+     }() || {}, TI = XI.TextDecoder, iI = XI.Uint8Array, yI = XI.je, lI = XI.String || String, aI = XI.Array || Array, qI = function(...kk) {
+       return eI(kk[LI[13]] = LI[1], kk[LI[16]] = new aI(LI[53]), kk[LI[2]] = lI[LI[21]] || lI.fromCharCode, kk[LI[14]] = []),
+         function(Fk) {
+           var Ik, Xk, Tk, ik;
+           for (eI(Xk = void 0, Tk = Fk[LI[13]], kk[LI[14]][LI[13]] = LI[1]), ik = LI[1]; ik < Tk;) eI(Xk = Fk[ik++], Xk <= LI[38] ? Ik = Xk : Xk <= 223 ? Ik = (31 & Xk) << LI[20] | Fk[ik++] & LI[19] : Xk <= 239 ? Ik = (15 & Xk) << LI[23] | (Fk[ik++] & LI[19]) << LI[20] | Fk[ik++] … [truncated]
+           return kk[LI[14]].join("")
```

#### 2924. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21347` → after: `L21202-L21210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21202-L21210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21202-L21210) · [Before (L21347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21347)

```diff
-       if (ug[42]) {
+       if (tI(LI[66]) + "6" in jI && function(...kk) {
+           eI(kk[LI[13]] = LI[1], kk[LI[43]] = function(...kk) {
+             if (eI(kk[LI[13]] = LI[2], kk[LI[16]] = kk[LI[1]].length), kk[LI[16]] < LI[48]) return LI[1];
+             if (eI(kk[LI[0]] = Math.max(...kk[LI[1]]), kk[LI[4]] = Math.min(...kk[LI[1]])), kk[LI[0]] === kk[LI[4]]) return LI[1];
+             for (eI(kk[LI[10]] = Array(kk[LI[16]] - LI[2]).fill(Number.MAX_SAFE_INTEGER), kk[LI[8]] = Array(kk[LI[16]] - LI[2]).fill(Number.MIN_SAFE_INTEGER), kk[LI[39]] = Math.ceil((kk[LI[0]] - kk[LI[4]]) / (kk[LI[16]] - LI[2])), kk[LI[27]] = LI[1]), kk[LI[38]] = LI[1]; kk[LI[38 … [truncated]
+             for (eI(kk[LI[41]] = Number.MIN_SAFE_INTEGER, kk[-LI[42]] = kk[LI[4]]), kk[-LI[40]] = LI[1]; kk[-LI[40]] < kk[LI[16]] - LI[2]; kk[-LI[40]]++) kk[LI[10]][kk[-LI[40]]] === Number.MAX_SAFE_INTEGER && kk[LI[8]][kk[-LI[40]]] === Number.MIN_SAFE_INTEGER || eI(kk[LI[41]] = M … [truncated]
+             return kk[LI[41]] = Math.max(kk[LI[41]], kk[LI[0]] - kk[-LI[42]]), kk[LI[41]]
+           }, console.log(kk[LI[43]]))
+         }(), LI[44]) {
```

#### 2925. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21349-L21351` → after: `L21212-L21214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21212-L21214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21212-L21214) · [Before (L21349-L21351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21349-L21351)

```diff
-           for (kg(SS[ug[12]] = ug[0], SS[ug[0]] = '3ADKtf/z6V!QWHiZ5hs=GJFo+bx{7kXP9OE*>vCSR%~n&0(}l?u8<eg@IrcwyT[)BNpaj`dq]4L$,#:_21Y|.UmM^";', SS[ug[25]] = "" + (SS[ug[2]] || ""), SS[-ug[26]] = SS[ug[25]].length, SS[ug[35]] = [], SS[ug[29]] = ug[2], SS[-ug[30]] = ug[2], SS[ug[2 … [truncated]
-             if (SS[ug[5]] = SS[ug[0]].indexOf(SS[ug[25]][SS[ug[3]]]), SS[ug[5]] !== -ug[0])
-               if (SS[ug[27]] < ug[2]) SS[ug[27]] = SS[ug[5]];
+           for (eI(kk[LI[13]] = LI[2], kk[LI[2]] = 'AKobVPmErsc~UzuB[36DTQfOMCe19/+"{v^;7|<$,(#@:4yx8]5>ja2HZw=dX.%`*n}&0?FGY!)_WiSphLgkqJRtIlN', kk[LI[0]] = "" + (kk[LI[1]] || ""), kk[LI[46]] = kk[LI[0]].length, kk[LI[10]] = [], kk[LI[47]] = LI[1], kk[LI[20]] = LI[1], kk[LI[22]]  … [truncated]
+             if (kk[LI[6]] = kk[LI[2]].indexOf(kk[LI[0]][kk[LI[45]]]), kk[LI[6]] !== -LI[2])
+               if (kk[LI[22]] < LI[1]) kk[LI[22]] = kk[LI[6]];
```

#### 2926. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21353` → after: `L21216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21216) · [Before (L21353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21353)

```diff
-                 kg(SS[ug[27]] += SS[ug[5]] * ug[28], SS[ug[29]] |= SS[ug[27]] << SS[-ug[30]], SS[-ug[30]] += (SS[ug[27]] & ug[31]) > ug[32] ? ug[33] : ug[34]);
+                 eI(kk[LI[22]] += kk[LI[6]] * LI[28], kk[LI[47]] |= kk[LI[22]] << kk[LI[20]], kk[LI[20]] += (kk[LI[22]] & LI[29]) > LI[30] ? LI[31] : LI[32]);
```

#### 2927. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21355-L21358` → after: `L21218-L21221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21218-L21221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21218-L21221) · [Before (L21355-L21358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21355-L21358)

```diff
-                   kg(SS[ug[35]].push(SS[ug[29]] & ug[11]), SS[ug[29]] >>= ug[10], SS[-ug[30]] -= ug[10])
-                 } while (SS[-ug[30]] > ug[6]);
-                 SS[ug[27]] = -ug[0]
-               } return SS[ug[27]] > -ug[0] && SS[ug[35]].push((SS[ug[29]] | SS[ug[27]] << SS[-ug[30]]) & ug[11]), Ig(SS[ug[35]])
+                   eI(kk[LI[10]].push(kk[LI[47]] & LI[12]), kk[LI[47]] >>= LI[11], kk[LI[20]] -= LI[11])
+                 } while (kk[LI[20]] > LI[22]);
+                 kk[LI[22]] = -LI[2]
+               } return kk[LI[22]] > -LI[2] && kk[LI[10]].push((kk[LI[47]] | kk[LI[22]] << kk[LI[20]]) & LI[12]), ZI(kk[LI[10]])
```

#### 2928. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21362` → after: `L21225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21225) · [Before (L21362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21362)

```diff
-           return HS[ug[12]] = ug[0], typeof Sg[HS[ug[2]]] === ug[13] ? Sg[HS[ug[2]]] = SS(Hg[HS[ug[2]]]) : Sg[HS[ug[2]]]
+           return Fk[LI[13]] = LI[2], typeof FI[Fk[LI[1]]] === LI[18] ? FI[Fk[LI[1]]] = kk(II[Fk[LI[1]]]) : FI[Fk[LI[1]]]
```

#### 2929. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21384-L21401` → after: `L21228-L21233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21228-L21233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21228-L21233) · [Before (L21384-L21401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21384-L21401)

```diff
-               function gS(...SS) {
-                 switch (SS[ug[12]] = ug[0], ((SS[ug[2]] & ug[40]) !== ug[2]) * ug[0] + (SS[ug[2]] < ug[2]) * ug[15]) {
-                   case ug[2]:
-                     return [SS[ug[2]] % ug[40], Math.trunc(SS[ug[2]] / ug[41])];
-                   case ug[0]:
-                     return [SS[ug[2]] % ug[40] - ug[40], Math.trunc(SS[ug[2]] / ug[41]) + ug[0]];
-                   case ug[15]:
-                     return [((SS[ug[2]] + ug[40]) % ug[40] + ug[40]) % ug[40], Math.round(SS[ug[2]] / ug[41])];
-                   case ug[17]:
-                     return [SS[ug[2]] % ug[40], Math.trunc(SS[ug[2]] / ug[41])]
-                 }
-               }
-               SS[ug[12]] = ug[2], kg(SS[ug[32]] = HS([ug[15], ug[47]]), SS[ug[0]] = HS([ug[0], ug[15]]), SS[ug[36]] = SS[ug[32]] + SS[ug[0]], SS[ug[35]] = SS[ug[36]] - SS[ug[0]], SS[ug[7]] = SS[ug[35]] * ug[15], SS[ug[39]] = SS[ug[7]] / ug[15], console.log(gS(SS[ug[36]])), consol … [truncated]
-             }(), !gS && (0, GS[ug[7]])()) {
-             function HS(...SS) {
-               for (kg(SS[ug[12]] = ug[0], SS[ug[0]] = 'H3n4aRABx7.O|%<wLoceJft#>y$2{r1[6FqhP5^"(SpKZ&+mG,_~vV)M=9g`N:]uDE@*/QC8XIblT}0iWzU?!s;Ydjk', SS[ug[25]] = "" + (SS[ug[2]] || ""), SS[ug[36]] = SS[ug[25]].length, SS[ug[35]] = [], SS[ug[29]] = ug[2], SS[ug[8]] = ug[2], SS[ug[ … [truncated]
- ... (2 more removed lines; see GitHub link above)
+         function Ik(...kk) {
+           function Ik(kk) {
+             return typeof FI[kk] === LI[18] ? FI[kk] = function(...kk) {
+               for (eI(kk[LI[13]] = LI[2], kk[LI[2]] = '=&y/9+>8[2u!0Do^qs_%UpOi(R47]vPCfQ`twa<EB,3T$6}?n*:I"Xh~)Hz1SFMjZemLJWVNlcbgkdK5{.@x|;AYG#r', kk[LI[48]] = "" + (kk[LI[1]] || ""), kk[LI[14]] = kk[LI[48]].length, kk[-LI[49]] = [], kk[LI[8]] = LI[1], kk[LI[20]] = LI[1], kk[LI … [truncated]
+                 if (kk[LI[41]] = kk[LI[2]].indexOf(kk[LI[48]][kk[LI[11]]]), kk[LI[41]] !== -LI[2])
+                   if (kk[LI[22]] < LI[1]) kk[LI[22]] = kk[LI[41]];
```

#### 2930. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21403` → after: `L21235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21235) · [Before (L21403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21403)

```diff
-                     kg(SS[ug[6]] += SS[ug[5]] * ug[28], SS[ug[29]] |= SS[ug[6]] << SS[ug[8]], SS[ug[8]] += (SS[ug[6]] & ug[31]) > ug[32] ? ug[33] : ug[34]);
+                     eI(kk[LI[22]] += kk[LI[41]] * LI[28], kk[LI[8]] |= kk[LI[22]] << kk[LI[20]], kk[LI[20]] += (kk[LI[22]] & LI[29]) > LI[30] ? LI[31] : LI[32]);
```

#### 2931. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21405-L21408` → after: `L21237-L21263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21237-L21263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21237-L21263) · [Before (L21405-L21408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21405-L21408)

```diff
-                       kg(SS[ug[35]].push(SS[ug[29]] & ug[11]), SS[ug[29]] >>= ug[10], SS[ug[8]] -= ug[10])
-                     } while (SS[ug[8]] > ug[6]);
-                     SS[ug[6]] = -ug[0]
-                   } return SS[ug[6]] > -ug[0] && SS[ug[35]].push((SS[ug[29]] | SS[ug[6]] << SS[ug[8]]) & ug[11]), Ig(SS[ug[35]])
+                       eI(kk[-LI[49]].push(kk[LI[8]] & LI[12]), kk[LI[8]] >>= LI[11], kk[LI[20]] -= LI[11])
+                     } while (kk[LI[20]] > LI[22]);
+                     kk[LI[22]] = -LI[2]
+                   } return kk[LI[22]] > -LI[2] && kk[-LI[49]].push((kk[LI[8]] | kk[LI[22]] << kk[LI[20]]) & LI[12]), ZI(kk[-LI[49]])
+             }(II[kk]) : FI[kk]
+           }
+           kk[LI[13]] = LI[1], eI(kk[-LI[50]] = Fk(101) + Ik(102) + Ik(103) + Ik(104) + Ik(105), kk[LI[51]] = Ik(106) + Ik(107) + Ik(108) + Ik(109) + LI[64], kk[LI[48]] = Ik(110) + Ik(111) + Ik(112) + Ik(113) + Ik(114) + Ik(115) + Ik(116) + LI[52], kk[-LI[50]].match(kk[LI[51]] + k … [truncated]
+         }
+         Fk(100) + "G" in jI && Ik();
+         let Xk = LI[37];
+         eI(setInterval((() => {
+           if (!Xk && (0, Hk[LI[54]])()) {
+             function kk(kk) {
+               var Fk, Ik, Xk, Tk, ik, yk, lk;
+               for (eI(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = LI[1], ik = LI[1], yk = -LI[2]), lk = LI[1]; lk < Ik; lk++) {
+                 var ak = 'iFqjYtgPTorEDZe;#M?~1&fRJ2HNlUWK+G_40}VaScydmC=b3^z"6pLB7!Ax[Xh8)O$Q:kIn*,%|/w{vu5`>].<@9(s'.indexOf(Fk[lk]);
+ ... (11 more added lines; see GitHub link above)
```

#### 2932. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21412` → after: `L21267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21267) · [Before (L21412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21412)

```diff
-               return SS[ug[12]] = ug[0], typeof Sg[SS[ug[2]]] === ug[13] ? Sg[SS[ug[2]]] = HS(Hg[SS[ug[2]]]) : Sg[SS[ug[2]]]
+               return Fk[LI[13]] = LI[2], typeof FI[Fk[LI[1]]] === LI[18] ? FI[Fk[LI[1]]] = kk(II[Fk[LI[1]]]) : FI[Fk[LI[1]]]
```

#### 2933. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21415-L21418` → after: `L21301-L21304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21301-L21304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21301-L21304) · [Before (L21415-L21418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21415-L21418)

```diff
-               [tS(78) + tS(79)]: tS(80) + "ay",
-               [tS(81)]: tS(ug[26]) + tS(83),
-               [tS(84) + "au"]: tS(85),
-               [tS(86)]: tS(87) + tS(ug[32])
+               [Fk(123) + Ik(124)]: Ik(LI[63]) + "ay",
+               [Ik(126)]: Ik(LI[38]) + Ik(LI[53]),
+               [Ik(129) + "au"]: Ik(LI[49]),
+               [Ik(131)]: Ik(132) + Ik(133)
```

#### 2934. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21420` → after: `L21306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21306) · [Before (L21420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21420)

```diff
-             kg(gS = ug[42], (0, bS[tS(89)])(CS.Ki, XS))
+             eI(Xk = LI[44], (0, Tk[Ik(134)])(Jk.ei, ik))
```

#### 2935. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21422-L21423` → after: `L21308-L21323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21308-L21323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21308-L21323) · [Before (L21422-L21423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21422-L21423)

```diff
-         }), 16970), (0, bS[HS(90) + HS(ug[28])])((() => {
-           gS = ug[43]
+         }), 14879), (0, Tk[Fk(135) + Fk(136)])(((...kk) => {
+           kk[LI[13]] = LI[1],
+             function(kk) {
+               typeof FI[kk] === LI[18] ? FI[kk] = function(...kk) {
+                 for (eI(kk[LI[13]] = LI[2], kk[-LI[56]] = 'ey.0[x@8?)=wZ%^qc6AHEVvsO49&UJ+DWBN_rdS3(pM7<utl!YgPG5Cn`a1fR;Xo2L$]:#|}bz,hK{Ti>j*Fm~IQ/k"', kk[LI[0]] = "" + (kk[LI[1]] || ""), kk[LI[4]] = kk[LI[0]].length, kk[LI[10]] = [], kk[LI[54]] = LI[1], kk[-LI[57]] = LI[1], kk[ … [truncated]
+                   if (kk[LI[6]] = kk[-LI[56]].indexOf(kk[LI[0]][kk[-LI[55]]]), kk[LI[6]] !== -LI[2])
+                     if (kk[LI[27]] < LI[1]) kk[LI[27]] = kk[LI[6]];
+                     else {
+                       eI(kk[LI[27]] += kk[LI[6]] * LI[28], kk[LI[54]] |= kk[LI[27]] << kk[-LI[57]], kk[-LI[57]] += (kk[LI[27]] & LI[29]) > LI[30] ? LI[31] : LI[32]);
+                       do {
+                         eI(kk[LI[10]].push(kk[LI[54]] & LI[12]), kk[LI[54]] >>= LI[11], kk[-LI[57]] -= LI[11])
+                       } while (kk[-LI[57]] > LI[22]);
+                       kk[LI[27]] = -LI[2]
+                     } return kk[LI[27]] > -LI[2] && kk[LI[10]].push((kk[LI[54]] | kk[LI[27]] << kk[-LI[57]]) & LI[12]), ZI(kk[LI[10]])
+               }(II[kk]) : FI[kk]
+             }(137), Xk = LI[37]
```

#### 2936. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21427` → after: `L21327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21327) · [Before (L21427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21427)

```diff
-       if (ug[42]) {
+       if (LI[44]) {
```

#### 2937. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21429-L21431` → after: `L21329-L21331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21329-L21331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21329-L21331) · [Before (L21429-L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21429-L21431)

```diff
-           for (kg(SS[ug[12]] = ug[0], SS[ug[44]] = 'rWAVLZUdagDEOcpCRXPYSkqJhIinB09|#8"_,:x`@?3{jel)%^74.us;&z[$/b~+fGFtv<H1}Qmy*6K>M5N!=w]2(To', SS[ug[25]] = "" + (SS[ug[2]] || ""), SS[ug[17]] = SS[ug[25]].length, SS[ug[35]] = [], SS[ug[29]] = ug[2], SS[ug[8]] = ug[2], SS[-ug[44 … [truncated]
-             if (SS[ug[46]] = SS[ug[44]].indexOf(SS[ug[25]][SS[-ug[45]]]), SS[ug[46]] !== -ug[0])
-               if (SS[-ug[44]] < ug[2]) SS[-ug[44]] = SS[ug[46]];
+           for (eI(kk[LI[13]] = LI[2], kk[LI[59]] = '107<exb$~8LC!Oh#UVj(=+W/TM:lw*G4c_[BP)Zrz}i5nRA2?@H;pd9KmX3`|vgfQuNq&^y%s{"Do]6SEk>FIat,J.Y', kk[LI[48]] = "" + (kk[LI[1]] || ""), kk[LI[14]] = kk[LI[48]].length, kk[LI[10]] = [], kk[LI[54]] = LI[1], kk[LI[61]] = LI[1], kk[-LI[6 … [truncated]
+             if (kk[LI[6]] = kk[LI[59]].indexOf(kk[LI[48]][kk[LI[3]]]), kk[LI[6]] !== -LI[2])
+               if (kk[-LI[60]] < LI[1]) kk[-LI[60]] = kk[LI[6]];
```

#### 2938. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21433` → after: `L21333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R21333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L21333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L21333) · [Before (L21433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L21433)

```diff
-                 kg(SS[-ug[44]] += SS[ug[46]] * ug[28], SS[ug[29]] |= SS[-ug[44]] << SS[ug[8]], SS[ug[8]] += (SS[-ug[44]] & ug[31]) > ug[32] ? ug[33] : ug[34]);
+                 eI(kk[-LI[60]] += kk[LI[6]] * LI[28], kk[LI[54]] |= kk[-LI[60]] << kk[LI[61]], kk[LI[61]] += (kk[-LI[60]] & LI[29]) > LI[30] ? LI[31] : LI[32]);
```
