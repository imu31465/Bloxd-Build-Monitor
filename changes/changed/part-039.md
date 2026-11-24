# Changed — Bundle Modifications Report (Part 039 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `39 / 140` (**425** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 038](part-038.md) · [Part 040 →](part-040.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 71. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L876-L880` → after: `L860-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L860-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L860-L864) · [Before (L876-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L876-L880)

```diff
-                   cS(SS[GS[35]].push(SS[-GS[34]] & GS[3]), SS[-GS[34]] >>= GS[2], SS[GS[15]] -= GS[2])
-                 } while (SS[GS[15]] > GS[17]);
-                 SS[GS[17]] = -GS[1]
-               } return SS[GS[17]] > -GS[1] && SS[GS[35]].push((SS[-GS[34]] | SS[GS[17]] << SS[GS[15]]) & GS[3]), nS(SS[GS[35]])
-         }(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
+                   Ok(kk[Hk[9]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
+                 } while (kk[Hk[20]] > Hk[22]);
+                 kk[Hk[6]] = -Hk[0]
+               } return kk[Hk[6]] > -Hk[0] && kk[Hk[9]].push((kk[Hk[32]] | kk[Hk[6]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[9]])
+         }(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
```

#### 72. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L882-L895` → after: `L866-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L866-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L866-L879) · [Before (L882-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L882-L895)

```diff
-       SS[GS[7]] = GS[2];
-       const gS = SS[GS[0]][HS(GS[36])][HS(101) + HS(102) + HS(103)](SS[GS[1]]);
-       SS[GS[2]] = SS[GS[0]][HS(GS[36])][HS(GS[49]) + HS(GS[50]) + HS(GS[51]) + HS(GS[52])](gS);
-       const tS = SS[GS[2]] === GS[41] ? SS[GS[0]][HS(GS[36])][HS(GS[42]) + HS(GS[43]) + HS(GS[44]) + HS(GS[45])](SS[GS[1]], HS(GS[37]) + HS(GS[38]) + HS(GS[39]) + GS[40]) : SS[GS[2]][HS(GS[37]) + HS(GS[38]) + HS(GS[39]) + GS[40]],
-         xS = SS[GS[2]] === GS[41] ? SS[GS[0]][HS(GS[36])][HS(GS[42]) + HS(GS[43]) + HS(GS[44]) + HS(GS[45])](SS[GS[1]], HS(GS[46]) + HS(GS[47]) + HS(GS[48])) : SS[GS[2]][HS(GS[46]) + HS(GS[47]) + HS(GS[48])];
-       cS(bS()[HS(GS[86])](QS, GS[0], GS[0], SS[GS[26]]), bS().bu(QS, QS, bS()[HS(GS[82])], SS[GS[5]].heading), bS()[HS(120)](OS, SS[GS[12]].xG), OS[GS[1]] = GS[0]);
-       const uS = SS[GS[11]][HS(121) + HS(122)]();
-       if (cS(SS[GS[2]] = SS[GS[0]][HS(GS[36])][HS(GS[49]) + HS(GS[50]) + HS(GS[51]) + HS(GS[52])](gS), SS[GS[70]] = SS[GS[2]] === GS[41] ? SS[GS[0]][HS(GS[36])][HS(GS[42]) + HS(GS[43]) + HS(GS[44]) + HS(GS[45])](SS[GS[1]], HS(GS[53]) + HS(GS[54])) : SS[GS[2]][HS(GS[53]) + HS(GS[5 … [truncated]
-         function KS(SS) {
-           var HS, gS, tS, bS, XS, xS, NS;
-           for (cS(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = GS[0], XS = GS[0], xS = -GS[1]), NS = GS[0]; NS < gS; NS++) {
-             var qS = 'dNt[R+`8h2g1{mOGDz,|LCQ*9?rX}wZP~UvclBfy.V<sb&qKA>7]jWFu/5=S03Hn)T%o(!^kIYME@e4Jxpi6_$#:"a;'.indexOf(HS[NS]);
-             if (qS !== -GS[1])
-               if (xS < GS[0]) xS = qS;
+       kk[Hk[12]] = Hk[10], Jk(Hk[50]) in Pk && function(...kk) {
+         kk[Hk[12]] = Hk[2]
+       }();
+       const Ik = kk[Hk[2]][Jk(131)][Fk(132) + Fk(133) + Fk(134)](kk[Hk[0]]);
+       kk[-Hk[58]] = kk[Hk[2]][Fk(Hk[59])][Fk(Hk[66]) + Fk(Hk[67]) + Fk(Hk[68]) + Fk(Hk[69])](Ik);
+       const Xk = kk[-Hk[58]] === Hk[42] ? kk[Hk[2]][Fk(Hk[59])][Fk(Hk[75]) + Fk(Hk[76]) + Fk(Hk[77]) + Fk(Hk[78])](kk[Hk[0]], Fk(Hk[60]) + Fk(Hk[61]) + Fk(Hk[62]) + Hk[32]) : kk[-Hk[58]][Fk(Hk[60]) + Fk(Hk[61]) + Fk(Hk[62]) + Hk[32]],
+         yk = kk[-Hk[58]] === Hk[42] ? kk[Hk[2]][Fk(Hk[59])][Fk(Hk[70]) + Fk(Hk[71]) + Fk(Hk[72])](kk[Hk[0]], Fk(Hk[63]) + Fk(Hk[64]) + Fk(Hk[65])) : kk[-Hk[58]][Fk(Hk[63]) + Fk(Hk[64]) + Fk(Hk[65])];
+       Ok(Tk()[Fk(153)](Kk, Hk[2], Hk[2], kk[Hk[89]]), Tk().ei(Kk, Kk, Tk()[Fk(Hk[41])], kk[Hk[47]].heading), Tk()[Fk(155)](vk, kk[Hk[9]].TH), vk[Hk[0]] = Hk[2]);
+       const qk = kk[Hk[13]][Fk(156) + Fk(157)]();
+       if (Ok(kk[-Hk[58]] = kk[Hk[2]][Fk(Hk[59])][Fk(Hk[66]) + Fk(Hk[67]) + Fk(Hk[68]) + Fk(Hk[69])](Ik), kk[-Hk[13]] = kk[-Hk[58]] === Hk[42] ? kk[Hk[2]][Fk(Hk[59])][Fk(Hk[70]) + Fk(Hk[71]) + Fk(Hk[72])](kk[Hk[0]], Fk(Hk[73]) + Fk(Hk[74])) : kk[-Hk[58]][Fk(Hk[73]) + Fk(Hk[74])]), … [truncated]
+         function ek(...kk) {
+           for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[80]] = '{fdALtCjgmeRS<0D`VT8@|3yaH~["x_r+2BU?9)Q>#P]=oEG1(IZws;&Okb*NJ%c:4YqX5F7/,W6!vnz^$}hlK.iMup', kk[Hk[1]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[1]].length, kk[Hk[55]] = [], kk[Hk[32]] = Hk[2], kk[Hk[20]] = Hk[2], kk[Hk[22]] … [truncated]
+             if (kk[Hk[81]] = kk[Hk[80]].indexOf(kk[Hk[1]][kk[-Hk[79]]]), kk[Hk[81]] !== -Hk[0])
+               if (kk[Hk[22]] < Hk[2]) kk[Hk[22]] = kk[Hk[81]];
```

#### 73. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L897` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L881) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L897)

```diff
-                 cS(xS += qS * GS[25], bS |= xS << XS, XS += (xS & GS[27]) > GS[28] ? GS[29] : GS[30]);
+                 Ok(kk[Hk[22]] += kk[Hk[81]] * Hk[31], kk[Hk[32]] |= kk[Hk[22]] << kk[Hk[20]], kk[Hk[20]] += (kk[Hk[22]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
```

#### 74. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L899-L904` → after: `L883-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L883-L886) · [Before (L899-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L899-L904)

```diff
-                   cS(tS.push(bS & GS[3]), bS >>= GS[2], XS -= GS[2])
-                 } while (XS > GS[17]);
-                 xS = -GS[1]
-               }
-           }
-           return xS > -GS[1] && tS.push((bS | xS << XS) & GS[3]), nS(tS)
+                   Ok(kk[Hk[55]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
+                 } while (kk[Hk[20]] > Hk[22]);
+                 kk[Hk[22]] = -Hk[0]
+               } return kk[Hk[22]] > -Hk[0] && kk[Hk[55]].push((kk[Hk[32]] | kk[Hk[22]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[55]])
```

#### 75. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L907-L908` → after: `L889-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L889-L890) · [Before (L907-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L907-L908)

```diff
-         function jS(...SS) {
-           return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = KS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
+         function wk(kk) {
+           return typeof lk[kk] === Hk[17] ? lk[kk] = ek(ak[kk]) : lk[kk]
```

#### 76. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L912-L929` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L894) · [Before (L912-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L912-L929)

```diff
-           cS(SS[GS[7]] = GS[0], SS[GS[65]] = function(...HS) {
-             return cS(HS[GS[7]] = GS[1], HS[GS[1]] = []), (HS[GS[0]] === GS[1] || HS[GS[0]] >= GS[12]) && SS[GS[1]](HS[GS[1]], [], HS[GS[0]], GS[0]), HS[GS[1]]
-           }, SS[GS[1]] = function(...HS) {
-             for (HS[GS[7]] = GS[12], HS[GS[12]] = HS[GS[5]]; HS[GS[12]] < HS[GS[11]]; HS[GS[12]]++) {
-               if (HS[GS[1]].length !== HS[GS[12]]) return;
-               for (HS[GS[6]] = GS[0]; HS[GS[6]] < HS[GS[11]]; HS[GS[6]]++) SS[GS[62]](HS[GS[1]], [HS[GS[12]], HS[GS[6]]]) && (cS(HS[GS[1]].push([HS[GS[12]], HS[GS[6]]]), SS[GS[1]](HS[GS[0]], HS[GS[1]], HS[GS[11]], HS[GS[12]] + GS[1])), HS[GS[1]].length === HS[GS[11]] && HS[GS[0]] … [truncated]
-             }
-           }, SS[GS[52]] = function(...SS) {
-             for (cS(SS[GS[7]] = GS[1], SS[GS[9]] = [], SS[GS[11]] = SS[GS[0]].length), SS[GS[60]] = GS[0]; SS[GS[60]] < SS[GS[11]]; SS[GS[60]]++)
-               for (SS[GS[9]][SS[GS[60]]] = "", SS[-GS[61]] = GS[0]; SS[-GS[61]] < SS[GS[11]]; SS[-GS[61]]++) SS[GS[9]][SS[GS[60]]] += SS[GS[0]][SS[GS[60]]][GS[1]] === SS[-GS[61]] ? "Q" : ".";
-             return SS[GS[9]]
-           }, SS[GS[62]] = function(...SS) {
-             for (cS(SS[GS[7]] = GS[11], SS[GS[11]] = SS[GS[0]].length), SS[GS[63]] = GS[0]; SS[GS[63]] < SS[GS[11]]; SS[GS[63]]++) {
-               if (SS[GS[0]][SS[GS[63]]][GS[0]] === SS[GS[1]][GS[0]] || SS[GS[0]][SS[GS[63]]][GS[1]] === SS[GS[1]][GS[1]]) return GS[64];
-               if (Math.abs((SS[GS[0]][SS[GS[63]]][GS[0]] - SS[GS[1]][GS[0]]) / (SS[GS[0]][SS[GS[63]]][GS[1]] - SS[GS[1]][GS[1]])) === GS[1]) return GS[64]
-             }
- ... (2 more removed lines; see GitHub link above)
+           kk[Hk[12]] = Hk[2]
```

#### 77. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L931-L935` → after: `L896-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L896-L900) · [Before (L931-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L931-L935)

```diff
-         jS(132) in PS && CS(), cS(dS(DS, QS, OS), dS(wS, OS, QS), bS()[jS(133)](hS, OS, wS));
-         const JS = bS()[jS(134)](OS),
-           vS = bS()[jS(135)](QS, OS) / SS[GS[26]] / JS,
-           ES = Math[jS(GS[71])](vS, GS[0]) + GS[1];
-         if (SS[GS[26]] * SS[GS[26]] < bS()[GS[66]](wS)) {
+         wk(167) + Hk[4] in Pk && Sk(), Ok(Ek(Qk, Kk, vk), Ek(sk, vk, Kk), Tk()[wk(170)](Vk, vk, sk));
+         const nk = Tk()[wk(171)](vk),
+           Gk = Tk()[wk(172)](Kk, vk) / kk[Hk[89]] / nk,
+           pk = Math[wk(Hk[93])](Gk, Hk[2]) + Hk[0];
+         if (kk[Hk[89]] * kk[Hk[89]] < Tk()[Hk[90]](sk)) {
```

#### 78. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L937-L946` → after: `L902-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L902-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L902-L906) · [Before (L937-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L937-L946)

