# Changed — Bundle Modifications Report (Part 049 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `49 / 104` (**374** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 048](part-048.md) · [Part 050 →](part-050.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/85.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/85.js` (2152 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20)

#### 1877. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20870-L20876` → after: `L22212-L22226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22212-L22226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22212-L22226) · [Before (L20870-L20876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20870-L20876)

```diff
-                 function fk(kk, ek, ik) {
-                   return function(kk, ek) {
-                     var ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk = ek.length;
-                     for (ik = Array(), Dk = Array(Math.ceil(kk.length / ne[18])), bk = ne[0]; bk < Dk.length; bk++) Dk[bk] = kk.charCodeAt(bk * ne[18]) << ne[2] | kk.charCodeAt(bk * ne[18] + ne[1]);
-                     for (; Dk.length > ne[0];) {
-                       for (we(mk = Array(), Pk = ne[0]), bk = ne[0]; bk < Dk.length; bk++) we(Pk = (Pk << ne[21]) + Dk[bk], rk = Math.floor(Pk / Mk), Pk -= rk * Mk), (mk.length > ne[0] || rk > ne[0]) && (mk[mk.length] = rk);
-                       we(ik[ik.length] = Pk, Dk = mk)
+               function oC(CC) {
+                 if (CC >= Nz[29] && CC <= 57343) {
+                   function zC(CC) {
+                     var zC, ZC, QC, wC, bC, nC, fC, oC = 'DuW;+kv}JPm3$`K(wnzQxY[yE6d^8R.F"rLN=UcZpSgjCOTXG2!,bBIf5*:At9%&M?Vh@oi{sa/Hqe|70>_1)~]<4#l';
+                     for (Sz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = Nz[0], bC = Nz[0], nC = -Nz[1]), fC = Nz[0]; fC < ZC; fC++) {
+                       var qC = oC.indexOf(zC[fC]);
+                       if (qC !== -Nz[1])
+                         if (nC < Nz[0]) nC = qC;
+                         else {
+                           Sz(nC += qC * Nz[14], wC |= nC << bC, bC += (nC & Nz[15]) > Nz[16] ? Nz[17] : Nz[18]);
+                           do {
+                             Sz(QC.push(wC & Nz[3]), wC >>= Nz[2], bC -= Nz[2])
+                           } while (bC > Nz[9]);
+                           nC = -Nz[1]
+                         }
```

#### 1878. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20878-L20894` → after: `L22228-L22229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22228-L22229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22228-L22229) · [Before (L20878-L20894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20878-L20894)

```diff
-                     for (fk = "", bk = ik.length - ne[1]; bk >= ne[0]; bk--) fk += ek.charAt(ik[bk]);
-                     for (Sk = Math.ceil(kk.length * ne[2] / (Math.log(ek.length) / Math.log(ne[18]))), bk = fk.length; bk < Sk; bk++) fk = ek[ne[0]] + fk;
-                     return fk
-                   }(Sk(Pk(kk), Pk(ek)), ik)
-                 }
- 
-                 function Sk(kk, ek) {
-                   var ik, Dk, fk = mk(kk);
-                   fk.length > ne[21] && (fk = yk(fk, kk.length * ne[2]));
-                   var Sk = Array(ne[21]),
-                     bk = Array(ne[21]);
-                   for (ik = ne[0]; ik < ne[21]; ik++) we(Sk[ik] = 909522486 ^ fk[ik], bk[ik] = 1549556828 ^ fk[ik]);
-                   return Dk = yk(Sk.concat(mk(ek)), ne[31] + ek.length * ne[2]), Mk(yk(bk.concat(Dk), ne[31] + 256))
-                 }
- 
-                 function bk(kk) {
- ... (1 more removed lines; see GitHub link above)
+                     return nC > -Nz[1] && QC.push((wC | nC << bC) & Nz[3]), Mz(QC)
+                   }
```

#### 1879. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20897-L20912` → after: `L22232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22232) · [Before (L20897-L20912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20897-L20912)

```diff
-                     return typeof Ke[kk] === ne[5] ? Ke[kk] = function(kk) {
-                       var ek, ik, Dk, fk, Sk, bk, rk;
-                       for (we(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = ne[0], Sk = ne[0], bk = -ne[1]), rk = ne[0]; rk < ik; rk++) {
-                         var Pk = 'uEfCU.rVdge#D{_954`Q;,}ox+RH&]*~TyjmA8vb=L|MK@W6OnB!%:FatG3Xksc/zP(S"IN[^<?p>J20iwhY1Z)lq$7'.indexOf(ek[rk]);
-                         if (Pk !== -ne[1])
-                           if (bk < ne[0]) bk = Pk;
-                           else {
-                             we(bk += Pk * ne[12], fk |= bk << Sk, Sk += (bk & ne[13]) > ne[14] ? ne[15] : ne[16]);
-                             do {
-                               we(Dk.push(fk & ne[3]), fk >>= ne[2], Sk -= ne[2])
-                             } while (Sk > ne[9]);
-                             bk = -ne[1]
-                           }
-                       }
-                       return bk > -ne[1] && Dk.push((fk | bk << Sk) & ne[3]), Ue(Dk)
-                     }(xe[kk]) : Ke[kk]
+                     return typeof Fz[CC] === Nz[5] ? Fz[CC] = zC(Wz[CC]) : Fz[CC]
```

#### 1880. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20914-L20915` → after: `L22234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22234) · [Before (L20914-L20915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20914-L20915)

```diff
-                   for (we(ek = ik ? bk(ne[32]) + bk(111) + bk(112) : bk(ne[32]) + bk(113) + bk(114), Dk = "", fk = void 0), Sk = ne[0]; Sk < kk.length; Sk++) we(fk = kk.charCodeAt(Sk), Dk += ek.charAt(fk >>> ne[22] & ne[26]) + ek.charAt(fk & ne[26]));
-                   return Dk
+                   throw Error(ZC(89) + ZC(90) + ZC(Nz[14]) + CC.toString(Nz[25]).toUpperCase() + (ZC(92) + ZC(93) + ZC(94) + "e"))
```

#### 1881. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20918-L20919` → after: `L22238-L22240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22238-L22240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22238-L22240) · [Before (L20918-L20919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20918-L20919)

```diff
-                 function rk(ek) {
-                   var ik, Dk, fk, Sk;
+               function qC(CC, zC) {
+                 return wC(CC >> zC & Nz[6] | Nz[31])
+               }
```

#### 1882. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20921-L20944` → after: `L22242-L22245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22242-L22245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22242-L22245) · [Before (L20921-L20944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20921-L20944)

```diff
-                   function bk(kk) {
-                     return typeof Ke[kk] === ne[5] ? Ke[kk] = function(kk) {
-                       var ek, ik, Dk, fk, Sk, bk, rk;
-                       for (we(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = ne[0], Sk = ne[0], bk = -ne[1]), rk = ne[0]; rk < ik; rk++) {
-                         var Pk = ';][w:xFEUgO7Jv{HKZ0N@%S,!Dy5c^"=ChqG3Q8i<~orXpMbBPk+s26*1mt`/A_R>#jVf})IYTaL?&e4z|u.dnW9l($'.indexOf(ek[rk]);
-                         if (Pk !== -ne[1])
-                           if (bk < ne[0]) bk = Pk;
-                           else {
-                             we(bk += Pk * ne[12], fk |= bk << Sk, Sk += (bk & ne[13]) > ne[14] ? ne[15] : ne[16]);
-                             do {
-                               we(Dk.push(fk & ne[3]), fk >>= ne[2], Sk -= ne[2])
-                             } while (Sk > ne[9]);
-                             bk = -ne[1]
-                           }
-                       }
-                       return bk > -ne[1] && Dk.push((fk | bk << Sk) & ne[3]), Ue(Dk)
- ... (8 more removed lines; see GitHub link above)
+               function FC(CC) {
+                 var zC;
+                 return (4294967168 & CC) == Nz[0] ? wC(CC) : (zC = "", (4294965248 & CC) == Nz[0] ? zC = wC(CC >> Nz[7] & Nz[32] | Nz[35]) : (4294901760 & CC) == Nz[0] ? Sz(oC(CC), zC = wC(CC >> Nz[10] & Nz[33] | Nz[36]), zC += qC(CC, Nz[7])) : (4292870144 & CC) == Nz[0] && Sz(zC … [truncated]
+               }
```

#### 1883. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20946-L20950` → after: `L22247-L22251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22247-L22251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22247-L22251) · [Before (L20946-L20950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20946-L20950)

```diff
-                 function Pk(kk) {
-                   var ek, ik, Dk, fk = "";
-                   for (ek = -ne[1]; ++ek < kk.length;) we(ik = kk.charCodeAt(ek), Dk = ek + ne[1] < kk.length ? kk.charCodeAt(ek + ne[1]) : ne[0]), 55296 <= ik && ik <= 56319 && 56320 <= Dk && Dk <= 57343 && we(ik = 65536 + ((ik & ne[33]) << ne[27]) + (Dk & ne[33]), ek++), ik <=  … [truncated]
-                   return fk
-                 }
+               function WC(CC) {
+                 var zC, ZC, QC, wC, nC = bC(CC);
+                 for (Sz(zC = nC.length, ZC = -Nz[1], QC = void 0, wC = ""); ++ZC < zC;) Sz(QC = nC[ZC], wC += FC(QC));
+                 return wC
+               }
```

#### 1884. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20952-L20957` → after: `L22253-L22254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22253-L22254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22253-L22254) · [Before (L20952-L20957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20952-L20957)

```diff
-                 function mk(kk) {
-                   var ek, ik = Array(kk.length >> ne[18]);
-                   for (ek = ne[0]; ek < ik.length; ek++) ik[ek] = ne[0];
-                   for (ek = ne[0]; ek < kk.length * ne[2]; ek += ne[2]) ik[ek >> ne[28]] |= (kk.charCodeAt(ek / ne[2]) & ne[3]) << ne[39] - ek % ne[38];
-                   return ik
-                 }
+               function NC() {
+                 var CC;
```

#### 1885. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20960-L20978` → after: `L22257-L22270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22257-L22270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22257-L22270) · [Before (L20960-L20978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20960-L20978)

```diff
-                   var ek, ik = "";
-                   for (ek = ne[0]; ek < kk.length * ne[38]; ek += ne[2]) ik += String.fromCharCode(kk[ek >> ne[28]] >>> ne[39] - ek % ne[38] & ne[3]);
-                   return ik
-                 }
- 
-                 function Kk(kk, ek) {
-                   return kk >>> ek | kk << ne[38] - ek
-                 }
- 
-                 function xk(kk, ek) {
-                   return kk >>> ek
-                 }
- 
-                 function nk(kk, ek, ik) {
-                   return kk & ek ^ ~kk & ik
-                 }
- ... (3 more removed lines; see GitHub link above)
+                   var zC, ZC, QC, wC, bC, nC, fC, oC = 'AvKrf.,x5tB}oQ>4&[EPu(dYlZne2@Tq6pg{3JVOkSi"$haD]^/c;yM#8jLH!`GIWCF=1NbmU+~<|RXw)*z?_07%9:s';
+                   for (Sz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = Nz[0], bC = Nz[0], nC = -Nz[1]), fC = Nz[0]; fC < ZC; fC++) {
+                     var qC = oC.indexOf(zC[fC]);
+                     if (qC !== -Nz[1])
+                       if (nC < Nz[0]) nC = qC;
+                       else {
+                         Sz(nC += qC * Nz[14], wC |= nC << bC, bC += (nC & Nz[15]) > Nz[16] ? Nz[17] : Nz[18]);
+                         do {
+                           Sz(QC.push(wC & Nz[3]), wC >>= Nz[2], bC -= Nz[2])
+                         } while (bC > Nz[9]);
+                         nC = -Nz[1]
+                       }
+                   }
+                   return nC > -Nz[1] && QC.push((wC | nC << bC) & Nz[3]), Mz(QC)
```

#### 1886. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20982` → after: `L22274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22274) · [Before (L20982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20982)

```diff
-                   return Kk(kk, ne[18]) ^ Kk(kk, ne[15]) ^ Kk(kk, 22)
+                   return typeof Fz[CC] === Nz[5] ? Fz[CC] = wC(Wz[CC]) : Fz[CC]
```

#### 1887. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20985-L20986` → after: `L22294-L22297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22294-L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22294-L22297) · [Before (L20985-L20986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20985-L20986)

```diff
-                 function wk(kk) {
-                   return Kk(kk, ne[7]) ^ Kk(kk, ne[29]) ^ Kk(kk, 25)
+                   function fC(CC) {
+                     return typeof Fz[CC] === Nz[5] ? Fz[CC] = nC(Wz[CC]) : Fz[CC]
+                   }
+                   throw Error(fC(95))
```

#### 1888. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20989-L20991` → after: `L22303-L22326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22303-L22326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22303-L22326) · [Before (L20989-L20991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20989-L20991)

```diff
-                 function lk(kk) {
-                   return Kk(kk, ne[9]) ^ Kk(kk, ne[37]) ^ xk(kk, ne[17])
-                 }
+               function MC() {
+                 var CC, wC, bC, nC, qC;
+                 if (Sz(wC = void 0, bC = void 0, nC = void 0, qC = void 0), QC > ZC) throw Error(fC(97));
+                 if (QC == ZC) return Nz[24];
+                 if (Sz(CC = zC[QC] & Nz[3], QC++), (CC & Nz[31]) == Nz[0]) return CC;
+                 if ((CC & Nz[36]) == Nz[35]) {
+                   if (Sz(wC = NC(), qC = (CC & Nz[32]) << Nz[7] | wC), qC >= Nz[31]) return qC;
+                   {
+                     function FC(CC) {
+                       var zC, ZC, QC, wC, bC, nC, fC, oC = '2,~#yN@5&)^MDGtxS{W$?f;A:F6+nl1BhYi"|mTRw/j_Cv8oq[Ip.7LuX`0EbQ9ZH*rJK!4cgP(kz%UO>d]a<=3}sVe';
+                       for (Sz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = Nz[0], bC = Nz[0], nC = -Nz[1]), fC = Nz[0]; fC < ZC; fC++) {
+                         var qC = oC.indexOf(zC[fC]);
+                         if (qC !== -Nz[1])
+                           if (nC < Nz[0]) nC = qC;
+                           else {
+                             Sz(nC += qC * Nz[14], wC |= nC << bC, bC += (nC & Nz[15]) > Nz[16] ? Nz[17] : Nz[18]);
+ ... (8 more added lines; see GitHub link above)
```

#### 1889. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20993-L20994` → after: `L22328-L22332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22328-L22332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22328-L22332) · [Before (L20993-L20994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20993-L20994)

```diff
-                 function pk(kk) {
-                   return Kk(kk, 17) ^ Kk(kk, ne[40]) ^ xk(kk, ne[27])
+                     function WC(CC) {
+                       return typeof Fz[CC] === Nz[5] ? Fz[CC] = FC(Wz[CC]) : Fz[CC]
+                     }
+                     throw Error(WC(98))
+                   }
```

#### 1890. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L20997-L21001` → after: `L22354-L22357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22354-L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22354-L22357) · [Before (L20997-L21001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L20997-L21001)

```diff
-                 function yk(kk, ik) {
-                   var Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, yk, Lk, Ck, Ak = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
-                   for (Dk = new Array(ne[41]), we(kk[ik >> ne[28]] |= ne[36] << ne[39] - ik % ne[38], kk[(ik + ne[41] >> ne[30] << ne[22]) + ne[26]] = ik), xk = ne[0]; xk < kk.length; xk += ne[21]) {
-                     for (we(fk = Ak[ne[0]], Sk = Ak[ne[1]], bk = Ak[ne[18]], rk = Ak[ne[17]], Pk = Ak[ne[22]], mk = Ak[ne[28]], Mk = Ak[ne[7]], Kk = Ak[ne[9]]), yk = ne[0]; yk < ne[41]; yk++) we(yk < ne[21] ? Dk[yk] = kk[yk + xk] : Dk[yk] = Yk(Yk(Yk(pk(Dk[yk - ne[18]]), Dk[yk - n … [truncated]
-                     we(Ak[ne[0]] = Yk(fk, Ak[ne[0]]), Ak[ne[1]] = Yk(Sk, Ak[ne[1]]), Ak[ne[18]] = Yk(bk, Ak[ne[18]]), Ak[ne[17]] = Yk(rk, Ak[ne[17]]), Ak[ne[22]] = Yk(Pk, Ak[ne[22]]), Ak[ne[28]] = Yk(mk, Ak[ne[28]]), Ak[ne[7]] = Yk(Mk, Ak[ne[7]]), Ak[ne[9]] = Yk(Kk, Ak[ne[9]]))
+                     function gC(CC) {
+                       return typeof Fz[CC] === Nz[5] ? Fz[CC] = MC(Wz[CC]) : Fz[CC]
+                     }
+                     throw Error(gC(99))
```

#### 1891. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21006-L21022` → after: `L22364-L22427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22364-L22427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22364-L22427) · [Before (L21006-L21022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21006-L21022)

```diff
-                 function Yk(kk, ek) {
-                   var ik = (kk & ne[42]) + (ek & ne[42]);
-                   return (kk >> ne[21]) + (ek >> ne[21]) + (ik >> ne[21]) << ne[21] | ik & ne[42]
-                 }
-                 return kk = "", ek = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604 … [truncated]
-                   hex: function(kk) {
-                     return bk(function(kk) {
-                       return Mk(yk(mk(kk), kk.length * ne[2]))
-                     }(Pk(kk)))
-                   },
-                   b64: Dk,
-                   any: fk,
-                   hex_hmac: function(kk, ek) {
-                     return bk(Sk(Pk(kk), Pk(ek)))
-                   },
-                   b64_hmac: Dk,
- ... (1 more removed lines; see GitHub link above)
+               function gC(CC) {
+                 var wC, fC;
+                 for (Sz(zC = bC(CC), ZC = zC.length, QC = Nz[0], wC = [], fC = void 0);
+                   (fC = MC()) !== Nz[24];) wC.push(fC);
+                 return nC(wC)
+               }
+               Sz(zC = void 0, ZC = void 0, QC = void 0), Sz(CC.version = fC(101), CC.encode = WC, CC.decode = gC)
+             }(typeof exports === zC(102) + zC(103) ? this.utf8 = {} : exports)
+           }();
+           const oC = new DataView(ZC[fC(Nz[42])], ZC[fC(105) + fC(106)], qz),
+             qC = new Uint32Array(zC);
+           Sz(qC[fC(Nz[38])](QC), qC[fC(Nz[38])](CC, Nz[39]), qC[Nz[17]] = oC[fC(Nz[40]) + fC(Nz[41])](Nz[0], Nz[19]), qC[Nz[18]] = oC[fC(Nz[40]) + fC(Nz[41])](Nz[39], Nz[19]), qC[Nz[33]] = oC[fC(Nz[40]) + fC(Nz[41])](Nz[2], Nz[19]));
+           const FC = new Uint32Array(zC),
+             WC = new Uint8Array(FC[fC(Nz[42])]);
+           for (let NC = Nz[0], MC = wC; NC < nC[fC(110)]; NC += zC * Nz[39], MC++) {
+             function gC(CC) {
+ ... (48 more added lines; see GitHub link above)
```

#### 1892. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21024-L21025` → after: `L22429-L22435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22429-L22435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22429-L22435) · [Before (L21024-L21025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21024-L21025)

```diff
-               }();
-               console.log(kk)
+                 return nC > -Nz[1] && QC.push((wC | nC << bC) & Nz[3]), Mz(QC)
+               }
+ 
+               function JC(CC) {
+                 return typeof Fz[CC] === Nz[5] ? Fz[CC] = xC(Wz[CC]) : Fz[CC]
+               }
+               JC(115), nC[NC + AC] ^= WC[AC]
```

#### 1893. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21032-L21034` → after: `L22439-L22440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22439-L22440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22439-L22440) · [Before (L21032-L21034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21032-L21034)

```diff
-       }
-     })();
-     const ye = [2, 0, 1, "h", "c", "a", 9, 194, "e", 6, 27, 8, 255, "length", "b", 141, "undefined", void 0, 4, 244, 173, 63, "fromCodePoint", 7, 12, "push", 142, 245, "g", 149, 22, 5, 98, "i", 178, 91, 96, 8191, 88, 13, 14, 75, 56, 181, 30, 243, 127, 128, 87, "d", 119, 3, 143, " … [truncated]
+       })();
+     const Gz = [2, 0, 1, "h", 3, "a", 202, 7, 5, 6, 55, 8, 255, "length", "c", 247, 4, "undefined", void 0, "d", 17, 193, 58, 63, "fromCodePoint", 12, "push", 91, 8191, 88, 13, 14, 9, 214, 19, 44, "g", "e", "b", 51, 197, 79, 118, "i", 40, 122, 131, 152, 121, 127];
```

#### 1894. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21036-L21037` → after: `L22442-L22443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22442-L22443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22442-L22443) · [Before (L21036-L21037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21036-L21037)

```diff
-     function Ye(kk) {
-       return typeof Di !== ye[16] && Di ? (new Di).decode(new fi(kk)) : typeof Si !== ye[16] && Si ? Si.from(kk).toString("utf-8") : Pi(kk)
+     function Rz(...CC) {
+       return CC[Gz[13]] = Gz[2], typeof ZZ !== Gz[17] && ZZ ? (new ZZ).decode(new QZ(CC[Gz[1]])) : typeof wZ !== Gz[17] && wZ ? wZ.from(CC[Gz[1]]).toString("utf-8") : fZ(CC[Gz[1]])
```

#### 1895. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21045-L21075` → after: `L22451-L22484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22451-L22484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22451-L22484) · [Before (L21045-L21075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21045-L21075)

```diff
-     Ce(le = {}, pe = ["E2@SPC9}iFNapkOhS`},l^}bJ_R)q", "hYJD?.s,WB@RgH", "r{~2w~[_A|7d3U]f~&:Qj>]B!@*h@PK[YXXDq@fkgRUvk~rF]9kwuy+W/E?", "|`.rt@!kW_ctJb", 'D`SQl4Ozk3sZ<ydvF9e1Y{]z*FjS*J>"]@8PmVyb', "Jf{5/V%)!_vPb:BkbWGsSAB^XaX4Wugf$DN6$A!yH@*2zpl<nuV53*Gq", "/ZSMxc{UKUZ)$]r", 'Zu … [truncated]
-         Ce(kk[ye[13]] = ye[1], kk[ye[5]] = [function() {
-           return globalThis
-         }, function() {
-           return global
-         }, function() {
-           return window
-         }, function() {
-           return new Function("return this")()
-         }], kk[ye[14]] = ye[17], kk[ye[0]] = []);
-         try {
-           Ce(kk[ye[14]] = Object, kk[ye[0]][ye[25]]("".__proto__.constructor.name))
-         } catch (pe) {}
-         kk: for (kk[-ye[15]] = ye[1]; kk[-ye[15]] < kk[ye[5]][ye[13]]; kk[-ye[15]]++) try {
-           for (kk[ye[14]] = kk[ye[5]][kk[-ye[15]]](), kk[ye[8]] = ye[1]; kk[ye[8]] < kk[ye[0]][ye[13]]; kk[ye[8]]++)
-             if (typeof kk[ye[14]][kk[ye[0]][kk[ye[8]]]] === ye[16]) continue kk;
- ... (15 more removed lines; see GitHub link above)
+     xz(pz = {}, Pz = ['Ke,1=XM8Tomudg):zsUuY$?OM*wYoSJ^fb[:<t/o%M"', "b,yPgj8~U]KNm9``x#9A/5PPPo?bPb.DMR%|v{8/G(~v:7w/:!yv!lnOQ", "7!pk*6&?IRHIdcP:6Ml]`?/.hZ:Y{^RovMlRRgS?O(1N.cr#U6zk9[%?T", "!]^J0[5k1sbl]=v!XC;Q3j|(vZTL,7_O|#?RY$b.eon(4xS:$~Pntbt5=3Xm.", "G~2]liM5yb3:9SRoS+DLFtU … [truncated]
+       xz(CC[Gz[13]] = Gz[1], CC[-Gz[15]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], CC[Gz[2]] = Gz[18], CC[Gz[14]] = []);
+       try {
+         xz(CC[Gz[2]] = Object, CC[Gz[14]][Gz[26]]("".__proto__.constructor.name))
+       } catch (Pz) {}
+       CC: for (CC[Gz[4]] = Gz[1]; CC[Gz[4]] < CC[-Gz[15]][Gz[13]]; CC[Gz[4]]++) try {
+         for (CC[Gz[2]] = CC[-Gz[15]][CC[Gz[4]]](), CC[Gz[16]] = Gz[1]; CC[Gz[16]] < CC[Gz[14]][Gz[13]]; CC[Gz[16]]++)
+           if (typeof CC[Gz[2]][CC[Gz[14]][CC[Gz[16]]]] === Gz[17]) continue CC;
+ ... (18 more added lines; see GitHub link above)
```

#### 1896. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21077` → after: `L22486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22486) · [Before (L21077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21077)

```diff
-                 Ce(kk[ye[7]] += kk[ye[6]] * ye[35], kk[ye[8]] |= kk[ye[7]] << kk[ye[9]], kk[ye[9]] += (kk[ye[7]] & ye[37]) > ye[38] ? ye[39] : ye[40]);
+                 xz(nC += oC * Gz[27], wC |= nC << bC, bC += (nC & Gz[28]) > Gz[29] ? Gz[30] : Gz[31]);
```

#### 1897. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21079-L21082` → after: `L22488-L22493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22488-L22493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22488-L22493) · [Before (L21079-L21082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21079-L21082)

```diff
-                   Ce(kk[ye[10]].push(kk[ye[8]] & ye[12]), kk[ye[8]] >>= ye[11], kk[ye[9]] -= ye[11])
-                 } while (kk[ye[9]] > ye[23]);
-                 kk[ye[7]] = -ye[2]
-               } return kk[ye[7]] > -ye[2] && kk[ye[10]].push((kk[ye[8]] | kk[ye[7]] << kk[ye[9]]) & ye[12]), Ye(kk[ye[10]])
+                   xz(QC.push(wC & Gz[12]), wC >>= Gz[11], bC -= Gz[11])
+                 } while (bC > Gz[7]);
+                 nC = -Gz[2]
+               }
+           }
+           return nC > -Gz[2] && QC.push((wC | nC << bC) & Gz[12]), Rz(QC)
```

#### 1898. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21084-L21088` → after: `L22495-L22514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22495-L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22495-L22514) · [Before (L21084-L21088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21084-L21088)

```diff
-       }(ye[86]) + ye[53] in Le && function(...kk) {
-         Ce(kk[ye[13]] = ye[1], kk[ye[32]] = function(...kk) {
-           for (Ce(kk[ye[13]] = ye[2], kk[ye[5]] = ye[1], kk[ye[14]] = {}, kk[-ye[29]] = ye[1], kk[-ye[30]] = ye[1], kk[ye[31]] = ye[1], kk[ye[9]] = kk[ye[1]].length), kk[ye[28]] = ye[1]; kk[ye[28]] < kk[ye[9]]; kk[ye[28]]++) {
-             for (Ce(kk[ye[14]] = {}, kk[-ye[29]] = ye[1], kk[-ye[30]] = ye[2]), kk[ye[3]] = kk[ye[28]] + ye[2]; kk[ye[3]] < kk[ye[9]]; kk[ye[3]]++) kk[ye[1]][kk[ye[28]]].x !== kk[ye[1]][kk[ye[3]]].x || kk[ye[1]][kk[ye[28]]].y !== kk[ye[1]][kk[ye[3]]].y ? (kk[ye[1]][kk[ye[28]]].y  … [truncated]
-             Ce(kk[-ye[29]] += kk[-ye[30]], kk[ye[5]] = Math.max(kk[ye[5]], kk[-ye[29]]))
+       } [][Gz[13]] = Gz[1];
+       const zC = Gz[32],
+         ZC = CC(75) + CC(76) + CC(77),
+         QC = {
+           [Gz[32]]: CC(78) + CC(Gz[41]) + CC(80) + CC(81) + CC(82) + CC(83) + CC(84) + "1"
+         },
+         wC = CC => {
+           function zC(CC) {
+             return typeof pz[CC] === Gz[17] ? pz[CC] = function(...CC) {
+               for (xz(CC[Gz[13]] = Gz[2], CC[Gz[35]] = 'iusf;)ZbtL}pWSPq>Xje8R.HvY*owgrlJk2G39,KFMQ+EDC</7hm:%I4Bc?V=ndaNO&x_AU`~@([601#$y^!z"5{|]T', CC[Gz[0]] = "" + (CC[Gz[1]] || ""), CC[Gz[34]] = CC[Gz[0]].length, CC[Gz[16]] = [], CC[Gz[37]] = Gz[1], CC[Gz[9]] = Gz[1], CC[Gz[3 … [truncated]
+                 if (CC[Gz[32]] = CC[Gz[35]].indexOf(CC[Gz[0]][CC[Gz[33]]]), CC[Gz[32]] !== -Gz[2])
+                   if (CC[Gz[36]] < Gz[1]) CC[Gz[36]] = CC[Gz[32]];
+                   else {
+                     xz(CC[Gz[36]] += CC[Gz[32]] * Gz[27], CC[Gz[37]] |= CC[Gz[36]] << CC[Gz[9]], CC[Gz[9]] += (CC[Gz[36]] & Gz[28]) > Gz[29] ? Gz[30] : Gz[31]);
+                     do {
+                       xz(CC[Gz[16]].push(CC[Gz[37]] & Gz[12]), CC[Gz[37]] >>= Gz[11], CC[Gz[9]] -= Gz[11])
+ ... (4 more added lines; see GitHub link above)
```

#### 1899. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21090-L21129` → after: `L22516-L22517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22516-L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22516-L22517) · [Before (L21090-L21129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21090-L21129)

```diff
-           return kk[ye[5]]
-         }, console.log(kk[ye[32]]))
-       }(), (() => {
-         function kk(...kk) {
-           return kk[ye[13]] = ye[2], typeof le[kk[ye[1]]] === ye[16] ? le[kk[ye[1]]] = function(...kk) {
-             for (Ce(kk[ye[13]] = ye[2], kk[ye[5]] = 'ck7mFRaONIwl2=pd~Cj;16KX3zf%Gb"niLy?[UD#(><M`)^]&*A!|HT,+Z80:Y9gPQo_hWe.xt}Br4/{EqV$JuSs5@v', kk[ye[0]] = "" + (kk[ye[1]] || ""), kk[-ye[21]] = kk[ye[0]].length, kk[ye[18]] = [], kk[ye[31]] = ye[1], kk[-ye[36]] = ye[1], kk[ye[3 … [truncated]
-               if (kk[ye[33]] = kk[ye[5]].indexOf(kk[ye[0]][kk[ye[11]]]), kk[ye[33]] !== -ye[2])
-                 if (kk[ye[34]] < ye[1]) kk[ye[34]] = kk[ye[33]];
-                 else {
-                   Ce(kk[ye[34]] += kk[ye[33]] * ye[35], kk[ye[31]] |= kk[ye[34]] << kk[-ye[36]], kk[-ye[36]] += (kk[ye[34]] & ye[37]) > ye[38] ? ye[39] : ye[40]);
-                   do {
-                     Ce(kk[ye[18]].push(kk[ye[31]] & ye[12]), kk[ye[31]] >>= ye[11], kk[-ye[36]] -= ye[11])
-                   } while (kk[-ye[36]] > ye[23]);
-                   kk[ye[34]] = -ye[2]
-                 } return kk[ye[34]] > -ye[2] && kk[ye[18]].push((kk[ye[31]] | kk[ye[34]] << kk[-ye[36]]) & ye[12]), Ye(kk[ye[18]])
-           }(pe[kk[ye[1]]]) : le[kk[ye[1]]]
- ... (24 more removed lines; see GitHub link above)
+           zC(85) in Az && function() {
+             var CC, ZC, QC;
```

#### 1900. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21131-L21134` → after: `L22519-L22529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22519-L22529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22519-L22529) · [Before (L21131-L21134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21131-L21134)

```diff
-               function Sk(...kk) {
-                 return kk[ye[13]] = ye[2], typeof le[kk[ye[1]]] === ye[16] ? le[kk[ye[1]]] = fk(pe[kk[ye[1]]]) : le[kk[ye[1]]]
-               }
-               throw new Error(Sk(ye[77]) + Sk(132) + Sk(ye[89]) + ek[ye[1]])
+             function wC(...CC) {
+               for (xz(CC[Gz[13]] = Gz[2], CC[Gz[2]] = 'O^EbXDaCnsdmTLZBJWFjQkKIMpYhqlRtNfciVHUeArgGP;oSy[,/:>"?}])*1w.8`36_z#~|%5${7=xv&49(!u@2<0+', CC[Gz[38]] = "" + (CC[Gz[1]] || ""), CC[Gz[4]] = CC[Gz[38]].length, CC[Gz[16]] = [], CC[Gz[8]] = Gz[1], CC[-Gz[40]] = Gz[1], CC[Gz[ … [truncated]
+                 if (CC[Gz[32]] = CC[Gz[2]].indexOf(CC[Gz[38]][CC[-Gz[39]]]), CC[Gz[32]] !== -Gz[2])
+                   if (CC[Gz[7]] < Gz[1]) CC[Gz[7]] = CC[Gz[32]];
+                   else {
+                     xz(CC[Gz[7]] += CC[Gz[32]] * Gz[27], CC[Gz[8]] |= CC[Gz[7]] << CC[-Gz[40]], CC[-Gz[40]] += (CC[Gz[7]] & Gz[28]) > Gz[29] ? Gz[30] : Gz[31]);
+                     do {
+                       xz(CC[Gz[16]].push(CC[Gz[8]] & Gz[12]), CC[Gz[8]] >>= Gz[11], CC[-Gz[40]] -= Gz[11])
+                     } while (CC[-Gz[40]] > Gz[7]);
+                     CC[Gz[7]] = -Gz[2]
+                   } return CC[Gz[7]] > -Gz[2] && CC[Gz[16]].push((CC[Gz[8]] | CC[Gz[7]] << CC[-Gz[40]]) & Gz[12]), Rz(CC[Gz[16]])
```

#### 1901. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21136-L21140` → after: `L22531-L22539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22531-L22539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22531-L22539) · [Before (L21136-L21140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21136-L21140)

```diff
-             return [ye[1], ye[2], ye[0], ye[51], ye[18], ye[31], ye[9], ye[23]].map((ek => parseInt(ik[kk(134)](ek * ye[11], ek * ye[11] + ye[11]), ye[73])))
-           };
-         Ce(be = kk => kk >= ek, re = (kk, ek) => {
-           function ik(...kk) {
-             return kk[ye[13]] = ye[2], typeof le[kk[ye[1]]] === ye[16] ? le[kk[ye[1]]] = function(kk) {
+ 
+             function bC(...CC) {
+               return CC[Gz[13]] = Gz[2], typeof pz[CC[Gz[1]]] === Gz[17] ? pz[CC[Gz[1]]] = wC(Pz[CC[Gz[1]]]) : pz[CC[Gz[1]]]
+             }
+             xz(CC = zC(86) + bC(87) + bC(Gz[29]) + bC(89), ZC = bC(90) + bC(Gz[27]) + bC(92) + bC(93) + bC(94) + bC(95) + bC(96), QC = bC(97) + bC(98) + bC(99) + bC(100) + bC(101) + bC(102) + bC(103) + ")", CC.match(ZC + QC))
+           }();
+           const ZC = QC[CC];
+           if (!ZC) {
+             function wC(CC) {
```

#### 1902. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21143` → after: `L22542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22542) · [Before (L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21143)

```diff
-                 var Pk = 'h+Ho6K}xd9(=^IMaPUtyAYBs.)Z?<g@QiT$p`7j[>"Rmz_]NGFck83,eJV%L;1!nlWX/|~fO*2S#&uC{Dv4bq:Ew50r'.indexOf(ek[rk]);
+                 var oC = 'Bu$WL+k=ENYw.&03~jp%9)?1aeUO/AQnKZ>C(Dvy|s6}48h;2@5I7t:]b#M{l[`xzX_HVTSr^R,g"<!JcPioFfG*qdm'.indexOf(zC[fC]);
```

#### 1903. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21147` → after: `L22546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22546) · [Before (L21147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21147)

```diff
-                     Ce(bk += Pk * ye[35], fk |= bk << Sk, Sk += (bk & ye[37]) > ye[38] ? ye[39] : ye[40]);
+                     xz(nC += oC * Gz[27], wC |= nC << bC, bC += (nC & Gz[28]) > Gz[29] ? Gz[30] : Gz[31]);
```

#### 1904. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21150` → after: `L22549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22549) · [Before (L21150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21150)

```diff
-                     } while (Sk > ye[23]);
+                     } while (bC > Gz[7]);
```

#### 1905. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21400` → after: `L22557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22557) · [Before (L21400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21400)

```diff
-               return kk[ye[13]] = ye[2], typeof le[kk[ye[1]]] === ye[16] ? le[kk[ye[1]]] = rk(pe[kk[ye[1]]]) : le[kk[ye[1]]]
+               return CC[Gz[13]] = Gz[2], typeof pz[CC[Gz[1]]] === Gz[17] ? pz[CC[Gz[1]]] = wC(Pz[CC[Gz[1]]]) : pz[CC[Gz[1]]]
```

#### 1906. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21402-L21405` → after: `L22559-L22575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22559-L22575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22559-L22575) · [Before (L21402-L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21402-L21405)

```diff
- 
-             function mk() {
-               function kk(kk) {
-                 return kk[ye[2]] * ye[101] + (kk[ye[1]] < ye[1] ? ye[100] | kk[ye[1]] : kk[ye[1]])
+             throw new Error(bC(104) + bC(105) + bC(106) + bC(107) + CC)
+           }
+           return [Gz[1], Gz[2], Gz[0], Gz[4], Gz[16], Gz[8], Gz[9], Gz[7]].map(((...CC) => (CC[Gz[13]] = Gz[2], parseInt(ZC[zC(108)](CC[Gz[1]] * Gz[11], CC[Gz[1]] * Gz[11] + Gz[11]), 16))))
+         };
+       xz(bz = (...CC) => (CC[Gz[13]] = Gz[2], function(...CC) {
+         return CC[Gz[13]] = Gz[2], typeof pz[CC[Gz[1]]] === Gz[17] ? pz[CC[Gz[1]]] = function(CC) {
+           var zC, ZC, QC, wC, bC, nC, fC;
+           for (xz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = Gz[1], bC = Gz[1], nC = -Gz[2]), fC = Gz[1]; fC < ZC; fC++) {
+             var oC = 'ygWeaMIJ`LYk)?d;&>=uD|P54C1[vhp^E_,9#OnjNsZ(HqB7x*~Sc{Tmt8A+"fwz$<@:o%3!X6FQr}bi0]R2./UlVGK'.indexOf(zC[fC]);
+             if (oC !== -Gz[2])
+               if (nC < Gz[1]) nC = oC;
+               else {
+                 xz(nC += oC * Gz[27], wC |= nC << bC, bC += (nC & Gz[28]) > Gz[29] ? Gz[30] : Gz[31]);
+                 do {
+                   xz(QC.push(wC & Gz[12]), wC >>= Gz[11], bC -= Gz[11])
+                 } while (bC > Gz[7]);
+ ... (1 more added lines; see GitHub link above)
```

#### 1907. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21407-L21417` → after: `L22577-L22607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22577-L22607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22577-L22607) · [Before (L21407-L21417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21407-L21417)

```diff
- 
-               function ek(kk) {
-                 switch (((kk & ye[100]) !== ye[1]) * ye[2] + (kk < ye[1]) * ye[0]) {
-                   case ye[1]:
-                     return [kk % ye[100], Math.trunc(kk / ye[101])];
-                   case ye[2]:
-                     return [kk % ye[100] - ye[100], Math.trunc(kk / ye[101]) + ye[2]];
-                   case ye[0]:
-                     return [((kk + ye[100]) % ye[100] + ye[100]) % ye[100], Math.round(kk / ye[101])];
-                   case ye[51]:
-                     return [kk % ye[100], Math.trunc(kk / ye[101])]
+           }
+           return nC > -Gz[2] && QC.push((wC | nC << bC) & Gz[12]), Rz(QC)
+         }(Pz[CC[Gz[1]]]) : pz[CC[Gz[1]]]
+       }(109) in Az && function(...CC) {
+         xz(CC[Gz[13]] = Gz[1], CC[Gz[38]] = function(...CC) {
+           for (xz(CC[Gz[13]] = Gz[2], CC[Gz[5]] = CC[Gz[1]].length, CC[Gz[0]] = [], CC[Gz[14]] = Gz[1], CC[Gz[16]] = Gz[1], CC[Gz[1]].sort(((CC, zC) => CC - zC))), CC[Gz[8]] = Gz[1]; CC[Gz[8]] < CC[Gz[5]]; CC[Gz[8]]++)
+             if (!(CC[Gz[8]] > Gz[1] && CC[Gz[1]][CC[Gz[8]]] === CC[Gz[1]][CC[Gz[8]] - Gz[2]]))
+               for (xz(CC[Gz[14]] = CC[Gz[8]] + Gz[2], CC[Gz[16]] = CC[Gz[5]] - Gz[2]); CC[Gz[14]] < CC[Gz[16]];)
+                 if (CC[Gz[1]][CC[Gz[8]]] + CC[Gz[1]][CC[Gz[14]]] + CC[Gz[1]][CC[Gz[16]]] < Gz[1]) CC[Gz[14]]++;
+                 else if (CC[Gz[1]][CC[Gz[8]]] + CC[Gz[1]][CC[Gz[14]]] + CC[Gz[1]][CC[Gz[16]]] > Gz[1]) CC[Gz[16]]--;
+           else {
+             for (CC[Gz[0]].push([CC[Gz[1]][CC[Gz[8]]], CC[Gz[1]][CC[Gz[14]]], CC[Gz[1]][CC[Gz[16]]]]); CC[Gz[14]] < CC[Gz[16]] && CC[Gz[1]][CC[Gz[14]]] === CC[Gz[1]][CC[Gz[14]] + Gz[2]];) CC[Gz[14]]++;
+             for (; CC[Gz[14]] < CC[Gz[16]] && CC[Gz[1]][CC[Gz[16]]] === CC[Gz[1]][CC[Gz[16]] - Gz[2]];) CC[Gz[16]]--;
+             xz(CC[Gz[14]]++, CC[Gz[16]]--)
+           }
+           return CC[Gz[0]]
+ ... (15 more added lines; see GitHub link above)
```

#### 1908. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21428-L21435` → after: `L22610-L22663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22610-L22663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22610-L22663) · [Before (L21428-L21435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21428-L21435)

```diff
-             throw Pk(ye[91]) in Le && mk(), new Error(ik)
-           }
-           return bk[Dk(169)]
-         })
-       })();
-     var Ae = ik(36557),
-       je = ik(36564),
-       se = ik(36571);
+             return nC > -Gz[2] && QC.push((wC | nC << bC) & Gz[12]), Rz(QC)
+           }(Pz[CC[Gz[1]]]) : pz[CC[Gz[1]]]
+         }
+         CC[Gz[13]] = Gz[0], zC(110) in Az && function(...CC) {
+           xz(CC[Gz[13]] = Gz[1], CC[Gz[5]] = function(...CC) {
+             for (xz(CC[Gz[13]] = Gz[2], CC[Gz[5]] = CC[Gz[1]].length, CC[Gz[41]] = [], CC[Gz[4]] = Gz[1]), CC[Gz[19]] = Gz[1]; CC[Gz[19]] < CC[Gz[5]]; CC[Gz[19]]++) CC[Gz[41]].push(CC[Gz[19]] !== Gz[1] && CC[Gz[1]][CC[Gz[19]]] > CC[Gz[1]][CC[Gz[19]] - Gz[2]] ? CC[Gz[41]][CC[Gz[19 … [truncated]
+             for (CC[Gz[37]] = CC[Gz[5]] - Gz[2]; CC[Gz[37]] >= Gz[1]; CC[Gz[37]]--) CC[Gz[37]] !== CC[Gz[5]] - Gz[2] && CC[Gz[1]][CC[Gz[37]]] > CC[Gz[1]][CC[Gz[37]] + Gz[2]] && (CC[Gz[41]][CC[Gz[37]]] = Math.max(CC[Gz[41]][CC[Gz[37]]], CC[Gz[41]][CC[Gz[37]] + Gz[2]] + Gz[2])), CC … [truncated]
+             return CC[Gz[4]]
+           }, console.log(CC[Gz[5]]))
+         }();
+         const ZC = crypto[zC(111) + zC(112) + zC(113)](new Uint8Array(qz)),
+           QC = wz[Gz[19]][zC(114) + zC(115)](CC[Gz[2]], {
+             [zC(116)]: Gz[2]
+           });
+         oz(wC(CC[Gz[1]]), ZC, Gz[2], QC);
+         const bC = new Uint8Array(qz + QC[zC(117)]);
+ ... (38 more added lines; see GitHub link above)
```

#### 1909. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21438` → after: `L22666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22666) · [Before (L21438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21438)

```diff
-       return Sk.hU.from(Uint8Array.from(kk))
+       return bC.gg.from(Uint8Array.from(CC))
```

#### 1910. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21470` → after: `L22698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22698) · [Before (L21470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21470)

```diff
-       return (0, fk.F)(ik) ? null : Fe(kk, qe(ek, ik))
+       return (0, wC.H)(ZC) ? null : hz(CC, Yz(zC, ZC))
```

#### 1911. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21474` → after: `L22702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22702) · [Before (L21474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21474)

```diff
-       return (0, fk.F)(ek) ? null : Ie(kk, ue(ek))
+       return (0, wC.H)(zC) ? null : dz(CC, Kz(zC))
```

#### 1912. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21524` → after: `L22752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22752) · [Before (L21524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21524)

```diff
-         void 0 !== kk ? Dk[kk] = ik(kk, fk.v) : console.error(`Unknown Partial field index ${fk.i}`)
+         void 0 !== CC ? QC[CC] = ZC(CC, wC.v) : console.error(`Unknown Partial field index ${wC.i}`)
```

#### 1913. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21530-L21531` → after: `L22758-L22759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22758-L22759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22758-L22759) · [Before (L21530-L21531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21530-L21531)

```diff
-       return (0, fk.F)(ek) ? null : "zq" === kk ? function(kk) {
-         return Fe(Uk, We(kk, je.s, ((kk, ek) => ze(Qk[kk], kk, ek))))
+       return (0, wC.H)(zC) ? null : "QE" === CC ? function(CC) {
+         return hz(gC, uz(CC, Iz.y, ((CC, zC) => mz(EC[CC], CC, zC))))
```

#### 1914. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21536-L21537` → after: `L22764-L22765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22764-L22765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22764-L22765) · [Before (L21536-L21537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21536-L21537)

```diff
-       return (0, fk.F)(ek) ? null : "zq" === kk ? function(kk) {
-         return (0, fk.F)(kk) ? null : te(kk, je.s, Qe)
+       return (0, wC.H)(zC) ? null : "QE" === CC ? function(CC) {
+         return (0, wC.H)(CC) ? null : rz(CC, Iz.y, Hz)
```

#### 1915. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21552-L21553` → after: `L22780-L22781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22780-L22781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22780-L22781) · [Before (L21552-L21553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21552-L21553)

```diff
-         const kk = Dk.Ie;
-         Dk.Ie = (0, fk.F)(kk) ? null : ve(kk)
+         const CC = QC.LQ;
+         QC.LQ = (0, wC.H)(CC) ? null : Ez(CC)
```

#### 1916. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21556` → after: `L22784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22784) · [Before (L21556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21556)

```diff
-         Dk.killer = ve(null !== (Sk = Dk.killer) && void 0 !== Sk ? Sk : {}), Dk.victim = ve(null !== (bk = Dk.victim) && void 0 !== bk ? bk : {})
+         QC.killer = Ez(null !== (bC = QC.killer) && void 0 !== bC ? bC : {}), QC.victim = Ez(null !== (nC = QC.victim) && void 0 !== nC ? nC : {})
```

#### 1917. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21573-L21574` → after: `L22801-L22802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22801-L22802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22801-L22802) · [Before (L21573-L21574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21573-L21574)

```diff
-         const kk = Dk.Ie;
-         Dk.Ie = (0, fk.F)(kk) ? null : Ee(kk)
+         const CC = QC.LQ;
+         QC.LQ = (0, wC.H)(CC) ? null : lz(CC)
```

#### 1918. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21577` → after: `L22805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22805) · [Before (L21577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21577)

```diff
-         Dk.killer = Ee(null !== (Sk = Dk.killer) && void 0 !== Sk ? Sk : {}), Dk.victim = Ee(null !== (bk = Dk.victim) && void 0 !== bk ? bk : {})
+         QC.killer = lz(null !== (bC = QC.killer) && void 0 !== bC ? bC : {}), QC.victim = lz(null !== (nC = QC.victim) && void 0 !== nC ? nC : {})
```

#### 1919. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21587` → after: `L22815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22815) · [Before (L21587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21587)

```diff
-       return (0, fk.F)(kk) ? null : {
+       return (0, wC.H)(CC) ? null : {
```

#### 1920. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21589-L21590` → after: `L22817-L22818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22817-L22818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22817-L22818) · [Before (L21589-L21590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21589-L21590)

```diff
-         amount: null !== (ek = kk.amount) && void 0 !== ek ? ek : null,
-         attributes: JSON.stringify(null !== (ik = kk.attributes) && void 0 !== ik ? ik : {})
+         amount: null !== (zC = CC.amount) && void 0 !== zC ? zC : null,
+         attributes: JSON.stringify(null !== (ZC = CC.attributes) && void 0 !== ZC ? ZC : {})
```

#### 1921. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21595` → after: `L22823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22823) · [Before (L21595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21595)

```diff
-       if ((0, fk.F)(kk)) return null;
+       if ((0, wC.H)(CC)) return null;
```

#### 1922. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21605` → after: `L22833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22833) · [Before (L21605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21605)

```diff
-       if ((0, fk.F)(kk)) return null;
+       if ((0, wC.H)(CC)) return null;
```

#### 1923. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21608-L21609` → after: `L22836-L22837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22836-L22837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22836-L22837) · [Before (L21608-L21609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21608-L21609)

```diff
-         entries: We(kk, je.j, ((kk, ek) => {
-           if ((0, fk.F)(ek)) return null;
+         entries: uz(CC, Iz.l, ((CC, zC) => {
+           if ((0, wC.H)(zC)) return null;
```

#### 1924. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21631` → after: `L22859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22859) · [Before (L21631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21631)

```diff
-       if ((0, fk.F)(kk)) return;
+       if ((0, wC.H)(CC)) return;
```

#### 1925. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21633-L21634` → after: `L22861-L22862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22861-L22862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22861-L22862) · [Before (L21633-L21634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21633-L21634)

```diff
-       return te(kk.entries, je.j, ((kk, ik) => {
-         if ((0, fk.F)(ik)) return null;
+       return rz(CC.entries, Iz.l, ((CC, ZC) => {
+         if ((0, wC.H)(ZC)) return null;
```

#### 1926. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21646` → after: `L22874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22874) · [Before (L21646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21646)

```diff
-             for (let ik = 0; ik < fk.l; ik++) ek.push(ik in kk ? kk[ik] : null);
+             for (let ZC = 0; ZC < wC.q; ZC++) zC.push(ZC in CC ? CC[ZC] : null);
```

#### 1927. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21657` → after: `L22885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22885) · [Before (L21657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21657)

```diff
-         items: ae(kk.items, (kk => We(kk, je.n, ((kk, ek) => ze(vk[kk], kk, ek))))),
+         items: cz(CC.items, (CC => uz(CC, Iz.p, ((CC, zC) => mz(lC[CC], CC, zC))))),
```

#### 1928. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21660` → after: `L22888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22888) · [Before (L21660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21660)

```diff
-         playerHud: (0, fk.F)(kk.playerHud) ? null : We(kk.playerHud, je.o, ((kk, ek) => (0, fk.F)(ek) ? null : function(kk, ek) {
+         playerHud: (0, wC.H)(CC.playerHud) ? null : uz(CC.playerHud, Iz.t, ((CC, zC) => (0, wC.H)(zC) ? null : function(CC, zC) {
```

#### 1929. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21665-L21667` → after: `L22893-L22895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22893-L22895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22893-L22895) · [Before (L21665-L21667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21665-L21667)

```diff
-         effects: (0, fk.F)(kk.effects) ? null : (0, Ae.l)(kk.effects),
-         uiElements: We(kk.uiElements, je.u, ((kk, ek) => (0, fk.F)(ek) ? null : JSON.stringify(ek))),
-         environment: We(kk.environment, je.p, ((kk, ek) => ze(Ek[kk], kk, ek))),
+         effects: (0, wC.H)(CC.effects) ? null : (0, Jz.o)(CC.effects),
+         uiElements: uz(CC.uiElements, Iz.A, ((CC, zC) => (0, wC.H)(zC) ? null : JSON.stringify(zC))),
+         environment: uz(CC.environment, Iz.u, ((CC, zC) => mz(XC[CC], CC, zC))),
```

#### 1930. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21678` → after: `L22906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22906) · [Before (L21678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21678)

```diff
-               ik = ek.type ? (0, Dk.B)(ek.type) : null;
+               ZC = zC.type ? (0, QC.r)(zC.type) : null;
```

#### 1931. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21681` → after: `L22909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22909) · [Before (L21681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21681)

```diff
-           items: ae(kk.items, (kk => te(kk, je.n, Qe))),
+           items: cz(CC.items, (CC => rz(CC, Iz.p, Hz))),
```

#### 1932. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21686-L21687` → after: `L22914-L22915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22914-L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22914-L22915) · [Before (L21686-L21687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21686-L21687)

```diff
-           uiElements: te(kk.uiElements, je.u, ((kk, ek) => "string" === typeof ek ? JSON.parse(ek) : ek)),
-           environment: te(kk.environment, je.p, Qe),
+           uiElements: rz(CC.uiElements, Iz.A, ((CC, zC) => "string" === typeof zC ? JSON.parse(zC) : zC)),
+           environment: rz(CC.environment, Iz.u, Hz),
```

#### 1933. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21690` → after: `L22918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22918) · [Before (L21690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21690)

```diff
-             return "RV" === ek.type ? (ek.fromBlockData ??= null, ek.toBlockData ??= null) : "chunkAdded" !== ek.type && "chunkRemoved" !== ek.type || (ek.sharedBlockData ??= []), ek
+             return "TY" === zC.type ? (zC.fromBlockData ??= null, zC.toBlockData ??= null) : "chunkAdded" !== zC.type && "chunkRemoved" !== zC.type || (zC.sharedBlockData ??= []), zC
```

#### 1934. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21695` → after: `L22923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22923) · [Before (L21695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21695)

```diff
-       return void 0 !== Sk && (ik.hotbar = Sk), (0, fk.F)(kk.playerHud) || (ik.playerHud = te(kk.playerHud, je.o, ((kk, ek) => (0, fk.F)(ek) ? null : function(kk) {
+       return void 0 !== bC && (ZC.hotbar = bC), (0, wC.H)(CC.playerHud) || (ZC.playerHud = rz(CC.playerHud, Iz.t, ((CC, zC) => (0, wC.H)(zC) ? null : function(CC) {
```

#### 1935. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21698-L21699` → after: `L22926-L22927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22926-L22927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22926-L22927) · [Before (L21698-L21699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21698-L21699)

```diff
-         return 1 !== ek.length || "int" !== ek[0] && "double" !== ek[0] ? kk : kk[ek[0]]
-       }(ek)))), (0, fk.F)(kk.effects) || (ik.effects = (0, Ae.g)(kk.effects)), ik
+         return 1 !== zC.length || "int" !== zC[0] && "double" !== zC[0] ? CC : CC[zC[0]]
+       }(zC)))), (0, wC.H)(CC.effects) || (ZC.effects = (0, Jz.h)(CC.effects)), ZC
```

#### 1936. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21703` → after: `L22931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22931) · [Before (L21703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21703)

```diff
-     const Ki = [0, 1, 8, 255, "length", "undefined", "a", void 0, 52, 21, 151, 2, 63, 6, "fromCodePoint", 7, 12, "push", 3, 138, "h", 92, 9, "g", 91, 103, 8191, 88, 13, 14, 4, 85, "c", "i", 5, "f", 33554432, 67108864, "b", 190, 84, 58, 18, 210, 90, !1, "join", 127, 125, 53, 187,  … [truncated]
+     const FZ = [1, 2, 0, 153, "c", "i", 7, 199, 6, 4, 8, 255, "length", 249, 3, "a", "undefined", 63, "fromCodePoint", 12, "push", 160, 250, 198, 67, "g", 91, 21, 8191, 88, 13, 14, 114, "f", null, 5, 171, 10, "b", 239, "join", void 0, 126, 87, !1, 107, !0, 96, 17, "d", "h", 189,  … [truncated]
```

#### 1937. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21705-L21711` → after: `L22933-L22937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22933-L22937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22933-L22937) · [Before (L21705-L21711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21705-L21711)

```diff
-     function xi(...kk) {
-       return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = function(kk) {
-         var ek, ik, Dk, fk, Sk, bk, rk;
-         for (yi(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = Ki[0], Sk = Ki[0], bk = -Ki[1]), rk = Ki[0]; rk < ik; rk++) {
-           var Pk = '+PFTLWoRafbtUQiGrEd^A95(Y>nqp#.)%c3/6I[w~,g0DJm}!y=HB$7svhO@4zXj:MxNkK_`"VS2lCu<*&|81{?];Ze'.indexOf(ek[rk]);
-           if (Pk !== -Ki[1])
-             if (bk < Ki[0]) bk = Pk;
+     function WZ(CC) {
+       return typeof Vz[CC] === FZ[16] ? Vz[CC] = function(...CC) {
+         for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = 'V0R^y9m7P/cG$F!,s[3`gw&_%q#K=CXnM]:O{x.I;pvYj(hU)b6"iSTkNBA4HDoQ|~<EuW1a>lfe*tdZr8@L?2z}5+J', CC[FZ[1]] = "" + (CC[FZ[2]] || ""), CC[FZ[4]] = CC[FZ[1]].length, CC[FZ[9]] = [], CC[FZ[7]] = FZ[2], CC[FZ[8]] = FZ[2], CC[FZ[6]] = -FZ[0 … [truncated]
+           if (CC[FZ[5]] = CC[FZ[0]].indexOf(CC[FZ[1]][CC[FZ[3]]]), CC[FZ[5]] !== -FZ[0])
+             if (CC[FZ[6]] < FZ[2]) CC[FZ[6]] = CC[FZ[5]];
```

#### 1938. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21713` → after: `L22939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22939) · [Before (L21713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21713)

```diff
-               yi(bk += Pk * Ki[24], fk |= bk << Sk, Sk += (bk & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
+               pZ(CC[FZ[6]] += CC[FZ[5]] * FZ[26], CC[FZ[7]] |= CC[FZ[6]] << CC[FZ[8]], CC[FZ[8]] += (CC[FZ[6]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
```

#### 1939. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21715-L21721` → after: `L22941-L22945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22941-L22945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22941-L22945) · [Before (L21715-L21721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21715-L21721)

```diff
-                 yi(Dk.push(fk & Ki[3]), fk >>= Ki[2], Sk -= Ki[2])
-               } while (Sk > Ki[15]);
-               bk = -Ki[1]
-             }
-         }
-         return bk > -Ki[1] && Dk.push((fk | bk << Sk) & Ki[3]), ni(Dk)
-       }(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
+                 pZ(CC[FZ[9]].push(CC[FZ[7]] & FZ[11]), CC[FZ[7]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+               } while (CC[FZ[8]] > FZ[6]);
+               CC[FZ[6]] = -FZ[0]
+             } return CC[FZ[6]] > -FZ[0] && CC[FZ[9]].push((CC[FZ[7]] | CC[FZ[6]] << CC[FZ[8]]) & FZ[11]), NZ(CC[FZ[9]])
+       }(CZ[CC]) : Vz[CC]
```

#### 1940. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21725` → after: `L22949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22949) · [Before (L21725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21725)

```diff
-       return kk[Ki[4]] = Ki[1], typeof Di !== Ki[5] && Di ? (new Di).decode(new fi(kk[Ki[0]])) : typeof Si !== Ki[5] && Si ? Si.from(kk[Ki[0]]).toString("utf-8") : Pi(kk[Ki[0]])
+       return CC[FZ[12]] = FZ[0], typeof ZZ !== FZ[16] && ZZ ? (new ZZ).decode(new QZ(CC[FZ[2]])) : typeof wZ !== FZ[16] && wZ ? wZ.from(CC[FZ[2]]).toString("utf-8") : fZ(CC[FZ[2]])
```

#### 1941. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21729-L21733` → after: `L22953-L22957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22953-L22957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22953-L22957) · [Before (L21729-L21733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21729-L21733)

```diff
-       if (kk[Ki[4]] = Ki[18], kk[Ki[0]] === function(...kk) {
-           return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = function(...kk) {
-             for (yi(kk[Ki[4]] = Ki[1], kk[Ki[1]] = 'V#HyGluAt]gv8?+"xcsbTfwOJBFn>a|3jri(oM;z}SWZ)&!26kYh*IR7=ENL54~U<1,eD.pPQ:$0%KC/Xm{`_^9d[@q', kk[-Ki[19]] = "" + (kk[Ki[0]] || ""), kk[Ki[21]] = kk[-Ki[19]].length, kk[Ki[30]] = [], kk[Ki[25]] = Ki[0], kk[Ki[13]] = Ki[0], kk[Ki[ … [truncated]
-               if (kk[Ki[22]] = kk[Ki[1]].indexOf(kk[-Ki[19]][kk[Ki[20]]]), kk[Ki[22]] !== -Ki[1])
-                 if (kk[Ki[23]] < Ki[0]) kk[Ki[23]] = kk[Ki[22]];
+       if (CC[FZ[12]] = FZ[14], CC[FZ[2]] === function(...CC) {
+           return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = function(...CC) {
+             for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = 'fEL&=^?qzVy,5*)cwvS(i~`pPdMa|Zrek9:2NC;8Xnsx3{Fu@tUWBYA1%>}!4j07m#Og<oIQ]T"_/K+bG.[Hh6$DRJl', CC[FZ[23]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[23]].length, CC[-FZ[32]] = [], CC[-FZ[27]] = FZ[2], CC[FZ[8]] = FZ[2], CC[FZ[ … [truncated]
+               if (CC[FZ[24]] = CC[FZ[0]].indexOf(CC[FZ[23]][CC[FZ[10]]]), CC[FZ[24]] !== -FZ[0])
+                 if (CC[FZ[25]] < FZ[2]) CC[FZ[25]] = CC[FZ[24]];
```

#### 1942. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21735` → after: `L22959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22959) · [Before (L21735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21735)

```diff
-                   yi(kk[Ki[23]] += kk[Ki[22]] * Ki[24], kk[Ki[25]] |= kk[Ki[23]] << kk[Ki[13]], kk[Ki[13]] += (kk[Ki[23]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
+                   pZ(CC[FZ[25]] += CC[FZ[24]] * FZ[26], CC[-FZ[27]] |= CC[FZ[25]] << CC[FZ[8]], CC[FZ[8]] += (CC[FZ[25]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
```

#### 1943. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21737-L21742` → after: `L22961-L22966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22961-L22966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22961-L22966) · [Before (L21737-L21742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21737-L21742)

```diff
-                     yi(kk[Ki[30]].push(kk[Ki[25]] & Ki[3]), kk[Ki[25]] >>= Ki[2], kk[Ki[13]] -= Ki[2])
-                   } while (kk[Ki[13]] > Ki[15]);
-                   kk[Ki[23]] = -Ki[1]
-                 } return kk[Ki[23]] > -Ki[1] && kk[Ki[30]].push((kk[Ki[25]] | kk[Ki[23]] << kk[Ki[13]]) & Ki[3]), ni(kk[Ki[30]])
-           }(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
-         }(107) + Ki[69]) return kk[Ki[1]] + kk[Ki[11]]
+                     pZ(CC[-FZ[32]].push(CC[-FZ[27]] & FZ[11]), CC[-FZ[27]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                   } while (CC[FZ[8]] > FZ[6]);
+                   CC[FZ[25]] = -FZ[0]
+                 } return CC[FZ[25]] > -FZ[0] && CC[-FZ[32]].push((CC[-FZ[27]] | CC[FZ[25]] << CC[FZ[8]]) & FZ[11]), NZ(CC[-FZ[32]])
+           }(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
+         }(89) + FZ[61]) return CC[FZ[0]] + CC[FZ[1]]
```

#### 1944. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21747` → after: `L22971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22971) · [Before (L21747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21747)

```diff
-     function wi(kk, ek, ik, Dk = {}, fk, Sk, bk, rk, Pk) {
+     function SZ(CC, zC, ZC, QC = {}, wC, bC, nC, fC) {
```

#### 1945. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21749-L21765` → after: `L22973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22973) · [Before (L21749-L21765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21749-L21765)

```diff
-           function ek(...kk) {
-             return kk[Ki[4]] = Ki[1], kk[Ki[0]][Ki[1]] * Ki[37] + (kk[Ki[0]][Ki[0]] < Ki[0] ? Ki[36] | kk[Ki[0]][Ki[0]] : kk[Ki[0]][Ki[0]])
-           }
- 
-           function ik(...kk) {
-             switch (kk[Ki[4]] = Ki[1], ((kk[Ki[0]] & Ki[36]) !== Ki[0]) * Ki[1] + (kk[Ki[0]] < Ki[0]) * Ki[11]) {
-               case Ki[0]:
-                 return [kk[Ki[0]] % Ki[36], Math.trunc(kk[Ki[0]] / Ki[37])];
-               case Ki[1]:
-                 return [kk[Ki[0]] % Ki[36] - Ki[36], Math.trunc(kk[Ki[0]] / Ki[37]) + Ki[1]];
-               case Ki[11]:
-                 return [((kk[Ki[0]] + Ki[36]) % Ki[36] + Ki[36]) % Ki[36], Math.round(kk[Ki[0]] / Ki[37])];
-               case Ki[18]:
-                 return [kk[Ki[0]] % Ki[36], Math.trunc(kk[Ki[0]] / Ki[37])]
-             }
-           }
- ... (1 more removed lines; see GitHub link above)
+           return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = wC(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
```

#### 1946. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21767-L21773` → after: `L22975-L22977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22975-L22977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22975-L22977) · [Before (L21767-L21773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21767-L21773)

```diff
-           return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = fk(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
-         }), fk || (fk = function(kk) {
-           var ek, ik, Dk, fk, Sk, bk, rk;
-           for (yi(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = Ki[0], Sk = Ki[0], bk = -Ki[1]), rk = Ki[0]; rk < ik; rk++) {
-             var Pk = 'u^}z7<!Wov*2gwrC0itjHf>S1hk:=3EOx4@`pZP?,9|cqLF&+mYVD"6UR#yJb5G~nBeN)8saX%](/[_TKlMQ$.;IAd{'.indexOf(ek[rk]);
-             if (Pk !== -Ki[1])
-               if (bk < Ki[0]) bk = Pk;
+           for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = 'YE9+_?}"Oc0w]W#`%qA43gy)6:pZBSz.$[CX>*sUxi<RPJDrvj&5k/ud{Nf!hH28(l,1IT^~on7;t@=KbaVLMQFeGm|', CC[FZ[1]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[1]].length, CC[FZ[9]] = [], CC[FZ[35]] = FZ[2], CC[FZ[8]] = FZ[2], CC[FZ[6]] = - … [truncated]
+             if (CC[FZ[5]] = CC[FZ[0]].indexOf(CC[FZ[1]][CC[FZ[39]]]), CC[FZ[5]] !== -FZ[0])
+               if (CC[FZ[6]] < FZ[2]) CC[FZ[6]] = CC[FZ[5]];
```

#### 1947. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21775` → after: `L22979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22979) · [Before (L21775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21775)

```diff
-                 yi(bk += Pk * Ki[24], fk |= bk << Sk, Sk += (bk & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
+                 pZ(CC[FZ[6]] += CC[FZ[5]] * FZ[26], CC[FZ[35]] |= CC[FZ[6]] << CC[FZ[8]], CC[FZ[8]] += (CC[FZ[6]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
```

#### 1948. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21777-L21784` → after: `L22981-L22986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22981-L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22981-L22986) · [Before (L21777-L21784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21777-L21784)

```diff
-                   yi(Dk.push(fk & Ki[3]), fk >>= Ki[2], Sk -= Ki[2])
-                 } while (Sk > Ki[15]);
-                 bk = -Ki[1]
-               }
-           }
-           return bk > -Ki[1] && Dk.push((fk | bk << Sk) & Ki[3]), ni(Dk)
-         }), Sk(112) + Ki[105] in Hi && bk(), yi(rk = void 0, Pk = {
-           [Sk(113)]: function(...kk) {
+                   pZ(CC[FZ[9]].push(CC[FZ[35]] & FZ[11]), CC[FZ[35]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                 } while (CC[FZ[8]] > FZ[6]);
+                 CC[FZ[6]] = -FZ[0]
+               } return CC[FZ[6]] > -FZ[0] && CC[FZ[9]].push((CC[FZ[35]] | CC[FZ[6]] << CC[FZ[8]]) & FZ[11]), NZ(CC[FZ[9]])
+         }), pZ(nC = void 0, fC = {
+           [WZ(92)]: function(...CC) {
```

#### 1949. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21786-L21805` → after: `L22988-L22993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22988-L22993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22988-L22993) · [Before (L21786-L21805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21786-L21805)

```diff
-               return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = function(...kk) {
-                 for (yi(kk[Ki[4]] = Ki[1], kk[-Ki[42]] = 'M_cdWRQBZhGHgIbPTj:kDEwr0x?Nv;A!(5yl4@uiFo%$S69*UfmXYVO+#}./`8q&z37<s,12)=^pnJC>"a{t[KL|~e]', kk[-Ki[43]] = "" + (kk[Ki[0]] || ""), kk[Ki[32]] = kk[-Ki[43]].length, kk[Ki[30]] = [], kk[Ki[34]] = Ki[0], kk[Ki[35]] = Ki[0],  … [truncated]
-                   if (kk[Ki[44]] = kk[-Ki[42]].indexOf(kk[-Ki[43]][kk[Ki[2]]]), kk[Ki[44]] !== -Ki[1])
-                     if (kk[Ki[15]] < Ki[0]) kk[Ki[15]] = kk[Ki[44]];
-                     else {
-                       yi(kk[Ki[15]] += kk[Ki[44]] * Ki[24], kk[Ki[34]] |= kk[Ki[15]] << kk[Ki[35]], kk[Ki[35]] += (kk[Ki[15]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-                       do {
-                         yi(kk[Ki[30]].push(kk[Ki[34]] & Ki[3]), kk[Ki[34]] >>= Ki[2], kk[Ki[35]] -= Ki[2])
-                       } while (kk[Ki[35]] > Ki[15]);
-                       kk[Ki[15]] = -Ki[1]
-                     } return kk[Ki[15]] > -Ki[1] && kk[Ki[30]].push((kk[Ki[34]] | kk[Ki[15]] << kk[Ki[35]]) & Ki[3]), ni(kk[Ki[30]])
-               }(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
-             }
-             ek(Ki[98]) + "q" in Hi && function(...kk) {
-               function ik(kk) {
-                 var ek, ik, Dk, fk, Sk, bk, rk, Pk = 'w*)>`UMknK[9N:TE@042&ej^O"1t+b]RpIo/A8mlis#SJ?;(D{F.Qg_,XPL6qxva~|dy%7Hr3uzZG<!f=BV}C$WhYc5';
- ... (4 more removed lines; see GitHub link above)
+               return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = function(CC) {
+                 var zC, ZC, QC, wC, bC, nC, fC;
+                 for (pZ(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = FZ[2], bC = FZ[2], nC = -FZ[0]), fC = FZ[2]; fC < ZC; fC++) {
+                   var oC = '/u._:",|(504!`*WJsXvdDQLz;aeUA7%Rmoj<n{y=NE&2Ob>6F@~3I]SBCg}YrV^1M[whxTi9q$cKlH)?ZP8kGp+#ft'.indexOf(zC[fC]);
+                   if (oC !== -FZ[0])
+                     if (nC < FZ[2]) nC = oC;
```

#### 1950. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21807` → after: `L22995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22995) · [Before (L21807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21807)

```diff
-                       yi(bk += mk * Ki[24], fk |= bk << Sk, Sk += (bk & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
+                       pZ(nC += oC * FZ[26], wC |= nC << bC, bC += (nC & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
```

#### 1951. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21809-L21811` → after: `L22997-L22999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22997-L22999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L22997-L22999) · [Before (L21809-L21811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21809-L21811)

```diff
-                         yi(Dk.push(fk & Ki[3]), fk >>= Ki[2], Sk -= Ki[2])
-                       } while (Sk > Ki[15]);
-                       bk = -Ki[1]
+                         pZ(QC.push(wC & FZ[11]), wC >>= FZ[10], bC -= FZ[10])
+                       } while (bC > FZ[6]);
+                       nC = -FZ[0]
```

#### 1952. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21814-L21874` → after: `L23002-L23003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23002-L23003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23002-L23003) · [Before (L21814-L21874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21814-L21874)

```diff
-                 return bk > -Ki[1] && Dk.push((fk | bk << Sk) & Ki[3]), ni(Dk)
-               }
- 
-               function Dk(...kk) {
-                 return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = ik(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
-               }
- 
-               function fk(...kk) {
-                 kk[Ki[4]] = Ki[1];
-                 const ek = {};
-                 for (let ik of kk[Ki[0]].replace(/[^w]/g, "").toLowerCase()) ek[ik] = ek[ik] + Ki[1] || Ki[1];
-                 return ek
-               }
- 
-               function Sk(kk, ek) {
-                 const ik = buildCharMap(kk),
- ... (45 more removed lines; see GitHub link above)
+                 return nC > -FZ[0] && QC.push((wC | nC << bC) & FZ[11]), NZ(QC)
+               }(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
```

#### 1953. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21877` → after: `L23009-L23022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23009-L23022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23009-L23022) · [Before (L21877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21877)

```diff
-           kk[Ki[4]] = Ki[0], yi(kk[-Ki[48]] = ek([Ki[11], Ki[30]]), kk[Ki[1]] = ek([Ki[1], Ki[11]]), kk[Ki[49]] = kk[-Ki[48]] + kk[Ki[1]], kk[Ki[50]] = kk[Ki[49]] - kk[Ki[1]], kk[Ki[30]] = kk[Ki[50]] * Ki[11], kk[-Ki[44]] = kk[Ki[30]] / Ki[11], console.log(ik(kk[Ki[49]])), consol … [truncated]
+         }), zC === bC(98) + bC(99) && (qZ = []), zC === bC(100) + bC(101)) {
+         function oC(...CC) {
+           pZ(CC[FZ[12]] = FZ[2], CC[FZ[38]] = function(...zC) {
+             return zC[FZ[12]] = FZ[1], CC[FZ[0]]({}, zC[FZ[2]], zC[FZ[0]])
+           }, CC[FZ[0]] = function(...zC) {
+             if (pZ(zC[FZ[12]] = FZ[14], zC[-FZ[42]] = {}), zC[FZ[2]][zC[FZ[0]] + zC[FZ[1]]] !== FZ[41]) return zC[FZ[2]][zC[FZ[0]] + zC[FZ[1]]];
+             if (zC[FZ[0]] === zC[FZ[1]]) return FZ[46];
+             for (zC[FZ[9]] = FZ[2]; zC[FZ[9]] < zC[FZ[0]].length; zC[FZ[9]]++) zC[-FZ[42]][zC[FZ[0]][zC[FZ[9]]]] === FZ[41] && (zC[-FZ[42]][zC[FZ[0]][zC[FZ[9]]]] = FZ[2]), zC[-FZ[42]][zC[FZ[1]][zC[FZ[9]]]] === FZ[41] && (zC[-FZ[42]][zC[FZ[1]][zC[FZ[9]]]] = FZ[2]), pZ(zC[-FZ[42]][ … [truncated]
+             for (zC[FZ[43]] in zC[-FZ[42]])
+               if (zC[-FZ[42]][zC[FZ[43]]] !== FZ[2]) return zC[FZ[2]][zC[FZ[0]] + zC[FZ[1]]] = FZ[44], FZ[44];
+             for (zC[-FZ[45]] = FZ[0]; zC[-FZ[45]] < zC[FZ[0]].length; zC[-FZ[45]]++)
+               if (CC[FZ[0]](zC[FZ[2]], zC[FZ[0]].substr(FZ[2], zC[-FZ[45]]), zC[FZ[1]].substr(FZ[2], zC[-FZ[45]])) && CC[FZ[0]](zC[FZ[2]], zC[FZ[0]].substr(zC[-FZ[45]]), zC[FZ[1]].substr(zC[-FZ[45]])) || CC[FZ[0]](zC[FZ[2]], zC[FZ[0]].substr(FZ[2], zC[-FZ[45]]), zC[FZ[1]].substr( … [truncated]
+             return zC[FZ[2]][zC[FZ[0]] + zC[FZ[1]]] = FZ[44], FZ[44]
+           }, console.log(CC[FZ[38]]))
```

#### 1954. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21880` → after: `L23025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23025) · [Before (L21880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21880)

```diff
-         function Mk(...ek) {
+         function qC() {
```

#### 1955. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L21882-L22119` → after: `L23027-L23031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23027-L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23027-L23031) · [Before (L21882-L22119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L21882-L22119)

```diff
-           if (ek[Ki[4]] = Ki[0], Sk(Ki[51]) + Ki[52] in Hi && function(...kk) {
-               function ek(...kk) {
-                 for (yi(kk[Ki[4]] = Ki[1], kk[Ki[6]] = '#EtsAZDSHIcBTkNL,_9VQYu)pb1+}r[8nC&=5^/J.j"?;~|z(2OPMmFXig%vh{qfod:G`!leyw7xK*<aR]U>6403@$W', kk[Ki[53]] = "" + (kk[Ki[0]] || ""), kk[Ki[18]] = kk[Ki[53]].length, kk[Ki[30]] = [], kk[Ki[56]] = Ki[0], kk[Ki[35]] = Ki[0], kk[K … [truncated]
-                   if (kk[Ki[55]] = kk[Ki[6]].indexOf(kk[Ki[53]][kk[Ki[54]]]), kk[Ki[55]] !== -Ki[1])
-                     if (kk[Ki[15]] < Ki[0]) kk[Ki[15]] = kk[Ki[55]];
-                     else {
-                       yi(kk[Ki[15]] += kk[Ki[55]] * Ki[24], kk[Ki[56]] |= kk[Ki[15]] << kk[Ki[35]], kk[Ki[35]] += (kk[Ki[15]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-                       do {
-                         yi(kk[Ki[30]].push(kk[Ki[56]] & Ki[3]), kk[Ki[56]] >>= Ki[2], kk[Ki[35]] -= Ki[2])
-                       } while (kk[Ki[35]] > Ki[15]);
-                       kk[Ki[15]] = -Ki[1]
-                     } return kk[Ki[15]] > -Ki[1] && kk[Ki[30]].push((kk[Ki[56]] | kk[Ki[15]] << kk[Ki[35]]) & Ki[3]), ni(kk[Ki[30]])
-               }
- 
-               function ik(...kk) {
-                 return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = ek(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
- ... (222 more removed lines; see GitHub link above)
+           return function(...CC) {
+             return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = function(...CC) {
+               for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[47]] = '/caWDTowtU367xhC:dlXQVJy_.N>OER2r"(%s`zm9fY]I${L0qM@g<B&n;+ZvFK5^~kSH4|?!,}p=[A#iu)Pe*j18bG', CC[FZ[48]] = "" + (CC[FZ[2]] || ""), CC[FZ[4]] = CC[FZ[48]].length, CC[FZ[49]] = [], CC[-FZ[51]] = FZ[2], CC[FZ[8]] = FZ[2], CC[FZ … [truncated]
+                 if (CC[FZ[5]] = CC[FZ[47]].indexOf(CC[FZ[48]][CC[FZ[50]]]), CC[FZ[5]] !== -FZ[0])
+                   if (CC[FZ[25]] < FZ[2]) CC[FZ[25]] = CC[FZ[5]];
```

#### 1956. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22121` → after: `L23033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23033) · [Before (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22121)

```diff
-                     yi(kk[Ki[83]] += kk[Ki[33]] * Ki[24], kk[Ki[34]] |= kk[Ki[83]] << kk[Ki[13]], kk[Ki[13]] += (kk[Ki[83]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
+                     pZ(CC[FZ[25]] += CC[FZ[5]] * FZ[26], CC[-FZ[51]] |= CC[FZ[25]] << CC[FZ[8]], CC[FZ[8]] += (CC[FZ[25]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
```

#### 1957. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22123-L22184` → after: `L23035-L23055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23035-L23055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23035-L23055) · [Before (L22123-L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22123-L22184)

```diff
-                       yi(kk[Ki[30]].push(kk[Ki[34]] & Ki[3]), kk[Ki[34]] >>= Ki[2], kk[Ki[13]] -= Ki[2])
-                     } while (kk[Ki[13]] > Ki[15]);
-                     kk[Ki[83]] = -Ki[1]
-                   } return kk[Ki[83]] > -Ki[1] && kk[Ki[30]].push((kk[Ki[34]] | kk[Ki[83]] << kk[Ki[13]]) & Ki[3]), ni(kk[Ki[30]])
-             }
- 
-             function bk(kk) {
-               return typeof ki[kk] === Ki[5] ? ki[kk] = fk(ei[kk]) : ki[kk]
-             }
- 
-             function rk() {
-               const kk = require("big-integer");
-               module.exports = class {
-                 static randomPrime(...ek) {
-                   ek[Ki[4]] = Ki[1];
-                   const ik = kk.one.shiftLeft(ek[Ki[0]] - Ki[1]),
- ... (46 more removed lines; see GitHub link above)
+                       pZ(CC[FZ[49]].push(CC[-FZ[51]] & FZ[11]), CC[-FZ[51]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                     } while (CC[FZ[8]] > FZ[6]);
+                     CC[FZ[25]] = -FZ[0]
+                   } return CC[FZ[25]] > -FZ[0] && CC[FZ[49]].push((CC[-FZ[51]] | CC[FZ[25]] << CC[FZ[8]]) & FZ[11]), NZ(CC[FZ[49]])
+             }(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
+           }(103) in gZ && function(...CC) {
+             pZ(CC[FZ[12]] = FZ[2], CC[FZ[38]] = function(...zC) {
+               return zC[FZ[12]] = FZ[1], CC[FZ[4]]({}, zC[FZ[2]], zC[FZ[0]])
+             }, CC[FZ[4]] = function(...zC) {
+               if (pZ(zC[FZ[12]] = FZ[14], zC[FZ[52]] = {}), zC[FZ[2]][zC[FZ[0]] + zC[FZ[1]]] !== FZ[41]) return zC[FZ[2]][zC[FZ[0]] + zC[FZ[1]]];
+               if (zC[FZ[0]] === zC[FZ[1]]) return FZ[46];
+               for (zC[FZ[9]] = FZ[2]; zC[FZ[9]] < zC[FZ[0]].length; zC[FZ[9]]++) zC[FZ[52]][zC[FZ[0]][zC[FZ[9]]]] === FZ[41] && (zC[FZ[52]][zC[FZ[0]][zC[FZ[9]]]] = FZ[2]), zC[FZ[52]][zC[FZ[1]][zC[FZ[9]]]] === FZ[41] && (zC[FZ[52]][zC[FZ[1]][zC[FZ[9]]]] = FZ[2]), pZ(zC[FZ[52]][zC[ … [truncated]
+               for (zC[FZ[30]] in zC[FZ[52]])
+                 if (zC[FZ[52]][zC[FZ[30]]] !== FZ[2]) return zC[FZ[2]][zC[FZ[0]] + zC[FZ[1]]] = FZ[44], FZ[44];
+               for (zC[FZ[49]] = FZ[0]; zC[FZ[49]] < zC[FZ[0]].length; zC[FZ[49]]++)
+                 if (CC[FZ[4]](zC[FZ[2]], zC[FZ[0]].substr(FZ[2], zC[FZ[49]]), zC[FZ[1]].substr(FZ[2], zC[FZ[49]])) && CC[FZ[4]](zC[FZ[2]], zC[FZ[0]].substr(zC[FZ[49]]), zC[FZ[1]].substr(zC[FZ[49]])) || CC[FZ[4]](zC[FZ[2]], zC[FZ[0]].substr(FZ[2], zC[FZ[49]]), zC[FZ[1]].substr(zC[ … [truncated]
+ ... (5 more added lines; see GitHub link above)
```

#### 1958. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22186-L22187` → after: `L23057-L23059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23057-L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23057-L23059) · [Before (L22186-L22187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22186-L22187)

```diff
-         Sk(Ki[47]) + "S" in Hi && mk(), rk = mi[kk] || (mi[kk] = Mk())
-       } else {
+         bC(102) in gZ && oC(), nC = oZ[CC] || (oZ[CC] = qC())
+       } else nC = fC[CC]();
+       if (ZC === bC(104) + bC(FZ[88])) {
```

#### 1959. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22189-L22212` → after: `L23061-L23063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23061-L23063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23061-L23063) · [Before (L22189-L22212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22189-L22212)

```diff
-           yi(kk[Ki[4]] = Ki[0], kk[Ki[92]] = function(kk) {
-             var ek, ik, Dk, fk, Sk = kk.length;
-             for (yi(ek = [], ik = Ki[0], Dk = Ki[0], kk.sort(((kk, ek) => kk - ek))), fk = Ki[0]; fk < Sk; fk++)
-               if (!(fk > Ki[0] && kk[fk] === kk[fk - Ki[1]]))
-                 for (yi(ik = fk + Ki[1], Dk = Sk - Ki[1]); ik < Dk;)
-                   if (kk[fk] + kk[ik] + kk[Dk] < Ki[0]) ik++;
-                   else if (kk[fk] + kk[ik] + kk[Dk] > Ki[0]) Dk--;
-             else {
-               for (ek.push([kk[fk], kk[ik], kk[Dk]]); ik < Dk && kk[ik] === kk[ik + Ki[1]];) ik++;
-               for (; ik < Dk && kk[Dk] === kk[Dk - Ki[1]];) Dk--;
-               yi(ik++, Dk--)
-             }
-             return ek
-           }, console.log(kk[Ki[92]]))
-         }
-         Sk(150) in Hi && Kk(), rk = Pk[kk]()
- ... (8 more removed lines; see GitHub link above)
+           for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = 'YN^EDJCRlLUdbWBZfmM.xPj4/2)q]V<gwI7!n@?1Kpk&X(A36,>h"iseH{8O`%aSv5F*#TQr:|0c=u}oGyz$t~9[_+;', CC[FZ[38]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[38]].length, CC[FZ[54]] = [], CC[FZ[35]] = FZ[2], CC[FZ[8]] = FZ[2], CC[FZ[25]] … [truncated]
+             if (CC[FZ[53]] = CC[FZ[0]].indexOf(CC[FZ[38]][CC[FZ[10]]]), CC[FZ[53]] !== -FZ[0])
+               if (CC[FZ[25]] < FZ[2]) CC[FZ[25]] = CC[FZ[53]];
```

#### 1960. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22214` → after: `L23065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23065) · [Before (L22214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22214)

```diff
-                 yi(bk += Pk * Ki[24], fk |= bk << Sk, Sk += (bk & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
+                 pZ(CC[FZ[25]] += CC[FZ[53]] * FZ[26], CC[FZ[35]] |= CC[FZ[25]] << CC[FZ[8]], CC[FZ[8]] += (CC[FZ[25]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
```

#### 1961. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22216-L22221` → after: `L23067-L23074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23067-L23074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23067-L23074) · [Before (L22216-L22221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22216-L22221)

```diff
-                   yi(Dk.push(fk & Ki[3]), fk >>= Ki[2], Sk -= Ki[2])
-                 } while (Sk > Ki[15]);
-                 bk = -Ki[1]
-               }
-           }
-           return bk > -Ki[1] && Dk.push((fk | bk << Sk) & Ki[3]), ni(Dk)
+                   pZ(CC[FZ[54]].push(CC[FZ[35]] & FZ[11]), CC[FZ[35]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                 } while (CC[FZ[8]] > FZ[6]);
+                 CC[FZ[25]] = -FZ[0]
+               } return CC[FZ[25]] > -FZ[0] && CC[FZ[54]].push((CC[FZ[35]] | CC[FZ[25]] << CC[FZ[8]]) & FZ[11]), NZ(CC[FZ[54]])
+         }
+ 
+         function WC(...CC) {
+           return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = FC(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
```

#### 1962. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22225` → after: `L23078-L23120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23078-L23120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23078-L23120) · [Before (L22225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22225)

```diff
-           return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = xk(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
+           function zC(...CC) {
+             return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = function(...CC) {
+               for (pZ(CC[FZ[12]] = FZ[0], CC[-FZ[55]] = 'mJy_0#RnWdFEuLNsvHi~2%Tof`t^UAG@6a4qphb/kM}8BQwVYP|,xZ.5IgzS+>=?[(ce{Xjl&)KOC31r*:"<!;97$D]', CC[FZ[1]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[1]].length, CC[FZ[49]] = [], CC[FZ[31]] = FZ[2], CC[-FZ[56]] = FZ[2], CC[F … [truncated]
+                 if (CC[FZ[53]] = CC[-FZ[55]].indexOf(CC[FZ[1]][CC[FZ[10]]]), CC[FZ[53]] !== -FZ[0])
+                   if (CC[FZ[25]] < FZ[2]) CC[FZ[25]] = CC[FZ[53]];
+                   else {
+                     pZ(CC[FZ[25]] += CC[FZ[53]] * FZ[26], CC[FZ[31]] |= CC[FZ[25]] << CC[-FZ[56]], CC[-FZ[56]] += (CC[FZ[25]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                     do {
+                       pZ(CC[FZ[49]].push(CC[FZ[31]] & FZ[11]), CC[FZ[31]] >>= FZ[10], CC[-FZ[56]] -= FZ[10])
+                     } while (CC[-FZ[56]] > FZ[6]);
+                     CC[FZ[25]] = -FZ[0]
+                   } return CC[FZ[25]] > -FZ[0] && CC[FZ[49]].push((CC[FZ[31]] | CC[FZ[25]] << CC[-FZ[56]]) & FZ[11]), NZ(CC[FZ[49]])
+             }(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
+           }
+ 
+           function ZC(...CC) {
+ ... (27 more added lines; see GitHub link above)
```

#### 1963. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22227-L22228` → after: `L23122-L23123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23122-L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23122-L23123) · [Before (L22227-L22228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22227-L22228)

```diff
-         return {
-           [nk(153) + nk(154)]: rk
+         return WC(106) + "N" in gZ && NC(), {
+           [WC(110) + WC(111)]: nC
```

#### 1964. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22230-L22235` → after: `L23125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23125) · [Before (L22230-L22235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22230-L22235)

```diff
-       }
-       return rk
-     }
- 
-     function li(...kk) {
-       kk[Ki[4]] = Ki[0], xi(155) in Hi && function() {
+       } {
```

#### 1965. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22237` → after: `L23127-L23136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23127-L23136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23127-L23136) · [Before (L22237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22237)

```diff
-           return kk[Ki[4]] = Ki[1], kk[Ki[0]][Ki[1]] * Ki[37] + (kk[Ki[0]][Ki[0]] < Ki[0] ? Ki[36] | kk[Ki[0]][Ki[0]] : kk[Ki[0]][Ki[0]])
+           for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[59]] = 'Fi:TdY^AC6_DIV9"].*RQmuH4|l`WcZhxL5k[a(B>zypo=X8S@}K,On<U3tNM%+Evs)1rf?2$GPq/J7wj#0&b!e{g;~', CC[FZ[57]] = "" + (CC[FZ[2]] || ""), CC[-FZ[58]] = CC[FZ[57]].length, CC[FZ[9]] = [], CC[FZ[35]] = FZ[2], CC[FZ[33]] = FZ[2], CC[FZ[25 … [truncated]
+             if (CC[FZ[60]] = CC[FZ[59]].indexOf(CC[FZ[57]][CC[FZ[10]]]), CC[FZ[60]] !== -FZ[0])
+               if (CC[FZ[25]] < FZ[2]) CC[FZ[25]] = CC[FZ[60]];
+               else {
+                 pZ(CC[FZ[25]] += CC[FZ[60]] * FZ[26], CC[FZ[35]] |= CC[FZ[25]] << CC[FZ[33]], CC[FZ[33]] += (CC[FZ[25]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                 do {
+                   pZ(CC[FZ[9]].push(CC[FZ[35]] & FZ[11]), CC[FZ[35]] >>= FZ[10], CC[FZ[33]] -= FZ[10])
+                 } while (CC[FZ[33]] > FZ[6]);
+                 CC[FZ[25]] = -FZ[0]
+               } return CC[FZ[25]] > -FZ[0] && CC[FZ[9]].push((CC[FZ[35]] | CC[FZ[25]] << CC[FZ[33]]) & FZ[11]), NZ(CC[FZ[9]])
```

#### 1966. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22241-L22249` → after: `L23140-L23185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23140-L23185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23140-L23185) · [Before (L22241-L22249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22241-L22249)

```diff
-           switch (kk[Ki[4]] = Ki[1], ((kk[Ki[0]] & Ki[36]) !== Ki[0]) * Ki[1] + (kk[Ki[0]] < Ki[0]) * Ki[11]) {
-             case Ki[0]:
-               return [kk[Ki[0]] % Ki[36], Math.trunc(kk[Ki[0]] / Ki[37])];
-             case Ki[1]:
-               return [kk[Ki[0]] % Ki[36] - Ki[36], Math.trunc(kk[Ki[0]] / Ki[37]) + Ki[1]];
-             case Ki[11]:
-               return [((kk[Ki[0]] + Ki[36]) % Ki[36] + Ki[36]) % Ki[36], Math.round(kk[Ki[0]] / Ki[37])];
-             case Ki[18]:
-               return [kk[Ki[0]] % Ki[36], Math.trunc(kk[Ki[0]] / Ki[37])]
+           return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = MC(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
+         }
+ 
+         function SC() {
+           module.exports = async (CC = () => {
+             throw new Error(function(...CC) {
+               return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = function(CC) {
+                 var zC, ZC, QC, wC, bC, nC, fC;
+                 for (pZ(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = FZ[2], bC = FZ[2], nC = -FZ[0]), fC = FZ[2]; fC < ZC; fC++) {
+                   var oC = 'vtIQq#d>FlM&*gBa~boP%+SexkcZJR|=mTy5;3wXz$@`E!<:n4^NYu/6h8[HCLGpif"VjD2O0K.{(9,1?A}s)7U]_Wr'.indexOf(zC[fC]);
+                   if (oC !== -FZ[0])
+                     if (nC < FZ[2]) nC = oC;
+                     else {
+                       pZ(nC += oC * FZ[26], wC |= nC << bC, bC += (nC & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                       do {
+                         pZ(QC.push(wC & FZ[11]), wC >>= FZ[10], bC -= FZ[10])
+ ... (30 more added lines; see GitHub link above)
```

#### 1967. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22252-L22259` → after: `L23188-L23189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23188-L23189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23188-L23189) · [Before (L22252-L22259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22252-L22259)

```diff
-         let ik = kk([Ki[11], Ki[30]]),
-           Dk = kk([Ki[1], Ki[11]]),
-           fk = ik + Dk,
-           Sk = fk - Dk,
-           bk = Sk * Ki[11],
-           rk = bk / Ki[11];
-         yi(console.log(ek(fk)), console.log(ek(Sk)), console.log(ek(bk)), console.log(ek(rk)))
-       }()
+         return gC(112) in gZ && SC(), nC
+       }
```

#### 1968. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22265-L22266` → after: `L23195-L23196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23195-L23196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23195-L23196) · [Before (L22265-L22266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22265-L22266)

```diff
-     yi(ki = {}, ei = ["7M*f4m364@$9P", ')SB$3{m~tEpR/[z/"o>.3/^}&h>"1}h/hk=qh1}^8UXLLqi', 'D0%yM"AaPG>oAGW)', "q`,Hos4d}xYlcLK[", "I!psa!{#?Qi3*/U[6kYqhCuYW", 'R0c2H|lodhF"l4Opq`~y,z%6(O2PK!=pJkof73rFmt5<mF', '"A:VYu]E*Uof7Q;,~E)By2dY0tH*+', "Ajwf[~XYL7+M/=/I", '#0ac~*Smk^4d!})g[ … [truncated]
-       var kk, ek, ik, Dk = [function() {
+     pZ(Vz = {}, CZ = [";gklJLBp?Br1K^[#Zo(=@W,S[T$_:D/", '5=Ski?[qtPC):bt`z()"hbzih4MKqy^[[,|m', ';#^Mtk8C$4N*|40Y6gk=|>OUfoYW3DFKVbN"s', "::uCskV", 'i^{f:b;X|$Cg?Ux%;"N/pT6zy', '&fD7J]42S`k*rah#gT{nZalpZ3Qq7.2OO"^MKlMr[,z&I#9`CHSn5LP|L`', 'g,qm+4l")w2PRD5:L)./PoNuw`fqsLj#cx|/vxH … [truncated]
+       pZ(CC[FZ[12]] = FZ[2], CC[FZ[15]] = [function() {
```

#### 1969. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22274-L22275` → after: `L23204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23204) · [Before (L22274-L22275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22274-L22275)

```diff
-       }];
-       yi(kk = void 0, ek = []);
+       }], CC[FZ[0]] = FZ[41], CC[FZ[13]] = []);
```

#### 1970. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22277` → after: `L23206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23206) · [Before (L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22277)

```diff
-         yi(kk = Object, ek[Ki[17]]("".__proto__.constructor.name))
+         pZ(CC[FZ[0]] = Object, CC[FZ[13]][FZ[20]]("".__proto__.constructor.name))
```

#### 1971. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22279-L22283` → after: `L23208-L23211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23208-L23211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23208-L23211) · [Before (L22279-L22283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22279-L22283)

```diff
-       kk: for (ik = Ki[0]; ik < Dk[Ki[4]]; ik++) try {
-         var fk;
-         for (kk = Dk[ik](), fk = Ki[0]; fk < ek[Ki[4]]; fk++)
-           if (typeof kk[ek[fk]] === Ki[5]) continue kk;
-         return kk
+       CC: for (CC[FZ[14]] = FZ[2]; CC[FZ[14]] < CC[FZ[15]][FZ[12]]; CC[FZ[14]]++) try {
+         for (CC[FZ[0]] = CC[FZ[15]][CC[FZ[14]]](), CC[FZ[9]] = FZ[2]; CC[FZ[9]] < CC[FZ[13]][FZ[12]]; CC[FZ[9]]++)
+           if (typeof CC[FZ[0]][CC[FZ[13]][CC[FZ[9]]]] === FZ[16]) continue CC;
+         return CC[FZ[0]]
```

#### 1972. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22285-L22290` → after: `L23213-L23219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23213-L23219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23213-L23219) · [Before (L22285-L22290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22285-L22290)

```diff
-       return kk || this
-     }() || {}, Di = ii.TextDecoder, fi = ii.Uint8Array, Si = ii[Ki[108]], bi = ii.String || String, ri = ii.Array || Array, Pi = function(...kk) {
-       return yi(kk[Ki[4]] = Ki[0], kk[Ki[6]] = new ri(Ki[51]), kk[Ki[1]] = bi[Ki[14]] || bi.fromCharCode, kk[Ki[8]] = []),
-         function(...ek) {
-           for (yi(ek[Ki[4]] = Ki[1], ek[Ki[6]] = Ki[7], ek[Ki[11]] = Ki[7], ek[Ki[10]] = ek[Ki[0]][Ki[4]], kk[Ki[8]][Ki[4]] = Ki[0]), ek[Ki[9]] = Ki[0]; ek[Ki[9]] < ek[Ki[10]];) yi(ek[Ki[11]] = ek[Ki[0]][ek[Ki[9]]++], ek[Ki[11]] <= Ki[47] ? ek[Ki[6]] = ek[Ki[11]] : ek[Ki[11]] <=  … [truncated]
-           return kk[Ki[8]][Ki[46]]("")
+       return CC[FZ[0]] || this
+     }() || {}, ZZ = zZ.TextDecoder, QZ = zZ.Uint8Array, wZ = zZ[FZ[81]], bZ = zZ.String || String, nZ = zZ.Array || Array, fZ = function(...CC) {
+       return pZ(CC[FZ[12]] = FZ[2], CC[-FZ[21]] = new nZ(FZ[80]), CC[-FZ[22]] = bZ[FZ[18]] || bZ.fromCharCode, CC[FZ[1]] = []),
+         function(zC) {
+           var ZC, QC, wC, bC;
+           for (pZ(QC = void 0, wC = zC[FZ[12]], CC[FZ[1]][FZ[12]] = FZ[2]), bC = FZ[2]; bC < wC;) pZ(QC = zC[bC++], QC <= FZ[79] ? ZC = QC : QC <= FZ[64] ? ZC = (QC & FZ[58]) << FZ[8] | zC[bC++] & FZ[17] : QC <= FZ[39] ? ZC = (QC & FZ[62]) << FZ[19] | (zC[bC++] & FZ[17]) << FZ[8] … [truncated]
+           return CC[FZ[1]][FZ[40]]("")
```

#### 1973. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22292` → after: `L23221-L23227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23221-L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23221-L23227) · [Before (L22292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22292)

```diff
-     }()), xi(108) + "j" in Hi && function(...kk) {
+     }()), WZ(FZ[95]) + "9" in gZ && function(...CC) {
+       function zC() {}
+       CC[FZ[12]] = FZ[2], pZ(CC[FZ[38]] = function(...CC) {
+         for (pZ(CC[FZ[12]] = FZ[1], CC[FZ[1]] = FZ[2], CC[FZ[35]] = FZ[2], CC[FZ[4]] = new zC(FZ[2]), CC[-FZ[36]] = CC[FZ[4]], CC[FZ[33]] = CC[FZ[2]], CC[FZ[6]] = CC[FZ[0]]); CC[FZ[33]] !== FZ[34] || CC[FZ[6]] !== FZ[34];) pZ(CC[FZ[35]] = (CC[FZ[33]] ? CC[FZ[33]].val : FZ[2]) + ( … [truncated]
+         return CC[FZ[1]] && (CC[-FZ[36]].next = new zC(CC[FZ[1]])), CC[FZ[4]].next
+       }, console.log(CC[FZ[38]]))
+     }(), pZ(oZ = Object[WZ(FZ[26])](FZ[34]), qZ = void 0), pZ(Oz = (...CC) => {
```

#### 1974. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22294-L22304` → after: `L23229-L23293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23229-L23293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23229-L23293) · [Before (L22294-L22304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22294-L22304)

```diff
-         for (yi(kk[Ki[4]] = Ki[1], kk[Ki[1]] = '81C|!srfl@_b*q.;#~mE0`5ZW"k7t[+?,d$F)ojK>]VO{n/Nxh3&uYJBazcy=HgPiXA2Mp^Sv4UTL%e(w6Q<RD:9}IG', kk[Ki[31]] = "" + (kk[Ki[0]] || ""), kk[Ki[32]] = kk[Ki[31]].length, kk[Ki[30]] = [], kk[Ki[34]] = Ki[0], kk[Ki[35]] = Ki[0], kk[Ki[15]] = … [truncated]
-           if (kk[Ki[33]] = kk[Ki[1]].indexOf(kk[Ki[31]][kk[Ki[2]]]), kk[Ki[33]] !== -Ki[1])
-             if (kk[Ki[15]] < Ki[0]) kk[Ki[15]] = kk[Ki[33]];
-             else {
-               yi(kk[Ki[15]] += kk[Ki[33]] * Ki[24], kk[Ki[34]] |= kk[Ki[15]] << kk[Ki[35]], kk[Ki[35]] += (kk[Ki[15]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-               do {
-                 yi(kk[Ki[30]].push(kk[Ki[34]] & Ki[3]), kk[Ki[34]] >>= Ki[2], kk[Ki[35]] -= Ki[2])
-               } while (kk[Ki[35]] > Ki[15]);
-               kk[Ki[15]] = -Ki[1]
-             } return kk[Ki[15]] > -Ki[1] && kk[Ki[30]].push((kk[Ki[34]] | kk[Ki[15]] << kk[Ki[35]]) & Ki[3]), ni(kk[Ki[30]])
-       }
+         return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = function(...CC) {
+           for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = 'x~_w#O"{Tz7*v?>u+B58a&GF4!r[l9j^tXnWq=)c]HIb`Rs6/e<1Um:;QV@ySYdfDiN.EpP2AL$J}hCK0oM,%Zkg|(3', CC[FZ[1]] = "" + (CC[FZ[2]] || ""), CC[FZ[4]] = CC[FZ[1]].length, CC[FZ[66]] = [], CC[FZ[35]] = FZ[2], CC[FZ[8]] = FZ[2], CC[-FZ[64]] = … [truncated]
+             if (CC[FZ[5]] = CC[FZ[0]].indexOf(CC[FZ[1]][CC[FZ[65]]]), CC[FZ[5]] !== -FZ[0])
+               if (CC[-FZ[64]] < FZ[2]) CC[-FZ[64]] = CC[FZ[5]];
+               else {
+                 pZ(CC[-FZ[64]] += CC[FZ[5]] * FZ[26], CC[FZ[35]] |= CC[-FZ[64]] << CC[FZ[8]], CC[FZ[8]] += (CC[-FZ[64]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                 do {
+                   pZ(CC[FZ[66]].push(CC[FZ[35]] & FZ[11]), CC[FZ[35]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                 } while (CC[FZ[8]] > FZ[6]);
+                 CC[-FZ[64]] = -FZ[0]
+               } return CC[-FZ[64]] > -FZ[0] && CC[FZ[66]].push((CC[FZ[35]] | CC[-FZ[64]] << CC[FZ[8]]) & FZ[11]), NZ(CC[FZ[66]])
+         }(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
+       }
+       CC[FZ[12]] = FZ[0], zC(118) in gZ && function(...CC) {
+         pZ(CC[FZ[12]] = FZ[2], CC[FZ[71]] = function(...zC) {
+           return pZ(zC[FZ[12]] = FZ[0], zC[FZ[0]] = []), (zC[FZ[2]] === FZ[0] || zC[FZ[2]] >= FZ[9]) && CC[FZ[4]](zC[FZ[0]], [], zC[FZ[2]], FZ[2]), zC[FZ[0]]
+ ... (49 more added lines; see GitHub link above)
```

#### 1975. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22306-L22307` → after: `L23295-L23354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23295-L23354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23295-L23354) · [Before (L22306-L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22306-L22307)

```diff
-       function ik(...kk) {
-         return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = ek(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
+         function qC(CC) {
+           return typeof Vz[CC] === FZ[16] ? Vz[CC] = oC(CZ[CC]) : Vz[CC]
+         }
+         CC[FZ[0]] = QC[qC(119)](ZC)
+       } catch (fC) {
+         function FC(...CC) {
+           for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = 'K5B8v9c%uO3zaS/!q:`TdNCH76g*ml;.kf_{}sGy>Zp+",@0&^h)tiFnxwMX|W~r1=$RI?b#Ve42(][<oQjPADJULEY', CC[FZ[23]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[23]].length, CC[-FZ[76]] = [], CC[FZ[61]] = FZ[2], CC[FZ[8]] = FZ[2], CC[FZ[6]] … [truncated]
+             if (CC[FZ[53]] = CC[FZ[0]].indexOf(CC[FZ[23]][CC[FZ[50]]]), CC[FZ[53]] !== -FZ[0])
+               if (CC[FZ[6]] < FZ[2]) CC[FZ[6]] = CC[FZ[53]];
+               else {
+                 pZ(CC[FZ[6]] += CC[FZ[53]] * FZ[26], CC[FZ[61]] |= CC[FZ[6]] << CC[FZ[8]], CC[FZ[8]] += (CC[FZ[6]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                 do {
+                   pZ(CC[-FZ[76]].push(CC[FZ[61]] & FZ[11]), CC[FZ[61]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                 } while (CC[FZ[8]] > FZ[6]);
+                 CC[FZ[6]] = -FZ[0]
+               } return CC[FZ[6]] > -FZ[0] && CC[-FZ[76]].push((CC[FZ[61]] | CC[FZ[6]] << CC[FZ[8]]) & FZ[11]), NZ(CC[-FZ[76]])
+ ... (44 more added lines; see GitHub link above)
```

#### 1976. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22309-L22324` → after: `L23356-L23359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23356-L23359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23356-L23359) · [Before (L22309-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22309-L22324)

```diff
-       kk[Ki[4]] = Ki[0];
-       const Dk = require("path"),
-         {
-           version: fk
-         } = require("../../package"),
-         {
-           version: Sk
-         } = require("@redacted/enterprise-plugin/package"),
-         {
-           version: bk
-         } = require("@redacted/components/package"),
-         {
-           sdkVersion: rk
-         } = require("@redacted/enterprise-plugin");
-       require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Dk.resolve(__dirname, ik(109) + ik(110) + Ki[57])
-     }(), yi(mi = Object[xi(Ki[104])](Ki[112]), Mi = void 0), (() => {
+       const wC = nz(Iz[FZ[49]], CC[FZ[0]]),
+         nC = bC[FZ[81]][zC(132)](FZ[9]);
+       return nC[zC(133) + zC(FZ[54]) + "E"](Iz[FZ[49]]), bC[FZ[81]].concat([nC, wC])
+     }, kz = (...CC) => {
```

#### 1977. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22326-L22329` → after: `L23361-L23364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23361-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23361-L23364) · [Before (L22326-L22329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22326-L22329)

```diff
-         return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = function(...kk) {
-           for (yi(kk[Ki[4]] = Ki[1], kk[Ki[1]] = '8tISHYENWA}!Pj>L$oyU|kai{+vO^=3zV5#gc6x_4[`@"f;M%)ms(:J2,Z&7BKTu?e*F1]X0Rrd/wpn9~C.QlhDqbG<', kk[Ki[11]] = "" + (kk[Ki[0]] || ""), kk[Ki[32]] = kk[Ki[11]].length, kk[Ki[30]] = [], kk[Ki[93]] = Ki[0], kk[Ki[13]] = Ki[0], kk[-Ki[88] … [truncated]
-             if (kk[Ki[83]] = kk[Ki[1]].indexOf(kk[Ki[11]][kk[Ki[33]]]), kk[Ki[83]] !== -Ki[1])
-               if (kk[-Ki[88]] < Ki[0]) kk[-Ki[88]] = kk[Ki[83]];
+         return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = function(...CC) {
+           for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = 'M0QcDAjhBWIgJEnldVqsfm#~_}]*pU.y>HYb{"^a|$5+:G2=!;LxrCt`w(vXKR@)&eO,F1/S8[ukN76?z3io%Z9PT4<', CC[FZ[38]] = "" + (CC[FZ[2]] || ""), CC[FZ[4]] = CC[FZ[38]].length, CC[FZ[9]] = [], CC[FZ[35]] = FZ[2], CC[-FZ[82]] = FZ[2], CC[FZ[25]] … [truncated]
+             if (CC[FZ[32]] = CC[FZ[0]].indexOf(CC[FZ[38]][CC[FZ[50]]]), CC[FZ[32]] !== -FZ[0])
+               if (CC[FZ[25]] < FZ[2]) CC[FZ[25]] = CC[FZ[32]];
```

#### 1978. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22331` → after: `L23366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23366) · [Before (L22331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22331)

```diff
-                 yi(kk[-Ki[88]] += kk[Ki[83]] * Ki[24], kk[Ki[93]] |= kk[-Ki[88]] << kk[Ki[13]], kk[Ki[13]] += (kk[-Ki[88]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
+                 pZ(CC[FZ[25]] += CC[FZ[32]] * FZ[26], CC[FZ[35]] |= CC[FZ[25]] << CC[-FZ[82]], CC[-FZ[82]] += (CC[FZ[25]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
```

#### 1979. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22333-L22349` → after: `L23368-L23377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23368-L23377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23368-L23377) · [Before (L22333-L22349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22333-L22349)

```diff
-                   yi(kk[Ki[30]].push(kk[Ki[93]] & Ki[3]), kk[Ki[93]] >>= Ki[2], kk[Ki[13]] -= Ki[2])
-                 } while (kk[Ki[13]] > Ki[15]);
-                 kk[-Ki[88]] = -Ki[1]
-               } return kk[-Ki[88]] > -Ki[1] && kk[Ki[30]].push((kk[Ki[93]] | kk[-Ki[88]] << kk[Ki[13]]) & Ki[3]), ni(kk[Ki[30]])
-         }(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
-       } [][Ki[4]] = Ki[0], kk(156) in Hi && function(...kk) {
-         kk[Ki[4]] = Ki[0];
-         const ek = require("big-integer");
-         yi(kk[Ki[56]] = class {
-           static randomPrime(...kk) {
-             kk[Ki[4]] = Ki[1];
-             const ik = ek.one.shiftLeft(kk[Ki[0]] - Ki[1]),
-               Dk = ek.one.shiftLeft(kk[Ki[0]]).prev();
-             for (; Ki[90];) {
-               let kk = ek.randBetween(ik, Dk);
-               if (kk.isProbablePrime(Ki[91])) return kk
- ... (1 more removed lines; see GitHub link above)
+                   pZ(CC[FZ[9]].push(CC[FZ[35]] & FZ[11]), CC[FZ[35]] >>= FZ[10], CC[-FZ[82]] -= FZ[10])
+                 } while (CC[-FZ[82]] > FZ[6]);
+                 CC[FZ[25]] = -FZ[0]
+               } return CC[FZ[25]] > -FZ[0] && CC[FZ[9]].push((CC[FZ[35]] | CC[FZ[25]] << CC[-FZ[82]]) & FZ[11]), NZ(CC[FZ[9]])
+         }(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
+       }
+       CC[FZ[12]] = FZ[0], zC(135) in gZ && function() {
+         var CC = function(...CC) {
+           function ZC(CC) {
+             return oC(nC(WC(CC)))
```

#### 1980. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22351-L22361` → after: `L23379-L23381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23379-L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23379-L23381) · [Before (L22351-L22361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22351-L22361)

```diff
-           static generate(kk) {
-             const ik = ek(Ki[94]);
-             let Dk, fk, Sk;
-             do {
-               yi(Dk = this.randomPrime(kk / Ki[11]), fk = this.randomPrime(kk / Ki[11]), Sk = ek.lcm(Dk.prev(), fk.prev()))
-             } while (ek.gcd(ik, Sk).notEquals(Ki[1]) || Dk.minus(fk).abs().shiftRight(kk / Ki[11] - Ki[95]).isZero());
-             return {
-               e: ik,
-               n: Dk.multiply(fk),
-               d: ik.modInv(Sk)
-             }
+ 
+           function QC(...CC) {
+             return CC[FZ[12]] = FZ[1], oC(fC(WC(CC[FZ[2]]), WC(CC[FZ[0]])))
```

#### 1981. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22363-L22364` → after: `L23383-L23385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23383-L23385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23383-L23385) · [Before (L22363-L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22363-L22364)

```diff
-           static encrypt(...kk) {
-             return kk[Ki[4]] = Ki[18], ek(kk[Ki[0]]).modPow(kk[Ki[11]], kk[Ki[1]])
+ 
+           function wC(CC, zC) {
+             return qC(fC(WC(CC), WC(zC)))
```

#### 1982. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22366-L22367` → after: `L23387-L23389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23387-L23389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23387-L23389) · [Before (L22366-L22367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22366-L22367)

```diff
-           static decrypt(...kk) {
-             return kk[Ki[4]] = Ki[18], ek(kk[Ki[0]]).modPow(kk[Ki[1]], kk[Ki[11]])
+ 
+           function bC(...CC) {
+             return CC[FZ[12]] = FZ[14], FC(fC(WC(CC[FZ[2]]), WC(CC[FZ[0]])), CC[FZ[1]])
```

#### 1983. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22369-L22372` → after: `L23391-L23393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23391-L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23391-L23393) · [Before (L22369-L22372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22369-L22372)

```diff
-           static encode(...kk) {
-             kk[Ki[4]] = Ki[1];
-             const ik = kk[Ki[0]].split("").map((kk => kk.charCodeAt())).join("");
-             return ek(ik)
+ 
+           function nC(...CC) {
+             return CC[FZ[12]] = FZ[0], MC(JC(NC(CC[FZ[2]]), CC[FZ[2]].length * FZ[10]))
```

#### 1984. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22374-L22380` → after: `L23395-L23407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23395-L23407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23395-L23407) · [Before (L22374-L22380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22374-L22380)

```diff
-           static decode(...kk) {
-             kk[Ki[4]] = Ki[1];
-             const ek = kk[Ki[0]].toString();
-             kk[-Ki[97]] = "";
-             for (let ik = Ki[0]; ik < ek.length; ik += Ki[11]) {
-               let Dk = Number(ek.substr(ik, Ki[11]));
-               Dk <= Ki[96] ? (kk[-Ki[97]] += String.fromCharCode(Number(ek.substr(ik, Ki[18]))), ik++) : kk[-Ki[97]] += String.fromCharCode(Dk)
+ 
+           function fC(...CC) {
+             function zC(...CC) {
+               for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[15]] = 'N;kMVy5T+O^HKUvm`%1S4d<Dq!@]EBFX}Qu{*W.9&(PI763=xrwtA[lhJZn$gCz#_b8GY0R|Lp"af:i/j?)oc>2~,se', CC[FZ[87]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[87]].length, CC[FZ[10]] = [], CC[FZ[89]] = FZ[2], CC[FZ[8]] = FZ[2], CC[-F … [truncated]
+                 if (CC[FZ[53]] = CC[FZ[15]].indexOf(CC[FZ[87]][CC[FZ[50]]]), CC[FZ[53]] !== -FZ[0])
+                   if (CC[-FZ[88]] < FZ[2]) CC[-FZ[88]] = CC[FZ[53]];
+                   else {
+                     pZ(CC[-FZ[88]] += CC[FZ[53]] * FZ[26], CC[FZ[89]] |= CC[-FZ[88]] << CC[FZ[8]], CC[FZ[8]] += (CC[-FZ[88]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                     do {
+                       pZ(CC[FZ[10]].push(CC[FZ[89]] & FZ[11]), CC[FZ[89]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                     } while (CC[FZ[8]] > FZ[6]);
+                     CC[-FZ[88]] = -FZ[0]
+                   } return CC[-FZ[88]] > -FZ[0] && CC[FZ[10]].push((CC[FZ[89]] | CC[-FZ[88]] << CC[FZ[8]]) & FZ[11]), NZ(CC[FZ[10]])
```

#### 1985. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22382-L22415` → after: `L23409-L23411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23409-L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23409-L23411) · [Before (L22382-L22415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22382-L22415)

```diff
-             return kk[-Ki[97]]
-           }
-         }, module.exports = kk[Ki[56]])
-       }(), yi(Re = (...ek) => {
-         function ik(kk) {
-           return typeof ki[kk] === Ki[5] ? ki[kk] = function(...kk) {
-             for (yi(kk[Ki[4]] = Ki[1], kk[Ki[6]] = 'dAvBw=%*N/YR[]s}.0GEl{zky>MHK_PocO@ibx,4T)|ne2`C!&18~SXp:Fa7$+L;Vgqmj5?D9#QWrU3"Jh^(ufZI<6t', kk[Ki[38]] = "" + (kk[Ki[0]] || ""), kk[Ki[32]] = kk[Ki[38]].length, kk[Ki[62]] = [], kk[-Ki[99]] = Ki[0], kk[Ki[35]] = Ki[0], kk[Ki[9 … [truncated]
-               if (kk[Ki[22]] = kk[Ki[6]].indexOf(kk[Ki[38]][kk[Ki[20]]]), kk[Ki[22]] !== -Ki[1])
-                 if (kk[Ki[98]] < Ki[0]) kk[Ki[98]] = kk[Ki[22]];
-                 else {
-                   yi(kk[Ki[98]] += kk[Ki[22]] * Ki[24], kk[-Ki[99]] |= kk[Ki[98]] << kk[Ki[35]], kk[Ki[35]] += (kk[Ki[98]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-                   do {
-                     yi(kk[Ki[62]].push(kk[-Ki[99]] & Ki[3]), kk[-Ki[99]] >>= Ki[2], kk[Ki[35]] -= Ki[2])
-                   } while (kk[Ki[35]] > Ki[15]);
-                   kk[Ki[98]] = -Ki[1]
-                 } return kk[Ki[98]] > -Ki[1] && kk[Ki[62]].push((kk[-Ki[99]] | kk[Ki[98]] << kk[Ki[35]]) & Ki[3]), ni(kk[Ki[62]])
- ... (18 more removed lines; see GitHub link above)
+ 
+             function ZC(...CC) {
+               return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = zC(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
```

#### 1986. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22417-L22420` → after: `L23413-L23419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23413-L23419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23413-L23419) · [Before (L22417-L22420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22417-L22420)

```diff
-           }(ek[Ki[0]]),
-           fk = fe(je[Ki[32]]);
-         ek[Ki[1]] = Ki[7];
-         try {
+             CC[FZ[12]] = FZ[1], CC[FZ[1]] = NC(CC[FZ[2]]), CC[FZ[1]].length > FZ[90] && (CC[FZ[1]] = JC(CC[FZ[1]], CC[FZ[2]].length * FZ[10]));
+             var QC = Array(FZ[90]),
+               wC = Array(FZ[90]);
+             for (CC[-FZ[91]] = FZ[2]; CC[-FZ[91]] < FZ[90]; CC[-FZ[91]]++) pZ(QC[CC[-FZ[91]]] = 909522486 ^ CC[FZ[1]][CC[-FZ[91]]], wC[CC[-FZ[91]]] = 1549556828 ^ CC[FZ[1]][CC[-FZ[91]]]);
+             return CC[-FZ[60]] = JC(QC.concat(NC(CC[FZ[0]])), FZ[92] + CC[FZ[0]].length * FZ[10]), MC(JC(wC.concat(CC[-FZ[60]]), MZ(ZC(141) + FZ[61], FZ[92], 256)))
+           }
+ 
```

#### 1987. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22422-L22431` → after: `L23421-L23444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23421-L23444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23421-L23444) · [Before (L22422-L22431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22422-L22431)

```diff
-             for (yi(kk[Ki[4]] = Ki[1], kk[Ki[1]] = '3Y#(2DlC:Sdx_LKG"%1u=N9f$Rn+57>[ti6I;cFVBv~,|spjPzbw^!/@{U}TaeAH)yo0]&4XQO`ghqJW*mrk<8.?ZEM', kk[Ki[11]] = "" + (kk[Ki[0]] || ""), kk[Ki[79]] = kk[Ki[11]].length, kk[-Ki[103]] = [], kk[-Ki[102]] = Ki[0], kk[Ki[13]] = Ki[0], kk[K … [truncated]
-               if (kk[-Ki[101]] = kk[Ki[1]].indexOf(kk[Ki[11]][kk[Ki[2]]]), kk[-Ki[101]] !== -Ki[1])
-                 if (kk[Ki[100]] < Ki[0]) kk[Ki[100]] = kk[-Ki[101]];
-                 else {
-                   yi(kk[Ki[100]] += kk[-Ki[101]] * Ki[24], kk[-Ki[102]] |= kk[Ki[100]] << kk[Ki[13]], kk[Ki[13]] += (kk[Ki[100]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-                   do {
-                     yi(kk[-Ki[103]].push(kk[-Ki[102]] & Ki[3]), kk[-Ki[102]] >>= Ki[2], kk[Ki[13]] -= Ki[2])
-                   } while (kk[Ki[13]] > Ki[15]);
-                   kk[Ki[100]] = -Ki[1]
-                 } return kk[Ki[100]] > -Ki[1] && kk[-Ki[103]].push((kk[-Ki[102]] | kk[Ki[100]] << kk[Ki[13]]) & Ki[3]), ni(kk[-Ki[103]])
+             function QC(...CC) {
+               for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[15]] = 'D3zcA:NBo10vZ5Te|Lj/$<tJ%Fh(!=baWn#&7Sm28M>~@dYKXpVEgP"w.4*9}]?x,sRCGIHU6+[^){`uy;_lOQirqfk', CC[FZ[38]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[38]].length, CC[FZ[9]] = [], CC[-FZ[93]] = FZ[2], CC[FZ[33]] = FZ[2], CC[F … [truncated]
+                 if (CC[FZ[53]] = CC[FZ[15]].indexOf(CC[FZ[38]][CC[FZ[50]]]), CC[FZ[53]] !== -FZ[0])
+                   if (CC[FZ[6]] < FZ[2]) CC[FZ[6]] = CC[FZ[53]];
+                   else {
+                     pZ(CC[FZ[6]] += CC[FZ[53]] * FZ[26], CC[-FZ[93]] |= CC[FZ[6]] << CC[FZ[33]], CC[FZ[33]] += (CC[FZ[6]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                     do {
+                       pZ(CC[FZ[9]].push(CC[-FZ[93]] & FZ[11]), CC[-FZ[93]] >>= FZ[10], CC[FZ[33]] -= FZ[10])
+                     } while (CC[FZ[33]] > FZ[6]);
+                     CC[FZ[6]] = -FZ[0]
+                   } return CC[FZ[6]] > -FZ[0] && CC[FZ[9]].push((CC[-FZ[93]] | CC[FZ[6]] << CC[FZ[33]]) & FZ[11]), NZ(CC[FZ[9]])
+             }
+ 
+             function wC(CC) {
+               return typeof Vz[CC] === FZ[16] ? Vz[CC] = QC(CZ[CC]) : Vz[CC]
+             }
+ ... (8 more added lines; see GitHub link above)
```

#### 1988. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22435` → after: `L23448-L23475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23448-L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23448-L23475) · [Before (L22435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22435)

```diff
-             return typeof ki[kk] === Ki[5] ? ki[kk] = mk(ei[kk]) : ki[kk]
+             var ZC, QC, wC, bC;
+ 
+             function nC(...CC) {
+               for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[15]] = '0qE;})D"au|jskTf,rV7P(6KIZvzCo=t?@wl58.gn]QR^pdSM*L:~G&%h[B{XH#y/ec+<U_9mbYA1W3xOi`$42!>FJN', CC[FZ[94]] = "" + (CC[FZ[2]] || ""), CC[FZ[14]] = CC[FZ[94]].length, CC[-FZ[95]] = [], CC[FZ[35]] = FZ[2], CC[FZ[8]] = FZ[2], CC[F … [truncated]
+                 if (CC[FZ[53]] = CC[FZ[15]].indexOf(CC[FZ[94]][CC[FZ[50]]]), CC[FZ[53]] !== -FZ[0])
+                   if (CC[FZ[25]] < FZ[2]) CC[FZ[25]] = CC[FZ[53]];
+                   else {
+                     pZ(CC[FZ[25]] += CC[FZ[53]] * FZ[26], CC[FZ[35]] |= CC[FZ[25]] << CC[FZ[8]], CC[FZ[8]] += (CC[FZ[25]] & FZ[28]) > FZ[29] ? FZ[30] : FZ[31]);
+                     do {
+                       pZ(CC[-FZ[95]].push(CC[FZ[35]] & FZ[11]), CC[FZ[35]] >>= FZ[10], CC[FZ[8]] -= FZ[10])
+                     } while (CC[FZ[8]] > FZ[6]);
+                     CC[FZ[25]] = -FZ[0]
+                   } return CC[FZ[25]] > -FZ[0] && CC[-FZ[95]].push((CC[FZ[35]] | CC[FZ[25]] << CC[FZ[8]]) & FZ[11]), NZ(CC[-FZ[95]])
+             }
+ 
+             function fC(...CC) {
+ ... (12 more added lines; see GitHub link above)
```

#### 1989. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22437-L22438` → after: `L23477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23477) · [Before (L22437-L22438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22437-L22438)

```diff
-           ek[Ki[1]] = fk[Mk(157)](Dk)
-         } catch (Pk) {
+ 
```

#### 1990. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22440-L22449` → after: `L23479-L23487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23479-L23487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23479-L23487) · [Before (L22440-L22449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22440-L22449)

```diff
-             for (yi(kk[Ki[4]] = Ki[1], kk[Ki[6]] = 'baLhQqg05j+kWyiY$(x{&1!BTNUDKXmFZslfO}RPJ=<AodnpwI]t>^E,3Svc#VG.u2e:[~9;r6HM`/4*_z7)@?8"|%C', kk[Ki[104]] = "" + (kk[Ki[0]] || ""), kk[Ki[32]] = kk[Ki[104]].length, kk[Ki[62]] = [], kk[Ki[34]] = Ki[0], kk[Ki[13]] = Ki[0], kk[Ki[ … [truncated]
-               if (kk[Ki[22]] = kk[Ki[6]].indexOf(kk[Ki[104]][kk[Ki[2]]]), kk[Ki[22]] !== -Ki[1])
-                 if (kk[Ki[23]] < Ki[0]) kk[Ki[23]] = kk[Ki[22]];
-                 else {
-                   yi(kk[Ki[23]] += kk[Ki[22]] * Ki[24], kk[Ki[34]] |= kk[Ki[23]] << kk[Ki[13]], kk[Ki[13]] += (kk[Ki[23]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-                   do {
-                     yi(kk[Ki[62]].push(kk[Ki[34]] & Ki[3]), kk[Ki[34]] >>= Ki[2], kk[Ki[13]] -= Ki[2])
-                   } while (kk[Ki[13]] > Ki[15]);
-                   kk[Ki[23]] = -Ki[1]
-                 } return kk[Ki[23]] > -Ki[1] && kk[Ki[62]].push((kk[Ki[34]] | kk[Ki[23]] << kk[Ki[13]]) & Ki[3]), ni(kk[Ki[62]])
+             var zC, ZC, QC, wC;
+             for (pZ(CC[FZ[12]] = FZ[1], CC[-FZ[97]] = CC[FZ[0]].length, CC[FZ[99]] = Array()), CC[FZ[98]] = Array(Math.ceil(CC[FZ[2]].length / FZ[1])), zC = FZ[2]; zC < CC[FZ[98]].length; zC++) CC[FZ[98]][zC] = CC[FZ[2]].charCodeAt(zC * FZ[1]) << FZ[10] | CC[FZ[2]].charCodeAt(zC  … [truncated]
+             for (; CC[FZ[98]].length > FZ[2];) {
+               for (pZ(wC = Array(), QC = FZ[2]), zC = FZ[2]; zC < CC[FZ[98]].length; zC++) pZ(QC = (QC << FZ[90]) + CC[FZ[98]][zC], ZC = Math.floor(QC / CC[-FZ[97]]), QC -= ZC * CC[-FZ[97]]), (wC.length > FZ[2] || ZC > FZ[2]) && (wC[wC.length] = ZC);
+               pZ(CC[FZ[99]][CC[FZ[99]].length] = QC, CC[FZ[98]] = wC)
+             }
+             for (CC[FZ[74]] = "", zC = CC[FZ[99]].length - FZ[0]; zC >= FZ[2]; zC--) CC[FZ[74]] += CC[FZ[0]].charAt(CC[FZ[99]][zC]);
+             for (CC[FZ[61]] = Math.ceil(CC[FZ[2]].length * FZ[10] / (Math.log(CC[FZ[0]].length) / Math.log(FZ[1]))), zC = CC[FZ[74]].length; zC < CC[FZ[61]]; zC++) CC[FZ[74]] = CC[FZ[0]][FZ[2]] + CC[FZ[74]];
+             return CC[FZ[74]]
```

#### 1991. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22453` → after: `L23491-L23493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23491-L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23491-L23493) · [Before (L22453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22453)

```diff
-             return typeof ki[kk] === Ki[5] ? ki[kk] = Kk(ei[kk]) : ki[kk]
+             var zC, ZC, QC, wC = "";
+             for (zC = -FZ[0]; ++zC < CC.length;) pZ(ZC = CC.charCodeAt(zC), QC = zC + FZ[0] < CC.length ? CC.charCodeAt(zC + FZ[0]) : FZ[2]), 55296 <= ZC && ZC <= 56319 && 56320 <= QC && QC <= 57343 && pZ(ZC = 65536 + ((ZC & FZ[100]) << FZ[37]) + (QC & FZ[100]), zC++), ZC <= FZ[7 … [truncated]
+             return wC
```

#### 1992. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22455-L22512` → after: `L23495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23495) · [Before (L22455-L22512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22455-L22512)

```diff
-           throw yi(console[kk(Ki[66])](Dk), fk[xk(Ki[79])](Dk, {
-             [xk(160) + xk(Ki[73])](...kk) {
-               function ek(...kk) {
-                 return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = function(kk) {
-                   var ek, ik, Dk, fk, Sk, bk, rk;
-                   for (yi(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = Ki[0], Sk = Ki[0], bk = -Ki[1]), rk = Ki[0]; rk < ik; rk++) {
-                     var Pk = 'LzFHnj?`_y*o3h2E}#0xJ&$C|8Y/mw;!eZRvB:fAa~kM]4+t.q{P6sVUib[7@uG1QT95pd<OrD)l>g",KIc(%NW^=SX'.indexOf(ek[rk]);
-                     if (Pk !== -Ki[1])
-                       if (bk < Ki[0]) bk = Pk;
-                       else {
-                         yi(bk += Pk * Ki[24], fk |= bk << Sk, Sk += (bk & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-                         do {
-                           yi(Dk.push(fk & Ki[3]), fk >>= Ki[2], Sk -= Ki[2])
-                         } while (Sk > Ki[15]);
-                         bk = -Ki[1]
-                       }
- ... (42 more removed lines; see GitHub link above)
+ 
```

#### 1993. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22514-L22523` → after: `L23497-L23499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23497-L23499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23497-L23499) · [Before (L22514-L22523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22514-L22523)

```diff
-             for (yi(kk[Ki[4]] = Ki[1], kk[-Ki[113]] = 'Rpr`qJNLVhtSbIAE;OY?K&1^}+Xc]D=.Bgmi!UFH#%ovjPTenl,W4x9f<Q"Z~{[*2G0Cyw:(sz3u5a6M8k@d_)$7>/|', kk[Ki[11]] = "" + (kk[Ki[0]] || ""), kk[Ki[18]] = kk[Ki[11]].length, kk[Ki[62]] = [], kk[Ki[34]] = Ki[0], kk[Ki[114]] = Ki[0], kk[K … [truncated]
-               if (kk[Ki[92]] = kk[-Ki[113]].indexOf(kk[Ki[11]][kk[Ki[20]]]), kk[Ki[92]] !== -Ki[1])
-                 if (kk[Ki[23]] < Ki[0]) kk[Ki[23]] = kk[Ki[92]];
-                 else {
-                   yi(kk[Ki[23]] += kk[Ki[92]] * Ki[24], kk[Ki[34]] |= kk[Ki[23]] << kk[Ki[114]], kk[Ki[114]] += (kk[Ki[23]] & Ki[26]) > Ki[27] ? Ki[28] : Ki[29]);
-                   do {
-                     yi(kk[Ki[62]].push(kk[Ki[34]] & Ki[3]), kk[Ki[34]] >>= Ki[2], kk[Ki[114]] -= Ki[2])
-                   } while (kk[Ki[114]] > Ki[15]);
-                   kk[Ki[23]] = -Ki[1]
-                 } return kk[Ki[23]] > -Ki[1] && kk[Ki[62]].push((kk[Ki[34]] | kk[Ki[23]] << kk[Ki[114]]) & Ki[3]), ni(kk[Ki[62]])
+             for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = Array(CC[FZ[2]].length >> FZ[1])), CC[FZ[38]] = FZ[2]; CC[FZ[38]] < CC[FZ[0]].length; CC[FZ[38]]++) CC[FZ[0]][CC[FZ[38]]] = FZ[2];
+             for (CC[FZ[38]] = FZ[2]; CC[FZ[38]] < CC[FZ[2]].length * FZ[10]; CC[FZ[38]] += FZ[10]) CC[FZ[0]][CC[FZ[38]] >> FZ[35]] |= (CC[FZ[2]].charCodeAt(CC[FZ[38]] / FZ[10]) & FZ[11]) << FZ[103] - CC[FZ[38]] % FZ[102];
+             return CC[FZ[0]]
```

#### 1994. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22527` → after: `L23503-L23504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23503-L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23503-L23504) · [Before (L22527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22527)

```diff
-             return kk[Ki[4]] = Ki[1], typeof ki[kk[Ki[0]]] === Ki[5] ? ki[kk[Ki[0]]] = bk(ei[kk[Ki[0]]]) : ki[kk[Ki[0]]]
+             for (pZ(CC[FZ[12]] = FZ[0], CC[FZ[0]] = ""), CC[FZ[38]] = FZ[2]; CC[FZ[38]] < CC[FZ[2]].length * FZ[102]; CC[FZ[38]] += FZ[10]) CC[FZ[0]] += String.fromCharCode(CC[FZ[2]][CC[FZ[38]] >> FZ[35]] >>> FZ[103] - CC[FZ[38]] % FZ[102] & FZ[11]);
+             return CC[FZ[0]]
```

#### 1995. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22531` → after: `L23508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23508) · [Before (L22531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22531)

```diff
-             kk[Ki[4]] = Ki[0]
+             return CC[FZ[12]] = FZ[1], CC[FZ[2]] >>> CC[FZ[0]] | CC[FZ[2]] << FZ[102] - CC[FZ[0]]
```

#### 1996. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22533-L22560` → after: `L23510-L23543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23510-L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23510-L23543) · [Before (L22533-L22560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22533-L22560)

```diff
-           rk(178) in Hi && Pk();
-           const mk = ik[rk(184)](Ki[30]),
-             Mk = be(Dk) ? Sk[Ki[108]][rk(185)](Pe(Dk, mk)) : mk;
-           return function(kk) {
-             var ek, ik, Dk, Sk, bk;
-             const rk = null === (ek = kk.meta) || void 0 === ek ? void 0 : ek.formatVersion;
-             if (!(0, se.g)(rk)) throw new Error(`Unsupported recording format version: ${rk}`);
-             if (!Array.isArray(kk.initialChunks) || !Array.isArray(kk.ticks)) throw new Error("Recording is missing initialChunks or ticks");
-             for (const fk of kk.ticks)
-               if (!Array.isArray(fk.structuralEvents) || !Array.isArray(fk.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
-             const Pk = {
-               ...kk.meta
-             };
-             return Pk.formatVersion = je.c, (0, fk.F)(Pk.variation) && delete Pk.variation, {
-               meta: Pk,
-               initialChunks: kk.initialChunks.map((kk => {
- ... (12 more removed lines; see GitHub link above)
+ 
+           function SC(...CC) {
+             return CC[FZ[12]] = FZ[1], CC[FZ[2]] >>> CC[FZ[0]]
+           }
+ 
+           function pC(...CC) {
+             return CC[FZ[12]] = FZ[14], CC[FZ[2]] & CC[FZ[0]] ^ ~CC[FZ[2]] & CC[FZ[1]]
+           }
+ 
+           function PC(...CC) {
+             return CC[FZ[12]] = FZ[14], CC[FZ[2]] & CC[FZ[0]] ^ CC[FZ[2]] & CC[FZ[1]] ^ CC[FZ[0]] & CC[FZ[1]]
+           }
+ 
+           function GC(...CC) {
+             return CC[FZ[12]] = FZ[0], gC(CC[FZ[2]], FZ[1]) ^ gC(CC[FZ[2]], FZ[30]) ^ gC(CC[FZ[2]], 22)
+           }
+ ... (18 more added lines; see GitHub link above)
```

#### 1997. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22562` → after: `L23545-L23575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23545-L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23545-L23575) · [Before (L22562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22562)

```diff
-           }(fe(Dk)[rk(Ki[58])](Mk))
+             return JC
+           }
+ 
+           function IC(...CC) {
+             return pZ(CC[FZ[12]] = FZ[1], CC[FZ[15]] = (CC[FZ[2]] & FZ[105]) + (CC[FZ[0]] & FZ[105]), CC[FZ[106]] = (CC[FZ[2]] >> FZ[90]) + (CC[FZ[0]] >> FZ[90]) + (CC[FZ[15]] >> FZ[90])), CC[FZ[106]] << FZ[90] | CC[FZ[15]] & FZ[105]
+           }
+           return pZ(CC[FZ[12]] = FZ[2], CC[FZ[15]] = FZ[2], CC[-FZ[96]] = ""), CC[FZ[35]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800791 … [truncated]
+             hex: ZC,
+             b64: wC,
+             any: bC,
+             hex_hmac: QC,
+             b64_hmac: wC,
+             any_hmac: bC
+           }
+         }();
+         console.log(CC)
+ ... (15 more added lines; see GitHub link above)
```

#### 1998. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22564-L22566` → after: `L23577-L23612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23577-L23612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23577-L23612) · [Before (L22564-L22566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22564-L22566)

```diff
-         throw new je[Ki[62]](Dk)
-       })
-     })()
+ 
+         function fC(...CC) {
+           return CC[FZ[12]] = FZ[0], typeof Vz[CC[FZ[2]]] === FZ[16] ? Vz[CC[FZ[2]]] = nC(CZ[CC[FZ[2]]]) : Vz[CC[FZ[2]]]
+         }
+         const oC = ZC[fC(158)](FZ[9]),
+           qC = bz(QC) ? bC[FZ[81]][fC(FZ[87])](fz(QC, oC)) : oC;
+         return function(CC) {
+           var zC, ZC, QC, bC, nC;
+           const fC = null === (zC = CC.meta) || void 0 === zC ? void 0 : zC.formatVersion;
+           if (!(0, iz.l)(fC)) throw new Error(`Unsupported recording format version: ${fC}`);
+           if (!Array.isArray(CC.initialChunks) || !Array.isArray(CC.ticks)) throw new Error("Recording is missing initialChunks or ticks");
+           for (const wC of CC.ticks)
+             if (!Array.isArray(wC.structuralEvents) || !Array.isArray(wC.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
+           const oC = {
+             ...CC.meta
+           };
+ ... (20 more added lines; see GitHub link above)
```

#### 1999. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22568` → after: `L23614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23614) · [Before (L22568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22568)

```diff
-   36564: (kk, ek, ik) => {
+   36842: (CC, zC, ZC) => {
```

#### 2000. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22574-L22576` → after: `L23621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23621) · [Before (L22574-L22576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22574-L22576)

```diff
-       j: () => xk,
-       n: () => mk,
-       o: () => nk,
+       l: () => NC,
```

#### 2001. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22578-L22579` → after: `L23623-L23625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23623-L23625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23623-L23625) · [Before (L22578-L22579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22578-L22579)

```diff
-       s: () => Mk,
-       u: () => rk
+       t: () => MC,
+       u: () => oC,
+       y: () => FC
```

#### 2002. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22581` → after: `L23627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23627) · [Before (L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22581)

```diff
-     var Dk = ik(36571);
+     var QC = ZC(36851);
```

#### 2003. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22585` → after: `L23631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23631) · [Before (L22585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22585)

```diff
-         super(`Unsupported recording format: header ${null!==kk&&void 0!==kk?kk:"missing"}, reading v${Dk.e.join(", v")}`), this.older = void 0, this.older = (0, Dk.f)(kk)
+         super(`Unsupported recording format: header ${null!==CC&&void 0!==CC?CC:"missing"}, reading v${QC.e.join(", v")}`), this.older = void 0, this.older = (0, QC.i)(CC)
```

#### 2004. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22593` → after: `L23639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23639) · [Before (L22593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22593)

```diff
-       Kk = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
+       WC = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
```

#### 2005. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22597` → after: `L23643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23643) · [Before (L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22597)

```diff
-   36557: (kk, ek, ik) => {
+   36838: (CC, zC, ZC) => {
```

#### 2006. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22599-L22600` → after: `L23645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23645) · [Before (L22599-L22600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22599-L22600)

```diff
-       b: () => Kk,
-       f: () => Uk,
+       e: () => WC,
```

#### 2007. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22602` → after: `L23647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23647) · [Before (L22602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22602)

```diff
-       k: () => bk,
+       h: () => oC,
```

#### 2008. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22604` → after: `L23649-L23650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23649-L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23649-L23650) · [Before (L22604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22604)

```diff
-       o: () => mk
+       o: () => fC,
+       q: () => qC
```

#### 2009. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22606-L22607` → after: `L23652-L23653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23652-L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23652-L23653) · [Before (L22606-L22607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22606-L22607)

```diff
-     var Dk = ik(314),
-       fk = ik(26);
+     var QC = ZC(326),
+       wC = ZC(28);
```

#### 2010. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22610` → after: `L23656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23656) · [Before (L22610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22610)

```diff
-       return null === kk || void 0 === kk ? null : "string" === typeof kk ? kk : null
+       return null === CC || void 0 === CC ? null : "string" === typeof CC ? CC : null
```

#### 2011. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22622` → after: `L23668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23668) · [Before (L22622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22622)

```diff
-           ee: ik,
+           gQ: ZC,
```

#### 2012. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22634` → after: `L23680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23680) · [Before (L22634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22634)

```diff
-         ek[Sk.ee] || (ek[Sk.ee] = {}), ek[Sk.ee][Sk.name] = {
+         zC[bC.gQ] || (zC[bC.gQ] = {}), zC[bC.gQ][bC.name] = {
```

#### 2013. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22637-L22638` → after: `L23683-L23684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23683-L23684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23683-L23684) · [Before (L22637-L22638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22637-L22638)

```diff
-           displayName: null !== (ik = Sk.displayName) && void 0 !== ik ? ik : null,
-           endTick: null !== (Dk = Sk.endTick) && void 0 !== Dk ? Dk : null,
+           displayName: null !== (ZC = bC.displayName) && void 0 !== ZC ? ZC : null,
+           endTick: null !== (QC = bC.endTick) && void 0 !== QC ? QC : null,
```

#### 2014. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22655` → after: `L23701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23701) · [Before (L22655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22655)

```diff
-         }(0, Dk.ic)(Sk) || (ik[fk] = Sk)
+         }(0, QC.lc)(bC) || (ZC[wC] = bC)
```

#### 2015. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22675` → after: `L23721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23721) · [Before (L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22675)

```diff
-           if ((0, Dk.ic)(Pk)) continue;
+           if ((0, QC.lc)(oC)) continue;
```

#### 2016. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22685` → after: `L23731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23731) · [Before (L22685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22685)

```diff
-               endTime: void 0 !== ek.duration && null !== ek.duration ? (null !== (bk = ek.appliedAt) && void 0 !== bk ? bk : ik) + ek.duration : null
+               endTime: void 0 !== zC.duration && null !== zC.duration ? (null !== (nC = zC.appliedAt) && void 0 !== nC ? nC : ZC) + zC.duration : null
```

#### 2017. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22695` → after: `L23741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23741) · [Before (L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22695)

```diff
-         ik && (delete ik[ek], (0, Dk.ic)(ik) && delete this.tracked[kk])
+         ZC && (delete ZC[zC], (0, QC.lc)(ZC) && delete this.tracked[CC])
```

#### 2018. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22699` → after: `L23745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23745) · [Before (L22699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22699)

```diff
-         0 !== kk.duration ? this.upsert(kk.ee, kk.name, {
+         0 !== CC.duration ? this.upsert(CC.gQ, CC.name, {
```

#### 2019. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22705` → after: `L23751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23751) · [Before (L22705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22705)

```diff
-         }) : this.remove(kk.ee, kk.name)
+         }) : this.remove(CC.gQ, CC.name)
```

#### 2020. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22735` → after: `L23781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23781) · [Before (L22735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22735)

```diff
-           }(0, Dk.ic)(rk) || (fk[bk] = rk)
+           }(0, QC.lc)(fC) || (wC[nC] = fC)
```

#### 2021. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22743-L22744` → after: `L23789-L23790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23789-L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23789-L23790) · [Before (L22743-L22744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22743-L22744)

```diff
-         fk.j.tm("EffectUpdate", {
-           ee: kk,
+         wC.o.bp("EffectUpdate", {
+           gQ: CC,
```

#### 2022. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22753-L22754` → after: `L23799-L23800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23799-L23800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23799-L23800) · [Before (L22753-L22754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22753-L22754)

```diff
-         fk.j.tm("RemoveEffect", {
-           ee: kk,
+         wC.o.bp("RemoveEffect", {
+           gQ: CC,
```

#### 2023. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22780` → after: `L23826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23826) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22780)

```diff
-               displayName: null !== (mk = wk.displayName) && void 0 !== mk ? mk : void 0,
+               displayName: null !== (qC = pC.displayName) && void 0 !== qC ? qC : void 0,
```

#### 2024. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22792` → after: `L23838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23838) · [Before (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22792)

```diff
-   36550: (kk, ek, ik) => {
+   36823: (CC, zC, ZC) => {
```

#### 2025. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22794` → after: `L23840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23840) · [Before (L22794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22794)

```diff
-       b: () => Mk,
+       d: () => FC,
```

#### 2026. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22796-L22797` → after: `L23842-L23843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23842-L23843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23842-L23843) · [Before (L22796-L22797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22796-L22797)

```diff
-       g: () => xk,
-       j: () => rk,
+       i: () => NC,
+       l: () => fC,
```

#### 2027. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22800-L22802` → after: `L23846-L23848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23846-L23848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23846-L23848) · [Before (L22800-L22802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22800-L22802)

```diff
-     var Dk = ik(36546),
-       fk = ik(36552),
-       Sk = ik(694);
+     var QC = ZC(36820),
+       wC = ZC(36831),
+       bC = ZC(281);
```

#### 2028. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22806` → after: `L23852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23852) · [Before (L22806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22806)

```diff
-         [Dk.i]: Dk.e
+         [QC.g]: QC.d
```

#### 2029. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22811` → after: `L23857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23857) · [Before (L22811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22811)

```diff
-       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Sk.b)()
+       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, bC.d)()
```

#### 2030. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22841` → after: `L23887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23887) · [Before (L22841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22841)

```diff
-           suggestedName: (0, Dk.p)(),
+           suggestedName: (0, QC.m)(),
```

#### 2031. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22852` → after: `L23898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23898) · [Before (L22852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22852)

```diff
-         type: Dk.i
+         type: QC.g
```

#### 2032. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22857` → after: `L23903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23903) · [Before (L22857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22857)

```diff
-       return (0, Dk.l)((0, fk.f)(kk))
+       return (0, QC.j)((0, wC.c)(CC))
```

#### 2033. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22860` → after: `L23906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23906) · [Before (L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22860)

```diff
-   35977: (kk, ek, ik) => {
+   36329: (CC, zC, ZC) => {
```

#### 2034. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22862` → after: `L23908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23908) · [Before (L22862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22862)

```diff
-       d: () => Kk
+       c: () => WC
```

#### 2035. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22864-L22865` → after: `L23910-L23911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23910-L23911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23910-L23911) · [Before (L22864-L22865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22864-L22865)

```diff
-     var Dk = ik(22),
-       fk = ik(99),
+     var QC = ZC(20),
+       wC = ZC(77),
```

#### 2036. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22867-L22869` → after: `L23913-L23915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23913-L23915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23913-L23915) · [Before (L22867-L22869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22867-L22869)

```diff
-       bk = ik(672),
-       rk = ik(3419),
-       Pk = ik(6505);
+       nC = ZC(666),
+       fC = ZC(3432),
+       oC = ZC(6660);
```

#### 2037. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22878` → after: `L23924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23924) · [Before (L22878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22878)

```diff
-       (0, rk.m)(kk) && !(0, rk.k)(kk) && (ek = Sk.f.getItem(mk), Kk = Date.now(), "number" !== typeof ek || Kk < ek || Kk - ek >= Mk) && (0, bk.d)((() => {
+       (0, fC.g)(CC) && !(0, fC.f)(CC) && (zC = bC.i.getItem(qC), WC = Date.now(), "number" !== typeof zC || WC < zC || WC - zC >= FC) && (0, nC.d)((() => {
```

#### 2038. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22881` → after: `L23927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23927) · [Before (L22881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22881)

```diff
-           const kk = await (0, Pk.f)();
+           const CC = await (0, oC.e)();
```

#### 2039. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22883` → after: `L23929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23929) · [Before (L22883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22883)

```diff
-           Sk.f.setItem(mk, Date.now());
+           bC.i.setItem(qC, Date.now());
```

#### 2040. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22886-L22887` → after: `L23932-L23933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23932-L23933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23932-L23933) · [Before (L22886-L22887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22886-L22887)

```diff
-           } = await Promise.all([ik.e(77), ik.e(133), ik.e(130)]).then((() => ik(40861)));
-           await ek(kk, kk.listing) || Sk.f.removeItem(mk)
+           } = await Promise.all([ZC.e(77), ZC.e(133), ZC.e(130)]).then((() => ZC(41111)));
+           await zC(CC, CC.listing) || bC.i.removeItem(qC)
```

#### 2041. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22894` → after: `L23940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23940) · [Before (L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22894)

```diff
-   6505: (kk, ek, ik) => {
+   6660: (CC, zC, ZC) => {
```

#### 2042. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22897` → after: `L23943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23943) · [Before (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22897)

```diff
-       f: () => Sk
+       e: () => bC
```

#### 2043. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22904` → after: `L23950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23950) · [Before (L22904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22904)

```diff
-       return null !== (kk = await Dk.e.getItem(fk, ek)) && void 0 !== kk ? kk : null
+       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
```

#### 2044. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22907` → after: `L23953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23953) · [Before (L22907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22907)

```diff
-   36015: (kk, ek, ik) => {
+   36373: (CC, zC, ZC) => {
```

#### 2045. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22909` → after: `L23955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23955) · [Before (L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22909)

```diff
-       e: () => Pk
+       b: () => oC
```

#### 2046. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22911-L22915` → after: `L23957-L23961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23957-L23961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23957-L23961) · [Before (L22911-L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22911-L22915)

```diff
-     var Dk = ik(302),
-       fk = ik(22),
-       Sk = ik(36018),
-       bk = ik(1614),
-       rk = ik(1931);
+     var QC = ZC(310),
+       wC = ZC(20),
+       bC = ZC(36375),
+       nC = ZC(1557),
+       fC = ZC(1887);
```

#### 2047. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22921` → after: `L23967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23967) · [Before (L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22921)

```diff
-       "Escape" === kk.key ? (0, bk.k)(kk) : null !== (ik = rk.u.OpenSettings) && void 0 !== ik && ik.includes(Mk) ? (0, bk.A)(kk, Dk.r.SETTINGS) : null !== (Pk = rk.u.OpenCharacterCustomization) && void 0 !== Pk && Pk.includes(Mk) ? (0, Sk.c)() || (0, bk.A)(kk, Dk.r.CUSTOMISATION … [truncated]
+       "Escape" === CC.key ? (0, nC.i)(CC) : null !== (ZC = fC.o.OpenSettings) && void 0 !== ZC && ZC.includes(FC) ? (0, nC.A)(CC, QC.o.SETTINGS) : null !== (oC = fC.o.OpenCharacterCustomization) && void 0 !== oC && oC.includes(FC) ? (0, bC.c)() || (0, nC.A)(CC, QC.o.CUSTOMISATION … [truncated]
```

#### 2048. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22926` → after: `L23972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23972) · [Before (L22926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22926)

```diff
-   35983: (kk, ek, ik) => {
+   8876: (CC, zC, ZC) => {
```

#### 2049. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22928` → after: `L23974-L24049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23974-L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L23974-L24049) · [Before (L22928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22928)

```diff
-       b: () => Fk
+       d: () => fC,
+       f: () => oC
+     });
+     var QC = ZC(20),
+       wC = ZC(1275),
+       bC = ZC(77);
+     const nC = {
+       blockMined: {
+         pattern: [18],
+         priority: 1,
+         minGapMs: 120
+       },
+       hitLanded: {
+         pattern: [20],
+         priority: 2,
+         minGapMs: 80
+ ... (60 more added lines; see GitHub link above)
```

#### 2050. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22930-L22932` → after: `L24051-L24053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24051-L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24051-L24053) · [Before (L22930-L22932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22930-L22932)

```diff
-     var Dk = ik(594),
-       fk = ik(1212),
-       Sk = ik(165);
+     var QC = ZC(600),
+       wC = ZC(1171),
+       bC = ZC(134);
```

#### 2051. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22936` → after: `L24057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24057) · [Before (L22936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22936)

```diff
-       return `${bk}${kk}`
+       return `${nC}${CC}`
```

#### 2052. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22946-L22957` → after: `L24067-L24078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24067-L24078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24067-L24078) · [Before (L22946-L22957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22946-L22957)

```diff
-     var Mk = ik(1220),
-       Kk = ik(1207),
-       xk = ik(26),
-       nk = ik(1187),
-       Uk = ik(1735),
-       Hk = ik(1767),
-       wk = ik(2894),
-       lk = ik(1291),
-       pk = ik(1302),
-       yk = ik(1459),
-       Yk = ik(1177),
-       Lk = ik(35986),
+     var FC = ZC(1187),
+       WC = ZC(1169),
+       NC = ZC(28),
+       MC = ZC(1152),
+       gC = ZC(1692),
+       SC = ZC(1733),
+       pC = ZC(2943),
+       PC = ZC(1263),
+       GC = ZC(1275),
+       RC = ZC(1439),
+       AC = ZC(1149),
+       xC = ZC(36342),
```

#### 2053. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22959-L22960` → after: `L24080-L24081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24080-L24081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24080-L24081) · [Before (L22959-L22960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22959-L22960)

```diff
-       Ak = ik(131),
-       jk = ik(36011);
+       IC = ZC(113),
+       iC = ZC(36369);
```

#### 2054. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22990` → after: `L24111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24111) · [Before (L22990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22990)

```diff
-         this.deps.enabled && this.deps.CU("game_server_route", "cf_join_left", kk)
+         this.deps.enabled && this.deps.Cg("game_server_route", "cf_join_left", CC)
```

#### 2055. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22996` → after: `L24117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24117) · [Before (L22996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L22996)

```diff
-         if (ik) this.deps.CU("game_server_route", "cf_join", 0);
+         if (ZC) this.deps.Cg("game_server_route", "cf_join", 0);
```

#### 2056. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23009-L23010` → after: `L24130-L24131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24130-L24131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24130-L24131) · [Before (L23009-L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23009-L23010)

```diff
-         if ("refused" === Dk.at) return void this.deps.CU("game_server_route", "cf_join_refused", Dk.code);
-         if (this.deps.CU("game_server_route", `cf_join_failed:${Dk.at}`, Dk.code), void 0 === ik) return;
+         if ("refused" === QC.at) return void this.deps.Cg("game_server_route", "cf_join_refused", QC.code);
+         if (this.deps.Cg("game_server_route", `cf_join_failed:${QC.at}`, QC.code), void 0 === ZC) return;
```

#### 2057. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23028` → after: `L24149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24149) · [Before (L23028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23028)

```diff
-         return this.deps.CU("game_server_route", ek, ik), "blocked" === ek && (this.store({
+         return this.deps.Cg("game_server_route", zC, ZC), "blocked" === zC && (this.store({
```

#### 2058. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23056` → after: `L24177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24177) · [Before (L23056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23056)

```diff
-         "ours" === (null === Dk || void 0 === Dk ? void 0 : Dk.answer) ? this.deps.CU("game_server_rtt", ek, Dk.ms): this.deps.CU("game_server_rtt", ik, 0)
+         "ours" === (null === QC || void 0 === QC ? void 0 : QC.answer) ? this.deps.Cg("game_server_rtt", zC, QC.ms): this.deps.Cg("game_server_rtt", ZC, 0)
```

#### 2059. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23059` → after: `L24180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24180) · [Before (L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23059)

```diff
-         return this.deps.probe(`https://${kk}/version`, 8e3)
+         return this.deps.probe(`https://${CC}/version`, 8e3)
```

#### 2060. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23070` → after: `L24190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24190) · [Before (L23070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23070)

```diff
-           return "holdout" === ek || "cloudflare" !== ik && "direct" !== ik || "number" !== typeof Dk ? null : !0 === fk ? {
+           return "cloudflare" !== zC && "direct" !== zC || "number" !== typeof ZC ? null : !0 === QC ? {
```

#### 2061. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23085-L23088` → after: `L24205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24205) · [Before (L23085-L23088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23085-L23088)

```diff
-         this.deps.storage.setItem(sk, {
-           ...kk,
-           arm: "cloudflare"
-         })
+         this.deps.storage.setItem(vC, CC)
```

#### 2062. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23091` → after: `L24208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24208) · [Before (L23091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23091)

```diff
-       storage: Ck.f,
+       storage: JC.i,
```

#### 2063. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23094` → after: `L24211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24211) · [Before (L23094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23094)

```diff
-           Dk = await (0, nk.n)(kk, {
+           QC = await (0, MC.j)(CC, {
```

#### 2064. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23103` → after: `L24220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24220) · [Before (L23103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23103)

```diff
-         return null !== Dk && void 0 !== Dk ? Dk : {
+         return null !== QC && void 0 !== QC ? QC : {
```

#### 2065. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23108` → after: `L24225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24225) · [Before (L23108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23108)

```diff
-       CU: Uk.t,
+       Cg: gC.x,
```

#### 2066. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23121` → after: `L24238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24238) · [Before (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23121)

```diff
-         if ((0, Dk.F)(bk)) {
+         if ((0, QC.H)(nC)) {
```

#### 2067. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23124` → after: `L24241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24241) · [Before (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23124)

```diff
-           if (mk.aborted || wk.e.matchmakingEnded(kk.isError() ? null : performance.now()), kk.isError()) {
+           if (qC.aborted || pC.h.matchmakingEnded(CC.isError() ? null : performance.now()), CC.isError()) {
```

#### 2068. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23130` → after: `L24247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24247) · [Before (L23130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23130)

```diff
-           wk.e.skipPlayWait();
+           pC.h.skipPlayWait();
```

#### 2069. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23136` → after: `L24253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24253) · [Before (L23136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23136)

```diff
-             lobbyName: ek instanceof fk.c ? ek.getLobbyName() : ek
+             lobbyName: zC instanceof wC.d ? zC.getLobbyName() : zC
```

#### 2070. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23140-L23141` → after: `L24257-L24258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24257-L24258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24257-L24258) · [Before (L23140-L23141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23140-L23141)

```diff
-         console.log(`Connecting to ${Kk.gameNameWithVariation} in lobby ${Kk.lobbyName} on game server ${Kk.endpoint}`), xk.j.tm("matchmakeAndPlayStepCompleted", {
-           step: Sk.n.REQUEST_TO_MATCHMAKING,
+         console.log(`Connecting to ${WC.gameNameWithVariation} in lobby ${WC.lobbyName} on game server ${WC.endpoint}`), NC.o.bp("matchmakeAndPlayStepCompleted", {
+           step: bC.l.REQUEST_TO_MATCHMAKING,
```

#### 2071. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23143` → after: `L24260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24260) · [Before (L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23143)

```diff
-         }), (0, Uk.k)(), Hk.d.markGameLoadStart(), (0, pk.n)({
+         }), (0, gC.m)(), SC.d.markGameLoadStart(), (0, GC.r)({
```

#### 2072. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23147` → after: `L24264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24264) · [Before (L23147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23147)

```diff
-         }), xk.j.tm("loadingScreenState", "loadingPage:loadingGame");
+         }), NC.o.bp("loadingScreenState", "loadingPage:loadingGame");
```

#### 2073. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23157` → after: `L24274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24274) · [Before (L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23157)

```diff
-               (0, pk.n)({
+               (0, GC.r)({
```

#### 2074. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23166` → after: `L24283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24283) · [Before (L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23166)

```diff
-         }, Yk = !(0, Dk.F)(bk), Lk = ek => kk({
+         }, AC = !(0, QC.H)(nC), xC = zC => CC({
```

#### 2075. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23195` → after: `L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24312) · [Before (L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23195)

```diff
-         let sk = null !== Ak && void 0 !== Ak ? Ak : jk.blockedAt,
+         let vC = null !== IC && void 0 !== IC ? IC : iC.blockedAt,
```

#### 2076. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23199` → after: `L24316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24316) · [Before (L23199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23199)

```diff
-           if (Fk || (sk ??= performance.now(), xk.j.tm("gameServerRouteSwitched")), mk.aborted) return uk(sk), qk();
+           if (KC || (vC ??= performance.now(), NC.o.bp("gameServerRouteSwitched")), qC.aborted) return YC(vC), dC();
```

#### 2077. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23206` → after: `L24323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24323) · [Before (L23206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23206)

```diff
-         return dk.isError() ? (!0 === dk.asError().debugResult.Ji && mk.aborted && uk(sk), dk.asError().forward()) : (Vk.afterJoined(Kk.endpoint), (0, lk.O)(), window.gtag ? window.gtag("event", "conversion", {
+         return eC.isError() ? (!0 === eC.asError().debugResult.wZ && qC.aborted && YC(vC), eC.asError().forward()) : (hC.afterJoined(WC.endpoint), (0, PC.L)(), window.gtag ? window.gtag("event", "conversion", {
```

#### 2078. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23208` → after: `L24325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24325) · [Before (L23208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23208)

```diff
-         }) : console.error("window.gtag not defined"), Mk.d.value({
+         }) : console.error("window.gtag not defined"), FC.e.value({
```

#### 2079. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23220` → after: `L24337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24337) · [Before (L23220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23220)

```diff
-       return Mk.d.errorWithCode("Left the game while it loaded", Sk.n.REQUEST_TO_MATCHMAKING, {
+       return FC.e.errorWithCode("Left the game while it loaded", bC.l.REQUEST_TO_MATCHMAKING, {
```

#### 2080. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23222` → after: `L24339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24339) · [Before (L23222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23222)

```diff
-         Ji: !0
+         wZ: !0
```

#### 2081. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23226-L23227` → after: `L24343-L24344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24343-L24344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24343-L24344) · [Before (L23226-L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23226-L23227)

```diff
-       return (0, Dk.F)(kk) || kk instanceof fk.c || !(kk.length > Kk.M) ? await yk.b.matchmakePlayer(ik, kk, ek, (0, Lk.d)()).then((kk => {
-         if (!1 === kk.succeeded) return Mk.d.errorWithCode(kk.failReason, Sk.n.REQUEST_TO_MATCHMAKING, {
+       return (0, QC.H)(CC) || CC instanceof wC.d || !(CC.length > WC.W) ? await RC.d.matchmakePlayer(ZC, CC, zC, (0, xC.b)()).then((CC => {
+         if (!1 === CC.succeeded) return FC.e.errorWithCode(CC.failReason, bC.l.REQUEST_TO_MATCHMAKING, {
```

#### 2082. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23235` → after: `L24352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24352) · [Before (L23235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23235)

```diff
-         return fk.isError() ? fk.asError().forward() : Mk.d.value({
+         return wC.isError() ? wC.asError().forward() : FC.e.value({
```

#### 2083. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23240` → after: `L24357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24357) · [Before (L23240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23240)

```diff
-       })).catch((kk => (console.error("Bad response from the matchmaking server:", kk), Mk.d.errorWithCode(kk.toString(), Sk.n.REQUEST_TO_MATCHMAKING, {
+       })).catch((CC => (console.error("Bad response from the matchmaking server:", CC), FC.e.errorWithCode(CC.toString(), bC.l.REQUEST_TO_MATCHMAKING, {
```

#### 2084. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23243` → after: `L24360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24360) · [Before (L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23243)

```diff
-       })))) : (console.error("Invalid lobby ID:", kk), Mk.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", Sk.n.REQUEST_TO_MATCHMAKING, {
+       })))) : (console.error("Invalid lobby ID:", CC), FC.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", bC.l.REQUEST_TO_MATCHMAKING, {
```

#### 2085. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23250` → after: `L24367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24367) · [Before (L23250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23250)

```diff
-       return ek.isError() ? Mk.d.errorWithCode(ek.asError().message, Sk.n.CONNECT_TO_GAME_SERVER, {
+       return zC.isError() ? FC.e.errorWithCode(zC.asError().message, bC.l.CONNECT_TO_GAME_SERVER, {
```

#### 2086. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23252` → after: `L24369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24369) · [Before (L23252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23252)

```diff
-       }) : Mk.d.value(ek.getValue())
+       }) : FC.e.value(zC.getValue())
```

#### 2087. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23260` → after: `L24377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24377) · [Before (L23260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23260)

```diff
-   33685: (kk, ek, ik) => {
+   34072: (CC, zC, ZC) => {
```

#### 2088. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23263` → after: `L24381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24381) · [Before (L23263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23263)

```diff
-       i: () => xk
+       f: () => FC
```

#### 2089. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23265-L23266` → after: `L24383-L24384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24383-L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24383-L24384) · [Before (L23265-L23266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23265-L23266)

```diff
-     var Dk = ik(22),
-       fk = ik(1659),
+     var QC = ZC(20),
+       wC = ZC(1609),
```

#### 2090. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23268-L23271` → after: `L24386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24386) · [Before (L23268-L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23268-L23271)

```diff
-       bk = ik(1333),
-       rk = ik(3622),
-       Pk = ik(1432),
-       mk = ik(1371);
+       nC = ZC(3592);
```

#### 2091. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23276-L23294` → after: `L24391-L24396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24391-L24396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24391-L24396) · [Before (L23276-L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23276-L23294)

```diff
-       const ek = await nk();
-       if (null === ek) return;
-       const ik = null !== (kk = Sk.f.getItem(Kk)) && void 0 !== kk ? kk : 0;
-       if (Date.now() - ik < Mk) return;
-       if ((0, mk.d)()) return;
-       const Dk = await bk.NotificationProvider.showPromptPopup({
-         icon: "bell",
-         title: "mobilePushNotifications:optInTitle",
-         subtitle: fk.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
-         confirmText: "mobilePushNotifications:optInConfirm",
-         cancelText: "mobilePushNotifications:optInCancel",
-         padStartsOn: "cancel"
-       }).getResult();
-       "notificationTornDown" !== Dk && (Sk.f.setItem(Kk, Date.now()), (0, Pk.reportAnalyticsClick)({
-         id: !0 === Dk ? "push.allow" : "push.deny",
-         value: fk.b.supports("notifications") ? "app" : "browser"
- ... (3 more removed lines; see GitHub link above)
+       const zC = null !== (CC = bC.i.getItem(oC)) && void 0 !== CC ? CC : 0;
+       return Date.now() - zC < fC ? null : WC()
+     }
+ 
+     function FC() {
+       bC.i.setItem(oC, Date.now())
```

#### 2092. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23297-L23298` → after: `L24399-L24400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24399-L24400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24399-L24400) · [Before (L23297-L23298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23297-L23298)

```diff
-       return await fk.b.ready, fk.b.supports("notifications") ? Dk.b.get("mobilePushNotificationsCanAsk") ? async () => {
-         fk.b.request("notifications.requestPermission", {}).then((kk => {
+       return await wC.d.ready, wC.d.supports("notifications") ? QC.b.get("mobilePushNotificationsCanAsk") ? async () => {
+         wC.d.request("notifications.requestPermission", {}).then((CC => {
```

#### 2093. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23308` → after: `L24410-L24564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24410-L24564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24410-L24564) · [Before (L23308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23308)

```diff
-       }: null: await rk.b.canAsk() ? () => rk.b.requestPermission() : null
+       }: null: await nC.d.canAsk() ? () => nC.d.requestPermission() : null
+     }
+   },
+   36346: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => NC,
+       h: () => FC,
+       j: () => MC,
+       k: () => WC
+     });
+     var QC = ZC(326),
+       wC = ZC(622),
+       bC = ZC(630),
+       nC = ZC(38);
+     const fC = {
+         idStorageKey: "playSessionId",
+ ... (139 more added lines; see GitHub link above)
```

#### 2094. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23311` → after: `L24567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24567) · [Before (L23311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23311)

```diff
-   36121: (kk, ek, ik) => {
+   36463: (CC, zC, ZC) => {
```

#### 2095. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23323` → after: `L24579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24579) · [Before (L23323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23323)

```diff
-       g: () => fk
+       h: () => wC
```

#### 2096. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23326` → after: `L24582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24582) · [Before (L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23326)

```diff
-   36489: (kk, ek, ik) => {
+   36750: (CC, zC, ZC) => {
```

#### 2097. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23329-L23331` → after: `L24585-L24586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24585-L24586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24585-L24586) · [Before (L23329-L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23329-L23331)

```diff
-       E: () => hk,
-       H: () => Qk,
-       K: () => ak,
+       C: () => EC,
+       D: () => uC,
```

#### 2098. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23333-L23334` → after: `L24588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24588) · [Before (L23333-L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23333-L23334)

```diff
-       e: () => Fk,
-       i: () => rk,
+       f: () => KC,
```

#### 2099. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23336-L23340` → after: `L24590-L24596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24590-L24596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24590-L24596) · [Before (L23336-L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23336-L23340)

```diff
-       l: () => dk,
-       p: () => Ck,
-       s: () => Ik,
-       u: () => qk,
-       v: () => sk,
+       k: () => HC,
+       m: () => eC,
+       n: () => JC,
+       o: () => mC,
+       r: () => dC,
+       t: () => vC,
+       w: () => lC,
```

#### 2100. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23378` → after: `L24634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24634) · [Before (L23378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23378)

```diff
-         const kk = Dk.f.getItem(mk);
+         const CC = QC.i.getItem(qC);
```

#### 2101. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23385` → after: `L24641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24641) · [Before (L23385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23385)

```diff
-           ..."object" === typeof kk && null !== kk ? kk : {}
+           ..."object" === typeof CC && null !== CC ? CC : {}
```

#### 2102. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23396` → after: `L24652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24652) · [Before (L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23396)

```diff
-       }, Dk.f.setItem(mk, xk))
+       }, QC.i.setItem(qC, NC))
```

#### 2103. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23400` → after: `L24656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24656) · [Before (L23400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23400)

```diff
-       return "docsOverview" === kk ? Sk : "aiHelperOverview" === kk ? bk : nk ? fk[nk] : []
+       return "docsOverview" === CC ? bC : "aiHelperOverview" === CC ? nC : MC ? wC[MC] : []
```

#### 2104. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23414` → after: `L24670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24670) · [Before (L23414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23414)

```diff
-           return wk ? wk.name === kk : "welcome" === kk
+           return pC ? pC.name === CC : "welcome" === CC
```

#### 2105. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23423` → after: `L24679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24679) · [Before (L23423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23423)

```diff
-       return null !== (ek = Ck(kk).find((ek => sk(kk, ek)))) && void 0 !== ek ? ek : null
+       return null !== (zC = JC(CC).find((zC => vC(CC, zC)))) && void 0 !== zC ? zC : null
```

#### 2106. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23475` → after: `L24731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24731) · [Before (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23475)

```diff
-       const ik = ek ? kk : nk === kk ? null : nk;
+       const ZC = zC ? CC : MC === CC ? null : MC;
```

#### 2107. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23489` → after: `L24745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24745) · [Before (L23489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23489)

```diff
-   36136: (kk, ek, ik) => {
+   36474: (CC, zC, ZC) => {
```

#### 2108. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23491-L23492` → after: `L24747-L24748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24747-L24748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24747-L24748) · [Before (L23491-L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23491-L23492)

```diff
-       e: () => Mk,
-       f: () => xk,
+       d: () => FC,
+       g: () => NC,
```

#### 2109. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23496-L23501` → after: `L24752-L24757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24752-L24757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24752-L24757) · [Before (L23496-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23496-L23501)

```diff
-     var Dk = ik(22),
-       fk = ik(2388),
-       Sk = ik(2395),
-       bk = ik(2397),
-       rk = ik(2473),
-       Pk = ik(26);
+     var QC = ZC(20),
+       wC = ZC(2348),
+       bC = ZC(2351),
+       nC = ZC(2360),
+       fC = ZC(2431),
+       oC = ZC(28);
```

#### 2110. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23504` → after: `L24760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24760) · [Before (L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23504)

```diff
-       return (!(0, bk.b)() || 0 === kk && 0 === ek) && (0, Sk.s)(fk.k.Joystick, 0, kk, ek, 0)
+       return (!(0, nC.c)() || 0 === CC && 0 === zC) && (0, bC.s)(wC.j.Joystick, 0, CC, zC, 0)
```

#### 2111. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23531` → after: `L24787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24787) · [Before (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23531)

```diff
-       return document.documentElement.classList.contains(rk.f)
+       return document.documentElement.classList.contains(fC.i)
```

#### 2112. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23595` → after: `L24851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24851) · [Before (L23595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23595)

```diff
-         if (!ek) return void this.write(fk.k.TouchZone, kk, 0, 0, 0);
+         if (!zC) return void this.write(wC.j.TouchZone, CC, 0, 0, 0);
```

#### 2113. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23600` → after: `L24856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24856) · [Before (L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23600)

```diff
-         this.write(fk.k.TouchZone, kk, Sk.x - this.canvasLeft, Sk.y - this.canvasTop, Hk(ik.width, ik.height));
+         this.write(wC.j.TouchZone, CC, bC.x - this.canvasLeft, bC.y - this.canvasTop, SC(ZC.width, ZC.height));
```

#### 2114. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23602` → after: `L24858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24858) · [Before (L23602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23602)

```diff
-         this.write(fk.k.TouchZone, 256 | kk, 0, 0, bk ? Hk(bk.width, bk.height) : 0)
+         this.write(wC.j.TouchZone, 256 | CC, 0, 0, nC ? SC(nC.width, nC.height) : 0)
```

#### 2115. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23615` → after: `L24871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24871) · [Before (L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23615)

```diff
-     (0, Pk.k)(rk.c, (() => {
+     (0, oC.q)(fC.e, (() => {
```

#### 2116. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23619-L23693` → after: `L24875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24875) · [Before (L23619-L23693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23619-L23693)

```diff
-   36442: (kk, ek, ik) => {
-     function Dk(kk) {
-       return "fetch" === kk || "timeout" === kk || "integrity" === kk ? "download" : "browser"
-     }
-     ik.d(ek, {
-       d: () => fk,
-       g: () => bk,
-       j: () => Pk,
-       l: () => rk,
-       p: () => Dk,
-       t: () => Sk
-     });
-     const fk = "https://discord.gg/playbloxd";
- 
-     function Sk(kk) {
-       return "download" === kk ? {
- ... (59 more removed lines; see GitHub link above)
+   36766: (CC, zC, ZC) => {
```

#### 2117. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23695` → after: `L24877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24877) · [Before (L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23695)

```diff
-       return null === kk || null === ek ? kk === ek : kk[0] === ek[0] && kk[1] === ek[1] && kk[2] === ek[2]
+       return null === CC || null === zC ? CC === zC : CC[0] === zC[0] && CC[1] === zC[1] && CC[2] === zC[2]
```

#### 2118. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23702-L23703` → after: `L24884-L24885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24884-L24885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24884-L24885) · [Before (L23702-L23703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23702-L23703)

```diff
-       c: () => fk,
-       f: () => Dk
+       e: () => wC,
+       i: () => QC
```

#### 2119. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23706` → after: `L24888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24888) · [Before (L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23706)

```diff
-   36446: (kk, ek, ik) => {
+   8792: (CC, zC, ZC) => {
```

#### 2120. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23708-L23709` → after: `L24890-L24915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24890-L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L24890-L24915) · [Before (L23708-L23709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23708-L23709)

```diff
-       d: () => Pk,
-       g: () => rk
+       e: () => wC,
+       i: () => QC
+     });
+     const QC = 100;
+ 
+     function wC(CC) {
+       let {
+         translationKeys: zC = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return CC.map((CC => {
+         var ZC;
+         return null !== (ZC = function(CC, zC) {
+           if ("string" === typeof CC) return CC;
+           const ZC = "str" in CC ? CC.str : CC;
+           if ("string" === typeof ZC) return ZC;
+           if ("entityName" in ZC) return ZC.entityName;
+ ... (10 more added lines; see GitHub link above)
```

#### 2121. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23811` → after: `L25017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25017) · [Before (L23811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23811)

```diff
-   36454: (kk, ek, ik) => {
+   36721: (CC, zC, ZC) => {
```

#### 2122. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23813-L23814` → after: `L25019-L25022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25019-L25022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25019-L25022) · [Before (L23813-L23814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23813-L23814)

```diff
-       c: () => Pk,
-       e: () => rk,
+       b: () => oC,
+       d: () => fC,
+       g: () => nC,
+       h: () => bC,
```

#### 2123. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23816-L23818` → after: `L25024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25024) · [Before (L23816-L23818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23816-L23818)

```diff
-       j: () => Sk,
-       k: () => mk,
-       o: () => Mk,
+       l: () => FC,
```

#### 2124. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23820-L23821` → after: `L25026-L25027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25026-L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25026-L25027) · [Before (L23820-L23821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23820-L23821)

```diff
-       s: () => nk,
-       v: () => xk
+       t: () => MC,
+       w: () => NC
```

#### 2125. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23823` → after: `L25029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25029) · [Before (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23823)

```diff
-     var Dk = ik(1218);
+     var QC = ZC(1183);
```

#### 2126. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23831` → after: `L25037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25037) · [Before (L23831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23831)

```diff
-       return kk === Dk.i || kk === Dk.k
+       return CC === QC.k || CC === QC.n
```

#### 2127. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23835` → after: `L25041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25041) · [Before (L23835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23835)

```diff
-       return kk === Dk.i && ek === Dk.k || kk === Dk.k && ek === Dk.i
+       return CC === QC.k && zC === QC.n || CC === QC.n && zC === QC.k
```

#### 2128. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23839-L23841` → after: `L25045-L25047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25045-L25047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25045-L25047) · [Before (L23839-L23841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23839-L23841)

```diff
-       const ek = Dk.k in kk,
-         ik = Dk.i in kk;
-       return ek && ik ? null : ek ? Dk.k : ik ? Dk.i : null
+       const zC = QC.n in CC,
+         ZC = QC.k in CC;
+       return zC && ZC ? null : zC ? QC.n : ZC ? QC.k : null
```

#### 2129. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23845-L23846` → after: `L25051-L25052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25051-L25052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25051-L25052) · [Before (L23845-L23846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23845-L23846)

```diff
-       const Dk = `${ek}/`;
-       return kk.filter((kk => kk.startsWith(Dk))).map((kk => [kk, `${ik}/${kk.slice(Dk.length)}`]))
+       const QC = `${zC}/`;
+       return CC.filter((CC => CC.startsWith(QC))).map((CC => [CC, `${ZC}/${CC.slice(QC.length)}`]))
```

#### 2130. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23857` → after: `L25063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25063) · [Before (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23857)

```diff
-       return `${Kk}${kk}`
+       return `${WC}${CC}`
```

#### 2131. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23861` → after: `L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25067) · [Before (L23861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23861)

```diff
-       return `/node_modules/@plugins/${kk}/${ek}`
+       return `/node_modules/@plugins/${CC}/${zC}`
```

#### 2132. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23869` → after: `L25075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25075) · [Before (L23869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23869)

```diff
-       }(ek) ? ek : null
+       }(zC) ? zC : null
```

#### 2133. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23872` → after: `L25078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25078) · [Before (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23872)

```diff
-   36471: (kk, ek, ik) => {
+   36731: (CC, zC, ZC) => {
```

#### 2134. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23875-L23878` → after: `L25082-L25084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25082-L25084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25082-L25084) · [Before (L23875-L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23875-L23878)

```diff
-       f: () => fk,
-       g: () => bk,
-       j: () => Pk,
-       k: () => Sk
+       i: () => nC,
+       k: () => oC,
+       m: () => bC
```

#### 2135. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23880` → after: `L25086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25086) · [Before (L23880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23880)

```diff
-     var Dk = ik(36463);
+     var QC = ZC(36725);
```

#### 2136. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23886` → after: `L25092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25092) · [Before (L23886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23886)

```diff
-       return kk.endsWith(".bloxdschem") && (0, Dk.z)(kk.slice(0, -11) + ".ts") && kk.length <= 64
+       return CC.endsWith(".bloxdschem") && (0, QC.v)(CC.slice(0, -11) + ".ts") && CC.length <= 64
```

#### 2137. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23893` → after: `L25099-L25122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25099-L25122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25099-L25122) · [Before (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23893)

```diff
-   36463: (kk, ek, ik) => {
+   8776: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       return !CC.hidden && (zC || !CC.isRewardedAd)
+     }
+ 
+     function wC(CC) {
+       return "object" === typeof CC ? CC.option : CC
+     }
+ 
+     function bC(CC, zC) {
+       var ZC;
+       if ("dropdown" === (null === (ZC = CC.userInput) || void 0 === ZC ? void 0 : ZC.type) && "object" === typeof CC.userInput.dropdownOptions[0]) {
+         for (const ZC of CC.userInput.dropdownOptions)
+           if (wC(ZC) === zC) return "object" === typeof ZC ? ZC.cost : CC.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", CC, "input:", zC)
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 2138. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23895-L23902` → after: `L25124-L25139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25124-L25139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25124-L25139) · [Before (L23895-L23902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23895-L23902)

```diff
-       A: () => Mk,
-       E: () => bk,
-       e: () => fk,
-       h: () => Sk,
-       l: () => xk,
-       p: () => rk,
-       t: () => Pk,
-       x: () => mk,
+       b: () => bC,
+       f: () => wC,
+       i: () => nC,
+       k: () => QC
+     })
+   },
+   36725: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => wC,
+       g: () => bC,
+       j: () => NC,
+       m: () => fC,
+       q: () => oC,
+       u: () => qC,
+       v: () => WC,
+       y: () => FC,
```

#### 2139. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23905` → after: `L25142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25142) · [Before (L23905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23905)

```diff
-     var Dk = ik(1218);
+     var QC = ZC(1183);
```

#### 2140. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23914` → after: `L25151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25151) · [Before (L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23914)

```diff
-       return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
+       return "lobby" === CC.kind ? `lobby:${CC.path}` : `codeBlock:${CC.pos[0]},${CC.pos[1]},${CC.pos[2]}`
```

#### 2141. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23920` → after: `L25157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25157) · [Before (L23920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23920)

```diff
-         path: Dk.i
+         path: QC.k
```

#### 2142. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23959` → after: `L25196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25196) · [Before (L23959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23959)

```diff
-   4786: (kk, ek, ik) => {
+   4783: (CC, zC, ZC) => {
```

#### 2143. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23961-L23963` → after: `L25198-L25199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25198-L25199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25198-L25199) · [Before (L23961-L23963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23961-L23963)

```diff
-       c: () => fk,
-       d: () => Dk,
-       g: () => Sk,
+       b: () => wC,
+       f: () => QC,
```

#### 2144. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23965` → after: `L25201-L25202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25201-L25202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25201-L25202) · [Before (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L23965)

```diff
-       m: () => bk
+       m: () => oC,
+       q: () => nC
```

#### 2145. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24109` → after: `L25346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25346) · [Before (L24109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24109)

```diff
-       return "string" !== typeof kk ? kk : Object.hasOwn(Sk, kk) ? Sk[kk] : null
+       return "string" !== typeof CC ? CC : Object.hasOwn(bC, CC) ? bC[CC] : null
```

#### 2146. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24141` → after: `L25378-L25379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25378-L25379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25378-L25379) · [Before (L24141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24141)

```diff
-   9726: kk => {
+   8815: () => {},
+   9902: CC => {
```

#### 2147. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24144` → after: `L25382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25382) · [Before (L24144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24144)

```diff
-   17881: kk => {
+   18209: CC => {
```

#### 2148. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24147` → after: `L25385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25385) · [Before (L24147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24147)

```diff
-   19777: kk => {
+   20118: CC => {
```

#### 2149. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24150` → after: `L25388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25388) · [Before (L24150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24150)

```diff
-   19779: kk => {
+   20122: CC => {
```

#### 2150. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24153` → after: `L25391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25391) · [Before (L24153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24153)

```diff
-   19782: kk => {
+   20130: CC => {
```

#### 2151. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24156` → after: `L25394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25394) · [Before (L24156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24156)

```diff
-   19788: kk => {
+   20138: CC => {
```

#### 2152. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24159` → after: `L25397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/85.js#L25397) · [Before (L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/85.js#L24159)

```diff
-   19790: kk => {
+   20140: CC => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/86.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/86.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba)

#### 1. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L4)

```diff
-   4716: (kk, ek, ik) => {
+   4706: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L6-L7)

```diff
-       d: () => Yk,
-       e: () => lk
+       c: () => AC,
+       f: () => PC
```

#### 3. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L9-L15` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L9-L15) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L9-L15)

```diff
-     var Dk = ik(1288),
-       fk = ik(26);
-     var Sk = ik(314);
-     var bk = ik(594);
-     var rk = ik(2388),
-       Pk = ik(4721),
-       mk = ik(4745),
+     var QC = ZC(1260),
+       wC = ZC(28);
+     var bC = ZC(326);
+     var nC = ZC(600);
+     var fC = ZC(2348),
+       oC = ZC(4711),
+       qC = ZC(4739),
```

#### 4. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L27)

```diff
-         if (!bk) throw console.error(`No QTE implementation registered for type: ${ek}`), new Error(`No QTE implementation registered for type: ${ek}`);
+         if (!nC) throw console.error(`No QTE implementation registered for type: ${zC}`), new Error(`No QTE implementation registered for type: ${zC}`);
```

#### 5. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L33)

```diff
-         this.mouseSub = fk.j.subscribe("QTEMouseState", (kk => {
+         this.mouseSub = wC.o.subscribe("QTEMouseState", (CC => {
```

#### 6. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L38-L40)

```diff
-         })), this.stopInputActions = (0, mk.j)((kk => {
-           this.isCompleted || !xk.has(kk.action) && !(0, mk.f)(kk) || this.implementation.handleMouseInput(kk.down)
-         })), this.tickSub = fk.j.subscribe("noaTick", (kk => {
+         })), this.stopInputActions = (0, qC.k)((CC => {
+           this.isCompleted || !NC.has(CC.action) && !(0, qC.g)(CC) || this.implementation.handleMouseInput(CC.down)
+         })), this.tickSub = wC.o.subscribe("noaTick", (CC => {
```

#### 7. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L44-L45` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L44-L45) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L44-L45)

```diff
-         })), this.stopShellTicks = (0, Pk.x)((() => {
-           this.isCompleted || this.implementation.handleTick(rk.r / 1e3)
+         })), this.stopShellTicks = (0, oC.r)((() => {
+           this.isCompleted || this.implementation.handleTick(fC.p / 1e3)
```

#### 8. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L50)

```diff
-         this.mouseSub && (fk.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (kk = this.stopInputActions) || void 0 === kk || kk.call(this), this.stopInputActions = null, null === (ek = this.stopShellTicks) || void 0 === ek || ek.call(this), this.stopShellTicks = nu … [truncated]
+         this.mouseSub && (wC.o.unsubscribe(this.mouseSub), this.mouseSub = null), null === (CC = this.stopInputActions) || void 0 === CC || CC.call(this), this.stopInputActions = null, null === (zC = this.stopShellTicks) || void 0 === zC || zC.call(this), this.stopShellTicks = nu … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L62)

```diff
-     const Uk = new Dk.e,
+     const gC = new QC.b,
```

#### 10. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L69)

```diff
-           this.resolveRequest = ek, this.tearDownNotification = ik, this.progress = 0, this.bk = void 0, this.rk = void 0, this.Pk = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           this.resolveRequest = zC, this.tearDownNotification = ZC, this.progress = 0, this.vZ = void 0, this.eZ = void 0, this.hZ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
```

#### 11. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L71)

```diff
-           this.bk = null !== (Dk = rk.bk) && void 0 !== Dk ? Dk : .075, this.rk = null !== (fk = rk.rk) && void 0 !== fk ? fk : 1, this.progress = null !== (Sk = rk.Sk) && void 0 !== Sk ? Sk : 30, this.Pk = null !== (bk = rk.Pk) && void 0 !== bk && bk, this.parameters = rk
+           this.vZ = null !== (QC = fC.vZ) && void 0 !== QC ? QC : .075, this.eZ = null !== (wC = fC.eZ) && void 0 !== wC ? wC : 1, this.progress = null !== (bC = fC.iZ) && void 0 !== bC ? bC : 30, this.hZ = null !== (nC = fC.hZ) && void 0 !== nC && nC, this.parameters = fC
```

#### 12. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L74)

```diff
-           kk && !this.isCompleted && (this.clickCount++, this.progress += this.rk, this.progress >= 100 && this.complete(!0))
+           CC && !this.isCompleted && (this.clickCount++, this.progress += this.eZ, this.progress >= 100 && this.complete(!0))
```

#### 13. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L78)

```diff
-             if (this.progress -= this.bk, this.Pk && this.progress <= 0) this.complete(!1);
+             if (this.progress -= this.vZ, this.hZ && this.progress <= 0) this.complete(!1);
```

#### 14. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L103)

```diff
-           this.resolveRequest = ek, this.tearDownNotification = ik, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = kk, this.timeWindowMs = null !== (Dk = this.parameters.nk) && void … [truncated]
+           this.resolveRequest = zC, this.tearDownNotification = ZC, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = CC, this.timeWindowMs = null !== (QC = this.parameters.HZ) && void … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L124)

```diff
-               nk: this.timeWindowMs
+               HZ: this.timeWindowMs
```

#### 16. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L140-L141)

```diff
-             lk: Sk.c.clamp(fk.lk, .05, 1)
-           }, this.progress = null !== (Dk = fk.Sk) && void 0 !== Dk ? Dk : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+             cZ: bC.c.clamp(wC.cZ, .05, 1)
+           }, this.progress = null !== (QC = wC.iZ) && void 0 !== QC ? QC : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
```

#### 17. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L152)

```diff
-           this.moverPosition += kk * this.parameters.yk * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
+           this.moverPosition += CC * this.parameters.uZ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
```

#### 18. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L158)

```diff
-           const kk = Sk.c.clamp(1 - .7 * this.parameters.Yk, 0, 1.4);
+           const CC = bC.c.clamp(1 - .7 * this.parameters.rZ, 0, 1.4);
```

#### 19. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L162-L163)

```diff
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Lk : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Sk.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const kk = this.parameters.lk / 2,
+           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.sZ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = bC.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
+           const CC = this.parameters.cZ / 2,
```

#### 20. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L169)

```diff
-           const kk = this.parameters.lk / 2;
+           const CC = this.parameters.cZ / 2;
```

#### 21. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L173)

```diff
-           this.isMoverInCatchZone() ? this.progress += this.parameters.Ck * kk : this.progress -= this.parameters.Ak * kk, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Pk && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+           this.isMoverInCatchZone() ? this.progress += this.parameters.TZ * CC : this.progress -= this.parameters.aZ * CC, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.hZ && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L184)

```diff
-               lk: this.parameters.lk,
+               cZ: this.parameters.cZ,
```

#### 23. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L199)

```diff
-           this.resolveRequest = ek, this.tearDownNotification = ik, this.startTime = void 0, this.speed = void 0, this.sk = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           this.resolveRequest = zC, this.tearDownNotification = ZC, this.startTime = void 0, this.speed = void 0, this.DZ = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
```

#### 24. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L203-L205)

```diff
-             speed: null !== (Dk = mk.speed) && void 0 !== Dk ? Dk : .5,
-             sk: Sk.c.clamp(mk.sk, .05, 1),
-             label: null !== (fk = mk.label) && void 0 !== fk ? fk : [{
+             speed: null !== (QC = qC.speed) && void 0 !== QC ? QC : .5,
+             DZ: bC.c.clamp(qC.DZ, .05, 1),
+             label: null !== (wC = qC.label) && void 0 !== wC ? wC : [{
```

#### 25. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L208-L211` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L208-L211) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L208-L211)

```diff
-             icon: null !== (bk = mk.icon) && void 0 !== bk ? bk : null,
-             scale: null !== (rk = mk.scale) && void 0 !== rk ? rk : 1,
-             rotation: null !== (Pk = mk.rotation) && void 0 !== Pk ? Pk : 0
-           }, this.speed = this.parameters.speed, this.sk = this.parameters.sk, this.startTime = Date.now()
+             icon: null !== (nC = qC.icon) && void 0 !== nC ? nC : null,
+             scale: null !== (fC = qC.scale) && void 0 !== fC ? fC : 1,
+             rotation: null !== (oC = qC.rotation) && void 0 !== oC ? oC : 0
+           }, this.speed = this.parameters.speed, this.DZ = this.parameters.DZ, this.startTime = Date.now()
```

#### 26. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L216)

```diff
-             const kk = Math.abs(this.markerPosition - .5) <= this.sk / 2;
+             const CC = Math.abs(this.markerPosition - .5) <= this.DZ / 2;
```

#### 27. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L225)

```diff
-           this.markerPosition = kk <= .5 ? 2 * kk : 2 - 2 * kk
+           this.markerPosition = CC <= .5 ? 2 * CC : 2 - 2 * CC
```

#### 28. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L251-L252)

```diff
-           if (ek <= this.parameters.qk && ek >= -this.parameters.qk) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Fk) return void this.complete(!0)
+           if (zC <= this.parameters.UZ && zC >= -this.parameters.UZ) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.yZ) return void this.complete(!0)
```

#### 29. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L257)

```diff
-           this.misses++, this.lastClickResult = !1, !(0, bk.F)(this.parameters.Ik) && this.misses > this.parameters.Ik ? this.complete(!1) : this.shrinkStartTime = Date.now()
+           this.misses++, this.lastClickResult = !1, !(0, nC.H)(this.parameters.BZ) && this.misses > this.parameters.BZ ? this.complete(!1) : this.shrinkStartTime = Date.now()
```

#### 30. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L261)

```diff
-           this.getOuterCircleProgress() < -this.parameters.qk && this.handleMiss()
+           this.getOuterCircleProgress() < -this.parameters.UZ && this.handleMiss()
```

#### 31. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L264)

```diff
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.uk
+           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.LZ
```

#### 32. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L276)

```diff
-               Fk: this.parameters.Fk,
+               yZ: this.parameters.yZ,
```

#### 33. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L290)

```diff
-       (0, Mk.j)(rk.t.Qte, wk ? rk.t.Qte : 0), wk ? fk.j.tm("qteStateUpdated", wk.getState()) : fk.j.tm("qteStateUpdated", {
+       (0, FC.e)(fC.v.Qte, pC ? fC.v.Qte : 0), pC ? wC.o.bp("qteStateUpdated", pC.getState()) : wC.o.bp("qteStateUpdated", {
```

#### 34. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L324)

```diff
-         if (wk || Uk.uU()) return void(Uk.uU() && wk && (wk = null, pk()));
+         if (pC || gC.fg()) return void(gC.fg() && pC && (pC = null, GC()));
```

#### 35. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L357)

```diff
-   4721: (kk, ek, ik) => {
+   4711: (CC, zC, ZC) => {
```

#### 36. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L360-L365` → after: `L360-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L360-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L360-L365) · [Before (L360-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L360-L365)

```diff
-       D: () => pk,
-       F: () => bk,
-       J: () => rk,
-       K: () => sk,
-       c: () => jk,
-       g: () => Yk,
+       B: () => nC,
+       E: () => fC,
+       G: () => vC,
+       b: () => iC,
+       e: () => AC,
+       h: () => dC,
```

#### 37. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L367` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L367-L368) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L367)

```diff
-       l: () => uk,
+       k: () => PC,
+       m: () => JC,
```

#### 38. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L369` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L370) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L369)

```diff
-       q: () => Ck,
+       p: () => xC,
```

#### 39. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L371-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L372-L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L371-L373)

```diff
-       v: () => Lk,
-       x: () => dk,
-       y: () => Vk
+       u: () => hC,
+       w: () => KC
```

#### 40. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L375)

```diff
-     var Dk = ik(4728);
+     var QC = ZC(4719);
```

#### 41. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L384)

```diff
-       Sk = null !== kk && void 0 !== kk ? kk : fk
+       bC = null !== CC && void 0 !== CC ? CC : wC
```

#### 42. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L476)

```diff
-       const Sk = (0, Dk.j)(ek),
+       const bC = (0, QC.i)(zC),
```

#### 43. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L508)

```diff
-   4745: (kk, ek, ik) => {
+   4739: (CC, zC, ZC) => {
```

#### 44. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L510-L512` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L510-L512) · [Before (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L510-L512)

```diff
-       d: () => Pk,
-       f: () => Sk,
-       j: () => rk
+       e: () => oC,
+       g: () => bC,
+       k: () => fC
```

#### 45. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L514-L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L514-L515) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L514-L515)

```diff
-     var Dk = ik(2388),
-       fk = ik(4750);
+     var QC = ZC(2348),
+       wC = ZC(4745);
```

#### 46. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L522)

```diff
-       return "mid-fire" === ek && 0 !== (ik & Dk.d.AltLeftClick)
+       return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
```

#### 47. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L533)

```diff
-       const ek = fk.e[255 & kk];
+       const zC = wC.c[255 & CC];
```

#### 48. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L538)

```diff
-           down: 0 !== (ik & Dk.d.Down),
+           down: 0 !== (ZC & QC.c.Down),
```

#### 49. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L545)

```diff
-   4750: (kk, ek, ik) => {
+   4745: (CC, zC, ZC) => {
```

#### 50. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L547` → after: `L547-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L547-L549) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L547)

```diff
-       e: () => fk,
+       c: () => wC,
+       d: () => bC,
+       f: () => nC,
```

#### 51. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L549-L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L551) · [Before (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L549-L551)

```diff
-       k: () => bk,
-       n: () => Dk,
-       q: () => rk
+       h: () => fC
```

#### 52. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L825-L827` → after: `L825-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L825-L827) · [Before (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L825-L827)

```diff
-       e: () => rk,
-       i: () => bk,
-       j: () => mk
+       b: () => fC,
+       d: () => nC,
+       e: () => qC
```

#### 53. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L829-L830)

```diff
-     var Dk = ik(2388),
-       fk = ik(2395);
+     var QC = ZC(2348),
+       wC = ZC(2351);
```

#### 54. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L841)

```diff
-           fk !== ek && (ek = fk, kk(Dk.k.UiCapture, Dk.t.Keyboard, 0, 0, fk ? Dk.t.Keyboard : 0))
+           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
```

#### 55. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L865)

```diff
-       Pk.set(Dk, (null !== (ik = Pk.get(Dk)) && void 0 !== ik ? ik : 0) & ~kk | ek & kk);
+       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
```

#### 56. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/86.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/86.js#L868)

```diff
-       return (0, fk.x)(kk, Sk & kk)
+       return (0, wC.v)(CC, bC & CC)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/87.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/87.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e)

#### 1. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L4)

```diff
-   40466: (kk, ek, ik) => {
+   40717: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L7-L8` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L7) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L7-L8)

```diff
-       B: () => uk,
-       C: () => vk,
+       D: () => HC,
```

#### 3. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L9-L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L10)

```diff
-       K: () => Tk,
+       H: () => XC,
+       J: () => YC,
```

#### 4. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L12` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L12-L16) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L12)

```diff
-       P: () => Ik,
+       O: () => KC,
+       R: () => DC,
+       T: () => tC,
+       W: () => mC,
+       c: () => jC,
```

#### 5. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L16-L17` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L19) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L16-L17)

```diff
-       j: () => Ok,
-       m: () => Vk,
+       k: () => yC,
```

#### 6. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L20-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L22-L23) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L20-L23)

```diff
-       t: () => qk,
-       x: () => Qk,
-       y: () => zk,
-       z: () => Nk
+       u: () => cC,
+       x: () => dC
```

#### 7. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L25-L28` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L25-L28) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L25-L28)

```diff
-     var Dk = ik(1371),
-       fk = ik(26),
-       Sk = ik(1273),
-       bk = ik(2388),
+     var QC = ZC(1347),
+       wC = ZC(28),
+       bC = ZC(1240),
+       nC = ZC(2348),
```

#### 8. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L30)

```diff
-       Pk = ik(4721);
+       oC = ZC(4711);
```

#### 9. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L60)

```diff
-       return (0, Sk.w)() && !Ck
+       return (0, bC.x)() && !JC
```

#### 10. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L79)

```diff
-       (0, rk.j)(bk.t.Menu, (0, Sk.w)() ? 0 : bk.t.Menu)
+       (0, fC.e)(nC.v.Menu, (0, bC.x)() ? 0 : nC.v.Menu)
```

#### 11. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L105)

```diff
-       return (!Kk || performance.now() - wk > Hk) && (Kk = (0, Pk.J)().lockPointer(), wk = performance.now()), Kk
+       return (!WC || performance.now() - pC > SC) && (WC = (0, oC.E)().lockPointer(), pC = performance.now()), WC
```

#### 12. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L113)

```diff
-       return Fk() && !Mk && !lk && !(0, Dk.d)()
+       return KC() && !FC && !PC && !(0, QC.h)()
```

#### 13. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L130)

```diff
-       pk ? navigator.vendor.startsWith("Apple") ? gk() : yk = Yk : ck()
+       GC ? navigator.vendor.startsWith("Apple") ? LC() : RC = AC : tC()
```

#### 14. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L146)

```diff
-       Lk = !0, (0, Pk.J)().unlockPointer()
+       xC = !0, (0, oC.E)().unlockPointer()
```

#### 15. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L157)

```diff
-       fk.j.tm("pointerLockUpdate", Mk)
+       wC.o.bp("pointerLockUpdate", FC)
```

#### 16. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L160)

```diff
-   40262: (kk, ek, ik) => {
+   40518: (CC, zC, ZC) => {
```

#### 17. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L162-L163)

```diff
-       e: () => xk,
-       h: () => rk,
+       c: () => NC,
+       g: () => fC,
```

#### 18. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L165-L168` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L165-L168) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L165-L168)

```diff
-       n: () => mk,
-       p: () => bk,
-       s: () => Mk,
-       t: () => Pk
+       k: () => qC,
+       m: () => nC,
+       q: () => FC,
+       s: () => oC
```

#### 19. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L203)

```diff
-   4721: (kk, ek, ik) => {
+   4711: (CC, zC, ZC) => {
```

#### 20. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L206-L211` → after: `L206-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L206-L211) · [Before (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L206-L211)

```diff
-       D: () => pk,
-       F: () => bk,
-       J: () => rk,
-       K: () => sk,
-       c: () => jk,
-       g: () => Yk,
+       B: () => nC,
+       E: () => fC,
+       G: () => vC,
+       b: () => iC,
+       e: () => AC,
+       h: () => dC,
```

#### 21. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L213` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L213-L214) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L213)

```diff
-       l: () => uk,
+       k: () => PC,
+       m: () => JC,
```

#### 22. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L215` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L216) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L215)

```diff
-       q: () => Ck,
+       p: () => xC,
```

#### 23. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L217-L219` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L218-L219) · [Before (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L217-L219)

```diff
-       v: () => Lk,
-       x: () => dk,
-       y: () => Vk
+       u: () => hC,
+       w: () => KC
```

#### 24. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L221)

```diff
-     var Dk = ik(4728);
+     var QC = ZC(4719);
```

#### 25. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L230)

```diff
-       Sk = null !== kk && void 0 !== kk ? kk : fk
+       bC = null !== CC && void 0 !== CC ? CC : wC
```

#### 26. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L322)

```diff
-       const Sk = (0, Dk.j)(ek),
+       const bC = (0, QC.i)(zC),
```

#### 27. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L354)

```diff
-   40483: (kk, ek, ik) => {
+   40729: (CC, zC, ZC) => {
```

#### 28. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L369)

```diff
-   4745: (kk, ek, ik) => {
+   4739: (CC, zC, ZC) => {
```

#### 29. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L371-L373` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L371-L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L371-L373)

```diff
-       d: () => Pk,
-       f: () => Sk,
-       j: () => rk
+       e: () => oC,
+       g: () => bC,
+       k: () => fC
```

#### 30. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L375-L376` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L375-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L375-L376)

```diff
-     var Dk = ik(2388),
-       fk = ik(4750);
+     var QC = ZC(2348),
+       wC = ZC(4745);
```

#### 31. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L383)

```diff
-       return "mid-fire" === ek && 0 !== (ik & Dk.d.AltLeftClick)
+       return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
```

#### 32. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L394)

```diff
-       const ek = fk.e[255 & kk];
+       const zC = wC.c[255 & CC];
```

#### 33. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L399)

```diff
-           down: 0 !== (ik & Dk.d.Down),
+           down: 0 !== (ZC & QC.c.Down),
```

#### 34. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L406)

```diff
-   4750: (kk, ek, ik) => {
+   4745: (CC, zC, ZC) => {
```

#### 35. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L408` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L408-L410) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L408)

```diff
-       e: () => fk,
+       c: () => wC,
+       d: () => bC,
+       f: () => nC,
```

#### 36. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L410-L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L412) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L410-L412)

```diff
-       k: () => bk,
-       n: () => Dk,
-       q: () => rk
+       h: () => fC
```

#### 37. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L684)

```diff
-   40505: (kk, ek, ik) => {
+   40750: (CC, zC, ZC) => {
```

#### 38. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L686-L687)

```diff
-       c: () => Mk,
-       f: () => mk,
+       b: () => FC,
+       d: () => qC,
```

#### 39. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L690-L691` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L690-L691) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L690-L691)

```diff
-     var Dk = ik(4741),
-       fk = ik(2388),
+     var QC = ZC(4733),
+       wC = ZC(2348),
```

#### 40. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L708-L713` → after: `L708-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L708-L713) · [Before (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L708-L713)

```diff
-         case Dk.O.MouseDown:
-         case Dk.O.MouseUp:
-         case Dk.O.TouchStart:
-         case Dk.O.TouchEnd:
-         case Dk.O.TouchCancel:
-         case Dk.O.TouchButton:
+         case QC.Q.MouseDown:
+         case QC.Q.MouseUp:
+         case QC.Q.TouchStart:
+         case QC.Q.TouchEnd:
+         case QC.Q.TouchCancel:
+         case QC.Q.TouchButton:
```

#### 41. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L715-L717` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L715-L717) · [Before (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L715-L717)

```diff
-         case Dk.O.KeyDown:
-         case Dk.O.KeyUp:
-           return 0 === (ek & fk.h.Repeat) && !(0, Sk.i)(document.activeElement);
+         case QC.Q.KeyDown:
+         case QC.Q.KeyUp:
+           return 0 === (zC & wC.f.Repeat) && !(0, bC.d)(document.activeElement);
```

#### 42. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L731-L733` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/87.js#L731-L733) · [Before (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/87.js#L731-L733)

```diff
-       e: () => rk,
-       i: () => bk,
-       j: () => mk
+       b: () => fC,
+       d: () => nC,
+       e: () => qC
```
