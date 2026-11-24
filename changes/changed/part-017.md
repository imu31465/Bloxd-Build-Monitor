# Changed — Bundle Modifications Report (Part 017 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `17 / 140` (**312** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1820. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13460-L13491` → after: `L13258-L13271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13258-L13271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13258-L13271) · [Before (L13460-L13491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13460-L13491)

```diff
-                 function jk(...kk) {
-                   for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = ""), kk[gk[84]] = gk[1]; kk[gk[84]] < kk[gk[1]].length * gk[68]; kk[gk[84]] += gk[11]) kk[gk[2]] += String.fromCharCode(kk[gk[1]][kk[gk[84]] >> gk[50]] >>> gk[104] - kk[gk[84]] % gk[68] & gk[12]);
-                   return kk[gk[2]]
-                 }
- 
-                 function ek(kk, Fk) {
-                   return kk >>> Fk | kk << gk[68] - Fk
-                 }
- 
-                 function wk(...kk) {
-                   return kk[gk[13]] = gk[35], kk[gk[1]] >>> kk[gk[2]]
-                 }
- 
-                 function Hk(...kk) {
-                   return kk[gk[13]] = gk[25], kk[gk[1]] & kk[gk[2]] ^ ~kk[gk[1]] & kk[gk[35]]
-                 }
- ... (16 more removed lines; see GitHub link above)
+                   function xS(...SS) {
+                     if (SS[oS[13]] = oS[2], SS[oS[1]] >= oS[109] && SS[oS[1]] <= 57343) {
+                       function HS(...SS) {
+                         for (NH(SS[oS[13]] = oS[2], SS[-oS[101]] = 'CB0ifStz2r"jbv!moeg*_?.k)I(Z|{1l6n7M+V#T<HKW>&X4YcLsQRAuNd,aU9PDEGO^}~hpF]qwJ@8;%$=/`[3xy:5', SS[oS[98]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[98]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[24]] =  … [truncated]
+                           if (SS[oS[6]] = SS[-oS[101]].indexOf(SS[oS[98]][SS[-oS[111]]]), SS[oS[6]] !== -oS[2])
+                             if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
+                             else {
+                               NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                               do {
+                                 NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
+                               } while (SS[oS[24]] > oS[26]);
+                               SS[oS[31]] = -oS[2]
+                             } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                       }
```

#### 1821. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13493-L13495` → after: `L13273-L13278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13273-L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13273-L13278) · [Before (L13493-L13495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13493-L13495)

```diff
-                 function Qk(kk) {
-                   return ek(kk, gk[48]) ^ ek(kk, gk[106]) ^ wk(kk, gk[105])
-                 }
+                       function gS(...SS) {
+                         return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = HS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                       }
+                       throw Error(gS(oS[262]) + gS(oS[204]) + gS(oS[314]) + SS[oS[1]].toString(oS[222]).toUpperCase() + (gS(oS[334]) + gS(oS[62]) + gS(oS[90]) + gS(205)))
+                     }
+                   }
```

#### 1822. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13497-L13501` → after: `L13280-L13281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13280-L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13280-L13281) · [Before (L13497-L13501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13497-L13501)

```diff
-                 function sk(...Fk) {
-                   var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk;
-                   for (qF(Fk[gk[13]] = gk[35], Fk[gk[43]] = new Array(gk[222], -gk[223], gk[224], -gk[225], gk[226], -gk[227], gk[228], gk[229]), Fk[gk[25]] = new Array(gk[107])), qF(Fk[gk[1]][Fk[gk[2]] >> gk[50]] |= gk[71] << gk[104] - Fk[gk[2]] % gk[68], Fk[gk[1]][(Fk[gk[2]] +  … [truncated]
-                     for (qF(Ik = Fk[gk[43]][gk[1]], Xk = Fk[gk[43]][gk[2]], Tk = Fk[gk[43]][gk[35]], ik = Fk[gk[43]][gk[25]], yk = Fk[gk[43]][gk[10]], lk = Fk[gk[43]][gk[50]], ak = Fk[gk[43]][gk[20]], qk = Fk[gk[43]][gk[7]]), tk = gk[1]; tk < gk[107]; tk++) qF(tk < gk[86] ? Fk[gk … [truncated]
-                     qF(Fk[gk[43]][gk[1]] = Vk(Ik, Fk[gk[43]][gk[1]]), Fk[gk[43]][gk[2]] = Vk(Xk, Fk[gk[43]][gk[2]]), Fk[gk[43]][gk[35]] = Vk(Tk, Fk[gk[43]][gk[35]]), Fk[gk[43]][gk[25]] = Vk(ik, Fk[gk[43]][gk[25]]), Fk[gk[43]][gk[10]] = Vk(yk, Fk[gk[43]][gk[10]]), Fk[gk[43]][gk[50 … [truncated]
+                   function NS(...HS) {
+                     return HS[oS[13]] = oS[0], SS[oS[5]](HS[oS[1]] >> HS[oS[2]] & oS[23] | oS[55])
```

#### 1823. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13506-L13529` → after: `L13284-L13286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13284-L13286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13284-L13286) · [Before (L13506-L13529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13506-L13529)

```diff
-                 function Vk(...kk) {
-                   return qF(kk[gk[13]] = gk[35], kk[gk[35]] = (kk[gk[1]] & gk[108]) + (kk[gk[2]] & gk[108]), kk[-gk[3]] = (kk[gk[1]] >> gk[86]) + (kk[gk[2]] >> gk[86]) + (kk[gk[35]] >> gk[86])), kk[-gk[3]] << gk[86] | kk[gk[35]] & gk[108]
-                 }
-                 return qF(kk[gk[13]] = gk[1], kk[gk[43]] = gk[1], kk[gk[26]] = ""), kk[gk[35]] = new Array(gk[158], gk[159], -gk[160], -gk[161], gk[162], gk[163], -gk[164], -gk[165], -gk[166], gk[167], gk[168], gk[169], gk[170], -gk[171], -gk[172], -gk[173], -gk[174], -gk[175], g … [truncated]
-                   hex: Ik,
-                   b64: Tk,
-                   any: ik,
-                   hex_hmac: Xk,
-                   b64_hmac: Tk,
-                   any_hmac: ik
-                 }
-               }(), console.log(kk[gk[43]]))
-             }(), [
-               [kk[gk[46]], kk[gk[231]], kk[gk[35]]], kk[gk[8]]
-             ] = Ak;
-             const Ik = kk[gk[46]][Fk(gk[230])][Fk(218) + Fk(219) + Fk(gk[368]) + Fk(221)](kk[gk[35]]);
- ... (8 more removed lines; see GitHub link above)
+                   function qS(...HS) {
+                     return HS[oS[13]] = oS[2], (4294967168 & HS[oS[1]]) == oS[1] ? SS[oS[5]](HS[oS[1]]) : (HS[-oS[89]] = "", (4294965248 & HS[oS[1]]) == oS[1] ? HS[-oS[89]] = SS[oS[5]](HS[oS[1]] >> oS[24] & oS[112] | oS[113]) : (4294901760 & HS[oS[1]]) == oS[1] ? NH(xS(HS[oS[1]]) … [truncated]
+                   }
```

#### 1824. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13531-L13538` → after: `L13288-L13290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13288-L13290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13288-L13290) · [Before (L13531-L13538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13531-L13538)

```diff
-             function Ik(...kk) {
-               return kk[gk[13]] = gk[25],
-                 function(...kk) {
-                   var Fk, Ik, Xk, Tk;
-                   for (qF(kk[gk[13]] = gk[35], kk[gk[35]] = kk[gk[2]].length, kk[gk[25]] = Array()), kk[gk[10]] = Array(Math.ceil(kk[gk[1]].length / gk[35])), Fk = gk[1]; Fk < kk[gk[10]].length; Fk++) kk[gk[10]][Fk] = kk[gk[1]].charCodeAt(Fk * gk[35]) << gk[11] | kk[gk[1]].charCo … [truncated]
-                   for (; kk[gk[10]].length > gk[1];) {
-                     for (qF(Tk = Array(), Xk = gk[1]), Fk = gk[1]; Fk < kk[gk[10]].length; Fk++) qF(Xk = (Xk << gk[86]) + kk[gk[10]][Fk], Ik = Math.floor(Xk / kk[gk[35]]), Xk -= Ik * kk[gk[35]]), (Tk.length > gk[1] || Ik > gk[1]) && (Tk[Tk.length] = Ik);
-                     qF(kk[gk[25]][kk[gk[25]].length] = Xk, kk[gk[10]] = Tk)
+                   function uS(...SS) {
+                     for (NH(SS[oS[13]] = oS[2], SS[oS[108]] = tS(SS[oS[1]]), SS[oS[14]] = SS[oS[108]].length, SS[oS[4]] = -oS[2], SS[-oS[116]] = oS[19], SS[oS[44]] = ""); ++SS[oS[4]] < SS[oS[14]];) NH(SS[-oS[116]] = SS[oS[108]][SS[oS[4]]], SS[oS[44]] += qS(SS[-oS[116]]));
+                     return SS[oS[44]]
```

#### 1825. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13546-L13552` → after: `L13293-L13297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13293-L13297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13293-L13297) · [Before (L13546-L13552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13546-L13552)

```diff
-             function Xk(...kk) {
-               qF(kk[gk[13]] = gk[35], kk[gk[35]] = ak(kk[gk[1]])), kk[gk[35]].length > gk[86] && (kk[gk[35]] = xk(kk[gk[35]], kk[gk[1]].length * gk[11]));
-               var Fk = Array(gk[86]),
-                 Ik = Array(gk[86]);
-               for (kk[gk[25]] = gk[1]; kk[gk[25]] < gk[86]; kk[gk[25]]++) qF(Fk[kk[gk[25]]] = kk[gk[35]][kk[gk[25]]] ^ gk[139], Ik[kk[gk[25]]] = kk[gk[35]][kk[gk[25]]] ^ gk[140]);
-               return kk[-gk[235]] = xk(Fk.concat(ak(kk[gk[2]])), gk[88] + kk[gk[2]].length * gk[11]), qk(xk(Ik.concat(kk[-gk[235]]), rk(ik(238), gk[88], gk[59])))
-             }
+                   function IS(...HS) {
+                     if (HS[oS[13]] = oS[1], SS[oS[26]] >= SS[oS[4]]) throw Error(XS(oS[118]));
+                     if (NH(HS[oS[5]] = SS[oS[16]][SS[oS[26]]] & oS[12], SS[oS[26]]++), (HS[oS[5]] & oS[113]) == oS[55]) return HS[oS[5]] & oS[23];
+                     throw Error(XS(oS[120]))
+                   }
```

#### 1826. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13554-L13574` → after: `L13299-L13305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13299-L13305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13299-L13305) · [Before (L13554-L13574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13554-L13574)

```diff
-             function Tk(...Fk) {
-               Fk[gk[13]] = gk[2];
-               try {
-                 kk[gk[43]]
-               } catch (Ik) {
-                 kk[gk[43]] = gk[1]
-               }
-               for (qF(Fk[gk[43]] = kk[gk[43]] ? ik(gk[55]) + ik(gk[152]) + ik(gk[237]) : ik(gk[55]) + ik(gk[94]) + function(...kk) {
-                   return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(kk) {
-                     var Fk, Ik, Xk, Tk, ik, yk, lk;
-                     for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-                       var ak = 'YuW3#vh^mw.XDPxyClpi6B=]_ZU}*sM9F?G~gIj/)rk|7bezcAV>2`$HQRJ(<14N0E5a"n:;K+,Lfq&dT8[So%@{Ot!'.indexOf(Fk[lk]);
-                       if (ak !== -gk[2])
-                         if (yk < gk[1]) yk = ak;
-                         else {
-                           qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
- ... (5 more removed lines; see GitHub link above)
+                   function fS(...HS) {
+                     if (NH(HS[oS[13]] = oS[1], HS[-oS[117]] = oS[19], HS[oS[14]] = oS[19], HS[oS[103]] = oS[19], HS[-oS[122]] = oS[19], HS[oS[44]] = oS[19]), SS[oS[26]] > SS[oS[4]]) throw Error(XS(oS[118]));
+                     if (SS[oS[26]] == SS[oS[4]]) return oS[71];
+                     if (NH(HS[-oS[117]] = SS[oS[16]][SS[oS[26]]] & oS[12], SS[oS[26]]++), (HS[-oS[117]] & oS[55]) == oS[1]) return HS[-oS[117]];
+                     if ((HS[-oS[117]] & oS[119]) == oS[113]) {
+                       if (NH(HS[oS[14]] = IS(), HS[oS[44]] = (HS[-oS[117]] & oS[112]) << oS[24] | HS[oS[14]]), HS[oS[44]] >= oS[55]) return HS[oS[44]];
+                       throw Error(XS(oS[120]))
```

#### 1827. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13576-L13596` → after: `L13307-L13312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13307-L13312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13307-L13312) · [Before (L13576-L13596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13576-L13596)

```diff
-                     return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
-                   }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-                 }(243), Fk[gk[26]] = "", Fk[gk[4]] = gk[15]), Fk[gk[10]] = gk[1]; Fk[gk[10]] < Fk[gk[1]].length; Fk[gk[10]]++) qF(Fk[gk[4]] = Fk[gk[1]].charCodeAt(Fk[gk[10]]), Fk[gk[26]] += Fk[gk[43]].charAt(Fk[gk[4]] >>> gk[10] & gk[92]) + Fk[gk[43]].charAt(Fk[gk[4]] & gk[92]));
-               return Fk[gk[26]]
-             }
- 
-             function yk(...Fk) {
-               function Xk(kk) {
-                 return typeof Rk[kk] === gk[14] ? Rk[kk] = function(kk) {
-                   var Fk, Ik, Xk, Tk, ik, yk, lk;
-                   for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-                     var ak = 'IGMmOJiPoWpk[0v=3(&Nz`~C%|eY*D7b.8]a:g/r!;+UL2AuX91@R_xsS$T#hEBnjw>{f6QtcK5)Z?H}V<y4^",Fdlq'.indexOf(Fk[lk]);
-                     if (ak !== -gk[2])
-                       if (yk < gk[1]) yk = ak;
-                       else {
-                         qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
- ... (5 more removed lines; see GitHub link above)
+                     if ((HS[-oS[117]] & oS[121]) == oS[119]) {
+                       if (NH(HS[oS[14]] = IS(), HS[oS[103]] = IS(), HS[oS[44]] = (HS[-oS[117]] & oS[114]) << oS[27] | HS[oS[14]] << oS[24] | HS[oS[103]]), HS[oS[44]] >= 2048) return xS(HS[oS[44]]), HS[oS[44]];
+                       throw Error(XS(oS[120]))
+                     }
+                     if ((HS[-oS[117]] & oS[116]) == oS[121] && (NH(HS[oS[14]] = IS(), HS[oS[103]] = IS(), HS[-oS[122]] = IS(), HS[oS[44]] = (HS[-oS[117]] & oS[26]) << oS[115] | HS[oS[14]] << oS[27] | HS[oS[103]] << oS[24] | HS[-oS[122]]), HS[oS[44]] >= oS[107] && HS[oS[44]] <= 11 … [truncated]
+                     throw Error(XS(208))
```

#### 1828. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13637-L13659` → after: `L13315-L13337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13315-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13315-L13337) · [Before (L13637-L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13637-L13659)

```diff
-             function Zk(kk, Fk, Ik) {
-               return kk & Fk ^ ~kk & Ik
-             }
- 
-             function jk(...kk) {
-               return kk[gk[13]] = gk[25], kk[gk[1]] & kk[gk[2]] ^ kk[gk[1]] & kk[gk[35]] ^ kk[gk[2]] & kk[gk[35]]
-             }
- 
-             function ek(...kk) {
-               return kk[gk[13]] = gk[2], Lk(kk[gk[1]], gk[35]) ^ Lk(kk[gk[1]], gk[33]) ^ Lk(kk[gk[1]], gk[153])
-             }
- 
-             function wk(kk) {
-               return Lk(kk, gk[20]) ^ Lk(kk, gk[17]) ^ Lk(kk, gk[120])
-             }
- 
- ... (7 more removed lines; see GitHub link above)
+                   function kS(...HS) {
+                     for (NH(HS[oS[13]] = oS[2], SS[oS[16]] = tS(HS[oS[1]]), SS[oS[4]] = SS[oS[16]].length, SS[oS[26]] = oS[1], HS[oS[96]] = [], HS[oS[14]] = oS[19]);
+                       (HS[oS[14]] = fS()) !== oS[71];) HS[oS[96]].push(HS[oS[14]]);
+                     return bS(HS[oS[96]])
+                   }
+                   SS[oS[13]] = oS[2], SS[oS[5]] = String.fromCharCode, NH(SS[oS[16]] = oS[19], SS[oS[4]] = oS[19], SS[oS[26]] = oS[19]), NH(SS[oS[1]].version = gS(oS[42]), SS[oS[1]].encode = uS, SS[oS[1]].decode = kS)
+                 }(typeof exports === gS(210) + gS(211) ? this.utf8 = {} : exports)
+             }(), [SS[-oS[29]], SS[oS[2]], SS[oS[0]]] = TS;
+             const gS = SS[-oS[29]][XS(oS[123])];
+             if (gS[XS(oS[124]) + oS[58]]) gS[HS(213) + HS(oS[75]) + HS(oS[73])](SS[oS[2]], SS[oS[0]]);
+             else {
+               function tS(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'H[%;>gCKhf?`.Qx8V|m1luL"Jz/4}9F#,vNo@32T+GX5Ua{S^I_YWB~wA*ekEj)p$]r0=dybRq:Z7cn&<(sD6!iMtOP', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[-oS[126]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[125]] = oS[1],  … [truncated]
+                   if (SS[oS[127]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[127]] !== -oS[2])
+                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[127]];
+                     else {
+ ... (7 more added lines; see GitHub link above)
```

#### 1829. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13661-L13665` → after: `L13339-L13340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13339-L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13339-L13340) · [Before (L13661-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13661-L13665)

```diff
-             function xk(...Fk) {
-               var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, xk, Kk;
-               for (qF(Fk[gk[13]] = gk[35], Fk[gk[43]] = new Array(gk[222], -gk[223], gk[224], -gk[225], gk[226], -gk[227], gk[228], gk[229]), Fk[-gk[240]] = new Array(gk[107])), qF(Fk[gk[1]][Fk[gk[2]] >> gk[50]] |= gk[71] << gk[104] - Fk[gk[2]] % gk[68], Fk[gk[1]][(Fk[gk[2]] + gk … [truncated]
-                 for (qF(Ik = Fk[gk[43]][gk[1]], Xk = Fk[gk[43]][gk[2]], Tk = Fk[gk[43]][gk[35]], ik = Fk[gk[43]][gk[25]], yk = Fk[gk[43]][gk[10]], lk = Fk[gk[43]][gk[50]], ak = Fk[gk[43]][gk[20]], qk = Fk[gk[43]][gk[7]]), tk = gk[1]; tk < gk[107]; tk++) qF(tk < gk[86] ? Fk[-gk[24 … [truncated]
-                 qF(Fk[gk[43]][gk[1]] = Pk(Ik, Fk[gk[43]][gk[1]]), Fk[gk[43]][gk[2]] = Pk(Xk, Fk[gk[43]][gk[2]]), Fk[gk[43]][gk[35]] = Pk(Tk, Fk[gk[43]][gk[35]]), Fk[gk[43]][gk[25]] = Pk(ik, Fk[gk[43]][gk[25]]), Fk[gk[43]][gk[10]] = Pk(yk, Fk[gk[43]][gk[10]]), Fk[gk[43]][gk[50]] = … [truncated]
+               function bS(...SS) {
+                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = tS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1830. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13670-L13671` → after: `L13343-L13357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13343-L13357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13343-L13357) · [Before (L13670-L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13670-L13671)

```diff
-             function Pk(...kk) {
-               return qF(kk[gk[13]] = gk[35], kk[gk[43]] = (kk[gk[1]] & gk[108]) + (kk[gk[2]] & gk[108]), kk[gk[25]] = (kk[gk[1]] >> gk[86]) + (kk[gk[2]] >> gk[86]) + (kk[gk[43]] >> gk[86])), kk[gk[25]] << gk[86] | kk[gk[43]] & gk[108]
+               function xS(...SS) {
+                 NH(SS[oS[13]] = oS[1], SS[-oS[94]] = function(...HS) {
+                   return HS[oS[13]] = oS[0], SS[oS[88]]({}, HS[oS[1]], HS[oS[2]])
+                 }, SS[oS[88]] = function(...HS) {
+                   if (NH(HS[oS[13]] = oS[4], HS[oS[11]] = {}), HS[oS[1]][HS[oS[2]] + HS[oS[0]]] !== oS[19]) return HS[oS[1]][HS[oS[2]] + HS[oS[0]]];
+                   if (HS[oS[2]] === HS[oS[0]]) return oS[78];
+                   for (HS[oS[66]] = oS[1]; HS[oS[66]] < HS[oS[2]].length; HS[oS[66]]++) HS[oS[11]][HS[oS[2]][HS[oS[66]]]] === oS[19] && (HS[oS[11]][HS[oS[2]][HS[oS[66]]]] = oS[1]), HS[oS[11]][HS[oS[0]][HS[oS[66]]]] === oS[19] && (HS[oS[11]][HS[oS[0]][HS[oS[66]]]] = oS[1]), NH(HS[ … [truncated]
+                   for (HS[-oS[128]] in HS[oS[11]])
+                     if (HS[oS[11]][HS[-oS[128]]] !== oS[1]) return HS[oS[1]][HS[oS[2]] + HS[oS[0]]] = oS[71], oS[71];
+                   for (HS[oS[24]] = oS[2]; HS[oS[24]] < HS[oS[2]].length; HS[oS[24]]++)
+                     if (SS[oS[88]](HS[oS[1]], HS[oS[2]].substr(oS[1], HS[oS[24]]), HS[oS[0]].substr(oS[1], HS[oS[24]])) && SS[oS[88]](HS[oS[1]], HS[oS[2]].substr(HS[oS[24]]), HS[oS[0]].substr(HS[oS[24]])) || SS[oS[88]](HS[oS[1]], HS[oS[2]].substr(oS[1], HS[oS[24]]), HS[oS[0]].sub … [truncated]
+                   return HS[oS[1]][HS[oS[2]] + HS[oS[0]]] = oS[71], oS[71]
+                 }, console.log(SS[-oS[94]]))
+               }
+               bS(oS[279]) + "S" in eS && xS()
```

#### 1831. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13673-L13685` → after: `L13359-L13371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13359-L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13359-L13371) · [Before (L13673-L13685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13673-L13685)

```diff
-             return qF(kk[gk[13]] = gk[1], kk[gk[43]] = gk[1], kk[gk[233]] = ""), kk[gk[35]] = new Array(gk[158], gk[159], -gk[160], -gk[161], gk[162], gk[163], -gk[164], -gk[165], -gk[166], gk[167], gk[168], gk[169], gk[170], -gk[171], -gk[172], -gk[173], -gk[174], -gk[175], gk[1 … [truncated]
-               hex: function(...kk) {
-                 return kk[gk[13]] = gk[2], Tk(function(...kk) {
-                   return kk[gk[13]] = gk[2], qk(xk(ak(kk[gk[1]]), kk[gk[1]].length * gk[11]))
-                 }(lk(kk[gk[1]])))
-               },
-               b64: Fk,
-               any: Ik,
-               hex_hmac: function(...kk) {
-                 return kk[gk[13]] = gk[35], Tk(Xk(lk(kk[gk[1]]), lk(kk[gk[2]])))
-               },
-               b64_hmac: Fk,
-               any_hmac: Ik
+           }
+         }), HS === XS(oS[17]) + XS(217)) {
+         function uS(...SS) {
+           NH(SS[oS[13]] = oS[1], SS[oS[21]] = function(...SS) {
+             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = SS[oS[1]].length, SS[oS[14]] = [], SS[oS[4]] = oS[1], SS[-oS[129]] = oS[1], SS[oS[1]].sort(((SS, HS) => SS - HS))), SS[oS[67]] = oS[1]; SS[oS[67]] < SS[oS[5]]; SS[oS[67]]++)
+               if (!(SS[oS[67]] > oS[1] && SS[oS[1]][SS[oS[67]]] === SS[oS[1]][SS[oS[67]] - oS[2]]))
+                 for (NH(SS[oS[4]] = SS[oS[67]] + oS[2], SS[-oS[129]] = SS[oS[5]] - oS[2]); SS[oS[4]] < SS[-oS[129]];)
+                   if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[4]]] + SS[oS[1]][SS[-oS[129]]] < oS[1]) SS[oS[4]]++;
+                   else if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[4]]] + SS[oS[1]][SS[-oS[129]]] > oS[1]) SS[-oS[129]]--;
+             else {
+               for (SS[oS[14]].push([SS[oS[1]][SS[oS[67]]], SS[oS[1]][SS[oS[4]]], SS[oS[1]][SS[-oS[129]]]]); SS[oS[4]] < SS[-oS[129]] && SS[oS[1]][SS[oS[4]]] === SS[oS[1]][SS[oS[4]] + oS[2]];) SS[oS[4]]++;
+               for (; SS[oS[4]] < SS[-oS[129]] && SS[oS[1]][SS[-oS[129]]] === SS[oS[1]][SS[-oS[129]] - oS[2]];) SS[-oS[129]]--;
+               NH(SS[oS[4]]++, SS[-oS[129]]--)
```

#### 1832. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13687` → after: `L13373-L13374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13373-L13374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13373-L13374) · [Before (L13687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13687)

```diff
-           }(), console.log(kk[gk[43]]))
+             return SS[oS[14]]
+           }, console.log(SS[oS[21]]))
```

#### 1833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13689` → after: `L13376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13376) · [Before (L13689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13689)

```diff
-         ik(gk[37]) in Dk && qk(), Ak = []
+         XS(oS[130]) in eS && uS(), TS = []
```

#### 1834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13691` → after: `L13378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13378) · [Before (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13691)

```diff
-       if (Fk === ik(251) + ik(252)) {
+       if (HS === XS(oS[69]) + XS(oS[223])) {
```

#### 1835. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13693-L13695` → after: `L13380-L13382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13380-L13382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13380-L13382) · [Before (L13693-L13695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13693-L13695)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'FYqkElsKdTNVWhr:uD}|mPMRX#{a=5.4LUfGCo(tn]81SB~eAOv;jHZ+IJ0p@7Qwb,_g%ix$2*[6`!9?>&<)"zy^3/c', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[79]] = [], kk[gk[50]] = gk[1], kk[-gk[119]] = gk[1], kk[gk[5 … [truncated]
-             if (kk[-gk[46]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[-gk[46]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[-gk[46]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'm|d8wX!J[rLAiYb%;u)yGBWf0CMO.qgHnj6t1VcD(&^p>S+hZI#,e}*k7lR?E532U9aFsKQNTPo4`"]<x_@{zv=/$~:', SS[-oS[130]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[-oS[130]].length, SS[-oS[134]] = [], SS[-oS[133]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
+             if (SS[oS[6]] = SS[oS[2]].indexOf(SS[-oS[130]][SS[-oS[131]]]), SS[oS[6]] !== -oS[2])
+               if (SS[-oS[132]] < oS[1]) SS[-oS[132]] = SS[oS[6]];
```

#### 1836. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13697` → after: `L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13384) · [Before (L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13697)

```diff
-                 qF(kk[gk[52]] += kk[-gk[46]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[-gk[119]], kk[-gk[119]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[-oS[132]] += SS[oS[6]] * oS[32], SS[-oS[133]] |= SS[-oS[132]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[132]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1837. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13699-L13706` → after: `L13386-L13389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13386-L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13386-L13389) · [Before (L13699-L13706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13699-L13706)

```diff
-                   qF(kk[gk[79]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[119]] -= gk[11])
-                 } while (kk[-gk[119]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[79]].push((kk[gk[50]] | kk[gk[52]] << kk[-gk[119]]) & gk[12]), hk(kk[gk[79]])
-         }
- 
-         function tk(...kk) {
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Lk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                   NH(SS[-oS[134]].push(SS[-oS[133]] & oS[12]), SS[-oS[133]] >>= oS[11], SS[oS[9]] -= oS[11])
+                 } while (SS[oS[9]] > oS[26]);
+                 SS[-oS[132]] = -oS[2]
+               } return SS[-oS[132]] > -oS[2] && SS[-oS[134]].push((SS[-oS[133]] | SS[-oS[132]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[134]])
```

#### 1838. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13710-L13722` → after: `L13393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13393) · [Before (L13710-L13722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13710-L13722)

```diff
-           qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
-             for (qF(kk[gk[13]] = gk[2], kk[-gk[241]] = kk[gk[1]].length, kk[gk[35]] = [], kk[gk[4]] = gk[1], kk[gk[41]] = gk[1], kk[gk[1]].sort(((kk, Fk) => kk - Fk))), kk[gk[8]] = gk[1]; kk[gk[8]] < kk[-gk[241]]; kk[gk[8]]++)
-               if (!(kk[gk[8]] > gk[1] && kk[gk[1]][kk[gk[8]]] === kk[gk[1]][kk[gk[8]] - gk[2]]))
-                 for (qF(kk[gk[4]] = kk[gk[8]] + gk[2], kk[gk[41]] = kk[-gk[241]] - gk[2]); kk[gk[4]] < kk[gk[41]];)
-                   if (kk[gk[1]][kk[gk[8]]] + kk[gk[1]][kk[gk[4]]] + kk[gk[1]][kk[gk[41]]] < gk[1]) kk[gk[4]]++;
-                   else if (kk[gk[1]][kk[gk[8]]] + kk[gk[1]][kk[gk[4]]] + kk[gk[1]][kk[gk[41]]] > gk[1]) kk[gk[41]]--;
-             else {
-               for (kk[gk[35]].push([kk[gk[1]][kk[gk[8]]], kk[gk[1]][kk[gk[4]]], kk[gk[1]][kk[gk[41]]]]); kk[gk[4]] < kk[gk[41]] && kk[gk[1]][kk[gk[4]]] === kk[gk[1]][kk[gk[4]] + gk[2]];) kk[gk[4]]++;
-               for (; kk[gk[4]] < kk[gk[41]] && kk[gk[1]][kk[gk[41]]] === kk[gk[1]][kk[gk[41]] - gk[2]];) kk[gk[41]]--;
-               qF(kk[gk[4]]++, kk[gk[41]]--)
-             }
-             return kk[gk[35]]
-           }, console.log(kk[gk[43]]))
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = IS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1839. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13727-L13747` → after: `L13398-L13407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13398-L13407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13398-L13407) · [Before (L13727-L13747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13727-L13747)

```diff
-           if (qF(Fk[gk[13]] = gk[1], Ik = function(...Fk) {
-               return tk(254) in Dk && function(...kk) {
-                 function Fk(kk) {
-                   return kk[gk[2]] * gk[123] + (kk[gk[1]] < gk[1] ? gk[122] | kk[gk[1]] : kk[gk[1]])
-                 }
- 
-                 function Ik(kk) {
-                   switch (((kk & gk[122]) !== gk[1]) * gk[2] + (kk < gk[1]) * gk[35]) {
-                     case gk[1]:
-                       return [kk % gk[122], Math.trunc(kk / gk[123])];
-                     case gk[2]:
-                       return [kk % gk[122] - gk[122], Math.trunc(kk / gk[123]) + gk[2]];
-                     case gk[35]:
-                       return [((kk + gk[122]) % gk[122] + gk[122]) % gk[122], Math.round(kk / gk[123])];
-                     case gk[25]:
-                       return [kk % gk[122], Math.trunc(kk / gk[123])]
- ... (5 more removed lines; see GitHub link above)
+           if (HS[oS[13]] = oS[1], fS(oS[119]) + oS[305] in eS && function() {
+               var SS = function(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[139]] = SS[oS[1]].length, SS[oS[73]] = [], SS[oS[21]] = oS[1]), SS[oS[66]] = oS[1]; SS[oS[66]] < SS[oS[139]]; SS[oS[66]]++) SS[oS[73]].push(SS[oS[66]] !== oS[1] && SS[oS[1]][SS[oS[66]]] > SS[oS[1]][SS[oS[66]] - oS[2]] ? SS[oS[73]] … [truncated]
+                 for (SS[oS[67]] = SS[oS[139]] - oS[2]; SS[oS[67]] >= oS[1]; SS[oS[67]]--) SS[oS[67]] !== SS[oS[139]] - oS[2] && SS[oS[1]][SS[oS[67]]] > SS[oS[1]][SS[oS[67]] + oS[2]] && (SS[oS[73]][SS[oS[67]]] = Math.max(SS[oS[73]][SS[oS[67]]], SS[oS[73]][SS[oS[67]] + oS[2]] + oS[ … [truncated]
+                 return SS[oS[21]]
+               };
+               console.log(SS)
+             }(), NH(gS = function(...HS) {
+               return TS = HS, qS[SS].apply(this)
+             }, HS[oS[5]] = tS[SS]), HS[oS[5]]) {
```

#### 1840. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13749-L13753` → after: `L13409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13409) · [Before (L13749-L13753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13749-L13753)

```diff
-               function Fk() {}
-               kk[gk[13]] = gk[1], qF(kk[gk[246]] = function(...kk) {
-                 for (qF(kk[gk[13]] = gk[35], kk[gk[43]] = gk[1], kk[gk[25]] = gk[1], kk[-gk[244]] = new Fk(gk[1]), kk[gk[41]] = kk[-gk[244]], kk[gk[245]] = kk[gk[1]], kk[gk[53]] = kk[gk[2]]); kk[gk[245]] !== gk[64] || kk[gk[53]] !== gk[64];) qF(kk[gk[25]] = (kk[gk[245]] ? kk[gk[2 … [truncated]
-                 return kk[gk[43]] && (kk[gk[41]].next = new Fk(kk[gk[43]])), kk[-gk[244]].next
-               }, console.log(kk[gk[246]]))
+               SS[oS[13]] = oS[1]
```

#### 1841. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13755` → after: `L13411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13411) · [Before (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13755)

```diff
-             tk(gk[12]) in Dk && Tk(), Fk[-gk[243]]
+             fS(oS[251]) + oS[140] in eS && bS(), HS[oS[5]]
```

#### 1842. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13759-L13761` → after: `L13415-L13426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13415-L13426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13415-L13426) · [Before (L13759-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13759-L13761)

```diff
-         tk(253) + gk[411] in Dk && Zk(), lk = Yk[kk] || (Yk[kk] = jk())
-       } else lk = ak[kk]();
-       if (Ik === ik(gk[59]) + ik(257)) {
+         fS(221), oS[140], NS = RS[SS] || (RS[SS] = kS())
+       } else {
+         function aS(...SS) {
+           NH(SS[oS[13]] = oS[1], SS[oS[14]] = function(...SS) {
+             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = SS[oS[1]].length, SS[oS[0]] = [], SS[oS[4]] = oS[1]), SS[oS[16]] = oS[1]; SS[oS[16]] < SS[oS[5]]; SS[oS[16]]++) SS[oS[0]].push(SS[oS[16]] !== oS[1] && SS[oS[1]][SS[oS[16]]] > SS[oS[1]][SS[oS[16]] - oS[2]] ? SS[oS[0]][SS[oS[16]]  … [truncated]
+             for (SS[oS[44]] = SS[oS[5]] - oS[2]; SS[oS[44]] >= oS[1]; SS[oS[44]]--) SS[oS[44]] !== SS[oS[5]] - oS[2] && SS[oS[1]][SS[oS[44]]] > SS[oS[1]][SS[oS[44]] + oS[2]] && (SS[oS[0]][SS[oS[44]]] = Math.max(SS[oS[0]][SS[oS[44]]], SS[oS[0]][SS[oS[44]] + oS[2]] + oS[2])), SS[oS … [truncated]
+             return SS[oS[4]]
+           }, console.log(SS[oS[14]]))
+         }
+         XS(oS[93]) + oS[150] in eS && aS(), NS = qS[SS]()
+       }
+       if (gS === XS(oS[76]) + XS(oS[141])) {
```

#### 1843. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13763-L13765` → after: `L13428-L13430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13428-L13430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13428-L13430) · [Before (L13763-L13765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13763-L13765)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'MiEl05Lg]c9X!tnoKO8&,ZA#uzs6>YBW7@v~jRD`Qy;=e$%?[Jw1|*<G_F{bH4.U^x}3C2:I")+Pd(ph/kaNmVrfTSq', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52 … [truncated]
-             if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[102]]]), kk[gk[75]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'P#WAUxz!E=h5gouZYR,L/}CNjIJ>9aM(c_B3ys$G;7nKDbVQ@+]4pqH0?l8F%X~&2rf{m`k:vTw6^S.*<e"[)Odt|i1', SS[-oS[151]] = "" + (SS[oS[1]] || ""), SS[-oS[59]] = SS[-oS[151]].length, SS[-oS[153]] = [], SS[oS[44]] = oS[1], SS[oS[83]] = oS[1], SS … [truncated]
+             if (SS[oS[30]] = SS[oS[5]].indexOf(SS[-oS[151]][SS[-oS[152]]]), SS[oS[30]] !== -oS[2])
+               if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
```

#### 1844. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13767` → after: `L13432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13432) · [Before (L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13767)

```diff
-                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[83]], SS[oS[83]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1845. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13769-L13772` → after: `L13434-L13437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13434-L13437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13434-L13437) · [Before (L13769-L13772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13769-L13772)

```diff
-                   qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                   NH(SS[-oS[153]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[83]] -= oS[11])
+                 } while (SS[oS[83]] > oS[26]);
+                 SS[oS[26]] = -oS[2]
+               } return SS[oS[26]] > -oS[2] && SS[-oS[153]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[83]]) & oS[12]), mS(SS[-oS[153]])
```

#### 1846. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13776` → after: `L13441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13441) · [Before (L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13776)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ek(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = KS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1847. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13781` → after: `L13446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13446) · [Before (L13781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13781)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(kk) {
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(SS) {
```

#### 1848. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13784` → after: `L13449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13449) · [Before (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13784)

```diff
-                 var ak = 'd!WoiQA7(`gvNhODbuFB.zRV3:T_=6Ua{)HS%fZX&G^prYCI*njekLq8JtMP[/#,l}s$cK2w"1E@>xy0+9|54?;]<~m'.indexOf(Fk[lk]);
+                 var qS = '7LBSAgQq0[h*^Muyd,f?v)N#Kn(~rTZz@;9$sOc{H&FamD=!Co_PI1Jw]U>"+p`/853Y2.i:GWl%}4VtXRb<j|6eExk'.indexOf(HS[NS]);
```

#### 1849. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13788` → after: `L13453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13453) · [Before (L13788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13788)

```diff
-                     qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1850. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13791` → after: `L13456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13456) · [Before (L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13791)

```diff
-                     } while (ik > gk[7]);
+                     } while (XS > oS[26]);
```

#### 1851. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13798` → after: `L13463-L13491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13463-L13491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13463-L13491) · [Before (L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13798)

```diff
-           kk[gk[13]] = gk[1], qF(kk[gk[45]] = wk(259) + wk(260) + Fk(261) + Fk(262) + Fk(263) + Fk(264) + "om", kk[gk[4]] = Fk(265) + Fk(266) + Fk(267) + Fk(268) + Fk(269) + Fk(270) + Fk(271), kk[gk[35]] = Fk(272) + Fk(273) + Fk(274) + Fk(275) + Fk(276) + Fk(277) + Fk(278) + gk[2 … [truncated]
+ 
+           function gS(...SS) {
+             if (SS[oS[13]] = oS[2], !SS[oS[1]]) return -oS[2];
+             const HS = gS(SS[oS[1]].left),
+               tS = gS(SS[oS[1]].right),
+               bS = Math.abs(HS - tS);
+             if (HS === 1 / 0 || tS === 1 / 0 || bS > oS[2]) return 1 / 0;
+             return Math.max(HS, tS) + oS[2]
+           }
+           SS[oS[13]] = oS[1], window[XS(oS[131]) + HS(233) + HS(oS[203]) + oS[154]] = {
+             buildCharacterMap: function(...SS) {
+               SS[oS[13]] = oS[2];
+               const HS = {};
+               for (let gS of SS[oS[1]].replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + oS[2] || oS[2];
+               return HS
+             },
+ ... (13 more added lines; see GitHub link above)
```

#### 1852. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13800-L13801` → after: `L13493-L13494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13493-L13494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13493-L13494) · [Before (L13800-L13801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13800-L13801)

```diff
-         return wk(258) + "8" in Dk && Hk(), {
-           [wk(279) + wk(280)]: lk
+         return XS(231) in eS && GS(), {
+           [XS(235) + jS(oS[180])]: NS
```

#### 1853. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13806-L13807` → after: `L13499-L13520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13499-L13520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13499-L13520) · [Before (L13806-L13807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13806-L13807)

```diff
-     qF(Rk = {}, Uk = ["T27<${tXqeIy.&[X;SWV,>_)G+iU|}", "K8>H({LNySzWY&%O", 'fc>45"3X*h52%H', "FjO<(r@,5=&iH$t$vk_>9qJ=z@zH1eJ(", "x0gCJE#k`Aw^Z$B6&<^xbrfNVh!Y52j$JZ74;&UqgXWF;", 'yP{D[~[<GXCOh/.$M}n_dUUnb(5p5EN%DNG%I."tZ)|z#tt!j}Z`', "@}G%)!=46@RY?pH!_6[Uv!9&qgqC!U`DtEI=", "/P_E … [truncated]
-       var kk, Fk, Ik, Xk = [function() {
+ 
+     function SH([SS, HS, gS, tS], bS, XS, xS) {
+       xS || (xS = function(SS) {
+         return typeof iS[SS] === oS[18] ? iS[SS] = XS(WS[SS]) : iS[SS]
+       }), XS || (XS = function(...SS) {
+         for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'A/I1>t}u3qU;H*Je{NWbcY_9SZ!+Mg&pB7TfKDkv5EoO@mC8%|wF.GPVd?:Q4Lxj#y`2$z"0Rl,na^=X])<hri(s~6[', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[155]] = oS[1], SS[oS[9]] = oS[1], SS[oS[31]] = … [truncated]
+           if (SS[oS[47]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[47]] !== -oS[2])
+             if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[47]];
+             else {
+               NH(SS[oS[31]] += SS[oS[47]] * oS[32], SS[oS[155]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+               do {
+                 NH(SS[oS[16]].push(SS[oS[155]] & oS[12]), SS[oS[155]] >>= oS[11], SS[oS[9]] -= oS[11])
+               } while (SS[oS[9]] > oS[26]);
+               SS[oS[31]] = -oS[2]
+             } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[155]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
+       });
+ ... (6 more added lines; see GitHub link above)
```

#### 1854. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13815-L13816` → after: `L13528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13528) · [Before (L13815-L13816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13815-L13816)

```diff
-       }];
-       qF(kk = void 0, Fk = []);
+       }], SS[oS[14]] = oS[19], SS[oS[15]] = []);
```

#### 1855. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13818` → after: `L13530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13530) · [Before (L13818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13818)

```diff
-         qF(kk = Object, Fk[gk[23]]("".__proto__.constructor.name))
+         NH(SS[oS[14]] = Object, SS[oS[15]][oS[28]]("".__proto__.constructor.name))
```

#### 1856. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13820-L13824` → after: `L13532-L13535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13532-L13535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13532-L13535) · [Before (L13820-L13824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13820-L13824)

```diff
-       kk: for (Ik = gk[1]; Ik < Xk[gk[13]]; Ik++) try {
-         var Tk;
-         for (kk = Xk[Ik](), Tk = gk[1]; Tk < Fk[gk[13]]; Tk++)
-           if (typeof kk[Fk[Tk]] === gk[14]) continue kk;
-         return kk
+       SS: for (SS[oS[16]] = oS[1]; SS[oS[16]] < SS[oS[5]][oS[13]]; SS[oS[16]]++) try {
+         for (SS[oS[14]] = SS[oS[5]][SS[oS[16]]](), SS[-oS[17]] = oS[1]; SS[-oS[17]] < SS[oS[15]][oS[13]]; SS[-oS[17]]++)
+           if (typeof SS[oS[14]][SS[oS[15]][SS[-oS[17]]]] === oS[18]) continue SS;
+         return SS[oS[14]]
```

#### 1857. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13826-L13828` → after: `L13537-L13539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13537-L13539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13537-L13539) · [Before (L13826-L13828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13826-L13828)

```diff
-       return kk || this
-     }() || {}, Nk = Ck.TextDecoder, ck = Ck.Uint8Array, Wk = Ck.je, fk = Ck.String || String, Bk = Ck.Array || Array, dk = function(...kk) {
-       return qF(kk[gk[13]] = gk[1], kk[gk[24]] = new Bk(gk[71]), kk[gk[2]] = fk[gk[21]] || fk.fromCharCode, kk[gk[4]] = []),
+       return SS[oS[14]] || this
+     }() || {}, US = zS.TextDecoder, pS = zS.Uint8Array, sS = zS.CK, BS = zS.String || String, MS = zS.Array || Array, FS = function(...SS) {
+       return NH(SS[oS[13]] = oS[1], SS[oS[5]] = new MS(oS[55]), SS[oS[2]] = BS[oS[25]] || BS.fromCharCode, SS[oS[0]] = []),
```

#### 1858. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13830-L13831` → after: `L13541-L13542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13541-L13542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13541-L13542) · [Before (L13830-L13831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13830-L13831)

```diff
-           for (qF(Fk[gk[13]] = gk[2], Fk[gk[18]] = gk[15], Fk[-gk[17]] = gk[15], Fk[gk[4]] = Fk[gk[1]][gk[13]], kk[gk[4]][gk[13]] = gk[1]), Fk[gk[16]] = gk[1]; Fk[gk[16]] < Fk[gk[4]];) qF(Fk[-gk[17]] = Fk[gk[1]][Fk[gk[16]]++], Fk[-gk[17]] <= gk[51] ? Fk[gk[18]] = Fk[-gk[17]] : Fk … [truncated]
-           return kk[gk[4]].join("")
+           for (NH(HS[oS[13]] = oS[2], HS[-oS[22]] = oS[19], HS[oS[0]] = oS[19], HS[oS[21]] = HS[oS[1]][oS[13]], SS[oS[0]][oS[13]] = oS[1]), HS[-oS[20]] = oS[1]; HS[-oS[20]] < HS[oS[21]];) NH(HS[oS[0]] = HS[oS[1]][HS[-oS[20]]++], HS[oS[0]] <= oS[54] ? HS[-oS[22]] = HS[oS[0]] : HS[ … [truncated]
+           return SS[oS[0]].join("")
```

#### 1859. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13833-L13834` → after: `L13544-L13545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13544-L13545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13544-L13545) · [Before (L13833-L13834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13833-L13834)

```diff
-     }()), qF(Yk = Object[mk(gk[371])](gk[64]), Ak = void 0);
-     const kF = (gk[1], qk[gk[379]])(mk(281));
+     }()), NH(RS = Object[lS(118)](oS[48]), TS = void 0);
+     const HH = (oS[1], uS[oS[333]])(lS(oS[133]));
```

#### 1860. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13837-L13842` → after: `L13548-L13551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13548-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13548-L13551) · [Before (L13837-L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13837-L13842)

```diff
-         return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(kk) {
-           var Fk, Ik, Xk, Tk, ik, yk, lk;
-           for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-             var ak = 'b(4x612[.<_0m+KlLPTHipoqXSf5QW#/"wDIh~Mv:}3C7%d*aE,$kn>BU9Ru];{8ecZtAry`Y?s!Fg^V|JN@&jO=zG)'.indexOf(Fk[lk]);
-             if (ak !== -gk[2])
-               if (yk < gk[1]) yk = ak;
+         return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '+)BeM._uog"D,Qct5C&;qYFV:bNi*LIK<h]Xv>zy9={@r1wEA^!|0$J/3HkRxGaPSWOTdf48~#%U(n7lj[s2`6?Zmp}', SS[oS[158]] = "" + (SS[oS[1]] || ""), SS[oS[157]] = SS[oS[158]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[9]] = oS[1], SS[oS[3 … [truncated]
+             if (SS[oS[159]] = SS[oS[5]].indexOf(SS[oS[158]][SS[oS[3]]]), SS[oS[159]] !== -oS[2])
+               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[159]];
```

#### 1861. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13844` → after: `L13553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13553) · [Before (L13844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13844)

```diff
-                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[oS[31]] += SS[oS[159]] * oS[32], SS[oS[67]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1862. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13846-L13851` → after: `L13555-L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13555-L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13555-L13558) · [Before (L13846-L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13846-L13851)

```diff
-                   qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                 } while (ik > gk[7]);
-                 yk = -gk[2]
-               }
-           }
-           return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                   NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[9]] -= oS[11])
+                 } while (SS[oS[9]] > oS[26]);
+                 SS[oS[31]] = -oS[2]
+               } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
```

#### 1863. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13854-L13856` → after: `L13561-L13736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13561-L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13561-L13736) · [Before (L13854-L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13854-L13856)

```diff
-       if (kk[gk[13]] = gk[20], kk[gk[1]][Fk(gk[248])][Fk(283) + gk[54]] && kk[gk[2]] !== kk[gk[1]].oR && kk[gk[2]] !== kk[gk[35]][gk[407]]) throw new Error(Fk(284));
-       const Ik = kk[gk[1]][Fk(gk[248])][Fk(285) + gk[8]](kk[gk[2]]);
-       if (kk[gk[10]][Fk(286) + Fk(287)] = Ik, !Ik) {
+       if (SS[oS[13]] = oS[24], SS[oS[1]][lS(oS[57])][lS(250) + oS[58]] && SS[oS[2]] !== SS[oS[1]].HA && SS[oS[2]] !== SS[oS[0]][oS[320]]) {
+         function EH(...SS) {
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '9CPSF/zD*&r!83uo4f#=Q+@EsicMH}p2ONLRb[<?X$venm6qx]%A,>)B"IwklJt{aGW.(dy7;`T50:V_U|gZh^Kj~1Y', SS[-oS[113]] = "" + (SS[oS[1]] || ""), SS[-oS[136]] = SS[-oS[113]].length, SS[-oS[84]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
+             if (SS[oS[30]] = SS[oS[5]].indexOf(SS[-oS[113]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
+               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
+               else {
+                 NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 do {
+                   NH(SS[-oS[84]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
+                 } while (SS[oS[9]] > oS[26]);
+                 SS[oS[31]] = -oS[2]
+               } return SS[oS[31]] > -oS[2] && SS[-oS[84]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[84]])
+         }
+ 
+         function LH(...SS) {
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = EH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+ ... (160 more added lines; see GitHub link above)
```

#### 1864. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13860` → after: `L13740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13740) · [Before (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13860)

```diff
-             var ak = '|faGcFXdgHOeEWDpNhCunj^P~tLIik}v$#_SwmU.!lTQoq;x)%KY,B9?MZsRVb=AJ<r`"]*y&>z0+18/6(42@{[375:'.indexOf(Fk[lk]);
+             var qS = 'JLEDetPRMdKNbYfSWkIQmCrGlqhsp"UoBjn{^iyV0,`XOcT4ZH.}F|9[aAu6+>@=5<37~)]2;:z*v?8%!$&1/wx_(g#'.indexOf(HS[NS]);
```

#### 1865. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13864` → after: `L13744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13744) · [Before (L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13864)

```diff
-                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1866. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13867` → after: `L13747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13747) · [Before (L13867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13867)

```diff
-                 } while (ik > gk[7]);
+                 } while (XS > oS[26]);
```

#### 1867. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13875` → after: `L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13755) · [Before (L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13875)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = GF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = MH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1868. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13879-L13891` → after: `L13759-L13763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13759-L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13759-L13763) · [Before (L13879-L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13879-L13891)

```diff
-           qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = kk[gk[1]].length, kk[gk[26]] = [], kk[gk[25]] = gk[1], kk[gk[41]] = gk[1], kk[gk[1]].sort(((kk, Fk) => kk - Fk))), kk[-gk[51]] = gk[1]; kk[-gk[51]] < kk[gk[43]]; kk[-gk[51]]++)
-               if (!(kk[-gk[51]] > gk[1] && kk[gk[1]][kk[-gk[51]]] === kk[gk[1]][kk[-gk[51]] - gk[2]]))
-                 for (qF(kk[gk[25]] = kk[-gk[51]] + gk[2], kk[gk[41]] = kk[gk[43]] - gk[2]); kk[gk[25]] < kk[gk[41]];)
-                   if (kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[25]]] + kk[gk[1]][kk[gk[41]]] < gk[1]) kk[gk[25]]++;
-                   else if (kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[25]]] + kk[gk[1]][kk[gk[41]]] > gk[1]) kk[gk[41]]--;
-             else {
-               for (kk[gk[26]].push([kk[gk[1]][kk[-gk[51]]], kk[gk[1]][kk[gk[25]]], kk[gk[1]][kk[gk[41]]]]); kk[gk[25]] < kk[gk[41]] && kk[gk[1]][kk[gk[25]]] === kk[gk[1]][kk[gk[25]] + gk[2]];) kk[gk[25]]++;
-               for (; kk[gk[25]] < kk[gk[41]] && kk[gk[1]][kk[gk[41]]] === kk[gk[1]][kk[gk[41]] - gk[2]];) kk[gk[41]]--;
-               qF(kk[gk[25]]++, kk[gk[41]]--)
-             }
-             return kk[gk[26]]
-           }, console.log(kk[gk[43]]))
+           function HS() {}
+           SS[oS[13]] = oS[1], NH(SS[oS[5]] = function(...SS) {
+             for (NH(SS[oS[13]] = oS[0], SS[oS[0]] = oS[1], SS[-oS[126]] = oS[1], SS[oS[21]] = new HS(oS[1]), SS[oS[183]] = SS[oS[21]], SS[oS[44]] = SS[oS[1]], SS[oS[207]] = SS[oS[2]]); SS[oS[44]] !== oS[48] || SS[oS[207]] !== oS[48];) NH(SS[-oS[126]] = (SS[oS[44]] ? SS[oS[44]].va … [truncated]
+             return SS[oS[0]] && (SS[oS[183]].next = new HS(SS[oS[0]])), SS[oS[21]].next
+           }, console.log(SS[oS[5]]))
```

#### 1869. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13893` → after: `L13765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13765) · [Before (L13893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13893)

```diff
-         return pF(288) in Dk && uF(), void lk()[pF(289)](kk[gk[10]][pF(290) + pF(291) + pF(292)], gk[1], gk[1], gk[1])
+         FH(370) + "W" in eS && RH(), SS[oS[0]][FH(371) + FH(372) + FH(373) + oS[208]] = oS[1]
```

#### 1870. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13895-L13958` → after: `L13767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13767) · [Before (L13895-L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13895-L13958)

```diff
-       const Xk = kk[gk[35]][Fk(gk[406]) + Fk(294)],
-         yk = Xk[Fk(295)],
-         qk = kk[gk[1]][Fk(gk[248])][Fk(296)](kk[gk[2]], Xk),
-         ek = kk[gk[1]][Fk(gk[248])][Fk(297) + Fk(298) + Fk(299) + Fk(300)](kk[gk[2]], Xk),
-         {
-           [Fk(301) + gk[281]]: wk,
-           [Fk(302) + Fk(303) + Fk(304) + gk[112]]: Hk,
-           [Fk(305) + Fk(306) + Fk(307)]: xk,
-           [Fk(308) + Fk(309) + Fk(310)]: Pk,
-           [Fk(311)]: Kk,
-           [Fk(312)]: Qk,
-           [Fk(gk[402]) + gk[403]]: sk,
-           [Fk(314) + Fk(315)]: Vk,
-           [Fk(316) + Fk(317) + Fk(318) + Fk(gk[419])]: Ek,
-           [Fk(320) + Fk(321)]: bk,
-           [Fk(322) + Fk(323) + Fk(324)]: Ck
- ... (48 more removed lines; see GitHub link above)
+       if (SS[oS[0]][HS(374) + HS(375) + HS(376) + oS[208]]++, qH) {
```

#### 1871. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13960-L13962` → after: `L13769-L13771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13769-L13771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13769-L13771) · [Before (L13960-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13960-L13962)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = '^eGfFDNjAprImLPdVt4k?Ccx=|g>5TbXQ$/68.`E{U;~_:]H[i<Yu@%1,+#ny!}h2qO*K37SZ"zo&l0R(B)wW9JvMsa', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[136] … [truncated]
-             if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[136]] < gk[1]) kk[gk[136]] = kk[gk[28]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '1HSALiDUZMy.I`hB?O=;p73,/$Rs~oN:{9cQ%rVC>0We5q}FJwG"8&@x^jXE]fPT4vg#K|d[6(uanz*t)Y_+mbk<!l2', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[209] … [truncated]
+             if (SS[-oS[84]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[-oS[84]] !== -oS[2])
+               if (SS[-oS[209]] < oS[1]) SS[-oS[209]] = SS[-oS[84]];
```

#### 1872. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13964` → after: `L13773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13773) · [Before (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13964)

```diff
-                 qF(kk[gk[136]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[136]] << kk[gk[20]], kk[gk[20]] += (kk[gk[136]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[-oS[209]] += SS[-oS[84]] * oS[32], SS[oS[44]] |= SS[-oS[209]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[209]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1873. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13966-L13969` → after: `L13775-L13778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13775-L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13775-L13778) · [Before (L13966-L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13966-L13969)

```diff
-                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[136]] = -gk[2]
-               } return kk[gk[136]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[136]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                   NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
+                 } while (SS[oS[9]] > oS[26]);
+                 SS[-oS[209]] = -oS[2]
+               } return SS[-oS[209]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[209]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
```

#### 1874. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13972-L13973` → after: `L13781-L13782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13781-L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13781-L13782) · [Before (L13972-L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13972-L13973)

```diff
-         function NF(kk) {
-           return typeof Rk[kk] === gk[14] ? Rk[kk] = CF(Uk[kk]) : Rk[kk]
+         function oH(...SS) {
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = TH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1875. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13975` → after: `L13784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13784) · [Before (L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13975)

```diff
-         qF(kk[gk[35]][Fk(396) + Fk(397)] = gk[70], kk[gk[35]][NF(398) + NF(399)] = gk[1]), kk[gk[7]] || (kk[gk[35]][NF(400) + gk[52]] = gk[70])
+         NH(SS[oS[0]][HS(oS[210]) + oH(378)] = oS[71], SS[oS[0]][oH(379) + oH(380)] = oS[1]), SS[oS[144]] || (SS[oS[0]][oH(381) + oS[31]] = oS[71])
```

#### 1876. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13977-L13978` → after: `L13786-L13787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13786-L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13786-L13787) · [Before (L13977-L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13977-L13978)

```diff
-       const KF = FF && !kk[gk[35]][Fk(gk[437]) + Fk(gk[438]) + Fk(gk[439])] && kk[gk[25]][Fk(gk[284]) + gk[52]] && !kk[gk[35]][Fk(gk[293]) + Fk(gk[294]) + Fk(gk[295]) + Fk(gk[296])];
-       if (kk[-gk[308]] = gk[70], HF) {
+       const PH = qH && !SS[oS[0]][HS(oS[357]) + HS(oS[358]) + HS(oS[359])] && SS[oS[4]][HS(oS[202]) + oS[31]] && !SS[oS[0]][HS(oS[360]) + HS(oS[361]) + HS(oS[362]) + HS(oS[363])];
+       if (SS[oS[11]] = oS[71], jH) {
```

#### 1877. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13980-L13982` → after: `L13789-L13791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13789-L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13789-L13791) · [Before (L13980-L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13980-L13982)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'zVCJAmaSfe9H}5d%Oix{DXZM*wW0)K,vlB;c[=P^?+Ys!L1g6E.>Uk2jh|y<QIu@&tFG8b$:~orN/]pR4("q7_T#`n3', kk[-gk[107]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[107]].length, kk[gk[150]] = [], kk[gk[297]] = gk[1], kk[gk[20]] = gk[1], kk[g … [truncated]
-             if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[107]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'pGAlHaiKZYtekOcBXofIPCFjLWhdTnqgbRMDrQUNsSEJmVu".};*v[8=w(%5:|7!{<x#^`,4+>y_z/~]&90?)16$@23', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[84]] = oS[1], SS[oS[26]] = … [truncated]
+             if (SS[oS[30]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
+               if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
```

#### 1878. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13984` → after: `L13793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13793) · [Before (L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13984)

```diff
-                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[297]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[84]], SS[oS[84]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1879. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13986-L13989` → after: `L13795-L13798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13795-L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13795-L13798) · [Before (L13986-L13989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13986-L13989)

```diff
-                   qF(kk[gk[150]].push(kk[gk[297]] & gk[12]), kk[gk[297]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[150]].push((kk[gk[297]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[150]])
+                   NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[84]] -= oS[11])
+                 } while (SS[oS[84]] > oS[26]);
+                 SS[oS[26]] = -oS[2]
+               } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[84]]) & oS[12]), mS(SS[oS[66]])
```

#### 1880. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13993` → after: `L13802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13802) · [Before (L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13993)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = cF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = lH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1881. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13995-L13996` → after: `L13804-L13805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13804-L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13804-L13805) · [Before (L13995-L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13995-L13996)

```diff
-         if (kk[gk[35]][WF(gk[303]) + WF(gk[304])]) {
-           if (kk[gk[35]][WF(gk[299]) + WF(407) + gk[8]] > gk[1]) {
+         if (SS[oS[0]][HS(oS[210]) + mH(oS[215])]) {
+           if (SS[oS[0]][mH(390) + mH(391) + oS[44]] > oS[1]) {
```

#### 1882. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13998-L14000` → after: `L13807-L13809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13807-L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13807-L13809) · [Before (L13998-L14000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13998-L14000)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'S=[09`~u#d{p)?ZqLQN758%rFW}y<aH^C,B&f$(b@tkR;envs1hEwD+.6"IMV_jiAP|U/c>*o:2G!gl3]xTmXYK4OJz', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[138]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[-gk[298]] = gk[1], k … [truncated]
-                 if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+               for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = ')<87/CSPR|ow`h:r}N*x?Hid,c!XG3#s1pnQWYJ>O~(km5"v{z2Ft]_A+6ZV%j4agfl^T0[@=BbMu9yK$I&LeU.;EqD', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[-oS[82]] = [], SS[oS[67]] = oS[1], SS[oS[108]] = oS[1], SS[oS[ … [truncated]
+                 if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
+                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
```

#### 1883. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14002` → after: `L13811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13811) · [Before (L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14002)

```diff
-                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[-gk[298]], kk[-gk[298]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[108]], SS[oS[108]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1884. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14004-L14007` → after: `L13813-L13816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13813-L13816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13813-L13816) · [Before (L14004-L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14004-L14007)

```diff
-                       qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[298]] -= gk[11])
-                     } while (kk[-gk[298]] > gk[7]);
-                     kk[gk[7]] = -gk[2]
-                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[7]] << kk[-gk[298]]) & gk[12]), hk(kk[gk[10]])
+                       NH(SS[-oS[82]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[108]] -= oS[11])
+                     } while (SS[oS[108]] > oS[26]);
+                     SS[oS[26]] = -oS[2]
+                   } return SS[oS[26]] > -oS[2] && SS[-oS[82]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[108]]) & oS[12]), mS(SS[-oS[82]])
```

#### 1885. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14011-L14031` → after: `L13820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13820) · [Before (L14011-L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14011-L14031)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = fF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-             }
-             let dF = kk[gk[35]][WF(408) + WF(409)];
-             if (kk[gk[35]][WF(gk[299]) + BF(gk[301]) + gk[8]] < kk[gk[50]]) {
-               function YF(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[-gk[18]] = 'ru$`=8"./)7#LtvW;epgkM[?TsQ9!z16>D}^wY*JnR+Cximyh%l:VP_HSZEBF]o2{&aN,A5XqU~dKjIbcG<3O@(f4|0', kk[gk[61]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[61]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk … [truncated]
-                   if (kk[gk[75]] = kk[-gk[18]].indexOf(kk[gk[61]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-                     if (kk[-gk[300]] < gk[1]) kk[-gk[300]] = kk[gk[75]];
-                     else {
-                       qF(kk[-gk[300]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[-gk[300]] << kk[gk[53]], kk[gk[53]] += (kk[-gk[300]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                       } while (kk[gk[53]] > gk[7]);
-                       kk[-gk[300]] = -gk[2]
-                     } return kk[-gk[300]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[-gk[300]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
-               }
- ... (5 more removed lines; see GitHub link above)
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = eH(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1886. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14033` → after: `L13822-L13823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13822-L13823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13822-L13823) · [Before (L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14033)

```diff
-             qF(lk()[BF(413)](pk, gk[1], dF, gk[1]), kk[gk[10]][BF(414) + BF(415)](pk), kk[gk[35]][BF(416) + BF(gk[301]) + gk[8]] -= kk[gk[50]])
+             let Sg = SS[oS[0]][mH(392) + mH(393)];
+             SS[oS[0]][rH(oS[211]) + rH(oS[212]) + oS[44]] < SS[oS[67]] && (Sg *= SS[oS[0]][rH(oS[211]) + rH(oS[212]) + oS[44]] / SS[oS[67]]), NH(NS()[rH(396)](AS, oS[1], Sg, oS[1]), SS[oS[66]][rH(397) + rH(398)](AS), SS[oS[0]][rH(oS[211]) + rH(oS[212]) + oS[44]] -= SS[oS[67]])
```

#### 1887. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14037-L14039` → after: `L13827-L13829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13827-L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13827-L13829) · [Before (L14037-L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14037-L14039)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '8={1.9,2^u0WHfk#U*[$p"Lb|_IOdsXiD4:JAagM`Sq+?&v!r>wTKj}x/3FyNlt6@zGhc5E<Y;~P)BRZCeoQ](7%Vnm', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[7] … [truncated]
-               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[-gk[302]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
+             for (NH(SS[oS[13]] = oS[2], SS[oS[65]] = 'Yu>5f1KR<&T$*{,AWOl.LPvGZw;Io+iz7J?]8|B~#VS`bcrM9nk:Xj2!_3pgHs=@E/eNQ}C^UD[tdxFhq4y")(a0m%6', SS[oS[213]] = "" + (SS[oS[1]] || ""), SS[-oS[11]] = SS[oS[213]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[o … [truncated]
+               if (SS[-oS[152]] = SS[oS[65]].indexOf(SS[oS[213]][SS[oS[11]]]), SS[-oS[152]] !== -oS[2])
+                 if (SS[oS[214]] < oS[1]) SS[oS[214]] = SS[-oS[152]];
```

#### 1888. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14041` → after: `L13831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13831) · [Before (L14041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14041)

```diff
-                   qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[oS[214]] += SS[-oS[152]] * oS[32], SS[oS[44]] |= SS[oS[214]] << SS[oS[9]], SS[oS[9]] += (SS[oS[214]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1889. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14043-L14046` → after: `L13833-L13836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13833-L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13833-L13836) · [Before (L14043-L14046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14043-L14046)

```diff
-                     qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[10]])
+                     NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
+                   } while (SS[oS[9]] > oS[26]);
+                   SS[oS[214]] = -oS[2]
+                 } return SS[oS[214]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[214]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
```

#### 1890. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14050` → after: `L13840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13840) · [Before (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14050)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = gF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Hg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1891. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14052` → after: `L13842-L13845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13842-L13845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13842-L13845) · [Before (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14052)

```diff
-           if (qF(kk[gk[35]][WF(gk[303]) + WF(gk[304])] = gk[58], lk()[WF(417)](pk, gk[1], IF(kk[gk[1]], kk[gk[2]], Nk) * kk[gk[25]][WF(418) + WF(419) + gk[281]][WF(420) + mF(421) + mF(422) + mF(423)]() * qk[mF(424) + mF(425) + gk[281]], gk[1]), kk[gk[10]][mF(426) + mF(427)](pk),  … [truncated]
+           if (NH(SS[oS[0]][mH(399) + mH(oS[215])] = oS[78], NS()[mH(400)](AS, oS[1], function(...SS) {
+               var HS = {};
+               return TS = [SS, HS], rS(lS(710))
+             }(SS[oS[1]], SS[oS[2]], VS) * SS[oS[4]][gg(oS[216]) + gg(oS[217]) + oS[199]][gg(403) + gg(404) + gg(405) + gg(406)]() * uS[gg(oS[216]) + gg(oS[217]) + oS[199]], oS[1]), SS[oS[66]][gg(407) + gg(408)](AS), SS[oS[0]][gg(409) + gg(410) + oS[44]] = SS[oS[0]][gg(411) + "me" … [truncated]
```

#### 1892. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14054-L14056` → after: `L13847-L13849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13847-L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13847-L13849) · [Before (L14054-L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14054-L14056)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'M`VDfUZrIb|J7yO,GW";QqXHe%Lgzl}>~p3C5(9xT&v1YkuPwhc:Bd?0n_<EAaRm#^FjK]$)Ns/4S2[.!t+io=8*6{@', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[233]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[g … [truncated]
-                 if (kk[gk[305]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[305]] !== -gk[2])
-                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[305]];
+               for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'uObpLSDPIsihgewF^>(zX#,W:<U/H);VQqotRMY6Z&xy]J27~+08.`31C|k$B_{9A}=ac*K?@vr4njG5!"N%flmTEd[', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[oS … [truncated]
+                 if (SS[-oS[219]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[218]]]), SS[-oS[219]] !== -oS[2])
+                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[219]];
```

#### 1893. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14058` → after: `L13851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13851) · [Before (L14058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14058)

```diff
-                     qF(kk[gk[52]] += kk[gk[305]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     NH(SS[oS[26]] += SS[-oS[219]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1894. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14060-L14063` → after: `L13853-L13856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13853-L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13853-L13856) · [Before (L14060-L14063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14060-L14063)

```diff
-                       qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                     } while (kk[gk[20]] > gk[7]);
-                     kk[gk[52]] = -gk[2]
-                   } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                       NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
+                     } while (SS[oS[24]] > oS[26]);
+                     SS[oS[26]] = -oS[2]
+                   } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 1895. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14067` → after: `L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13860) · [Before (L14067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14067)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = hF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = tg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1896. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14069-L14088` → after: `L13862-L13864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13862-L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13862-L13864) · [Before (L14069-L14088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14069-L14088)

```diff
-             const DF = kk[gk[25]][mF(431) + rF(432) + rF(433)];
-             if (KF && kk[gk[25]][gk[317]] && !DF) {
-               function MF(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[-gk[307]] = 'cA)_6Tbot^0JHDkrh~jOu2%xf.8YXvn;(?}"[C4*W!&L=FS1iswyal$p`+<gGmIZMP7zqQdKUEV:e3/N@{B|>,#R]59', kk[gk[111]] = "" + (kk[gk[1]] || ""), kk[gk[306]] = kk[gk[111]].length, kk[-gk[138]] = [], kk[gk[8]] = gk[1], kk[gk[120]] = gk … [truncated]
-                   if (kk[gk[28]] = kk[-gk[307]].indexOf(kk[gk[111]][kk[-gk[114]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[305]] < gk[1]) kk[gk[305]] = kk[gk[28]];
-                     else {
-                       qF(kk[gk[305]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[305]] << kk[gk[120]], kk[gk[120]] += (kk[gk[305]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(kk[-gk[138]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[120]] -= gk[11])
-                       } while (kk[gk[120]] > gk[7]);
-                       kk[gk[305]] = -gk[2]
-                     } return kk[gk[305]] > -gk[2] && kk[-gk[138]].push((kk[gk[8]] | kk[gk[305]] << kk[gk[120]]) & gk[12]), hk(kk[-gk[138]])
-               }
- 
-               function kI(...kk) {
- ... (4 more removed lines; see GitHub link above)
+             const Xg = SS[oS[4]][bg(412) + bg(413) + bg(414)];
+             if (PH && SS[oS[4]][oS[232]] && !Xg) NH(SS[oS[1]][bg(415)][bg(416)](SS[oS[2]], SS[oS[4]], SS[oS[0]], SS[oS[0]][bg(417) + bg(418)] + oS[2]), SS[oS[11]] = oS[78]);
+             else {
```

#### 1897. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14090-L14092` → after: `L13866-L13868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13866-L13868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13866-L13868) · [Before (L14090-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14090-L14092)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '&~/ZMlu+vf5A`=.BS{C(34,>ptDTe|7E?m9s"dF%}GYgW@)ac!nN;I[ok^ij]LH<wrQq*UxKy0P62JXRz8b#h_OV1$:', kk[gk[309]] = "" + (kk[gk[1]] || ""), kk[-gk[62]] = kk[gk[309]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], k … [truncated]
-                   if (kk[gk[65]] = kk[gk[2]].indexOf(kk[gk[309]][kk[gk[39]]]), kk[gk[65]] !== -gk[2])
-                     if (kk[gk[57]] < gk[1]) kk[gk[57]] = kk[gk[65]];
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'ST?<Ix:AM.Uhq7~Fgd*pJuV;`)>}G@5E0v!]aD+bKwy%Z91n{j3#^C,[4f_=2$6lmzr(8|"cOeLt&Pk/BsNXQHRYWio', SS[oS[219]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[219]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS … [truncated]
+                   if (SS[oS[6]] = SS[oS[2]].indexOf(SS[oS[219]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                     if (SS[-oS[220]] < oS[1]) SS[-oS[220]] = SS[oS[6]];
```

#### 1898. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14094` → after: `L13870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13870) · [Before (L14094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14094)

```diff
-                       qF(kk[gk[57]] += kk[gk[65]] * gk[29], kk[gk[8]] |= kk[gk[57]] << kk[gk[53]], kk[gk[53]] += (kk[gk[57]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[-oS[220]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[-oS[220]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[220]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1899. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14096-L14099` → after: `L13872-L13875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13872-L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13872-L13875) · [Before (L14096-L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14096-L14099)

```diff
-                         qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                       } while (kk[gk[53]] > gk[7]);
-                       kk[gk[57]] = -gk[2]
-                     } return kk[gk[57]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[57]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+                         NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
+                       } while (SS[oS[24]] > oS[26]);
+                       SS[-oS[220]] = -oS[2]
+                     } return SS[-oS[220]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[220]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 1900. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14103` → after: `L13879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13879) · [Before (L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14103)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = FI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = xg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1901. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14105-L14118` → after: `L13881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13881) · [Before (L14105-L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14105-L14118)

```diff
-               kk[gk[1]][II(438)][II(439)](kk[gk[2]], kk[gk[25]], kk[gk[35]], gk[1])
-             }
-           } else {
-             function XI(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[gk[242]] = '~"lEn,[9z)0NmK$UyR>D+.<|#3]f4k&}:2hXPSHLC@Mb!ZuB/p`evI?85_Oot1w6xdisGqj*gJ7AYcW%Q{aV(^TFr=;', kk[-gk[110]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[-gk[110]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], … [truncated]
-                 if (kk[gk[28]] = kk[gk[242]].indexOf(kk[-gk[110]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[309]] < gk[1]) kk[gk[309]] = kk[gk[28]];
-                   else {
-                     qF(kk[gk[309]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[309]] << kk[gk[53]], kk[gk[53]] += (kk[gk[309]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                     do {
-                       qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                     } while (kk[gk[53]] > gk[7]);
-                     kk[gk[309]] = -gk[2]
-                   } return kk[gk[309]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[309]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+               SS[oS[1]][Ng(419)][Ng(420)](SS[oS[2]], SS[oS[4]], SS[oS[0]], oS[1])
```

#### 1902. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14120-L14125` → after: `L13883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13883) · [Before (L14120-L14125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14120-L14125)

```diff
- 
-             function TI(kk) {
-               return typeof Rk[kk] === gk[14] ? Rk[kk] = XI(Uk[kk]) : Rk[kk]
-             }
-             kk[gk[35]][TI(440) + TI(441)]++, kk[gk[10]][gk[310]][gk[2]] < gk[1] && (kk[gk[10]][gk[310]][gk[2]] = gk[1])
-           }
+           } else SS[oS[0]][gg(421) + gg(422)]++, SS[oS[66]][oS[221]][oS[2]] < oS[1] && (SS[oS[66]][oS[221]][oS[2]] = oS[1])
```

#### 1903. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14129-L14131` → after: `L13887-L13889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13887-L13889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13887-L13889) · [Before (L14129-L14131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14129-L14131)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'f69~@HuRpZAB:FWMYvcS[m2#GnPdNT_I`4Ckb(/D{)>a=3El1Qg&q|x!8O.rhX}y^J*5o,iV$7wU"]<z+0sKje;t%?L', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[235]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[233]] = gk[1], kk[-g … [truncated]
-             if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[312]]]), kk[gk[75]] !== -gk[2])
-               if (kk[-gk[311]] < gk[1]) kk[-gk[311]] = kk[gk[75]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = ',SFEthOaVl$f|T=0{YZDq&esn[+XW<^z7Gmykig"xj95Uw;c/}NRJ6~Ao:@`BCM2>_v#H34?bL%18pd(rQ.)]PuI!K*', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[222]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[-oS[22 … [truncated]
+             if (SS[-oS[49]] = SS[oS[2]].indexOf(SS[oS[14]][SS[-oS[223]]]), SS[-oS[49]] !== -oS[2])
+               if (SS[-oS[224]] < oS[1]) SS[-oS[224]] = SS[-oS[49]];
```

#### 1904. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14133` → after: `L13891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13891) · [Before (L14133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14133)

```diff
-                 qF(kk[-gk[311]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[-gk[311]] << kk[-gk[233]], kk[-gk[233]] += (kk[-gk[311]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[-oS[224]] += SS[-oS[49]] * oS[32], SS[oS[67]] |= SS[-oS[224]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[224]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1905. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14135-L14138` → after: `L13893-L13896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13893-L13896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13893-L13896) · [Before (L14135-L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14135-L14138)

```diff
-                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[233]] -= gk[11])
-                 } while (kk[-gk[233]] > gk[7]);
-                 kk[-gk[311]] = -gk[2]
-               } return kk[-gk[311]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[-gk[311]] << kk[-gk[233]]) & gk[12]), hk(kk[gk[41]])
+                   NH(SS[oS[222]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
+                 } while (SS[oS[24]] > oS[26]);
+                 SS[-oS[224]] = -oS[2]
+               } return SS[-oS[224]] > -oS[2] && SS[oS[222]].push((SS[oS[67]] | SS[-oS[224]] << SS[oS[24]]) & oS[12]), mS(SS[oS[222]])
```

#### 1906. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14142` → after: `L13900-L13919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13900-L13919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13900-L13919) · [Before (L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14142)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = iI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = qg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+         }
+         if (SS[oS[0]][HS(oS[210]) + ug(423)] = oS[71], qH) {
+           function Ig(...SS) {
+             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'u@`74"1z*;/jxyD_R!vZnp38MsiK96:J>$S)F&lo+?OC=XBhLPq{Iw2,0T(fb]g^#%~kUeGHQm}N5Ec[<WV.taY|dAr', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[27]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[227]] = oS[1], SS[-oS[ … [truncated]
+               if (SS[-oS[225]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[-oS[225]] !== -oS[2])
+                 if (SS[-oS[226]] < oS[1]) SS[-oS[226]] = SS[-oS[225]];
+                 else {
+                   NH(SS[-oS[226]] += SS[-oS[225]] * oS[32], SS[oS[44]] |= SS[-oS[226]] << SS[oS[227]], SS[oS[227]] += (SS[-oS[226]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                   do {
+                     NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[227]] -= oS[11])
+                   } while (SS[oS[227]] > oS[26]);
+                   SS[-oS[226]] = -oS[2]
+                 } return SS[-oS[226]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[226]] << SS[oS[227]]) & oS[12]), mS(SS[oS[16]])
+           }
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 1907. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14146-L14150` → after: `L13922-L13928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13922-L13928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13922-L13928) · [Before (L14146-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14146-L14150)

```diff
-       if (kk[gk[35]][Fk(gk[286]) + gk[52]]) {
-         function lI(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'kjWya_H+&/ZegnxXDYLMNUm90")>z]6JIv:A(OrS5Bh.;~uw1f[2tF`d!PlRpqTVC8i*Gc%E|4sQK37#b{$<?=@,}^o', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[10]] = [], kk[-gk[232]] = gk[1], kk[gk[53]] = gk[1], kk[gk[ … [truncated]
-             if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[120]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+       if (SS[oS[0]][HS(oS[228]) + oS[31]]) {
+         function kg(SS) {
+           var HS, gS, tS, bS, XS, xS, NS;
+           for (NH(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = oS[1], XS = oS[1], xS = -oS[2]), NS = oS[1]; NS < gS; NS++) {
+             var qS = 'FMupoEHgYhRrOIGjVNlfQZqDmbtkCJWXBci;LP8K*v{ds95TaUSAne>.&<wx4(6/[,}`2%~]y+)z"^#!?7$0@31=:|_'.indexOf(HS[NS]);
+             if (qS !== -oS[2])
+               if (xS < oS[1]) xS = qS;
```

#### 1908. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14152` → after: `L13930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13930) · [Before (L14152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14152)

```diff
-                 qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[232]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1909. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14154-L14157` → after: `L13932-L13937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13932-L13937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13932-L13937) · [Before (L14154-L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14154-L14157)

```diff
-                   qF(kk[gk[10]].push(kk[-gk[232]] & gk[12]), kk[-gk[232]] >>= gk[11], kk[gk[53]] -= gk[11])
-                 } while (kk[gk[53]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
-               } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[232]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                   NH(tS.push(bS & oS[12]), bS >>= oS[11], XS -= oS[11])
+                 } while (XS > oS[26]);
+                 xS = -oS[2]
+               }
+           }
+           return xS > -oS[2] && tS.push((bS | xS << XS) & oS[12]), mS(tS)
```

#### 1910. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14160-L14161` → after: `L13940-L13941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13940-L13941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13940-L13941) · [Before (L14160-L14161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14160-L14161)

```diff
-         function aI(...kk) {
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = lI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+         function ag(SS) {
+           return typeof iS[SS] === oS[18] ? iS[SS] = kg(WS[SS]) : iS[SS]
```

#### 1911. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14163` → after: `L13943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13943) · [Before (L14163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14163)

```diff
-         kk[gk[10]][Fk(gk[249]) + Fk(gk[250]) + Fk(gk[251])] = gk[1];
+         SS[oS[66]][ag(426) + ag(427) + ag(428)] = oS[1];
```

#### 1912. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14165-L14167` → after: `L13945-L13946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13945-L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13945-L13946) · [Before (L14165-L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14165-L14167)

```diff
-           LI = gk[70];
-         if (kk[gk[25]][aI(446) + gk[52]] || kk[gk[7]]) qF(qI = gk[2], LI = kk[gk[7]] || !kk[gk[35]][aI(447) + aI(448) + aI(449) + aI(450)]);
-         else if (kk[gk[25]][aI(451) + aI(452)]) {
+           jg = oS[71];
+         if (SS[oS[4]][ag(429) + oS[31]] || SS[oS[144]]) {
```

#### 1913. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14169-L14171` → after: `L13948-L13950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13948-L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13948-L13950) · [Before (L14169-L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14169-L14171)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'P$BJAWMInFx`a&^49?opuRSmCrv<0+>;lVUh=*Z3,Y_#68!KiLd[:N]cb()Tsqw2"|/D%ge7{1GjE~QfH5.@OtXy}kz', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[-gk[313]] = gk[1], kk[gk[20]] = gk[1], kk[gk[ … [truncated]
-               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[314]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
+             for (NH(SS[oS[13]] = oS[2], SS[-oS[36]] = 'DCz6kWKfQBMI(/b$PlZV<U.ya?;S>*u709@_2o+~8dE)&L`XFA:|HJ4GYp!%]jv1"=^,q#wNO[3hxn{}s5RemitcTgr', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[-oS[37]] = oS[1], SS[o … [truncated]
+               if (SS[oS[6]] = SS[-oS[36]].indexOf(SS[oS[14]][SS[oS[98]]]), SS[oS[6]] !== -oS[2])
+                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
```

#### 1914. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14173` → after: `L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13952) · [Before (L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14173)

```diff
-                   qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[-gk[313]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[-oS[37]], SS[-oS[37]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1915. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14175-L14178` → after: `L13954-L13975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13954-L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13954-L13975) · [Before (L14175-L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14175-L14178)

```diff
-                     qF(kk[gk[41]].push(kk[-gk[313]] & gk[12]), kk[-gk[313]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[-gk[313]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                     NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[37]] -= oS[11])
+                   } while (SS[-oS[37]] > oS[26]);
+                   SS[oS[26]] = -oS[2]
+                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[26]] << SS[-oS[37]]) & oS[12]), mS(SS[oS[66]])
+           }
+ 
+           function ng(...SS) {
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Cg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           }
+           NH(Kg = oS[2], jg = SS[oS[144]] || !SS[oS[0]][ng(430) + ng(431) + ng(432) + ng(433)])
+         } else if (SS[oS[4]][ag(434) + ag(435)]) {
+           function Pg(...SS) {
+             for (NH(SS[oS[13]] = oS[2], SS[-oS[124]] = '*QGfkmRFpbDaZeMsUjNCI01"<h_@V(v)L>=c3|yJ~4+{%t6d[ox^n!i.9B25l/ASEzY8HO$quw;Tr:,&7]gKW`P?X#}', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[229]] = [], SS[oS[124]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
+               if (SS[oS[6]] = SS[-oS[124]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                 if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
+                 else {
+ ... (6 more added lines; see GitHub link above)
```

#### 1916. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14182` → after: `L13979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13979) · [Before (L14182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14182)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ZI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Pg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1917. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14184` → after: `L13981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13981) · [Before (L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14184)

```diff
-           qF(qI = -gk[2], LI = !kk[gk[35]][aI(453) + aI(454) + aI(455) + jI(456)])
+           NH(Kg = -oS[2], jg = !SS[oS[0]][ag(436) + ag(437) + Qg(438) + Qg(439)])
```

#### 1918. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14186-L14188` → after: `L13983-L13985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13983-L13985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13983-L13985) · [Before (L14186-L14188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14186-L14188)

```diff
-         kk[gk[35]][aI(gk[315]) + gk[316]][aI(gk[318]) + aI(gk[319])] = kk[gk[10]][gk[310]][gk[2]];
-         const tI = (gk[1], Sk[gk[53]])(kk[gk[35]][aI(gk[315]) + gk[316]], kk[gk[25]][gk[317]] !== gk[1], qI, LI);
-         qF(lk()[aI(460)](pk, gk[1], tI, gk[1]), kk[gk[10]][aI(461) + aI(462)](pk), kk[gk[10]][gk[310]][gk[2]] = kk[gk[35]][aI(gk[315]) + gk[316]][aI(gk[318]) + aI(gk[319])], kk[gk[25]][aI(463)][aI(464) + aI(465) + aI(466)](aI(467) + aI(468) + aI(469), gk[2] + kk[gk[35]][aI(gk[315 … [truncated]
+         SS[oS[0]][ag(oS[230]) + oS[231]][ag(oS[233]) + ag(oS[234])] = SS[oS[66]][oS[221]][oS[2]];
+         const Gg = (oS[1], dS[oS[198]])(SS[oS[0]][ag(oS[230]) + oS[231]], SS[oS[4]][oS[232]] !== oS[1], Kg, jg);
+         NH(NS()[ag(443)](AS, oS[1], Gg, oS[1]), SS[oS[66]][ag(444) + ag(445)](AS), SS[oS[66]][oS[221]][oS[2]] = SS[oS[0]][ag(oS[230]) + oS[231]][ag(oS[233]) + ag(oS[234])], SS[oS[4]][ag(446)][ag(447) + ag(448) + ag(449)](ag(450) + ag(451) + ag(452), oS[2] + SS[oS[0]][ag(oS[230])  … [truncated]
```

#### 1919. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14190-L14193` → after: `L13987-L13992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13987-L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13987-L13992) · [Before (L14190-L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14190-L14193)

```diff
-         function eI(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = ',EHrUJTSGnbu:P]+ta(C3?Q=p}5LsI$"%Zz{@2hi0Yvg6)<d_OlwkXm[>1~!Myj|oBef;*8N&DF9AxR.`WV^#Kq7c/4', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[-gk[320]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[32 … [truncated]
-             if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[321]] < gk[1]) kk[gk[321]] = kk[gk[28]];
+         function Dg(SS) {
+           var HS, gS, tS, bS, XS, xS, NS;
+           for (NH(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = oS[1], XS = oS[1], xS = -oS[2]), NS = oS[1]; NS < gS; NS++) {
+             var qS = 'F|[q(>P+umNMI/:5ct7<Z1r!;hR*A&G])wxi~_%WJ4$a@^6bnK}Q39,?DL"g=X8H#jk`d0.BypTsz{v2foSlECOVeUY'.indexOf(HS[NS]);
+             if (qS !== -oS[2])
+               if (xS < oS[1]) xS = qS;
```

#### 1920. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14195` → after: `L13994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13994) · [Before (L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14195)

```diff
-                 qF(kk[gk[321]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[321]] << kk[gk[20]], kk[gk[20]] += (kk[gk[321]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1921. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14197-L14200` → after: `L13996-L14001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13996-L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13996-L14001) · [Before (L14197-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14197-L14200)

```diff
-                   qF(kk[-gk[320]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[321]] = -gk[2]
-               } return kk[gk[321]] > -gk[2] && kk[-gk[320]].push((kk[gk[8]] | kk[gk[321]] << kk[gk[20]]) & gk[12]), hk(kk[-gk[320]])
+                   NH(tS.push(bS & oS[12]), bS >>= oS[11], XS -= oS[11])
+                 } while (XS > oS[26]);
+                 xS = -oS[2]
+               }
+           }
+           return xS > -oS[2] && tS.push((bS | xS << XS) & oS[12]), mS(tS)
```

#### 1922. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14204` → after: `L14005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14005) · [Before (L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14204)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = eI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Dg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1923. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14206` → after: `L14007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14007) · [Before (L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14206)

```diff
-         qF(kk[gk[35]][wI(470) + gk[316]].reset(), kk[gk[25]][wI(471)][wI(472) + wI(473) + wI(474)](wI(475) + wI(476) + wI(477), gk[2]))
+         NH(SS[oS[0]][HS(453) + oS[231]].reset(), SS[oS[4]][HS(oS[288])][HS(oS[289]) + wg(456) + wg(457)](wg(458) + wg(459) + wg(460), oS[2]))
```

#### 1924. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14208-L14210` → after: `L14009-L14011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14009-L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14009-L14011) · [Before (L14208-L14210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14208-L14210)

```diff
-       kk[gk[41]] = gk[70];
-       const QF = Pk[gk[1]] || Kk[gk[1]] && kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] !== gk[1] && (fk > gk[1] || qk[Fk(gk[322]) + Fk(gk[323]) + Fk(gk[324]) + gk[325]] > gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[1]]) >= qk[Fk(gk[331]) + Fk(gk[ … [truncated]
-         sF = Pk[gk[35]] || Kk[gk[35]] && kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]] !== gk[1] && (fk > gk[1] || qk[Fk(484) + Fk(485) + Fk(gk[260])] > gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]]) >= qk[Fk(gk[331]) + Fk(gk[332]) + Fk(gk[333] … [truncated]
+       SS[oS[235]] = oS[71];
+       const QH = PS[oS[1]] || QS[oS[1]] && SS[oS[66]][HS(oS[239]) + oS[31]][oS[1]] !== oS[1] && (pS > oS[1] || uS[HS(462) + HS(463) + HS(oS[173])] > oS[1] && Math[HS(oS[244])](SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[1]]) >= uS[HS(oS[245]) + HS(oS[246]) + HS(oS[247]) … [truncated]
+         DH = PS[oS[0]] || QS[oS[0]] && SS[oS[66]][HS(oS[239]) + oS[31]][oS[0]] !== oS[1] && (pS > oS[1] || uS[HS(oS[240]) + HS(oS[241]) + HS(oS[242]) + oS[243]] > oS[1] && Math[HS(oS[244])](SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[0]]) >= uS[HS(oS[245]) + HS(oS[246]) … [truncated]
```

#### 1925. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14212-L14215` → after: `L14013-L14016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14013-L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14013-L14016) · [Before (L14212-L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14212-L14215)

```diff
-         const HI = gk[20],
-           JI = gk[86],
-           xI = gk[92];
-         if (kk[gk[10]][gk[348]](), QF) {
+         const hg = oS[24],
+           Zg = oS[222],
+           Jg = oS[114];
+         if (SS[oS[66]][oS[265]](), QH) {
```

#### 1926. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14217-L14219` → after: `L14018-L14020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14018-L14020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14018-L14020) · [Before (L14217-L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14217-L14219)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'u|&5!.qHAVXeb/1Jny$S)vw@^z~aWg7Zxc6[R(UB,]9mpM*E"L{KTYj=PsCGF<`od0O?:;Df28l}It3_+QNi4%kr>h#', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[83]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[gk … [truncated]
-               if (kk[gk[78]] = kk[gk[43]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[gk[78]] !== -gk[2])
-                 if (kk[gk[98]] < gk[1]) kk[gk[98]] = kk[gk[78]];
+             for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'f|.wS)}qEhnDa{s%ym;M,O~dFJe:3/`C^cQI2g(B#b@H9Ap4PTX1?lZ!vjz[uV+"o8L7W6RGrYiK*x&0<=NUt$]_>5k', SS[-oS[250]] = "" + (SS[oS[1]] || ""), SS[-oS[84]] = SS[-oS[250]].length, SS[oS[253]] = [], SS[oS[251]] = oS[1], SS[-oS[123]] = oS[1] … [truncated]
+               if (SS[oS[252]] = SS[oS[2]].indexOf(SS[-oS[250]][SS[oS[3]]]), SS[oS[252]] !== -oS[2])
+                 if (SS[-oS[117]] < oS[1]) SS[-oS[117]] = SS[oS[252]];
```

#### 1927. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14221` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14022) · [Before (L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14221)

```diff
-                   qF(kk[gk[98]] += kk[gk[78]] * gk[29], kk[gk[50]] |= kk[gk[98]] << kk[gk[53]], kk[gk[53]] += (kk[gk[98]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[-oS[117]] += SS[oS[252]] * oS[32], SS[oS[251]] |= SS[-oS[117]] << SS[-oS[123]], SS[-oS[123]] += (SS[-oS[117]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1928. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14223-L14226` → after: `L14024-L14027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14024-L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14024-L14027) · [Before (L14223-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14223-L14226)

```diff
-                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                   } while (kk[gk[53]] > gk[7]);
-                   kk[gk[98]] = -gk[2]
-                 } return kk[gk[98]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[98]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+                     NH(SS[oS[253]].push(SS[oS[251]] & oS[12]), SS[oS[251]] >>= oS[11], SS[-oS[123]] -= oS[11])
+                   } while (SS[-oS[123]] > oS[26]);
+                   SS[-oS[117]] = -oS[2]
+                 } return SS[-oS[117]] > -oS[2] && SS[oS[253]].push((SS[oS[251]] | SS[-oS[117]] << SS[-oS[123]]) & oS[12]), mS(SS[oS[253]])
```

#### 1929. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14230` → after: `L14031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14031) · [Before (L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14230)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = PI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Og(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1930. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14232-L14234` → after: `L14033-L14037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14033-L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14033-L14037) · [Before (L14232-L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14232-L14234)

```diff
-           const QI = kk[gk[35]][KI(gk[336]) + KI(gk[337]) + KI(gk[338])][gk[1]] <= gk[1] ? gk[2] : -gk[2],
-             sI = Math[KI(489)](xI, Math[KI(490)](kk[gk[35]][KI(gk[336]) + KI(gk[337]) + KI(gk[338])][gk[1]]));
-           qF(kk[gk[10]][gk[310]][gk[1]] = QI * sI * (Pk[gk[1]] ? gk[2] : Bk), aF(kk[gk[1]], Pk[gk[1]], [kk[gk[10]][KI(491) + gk[52]][gk[1]], gk[1], gk[1]]))
+           const cg = SS[oS[0]][HS(oS[236]) + dg(oS[254]) + dg(oS[255])][oS[1]] <= oS[1] ? oS[2] : -oS[2],
+             vg = Math[dg(471)](Jg, Math[dg(472)](SS[oS[0]][dg(473) + dg(oS[254]) + dg(oS[255])][oS[1]]));
+           NH(SS[oS[66]][oS[221]][oS[1]] = cg * vg * (PS[oS[1]] ? oS[2] : sS), TS = [SS[oS[1]], PS[oS[1]],
+             [SS[oS[66]][dg(474) + oS[31]][oS[1]], oS[1], oS[1]]
+           ], rS(dg(475)))
```

#### 1931. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14238-L14240` → after: `L14041-L14043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14041-L14043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14041-L14043) · [Before (L14238-L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14238-L14240)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'bui3NdDf>P<5*=RkEcT}gm7@U9L.v;Kw!"nV/:)Or2pMGa_+s&tYqF`A~0Q|1I8[,4%oXeSBC(ZjHJy#xlW]$6z?{^h', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[49]] = gk[1], kk[gk[52 … [truncated]
-               if (kk[gk[105]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[11]]]), kk[gk[105]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[105]];
+             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'iw6|x"E)hFG@V3yuAY40Z=KO<D].Mnz9LPl_[Xtf}&%:S2^r#+m~;{HbQI5cp$8W?dJU1eN(ovg7!T>,k*Cs/R`Bqaj', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[256]] = SS[oS[0]].length, SS[-oS[222]] = [], SS[-oS[15]] = oS[1], SS[oS[24]] = oS[1], SS[-o … [truncated]
+               if (SS[oS[257]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[68]]]), SS[oS[257]] !== -oS[2])
+                 if (SS[-oS[219]] < oS[1]) SS[-oS[219]] = SS[oS[257]];
```

#### 1932. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14242` → after: `L14045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14045) · [Before (L14242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14242)

```diff
-                   qF(kk[gk[52]] += kk[gk[105]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[-gk[49]], kk[-gk[49]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[-oS[219]] += SS[oS[257]] * oS[32], SS[-oS[15]] |= SS[-oS[219]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[219]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1933. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14244-L14247` → after: `L14047-L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14047-L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14047-L14050) · [Before (L14244-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14244-L14247)

```diff
-                     qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[49]] -= gk[11])
-                   } while (kk[-gk[49]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[-gk[49]]) & gk[12]), hk(kk[gk[41]])
+                     NH(SS[-oS[222]].push(SS[-oS[15]] & oS[12]), SS[-oS[15]] >>= oS[11], SS[oS[24]] -= oS[11])
+                   } while (SS[oS[24]] > oS[26]);
+                   SS[-oS[219]] = -oS[2]
+                 } return SS[-oS[219]] > -oS[2] && SS[-oS[222]].push((SS[-oS[15]] | SS[-oS[219]] << SS[oS[24]]) & oS[12]), mS(SS[-oS[222]])
```

#### 1934. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14251` → after: `L14054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14054) · [Before (L14251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14251)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = VI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Eg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1935. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14253-L14255` → after: `L14056-L14078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14056-L14078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14056-L14078) · [Before (L14253-L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14253-L14255)

```diff
-           const SI = kk[gk[35]][zI(gk[339]) + zI(gk[340]) + zI(gk[341])][gk[2]] <= gk[1] ? gk[2] : -gk[2];
-           let oI = Math[zI(495)](HI, Math[zI(496)](kk[gk[35]][zI(gk[339]) + zI(gk[340]) + zI(gk[341])][gk[2]]));
-           oI < JI && kk[gk[25]][zI(497) + gk[52]] && SI === gk[2] && (oI = Math[zI(498)](oI + gk[153] / oI + 2.3, JI)), KF && kk[gk[35]][zI(gk[342])] && qF(kk[gk[35]][zI(gk[342])] = gk[70], oI += gk[50], kk[gk[41]] = gk[58]), qF(kk[gk[10]][gk[310]][gk[2]] = SI * oI * (Pk[gk[2]] ? … [truncated]
+           const Yg = SS[oS[0]][HS(oS[236]) + Lg(oS[258]) + Lg(oS[259])][oS[2]] <= oS[1] ? oS[2] : -oS[2];
+           let Ag = Math[Lg(478)](hg, Math[Lg(479)](SS[oS[0]][Lg(480) + Lg(oS[258]) + Lg(oS[259])][oS[2]]));
+           if (Ag < Zg && SS[oS[4]][Lg(481) + oS[31]] && Yg === oS[2] && (Ag = Math[Lg(482)](Ag + oS[137] / Ag + 2.3, Zg)), PH && SS[oS[0]][Lg(oS[260])] && NH(SS[oS[0]][Lg(oS[260])] = oS[71], Ag += oS[67], SS[oS[235]] = oS[78]), SS[oS[66]][oS[221]][oS[2]] = Yg * Ag * (PS[oS[2]] ?  … [truncated]
+             function yg(...SS) {
+               for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'G5HXnLCsNY2r|w!zJ39[i=:{P&0SEp(%#F*Z7,@a4+mAWv)lQf<k`IV}?Udt"1~c/h$KxgTeO;qBD>o^]y.uRM6jb8_', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[-oS[0]] = [], SS[oS[67]] = oS[1], SS[-oS[158]] = oS[1], SS[o … [truncated]
+                 if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
+                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
+                   else {
+                     NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[-oS[158]], SS[-oS[158]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     do {
+                       NH(SS[-oS[0]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[-oS[158]] -= oS[11])
+                     } while (SS[-oS[158]] > oS[26]);
+                     SS[oS[26]] = -oS[2]
+                   } return SS[oS[26]] > -oS[2] && SS[-oS[0]].push((SS[oS[67]] | SS[oS[26]] << SS[-oS[158]]) & oS[12]), mS(SS[-oS[0]])
+             }
+ 
+ ... (7 more added lines; see GitHub link above)
```

#### 1936. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14259-L14261` → after: `L14082-L14084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14082-L14084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14082-L14084) · [Before (L14259-L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14259-L14261)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'CW1zBR/)?tKLdNr*xw+vy:M!4cGV26~A"T8Ei9}n#k;(ujHP&{3q7pYl.]Q`a[I^_Fg=$JX5@O|0,hb>%DsS<UeZmof', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52 … [truncated]
-               if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '<DePigVIHYZv@kW(qjn|`abC[LR#.+Q0)r]2$x/f8tuG5E!F{7MBs&?w~1pA3Nc*K%>oU9}_zJ"T;:m,4Od6h^XSl=y', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[261]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[6 … [truncated]
+               if (SS[oS[30]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
+                 if (SS[-oS[6]] < oS[1]) SS[-oS[6]] = SS[oS[30]];
```

#### 1937. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14263` → after: `L14086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14086) · [Before (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14263)

```diff
-                   qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[-oS[6]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[-oS[6]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[6]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1938. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14265-L14268` → after: `L14088-L14091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14088-L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14088-L14091) · [Before (L14265-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14265-L14268)

```diff
-                     qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                     NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
+                   } while (SS[oS[9]] > oS[26]);
+                   SS[-oS[6]] = -oS[2]
+                 } return SS[-oS[6]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[6]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
```

#### 1939. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14272` → after: `L14095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14095) · [Before (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14272)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = vI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = ig(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1940. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14274-L14276` → after: `L14097-L14101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14097-L14101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14097-L14101) · [Before (L14274-L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14274-L14276)

```diff
-           const OI = kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]] <= gk[1] ? gk[2] : -gk[2],
-             nI = Math[Fk(gk[412])](xI, Math[EI(504)](kk[gk[35]][EI(505) + EI(506) + EI(507)][gk[35]]));
-           qF(kk[gk[10]][gk[310]][gk[35]] = OI * nI * (Pk[gk[35]] ? gk[2] : Bk), aF(kk[gk[1]], Pk[gk[35]], [gk[1], gk[1], kk[gk[10]][EI(508) + gk[52]][gk[35]]]))
+           const zg = SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[0]] <= oS[1] ? oS[2] : -oS[2],
+             Ug = Math[HS(oS[323])](Jg, Math[HS(oS[244])](SS[oS[0]][Wg(490) + Wg(491) + Wg(492)][oS[0]]));
+           NH(SS[oS[66]][oS[221]][oS[0]] = zg * Ug * (PS[oS[0]] ? oS[2] : sS), TS = [SS[oS[1]], PS[oS[0]],
+             [oS[1], oS[1], SS[oS[66]][Wg(493) + oS[31]][oS[0]]]
+           ], rS(Wg(494), Wg(495) + Wg(496), Wg(497) + Wg(498))[Wg(499) + Wg(500)])
```

#### 1941. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14278-L14279` → after: `L14103-L14104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14103-L14104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14103-L14104) · [Before (L14278-L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14278-L14279)

```diff
-       } else FF && (kk[gk[35]][Fk(509)] = gk[58]);
-       if (qF(yF(kk[gk[1]], kk[gk[2]], qk[Fk(510)], kk[gk[10]][Fk(gk[329]) + gk[52]][gk[2]], kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[2]]), kk[gk[344]] = gk[1]), kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] !== gk[1]) {
+       } else qH && (SS[oS[0]][HS(501)] = oS[78]);
+       if (NH(XH(SS[oS[1]], SS[oS[2]], uS[HS(502)], SS[oS[66]][HS(oS[239]) + oS[31]][oS[2]], SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[2]]), SS[oS[123]] = oS[1]), SS[oS[66]][HS(oS[239]) + oS[31]][oS[1]] !== oS[1]) {
```

#### 1942. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14281-L14283` → after: `L14106-L14108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14106-L14108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14106-L14108) · [Before (L14281-L14283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14281-L14283)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[345]] = 'Pl*DZJ25>04C{[_^BQjX`~(hx3qE}+=#?z7aem|;):1u&,86$%v/w.y@]"9!<pObrkoMgiWLUnHdGRfSNFcYAtITKsV', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[-gk[77]] = [], kk[gk[66]] = gk[1], kk[-gk[92]] = gk[1], kk[gk[ … [truncated]
-             if (kk[gk[28]] = kk[gk[345]].indexOf(kk[gk[35]][kk[-gk[63]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'XkmBaQeSlNAGLDMUjrECIgfTFJsioHWK$p2R5/Yh8]tVd~:q3Onc6P?b.40!(71^+|};w,"uy%&=`{z>_#x[*<9@vZ)', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[-oS[263 … [truncated]
+             if (SS[-oS[262]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[-oS[262]] !== -oS[2])
+               if (SS[-oS[263]] < oS[1]) SS[-oS[263]] = SS[-oS[262]];
```

#### 1943. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14285` → after: `L14110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14110) · [Before (L14285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14285)

```diff
-                 qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[66]] |= kk[gk[7]] << kk[-gk[92]], kk[-gk[92]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[-oS[263]] += SS[-oS[262]] * oS[32], SS[oS[67]] |= SS[-oS[263]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[263]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1944. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14287-L14290` → after: `L14112-L14115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14112-L14115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14112-L14115) · [Before (L14287-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14287-L14290)

```diff
-                   qF(kk[-gk[77]].push(kk[gk[66]] & gk[12]), kk[gk[66]] >>= gk[11], kk[-gk[92]] -= gk[11])
-                 } while (kk[-gk[92]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
-               } return kk[gk[7]] > -gk[2] && kk[-gk[77]].push((kk[gk[66]] | kk[gk[7]] << kk[-gk[92]]) & gk[12]), hk(kk[-gk[77]])
+                   NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
+                 } while (SS[oS[24]] > oS[26]);
+                 SS[-oS[263]] = -oS[2]
+               } return SS[-oS[263]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[-oS[263]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
```

#### 1945. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14294` → after: `L14119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14119) · [Before (L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14294)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = GI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = pg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1946. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14296` → after: `L14121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14121) · [Before (L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14296)

```diff
-         kk[gk[344]] = kk[gk[35]][pI(511) + pI(gk[88]) + pI(513)][gk[1]]
+         SS[oS[123]] = SS[oS[0]][sg(503) + sg(504) + sg(505)][oS[1]]
```

#### 1947. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14298` → after: `L14123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14123) · [Before (L14298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14298)

```diff
-       if (kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]] !== gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]]) > Math[Fk(gk[330])](kk[gk[344]])) {
+       if (SS[oS[66]][HS(oS[239]) + oS[31]][oS[0]] !== oS[1] && Math[HS(oS[244])](SS[oS[0]][HS(oS[236]) + HS(oS[237]) + HS(oS[238])][oS[0]]) > Math[HS(oS[244])](SS[oS[123]])) {
```

#### 1948. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14300-L14302` → after: `L14125-L14127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14125-L14127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14125-L14127) · [Before (L14300-L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14300-L14302)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'EDKhuPSQcJVd3iFfmGX<t4eR0WoM:jn6{xq)`Z7%.&INH$ga+>=Cp;5_Bv/s~OU*zAYLTbr(wk[]l}@#?9^8,12|"y!', kk[-gk[346]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[346]].length, kk[-gk[347]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
-             if (kk[gk[46]] = kk[gk[43]].indexOf(kk[-gk[346]][kk[gk[39]]]), kk[gk[46]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[46]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'o8NrGZjtXsTEbRUYDhmkFdqpaKge6~#0cMC%z,}SfW+`yxnlIP<@H&3J)$LBV=7QAi?|O2.(*_>];9[4"w1v!u5/^{:', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[222]] = SS[oS[0]].length, SS[-oS[253]] = [], SS[-oS[264]] = oS[1], SS[oS[24]] = oS[1], SS[oS[ … [truncated]
+             if (SS[-oS[219]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[-oS[219]] !== -oS[2])
+               if (SS[oS[155]] < oS[1]) SS[oS[155]] = SS[-oS[219]];
```

#### 1949. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14304` → after: `L14129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14129) · [Before (L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14304)

```diff
-                 qF(kk[gk[7]] += kk[gk[46]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[oS[155]] += SS[-oS[219]] * oS[32], SS[-oS[264]] |= SS[oS[155]] << SS[oS[24]], SS[oS[24]] += (SS[oS[155]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1950. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14306-L14309` → after: `L14131-L14134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14131-L14134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14131-L14134) · [Before (L14306-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14306-L14309)

```diff
-                   qF(kk[-gk[347]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                 } while (kk[gk[53]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
-               } return kk[gk[7]] > -gk[2] && kk[-gk[347]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[-gk[347]])
+                   NH(SS[-oS[253]].push(SS[-oS[264]] & oS[12]), SS[-oS[264]] >>= oS[11], SS[oS[24]] -= oS[11])
+                 } while (SS[oS[24]] > oS[26]);
+                 SS[oS[155]] = -oS[2]
+               } return SS[oS[155]] > -oS[2] && SS[-oS[253]].push((SS[-oS[264]] | SS[oS[155]] << SS[oS[24]]) & oS[12]), mS(SS[-oS[253]])
```

#### 1951. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14313` → after: `L14138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14138) · [Before (L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14313)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = uI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Bg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1952. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14315` → after: `L14140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14140) · [Before (L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14315)

```diff
-         kk[gk[344]] = kk[gk[35]][bI(514) + bI(515) + bI(516)][gk[35]]
+         SS[oS[123]] = SS[oS[0]][Mg(506) + Mg(507) + Mg(508)][oS[0]]
```

#### 1953. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14317` → after: `L14142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14142) · [Before (L14317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14317)

```diff
-       if (yF(kk[gk[1]], kk[gk[2]], qk[Fk(517)], kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] || kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]], kk[gk[344]]), kk[-gk[308]] && !kk[gk[41]] && lF(kk[gk[1]], vk[gk[53]][Fk(518) + "op"], [gk[1], -gk[2], gk[1]]), kk[gk[35]][Fk(519)] = Vk, Ek > gk[1 … [truncated]
+       if (XH(SS[oS[1]], SS[oS[2]], uS[HS(509)], SS[oS[66]][HS(oS[239]) + oS[31]][oS[1]] || SS[oS[66]][HS(oS[239]) + oS[31]][oS[0]], SS[oS[123]]), SS[oS[11]] && !SS[oS[235]] && xH(SS[oS[1]], cS[oS[3]][HS(510) + "op"], [oS[1], -oS[2], oS[1]]), SS[oS[0]][HS(511)] = hS, ZS > oS[1] && … [truncated]
```

#### 1954. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14320-L14322` → after: `L14145-L14147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14145-L14147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14145-L14147) · [Before (L14320-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14320-L14322)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '75*%}xw[=z6f!+.9`mavPVZ|@i?jBdS]$D)^Fcu>,tylYC"0#nT3JqIMk;e_o41~8L&EA<{2Gg:U(rHRWbNKphXO/Qs', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52]] … [truncated]
-             if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'C_6FO|fpAwZmiHz72dMcvEu%)n5?,0x["G!hWr~Pqey#4Q1`;]<(t:B>8$=&*b^9+@XI{gT3/VU.}jsoDYakJNKSLlR', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[oS[31]]  … [truncated]
+             if (SS[oS[30]] = SS[oS[5]].indexOf(SS[oS[14]][SS[-oS[266]]]), SS[oS[30]] !== -oS[2])
+               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
```

#### 1955. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14324` → after: `L14149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14149) · [Before (L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14324)

```diff
-                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1956. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14326-L14329` → after: `L14151-L14154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14151-L14154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14151-L14154) · [Before (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14326-L14329)

```diff
-                   qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                   NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
+                 } while (SS[oS[9]] > oS[26]);
+                 SS[oS[31]] = -oS[2]
+               } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
```

#### 1957. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14333` → after: `L14158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14158) · [Before (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14333)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = RI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Fg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1958. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14335` → after: `L14160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14160) · [Before (L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14335)

```diff
-         FF && !kk[gk[35]][UI(521) + UI(522) + UI(523)] && Vk && lF(kk[gk[1]], vk[gk[53]][UI(524) + gk[41]], [gk[1], -gk[2], gk[1]])
+         qH && !SS[oS[0]][Rg(513) + Rg(514) + Rg(515)] && hS && xH(SS[oS[1]], cS[oS[3]][Rg(516) + oS[16]], [oS[1], -oS[2], oS[1]])
```

#### 1959. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14337` → after: `L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14162) · [Before (L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14337)

```diff
-       if (!kk[gk[35]][Fk(gk[286]) + gk[52]]) {
+       if (!SS[oS[0]][HS(oS[228]) + oS[31]]) {
```

#### 1960. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14340-L14342` → after: `L14165-L14167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14165-L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14165-L14167) · [Before (L14340-L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14340-L14342)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = ':AEUmaPZg_4fVG7i$h(&*@BC5ton~Suds=yDIQq?JMr>F|]2<HxpO^kKw%.W,69[z1evl{N+"0R/cL;jb#T!8X)3}Y`', kk[-gk[90]] = "" + (kk[gk[1]] || ""), kk[gk[349]] = kk[-gk[90]].length, kk[gk[10]] = [], kk[-gk[352]] = gk[1], kk[-gk[302]] = gk[1], … [truncated]
-               if (kk[gk[351]] = kk[gk[43]].indexOf(kk[-gk[90]][kk[-gk[350]]]), kk[gk[351]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[351]];
+             for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'Itc5;h9esql0W*Jz!aYH>X#]QN1<byA+pR8B?[T)L}S3PO~.:&=d_EGg$D7"oFnf`rumw|^@k%ZxC{vijV4KM,2(/6U', SS[-oS[112]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[-oS[112]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1], SS[oS … [truncated]
+               if (SS[oS[30]] = SS[oS[5]].indexOf(SS[-oS[112]][SS[oS[223]]]), SS[oS[30]] !== -oS[2])
+                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
```

#### 1961. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14344` → after: `L14169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14169) · [Before (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14344)

```diff
-                   qF(kk[gk[52]] += kk[gk[351]] * gk[29], kk[-gk[352]] |= kk[gk[52]] << kk[-gk[302]], kk[-gk[302]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1962. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14346-L14349` → after: `L14171-L14174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14171-L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14171-L14174) · [Before (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14346-L14349)

```diff
-                     qF(kk[gk[10]].push(kk[-gk[352]] & gk[12]), kk[-gk[352]] >>= gk[11], kk[-gk[302]] -= gk[11])
-                   } while (kk[-gk[302]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[-gk[352]] | kk[gk[52]] << kk[-gk[302]]) & gk[12]), hk(kk[gk[10]])
+                     NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
+                   } while (SS[oS[9]] > oS[26]);
+                   SS[oS[26]] = -oS[2]
+                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
```

#### 1963. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14353` → after: `L14178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14178) · [Before (L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14353)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = CI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Tg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1964. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14355` → after: `L14180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14180) · [Before (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14355)

```diff
-           if (kk[gk[10]][gk[310]][gk[2]] <= gk[1]) {
+           if (SS[oS[66]][oS[221]][oS[2]] <= oS[1]) {
```

#### 1965. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14357-L14359` → after: `L14182-L14184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14182-L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14182-L14184) · [Before (L14357-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14357-L14359)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'Avj?B4.;NS)[iQMXw|:},zk*%u32+eO>f(&Ly5g^#Rb/m7Z1=rW<UpCDJdE`a"x6V0t{KH9noIhsY~]$Gl_8!cP@FqT', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[gk[5 … [truncated]
-                 if (kk[gk[353]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[353]] !== -gk[2])
-                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[353]];
+               for (NH(SS[oS[13]] = oS[2], SS[-oS[2]] = '8~)9w=}z4v#xd!Hk>$A7|/s{DJe"SUm1R6]bZn*`f(yWqhOM5Q<Xi2FIGLNB_u;jY.o:3+cp&g0^P,E@VaTrtKl?C%[', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[0]].length, SS[oS[118]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[oS … [truncated]
+                 if (SS[oS[6]] = SS[-oS[2]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
```

#### 1966. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14361` → after: `L14186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14186) · [Before (L14361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14361)

```diff
-                     qF(kk[gk[52]] += kk[gk[353]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[53]], kk[gk[53]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1967. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14363-L14366` → after: `L14188-L14191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14188-L14191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14188-L14191) · [Before (L14363-L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14363-L14366)

```diff
-                       qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                     } while (kk[gk[53]] > gk[7]);
-                     kk[gk[52]] = -gk[2]
-                   } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                       NH(SS[oS[118]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
+                     } while (SS[oS[24]] > oS[26]);
+                     SS[oS[26]] = -oS[2]
+                   } return SS[oS[26]] > -oS[2] && SS[oS[118]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[118]])
```

#### 1968. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14370-L14389` → after: `L14195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14195) · [Before (L14370-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14370-L14389)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = fI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-             }
-             if (kk[gk[35]][BI(gk[354]) + BI(gk[355]) + BI(gk[356]) + gk[357]]) {
-               function dI(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = '8z=(%yx{<`1FEHZVhSMr6w;^>&/tPd9"URvY|lcDI!:nqWoeJ5[2ug]CB*O$j?sN+_,XaTmpi@LAQ7bG~f.4#K3)}0k', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[240]] = [], kk[gk[8]] = gk[1], kk[-gk[244]] = gk[1],  … [truncated]
-                   if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[-gk[25]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
-                     else {
-                       qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[-gk[244]], kk[-gk[244]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(kk[gk[240]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[244]] -= gk[11])
-                       } while (kk[-gk[244]] > gk[7]);
-                       kk[gk[7]] = -gk[2]
-                     } return kk[gk[7]] > -gk[2] && kk[gk[240]].push((kk[gk[8]] | kk[gk[7]] << kk[-gk[244]]) & gk[12]), hk(kk[gk[240]])
-               }
- 
- ... (4 more removed lines; see GitHub link above)
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = eg(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1969. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14391` → after: `L14197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14197) · [Before (L14391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14391)

```diff
-             kk[gk[35]][BI(gk[354]) + BI(gk[355]) + BI(gk[356]) + gk[357]] = gk[70]
+             SS[oS[0]][HS(517) + rg(oS[268]) + rg(oS[269]) + oS[267]] && (SS[oS[0]][rg(520)] = oS[1]), SS[oS[0]][rg(521) + rg(oS[268]) + rg(oS[269]) + oS[267]] = oS[71]
```

#### 1970. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14394-L14396` → after: `L14200-L14202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14200-L14202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14200-L14202) · [Before (L14394-L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14394-L14396)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[-gk[321]] = 'u,40|8%)v9*.=?[6~z5;}><":_&MCpo/+c`Jm$jDTkXgw7{1OEFSyt!aR(H^xne3LrdAZWsVbPqNBhKYIlfU2i#G]Q@', kk[-gk[238]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[238]].length, kk[gk[10]] = [], kk[-gk[358]] = gk[1], kk[-gk[264]] = gk … [truncated]
-                 if (kk[gk[28]] = kk[-gk[321]].indexOf(kk[-gk[238]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+               for (NH(SS[oS[13]] = oS[2], SS[oS[270]] = '|ASXqhpYBOcHZIWLiglJVbCPdFQ~MxDKeuz>!+m`}w=/2fost9TU1G(608"{#_)?$[@^5]%:,&v7<*.4yrEjRkNn3a;', SS[oS[271]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[271]].length, SS[oS[16]] = [], SS[oS[229]] = oS[1], SS[oS[24]] = oS[1],  … [truncated]
+                 if (SS[oS[6]] = SS[oS[270]].indexOf(SS[oS[271]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
```

#### 1971. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14398` → after: `L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14204) · [Before (L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14398)

```diff
-                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[358]] |= kk[gk[7]] << kk[-gk[264]], kk[-gk[264]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[229]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1972. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14400-L14403` → after: `L14206-L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14206-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14206-L14209) · [Before (L14400-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14400-L14403)

```diff
-                       qF(kk[gk[10]].push(kk[-gk[358]] & gk[12]), kk[-gk[358]] >>= gk[11], kk[-gk[264]] -= gk[11])
-                     } while (kk[-gk[264]] > gk[7]);
-                     kk[gk[7]] = -gk[2]
-                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[358]] | kk[gk[7]] << kk[-gk[264]]) & gk[12]), hk(kk[gk[10]])
+                       NH(SS[oS[16]].push(SS[oS[229]] & oS[12]), SS[oS[229]] >>= oS[11], SS[oS[24]] -= oS[11])
+                     } while (SS[oS[24]] > oS[26]);
+                     SS[oS[26]] = -oS[2]
+                   } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[229]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 1973. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14407` → after: `L14213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14213) · [Before (L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14407)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = AI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = St(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1974. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14409` → after: `L14215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14215) · [Before (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14409)

```diff
-             kk[gk[35]][gI(gk[359]) + gI(gk[360]) + gI(gk[361]) + gk[357]] || (kk[gk[35]][gI(532)] = gk[1]), kk[gk[35]][gI(gk[359]) + gI(gk[360]) + gI(gk[361]) + gk[357]] = gk[58]
+             SS[oS[0]][Ht(oS[272]) + Ht(oS[273]) + Ht(oS[274]) + oS[267]] || (SS[oS[0]][Ht(525)] = oS[1]), SS[oS[0]][Ht(oS[272]) + Ht(oS[273]) + Ht(oS[274]) + oS[267]] = oS[78]
```

#### 1975. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14411-L14414` → after: `L14217-L14219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14217-L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14217-L14219) · [Before (L14411-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14411-L14414)

```diff
-           const cI = Math[Fk(gk[398])](kk[gk[35]][Fk(534)], kk[gk[35]][Fk(gk[362]) + Fk(gk[363]) + Fk(537)]) / kk[gk[35]][Fk(gk[362]) + Fk(gk[363]) + NI(538)],
-             WI = kk[gk[35]][NI(gk[364]) + NI(gk[365]) + gk[335]] + cI * (kk[gk[35]][NI(gk[364]) + NI(541) + gk[335]] - kk[gk[35]][NI(gk[364]) + NI(gk[365]) + gk[335]]);
-           if (kk[gk[10]][gk[310]][gk[2]] <= gk[1] && kk[gk[25]][NI(542) + NI(543)]) kk[gk[10]][NI(544) + NI(545) + NI(546)] = gk[1];
-           else {
+           const lg = Math[HS(oS[324])](SS[oS[0]][HS(527)], SS[oS[0]][og(oS[275]) + og(oS[276]) + og(oS[277])]) / SS[oS[0]][og(oS[275]) + og(oS[276]) + og(oS[277])],
+             mg = SS[oS[0]][og(oS[275]) + og(oS[278]) + oS[249]] + lg * (SS[oS[0]][og(oS[275]) + og(532) + oS[249]] - SS[oS[0]][og(oS[275]) + og(oS[278]) + oS[249]]);
+           if (SS[oS[66]][oS[221]][oS[2]] <= oS[1] && SS[oS[4]][og(533) + og(534)]) {
```

#### 1976. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14416-L14418` → after: `L14221-L14223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14221-L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14221-L14223) · [Before (L14416-L14418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14416-L14418)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'c&1T`*FQH9xu7jX2}R?z86ya^]n0dWLfvKeAG:CbtM.(%3IpBNw4[U=D_,h"JZ/5<o!SO+V~)#i{@$|skP>l;mEgrYq', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[-gk[305]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
-                 if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+               for (NH(SS[oS[13]] = oS[2], SS[oS[279]] = 'uUSrlkjCfnNbVEZYOoeKJBATsMqL&IPdm2^D*W]%y!_~"}/v876|z.xH91w5[);:>#0(3,4?`$=<XFitRhGQ{p@agc+', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[-oS[116]] = oS[1], S … [truncated]
+                 if (SS[-oS[280]] = SS[oS[279]].indexOf(SS[oS[14]][SS[-oS[43]]]), SS[-oS[280]] !== -oS[2])
+                   if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[-oS[280]];
```

#### 1977. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14420` → after: `L14225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14225) · [Before (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14420)

```diff
-                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[305]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     NH(SS[oS[31]] += SS[-oS[280]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[-oS[116]], SS[-oS[116]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1978. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14422-L14425` → after: `L14227-L14230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14227-L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14227-L14230) · [Before (L14422-L14425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14422-L14425)

```diff
-                       qF(kk[gk[10]].push(kk[-gk[305]] & gk[12]), kk[-gk[305]] >>= gk[11], kk[gk[53]] -= gk[11])
-                     } while (kk[gk[53]] > gk[7]);
-                     kk[gk[7]] = -gk[2]
-                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[305]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                       NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[116]] -= oS[11])
+                     } while (SS[-oS[116]] > oS[26]);
+                     SS[oS[31]] = -oS[2]
+                   } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[31]] << SS[-oS[116]]) & oS[12]), mS(SS[oS[66]])
```

#### 1979. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14429-L14448` → after: `L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14234) · [Before (L14429-L14448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14429-L14448)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = mI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-             }
-             kk[gk[10]][hI(547) + hI(548) + hI(549)] = WI / 20
-           }
-           if (qF(kk[gk[25]][NI(550)][NI(551) + NI(552) + NI(553)](NI(gk[364]), .7), kk[gk[10]][NI(554) + gk[377]] = .25, kk[gk[10]][gk[310]][gk[2]] = gk[1]), wk) {
-             function rI(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'NFXPSp=LaeDyJRz.TM^Hfnko%YcQ90s}*ZWlxE"$3Vh]jq_wI7Ai&1+/)8B{v#dCr2u4K:Umb@t~?O;<[G6g|5,!(>`', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[18]] = gk[1], kk[gk[ … [truncated]
-                 if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[239]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[28]];
-                   else {
-                     qF(kk[gk[52]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[18]], kk[gk[18]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                     do {
-                       qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[18]] -= gk[11])
-                     } while (kk[gk[18]] > gk[7]);
-                     kk[gk[52]] = -gk[2]
-                   } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[18]]) & gk[12]), hk(kk[gk[41]])
- ... (4 more removed lines; see GitHub link above)
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = gt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1980. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14450` → after: `L14236-L14239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14236-L14239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14236-L14239) · [Before (L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14450)

```diff
-             for (let MI = gk[1]; MI < uk[DI(555)]; MI++) {
+             SS[oS[66]][tt(535) + tt(536) + tt(537)] = oS[1]
+           } else SS[oS[66]][og(538) + og(539) + og(540)] = mg / oS[214];
+           if (NH(SS[oS[4]][og(541)][og(542) + og(543) + og(544)](og(oS[275]), .7), SS[oS[66]][og(545) + oS[290]] = .25, SS[oS[66]][oS[221]][oS[2]] = oS[1]), jS)
+             for (let bt = oS[1]; bt < yS[og(oS[282])]; bt++) {
```

#### 1981. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14454-L14460` → after: `L14243-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14243-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14243-L14247) · [Before (L14454-L14460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14454-L14460)

```diff
-                 if (qF(lk()[DI(556)](pk, gk[1], WI * Ok[FX], gk[1]), kk[gk[10]][DI(557) + DI(558)](pk)), kk[gk[25]][DI(559) + gk[52]] && kk[gk[35]][DI(560)]) {
-                   function IX(kk) {
-                     var Fk, Ik, Xk, Tk, ik, yk, lk;
-                     for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-                       var ak = 'xu*(;=@DC2}~g`n_Y?/X+pWya)[0q:v<J4wB983{"k1rNL#UmEhebTARKl$6tM!dj.>c5|FPfZSIoGsQHz%^7&,]iOV'.indexOf(Fk[lk]);
-                       if (ak !== -gk[2])
-                         if (yk < gk[1]) yk = ak;
+                 if (NH(NS()[og(oS[283])](AS, oS[1], mg * ES[xt], oS[1]), SS[oS[66]][og(oS[284]) + og(oS[285])](AS)), SS[oS[4]][og(oS[286]) + oS[31]] && SS[oS[0]][og(oS[287])]) {
+                   function Nt(...SS) {
+                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '6:13@(+MDs>ynpKU7&m.XC;WP5]8fVTl"%=/Gu9[gjoxIORr4e0N)YL2dcaib<#kB^}hAZv~*J?qSE$H{Q!tFz`w|_,', SS[-oS[54]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[-oS[54]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1 … [truncated]
+                       if (SS[-oS[281]] = SS[oS[2]].indexOf(SS[-oS[54]][SS[oS[3]]]), SS[-oS[281]] !== -oS[2])
+                         if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[281]];
```

#### 1982. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14462` → after: `L14249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14249) · [Before (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14462)

```diff
-                           qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                           NH(SS[oS[26]] += SS[-oS[281]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1983. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14464-L14469` → after: `L14251-L14254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14251-L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14251-L14254) · [Before (L14464-L14469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14464-L14469)

```diff
-                             qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                           } while (ik > gk[7]);
-                           yk = -gk[2]
-                         }
-                     }
-                     return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                             NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
+                           } while (SS[oS[24]] > oS[26]);
+                           SS[oS[26]] = -oS[2]
+                         } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 1984. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14473` → after: `L14258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14258) · [Before (L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14473)

```diff
-                     return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = IX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                     return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Nt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1985. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14475-L14493` → after: `L14260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14260) · [Before (L14475-L14493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14475-L14493)

```diff
-                   qF(kk[gk[35]][DI(561)] = gk[1], kk[gk[35]][DI(gk[366]) + DI(gk[367]) + DI(564)] = kX, kk[gk[35]][DI(gk[366]) + DI(gk[367]) + XX(565) + XX(566)] = -kk[gk[10]][XX(567) + gk[52]][kX])
-                 }
-               }
-             }
-           } else if (rk)
-             for (let TX = gk[1]; TX < uk[NI(568)]; TX++) {
-               const iX = uk[TX];
-               if (Kk[iX] && kk[gk[10]][NI(569) + gk[52]][iX] !== gk[1]) {
-                 function yX(...kk) {
-                   for (qF(kk[gk[13]] = gk[2], kk[gk[81]] = '{@*>%]nu!:Wq}1`z$9AaG);yINB+hg^V6RF2&Y5j~xCTv0=S[id4Ktp(b#f3EL,wroe?|D_<c78sZHm"PU.kOlM/XQJ', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[306]] = kk[gk[26]].length, kk[gk[44]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], … [truncated]
-                     if (kk[gk[75]] = kk[gk[81]].indexOf(kk[gk[26]][kk[-gk[369]]]), kk[gk[75]] !== -gk[2])
-                       if (kk[gk[368]] < gk[1]) kk[gk[368]] = kk[gk[75]];
-                       else {
-                         qF(kk[gk[368]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[368]] << kk[gk[20]], kk[gk[20]] += (kk[gk[368]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                         do {
-                           qF(kk[gk[44]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
- ... (3 more removed lines; see GitHub link above)
+                   NH(SS[oS[0]][og(552)] = oS[1], SS[oS[0]][og(553) + og(554) + og(555)] = Xt, SS[oS[0]][qt(556) + qt(557) + qt(558)] = -SS[oS[66]][qt(559) + oS[31]][Xt])
```

#### 1986. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14514-L14519` → after: `L14263-L14268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14263-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14263-L14268) · [Before (L14514-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14514-L14519)

```diff
- 
-               function qX(kk) {
-                 return typeof Rk[kk] === gk[14] ? Rk[kk] = aX(Uk[kk]) : Rk[kk]
-               }
-               qF(lk()[NI(gk[373])](pk, gk[1], WI * Ok[xk], gk[1]), kk[gk[10]][NI(574) + qX(575)](pk))
-             } kk[gk[25]][NI(gk[374]) + gk[52]] || (kk[gk[35]][NI(576)] = gk[58]), kk[gk[35]][NI(577)]++
+             } else if (SH)
+               for (let ut = oS[1]; ut < yS[og(oS[282])]; ut++) {
+                 const It = yS[ut];
+                 QS[It] && SS[oS[66]][og(560) + oS[31]][It] !== oS[1] && NH(NS()[og(oS[283])](AS, oS[1], 1.05 * mg, oS[1]), SS[oS[66]][og(oS[284]) + og(oS[285])](AS))
+               } else SS[oS[4]][og(oS[286]) + oS[31]] && NH(NS()[og(oS[283])](AS, oS[1], mg * ES[nS], oS[1]), SS[oS[66]][og(oS[284]) + og(oS[285])](AS));
+           SS[oS[4]][og(oS[286]) + oS[31]] || (SS[oS[0]][og(oS[287])] = oS[78]), SS[oS[0]][og(561)]++
```

#### 1987. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14521-L14524` → after: `L14270-L14275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14270-L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14270-L14275) · [Before (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14521-L14524)

```diff
-           function LX(...kk) {
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'TGwJkv,y<!h3D4mL~t/eaS}{KOF)ZXB;jP7EAp16"M.bd&@IoH[:`V(%|qY+]2xfUN9*Ql_5^$uCzRg?W>nri#c80=s', kk[gk[375]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[375]].length, kk[gk[96]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk … [truncated]
-               if (kk[-gk[232]] = kk[gk[43]].indexOf(kk[gk[375]][kk[gk[376]]]), kk[-gk[232]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[232]];
+           function ft(SS) {
+             var HS, gS, tS, bS, XS, xS, NS;
+             for (NH(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = oS[1], XS = oS[1], xS = -oS[2]), NS = oS[1]; NS < gS; NS++) {
+               var qS = 'uUAXhnJHltT3Y<.q>5$+{j]N0:RBVk?OFPLr^#G1gz;i)WbvIw*8s7%[Qe(!C9pm2Z`}MK~/ad|="oc&f_64EyDx,@S'.indexOf(HS[NS]);
+               if (qS !== -oS[2])
+                 if (xS < oS[1]) xS = qS;
```

#### 1988. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14526` → after: `L14277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14277) · [Before (L14526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14526)

```diff
-                   qF(kk[gk[7]] += kk[-gk[232]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(xS += qS * oS[32], bS |= xS << XS, XS += (xS & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1989. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14528-L14531` → after: `L14279-L14284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14279-L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14279-L14284) · [Before (L14528-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14528-L14531)

```diff
-                     qF(kk[gk[96]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[96]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[96]])
+                     NH(tS.push(bS & oS[12]), bS >>= oS[11], XS -= oS[11])
+                   } while (XS > oS[26]);
+                   xS = -oS[2]
+                 }
+             }
+             return xS > -oS[2] && tS.push((bS | xS << XS) & oS[12]), mS(tS)
```

#### 1990. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14535` → after: `L14288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14288) · [Before (L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14535)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = LX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = ft(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1991. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14537` → after: `L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14290) · [Before (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14537)

```diff
-           qF(kk[gk[25]][tX(578)][tX(579) + tX(580) + tX(581)](tX(582), gk[2]), kk[gk[10]][tX(583) + tX(584) + tX(585)] = Wk, kk[gk[10]][tX(586) + gk[377]] = FF ? ZF : jF, kk[gk[35]][tX(587)] = gk[70], kk[gk[35]][tX(588)] = gk[1])
+           NH(SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](kt(564), oS[2]), SS[oS[66]][kt(565) + kt(566) + kt(567)] = US, SS[oS[66]][kt(568) + oS[290]] = qH ? fH : kH, SS[oS[0]][kt(569)] = oS[71], SS[oS[0]][kt(570)] = oS[1])
```

#### 1992. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14539` → after: `L14292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14292) · [Before (L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14539)

```diff
-         if (kk[gk[35]][Fk(gk[380])] !== -gk[2]) {
+         if (SS[oS[0]][HS(oS[293])] !== -oS[2]) {
```

#### 1993. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14541-L14543` → after: `L14294-L14296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14294-L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14294-L14296) · [Before (L14541-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14541-L14543)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[378]] = '/TLdcAtGKJYBgq<=)w9Ha%W^24,#R0xb`S.izk8f*]ICQ!DUnVOZp1rls&F?NXh6Em"v}P5|[(7>eojM~@$_;{+3:uy', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk … [truncated]
-               if (kk[gk[379]] = kk[gk[378]].indexOf(kk[gk[35]][kk[gk[28]]]), kk[gk[379]] !== -gk[2])
-                 if (kk[gk[89]] < gk[1]) kk[gk[89]] = kk[gk[379]];
+             for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '=~}h*N|sG]&#QiY?)A!kl/LBZxCwo,%.;Ez7SUJ>bvf:`I30FRpgTynur$"6j5X<d1@9O4VM2HcK+W[tq^aD(m8_P{e', SS[oS[291]] = "" + (SS[oS[1]] || ""), SS[oS[292]] = SS[oS[291]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[- … [truncated]
+               if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[291]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
+                 if (SS[-oS[120]] < oS[1]) SS[-oS[120]] = SS[oS[30]];
```

#### 1994. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14545` → after: `L14298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14298) · [Before (L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14545)

```diff
-                   qF(kk[gk[89]] += kk[gk[379]] * gk[29], kk[gk[50]] |= kk[gk[89]] << kk[gk[20]], kk[gk[20]] += (kk[gk[89]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[-oS[120]] += SS[oS[30]] * oS[32], SS[oS[67]] |= SS[-oS[120]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[120]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1995. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14547-L14550` → after: `L14300-L14303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14300-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14300-L14303) · [Before (L14547-L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14547-L14550)

```diff
-                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[89]] = -gk[2]
-                 } return kk[gk[89]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[89]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                     NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
+                   } while (SS[oS[24]] > oS[26]);
+                   SS[-oS[120]] = -oS[2]
+                 } return SS[-oS[120]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[-oS[120]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
```

#### 1996. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14554` → after: `L14307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14307) · [Before (L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14554)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ZX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Kt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1997. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14556-L14558` → after: `L14309-L14311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14309-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14309-L14311) · [Before (L14556-L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14556-L14558)

```diff
-           const eX = kk[gk[35]][Fk(gk[380])] / kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(592) + Fk(593) + Fk(594) + gk[387]],
-             wX = kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(595) + Fk(gk[383])] + eX * (kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(597) + Fk(gk[383])] - kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + jX(598) + jX(599)]);
-           if (lk()[jX(600)](pk, gk[1], gk[1], gk[1]), kk[gk[35]][jX(gk[386])] > gk[1]) {
+           const Gt = SS[oS[0]][HS(oS[293])] / SS[oS[0]][HS(572) + HS(573) + HS(574) + HS(575) + HS(576) + oS[301]],
+             Ct = SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(oS[297]) + jt(oS[296])] + Gt * (SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(581) + jt(oS[296])] - SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(oS[297]) + jt(oS[296])]);
+           if (NS()[jt(582)](AS, oS[1], oS[1], oS[1]), SS[oS[0]][jt(oS[300])] > oS[1]) {
```

#### 1998. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14562-L14563` → after: `L14315-L14316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14315-L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14315-L14316) · [Before (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14562-L14563)

```diff
-           const HX = wX * kk[gk[35]][jX(gk[384]) + jX(gk[385]) + jX(604) + jX(605)];
-           qF(pk[kk[gk[35]][jX(gk[384]) + jX(gk[385]) + jX(606)]] = HX, kk[gk[10]][jX(607) + jX(608)](pk)), ++kk[gk[35]][jX(gk[386])] > kk[gk[35]][jX(609) + jX(610) + jX(611) + jX(612) + jX(613) + gk[387]] && (kk[gk[35]][jX(gk[386])] = -gk[2])
+           const nt = Ct * SS[oS[0]][jt(oS[298]) + jt(oS[299]) + jt(586) + jt(587)];
+           NH(AS[SS[oS[0]][jt(oS[298]) + jt(oS[299]) + jt(588)]] = nt, SS[oS[66]][jt(589) + jt(590)](AS)), ++SS[oS[0]][jt(oS[300])] > SS[oS[0]][jt(oS[294]) + jt(oS[295]) + jt(591) + jt(592) + jt(593) + oS[301]] && (SS[oS[0]][jt(oS[300])] = -oS[2])
```

#### 1999. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14567-L14569` → after: `L14320-L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14320-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14320-L14322) · [Before (L14567-L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14567-L14569)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[55]] = 'Z~ONnsCpmSeIolUrHdBKJktqbghacQ7G9]&Df"?VWiTPLuAEv|jYXRF/>=M06:#`^w}@1[;4x{y%)+$,3_<8z25(!.*', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[388]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
-               if (kk[gk[28]] = kk[gk[55]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+             for (NH(SS[oS[13]] = oS[2], SS[-oS[75]] = 'fuUpFTCsKni4EMj$^98HWvyOhw3V!1`J,xte.RB%aZ~k5A*@XP_q)7>](bz"loSmY&G0:=/D+c2#[|I}rQd6L?;gN<{', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[302]] = SS[oS[14]].length, SS[oS[66]] = [], SS[-oS[226]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
+               if (SS[oS[30]] = SS[-oS[75]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
+                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
```

#### 2000. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14571` → after: `L14324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14324) · [Before (L14571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14571)

```diff
-                   qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[-oS[226]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 2001. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14573-L14576` → after: `L14326-L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14326-L14329) · [Before (L14573-L14576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14573-L14576)

```diff
-                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                   } while (kk[gk[53]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+                     NH(SS[oS[66]].push(SS[-oS[226]] & oS[12]), SS[-oS[226]] >>= oS[11], SS[oS[9]] -= oS[11])
+                   } while (SS[oS[9]] > oS[26]);
+                   SS[oS[26]] = -oS[2]
+                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[-oS[226]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
```

#### 2002. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14580` → after: `L14333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14333) · [Before (L14580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14580)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = xX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Qt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 2003. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14582-L14584` → after: `L14335-L14337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14335-L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14335-L14337) · [Before (L14582-L14584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14582-L14584)

```diff
-           if (qF(kk[gk[35]][Fk(gk[393])] = gk[1], kk[gk[25]][Fk(gk[392])][PX(616) + PX(617) + PX(618)](PX(619), .8)), kk[gk[25]][PX(620) + PX(621)] && yk === ik[gk[394]][PX(622) + gk[395]]) {
-             const KX = TF(kk[gk[10]][gk[310]][gk[2]], gk[50]);
-             qF(lk()[PX(gk[389])](pk, gk[1], -KX, gk[1]), kk[gk[10]][PX(gk[390]) + PX(gk[391])](pk))
+           if (NH(SS[oS[0]][HS(594)] = oS[1], SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(595), .8)), SS[oS[4]][HS(oS[364]) + HS(oS[328])] && xS === XS[oS[208]][Dt(598) + oS[305]]) {
+             const wt = tH(SS[oS[66]][oS[221]][oS[2]], oS[67]);
+             NH(NS()[Dt(oS[307])](AS, oS[1], -wt, oS[1]), SS[oS[66]][Dt(600) + Dt(601)](AS))
```

#### 2004. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14586-L14588` → after: `L14339-L14357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14339-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14339-L14357) · [Before (L14586-L14588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14586-L14588)

```diff
-           if (kk[gk[25]][PX(626) + gk[52]]) {
-             const QX = TF(kk[gk[10]][gk[310]][gk[2]], gk[25]);
-             qF(lk()[PX(gk[389])](pk, gk[1], QX, gk[1]), kk[gk[10]][PX(gk[390]) + PX(gk[391])](pk))
+           if (SS[oS[4]][Dt(602) + oS[31]]) {
+             function ht(...SS) {
+               for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'DEi1NBxsy/O:>j_JmA`?0rpfu5I6}^RbZ|PC3kGKv[g]o!SXz4w@;"d<nLqh&%U27)t#HYT$c*{+8VQ(~,9=al.WMFe', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[206]] = SS[oS[0]].length, SS[-oS[134]] = [], SS[-oS[306]] = oS[1], SS[oS[55]] = oS[1], S … [truncated]
+                 if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                   if (SS[-oS[271]] < oS[1]) SS[-oS[271]] = SS[oS[6]];
+                   else {
+                     NH(SS[-oS[271]] += SS[oS[6]] * oS[32], SS[-oS[306]] |= SS[-oS[271]] << SS[oS[55]], SS[oS[55]] += (SS[-oS[271]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     do {
+                       NH(SS[-oS[134]].push(SS[-oS[306]] & oS[12]), SS[-oS[306]] >>= oS[11], SS[oS[55]] -= oS[11])
+                     } while (SS[oS[55]] > oS[26]);
+                     SS[-oS[271]] = -oS[2]
+                   } return SS[-oS[271]] > -oS[2] && SS[-oS[134]].push((SS[-oS[306]] | SS[-oS[271]] << SS[oS[55]]) & oS[12]), mS(SS[-oS[134]])
+             }
+ 
+             function Zt(...SS) {
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = ht(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+ ... (3 more added lines; see GitHub link above)
```

#### 2005. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14590` → after: `L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14359) · [Before (L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14590)

```diff
-         } else if (qF(kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(630), gk[2]), kk[gk[35]][Fk(gk[393])]++), eF && kk[gk[25]][Fk(gk[284]) + gk[52]] && !FF && !wk && !Mk && !rk && !sk && yk === ik[gk[394]][Fk(gk[410]) + gk[395]]) {
+         } else {
```

#### 2006. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14592-L14594` → after: `L14361-L14363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14361-L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14361-L14363) · [Before (L14592-L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14592-L14594)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'E~DgjNFbn2orX)OtZz{3*!0<lUI_JQ[udL`TfCW$4&(=VR+:BK/91isvHmP5S^wMA>"h|@}Gyk7]ace.%#;8q,pYx6?', kk[-gk[110]] = "" + (kk[gk[1]] || ""), kk[gk[396]] = kk[-gk[110]].length, kk[gk[41]] = [], kk[gk[397]] = gk[1], kk[-gk[346]] = gk[1], … [truncated]
-               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[110]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+             for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'z]8&x04u3#|?v@%);{^67>"+,5MrqgVSpTeJmEYURiFlbDLNaOAGkKtPXjB[_*(<y1nsCQ}9h=foI`~/wc:ZHW.!$2d', SS[-oS[308]] = "" + (SS[oS[1]] || ""), SS[-oS[17]] = SS[-oS[308]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
+               if (SS[oS[6]] = SS[oS[2]].indexOf(SS[-oS[308]][SS[oS[131]]]), SS[oS[6]] !== -oS[2])
+                 if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
```

#### 2007. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14596` → after: `L14365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14365) · [Before (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14596)

```diff
-                   qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[397]] |= kk[gk[52]] << kk[-gk[346]], kk[-gk[346]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 2008. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14598-L14601` → after: `L14367-L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14367-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14367-L14370) · [Before (L14598-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14598-L14601)

```diff
-                     qF(kk[gk[41]].push(kk[gk[397]] & gk[12]), kk[gk[397]] >>= gk[11], kk[-gk[346]] -= gk[11])
-                   } while (kk[-gk[346]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[397]] | kk[gk[52]] << kk[-gk[346]]) & gk[12]), hk(kk[gk[41]])
+                     NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[9]] -= oS[11])
+                   } while (SS[oS[9]] > oS[26]);
+                   SS[oS[26]] = -oS[2]
+                 } return SS[oS[26]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[66]])
```

#### 2009. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14605` → after: `L14374-L14394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14374-L14394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14374-L14394) · [Before (L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14605)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = sX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Ot(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           }
+           if (NH(SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](dt(605), oS[2]), SS[oS[0]][dt(606)]++), aH && SS[oS[4]][dt(607) + oS[31]] && !qH && !jS && !gH && !SH && !wS && xS === XS[oS[208]][dt(608) + oS[305]]) {
+             function ct(...SS) {
+               for (NH(SS[oS[13]] = oS[2], SS[oS[309]] = 'f:aS,0Eu?vw`RO8JGN~Y&3)@4/e|M!]id([B}rDt+Im;kxP=2pTjH>FbU6qQcoy5n1{^s<l#g.K$z"W*_L7ZAVhCX%9', SS[oS[310]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[310]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[-oS[45]] = oS[1], S … [truncated]
+                 if (SS[oS[30]] = SS[oS[309]].indexOf(SS[oS[310]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
+                   if (SS[-oS[114]] < oS[1]) SS[-oS[114]] = SS[oS[30]];
+                   else {
+                     NH(SS[-oS[114]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[-oS[114]] << SS[-oS[45]], SS[-oS[45]] += (SS[-oS[114]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                     do {
+                       NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[45]] -= oS[11])
+                     } while (SS[-oS[45]] > oS[26]);
+                     SS[-oS[114]] = -oS[2]
+                   } return SS[-oS[114]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[-oS[114]] << SS[-oS[45]]) & oS[12]), mS(SS[oS[16]])
+             }
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 2010. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14611` → after: `L14398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14398) · [Before (L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14611)

```diff
-       if (kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(gk[402]) + gk[403], !kk[gk[35]][Fk(gk[286]) + gk[52]] && sk ? .07 : gk[2]), !sk || kk[gk[35]][Fk(gk[286]) + gk[52]] || FF || qF(kk[gk[10]][gk[310]][gk[2]] = gk[1], kk[gk[10]][Fk(gk[249]) + Fk(gk[250]) + … [truncated]
+       if (SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(oS[311]) + oS[312], !SS[oS[0]][HS(oS[228]) + oS[31]] && wS ? .07 : oS[2]), wS && !SS[oS[0]][HS(oS[228]) + oS[31]] && !qH) {
```

#### 2011. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14613-L14615` → after: `L14400-L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14400-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14400-L14402) · [Before (L14613-L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14613-L14615)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[47]] = '_uAB"{Iy*`}q5i:J<oztQ14Gbdvfr?w#8m]OD~!Vs^N(Hl/X%kR7ej.&x29|=FnT,;$YSP6hZU+KE0c[>a@gC3WL)Mp', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[gk[7] … [truncated]
-             if (kk[gk[143]] = kk[gk[47]].indexOf(kk[gk[35]][kk[gk[126]]]), kk[gk[143]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[143]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'T@KoirFRXQADu0[&~v$Z;Bfg7Gp8h}d?>MI#S5C%y=1.6zqY,])2ce:<(3Nkm9!JstHEn"aLV*4xl/wW+^jUO_`b{P|', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[94]] = oS[1], SS[oS[20]] = oS[1], SS[oS[31]] … [truncated]
+             if (SS[oS[129]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[129]] !== -oS[2])
+               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[129]];
```

#### 2012. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14617` → after: `L14404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14404) · [Before (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14617)

```diff
-                 qF(kk[gk[7]] += kk[gk[143]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[oS[31]] += SS[oS[129]] * oS[32], SS[oS[94]] |= SS[oS[31]] << SS[oS[20]], SS[oS[20]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 2013. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14619-L14622` → after: `L14406-L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14406-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14406-L14428) · [Before (L14619-L14622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14619-L14622)

```diff
-                   qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                 } while (kk[gk[53]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
-               } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                   NH(SS[oS[66]].push(SS[oS[94]] & oS[12]), SS[oS[94]] >>= oS[11], SS[oS[20]] -= oS[11])
+                 } while (SS[oS[20]] > oS[26]);
+                 SS[oS[31]] = -oS[2]
+               } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[94]] | SS[oS[31]] << SS[oS[20]]) & oS[12]), mS(SS[oS[66]])
+         }
+ 
+         function Yt(...SS) {
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Lt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+         }
+         NH(SS[oS[66]][oS[221]][oS[2]] = oS[1], SS[oS[66]][HS(oS[162]) + Yt(617) + Yt(618)] = .15 * US)
+       }
+       if (uH[HS(oS[313])] > oS[1]) {
+         function At(...SS) {
+           for (NH(SS[oS[13]] = oS[2], SS[oS[100]] = '0+x?"1#[v2&w6:!y8}>4OJ|onD(ulE%ij`3T,CUK.XGMq~^@*pHs9BAtNzW<rm/=$]7V5I_)efcFR;YdLhQZ{kPabgS', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[144]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[314]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[ … [truncated]
+             if (SS[oS[316]] = SS[oS[100]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[316]] !== -oS[2])
+               if (SS[-oS[315]] < oS[1]) SS[-oS[315]] = SS[oS[316]];
+ ... (7 more added lines; see GitHub link above)
```

#### 2014. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14626-L14642` → after: `L14432-L14451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14432-L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14432-L14451) · [Before (L14626-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14626-L14642)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = SX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-         }
-         const vX = kk[gk[1]][Fk(gk[248])][Fk(639)](kk[gk[2]], LF);
-         kk[gk[25]][Fk(gk[392])][oX(640) + oX(641) + oX(642)](oX(643) + oX(644) + gk[405], vX)
-       } else kk[gk[35]][Fk(gk[286]) + gk[52]] && kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(645) + Fk(646) + gk[405], gk[2]);
-       if (kk[gk[53]] = gk[2], ek[Fk(gk[392])] && FF && !Qk)
-         for (let EX = gk[1]; EX < LF[Fk(gk[404])]; EX++) {
-           const OX = ek[Fk(gk[392])][LF[EX]];
-           Math[Fk(gk[330])](OX - gk[2]) > Math[Fk(gk[330])](kk[gk[53]] - gk[2]) && (kk[gk[53]] = OX)
-         }
-       kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(647) + Fk(648) + Fk(649) + Fk(650), kk[gk[53]]);
-       const VF = (gk[1], Lk[gk[112]])(qk, Qk, FF);
-       qF(kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(gk[406]) + Fk(651) + Fk(652) + Fk(653) + gk[421], VF), kk[gk[1]].MJ.aN(kk[gk[35]][gk[407]]).uC = (gk[1], Lk[gk[285]])(ek[Fk(gk[408]) + Fk(gk[409])], LF, qk[Fk(gk[408]) + Fk(gk[409])])), yk === ik[gk[394] … [truncated]
-       const zF = kk[gk[25]][gk[317]] * kk[gk[25]][Fk(gk[392])][Fk(659) + Fk(660) + Fk(661) + Fk(662)]() * (kk[gk[35]][Fk(gk[286]) + gk[52]] ? XF(kk[gk[1]], kk[gk[2]], Nk) : gk[2]),
-         SF = Number[Fk(663)](zF) ? gk[1] : Math[Fk(gk[412])](-Tk[gk[53]][Fk(gk[413]) + Fk(gk[328])], Math[Fk(gk[398])](zF, Tk[gk[53]][Fk(gk[413]) + Fk(gk[328])]));
-       qk[Fk(gk[414]) + gk[415]] && qk[Fk(gk[414]) + gk[415]][Fk(gk[416]) + Fk(gk[417])] > gk[1] && (FF || Qk && qk[Fk(gk[414]) + gk[415]][Fk(668)]) && (gk[1], zk[gk[41]])(kk[gk[10]], kk[gk[35]][Fk(gk[414]) + Fk(669) + Fk(gk[440])], qk[Fk(gk[414]) + gk[415]][Fk(gk[416]) + Fk(gk[41 … [truncated]
- ... (1 more removed lines; see GitHub link above)
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = At(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+         }
+         const Vt = SS[oS[1]][HS(oS[160])][HS(619)](SS[oS[2]], uH);
+         SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](yt(620) + yt(621) + oS[317], Vt)
+       } else SS[oS[0]][HS(oS[228]) + oS[31]] && SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(622) + HS(623) + oS[317], oS[2]);
+       if (SS[oS[9]] = oS[2], KS[HS(oS[288])] && qH && !DS)
+         for (let it = oS[1]; it < uH[HS(oS[313])]; it++) {
+           const Wt = KS[HS(oS[288])][uH[it]];
+           Math[HS(oS[244])](Wt - oS[2]) > Math[HS(oS[244])](SS[oS[9]] - oS[2]) && (SS[oS[9]] = Wt)
+         }
+       SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(624) + HS(625) + HS(626) + HS(627), SS[oS[9]]);
+       const wH = (oS[1], IS[oS[318]])(uS, DS, qH);
+       NH(SS[oS[4]][HS(oS[288])][HS(oS[289]) + HS(oS[303]) + HS(oS[304])](HS(oS[319]) + HS(628) + HS(629) + HS(630) + oS[342], wH), SS[oS[1]].FQ.vW(SS[oS[0]][oS[320]]).yV = (oS[1], IS.q)(KS[HS(oS[321]) + HS(oS[322])], uH, uS[HS(oS[321]) + HS(oS[322])])), xS === XS[oS[208]][HS(633) … [truncated]
+       const hH = SS[oS[4]][oS[232]] * SS[oS[4]][HS(oS[288])][HS(637) + HS(638) + HS(639) + HS(640)]() * (SS[oS[0]][HS(oS[228]) + oS[31]] ? function(...SS) {
+           var HS = {};
+           return TS = [SS, HS], rS(lS(711), lS(oS[368]) + lS(oS[369]), lS(oS[370]) + lS(oS[371]))[lS(oS[372]) + lS(oS[373])]
+ ... (4 more added lines; see GitHub link above)
```

#### 2015. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14644-L14648` → after: `L14453-L14489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14453-L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14453-L14489) · [Before (L14644-L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14644-L14648)

```diff
-         const nX = (Math[Fk(672)](kk[gk[10]][gk[310]][gk[1]] * kk[gk[10]][gk[310]][gk[1]] + kk[gk[10]][gk[310]][gk[35]] * kk[gk[10]][gk[310]][gk[35]]) - oF[Fk(673) + gk[80]]) * oF[Fk(gk[418]) + Fk(675) + Fk(676) + gk[394]];
-         if (nX > gk[1] && kk[gk[10]][gk[310]][gk[2]] < nX) {
-           const GX = kk[gk[50]] / 1e3,
-             pX = (nX - kk[gk[10]][gk[310]][gk[2]]) * jk[gk[4]][Fk(677) + Fk(678)](oF[Fk(gk[418]) + Fk(679) + Fk(680)] * GX);
-           qF(lk()[Fk(gk[420])](pk, gk[1], pX * kk[gk[10]].Xq / GX, gk[1]), kk[gk[10]][Fk(682) + Fk(683)](pk))
+         function zt(...SS) {
+           for (NH(SS[oS[13]] = oS[2], SS[-oS[332]] = 'rf0&5?Z8/MlGzj]7,!RnFWB"kpe4J>#(@+1AQ_~P[:N{}*6yq^Xx`<CL=2%wbt3;9Iv.)u|$mDOiEKhUSTsgVHcaoYd', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[-oS[331]] = [], SS[-oS[85]] = oS[1], SS[oS[9]] = oS[1], SS[-o … [truncated]
+             if (SS[oS[6]] = SS[-oS[332]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+               if (SS[-oS[40]] < oS[1]) SS[-oS[40]] = SS[oS[6]];
+               else {
+                 NH(SS[-oS[40]] += SS[oS[6]] * oS[32], SS[-oS[85]] |= SS[-oS[40]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[40]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 do {
+                   NH(SS[-oS[331]].push(SS[-oS[85]] & oS[12]), SS[-oS[85]] >>= oS[11], SS[oS[9]] -= oS[11])
+                 } while (SS[oS[9]] > oS[26]);
+                 SS[-oS[40]] = -oS[2]
+               } return SS[-oS[40]] > -oS[2] && SS[-oS[331]].push((SS[-oS[85]] | SS[-oS[40]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[331]])
+         }
+ 
+         function Ut(...SS) {
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = zt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+         }
+ ... (21 more added lines; see GitHub link above)
```

#### 2016. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14656-L14657` → after: `L14497-L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14497-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14497-L14498) · [Before (L14656-L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14656-L14657)

```diff
-             tk = null === ak.durationMs || !Xk.floatStartTicksAgo || Xk.floatStartTicksAgo < ak.durationMs / 1e3 * Tk.f.clientTicksPerSecond,
-             Zk = Xk.isInAir && !lk && (yk.TH[1] < 0 || Lk === qk) && !Xk.hitWhilstAirborne(qk) && tk,
+             fS = null === qS.durationMs || !tS.floatStartTicksAgo || tS.floatStartTicksAgo < qS.durationMs / 1e3 * bS.e.clientTicksPerSecond,
+             kS = tS.isInAir && !NS && (xS.xG[1] < 0 || IS === uS) && !tS.hitWhilstAirborne(uS) && fS,
```

#### 2017. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14659-L14661` → after: `L14500-L14502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14500-L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14500-L14502) · [Before (L14659-L14661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14659-L14661)

```diff
-             ek = !Zk && Lk !== ik.m.NORMAL;
-           return Xk.movementType = Zk ? qk : ik.m.NORMAL, jk ? Fk.bloxd.updatePositionAndPhysics(Ik, Xk.physicsState, !1, void 0, !0) : ek && (ak.exitsVehicleOnEnd ? Fk.bloxd.removeConsumableVehiclePhysics(Ik, Xk.hasTakenOffTheGround) : Fk.bloxd.updatePositionAndPhysics(Ik, {
-             type: ik.n.DEFAULT,
+             KS = !kS && IS !== XS.l.NORMAL;
+           return tS.movementType = kS ? uS : XS.l.NORMAL, aS ? HS.bloxd.updatePositionAndPhysics(gS, tS.physicsState, !1, void 0, !0) : KS && (qS.exitsVehicleOnEnd ? HS.bloxd.removeConsumableVehiclePhysics(gS, tS.hasTakenOffTheGround) : HS.bloxd.updatePositionAndPhysics(gS, {
+             type: XS.o.DEFAULT,
```

#### 2018. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14663-L14665` → after: `L14504-L14506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14504-L14506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14504-L14506) · [Before (L14663-L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14663-L14665)

```diff
-           }, !1, void 0, !0)), (jk || ek) && Fk.bloxd.onMovementTypeChanged(Ik, Xk.movementType, Lk), Xk.isOnGround() ? (Xk.setHitWhilstAirborne(qk, !1), null !== ak.durationMs && (Xk.hasTakenOffTheGround = !1, Xk.floatStartTicksAgo = null)) : null !== ak.durationMs && yk.TH[1] < … [truncated]
-         }(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[10]], Qk),
-         EF = kk[gk[10]][Fk(684) + Fk(685) + Fk(gk[419])],
+           }, !1, void 0, !0)), (aS || KS) && HS.bloxd.onMovementTypeChanged(gS, tS.movementType, IS), tS.isOnGround() ? (tS.setHitWhilstAirborne(uS, !1), null !== qS.durationMs && (tS.hasTakenOffTheGround = !1, tS.floatStartTicksAgo = null)) : null !== qS.durationMs && xS.xG[1] < … [truncated]
+         }(uS, SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[66]], DS),
+         dH = SS[oS[66]][HS(oS[338]) + HS(oS[339]) + HS(oS[340])],
```

#### 2019. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14667-L14672` → after: `L14508-L14513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14508-L14513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14508-L14513) · [Before (L14667-L14672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14667-L14672)

```diff
-       if (OF ? qF(lk()[Fk(gk[444])](EF, Ck), kk[gk[10]][gk[348]]()) : EF[gk[1]] === gk[1] && EF[gk[2]] === gk[1] && EF[gk[35]] === gk[1] || lk()[Fk(gk[420])](EF, gk[1], gk[1], gk[1]), !qk[Fk(687) + Fk(688) + Fk(689) + gk[421]]) {
-         OF && lk()[Fk(690) + "ct"](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], EF);
-         const uX = qk[Fk(gk[424]) + Fk(692)];
-         if (uX !== gk[64] && kk[gk[35]][Fk(gk[422]) + Fk(gk[423])] === uX[Fk(693) + Fk(694) + Fk(gk[423])] && qk[Fk(gk[424]) + Fk(gk[425]) + Fk(gk[426])] !== gk[64]) Jk(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF, kk[gk[50]], vF);
-         else if (qk[Fk(gk[424]) + Fk(gk[425]) + Fk(gk[426])] !== gk[64])
-           if (kk[gk[25]][gk[317]])(gk[1], Zk[gk[4]])(kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF, qk);
+       if (cH ? NH(NS()[HS(oS[367])](dH, vS), SS[oS[66]][oS[265]]()) : dH[oS[1]] === oS[1] && dH[oS[2]] === oS[1] && dH[oS[0]] === oS[1] || NS()[HS(oS[341])](dH, oS[1], oS[1], oS[1]), !uS[HS(662) + HS(663) + HS(664) + oS[342]]) {
+         cH && NS()[HS(665) + "ct"](SS[oS[66]][oS[221]], SS[oS[66]][oS[221]], dH);
+         const Rt = uS[HS(oS[345]) + HS(667)];
+         if (Rt !== oS[48] && SS[oS[0]][HS(oS[343]) + HS(oS[344])] === Rt[HS(668) + HS(669) + HS(oS[344])] && uS[HS(oS[345]) + HS(oS[346]) + HS(oS[347])] !== oS[48]) CS(uS, SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[4]], SS[oS[66]], ZH, SS[oS[67]], OH);
+         else if (uS[HS(oS[345]) + HS(oS[346]) + HS(oS[347])] !== oS[48])
+           if (SS[oS[4]][oS[232]])(oS[1], kS[oS[16]])(SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[4]], SS[oS[66]], ZH, uS);
```

#### 2020. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14675-L14677` → after: `L14516-L14518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14516-L14518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14516-L14518) · [Before (L14675-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14675-L14677)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'pYb03[1"uvm#L6PqA5B)E4,;/Ff?e!87^J<9(izTjtH}%`&M=y:w*xCZkaU$@GVg~>|_.]Rr2+{QIWDKclnXhSOsodN', kk[-gk[50]] = "" + (kk[gk[1]] || ""), kk[-gk[69]] = kk[-gk[50]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk … [truncated]
-                 if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[50]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
-                   if (kk[gk[125]] < gk[1]) kk[gk[125]] = kk[gk[75]];
+               for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '4FUdsgtXAeLrCqDBQmbu"~}HPEIM!`V=6v@Z:[w#]0z%KJNjxpY/acRS{_(8,*y9h5.i^o$lW7>nGkT+O1|2f)?3;&<', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[0]].length, SS[oS[16]] = [], SS[-oS[306]] = oS[1], SS[-oS[103]] = oS[1], SS[ … [truncated]
+                 if (SS[-oS[227]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[94]]]), SS[-oS[227]] !== -oS[2])
+                   if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[227]];
```

#### 2021. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14679` → after: `L14520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14520) · [Before (L14679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14679)

```diff
-                     qF(kk[gk[125]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[125]] << kk[gk[20]], kk[gk[20]] += (kk[gk[125]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     NH(SS[oS[26]] += SS[-oS[227]] * oS[32], SS[-oS[306]] |= SS[oS[26]] << SS[-oS[103]], SS[-oS[103]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 2022. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14681-L14684` → after: `L14522-L14525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14522-L14525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14522-L14525) · [Before (L14681-L14684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14681-L14684)

```diff
-                       qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                     } while (kk[gk[20]] > gk[7]);
-                     kk[gk[125]] = -gk[2]
-                   } return kk[gk[125]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[125]] << kk[gk[20]]) & gk[12]), hk(kk[gk[10]])
+                       NH(SS[oS[16]].push(SS[-oS[306]] & oS[12]), SS[-oS[306]] >>= oS[11], SS[-oS[103]] -= oS[11])
+                     } while (SS[-oS[103]] > oS[26]);
+                     SS[oS[26]] = -oS[2]
+                   } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[-oS[306]] | SS[oS[26]] << SS[-oS[103]]) & oS[12]), mS(SS[oS[16]])
```

#### 2023. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14688` → after: `L14529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14529) · [Before (L14688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14688)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = bX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = Tt(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 2024. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14690` → after: `L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14531) · [Before (L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14690)

```diff
-             kk[gk[10]][Fk(697) + gk[377]] = qk[Fk(698) + RX(699) + RX(700)]
+             SS[oS[66]][HS(672) + oS[290]] = uS[HS(673) + HS(674) + ot(675)]
```

#### 2025. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14692-L14693` → after: `L14533-L14534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14533-L14534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14533-L14534) · [Before (L14692-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14692-L14693)

```diff
-         else(gk[1], tk[gk[4]])(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF);
-         OF && lk()[Fk(701)](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], EF)
+         else(oS[1], fS[oS[16]])(uS, SS[oS[1]], SS[oS[2]], SS[oS[0]], SS[oS[4]], SS[oS[66]], ZH);
+         cH && NS()[HS(676)](SS[oS[66]][oS[221]], SS[oS[66]][oS[221]], dH)
```

#### 2026. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14695-L14713` → after: `L14536-L14538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14536-L14538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14536-L14538) · [Before (L14695-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14695-L14713)

```diff
-       const nF = lk()[Fk(gk[431])](kk[gk[10]][gk[310]]);
-       if (Number[gk[430]](nF)) {
-         function UX(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[427]] = '8DlmPF()7G6b+W$uk;SUO/cX%3wg2[^J@jC&pyosri,LHI5|"*YdB0{Vf:vA}~N#nQe.Ex_<]a49K!qh1zTM`=>?RtZ', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[305]] = gk[1], kk[gk[7 … [truncated]
-             if (kk[-gk[18]] = kk[gk[427]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[-gk[18]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[18]];
-               else {
-                 qF(kk[gk[7]] += kk[-gk[18]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[305]], kk[gk[305]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                 do {
-                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[305]] -= gk[11])
-                 } while (kk[gk[305]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
-               } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[305]]) & gk[12]), hk(kk[gk[41]])
-         }
- 
-         function CX(...kk) {
- ... (3 more removed lines; see GitHub link above)
+       const vH = NS()[HS(oS[349])](SS[oS[66]][oS[221]]);
+       if (Number[oS[348]](vH)) {
+         if (vH > bS[oS[44]][HS(oS[325]) + HS(oS[238])]) {
```

#### 2027. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14715-L14718` → after: `L14540-L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14540-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14540-L14543) · [Before (L14715-L14718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14715-L14718)

```diff
-           const NX = Date[CX(712)]();
-           NX - Gk >= 6e4 && qF(console[CX(713)](CX(714) + CX(715) + CX(716) + CX(717) + CX(718) + CX(719) + gk[432] + nF + CX(720) + Tk[gk[53]][CX(gk[428]) + CX(gk[429])] + " (" + nk + CX(721)), nk = gk[1], Gk = NX);
-           const cX = Tk[gk[53]][CX(gk[428]) + CX(gk[429])] / nF;
-           qF(lk()[CX(722)](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], cX), kk[gk[10]][gk[348]]())
+           const lt = Date[HS(685)]();
+           lt - YS >= 6e4 && NH(console[HS(686)](HS(oS[350]) + HS(oS[351]) + HS(689) + HS(690) + HS(691) + HS(692) + oS[352] + vH + HS(693) + bS[oS[44]][HS(oS[325]) + HS(oS[238])] + " (" + LS + HS(694)), LS = oS[1], YS = lt);
+           const mt = bS[oS[44]][HS(oS[325]) + HS(oS[238])] / vH;
+           NH(NS()[HS(695)](SS[oS[66]][oS[221]], SS[oS[66]][oS[221]], mt), SS[oS[66]][oS[265]]())
```

#### 2028. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14720-L14721` → after: `L14545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14545) · [Before (L14720-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14720-L14721)

```diff
-       } else qF(console[Fk(gk[434])](new Error(Fk(704) + Fk(705) + Fk(706) + Fk(707) + Fk(708) + ": " + kk[gk[10]][gk[310]])[Fk(gk[436])]), lk()[Fk(gk[420])](kk[gk[10]][gk[310]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]());
-       if (!Number[gk[430]](lk()[Fk(gk[431])](kk[gk[10]][gk[433]]))) {
+       } else {
```

#### 2029. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14723-L14725` → after: `L14547-L14549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14547-L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14547-L14549) · [Before (L14723-L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14723-L14725)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[-gk[127]] = '[<vy3&>(x6l$).9@VHSP?zAUfje#2}YL!"Qr`=Im^_5cD8Z~J%]+*aB/d|sqCgF7:wXMu1Kk,WipEO;NtT{RhobnG40', kk[-gk[79]] = "" + (kk[gk[1]] || ""), kk[gk[157]] = kk[-gk[79]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[-gk[143]] = gk[1], k … [truncated]
-             if (kk[gk[75]] = kk[-gk[127]].indexOf(kk[-gk[79]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+           for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'WIFsT#G7odq0Hfx?bL3`z+gK5S=ON(M]^U@9mtEnR>wiVAjkYC:P*lr,8hcJaDpQvBu<%[yeX1_.|$)/~6;!{"&}24Z', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[334]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[-oS[80 … [truncated]
+             if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[159]]]), SS[oS[6]] !== -oS[2])
+               if (SS[-oS[80]] < oS[1]) SS[-oS[80]] = SS[oS[6]];
```

#### 2030. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14727` → after: `L14551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14551) · [Before (L14727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14727)

```diff
-                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[-gk[143]], kk[-gk[143]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[-oS[80]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[-oS[80]] << SS[oS[24]], SS[oS[24]] += (SS[-oS[80]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 2031. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14729-L14732` → after: `L14553-L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14553-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14553-L14556) · [Before (L14729-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14729-L14732)

```diff
-                   qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[143]] -= gk[11])
-                 } while (kk[-gk[143]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[52]] << kk[-gk[143]]) & gk[12]), hk(kk[gk[41]])
+                   NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
+                 } while (SS[oS[24]] > oS[26]);
+                 SS[-oS[80]] = -oS[2]
+               } return SS[-oS[80]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[-oS[80]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 2032. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14736` → after: `L14560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14560) · [Before (L14736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14736)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = WX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = et(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 2033. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14738` → after: `L14562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14562) · [Before (L14738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14738)

```diff
-         qF(console[fX(723)](new Error(fX(724) + fX(725) + fX(726) + gk[432] + kk[gk[10]][gk[433]])[fX(727)]), lk()[fX(728)](kk[gk[10]][gk[433]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]())
+         NH(console[rt(678)](new Error(rt(679) + rt(680) + rt(681) + rt(682) + SS[oS[66]][oS[221]])[rt(683)]), NS()[rt(684)](SS[oS[66]][oS[221]], oS[1], oS[1], oS[1]), SS[oS[66]][oS[265]]())
```

#### 2034. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14740` → after: `L14564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14564) · [Before (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14740)

```diff
-       Number[gk[430]](lk()[Fk(gk[431])](kk[gk[10]][gk[435]])) || qF(console[Fk(gk[434])](new Error(Fk(729) + Fk(730) + Fk(731) + Fk(732) + Fk(733) + kk[gk[10]][gk[435]])[Fk(gk[436])]), lk()[Fk(gk[420])](kk[gk[10]][gk[435]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]()), qF(kk[gk[3 … [truncated]
+       Number[oS[348]](NS()[HS(oS[349])](SS[oS[66]][oS[353]])) || NH(console[HS(oS[354])](new Error(HS(oS[350]) + HS(oS[351]) + HS(697) + HS(698) + HS(699) + oS[352] + SS[oS[66]][oS[353]])[HS(oS[356])]), NS()[HS(oS[341])](SS[oS[66]][oS[353]], oS[1], oS[1], oS[1]), SS[oS[66]][oS[26 … [truncated]
```

#### 2035. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14742-L14750` → after: `L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14566) · [Before (L14742-L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14742-L14750)

```diff
-     const FF = gk[61];
- 
-     function IF(...kk) {
-       return Ak = [kk, {}], Mk(mk(740))
-     }
- 
-     function XF(...kk) {
-       return Ak = [kk, {}], Mk(mk(741))
-     }
+     const gH = oS[43];
```

#### 2036. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14753-L14755` → after: `L14569-L14570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14569-L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14569-L14570) · [Before (L14753-L14755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14753-L14755)

```diff
-       var Fk;
-       return Fk = {
-         get [mk(742) + gk[131]]() {
+       var HS = {
+         get [lS(718)]() {
```

#### 2037. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14758-L14775` → after: `L14573-L14574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14573-L14574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14573-L14574) · [Before (L14758-L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14758-L14775)

```diff
-       }, Ak = [kk, Fk], Mk(function(...kk) {
-         return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'xTBOGmMAjhp=HQ?6a:!N{UW2/`S8|CK3oXsIw&)E~L]vJFc9>"qP%^4#zer;d(R.[ut@Z$i1bkY,nyD<Vf*}l_507+g', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[351]] = gk[1], kk[gk[52] … [truncated]
-             if (kk[-gk[20]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[232]]]), kk[-gk[20]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[-gk[20]];
-               else {
-                 qF(kk[gk[52]] += kk[-gk[20]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[351]], kk[gk[351]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                 do {
-                   qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[351]] -= gk[11])
-                 } while (kk[gk[351]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[52]] << kk[gk[351]]) & gk[12]), hk(kk[gk[10]])
-         }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-       }(743))
-     }
- 
- ... (2 more removed lines; see GitHub link above)
+       };
+       return TS = [SS, HS], rS(lS(719), lS(oS[368]) + lS(oS[369]), lS(oS[370]) + lS(oS[371]))[lS(oS[372]) + lS(oS[373])]
```

#### 2038. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14779` → after: `L14578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14578) · [Before (L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14779)

```diff
-       return Ak = [kk, {}], Mk(mk(745))
+       return SH(SS)
```

#### 2039. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14783` → after: `L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14582) · [Before (L14783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14783)

```diff
-       return Ak = [kk, {}], Mk(mk(746), mk(747) + mk(748), mk(749) + mk(750))[mk(751) + mk(752)]
+       return TS = [SS, {}], rS(lS(720))
```

#### 2040. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14787` → after: `L14586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14586) · [Before (L14787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14787)

```diff
-       return Ak = [kk, {}], Mk(mk(753))
+       return TS = [SS, {}], rS(lS(721))
```

#### 2041. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14793` → after: `L14592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14592) · [Before (L14793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14793)

```diff
-     const LF = Xk.i;
+     const qH = tS.e;
```

#### 2042. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14797-L14798` → after: `L14596-L14597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14596-L14597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14596-L14597) · [Before (L14797-L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14797-L14798)

```diff
-         MJ: Ik
-       } = kk, Xk = kk.MJ.ku("movement");
+         FQ: gS
+       } = SS, tS = SS.FQ.EY("movement");
```

#### 2043. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14801-L14804` → after: `L14600-L14603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14600-L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14600-L14603) · [Before (L14801-L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14801-L14804)

```diff
-         if (Ik.Kkk(ik.Xu)) {
-           const Xk = Ik.aN(ik.Xu),
-             Tk = Ik.KFk(ik.Xu);
-           kk.bloxd.regrowPlayerBody(ik.Xu), bk(kk, ik.Xu, ik, Tk, Xk, Fk)
+         if (gS.NSS(XS.AY)) {
+           const tS = gS.vW(XS.AY),
+             bS = gS.uHS(XS.AY);
+           SS.bloxd.regrowPlayerBody(XS.AY), VS(SS, XS.AY, XS, bS, tS, HS)
```

#### 2044. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14809` → after: `L14608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14608) · [Before (L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14809)

```diff
-   37763: (kk, Fk, Ik) => {
+   37765: (SS, HS, gS) => {
```

#### 2045. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14815-L14824` → after: `L14614-L14623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14614-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14614-L14623) · [Before (L14815-L14824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14815-L14824)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(34),
-       ik = Ik(37769),
-       yk = Ik(1301),
-       lk = Ik(1120),
-       ak = Ik(36824),
-       qk = Ik(337),
-       Lk = Ik(1194),
-       tk = Ik(37672),
-       Zk = Ik(37447);
+     var tS = gS(24),
+       bS = gS(31),
+       XS = gS(37772),
+       xS = gS(1400),
+       NS = gS(1216),
+       qS = gS(36822),
+       uS = gS(387),
+       IS = gS(1286),
+       fS = gS(37667),
+       kS = gS(37422);
```

#### 2046. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14852-L14853` → after: `L14651-L14652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14651-L14652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14651-L14652) · [Before (L14852-L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14852-L14853)

```diff
-         mJ: function(kk, Fk) {
-           Fk.canRunCombinator = new ak.e, Fk.canRunCombinator.setBooleanType("standardCanRun", !0)
+         EQ: function(SS, HS) {
+           HS.canRunCombinator = new qS.d, HS.canRunCombinator.setBooleanType("standardCanRun", !0)
```

#### 2047. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14859` → after: `L14658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14658) · [Before (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14859)

```diff
-       const Ik = kk.MJ.ku("movementInputs"),
+       const gS = SS.FQ.EY("movementInputs"),
```

#### 2048. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14861` → after: `L14660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14660) · [Before (L14861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14861)

```diff
-           MJ: Tk
+           FQ: bS
```

#### 2049. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14863` → after: `L14662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14662) · [Before (L14863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14863)

```diff
-         ik = Zk.b.getMovementHeading(kk);
+         XS = kS.c.getMovementHeading(SS);
```

#### 2050. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14865-L14866` → after: `L14664-L14665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14664-L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14664-L14665) · [Before (L14865-L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14865-L14866)

```diff
-         const Ik = Tk.KFk(yk.Xu),
-           lk = Tk.FFk(yk.Xu),
+         const gS = bS.uHS(xS.AY),
+           NS = bS.sSS(xS.AY),
```

#### 2051. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14868` → after: `L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14667) · [Before (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14868)

```diff
-           qk = kk.bloxd.getResolvedPhysicsSettings(yk.Xu, ak),
+           uS = SS.bloxd.getResolvedPhysicsSettings(xS.AY, qS),
```

#### 2052. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14870` → after: `L14669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14669) · [Before (L14870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14870)

```diff
-         yk._gamepadDroveLastTick = !!yk.gamepad, yk.gamepad ? xk(kk, Ik, lk, qk, yk, yk.gamepad, ik, Fk) : yk.isTouchscreen ? (Lk && Ok(kk, Ik, lk, yk), qk.steering && 0 !== qk.speedMultiplier ? Sk(kk, Ik, lk, yk, qk.steering, yk.joyStickMoveVec, ik, Fk) : (Ik.heading = (ik + 2 * … [truncated]
+         xS._gamepadDroveLastTick = !!xS.gamepad, xS.gamepad ? nS(SS, gS, NS, uS, xS, xS.gamepad, XS, HS) : xS.isTouchscreen ? (IS && cS(SS, gS, NS, xS), uS.steering && 0 !== uS.speedMultiplier ? JS(SS, gS, NS, xS, uS.steering, xS.joyStickMoveVec, XS, HS) : (gS.heading = (XS + 2 * … [truncated]
```

#### 2053. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14876` → after: `L14675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14675) · [Before (L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14876)

```diff
-         gJ: ak
+         RP: qS
```

#### 2054. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14881` → after: `L14680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14680) · [Before (L14881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14881)

```diff
-       ak.canCrouch ? (Ik.shouldIgnoreCrouchingSpeedReduction() && (ik.padSneakToggled = !1), Xk.d.get("clientEscMenuOptions").crouchIsToggle ? Fk.setCrouching(ik.crouchToggled || ik.padSneakToggled) : (Fk.setCrouching(!!ik.crouch || ik.padSneakToggled), ik.crouchToggled = !1)) :  … [truncated]
+       qS.canCrouch ? (gS.shouldIgnoreCrouchingSpeedReduction() && (XS.padSneakToggled = !1), tS.b.get("clientEscMenuOptions").crouchIsToggle ? HS.setCrouching(XS.crouchToggled || XS.padSneakToggled) : (HS.setCrouching(!!XS.crouch || XS.padSneakToggled), XS.crouchToggled = !1)) :  … [truncated]
```

#### 2055. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14903` → after: `L14702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14702) · [Before (L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14903)

```diff
-         gJ: ak
+         RP: qS
```

#### 2056. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14922` → after: `L14721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14721) · [Before (L14922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14922)

```diff
-         gJ: Tk
+         RP: bS
```

#### 2057. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14932` → after: `L14731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14731) · [Before (L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14932)

```diff
-       Fk.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", kk.gJ.speedMultiplier), (0, tk.e)(kk, Ik, Fk, Tk, ik, yk, lk, ak, qk), Xk._moving = 0 !== ik || 0 !== yk
+       HS.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", SS.RP.speedMultiplier), (0, fS.f)(SS, gS, HS, bS, XS, xS, NS, qS, uS), tS._moving = 0 !== XS || 0 !== xS
```

#### 2058. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14940` → after: `L14739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14739) · [Before (L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14940)

```diff
-       Vk(kk, Fk, Ik, Xk, Tk, ik ? qk.e.clamp(-ik.y, -1, 1) : 0, ik ? qk.e.clamp(ik.x, -1, 1) : 0, Qk(kk, Fk, Ik, Xk), yk, lk)
+       hS(SS, HS, gS, tS, bS, XS ? uS.b.clamp(-XS.y, -1, 1) : 0, XS ? uS.b.clamp(XS.x, -1, 1) : 0, DS(SS, HS, gS, tS), xS, NS)
```

#### 2059. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14946` → after: `L14745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14745) · [Before (L14946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14946)

```diff
-       Fk.speed = ik * Qk(kk, Fk, Ik, Xk), Fk.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", kk.gJ.speedMultiplier)
+       HS.speed = XS * DS(SS, HS, gS, tS), HS.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", SS.RP.speedMultiplier)
```

#### 2060. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14950` → after: `L14749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14749) · [Before (L14950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14950)

```diff
-       vk(kk, kk.MJ.KFk(kk.oR), kk.MJ.FFk(kk.oR), kk.MJ.mFk())
+       OS(SS, SS.FQ.uHS(SS.HA), SS.FQ.sSS(SS.HA), SS.FQ.zHS())
```

#### 2061. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14954` → after: `L14753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14753) · [Before (L14954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14954)

```diff
-       Fk.jumping = Xk.touchJump, Fk.setCrouching(kk.gJ.canCrouch && (Xk.touchCrouch || Xk.padSneakToggled)), vk(kk, Fk, Ik, Xk)
+       HS.jumping = tS.touchJump, HS.setCrouching(SS.RP.canCrouch && (tS.touchCrouch || tS.padSneakToggled)), OS(SS, HS, gS, tS)
```

#### 2062. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14957` → after: `L14756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14756) · [Before (L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14957)

```diff
-     const ck = [0, 1, 8, 255, "length", 38, 3, 95, "f", "undefined", void 0, 64, 118, 115, 2, 119, 63, 6, "fromCodePoint", 7, 12, "push", 219, "b", "g", 148, "h", 154, 91, "e", 8191, 88, 13, 14, 57, "c", null, "te", 121, "||", "split", "a", 150, !1, !0, 5, 4, 186, 127, 128, 216,  … [truncated]
+     const zS = [26, 0, 1, "h", 3, 206, 9, 7, 201, 6, 105, 8, 255, "length", 57, 28, "a", "e", "undefined", void 0, 2, 27, 63, "fromCodePoint", 12, "push", "b", 91, 23, "g", 8191, 88, 13, 14, 190, "c", "d", "i", 123, 220, 241, 5, 136, 92, 175, 1023, 115, 65536, 4, 184, 10, 55296,  … [truncated]
```

#### 2063. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14960-L14965` → after: `L14759-L14762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14759-L14762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14759-L14762) · [Before (L14960-L14965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14960-L14965)

```diff
-       return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(kk) {
-         var Fk, Ik, Xk, Tk, ik, yk, lk;
-         for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
-           var ak = '8,u&>*%<9:y@)14PRo#rhEDk^_qnK?}!MvY=d532+SO~cZw6t/UIfxspTN"jHg;XGQJFlC].{BWizbV(a|AL[$07`me'.indexOf(Fk[lk]);
-           if (ak !== -ck[1])
-             if (yk < ck[0]) yk = ak;
+       return SS[zS[13]] = zS[2], typeof vS[SS[zS[1]]] === zS[18] ? vS[SS[zS[1]]] = function(...SS) {
+         for (BS(SS[zS[13]] = zS[2], SS[-zS[5]] = 'N=HV1BFxu3M<{DIAC"mpas^EQflXi6L(T,02SKe$GRZrJ%)zW+b?*yv_5@[.!&]74/:w}8#~>|9;U`OdYohqkgPncjt', SS[zS[0]] = "" + (SS[zS[1]] || ""), SS[zS[4]] = SS[zS[0]].length, SS[zS[10]] = [], SS[-zS[8]] = zS[1], SS[zS[9]] = zS[1], SS[zS[7]] = -z … [truncated]
+           if (SS[zS[6]] = SS[-zS[5]].indexOf(SS[zS[0]][SS[zS[3]]]), SS[zS[6]] !== -zS[2])
+             if (SS[zS[7]] < zS[1]) SS[zS[7]] = SS[zS[6]];
```

#### 2064. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14967` → after: `L14764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14764) · [Before (L14967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14967)

```diff
-               dk(yk += ak * ck[28], Tk |= yk << ik, ik += (yk & ck[30]) > ck[31] ? ck[32] : ck[33]);
+               BS(SS[zS[7]] += SS[zS[6]] * zS[27], SS[-zS[8]] |= SS[zS[7]] << SS[zS[9]], SS[zS[9]] += (SS[zS[7]] & zS[30]) > zS[31] ? zS[32] : zS[33]);
```

#### 2065. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14969-L14975` → after: `L14766-L14770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14766-L14770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14766-L14770) · [Before (L14969-L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14969-L14975)

```diff
-                 dk(Xk.push(Tk & ck[3]), Tk >>= ck[2], ik -= ck[2])
-               } while (ik > ck[19]);
-               yk = -ck[1]
-             }
-         }
-         return yk > -ck[1] && Xk.push((Tk | yk << ik) & ck[3]), fk(Xk)
-       }(Gk[kk[ck[0]]]) : nk[kk[ck[0]]]
+                 BS(SS[zS[10]].push(SS[-zS[8]] & zS[12]), SS[-zS[8]] >>= zS[11], SS[zS[9]] -= zS[11])
+               } while (SS[zS[9]] > zS[7]);
+               SS[zS[7]] = -zS[2]
+             } return SS[zS[7]] > -zS[2] && SS[zS[10]].push((SS[-zS[8]] | SS[zS[7]] << SS[zS[9]]) & zS[12]), pS(SS[zS[10]])
+       }(ES[SS[zS[1]]]) : vS[SS[zS[1]]]
```

#### 2066. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14979` → after: `L14774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14774) · [Before (L14979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14979)

```diff
-       return kk[ck[4]] = ck[1], typeof uk !== ck[9] && uk ? (new uk).decode(new bk(kk[ck[0]])) : typeof Rk !== ck[9] && Rk ? Rk.from(kk[ck[0]]).toString("utf-8") : Nk(kk[ck[0]])
+       return SS[zS[13]] = zS[2], typeof YS !== zS[18] && YS ? (new YS).decode(new AS(SS[zS[1]])) : typeof yS !== zS[18] && yS ? yS.from(SS[zS[1]]).toString("utf-8") : WS(SS[zS[1]])
```

#### 2067. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14987-L14988` → after: `L14782-L14783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14782-L14783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14782-L14783) · [Before (L14987-L14988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14987-L14988)

```diff
-     dk(nk = {}, Gk = ["l&>W[zAYIr$)QHJd~?!/]C.SKQ6^Ct;}KllyjY!i%", "!:fxt/mk0r5{hRu#4,", 'bT!f;"c#GN_I_{Gd', "i%]><|}Wls:laLvd3lD!#3.14P={^j9", '=W@M<xf"@h6!mdi3{jPzIw:iYst!,', ':)^/|fQSM:?z_{3#&X"xa;M#~4', ')XYIVZ0W|P+KfP&#ToIb5aJ"XPA_,[3_qk!/>Yr<^196A/0Rs+vn[;o<eQkI,', "(ZcymjM … [truncated]
-       dk(kk[ck[4]] = ck[0], kk[-ck[7]] = [function() {
+     BS(vS = {}, ES = ["_/TLn,N", 'H1NLeg`Rzm,U4A]68}Y+)KUGj/ws_I5Z2?uF=Sn"03Vd9l&E.3?6l', 'wvKi/_E8Uu[.iXRmu}cv5$em9."F)D?Gs?69$z<fB4)"{$em/N', '$l`bZvxy@[uDEh"Gs9]i1d~6Am>!AH', "aE$1f@q=", "pFNv8>Rz(s}Y{Sliw}nFy51P</d)$Idl*aLUISxf}D>|+1", ".lT|e|9)yp%*XIxKy@K*>!P{+vP#,DtC#vUlL", … [truncated]
+       BS(SS[zS[13]] = zS[1], SS[zS[16]] = [function() {
```

#### 2068. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14996` → after: `L14791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14791) · [Before (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14996)

```diff
-       }], kk[ck[1]] = ck[10], kk[-ck[5]] = []);
+       }], SS[zS[14]] = zS[19], SS[zS[15]] = []);
```

#### 2069. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14998` → after: `L14793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14793) · [Before (L14998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L14998)

```diff
-         dk(kk[ck[1]] = Object, kk[-ck[5]][ck[21]]("".__proto__.constructor.name))
+         BS(SS[zS[14]] = Object, SS[zS[15]][zS[25]]("".__proto__.constructor.name))
```

#### 2070. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15000-L15003` → after: `L14795-L14798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14795-L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14795-L14798) · [Before (L15000-L15003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15000-L15003)

```diff
-       kk: for (kk[ck[6]] = ck[0]; kk[ck[6]] < kk[-ck[7]][ck[4]]; kk[ck[6]]++) try {
-         for (kk[ck[1]] = kk[-ck[7]][kk[ck[6]]](), kk[ck[8]] = ck[0]; kk[ck[8]] < kk[-ck[5]][ck[4]]; kk[ck[8]]++)
-           if (typeof kk[ck[1]][kk[-ck[5]][kk[ck[8]]]] === ck[9]) continue kk;
-         return kk[ck[1]]
+       SS: for (SS[zS[4]] = zS[1]; SS[zS[4]] < SS[zS[16]][zS[13]]; SS[zS[4]]++) try {
+         for (SS[zS[14]] = SS[zS[16]][SS[zS[4]]](), SS[zS[17]] = zS[1]; SS[zS[17]] < SS[zS[15]][zS[13]]; SS[zS[17]]++)
+           if (typeof SS[zS[14]][SS[zS[15]][SS[zS[17]]]] === zS[18]) continue SS;
+         return SS[zS[14]]
```

#### 2071. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15005-L15007` → after: `L14800-L14802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14800-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14800-L14802) · [Before (L15005-L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15005-L15007)

```diff
-       return kk[ck[1]] || this
-     }() || {}, uk = pk.TextDecoder, bk = pk.Uint8Array, Rk = pk.je, Uk = pk.String || String, Ck = pk.Array || Array, Nk = function(...kk) {
-       return dk(kk[ck[4]] = ck[0], kk[ck[22]] = new Ck(ck[49]), kk[ck[23]] = Uk[ck[18]] || Uk.fromCharCode, kk[-ck[11]] = []),
+       return SS[zS[14]] || this
+     }() || {}, YS = LS.TextDecoder, AS = LS.Uint8Array, yS = LS.CK, VS = LS.String || String, iS = LS.Array || Array, WS = function(...SS) {
+       return BS(SS[zS[13]] = zS[1], SS[zS[16]] = new iS(zS[60]), SS[zS[26]] = VS[zS[23]] || VS.fromCharCode, SS[zS[20]] = []),
```

#### 2072. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15009-L15010` → after: `L14804-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14804-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14804-L14805) · [Before (L15009-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15009-L15010)

```diff
-           for (dk(Fk[ck[4]] = ck[1], Fk[ck[15]] = ck[10], Fk[ck[14]] = ck[10], Fk[ck[13]] = Fk[ck[0]][ck[4]], kk[-ck[11]][ck[4]] = ck[0]), Fk[-ck[12]] = ck[0]; Fk[-ck[12]] < Fk[ck[13]];) dk(Fk[ck[14]] = Fk[ck[0]][Fk[-ck[12]]++], Fk[ck[14]] <= ck[48] ? Fk[ck[15]] = Fk[ck[14]] : Fk … [truncated]
-           return kk[-ck[11]].join("")
+           for (BS(HS[zS[13]] = zS[2], HS[zS[2]] = zS[19], HS[zS[20]] = zS[19], HS[zS[4]] = HS[zS[1]][zS[13]], SS[zS[20]][zS[13]] = zS[1]), HS[zS[21]] = zS[1]; HS[zS[21]] < HS[zS[4]];) BS(HS[zS[20]] = HS[zS[1]][HS[zS[21]]++], HS[zS[20]] <= zS[85] ? HS[zS[2]] = HS[zS[20]] : HS[zS[2 … [truncated]
+           return SS[zS[20]].join("")
```

#### 2073. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15012-L15013` → after: `L14807-L14961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14807-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14807-L14961) · [Before (L15012-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15012-L15013)

```diff
-     }()), Tk[ck[24]].subscribe(Wk(100) + Wk(101) + Wk(102) + ck[24], (async () => {
-       var kk, Fk, Ik, Xk;
+     }()), US(80) in sS && function(...SS) {
+       function HS(...SS) {
+         for (BS(SS[zS[13]] = zS[2], SS[zS[2]] = 'KZiJWE:!^_jM(a231muS6pfgL=Qcw)8A.N>r5$"|/+?;b0`*4@Bqx&l9dC<n~[zGXU,D]skyYeTO{PvtVo#IRh}H%7F', SS[zS[26]] = "" + (SS[zS[1]] || ""), SS[zS[4]] = SS[zS[26]].length, SS[-zS[34]] = [], SS[zS[17]] = zS[1], SS[-zS[27]] = zS[1], SS[zS[29]] … [truncated]
+           if (SS[zS[6]] = SS[zS[2]].indexOf(SS[zS[26]][SS[zS[28]]]), SS[zS[6]] !== -zS[2])
+             if (SS[zS[29]] < zS[1]) SS[zS[29]] = SS[zS[6]];
+             else {
+               BS(SS[zS[29]] += SS[zS[6]] * zS[27], SS[zS[17]] |= SS[zS[29]] << SS[-zS[27]], SS[-zS[27]] += (SS[zS[29]] & zS[30]) > zS[31] ? zS[32] : zS[33]);
+               do {
+                 BS(SS[-zS[34]].push(SS[zS[17]] & zS[12]), SS[zS[17]] >>= zS[11], SS[-zS[27]] -= zS[11])
+               } while (SS[-zS[27]] > zS[7]);
+               SS[zS[29]] = -zS[2]
+             } return SS[zS[29]] > -zS[2] && SS[-zS[34]].push((SS[zS[17]] | SS[zS[29]] << SS[-zS[27]]) & zS[12]), pS(SS[-zS[34]])
+       }
+ 
+       function gS(...SS) {
+         return SS[zS[13]] = zS[2], typeof vS[SS[zS[1]]] === zS[18] ? vS[SS[zS[1]]] = HS(ES[SS[zS[1]]]) : vS[SS[zS[1]]]
+ ... (139 more added lines; see GitHub link above)
```

#### 2074. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15015-L15057` → after: `L14963-L14983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14963-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14963-L14983) · [Before (L15015-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15015-L15057)

```diff
-       function Tk(...kk) {
-         return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(...kk) {
-           for (dk(kk[ck[4]] = ck[1], kk[ck[1]] = 'STjPABWfoLOXdqz:0tlGQ`%FD=aEbx+ICK{JnZ&$vy*HiRr}7Mek?^(|p5!mNcV#6Ug)Yh9u[,1w<4/>_;8@2.3]~"s', kk[-ck[25]] = "" + (kk[ck[0]] || ""), kk[ck[6]] = kk[-ck[25]].length, kk[-ck[34]] = [], kk[ck[29]] = ck[0], kk[ck[8]] = ck[0], kk[ck[19] … [truncated]
-             if (kk[ck[27]] = kk[ck[1]].indexOf(kk[-ck[25]][kk[ck[26]]]), kk[ck[27]] !== -ck[1])
-               if (kk[ck[19]] < ck[0]) kk[ck[19]] = kk[ck[27]];
-               else {
-                 dk(kk[ck[19]] += kk[ck[27]] * ck[28], kk[ck[29]] |= kk[ck[19]] << kk[ck[8]], kk[ck[8]] += (kk[ck[19]] & ck[30]) > ck[31] ? ck[32] : ck[33]);
-                 do {
-                   dk(kk[-ck[34]].push(kk[ck[29]] & ck[3]), kk[ck[29]] >>= ck[2], kk[ck[8]] -= ck[2])
-                 } while (kk[ck[8]] > ck[19]);
-                 kk[ck[19]] = -ck[1]
-               } return kk[ck[19]] > -ck[1] && kk[-ck[34]].push((kk[ck[29]] | kk[ck[19]] << kk[ck[8]]) & ck[3]), fk(kk[-ck[34]])
-         }(Gk[kk[ck[0]]]) : nk[kk[ck[0]]]
-       }
-       Tk(103) in Bk && function(...kk) {
-         dk(kk[ck[4]] = ck[0], kk[ck[35]] = function(kk) {
- ... (27 more removed lines; see GitHub link above)
+               function qS(...SS) {
+                 return SS[zS[13]] = zS[2], typeof vS[SS[zS[1]]] === zS[18] ? vS[SS[zS[1]]] = NS(ES[SS[zS[1]]]) : vS[SS[zS[1]]]
+               }
+               if (BS(HS = void 0, gS = void 0, tS = void 0, bS = void 0, xS = void 0), SS[zS[68]] > SS[-zS[73]]) throw Error(US(zS[74]));
+               if (SS[zS[68]] == SS[-zS[73]]) return zS[79];
+               if (BS(HS = SS[zS[36]][SS[zS[68]]] & zS[12], SS[zS[68]]++), (HS & zS[60]) == zS[1]) return HS;
+               if ((HS & zS[75]) == zS[69]) {
+                 if (BS(gS = uS(), xS = (HS & zS[61]) << zS[9] | gS), xS >= zS[60]) return xS;
+                 {
+                   function IS(...SS) {
+                     for (BS(SS[zS[13]] = zS[2], SS[zS[0]] = 'eXAxfbWZ=iw6o>B2Cj}4R)8hT?DP+J`lmnG9QVdaN!.$&,M^yz7*#%L/I;3r{sHuSE@YKU:_vqpF|c5~Otg<([]10k"', SS[zS[20]] = "" + (SS[zS[1]] || ""), SS[zS[35]] = SS[zS[20]].length, SS[-zS[77]] = [], SS[zS[41]] = zS[1], SS[-zS[34]] = zS[1 … [truncated]
+                       if (SS[zS[6]] = SS[zS[0]].indexOf(SS[zS[20]][SS[zS[11]]]), SS[zS[6]] !== -zS[2])
+                         if (SS[-zS[76]] < zS[1]) SS[-zS[76]] = SS[zS[6]];
+                         else {
+                           BS(SS[-zS[76]] += SS[zS[6]] * zS[27], SS[zS[41]] |= SS[-zS[76]] << SS[-zS[34]], SS[-zS[34]] += (SS[-zS[76]] & zS[30]) > zS[31] ? zS[32] : zS[33]);
+                           do {
+ ... (5 more added lines; see GitHub link above)
```

#### 2075. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15059-L15079` → after: `L14985-L14988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14985-L14988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14985-L14988) · [Before (L15059-L15079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15059-L15079)

```diff
-           function ek(...kk) {
-             return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = jk(Gk[kk[ck[0]]]) : nk[kk[ck[0]]]
-           }
-           await (0, lk[Tk(132) + Tk(133) + Tk(134)])(Zk + (ek(135) + "s/") + tk[ck[40]](ck[39])[ck[0]] + ek(136), {
-             [ek(137)]: tk
-           }, {
-             [ek(138) + "s"]: ck[0]
-           })
-         } catch {
-           function wk(kk) {
-             var Fk, Ik, Xk, Tk, ik, yk, lk;
-             for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
-               var ak = 'wjKUgAHSTarCtDnpJZ7v)]|de!^=}Lq*RWi(1B/EN~Y3:_$2zx,O&;cyM`Imsu4<bl?XP0+#Gf[FQhk."o65V>@%{98'.indexOf(Fk[lk]);
-               if (ak !== -ck[1])
-                 if (yk < ck[0]) yk = ak;
-                 else {
- ... (5 more removed lines; see GitHub link above)
+                   function fS(SS) {
+                     return typeof vS[SS] === zS[18] ? vS[SS] = IS(ES[SS]) : vS[SS]
+                   }
+                   throw Error(fS(111))
```

#### 2076. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15085-L15087` → after: `L14999-L15047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14999-L15047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L14999-L15047) · [Before (L15085-L15087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15085-L15087)

```diff
-           function Hk(kk) {
-             return typeof nk[kk] === ck[9] ? nk[kk] = wk(Gk[kk]) : nk[kk]
-           }
+             function fS(...HS) {
+               for (BS(HS[zS[13]] = zS[2], SS[zS[36]] = tS(HS[zS[1]]), SS[-zS[73]] = SS[zS[36]].length, SS[zS[68]] = zS[1], HS[zS[2]] = [], HS[zS[26]] = zS[19]);
+                 (HS[zS[26]] = IS()) !== zS[79];) HS[zS[2]].push(HS[zS[26]]);
+               return bS(HS[zS[2]])
+             }
+             SS[zS[13]] = zS[2], SS[-zS[49]] = String.fromCharCode, BS(SS[zS[36]] = zS[19], SS[-zS[73]] = zS[19], SS[zS[68]] = zS[19]), BS(SS[zS[1]].version = gS(114), SS[zS[1]].encode = qS, SS[zS[1]].decode = fS)
+           }(typeof exports === gS(zS[46]) + gS(116) ? this.utf8 = {} : exports)
+       }(), bS.k.subscribe(SS(zS[54]) + SS(118) + SS(119) + zS[29], (async () => {
+         var SS, HS, gS, tS;
+ 
+         function bS(...SS) {
+           return SS[zS[13]] = zS[2], typeof vS[SS[zS[1]]] === zS[18] ? vS[SS[zS[1]]] = function(...SS) {
+             for (BS(SS[zS[13]] = zS[2], SS[zS[2]] = 'BKfpdRGJg2rE$P8^+M,@x.*uQs/tUI`;F_ZC[hYvA7DcHw]Lie?)z"Vb5>NOo&6k({1|WX%:Slq9aT!n04m=<y}#~3j', SS[zS[20]] = "" + (SS[zS[1]] || ""), SS[zS[81]] = SS[zS[20]].length, SS[zS[48]] = [], SS[zS[41]] = zS[1], SS[-zS[83]] = zS[1], SS[-zS … [truncated]
+               if (SS[zS[37]] = SS[zS[2]].indexOf(SS[zS[20]][SS[zS[80]]]), SS[zS[37]] !== -zS[2])
+                 if (SS[-zS[82]] < zS[1]) SS[-zS[82]] = SS[zS[37]];
+                 else {
+ ... (33 more added lines; see GitHub link above)
```

#### 2077. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15090` → after: `L15060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15060) · [Before (L15090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15090)

```diff
-             kk[ck[4]] = ck[0];
+             SS[zS[13]] = zS[1];
```

#### 2078. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15104-L15121` → after: `L15074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15074) · [Before (L15104-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15104-L15121)

```diff
-             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Fk.resolve(__dirname, Hk(140) + function(...kk) {
-               return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(kk) {
-                 var Fk, Ik, Xk, Tk, ik, yk, lk;
-                 for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
-                   var ak = 'E/~`0)x5(qt<"Z{Db[l=CuSJKvs2wrc*RT_yX+#7&eh|zaY!L4M]GQ,IHU>oBd3;jA?@19NVi:F6^.kfPpW8$Omgn%}'.indexOf(Fk[lk]);
-                   if (ak !== -ck[1])
-                     if (yk < ck[0]) yk = ak;
-                     else {
-                       dk(yk += ak * ck[28], Tk |= yk << ik, ik += (yk & ck[30]) > ck[31] ? ck[32] : ck[33]);
-                       do {
-                         dk(Xk.push(Tk & ck[3]), Tk >>= ck[2], ik -= ck[2])
-                       } while (ik > ck[19]);
-                       yk = -ck[1]
-                     }
-                 }
-                 return yk > -ck[1] && Xk.push((Tk | yk << ik) & ck[3]), fk(Xk)
- ... (2 more removed lines; see GitHub link above)
+             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), HS.resolve(__dirname, bS(144) + bS(145) + "js")
```

#### 2079. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15123-L15131` → after: `L15076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15076) · [Before (L15123-L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15123-L15131)

```diff
-           Hk(139) + "1" in Bk && Jk()
-         }
-       } else {
-         function xk(...kk) {
-           dk(kk[ck[4]] = ck[0], kk[-ck[47]] = function(...Fk) {
-             return dk(Fk[ck[4]] = ck[6], Fk[ck[41]] = {}), Fk[ck[14]].length !== Fk[ck[0]].length + Fk[ck[1]].length ? ck[43] : kk[ck[42]](Fk[ck[0]], Fk[ck[1]], Fk[ck[14]], ck[0], ck[0], ck[0], Fk[ck[41]])
-           }, kk[ck[42]] = function(...Fk) {
-             return dk(Fk[ck[4]] = ck[19], Fk[ck[19]] = ck[43]), Fk[ck[45]] >= Fk[ck[14]].length ? ck[44] : Fk[ck[17]]["" + Fk[ck[6]] + Fk[ck[46]] + Fk[ck[45]]] !== ck[10] ? Fk[ck[17]]["" + Fk[ck[6]] + Fk[ck[46]] + Fk[ck[45]]] : (Fk[ck[14]][Fk[ck[45]]] === Fk[ck[0]][Fk[ck[6]]] &&  … [truncated]
-           }, console.log(kk[-ck[47]]))
+           bS(143) + "m" in sS && KS()
```

#### 2080. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15133-L15135` → after: `L15078-L15079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15078-L15079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15078-L15079) · [Before (L15133-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15133-L15135)

```diff
-         Tk(126) in Bk && xk()
-       }
-     }))
+       }))
+     })()
```

#### 2081. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15137` → after: `L15081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15081) · [Before (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15137)

```diff
-   37438: (kk, Fk, Ik) => {
+   37419: (SS, HS, gS) => {
```

#### 2082. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15143` → after: `L15087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15087) · [Before (L15143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15143)

```diff
-     var Xk = Ik(37447);
+     var tS = gS(37422);
```

#### 2083. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15157` → after: `L15101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15101) · [Before (L15157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15157)

```diff
-         Ix: function(Fk, Ik) {
+         bD: function(HS, gS) {
```

#### 2084. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15161` → after: `L15105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15105) · [Before (L15161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15161)

```diff
-           } = kk.gJ;
+           } = SS.RP;
```

#### 2085. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15166` → after: `L15110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15110) · [Before (L15166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15166)

```diff
-           const lk = kk.camera.Tm();
+           const NS = SS.camera.vF();
```

#### 2086. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15173` → after: `L15117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15117) · [Before (L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15173)

```diff
-       const Ik = kk.MJ.gFk(Fk);
+       const gS = SS.FQ.WHS(HS);
```

#### 2087. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15179-L15180` → after: `L15123-L15124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15123-L15124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15123-L15124) · [Before (L15179-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15179-L15180)

```diff
-       const yk = null !== (Ik = null === (Xk = kk.MJ.gFk(Fk)) || void 0 === Xk ? void 0 : Xk._prevOpacity) && void 0 !== Ik ? Ik : -1;
-       return yk >= 0 ? yk : null !== (Tk = null === (ik = kk.xR[kk.oR][Fk]) || void 0 === ik ? void 0 : ik.opacity) && void 0 !== Tk ? Tk : 1
+       const xS = null !== (gS = null === (tS = SS.FQ.WHS(HS)) || void 0 === tS ? void 0 : tS._prevOpacity) && void 0 !== gS ? gS : -1;
+       return xS >= 0 ? xS : null !== (bS = null === (XS = SS.rY[SS.HA][HS]) || void 0 === XS ? void 0 : XS.opacity) && void 0 !== bS ? bS : 1
```

#### 2088. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15186-L15187` → after: `L15130-L15131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15130-L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15130-L15131) · [Before (L15186-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15186-L15187)

```diff
-         MJ: jk
-       } = kk, ek = null === (yk = jk.ZY(Fk.Xu)) || void 0 === yk ? void 0 : yk.Im;
+         FQ: aS
+       } = SS, KS = null === (xS = aS.zB(HS.AY)) || void 0 === xS ? void 0 : xS.JF;
```

#### 2089. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15189` → after: `L15133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15133) · [Before (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15189)

```diff
-       if (Fk.replayForceHidden || Fk.Xu === kk.oR && kk.camera.VY < .01 && !Xk.b.isCameraDetachedFromPlayer(kk)) {
+       if (HS.replayForceHidden || HS.AY === SS.HA && SS.camera.lB < .01 && !tS.c.isCameraDetachedFromPlayer(SS)) {
```

#### 2090. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15192-L15193` → after: `L15136-L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15136-L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15136-L15137) · [Before (L15192-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15192-L15193)

```diff
-         const Ik = !Fk.replayForceHidden && Fk.serverOpacity > 0 && null !== (wk = null === (Hk = kk.Xw.Tw) || void 0 === Hk ? void 0 : Hk.castsEntitySunShadows) && void 0 !== wk && wk,
-           Xk = jk.WFk(Fk.Xu);
+         const gS = !HS.replayForceHidden && HS.serverOpacity > 0 && null !== (jS = null === (GS = SS.Hj.gj) || void 0 === GS ? void 0 : GS.castsEntitySunShadows) && void 0 !== jS && jS,
+           tS = aS.EHS(HS.AY);
```

#### 2091. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15197` → after: `L15141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15141) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15197)

```diff
-       const Jk = kk.bloxd.getLifeformEyeHeight(Fk.Xu),
+       const CS = SS.bloxd.getLifeformEyeHeight(HS.AY),
```

#### 2092. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15205-L15206` → after: `L15149-L15150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15149-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15149-L15150) · [Before (L15205-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15205-L15206)

```diff
-       Fk.Xu === kk.oR && (Qk = Math.max(Qk - 1.20001, 0), sk = 0);
-       (null === (lk = jk.XIk(Fk.Xu)) || void 0 === lk ? void 0 : lk.le) === kk.oR && (sk = 1);
+       HS.AY === SS.HA && (DS = Math.max(DS - 1.20001, 0), wS = 0);
+       (null === (NS = aS.THS(HS.AY)) || void 0 === NS ? void 0 : NS.fK) === SS.HA && (wS = 1);
```

#### 2093. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15209-L15211` → after: `L15153-L15155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15153-L15155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15153-L15155) · [Before (L15209-L15211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15209-L15211)

```diff
-       const zk = Fk.Xu === kk.oR,
-         Sk = zk && 0 === Vk && Fk.serverOpacity > 0 && null !== (ak = null === (qk = kk.Xw.Tw) || void 0 === qk ? void 0 : qk.castsEntitySunShadows) && void 0 !== ak && ak,
-         vk = zk && (null !== (tk = null === (Zk = jk.WFk(Fk.Xu)) || void 0 === Zk ? void 0 : Zk.drawnHidden) && void 0 !== tk ? tk : Sk) !== Sk;
+       const ZS = HS.AY === SS.HA,
+         JS = ZS && 0 === hS && HS.serverOpacity > 0 && null !== (qS = null === (uS = SS.Hj.gj) || void 0 === uS ? void 0 : uS.castsEntitySunShadows) && void 0 !== qS && qS,
+         OS = ZS && (null !== (fS = null === (kS = aS.EHS(HS.AY)) || void 0 === kS ? void 0 : kS.drawnHidden) && void 0 !== fS ? fS : JS) !== JS;
```

#### 2094. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15220-L15221` → after: `L15164-L15165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15164-L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15164-L15165) · [Before (L15220-L15221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15220-L15221)

```diff
-         MJ: lk
-       } = kk, ak = kk.Xw.kp, qk = null !== (Xk = null === (Tk = lk.eFk(Fk.Xu)) || void 0 === Tk ? void 0 : Tk.Ip) && void 0 !== Xk ? Xk : null;
+         FQ: NS
+       } = SS, qS = SS.Hj.fY, uS = null !== (tS = null === (bS = NS.tHS(HS.AY)) || void 0 === bS ? void 0 : bS.kY) && void 0 !== tS ? tS : null;
```

#### 2095. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15224` → after: `L15168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15168) · [Before (L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15224)

```diff
-           Xk = lk.WFk(Fk.Xu);
+           tS = NS.EHS(HS.AY);
```

#### 2096. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15229` → after: `L15173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15173) · [Before (L15229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15229)

```diff
-         kk && (ak.set(qk, "aOpacity", Ik), ak.pR(qk, "aOpacity", Ik))
+         SS && (qS.set(uS, "aOpacity", gS), qS.JA(uS, "aOpacity", gS))
```

#### 2097. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15231` → after: `L15175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15175) · [Before (L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15231)

```diff
-       const Lk = null === (ik = lk.getState(Fk.Xu, lk.names.cape)) || void 0 === ik ? void 0 : ik.mesh;
+       const IS = null === (XS = NS.getState(HS.AY, NS.names.cape)) || void 0 === XS ? void 0 : XS.mesh;
```

#### 2098. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15233` → after: `L15177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15177) · [Before (L15233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15233)

```diff
-       Lk && (Lk.JR.aOpacity = Ik, Lk.isVisible = !yk && !(null !== (tk = kk.xR[kk.oR][Fk.Xu]) && void 0 !== tk && tk._invisibleEffect))
+       IS && (IS.mY.aOpacity = gS, IS.isVisible = !xS && !(null !== (fS = SS.rY[SS.HA][HS.AY]) && void 0 !== fS && fS._invisibleEffect))
```

#### 2099. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15236` → after: `L15180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15180) · [Before (L15236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15236)

```diff
-   38084: (kk, Fk, Ik) => {
+   38102: (SS, HS, gS) => {
```

#### 2100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15249` → after: `L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15193) · [Before (L15249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15249)

```diff
-     var Xk = Ik(354),
+     var tS = gS(402),
```

#### 2101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15251-L15261` → after: `L15195-L15205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15195-L15205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15195-L15205) · [Before (L15251-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15251-L15261)

```diff
-       ik = Ik(37395),
-       yk = Ik(37424),
-       lk = Ik(337),
-       ak = Ik(37401),
-       qk = Ik(38088),
-       Lk = Ik(37139),
-       tk = Ik(37670),
-       Zk = Ik(37662),
-       jk = Ik(37777),
-       ek = Ik(37217),
-       wk = Ik(38092);
+       XS = gS(37361),
+       xS = gS(37405),
+       NS = gS(387),
+       qS = gS(37367),
+       uS = gS(38110),
+       IS = gS(37104),
+       fS = gS(37664),
+       kS = gS(37655),
+       aS = gS(37774),
+       KS = gS(37176),
+       jS = gS(38119);
```

#### 2102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15276` → after: `L15220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15220) · [Before (L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15276)

```diff
-         this.target = "", this.Ip = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = Tk().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
+         this.target = "", this.kY = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = bS().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
```

#### 2103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15285-L15286` → after: `L15229-L15230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15229-L15230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15229-L15230) · [Before (L15285-L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15285-L15286)

```diff
-         mJ: function(Fk, Ik) {
-           Ik._isVehicle = (0, ik.s)(Ik.target), Gk(kk, Ik)
+         EQ: function(HS, gS) {
+           gS._isVehicle = (0, XS.p)(gS.target), ES(SS, gS)
```

#### 2104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15288` → after: `L15232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15232) · [Before (L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15288)

```diff
-         iG: function(Fk, Ik) {
+         pE: function(HS, gS) {
```

#### 2105. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15292-L15293` → after: `L15236-L15237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15236-L15237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15236-L15237) · [Before (L15292-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15292-L15293)

```diff
-         Ix: function(Fk, Ik) {
-           for (const Xk of Ik) Xk._libraryVersion !== qk.h.version && Gk(kk, Xk), null !== Xk._controller && Bk(kk, Xk, Fk / 1e3)
+         bD: function(HS, gS) {
+           for (const tS of gS) tS._libraryVersion !== uS.g.version && ES(SS, tS), null !== tS._controller && sS(SS, tS, HS / 1e3)
```

#### 2106. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15300-L15301` → after: `L15244-L15245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15244-L15245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15244-L15245) · [Before (L15300-L15301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15300-L15301)

```diff
-       const Xk = Fk.Xu;
-       Fk._libraryVersion = qk.h.version, Fk._controller = qk.h.createController(Fk.target, kk.Xw.kp, Fk.Ip), Fk._primed = !1, null === (Ik = Wk(kk, Xk)) || void 0 === Ik || Ik.setRigController(Fk._controller), null !== Fk._controller && (0, ek.b)(kk).animations.restoreClip(Xk, Fk … [truncated]
+       const tS = HS.AY;
+       HS._libraryVersion = uS.g.version, HS._controller = uS.g.createController(HS.target, SS.Hj.fY, HS.kY), HS._primed = !1, null === (gS = US(SS, tS)) || void 0 === gS || gS.setRigController(HS._controller), null !== HS._controller && (0, KS.d)(SS).animations.restoreClip(tS, HS … [truncated]
```

#### 2107. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15306` → after: `L15250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15250) · [Before (L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15306)

```diff
-       return null !== (Ik = null === (Xk = Wk(kk, Fk)) || void 0 === Xk ? void 0 : Xk.getRigController()) && void 0 !== Ik ? Ik : null
+       return null !== (gS = null === (tS = US(SS, HS)) || void 0 === tS ? void 0 : tS.getRigController()) && void 0 !== gS ? gS : null
```

#### 2108. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15314` → after: `L15258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15258) · [Before (L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15314)

```diff
-       const Ik = kk.MJ.getState(Fk, "rigAnimation");
+       const gS = SS.FQ.getState(HS, "rigAnimation");
```

#### 2109. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15329` → after: `L15273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15273) · [Before (L15329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15329)

```diff
-       const Xk = kk.MJ.getState(Fk, "rigAnimation");
+       const tS = SS.FQ.getState(HS, "rigAnimation");
```

#### 2110. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15334` → after: `L15278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15278) · [Before (L15334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15334)

```diff
-       const Xk = kk.MJ.getState(Fk, "rigAnimation");
+       const tS = SS.FQ.getState(HS, "rigAnimation");
```

#### 2111. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15342` → after: `L15286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15286) · [Before (L15342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15342)

```diff
-         Xk.setInput(yk.l.HitAngle, null === Ik ? 0 : 180 * lk.e.computeShortestRotation(Tk, Ik) / Math.PI)
+         tS.setInput(xS.f.HitAngle, null === gS ? 0 : 180 * NS.b.computeShortestRotation(bS, gS) / Math.PI)
```

#### 2112. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15344` → after: `L15288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15288) · [Before (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15344)

```diff
-       return Nk(kk, Fk, ak.n)
+       return WS(SS, HS, qS.m)
```

#### 2113. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15349` → after: `L15293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15293) · [Before (L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15349)

```diff
-       return null !== (Ik = kk.MJ.getState(Fk, "animator")) && void 0 !== Ik ? Ik : null
+       return null !== (gS = SS.FQ.getState(HS, "animator")) && void 0 !== gS ? gS : null
```

#### 2114. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15353-L15354` → after: `L15297-L15298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15297-L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15297-L15298) · [Before (L15353-L15354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15353-L15354)

```diff
-       const Ik = Wk(kk, Fk.Xu);
-       return null !== Ik && Ik.vIk.EIk && !(0, Lk.pausesOutOfView)(kk, Fk.Xu, Fk.Ip)
+       const gS = US(SS, HS.AY);
+       return null !== gS && gS.ngS.PgS && !(0, IS.pausesOutOfView)(SS, HS.AY, HS.kY)
```

#### 2115. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15359` → after: `L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15303) · [Before (L15359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15359)

```diff
-         ak = Fk.Xu;
+         qS = HS.AY;
```

#### 2116. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15367` → after: `L15311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15311) · [Before (L15367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15367)

```diff
-       const Ok = lk.e.computeShortestRotation(Fk._headingLastFrame, Lk);
+       const cS = NS.b.computeShortestRotation(HS._headingLastFrame, IS);
```

#### 2117. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15374` → after: `L15318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15318) · [Before (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15374)

```diff
-           const Xk = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le;
+           const tS = null === (gS = SS.FQ.THS(HS)) || void 0 === gS ? void 0 : gS.fK;
```

#### 2118. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15377` → after: `L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15321) · [Before (L15377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15377)

```diff
-         Ik && !Fk._occupied && (Fk._turnHeldSeconds = vk), Fk._occupied = Ik, Xk.setInput(yk.l.Occupied, Ik ? 1 : 0), nk[Gk++] = Ik ? ik.h : ik.k
+         gS && !HS._occupied && (HS._turnHeldSeconds = OS), HS._occupied = gS, tS.setInput(xS.f.Occupied, gS ? 1 : 0), vS[ES++] = gS ? XS.h : XS.k
```

#### 2119. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15380-L15382` → after: `L15324-L15326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15324-L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15324-L15326) · [Before (L15380-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15380-L15382)

```diff
-         const Ik = kk.MJ.KFk(ak),
-           Tk = null !== (pk = null === Ik || void 0 === Ik ? void 0 : Ik.pose) && void 0 !== pk ? pk : "standing";
-         Xk.setInput(yk.l.Crouching, null !== Ik && void 0 !== Ik && Ik.crouching ? 1 : 0), Xk.setInput(yk.l.Aiming, (0, wk.c)(kk, ak) ? 1 : 0), "standing" !== Tk && (nk[Gk++] = Tk), null !== Ik && void 0 !== Ik && Ik.crouching && (nk[Gk++] = ik.e), null !== Fk._aiState && (nk[Gk+ … [truncated]
+         const gS = SS.FQ.uHS(qS),
+           bS = null !== (LS = null === gS || void 0 === gS ? void 0 : gS.pose) && void 0 !== LS ? LS : "standing";
+         tS.setInput(xS.f.Crouching, null !== gS && void 0 !== gS && gS.crouching ? 1 : 0), tS.setInput(xS.f.Aiming, (0, jS.c)(SS, qS) ? 1 : 0), "standing" !== bS && (vS[ES++] = bS), null !== gS && void 0 !== gS && gS.crouching && (vS[ES++] = XS.d), null !== HS._aiState && (vS[ES+ … [truncated]
```

#### 2120. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15390` → after: `L15334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15334) · [Before (L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15390)

```diff
-         return Fk._sentHeadingLastFrame = Ik, Fk._catchingUp = !Number.isNaN(Ik) && Math.abs(lk.e.computeShortestRotation(Lk, Ik)) > Sk, void(Fk._catchingUp && (Fk._turnHeldSeconds = vk))
+         return HS._sentHeadingLastFrame = gS, HS._catchingUp = !Number.isNaN(gS) && Math.abs(NS.b.computeShortestRotation(IS, gS)) > JS, void(HS._catchingUp && (HS._turnHeldSeconds = OS))
```

#### 2121. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15399` → after: `L15343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15343) · [Before (L15399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15399)

```diff
-         !Number.isNaN(ik) && Math.abs(lk.e.computeShortestRotation(ik, Tk)) > yk ? Fk._catchingUp = !0 : Fk._catchingUp && Math.abs(lk.e.computeShortestRotation(Ik, Tk)) <= Sk && (Fk._catchingUp = !1);
+         !Number.isNaN(XS) && Math.abs(NS.b.computeShortestRotation(XS, bS)) > xS ? HS._catchingUp = !0 : HS._catchingUp && Math.abs(NS.b.computeShortestRotation(gS, bS)) <= JS && (HS._catchingUp = !1);
```

#### 2122. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15407-L15408` → after: `L15351-L15352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15351-L15352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15351-L15352) · [Before (L15407-L15408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15407-L15408)

```diff
-           kk.setInput(yk.l.GroundSpeed, Fk), kk.setInput(yk.l.ForwardSpeed, Ik), kk.setInput(yk.l.VerticalSpeed, Xk), kk.setInput(yk.l.TurnRate, Tk), kk.setInput(yk.l.OnGround, Math.abs(Xk) < Pk ? 1 : 0)
-         }(Xk, uk / Ik, Rk / Ik, Zk / Ik, Nk / Ik), Fk._snapNext ? (Fk._snapNext = !1, Xk.markDiscontinuity()) : Xk.addTravel(Rk < Kk * uk ? -uk : uk)
+           SS.setInput(xS.f.GroundSpeed, HS), SS.setInput(xS.f.ForwardSpeed, gS), SS.setInput(xS.f.VerticalSpeed, tS), SS.setInput(xS.f.TurnRate, bS), SS.setInput(xS.f.OnGround, Math.abs(tS) < PS ? 1 : 0)
+         }(tS, YS / gS, yS / gS, kS / gS, WS / gS), HS._snapNext ? (HS._snapNext = !1, tS.markDiscontinuity()) : tS.addTravel(yS < QS * YS ? -YS : YS)
```

#### 2123. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15412-L15413` → after: `L15356-L15357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15356-L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15356-L15357) · [Before (L15412-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15412-L15413)

```diff
-       if (!Fk._isVehicle || (0, tk.d)(kk, Fk.Xu)) return Number.NaN;
-       const Ik = kk.MJ.getState(Fk.Xu, "meshRotation");
+       if (!HS._isVehicle || (0, fS.e)(SS, HS.AY)) return Number.NaN;
+       const gS = SS.FQ.getState(HS.AY, "meshRotation");
```

#### 2124. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15417` → after: `L15361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15361) · [Before (L15417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15417)

```diff
-   37777: (kk, Fk, Ik) => {
+   37774: (SS, HS, gS) => {
```

#### 2125. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15431` → after: `L15375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15375) · [Before (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15431)

```diff
-     var Xk = Ik(354),
+     var tS = gS(402),
```

#### 2126. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15433-L15439` → after: `L15377-L15383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15377-L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15377-L15383) · [Before (L15433-L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15433-L15439)

```diff
-       ik = Ik(37780),
-       yk = Ik(37785),
-       lk = Ik(187),
-       ak = Ik(37788),
-       qk = Ik(37488),
-       Lk = Ik(37139);
-     const tk = 1e3 / lk.f.serverTicksPerSecond,
+       XS = gS(37783),
+       xS = gS(37791),
+       NS = gS(198),
+       qS = gS(37797),
+       uS = gS(37479),
+       IS = gS(37104);
+     const fS = 1e3 / NS.e.serverTicksPerSecond,
```

#### 2127. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15469` → after: `L15413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15413) · [Before (L15469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15469)

```diff
-       return Xk > Ik ? Ik / Xk : 1
+       return tS > gS ? gS / tS : 1
```

#### 2128. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15535` → after: `L15479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15479) · [Before (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15535)

```diff
-         const Tk = kk.MJ.getState(Fk, "smoothToServerPos");
+         const bS = SS.FQ.getState(HS, "smoothToServerPos");
```

#### 2129. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15537` → after: `L15481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15481) · [Before (L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15537)

```diff
-         Fk = null === (Xk = kk.MJ.XIk(Fk)) || void 0 === Xk ? void 0 : Xk.le
+         HS = null === (tS = SS.FQ.THS(HS)) || void 0 === tS ? void 0 : tS.fK
```

#### 2130. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15547` → after: `L15491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15491) · [Before (L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15547)

```diff
-       return !(null === kk || void 0 === kk || !kk.isEnabled()) && (!("rG" in kk) || kk.isVisible && (null === Fk || (0, ak.f)(kk, Fk)))
+       return !(null === SS || void 0 === SS || !SS.isEnabled()) && (!("qY" in SS) || SS.isVisible && (null === HS || (0, qS.f)(SS, HS)))
```

#### 2131. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15552-L15554` → after: `L15496-L15498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15496-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15496-L15498) · [Before (L15552-L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15552-L15554)

```diff
-       const Ik = Fk.Xu;
-       if (kk.MJ.XIk(Ik)) return;
-       const Xk = kk.MJ.ZY(Ik).Im,
+       const gS = HS.AY;
+       if (SS.FQ.THS(gS)) return;
+       const tS = SS.FQ.zB(gS).JF,
```
