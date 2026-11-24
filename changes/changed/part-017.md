# Changed — Bundle Modifications Report (Part 017 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `17 / 140` (**311** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4683 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1816. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13284-L13285` → after: `L13436-L13441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13436-L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13436-L13441) · [Before (L13284-L13285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13284-L13285)

```diff
-                   function qS(...HS) {
-                     return HS[oS[13]] = oS[2], (4294967168 & HS[oS[1]]) == oS[1] ? SS[oS[5]](HS[oS[1]]) : (HS[-oS[89]] = "", (4294965248 & HS[oS[1]]) == oS[1] ? HS[-oS[89]] = SS[oS[5]](HS[oS[1]] >> oS[24] & oS[112] | oS[113]) : (4294901760 & HS[oS[1]]) == oS[1] ? NH(xS(HS[oS[1]]) … [truncated]
+                 function Lk(...kk) {
+                   var Fk, Ik, Xk, Tk;
+                   for (qF(kk[gk[13]] = gk[35], kk[gk[86]] = kk[gk[2]].length, kk[gk[85]] = Array()), kk[gk[10]] = Array(Math.ceil(kk[gk[1]].length / gk[35])), Fk = gk[1]; Fk < kk[gk[10]].length; Fk++) kk[gk[10]][Fk] = kk[gk[1]].charCodeAt(Fk * gk[35]) << gk[11] | kk[gk[1]].charCo … [truncated]
+                   for (; kk[gk[10]].length > gk[1];) {
+                     for (qF(Tk = Array(), Xk = gk[1]), Fk = gk[1]; Fk < kk[gk[10]].length; Fk++) qF(Xk = (Xk << gk[86]) + kk[gk[10]][Fk], Ik = Math.floor(Xk / kk[gk[86]]), Xk -= Ik * kk[gk[86]]), (Tk.length > gk[1] || Ik > gk[1]) && (Tk[Tk.length] = Ik);
+                     qF(kk[gk[85]][kk[gk[85]].length] = Xk, kk[gk[10]] = Tk)
```

#### 1817. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13288-L13290` → after: `L13448-L13501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13448-L13501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13448-L13501) · [Before (L13288-L13290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13288-L13290)

```diff
-                   function uS(...SS) {
-                     for (NH(SS[oS[13]] = oS[2], SS[oS[108]] = tS(SS[oS[1]]), SS[oS[14]] = SS[oS[108]].length, SS[oS[4]] = -oS[2], SS[-oS[116]] = oS[19], SS[oS[44]] = ""); ++SS[oS[4]] < SS[oS[14]];) NH(SS[-oS[116]] = SS[oS[108]][SS[oS[4]]], SS[oS[44]] += qS(SS[-oS[116]]));
-                     return SS[oS[44]]
+                 function tk(...kk) {
+                   var Fk, Ik;
+                   for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = "", kk[gk[26]] = -gk[2]); ++kk[gk[26]] < kk[gk[1]].length;) qF(Fk = kk[gk[1]].charCodeAt(kk[gk[26]]), Ik = kk[gk[26]] + gk[2] < kk[gk[1]].length ? kk[gk[1]].charCodeAt(kk[gk[26]] + gk[2]) : gk[1]), gk[144] <= Fk && Fk <= g … [truncated]
+                   return kk[gk[2]]
+                 }
+ 
+                 function Zk(...kk) {
+                   for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = Array(kk[gk[1]].length >> gk[35])), kk[gk[26]] = gk[1]; kk[gk[26]] < kk[gk[43]].length; kk[gk[26]]++) kk[gk[43]][kk[gk[26]]] = gk[1];
+                   for (kk[gk[26]] = gk[1]; kk[gk[26]] < kk[gk[1]].length * gk[11]; kk[gk[26]] += gk[11]) kk[gk[43]][kk[gk[26]] >> gk[50]] |= (kk[gk[1]].charCodeAt(kk[gk[26]] / gk[11]) & gk[12]) << gk[104] - kk[gk[26]] % gk[68];
+                   return kk[gk[43]]
+                 }
+ 
+                 function jk(...kk) {
+                   for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = ""), kk[gk[84]] = gk[1]; kk[gk[84]] < kk[gk[1]].length * gk[68]; kk[gk[84]] += gk[11]) kk[gk[2]] += String.fromCharCode(kk[gk[1]][kk[gk[84]] >> gk[50]] >>> gk[104] - kk[gk[84]] % gk[68] & gk[12]);
+                   return kk[gk[2]]
+                 }
+ ... (38 more added lines; see GitHub link above)
```

#### 1818. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13293-L13296` → after: `L13506-L13538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13506-L13538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13506-L13538) · [Before (L13293-L13296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13293-L13296)

```diff
-                   function IS(...HS) {
-                     if (HS[oS[13]] = oS[1], SS[oS[26]] >= SS[oS[4]]) throw Error(XS(oS[118]));
-                     if (NH(HS[oS[5]] = SS[oS[16]][SS[oS[26]]] & oS[12], SS[oS[26]]++), (HS[oS[5]] & oS[113]) == oS[55]) return HS[oS[5]] & oS[23];
-                     throw Error(XS(oS[120]))
+                 function Vk(...kk) {
+                   return qF(kk[gk[13]] = gk[35], kk[gk[35]] = (kk[gk[1]] & gk[108]) + (kk[gk[2]] & gk[108]), kk[-gk[3]] = (kk[gk[1]] >> gk[86]) + (kk[gk[2]] >> gk[86]) + (kk[gk[35]] >> gk[86])), kk[-gk[3]] << gk[86] | kk[gk[35]] & gk[108]
+                 }
+                 return qF(kk[gk[13]] = gk[1], kk[gk[43]] = gk[1], kk[gk[26]] = ""), kk[gk[35]] = new Array(gk[158], gk[159], -gk[160], -gk[161], gk[162], gk[163], -gk[164], -gk[165], -gk[166], gk[167], gk[168], gk[169], gk[170], -gk[171], -gk[172], -gk[173], -gk[174], -gk[175], g … [truncated]
+                   hex: Ik,
+                   b64: Tk,
+                   any: ik,
+                   hex_hmac: Xk,
+                   b64_hmac: Tk,
+                   any_hmac: ik
+                 }
+               }(), console.log(kk[gk[43]]))
+             }(), [
+               [kk[gk[46]], kk[gk[231]], kk[gk[35]]], kk[gk[8]]
+             ] = Ak;
+             const Ik = kk[gk[46]][Fk(gk[230])][Fk(218) + Fk(219) + Fk(gk[368]) + Fk(221)](kk[gk[35]]);
+ ... (17 more added lines; see GitHub link above)
```

#### 1819. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13299-L13309` → after: `L13546-L13574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13546-L13574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13546-L13574) · [Before (L13299-L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13299-L13309)

```diff
-                   function fS(...HS) {
-                     if (NH(HS[oS[13]] = oS[1], HS[-oS[117]] = oS[19], HS[oS[14]] = oS[19], HS[oS[103]] = oS[19], HS[-oS[122]] = oS[19], HS[oS[44]] = oS[19]), SS[oS[26]] > SS[oS[4]]) throw Error(XS(oS[118]));
-                     if (SS[oS[26]] == SS[oS[4]]) return oS[71];
-                     if (NH(HS[-oS[117]] = SS[oS[16]][SS[oS[26]]] & oS[12], SS[oS[26]]++), (HS[-oS[117]] & oS[55]) == oS[1]) return HS[-oS[117]];
-                     if ((HS[-oS[117]] & oS[119]) == oS[113]) {
-                       if (NH(HS[oS[14]] = IS(), HS[oS[44]] = (HS[-oS[117]] & oS[112]) << oS[24] | HS[oS[14]]), HS[oS[44]] >= oS[55]) return HS[oS[44]];
-                       throw Error(XS(oS[120]))
-                     }
-                     if ((HS[-oS[117]] & oS[121]) == oS[119]) {
-                       if (NH(HS[oS[14]] = IS(), HS[oS[103]] = IS(), HS[oS[44]] = (HS[-oS[117]] & oS[114]) << oS[27] | HS[oS[14]] << oS[24] | HS[oS[103]]), HS[oS[44]] >= 2048) return xS(HS[oS[44]]), HS[oS[44]];
-                       throw Error(XS(oS[120]))
+             function Xk(...kk) {
+               qF(kk[gk[13]] = gk[35], kk[gk[35]] = ak(kk[gk[1]])), kk[gk[35]].length > gk[86] && (kk[gk[35]] = xk(kk[gk[35]], kk[gk[1]].length * gk[11]));
+               var Fk = Array(gk[86]),
+                 Ik = Array(gk[86]);
+               for (kk[gk[25]] = gk[1]; kk[gk[25]] < gk[86]; kk[gk[25]]++) qF(Fk[kk[gk[25]]] = kk[gk[35]][kk[gk[25]]] ^ gk[139], Ik[kk[gk[25]]] = kk[gk[35]][kk[gk[25]]] ^ gk[140]);
+               return kk[-gk[235]] = xk(Fk.concat(ak(kk[gk[2]])), gk[88] + kk[gk[2]].length * gk[11]), qk(xk(Ik.concat(kk[-gk[235]]), rk(ik(238), gk[88], gk[59])))
+             }
+ 
+             function Tk(...Fk) {
+               Fk[gk[13]] = gk[2];
+               try {
+                 kk[gk[43]]
+               } catch (Ik) {
+                 kk[gk[43]] = gk[1]
+               }
+               for (qF(Fk[gk[43]] = kk[gk[43]] ? ik(gk[55]) + ik(gk[152]) + ik(gk[237]) : ik(gk[55]) + ik(gk[94]) + function(...kk) {
+ ... (13 more added lines; see GitHub link above)
```

#### 1820. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13311-L13313` → after: `L13576-L13580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13576-L13580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13576-L13580) · [Before (L13311-L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13311-L13313)

```diff
-                     if ((HS[-oS[117]] & oS[116]) == oS[121] && (NH(HS[oS[14]] = IS(), HS[oS[103]] = IS(), HS[-oS[122]] = IS(), HS[oS[44]] = (HS[-oS[117]] & oS[26]) << oS[115] | HS[oS[14]] << oS[27] | HS[oS[103]] << oS[24] | HS[-oS[122]]), HS[oS[44]] >= oS[107] && HS[oS[44]] <= 11 … [truncated]
-                     throw Error(XS(208))
-                   }
+                     return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                   }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 }(243), Fk[gk[26]] = "", Fk[gk[4]] = gk[15]), Fk[gk[10]] = gk[1]; Fk[gk[10]] < Fk[gk[1]].length; Fk[gk[10]]++) qF(Fk[gk[4]] = Fk[gk[1]].charCodeAt(Fk[gk[10]]), Fk[gk[26]] += Fk[gk[43]].charAt(Fk[gk[4]] >>> gk[10] & gk[92]) + Fk[gk[43]].charAt(Fk[gk[4]] & gk[92]));
+               return Fk[gk[26]]
+             }
```

#### 1821. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13315-L13318` → after: `L13582-L13596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13582-L13596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13582-L13596) · [Before (L13315-L13318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13315-L13318)