```diff
-             for (cS(SS[GS[7]] = GS[1], SS[GS[68]] = 'V~foAhODaZeJRYpkLsFUmrEjbdNMIiGXtBSWcTHKlQg&]8?;{2"%w7,y0}#^=`*>zx9+5:[.3|4qv<$nP1/_6u(C!@)', SS[GS[11]] = "" + (SS[GS[0]] || ""), SS[-GS[67]] = SS[GS[11]].length, SS[GS[12]] = [], SS[GS[40]] = GS[0], SS[GS[69]] = GS[0], SS[GS[ … [truncated]
-               if (SS[GS[23]] = SS[GS[68]].indexOf(SS[GS[11]][SS[GS[21]]]), SS[GS[23]] !== -GS[1])
-                 if (SS[GS[24]] < GS[0]) SS[GS[24]] = SS[GS[23]];
-                 else {
-                   cS(SS[GS[24]] += SS[GS[23]] * GS[25], SS[GS[40]] |= SS[GS[24]] << SS[GS[69]], SS[GS[69]] += (SS[GS[24]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
-                   do {
-                     cS(SS[GS[12]].push(SS[GS[40]] & GS[3]), SS[GS[40]] >>= GS[2], SS[GS[69]] -= GS[2])
-                   } while (SS[GS[69]] > GS[17]);
-                   SS[GS[24]] = -GS[1]
-                 } return SS[GS[24]] > -GS[1] && SS[GS[12]].push((SS[GS[40]] | SS[GS[24]] << SS[GS[69]]) & GS[3]), nS(SS[GS[12]])
+             function Fk() {}
+             kk[Hk[12]] = Hk[2], Ok(kk[Hk[1]] = function(...kk) {
+               for (Ok(kk[Hk[12]] = Hk[13], kk[-Hk[3]] = Hk[2], kk[Hk[1]] = Hk[2], kk[Hk[91]] = new Fk(Hk[2]), kk[Hk[55]] = kk[Hk[91]], kk[Hk[20]] = kk[Hk[2]], kk[-Hk[92]] = kk[Hk[0]]); kk[Hk[20]] !== Hk[42] || kk[-Hk[92]] !== Hk[42];) Ok(kk[Hk[1]] = (kk[Hk[20]] ? kk[Hk[20]].val : … [truncated]
+               return kk[-Hk[3]] && (kk[Hk[55]].next = new Fk(kk[-Hk[3]])), kk[Hk[91]].next
+             }, console.log(kk[Hk[1]]))
```

#### 79. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L948-L952` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L908) · [Before (L948-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L948-L952)

```diff
- 
-           function YS(...SS) {
-             return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = LS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
-           }
-           bS()[YS(GS[81])](QS, QS, wS, ES)
+           wk(174) in Pk && uk(), Tk()[wk(175)](Kk, Kk, sk, pk)
```

#### 80. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L954` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L910) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L954)

```diff
-         cS(SS[GS[70]] = (0, XS.y)(SS[GS[70]], 1, Math[jS(GS[71])](GS[1], Math[jS(138)](GS[0], -vS, GS[1] - JS / SS[GS[26]]))), bS()[jS(139)](QS, QS, hS))
+         Ok(kk[-Hk[13]] = (0, ik.u)(kk[-Hk[13]], 1, Math[wk(Hk[93])](Hk[0], Math[wk(176)](Hk[2], -Gk, Hk[0] - nk / kk[Hk[89]]))), Tk()[wk(Hk[8])](Kk, Kk, Vk))
```

#### 81. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L957-L962` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L913) · [Before (L957-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L957-L962)

```diff
-       cS(bS()[HS(140)](IS, QS, OS), IS[GS[1]] = GS[0], SS[GS[72]] = bS()[HS(141)](IS)), uS || (SS[GS[72]] *= SS[GS[70]]);
-       const fS = SS[GS[15]][HS(GS[79]) + HS(GS[31]) + HS(144)],
-         kS = fS ? Math[HS(145)](fS, SS[GS[72]]) : SS[GS[72]];
-       bS()[HS(146) + HS(147)](IS, IS);
-       const aS = SS[GS[17]] !== GS[41] && void 0 !== SS[GS[17]] ? SS[GS[17]] : SS[GS[15]][HS(148) + HS(149) + HS(150) + HS(151)];
-       if (kS > GS[0]) {
+       if (Ok(Tk()[Fk(178)](Lk, Kk, vk), Lk[Hk[0]] = Hk[2], kk[Hk[44]] = Tk()[Fk(179)](Lk)), !qk) {
```

#### 82. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L964-L966` → after: `L915-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L915-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L915-L917) · [Before (L964-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L964-L966)

```diff
-           for (cS(SS[GS[7]] = GS[1], SS[GS[9]] = 'jftqs+;=38H%F&!SNK)7pI*MiAL:r,mlZ_^XnCV}/E$@ud5hk>#UvGwOQc9(J<?0~oT46`.e1g{a2BPyDz["]WbRYx|', SS[GS[73]] = "" + (SS[GS[0]] || ""), SS[GS[60]] = SS[GS[73]].length, SS[GS[12]] = [], SS[GS[76]] = GS[0], SS[GS[77]] = GS[0], SS[GS[17]] … [truncated]
-             if (SS[GS[75]] = SS[GS[9]].indexOf(SS[GS[73]][SS[-GS[74]]]), SS[GS[75]] !== -GS[1])
-               if (SS[GS[17]] < GS[0]) SS[GS[17]] = SS[GS[75]];
+           for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[0]] = '@cDnVmGqoLaNkA!f9_J&}8Uiw;^j=$X>pt*g#RvSW3yzB[46d+1Kh?Cs)IQEre<H~ZFl|"T2/0YbM%`{]OxP5u(,7.:', kk[Hk[13]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[13]].length, kk[Hk[9]] = [], kk[Hk[32]] = Hk[2], kk[Hk[20]] = Hk[2], kk[Hk[22]] … [truncated]
+             if (kk[-Hk[94]] = kk[Hk[0]].indexOf(kk[Hk[13]][kk[Hk[27]]]), kk[-Hk[94]] !== -Hk[0])
+               if (kk[Hk[22]] < Hk[2]) kk[Hk[22]] = kk[-Hk[94]];
```

#### 83. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L968` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L919) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L968)

```diff
-                 cS(SS[GS[17]] += SS[GS[75]] * GS[25], SS[GS[76]] |= SS[GS[17]] << SS[GS[77]], SS[GS[77]] += (SS[GS[17]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
+                 Ok(kk[Hk[22]] += kk[-Hk[94]] * Hk[31], kk[Hk[32]] |= kk[Hk[22]] << kk[Hk[20]], kk[Hk[20]] += (kk[Hk[22]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
```

#### 84. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L970-L973` → after: `L921-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L921-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L921-L924) · [Before (L970-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L970-L973)

```diff
-                   cS(SS[GS[12]].push(SS[GS[76]] & GS[3]), SS[GS[76]] >>= GS[2], SS[GS[77]] -= GS[2])
-                 } while (SS[GS[77]] > GS[17]);
-                 SS[GS[17]] = -GS[1]
-               } return SS[GS[17]] > -GS[1] && SS[GS[12]].push((SS[GS[76]] | SS[GS[17]] << SS[GS[77]]) & GS[3]), nS(SS[GS[12]])
+                   Ok(kk[Hk[9]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
+                 } while (kk[Hk[20]] > Hk[22]);
+                 kk[Hk[22]] = -Hk[0]
+               } return kk[Hk[22]] > -Hk[0] && kk[Hk[9]].push((kk[Hk[32]] | kk[Hk[22]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[9]])
```

#### 85. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L977` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L928) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L977)

```diff
-           return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = AS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
+           return kk[Hk[12]] = Hk[0], typeof lk[kk[Hk[2]]] === Hk[17] ? lk[kk[Hk[2]]] = bk(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
```

#### 86. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L981-L1009` → after: `L932-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L932-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L932-L1001) · [Before (L981-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L981-L1009)

```diff
-           function HS(SS) {
-             return typeof NS[SS] === GS[8] ? NS[SS] = function(...SS) {
-               for (cS(SS[GS[7]] = GS[1], SS[GS[1]] = 'XVjCNJlWHBrFYRSUfEZDiAIMOKGknscmdabLTq_21=+@?oQh^tPgp(#~8,5<x{vw7)"!}4&:%9$0z63|u*`/;>[y.]e', SS[GS[6]] = "" + (SS[GS[0]] || ""), SS[GS[5]] = SS[GS[6]].length, SS[GS[78]] = [], SS[GS[79]] = GS[0], SS[GS[15]] = GS[0], SS[GS[17] … [truncated]
-                 if (SS[GS[23]] = SS[GS[1]].indexOf(SS[GS[6]][SS[GS[2]]]), SS[GS[23]] !== -GS[1])
-                   if (SS[GS[17]] < GS[0]) SS[GS[17]] = SS[GS[23]];
-                   else {
-                     cS(SS[GS[17]] += SS[GS[23]] * GS[25], SS[GS[79]] |= SS[GS[17]] << SS[GS[15]], SS[GS[15]] += (SS[GS[17]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
-                     do {
-                       cS(SS[GS[78]].push(SS[GS[79]] & GS[3]), SS[GS[79]] >>= GS[2], SS[GS[15]] -= GS[2])
-                     } while (SS[GS[15]] > GS[17]);
-                     SS[GS[17]] = -GS[1]
-                   } return SS[GS[17]] > -GS[1] && SS[GS[78]].push((SS[GS[79]] | SS[GS[17]] << SS[GS[15]]) & GS[3]), nS(SS[GS[78]])
-             }(qS[SS]) : NS[SS]
-           }
-           SS[GS[7]] = GS[0];
-           const gS = require("path"),
- ... (13 more removed lines; see GitHub link above)
+           kk[Hk[12]] = Hk[2];
+           const Fk = require("big-integer");
+           Ok(kk[Hk[41]] = class {
+             static randomPrime(...kk) {
+               kk[Hk[12]] = Hk[0];
+               const Ik = Fk.one.shiftLeft(kk[Hk[2]] - Hk[0]),
+                 Xk = Fk.one.shiftLeft(kk[Hk[2]]).prev();
+               for (;;) {
+                 let kk = Fk.randBetween(Ik, Xk);
+                 if (kk.isProbablePrime(256)) return kk
+               }
+             }
+             static generate(...kk) {
+               kk[Hk[12]] = Hk[0];
+               const Ik = Fk(65537);
+               let Xk, Tk;
+ ... (54 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1011-L1012` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1003) · [Before (L1011-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1011-L1012)

```diff
-         HS(152) in PS && VS();
-         let iS = SS[GS[11]][yS(155) + yS(156)] * aS;
+         let ck = kk[Hk[13]][Nk(191) + Nk(192)] * jk;
```

#### 88. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1015-L1017` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1006-L1008) · [Before (L1015-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1015-L1017)

```diff
-             for (cS(SS[GS[7]] = GS[1], SS[GS[1]] = 'k!gp?:ID=sAeP><6T(uHn_{JU%4}Y#^olLNh7|GFcmbqQ.)z9*$0"ZVBd`i,KaEfXWOv[R@+S2&rCwtj5~8]x/y13;M', SS[GS[80]] = "" + (SS[GS[0]] || ""), SS[GS[60]] = SS[GS[80]].length, SS[GS[12]] = [], SS[GS[40]] = GS[0], SS[GS[69]] = GS[0], SS[GS[81 … [truncated]
-               if (SS[-GS[82]] = SS[GS[1]].indexOf(SS[GS[80]][SS[GS[21]]]), SS[-GS[82]] !== -GS[1])
-                 if (SS[GS[81]] < GS[0]) SS[GS[81]] = SS[-GS[82]];
+             for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[52]] = '6LNjIWnZHsPGQSapeFgTkfcXEDCBYqmJodlKVRiMtxA;hzU49Obr7?^)u"v#{<1}+]32/>*|%&_w$=[@:5y.`0!(~8,', kk[Hk[98]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[98]].length, kk[Hk[55]] = [], kk[Hk[32]] = Hk[2], kk[Hk[20]] = Hk[2], kk[-Hk … [truncated]
+               if (kk[Hk[5]] = kk[Hk[52]].indexOf(kk[Hk[98]][kk[Hk[27]]]), kk[Hk[5]] !== -Hk[0])
+                 if (kk[-Hk[28]] < Hk[2]) kk[-Hk[28]] = kk[Hk[5]];
```

#### 89. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1019` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1010) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1019)

```diff
-                   cS(SS[GS[81]] += SS[-GS[82]] * GS[25], SS[GS[40]] |= SS[GS[81]] << SS[GS[69]], SS[GS[69]] += (SS[GS[81]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
+                   Ok(kk[-Hk[28]] += kk[Hk[5]] * Hk[31], kk[Hk[32]] |= kk[-Hk[28]] << kk[Hk[20]], kk[Hk[20]] += (kk[-Hk[28]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
```

#### 90. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1021-L1024` → after: `L1012-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1012-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1012-L1015) · [Before (L1021-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1021-L1024)

```diff
-                     cS(SS[GS[12]].push(SS[GS[40]] & GS[3]), SS[GS[40]] >>= GS[2], SS[GS[69]] -= GS[2])
-                   } while (SS[GS[69]] > GS[17]);
-                   SS[GS[81]] = -GS[1]
-                 } return SS[GS[81]] > -GS[1] && SS[GS[12]].push((SS[GS[40]] | SS[GS[81]] << SS[GS[69]]) & GS[3]), nS(SS[GS[12]])
+                     Ok(kk[Hk[55]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
+                   } while (kk[Hk[20]] > Hk[22]);
+                   kk[-Hk[28]] = -Hk[0]
+                 } return kk[-Hk[28]] > -Hk[0] && kk[Hk[55]].push((kk[Hk[32]] | kk[-Hk[28]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[55]])
```

#### 91. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1028-L1045` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1019) · [Before (L1028-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1028-L1045)

```diff
-             return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = zS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
-           }
- 
-           function pS() {
-             var SS = function(SS) {
-               cS(this.hf = SS, this.length = GS[0], this.map = {}, this.head = GS[41], this.tail = GS[41])
-             };
-             cS(SS.prototype.get = function(...SS) {
-               var HS;
-               return cS(SS[GS[7]] = GS[1], HS = this.map[SS[GS[0]]]), HS ? (this.remove(HS), this.insert(HS.key, HS.val), HS.val) : -GS[1]
-             }, SS.prototype.put = function(...SS) {
-               cS(SS[GS[7]] = GS[11], this.map[SS[GS[0]]] ? (this.remove(this.map[SS[GS[0]]]), this.insert(SS[GS[0]], SS[GS[1]])) : this.length === this.hf ? (this.remove(this.head), this.insert(SS[GS[0]], SS[GS[1]])) : (this.insert(SS[GS[0]], SS[GS[1]]), this.length++))
-             }, SS.prototype.remove = function(...SS) {
-               cS(SS[GS[7]] = GS[1], SS[-GS[42]] = SS[GS[0]].prev, SS[GS[11]] = SS[GS[0]].next), SS[GS[11]] && (SS[GS[11]].prev = SS[-GS[42]]), SS[-GS[42]] && (SS[-GS[42]].next = SS[GS[11]]), this.head === SS[GS[0]] && (this.head = SS[GS[11]]), this.tail === SS[GS[0]] && (this.tai … [truncated]
-             }, SS.prototype.insert = function(SS, HS) {
-               var gS = new List(SS, HS);
- ... (2 more removed lines; see GitHub link above)
+             return kk[Hk[12]] = Hk[0], typeof lk[kk[Hk[2]]] === Hk[17] ? lk[kk[Hk[2]]] = fk(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
```

#### 92. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1047` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1021) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1047)

```diff
-           yS(GS[68]) + "l" in PS && pS(), iS *= SS[GS[11]][US(158) + US(159)]
+           ck *= kk[Hk[13]][Bk(Hk[81]) + Bk(194)]
```

#### 93. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1049` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1023) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1049)

```diff
-         let WS = SS[GS[11]][yS(160) + yS(GS[76]) + "ss"] * kS;
+         let Wk = kk[Hk[13]][Nk(195) + Nk(Hk[101]) + "ss"] * Zk;
```

#### 94. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1051-L1107` → after: `L1025-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1025-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1025-L1041) · [Before (L1051-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1051-L1107)

```diff
-           yS(162) + "k" in PS && (module.exports = async (SS = (...SS) => {
-             throw SS[GS[7]] = GS[0], new Error(function(...SS) {
-               if (SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8]) return NS[SS[GS[0]]] = function(...SS) {
-                 for (cS(SS[GS[7]] = GS[1], SS[GS[1]] = 'H"DpnCa3,lbRIP#5LMchz[W~FS^G>0j6!|=Z*Kwx8g+B<rV;k.fs4Y/NOe_UvJoqA9{duEQTi)t2yXm$1?&7:(`}@%]', SS[GS[11]] = "" + (SS[GS[0]] || ""), SS[-GS[83]] = SS[GS[11]].length, SS[GS[4]] = [], SS[GS[40]] = GS[0], SS[-GS[84]] = GS[0], SS[ … [truncated]
-                   if (SS[GS[49]] = SS[GS[1]].indexOf(SS[GS[11]][SS[GS[21]]]), SS[GS[49]] !== -GS[1])
-                     if (SS[GS[17]] < GS[0]) SS[GS[17]] = SS[GS[49]];
-                     else {
-                       cS(SS[GS[17]] += SS[GS[49]] * GS[25], SS[GS[40]] |= SS[GS[17]] << SS[-GS[84]], SS[-GS[84]] += (SS[GS[17]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
-                       do {
-                         cS(SS[GS[4]].push(SS[GS[40]] & GS[3]), SS[GS[40]] >>= GS[2], SS[-GS[84]] -= GS[2])
-                       } while (SS[-GS[84]] > GS[17]);
-                       SS[GS[17]] = -GS[1]
-                     } SS[GS[17]] > -GS[1] && SS[GS[4]].push((SS[GS[40]] | SS[GS[17]] << SS[-GS[84]]) & GS[3]);
-                 return nS(SS[GS[4]])
-               }(qS[SS[GS[0]]]);
-               return NS[SS[GS[0]]]
- ... (41 more removed lines; see GitHub link above)
+           function dk(...kk) {
+             for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[43]] = 'y&wx?Mj;sldD5BLA1.{TPE+v^b7gqF=$K|S>N@_4"Zk/XHrGfe,)[Y#8U269~ic%JR<tQu!*:(]Oho3CmIz}Vp`aW0n', kk[Hk[13]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[13]].length, kk[Hk[55]] = [], kk[Hk[89]] = Hk[2], kk[Hk[20]] = Hk[2], kk[Hk[ … [truncated]
+               if (kk[Hk[29]] = kk[Hk[43]].indexOf(kk[Hk[13]][kk[-Hk[99]]]), kk[Hk[29]] !== -Hk[0])
+                 if (kk[Hk[100]] < Hk[2]) kk[Hk[100]] = kk[Hk[29]];
+                 else {
+                   Ok(kk[Hk[100]] += kk[Hk[29]] * Hk[31], kk[Hk[89]] |= kk[Hk[100]] << kk[Hk[20]], kk[Hk[20]] += (kk[Hk[100]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
+                   do {
+                     Ok(kk[Hk[55]].push(kk[Hk[89]] & Hk[11]), kk[Hk[89]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
+                   } while (kk[Hk[20]] > Hk[22]);
+                   kk[Hk[100]] = -Hk[0]
+                 } return kk[Hk[100]] > -Hk[0] && kk[Hk[55]].push((kk[Hk[89]] | kk[Hk[100]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[55]])
+           }
+ 
+           function Yk(kk) {
+             return typeof lk[kk] === Hk[17] ? lk[kk] = dk(ak[kk]) : lk[kk]
+           }
+ ... (1 more added lines; see GitHub link above)
```

#### 95. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1109` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1043) · [Before (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1109)

```diff
-         cS(bS()[yS(168)](IS, IS, iS), SS[GS[12]][yS(169) + yS(170)](IS))
+         Ok(Tk()[Nk(200)](Lk, Lk, ck), kk[Hk[9]][Nk(201) + Nk(202)](Lk))
```

#### 96. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1111` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1045) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1111)

```diff
-       SS[GS[12]][HS(GS[61]) + GS[95]] = SS[GS[11]][HS(172) + HS(GS[38]) + GS[95]] * (uS ? tS : xS)
+       kk[Hk[9]][Fk(203) + Hk[105]] = kk[Hk[13]][Fk(Hk[91]) + Fk(Hk[61]) + Hk[105]] * (qk ? Xk : yk)
```

#### 97. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1116` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1050) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1116)

```diff
-       d: () => qS,
+       c: () => ak,
```

#### 98. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1119-L1120` → after: `L1053-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1053-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1053-L1054) · [Before (L1119-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1119-L1120)

```diff
-     var tS = gS(37685),
-       bS = gS(2022);
+     var Xk = Ik(37686),
+       Tk = Ik(1844);
```

#### 99. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1124` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1058) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1124)

```diff
-         gu: 1,
+         Xq: 1,
```

#### 100. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1164` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1098) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1164)

```diff
-       if (qS.speed) return (0, tS.d)(HS, gS, NS, qS, uS, IS, SS), void(qS.ticksToReachMaxIdleFriction = XS);
+       if (ak.speed) return (0, Xk.c)(Fk, Ik, lk, ak, qk, Lk, kk), void(ak.ticksToReachMaxIdleFriction = ik);
```

#### 101. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1169` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1103) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1169)

```diff
-         jS = fS ? aS : KS,
+         wk = tk ? jk : ek,
```

#### 102. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1172-L1173` → after: `L1106-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1106-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/225.js#L1106-L1107) · [Before (L1172-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/225.js#L1172-L1173)

```diff
-         nS = (0, bS.y)(GS, jS, CS);
-       uS.friction = SS.standingFriction * ((null === kS ? HS.bloxd.getClientPredictedOption(gS, "airMomentumConservation") : kS.airMomentumConservation) ? nS : jS), qS.ticksToReachMaxIdleFriction > 0 && qS.ticksToReachMaxIdleFriction--
+         xk = (0, Tk.u)(Hk, wk, Jk);
+       qk.friction = kk.standingFriction * ((null === Zk ? Fk.bloxd.getClientPredictedOption(Ik, "airMomentumConservation") : Zk.airMomentumConservation) ? xk : wk), ak.ticksToReachMaxIdleFriction > 0 && ak.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L4)

```diff
-   39839: (SS, HS, gS) => {
+   39784: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L12-L15` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L12-L15) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L12-L15)

```diff
-     var tS = gS(4586),
-       bS = gS(37063),
-       XS = gS(9359),
-       xS = gS(3325);
+     var Xk = Ik(4449),
+       Tk = Ik(37079),
+       ik = Ik(9178),
+       yk = Ik(3096);
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L22)

```diff
-         console.warn(`Docs gallery: no default texture for ${qS.size} names`, [...qS]), qS.clear(), uS = null
+         console.warn(`Docs gallery: no default texture for ${ak.size} names`, [...ak]), ak.clear(), qk = null
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L36)

```diff
-       const XS = bS.m[SS];
+       const ik = Tk.j[kk];
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L42)

```diff
-         return "string" === typeof(HS = qS && Array.isArray(NS) ? NS[qS[SS]] : NS) ? fS(HS, xS.g.BLOCK) : HS && "object" === typeof HS && "animTextures" in HS ? fS((0, tS.i)(HS), xS.g.BLOCK) : null;
+         return "string" === typeof(Fk = ak && Array.isArray(lk) ? lk[ak[kk]] : lk) ? tk(Fk, yk.j.BLOCK) : Fk && "object" === typeof Fk && "animTextures" in Fk ? tk((0, Xk.i)(Fk), yk.j.BLOCK) : null;
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L47-L48` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L47-L48) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L47-L48)

```diff
-         left: null !== (HS = uS(4)) && void 0 !== HS ? HS : IS,
-         right: null !== (gS = uS(0)) && void 0 !== gS ? gS : IS
+         left: null !== (Fk = qk(4)) && void 0 !== Fk ? Fk : Lk,
+         right: null !== (Ik = qk(0)) && void 0 !== Ik ? Ik : Lk
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L54-L55)

```diff
-       const gS = bS.m[SS];
-       return fS(null !== (HS = null === gS || void 0 === gS ? void 0 : gS.itemTexture) && void 0 !== HS ? HS : "string" === typeof(null === gS || void 0 === gS ? void 0 : gS.textureInfo) ? gS.textureInfo : SS, xS.g.ITEM)
+       const Ik = Tk.j[kk];
+       return tk(null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.itemTexture) && void 0 !== Fk ? Fk : "string" === typeof(null === Ik || void 0 === Ik ? void 0 : Ik.textureInfo) ? Ik.textureInfo : kk, yk.j.ITEM)
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L60-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L60-L64) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L60-L64)

```diff
-       return bS.m[SS] ? null !== (HS = null === (gS = kS(SS)) || void 0 === gS ? void 0 : gS.top) && void 0 !== HS ? HS : aS(SS) : null
-     }
- 
-     function jS(SS) {
-       return fS(SS, xS.g.ICON)
+       return Tk.j[kk] ? null !== (Fk = null === (Ik = Zk(kk)) || void 0 === Ik ? void 0 : Ik.top) && void 0 !== Fk ? Fk : jk(kk) : null
+     }
+ 
+     function wk(kk) {
+       return tk(kk, yk.j.ICON)
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L69)

```diff
-         return gS(3456)(`./${SS}.png`)
+         return Ik(3260)(`./${kk}.png`)
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/226.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/226.js#L75)

```diff
-   37093: (SS, HS, gS) => {
+   37118: (kk, Fk, Ik) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   37123: (SS, HS, gS) => {
+   37158: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L7-L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L7-L8)

```diff
-       h: () => tS,
-       l: () => bS
+       g: () => Tk
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L15)

```diff
-   37149: (SS, HS, gS) => {
+   37189: (kk, Fk, Ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L31)

```diff
-       return SS === HS ? SS : Math.random() * (HS - SS) + SS
+       return kk === Fk ? kk : Math.random() * (Fk - kk) + kk
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L116)

```diff
-       return tS = Math.abs(HS - SS) <= gS ? HS : SS + Math.sign(HS - SS) * gS, tS
+       return Xk = Math.abs(Fk - kk) <= Ik ? Fk : kk + Math.sign(Fk - kk) * Ik, Xk
```

#### 6. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L122)

```diff
-       return bS = -gS < tS && tS < gS ? HS : wS(SS, HS = SS + tS, gS), bS
+       return Tk = -Ik < Xk && Xk < Ik ? Fk : sk(kk, Fk = kk + Xk, Ik), Tk
```

#### 7. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L135)

```diff
-       return 0 === gS ? HS : OS(HS, gS)
+       return 0 === Ik ? Fk : vk(Fk, Ik)
```

#### 8. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L164)

```diff
-   37113: (SS, HS, gS) => {
+   37144: (kk, Fk, Ik) => {
```

#### 9. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L166-L168` → after: `L166-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L166-L168) · [Before (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L166-L168)

```diff
-       Matrix: () => tS.e,
-       Quaternion: () => tS.i,
-       RegisterMathVector: () => tS.k,
+       Matrix: () => Xk.c,
+       Quaternion: () => Xk.f,
+       RegisterMathVector: () => Xk.h,
```

#### 10. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L170-L177` → after: `L170-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L170-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L170-L177) · [Before (L170-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L170-L177)

```diff
-       Vector2: () => tS.m,
-       VK: () => tS.n,
-       Vector4: () => tS.r
-     });
-     var tS = gS(37117);
-     (0, tS.k)()
-   },
-   37129: (SS, HS, gS) => {
+       Vector2: () => Xk.p,
+       Ge: () => Xk.t,
+       Vector4: () => Xk.u
+     });
+     var Xk = Ik(37153);
+     (0, Xk.h)()
+   },
+   37166: (kk, Fk, Ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L188-L190)

```diff
-       d: () => tS,
-       g: () => bS,
-       k: () => xS
+       b: () => Xk,
+       c: () => Tk,
+       f: () => yk
```

#### 12. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L215)

```diff
-   37164: (SS, HS, gS) => {
+   37201: (kk, Fk, Ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/227.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/227.js#L217)

```diff
-       d: () => XS,
+       b: () => ik,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1)

```diff
- /*! For license information please see fqwnlq.228.41f4bef3.chunk.js.LICENSE.txt */
+ /*! For license information please see 31kiid.228.7d23316f.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L5)

```diff
-   38333: SS => {
+   38286: kk => {
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L10-L13` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L10-L13) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L10-L13)

```diff
-   38310: (SS, HS, gS) => {
-     var tS = gS(38315),
-       bS = gS(38324),
-       XS = gS(38333);
+   38271: (kk, Fk, Ik) => {
+     var Xk = Ik(38276),
+       Tk = Ik(38280),
+       ik = Ik(38286);
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L135)

```diff
-   38315: (SS, HS) => {
+   38276: (kk, Fk) => {
```

#### 5. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L189)

```diff
-   38305: (SS, HS, gS) => {
+   38266: (kk, Fk, Ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L205-L207` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L205-L207) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L205-L207)

```diff
-     var tS, bS = gS(38310),
-       XS = gS(38336),
-       xS = gS(38348);
+     var Xk, Tk = Ik(38271),
+       ik = Ik(38292),
+       yk = Ik(38301);
```

#### 7. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L252)

```diff
-   38355: (SS, HS) => {
+   38310: (kk, Fk) => {
```

#### 8. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L291)

```diff
-   38348: (SS, HS, gS) => {
+   38301: (kk, Fk, Ik) => {
```

#### 9. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L367-L369` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L367-L369) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L367-L369)

```diff
-     var tS = gS(38310),
-       bS = gS(38315),
-       XS = gS(38355),
+     var Xk = Ik(38271),
+       Tk = Ik(38276),
+       ik = Ik(38310),
```

#### 10. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L372-L374)

```diff
-       qS = gS(38336),
-       uS = gS(38364),
-       IS = gS(38372),
+       ak = Ik(38292),
+       qk = Ik(38314),
+       Lk = Ik(38317),
```

#### 11. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L400)

```diff
-       SS: for (var KS = bS, jS = bS * fS; KS < XS; ++KS, jS += fS) {
+       kk: for (var ek = Tk, wk = Tk * tk; ek < ik; ++ek, wk += tk) {
```

#### 12. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L419)

```diff
-       SS: for (var aS = tS, KS = tS * IS; aS < bS; ++aS, KS += IS) {
+       kk: for (var jk = Xk, ek = Xk * Lk; jk < Tk; ++jk, ek += Lk) {
```

#### 13. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L438)

```diff
-   38364: (SS, HS, gS) => {
+   38314: (kk, Fk, Ik) => {
```

#### 14. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L481)

```diff
-     var tS = gS(38372)("lo<p0", ["p0"]),
+     var Xk = Ik(38317)("lo<p0", ["p0"]),
```

#### 15. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L496)

```diff
-   38372: SS => {
+   38317: kk => {
```

#### 16. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L506)

```diff
-   38343: SS => {
+   38294: kk => {
```

#### 17. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L595)

```diff
-   38336: (SS, HS, gS) => {
+   38292: (kk, Fk, Ik) => {
```

#### 18. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L689)

```diff
-         tS ? ZS = xS : hS = xS;
+         Xk ? zk = yk : Vk = yk;
```

#### 19. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L713)

```diff
-               SS: for (var WS = 0; WS < ES; ++WS) {
+               kk: for (var Nk = 0; Nk < Gk; ++Nk) {
```

#### 20. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L750)

```diff
-               SS: for (var ES = 0; ES < ZS; ++ES) {
+               kk: for (var Gk = 0; Gk < zk; ++Gk) {
```

#### 21. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L773-L775` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L773-L775) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L773-L775)

```diff
-     var tS = gS(38310),
-       bS = gS(38315),
-       XS = gS(38343),
+     var Xk = Ik(38271),
+       Tk = Ik(38276),
+       ik = Ik(38294),
```

#### 22. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L796)

```diff
-   38324: SS => {
+   38280: kk => {
```

#### 23. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L822)

```diff
-   38267: (SS, HS, gS) => {
+   38228: (kk, Fk, Ik) => {
```

#### 24. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L841-L843)

```diff
-         xS && (XS.remove(SS), tS.pE && (tS.multi ? (xS.forEach((HS => {
-           HS && tS.pE(SS, HS)
-         })), xS.length = 0) : tS.pE(SS, xS)), NS.removals.push(XS), uS())
+         yk && (ik.remove(kk), Xk.iG && (Xk.multi ? (yk.forEach((Fk => {
+           Fk && Xk.iG(kk, Fk)
+         })), yk.length = 0) : Xk.iG(kk, yk)), lk.removals.push(ik), qk())
```

#### 25. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L874)

```diff
-       this.Pj = bS, this._systems = XS, this._renderSystems = xS, this.yB = function(HS) {
+       this.Qw = Tk, this._systems = ik, this._renderSystems = yk, this.qY = function(Fk) {
```

#### 26. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L876)

```diff
-         return Array.isArray(HS) && HS.forEach((HS => SS.VY(tS, HS))), tS
+         return Array.isArray(Fk) && Fk.forEach((Fk => kk.Tu(Xk, Fk))), Xk
```

#### 27. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L881)

```diff
-       }, this.vHS = function(SS) {
+       }, this.cFk = function(kk) {
```

#### 28. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L887)

```diff
-         if (bS[gS]) throw new Error(`Component ${gS} already exists.`);
+         if (Tk[Ik]) throw new Error(`Component ${Ik} already exists.`);
```

#### 29. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L889` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L889) · [Before (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L889)

```diff
-         return NS.name = gS, NS.multi = !!SS.multi, NS.order = isNaN(SS.order) ? 99 : SS.order, NS.stateConstructor = SS.stateConstructor || null, NS.state = SS.state || {}, NS.EQ = SS.EQ || null, NS.pE = SS.pE || null, NS.system = SS.system || null, NS.bD = SS.bD || null, HS[gS] … [truncated]
+         return lk.name = Ik, lk.multi = !!kk.multi, lk.order = isNaN(kk.order) ? 99 : kk.order, lk.stateConstructor = kk.stateConstructor || null, lk.state = kk.state || {}, lk.mJ = kk.mJ || null, lk.iG = kk.iG || null, lk.system = kk.system || null, lk.Ix = kk.Ix || null, Fk[Ik] … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L892)

```diff
-         if (!tS) throw new Error(`Unknown component: ${SS}`);
+         if (!Xk) throw new Error(`Unknown component: ${kk}`);
```

#### 31. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L896)

```diff
-         NS.name = SS, NS.multi = !!gS.multi, NS.order = isNaN(gS.order) ? 99 : gS.order, NS.state = gS.state || {}, NS.EQ = gS.EQ || null, NS.pE = gS.pE || null, NS.system = gS.system || null, NS.bD = gS.bD || null, HS[SS] = NS, bS[SS]._pendingMultiCleanup = !1, bS[SS]._multiClea … [truncated]
+         lk.name = kk, lk.multi = !!Ik.multi, lk.order = isNaN(Ik.order) ? 99 : Ik.order, lk.state = Ik.state || {}, lk.mJ = Ik.mJ || null, lk.iG = Ik.iG || null, lk.system = Ik.system || null, lk.Ix = Ik.Ix || null, Fk[kk] = lk, Tk[kk]._pendingMultiCleanup = !1, Tk[kk]._multiClea … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L900)

```diff
-         NS.bD && uS < 0 && xS.push(SS), !NS.bD && uS >= 0 && xS.splice(uS, 1), xS.sort(((SS, gS) => HS[SS].order - HS[gS].order));
+         lk.Ix && qk < 0 && yk.push(kk), !lk.Ix && qk >= 0 && yk.splice(qk, 1), yk.sort(((kk, Ik) => Fk[kk].order - Fk[Ik].order));
```

#### 33. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L902)

```diff
-         return this.EY(SS).forEach((SS => {
+         return this.ku(kk).forEach((kk => {
```

#### 34. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L904)

```diff
-           NS.EQ && NS.EQ(SS.AY, SS)
+           lk.mJ && lk.mJ(kk.Xu, kk)
```

#### 35. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L908)

```diff
-         if (!tS) throw new Error(`Unknown component: ${gS}`);
+         if (!Xk) throw new Error(`Unknown component: ${Ik}`);
```

#### 36. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L910)

```diff
-           SS && qS(SS.AY || SS[0].AY, gS)
+           kk && ak(kk.Xu || kk[0].Xu, Ik)
```

#### 37. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L915)

```diff
-       }, this.VY = function(SS, gS, tS) {
+       }, this.Tu = function(kk, Ik, Xk) {
```

#### 38. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L918-L919` → after: `L918-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L918-L919) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L918-L919)

```diff
-         if (!NS) throw new Error(`Unknown component: ${gS}.`);
-         if (NS.hash[SS] && !xS.multi) throw new Error(`Entity ${SS} already has component: ${gS}.`);
+         if (!lk) throw new Error(`Unknown component: ${Ik}.`);
+         if (lk.hash[kk] && !yk.multi) throw new Error(`Entity ${kk} already has component: ${Ik}.`);
```

#### 39. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L921)

```diff
-           if (!(XS = new xS.stateConstructor).hasOwnProperty("AY")) throw new Error(`Component ${xS.name} stateConstructor type does not have property __id`);
+           if (!(ik = new yk.stateConstructor).hasOwnProperty("Xu")) throw new Error(`Component ${yk.name} stateConstructor type does not have property __id`);
```

#### 40. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L924)

```diff
-           AY: SS,
+           Xu: kk,
```

#### 41. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L928)

```diff
-         if (XS.AY = SS, xS.multi) {
+         if (ik.Xu = kk, yk.multi) {
```

#### 42. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L932-L933` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L932-L933) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L932-L933)

```diff
-         return xS.EQ && xS.EQ(SS, XS), this
-       }, this.ZSS = function(SS, HS) {
+         return yk.mJ && yk.mJ(kk, ik), this
+       }, this.Ukk = function(kk, Fk) {
```

#### 43. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L935)

```diff
-         if (!gS) throw new Error(`Unknown component: ${HS}.`);
+         if (!Ik) throw new Error(`Unknown component: ${Fk}.`);
```

#### 44. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L937-L938` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L937-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L937-L938)

```diff
-       }, this.pY = function(HS, gS) {
-         if (!bS[gS]) throw new Error(`Unknown component: ${gS}.`);
+       }, this.Eu = function(Fk, Ik) {
+         if (!Tk[Ik]) throw new Error(`Unknown component: ${Ik}.`);
```

#### 45. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L942)

```diff
-         if (!gS) throw new Error(`Unknown component: ${HS}.`);
+         if (!Ik) throw new Error(`Unknown component: ${Fk}.`);
```

#### 46. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L944)

```diff
-       }, this.EY = function(SS) {
+       }, this.ku = function(kk) {
```

#### 47. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L946)

```diff
-         if (!HS) throw new Error(`Unknown component: ${SS}.`);
+         if (!Fk) throw new Error(`Unknown component: ${kk}.`);
```

#### 48. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L948-L949` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L948-L949) · [Before (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L948-L949)

```diff
-       }, this.qHS = function(SS) {
-         if (!bS[SS]) throw new Error(`Unknown component: ${SS}.`);
+       }, this.PFk = function(kk) {
+         if (!Tk[kk]) throw new Error(`Unknown component: ${kk}.`);
```

#### 49. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L952-L953` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L952-L953) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L952-L953)

```diff
-       }, this.KHS = function(SS) {
-         if (!bS[SS]) throw new Error(`Unknown component: ${SS}.`);
+       }, this.SFk = function(kk) {
+         if (!Tk[kk]) throw new Error(`Unknown component: ${kk}.`);
```

#### 50. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L956)

```diff
-       }, this.mf = function(gS) {
+       }, this.Dt = function(Ik) {
```

#### 51. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L971)

```diff
-           NS.bD(gS, qS.list), fS()
+           lk.Ix(Ik, ak.list), tk()
```

#### 52. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L977)

```diff
-         if (!qS) throw new Error(`Unknown component: ${tS}.`);
+         if (!ak) throw new Error(`Unknown component: ${Xk}.`);
```

#### 53. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L983)

```diff
-             XS && (bS[tS] = null, HS.pE && HS.pE(SS, XS), NS.multiComps.push({
+             ik && (Tk[Xk] = null, Fk.iG && Fk.iG(kk, ik), lk.multiComps.push({
```

#### 54. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L991)

```diff
-     var tS = gS(38272)
+     var Xk = Ik(38237)
```

#### 55. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L993)

```diff
-   38272: SS => {
+   38237: kk => {
```

#### 56. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1030)

```diff
-   38068: (SS, HS, gS) => {
+   38063: (kk, Fk, Ik) => {
```

#### 57. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1121)

```diff
-         return SS ? "Symbol(src)_1." + SS : ""
+         return kk ? "Symbol(src)_1." + kk : ""
```

#### 58. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1127)

```diff
-       bH = US ? iS.CK : void 0,
+       iF = Wk ? Ck.je : void 0,
```

#### 59. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1237` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1237) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1237)

```diff
-           if (MS(SS)) return aS ? SS : {};
+           if (Yk(kk)) return jk ? kk : {};
```

#### 60. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1247` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1247) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1247)

```diff
-           if (!AS[yS]) return aS ? SS : {};
+           if (!bk[Rk]) return jk ? kk : {};
```

#### 61. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1251)

```diff
-               case PS:
+               case Pk:
```

#### 62. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1253-L1254` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1253-L1254) · [Before (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1253-L1254)

```diff
-               case xS:
-               case NS:
+               case yk:
+               case lk:
```

#### 63. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1256)

```diff
-               case QS:
+               case Kk:
```

#### 64. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1261-L1269` → after: `L1261-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1261-L1269) · [Before (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1261-L1269)

```diff
-               case DS:
-               case wS:
-               case hS:
-               case ZS:
-               case JS:
-               case OS:
-               case dS:
-               case cS:
-               case vS:
+               case Qk:
+               case sk:
+               case Vk:
+               case zk:
+               case Sk:
+               case vk:
+               case Ek:
+               case Ok:
+               case nk:
```

#### 65. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1274)

```diff
-               case IS:
+               case Lk:
```

#### 66. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1279-L1280` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1279-L1280) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1279-L1280)

```diff
-               case fS:
-               case GS:
+               case tk:
+               case Hk:
```

#### 67. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1282)

```diff
-               case KS:
+               case ek:
```

#### 68. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1287)

```diff
-               case jS:
+               case wk:
```

#### 69. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1292)

```diff
-               case CS:
+               case Jk:
```

#### 70. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1305)

```diff
-           return TH(SS) ? tS : function(SS, HS) {
+           return mF(kk) ? Xk : function(kk, Fk) {
```

#### 71. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1319)

```diff
-       return !(!eH(SS) || (HS = SS, rS && rS in HS)) && (mH(SS) || MS(SS) ? tH : LS).test(FH(SS));
+       return !(!MF(kk) || (Fk = kk, kF && kF in Fk)) && (DF(kk) || Yk(kk) ? TF : pk).test(AF(kk));
```

#### 72. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1342)

```diff
-         return "string" == HS || "number" == HS || "symbol" == HS || "boolean" == HS ? "__proto__" !== SS : null === SS
+         return "string" == Fk || "number" == Fk || "symbol" == Fk || "boolean" == Fk ? "__proto__" !== kk : null === kk
```

#### 73. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1350)

```diff
-       return VH(gS) ? gS : void 0
+       return UF(Ik) ? Ik : void 0
```

#### 74. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1367)

```diff
-       return this.__data__[SS] = PH && void 0 === HS ? tS : HS, this
+       return this.__data__[kk] = KF && void 0 === Fk ? Xk : Fk, this
```

#### 75. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1423)

```diff
-       return !!(HS = null == HS ? bS : HS) && ("number" == typeof SS || YS.test(SS)) && SS > -1 && SS % 1 == 0 && SS < HS
+       return !!(Fk = null == Fk ? Tk : Fk) && ("number" == typeof kk || uk.test(kk)) && kk > -1 && kk % 1 == 0 && kk < Fk
```

#### 76. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1450)

```diff
-         case QH:
+         case QF:
```

#### 77. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1452)

```diff
-         case DH:
+         case sF:
```

#### 78. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1454)

```diff
-         case wH:
+         case VF:
```

#### 79. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1456` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1456) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1456)

```diff
-         case hH:
+         case zF:
```

#### 80. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1458)

```diff
-         case ZH:
+         case SF:
```

#### 81. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1496` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1496) · [Before (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1496)

```diff
-   38487: SS => {
+   38431: kk => {
```

#### 82. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1520-L1521` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1520-L1521) · [Before (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1520-L1521)

```diff
-   37750: (SS, HS, gS) => {
-     var tS = gS(37752);
+   37749: (kk, Fk, Ik) => {
+     var Xk = Ik(37758);
```

#### 83. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1553)

```diff
-   37752: (SS, HS) => {
+   37758: (kk, Fk) => {
```

#### 84. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1607)

```diff
-   37294: (SS, HS, gS) => {
+   37327: (kk, Fk, Ik) => {
```

#### 85. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1609-L1610` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1609-L1610) · [Before (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1609-L1610)

```diff
-       Color3: () => tS.b,
-       b: () => tS.c
+       Color3: () => Xk.e,
+       b: () => Xk.h
```

#### 86. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1612-L1613)

```diff
-     var tS = gS(37300);
-     (0, tS.e)()
+     var Xk = Ik(37331);
+     (0, Xk.i)()
```

#### 87. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1615)

```diff
-   37783: (SS, HS, gS) => {
+   37780: (kk, Fk, Ik) => {
```

#### 88. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1617)

```diff
-       d: () => bS
+       b: () => Tk
```

#### 89. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1619` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1619) · [Before (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1619)

```diff
-     var tS = gS(37791);
+     var Xk = Ik(37785);
```

#### 90. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1660)

```diff
-   37791: (SS, HS, gS) => {
+   37785: (kk, Fk, Ik) => {
```

#### 91. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1664)

```diff
-     var tS = gS(37117);
+     var Xk = Ik(37153);
```

#### 92. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1667)

```diff
-         this.normal = new tS.n(SS, HS, gS), this.d = bS
+         this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
```

#### 93. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1669)

```diff
-       lgS() {
+       iXk() {
```

#### 94. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1716)

```diff
-         return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
+         return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
```

#### 95. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1719)

```diff
-         return tS.n.Dot(this.normal, SS) <= HS
+         return Xk.t.Dot(this.normal, kk) <= Fk
```

#### 96. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1722)

```diff
-         return tS.n.Dot(SS, this.normal) + this.d
+         return Xk.t.Dot(kk, this.normal) + this.d
```

#### 97. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1736)

```diff
-         return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
+         return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
```

#### 98. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1740)

```diff
-         return tS.n.Dot(gS, HS) + bS
+         return Xk.t.Dot(Ik, Fk) + Tk
```

#### 99. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1743)

```diff
-     bS._TmpMatrix = tS.e.Identity()
+     Tk._TmpMatrix = Xk.c.Identity()
```

#### 100. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1745` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1745) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1745)

```diff
-   37113: (SS, HS, gS) => {
+   37144: (kk, Fk, Ik) => {
```

#### 101. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1747-L1749` → after: `L1747-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1747-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1747-L1749) · [Before (L1747-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1747-L1749)

```diff
-       Matrix: () => tS.e,
-       Quaternion: () => tS.i,
-       RegisterMathVector: () => tS.k,
+       Matrix: () => Xk.c,
+       Quaternion: () => Xk.f,
+       RegisterMathVector: () => Xk.h,
```

#### 102. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1751-L1753` → after: `L1751-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1751-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1751-L1753) · [Before (L1751-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1751-L1753)

```diff
-       Vector2: () => tS.m,
-       VK: () => tS.n,
-       Vector4: () => tS.r
+       Vector2: () => Xk.p,
+       Ge: () => Xk.t,
+       Vector4: () => Xk.u
```

#### 103. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1755-L1756` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1755-L1756) · [Before (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1755-L1756)

```diff
-     var tS = gS(37117);
-     (0, tS.k)()
+     var Xk = Ik(37153);
+     (0, Xk.h)()
```

#### 104. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1758)

```diff
-   38134: (SS, HS, gS) => {
+   38099: (kk, Fk, Ik) => {
```

#### 105. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1760)

```diff
-       b: () => tS
+       c: () => Xk
```

#### 106. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1777)

```diff
-   37933: (SS, HS, gS) => {
+   37902: (kk, Fk, Ik) => {
```

#### 107. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1781)

```diff
-         return ("x" === SS ? HS : 3 & HS | 8).toString(16)
+         return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
```

#### 108. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/228.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/228.js#L1785)

```diff
-       c: () => tS
+       e: () => Xk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L4)

```diff
-   40278: (SS, HS, gS) => {
+   40244: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L6-L7)

```diff
-       e: () => xS,
-       f: () => NS
+       d: () => yk,
+       h: () => lk
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L9-L11)

```diff
-     var tS = gS(38687),
-       bS = gS(40068),
-       XS = gS(40248),
+     var Xk = Ik(38674),
+       Tk = Ik(40021),
+       ik = Ik(40214),
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L19)

```diff
-         this.attached[HS] ? tS.b.Warn("camera input of type " + HS + " already exists on camera") : (this.attached[HS] = SS, SS.camera = this.camera, SS.checkInputs && (this.checkInputs = this._addCheckInputs(SS.checkInputs.bind(SS))), this.attachedToElement && SS.attachControl(t … [truncated]
+         this.attached[Fk] ? Xk.e.Warn("camera input of type " + Fk + " already exists on camera") : (this.attached[Fk] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L45)

```diff
-           SS = !XS.b.ForceAttachControlToAlwaysPreventDefault && SS, this.attachedToElement = !0, this.noPreventDefault = SS;
+           kk = !ik.d.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L96)

```diff
-   40286: (SS, HS, gS) => {
+   40252: (kk, Fk, Ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L98)

```diff
-       d: () => tS.d
+       d: () => Xk.b
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L100-L101)

```diff
-     var tS = gS(40295);
-     (0, tS.h)()
+     var Xk = Ik(40259);
+     (0, Xk.e)()
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L103)

```diff
-   40295: (SS, HS, gS) => {
+   40259: (kk, Fk, Ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L105-L106)

```diff
-       d: () => IS,
-       h: () => kS
+       b: () => Lk,
+       e: () => Zk
```

#### 11. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L108-L114` → after: `L108-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L108-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L108-L114) · [Before (L108-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L108-L114)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(37117),
-       xS = gS(37300),
-       NS = gS(40304),
-       qS = gS(40256),
-       uS = gS(37164);
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(37153),
+       yk = Ik(37331),
+       lk = Ik(40265),
+       ak = Ik(40218),
+       qk = Ik(37201);
```

#### 12. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L117)

```diff
-         let HS, gS, qS = NS.e,
+         let Fk, Ik, ak = lk.b,
```

#### 13. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L124)

```diff
-             super(SS, gS, bS), this.groundColor = (0, tS.k)(this, uS, new xS.b(0, 0, 0)), this.direction = ((0, tS.k)(this, IS), (0, tS.k)(this, fS, void 0)), (0, tS.k)(this, kS), this.direction = HS || XS.n.Up()
+             super(kk, Ik, Tk), this.groundColor = (0, Xk.n)(this, qk, new yk.e(0, 0, 0)), this.direction = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, void 0)), (0, Xk.n)(this, Zk), this.direction = Fk || ik.t.Up()
```

#### 14. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L133)

```diff
-             return this.direction = XS.n.Normalize(SS.subtract(XS.n.Zero())), this.direction
+             return this.direction = ik.t.Normalize(kk.subtract(ik.t.Zero())), this.direction
```

#### 15. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L139)

```diff
-             const gS = XS.n.Normalize(this.direction);
+             const Ik = ik.t.Normalize(this.direction);
```

#### 16. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L143)

```diff
-             const gS = XS.n.Normalize(this.direction);
+             const Ik = ik.t.Normalize(this.direction);
```

#### 17. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L147)

```diff
-             return this._worldMatrix || (this._worldMatrix = XS.e.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = ik.c.Identity()), this._worldMatrix
```

#### 18. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L150)

```diff
-             return NS.e.LIGHTTYPEID_HEMISPHERICLIGHT
+             return lk.b.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 19. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L157)

```diff
-           HS = [(0, bS.k)()], gS = [(0, bS.I)()], (0, tS.j)(null, null, HS, {
+           Fk = [(0, Tk.n)()], Ik = [(0, Tk.H)()], (0, Xk.j)(null, null, Fk, {
```

#### 20. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L194)

```diff
-       fS || (fS = !0, qS.e.AddNodeConstructor("Light_Type_3", ((SS, HS) => () => new IS(SS, XS.n.Zero(), HS))), (0, uS.f)("BABYLON.HemisphericLight", IS))
+       tk || (tk = !0, ak.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new Lk(kk, ik.t.Zero(), Fk))), (0, qk.f)("BABYLON.HemisphericLight", Lk))
```

#### 21. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L197)

```diff
-   37294: (SS, HS, gS) => {
+   37327: (kk, Fk, Ik) => {
```

#### 22. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L199-L200)

```diff
-       Color3: () => tS.b,
-       b: () => tS.c
+       Color3: () => Xk.e,
+       b: () => Xk.h
```

#### 23. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L202-L203` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L202-L203) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L202-L203)

```diff
-     var tS = gS(37300);
-     (0, tS.e)()
+     var Xk = Ik(37331);
+     (0, Xk.i)()
```

#### 24. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L205)

```diff
-   37783: (SS, HS, gS) => {
+   37780: (kk, Fk, Ik) => {
```

#### 25. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L207)

```diff
-       d: () => bS
+       b: () => Tk
```

#### 26. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L209)

```diff
-     var tS = gS(37791);
+     var Xk = Ik(37785);
```

#### 27. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L250)

```diff
-   37791: (SS, HS, gS) => {
+   37785: (kk, Fk, Ik) => {
```

#### 28. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L254)

```diff
-     var tS = gS(37117);
+     var Xk = Ik(37153);
```

#### 29. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L257)

```diff
-         this.normal = new tS.n(SS, HS, gS), this.d = bS
+         this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
```

#### 30. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L259)

```diff
-       lgS() {
+       iXk() {
```

#### 31. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L306)

```diff
-         return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
+         return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
```

#### 32. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L309)

```diff
-         return tS.n.Dot(this.normal, SS) <= HS
+         return Xk.t.Dot(this.normal, kk) <= Fk
```

#### 33. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L312)

```diff
-         return tS.n.Dot(SS, this.normal) + this.d
+         return Xk.t.Dot(kk, this.normal) + this.d
```

#### 34. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L326)

```diff
-         return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
+         return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
```

#### 35. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L330)

```diff
-         return tS.n.Dot(gS, HS) + bS
+         return Xk.t.Dot(Ik, Fk) + Tk
```

#### 36. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L333)

```diff
-     bS._TmpMatrix = tS.e.Identity()
+     Tk._TmpMatrix = Xk.c.Identity()
```

#### 37. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L335)

```diff
-   37113: (SS, HS, gS) => {
+   37144: (kk, Fk, Ik) => {
```

#### 38. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L337-L339` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L337-L339) · [Before (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L337-L339)

```diff
-       Matrix: () => tS.e,
-       Quaternion: () => tS.i,
-       RegisterMathVector: () => tS.k,
+       Matrix: () => Xk.c,
+       Quaternion: () => Xk.f,
+       RegisterMathVector: () => Xk.h,
```

#### 39. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L341-L343` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L341-L343) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L341-L343)

```diff
-       Vector2: () => tS.m,
-       VK: () => tS.n,
-       Vector4: () => tS.r
+       Vector2: () => Xk.p,
+       Ge: () => Xk.t,
+       Vector4: () => Xk.u
```

#### 40. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L345-L346` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L345-L346) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L345-L346)

```diff
-     var tS = gS(37117);
-     (0, tS.k)()
+     var Xk = Ik(37153);
+     (0, Xk.h)()
```

#### 41. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L348)

```diff
-   38134: (SS, HS, gS) => {
+   38099: (kk, Fk, Ik) => {
```

#### 42. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L350)

```diff
-       b: () => tS
+       c: () => Xk
```

#### 43. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L367)

```diff
-   40432: (SS, HS, gS) => {
+   40411: (kk, Fk, Ik) => {
```

#### 44. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L369)

```diff
-       c: () => uS
+       d: () => qk
```

#### 45. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L371-L375` → after: `L371-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L371-L375) · [Before (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L371-L375)

```diff
-     var tS = gS(37117),
-       bS = gS(37300),
-       XS = gS(40439),
-       xS = gS(40449),
-       NS = gS(40465);
+     var Xk = Ik(37153),
+       Tk = Ik(37331),
+       ik = Ik(40417),
+       yk = Ik(40427),
+       lk = Ik(40439);
```

#### 46. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L413)

```diff
-         PS = 0 === SS.sideOrientation ? 0 : SS.sideOrientation || xS.e.DEFAULTSIDE,
+         Pk = 0 === kk.sideOrientation ? 0 : kk.sideOrientation || yk.c.DEFAULTSIDE,
```

#### 47. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L417)

```diff
-       for (let xS = 0; xS < 6; xS++) void 0 === QS[xS] && (QS[xS] = new tS.r(0, 0, 1, 1)), DS && void 0 === DS[xS] && (DS[xS] = new bS.c(1, 1, 1, 1));
+       for (let yk = 0; yk < 6; yk++) void 0 === Kk[yk] && (Kk[yk] = new Xk.u(0, 0, 1, 1)), Qk && void 0 === Qk[yk] && (Qk[yk] = new Tk.h(1, 1, 1, 1));
```

#### 48. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L419)

```diff
-         if (XS.push(QS[tS].z, NS.c ? 1 - QS[tS].w : QS[tS].w), XS.push(QS[tS].x, NS.c ? 1 - QS[tS].w : QS[tS].w), XS.push(QS[tS].x, NS.c ? 1 - QS[tS].y : QS[tS].y), XS.push(QS[tS].z, NS.c ? 1 - QS[tS].y : QS[tS].y), DS)
+         if (ik.push(Kk[Xk].z, lk.b ? 1 - Kk[Xk].w : Kk[Xk].w), ik.push(Kk[Xk].x, lk.b ? 1 - Kk[Xk].w : Kk[Xk].w), ik.push(Kk[Xk].x, lk.b ? 1 - Kk[Xk].y : Kk[Xk].y), ik.push(Kk[Xk].z, lk.b ? 1 - Kk[Xk].y : Kk[Xk].y), Qk)
```

#### 49. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L421-L422` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L421-L422) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L421-L422)

```diff
-       xS.e._ComputeSides(PS, nS, HS, gS, XS, SS.frontUVs, SS.backUVs);
-       const hS = new xS.e;
+       yk.c._ComputeSides(Pk, xk, Fk, Ik, ik, kk.frontUVs, kk.backUVs);
+       const Vk = new yk.c;
```

#### 50. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L424)

```diff
-         const SS = PS === xS.e.DOUBLESIDE ? wS.concat(wS) : wS;
+         const kk = Pk === yk.c.DOUBLESIDE ? sk.concat(sk) : sk;
```

#### 51. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L433-L434` → after: `L433-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L433-L434) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L433-L434)

```diff
-       const tS = new XS.e(SS, gS);
-       HS.sideOrientation = XS.e._GetDefaultSideOrientation(HS.sideOrientation), tS._originalBuilderSideOrientation = HS.sideOrientation;
+       const Xk = new ik.b(kk, Ik);
+       Fk.sideOrientation = ik.b._GetDefaultSideOrientation(Fk.sideOrientation), Xk._originalBuilderSideOrientation = Fk.sideOrientation;
```

#### 52. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L438)

```diff
-     IS || (IS = !0, xS.e.CreateBox = qS, XS.e.CreateBox = function(SS, HS) {
+     Lk || (Lk = !0, yk.c.CreateBox = ak, ik.b.CreateBox = function(kk, Fk) {
```

#### 53. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L446)

```diff
-   40484: (SS, HS, gS) => {
+   40458: (kk, Fk, Ik) => {
```

#### 54. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L448)

```diff
-       d: () => fS
+       c: () => tk
```

#### 55. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L450-L455` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L450-L455) · [Before (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L450-L455)

```diff
-     var tS = gS(37117),
-       bS = gS(40439),
-       XS = gS(40449),
-       xS = gS(40491),
-       NS = gS(40183),
-       qS = gS(38687);
+     var Xk = Ik(37153),
+       Tk = Ik(40417),
+       ik = Ik(40427),
+       yk = Ik(40467),
+       lk = Ik(40141),
+       ak = Ik(38674);
```

#### 56. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L485` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L485) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L485)

```diff
-       const qS = new XS.e;
+       const ak = new ik.c;
```

#### 57. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L496)

```diff
-         uS = tS.n.Zero();
+         qk = Xk.t.Zero();
```

#### 58. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L506)

```diff
-       const CS = new XS.e;
+       const Jk = new ik.c;
```

#### 59. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L516)

```diff
-         const SS = tS.getVerticesData(NS.h.PositionKind);
+         const kk = Xk.getVerticesData(lk.l.PositionKind);
```

#### 60. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L518)

```diff
-         XS && (HS = tS.getVerticesData(NS.h.ColorKind));
+         ik && (Fk = Xk.getVerticesData(lk.l.ColorKind));
```

#### 61. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L525)

```diff
-         return tS.updateVerticesData(NS.h.PositionKind, SS, !1, !1), XS && HS && tS.updateVerticesData(NS.h.ColorKind, HS, !1, !1), tS.refreshBoundingInfo(), tS
+         return Xk.updateVerticesData(lk.l.PositionKind, kk, !1, !1), ik && Fk && Xk.updateVerticesData(lk.l.ColorKind, Fk, !1, !1), Xk.refreshBoundingInfo(), Xk
```

#### 62. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L528)

```diff
-         IS = new xS.e(SS, gS, null, void 0, void 0, qS, HS.useVertexAlpha, HS.material);
+         Lk = new yk.b(kk, Ik, null, void 0, void 0, ak, Fk.useVertexAlpha, Fk.material);
```

#### 63. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L553)

```diff
-           const HS = tS.n.Zero(),
+           const Fk = Xk.t.Zero(),
```

#### 64. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L565)

```diff
-         return (HS.dashNb || HS.dashSize || HS.gapSize || HS.useVertexAlpha || HS.material) && qS.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), NS.updateMeshPositions(SS, !1), NS
+         return (Fk.dashNb || Fk.dashSize || Fk.gapSize || Fk.useVertexAlpha || Fk.material) && ak.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), lk.updateMeshPositions(kk, !1), lk
```

#### 65. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L567-L568` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L567-L568) · [Before (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L567-L568)

```diff
-       const kS = new xS.e(SS, gS, null, void 0, void 0, void 0, HS.useVertexAlpha, HS.material);
-       return IS(HS).applyToMesh(kS, HS.updatable), kS._creationDataStorage = new bS.l, kS._creationDataStorage.dashSize = fS, kS._creationDataStorage.gapSize = uS, kS
+       const Zk = new yk.b(kk, Ik, null, void 0, void 0, void 0, Fk.useVertexAlpha, Fk.material);
+       return Lk(Fk).applyToMesh(Zk, Fk.updatable), Zk._creationDataStorage = new Tk.g, Zk._creationDataStorage.dashSize = tk, Zk._creationDataStorage.gapSize = qk, Zk
```

#### 66. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L571)

```diff
-     KS || (KS = !0, XS.e.CreateLineSystem = uS, XS.e.CreateDashedLines = IS, bS.e.CreateLines = function(SS, HS) {
+     ek || (ek = !0, ik.c.CreateLineSystem = qk, ik.c.CreateDashedLines = Lk, Tk.b.CreateLines = function(kk, Fk) {
```

#### 67. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L577)

```diff
-     }, bS.e.CreateDashedLines = function(SS, HS, gS, tS, bS) {
+     }, Tk.b.CreateDashedLines = function(kk, Fk, Ik, Xk, Tk) {
```

#### 68. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L588)

```diff
-   40491: (SS, HS, gS) => {
+   40467: (kk, Fk, Ik) => {
```

#### 69. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L590-L591` → after: `L590-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L590-L591) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L590-L591)

```diff
-       e: () => kS,
-       g: () => jS
+       b: () => Zk,
+       f: () => wk
```

#### 70. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L593-L600` → after: `L593-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L593-L600) · [Before (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L593-L600)

```diff
-     var tS, bS, XS = gS(37300),
-       xS = gS(40183),
-       NS = gS(40439),
-       qS = gS(40495),
-       uS = gS(40331),
-       IS = gS(40504),
-       fS = gS(39926);
-     class kS extends NS.e {
+     var Xk, Tk, ik = Ik(37331),
+       yk = Ik(40141),
+       lk = Ik(40417),
+       ak = Ik(40475),
+       qk = Ik(40295),
+       Lk = Ik(40482),
+       tk = Ik(39863);
+     class Zk extends lk.b {
```

#### 71. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L609)

```diff
-         super(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, HS, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = tS, this.useVertexAlpha = bS, this.color = new  … [truncated]
+         super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Fk, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Xk, this.useVertexAlpha = Tk, this.color = new  … [truncated]
```

#### 72. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L611)

```diff
-           attributes: [xS.h.PositionKind],
+           attributes: [yk.l.PositionKind],
```

#### 73. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L618)

```diff
-         if (this.useVertexAlpha ? qS.defines.push("#define VERTEXALPHA") : qS.needAlphaBlending = !1, this.useVertexColor ? (qS.defines.push("#define VERTEXCOLOR"), qS.attributes.push(xS.h.ColorKind)) : (qS.uniforms.push("color"), this._color4 = new XS.c), NS) this.material = NS;
+         if (this.useVertexAlpha ? ak.defines.push("#define VERTEXALPHA") : ak.needAlphaBlending = !1, this.useVertexColor ? (ak.defines.push("#define VERTEXCOLOR"), ak.attributes.push(yk.l.ColorKind)) : (ak.uniforms.push("color"), this._color4 = new ik.h), lk) this.material = lk;
```

#### 74. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L620-L621` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L620-L621) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L620-L621)

```diff
-           this.lL().AK().isWebGPU && !kS.ForceGLSL && (this._shaderLanguage = 1), qS.shaderLanguage = this._shaderLanguage, qS.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([gS.e(344).then((() => gS(42568))), gS.e(350).then((() => gS(42570)))]) : await Promise.all([gS.e(326).then((() => gS(42577))), gS.e(332).then((() => gS(42584)))])
+           this.mG().Oe().isWebGPU && !Zk.ForceGLSL && (this._shaderLanguage = 1), ak.shaderLanguage = this._shaderLanguage, ak.extraInitializationsAsync = async () => {
+             1 === this._shaderLanguage ? await Promise.all([Ik.e(344).then((() => Ik(42559))), Ik.e(350).then((() => Ik(42565)))]) : await Promise.all([Ik.e(326).then((() => Ik(42571))), Ik.e(332).then((() => Ik(42574)))])
```

#### 75. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L623)

```diff
-           const SS = new IS.o("colorShader", this.lL(), "color", qS, !1);
+           const kk = new Lk.q("colorShader", this.mG(), "color", ak, !1);
```

#### 76. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L640)

```diff
-         this._setMaterial(SS), this.material && (this.material.fillMode = uS.d.LineListDrawMode, this.material.disableLighting = !0)
+         this._setMaterial(kk), this.material && (this.material.fillMode = qk.c.LineListDrawMode, this.material.disableLighting = !0)
```

#### 77. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L661-L662` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L661-L662) · [Before (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L661-L662)

```diff
-         const tS = this.lL().AK();
-         return this._unIndexed ? tS.drawArraysType(uS.d.LineListDrawMode, SS.verticesStart, SS.verticesCount, gS) : tS.drawElementsType(uS.d.LineListDrawMode, SS.indexStart, SS.indexCount, gS), this
+         const Xk = this.mG().Oe();
+         return this._unIndexed ? Xk.drawArraysType(qk.c.LineListDrawMode, kk.verticesStart, kk.verticesCount, Ik) : Xk.drawElementsType(qk.c.LineListDrawMode, kk.indexStart, kk.indexCount, Ik), this
```

#### 78. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L673)

```diff
-           return gS.source = this, new kS(SS, this.lL(), gS.parent, gS.source, gS.doNotCloneChildren)
+           return Ik.source = this, new Zk(kk, this.mG(), Ik.parent, Ik.source, Ik.doNotCloneChildren)
```

#### 79. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L675` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L675) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L675)

```diff
-         return new kS(SS, this.lL(), HS, this, gS)
+         return new Zk(kk, this.mG(), Fk, this, Ik)
```

#### 80. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L679-L681` → after: `L679-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L679-L681) · [Before (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L679-L681)

```diff
-         if (this.mY) {
-           HS.mY = {};
-           for (const SS in this.mY) HS.mY[SS] = this.mY[SS]
+         if (this.JR) {
+           Fk.JR = {};
+           for (const kk in this.JR) Fk.JR[kk] = this.JR[kk]
```

#### 81. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L686)

```diff
-         super.serialize(SS), SS.color = this.color.lgS(), SS.alpha = this.alpha
+         super.serialize(kk), kk.color = this.color.iXk(), kk.alpha = this.alpha
```

#### 82. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L690)

```diff
-         return gS.color = XS.b.FromArray(SS.color), gS.alpha = SS.alpha, gS
+         return Ik.color = ik.e.FromArray(kk.color), Ik.alpha = kk.alpha, Ik
```

#### 83. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L694)

```diff
-     class aS extends qS.c {
+     class jk extends ak.d {
```

#### 84. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L705-L706` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L705-L706) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L705-L706)

```diff
-       KS || (KS = !0, NS.e._LinesMeshParser = (SS, HS) => kS.Parse(SS, HS))
-     }(tS = kS.prototype).enableEdgesRendering ?? (tS.enableEdgesRendering = (0, fS.i)("LinesMesh", "enableEdgesRendering")), (bS = aS.prototype).enableEdgesRendering ?? (bS.enableEdgesRendering = (0, fS.i)("InstancedLinesMesh", "enableEdgesRendering"))
+       ek || (ek = !0, lk.b._LinesMeshParser = (kk, Fk) => Zk.Parse(kk, Fk))
+     }(Xk = Zk.prototype).enableEdgesRendering ?? (Xk.enableEdgesRendering = (0, tk.h)("LinesMesh", "enableEdgesRendering")), (Tk = jk.prototype).enableEdgesRendering ?? (Tk.enableEdgesRendering = (0, tk.h)("InstancedLinesMesh", "enableEdgesRendering"))
```

#### 85. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L708)

```diff
-   38683: (SS, HS, gS) => {
+   38666: (kk, Fk, Ik) => {
```

#### 86. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L710)

```diff
-       d: () => XS
+       c: () => ik
```

#### 87. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L712)

```diff
-     var tS = gS(38687);
+     var Xk = Ik(38674);
```

#### 88. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L745)

```diff
-             tS.b.Warn(qS.message)
+             Xk.e.Warn(ak.message)
```

#### 89. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L751)

```diff
-   37933: (SS, HS, gS) => {
+   37902: (kk, Fk, Ik) => {
```

#### 90. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L755)

```diff
-         return ("x" === SS ? HS : 3 & HS | 8).toString(16)
+         return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
```

#### 91. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L759)

```diff
-       c: () => tS
+       e: () => Xk
```

#### 92. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L762` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L762)

```diff
-   38687: (SS, HS, gS) => {
+   38674: (kk, Fk, Ik) => {
```

#### 93. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L764)

```diff
-       b: () => tS
+       e: () => Xk
```

#### 94. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L785)

```diff
-         const HS = SS => SS < 10 ? "0" + SS : "" + SS,
+         const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
```

#### 95. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L800)

```diff
-         const qS = `<div style='color:${xS.color}'>${XS}</div><br>`;
+         const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
```

#### 96. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L833)

```diff
-   40129: (SS, HS, gS) => {
+   40082: (kk, Fk, Ik) => {
```

#### 97. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L835)

```diff
-       b: () => tS.i
+       c: () => Xk.f
```

#### 98. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/229.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/229.js#L837-L838)

```diff
-     var tS = gS(40131);
-     (0, tS.e)()
+     var Xk = Ik(40090);
+     (0, Xk.c)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (961 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   41867: (SS, HS, gS) => {
+   41832: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L8-L9)

```diff
-     var tS = gS(41785),
-       bS = gS(40038);
+     var Xk = Ik(41761),
+       Tk = Ik(39994);
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L13)

```diff
-       XS || (XS = !0, bS.e.prototype._sphericalPolynomialTargetSize = 0, bS.e.prototype.forceSphericalPolynomialsRecompute = function() {
+       ik || (ik = !0, Tk.d.prototype._sphericalPolynomialTargetSize = 0, Tk.d.prototype.forceSphericalPolynomialsRecompute = function() {
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L15)

```diff
-       }, Object.defineProperty(bS.e.prototype, "sphericalPolynomial", {
+       }, Object.defineProperty(Tk.d.prototype, "sphericalPolynomial", {
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L19)

```diff
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = tS.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Xk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L33)

```diff
-   37294: (SS, HS, gS) => {
+   37327: (kk, Fk, Ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L35-L36` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L35-L36) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L35-L36)

```diff
-       Color3: () => tS.b,
-       b: () => tS.c
+       Color3: () => Xk.e,
+       b: () => Xk.h
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L38-L39` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L38-L39) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L38-L39)

```diff
-     var tS = gS(37300);
-     (0, tS.e)()
+     var Xk = Ik(37331);
+     (0, Xk.i)()
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L41)

```diff
-   37783: (SS, HS, gS) => {
+   37780: (kk, Fk, Ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L43)

```diff
-       d: () => bS
+       b: () => Tk
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L45)

```diff
-     var tS = gS(37791);
+     var Xk = Ik(37785);
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L86)

```diff
-   37791: (SS, HS, gS) => {
+   37785: (kk, Fk, Ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L90)

```diff
-     var tS = gS(37117);
+     var Xk = Ik(37153);
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L93)

```diff
-         this.normal = new tS.n(SS, HS, gS), this.d = bS
+         this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L95)

```diff
-       lgS() {
+       iXk() {
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L142)

```diff
-         return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
+         return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L145)

```diff
-         return tS.n.Dot(this.normal, SS) <= HS
+         return Xk.t.Dot(this.normal, kk) <= Fk
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L148)

```diff
-         return tS.n.Dot(SS, this.normal) + this.d
+         return Xk.t.Dot(kk, this.normal) + this.d
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L162)

```diff
-         return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
+         return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L166)

```diff
-         return tS.n.Dot(gS, HS) + bS
+         return Xk.t.Dot(Ik, Fk) + Tk
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L169)

```diff
-     bS._TmpMatrix = tS.e.Identity()
+     Tk._TmpMatrix = Xk.c.Identity()
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L171)

```diff
-   37113: (SS, HS, gS) => {
+   37144: (kk, Fk, Ik) => {
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L173-L175` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L173-L175) · [Before (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L173-L175)

```diff
-       Matrix: () => tS.e,
-       Quaternion: () => tS.i,
-       RegisterMathVector: () => tS.k,
+       Matrix: () => Xk.c,
+       Quaternion: () => Xk.f,
+       RegisterMathVector: () => Xk.h,
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L177-L179` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L177-L179) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L177-L179)

```diff
-       Vector2: () => tS.m,
-       VK: () => tS.n,
-       Vector4: () => tS.r
+       Vector2: () => Xk.p,
+       Ge: () => Xk.t,
+       Vector4: () => Xk.u
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L181-L182` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L181-L182) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L181-L182)

```diff
-     var tS = gS(37117);
-     (0, tS.k)()
+     var Xk = Ik(37153);
+     (0, Xk.h)()
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L184)

```diff
-   38134: (SS, HS, gS) => {
+   38099: (kk, Fk, Ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L186)

```diff
-       b: () => tS
+       c: () => Xk
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L203)

```diff
-   41785: (SS, HS, gS) => {
+   41761: (kk, Fk, Ik) => {
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L205)

```diff
-       c: () => uS
+       b: () => qk
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L207-L211` → after: `L207-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L207-L211) · [Before (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L207-L211)

```diff
-     var tS = gS(37117),
-       bS = gS(37149),
-       XS = gS(40032),
-       xS = gS(37123),
-       NS = gS(37300);
+     var Xk = Ik(37153),
+       Tk = Ik(37189),
+       ik = Ik(39989),
+       yk = Ik(37158),
+       lk = Ik(37331);
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L223)

```diff
-         SS.lL()?.AK().flushFramebuffer();
+         kk.mG()?.Oe().flushFramebuffer();
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L266)

```diff
-         const bS = SS instanceof Float32Array ? SS : Float32Array.from(SS),
+         const Tk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L305)

```diff
-         const tS = new XS.e;
+         const Xk = new ik.d;
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L325)

```diff
-               isNaN(CS) && (CS = 0), isNaN(nS) && (nS = 0), isNaN(PS) && (PS = 0), 0 === SS.type && (CS /= 255, nS /= 255, PS /= 255), SS.gammaSpace && (CS = Math.pow((0, bS.Clamp)(CS), xS.l), nS = Math.pow((0, bS.Clamp)(nS), xS.l), PS = Math.pow((0, bS.Clamp)(PS), xS.l));
+               isNaN(Jk) && (Jk = 0), isNaN(xk) && (xk = 0), isNaN(Pk) && (Pk = 0), 0 === kk.type && (Jk /= 255, xk /= 255, Pk /= 255), kk.gammaSpace && (Jk = Math.pow((0, Tk.Clamp)(Jk), yk.g), xk = Math.pow((0, Tk.Clamp)(xk), yk.g), Pk = Math.pow((0, Tk.Clamp)(Pk), yk.g));
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L334)

```diff
-               const DS = new NS.b(CS, nS, PS);
+               const Qk = new lk.e(Jk, xk, Pk);
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L341)

```diff
-         return tS.scaleInPlace(aS), tS.convertIncidentRadianceToIrradiance(), tS.convertIrradianceToLambertianRadiance(), XS.f.FromHarmonics(tS)
+         return Xk.scaleInPlace(jk), Xk.convertIncidentRadianceToIrradiance(), Xk.convertIrradianceToLambertianRadiance(), ik.h.FromHarmonics(Xk)
```

#### 37. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L344)

```diff
-     uS._FileFaces = [new qS("right", new tS.n(1, 0, 0), new tS.n(0, 0, -1), new tS.n(0, -1, 0)), new qS("left", new tS.n(-1, 0, 0), new tS.n(0, 0, 1), new tS.n(0, -1, 0)), new qS("up", new tS.n(0, 1, 0), new tS.n(1, 0, 0), new tS.n(0, 0, 1)), new qS("down", new tS.n(0, -1, 0), ne … [truncated]
+     qk._FileFaces = [new ak("right", new Xk.t(1, 0, 0), new Xk.t(0, 0, -1), new Xk.t(0, -1, 0)), new ak("left", new Xk.t(-1, 0, 0), new Xk.t(0, 0, 1), new Xk.t(0, -1, 0)), new ak("up", new Xk.t(0, 1, 0), new Xk.t(1, 0, 0), new Xk.t(0, 0, 1)), new ak("down", new Xk.t(0, -1, 0), ne … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L346)

```diff
-   41564: (SS, HS, gS) => {
+   41550: (kk, Fk, Ik) => {
```

#### 39. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L348-L349` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L348-L349) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L348-L349)

```diff
-       d: () => tS.g,
-       g: () => tS.n
+       e: () => Xk.l,
+       i: () => Xk.t
```

#### 40. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L351-L352` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L351-L352) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L351-L352)

```diff
-     var tS = gS(40087);
-     (0, tS.v)()
+     var Xk = Ik(40038);
+     (0, Xk.x)()
```

#### 41. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L354)

```diff
-   37933: (SS, HS, gS) => {
+   37902: (kk, Fk, Ik) => {
```

#### 42. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L358)

```diff
-         return ("x" === SS ? HS : 3 & HS | 8).toString(16)
+         return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
```

#### 43. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L362)

```diff
-       c: () => tS
+       e: () => Xk
```

#### 44. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L365)

```diff
-   41831: (SS, HS, gS) => {
+   41803: (kk, Fk, Ik) => {
```

#### 45. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L367)

```diff
-       e: () => XS
+       c: () => ik
```

#### 46. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L369-L370)

```diff
-     var tS = gS(41822),
-       bS = gS(41838);
+     var Xk = Ik(41795),
+       Tk = Ik(41809);
```

#### 47. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L375)

```diff
-         const bS = HS.AK(),
+         const Tk = Fk.Oe(),
```

#### 48. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L383)

```diff
-           HS.isReady = !1, XS ? await gS.e(342).then((() => gS(61445))) : await gS.e(324).then((() => gS(61452)));
+           Fk.isReady = !1, ik ? await Ik.e(342).then((() => Ik(61383))) : await Ik.e(324).then((() => Ik(61389)));
```

#### 49. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L398)

```diff
-               }, SS.lL()?.postProcessManager.directRender([NS], qS, !0), bS.restoreDefaultFramebuffer(), bS._releaseTexture(HS), NS && NS.dispose(), qS._swapAndDie(HS), HS.isReady = !0
+               }, kk.mG()?.postProcessManager.directRender([lk], ak, !0), Tk.restoreDefaultFramebuffer(), Tk._releaseTexture(Fk), lk && lk.dispose(), ak._swapAndDie(Fk), Fk.isReady = !0
```

#### 50. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L406)

```diff
-         return HS.AK().isWebGPU ? await gS.e(343).then((() => gS(61465))) : await gS.e(325).then((() => gS(61462))), await (0, bS.d)("rgbdEncode", SS, HS, tS, 1, 5)
+         return Fk.Oe().isWebGPU ? await Ik.e(343).then((() => Ik(61404))) : await Ik.e(325).then((() => Ik(61400))), await (0, Tk.e)("rgbdEncode", kk, Fk, Xk, 1, 5)
```

#### 51. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L410)

```diff
-   61307: (SS, HS, gS) => {
+   61268: (kk, Fk, Ik) => {
```

#### 52. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L412-L415` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L412-L415) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L412-L415)

```diff
-       AsyncLoop: () => tS.e,
-       RegisterTools: () => tS.i,
-       Tools: () => tS.k,
-       className: () => tS.m
+       AsyncLoop: () => Xk.b,
+       RegisterTools: () => Xk.e,
+       Tools: () => Xk.h,
+       className: () => Xk.k
```

#### 53. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L417-L418)

```diff
-     var tS = gS(40133);
-     (0, tS.i)()
+     var Xk = Ik(40097);
+     (0, Xk.e)()
```

#### 54. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L420)

```diff
-   41887: (SS, HS, gS) => {
+   41846: (kk, Fk, Ik) => {
```

#### 55. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L422)

```diff
-       e: () => bS
+       b: () => Tk
```

#### 56. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L486)

```diff
-   61338: (SS, HS, gS) => {
+   61293: (kk, Fk, Ik) => {
```

#### 57. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L615-L617` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L615-L617) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L615-L617)

```diff
-     var tS = gS(37113),
-       bS = gS(61307),
-       XS = gS(40331);
+     var Xk = Ik(37144),
+       Tk = Ik(61268),
+       ik = Ik(40295);
```

#### 58. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L626-L627` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L626-L627) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L626-L627)

```diff
-             fS = gS.name || `mesh${IS}}`;
-           NS.push(`o ${fS}`);
+             tk = Ik.name || `mesh${Lk}}`;
+           lk.push(`o ${tk}`);
```

#### 59. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L645)

```diff
-             CS = aS.mgS();
+             Jk = jk.yXk();
```

#### 60. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L652)

```diff
-           const QS = SS[0].lL().useRightHandedSystem ? 1 : -1;
+           const Kk = kk[0].mG().useRightHandedSystem ? 1 : -1;
```

#### 61. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L659-L660` → after: `L659-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L659-L660) · [Before (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L659-L660)

```diff
-             wS = (gS.material || gS.lL().defaultMaterial)._getEffectiveOrientation(gS),
-             [hS, ZS] = wS === XS.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
+             sk = (Ik.material || Ik.mG().defaultMaterial)._getEffectiveOrientation(Ik),
+             [Vk, zk] = sk === ik.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
```

#### 62. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L665-L666` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L665-L666) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L665-L666)

```diff
-               bS = null != GS ? gS : DS,
-               XS = null != jS ? HS : DS;
+               Tk = null != Hk ? Ik : Qk,
+               ik = null != wk ? Fk : Qk;
```

#### 63. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L683` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L683) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L683)

```diff
-       qS = gS(41564);
+       ak = Ik(41550);
```

#### 64. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L695)

```diff
-               type: (0, qS.d)(SS)
+               type: (0, ak.e)(kk)
```

#### 65. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L701-L708` → after: `L701-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L701-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L701-L708) · [Before (L701-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L701-L708)

```diff
-     var IS = gS(41157),
-       fS = gS(41123),
-       kS = gS(41650),
-       aS = gS(41125),
-       KS = gS(39867),
-       jS = gS(37138),
-       GS = gS(37294),
-       CS = gS(37149);
+     var Lk = Ik(41158),
+       tk = Ik(41114),
+       Zk = Ik(41632),
+       jk = Ik(41117),
+       ek = Ik(39806),
+       wk = Ik(37178),
+       Hk = Ik(37327),
+       Jk = Ik(37189);
```

#### 66. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L717-L721` → after: `L717-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L717-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L717-L721) · [Before (L717-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L717-L721)

```diff
-     var QS = gS(41838),
-       DS = gS(41142),
-       wS = gS(41613),
-       hS = gS(41617),
-       ZS = gS(41859);
+     var Kk = Ik(41809),
+       Qk = Ik(41147),
+       sk = Ik(41599),
+       Vk = Ik(41601),
+       zk = Ik(41826);
```

#### 67. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L723-L728` → after: `L723-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L723-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L723-L728) · [Before (L723-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L723-L728)

```diff
-     var JS = gS(40041),
-       OS = gS(40048),
-       dS = gS(38687),
-       cS = gS(40144),
-       vS = gS(40510),
-       ES = gS(41831);
+     var Sk = Ik(40003),
+       vk = Ik(40011),
+       Ek = Ik(38674),
+       Ok = Ik(40107),
+       nk = Ik(40489),
+       Gk = Ik(41803);
```

#### 68. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L736` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L736) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L736)

```diff
-           const xS = vS.i.CreateFromBase64String(HS, tS + LS++, SS, !0, !1, vS.i.BILINEAR_SAMPLINGMODE);
+           const yk = nk.g.CreateFromBase64String(Fk, Xk + pk++, kk, !0, !1, nk.g.BILINEAR_SAMPLINGMODE);
```

#### 69. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L738-L740` → after: `L738-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L738-L740) · [Before (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L738-L740)

```diff
-           const NS = SS.AK().getLoadedTexturesCache(),
-             qS = NS.indexOf(xS.getInternalTexture()); - 1 !== qS && NS.splice(qS, 1), xS.isRGBD = !0, xS.wrapU = vS.i.CLAMP_ADDRESSMODE, xS.wrapV = vS.i.CLAMP_ADDRESSMODE, SS[gS] = xS, SS.useDelayedTextureLoading = bS, ES.e.ExpandRGBDTexture(xS);
-           const uS = SS.AK().YK.add((() => {
+           const lk = kk.Oe().getLoadedTexturesCache(),
+             ak = lk.indexOf(yk.getInternalTexture()); - 1 !== ak && lk.splice(ak, 1), yk.isRGBD = !0, yk.wrapU = nk.g.CLAMP_ADDRESSMODE, yk.wrapV = nk.g.CLAMP_ADDRESSMODE, kk[Ik] = yk, kk.useDelayedTextureLoading = Tk, Gk.c.ExpandRGBDTexture(yk);
+           const qk = kk.Oe().Ee.add((() => {
```

#### 70. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L743` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L743) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L743)

```diff
-               xS.isReady() && (SS.onBeforeRenderObservable.remove(HS), ES.e.ExpandRGBDTexture(xS))
+               yk.isReady() && (kk.onBeforeRenderObservable.remove(Fk), Gk.c.ExpandRGBDTexture(yk))
```

#### 71. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L746-L747` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L746-L747) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L746-L747)

```diff
-           SS.bY.add((() => {
-             SS.AK().YK.remove(uS)
+           kk.hG.add((() => {
+             kk.Oe().Ee.remove(qk)
```

#### 72. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L755-L760` → after: `L755-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L755-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L755-L760) · [Before (L755-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L755-L760)

```diff
-     var iS = gS(40131),
-       WS = gS(37117),
-       zS = gS(40183),
-       US = gS(40324),
-       pS = gS(40400);
-     class sS extends US.c {
+     var Ck = Ik(40090),
+       Nk = Ik(37153),
+       ck = Ik(40141),
+       Wk = Ik(40291),
+       fk = Ik(40363);
+     class Bk extends Wk.e {
```

#### 73. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L767)

```diff
-       let IS, fS, kS, aS, KS, jS, GS, CS, nS, PS = pS.e,
+       let Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk = fk.b,
```

#### 74. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L791)

```diff
-           (0, JS.h)(this, HS, SS, "f")
+           (0, Sk.f)(this, Fk, kk, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L797)

```diff
-           (0, JS.h)(this, gS, SS, "f")
+           (0, Sk.f)(this, Ik, kk, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L803)

```diff
-           (0, JS.h)(this, tS, SS, "f")
+           (0, Sk.f)(this, Xk, kk, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L809)

```diff
-           (0, JS.h)(this, bS, SS, "f")
+           (0, Sk.f)(this, Tk, kk, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L815)

```diff
-           (0, JS.h)(this, XS, SS, "f")
+           (0, Sk.f)(this, ik, kk, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L821)

```diff
-           (0, JS.h)(this, xS, SS, "f")
+           (0, Sk.f)(this, yk, kk, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L827)

```diff
-           (0, JS.h)(this, NS, SS, "f")
+           (0, Sk.f)(this, lk, kk, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L833)

```diff
-           (0, JS.h)(this, qS, SS, "f")
+           (0, Sk.f)(this, ak, kk, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L839)

```diff
-           (0, JS.h)(this, uS, SS, "f")
+           (0, Sk.f)(this, qk, kk, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L849)

```diff
-           super(IS, "PBRBRDF", 90, new sS, fS), this._useEnergyConservation = SS.DEFAULT_USE_ENERGY_CONSERVATION, HS.set(this, (0, JS.k)(this, QS, SS.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, JS.k)(this, DS), SS.DEFAULT_USE_SMITH_VISIBILIT … [truncated]
+           super(Lk, "PBRBRDF", 90, new Bk, tk), this._useEnergyConservation = kk.DEFAULT_USE_ENERGY_CONSERVATION, Fk.set(this, (0, Sk.n)(this, Kk, kk.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Sk.n)(this, Qk), kk.DEFAULT_USE_SMITH_VISIBILIT … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L859` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L859) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L859)

```diff
-         IS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], fS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], kS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], aS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], KS = [(0, OS.M)(), ( … [truncated]
+         Lk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], tk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], Zk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], jk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], ek = [(0, vk.J)(), ( … [truncated]
```

#### 85. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L984-L992` → after: `L984-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L984-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L984-L992) · [Before (L984-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L984-L992)

```diff
-     var MS = gS(40313),
-       FS = gS(37300),
-       RS = gS(40320),
-       TS = gS(40152),
-       oS = gS(40386),
-       lS = gS(40378),
-       mS = gS(40392),
-       eS = gS(40367);
-     class rS extends US.c {
+     var Yk = Ik(40279),
+       Ak = Ik(37331),
+       gk = Ik(40288),
+       mk = Ik(40113),
+       hk = Ik(40345),
+       rk = Ik(40338),
+       Dk = Ik(40349),
+       Mk = Ik(40329);
+     class kF extends Wk.e {
```

#### 86. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L999` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L999) · [Before (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L999)

```diff
-       let IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS = pS.e,
+       let Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk = fk.b,
```

#### 87. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1033` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1033) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1033)

```diff
-           (0, JS.h)(this, HS, SS, "f")
+           (0, Sk.f)(this, Fk, kk, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1039` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1039) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1039)

```diff
-           (0, JS.h)(this, gS, SS, "f")
+           (0, Sk.f)(this, Ik, kk, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1045)

```diff
-           (0, JS.h)(this, tS, SS, "f")
+           (0, Sk.f)(this, Xk, kk, "f")
```

#### 90. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1051` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1051) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1051)

```diff
-           (0, JS.h)(this, bS, SS, "f")
+           (0, Sk.f)(this, Tk, kk, "f")
```

#### 91. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1057)

```diff
-           (0, JS.h)(this, XS, SS, "f")
+           (0, Sk.f)(this, ik, kk, "f")
```

#### 92. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1063` → after: `L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1063) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1063)

```diff
-           (0, JS.h)(this, xS, SS, "f")
+           (0, Sk.f)(this, yk, kk, "f")
```

#### 93. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1069)

```diff
-           (0, JS.h)(this, NS, SS, "f")
+           (0, Sk.f)(this, lk, kk, "f")
```

#### 94. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1075` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1075) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1075)

```diff
-           (0, JS.h)(this, qS, SS, "f")
+           (0, Sk.f)(this, ak, kk, "f")
```

#### 95. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1081` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1081) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1081)

```diff
-           (0, JS.h)(this, uS, SS, "f")
+           (0, Sk.f)(this, qk, kk, "f")
```

#### 96. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1091)

```diff
-           super(IS, "PBRClearCoat", 100, new rS, fS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, dS, !1)), this.intensity = ((0, JS.k)(this, cS), (0, JS.k)(this, vS, 1)), this.roughness = ((0, JS.k)(this, ES), (0, JS.k)(this, LS, 0)), this._indexOfRefraction = ((0, JS.k)( … [truncated]
+           super(Lk, "PBRClearCoat", 100, new kF, tk), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, Ek, !1)), this.intensity = ((0, Sk.n)(this, Ok), (0, Sk.n)(this, nk, 1)), this.roughness = ((0, Sk.n)(this, Gk), (0, Sk.n)(this, pk, 0)), this._indexOfRefraction = ((0, Sk.n)( … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1097-L1100` → after: `L1097-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1097-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1097-L1100) · [Before (L1097-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1097-L1100)

```diff
-             if (this._texture && lS.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
-             if (this._textureRoughness && lS.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
-             if (gS.getCaps().standardDerivatives && this._bumpTexture && lS.e.ClearCoatBumpTextureEnabled && !tS && !this._bumpTexture.isReady()) return !1;
-             if (this._isTintEnabled && this._tintTexture && lS.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
+             if (this._texture && rk.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
+             if (this._textureRoughness && rk.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
+             if (Ik.getCaps().standardDerivatives && this._bumpTexture && rk.d.ClearCoatBumpTextureEnabled && !Xk && !this._bumpTexture.isReady()) return !1;
+             if (this._isTintEnabled && this._tintTexture && rk.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
```

#### 98. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1105)

```diff
-           this._isEnabled ? (HS.CLEARCOAT = !0, HS.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, HS.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, HS._areTexturesDirty && gS.texturesEnabled && (this._texture && lS.e.ClearCoatTextureEnabled ?  … [truncated]
+           this._isEnabled ? (Fk.CLEARCOAT = !0, Fk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Fk.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Fk._areTexturesDirty && Ik.texturesEnabled && (this._texture && rk.d.ClearCoatTextureEnabled ?  … [truncated]
```

#### 99. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1115)

```diff
-             (this._texture || this._textureRoughness) && lS.e.ClearCoatTextureEnabled && (SS.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._ … [truncated]
+             (this._texture || this._textureRoughness) && rk.d.ClearCoatTextureEnabled && (kk.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._ … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1122` → after: `L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1122) · [Before (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1122)

```diff
-           HS.texturesEnabled && (this._texture && lS.e.ClearCoatTextureEnabled && SS.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !bS.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && lS.e.ClearCoatTextureEnabled && SS.setTexture("clearCoatRoughnessSampler", … [truncated]
+           Fk.texturesEnabled && (this._texture && rk.d.ClearCoatTextureEnabled && kk.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Tk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && rk.d.ClearCoatTextureEnabled && kk.setTexture("clearCoatRoughnessSampler", … [truncated]
```

#### 101. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1200` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1200) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1200)

```diff
-         IS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], fS = [(0, OS.M)()], kS = [(0, OS.M)()], aS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], KS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], jS = [(0, OS.M)(), (0, OS.d)("_ … [truncated]
+         Lk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], tk = [(0, vk.J)()], Zk = [(0, vk.J)()], jk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, vk.J)(), (0, vk.e)("_ … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1390` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1390) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1390)

```diff
-     class HH extends US.c {
+     class IF extends Wk.e {
```

#### 103. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1397` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1397) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1397)

```diff
-       let bS, XS, xS, NS, qS, uS, IS, fS = pS.e,
+       let Tk, ik, yk, lk, ak, qk, Lk, tk = fk.b,
```

#### 104. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1417)

```diff
-           (0, JS.h)(this, HS, SS, "f")
+           (0, Sk.f)(this, Fk, kk, "f")
```

#### 105. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1423)

```diff
-           (0, JS.h)(this, gS, SS, "f")
+           (0, Sk.f)(this, Ik, kk, "f")
```

#### 106. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1429)

```diff
-           (0, JS.h)(this, tS, SS, "f")
+           (0, Sk.f)(this, Xk, kk, "f")
```

#### 107. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1439)

```diff
-           super(bS, "PBRIridescence", 110, new HH, XS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, kS, !1)), this.intensity = ((0, JS.k)(this, aS), (0, JS.k)(this, KS, 1)), this.minimumThickness = ((0, JS.k)(this, jS), (0, JS.k)(this, GS, SS._DefaultMinimumThickness)), th … [truncated]
+           super(Tk, "PBRIridescence", 110, new IF, ik), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, Zk, !1)), this.intensity = ((0, Sk.n)(this, jk), (0, Sk.n)(this, ek, 1)), this.minimumThickness = ((0, Sk.n)(this, wk), (0, Sk.n)(this, Hk, kk._DefaultMinimumThickness)), th … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1444-L1445` → after: `L1444-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1444-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1444-L1445) · [Before (L1444-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1444-L1445)

```diff
-             if (this._texture && lS.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
-             if (this._thicknessTexture && lS.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
+             if (this._texture && rk.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
+             if (this._thicknessTexture && rk.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
```

#### 109. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1450)

```diff
-           this._isEnabled ? (SS.IRIDESCENCE = !0, SS._areTexturesDirty && HS.texturesEnabled && (this._texture && lS.e.IridescenceTextureEnabled ? (0, eS.X)(this._texture, SS, "IRIDESCENCE_TEXTURE") : SS.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && lS.e.IridescenceTextureE … [truncated]
+           this._isEnabled ? (kk.IRIDESCENCE = !0, kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && rk.d.IridescenceTextureEnabled ? (0, Mk.P)(this._texture, kk, "IRIDESCENCE_TEXTURE") : kk.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && rk.d.IridescenceTextureE … [truncated]
```

#### 110. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1455)

```diff
-           SS.useUbo && gS && SS.isSync || ((this._texture || this._thicknessTexture) && lS.e.IridescenceTextureEnabled && (SS.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._th … [truncated]
+           kk.useUbo && Ik && kk.isSync || ((this._texture || this._thicknessTexture) && rk.d.IridescenceTextureEnabled && (kk.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._th … [truncated]
```

#### 111. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1501` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1501) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1501)

```diff
-         bS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], XS = [(0, OS.M)()], xS = [(0, OS.M)()], NS = [(0, OS.M)()], qS = [(0, OS.M)()], uS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], IS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesD … [truncated]
+         Tk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, vk.J)()], yk = [(0, vk.J)()], lk = [(0, vk.J)()], ak = [(0, vk.J)()], qk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Lk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesD … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1600)

```diff
-     class tH extends US.c {
+     class TF extends Wk.e {
```

#### 113. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1607)

```diff
-       let bS, XS, xS, NS, qS, uS = pS.e,
+       let Tk, ik, yk, lk, ak, qk = fk.b,
```

#### 114. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1623)

```diff
-           (0, JS.h)(this, HS, SS, "f")
+           (0, Sk.f)(this, Fk, kk, "f")
```

#### 115. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1635` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1635) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1635)

```diff
-           (0, JS.h)(this, gS, SS, "f")
+           (0, Sk.f)(this, Ik, kk, "f")
```

#### 116. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1641)

```diff
-           (0, JS.h)(this, tS, SS, "f")
+           (0, Sk.f)(this, Xk, kk, "f")
```

#### 117. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1654` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1654) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1654)

```diff
-           super(SS, "PBRAnisotropic", 110, new tH, bS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, IS, !1)), this.intensity = ((0, JS.k)(this, fS), (0, JS.k)(this, kS, 1)), this.direction = ((0, JS.k)(this, aS), (0, JS.k)(this, KS, new WS.m(1, 0))), this._texture = ((0, J … [truncated]
+           super(kk, "PBRAnisotropic", 110, new TF, Tk), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, Lk, !1)), this.intensity = ((0, Sk.n)(this, tk), (0, Sk.n)(this, Zk, 1)), this.direction = ((0, Sk.n)(this, jk), (0, Sk.n)(this, ek, new Nk.p(1, 0))), this._texture = ((0, S … [truncated]
```

#### 118. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1657)

```diff
-           return !this._isEnabled || !(SS._areTexturesDirty && HS.texturesEnabled && this._texture && lS.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
+           return !this._isEnabled || !(kk._areTexturesDirty && Fk.texturesEnabled && this._texture && rk.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
```

#### 119. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1660)

```diff
-           this._isEnabled ? (SS.ANISOTROPIC = this._isEnabled, this._isEnabled && !gS.isVerticesDataPresent(zS.h.TangentKind) && (SS._needUVs = !0, SS.MAINUV1 = !0), SS._areTexturesDirty && HS.texturesEnabled && (this._texture && lS.e.AnisotropicTextureEnabled ? (0, eS.X)(this._t … [truncated]
+           this._isEnabled ? (kk.ANISOTROPIC = this._isEnabled, this._isEnabled && !Ik.isVerticesDataPresent(ck.l.TangentKind) && (kk._needUVs = !0, kk.MAINUV1 = !0), kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && rk.d.AnisotropicTextureEnabled ? (0, Mk.P)(this._t … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1665)

```diff
-           SS.useUbo && gS && SS.isSync || (this._texture && lS.e.AnisotropicTextureEnabled && (SS.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, eS.y)(this._texture, SS, "anisotropy")), SS.updateFloat3("vAnisotropy", this.direction.x, t … [truncated]
+           kk.useUbo && Ik && kk.isSync || (this._texture && rk.d.AnisotropicTextureEnabled && (kk.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Mk.v)(this._texture, kk, "anisotropy")), kk.updateFloat3("vAnisotropy", this.direction.x, t … [truncated]
```

#### 121. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1710` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1710) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1710)

```diff
-         bS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], XS = [(0, OS.M)()], xS = [(0, OS.E)()], NS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], qS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], (0, JS.j)(SS, null, bS, {
+         Tk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, vk.J)()], yk = [(0, vk.F)()], lk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ak = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, Tk, {
```

#### 122. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1783)

```diff
-     class XH extends US.c {
+     class yF extends Wk.e {
```

#### 123. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1790)

```diff
-       let qS, uS, IS, fS, kS, aS, KS, jS, GS, CS = pS.e,
+       let ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk = fk.b,
```

#### 124. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1814)

```diff
-           (0, JS.h)(this, HS, SS, "f")
+           (0, Sk.f)(this, Fk, kk, "f")
```

#### 125. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1820)

```diff
-           (0, JS.h)(this, gS, SS, "f")
+           (0, Sk.f)(this, Ik, kk, "f")
```

#### 126. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1826` → after: `L1826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1826) · [Before (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1826)

```diff
-           (0, JS.h)(this, tS, SS, "f")
+           (0, Sk.f)(this, Xk, kk, "f")
```

#### 127. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1832)

```diff
-           (0, JS.h)(this, bS, SS, "f")
+           (0, Sk.f)(this, Tk, kk, "f")
```

#### 128. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1838)

```diff
-           (0, JS.h)(this, XS, SS, "f")
+           (0, Sk.f)(this, ik, kk, "f")
```

#### 129. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1844` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1844) · [Before (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1844)

```diff
-           (0, JS.h)(this, xS, SS, "f")
+           (0, Sk.f)(this, yk, kk, "f")
```

#### 130. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1850` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1850) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1850)

```diff
-           (0, JS.h)(this, NS, SS, "f")
+           (0, Sk.f)(this, lk, kk, "f")
```

#### 131. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1860)

```diff
-           super(SS, "Sheen", 120, new XH, qS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, nS, !1)), this._linkSheenWithAlbedo = ((0, JS.k)(this, PS), !1), gS.set(this, (0, JS.k)(this, QS, !1)), this.intensity = ((0, JS.k)(this, DS), (0, JS.k)(this, wS, 1)), this.color = ( … [truncated]
+           super(kk, "Sheen", 120, new yF, ak), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, xk, !1)), this._linkSheenWithAlbedo = ((0, Sk.n)(this, Pk), !1), Ik.set(this, (0, Sk.n)(this, Kk, !1)), this.intensity = ((0, Sk.n)(this, Qk), (0, Sk.n)(this, sk, 1)), this.color = ( … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1865-L1866` → after: `L1865-L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1865-L1866) · [Before (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1865-L1866)

```diff
-             if (this._texture && lS.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
-             if (this._textureRoughness && lS.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
+             if (this._texture && rk.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
+             if (this._textureRoughness && rk.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
```

#### 133. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1871)

```diff
-           this._isEnabled ? (SS.SHEEN = !0, SS.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, SS.SHEEN_ROUGHNESS = null !== this._roughness, SS.SHEEN_ALBEDOSCALING = this._albedoScaling, SS.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, SS._areTextur … [truncated]
+           this._isEnabled ? (kk.SHEEN = !0, kk.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, kk.SHEEN_ROUGHNESS = null !== this._roughness, kk.SHEEN_ALBEDOSCALING = this._albedoScaling, kk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, kk._areTextur … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1877` → after: `L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1877) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1877)

```diff
-           SS.useUbo && XS && SS.isSync || ((this._texture || this._textureRoughness) && lS.e.SheenTextureEnabled && (SS.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughne … [truncated]
+           kk.useUbo && ik && kk.isSync || ((this._texture || this._textureRoughness) && rk.d.SheenTextureEnabled && (kk.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughne … [truncated]
```

#### 135. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L1927)

```diff
-         qS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], uS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], IS = [(0, OS.M)()], fS = [(0, OS.k)()], kS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], aS = [(0, OS.M)(), (0, OS.d)("_ … [truncated]
+         ak = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], qk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Lk = [(0, vk.J)()], tk = [(0, vk.n)()], Zk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], jk = [(0, vk.J)(), (0, vk.e)("_ … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2052)

```diff
-     class NH extends US.c {
+     class aF extends Wk.e {
```

#### 137. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2059` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2059) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2059)

```diff
-       let CS, nS, PS, QS, DS, wS, hS, ZS, dS, cS, vS, ES, LS, YS, AS, yS, VS, iS, zS, US, sS, BS, MS, RS, TS, oS, mS, rS, SH, HH, gH = pS.e,
+       let Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Ek, Ok, nk, Gk, pk, uk, bk, Rk, Uk, Ck, ck, Wk, Bk, dk, Yk, gk, mk, hk, Dk, kF, FF, IF, XF = fk.b,
```

#### 138. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2125)

```diff
-           (0, JS.h)(this, HS, SS, "f")
+           (0, Sk.f)(this, Fk, kk, "f")
```

#### 139. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2131` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2131)

```diff
-           (0, JS.h)(this, gS, SS, "f")
+           (0, Sk.f)(this, Ik, kk, "f")
```

#### 140. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2137)

```diff
-           (0, JS.h)(this, tS, SS, "f")
+           (0, Sk.f)(this, Xk, kk, "f")
```

#### 141. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2143)

```diff
-           (0, JS.h)(this, bS, SS, "f")
+           (0, Sk.f)(this, Tk, kk, "f")
```

#### 142. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2155)

```diff
-           (0, JS.h)(this, XS, SS, "f")
+           (0, Sk.f)(this, ik, kk, "f")
```

#### 143. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2161` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2161) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2161)

```diff
-           (0, JS.h)(this, xS, SS, "f")
+           (0, Sk.f)(this, yk, kk, "f")
```

#### 144. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2167)

```diff
-           (0, JS.h)(this, NS, SS, "f")
+           (0, Sk.f)(this, lk, kk, "f")
```

#### 145. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2173` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2173) · [Before (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2173)

```diff
-           (0, JS.h)(this, qS, SS, "f")
+           (0, Sk.f)(this, ak, kk, "f")
```

#### 146. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2179` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2179) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2179)

```diff
-           (0, JS.h)(this, uS, SS, "f")
+           (0, Sk.f)(this, qk, kk, "f")
```

#### 147. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2185)

```diff
-           const HS = SS >= 1 ? SS : -1;
+           const Fk = kk >= 1 ? kk : -1;
```

#### 148. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2192` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2192) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2192)

```diff
-           (0, JS.h)(this, IS, SS, "f")
+           (0, Sk.f)(this, Lk, kk, "f")
```

#### 149. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2198)

```diff
-           (0, JS.h)(this, fS, SS, "f")
+           (0, Sk.f)(this, tk, kk, "f")
```

#### 150. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2204` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2204) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2204)

```diff
-           (0, JS.h)(this, kS, SS, "f")
+           (0, Sk.f)(this, Zk, kk, "f")
```

#### 151. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2210` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2210) · [Before (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2210)

```diff
-           (0, JS.h)(this, aS, SS, "f")
+           (0, Sk.f)(this, jk, kk, "f")
```

#### 152. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2216)

```diff
-           (0, JS.h)(this, KS, SS, "f")
+           (0, Sk.f)(this, ek, kk, "f")
```

#### 153. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2222)

```diff
-           (0, JS.h)(this, jS, SS, "f")
+           (0, Sk.f)(this, wk, kk, "f")
```

#### 154. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2228)

```diff
-           (0, JS.h)(this, GS, SS, "f")
+           (0, Sk.f)(this, Hk, kk, "f")
```

#### 155. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2247)

```diff
-           super(CS, "PBRSubSurface", 130, new NH, nS), this._isRefractionEnabled = !1, HS.set(this, (0, JS.k)(this, tH, !1)), this._isTranslucencyEnabled = ((0, JS.k)(this, bH), !1), gS.set(this, (0, JS.k)(this, XH, !1)), this._isDispersionEnabled = ((0, JS.k)(this, xH), !1), tS. … [truncated]
+           super(Jk, "PBRSubSurface", 130, new aF, xk), this._isRefractionEnabled = !1, Fk.set(this, (0, Sk.n)(this, TF, !1)), this._isTranslucencyEnabled = ((0, Sk.n)(this, iF), !1), Ik.set(this, (0, Sk.n)(this, yF, !1)), this._isDispersionEnabled = ((0, Sk.n)(this, lF), !1), Xk. … [truncated]
```

#### 156. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2252-L2255` → after: `L2252-L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2252-L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2252-L2255) · [Before (L2252-L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2252-L2255)

```diff
-             if (this._thicknessTexture && lS.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
-             if (this._refractionIntensityTexture && lS.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
-             if (this._translucencyColorTexture && lS.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
-             if (this._translucencyIntensityTexture && lS.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
+             if (this._thicknessTexture && rk.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
+             if (this._refractionIntensityTexture && rk.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
+             if (this._translucencyColorTexture && rk.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
+             if (this._translucencyIntensityTexture && rk.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
```

#### 157. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2257)

```diff
-             if (SS && lS.e.RefractionTextureEnabled && !SS.isReadyOrNotBlocking()) return !1
+             if (kk && rk.d.RefractionTextureEnabled && !kk.isReadyOrNotBlocking()) return !1
```

#### 158. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2264` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2264) · [Before (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2264)

```diff
-             if (SS.SUBSURFACE = !0, SS.SS_DISPERSION = this._isDispersionEnabled, SS.SS_TRANSLUCENCY = this._isTranslucencyEnabled, SS.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, SS.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, SS.SS_SCATTERING = this._isScatteringEnab … [truncated]
+             if (kk.SUBSURFACE = !0, kk.SS_DISPERSION = this._isDispersionEnabled, kk.SS_TRANSLUCENCY = this._isTranslucencyEnabled, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, kk.SS_SCATTERING = this._isScatteringEnab … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2266)

```diff
-               gS && lS.e.RefractionTextureEnabled && (SS.SS_REFRACTION = !0, SS.SS_REFRACTIONMAP_3D = gS.isCube, SS.SS_GAMMAREFRACTION = gS.gammaSpace, SS.SS_RGBDREFRACTION = gS.isRGBD, SS.SS_LINEARSPECULARREFRACTION = gS.linearSpecularLOD, SS.SS_REFRACTIONMAP_OPPOSITEZ = this._s … [truncated]
+               Ik && rk.d.RefractionTextureEnabled && (kk.SS_REFRACTION = !0, kk.SS_REFRACTIONMAP_3D = Ik.isCube, kk.SS_GAMMAREFRACTION = Ik.gammaSpace, kk.SS_RGBDREFRACTION = Ik.isRGBD, kk.SS_LINEARSPECULARREFRACTION = Ik.linearSpecularLOD, kk.SS_REFRACTIONMAP_OPPOSITEZ = this._s … [truncated]
```

#### 160. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2275-L2276` → after: `L2275-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2275-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2275-L2276) · [Before (L2275-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2275-L2276)

```diff
-               tS.getRenderingMesh().getWorldMatrix().decompose(WS.l.VK[0]);
-               const HS = Math.max(Math.abs(WS.l.VK[0].x), Math.abs(WS.l.VK[0].y), Math.abs(WS.l.VK[0].z));
+               Xk.getRenderingMesh().getWorldMatrix().decompose(Nk.l.Ge[0]);
+               const Fk = Math.max(Math.abs(Nk.l.Ge[0].x), Math.abs(Nk.l.Ge[0].y), Math.abs(Nk.l.Ge[0].z));
```

#### 161. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2288-L2289` → after: `L2288-L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2288-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2288-L2289) · [Before (L2288-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2288-L2289)

```diff
-             if (this._thicknessTexture && lS.e.ThicknessTextureEnabled && (SS.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, eS.y)(this._thicknessTexture, SS, "thickness")), this._refractionIntensityTexture && lS.e.Refr … [truncated]
-               SS.J7("refractionMatrix", qS.getRefractionTextureMatrix());
+             if (this._thicknessTexture && rk.d.ThicknessTextureEnabled && (kk.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Mk.v)(this._thicknessTexture, kk, "thickness")), this._refractionIntensityTexture && rk.d.Refr … [truncated]
+               kk.I9("refractionMatrix", ak.getRefractionTextureMatrix());
```

#### 162. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2301` → after: `L2301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2301) · [Before (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2301)

```diff
-           HS.texturesEnabled && (this._thicknessTexture && lS.e.ThicknessTextureEnabled && SS.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && lS.e.RefractionIntensityTextureEnabled && bS.SS_REFRACTIONINTENSITY_TEXTURE && SS.setTexture(" … [truncated]
+           Fk.texturesEnabled && (this._thicknessTexture && rk.d.ThicknessTextureEnabled && kk.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && rk.d.RefractionIntensityTextureEnabled && Tk.SS_REFRACTIONINTENSITY_TEXTURE && kk.setTexture(" … [truncated]
```

#### 163. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2310)

```diff
-           lS.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && SS.push(this._refractionTexture)
+           rk.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && kk.push(this._refractionTexture)
```

#### 164. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2316` → after: `L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/230.js#L2316) · [Before (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/230.js#L2316)

```diff
-           return !!(lS.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
+           return !!(rk.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
```