```diff
-                   function kS(...HS) {
-                     for (NH(HS[oS[13]] = oS[2], SS[oS[16]] = tS(HS[oS[1]]), SS[oS[4]] = SS[oS[16]].length, SS[oS[26]] = oS[1], HS[oS[96]] = [], HS[oS[14]] = oS[19]);
-                       (HS[oS[14]] = fS()) !== oS[71];) HS[oS[96]].push(HS[oS[14]]);
-                     return bS(HS[oS[96]])
+             function yk(...Fk) {
+               function Xk(kk) {
+                 return typeof Rk[kk] === gk[14] ? Rk[kk] = function(kk) {
+                   var Fk, Ik, Xk, Tk, ik, yk, lk;
+                   for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
+                     var ak = 'IGMmOJiPoWpk[0v=3(&Nz`~C%|eY*D7b.8]a:g/r!;+UL2AuX91@R_xsS$T#hEBnjw>{f6QtcK5)Z?H}V<y4^",Fdlq'.indexOf(Fk[lk]);
+                     if (ak !== -gk[2])
+                       if (yk < gk[1]) yk = ak;
+                       else {
+                         qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                         do {
+                           qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
+                         } while (ik > gk[7]);
+                         yk = -gk[2]
+                       }
```

#### 1822. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13320-L13336` → after: `L13598-L13599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13598-L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13598-L13599) · [Before (L13320-L13336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13320-L13336)

```diff
-                   SS[oS[13]] = oS[2], SS[oS[5]] = String.fromCharCode, NH(SS[oS[16]] = oS[19], SS[oS[4]] = oS[19], SS[oS[26]] = oS[19]), NH(SS[oS[1]].version = gS(oS[42]), SS[oS[1]].encode = uS, SS[oS[1]].decode = kS)
-                 }(typeof exports === gS(210) + gS(211) ? this.utf8 = {} : exports)
-             }(), [SS[-oS[29]], SS[oS[2]], SS[oS[0]]] = TS;
-             const gS = SS[-oS[29]][XS(oS[123])];
-             if (gS[XS(oS[124]) + oS[58]]) gS[HS(213) + HS(oS[75]) + HS(oS[73])](SS[oS[2]], SS[oS[0]]);
-             else {
-               function tS(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'H[%;>gCKhf?`.Qx8V|m1luL"Jz/4}9F#,vNo@32T+GX5Ua{S^I_YWB~wA*ekEj)p$]r0=dybRq:Z7cn&<(sD6!iMtOP', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[-oS[126]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[125]] = oS[1],  … [truncated]
-                   if (SS[oS[127]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[127]] !== -oS[2])
-                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[127]];
-                     else {
-                       NH(SS[oS[31]] += SS[oS[127]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[125]], SS[oS[125]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                       do {
-                         NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[125]] -= oS[11])
-                       } while (SS[oS[125]] > oS[26]);
-                       SS[oS[31]] = -oS[2]
- ... (1 more removed lines; see GitHub link above)
+                   return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                 }(Uk[kk]) : Rk[kk]
```

#### 1823. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13338-L13340` → after: `L13601-L13605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13601-L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13601-L13605) · [Before (L13338-L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13338-L13340)

```diff
- 
-               function bS(...SS) {
-                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = tS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               Fk[gk[13]] = gk[2];
+               try {
+                 kk[gk[233]]
+               } catch (Ik) {
+                 kk[gk[233]] = ""
```

#### 1824. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13343-L13355` → after: `L13612-L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13612-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13612-L13665) · [Before (L13343-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13343-L13355)

```diff
-               function xS(...SS) {
-                 NH(SS[oS[13]] = oS[1], SS[-oS[94]] = function(...HS) {
-                   return HS[oS[13]] = oS[0], SS[oS[88]]({}, HS[oS[1]], HS[oS[2]])
-                 }, SS[oS[88]] = function(...HS) {
-                   if (NH(HS[oS[13]] = oS[4], HS[oS[11]] = {}), HS[oS[1]][HS[oS[2]] + HS[oS[0]]] !== oS[19]) return HS[oS[1]][HS[oS[2]] + HS[oS[0]]];
-                   if (HS[oS[2]] === HS[oS[0]]) return oS[78];
-                   for (HS[oS[66]] = oS[1]; HS[oS[66]] < HS[oS[2]].length; HS[oS[66]]++) HS[oS[11]][HS[oS[2]][HS[oS[66]]]] === oS[19] && (HS[oS[11]][HS[oS[2]][HS[oS[66]]]] = oS[1]), HS[oS[11]][HS[oS[0]][HS[oS[66]]]] === oS[19] && (HS[oS[11]][HS[oS[0]][HS[oS[66]]]] = oS[1]), NH(HS[ … [truncated]
-                   for (HS[-oS[128]] in HS[oS[11]])
-                     if (HS[oS[11]][HS[-oS[128]]] !== oS[1]) return HS[oS[1]][HS[oS[2]] + HS[oS[0]]] = oS[71], oS[71];
-                   for (HS[oS[24]] = oS[2]; HS[oS[24]] < HS[oS[2]].length; HS[oS[24]]++)
-                     if (SS[oS[88]](HS[oS[1]], HS[oS[2]].substr(oS[1], HS[oS[24]]), HS[oS[0]].substr(oS[1], HS[oS[24]])) && SS[oS[88]](HS[oS[1]], HS[oS[2]].substr(HS[oS[24]]), HS[oS[0]].substr(HS[oS[24]])) || SS[oS[88]](HS[oS[1]], HS[oS[2]].substr(oS[1], HS[oS[24]]), HS[oS[0]].sub … [truncated]
-                   return HS[oS[1]][HS[oS[2]] + HS[oS[0]]] = oS[71], oS[71]
-                 }, console.log(SS[-oS[94]]))
+             function lk(...kk) {
+               var Fk, Ik;
+               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = "", kk[gk[26]] = -gk[2]); ++kk[gk[26]] < kk[gk[1]].length;) qF(Fk = kk[gk[1]].charCodeAt(kk[gk[26]]), Ik = kk[gk[26]] + gk[2] < kk[gk[1]].length ? kk[gk[1]].charCodeAt(kk[gk[26]] + gk[2]) : gk[1]), gk[144] <= Fk && Fk <= gk[14 … [truncated]
+               return kk[gk[2]]
+             }
+ 
+             function ak(...kk) {
+               for (qF(kk[gk[13]] = gk[2], kk[gk[238]] = Array(kk[gk[1]].length >> gk[35])), kk[gk[239]] = gk[1]; kk[gk[239]] < kk[gk[238]].length; kk[gk[239]]++) kk[gk[238]][kk[gk[239]]] = gk[1];
+               for (kk[gk[239]] = gk[1]; kk[gk[239]] < kk[gk[1]].length * gk[11]; kk[gk[239]] += gk[11]) kk[gk[238]][kk[gk[239]] >> gk[50]] |= (kk[gk[1]].charCodeAt(kk[gk[239]] / gk[11]) & gk[12]) << gk[104] - kk[gk[239]] % gk[68];
+               return kk[gk[238]]
+             }
+ 
+             function qk(...kk) {
+               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = ""), kk[gk[44]] = gk[1]; kk[gk[44]] < kk[gk[1]].length * gk[68]; kk[gk[44]] += gk[11]) kk[gk[43]] += String.fromCharCode(kk[gk[1]][kk[gk[44]] >> gk[50]] >>> gk[104] - kk[gk[44]] % gk[68] & gk[12]);
+               return kk[gk[43]]
+             }
+ ... (38 more added lines; see GitHub link above)
```

#### 1825. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13357` → after: `L13667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13667) · [Before (L13357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13357)

```diff
-               bS(oS[279]) + "S" in eS && xS()
+               return Fk[gk[43]]
```

#### 1826. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13359-L13371` → after: `L13669-L13685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13669-L13685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13669-L13685) · [Before (L13359-L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13359-L13371)

```diff
-           }
-         }), HS === XS(oS[17]) + XS(217)) {
-         function uS(...SS) {
-           NH(SS[oS[13]] = oS[1], SS[oS[21]] = function(...SS) {
-             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = SS[oS[1]].length, SS[oS[14]] = [], SS[oS[4]] = oS[1], SS[-oS[129]] = oS[1], SS[oS[1]].sort(((SS, HS) => SS - HS))), SS[oS[67]] = oS[1]; SS[oS[67]] < SS[oS[5]]; SS[oS[67]]++)
-               if (!(SS[oS[67]] > oS[1] && SS[oS[1]][SS[oS[67]]] === SS[oS[1]][SS[oS[67]] - oS[2]]))
-                 for (NH(SS[oS[4]] = SS[oS[67]] + oS[2], SS[-oS[129]] = SS[oS[5]] - oS[2]); SS[oS[4]] < SS[-oS[129]];)
-                   if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[4]]] + SS[oS[1]][SS[-oS[129]]] < oS[1]) SS[oS[4]]++;
-                   else if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[4]]] + SS[oS[1]][SS[-oS[129]]] > oS[1]) SS[-oS[129]]--;
-             else {
-               for (SS[oS[14]].push([SS[oS[1]][SS[oS[67]]], SS[oS[1]][SS[oS[4]]], SS[oS[1]][SS[-oS[129]]]]); SS[oS[4]] < SS[-oS[129]] && SS[oS[1]][SS[oS[4]]] === SS[oS[1]][SS[oS[4]] + oS[2]];) SS[oS[4]]++;
-               for (; SS[oS[4]] < SS[-oS[129]] && SS[oS[1]][SS[-oS[129]]] === SS[oS[1]][SS[-oS[129]] - oS[2]];) SS[-oS[129]]--;
-               NH(SS[oS[4]]++, SS[-oS[129]]--)
+ 
+             function Pk(...kk) {
+               return qF(kk[gk[13]] = gk[35], kk[gk[43]] = (kk[gk[1]] & gk[108]) + (kk[gk[2]] & gk[108]), kk[gk[25]] = (kk[gk[1]] >> gk[86]) + (kk[gk[2]] >> gk[86]) + (kk[gk[43]] >> gk[86])), kk[gk[25]] << gk[86] | kk[gk[43]] & gk[108]
+             }
+             return qF(kk[gk[13]] = gk[1], kk[gk[43]] = gk[1], kk[gk[233]] = ""), kk[gk[35]] = new Array(gk[158], gk[159], -gk[160], -gk[161], gk[162], gk[163], -gk[164], -gk[165], -gk[166], gk[167], gk[168], gk[169], gk[170], -gk[171], -gk[172], -gk[173], -gk[174], -gk[175], gk[1 … [truncated]
+               hex: function(...kk) {
+                 return kk[gk[13]] = gk[2], Tk(function(...kk) {
+                   return kk[gk[13]] = gk[2], qk(xk(ak(kk[gk[1]]), kk[gk[1]].length * gk[11]))
+                 }(lk(kk[gk[1]])))
+               },
+               b64: Fk,
+               any: Ik,
+               hex_hmac: function(...kk) {
+                 return kk[gk[13]] = gk[35], Tk(Xk(lk(kk[gk[1]]), lk(kk[gk[2]])))
+               },
+               b64_hmac: Fk,
+ ... (1 more added lines; see GitHub link above)
```

#### 1827. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13373-L13374` → after: `L13687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13687) · [Before (L13373-L13374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13373-L13374)

```diff
-             return SS[oS[14]]
-           }, console.log(SS[oS[21]]))
+           }(), console.log(kk[gk[43]]))
```

#### 1828. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13376` → after: `L13689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13689) · [Before (L13376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13376)

```diff
-         XS(oS[130]) in eS && uS(), TS = []
+         ik(gk[37]) in Dk && qk(), Ak = []
```

#### 1829. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13378` → after: `L13691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13691) · [Before (L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13378)

```diff
-       if (HS === XS(oS[69]) + XS(oS[223])) {
+       if (Fk === ik(251) + ik(252)) {
```

#### 1830. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13380-L13382` → after: `L13693-L13695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13693-L13695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13693-L13695) · [Before (L13380-L13382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13380-L13382)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'm|d8wX!J[rLAiYb%;u)yGBWf0CMO.qgHnj6t1VcD(&^p>S+hZI#,e}*k7lR?E532U9aFsKQNTPo4`"]<x_@{zv=/$~:', SS[-oS[130]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[-oS[130]].length, SS[-oS[134]] = [], SS[-oS[133]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
-             if (SS[oS[6]] = SS[oS[2]].indexOf(SS[-oS[130]][SS[-oS[131]]]), SS[oS[6]] !== -oS[2])
-               if (SS[-oS[132]] < oS[1]) SS[-oS[132]] = SS[oS[6]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'FYqkElsKdTNVWhr:uD}|mPMRX#{a=5.4LUfGCo(tn]81SB~eAOv;jHZ+IJ0p@7Qwb,_g%ix$2*[6`!9?>&<)"zy^3/c', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[79]] = [], kk[gk[50]] = gk[1], kk[-gk[119]] = gk[1], kk[gk[5 … [truncated]
+             if (kk[-gk[46]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[-gk[46]] !== -gk[2])
+               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[-gk[46]];
```

#### 1831. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13384` → after: `L13697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13697) · [Before (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13384)

```diff
-                 NH(SS[-oS[132]] += SS[oS[6]] * oS[32], SS[-oS[133]] |= SS[-oS[132]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[132]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[52]] += kk[-gk[46]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[-gk[119]], kk[-gk[119]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1832. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13386-L13389` → after: `L13699-L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13699-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13699-L13702) · [Before (L13386-L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13386-L13389)

```diff
-                   NH(SS[-oS[134]].push(SS[-oS[133]] & oS[12]), SS[-oS[133]] >>= oS[11], SS[oS[9]] -= oS[11])
-                 } while (SS[oS[9]] > oS[26]);
-                 SS[-oS[132]] = -oS[2]
-               } return SS[-oS[132]] > -oS[2] && SS[-oS[134]].push((SS[-oS[133]] | SS[-oS[132]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[134]])
+                   qF(kk[gk[79]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[119]] -= gk[11])
+                 } while (kk[-gk[119]] > gk[7]);
+                 kk[gk[52]] = -gk[2]
+               } return kk[gk[52]] > -gk[2] && kk[gk[79]].push((kk[gk[50]] | kk[gk[52]] << kk[-gk[119]]) & gk[12]), hk(kk[gk[79]])
```

#### 1833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13393` → after: `L13706-L13722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13706-L13722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13706-L13722) · [Before (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13393)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = IS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Lk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+         }
+ 
+         function Zk(...kk) {
+           qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
+             for (qF(kk[gk[13]] = gk[2], kk[-gk[241]] = kk[gk[1]].length, kk[gk[35]] = [], kk[gk[4]] = gk[1], kk[gk[41]] = gk[1], kk[gk[1]].sort(((kk, Fk) => kk - Fk))), kk[gk[8]] = gk[1]; kk[gk[8]] < kk[-gk[241]]; kk[gk[8]]++)
+               if (!(kk[gk[8]] > gk[1] && kk[gk[1]][kk[gk[8]]] === kk[gk[1]][kk[gk[8]] - gk[2]]))
+                 for (qF(kk[gk[4]] = kk[gk[8]] + gk[2], kk[gk[41]] = kk[-gk[241]] - gk[2]); kk[gk[4]] < kk[gk[41]];)
+                   if (kk[gk[1]][kk[gk[8]]] + kk[gk[1]][kk[gk[4]]] + kk[gk[1]][kk[gk[41]]] < gk[1]) kk[gk[4]]++;
+                   else if (kk[gk[1]][kk[gk[8]]] + kk[gk[1]][kk[gk[4]]] + kk[gk[1]][kk[gk[41]]] > gk[1]) kk[gk[41]]--;
+             else {
+               for (kk[gk[35]].push([kk[gk[1]][kk[gk[8]]], kk[gk[1]][kk[gk[4]]], kk[gk[1]][kk[gk[41]]]]); kk[gk[4]] < kk[gk[41]] && kk[gk[1]][kk[gk[4]]] === kk[gk[1]][kk[gk[4]] + gk[2]];) kk[gk[4]]++;
+               for (; kk[gk[4]] < kk[gk[41]] && kk[gk[1]][kk[gk[41]]] === kk[gk[1]][kk[gk[41]] - gk[2]];) kk[gk[41]]--;
+               qF(kk[gk[4]]++, kk[gk[41]]--)
+             }
+             return kk[gk[35]]
+ ... (1 more added lines; see GitHub link above)
```

#### 1834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13398-L13407` → after: `L13727-L13747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13727-L13747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13727-L13747) · [Before (L13398-L13407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13398-L13407)

```diff
-           if (HS[oS[13]] = oS[1], fS(oS[119]) + oS[305] in eS && function() {
-               var SS = function(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[139]] = SS[oS[1]].length, SS[oS[73]] = [], SS[oS[21]] = oS[1]), SS[oS[66]] = oS[1]; SS[oS[66]] < SS[oS[139]]; SS[oS[66]]++) SS[oS[73]].push(SS[oS[66]] !== oS[1] && SS[oS[1]][SS[oS[66]]] > SS[oS[1]][SS[oS[66]] - oS[2]] ? SS[oS[73]] … [truncated]
-                 for (SS[oS[67]] = SS[oS[139]] - oS[2]; SS[oS[67]] >= oS[1]; SS[oS[67]]--) SS[oS[67]] !== SS[oS[139]] - oS[2] && SS[oS[1]][SS[oS[67]]] > SS[oS[1]][SS[oS[67]] + oS[2]] && (SS[oS[73]][SS[oS[67]]] = Math.max(SS[oS[73]][SS[oS[67]]], SS[oS[73]][SS[oS[67]] + oS[2]] + oS[ … [truncated]
-                 return SS[oS[21]]
-               };
-               console.log(SS)
-             }(), NH(gS = function(...HS) {
-               return TS = HS, qS[SS].apply(this)
-             }, HS[oS[5]] = tS[SS]), HS[oS[5]]) {
+           if (qF(Fk[gk[13]] = gk[1], Ik = function(...Fk) {
+               return tk(254) in Dk && function(...kk) {
+                 function Fk(kk) {
+                   return kk[gk[2]] * gk[123] + (kk[gk[1]] < gk[1] ? gk[122] | kk[gk[1]] : kk[gk[1]])
+                 }
+ 
+                 function Ik(kk) {
+                   switch (((kk & gk[122]) !== gk[1]) * gk[2] + (kk < gk[1]) * gk[35]) {
+                     case gk[1]:
+                       return [kk % gk[122], Math.trunc(kk / gk[123])];
+                     case gk[2]:
+                       return [kk % gk[122] - gk[122], Math.trunc(kk / gk[123]) + gk[2]];
+                     case gk[35]:
+                       return [((kk + gk[122]) % gk[122] + gk[122]) % gk[122], Math.round(kk / gk[123])];
+                     case gk[25]:
+                       return [kk % gk[122], Math.trunc(kk / gk[123])]
+ ... (5 more added lines; see GitHub link above)
```

#### 1835. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13409` → after: `L13749-L13753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13749-L13753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13749-L13753) · [Before (L13409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13409)

```diff
-               SS[oS[13]] = oS[1]
+               function Fk() {}
+               kk[gk[13]] = gk[1], qF(kk[gk[246]] = function(...kk) {
+                 for (qF(kk[gk[13]] = gk[35], kk[gk[43]] = gk[1], kk[gk[25]] = gk[1], kk[-gk[244]] = new Fk(gk[1]), kk[gk[41]] = kk[-gk[244]], kk[gk[245]] = kk[gk[1]], kk[gk[53]] = kk[gk[2]]); kk[gk[245]] !== gk[64] || kk[gk[53]] !== gk[64];) qF(kk[gk[25]] = (kk[gk[245]] ? kk[gk[2 … [truncated]
+                 return kk[gk[43]] && (kk[gk[41]].next = new Fk(kk[gk[43]])), kk[-gk[244]].next
+               }, console.log(kk[gk[246]]))
```

#### 1836. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13411` → after: `L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13755) · [Before (L13411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13411)

```diff
-             fS(oS[251]) + oS[140] in eS && bS(), HS[oS[5]]
+             tk(gk[12]) in Dk && Tk(), Fk[-gk[243]]
```

#### 1837. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13415-L13426` → after: `L13759-L13761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13759-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13759-L13761) · [Before (L13415-L13426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13415-L13426)

```diff
-         fS(221), oS[140], NS = RS[SS] || (RS[SS] = kS())
-       } else {
-         function aS(...SS) {
-           NH(SS[oS[13]] = oS[1], SS[oS[14]] = function(...SS) {
-             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = SS[oS[1]].length, SS[oS[0]] = [], SS[oS[4]] = oS[1]), SS[oS[16]] = oS[1]; SS[oS[16]] < SS[oS[5]]; SS[oS[16]]++) SS[oS[0]].push(SS[oS[16]] !== oS[1] && SS[oS[1]][SS[oS[16]]] > SS[oS[1]][SS[oS[16]] - oS[2]] ? SS[oS[0]][SS[oS[16]]  … [truncated]
-             for (SS[oS[44]] = SS[oS[5]] - oS[2]; SS[oS[44]] >= oS[1]; SS[oS[44]]--) SS[oS[44]] !== SS[oS[5]] - oS[2] && SS[oS[1]][SS[oS[44]]] > SS[oS[1]][SS[oS[44]] + oS[2]] && (SS[oS[0]][SS[oS[44]]] = Math.max(SS[oS[0]][SS[oS[44]]], SS[oS[0]][SS[oS[44]] + oS[2]] + oS[2])), SS[oS … [truncated]
-             return SS[oS[4]]
-           }, console.log(SS[oS[14]]))
-         }
-         XS(oS[93]) + oS[150] in eS && aS(), NS = qS[SS]()
-       }
-       if (gS === XS(oS[76]) + XS(oS[141])) {
+         tk(253) + gk[411] in Dk && Zk(), lk = Yk[kk] || (Yk[kk] = jk())
+       } else lk = ak[kk]();
+       if (Ik === ik(gk[59]) + ik(257)) {
```

#### 1838. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13428-L13430` → after: `L13763-L13765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13763-L13765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13763-L13765) · [Before (L13428-L13430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13428-L13430)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'P#WAUxz!E=h5gouZYR,L/}CNjIJ>9aM(c_B3ys$G;7nKDbVQ@+]4pqH0?l8F%X~&2rf{m`k:vTw6^S.*<e"[)Odt|i1', SS[-oS[151]] = "" + (SS[oS[1]] || ""), SS[-oS[59]] = SS[-oS[151]].length, SS[-oS[153]] = [], SS[oS[44]] = oS[1], SS[oS[83]] = oS[1], SS … [truncated]
-             if (SS[oS[30]] = SS[oS[5]].indexOf(SS[-oS[151]][SS[-oS[152]]]), SS[oS[30]] !== -oS[2])
-               if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'MiEl05Lg]c9X!tnoKO8&,ZA#uzs6>YBW7@v~jRD`Qy;=e$%?[Jw1|*<G_F{bH4.U^x}3C2:I")+Pd(ph/kaNmVrfTSq', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52 … [truncated]
+             if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[102]]]), kk[gk[75]] !== -gk[2])
+               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
```

#### 1839. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13432` → after: `L13767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13767) · [Before (L13432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13432)

```diff
-                 NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[83]], SS[oS[83]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1840. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13434-L13437` → after: `L13769-L13772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13769-L13772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13769-L13772) · [Before (L13434-L13437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13434-L13437)

```diff
-                   NH(SS[-oS[153]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[83]] -= oS[11])
-                 } while (SS[oS[83]] > oS[26]);
-                 SS[oS[26]] = -oS[2]
-               } return SS[oS[26]] > -oS[2] && SS[-oS[153]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[83]]) & oS[12]), mS(SS[-oS[153]])
+                   qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
+                 } while (kk[gk[20]] > gk[7]);
+                 kk[gk[52]] = -gk[2]
+               } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
```

#### 1841. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13441` → after: `L13776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13776) · [Before (L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13441)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = KS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ek(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1842. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13446` → after: `L13781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13781) · [Before (L13446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13446)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(SS) {
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(kk) {
```

#### 1843. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13449` → after: `L13784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13784) · [Before (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13449)

```diff
-                 var qS = '7LBSAgQq0[h*^Muyd,f?v)N#Kn(~rTZz@;9$sOc{H&FamD=!Co_PI1Jw]U>"+p`/853Y2.i:GWl%}4VtXRb<j|6eExk'.indexOf(HS[NS]);
+                 var ak = 'd!WoiQA7(`gvNhODbuFB.zRV3:T_=6Ua{)HS%fZX&G^prYCI*njekLq8JtMP[/#,l}s$cK2w"1E@>xy0+9|54?;]<~m'.indexOf(Fk[lk]);
```

#### 1844. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13453` → after: `L13788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13788) · [Before (L13453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13453)

```diff
-                     NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1845. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13456` → after: `L13791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13791) · [Before (L13456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13456)

```diff
-                     } while (XS > oS[26]);
+                     } while (ik > gk[7]);
```

#### 1846. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13463-L13491` → after: `L13798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13798) · [Before (L13463-L13491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13463-L13491)

```diff
- 
-           function gS(...SS) {
-             if (SS[oS[13]] = oS[2], !SS[oS[1]]) return -oS[2];
-             const HS = gS(SS[oS[1]].left),
-               tS = gS(SS[oS[1]].right),
-               bS = Math.abs(HS - tS);
-             if (HS === 1 / 0 || tS === 1 / 0 || bS > oS[2]) return 1 / 0;
-             return Math.max(HS, tS) + oS[2]
-           }
-           SS[oS[13]] = oS[1], window[XS(oS[131]) + HS(233) + HS(oS[203]) + oS[154]] = {
-             buildCharacterMap: function(...SS) {
-               SS[oS[13]] = oS[2];
-               const HS = {};
-               for (let gS of SS[oS[1]].replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + oS[2] || oS[2];
-               return HS
-             },
- ... (13 more removed lines; see GitHub link above)
+           kk[gk[13]] = gk[1], qF(kk[gk[45]] = wk(259) + wk(260) + Fk(261) + Fk(262) + Fk(263) + Fk(264) + "om", kk[gk[4]] = Fk(265) + Fk(266) + Fk(267) + Fk(268) + Fk(269) + Fk(270) + Fk(271), kk[gk[35]] = Fk(272) + Fk(273) + Fk(274) + Fk(275) + Fk(276) + Fk(277) + Fk(278) + gk[2 … [truncated]
```

#### 1847. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13493-L13494` → after: `L13800-L13801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13800-L13801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13800-L13801) · [Before (L13493-L13494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13493-L13494)

```diff
-         return XS(231) in eS && GS(), {
-           [XS(235) + jS(oS[180])]: NS
+         return wk(258) + "8" in Dk && Hk(), {
+           [wk(279) + wk(280)]: lk
```

#### 1848. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13499-L13520` → after: `L13806-L13807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13806-L13807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13806-L13807) · [Before (L13499-L13520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13499-L13520)

```diff
- 
-     function SH([SS, HS, gS, tS], bS, XS, xS) {
-       xS || (xS = function(SS) {
-         return typeof iS[SS] === oS[18] ? iS[SS] = XS(WS[SS]) : iS[SS]
-       }), XS || (XS = function(...SS) {
-         for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'A/I1>t}u3qU;H*Je{NWbcY_9SZ!+Mg&pB7TfKDkv5EoO@mC8%|wF.GPVd?:Q4Lxj#y`2$z"0Rl,na^=X])<hri(s~6[', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[155]] = oS[1], SS[oS[9]] = oS[1], SS[oS[31]] = … [truncated]
-           if (SS[oS[47]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[47]] !== -oS[2])
-             if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[47]];
-             else {
-               NH(SS[oS[31]] += SS[oS[47]] * oS[32], SS[oS[155]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-               do {
-                 NH(SS[oS[16]].push(SS[oS[155]] & oS[12]), SS[oS[155]] >>= oS[11], SS[oS[9]] -= oS[11])
-               } while (SS[oS[9]] > oS[26]);
-               SS[oS[31]] = -oS[2]
-             } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[155]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
-       });
- ... (6 more removed lines; see GitHub link above)
+     qF(Rk = {}, Uk = ["T27<${tXqeIy.&[X;SWV,>_)G+iU|}", "K8>H({LNySzWY&%O", 'fc>45"3X*h52%H', "FjO<(r@,5=&iH$t$vk_>9qJ=z@zH1eJ(", "x0gCJE#k`Aw^Z$B6&<^xbrfNVh!Y52j$JZ74;&UqgXWF;", 'yP{D[~[<GXCOh/.$M}n_dUUnb(5p5EN%DNG%I."tZ)|z#tt!j}Z`', "@}G%)!=46@RY?pH!_6[Uv!9&qgqC!U`DtEI=", "/P_E … [truncated]
+       var kk, Fk, Ik, Xk = [function() {
```

#### 1849. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13528` → after: `L13815-L13816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13815-L13816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13815-L13816) · [Before (L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13528)

```diff
-       }], SS[oS[14]] = oS[19], SS[oS[15]] = []);
+       }];
+       qF(kk = void 0, Fk = []);
```

#### 1850. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13530` → after: `L13818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13818) · [Before (L13530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13530)

```diff
-         NH(SS[oS[14]] = Object, SS[oS[15]][oS[28]]("".__proto__.constructor.name))
+         qF(kk = Object, Fk[gk[23]]("".__proto__.constructor.name))
```

#### 1851. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13532-L13535` → after: `L13820-L13824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13820-L13824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13820-L13824) · [Before (L13532-L13535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13532-L13535)

```diff
-       SS: for (SS[oS[16]] = oS[1]; SS[oS[16]] < SS[oS[5]][oS[13]]; SS[oS[16]]++) try {
-         for (SS[oS[14]] = SS[oS[5]][SS[oS[16]]](), SS[-oS[17]] = oS[1]; SS[-oS[17]] < SS[oS[15]][oS[13]]; SS[-oS[17]]++)
-           if (typeof SS[oS[14]][SS[oS[15]][SS[-oS[17]]]] === oS[18]) continue SS;
-         return SS[oS[14]]
+       kk: for (Ik = gk[1]; Ik < Xk[gk[13]]; Ik++) try {
+         var Tk;
+         for (kk = Xk[Ik](), Tk = gk[1]; Tk < Fk[gk[13]]; Tk++)
+           if (typeof kk[Fk[Tk]] === gk[14]) continue kk;
+         return kk
```

#### 1852. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13537-L13539` → after: `L13826-L13828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13826-L13828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13826-L13828) · [Before (L13537-L13539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13537-L13539)

```diff
-       return SS[oS[14]] || this
-     }() || {}, US = zS.TextDecoder, pS = zS.Uint8Array, sS = zS.CK, BS = zS.String || String, MS = zS.Array || Array, FS = function(...SS) {
-       return NH(SS[oS[13]] = oS[1], SS[oS[5]] = new MS(oS[55]), SS[oS[2]] = BS[oS[25]] || BS.fromCharCode, SS[oS[0]] = []),
+       return kk || this
+     }() || {}, Nk = Ck.TextDecoder, ck = Ck.Uint8Array, Wk = Ck.je, fk = Ck.String || String, Bk = Ck.Array || Array, dk = function(...kk) {
+       return qF(kk[gk[13]] = gk[1], kk[gk[24]] = new Bk(gk[71]), kk[gk[2]] = fk[gk[21]] || fk.fromCharCode, kk[gk[4]] = []),
```

#### 1853. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13541-L13542` → after: `L13830-L13831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13830-L13831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13830-L13831) · [Before (L13541-L13542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13541-L13542)

```diff
-           for (NH(HS[oS[13]] = oS[2], HS[-oS[22]] = oS[19], HS[oS[0]] = oS[19], HS[oS[21]] = HS[oS[1]][oS[13]], SS[oS[0]][oS[13]] = oS[1]), HS[-oS[20]] = oS[1]; HS[-oS[20]] < HS[oS[21]];) NH(HS[oS[0]] = HS[oS[1]][HS[-oS[20]]++], HS[oS[0]] <= oS[54] ? HS[-oS[22]] = HS[oS[0]] : HS[ … [truncated]
-           return SS[oS[0]].join("")
+           for (qF(Fk[gk[13]] = gk[2], Fk[gk[18]] = gk[15], Fk[-gk[17]] = gk[15], Fk[gk[4]] = Fk[gk[1]][gk[13]], kk[gk[4]][gk[13]] = gk[1]), Fk[gk[16]] = gk[1]; Fk[gk[16]] < Fk[gk[4]];) qF(Fk[-gk[17]] = Fk[gk[1]][Fk[gk[16]]++], Fk[-gk[17]] <= gk[51] ? Fk[gk[18]] = Fk[-gk[17]] : Fk … [truncated]
+           return kk[gk[4]].join("")
```

#### 1854. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13544-L13545` → after: `L13833-L13834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13833-L13834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13833-L13834) · [Before (L13544-L13545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13544-L13545)

```diff
-     }()), NH(RS = Object[lS(118)](oS[48]), TS = void 0);
-     const HH = (oS[1], uS[oS[333]])(lS(oS[133]));
+     }()), qF(Yk = Object[mk(gk[371])](gk[64]), Ak = void 0);
+     const kF = (gk[1], qk[gk[379]])(mk(281));
```

#### 1855. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13548-L13619` → after: `L13837-L13842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13837-L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13837-L13842) · [Before (L13548-L13619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13548-L13619)

```diff
-         return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '+)BeM._uog"D,Qct5C&;qYFV:bNi*LIK<h]Xv>zy9={@r1wEA^!|0$J/3HkRxGaPSWOTdf48~#%U(n7lj[s2`6?Zmp}', SS[oS[158]] = "" + (SS[oS[1]] || ""), SS[oS[157]] = SS[oS[158]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[9]] = oS[1], SS[oS[3 … [truncated]
-             if (SS[oS[159]] = SS[oS[5]].indexOf(SS[oS[158]][SS[oS[3]]]), SS[oS[159]] !== -oS[2])
-               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[159]];
-               else {
-                 NH(SS[oS[31]] += SS[oS[159]] * oS[32], SS[oS[67]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                 do {
-                   NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[9]] -= oS[11])
-                 } while (SS[oS[9]] > oS[26]);
-                 SS[oS[31]] = -oS[2]
-               } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
-         }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-       }
-       if (SS[oS[13]] = oS[24], SS[oS[1]][lS(oS[57])][lS(250) + oS[58]] && SS[oS[2]] !== SS[oS[1]].HA && SS[oS[2]] !== SS[oS[0]][oS[320]]) {
-         function EH(...SS) {
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '9CPSF/zD*&r!83uo4f#=Q+@EsicMH}p2ONLRb[<?X$venm6qx]%A,>)B"IwklJt{aGW.(dy7;`T50:V_U|gZh^Kj~1Y', SS[-oS[113]] = "" + (SS[oS[1]] || ""), SS[-oS[136]] = SS[-oS[113]].length, SS[-oS[84]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
- ... (56 more removed lines; see GitHub link above)
+         return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(kk) {
+           var Fk, Ik, Xk, Tk, ik, yk, lk;
+           for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
+             var ak = 'b(4x612[.<_0m+KlLPTHipoqXSf5QW#/"wDIh~Mv:}3C7%d*aE,$kn>BU9Ru];{8ecZtAry`Y?s!Fg^V|JN@&jO=zG)'.indexOf(Fk[lk]);
+             if (ak !== -gk[2])
+               if (yk < gk[1]) yk = ak;
```

#### 1856. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13621` → after: `L13844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13844) · [Before (L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13621)

```diff
-                 NH(SS[oS[40]] += SS[oS[6]] * oS[32], SS[-oS[177]] |= SS[oS[40]] << SS[oS[9]], SS[oS[9]] += (SS[oS[40]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1857. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13623-L13667` → after: `L13846-L13849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13846-L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13846-L13849) · [Before (L13623-L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13623-L13667)

```diff
-                   NH(SS[oS[101]].push(SS[-oS[177]] & oS[12]), SS[-oS[177]] >>= oS[11], SS[oS[9]] -= oS[11])
-                 } while (SS[oS[9]] > oS[26]);
-                 SS[oS[40]] = -oS[2]
-               } return SS[oS[40]] > -oS[2] && SS[oS[101]].push((SS[-oS[177]] | SS[oS[40]] << SS[oS[9]]) & oS[12]), mS(SS[oS[101]])
-         }
- 
-         function yH(...SS) {
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = AH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-         }
- 
-         function VH(...SS) {
-           function HS(...SS) {
-             return SS[oS[13]] = oS[2], SS[oS[1]][oS[2]] * oS[179] + (SS[oS[1]][oS[1]] < oS[1] ? oS[178] | SS[oS[1]][oS[1]] : SS[oS[1]][oS[1]])
-           }
- 
-           function gS(...SS) {
- ... (29 more removed lines; see GitHub link above)
+                   qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
+                 } while (ik > gk[7]);
+                 yk = -gk[2]
+               }
```

#### 1858. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13669-L13734` → after: `L13851-L13852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13851-L13852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13851-L13852) · [Before (L13669-L13734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13669-L13734)

```diff
-           SS[oS[0]][WH(331) + oS[186]] = oS[71];
-           break
-         }
-       }
-       SS[oS[75]] = SS[oS[1]][HS(oS[160])][HS(332) + HS(333) + HS(334) + HS(335)](VS);
-       const IH = SS[oS[75]] === oS[48] ? SS[oS[1]][HS(oS[160])][HS(336) + HS(337) + HS(338)](SS[oS[2]], HS(oS[187]) + oS[188]) : SS[oS[75]][HS(oS[187]) + oS[188]],
-         fH = SS[oS[75]] === oS[48] ? SS[oS[1]][HS(oS[160])][HS(oS[165]) + HS(oS[166]) + HS(oS[167]) + HS(oS[168])](SS[oS[2]], HS(oS[189]) + HS(oS[190]) + HS(oS[191]) + oS[44]) : SS[oS[75]][HS(oS[189]) + HS(oS[190]) + HS(oS[191]) + oS[44]],
-         kH = SS[oS[75]] === oS[48] ? SS[oS[1]][HS(oS[160])][HS(oS[165]) + HS(oS[166]) + HS(oS[167]) + HS(oS[168])](SS[oS[2]], HS(oS[192]) + HS(oS[193]) + HS(oS[194])) : SS[oS[75]][HS(oS[192]) + HS(oS[193]) + HS(oS[194])],
-         aH = SS[oS[75]] === oS[48] ? SS[oS[1]][HS(oS[160])][HS(oS[165]) + HS(oS[166]) + HS(oS[167]) + HS(oS[168])](SS[oS[2]], HS(oS[195]) + HS(oS[196]) + oS[197]) : SS[oS[75]][HS(oS[195]) + HS(oS[196]) + oS[197]],
-         KH = (qH || SS[oS[0]][HS(348) + HS(349)] < bH(SS[oS[1]], SS[oS[2]], VS, DS)) && !SS[oS[4]][HS(oS[365]) + HS(oS[366]) + oS[198]] && !wS && uS[HS(oS[200]) + HS(oS[201]) + oS[199]] > oS[1],
-         jH = SS[oS[4]][HS(oS[202]) + oS[31]] && !jS && !gH && !SS[oS[0]][HS(oS[228]) + oS[31]] && uS[HS(oS[200]) + HS(oS[201]) + oS[199]] > oS[1] && !RS,
-         GH = SS[oS[4]][HS(oS[202]) + oS[31]] && !SS[oS[0]][HS(356) + HS(357) + HS(358)],
-         CH = (oS[1], dS[oS[31]])(IH, xS),
-         nH = GH && SS[oS[0]][HS(359) + HS(360) + HS(361) + HS(362) + oS[208]] < oS[108];
-       if (SS[oS[144]] = oS[71], CH && (nH || SS[oS[4]][HS(363) + HS(364)])) {
-         function zH(...SS) {
- ... (50 more removed lines; see GitHub link above)
+           return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+         }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1859. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13736` → after: `L13854-L13856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13854-L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13854-L13856) · [Before (L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13736)

```diff
-       if (GH) {
+       if (kk[gk[13]] = gk[20], kk[gk[1]][Fk(gk[248])][Fk(283) + gk[54]] && kk[gk[2]] !== kk[gk[1]].oR && kk[gk[2]] !== kk[gk[35]][gk[407]]) throw new Error(Fk(284));
+       const Ik = kk[gk[1]][Fk(gk[248])][Fk(285) + gk[8]](kk[gk[2]]);
+       if (kk[gk[10]][Fk(286) + Fk(287)] = Ik, !Ik) {
```

#### 1860. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13740` → after: `L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13860) · [Before (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13740)

```diff
-             var qS = 'JLEDetPRMdKNbYfSWkIQmCrGlqhsp"UoBjn{^iyV0,`XOcT4ZH.}F|9[aAu6+>@=5<37~)]2;:z*v?8%!$&1/wx_(g#'.indexOf(HS[NS]);
+             var ak = '|faGcFXdgHOeEWDpNhCunj^P~tLIik}v$#_SwmU.!lTQoq;x)%KY,B9?MZsRVb=AJ<r`"]*y&>z0+18/6(42@{[375:'.indexOf(Fk[lk]);
```

#### 1861. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13744` → after: `L13864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13864) · [Before (L13744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13744)

```diff
-                 NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1862. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13747` → after: `L13867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13867) · [Before (L13747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13747)

```diff
-                 } while (XS > oS[26]);
+                 } while (ik > gk[7]);
```

#### 1863. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13755` → after: `L13875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13875) · [Before (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13755)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = MH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = GF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1864. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13759-L13763` → after: `L13879-L13891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13879-L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13879-L13891) · [Before (L13759-L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13759-L13763)

```diff
-           function HS() {}
-           SS[oS[13]] = oS[1], NH(SS[oS[5]] = function(...SS) {
-             for (NH(SS[oS[13]] = oS[0], SS[oS[0]] = oS[1], SS[-oS[126]] = oS[1], SS[oS[21]] = new HS(oS[1]), SS[oS[183]] = SS[oS[21]], SS[oS[44]] = SS[oS[1]], SS[oS[207]] = SS[oS[2]]); SS[oS[44]] !== oS[48] || SS[oS[207]] !== oS[48];) NH(SS[-oS[126]] = (SS[oS[44]] ? SS[oS[44]].va … [truncated]
-             return SS[oS[0]] && (SS[oS[183]].next = new HS(SS[oS[0]])), SS[oS[21]].next
-           }, console.log(SS[oS[5]]))
+           qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
+             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = kk[gk[1]].length, kk[gk[26]] = [], kk[gk[25]] = gk[1], kk[gk[41]] = gk[1], kk[gk[1]].sort(((kk, Fk) => kk - Fk))), kk[-gk[51]] = gk[1]; kk[-gk[51]] < kk[gk[43]]; kk[-gk[51]]++)
+               if (!(kk[-gk[51]] > gk[1] && kk[gk[1]][kk[-gk[51]]] === kk[gk[1]][kk[-gk[51]] - gk[2]]))
+                 for (qF(kk[gk[25]] = kk[-gk[51]] + gk[2], kk[gk[41]] = kk[gk[43]] - gk[2]); kk[gk[25]] < kk[gk[41]];)
+                   if (kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[25]]] + kk[gk[1]][kk[gk[41]]] < gk[1]) kk[gk[25]]++;
+                   else if (kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[25]]] + kk[gk[1]][kk[gk[41]]] > gk[1]) kk[gk[41]]--;
+             else {
+               for (kk[gk[26]].push([kk[gk[1]][kk[-gk[51]]], kk[gk[1]][kk[gk[25]]], kk[gk[1]][kk[gk[41]]]]); kk[gk[25]] < kk[gk[41]] && kk[gk[1]][kk[gk[25]]] === kk[gk[1]][kk[gk[25]] + gk[2]];) kk[gk[25]]++;
+               for (; kk[gk[25]] < kk[gk[41]] && kk[gk[1]][kk[gk[41]]] === kk[gk[1]][kk[gk[41]] - gk[2]];) kk[gk[41]]--;
+               qF(kk[gk[25]]++, kk[gk[41]]--)
+             }
+             return kk[gk[26]]
+           }, console.log(kk[gk[43]]))
```

#### 1865. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13765` → after: `L13893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13893) · [Before (L13765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13765)

```diff
-         FH(370) + "W" in eS && RH(), SS[oS[0]][FH(371) + FH(372) + FH(373) + oS[208]] = oS[1]
+         return pF(288) in Dk && uF(), void lk()[pF(289)](kk[gk[10]][pF(290) + pF(291) + pF(292)], gk[1], gk[1], gk[1])
```

#### 1866. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13767` → after: `L13895-L13958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13895-L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13895-L13958) · [Before (L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13767)

```diff
-       if (SS[oS[0]][HS(374) + HS(375) + HS(376) + oS[208]]++, qH) {
+       const Xk = kk[gk[35]][Fk(gk[406]) + Fk(294)],
+         yk = Xk[Fk(295)],
+         qk = kk[gk[1]][Fk(gk[248])][Fk(296)](kk[gk[2]], Xk),
+         ek = kk[gk[1]][Fk(gk[248])][Fk(297) + Fk(298) + Fk(299) + Fk(300)](kk[gk[2]], Xk),
+         {
+           [Fk(301) + gk[281]]: wk,
+           [Fk(302) + Fk(303) + Fk(304) + gk[112]]: Hk,
+           [Fk(305) + Fk(306) + Fk(307)]: xk,
+           [Fk(308) + Fk(309) + Fk(310)]: Pk,
+           [Fk(311)]: Kk,
+           [Fk(312)]: Qk,
+           [Fk(gk[402]) + gk[403]]: sk,
+           [Fk(314) + Fk(315)]: Vk,
+           [Fk(316) + Fk(317) + Fk(318) + Fk(gk[419])]: Ek,
+           [Fk(320) + Fk(321)]: bk,
+           [Fk(322) + Fk(323) + Fk(324)]: Ck
+ ... (48 more added lines; see GitHub link above)
```

#### 1867. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13769-L13771` → after: `L13960-L13962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13960-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13960-L13962) · [Before (L13769-L13771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13769-L13771)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '1HSALiDUZMy.I`hB?O=;p73,/$Rs~oN:{9cQ%rVC>0We5q}FJwG"8&@x^jXE]fPT4vg#K|d[6(uanz*t)Y_+mbk<!l2', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[209] … [truncated]
-             if (SS[-oS[84]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[-oS[84]] !== -oS[2])
-               if (SS[-oS[209]] < oS[1]) SS[-oS[209]] = SS[-oS[84]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = '^eGfFDNjAprImLPdVt4k?Ccx=|g>5TbXQ$/68.`E{U;~_:]H[i<Yu@%1,+#ny!}h2qO*K37SZ"zo&l0R(B)wW9JvMsa', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[136] … [truncated]
+             if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
+               if (kk[gk[136]] < gk[1]) kk[gk[136]] = kk[gk[28]];
```

#### 1868. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13773` → after: `L13964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13964) · [Before (L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13773)

```diff
-                 NH(SS[-oS[209]] += SS[-oS[84]] * oS[32], SS[oS[44]] |= SS[-oS[209]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[209]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[136]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[136]] << kk[gk[20]], kk[gk[20]] += (kk[gk[136]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1869. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13775-L13778` → after: `L13966-L13969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13966-L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13966-L13969) · [Before (L13775-L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13775-L13778)

```diff
-                   NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
-                 } while (SS[oS[9]] > oS[26]);
-                 SS[-oS[209]] = -oS[2]
-               } return SS[-oS[209]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[209]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
+                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
+                 } while (kk[gk[20]] > gk[7]);
+                 kk[gk[136]] = -gk[2]
+               } return kk[gk[136]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[136]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
```

#### 1870. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13781-L13782` → after: `L13972-L13973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13972-L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13972-L13973) · [Before (L13781-L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13781-L13782)

```diff
-         function oH(...SS) {
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = TH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+         function NF(kk) {
+           return typeof Rk[kk] === gk[14] ? Rk[kk] = CF(Uk[kk]) : Rk[kk]
```

#### 1871. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13784` → after: `L13975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13975) · [Before (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13784)

```diff
-         NH(SS[oS[0]][HS(oS[210]) + oH(378)] = oS[71], SS[oS[0]][oH(379) + oH(380)] = oS[1]), SS[oS[144]] || (SS[oS[0]][oH(381) + oS[31]] = oS[71])
+         qF(kk[gk[35]][Fk(396) + Fk(397)] = gk[70], kk[gk[35]][NF(398) + NF(399)] = gk[1]), kk[gk[7]] || (kk[gk[35]][NF(400) + gk[52]] = gk[70])
```

#### 1872. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13786-L13787` → after: `L13977-L13978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13977-L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13977-L13978) · [Before (L13786-L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13786-L13787)

```diff
-       const PH = qH && !SS[oS[0]][HS(oS[357]) + HS(oS[358]) + HS(oS[359])] && SS[oS[4]][HS(oS[202]) + oS[31]] && !SS[oS[0]][HS(oS[360]) + HS(oS[361]) + HS(oS[362]) + HS(oS[363])];
-       if (SS[oS[11]] = oS[71], jH) {
+       const KF = FF && !kk[gk[35]][Fk(gk[437]) + Fk(gk[438]) + Fk(gk[439])] && kk[gk[25]][Fk(gk[284]) + gk[52]] && !kk[gk[35]][Fk(gk[293]) + Fk(gk[294]) + Fk(gk[295]) + Fk(gk[296])];
+       if (kk[-gk[308]] = gk[70], HF) {
```

#### 1873. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13789-L13791` → after: `L13980-L13982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13980-L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13980-L13982) · [Before (L13789-L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13789-L13791)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'pGAlHaiKZYtekOcBXofIPCFjLWhdTnqgbRMDrQUNsSEJmVu".};*v[8=w(%5:|7!{<x#^`,4+>y_z/~]&90?)16$@23', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[84]] = oS[1], SS[oS[26]] = … [truncated]
-             if (SS[oS[30]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
-               if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'zVCJAmaSfe9H}5d%Oix{DXZM*wW0)K,vlB;c[=P^?+Ys!L1g6E.>Uk2jh|y<QIu@&tFG8b$:~orN/]pR4("q7_T#`n3', kk[-gk[107]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[107]].length, kk[gk[150]] = [], kk[gk[297]] = gk[1], kk[gk[20]] = gk[1], kk[g … [truncated]
+             if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[107]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
+               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
```

#### 1874. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13793` → after: `L13984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13984) · [Before (L13793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13793)

```diff
-                 NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[84]], SS[oS[84]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[297]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1875. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13795-L13798` → after: `L13986-L13989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13986-L13989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13986-L13989) · [Before (L13795-L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13795-L13798)

```diff
-                   NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[84]] -= oS[11])
-                 } while (SS[oS[84]] > oS[26]);
-                 SS[oS[26]] = -oS[2]
-               } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[84]]) & oS[12]), mS(SS[oS[66]])
+                   qF(kk[gk[150]].push(kk[gk[297]] & gk[12]), kk[gk[297]] >>= gk[11], kk[gk[20]] -= gk[11])
+                 } while (kk[gk[20]] > gk[7]);
+                 kk[gk[52]] = -gk[2]
+               } return kk[gk[52]] > -gk[2] && kk[gk[150]].push((kk[gk[297]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[150]])
```

#### 1876. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13802` → after: `L13993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13993) · [Before (L13802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13802)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = lH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = cF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1877. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13804-L13805` → after: `L13995-L13996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13995-L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13995-L13996) · [Before (L13804-L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13804-L13805)

```diff
-         if (SS[oS[0]][HS(oS[210]) + mH(oS[215])]) {
-           if (SS[oS[0]][mH(390) + mH(391) + oS[44]] > oS[1]) {
+         if (kk[gk[35]][WF(gk[303]) + WF(gk[304])]) {
+           if (kk[gk[35]][WF(gk[299]) + WF(407) + gk[8]] > gk[1]) {
```

#### 1878. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13807-L13809` → after: `L13998-L14000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13998-L14000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13998-L14000) · [Before (L13807-L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13807-L13809)

```diff
-               for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = ')<87/CSPR|ow`h:r}N*x?Hid,c!XG3#s1pnQWYJ>O~(km5"v{z2Ft]_A+6ZV%j4agfl^T0[@=BbMu9yK$I&LeU.;EqD', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[-oS[82]] = [], SS[oS[67]] = oS[1], SS[oS[108]] = oS[1], SS[oS[ … [truncated]
-                 if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
-                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
+               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'S=[09`~u#d{p)?ZqLQN758%rFW}y<aH^C,B&f$(b@tkR;envs1hEwD+.6"IMV_jiAP|U/c>*o:2G!gl3]xTmXYK4OJz', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[138]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[-gk[298]] = gk[1], k … [truncated]
+                 if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
+                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1879. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13811` → after: `L14002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14002) · [Before (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13811)

```diff
-                     NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[108]], SS[oS[108]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[-gk[298]], kk[-gk[298]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1880. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13813-L13816` → after: `L14004-L14007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14004-L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14004-L14007) · [Before (L13813-L13816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13813-L13816)

```diff
-                       NH(SS[-oS[82]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[108]] -= oS[11])
-                     } while (SS[oS[108]] > oS[26]);
-                     SS[oS[26]] = -oS[2]
-                   } return SS[oS[26]] > -oS[2] && SS[-oS[82]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[108]]) & oS[12]), mS(SS[-oS[82]])
+                       qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[298]] -= gk[11])
+                     } while (kk[-gk[298]] > gk[7]);
+                     kk[gk[7]] = -gk[2]
+                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[7]] << kk[-gk[298]]) & gk[12]), hk(kk[gk[10]])
```

#### 1881. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13820` → after: `L14011-L14031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14011-L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14011-L14031) · [Before (L13820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13820)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = eH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = fF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             }
+             let dF = kk[gk[35]][WF(408) + WF(409)];
+             if (kk[gk[35]][WF(gk[299]) + BF(gk[301]) + gk[8]] < kk[gk[50]]) {
+               function YF(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[-gk[18]] = 'ru$`=8"./)7#LtvW;epgkM[?TsQ9!z16>D}^wY*JnR+Cximyh%l:VP_HSZEBF]o2{&aN,A5XqU~dKjIbcG<3O@(f4|0', kk[gk[61]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[61]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk … [truncated]
+                   if (kk[gk[75]] = kk[-gk[18]].indexOf(kk[gk[61]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
+                     if (kk[-gk[300]] < gk[1]) kk[-gk[300]] = kk[gk[75]];
+                     else {
+                       qF(kk[-gk[300]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[-gk[300]] << kk[gk[53]], kk[gk[53]] += (kk[-gk[300]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       do {
+                         qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
+                       } while (kk[gk[53]] > gk[7]);
+                       kk[-gk[300]] = -gk[2]
+                     } return kk[-gk[300]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[-gk[300]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+               }
+ ... (5 more added lines; see GitHub link above)
```

#### 1882. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13822-L13823` → after: `L14033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14033) · [Before (L13822-L13823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13822-L13823)

```diff
-             let Sg = SS[oS[0]][mH(392) + mH(393)];
-             SS[oS[0]][rH(oS[211]) + rH(oS[212]) + oS[44]] < SS[oS[67]] && (Sg *= SS[oS[0]][rH(oS[211]) + rH(oS[212]) + oS[44]] / SS[oS[67]]), NH(NS()[rH(396)](AS, oS[1], Sg, oS[1]), SS[oS[66]][rH(397) + rH(398)](AS), SS[oS[0]][rH(oS[211]) + rH(oS[212]) + oS[44]] -= SS[oS[67]])
+             qF(lk()[BF(413)](pk, gk[1], dF, gk[1]), kk[gk[10]][BF(414) + BF(415)](pk), kk[gk[35]][BF(416) + BF(gk[301]) + gk[8]] -= kk[gk[50]])
```

#### 1883. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13827-L13829` → after: `L14037-L14039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14037-L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14037-L14039) · [Before (L13827-L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13827-L13829)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[oS[65]] = 'Yu>5f1KR<&T$*{,AWOl.LPvGZw;Io+iz7J?]8|B~#VS`bcrM9nk:Xj2!_3pgHs=@E/eNQ}C^UD[tdxFhq4y")(a0m%6', SS[oS[213]] = "" + (SS[oS[1]] || ""), SS[-oS[11]] = SS[oS[213]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[o … [truncated]
-               if (SS[-oS[152]] = SS[oS[65]].indexOf(SS[oS[213]][SS[oS[11]]]), SS[-oS[152]] !== -oS[2])
-                 if (SS[oS[214]] < oS[1]) SS[oS[214]] = SS[-oS[152]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '8={1.9,2^u0WHfk#U*[$p"Lb|_IOdsXiD4:JAagM`Sq+?&v!r>wTKj}x/3FyNlt6@zGhc5E<Y;~P)BRZCeoQ](7%Vnm', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[7] … [truncated]
+               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[-gk[302]]]), kk[gk[75]] !== -gk[2])
+                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
```

#### 1884. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13831` → after: `L14041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14041) · [Before (L13831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13831)

```diff
-                   NH(SS[oS[214]] += SS[-oS[152]] * oS[32], SS[oS[44]] |= SS[oS[214]] << SS[oS[9]], SS[oS[9]] += (SS[oS[214]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1885. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13833-L13836` → after: `L14043-L14046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14043-L14046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14043-L14046) · [Before (L13833-L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13833-L13836)

```diff
-                     NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
-                   } while (SS[oS[9]] > oS[26]);
-                   SS[oS[214]] = -oS[2]
-                 } return SS[oS[214]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[214]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
+                     qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
+                   } while (kk[gk[20]] > gk[7]);
+                   kk[gk[7]] = -gk[2]
+                 } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[10]])
```

#### 1886. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13840` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14050) · [Before (L13840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13840)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Hg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = gF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1887. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13842-L13845` → after: `L14052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14052) · [Before (L13842-L13845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13842-L13845)

```diff
-           if (NH(SS[oS[0]][mH(399) + mH(oS[215])] = oS[78], NS()[mH(400)](AS, oS[1], function(...SS) {
-               var HS = {};
-               return TS = [SS, HS], rS(lS(710))
-             }(SS[oS[1]], SS[oS[2]], VS) * SS[oS[4]][gg(oS[216]) + gg(oS[217]) + oS[199]][gg(403) + gg(404) + gg(405) + gg(406)]() * uS[gg(oS[216]) + gg(oS[217]) + oS[199]], oS[1]), SS[oS[66]][gg(407) + gg(408)](AS), SS[oS[0]][gg(409) + gg(410) + oS[44]] = SS[oS[0]][gg(411) + "me" … [truncated]
+           if (qF(kk[gk[35]][WF(gk[303]) + WF(gk[304])] = gk[58], lk()[WF(417)](pk, gk[1], IF(kk[gk[1]], kk[gk[2]], Nk) * kk[gk[25]][WF(418) + WF(419) + gk[281]][WF(420) + mF(421) + mF(422) + mF(423)]() * qk[mF(424) + mF(425) + gk[281]], gk[1]), kk[gk[10]][mF(426) + mF(427)](pk),  … [truncated]
```

#### 1888. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13847-L13849` → after: `L14054-L14056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14054-L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14054-L14056) · [Before (L13847-L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13847-L13849)

```diff
-               for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'uObpLSDPIsihgewF^>(zX#,W:<U/H);VQqotRMY6Z&xy]J27~+08.`31C|k$B_{9A}=ac*K?@vr4njG5!"N%flmTEd[', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[oS … [truncated]
-                 if (SS[-oS[219]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[218]]]), SS[-oS[219]] !== -oS[2])
-                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[219]];
+               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'M`VDfUZrIb|J7yO,GW";QqXHe%Lgzl}>~p3C5(9xT&v1YkuPwhc:Bd?0n_<EAaRm#^FjK]$)Ns/4S2[.!t+io=8*6{@', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[233]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[g … [truncated]
+                 if (kk[gk[305]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[305]] !== -gk[2])
+                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[305]];
```

#### 1889. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13851` → after: `L14058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14058) · [Before (L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13851)

```diff
-                     NH(SS[oS[26]] += SS[-oS[219]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     qF(kk[gk[52]] += kk[gk[305]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1890. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13853-L13856` → after: `L14060-L14063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14060-L14063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14060-L14063) · [Before (L13853-L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13853-L13856)

```diff
-                       NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
-                     } while (SS[oS[24]] > oS[26]);
-                     SS[oS[26]] = -oS[2]
-                   } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                       qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
+                     } while (kk[gk[20]] > gk[7]);
+                     kk[gk[52]] = -gk[2]
+                   } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
```

#### 1891. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13860` → after: `L14067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14067) · [Before (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13860)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = tg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = hF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1892. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13862-L13864` → after: `L14069-L14083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14069-L14083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14069-L14083) · [Before (L13862-L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13862-L13864)

```diff
-             const Xg = SS[oS[4]][bg(412) + bg(413) + bg(414)];
-             if (PH && SS[oS[4]][oS[232]] && !Xg) NH(SS[oS[1]][bg(415)][bg(416)](SS[oS[2]], SS[oS[4]], SS[oS[0]], SS[oS[0]][bg(417) + bg(418)] + oS[2]), SS[oS[11]] = oS[78]);
-             else {
+             const DF = kk[gk[25]][mF(431) + rF(432) + rF(433)];
+             if (KF && kk[gk[25]][gk[317]] && !DF) {
+               function MF(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[-gk[307]] = 'cA)_6Tbot^0JHDkrh~jOu2%xf.8YXvn;(?}"[C4*W!&L=FS1iswyal$p`+<gGmIZMP7zqQdKUEV:e3/N@{B|>,#R]59', kk[gk[111]] = "" + (kk[gk[1]] || ""), kk[gk[306]] = kk[gk[111]].length, kk[-gk[138]] = [], kk[gk[8]] = gk[1], kk[gk[120]] = gk … [truncated]
+                   if (kk[gk[28]] = kk[-gk[307]].indexOf(kk[gk[111]][kk[-gk[114]]]), kk[gk[28]] !== -gk[2])
+                     if (kk[gk[305]] < gk[1]) kk[gk[305]] = kk[gk[28]];
+                     else {
+                       qF(kk[gk[305]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[305]] << kk[gk[120]], kk[gk[120]] += (kk[gk[305]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       do {
+                         qF(kk[-gk[138]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[120]] -= gk[11])
+                       } while (kk[gk[120]] > gk[7]);
+                       kk[gk[305]] = -gk[2]
+                     } return kk[gk[305]] > -gk[2] && kk[-gk[138]].push((kk[gk[8]] | kk[gk[305]] << kk[gk[120]]) & gk[12]), hk(kk[-gk[138]])
+               }
+ 
```

#### 1893. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13866-L13868` → after: `L14085-L14092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14085-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14085-L14092) · [Before (L13866-L13868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13866-L13868)

```diff
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'ST?<Ix:AM.Uhq7~Fgd*pJuV;`)>}G@5E0v!]aD+bKwy%Z91n{j3#^C,[4f_=2$6lmzr(8|"cOeLt&Pk/BsNXQHRYWio', SS[oS[219]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[219]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS … [truncated]
-                   if (SS[oS[6]] = SS[oS[2]].indexOf(SS[oS[219]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                     if (SS[-oS[220]] < oS[1]) SS[-oS[220]] = SS[oS[6]];
+                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = MF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               }
+               qF(kk[gk[1]][kI(434)][kI(435)](kk[gk[2]], kk[gk[25]], kk[gk[35]], kk[gk[35]][kI(436) + kI(437)] + gk[2]), kk[-gk[308]] = gk[58])
+             } else {
+               function FI(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '&~/ZMlu+vf5A`=.BS{C(34,>ptDTe|7E?m9s"dF%}GYgW@)ac!nN;I[ok^ij]LH<wrQq*UxKy0P62JXRz8b#h_OV1$:', kk[gk[309]] = "" + (kk[gk[1]] || ""), kk[-gk[62]] = kk[gk[309]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], k … [truncated]
+                   if (kk[gk[65]] = kk[gk[2]].indexOf(kk[gk[309]][kk[gk[39]]]), kk[gk[65]] !== -gk[2])
+                     if (kk[gk[57]] < gk[1]) kk[gk[57]] = kk[gk[65]];
```

#### 1894. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13870` → after: `L14094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14094) · [Before (L13870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13870)

```diff
-                       NH(SS[-oS[220]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[-oS[220]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[220]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[gk[57]] += kk[gk[65]] * gk[29], kk[gk[8]] |= kk[gk[57]] << kk[gk[53]], kk[gk[53]] += (kk[gk[57]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1895. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13872-L13875` → after: `L14096-L14099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14096-L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14096-L14099) · [Before (L13872-L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13872-L13875)

```diff
-                         NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
-                       } while (SS[oS[24]] > oS[26]);
-                       SS[-oS[220]] = -oS[2]
-                     } return SS[-oS[220]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[220]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                         qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
+                       } while (kk[gk[53]] > gk[7]);
+                       kk[gk[57]] = -gk[2]
+                     } return kk[gk[57]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[57]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
```

#### 1896. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13879` → after: `L14103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14103) · [Before (L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13879)

```diff
-                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = xg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = FI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1897. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13881` → after: `L14105-L14118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14105-L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14105-L14118) · [Before (L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13881)

```diff
-               SS[oS[1]][Ng(419)][Ng(420)](SS[oS[2]], SS[oS[4]], SS[oS[0]], oS[1])
+               kk[gk[1]][II(438)][II(439)](kk[gk[2]], kk[gk[25]], kk[gk[35]], gk[1])
+             }
+           } else {
+             function XI(...kk) {
+               for (qF(kk[gk[13]] = gk[2], kk[gk[242]] = '~"lEn,[9z)0NmK$UyR>D+.<|#3]f4k&}:2hXPSHLC@Mb!ZuB/p`evI?85_Oot1w6xdisGqj*gJ7AYcW%Q{aV(^TFr=;', kk[-gk[110]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[-gk[110]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], … [truncated]
+                 if (kk[gk[28]] = kk[gk[242]].indexOf(kk[-gk[110]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
+                   if (kk[gk[309]] < gk[1]) kk[gk[309]] = kk[gk[28]];
+                   else {
+                     qF(kk[gk[309]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[309]] << kk[gk[53]], kk[gk[53]] += (kk[gk[309]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     do {
+                       qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
+                     } while (kk[gk[53]] > gk[7]);
+                     kk[gk[309]] = -gk[2]
+                   } return kk[gk[309]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[309]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
```

#### 1898. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13883` → after: `L14120-L14125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14120-L14125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14120-L14125) · [Before (L13883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13883)

```diff
-           } else SS[oS[0]][gg(421) + gg(422)]++, SS[oS[66]][oS[221]][oS[2]] < oS[1] && (SS[oS[66]][oS[221]][oS[2]] = oS[1])
+ 
+             function TI(kk) {
+               return typeof Rk[kk] === gk[14] ? Rk[kk] = XI(Uk[kk]) : Rk[kk]
+             }
+             kk[gk[35]][TI(440) + TI(441)]++, kk[gk[10]][gk[310]][gk[2]] < gk[1] && (kk[gk[10]][gk[310]][gk[2]] = gk[1])
+           }
```

#### 1899. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13887-L13889` → after: `L14129-L14131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14129-L14131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14129-L14131) · [Before (L13887-L13889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13887-L13889)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = ',SFEthOaVl$f|T=0{YZDq&esn[+XW<^z7Gmykig"xj95Uw;c/}NRJ6~Ao:@`BCM2>_v#H34?bL%18pd(rQ.)]PuI!K*', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[222]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[-oS[22 … [truncated]
-             if (SS[-oS[49]] = SS[oS[2]].indexOf(SS[oS[14]][SS[-oS[223]]]), SS[-oS[49]] !== -oS[2])
-               if (SS[-oS[224]] < oS[1]) SS[-oS[224]] = SS[-oS[49]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'f69~@HuRpZAB:FWMYvcS[m2#GnPdNT_I`4Ckb(/D{)>a=3El1Qg&q|x!8O.rhX}y^J*5o,iV$7wU"]<z+0sKje;t%?L', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[235]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[233]] = gk[1], kk[-g … [truncated]
+             if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[312]]]), kk[gk[75]] !== -gk[2])
+               if (kk[-gk[311]] < gk[1]) kk[-gk[311]] = kk[gk[75]];
```

#### 1900. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13891` → after: `L14133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14133) · [Before (L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13891)

```diff
-                 NH(SS[-oS[224]] += SS[-oS[49]] * oS[32], SS[oS[67]] |= SS[-oS[224]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[224]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[-gk[311]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[-gk[311]] << kk[-gk[233]], kk[-gk[233]] += (kk[-gk[311]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1901. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13893-L13896` → after: `L14135-L14138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14135-L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14135-L14138) · [Before (L13893-L13896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13893-L13896)

```diff
-                   NH(SS[oS[222]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
-                 } while (SS[oS[24]] > oS[26]);
-                 SS[-oS[224]] = -oS[2]
-               } return SS[-oS[224]] > -oS[2] && SS[oS[222]].push((SS[oS[67]] | SS[-oS[224]] << SS[oS[24]]) & oS[12]), mS(SS[oS[222]])
+                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[233]] -= gk[11])
+                 } while (kk[-gk[233]] > gk[7]);
+                 kk[-gk[311]] = -gk[2]
+               } return kk[-gk[311]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[-gk[311]] << kk[-gk[233]]) & gk[12]), hk(kk[gk[41]])
```

#### 1902. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13900-L13919` → after: `L14142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14142) · [Before (L13900-L13919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13900-L13919)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = qg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-         }
-         if (SS[oS[0]][HS(oS[210]) + ug(423)] = oS[71], qH) {
-           function Ig(...SS) {
-             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'u@`74"1z*;/jxyD_R!vZnp38MsiK96:J>$S)F&lo+?OC=XBhLPq{Iw2,0T(fb]g^#%~kUeGHQm}N5Ec[<WV.taY|dAr', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[27]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[227]] = oS[1], SS[-oS[ … [truncated]
-               if (SS[-oS[225]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[-oS[225]] !== -oS[2])
-                 if (SS[-oS[226]] < oS[1]) SS[-oS[226]] = SS[-oS[225]];
-                 else {
-                   NH(SS[-oS[226]] += SS[-oS[225]] * oS[32], SS[oS[44]] |= SS[-oS[226]] << SS[oS[227]], SS[oS[227]] += (SS[-oS[226]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                   do {
-                     NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[227]] -= oS[11])
-                   } while (SS[oS[227]] > oS[26]);
-                   SS[-oS[226]] = -oS[2]
-                 } return SS[-oS[226]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[226]] << SS[oS[227]]) & oS[12]), mS(SS[oS[16]])
-           }
- 
- ... (4 more removed lines; see GitHub link above)
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = iI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1903. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13922-L13928` → after: `L14146-L14150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14146-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14146-L14150) · [Before (L13922-L13928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13922-L13928)

```diff
-       if (SS[oS[0]][HS(oS[228]) + oS[31]]) {
-         function kg(SS) {
-           var HS, gS, tS, bS, XS, xS, NS;
-           for (NH(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = oS[1], XS = oS[1], xS = -oS[2]), NS = oS[1]; NS < gS; NS++) {
-             var qS = 'FMupoEHgYhRrOIGjVNlfQZqDmbtkCJWXBci;LP8K*v{ds95TaUSAne>.&<wx4(6/[,}`2%~]y+)z"^#!?7$0@31=:|_'.indexOf(HS[NS]);
-             if (qS !== -oS[2])
-               if (xS < oS[1]) xS = qS;
+       if (kk[gk[35]][Fk(gk[286]) + gk[52]]) {
+         function lI(...kk) {
+           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'kjWya_H+&/ZegnxXDYLMNUm90")>z]6JIv:A(OrS5Bh.;~uw1f[2tF`d!PlRpqTVC8i*Gc%E|4sQK37#b{$<?=@,}^o', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[10]] = [], kk[-gk[232]] = gk[1], kk[gk[53]] = gk[1], kk[gk[ … [truncated]
+             if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[120]]]), kk[gk[28]] !== -gk[2])
+               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1904. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13930` → after: `L14152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14152) · [Before (L13930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13930)

```diff
-                 NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[232]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1905. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13932-L13937` → after: `L14154-L14157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14154-L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14154-L14157) · [Before (L13932-L13937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13932-L13937)

```diff
-                   NH(tS.push(bS & oS[12]), bS >>= oS[11], XS -= oS[11])
-                 } while (XS > oS[26]);
-                 xS = -oS[2]
-               }
-           }
-           return xS > -oS[2] && tS.push((bS | xS << XS) & oS[12]), mS(tS)
+                   qF(kk[gk[10]].push(kk[-gk[232]] & gk[12]), kk[-gk[232]] >>= gk[11], kk[gk[53]] -= gk[11])
+                 } while (kk[gk[53]] > gk[7]);
+                 kk[gk[7]] = -gk[2]
+               } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[232]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
```

#### 1906. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13940-L13941` → after: `L14160-L14161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14160-L14161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14160-L14161) · [Before (L13940-L13941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13940-L13941)

```diff
-         function ag(SS) {
-           return typeof iS[SS] === oS[18] ? iS[SS] = kg(WS[SS]) : iS[SS]
+         function aI(...kk) {
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = lI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1907. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13943` → after: `L14163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14163) · [Before (L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13943)

```diff
-         SS[oS[66]][ag(426) + ag(427) + ag(428)] = oS[1];
+         kk[gk[10]][Fk(gk[249]) + Fk(gk[250]) + Fk(gk[251])] = gk[1];
```

#### 1908. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13945-L13964` → after: `L14165-L14167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14165-L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14165-L14167) · [Before (L13945-L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13945-L13964)

```diff
-           jg = oS[71];
-         if (SS[oS[4]][ag(429) + oS[31]] || SS[oS[144]]) {
-           function Cg(...SS) {
-             for (NH(SS[oS[13]] = oS[2], SS[-oS[36]] = 'DCz6kWKfQBMI(/b$PlZV<U.ya?;S>*u709@_2o+~8dE)&L`XFA:|HJ4GYp!%]jv1"=^,q#wNO[3hxn{}s5RemitcTgr', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[-oS[37]] = oS[1], SS[o … [truncated]
-               if (SS[oS[6]] = SS[-oS[36]].indexOf(SS[oS[14]][SS[oS[98]]]), SS[oS[6]] !== -oS[2])
-                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
-                 else {
-                   NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[-oS[37]], SS[-oS[37]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                   do {
-                     NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[37]] -= oS[11])
-                   } while (SS[-oS[37]] > oS[26]);
-                   SS[oS[26]] = -oS[2]
-                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[26]] << SS[-oS[37]]) & oS[12]), mS(SS[oS[66]])
-           }
- 
-           function ng(...SS) {
- ... (4 more removed lines; see GitHub link above)
+           LI = gk[70];
+         if (kk[gk[25]][aI(446) + gk[52]] || kk[gk[7]]) qF(qI = gk[2], LI = kk[gk[7]] || !kk[gk[35]][aI(447) + aI(448) + aI(449) + aI(450)]);
+         else if (kk[gk[25]][aI(451) + aI(452)]) {
```

#### 1909. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13966-L13968` → after: `L14169-L14171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14169-L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14169-L14171) · [Before (L13966-L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13966-L13968)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[-oS[124]] = '*QGfkmRFpbDaZeMsUjNCI01"<h_@V(v)L>=c3|yJ~4+{%t6d[ox^n!i.9B25l/ASEzY8HO$quw;Tr:,&7]gKW`P?X#}', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[229]] = [], SS[oS[124]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
-               if (SS[oS[6]] = SS[-oS[124]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                 if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'P$BJAWMInFx`a&^49?opuRSmCrv<0+>;lVUh=*Z3,Y_#68!KiLd[:N]cb()Tsqw2"|/D%ge7{1GjE~QfH5.@OtXy}kz', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[-gk[313]] = gk[1], kk[gk[20]] = gk[1], kk[gk[ … [truncated]
+               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[314]]]), kk[gk[75]] !== -gk[2])
+                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
```

#### 1910. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13970` → after: `L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14173) · [Before (L13970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13970)

```diff
-                   NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[124]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[-gk[313]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1911. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13972-L13975` → after: `L14175-L14178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14175-L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14175-L14178) · [Before (L13972-L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13972-L13975)

```diff
-                     NH(SS[oS[229]].push(SS[oS[124]] & oS[12]), SS[oS[124]] >>= oS[11], SS[oS[9]] -= oS[11])
-                   } while (SS[oS[9]] > oS[26]);
-                   SS[oS[31]] = -oS[2]
-                 } return SS[oS[31]] > -oS[2] && SS[oS[229]].push((SS[oS[124]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[229]])
+                     qF(kk[gk[41]].push(kk[-gk[313]] & gk[12]), kk[-gk[313]] >>= gk[11], kk[gk[20]] -= gk[11])
+                   } while (kk[gk[20]] > gk[7]);
+                   kk[gk[7]] = -gk[2]
+                 } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[-gk[313]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
```

#### 1912. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13979` → after: `L14182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14182) · [Before (L13979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13979)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Pg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ZI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1913. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13981` → after: `L14184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14184) · [Before (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13981)

```diff
-           NH(Kg = -oS[2], jg = !SS[oS[0]][ag(436) + ag(437) + Qg(438) + Qg(439)])
+           qF(qI = -gk[2], LI = !kk[gk[35]][aI(453) + aI(454) + aI(455) + jI(456)])
```

#### 1914. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13983-L13985` → after: `L14186-L14188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14186-L14188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14186-L14188) · [Before (L13983-L13985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13983-L13985)

```diff
-         SS[oS[0]][ag(oS[230]) + oS[231]][ag(oS[233]) + ag(oS[234])] = SS[oS[66]][oS[221]][oS[2]];
-         const Gg = (oS[1], dS[oS[198]])(SS[oS[0]][ag(oS[230]) + oS[231]], SS[oS[4]][oS[232]] !== oS[1], Kg, jg);
-         NH(NS()[ag(443)](AS, oS[1], Gg, oS[1]), SS[oS[66]][ag(444) + ag(445)](AS), SS[oS[66]][oS[221]][oS[2]] = SS[oS[0]][ag(oS[230]) + oS[231]][ag(oS[233]) + ag(oS[234])], SS[oS[4]][ag(446)][ag(447) + ag(448) + ag(449)](ag(450) + ag(451) + ag(452), oS[2] + SS[oS[0]][ag(oS[230])  … [truncated]
+         kk[gk[35]][aI(gk[315]) + gk[316]][aI(gk[318]) + aI(gk[319])] = kk[gk[10]][gk[310]][gk[2]];
+         const tI = (gk[1], Sk[gk[53]])(kk[gk[35]][aI(gk[315]) + gk[316]], kk[gk[25]][gk[317]] !== gk[1], qI, LI);
+         qF(lk()[aI(460)](pk, gk[1], tI, gk[1]), kk[gk[10]][aI(461) + aI(462)](pk), kk[gk[10]][gk[310]][gk[2]] = kk[gk[35]][aI(gk[315]) + gk[316]][aI(gk[318]) + aI(gk[319])], kk[gk[25]][aI(463)][aI(464) + aI(465) + aI(466)](aI(467) + aI(468) + aI(469), gk[2] + kk[gk[35]][aI(gk[315 … [truncated]
```

#### 1915. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13987-L13992` → after: `L14190-L14193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14190-L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14190-L14193) · [Before (L13987-L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13987-L13992)

```diff
-         function Dg(SS) {
-           var HS, gS, tS, bS, XS, xS, NS;
-           for (NH(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = oS[1], XS = oS[1], xS = -oS[2]), NS = oS[1]; NS < gS; NS++) {
-             var qS = 'F|[q(>P+umNMI/:5ct7<Z1r!;hR*A&G])wxi~_%WJ4$a@^6bnK}Q39,?DL"g=X8H#jk`d0.BypTsz{v2foSlECOVeUY'.indexOf(HS[NS]);
-             if (qS !== -oS[2])
-               if (xS < oS[1]) xS = qS;
+         function eI(...kk) {
+           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = ',EHrUJTSGnbu:P]+ta(C3?Q=p}5LsI$"%Zz{@2hi0Yvg6)<d_OlwkXm[>1~!Myj|oBef;*8N&DF9AxR.`WV^#Kq7c/4', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[-gk[320]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[32 … [truncated]
+             if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
+               if (kk[gk[321]] < gk[1]) kk[gk[321]] = kk[gk[28]];
```

#### 1916. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13994` → after: `L14195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14195) · [Before (L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13994)

```diff
-                 NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[321]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[321]] << kk[gk[20]], kk[gk[20]] += (kk[gk[321]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1917. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13996-L14001` → after: `L14197-L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14197-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14197-L14200) · [Before (L13996-L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13996-L14001)

```diff
-                   NH(tS.push(bS & oS[12]), bS >>= oS[11], XS -= oS[11])
-                 } while (XS > oS[26]);
-                 xS = -oS[2]
-               }
-           }
-           return xS > -oS[2] && tS.push((bS | xS << XS) & oS[12]), mS(tS)
+                   qF(kk[-gk[320]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
+                 } while (kk[gk[20]] > gk[7]);
+                 kk[gk[321]] = -gk[2]
+               } return kk[gk[321]] > -gk[2] && kk[-gk[320]].push((kk[gk[8]] | kk[gk[321]] << kk[gk[20]]) & gk[12]), hk(kk[-gk[320]])
```

#### 1918. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14005` → after: `L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14204) · [Before (L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14005)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Dg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = eI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1919. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14007` → after: `L14206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14206) · [Before (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14007)

```diff
-         NH(SS[oS[0]][HS(453) + oS[231]].reset(), SS[oS[4]][HS(oS[288])][HS(oS[289]) + wg(456) + wg(457)](wg(458) + wg(459) + wg(460), oS[2]))
+         qF(kk[gk[35]][wI(470) + gk[316]].reset(), kk[gk[25]][wI(471)][wI(472) + wI(473) + wI(474)](wI(475) + wI(476) + wI(477), gk[2]))
```

#### 1920. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14009-L14011` → after: `L14208-L14210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14208-L14210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14208-L14210) · [Before (L14009-L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14009-L14011)

```diff
-       SS[oS[235]] = oS[71];
-       const QH = PS[oS[1]] || QS[oS[1]] && SS[oS[66]][HS(oS[239]) + oS[31]][oS[1]] !== oS[1] && (pS > oS[1] || uS[HS(462) + HS(463) + HS(oS[173])] > oS[1] && Math[HS(oS[244])](SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[1]]) >= uS[HS(oS[245]) + HS(oS[246]) + HS(oS[247]) … [truncated]
-         DH = PS[oS[0]] || QS[oS[0]] && SS[oS[66]][HS(oS[239]) + oS[31]][oS[0]] !== oS[1] && (pS > oS[1] || uS[HS(oS[240]) + HS(oS[241]) + HS(oS[242]) + oS[243]] > oS[1] && Math[HS(oS[244])](SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[0]]) >= uS[HS(oS[245]) + HS(oS[246]) … [truncated]
+       kk[gk[41]] = gk[70];
+       const QF = Pk[gk[1]] || Kk[gk[1]] && kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] !== gk[1] && (fk > gk[1] || qk[Fk(gk[322]) + Fk(gk[323]) + Fk(gk[324]) + gk[325]] > gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[1]]) >= qk[Fk(gk[331]) + Fk(gk[ … [truncated]
+         sF = Pk[gk[35]] || Kk[gk[35]] && kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]] !== gk[1] && (fk > gk[1] || qk[Fk(484) + Fk(485) + Fk(gk[260])] > gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]]) >= qk[Fk(gk[331]) + Fk(gk[332]) + Fk(gk[333] … [truncated]
```

#### 1921. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14013-L14016` → after: `L14212-L14215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14212-L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14212-L14215) · [Before (L14013-L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14013-L14016)

```diff
-         const hg = oS[24],
-           Zg = oS[222],
-           Jg = oS[114];
-         if (SS[oS[66]][oS[265]](), QH) {
+         const HI = gk[20],
+           JI = gk[86],
+           xI = gk[92];
+         if (kk[gk[10]][gk[348]](), QF) {
```

#### 1922. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14018-L14020` → after: `L14217-L14219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14217-L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14217-L14219) · [Before (L14018-L14020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14018-L14020)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'f|.wS)}qEhnDa{s%ym;M,O~dFJe:3/`C^cQI2g(B#b@H9Ap4PTX1?lZ!vjz[uV+"o8L7W6RGrYiK*x&0<=NUt$]_>5k', SS[-oS[250]] = "" + (SS[oS[1]] || ""), SS[-oS[84]] = SS[-oS[250]].length, SS[oS[253]] = [], SS[oS[251]] = oS[1], SS[-oS[123]] = oS[1] … [truncated]
-               if (SS[oS[252]] = SS[oS[2]].indexOf(SS[-oS[250]][SS[oS[3]]]), SS[oS[252]] !== -oS[2])
-                 if (SS[-oS[117]] < oS[1]) SS[-oS[117]] = SS[oS[252]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'u|&5!.qHAVXeb/1Jny$S)vw@^z~aWg7Zxc6[R(UB,]9mpM*E"L{KTYj=PsCGF<`od0O?:;Df28l}It3_+QNi4%kr>h#', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[83]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[gk … [truncated]
+               if (kk[gk[78]] = kk[gk[43]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[gk[78]] !== -gk[2])
+                 if (kk[gk[98]] < gk[1]) kk[gk[98]] = kk[gk[78]];
```

#### 1923. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14022` → after: `L14221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14221) · [Before (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14022)

```diff
-                   NH(SS[-oS[117]] += SS[oS[252]] * oS[32], SS[oS[251]] |= SS[-oS[117]] << SS[-oS[123]], SS[-oS[123]] += (SS[-oS[117]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[98]] += kk[gk[78]] * gk[29], kk[gk[50]] |= kk[gk[98]] << kk[gk[53]], kk[gk[53]] += (kk[gk[98]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1924. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14024-L14027` → after: `L14223-L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14223-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14223-L14226) · [Before (L14024-L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14024-L14027)

```diff
-                     NH(SS[oS[253]].push(SS[oS[251]] & oS[12]), SS[oS[251]] >>= oS[11], SS[-oS[123]] -= oS[11])
-                   } while (SS[-oS[123]] > oS[26]);
-                   SS[-oS[117]] = -oS[2]
-                 } return SS[-oS[117]] > -oS[2] && SS[oS[253]].push((SS[oS[251]] | SS[-oS[117]] << SS[-oS[123]]) & oS[12]), mS(SS[oS[253]])
+                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
+                   } while (kk[gk[53]] > gk[7]);
+                   kk[gk[98]] = -gk[2]
+                 } return kk[gk[98]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[98]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
```

#### 1925. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14031` → after: `L14230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14230) · [Before (L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14031)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Og(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = PI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1926. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14033-L14037` → after: `L14232-L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14232-L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14232-L14234) · [Before (L14033-L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14033-L14037)

```diff
-           const cg = SS[oS[0]][HS(oS[236]) + dg(oS[254]) + dg(oS[255])][oS[1]] <= oS[1] ? oS[2] : -oS[2],
-             vg = Math[dg(471)](Jg, Math[dg(472)](SS[oS[0]][dg(473) + dg(oS[254]) + dg(oS[255])][oS[1]]));
-           NH(SS[oS[66]][oS[221]][oS[1]] = cg * vg * (PS[oS[1]] ? oS[2] : sS), TS = [SS[oS[1]], PS[oS[1]],
-             [SS[oS[66]][dg(474) + oS[31]][oS[1]], oS[1], oS[1]]
-           ], rS(dg(475)))
+           const QI = kk[gk[35]][KI(gk[336]) + KI(gk[337]) + KI(gk[338])][gk[1]] <= gk[1] ? gk[2] : -gk[2],
+             sI = Math[KI(489)](xI, Math[KI(490)](kk[gk[35]][KI(gk[336]) + KI(gk[337]) + KI(gk[338])][gk[1]]));
+           qF(kk[gk[10]][gk[310]][gk[1]] = QI * sI * (Pk[gk[1]] ? gk[2] : Bk), aF(kk[gk[1]], Pk[gk[1]], [kk[gk[10]][KI(491) + gk[52]][gk[1]], gk[1], gk[1]]))
```

#### 1927. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14041-L14043` → after: `L14238-L14240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14238-L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14238-L14240) · [Before (L14041-L14043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14041-L14043)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'iw6|x"E)hFG@V3yuAY40Z=KO<D].Mnz9LPl_[Xtf}&%:S2^r#+m~;{HbQI5cp$8W?dJU1eN(ovg7!T>,k*Cs/R`Bqaj', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[256]] = SS[oS[0]].length, SS[-oS[222]] = [], SS[-oS[15]] = oS[1], SS[oS[24]] = oS[1], SS[-o … [truncated]
-               if (SS[oS[257]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[68]]]), SS[oS[257]] !== -oS[2])
-                 if (SS[-oS[219]] < oS[1]) SS[-oS[219]] = SS[oS[257]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'bui3NdDf>P<5*=RkEcT}gm7@U9L.v;Kw!"nV/:)Or2pMGa_+s&tYqF`A~0Q|1I8[,4%oXeSBC(ZjHJy#xlW]$6z?{^h', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[49]] = gk[1], kk[gk[52 … [truncated]
+               if (kk[gk[105]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[11]]]), kk[gk[105]] !== -gk[2])
+                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[105]];
```

#### 1928. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14045` → after: `L14242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14242) · [Before (L14045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14045)

```diff
-                   NH(SS[-oS[219]] += SS[oS[257]] * oS[32], SS[-oS[15]] |= SS[-oS[219]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[219]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[52]] += kk[gk[105]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[-gk[49]], kk[-gk[49]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1929. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14047-L14050` → after: `L14244-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14244-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14244-L14247) · [Before (L14047-L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14047-L14050)

```diff
-                     NH(SS[-oS[222]].push(SS[-oS[15]] & oS[12]), SS[-oS[15]] >>= oS[11], SS[oS[24]] -= oS[11])
-                   } while (SS[oS[24]] > oS[26]);
-                   SS[-oS[219]] = -oS[2]
-                 } return SS[-oS[219]] > -oS[2] && SS[-oS[222]].push((SS[-oS[15]] | SS[-oS[219]] << SS[oS[24]]) & oS[12]), mS(SS[-oS[222]])
+                     qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[49]] -= gk[11])
+                   } while (kk[-gk[49]] > gk[7]);
+                   kk[gk[52]] = -gk[2]
+                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[-gk[49]]) & gk[12]), hk(kk[gk[41]])
```

#### 1930. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14054` → after: `L14251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14251) · [Before (L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14054)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Eg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = VI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1931. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14056-L14078` → after: `L14253-L14255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14253-L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14253-L14255) · [Before (L14056-L14078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14056-L14078)

```diff
-           const Yg = SS[oS[0]][HS(oS[236]) + Lg(oS[258]) + Lg(oS[259])][oS[2]] <= oS[1] ? oS[2] : -oS[2];
-           let Ag = Math[Lg(478)](hg, Math[Lg(479)](SS[oS[0]][Lg(480) + Lg(oS[258]) + Lg(oS[259])][oS[2]]));
-           if (Ag < Zg && SS[oS[4]][Lg(481) + oS[31]] && Yg === oS[2] && (Ag = Math[Lg(482)](Ag + oS[137] / Ag + 2.3, Zg)), PH && SS[oS[0]][Lg(oS[260])] && NH(SS[oS[0]][Lg(oS[260])] = oS[71], Ag += oS[67], SS[oS[235]] = oS[78]), SS[oS[66]][oS[221]][oS[2]] = Yg * Ag * (PS[oS[2]] ?  … [truncated]
-             function yg(...SS) {
-               for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'G5HXnLCsNY2r|w!zJ39[i=:{P&0SEp(%#F*Z7,@a4+mAWv)lQf<k`IV}?Udt"1~c/h$KxgTeO;qBD>o^]y.uRM6jb8_', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[-oS[0]] = [], SS[oS[67]] = oS[1], SS[-oS[158]] = oS[1], SS[o … [truncated]
-                 if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
-                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
-                   else {
-                     NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[-oS[158]], SS[-oS[158]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                     do {
-                       NH(SS[-oS[0]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[-oS[158]] -= oS[11])
-                     } while (SS[-oS[158]] > oS[26]);
-                     SS[oS[26]] = -oS[2]
-                   } return SS[oS[26]] > -oS[2] && SS[-oS[0]].push((SS[oS[67]] | SS[oS[26]] << SS[-oS[158]]) & oS[12]), mS(SS[-oS[0]])
-             }
- 
- ... (7 more removed lines; see GitHub link above)
+           const SI = kk[gk[35]][zI(gk[339]) + zI(gk[340]) + zI(gk[341])][gk[2]] <= gk[1] ? gk[2] : -gk[2];
+           let oI = Math[zI(495)](HI, Math[zI(496)](kk[gk[35]][zI(gk[339]) + zI(gk[340]) + zI(gk[341])][gk[2]]));
+           oI < JI && kk[gk[25]][zI(497) + gk[52]] && SI === gk[2] && (oI = Math[zI(498)](oI + gk[153] / oI + 2.3, JI)), KF && kk[gk[35]][zI(gk[342])] && qF(kk[gk[35]][zI(gk[342])] = gk[70], oI += gk[50], kk[gk[41]] = gk[58]), qF(kk[gk[10]][gk[310]][gk[2]] = SI * oI * (Pk[gk[2]] ? … [truncated]
```

#### 1932. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14082-L14084` → after: `L14259-L14261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14259-L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14259-L14261) · [Before (L14082-L14084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14082-L14084)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '<DePigVIHYZv@kW(qjn|`abC[LR#.+Q0)r]2$x/f8tuG5E!F{7MBs&?w~1pA3Nc*K%>oU9}_zJ"T;:m,4Od6h^XSl=y', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[261]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[6 … [truncated]
-               if (SS[oS[30]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
-                 if (SS[-oS[6]] < oS[1]) SS[-oS[6]] = SS[oS[30]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'CW1zBR/)?tKLdNr*xw+vy:M!4cGV26~A"T8Ei9}n#k;(ujHP&{3q7pYl.]Q`a[I^_Fg=$JX5@O|0,hb>%DsS<UeZmof', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52 … [truncated]
+               if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
+                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
```

#### 1933. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14086` → after: `L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14263) · [Before (L14086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14086)

```diff
-                   NH(SS[-oS[6]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[-oS[6]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[6]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1934. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14088-L14091` → after: `L14265-L14268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14265-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14265-L14268) · [Before (L14088-L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14088-L14091)

```diff
-                     NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
-                   } while (SS[oS[9]] > oS[26]);
-                   SS[-oS[6]] = -oS[2]
-                 } return SS[-oS[6]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[6]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
+                     qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
+                   } while (kk[gk[20]] > gk[7]);
+                   kk[gk[52]] = -gk[2]
+                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
```

#### 1935. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14095` → after: `L14272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14272) · [Before (L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14095)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = ig(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = vI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1936. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14097-L14101` → after: `L14274-L14276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14274-L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14274-L14276) · [Before (L14097-L14101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14097-L14101)

```diff
-           const zg = SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[0]] <= oS[1] ? oS[2] : -oS[2],
-             Ug = Math[HS(oS[323])](Jg, Math[HS(oS[244])](SS[oS[0]][Wg(490) + Wg(491) + Wg(492)][oS[0]]));
-           NH(SS[oS[66]][oS[221]][oS[0]] = zg * Ug * (PS[oS[0]] ? oS[2] : sS), TS = [SS[oS[1]], PS[oS[0]],
-             [oS[1], oS[1], SS[oS[66]][Wg(493) + oS[31]][oS[0]]]
-           ], rS(Wg(494), Wg(495) + Wg(496), Wg(497) + Wg(498))[Wg(499) + Wg(500)])
+           const OI = kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]] <= gk[1] ? gk[2] : -gk[2],
+             nI = Math[Fk(gk[412])](xI, Math[EI(504)](kk[gk[35]][EI(505) + EI(506) + EI(507)][gk[35]]));
+           qF(kk[gk[10]][gk[310]][gk[35]] = OI * nI * (Pk[gk[35]] ? gk[2] : Bk), aF(kk[gk[1]], Pk[gk[35]], [gk[1], gk[1], kk[gk[10]][EI(508) + gk[52]][gk[35]]]))
```

#### 1937. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14103-L14104` → after: `L14278-L14279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14278-L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14278-L14279) · [Before (L14103-L14104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14103-L14104)

```diff
-       } else qH && (SS[oS[0]][HS(501)] = oS[78]);
-       if (NH(XH(SS[oS[1]], SS[oS[2]], uS[HS(502)], SS[oS[66]][HS(oS[239]) + oS[31]][oS[2]], SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[2]]), SS[oS[123]] = oS[1]), SS[oS[66]][HS(oS[239]) + oS[31]][oS[1]] !== oS[1]) {
+       } else FF && (kk[gk[35]][Fk(509)] = gk[58]);
+       if (qF(yF(kk[gk[1]], kk[gk[2]], qk[Fk(510)], kk[gk[10]][Fk(gk[329]) + gk[52]][gk[2]], kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[2]]), kk[gk[344]] = gk[1]), kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] !== gk[1]) {
```

#### 1938. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14106-L14108` → after: `L14281-L14283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14281-L14283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14281-L14283) · [Before (L14106-L14108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14106-L14108)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'XkmBaQeSlNAGLDMUjrECIgfTFJsioHWK$p2R5/Yh8]tVd~:q3Onc6P?b.40!(71^+|};w,"uy%&=`{z>_#x[*<9@vZ)', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[-oS[263 … [truncated]
-             if (SS[-oS[262]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[-oS[262]] !== -oS[2])
-               if (SS[-oS[263]] < oS[1]) SS[-oS[263]] = SS[-oS[262]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[345]] = 'Pl*DZJ25>04C{[_^BQjX`~(hx3qE}+=#?z7aem|;):1u&,86$%v/w.y@]"9!<pObrkoMgiWLUnHdGRfSNFcYAtITKsV', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[-gk[77]] = [], kk[gk[66]] = gk[1], kk[-gk[92]] = gk[1], kk[gk[ … [truncated]
+             if (kk[gk[28]] = kk[gk[345]].indexOf(kk[gk[35]][kk[-gk[63]]]), kk[gk[28]] !== -gk[2])
+               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1939. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14110` → after: `L14285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14285) · [Before (L14110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14110)

```diff
-                 NH(SS[-oS[263]] += SS[-oS[262]] * oS[32], SS[oS[67]] |= SS[-oS[263]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[263]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[66]] |= kk[gk[7]] << kk[-gk[92]], kk[-gk[92]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1940. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14112-L14115` → after: `L14287-L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14287-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14287-L14290) · [Before (L14112-L14115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14112-L14115)

```diff
-                   NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
-                 } while (SS[oS[24]] > oS[26]);
-                 SS[-oS[263]] = -oS[2]
-               } return SS[-oS[263]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[-oS[263]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
+                   qF(kk[-gk[77]].push(kk[gk[66]] & gk[12]), kk[gk[66]] >>= gk[11], kk[-gk[92]] -= gk[11])
+                 } while (kk[-gk[92]] > gk[7]);
+                 kk[gk[7]] = -gk[2]
+               } return kk[gk[7]] > -gk[2] && kk[-gk[77]].push((kk[gk[66]] | kk[gk[7]] << kk[-gk[92]]) & gk[12]), hk(kk[-gk[77]])
```

#### 1941. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14119` → after: `L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14294) · [Before (L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14119)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = pg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = GI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1942. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14121` → after: `L14296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14296) · [Before (L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14121)

```diff
-         SS[oS[123]] = SS[oS[0]][sg(503) + sg(504) + sg(505)][oS[1]]
+         kk[gk[344]] = kk[gk[35]][pI(511) + pI(gk[88]) + pI(513)][gk[1]]
```

#### 1943. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14123` → after: `L14298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14298) · [Before (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14123)

```diff
-       if (SS[oS[66]][HS(oS[239]) + oS[31]][oS[0]] !== oS[1] && Math[HS(oS[244])](SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[0]]) > Math[HS(oS[244])](SS[oS[123]])) {
+       if (kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]] !== gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]]) > Math[Fk(gk[330])](kk[gk[344]])) {
```

#### 1944. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14125-L14127` → after: `L14300-L14302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14300-L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14300-L14302) · [Before (L14125-L14127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14125-L14127)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'o8NrGZjtXsTEbRUYDhmkFdqpaKge6~#0cMC%z,}SfW+`yxnlIP<@H&3J)$LBV=7QAi?|O2.(*_>];9[4"w1v!u5/^{:', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[222]] = SS[oS[0]].length, SS[-oS[253]] = [], SS[-oS[264]] = oS[1], SS[oS[24]] = oS[1], SS[oS[ … [truncated]
-             if (SS[-oS[219]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[-oS[219]] !== -oS[2])
-               if (SS[oS[155]] < oS[1]) SS[oS[155]] = SS[-oS[219]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'EDKhuPSQcJVd3iFfmGX<t4eR0WoM:jn6{xq)`Z7%.&INH$ga+>=Cp;5_Bv/s~OU*zAYLTbr(wk[]l}@#?9^8,12|"y!', kk[-gk[346]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[346]].length, kk[-gk[347]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
+             if (kk[gk[46]] = kk[gk[43]].indexOf(kk[-gk[346]][kk[gk[39]]]), kk[gk[46]] !== -gk[2])
+               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[46]];
```

#### 1945. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14129` → after: `L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14304) · [Before (L14129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14129)

```diff
-                 NH(SS[oS[155]] += SS[-oS[219]] * oS[32], SS[-oS[264]] |= SS[oS[155]] << SS[oS[24]], SS[oS[24]] += (SS[oS[155]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[7]] += kk[gk[46]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1946. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14131-L14134` → after: `L14306-L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14306-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14306-L14309) · [Before (L14131-L14134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14131-L14134)

```diff
-                   NH(SS[-oS[253]].push(SS[-oS[264]] & oS[12]), SS[-oS[264]] >>= oS[11], SS[oS[24]] -= oS[11])
-                 } while (SS[oS[24]] > oS[26]);
-                 SS[oS[155]] = -oS[2]
-               } return SS[oS[155]] > -oS[2] && SS[-oS[253]].push((SS[-oS[264]] | SS[oS[155]] << SS[oS[24]]) & oS[12]), mS(SS[-oS[253]])
+                   qF(kk[-gk[347]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
+                 } while (kk[gk[53]] > gk[7]);
+                 kk[gk[7]] = -gk[2]
+               } return kk[gk[7]] > -gk[2] && kk[-gk[347]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[-gk[347]])
```

#### 1947. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14138` → after: `L14313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14313) · [Before (L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14138)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Bg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = uI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1948. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14140` → after: `L14315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14315) · [Before (L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14140)

```diff
-         SS[oS[123]] = SS[oS[0]][Mg(506) + Mg(507) + Mg(508)][oS[0]]
+         kk[gk[344]] = kk[gk[35]][bI(514) + bI(515) + bI(516)][gk[35]]
```

#### 1949. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14142` → after: `L14317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14317) · [Before (L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14142)

```diff
-       if (XH(SS[oS[1]], SS[oS[2]], uS[HS(509)], SS[oS[66]][HS(oS[239]) + oS[31]][oS[1]] || SS[oS[66]][HS(oS[239]) + oS[31]][oS[0]], SS[oS[123]]), SS[oS[11]] && !SS[oS[235]] && xH(SS[oS[1]], cS[oS[3]][HS(510) + "op"], [oS[1], -oS[2], oS[1]]), SS[oS[0]][HS(511)] = hS, ZS > oS[1] && … [truncated]
+       if (yF(kk[gk[1]], kk[gk[2]], qk[Fk(517)], kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] || kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]], kk[gk[344]]), kk[-gk[308]] && !kk[gk[41]] && lF(kk[gk[1]], vk[gk[53]][Fk(518) + "op"], [gk[1], -gk[2], gk[1]]), kk[gk[35]][Fk(519)] = Vk, Ek > gk[1 … [truncated]
```

#### 1950. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14145-L14147` → after: `L14320-L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14320-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14320-L14322) · [Before (L14145-L14147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14145-L14147)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'C_6FO|fpAwZmiHz72dMcvEu%)n5?,0x["G!hWr~Pqey#4Q1`;]<(t:B>8$=&*b^9+@XI{gT3/VU.}jsoDYakJNKSLlR', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[oS[31]]  … [truncated]
-             if (SS[oS[30]] = SS[oS[5]].indexOf(SS[oS[14]][SS[-oS[266]]]), SS[oS[30]] !== -oS[2])
-               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '75*%}xw[=z6f!+.9`mavPVZ|@i?jBdS]$D)^Fcu>,tylYC"0#nT3JqIMk;e_o41~8L&EA<{2Gg:U(rHRWbNKphXO/Qs', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52]] … [truncated]
+             if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
+               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
```

#### 1951. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14149` → after: `L14324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14324) · [Before (L14149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14149)

```diff
-                 NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1952. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14151-L14154` → after: `L14326-L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14326-L14329) · [Before (L14151-L14154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14151-L14154)

```diff
-                   NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
-                 } while (SS[oS[9]] > oS[26]);
-                 SS[oS[31]] = -oS[2]
-               } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
+                   qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
+                 } while (kk[gk[20]] > gk[7]);
+                 kk[gk[52]] = -gk[2]
+               } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
```

#### 1953. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14158` → after: `L14333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14333) · [Before (L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14158)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Fg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = RI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1954. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14160` → after: `L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14335) · [Before (L14160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14160)

```diff
-         qH && !SS[oS[0]][Rg(513) + Rg(514) + Rg(515)] && hS && xH(SS[oS[1]], cS[oS[3]][Rg(516) + oS[16]], [oS[1], -oS[2], oS[1]])
+         FF && !kk[gk[35]][UI(521) + UI(522) + UI(523)] && Vk && lF(kk[gk[1]], vk[gk[53]][UI(524) + gk[41]], [gk[1], -gk[2], gk[1]])
```

#### 1955. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14162` → after: `L14337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14337) · [Before (L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14162)

```diff
-       if (!SS[oS[0]][HS(oS[228]) + oS[31]]) {
+       if (!kk[gk[35]][Fk(gk[286]) + gk[52]]) {
```

#### 1956. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14165-L14167` → after: `L14340-L14342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14340-L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14340-L14342) · [Before (L14165-L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14165-L14167)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'Itc5;h9esql0W*Jz!aYH>X#]QN1<byA+pR8B?[T)L}S3PO~.:&=d_EGg$D7"oFnf`rumw|^@k%ZxC{vijV4KM,2(/6U', SS[-oS[112]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[-oS[112]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[oS … [truncated]
-               if (SS[oS[30]] = SS[oS[5]].indexOf(SS[-oS[112]][SS[oS[223]]]), SS[oS[30]] !== -oS[2])
-                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = ':AEUmaPZg_4fVG7i$h(&*@BC5ton~Suds=yDIQq?JMr>F|]2<HxpO^kKw%.W,69[z1evl{N+"0R/cL;jb#T!8X)3}Y`', kk[-gk[90]] = "" + (kk[gk[1]] || ""), kk[gk[349]] = kk[-gk[90]].length, kk[gk[10]] = [], kk[-gk[352]] = gk[1], kk[-gk[302]] = gk[1], … [truncated]
+               if (kk[gk[351]] = kk[gk[43]].indexOf(kk[-gk[90]][kk[-gk[350]]]), kk[gk[351]] !== -gk[2])
+                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[351]];
```

#### 1957. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14169` → after: `L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14344) · [Before (L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14169)

```diff
-                   NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[52]] += kk[gk[351]] * gk[29], kk[-gk[352]] |= kk[gk[52]] << kk[-gk[302]], kk[-gk[302]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1958. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14171-L14174` → after: `L14346-L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14346-L14349) · [Before (L14171-L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14171-L14174)

```diff
-                     NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
-                   } while (SS[oS[9]] > oS[26]);
-                   SS[oS[26]] = -oS[2]
-                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
+                     qF(kk[gk[10]].push(kk[-gk[352]] & gk[12]), kk[-gk[352]] >>= gk[11], kk[-gk[302]] -= gk[11])
+                   } while (kk[-gk[302]] > gk[7]);
+                   kk[gk[52]] = -gk[2]
+                 } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[-gk[352]] | kk[gk[52]] << kk[-gk[302]]) & gk[12]), hk(kk[gk[10]])
```

#### 1959. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14178` → after: `L14353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14353) · [Before (L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14178)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Tg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = CI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1960. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14180` → after: `L14355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14355) · [Before (L14180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14180)

```diff
-           if (SS[oS[66]][oS[221]][oS[2]] <= oS[1]) {
+           if (kk[gk[10]][gk[310]][gk[2]] <= gk[1]) {
```

#### 1961. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14182-L14184` → after: `L14357-L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14357-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14357-L14359) · [Before (L14182-L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14182-L14184)

```diff
-               for (NH(SS[oS[13]] = oS[2], SS[-oS[2]] = '8~)9w=}z4v#xd!Hk>$A7|/s{DJe"SUm1R6]bZn*`f(yWqhOM5Q<Xi2FIGLNB_u;jY.o:3+cp&g0^P,E@VaTrtKl?C%[', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[0]].length, SS[oS[118]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[oS … [truncated]
-                 if (SS[oS[6]] = SS[-oS[2]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
+               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'Avj?B4.;NS)[iQMXw|:},zk*%u32+eO>f(&Ly5g^#Rb/m7Z1=rW<UpCDJdE`a"x6V0t{KH9noIhsY~]$Gl_8!cP@FqT', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[gk[5 … [truncated]
+                 if (kk[gk[353]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[353]] !== -gk[2])
+                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[353]];
```

#### 1962. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14186` → after: `L14361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14361) · [Before (L14186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14186)

```diff
-                     NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     qF(kk[gk[52]] += kk[gk[353]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[53]], kk[gk[53]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1963. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14188-L14191` → after: `L14363-L14366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14363-L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14363-L14366) · [Before (L14188-L14191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14188-L14191)

```diff
-                       NH(SS[oS[118]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
-                     } while (SS[oS[24]] > oS[26]);
-                     SS[oS[26]] = -oS[2]
-                   } return SS[oS[26]] > -oS[2] && SS[oS[118]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[118]])
+                       qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
+                     } while (kk[gk[53]] > gk[7]);
+                     kk[gk[52]] = -gk[2]
+                   } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
```

#### 1964. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14195` → after: `L14370-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14370-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14370-L14389) · [Before (L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14195)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = eg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = fI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             }
+             if (kk[gk[35]][BI(gk[354]) + BI(gk[355]) + BI(gk[356]) + gk[357]]) {
+               function dI(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = '8z=(%yx{<`1FEHZVhSMr6w;^>&/tPd9"URvY|lcDI!:nqWoeJ5[2ug]CB*O$j?sN+_,XaTmpi@LAQ7bG~f.4#K3)}0k', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[240]] = [], kk[gk[8]] = gk[1], kk[-gk[244]] = gk[1],  … [truncated]
+                   if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[-gk[25]]]), kk[gk[28]] !== -gk[2])
+                     if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+                     else {
+                       qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[-gk[244]], kk[-gk[244]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       do {
+                         qF(kk[gk[240]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[244]] -= gk[11])
+                       } while (kk[-gk[244]] > gk[7]);
+                       kk[gk[7]] = -gk[2]
+                     } return kk[gk[7]] > -gk[2] && kk[gk[240]].push((kk[gk[8]] | kk[gk[7]] << kk[-gk[244]]) & gk[12]), hk(kk[gk[240]])
+               }
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 1965. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14197` → after: `L14391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14391) · [Before (L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14197)

```diff
-             SS[oS[0]][HS(517) + rg(oS[268]) + rg(oS[269]) + oS[267]] && (SS[oS[0]][rg(520)] = oS[1]), SS[oS[0]][rg(521) + rg(oS[268]) + rg(oS[269]) + oS[267]] = oS[71]
+             kk[gk[35]][BI(gk[354]) + BI(gk[355]) + BI(gk[356]) + gk[357]] = gk[70]
```

#### 1966. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14200-L14202` → after: `L14394-L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14394-L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14394-L14396) · [Before (L14200-L14202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14200-L14202)

```diff
-               for (NH(SS[oS[13]] = oS[2], SS[oS[270]] = '|ASXqhpYBOcHZIWLiglJVbCPdFQ~MxDKeuz>!+m`}w=/2fost9TU1G(608"{#_)?$[@^5]%:,&v7<*.4yrEjRkNn3a;', SS[oS[271]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[271]].length, SS[oS[16]] = [], SS[oS[229]] = oS[1], SS[oS[24]] = oS[1],  … [truncated]
-                 if (SS[oS[6]] = SS[oS[270]].indexOf(SS[oS[271]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
+               for (qF(kk[gk[13]] = gk[2], kk[-gk[321]] = 'u,40|8%)v9*.=?[6~z5;}><":_&MCpo/+c`Jm$jDTkXgw7{1OEFSyt!aR(H^xne3LrdAZWsVbPqNBhKYIlfU2i#G]Q@', kk[-gk[238]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[238]].length, kk[gk[10]] = [], kk[-gk[358]] = gk[1], kk[-gk[264]] = gk … [truncated]
+                 if (kk[gk[28]] = kk[-gk[321]].indexOf(kk[-gk[238]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
+                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1967. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14204` → after: `L14398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14398) · [Before (L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14204)

```diff
-                     NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[229]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[358]] |= kk[gk[7]] << kk[-gk[264]], kk[-gk[264]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1968. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14206-L14209` → after: `L14400-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14400-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14400-L14403) · [Before (L14206-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14206-L14209)

```diff
-                       NH(SS[oS[16]].push(SS[oS[229]] & oS[12]), SS[oS[229]] >>= oS[11], SS[oS[24]] -= oS[11])
-                     } while (SS[oS[24]] > oS[26]);
-                     SS[oS[26]] = -oS[2]
-                   } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[229]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                       qF(kk[gk[10]].push(kk[-gk[358]] & gk[12]), kk[-gk[358]] >>= gk[11], kk[-gk[264]] -= gk[11])
+                     } while (kk[-gk[264]] > gk[7]);
+                     kk[gk[7]] = -gk[2]
+                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[358]] | kk[gk[7]] << kk[-gk[264]]) & gk[12]), hk(kk[gk[10]])
```

#### 1969. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14213` → after: `L14407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14407) · [Before (L14213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14213)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = St(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = AI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1970. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14215` → after: `L14409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14409) · [Before (L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14215)

```diff
-             SS[oS[0]][Ht(oS[272]) + Ht(oS[273]) + Ht(oS[274]) + oS[267]] || (SS[oS[0]][Ht(525)] = oS[1]), SS[oS[0]][Ht(oS[272]) + Ht(oS[273]) + Ht(oS[274]) + oS[267]] = oS[78]
+             kk[gk[35]][gI(gk[359]) + gI(gk[360]) + gI(gk[361]) + gk[357]] || (kk[gk[35]][gI(532)] = gk[1]), kk[gk[35]][gI(gk[359]) + gI(gk[360]) + gI(gk[361]) + gk[357]] = gk[58]
```

#### 1971. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14217-L14219` → after: `L14411-L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14411-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14411-L14414) · [Before (L14217-L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14217-L14219)

```diff
-           const lg = Math[HS(oS[324])](SS[oS[0]][HS(527)], SS[oS[0]][og(oS[275]) + og(oS[276]) + og(oS[277])]) / SS[oS[0]][og(oS[275]) + og(oS[276]) + og(oS[277])],
-             mg = SS[oS[0]][og(oS[275]) + og(oS[278]) + oS[249]] + lg * (SS[oS[0]][og(oS[275]) + og(532) + oS[249]] - SS[oS[0]][og(oS[275]) + og(oS[278]) + oS[249]]);
-           if (SS[oS[66]][oS[221]][oS[2]] <= oS[1] && SS[oS[4]][og(533) + og(534)]) {
+           const cI = Math[Fk(gk[398])](kk[gk[35]][Fk(534)], kk[gk[35]][Fk(gk[362]) + Fk(gk[363]) + Fk(537)]) / kk[gk[35]][Fk(gk[362]) + Fk(gk[363]) + NI(538)],
+             WI = kk[gk[35]][NI(gk[364]) + NI(gk[365]) + gk[335]] + cI * (kk[gk[35]][NI(gk[364]) + NI(541) + gk[335]] - kk[gk[35]][NI(gk[364]) + NI(gk[365]) + gk[335]]);
+           if (kk[gk[10]][gk[310]][gk[2]] <= gk[1] && kk[gk[25]][NI(542) + NI(543)]) kk[gk[10]][NI(544) + NI(545) + NI(546)] = gk[1];
+           else {
```

#### 1972. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14221-L14223` → after: `L14416-L14418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14416-L14418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14416-L14418) · [Before (L14221-L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14221-L14223)

```diff
-               for (NH(SS[oS[13]] = oS[2], SS[oS[279]] = 'uUSrlkjCfnNbVEZYOoeKJBATsMqL&IPdm2^D*W]%y!_~"}/v876|z.xH91w5[);:>#0(3,4?`$=<XFitRhGQ{p@agc+', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[-oS[116]] = oS[1], S … [truncated]
-                 if (SS[-oS[280]] = SS[oS[279]].indexOf(SS[oS[14]][SS[-oS[43]]]), SS[-oS[280]] !== -oS[2])
-                   if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[-oS[280]];
+               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'c&1T`*FQH9xu7jX2}R?z86ya^]n0dWLfvKeAG:CbtM.(%3IpBNw4[U=D_,h"JZ/5<o!SO+V~)#i{@$|skP>l;mEgrYq', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[-gk[305]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
+                 if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
+                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1973. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14225` → after: `L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14420) · [Before (L14225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14225)

```diff
-                     NH(SS[oS[31]] += SS[-oS[280]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[-oS[116]], SS[-oS[116]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[305]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1974. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14227-L14230` → after: `L14422-L14425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14422-L14425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14422-L14425) · [Before (L14227-L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14227-L14230)

```diff
-                       NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[116]] -= oS[11])
-                     } while (SS[-oS[116]] > oS[26]);
-                     SS[oS[31]] = -oS[2]
-                   } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[31]] << SS[-oS[116]]) & oS[12]), mS(SS[oS[66]])
+                       qF(kk[gk[10]].push(kk[-gk[305]] & gk[12]), kk[-gk[305]] >>= gk[11], kk[gk[53]] -= gk[11])
+                     } while (kk[gk[53]] > gk[7]);
+                     kk[gk[7]] = -gk[2]
+                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[305]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
```

#### 1975. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14234` → after: `L14429-L14448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14429-L14448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14429-L14448) · [Before (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14234)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = gt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = mI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             }
+             kk[gk[10]][hI(547) + hI(548) + hI(549)] = WI / 20
+           }
+           if (qF(kk[gk[25]][NI(550)][NI(551) + NI(552) + NI(553)](NI(gk[364]), .7), kk[gk[10]][NI(554) + gk[377]] = .25, kk[gk[10]][gk[310]][gk[2]] = gk[1]), wk) {
+             function rI(...kk) {
+               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'NFXPSp=LaeDyJRz.TM^Hfnko%YcQ90s}*ZWlxE"$3Vh]jq_wI7Ai&1+/)8B{v#dCr2u4K:Umb@t~?O;<[G6g|5,!(>`', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[18]] = gk[1], kk[gk[ … [truncated]
+                 if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[239]]]), kk[gk[28]] !== -gk[2])
+                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[28]];
+                   else {
+                     qF(kk[gk[52]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[18]], kk[gk[18]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     do {
+                       qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[18]] -= gk[11])
+                     } while (kk[gk[18]] > gk[7]);
+                     kk[gk[52]] = -gk[2]
+                   } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[18]]) & gk[12]), hk(kk[gk[41]])
+ ... (4 more added lines; see GitHub link above)
```

#### 1976. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14236-L14239` → after: `L14450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14450) · [Before (L14236-L14239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14236-L14239)

```diff
-             SS[oS[66]][tt(535) + tt(536) + tt(537)] = oS[1]
-           } else SS[oS[66]][og(538) + og(539) + og(540)] = mg / oS[214];
-           if (NH(SS[oS[4]][og(541)][og(542) + og(543) + og(544)](og(oS[275]), .7), SS[oS[66]][og(545) + oS[290]] = .25, SS[oS[66]][oS[221]][oS[2]] = oS[1]), jS)
-             for (let bt = oS[1]; bt < yS[og(oS[282])]; bt++) {
+             for (let MI = gk[1]; MI < uk[DI(555)]; MI++) {
```

#### 1977. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14243-L14247` → after: `L14454-L14460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14454-L14460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14454-L14460) · [Before (L14243-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14243-L14247)

```diff
-                 if (NH(NS()[og(oS[283])](AS, oS[1], mg * ES[xt], oS[1]), SS[oS[66]][og(oS[284]) + og(oS[285])](AS)), SS[oS[4]][og(oS[286]) + oS[31]] && SS[oS[0]][og(oS[287])]) {
-                   function Nt(...SS) {
-                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '6:13@(+MDs>ynpKU7&m.XC;WP5]8fVTl"%=/Gu9[gjoxIORr4e0N)YL2dcaib<#kB^}hAZv~*J?qSE$H{Q!tFz`w|_,', SS[-oS[54]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[-oS[54]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1 … [truncated]
-                       if (SS[-oS[281]] = SS[oS[2]].indexOf(SS[-oS[54]][SS[oS[3]]]), SS[-oS[281]] !== -oS[2])
-                         if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[281]];
+                 if (qF(lk()[DI(556)](pk, gk[1], WI * Ok[FX], gk[1]), kk[gk[10]][DI(557) + DI(558)](pk)), kk[gk[25]][DI(559) + gk[52]] && kk[gk[35]][DI(560)]) {
+                   function IX(kk) {
+                     var Fk, Ik, Xk, Tk, ik, yk, lk;
+                     for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
+                       var ak = 'xu*(;=@DC2}~g`n_Y?/X+pWya)[0q:v<J4wB983{"k1rNL#UmEhebTARKl$6tM!dj.>c5|FPfZSIoGsQHz%^7&,]iOV'.indexOf(Fk[lk]);
+                       if (ak !== -gk[2])
+                         if (yk < gk[1]) yk = ak;
```

#### 1978. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14249` → after: `L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14462) · [Before (L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14249)

```diff
-                           NH(SS[oS[26]] += SS[-oS[281]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                           qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1979. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14251-L14254` → after: `L14464-L14469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14464-L14469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14464-L14469) · [Before (L14251-L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14251-L14254)

```diff
-                             NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
-                           } while (SS[oS[24]] > oS[26]);
-                           SS[oS[26]] = -oS[2]
-                         } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                             qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
+                           } while (ik > gk[7]);
+                           yk = -gk[2]
+                         }
+                     }
+                     return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
```

#### 1980. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14258` → after: `L14473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14473) · [Before (L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14258)

```diff
-                     return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Nt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                     return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = IX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1981. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14260` → after: `L14475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14475) · [Before (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14260)

```diff
-                   NH(SS[oS[0]][og(552)] = oS[1], SS[oS[0]][og(553) + og(554) + og(555)] = Xt, SS[oS[0]][qt(556) + qt(557) + qt(558)] = -SS[oS[66]][qt(559) + oS[31]][Xt])
+                   qF(kk[gk[35]][DI(561)] = gk[1], kk[gk[35]][DI(gk[366]) + DI(gk[367]) + DI(564)] = kX, kk[gk[35]][DI(gk[366]) + DI(gk[367]) + XX(565) + XX(566)] = -kk[gk[10]][XX(567) + gk[52]][kX])
```

#### 1982. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14263-L14268` → after: `L14478-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14478-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14478-L14519) · [Before (L14263-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14263-L14268)

```diff
-             } else if (SH)
-               for (let ut = oS[1]; ut < yS[og(oS[282])]; ut++) {
-                 const It = yS[ut];
-                 QS[It] && SS[oS[66]][og(560) + oS[31]][It] !== oS[1] && NH(NS()[og(oS[283])](AS, oS[1], 1.05 * mg, oS[1]), SS[oS[66]][og(oS[284]) + og(oS[285])](AS))
-               } else SS[oS[4]][og(oS[286]) + oS[31]] && NH(NS()[og(oS[283])](AS, oS[1], mg * ES[nS], oS[1]), SS[oS[66]][og(oS[284]) + og(oS[285])](AS));
-           SS[oS[4]][og(oS[286]) + oS[31]] || (SS[oS[0]][og(oS[287])] = oS[78]), SS[oS[0]][og(561)]++
+             }
+           } else if (rk)
+             for (let TX = gk[1]; TX < uk[NI(568)]; TX++) {
+               const iX = uk[TX];
+               if (Kk[iX] && kk[gk[10]][NI(569) + gk[52]][iX] !== gk[1]) {
+                 function yX(...kk) {
+                   for (qF(kk[gk[13]] = gk[2], kk[gk[81]] = '{@*>%]nu!:Wq}1`z$9AaG);yINB+hg^V6RF2&Y5j~xCTv0=S[id4Ktp(b#f3EL,wroe?|D_<c78sZHm"PU.kOlM/XQJ', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[306]] = kk[gk[26]].length, kk[gk[44]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], … [truncated]
+                     if (kk[gk[75]] = kk[gk[81]].indexOf(kk[gk[26]][kk[-gk[369]]]), kk[gk[75]] !== -gk[2])
+                       if (kk[gk[368]] < gk[1]) kk[gk[368]] = kk[gk[75]];
+                       else {
+                         qF(kk[gk[368]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[368]] << kk[gk[20]], kk[gk[20]] += (kk[gk[368]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                         do {
+                           qF(kk[gk[44]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
+                         } while (kk[gk[20]] > gk[7]);
+                         kk[gk[368]] = -gk[2]
+                       } return kk[gk[368]] > -gk[2] && kk[gk[44]].push((kk[gk[8]] | kk[gk[368]] << kk[gk[20]]) & gk[12]), hk(kk[gk[44]])
+ ... (26 more added lines; see GitHub link above)
```

#### 1983. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14270-L14275` → after: `L14521-L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14521-L14524) · [Before (L14270-L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14270-L14275)

```diff
-           function ft(SS) {
-             var HS, gS, tS, bS, XS, xS, NS;
-             for (NH(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = oS[1], XS = oS[1], xS = -oS[2]), NS = oS[1]; NS < gS; NS++) {
-               var qS = 'uUAXhnJHltT3Y<.q>5$+{j]N0:RBVk?OFPLr^#G1gz;i)WbvIw*8s7%[Qe(!C9pm2Z`}MK~/ad|="oc&f_64EyDx,@S'.indexOf(HS[NS]);
-               if (qS !== -oS[2])
-                 if (xS < oS[1]) xS = qS;
+           function LX(...kk) {
+             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'TGwJkv,y<!h3D4mL~t/eaS}{KOF)ZXB;jP7EAp16"M.bd&@IoH[:`V(%|qY+]2xfUN9*Ql_5^$uCzRg?W>nri#c80=s', kk[gk[375]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[375]].length, kk[gk[96]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk … [truncated]
+               if (kk[-gk[232]] = kk[gk[43]].indexOf(kk[gk[375]][kk[gk[376]]]), kk[-gk[232]] !== -gk[2])
+                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[232]];
```

#### 1984. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14277` → after: `L14526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14526) · [Before (L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14277)

```diff
-                   NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[7]] += kk[-gk[232]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1985. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14279-L14284` → after: `L14528-L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14528-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14528-L14531) · [Before (L14279-L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14279-L14284)

```diff
-                     NH(tS.push(bS & oS[12]), bS >>= oS[11], XS -= oS[11])
-                   } while (XS > oS[26]);
-                   xS = -oS[2]
-                 }
-             }
-             return xS > -oS[2] && tS.push((bS | xS << XS) & oS[12]), mS(tS)
+                     qF(kk[gk[96]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
+                   } while (kk[gk[20]] > gk[7]);
+                   kk[gk[7]] = -gk[2]
+                 } return kk[gk[7]] > -gk[2] && kk[gk[96]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[96]])
```

#### 1986. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14288` → after: `L14535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14535) · [Before (L14288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14288)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = ft(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = LX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1987. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14290` → after: `L14537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14537) · [Before (L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14290)

```diff
-           NH(SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](kt(564), oS[2]), SS[oS[66]][kt(565) + kt(566) + kt(567)] = US, SS[oS[66]][kt(568) + oS[290]] = qH ? fH : kH, SS[oS[0]][kt(569)] = oS[71], SS[oS[0]][kt(570)] = oS[1])
+           qF(kk[gk[25]][tX(578)][tX(579) + tX(580) + tX(581)](tX(582), gk[2]), kk[gk[10]][tX(583) + tX(584) + tX(585)] = Wk, kk[gk[10]][tX(586) + gk[377]] = FF ? ZF : jF, kk[gk[35]][tX(587)] = gk[70], kk[gk[35]][tX(588)] = gk[1])
```

#### 1988. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14292` → after: `L14539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14539) · [Before (L14292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14292)

```diff
-         if (SS[oS[0]][HS(oS[293])] !== -oS[2]) {
+         if (kk[gk[35]][Fk(gk[380])] !== -gk[2]) {
```

#### 1989. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14294-L14296` → after: `L14541-L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14541-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14541-L14543) · [Before (L14294-L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14294-L14296)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '=~}h*N|sG]&#QiY?)A!kl/LBZxCwo,%.;Ez7SUJ>bvf:`I30FRpgTynur$"6j5X<d1@9O4VM2HcK+W[tq^aD(m8_P{e', SS[oS[291]] = "" + (SS[oS[1]] || ""), SS[oS[292]] = SS[oS[291]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[- … [truncated]
-               if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[291]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
-                 if (SS[-oS[120]] < oS[1]) SS[-oS[120]] = SS[oS[30]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[378]] = '/TLdcAtGKJYBgq<=)w9Ha%W^24,#R0xb`S.izk8f*]ICQ!DUnVOZp1rls&F?NXh6Em"v}P5|[(7>eojM~@$_;{+3:uy', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk … [truncated]
+               if (kk[gk[379]] = kk[gk[378]].indexOf(kk[gk[35]][kk[gk[28]]]), kk[gk[379]] !== -gk[2])
+                 if (kk[gk[89]] < gk[1]) kk[gk[89]] = kk[gk[379]];
```

#### 1990. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14298` → after: `L14545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14545) · [Before (L14298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14298)

```diff
-                   NH(SS[-oS[120]] += SS[oS[30]] * oS[32], SS[oS[67]] |= SS[-oS[120]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[120]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[89]] += kk[gk[379]] * gk[29], kk[gk[50]] |= kk[gk[89]] << kk[gk[20]], kk[gk[20]] += (kk[gk[89]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1991. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14300-L14303` → after: `L14547-L14550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14547-L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14547-L14550) · [Before (L14300-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14300-L14303)

```diff
-                     NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
-                   } while (SS[oS[24]] > oS[26]);
-                   SS[-oS[120]] = -oS[2]
-                 } return SS[-oS[120]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[-oS[120]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
+                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
+                   } while (kk[gk[20]] > gk[7]);
+                   kk[gk[89]] = -gk[2]
+                 } return kk[gk[89]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[89]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
```

#### 1992. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14307` → after: `L14554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14554) · [Before (L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14307)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Kt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ZX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1993. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14309-L14311` → after: `L14556-L14558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14556-L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14556-L14558) · [Before (L14309-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14309-L14311)

```diff
-           const Gt = SS[oS[0]][HS(oS[293])] / SS[oS[0]][HS(572) + HS(573) + HS(574) + HS(575) + HS(576) + oS[301]],
-             Ct = SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(oS[297]) + jt(oS[296])] + Gt * (SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(581) + jt(oS[296])] - SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(oS[297]) + jt(oS[296])]);
-           if (NS()[jt(582)](AS, oS[1], oS[1], oS[1]), SS[oS[0]][jt(oS[300])] > oS[1]) {
+           const eX = kk[gk[35]][Fk(gk[380])] / kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(592) + Fk(593) + Fk(594) + gk[387]],
+             wX = kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(595) + Fk(gk[383])] + eX * (kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(597) + Fk(gk[383])] - kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + jX(598) + jX(599)]);
+           if (lk()[jX(600)](pk, gk[1], gk[1], gk[1]), kk[gk[35]][jX(gk[386])] > gk[1]) {
```

#### 1994. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14315-L14316` → after: `L14562-L14563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14562-L14563) · [Before (L14315-L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14315-L14316)

```diff
-           const nt = Ct * SS[oS[0]][jt(oS[298]) + jt(oS[299]) + jt(586) + jt(587)];
-           NH(AS[SS[oS[0]][jt(oS[298]) + jt(oS[299]) + jt(588)]] = nt, SS[oS[66]][jt(589) + jt(590)](AS)), ++SS[oS[0]][jt(oS[300])] > SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(591) + jt(592) + jt(593) + oS[301]] && (SS[oS[0]][jt(oS[300])] = -oS[2])
+           const HX = wX * kk[gk[35]][jX(gk[384]) + jX(gk[385]) + jX(604) + jX(605)];
+           qF(pk[kk[gk[35]][jX(gk[384]) + jX(gk[385]) + jX(606)]] = HX, kk[gk[10]][jX(607) + jX(608)](pk)), ++kk[gk[35]][jX(gk[386])] > kk[gk[35]][jX(609) + jX(610) + jX(611) + jX(612) + jX(613) + gk[387]] && (kk[gk[35]][jX(gk[386])] = -gk[2])
```

#### 1995. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14320-L14322` → after: `L14567-L14569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14567-L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14567-L14569) · [Before (L14320-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14320-L14322)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[-oS[75]] = 'fuUpFTCsKni4EMj$^98HWvyOhw3V!1`J,xte.RB%aZ~k5A*@XP_q)7>](bz"loSmY&G0:=/D+c2#[|I}rQd6L?;gN<{', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[302]] = SS[oS[14]].length, SS[oS[66]] = [], SS[-oS[226]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
-               if (SS[oS[30]] = SS[-oS[75]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
-                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[55]] = 'Z~ONnsCpmSeIolUrHdBKJktqbghacQ7G9]&Df"?VWiTPLuAEv|jYXRF/>=M06:#`^w}@1[;4x{y%)+$,3_<8z25(!.*', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[388]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
+               if (kk[gk[28]] = kk[gk[55]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
+                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1996. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14324` → after: `L14571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14571) · [Before (L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14324)

```diff
-                   NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[-oS[226]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1997. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14326-L14329` → after: `L14573-L14576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14573-L14576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14573-L14576) · [Before (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14326-L14329)

```diff
-                     NH(SS[oS[66]].push(SS[-oS[226]] & oS[12]), SS[-oS[226]] >>= oS[11], SS[oS[9]] -= oS[11])
-                   } while (SS[oS[9]] > oS[26]);
-                   SS[oS[26]] = -oS[2]
-                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[-oS[226]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
+                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
+                   } while (kk[gk[53]] > gk[7]);
+                   kk[gk[7]] = -gk[2]
+                 } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
```

#### 1998. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14333` → after: `L14580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14580) · [Before (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14333)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Qt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = xX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1999. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14335-L14337` → after: `L14582-L14584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14582-L14584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14582-L14584) · [Before (L14335-L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14335-L14337)

```diff
-           if (NH(SS[oS[0]][HS(594)] = oS[1], SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(595), .8)), SS[oS[4]][HS(oS[364]) + HS(oS[328])] && xS === XS[oS[208]][Dt(598) + oS[305]]) {
-             const wt = tH(SS[oS[66]][oS[221]][oS[2]], oS[67]);
-             NH(NS()[Dt(oS[307])](AS, oS[1], -wt, oS[1]), SS[oS[66]][Dt(600) + Dt(601)](AS))
+           if (qF(kk[gk[35]][Fk(gk[393])] = gk[1], kk[gk[25]][Fk(gk[392])][PX(616) + PX(617) + PX(618)](PX(619), .8)), kk[gk[25]][PX(620) + PX(621)] && yk === ik[gk[394]][PX(622) + gk[395]]) {
+             const KX = TF(kk[gk[10]][gk[310]][gk[2]], gk[50]);
+             qF(lk()[PX(gk[389])](pk, gk[1], -KX, gk[1]), kk[gk[10]][PX(gk[390]) + PX(gk[391])](pk))
```

#### 2000. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14339-L14357` → after: `L14586-L14588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14586-L14588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14586-L14588) · [Before (L14339-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14339-L14357)

```diff
-           if (SS[oS[4]][Dt(602) + oS[31]]) {
-             function ht(...SS) {
-               for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'DEi1NBxsy/O:>j_JmA`?0rpfu5I6}^RbZ|PC3kGKv[g]o!SXz4w@;"d<nLqh&%U27)t#HYT$c*{+8VQ(~,9=al.WMFe', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[206]] = SS[oS[0]].length, SS[-oS[134]] = [], SS[-oS[306]] = oS[1], SS[oS[55]] = oS[1], S … [truncated]
-                 if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                   if (SS[-oS[271]] < oS[1]) SS[-oS[271]] = SS[oS[6]];
-                   else {
-                     NH(SS[-oS[271]] += SS[oS[6]] * oS[32], SS[-oS[306]] |= SS[-oS[271]] << SS[oS[55]], SS[oS[55]] += (SS[-oS[271]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                     do {
-                       NH(SS[-oS[134]].push(SS[-oS[306]] & oS[12]), SS[-oS[306]] >>= oS[11], SS[oS[55]] -= oS[11])
-                     } while (SS[oS[55]] > oS[26]);
-                     SS[-oS[271]] = -oS[2]
-                   } return SS[-oS[271]] > -oS[2] && SS[-oS[134]].push((SS[-oS[306]] | SS[-oS[271]] << SS[oS[55]]) & oS[12]), mS(SS[-oS[134]])
-             }
- 
-             function Zt(...SS) {
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = ht(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
- ... (3 more removed lines; see GitHub link above)
+           if (kk[gk[25]][PX(626) + gk[52]]) {
+             const QX = TF(kk[gk[10]][gk[310]][gk[2]], gk[25]);
+             qF(lk()[PX(gk[389])](pk, gk[1], QX, gk[1]), kk[gk[10]][PX(gk[390]) + PX(gk[391])](pk))
```

#### 2001. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14359` → after: `L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14590) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14359)

```diff
-         } else {
+         } else if (qF(kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(630), gk[2]), kk[gk[35]][Fk(gk[393])]++), eF && kk[gk[25]][Fk(gk[284]) + gk[52]] && !FF && !wk && !Mk && !rk && !sk && yk === ik[gk[394]][Fk(gk[410]) + gk[395]]) {
```

#### 2002. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14361-L14363` → after: `L14592-L14594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14592-L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14592-L14594) · [Before (L14361-L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14361-L14363)

```diff
-             for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'z]8&x04u3#|?v@%);{^67>"+,5MrqgVSpTeJmEYURiFlbDLNaOAGkKtPXjB[_*(<y1nsCQ}9h=foI`~/wc:ZHW.!$2d', SS[-oS[308]] = "" + (SS[oS[1]] || ""), SS[-oS[17]] = SS[-oS[308]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
-               if (SS[oS[6]] = SS[oS[2]].indexOf(SS[-oS[308]][SS[oS[131]]]), SS[oS[6]] !== -oS[2])
-                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
+             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'E~DgjNFbn2orX)OtZz{3*!0<lUI_JQ[udL`TfCW$4&(=VR+:BK/91isvHmP5S^wMA>"h|@}Gyk7]ace.%#;8q,pYx6?', kk[-gk[110]] = "" + (kk[gk[1]] || ""), kk[gk[396]] = kk[-gk[110]].length, kk[gk[41]] = [], kk[gk[397]] = gk[1], kk[-gk[346]] = gk[1], … [truncated]
+               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[110]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
+                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
```

#### 2003. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14365` → after: `L14596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14596) · [Before (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14365)

```diff
-                   NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[397]] |= kk[gk[52]] << kk[-gk[346]], kk[-gk[346]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 2004. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14367-L14370` → after: `L14598-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14598-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14598-L14601) · [Before (L14367-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14367-L14370)

```diff
-                     NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[9]] -= oS[11])
-                   } while (SS[oS[9]] > oS[26]);
-                   SS[oS[26]] = -oS[2]
-                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
+                     qF(kk[gk[41]].push(kk[gk[397]] & gk[12]), kk[gk[397]] >>= gk[11], kk[-gk[346]] -= gk[11])
+                   } while (kk[-gk[346]] > gk[7]);
+                   kk[gk[52]] = -gk[2]
+                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[397]] | kk[gk[52]] << kk[-gk[346]]) & gk[12]), hk(kk[gk[41]])
```

#### 2005. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14374-L14394` → after: `L14605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14605) · [Before (L14374-L14394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14374-L14394)

```diff
-             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Ot(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-           }
-           if (NH(SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](dt(605), oS[2]), SS[oS[0]][dt(606)]++), aH && SS[oS[4]][dt(607) + oS[31]] && !qH && !jS && !gH && !SH && !wS && xS === XS[oS[208]][dt(608) + oS[305]]) {
-             function ct(...SS) {
-               for (NH(SS[oS[13]] = oS[2], SS[oS[309]] = 'f:aS,0Eu?vw`RO8JGN~Y&3)@4/e|M!]id([B}rDt+Im;kxP=2pTjH>FbU6qQcoy5n1{^s<l#g.K$z"W*_L7ZAVhCX%9', SS[oS[310]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[310]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[-oS[45]] = oS[1], S … [truncated]
-                 if (SS[oS[30]] = SS[oS[309]].indexOf(SS[oS[310]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
-                   if (SS[-oS[114]] < oS[1]) SS[-oS[114]] = SS[oS[30]];
-                   else {
-                     NH(SS[-oS[114]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[-oS[114]] << SS[-oS[45]], SS[-oS[45]] += (SS[-oS[114]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                     do {
-                       NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[45]] -= oS[11])
-                     } while (SS[-oS[45]] > oS[26]);
-                     SS[-oS[114]] = -oS[2]
-                   } return SS[-oS[114]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[114]] << SS[-oS[45]]) & oS[12]), mS(SS[oS[16]])
-             }
- 
- ... (5 more removed lines; see GitHub link above)
+             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = sX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 2006. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14398-L14417` → after: `L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14611) · [Before (L14398-L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14398-L14417)

```diff
-       if (SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(oS[311]) + oS[312], !SS[oS[0]][HS(oS[228]) + oS[31]] && wS ? .07 : oS[2]), wS && !SS[oS[0]][HS(oS[228]) + oS[31]] && !qH) {
-         function Lt(...SS) {
-           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'T@KoirFRXQADu0[&~v$Z;Bfg7Gp8h}d?>MI#S5C%y=1.6zqY,])2ce:<(3Nkm9!JstHEn"aLV*4xl/wW+^jUO_`b{P|', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[94]] = oS[1], SS[oS[20]] = oS[1], SS[oS[31]] … [truncated]
-             if (SS[oS[129]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[129]] !== -oS[2])
-               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[129]];
-               else {
-                 NH(SS[oS[31]] += SS[oS[129]] * oS[32], SS[oS[94]] |= SS[oS[31]] << SS[oS[20]], SS[oS[20]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                 do {
-                   NH(SS[oS[66]].push(SS[oS[94]] & oS[12]), SS[oS[94]] >>= oS[11], SS[oS[20]] -= oS[11])
-                 } while (SS[oS[20]] > oS[26]);
-                 SS[oS[31]] = -oS[2]
-               } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[94]] | SS[oS[31]] << SS[oS[20]]) & oS[12]), mS(SS[oS[66]])
-         }
- 
-         function Yt(...SS) {
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Lt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
- ... (4 more removed lines; see GitHub link above)
+       if (kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(gk[402]) + gk[403], !kk[gk[35]][Fk(gk[286]) + gk[52]] && sk ? .07 : gk[2]), !sk || kk[gk[35]][Fk(gk[286]) + gk[52]] || FF || qF(kk[gk[10]][gk[310]][gk[2]] = gk[1], kk[gk[10]][Fk(gk[249]) + Fk(gk[250]) + … [truncated]
```

#### 2007. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14419-L14421` → after: `L14613-L14615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14613-L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14613-L14615) · [Before (L14419-L14421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14419-L14421)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[100]] = '0+x?"1#[v2&w6:!y8}>4OJ|onD(ulE%ij`3T,CUK.XGMq~^@*pHs9BAtNzW<rm/=$]7V5I_)efcFR;YdLhQZ{kPabgS', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[144]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[314]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[ … [truncated]
-             if (SS[oS[316]] = SS[oS[100]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[316]] !== -oS[2])
-               if (SS[-oS[315]] < oS[1]) SS[-oS[315]] = SS[oS[316]];
+           for (qF(kk[gk[13]] = gk[2], kk[gk[47]] = '_uAB"{Iy*`}q5i:J<oztQ14Gbdvfr?w#8m]OD~!Vs^N(Hl/X%kR7ej.&x29|=FnT,;$YSP6hZU+KE0c[>a@gC3WL)Mp', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[gk[7] … [truncated]
+             if (kk[gk[143]] = kk[gk[47]].indexOf(kk[gk[35]][kk[gk[126]]]), kk[gk[143]] !== -gk[2])
+               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[143]];
```

#### 2008. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14423` → after: `L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14617) · [Before (L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14423)

```diff
-                 NH(SS[-oS[315]] += SS[oS[316]] * oS[32], SS[oS[314]] |= SS[-oS[315]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[315]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[7]] += kk[gk[143]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 2009. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14425-L14428` → after: `L14619-L14622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14619-L14622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14619-L14622) · [Before (L14425-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14425-L14428)

```diff
-                   NH(SS[oS[16]].push(SS[oS[314]] & oS[12]), SS[oS[314]] >>= oS[11], SS[oS[9]] -= oS[11])
-                 } while (SS[oS[9]] > oS[26]);
-                 SS[-oS[315]] = -oS[2]
-               } return SS[-oS[315]] > -oS[2] && SS[oS[16]].push((SS[oS[314]] | SS[-oS[315]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
+                   qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
+                 } while (kk[gk[53]] > gk[7]);
+                 kk[gk[7]] = -gk[2]
+               } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
```

#### 2010. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14432-L14451` → after: `L14626-L14642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14626-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14626-L14642) · [Before (L14432-L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14432-L14451)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = At(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-         }
-         const Vt = SS[oS[1]][HS(oS[160])][HS(619)](SS[oS[2]], uH);
-         SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](yt(620) + yt(621) + oS[317], Vt)
-       } else SS[oS[0]][HS(oS[228]) + oS[31]] && SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(622) + HS(623) + oS[317], oS[2]);
-       if (SS[oS[9]] = oS[2], KS[HS(oS[288])] && qH && !DS)
-         for (let it = oS[1]; it < uH[HS(oS[313])]; it++) {
-           const Wt = KS[HS(oS[288])][uH[it]];
-           Math[HS(oS[244])](Wt - oS[2]) > Math[HS(oS[244])](SS[oS[9]] - oS[2]) && (SS[oS[9]] = Wt)
-         }
-       SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(624) + HS(625) + HS(626) + HS(627), SS[oS[9]]);
-       const wH = (oS[1], IS[oS[318]])(uS, DS, qH);
-       NH(SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(oS[319]) + HS(628) + HS(629) + HS(630) + oS[342], wH), SS[oS[1]].FQ.vW(SS[oS[0]][oS[320]]).yV = (oS[1], IS.q)(KS[HS(oS[321]) + HS(oS[322])], uH, uS[HS(oS[321]) + HS(oS[322])])), xS === XS[oS[208]][HS(633) … [truncated]
-       const hH = SS[oS[4]][oS[232]] * SS[oS[4]][HS(oS[288])][HS(637) + HS(638) + HS(639) + HS(640)]() * (SS[oS[0]][HS(oS[228]) + oS[31]] ? function(...SS) {
-           var HS = {};
-           return TS = [SS, HS], rS(lS(711), lS(oS[368]) + lS(oS[369]), lS(oS[370]) + lS(oS[371]))[lS(oS[372]) + lS(oS[373])]
- ... (4 more removed lines; see GitHub link above)
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = SX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+         }
+         const vX = kk[gk[1]][Fk(gk[248])][Fk(639)](kk[gk[2]], LF);
+         kk[gk[25]][Fk(gk[392])][oX(640) + oX(641) + oX(642)](oX(643) + oX(644) + gk[405], vX)
+       } else kk[gk[35]][Fk(gk[286]) + gk[52]] && kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(645) + Fk(646) + gk[405], gk[2]);
+       if (kk[gk[53]] = gk[2], ek[Fk(gk[392])] && FF && !Qk)
+         for (let EX = gk[1]; EX < LF[Fk(gk[404])]; EX++) {
+           const OX = ek[Fk(gk[392])][LF[EX]];
+           Math[Fk(gk[330])](OX - gk[2]) > Math[Fk(gk[330])](kk[gk[53]] - gk[2]) && (kk[gk[53]] = OX)
+         }
+       kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(647) + Fk(648) + Fk(649) + Fk(650), kk[gk[53]]);
+       const VF = (gk[1], Lk[gk[112]])(qk, Qk, FF);
+       qF(kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(gk[406]) + Fk(651) + Fk(652) + Fk(653) + gk[421], VF), kk[gk[1]].MJ.aN(kk[gk[35]][gk[407]]).uC = (gk[1], Lk[gk[285]])(ek[Fk(gk[408]) + Fk(gk[409])], LF, qk[Fk(gk[408]) + Fk(gk[409])])), yk === ik[gk[394] … [truncated]
+       const zF = kk[gk[25]][gk[317]] * kk[gk[25]][Fk(gk[392])][Fk(659) + Fk(660) + Fk(661) + Fk(662)]() * (kk[gk[35]][Fk(gk[286]) + gk[52]] ? XF(kk[gk[1]], kk[gk[2]], Nk) : gk[2]),
+         SF = Number[Fk(663)](zF) ? gk[1] : Math[Fk(gk[412])](-Tk[gk[53]][Fk(gk[413]) + Fk(gk[328])], Math[Fk(gk[398])](zF, Tk[gk[53]][Fk(gk[413]) + Fk(gk[328])]));
+       qk[Fk(gk[414]) + gk[415]] && qk[Fk(gk[414]) + gk[415]][Fk(gk[416]) + Fk(gk[417])] > gk[1] && (FF || Qk && qk[Fk(gk[414]) + gk[415]][Fk(668)]) && (gk[1], zk[gk[41]])(kk[gk[10]], kk[gk[35]][Fk(gk[414]) + Fk(669) + Fk(gk[440])], qk[Fk(gk[414]) + gk[415]][Fk(gk[416]) + Fk(gk[41 … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 2011. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14453-L14489` → after: `L14644-L14648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14644-L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14644-L14648) · [Before (L14453-L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14453-L14489)

```diff
-         function zt(...SS) {
-           for (NH(SS[oS[13]] = oS[2], SS[-oS[332]] = 'rf0&5?Z8/MlGzj]7,!RnFWB"kpe4J>#(@+1AQ_~P[:N{}*6yq^Xx`<CL=2%wbt3;9Iv.)u|$mDOiEKhUSTsgVHcaoYd', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[-oS[331]] = [], SS[-oS[85]] = oS[1], SS[oS[9]] = oS[1], SS[-o … [truncated]
-             if (SS[oS[6]] = SS[-oS[332]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-               if (SS[-oS[40]] < oS[1]) SS[-oS[40]] = SS[oS[6]];
-               else {
-                 NH(SS[-oS[40]] += SS[oS[6]] * oS[32], SS[-oS[85]] |= SS[-oS[40]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[40]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                 do {
-                   NH(SS[-oS[331]].push(SS[-oS[85]] & oS[12]), SS[-oS[85]] >>= oS[11], SS[oS[9]] -= oS[11])
-                 } while (SS[oS[9]] > oS[26]);
-                 SS[-oS[40]] = -oS[2]
-               } return SS[-oS[40]] > -oS[2] && SS[-oS[331]].push((SS[-oS[85]] | SS[-oS[40]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[331]])
-         }
- 
-         function Ut(...SS) {
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = zt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-         }
- ... (21 more removed lines; see GitHub link above)
+         const nX = (Math[Fk(672)](kk[gk[10]][gk[310]][gk[1]] * kk[gk[10]][gk[310]][gk[1]] + kk[gk[10]][gk[310]][gk[35]] * kk[gk[10]][gk[310]][gk[35]]) - oF[Fk(673) + gk[80]]) * oF[Fk(gk[418]) + Fk(675) + Fk(676) + gk[394]];
+         if (nX > gk[1] && kk[gk[10]][gk[310]][gk[2]] < nX) {
+           const GX = kk[gk[50]] / 1e3,
+             pX = (nX - kk[gk[10]][gk[310]][gk[2]]) * jk[gk[4]][Fk(677) + Fk(678)](oF[Fk(gk[418]) + Fk(679) + Fk(680)] * GX);
+           qF(lk()[Fk(gk[420])](pk, gk[1], pX * kk[gk[10]].Xq / GX, gk[1]), kk[gk[10]][Fk(682) + Fk(683)](pk))
```

#### 2012. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14497-L14498` → after: `L14656-L14657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14656-L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14656-L14657) · [Before (L14497-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14497-L14498)

```diff
-             fS = null === qS.durationMs || !tS.floatStartTicksAgo || tS.floatStartTicksAgo < qS.durationMs / 1e3 * bS.e.clientTicksPerSecond,
-             kS = tS.isInAir && !NS && (xS.xG[1] < 0 || IS === uS) && !tS.hitWhilstAirborne(uS) && fS,
+             tk = null === ak.durationMs || !Xk.floatStartTicksAgo || Xk.floatStartTicksAgo < ak.durationMs / 1e3 * Tk.f.clientTicksPerSecond,
+             Zk = Xk.isInAir && !lk && (yk.TH[1] < 0 || Lk === qk) && !Xk.hitWhilstAirborne(qk) && tk,
```

#### 2013. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14500-L14502` → after: `L14659-L14661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14659-L14661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14659-L14661) · [Before (L14500-L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14500-L14502)

```diff
-             KS = !kS && IS !== XS.l.NORMAL;
-           return tS.movementType = kS ? uS : XS.l.NORMAL, aS ? HS.bloxd.updatePositionAndPhysics(gS, tS.physicsState, !1, void 0, !0) : KS && (qS.exitsVehicleOnEnd ? HS.bloxd.removeConsumableVehiclePhysics(gS, tS.hasTakenOffTheGround) : HS.bloxd.updatePositionAndPhysics(gS, {
-             type: XS.o.DEFAULT,
+             ek = !Zk && Lk !== ik.m.NORMAL;
+           return Xk.movementType = Zk ? qk : ik.m.NORMAL, jk ? Fk.bloxd.updatePositionAndPhysics(Ik, Xk.physicsState, !1, void 0, !0) : ek && (ak.exitsVehicleOnEnd ? Fk.bloxd.removeConsumableVehiclePhysics(Ik, Xk.hasTakenOffTheGround) : Fk.bloxd.updatePositionAndPhysics(Ik, {
+             type: ik.n.DEFAULT,
```

#### 2014. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14504-L14506` → after: `L14663-L14665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14663-L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14663-L14665) · [Before (L14504-L14506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14504-L14506)

```diff
-           }, !1, void 0, !0)), (aS || KS) && HS.bloxd.onMovementTypeChanged(gS, tS.movementType, IS), tS.isOnGround() ? (tS.setHitWhilstAirborne(uS, !1), null !== qS.durationMs && (tS.hasTakenOffTheGround = !1, tS.floatStartTicksAgo = null)) : null !== qS.durationMs && xS.xG[1] < … [truncated]
-         }(uS, SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[66]], DS),
-         dH = SS[oS[66]][HS(oS[338]) + HS(oS[339]) + HS(oS[340])],
+           }, !1, void 0, !0)), (jk || ek) && Fk.bloxd.onMovementTypeChanged(Ik, Xk.movementType, Lk), Xk.isOnGround() ? (Xk.setHitWhilstAirborne(qk, !1), null !== ak.durationMs && (Xk.hasTakenOffTheGround = !1, Xk.floatStartTicksAgo = null)) : null !== ak.durationMs && yk.TH[1] < … [truncated]
+         }(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[10]], Qk),
+         EF = kk[gk[10]][Fk(684) + Fk(685) + Fk(gk[419])],
```

#### 2015. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14508-L14513` → after: `L14667-L14672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14667-L14672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14667-L14672) · [Before (L14508-L14513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14508-L14513)

```diff
-       if (cH ? NH(NS()[HS(oS[367])](dH, vS), SS[oS[66]][oS[265]]()) : dH[oS[1]] === oS[1] && dH[oS[2]] === oS[1] && dH[oS[0]] === oS[1] || NS()[HS(oS[341])](dH, oS[1], oS[1], oS[1]), !uS[HS(662) + HS(663) + HS(664) + oS[342]]) {
-         cH && NS()[HS(665) + "ct"](SS[oS[66]][oS[221]], SS[oS[66]][oS[221]], dH);
-         const Rt = uS[HS(oS[345]) + HS(667)];
-         if (Rt !== oS[48] && SS[oS[0]][HS(oS[343]) + HS(oS[344])] === Rt[HS(668) + HS(669) + HS(oS[344])] && uS[HS(oS[345]) + HS(oS[346]) + HS(oS[347])] !== oS[48]) CS(uS, SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[4]], SS[oS[66]], ZH, SS[oS[67]], OH);
-         else if (uS[HS(oS[345]) + HS(oS[346]) + HS(oS[347])] !== oS[48])
-           if (SS[oS[4]][oS[232]])(oS[1], kS[oS[16]])(SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[4]], SS[oS[66]], ZH, uS);
+       if (OF ? qF(lk()[Fk(gk[444])](EF, Ck), kk[gk[10]][gk[348]]()) : EF[gk[1]] === gk[1] && EF[gk[2]] === gk[1] && EF[gk[35]] === gk[1] || lk()[Fk(gk[420])](EF, gk[1], gk[1], gk[1]), !qk[Fk(687) + Fk(688) + Fk(689) + gk[421]]) {
+         OF && lk()[Fk(690) + "ct"](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], EF);
+         const uX = qk[Fk(gk[424]) + Fk(692)];
+         if (uX !== gk[64] && kk[gk[35]][Fk(gk[422]) + Fk(gk[423])] === uX[Fk(693) + Fk(694) + Fk(gk[423])] && qk[Fk(gk[424]) + Fk(gk[425]) + Fk(gk[426])] !== gk[64]) Jk(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF, kk[gk[50]], vF);
+         else if (qk[Fk(gk[424]) + Fk(gk[425]) + Fk(gk[426])] !== gk[64])
+           if (kk[gk[25]][gk[317]])(gk[1], Zk[gk[4]])(kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF, qk);
```

#### 2016. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14516-L14518` → after: `L14675-L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14675-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14675-L14677) · [Before (L14516-L14518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14516-L14518)

```diff
-               for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '4FUdsgtXAeLrCqDBQmbu"~}HPEIM!`V=6v@Z:[w#]0z%KJNjxpY/acRS{_(8,*y9h5.i^o$lW7>nGkT+O1|2f)?3;&<', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[0]].length, SS[oS[16]] = [], SS[-oS[306]] = oS[1], SS[-oS[103]] = oS[1], SS[ … [truncated]
-                 if (SS[-oS[227]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[94]]]), SS[-oS[227]] !== -oS[2])
-                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[227]];
+               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'pYb03[1"uvm#L6PqA5B)E4,;/Ff?e!87^J<9(izTjtH}%`&M=y:w*xCZkaU$@GVg~>|_.]Rr2+{QIWDKclnXhSOsodN', kk[-gk[50]] = "" + (kk[gk[1]] || ""), kk[-gk[69]] = kk[-gk[50]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk … [truncated]
+                 if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[50]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
+                   if (kk[gk[125]] < gk[1]) kk[gk[125]] = kk[gk[75]];
```

#### 2017. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14520` → after: `L14679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14679) · [Before (L14520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14520)

```diff
-                     NH(SS[oS[26]] += SS[-oS[227]] * oS[32], SS[-oS[306]] |= SS[oS[26]] << SS[-oS[103]], SS[-oS[103]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     qF(kk[gk[125]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[125]] << kk[gk[20]], kk[gk[20]] += (kk[gk[125]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 2018. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14522-L14525` → after: `L14681-L14684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14681-L14684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14681-L14684) · [Before (L14522-L14525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14522-L14525)

```diff
-                       NH(SS[oS[16]].push(SS[-oS[306]] & oS[12]), SS[-oS[306]] >>= oS[11], SS[-oS[103]] -= oS[11])
-                     } while (SS[-oS[103]] > oS[26]);
-                     SS[oS[26]] = -oS[2]
-                   } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[-oS[306]] | SS[oS[26]] << SS[-oS[103]]) & oS[12]), mS(SS[oS[16]])
+                       qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
+                     } while (kk[gk[20]] > gk[7]);
+                     kk[gk[125]] = -gk[2]
+                   } return kk[gk[125]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[125]] << kk[gk[20]]) & gk[12]), hk(kk[gk[10]])
```

#### 2019. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14529` → after: `L14688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14688) · [Before (L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14529)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Tt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = bX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 2020. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14531` → after: `L14690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14690) · [Before (L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14531)

```diff
-             SS[oS[66]][HS(672) + oS[290]] = uS[HS(673) + HS(674) + ot(675)]
+             kk[gk[10]][Fk(697) + gk[377]] = qk[Fk(698) + RX(699) + RX(700)]
```

#### 2021. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14533-L14534` → after: `L14692-L14693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14692-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14692-L14693) · [Before (L14533-L14534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14533-L14534)

```diff
-         else(oS[1], fS[oS[16]])(uS, SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[4]], SS[oS[66]], ZH);
-         cH && NS()[HS(676)](SS[oS[66]][oS[221]], SS[oS[66]][oS[221]], dH)
+         else(gk[1], tk[gk[4]])(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF);
+         OF && lk()[Fk(701)](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], EF)
```

#### 2022. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14536-L14538` → after: `L14695-L14713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14695-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14695-L14713) · [Before (L14536-L14538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14536-L14538)

```diff
-       const vH = NS()[HS(oS[349])](SS[oS[66]][oS[221]]);
-       if (Number[oS[348]](vH)) {
-         if (vH > bS[oS[44]][HS(oS[325]) + HS(oS[238])]) {
+       const nF = lk()[Fk(gk[431])](kk[gk[10]][gk[310]]);
+       if (Number[gk[430]](nF)) {
+         function UX(...kk) {
+           for (qF(kk[gk[13]] = gk[2], kk[gk[427]] = '8DlmPF()7G6b+W$uk;SUO/cX%3wg2[^J@jC&pyosri,LHI5|"*YdB0{Vf:vA}~N#nQe.Ex_<]a49K!qh1zTM`=>?RtZ', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[305]] = gk[1], kk[gk[7 … [truncated]
+             if (kk[-gk[18]] = kk[gk[427]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[-gk[18]] !== -gk[2])
+               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[18]];
+               else {
+                 qF(kk[gk[7]] += kk[-gk[18]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[305]], kk[gk[305]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 do {
+                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[305]] -= gk[11])
+                 } while (kk[gk[305]] > gk[7]);
+                 kk[gk[7]] = -gk[2]
+               } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[305]]) & gk[12]), hk(kk[gk[41]])
+         }
+ 
+         function CX(...kk) {
+ ... (3 more added lines; see GitHub link above)
```

#### 2023. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14540-L14543` → after: `L14715-L14718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14715-L14718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14715-L14718) · [Before (L14540-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14540-L14543)

```diff
-           const lt = Date[HS(685)]();
-           lt - YS >= 6e4 && NH(console[HS(686)](HS(oS[350]) + HS(oS[351]) + HS(689) + HS(690) + HS(691) + HS(692) + oS[352] + vH + HS(693) + bS[oS[44]][HS(oS[325]) + HS(oS[238])] + " (" + LS + HS(694)), LS = oS[1], YS = lt);
-           const mt = bS[oS[44]][HS(oS[325]) + HS(oS[238])] / vH;
-           NH(NS()[HS(695)](SS[oS[66]][oS[221]], SS[oS[66]][oS[221]], mt), SS[oS[66]][oS[265]]())
+           const NX = Date[CX(712)]();
+           NX - Gk >= 6e4 && qF(console[CX(713)](CX(714) + CX(715) + CX(716) + CX(717) + CX(718) + CX(719) + gk[432] + nF + CX(720) + Tk[gk[53]][CX(gk[428]) + CX(gk[429])] + " (" + nk + CX(721)), nk = gk[1], Gk = NX);
+           const cX = Tk[gk[53]][CX(gk[428]) + CX(gk[429])] / nF;
+           qF(lk()[CX(722)](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], cX), kk[gk[10]][gk[348]]())
```

#### 2024. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14545` → after: `L14720-L14721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14720-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14720-L14721) · [Before (L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14545)

```diff
-       } else {
+       } else qF(console[Fk(gk[434])](new Error(Fk(704) + Fk(705) + Fk(706) + Fk(707) + Fk(708) + ": " + kk[gk[10]][gk[310]])[Fk(gk[436])]), lk()[Fk(gk[420])](kk[gk[10]][gk[310]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]());
+       if (!Number[gk[430]](lk()[Fk(gk[431])](kk[gk[10]][gk[433]]))) {
```

#### 2025. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14547-L14549` → after: `L14723-L14725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14723-L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14723-L14725) · [Before (L14547-L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14547-L14549)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'WIFsT#G7odq0Hfx?bL3`z+gK5S=ON(M]^U@9mtEnR>wiVAjkYC:P*lr,8hcJaDpQvBu<%[yeX1_.|$)/~6;!{"&}24Z', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[334]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[-oS[80 … [truncated]
-             if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[159]]]), SS[oS[6]] !== -oS[2])
-               if (SS[-oS[80]] < oS[1]) SS[-oS[80]] = SS[oS[6]];
+           for (qF(kk[gk[13]] = gk[2], kk[-gk[127]] = '[<vy3&>(x6l$).9@VHSP?zAUfje#2}YL!"Qr`=Im^_5cD8Z~J%]+*aB/d|sqCgF7:wXMu1Kk,WipEO;NtT{RhobnG40', kk[-gk[79]] = "" + (kk[gk[1]] || ""), kk[gk[157]] = kk[-gk[79]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[-gk[143]] = gk[1], k … [truncated]
+             if (kk[gk[75]] = kk[-gk[127]].indexOf(kk[-gk[79]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
+               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
```

#### 2026. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14551` → after: `L14727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14727) · [Before (L14551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14551)

```diff
-                 NH(SS[-oS[80]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[-oS[80]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[80]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[-gk[143]], kk[-gk[143]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 2027. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14553-L14556` → after: `L14729-L14732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14729-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14729-L14732) · [Before (L14553-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14553-L14556)

```diff
-                   NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
-                 } while (SS[oS[24]] > oS[26]);
-                 SS[-oS[80]] = -oS[2]
-               } return SS[-oS[80]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[-oS[80]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                   qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[143]] -= gk[11])
+                 } while (kk[-gk[143]] > gk[7]);
+                 kk[gk[52]] = -gk[2]
+               } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[52]] << kk[-gk[143]]) & gk[12]), hk(kk[gk[41]])
```

#### 2028. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14560` → after: `L14736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14736) · [Before (L14560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14560)

```diff
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = et(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = WX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 2029. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14562` → after: `L14738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14738) · [Before (L14562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14562)

```diff
-         NH(console[rt(678)](new Error(rt(679) + rt(680) + rt(681) + rt(682) + SS[oS[66]][oS[221]])[rt(683)]), NS()[rt(684)](SS[oS[66]][oS[221]], oS[1], oS[1], oS[1]), SS[oS[66]][oS[265]]())
+         qF(console[fX(723)](new Error(fX(724) + fX(725) + fX(726) + gk[432] + kk[gk[10]][gk[433]])[fX(727)]), lk()[fX(728)](kk[gk[10]][gk[433]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]())
```

#### 2030. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14564` → after: `L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14740) · [Before (L14564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14564)

```diff
-       Number[oS[348]](NS()[HS(oS[349])](SS[oS[66]][oS[353]])) || NH(console[HS(oS[354])](new Error(HS(oS[350]) + HS(oS[351]) + HS(697) + HS(698) + HS(699) + oS[352] + SS[oS[66]][oS[353]])[HS(oS[356])]), NS()[HS(oS[341])](SS[oS[66]][oS[353]], oS[1], oS[1], oS[1]), SS[oS[66]][oS[26 … [truncated]
+       Number[gk[430]](lk()[Fk(gk[431])](kk[gk[10]][gk[435]])) || qF(console[Fk(gk[434])](new Error(Fk(729) + Fk(730) + Fk(731) + Fk(732) + Fk(733) + kk[gk[10]][gk[435]])[Fk(gk[436])]), lk()[Fk(gk[420])](kk[gk[10]][gk[435]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]()), qF(kk[gk[3 … [truncated]
```

#### 2031. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14566` → after: `L14742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14742) · [Before (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14566)

```diff
-     const gH = oS[43];
+     const FF = gk[61];
```

#### 2032. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14569-L14570` → after: `L14745-L14755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14745-L14755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14745-L14755) · [Before (L14569-L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14569-L14570)

```diff
-       var HS = {
-         get [lS(718)]() {
+       return Ak = [kk, {}], Mk(mk(740))
+     }
+ 
+     function XF(...kk) {
+       return Ak = [kk, {}], Mk(mk(741))
+     }
+ 
+     function TF(...kk) {
+       var Fk;
+       return Fk = {
+         get [mk(742) + gk[131]]() {
```

#### 2033. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14573-L14574` → after: `L14758-L14771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14758-L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14758-L14771) · [Before (L14573-L14574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14573-L14574)

```diff
-       };
-       return TS = [SS, HS], rS(lS(719), lS(oS[368]) + lS(oS[369]), lS(oS[370]) + lS(oS[371]))[lS(oS[372]) + lS(oS[373])]
+       }, Ak = [kk, Fk], Mk(function(...kk) {
+         return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'xTBOGmMAjhp=HQ?6a:!N{UW2/`S8|CK3oXsIw&)E~L]vJFc9>"qP%^4#zer;d(R.[ut@Z$i1bkY,nyD<Vf*}l_507+g', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[351]] = gk[1], kk[gk[52] … [truncated]
+             if (kk[-gk[20]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[232]]]), kk[-gk[20]] !== -gk[2])
+               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[-gk[20]];
+               else {
+                 qF(kk[gk[52]] += kk[-gk[20]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[351]], kk[gk[351]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 do {
+                   qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[351]] -= gk[11])
+                 } while (kk[gk[351]] > gk[7]);
+                 kk[gk[52]] = -gk[2]
+               } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[52]] << kk[gk[351]]) & gk[12]), hk(kk[gk[10]])
+         }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+       }(743))
```

#### 2034. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14578` → after: `L14775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14775) · [Before (L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14578)

```diff
-       return SH(SS)
+       return Ak = [kk, {}], Mk(mk(744))
```

#### 2035. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14582` → after: `L14779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14779) · [Before (L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14582)

```diff
-       return TS = [SS, {}], rS(lS(720))
+       return Ak = [kk, {}], Mk(mk(745))
```

#### 2036. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14586` → after: `L14783-L14787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14783-L14787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14783-L14787) · [Before (L14586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14586)

```diff
-       return TS = [SS, {}], rS(lS(721))
+       return Ak = [kk, {}], Mk(mk(746), mk(747) + mk(748), mk(749) + mk(750))[mk(751) + mk(752)]
+     }
+ 
+     function aF(...kk) {
+       return Ak = [kk, {}], Mk(mk(753))
```

#### 2037. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14592` → after: `L14793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14793) · [Before (L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14592)

```diff
-     const qH = tS.e;
+     const LF = Xk.i;
```

#### 2038. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14596-L14597` → after: `L14797-L14798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14797-L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14797-L14798) · [Before (L14596-L14597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14596-L14597)

```diff
-         FQ: gS
-       } = SS, tS = SS.FQ.EY("movement");
+         MJ: Ik
+       } = kk, Xk = kk.MJ.ku("movement");
```

#### 2039. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14600-L14603` → after: `L14801-L14804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14801-L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14801-L14804) · [Before (L14600-L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14600-L14603)

```diff
-         if (gS.NSS(XS.AY)) {
-           const tS = gS.vW(XS.AY),
-             bS = gS.uHS(XS.AY);
-           SS.bloxd.regrowPlayerBody(XS.AY), VS(SS, XS.AY, XS, bS, tS, HS)
+         if (Ik.Kkk(ik.Xu)) {
+           const Xk = Ik.aN(ik.Xu),
+             Tk = Ik.KFk(ik.Xu);
+           kk.bloxd.regrowPlayerBody(ik.Xu), bk(kk, ik.Xu, ik, Tk, Xk, Fk)
```

#### 2040. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14608` → after: `L14809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14809) · [Before (L14608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14608)

```diff
-   37765: (SS, HS, gS) => {
+   37763: (kk, Fk, Ik) => {
```

#### 2041. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14614-L14623` → after: `L14815-L14824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14815-L14824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14815-L14824) · [Before (L14614-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14614-L14623)

```diff
-     var tS = gS(24),
-       bS = gS(31),
-       XS = gS(37772),
-       xS = gS(1400),
-       NS = gS(1216),
-       qS = gS(36822),
-       uS = gS(387),
-       IS = gS(1286),
-       fS = gS(37667),
-       kS = gS(37422);
+     var Xk = Ik(25),
+       Tk = Ik(34),
+       ik = Ik(37769),
+       yk = Ik(1301),
+       lk = Ik(1120),
+       ak = Ik(36824),
+       qk = Ik(337),
+       Lk = Ik(1194),
+       tk = Ik(37672),
+       Zk = Ik(37447);
```

#### 2042. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14651-L14652` → after: `L14852-L14853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14852-L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14852-L14853) · [Before (L14651-L14652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14651-L14652)

```diff
-         EQ: function(SS, HS) {
-           HS.canRunCombinator = new qS.d, HS.canRunCombinator.setBooleanType("standardCanRun", !0)
+         mJ: function(kk, Fk) {
+           Fk.canRunCombinator = new ak.e, Fk.canRunCombinator.setBooleanType("standardCanRun", !0)
```

#### 2043. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14658` → after: `L14859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14859) · [Before (L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14658)

```diff
-       const gS = SS.FQ.EY("movementInputs"),
+       const Ik = kk.MJ.ku("movementInputs"),
```

#### 2044. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14660` → after: `L14861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14861) · [Before (L14660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14660)

```diff
-           FQ: bS
+           MJ: Tk
```

#### 2045. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14662` → after: `L14863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14863) · [Before (L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14662)

```diff
-         XS = kS.c.getMovementHeading(SS);
+         ik = Zk.b.getMovementHeading(kk);
```

#### 2046. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14664-L14665` → after: `L14865-L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14865-L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14865-L14866) · [Before (L14664-L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14664-L14665)

```diff
-         const gS = bS.uHS(xS.AY),
-           NS = bS.sSS(xS.AY),
+         const Ik = Tk.KFk(yk.Xu),
+           lk = Tk.FFk(yk.Xu),
```

#### 2047. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14667` → after: `L14868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14868) · [Before (L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14667)

```diff
-           uS = SS.bloxd.getResolvedPhysicsSettings(xS.AY, qS),
+           qk = kk.bloxd.getResolvedPhysicsSettings(yk.Xu, ak),
```

#### 2048. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14669` → after: `L14870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14870) · [Before (L14669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14669)

```diff
-         xS._gamepadDroveLastTick = !!xS.gamepad, xS.gamepad ? nS(SS, gS, NS, uS, xS, xS.gamepad, XS, HS) : xS.isTouchscreen ? (IS && cS(SS, gS, NS, xS), uS.steering && 0 !== uS.speedMultiplier ? JS(SS, gS, NS, xS, uS.steering, xS.joyStickMoveVec, XS, HS) : (gS.heading = (XS + 2 * … [truncated]
+         yk._gamepadDroveLastTick = !!yk.gamepad, yk.gamepad ? xk(kk, Ik, lk, qk, yk, yk.gamepad, ik, Fk) : yk.isTouchscreen ? (Lk && Ok(kk, Ik, lk, yk), qk.steering && 0 !== qk.speedMultiplier ? Sk(kk, Ik, lk, yk, qk.steering, yk.joyStickMoveVec, ik, Fk) : (Ik.heading = (ik + 2 * … [truncated]
```

#### 2049. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14675` → after: `L14876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14876) · [Before (L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14675)

```diff
-         RP: qS
+         gJ: ak
```

#### 2050. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14680` → after: `L14881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14881) · [Before (L14680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14680)

```diff
-       qS.canCrouch ? (gS.shouldIgnoreCrouchingSpeedReduction() && (XS.padSneakToggled = !1), tS.b.get("clientEscMenuOptions").crouchIsToggle ? HS.setCrouching(XS.crouchToggled || XS.padSneakToggled) : (HS.setCrouching(!!XS.crouch || XS.padSneakToggled), XS.crouchToggled = !1)) :  … [truncated]
+       ak.canCrouch ? (Ik.shouldIgnoreCrouchingSpeedReduction() && (ik.padSneakToggled = !1), Xk.d.get("clientEscMenuOptions").crouchIsToggle ? Fk.setCrouching(ik.crouchToggled || ik.padSneakToggled) : (Fk.setCrouching(!!ik.crouch || ik.padSneakToggled), ik.crouchToggled = !1)) :  … [truncated]
```

#### 2051. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14702` → after: `L14903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14903) · [Before (L14702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14702)

```diff
-         RP: qS
+         gJ: ak
```

#### 2052. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14721` → after: `L14922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14922) · [Before (L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14721)

```diff
-         RP: bS
+         gJ: Tk
```

#### 2053. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14731` → after: `L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14932) · [Before (L14731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14731)

```diff
-       HS.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", SS.RP.speedMultiplier), (0, fS.f)(SS, gS, HS, bS, XS, xS, NS, qS, uS), tS._moving = 0 !== XS || 0 !== xS
+       Fk.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", kk.gJ.speedMultiplier), (0, tk.e)(kk, Ik, Fk, Tk, ik, yk, lk, ak, qk), Xk._moving = 0 !== ik || 0 !== yk
```

#### 2054. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14739` → after: `L14940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14940) · [Before (L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14739)

```diff
-       hS(SS, HS, gS, tS, bS, XS ? uS.b.clamp(-XS.y, -1, 1) : 0, XS ? uS.b.clamp(XS.x, -1, 1) : 0, DS(SS, HS, gS, tS), xS, NS)
+       Vk(kk, Fk, Ik, Xk, Tk, ik ? qk.e.clamp(-ik.y, -1, 1) : 0, ik ? qk.e.clamp(ik.x, -1, 1) : 0, Qk(kk, Fk, Ik, Xk), yk, lk)
```

#### 2055. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14745` → after: `L14946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14946) · [Before (L14745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14745)

```diff
-       HS.speed = XS * DS(SS, HS, gS, tS), HS.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", SS.RP.speedMultiplier)
+       Fk.speed = ik * Qk(kk, Fk, Ik, Xk), Fk.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", kk.gJ.speedMultiplier)
```

#### 2056. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14749` → after: `L14950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14950) · [Before (L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14749)

```diff
-       OS(SS, SS.FQ.uHS(SS.HA), SS.FQ.sSS(SS.HA), SS.FQ.zHS())
+       vk(kk, kk.MJ.KFk(kk.oR), kk.MJ.FFk(kk.oR), kk.MJ.mFk())
```

#### 2057. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14753-L14774` → after: `L14954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14954) · [Before (L14753-L14774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14753-L14774)

```diff
-       HS.jumping = tS.touchJump, HS.setCrouching(SS.RP.canCrouch && (tS.touchCrouch || tS.padSneakToggled)), OS(SS, HS, gS, tS)
-     }
-     var vS, ES, LS, YS, AS, yS, VS, iS, WS;
-     const zS = [26, 0, 1, "h", 3, 206, 9, 7, 201, 6, 105, 8, 255, "length", 57, 28, "a", "e", "undefined", void 0, 2, 27, 63, "fromCodePoint", 12, "push", "b", 91, 23, "g", 8191, 88, 13, 14, 190, "c", "d", "i", 123, 220, 241, 5, 136, 92, 175, 1023, 115, 65536, 4, 184, 10, 55296,  … [truncated]
- 
-     function US(...SS) {
-       return SS[zS[13]] = zS[2], typeof vS[SS[zS[1]]] === zS[18] ? vS[SS[zS[1]]] = function(...SS) {
-         for (BS(SS[zS[13]] = zS[2], SS[-zS[5]] = 'N=HV1BFxu3M<{DIAC"mpas^EQflXi6L(T,02SKe$GRZrJ%)zW+b?*yv_5@[.!&]74/:w}8#~>|9;U`OdYohqkgPncjt', SS[zS[0]] = "" + (SS[zS[1]] || ""), SS[zS[4]] = SS[zS[0]].length, SS[zS[10]] = [], SS[-zS[8]] = zS[1], SS[zS[9]] = zS[1], SS[zS[7]] = -z … [truncated]
-           if (SS[zS[6]] = SS[-zS[5]].indexOf(SS[zS[0]][SS[zS[3]]]), SS[zS[6]] !== -zS[2])
-             if (SS[zS[7]] < zS[1]) SS[zS[7]] = SS[zS[6]];
-             else {
-               BS(SS[zS[7]] += SS[zS[6]] * zS[27], SS[-zS[8]] |= SS[zS[7]] << SS[zS[9]], SS[zS[9]] += (SS[zS[7]] & zS[30]) > zS[31] ? zS[32] : zS[33]);
-               do {
-                 BS(SS[zS[10]].push(SS[-zS[8]] & zS[12]), SS[-zS[8]] >>= zS[11], SS[zS[9]] -= zS[11])
-               } while (SS[zS[9]] > zS[7]);
-               SS[zS[7]] = -zS[2]
- ... (6 more removed lines; see GitHub link above)
+       Fk.jumping = Xk.touchJump, Fk.setCrouching(kk.gJ.canCrouch && (Xk.touchCrouch || Xk.padSneakToggled)), vk(kk, Fk, Ik, Xk)
```

#### 2058. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14777-L14948` → after: `L14959-L14976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14959-L14976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14959-L14976) · [Before (L14777-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14777-L14948)

```diff
-     function sS() {}
- 
-     function BS() {
-       BS = function() {}
-     }
-     BS(vS = {}, ES = ["_/TLn,N", 'H1NLeg`Rzm,U4A]68}Y+)KUGj/ws_I5Z2?uF=Sn"03Vd9l&E.3?6l', 'wvKi/_E8Uu[.iXRmu}cv5$em9."F)D?Gs?69$z<fB4)"{$em/N', '$l`bZvxy@[uDEh"Gs9]i1d~6Am>!AH', "aE$1f@q=", "pFNv8>Rz(s}Y{Sliw}nFy51P</d)$Idl*aLUISxf}D>|+1", ".lT|e|9)yp%*XIxKy@K*>!P{+vP#,DtC#vUlL", … [truncated]
-       BS(SS[zS[13]] = zS[1], SS[zS[16]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], SS[zS[14]] = zS[19], SS[zS[15]] = []);
-       try {
- ... (156 more removed lines; see GitHub link above)
+     function Wk(...kk) {
+       return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(kk) {
+         var Fk, Ik, Xk, Tk, ik, yk, lk;
+         for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
+           var ak = '8,u&>*%<9:y@)14PRo#rhEDk^_qnK?}!MvY=d532+SO~cZw6t/UIfxspTN"jHg;XGQJFlC].{BWizbV(a|AL[$07`me'.indexOf(Fk[lk]);
+           if (ak !== -ck[1])
+             if (yk < ck[0]) yk = ak;
+             else {
+               dk(yk += ak * ck[28], Tk |= yk << ik, ik += (yk & ck[30]) > ck[31] ? ck[32] : ck[33]);
+               do {
+                 dk(Xk.push(Tk & ck[3]), Tk >>= ck[2], ik -= ck[2])
+               } while (ik > ck[19]);
+               yk = -ck[1]
+             }
+         }
+         return yk > -ck[1] && Xk.push((Tk | yk << ik) & ck[3]), fk(Xk)
+ ... (2 more added lines; see GitHub link above)
```

#### 2059. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14950-L14961` → after: `L14978-L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14978-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14978-L14980) · [Before (L14950-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14950-L14961)

```diff
-               function NS(...SS) {
-                 for (BS(SS[zS[13]] = zS[2], SS[zS[2]] = '.OD4g+x)9QH~rlvI*n;|CkeXEu>@Rabid3YKoUW,`jy?7MZ={V"z$%w2]hFG<&p0TqB1fc6s8N5!(t#SP:L^/mA}[J_', SS[zS[26]] = "" + (SS[zS[1]] || ""), SS[zS[53]] = SS[zS[26]].length, SS[zS[36]] = [], SS[zS[17]] = zS[1], SS[-zS[72]] = zS[1], SS … [truncated]
-                   if (SS[-zS[70]] = SS[zS[2]].indexOf(SS[zS[26]][SS[zS[3]]]), SS[-zS[70]] !== -zS[2])
-                     if (SS[zS[71]] < zS[1]) SS[zS[71]] = SS[-zS[70]];
-                     else {
-                       BS(SS[zS[71]] += SS[-zS[70]] * zS[27], SS[zS[17]] |= SS[zS[71]] << SS[-zS[72]], SS[-zS[72]] += (SS[zS[71]] & zS[30]) > zS[31] ? zS[32] : zS[33]);
-                       do {
-                         BS(SS[zS[36]].push(SS[zS[17]] & zS[12]), SS[zS[17]] >>= zS[11], SS[-zS[72]] -= zS[11])
-                       } while (SS[-zS[72]] > zS[7]);
-                       SS[zS[71]] = -zS[2]
-                     } return SS[zS[71]] > -zS[2] && SS[zS[36]].push((SS[zS[17]] | SS[zS[71]] << SS[-zS[72]]) & zS[12]), pS(SS[zS[36]])
-               }
+     function fk(...kk) {
+       return kk[ck[4]] = ck[1], typeof uk !== ck[9] && uk ? (new uk).decode(new bk(kk[ck[0]])) : typeof Rk !== ck[9] && Rk ? Rk.from(kk[ck[0]]).toString("utf-8") : Nk(kk[ck[0]])
+     }
```

#### 2060. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14963-L14983` → after: `L14982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14982) · [Before (L14963-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14963-L14983)

```diff
-               function qS(...SS) {
-                 return SS[zS[13]] = zS[2], typeof vS[SS[zS[1]]] === zS[18] ? vS[SS[zS[1]]] = NS(ES[SS[zS[1]]]) : vS[SS[zS[1]]]
-               }
-               if (BS(HS = void 0, gS = void 0, tS = void 0, bS = void 0, xS = void 0), SS[zS[68]] > SS[-zS[73]]) throw Error(US(zS[74]));
-               if (SS[zS[68]] == SS[-zS[73]]) return zS[79];
-               if (BS(HS = SS[zS[36]][SS[zS[68]]] & zS[12], SS[zS[68]]++), (HS & zS[60]) == zS[1]) return HS;
-               if ((HS & zS[75]) == zS[69]) {
-                 if (BS(gS = uS(), xS = (HS & zS[61]) << zS[9] | gS), xS >= zS[60]) return xS;
-                 {
-                   function IS(...SS) {
-                     for (BS(SS[zS[13]] = zS[2], SS[zS[0]] = 'eXAxfbWZ=iw6o>B2Cj}4R)8hT?DP+J`lmnG9QVdaN!.$&,M^yz7*#%L/I;3r{sHuSE@YKU:_vqpF|c5~Otg<([]10k"', SS[zS[20]] = "" + (SS[zS[1]] || ""), SS[zS[35]] = SS[zS[20]].length, SS[-zS[77]] = [], SS[zS[41]] = zS[1], SS[-zS[34]] = zS[1 … [truncated]
-                       if (SS[zS[6]] = SS[zS[0]].indexOf(SS[zS[20]][SS[zS[11]]]), SS[zS[6]] !== -zS[2])
-                         if (SS[-zS[76]] < zS[1]) SS[-zS[76]] = SS[zS[6]];
-                         else {
-                           BS(SS[-zS[76]] += SS[zS[6]] * zS[27], SS[zS[41]] |= SS[-zS[76]] << SS[-zS[34]], SS[-zS[34]] += (SS[-zS[76]] & zS[30]) > zS[31] ? zS[32] : zS[33]);
-                           do {
- ... (5 more removed lines; see GitHub link above)
+     function Bk() {}
```

#### 2061. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14985-L14997` → after: `L14984-L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14984-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L14984-L15013) · [Before (L14985-L14997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14985-L14997)

```diff
-                   function fS(SS) {
-                     return typeof vS[SS] === zS[18] ? vS[SS] = IS(ES[SS]) : vS[SS]
-                   }
-                   throw Error(fS(111))
-                 }
-               }
-               if ((HS & zS[78]) == zS[75]) {
-                 if (BS(gS = uS(), tS = uS(), xS = (HS & zS[62]) << zS[24] | gS << zS[9] | tS), xS >= 2048) return XS(xS), xS;
-                 throw Error(US(112))
-               }
-               if ((248 & HS) == zS[78] && (BS(gS = uS(), tS = uS(), bS = uS(), xS = (HS & zS[7]) << zS[63] | gS << zS[24] | tS << zS[9] | bS), xS >= zS[47] && xS <= 1114111)) return xS;
-               throw Error(qS(113))
-             }
+     function dk() {
+       dk = function() {}
+     }
+     dk(nk = {}, Gk = ["l&>W[zAYIr$)QHJd~?!/]C.SKQ6^Ct;}KllyjY!i%", "!:fxt/mk0r5{hRu#4,", 'bT!f;"c#GN_I_{Gd', "i%]><|}Wls:laLvd3lD!#3.14P={^j9", '=W@M<xf"@h6!mdi3{jPzIw:iYst!,', ':)^/|fQSM:?z_{3#&X"xa;M#~4', ')XYIVZ0W|P+KfP&#ToIb5aJ"XPA_,[3_qk!/>Yr<^196A/0Rs+vn[;o<eQkI,', "(ZcymjM … [truncated]
+       dk(kk[ck[4]] = ck[0], kk[-ck[7]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], kk[ck[1]] = ck[10], kk[-ck[5]] = []);
+       try {
+         dk(kk[ck[1]] = Object, kk[-ck[5]][ck[21]]("".__proto__.constructor.name))
+       } catch (Gk) {}
+ ... (14 more added lines; see GitHub link above)
```

#### 2062. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14999-L15007` → after: `L15015-L15057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15015-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15015-L15057) · [Before (L14999-L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L14999-L15007)

```diff
-             function fS(...HS) {
-               for (BS(HS[zS[13]] = zS[2], SS[zS[36]] = tS(HS[zS[1]]), SS[-zS[73]] = SS[zS[36]].length, SS[zS[68]] = zS[1], HS[zS[2]] = [], HS[zS[26]] = zS[19]);
-                 (HS[zS[26]] = IS()) !== zS[79];) HS[zS[2]].push(HS[zS[26]]);
-               return bS(HS[zS[2]])
-             }
-             SS[zS[13]] = zS[2], SS[-zS[49]] = String.fromCharCode, BS(SS[zS[36]] = zS[19], SS[-zS[73]] = zS[19], SS[zS[68]] = zS[19]), BS(SS[zS[1]].version = gS(114), SS[zS[1]].encode = qS, SS[zS[1]].decode = fS)
-           }(typeof exports === gS(zS[46]) + gS(116) ? this.utf8 = {} : exports)
-       }(), bS.k.subscribe(SS(zS[54]) + SS(118) + SS(119) + zS[29], (async () => {
-         var SS, HS, gS, tS;
+       function Tk(...kk) {
+         return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(...kk) {
+           for (dk(kk[ck[4]] = ck[1], kk[ck[1]] = 'STjPABWfoLOXdqz:0tlGQ`%FD=aEbx+ICK{JnZ&$vy*HiRr}7Mek?^(|p5!mNcV#6Ug)Yh9u[,1w<4/>_;8@2.3]~"s', kk[-ck[25]] = "" + (kk[ck[0]] || ""), kk[ck[6]] = kk[-ck[25]].length, kk[-ck[34]] = [], kk[ck[29]] = ck[0], kk[ck[8]] = ck[0], kk[ck[19] … [truncated]
+             if (kk[ck[27]] = kk[ck[1]].indexOf(kk[-ck[25]][kk[ck[26]]]), kk[ck[27]] !== -ck[1])
+               if (kk[ck[19]] < ck[0]) kk[ck[19]] = kk[ck[27]];
+               else {
+                 dk(kk[ck[19]] += kk[ck[27]] * ck[28], kk[ck[29]] |= kk[ck[19]] << kk[ck[8]], kk[ck[8]] += (kk[ck[19]] & ck[30]) > ck[31] ? ck[32] : ck[33]);
+                 do {
+                   dk(kk[-ck[34]].push(kk[ck[29]] & ck[3]), kk[ck[29]] >>= ck[2], kk[ck[8]] -= ck[2])
+                 } while (kk[ck[8]] > ck[19]);
+                 kk[ck[19]] = -ck[1]
+               } return kk[ck[19]] > -ck[1] && kk[-ck[34]].push((kk[ck[29]] | kk[ck[19]] << kk[ck[8]]) & ck[3]), fk(kk[-ck[34]])
+         }(Gk[kk[ck[0]]]) : nk[kk[ck[0]]]
+       }
+       Tk(103) in Bk && function(...kk) {
+         dk(kk[ck[4]] = ck[0], kk[ck[35]] = function(kk) {
+ ... (27 more added lines; see GitHub link above)
```

#### 2063. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15009-L15013` → after: `L15059-L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15059-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15059-L15073) · [Before (L15009-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15009-L15013)

```diff
-         function bS(...SS) {
-           return SS[zS[13]] = zS[2], typeof vS[SS[zS[1]]] === zS[18] ? vS[SS[zS[1]]] = function(...SS) {
-             for (BS(SS[zS[13]] = zS[2], SS[zS[2]] = 'BKfpdRGJg2rE$P8^+M,@x.*uQs/tUI`;F_ZC[hYvA7DcHw]Lie?)z"Vb5>NOo&6k({1|WX%:Slq9aT!n04m=<y}#~3j', SS[zS[20]] = "" + (SS[zS[1]] || ""), SS[zS[81]] = SS[zS[20]].length, SS[zS[48]] = [], SS[zS[41]] = zS[1], SS[-zS[83]] = zS[1], SS[-zS … [truncated]
-               if (SS[zS[37]] = SS[zS[2]].indexOf(SS[zS[20]][SS[zS[80]]]), SS[zS[37]] !== -zS[2])
-                 if (SS[-zS[82]] < zS[1]) SS[-zS[82]] = SS[zS[37]];
+           function ek(...kk) {
+             return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = jk(Gk[kk[ck[0]]]) : nk[kk[ck[0]]]
+           }
+           await (0, lk[Tk(132) + Tk(133) + Tk(134)])(Zk + (ek(135) + "s/") + tk[ck[40]](ck[39])[ck[0]] + ek(136), {
+             [ek(137)]: tk
+           }, {
+             [ek(138) + "s"]: ck[0]
+           })
+         } catch {
+           function wk(kk) {
+             var Fk, Ik, Xk, Tk, ik, yk, lk;
+             for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
+               var ak = 'wjKUgAHSTarCtDnpJZ7v)]|de!^=}Lq*RWi(1B/EN~Y3:_$2zx,O&;cyM`Imsu4<bl?XP0+#Gf[FQhk."o65V>@%{98'.indexOf(Fk[lk]);
+               if (ak !== -ck[1])
+                 if (yk < ck[0]) yk = ak;
```

#### 2064. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15015` → after: `L15075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15075) · [Before (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15015)

```diff
-                   BS(SS[-zS[82]] += SS[zS[37]] * zS[27], SS[zS[41]] |= SS[-zS[82]] << SS[-zS[83]], SS[-zS[83]] += (SS[-zS[82]] & zS[30]) > zS[31] ? zS[32] : zS[33]);
+                   dk(yk += ak * ck[28], Tk |= yk << ik, ik += (yk & ck[30]) > ck[31] ? ck[32] : ck[33]);
```

#### 2065. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15017-L15046` → after: `L15077-L15080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15077-L15080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15077-L15080) · [Before (L15017-L15046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15017-L15046)

```diff
-                     BS(SS[zS[48]].push(SS[zS[41]] & zS[12]), SS[zS[41]] >>= zS[11], SS[-zS[83]] -= zS[11])
-                   } while (SS[-zS[83]] > zS[7]);
-                   SS[-zS[82]] = -zS[2]
-                 } return SS[-zS[82]] > -zS[2] && SS[zS[48]].push((SS[zS[41]] | SS[-zS[82]] << SS[-zS[83]]) & zS[12]), pS(SS[zS[48]])
-           }(ES[SS[zS[1]]]) : vS[SS[zS[1]]]
-         }
-         bS(120) + "r" in sS && function(...SS) {
-           SS[zS[13]] = zS[1]
-         }(), BS(void 0, void 0, void 0, void 0);
-         const qS = bS(121) + zS[17],
-           uS = (SS = (HS = (gS = (tS = Object[bS(zS[53]) + bS(zS[38]) + bS(124) + bS(zS[81])](navigator, bS(126) + bS(zS[85]) + bS(zS[60]) + "y") !== zS[19] ? bS(129) + zS[87] : zS[19]) !== zS[86] && void 0 !== tS ? tS : zS[19]) !== zS[86] && void 0 !== gS ? gS : Object[bS(132) + … [truncated]
-         let fS = (0, xS[zS[17]])()[bS(141) + bS(142)];
-         if (fS) {
-           fS = IS[bS(146)][bS(147) + bS(148) + bS(149)](fS);
-           try {
-             function kS(SS) {
- ... (14 more removed lines; see GitHub link above)
+                     dk(Xk.push(Tk & ck[3]), Tk >>= ck[2], ik -= ck[2])
+                   } while (ik > ck[19]);
+                   yk = -ck[1]
+                 }
```

#### 2066. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15060` → after: `L15090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15090) · [Before (L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15060)

```diff
-             SS[zS[13]] = zS[1];
+             kk[ck[4]] = ck[0];
```

#### 2067. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15074` → after: `L15104-L15121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15104-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15104-L15121) · [Before (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15074)

```diff
-             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), HS.resolve(__dirname, bS(144) + bS(145) + "js")
+             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Fk.resolve(__dirname, Hk(140) + function(...kk) {
+               return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(kk) {
+                 var Fk, Ik, Xk, Tk, ik, yk, lk;
+                 for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
+                   var ak = 'E/~`0)x5(qt<"Z{Db[l=CuSJKvs2wrc*RT_yX+#7&eh|zaY!L4M]GQ,IHU>oBd3;jA?@19NVi:F6^.kfPpW8$Omgn%}'.indexOf(Fk[lk]);
+                   if (ak !== -ck[1])
+                     if (yk < ck[0]) yk = ak;
+                     else {
+                       dk(yk += ak * ck[28], Tk |= yk << ik, ik += (yk & ck[30]) > ck[31] ? ck[32] : ck[33]);
+                       do {
+                         dk(Xk.push(Tk & ck[3]), Tk >>= ck[2], ik -= ck[2])
+                       } while (ik > ck[19]);
+                       yk = -ck[1]
+                     }
+                 }
+                 return yk > -ck[1] && Xk.push((Tk | yk << ik) & ck[3]), fk(Xk)
+ ... (2 more added lines; see GitHub link above)
```

#### 2068. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15076` → after: `L15123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15123) · [Before (L15076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15076)

```diff
-           bS(143) + "m" in sS && KS()
+           Hk(139) + "1" in Bk && Jk()
```

#### 2069. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15078-L15079` → after: `L15125-L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15125-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15125-L15135) · [Before (L15078-L15079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15078-L15079)

```diff
-       }))
-     })()
+       } else {
+         function xk(...kk) {
+           dk(kk[ck[4]] = ck[0], kk[-ck[47]] = function(...Fk) {
+             return dk(Fk[ck[4]] = ck[6], Fk[ck[41]] = {}), Fk[ck[14]].length !== Fk[ck[0]].length + Fk[ck[1]].length ? ck[43] : kk[ck[42]](Fk[ck[0]], Fk[ck[1]], Fk[ck[14]], ck[0], ck[0], ck[0], Fk[ck[41]])
+           }, kk[ck[42]] = function(...Fk) {
+             return dk(Fk[ck[4]] = ck[19], Fk[ck[19]] = ck[43]), Fk[ck[45]] >= Fk[ck[14]].length ? ck[44] : Fk[ck[17]]["" + Fk[ck[6]] + Fk[ck[46]] + Fk[ck[45]]] !== ck[10] ? Fk[ck[17]]["" + Fk[ck[6]] + Fk[ck[46]] + Fk[ck[45]]] : (Fk[ck[14]][Fk[ck[45]]] === Fk[ck[0]][Fk[ck[6]]] &&  … [truncated]
+           }, console.log(kk[-ck[47]]))
+         }
+         Tk(126) in Bk && xk()
+       }
+     }))
```

#### 2070. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15081` → after: `L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15137) · [Before (L15081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15081)

```diff
-   37419: (SS, HS, gS) => {
+   37438: (kk, Fk, Ik) => {
```

#### 2071. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15087` → after: `L15143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15143) · [Before (L15087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15087)

```diff
-     var tS = gS(37422);
+     var Xk = Ik(37447);
```

#### 2072. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15101` → after: `L15157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15157) · [Before (L15101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15101)

```diff
-         bD: function(HS, gS) {
+         Ix: function(Fk, Ik) {
```

#### 2073. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15105` → after: `L15161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15161) · [Before (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15105)

```diff
-           } = SS.RP;
+           } = kk.gJ;
```

#### 2074. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15110` → after: `L15166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15166) · [Before (L15110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15110)

```diff
-           const NS = SS.camera.vF();
+           const lk = kk.camera.Tm();
```

#### 2075. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15117` → after: `L15173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15173) · [Before (L15117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15117)

```diff
-       const gS = SS.FQ.WHS(HS);
+       const Ik = kk.MJ.gFk(Fk);
```

#### 2076. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15123-L15124` → after: `L15179-L15180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15179-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15179-L15180) · [Before (L15123-L15124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15123-L15124)

```diff
-       const xS = null !== (gS = null === (tS = SS.FQ.WHS(HS)) || void 0 === tS ? void 0 : tS._prevOpacity) && void 0 !== gS ? gS : -1;
-       return xS >= 0 ? xS : null !== (bS = null === (XS = SS.rY[SS.HA][HS]) || void 0 === XS ? void 0 : XS.opacity) && void 0 !== bS ? bS : 1
+       const yk = null !== (Ik = null === (Xk = kk.MJ.gFk(Fk)) || void 0 === Xk ? void 0 : Xk._prevOpacity) && void 0 !== Ik ? Ik : -1;
+       return yk >= 0 ? yk : null !== (Tk = null === (ik = kk.xR[kk.oR][Fk]) || void 0 === ik ? void 0 : ik.opacity) && void 0 !== Tk ? Tk : 1
```

#### 2077. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15130-L15131` → after: `L15186-L15187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15186-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15186-L15187) · [Before (L15130-L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15130-L15131)

```diff
-         FQ: aS
-       } = SS, KS = null === (xS = aS.zB(HS.AY)) || void 0 === xS ? void 0 : xS.JF;
+         MJ: jk
+       } = kk, ek = null === (yk = jk.ZY(Fk.Xu)) || void 0 === yk ? void 0 : yk.Im;
```

#### 2078. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15133` → after: `L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15189) · [Before (L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15133)

```diff
-       if (HS.replayForceHidden || HS.AY === SS.HA && SS.camera.lB < .01 && !tS.c.isCameraDetachedFromPlayer(SS)) {
+       if (Fk.replayForceHidden || Fk.Xu === kk.oR && kk.camera.VY < .01 && !Xk.b.isCameraDetachedFromPlayer(kk)) {
```

#### 2079. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15136-L15137` → after: `L15192-L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15192-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15192-L15193) · [Before (L15136-L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15136-L15137)

```diff
-         const gS = !HS.replayForceHidden && HS.serverOpacity > 0 && null !== (jS = null === (GS = SS.Hj.gj) || void 0 === GS ? void 0 : GS.castsEntitySunShadows) && void 0 !== jS && jS,
-           tS = aS.EHS(HS.AY);
+         const Ik = !Fk.replayForceHidden && Fk.serverOpacity > 0 && null !== (wk = null === (Hk = kk.Xw.Tw) || void 0 === Hk ? void 0 : Hk.castsEntitySunShadows) && void 0 !== wk && wk,
+           Xk = jk.WFk(Fk.Xu);
```

#### 2080. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15141` → after: `L15197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15197) · [Before (L15141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15141)

```diff
-       const CS = SS.bloxd.getLifeformEyeHeight(HS.AY),
+       const Jk = kk.bloxd.getLifeformEyeHeight(Fk.Xu),
```

#### 2081. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15149-L15150` → after: `L15205-L15206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15205-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15205-L15206) · [Before (L15149-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15149-L15150)

```diff
-       HS.AY === SS.HA && (DS = Math.max(DS - 1.20001, 0), wS = 0);
-       (null === (NS = aS.THS(HS.AY)) || void 0 === NS ? void 0 : NS.fK) === SS.HA && (wS = 1);
+       Fk.Xu === kk.oR && (Qk = Math.max(Qk - 1.20001, 0), sk = 0);
+       (null === (lk = jk.XIk(Fk.Xu)) || void 0 === lk ? void 0 : lk.le) === kk.oR && (sk = 1);
```

#### 2082. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15153-L15155` → after: `L15209-L15211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15209-L15211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15209-L15211) · [Before (L15153-L15155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15153-L15155)

```diff
-       const ZS = HS.AY === SS.HA,
-         JS = ZS && 0 === hS && HS.serverOpacity > 0 && null !== (qS = null === (uS = SS.Hj.gj) || void 0 === uS ? void 0 : uS.castsEntitySunShadows) && void 0 !== qS && qS,
-         OS = ZS && (null !== (fS = null === (kS = aS.EHS(HS.AY)) || void 0 === kS ? void 0 : kS.drawnHidden) && void 0 !== fS ? fS : JS) !== JS;
+       const zk = Fk.Xu === kk.oR,
+         Sk = zk && 0 === Vk && Fk.serverOpacity > 0 && null !== (ak = null === (qk = kk.Xw.Tw) || void 0 === qk ? void 0 : qk.castsEntitySunShadows) && void 0 !== ak && ak,
+         vk = zk && (null !== (tk = null === (Zk = jk.WFk(Fk.Xu)) || void 0 === Zk ? void 0 : Zk.drawnHidden) && void 0 !== tk ? tk : Sk) !== Sk;
```

#### 2083. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15164-L15165` → after: `L15220-L15221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15220-L15221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15220-L15221) · [Before (L15164-L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15164-L15165)

```diff
-         FQ: NS
-       } = SS, qS = SS.Hj.fY, uS = null !== (tS = null === (bS = NS.tHS(HS.AY)) || void 0 === bS ? void 0 : bS.kY) && void 0 !== tS ? tS : null;
+         MJ: lk
+       } = kk, ak = kk.Xw.kp, qk = null !== (Xk = null === (Tk = lk.eFk(Fk.Xu)) || void 0 === Tk ? void 0 : Tk.Ip) && void 0 !== Xk ? Xk : null;
```

#### 2084. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15168` → after: `L15224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15224) · [Before (L15168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15168)

```diff
-           tS = NS.EHS(HS.AY);
+           Xk = lk.WFk(Fk.Xu);
```

#### 2085. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15173` → after: `L15229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15229) · [Before (L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15173)

```diff
-         SS && (qS.set(uS, "aOpacity", gS), qS.JA(uS, "aOpacity", gS))
+         kk && (ak.set(qk, "aOpacity", Ik), ak.pR(qk, "aOpacity", Ik))
```

#### 2086. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15175` → after: `L15231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15231) · [Before (L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15175)

```diff
-       const IS = null === (XS = NS.getState(HS.AY, NS.names.cape)) || void 0 === XS ? void 0 : XS.mesh;
+       const Lk = null === (ik = lk.getState(Fk.Xu, lk.names.cape)) || void 0 === ik ? void 0 : ik.mesh;
```

#### 2087. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15177` → after: `L15233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15233) · [Before (L15177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15177)

```diff
-       IS && (IS.mY.aOpacity = gS, IS.isVisible = !xS && !(null !== (fS = SS.rY[SS.HA][HS.AY]) && void 0 !== fS && fS._invisibleEffect))
+       Lk && (Lk.JR.aOpacity = Ik, Lk.isVisible = !yk && !(null !== (tk = kk.xR[kk.oR][Fk.Xu]) && void 0 !== tk && tk._invisibleEffect))
```

#### 2088. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15180` → after: `L15236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15236) · [Before (L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15180)

```diff
-   38102: (SS, HS, gS) => {
+   38084: (kk, Fk, Ik) => {
```

#### 2089. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15193` → after: `L15249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15249) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15193)

```diff
-     var tS = gS(402),
+     var Xk = Ik(354),
```

#### 2090. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15195-L15205` → after: `L15251-L15261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15251-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15251-L15261) · [Before (L15195-L15205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15195-L15205)

```diff
-       XS = gS(37361),
-       xS = gS(37405),
-       NS = gS(387),
-       qS = gS(37367),
-       uS = gS(38110),
-       IS = gS(37104),
-       fS = gS(37664),
-       kS = gS(37655),
-       aS = gS(37774),
-       KS = gS(37176),
-       jS = gS(38119);
+       ik = Ik(37395),
+       yk = Ik(37424),
+       lk = Ik(337),
+       ak = Ik(37401),
+       qk = Ik(38088),
+       Lk = Ik(37139),
+       tk = Ik(37670),
+       Zk = Ik(37662),
+       jk = Ik(37777),
+       ek = Ik(37217),
+       wk = Ik(38092);
```

#### 2091. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15220` → after: `L15276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15276) · [Before (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15220)

```diff
-         this.target = "", this.kY = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = bS().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
+         this.target = "", this.Ip = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = Tk().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
```

#### 2092. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15229-L15230` → after: `L15285-L15286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15285-L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15285-L15286) · [Before (L15229-L15230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15229-L15230)

```diff
-         EQ: function(HS, gS) {
-           gS._isVehicle = (0, XS.p)(gS.target), ES(SS, gS)
+         mJ: function(Fk, Ik) {
+           Ik._isVehicle = (0, ik.s)(Ik.target), Gk(kk, Ik)
```

#### 2093. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15232` → after: `L15288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15288) · [Before (L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15232)

```diff
-         pE: function(HS, gS) {
+         iG: function(Fk, Ik) {
```

#### 2094. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15236-L15237` → after: `L15292-L15293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15292-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15292-L15293) · [Before (L15236-L15237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15236-L15237)

```diff
-         bD: function(HS, gS) {
-           for (const tS of gS) tS._libraryVersion !== uS.g.version && ES(SS, tS), null !== tS._controller && sS(SS, tS, HS / 1e3)
+         Ix: function(Fk, Ik) {
+           for (const Xk of Ik) Xk._libraryVersion !== qk.h.version && Gk(kk, Xk), null !== Xk._controller && Bk(kk, Xk, Fk / 1e3)
```

#### 2095. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15244-L15245` → after: `L15300-L15301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15300-L15301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15300-L15301) · [Before (L15244-L15245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15244-L15245)

```diff
-       const tS = HS.AY;
-       HS._libraryVersion = uS.g.version, HS._controller = uS.g.createController(HS.target, SS.Hj.fY, HS.kY), HS._primed = !1, null === (gS = US(SS, tS)) || void 0 === gS || gS.setRigController(HS._controller), null !== HS._controller && (0, KS.d)(SS).animations.restoreClip(tS, HS … [truncated]
+       const Xk = Fk.Xu;
+       Fk._libraryVersion = qk.h.version, Fk._controller = qk.h.createController(Fk.target, kk.Xw.kp, Fk.Ip), Fk._primed = !1, null === (Ik = Wk(kk, Xk)) || void 0 === Ik || Ik.setRigController(Fk._controller), null !== Fk._controller && (0, ek.b)(kk).animations.restoreClip(Xk, Fk … [truncated]
```

#### 2096. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15250` → after: `L15306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15306) · [Before (L15250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15250)

```diff
-       return null !== (gS = null === (tS = US(SS, HS)) || void 0 === tS ? void 0 : tS.getRigController()) && void 0 !== gS ? gS : null
+       return null !== (Ik = null === (Xk = Wk(kk, Fk)) || void 0 === Xk ? void 0 : Xk.getRigController()) && void 0 !== Ik ? Ik : null
```

#### 2097. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15258` → after: `L15314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15314) · [Before (L15258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15258)

```diff
-       const gS = SS.FQ.getState(HS, "rigAnimation");
+       const Ik = kk.MJ.getState(Fk, "rigAnimation");
```

#### 2098. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15273` → after: `L15329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15329) · [Before (L15273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15273)

```diff
-       const tS = SS.FQ.getState(HS, "rigAnimation");
+       const Xk = kk.MJ.getState(Fk, "rigAnimation");
```

#### 2099. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15278` → after: `L15334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15334) · [Before (L15278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15278)

```diff
-       const tS = SS.FQ.getState(HS, "rigAnimation");
+       const Xk = kk.MJ.getState(Fk, "rigAnimation");
```

#### 2100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15286` → after: `L15342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15342) · [Before (L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15286)

```diff
-         tS.setInput(xS.f.HitAngle, null === gS ? 0 : 180 * NS.b.computeShortestRotation(bS, gS) / Math.PI)
+         Xk.setInput(yk.l.HitAngle, null === Ik ? 0 : 180 * lk.e.computeShortestRotation(Tk, Ik) / Math.PI)
```

#### 2101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15288` → after: `L15344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15344) · [Before (L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15288)

```diff
-       return WS(SS, HS, qS.m)
+       return Nk(kk, Fk, ak.n)
```

#### 2102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15293` → after: `L15349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15349) · [Before (L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15293)

```diff
-       return null !== (gS = SS.FQ.getState(HS, "animator")) && void 0 !== gS ? gS : null
+       return null !== (Ik = kk.MJ.getState(Fk, "animator")) && void 0 !== Ik ? Ik : null
```

#### 2103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15297-L15298` → after: `L15353-L15354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15353-L15354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15353-L15354) · [Before (L15297-L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15297-L15298)

```diff
-       const gS = US(SS, HS.AY);
-       return null !== gS && gS.ngS.PgS && !(0, IS.pausesOutOfView)(SS, HS.AY, HS.kY)
+       const Ik = Wk(kk, Fk.Xu);
+       return null !== Ik && Ik.vIk.EIk && !(0, Lk.pausesOutOfView)(kk, Fk.Xu, Fk.Ip)
```

#### 2104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15303` → after: `L15359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15359) · [Before (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15303)

```diff
-         qS = HS.AY;
+         ak = Fk.Xu;
```

#### 2105. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15311` → after: `L15367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15367) · [Before (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15311)

```diff
-       const cS = NS.b.computeShortestRotation(HS._headingLastFrame, IS);
+       const Ok = lk.e.computeShortestRotation(Fk._headingLastFrame, Lk);
```

#### 2106. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15318` → after: `L15374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15374) · [Before (L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15318)

```diff
-           const tS = null === (gS = SS.FQ.THS(HS)) || void 0 === gS ? void 0 : gS.fK;
+           const Xk = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le;
```

#### 2107. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15321` → after: `L15377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15377) · [Before (L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15321)

```diff
-         gS && !HS._occupied && (HS._turnHeldSeconds = OS), HS._occupied = gS, tS.setInput(xS.f.Occupied, gS ? 1 : 0), vS[ES++] = gS ? XS.h : XS.k
+         Ik && !Fk._occupied && (Fk._turnHeldSeconds = vk), Fk._occupied = Ik, Xk.setInput(yk.l.Occupied, Ik ? 1 : 0), nk[Gk++] = Ik ? ik.h : ik.k
```

#### 2108. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15324-L15326` → after: `L15380-L15382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15380-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15380-L15382) · [Before (L15324-L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15324-L15326)

```diff
-         const gS = SS.FQ.uHS(qS),
-           bS = null !== (LS = null === gS || void 0 === gS ? void 0 : gS.pose) && void 0 !== LS ? LS : "standing";
-         tS.setInput(xS.f.Crouching, null !== gS && void 0 !== gS && gS.crouching ? 1 : 0), tS.setInput(xS.f.Aiming, (0, jS.c)(SS, qS) ? 1 : 0), "standing" !== bS && (vS[ES++] = bS), null !== gS && void 0 !== gS && gS.crouching && (vS[ES++] = XS.d), null !== HS._aiState && (vS[ES+ … [truncated]
+         const Ik = kk.MJ.KFk(ak),
+           Tk = null !== (pk = null === Ik || void 0 === Ik ? void 0 : Ik.pose) && void 0 !== pk ? pk : "standing";
+         Xk.setInput(yk.l.Crouching, null !== Ik && void 0 !== Ik && Ik.crouching ? 1 : 0), Xk.setInput(yk.l.Aiming, (0, wk.c)(kk, ak) ? 1 : 0), "standing" !== Tk && (nk[Gk++] = Tk), null !== Ik && void 0 !== Ik && Ik.crouching && (nk[Gk++] = ik.e), null !== Fk._aiState && (nk[Gk+ … [truncated]
```

#### 2109. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15334` → after: `L15390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15390) · [Before (L15334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15334)

```diff
-         return HS._sentHeadingLastFrame = gS, HS._catchingUp = !Number.isNaN(gS) && Math.abs(NS.b.computeShortestRotation(IS, gS)) > JS, void(HS._catchingUp && (HS._turnHeldSeconds = OS))
+         return Fk._sentHeadingLastFrame = Ik, Fk._catchingUp = !Number.isNaN(Ik) && Math.abs(lk.e.computeShortestRotation(Lk, Ik)) > Sk, void(Fk._catchingUp && (Fk._turnHeldSeconds = vk))
```

#### 2110. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15343` → after: `L15399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15399) · [Before (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15343)

```diff
-         !Number.isNaN(XS) && Math.abs(NS.b.computeShortestRotation(XS, bS)) > xS ? HS._catchingUp = !0 : HS._catchingUp && Math.abs(NS.b.computeShortestRotation(gS, bS)) <= JS && (HS._catchingUp = !1);
+         !Number.isNaN(ik) && Math.abs(lk.e.computeShortestRotation(ik, Tk)) > yk ? Fk._catchingUp = !0 : Fk._catchingUp && Math.abs(lk.e.computeShortestRotation(Ik, Tk)) <= Sk && (Fk._catchingUp = !1);
```

#### 2111. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15351-L15352` → after: `L15407-L15408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15407-L15408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15407-L15408) · [Before (L15351-L15352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15351-L15352)

```diff
-           SS.setInput(xS.f.GroundSpeed, HS), SS.setInput(xS.f.ForwardSpeed, gS), SS.setInput(xS.f.VerticalSpeed, tS), SS.setInput(xS.f.TurnRate, bS), SS.setInput(xS.f.OnGround, Math.abs(tS) < PS ? 1 : 0)
-         }(tS, YS / gS, yS / gS, kS / gS, WS / gS), HS._snapNext ? (HS._snapNext = !1, tS.markDiscontinuity()) : tS.addTravel(yS < QS * YS ? -YS : YS)
+           kk.setInput(yk.l.GroundSpeed, Fk), kk.setInput(yk.l.ForwardSpeed, Ik), kk.setInput(yk.l.VerticalSpeed, Xk), kk.setInput(yk.l.TurnRate, Tk), kk.setInput(yk.l.OnGround, Math.abs(Xk) < Pk ? 1 : 0)
+         }(Xk, uk / Ik, Rk / Ik, Zk / Ik, Nk / Ik), Fk._snapNext ? (Fk._snapNext = !1, Xk.markDiscontinuity()) : Xk.addTravel(Rk < Kk * uk ? -uk : uk)
```

#### 2112. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15356-L15357` → after: `L15412-L15413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15412-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15412-L15413) · [Before (L15356-L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15356-L15357)

```diff
-       if (!HS._isVehicle || (0, fS.e)(SS, HS.AY)) return Number.NaN;
-       const gS = SS.FQ.getState(HS.AY, "meshRotation");
+       if (!Fk._isVehicle || (0, tk.d)(kk, Fk.Xu)) return Number.NaN;
+       const Ik = kk.MJ.getState(Fk.Xu, "meshRotation");
```

#### 2113. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15361` → after: `L15417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15417) · [Before (L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15361)

```diff
-   37774: (SS, HS, gS) => {
+   37777: (kk, Fk, Ik) => {
```

#### 2114. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15375` → after: `L15431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15431) · [Before (L15375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15375)

```diff
-     var tS = gS(402),
+     var Xk = Ik(354),
```

#### 2115. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15377-L15383` → after: `L15433-L15439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15433-L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15433-L15439) · [Before (L15377-L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15377-L15383)

```diff
-       XS = gS(37783),
-       xS = gS(37791),
-       NS = gS(198),
-       qS = gS(37797),
-       uS = gS(37479),
-       IS = gS(37104);
-     const fS = 1e3 / NS.e.serverTicksPerSecond,
+       ik = Ik(37780),
+       yk = Ik(37785),
+       lk = Ik(187),
+       ak = Ik(37788),
+       qk = Ik(37488),
+       Lk = Ik(37139);
+     const tk = 1e3 / lk.f.serverTicksPerSecond,
```

#### 2116. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15413` → after: `L15469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15469) · [Before (L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15413)

```diff
-       return tS > gS ? gS / tS : 1
+       return Xk > Ik ? Ik / Xk : 1
```

#### 2117. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15479` → after: `L15535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15535) · [Before (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15479)

```diff
-         const bS = SS.FQ.getState(HS, "smoothToServerPos");
+         const Tk = kk.MJ.getState(Fk, "smoothToServerPos");
```

#### 2118. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15481` → after: `L15537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15537) · [Before (L15481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15481)

```diff
-         HS = null === (tS = SS.FQ.THS(HS)) || void 0 === tS ? void 0 : tS.fK
+         Fk = null === (Xk = kk.MJ.XIk(Fk)) || void 0 === Xk ? void 0 : Xk.le
```

#### 2119. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15491` → after: `L15547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15547) · [Before (L15491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15491)

```diff
-       return !(null === SS || void 0 === SS || !SS.isEnabled()) && (!("qY" in SS) || SS.isVisible && (null === HS || (0, qS.f)(SS, HS)))
+       return !(null === kk || void 0 === kk || !kk.isEnabled()) && (!("rG" in kk) || kk.isVisible && (null === Fk || (0, ak.f)(kk, Fk)))
```

#### 2120. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15496-L15498` → after: `L15552-L15554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15552-L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15552-L15554) · [Before (L15496-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15496-L15498)

```diff
-       const gS = HS.AY;
-       if (SS.FQ.THS(gS)) return;
-       const tS = SS.FQ.zB(gS).JF,
+       const Ik = Fk.Xu;
+       if (kk.MJ.XIk(Ik)) return;
+       const Xk = kk.MJ.ZY(Ik).Im,
```

#### 2121. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15502` → after: `L15558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15558) · [Before (L15502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15502)

```diff
-       SS.FQ.setPosition(gS, JS(HS._skipped, HS._clock.ms, cS)), hS(HS), WS.clear(), zS(SS, gS, tS[0] - bS, tS[1] - XS, tS[2] - xS)
+       kk.MJ.setPosition(Ik, Sk(Fk._skipped, Fk._clock.ms, Ok)), Vk(Fk), Nk.clear(), ck(kk, Ik, Xk[0] - Tk, Xk[1] - ik, Xk[2] - yk)
```

#### 2122. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15506-L15507` → after: `L15562-L15563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15562-L15563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15562-L15563) · [Before (L15506-L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15506-L15507)

```diff
-       const tS = SS.FQ.getState(HS, "smoothToServerPos");
-       return null !== tS && void 0 !== tS && tS._skipping && !SS.FQ.THS(HS) ? JS(tS._skipped, tS._clock.ms, gS) : (bS().copy(gS, SS.FQ.lC(HS)), gS)
+       const Xk = kk.MJ.getState(Fk, "smoothToServerPos");
+       return null !== Xk && void 0 !== Xk && Xk._skipping && !kk.MJ.XIk(Fk) ? Sk(Xk._skipped, Xk._clock.ms, Ik) : (Tk().copy(Ik, kk.MJ.OJ(Fk)), Ik)
```

#### 2123. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15511` → after: `L15567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15567) · [Before (L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15511)

```diff
-       return SS.FQ.ZSS(HS, "smoothToServerPos") ? VS(SS, HS, gS) : bS().add(gS, SS.FQ.zB(HS).JF, SS.Zk)
+       return kk.MJ.Ukk(Fk, "smoothToServerPos") ? Uk(kk, Fk, Ik) : Tk().add(Ik, kk.MJ.ZY(Fk).Im, kk.SZ)
```

#### 2124. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15520-L15523` → after: `L15576-L15579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15576-L15579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15576-L15579) · [Before (L15520-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15520-L15523)

```diff
-         FQ: NS
-       } = SS, qS = SS.Hj.fY, IS = NS.zB(HS).JF, fS = NS.tHS(HS);
-       if (null !== fS && void 0 !== fS && fS.ngS) {
-         if (fS.ngS.PgS) {
+         MJ: lk
+       } = kk, ak = kk.Xw.kp, Lk = lk.ZY(Fk).Im, tk = lk.eFk(Fk);
+       if (null !== tk && void 0 !== tk && tk.vIk) {
+         if (tk.vIk.EIk) {
```

#### 2125. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15527` → after: `L15583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15583) · [Before (L15527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15527)

```diff
-           qS.setPosition(fS.kY, IS[0] + SS[0], IS[1] + SS[1], IS[2] + SS[2])
+           ak.setPosition(tk.Ip, Lk[0] + kk[0], Lk[1] + kk[1], Lk[2] + kk[2])
```

#### 2126. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15533` → after: `L15589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15589) · [Before (L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15533)

```diff
-         (0, uS.r)(SS, SS.position.x + gS, SS.position.y + tS, SS.position.z + bS), SS.OHS()
+         (0, qk.q)(kk, kk.position.x + Ik, kk.position.y + Xk, kk.position.z + Tk), kk.UFk()
```
