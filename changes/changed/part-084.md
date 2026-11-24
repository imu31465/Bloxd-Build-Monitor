# Changed — Bundle Modifications Report (Part 084 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `84 / 140` (**363** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 083](part-083.md) · [Part 085 →](part-085.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/85.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/85.js` (2363 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20)

#### 2027. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22360-L22366` → after: `L22034-L22041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22034-L22041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22034-L22041) · [Before (L22360-L22366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22360-L22366)

```diff
-             function nm(mm) {
-               return typeof pT[mm] === oT[5] ? pT[mm] = Qm(ET[mm]) : pT[mm]
-             }
- 
-             function Jm() {
-               var mm = function() {
-                 var mm, Tm, fm = oT[0];
+               function KD(DD, zD) {
+                 var wD, pD, sD = gD(DD);
+                 sD.length > Uz[18] && (sD = MD(sD, DD.length * Uz[2]));
+                 var KD = Array(Uz[18]),
+                   rD = Array(Uz[18]);
+                 for (wD = Uz[0]; wD < Uz[18]; wD++) Bz(KD[wD] = 909522486 ^ sD[wD], rD[wD] = 1549556828 ^ sD[wD]);
+                 return pD = MD(KD.concat(gD(zD)), Uz[26] + zD.length * Uz[2]), RD(MD(rD.concat(pD), Uz[26] + 256))
+               }
```

#### 2028. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22368-L22370` → after: `L22043-L22044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22043-L22044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22043-L22044) · [Before (L22368-L22370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22368-L22370)

```diff
-                 function hm(mm, Tm) {
-                   return wm(am(Dm(mm), Dm(Tm)))
-                 }
+               function rD(DD) {
+                 var zD, pD, sD, KD;
```

#### 2029. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22372-L22378` → after: `L22046-L22059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22046-L22059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22046-L22059) · [Before (L22372-L22378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22372-L22378)

```diff
-                 function Am(mm, Tm, fm) {
-                   return function(mm, Tm) {
-                     var fm, hm, Am, am, xm, wm, Dm, im, Rm = Tm.length;
-                     for (fm = Array(), hm = Array(Math.ceil(mm.length / oT[35])), xm = oT[0]; xm < hm.length; xm++) hm[xm] = mm.charCodeAt(xm * oT[35]) << oT[2] | mm.charCodeAt(xm * oT[35] + oT[1]);
-                     for (; hm.length > oT[0];) {
-                       for (jT(im = Array(), Dm = oT[0]), xm = oT[0]; xm < hm.length; xm++) jT(Dm = (Dm << oT[32]) + hm[xm], wm = Math.floor(Dm / Rm), Dm -= wm * Rm), (im.length > oT[0] || wm > oT[0]) && (im[im.length] = wm);
-                       jT(fm[fm.length] = Dm, hm = im)
+                 function rD(DD) {
+                   return typeof Rz[DD] === Uz[5] ? Rz[DD] = function(DD) {
+                     var zD, wD, pD, sD, KD, rD, LD;
+                     for (Bz(zD = "" + (DD || ""), wD = zD.length, pD = [], sD = Uz[0], KD = Uz[0], rD = -Uz[1]), LD = Uz[0]; LD < wD; LD++) {
+                       var cD = 'A1oLPSQpjsmrBaCGqbFZHDdUJheMKORlX~n:/!+<*83"v)(0u79%[zi`y6^w,5k&I?E|=fgV@t.c_W2x$#}{TY4N;]>'.indexOf(zD[LD]);
+                       if (cD !== -Uz[1])
+                         if (rD < Uz[0]) rD = cD;
+                         else {
+                           Bz(rD += cD * Uz[12], sD |= rD << KD, KD += (rD & Uz[13]) > Uz[14] ? Uz[15] : Uz[16]);
+                           do {
+                             Bz(pD.push(sD & Uz[3]), sD >>= Uz[2], KD -= Uz[2])
+                           } while (KD > Uz[9]);
+                           rD = -Uz[1]
+                         }
```

#### 2030. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22380-L22383` → after: `L22061-L22062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22061-L22062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22061-L22062) · [Before (L22380-L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22380-L22383)

```diff
-                     for (Am = "", xm = fm.length - oT[1]; xm >= oT[0]; xm--) Am += Tm.charAt(fm[xm]);
-                     for (am = Math.ceil(mm.length * oT[2] / (Math.log(Tm.length) / Math.log(oT[35]))), xm = Am.length; xm < am; xm++) Am = Tm[oT[0]] + Am;
-                     return Am
-                   }(am(Dm(mm), Dm(Tm)), fm)
+                     return rD > -Uz[1] && pD.push((sD | rD << KD) & Uz[3]), fz(pD)
+                   }(Az[DD]) : Rz[DD]
```

#### 2031. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22386-L22393` → after: `L22068-L22069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22068-L22069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22068-L22069) · [Before (L22386-L22393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22386-L22393)

```diff
-                 function am(mm, Tm) {
-                   var fm, hm, Am = im(mm);
-                   Am.length > oT[32] && (Am = Im(Am, mm.length * oT[2]));
-                   var am = Array(oT[32]),
-                     xm = Array(oT[32]);
-                   for (fm = oT[0]; fm < oT[32]; fm++) jT(am[fm] = 909522486 ^ Am[fm], xm[fm] = 1549556828 ^ Am[fm]);
-                   return hm = Im(am.concat(im(Tm)), oT[45] + Tm.length * oT[2]), Rm(Im(xm.concat(hm), oT[45] + oT[54]))
-                 }
+               function LD(zD) {
+                 var wD, pD, sD, KD;
```

#### 2032. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22396-L22417` → after: `L22072-L22087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22072-L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22072-L22087) · [Before (L22396-L22417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22396-L22417)

```diff
-                   var Tm, hm, Am, am;
- 
-                   function xm(mm) {
-                     return typeof pT[mm] === oT[5] ? pT[mm] = function(mm) {
-                       var Tm, fm, hm, Am, am, xm, wm;
-                       for (jT(Tm = "" + (mm || ""), fm = Tm.length, hm = [], Am = oT[0], am = oT[0], xm = -oT[1]), wm = oT[0]; wm < fm; wm++) {
-                         var Dm = '.WkqPDiN1)3T!mFo+j5Ou}V>*LB"H]Szt9UvQ(,A[^:r`c$bn%R6~E<ewlZdI|Y@_gMCJG7=&h/{2;?Kxf4y0s#8Xpa'.indexOf(Tm[wm]);
-                         if (Dm !== -oT[1])
-                           if (xm < oT[0]) xm = Dm;
-                           else {
-                             jT(xm += Dm * oT[13], Am |= xm << am, am += (xm & oT[14]) > oT[15] ? oT[16] : oT[17]);
-                             do {
-                               jT(hm.push(Am & oT[3]), Am >>= oT[2], am -= oT[2])
-                             } while (am > oT[9]);
-                             xm = -oT[1]
-                           }
- ... (6 more removed lines; see GitHub link above)
+                   return typeof Rz[DD] === Uz[5] ? Rz[DD] = function(DD) {
+                     var zD, wD, pD, sD, KD, rD, LD;
+                     for (Bz(zD = "" + (DD || ""), wD = zD.length, pD = [], sD = Uz[0], KD = Uz[0], rD = -Uz[1]), LD = Uz[0]; LD < wD; LD++) {
+                       var cD = 'DQsbhTMAK.{*on;dgU94cI1pqi$zFlt@3u/xV}%2&m=~X"k^#JPN5CBvf:,r><jyL!aOY|`Z(8WSR?6e7E[H]w0)_+G'.indexOf(zD[LD]);
+                       if (cD !== -Uz[1])
+                         if (rD < Uz[0]) rD = cD;
+                         else {
+                           Bz(rD += cD * Uz[12], sD |= rD << KD, KD += (rD & Uz[13]) > Uz[14] ? Uz[15] : Uz[16]);
+                           do {
+                             Bz(pD.push(sD & Uz[3]), sD >>= Uz[2], KD -= Uz[2])
+                           } while (KD > Uz[9]);
+                           rD = -Uz[1]
+                         }
+                     }
+                     return rD > -Uz[1] && pD.push((sD | rD << KD) & Uz[3]), fz(pD)
+                   }(Az[DD]) : Rz[DD]
```

#### 2033. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22419-L22445` → after: `L22089-L22091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22089-L22091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22089-L22091) · [Before (L22419-L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22419-L22445)

```diff
- 
-                 function wm(Tm) {
-                   var fm, hm, Am, am;
- 
-                   function xm(mm) {
-                     return typeof pT[mm] === oT[5] ? pT[mm] = function(mm) {
-                       var Tm, fm, hm, Am, am, xm, wm;
-                       for (jT(Tm = "" + (mm || ""), fm = Tm.length, hm = [], Am = oT[0], am = oT[0], xm = -oT[1]), wm = oT[0]; wm < fm; wm++) {
-                         var Dm = '<ASgmbknU/=oHJQI9XMcaK"+`sFDY3BdEzeV?W]$!:>,75TP;N}.%)C@l6x~1Lpw2ft_Z&vyROG(#i*04ruq[h|^8j{'.indexOf(Tm[wm]);
-                         if (Dm !== -oT[1])
-                           if (xm < oT[0]) xm = Dm;
-                           else {
-                             jT(xm += Dm * oT[13], Am |= xm << am, am += (xm & oT[14]) > oT[15] ? oT[16] : oT[17]);
-                             do {
-                               jT(hm.push(Am & oT[3]), Am >>= oT[2], am -= oT[2])
-                             } while (am > oT[9]);
- ... (11 more removed lines; see GitHub link above)
+                 for (Bz(wD = rD(126) + rD(Uz[28]) + rD(Uz[29]) + "/", pD = "", sD = zD.length), KD = Uz[0]; KD < sD; KD += Uz[17]) {
+                   var LD, cD = zD.charCodeAt(KD) << Uz[18] | (KD + Uz[1] < sD ? zD.charCodeAt(KD + Uz[1]) << Uz[2] : Uz[0]) | (KD + Uz[30] < sD ? zD.charCodeAt(KD + Uz[30]) : Uz[0]);
+                   for (LD = Uz[0]; LD < Uz[20]; LD++) KD * Uz[2] + LD * Uz[7] > zD.length * Uz[2] ? pD += DD : pD += wD.charAt(cD >>> Uz[7] * (Uz[17] - LD) & Uz[6])
```

#### 2034. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22448-L22452` → after: `L22096-L22100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22096-L22100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22096-L22100) · [Before (L22448-L22452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22448-L22452)

```diff
-                 function Dm(mm) {
-                   var Tm, fm, hm, Am = "";
-                   for (Tm = -oT[1]; ++Tm < mm.length;) jT(fm = mm.charCodeAt(Tm), hm = Tm + oT[1] < mm.length ? mm.charCodeAt(Tm + oT[1]) : oT[0]), oT[21] <= fm && fm <= oT[47] && oT[22] <= hm && hm <= oT[48] && jT(fm = oT[19] + ((fm & oT[18]) << oT[20]) + (hm & oT[18]), Tm++), f … [truncated]
-                   return Am
-                 }
+               function cD(DD) {
+                 var zD, wD, pD, sD = "";
+                 for (zD = -Uz[1]; ++zD < DD.length;) Bz(wD = DD.charCodeAt(zD), pD = zD + Uz[1] < DD.length ? DD.charCodeAt(zD + Uz[1]) : Uz[0]), 55296 <= wD && wD <= 56319 && 56320 <= pD && pD <= 57343 && Bz(wD = 65536 + ((wD & Uz[31]) << Uz[37]) + (pD & Uz[31]), zD++), wD <= Uz … [truncated]
+                 return sD
+               }
```

#### 2035. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22454-L22459` → after: `L22102-L22107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22102-L22107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22102-L22107) · [Before (L22454-L22459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22454-L22459)

```diff
-                 function im(mm) {
-                   var Tm, fm = Array(mm.length >> oT[35]);
-                   for (Tm = oT[0]; Tm < fm.length; Tm++) fm[Tm] = oT[0];
-                   for (Tm = oT[0]; Tm < mm.length * oT[2]; Tm += oT[2]) fm[Tm >> oT[42]] |= (mm.charCodeAt(Tm / oT[2]) & oT[3]) << oT[51] - Tm % oT[50];
-                   return fm
-                 }
+               function gD(DD) {
+                 var zD, wD = Array(DD.length >> Uz[30]);
+                 for (zD = Uz[0]; zD < wD.length; zD++) wD[zD] = Uz[0];
+                 for (zD = Uz[0]; zD < DD.length * Uz[2]; zD += Uz[2]) wD[zD >> Uz[35]] |= (DD.charCodeAt(zD / Uz[2]) & Uz[3]) << Uz[36] - zD % Uz[34];
+                 return wD
+               }
```

#### 2036. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22461-L22465` → after: `L22109-L22113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22109-L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22109-L22113) · [Before (L22461-L22465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22461-L22465)

```diff
-                 function Rm(mm) {
-                   var Tm, fm = "";
-                   for (Tm = oT[0]; Tm < mm.length * oT[50]; Tm += oT[2]) fm += String.fromCharCode(mm[Tm >> oT[42]] >>> oT[51] - Tm % oT[50] & oT[3]);
-                   return fm
-                 }
+               function RD(DD) {
+                 var zD, wD = "";
+                 for (zD = Uz[0]; zD < DD.length * Uz[34]; zD += Uz[2]) wD += String.fromCharCode(DD[zD >> Uz[35]] >>> Uz[36] - zD % Uz[34] & Uz[3]);
+                 return wD
+               }
```

#### 2037. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22467-L22469` → after: `L22115-L22117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22115-L22117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22115-L22117) · [Before (L22467-L22469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22467-L22469)

```diff
-                 function pm(mm, Tm) {
-                   return mm >>> Tm | mm << oT[50] - Tm
-                 }
+               function AD(DD, zD) {
+                 return DD >>> zD | DD << Uz[34] - zD
+               }
```

#### 2038. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22471-L22473` → after: `L22119-L22121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22119-L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22119-L22121) · [Before (L22471-L22473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22471-L22473)

```diff
-                 function Em(mm, Tm) {
-                   return mm >>> Tm
-                 }
+               function UD(DD, zD) {
+                 return DD >>> zD
+               }
```

#### 2039. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22475-L22477` → after: `L22123-L22125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22123-L22125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22123-L22125) · [Before (L22475-L22477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22475-L22477)

```diff
-                 function om(mm, Tm, fm) {
-                   return mm & Tm ^ ~mm & fm
-                 }
+               function fD(DD, zD, wD) {
+                 return DD & zD ^ ~DD & wD
+               }
```

#### 2040. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22479-L22481` → after: `L22127-L22129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22127-L22129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22127-L22129) · [Before (L22479-L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22479-L22481)

```diff
-                 function Om(mm, Tm, fm) {
-                   return mm & Tm ^ mm & fm ^ Tm & fm
-                 }
+               function ID(DD, zD, wD) {
+                 return DD & zD ^ DD & wD ^ zD & wD
+               }
```

#### 2041. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22483-L22485` → after: `L22131-L22133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22131-L22133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22131-L22133) · [Before (L22483-L22485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22483-L22485)

```diff
-                 function Ym(mm) {
-                   return pm(mm, oT[35]) ^ pm(mm, oT[16]) ^ pm(mm, 22)
-                 }
+               function BD(DD) {
+                 return AD(DD, Uz[30]) ^ AD(DD, Uz[15]) ^ AD(DD, 22)
+               }
```

#### 2042. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22487-L22489` → after: `L22135-L22137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22135-L22137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22135-L22137) · [Before (L22487-L22489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22487-L22489)

```diff
-                 function qm(mm) {
-                   return pm(mm, oT[7]) ^ pm(mm, oT[43]) ^ pm(mm, 25)
-                 }
+               function GD(DD) {
+                 return AD(DD, Uz[7]) ^ AD(DD, Uz[42]) ^ AD(DD, 25)
+               }
```

#### 2043. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22491-L22493` → after: `L22139-L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22139-L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22139-L22141) · [Before (L22491-L22493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22491-L22493)

```diff
-                 function jm(mm) {
-                   return pm(mm, oT[9]) ^ pm(mm, oT[26]) ^ Em(mm, oT[33])
-                 }
+               function hD(DD) {
+                 return AD(DD, Uz[9]) ^ AD(DD, Uz[33]) ^ UD(DD, Uz[17])
+               }
```

#### 2044. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22495-L22497` → after: `L22143-L22145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22143-L22145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22143-L22145) · [Before (L22495-L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22495-L22497)

```diff
-                 function Vm(mm) {
-                   return pm(mm, 17) ^ pm(mm, oT[52]) ^ Em(mm, oT[20])
-                 }
+               function nD(DD) {
+                 return AD(DD, 17) ^ AD(DD, Uz[38]) ^ UD(DD, Uz[37])
+               }
```

#### 2045. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22499-L22505` → after: `L22147-L22151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22147-L22151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22147-L22151) · [Before (L22499-L22505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22499-L22505)

```diff
-                 function Im(mm, fm) {
-                   var hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, Im, Qm, nm, Jm = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
-                   for (hm = new Array(oT[53]), jT(mm[fm >> oT[42]] |= oT[23] << oT[51] - fm % oT[50], mm[(fm + oT[53] >> oT[44] << oT[37]) + oT[25]] = fm), Em = oT[0]; Em < mm.length; Em += oT[32]) {
-                     for (jT(Am = Jm[oT[0]], am = Jm[oT[1]], xm = Jm[oT[35]], wm = Jm[oT[33]], Dm = Jm[oT[37]], im = Jm[oT[42]], Rm = Jm[oT[7]], pm = Jm[oT[9]]), Im = oT[0]; Im < oT[53]; Im++) jT(Im < oT[32] ? hm[Im] = mm[Im + Em] : hm[Im] = Km(Km(Km(Vm(hm[Im - oT[35]]), hm[Im - o … [truncated]
-                     jT(Jm[oT[0]] = Km(Am, Jm[oT[0]]), Jm[oT[1]] = Km(am, Jm[oT[1]]), Jm[oT[35]] = Km(xm, Jm[oT[35]]), Jm[oT[33]] = Km(wm, Jm[oT[33]]), Jm[oT[37]] = Km(Dm, Jm[oT[37]]), Jm[oT[42]] = Km(im, Jm[oT[42]]), Jm[oT[7]] = Km(Rm, Jm[oT[7]]), Jm[oT[9]] = Km(pm, Jm[oT[9]]))
-                   }
-                   return Jm
+               function MD(DD, wD) {
+                 var pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, MD, JD, ED, QD = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
+                 for (pD = new Array(Uz[39]), Bz(DD[wD >> Uz[35]] |= Uz[29] << Uz[36] - wD % Uz[34], DD[(wD + Uz[39] >> Uz[41] << Uz[20]) + Uz[24]] = wD), UD = Uz[0]; UD < DD.length; UD += Uz[18]) {
+                   for (Bz(sD = QD[Uz[0]], KD = QD[Uz[1]], rD = QD[Uz[30]], LD = QD[Uz[17]], cD = QD[Uz[20]], gD = QD[Uz[35]], RD = QD[Uz[7]], AD = QD[Uz[9]]), MD = Uz[0]; MD < Uz[39]; MD++) Bz(MD < Uz[18] ? pD[MD] = DD[MD + UD] : pD[MD] = OD(OD(OD(nD(pD[MD - Uz[30]]), pD[MD - Uz[ … [truncated]
+                   Bz(QD[Uz[0]] = OD(sD, QD[Uz[0]]), QD[Uz[1]] = OD(KD, QD[Uz[1]]), QD[Uz[30]] = OD(rD, QD[Uz[30]]), QD[Uz[17]] = OD(LD, QD[Uz[17]]), QD[Uz[20]] = OD(cD, QD[Uz[20]]), QD[Uz[35]] = OD(gD, QD[Uz[35]]), QD[Uz[7]] = OD(RD, QD[Uz[7]]), QD[Uz[9]] = OD(AD, QD[Uz[9]]))
```

#### 2046. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22508-L22574` → after: `L22156-L22158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22156-L22158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22156-L22158) · [Before (L22508-L22574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22508-L22574)

```diff
-                 function Km(mm, Tm) {
-                   var fm = (mm & oT[49]) + (Tm & oT[49]);
-                   return (mm >> oT[32]) + (Tm >> oT[32]) + (fm >> oT[32]) << oT[32] | fm & oT[49]
-                 }
-                 return mm = "", Tm = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604 … [truncated]
-                   hex: function(mm) {
-                     return xm(function(mm) {
-                       return Rm(Im(im(mm), mm.length * oT[2]))
-                     }(Dm(mm)))
-                   },
-                   b64: hm,
-                   any: Am,
-                   hex_hmac: function(mm, Tm) {
-                     return xm(am(Dm(mm), Dm(Tm)))
-                   },
-                   b64_hmac: hm,
- ... (51 more removed lines; see GitHub link above)
+               function OD(DD, zD) {
+                 var wD = (DD & Uz[40]) + (zD & Uz[40]);
+                 return (DD >> Uz[18]) + (zD >> Uz[18]) + (wD >> Uz[18]) << Uz[18] | wD & Uz[40]
```

#### 2047. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22576-L22577` → after: `L22160-L22175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22160-L22175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22160-L22175) · [Before (L22576-L22577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22576-L22577)

```diff
-             }
-             Ym(153) + "f" in qT && zm(), xm[Em + cm] ^= pm[cm]
+               return DD = "", zD = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 60480 … [truncated]
+                 hex: function(DD) {
+                   return rD(function(DD) {
+                     return RD(MD(gD(DD), DD.length * Uz[2]))
+                   }(cD(DD)))
+                 },
+                 b64: pD,
+                 any: sD,
+                 hex_hmac: function(DD, zD) {
+                   return rD(KD(cD(DD), cD(zD)))
+                 },
+                 b64_hmac: pD,
+                 any_hmac: sD
+               }
+             }();
+             console.log(DD)
```

#### 2048. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22582` → after: `L22185-L22189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22185-L22189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22185-L22189) · [Before (L22582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22582)

```diff
-     const KT = [1, 2, 0, "h", "c", 9, 202, "e", 101, "d", 8, 255, "length", 3, 100, 182, 124, "undefined", void 0, "b", 197, 63, 6, "fromCodePoint", 7, 12, "push", 141, 60, 52, 180, 92, 91, 107, 167, 8191, 88, 13, 14, 249, 4, 165, 211, !1, 59, !0, "a", 109, "g", 213, 120, 127, 17 … [truncated]
+     const nz = [1, 2, 0, 8, "c", "i", 238, "e", 46, 243, 255, "length", "b", 216, "a", 97, "undefined", void 0, 3, 63, 6, "fromCodePoint", 7, 12, "push", 116, 163, 136, "g", 91, 108, 8191, 88, 13, 14, 82, 193, 9, 5, "f", 4, 18, "h", 232, 174, null, 247, 175, "d", 76, 28, 127, "js … [truncated]
+ 
+     function Mz(...DD) {
+       return DD[nz[11]] = nz[0], typeof pw !== nz[16] && pw ? (new pw).decode(new sw(DD[nz[2]])) : typeof Kw !== nz[16] && Kw ? Kw.from(DD[nz[2]]).toString("utf-8") : gw(DD[nz[2]])
+     }
```

#### 2049. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22585` → after: `L22192-L22205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22192-L22205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22192-L22205) · [Before (L22585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22585)

```diff
-       return mm[KT[12]] = KT[0], typeof Af !== KT[17] && Af ? (new Af).decode(new af(mm[KT[2]])) : typeof xf !== KT[17] && xf ? xf.from(mm[KT[2]]).toString("utf-8") : Rf(mm[KT[2]])
+       if (DD[nz[11]] = nz[18], DD[nz[2]] === function(...DD) {
+           return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = function(...DD) {
+             for (Ez(DD[nz[11]] = nz[0], DD[nz[0]] = 'MPLkGSU&{_4]?pimX:[T2Q73.rHuaf5|bdg=}hJ%l(eA"vtYzINB9!@1`*^qZCREDKjOWV+s8~c$;Fn>x,</0#)6woy', DD[-nz[26]] = "" + (DD[nz[2]] || ""), DD[nz[27]] = DD[-nz[26]].length, DD[-nz[35]] = [], DD[nz[7]] = nz[2], DD[-nz[30]] = nz[2], DD[n … [truncated]
+               if (DD[nz[5]] = DD[nz[0]].indexOf(DD[-nz[26]][DD[nz[3]]]), DD[nz[5]] !== -nz[0])
+                 if (DD[nz[28]] < nz[2]) DD[nz[28]] = DD[nz[5]];
+                 else {
+                   Ez(DD[nz[28]] += DD[nz[5]] * nz[29], DD[nz[7]] |= DD[nz[28]] << DD[-nz[30]], DD[-nz[30]] += (DD[nz[28]] & nz[31]) > nz[32] ? nz[33] : nz[34]);
+                   do {
+                     Ez(DD[-nz[35]].push(DD[nz[7]] & nz[10]), DD[nz[7]] >>= nz[3], DD[-nz[30]] -= nz[3])
+                   } while (DD[-nz[30]] > nz[22]);
+                   DD[nz[28]] = -nz[0]
+                 } return DD[nz[28]] > -nz[0] && DD[-nz[35]].push((DD[nz[7]] | DD[nz[28]] << DD[-nz[30]]) & nz[10]), Mz(DD[-nz[35]])
+           }(hz[DD[nz[2]]]) : Gz[DD[nz[2]]]
+         }(110)) return DD[nz[0]] + DD[nz[1]]
```

#### 2050. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22593-L22594` → after: `L22213-L22214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22213-L22214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22213-L22214) · [Before (L22593-L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22593-L22594)

```diff
-     JT(VT = {}, IT = ["z#y3b;ZmT", "G8gX.)[[D|^B>{_d){SG%7XB!<#vH0mrI]", ']eT?02Al!L%/gM{gIwC"@qQ<nYX^#<e', 'C_xIvi7ZH,H2,76d#ew4Z?d<[BZ[10<tK,b=mp"t1ve(>D$t`Spe', '(w6#oseZc<XZ&Ung5|$#79RIV,4N=KjbL8"RN<ytUUtJzsQ%Ru"g_[:O^6Ci]', "~|peZ3*Y7O(v$U(%:)c4n4>i{YSXzZaLWp>eX8fbI", ".ip4D … [truncated]
-       JT(mm[KT[12]] = KT[2], mm[KT[15]] = [function() {
+     Ez(Gz = {}, hz = ['T9[n$:"imi!l,ZG)8qWH1', "d29c{]I(L?yozgqnGpfut[l2hL_?Drc", "*&dI`>3Ltil~XbQN!k|u**wbBGN1nEA4kY+ks?CZ", "$0fcQzB8SR(KM41a<p~GL:6[PR", "sk?I;u$fC11OP", "|IA;Wg#qYGloDZ~0WOIAR**hV?YYGCs(~9hOwJ)vlYXJ2CAnLOzV6al+j2>oP", '82/y2WRU@Ran]>IUI4VG%CT+z&l8|zO(B?XI:5A8) … [truncated]
+       Ez(DD[nz[11]] = nz[2], DD[nz[14]] = [function() {
```

#### 2051. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22602` → after: `L22222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22222) · [Before (L22602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22602)

```diff
-       }], mm[KT[0]] = KT[18], mm[-KT[13]] = []);
+       }], DD[nz[12]] = nz[17], DD[nz[1]] = []);
```

#### 2052. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22604` → after: `L22224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22224) · [Before (L22604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22604)

```diff
-         JT(mm[KT[0]] = Object, mm[-KT[13]][KT[26]]("".__proto__.constructor.name))
+         Ez(DD[nz[12]] = Object, DD[nz[1]][nz[24]]("".__proto__.constructor.name))
```

#### 2053. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22606-L22609` → after: `L22226-L22229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22226-L22229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22226-L22229) · [Before (L22606-L22609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22606-L22609)

```diff
-       mm: for (mm[KT[14]] = KT[2]; mm[KT[14]] < mm[KT[15]][KT[12]]; mm[KT[14]]++) try {
-         for (mm[KT[0]] = mm[KT[15]][mm[KT[14]]](), mm[KT[16]] = KT[2]; mm[KT[16]] < mm[-KT[13]][KT[12]]; mm[KT[16]]++)
-           if (typeof mm[KT[0]][mm[-KT[13]][mm[KT[16]]]] === KT[17]) continue mm;
-         return mm[KT[0]]
+       DD: for (DD[-nz[13]] = nz[2]; DD[-nz[13]] < DD[nz[14]][nz[11]]; DD[-nz[13]]++) try {
+         for (DD[nz[12]] = DD[nz[14]][DD[-nz[13]]](), DD[nz[15]] = nz[2]; DD[nz[15]] < DD[nz[1]][nz[11]]; DD[nz[15]]++)
+           if (typeof DD[nz[12]][DD[nz[1]][DD[nz[15]]]] === nz[16]) continue DD;
+         return DD[nz[12]]
```

#### 2054. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22611-L22613` → after: `L22231-L22233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22231-L22233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22231-L22233) · [Before (L22611-L22613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22611-L22613)

```diff
-       return mm[KT[0]] || this
-     }() || {}, Af = hf.TextDecoder, af = hf.Uint8Array, xf = hf.XO, wf = hf.String || String, Df = hf.Array || Array, Rf = function(...mm) {
-       return JT(mm[KT[12]] = KT[2], mm[KT[27]] = new Df(KT[83]), mm[KT[28]] = wf[KT[23]] || wf.fromCharCode, mm[KT[1]] = []),
+       return DD[nz[12]] || this
+     }() || {}, pw = ww.TextDecoder, sw = ww.Uint8Array, Kw = ww.nI, rw = ww.String || String, Lw = ww.Array || Array, gw = function(...DD) {
+       return Ez(DD[nz[11]] = nz[2], DD[nz[25]] = new Lw(nz[53]), DD[nz[7]] = rw[nz[21]] || rw.fromCharCode, DD[nz[1]] = []),
```

#### 2055. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22615` → after: `L22235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22235) · [Before (L22615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22615)

```diff
-           for (JT(Tm[KT[12]] = KT[0], Tm[KT[20]] = KT[18], Tm[KT[19]] = KT[18], Tm[KT[4]] = Tm[KT[2]][KT[12]], mm[KT[1]][KT[12]] = KT[2]), Tm[KT[9]] = KT[2]; Tm[KT[9]] < Tm[KT[4]];) JT(Tm[KT[19]] = Tm[KT[2]][Tm[KT[9]]++], Tm[KT[19]] <= KT[51] ? Tm[KT[20]] = Tm[KT[19]] : Tm[KT[19] … [truncated]
+           for (Ez(zD[nz[11]] = nz[0], zD[nz[14]] = nz[17], zD[nz[1]] = nz[17], zD[nz[18]] = zD[nz[2]][nz[11]], DD[nz[1]][nz[11]] = nz[2]), zD[nz[8]] = nz[2]; zD[nz[8]] < zD[nz[18]];) Ez(zD[nz[1]] = zD[nz[2]][zD[nz[8]]++], zD[nz[1]] <= nz[51] ? zD[nz[14]] = zD[nz[1]] : zD[nz[1]] < … [truncated]
```

#### 2056. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22620-L22623` → after: `L22240-L22245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22240-L22245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22240-L22245) · [Before (L22620-L22623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22620-L22623)

```diff
-         return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = function(...mm) {
-           for (JT(mm[KT[12]] = KT[0], mm[KT[0]] = 'Tz/P4"Oq&As!URK8]5|)o^dJhB,krpw#;(6V?evmfj{c~1}MuQ>ZE*92SaN<x@n[`YGF.7gXbyDiH=_$%IC3lW0Lt+:', mm[KT[29]] = "" + (mm[KT[2]] || ""), mm[KT[4]] = mm[KT[29]].length, mm[KT[9]] = [], mm[KT[49]] = KT[2], mm[KT[22]] = KT[2], mm[KT[48]]  … [truncated]
-             if (mm[KT[47]] = mm[KT[0]].indexOf(mm[KT[29]][mm[KT[10]]]), mm[KT[47]] !== -KT[0])
-               if (mm[KT[48]] < KT[2]) mm[KT[48]] = mm[KT[47]];
+         return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = function(DD) {
+           var zD, wD, pD, sD, KD, rD, LD;
+           for (Ez(zD = "" + (DD || ""), wD = zD.length, pD = [], sD = nz[2], KD = nz[2], rD = -nz[0]), LD = nz[2]; LD < wD; LD++) {
+             var cD = 'O=8Cp2D9?YW"nv~Q`;4xF>6iHsB0ybk(*:hUtS^T|Z,uqcd!}$wmERf5%lrAKeL<aG[_zJI1MN#o+g.X@]&3/j{V)P7'.indexOf(zD[LD]);
+             if (cD !== -nz[0])
+               if (rD < nz[2]) rD = cD;
```

#### 2057. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22625` → after: `L22247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22247) · [Before (L22625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22625)

```diff
-                 JT(mm[KT[48]] += mm[KT[47]] * KT[32], mm[KT[49]] |= mm[KT[48]] << mm[KT[22]], mm[KT[22]] += (mm[KT[48]] & KT[35]) > KT[36] ? KT[37] : KT[38]);
+                 Ez(rD += cD * nz[29], sD |= rD << KD, KD += (rD & nz[31]) > nz[32] ? nz[33] : nz[34]);
```

#### 2058. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22627-L22630` → after: `L22249-L22254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22249-L22254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22249-L22254) · [Before (L22627-L22630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22627-L22630)

```diff
-                   JT(mm[KT[9]].push(mm[KT[49]] & KT[11]), mm[KT[49]] >>= KT[10], mm[KT[22]] -= KT[10])
-                 } while (mm[KT[22]] > KT[24]);
-                 mm[KT[48]] = -KT[0]
-               } return mm[KT[48]] > -KT[0] && mm[KT[9]].push((mm[KT[49]] | mm[KT[48]] << mm[KT[22]]) & KT[11]), QT(mm[KT[9]])
+                   Ez(pD.push(sD & nz[10]), sD >>= nz[3], KD -= nz[3])
+                 } while (KD > nz[22]);
+                 rD = -nz[0]
+               }
+           }
+           return rD > -nz[0] && pD.push((sD | rD << KD) & nz[10]), Mz(pD)
```

#### 2059. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22632-L22633` → after: `L22256-L22270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22256-L22270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22256-L22270) · [Before (L22632-L22633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22632-L22633)

```diff
-       } [][KT[12]] = KT[2], mm(KT[36]) in nT && function(...mm) {
-         mm[KT[12]] = KT[2]
+       } [][nz[11]] = nz[2], DD(114) in Jz && function(...DD) {
+         var zD;
+         Ez(DD[nz[11]] = nz[2], zD = function(...DD) {
+           Ez(DD[nz[11]] = nz[0], this.bA = DD[nz[2]], this.length = nz[2], this.map = {}, this.head = nz[45], this.tail = nz[45])
+         }, zD.prototype.get = function(DD) {
+           var zD = this.map[DD];
+           return zD ? (this.remove(zD), this.insert(zD.key, zD.val), zD.val) : -nz[0]
+         }, zD.prototype.put = function(...DD) {
+           Ez(DD[nz[11]] = nz[1], this.map[DD[nz[2]]] ? (this.remove(this.map[DD[nz[2]]]), this.insert(DD[nz[2]], DD[nz[0]])) : this.length === this.bA ? (this.remove(this.head), this.insert(DD[nz[2]], DD[nz[0]])) : (this.insert(DD[nz[2]], DD[nz[0]]), this.length++))
+         }, zD.prototype.remove = function(...DD) {
+           Ez(DD[nz[11]] = nz[0], DD[nz[0]] = DD[nz[2]].prev, DD[nz[46]] = DD[nz[2]].next), DD[nz[46]] && (DD[nz[46]].prev = DD[nz[0]]), DD[nz[0]] && (DD[nz[0]].next = DD[nz[46]]), this.head === DD[nz[2]] && (this.head = DD[nz[46]]), this.tail === DD[nz[2]] && (this.tail = DD[nz[0 … [truncated]
+         }, zD.prototype.insert = function(DD, zD) {
+           var wD = new List(DD, zD);
+           Ez(this.tail ? (this.tail.next = wD, wD.prev = this.tail, this.tail = wD) : (this.tail = wD, this.head = wD), this.map[DD] = wD)
+         }, console.log(zD))
```

#### 2060. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22635-L22636` → after: `L22272-L22273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22272-L22273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22272-L22273) · [Before (L22635-L22636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22635-L22636)

```diff
-       const Tm = KT[5],
-         fm = mm(94) + mm(95) + mm(96) + mm(97),
+       const zD = nz[37],
+         wD = DD(115) + DD(nz[25]) + DD(nz[68]),
```

#### 2061. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22638` → after: `L22275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22275) · [Before (L22638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22638)

```diff
-           [KT[5]]: mm(98) + mm(99) + mm(KT[14]) + mm(KT[8])
+           [nz[37]]: DD(118) + DD(119) + DD(120) + DD(121) + DD(122) + DD(123) + DD(124) + "1"
```

#### 2062. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22640-L22664` → after: `L22277-L22291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22277-L22291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22277-L22291) · [Before (L22640-L22664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22640-L22664)

```diff
-         Am = (...mm) => {
-           mm[KT[12]] = KT[0],
-             function(...mm) {
-               return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = function(...mm) {
-                 for (JT(mm[KT[12]] = KT[0], mm[KT[46]] = 'EOxRt*+yN&5kJ.|HdP^CQB1i"(z>@m]!o~=#%)`XLI8w30}_g$brjS2faAsUqhKv;64nGuT7[Y:FD,?9MZWc{/Vpe<l', mm[KT[19]] = "" + (mm[KT[2]] || ""), mm[KT[58]] = mm[KT[19]].length, mm[KT[40]] = [], mm[KT[60]] = KT[2], mm[KT[56]] = KT[2], mm … [truncated]
-                   if (mm[KT[5]] = mm[KT[46]].indexOf(mm[KT[19]][mm[KT[10]]]), mm[KT[5]] !== -KT[0])
-                     if (mm[KT[59]] < KT[2]) mm[KT[59]] = mm[KT[5]];
-                     else {
-                       JT(mm[KT[59]] += mm[KT[5]] * KT[32], mm[KT[60]] |= mm[KT[59]] << mm[KT[56]], mm[KT[56]] += (mm[KT[59]] & KT[35]) > KT[36] ? KT[37] : KT[38]);
-                       do {
-                         JT(mm[KT[40]].push(mm[KT[60]] & KT[11]), mm[KT[60]] >>= KT[10], mm[KT[56]] -= KT[10])
-                       } while (mm[KT[56]] > KT[24]);
-                       mm[KT[59]] = -KT[0]
-                     } return mm[KT[59]] > -KT[0] && mm[KT[40]].push((mm[KT[60]] | mm[KT[59]] << mm[KT[56]]) & KT[11]), QT(mm[KT[40]])
-               }(IT[mm[KT[2]]]) : VT[mm[KT[2]]]
-             }(KT[70]) + "D" in nT && function(...mm) {
- ... (9 more removed lines; see GitHub link above)
+         sD = DD => {
+           (function(...DD) {
+             return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = function(...DD) {
+               for (Ez(DD[nz[11]] = nz[0], DD[nz[14]] = 'F7nBkfOLNRYbyZ*.mWz:D+({1&e8Ah0^lU=iQ|op)CtaJT"EK]#~u?j24Hs@GV;5I9_x,gcPMw/X!<r6q$3vS`[d>}%', DD[nz[12]] = "" + (DD[nz[2]] || ""), DD[nz[18]] = DD[nz[12]].length, DD[nz[48]] = [], DD[nz[7]] = nz[2], DD[nz[39]] = nz[2], DD[nz … [truncated]
+                 if (DD[nz[5]] = DD[nz[14]].indexOf(DD[nz[12]][DD[nz[3]]]), DD[nz[5]] !== -nz[0])
+                   if (DD[nz[47]] < nz[2]) DD[nz[47]] = DD[nz[5]];
+                   else {
+                     Ez(DD[nz[47]] += DD[nz[5]] * nz[29], DD[nz[7]] |= DD[nz[47]] << DD[nz[39]], DD[nz[39]] += (DD[nz[47]] & nz[31]) > nz[32] ? nz[33] : nz[34]);
+                     do {
+                       Ez(DD[nz[48]].push(DD[nz[7]] & nz[10]), DD[nz[7]] >>= nz[3], DD[nz[39]] -= nz[3])
+                     } while (DD[nz[39]] > nz[22]);
+                     DD[nz[47]] = -nz[0]
+                   } return DD[nz[47]] > -nz[0] && DD[nz[48]].push((DD[nz[7]] | DD[nz[47]] << DD[nz[39]]) & nz[10]), Mz(DD[nz[48]])
+             }(hz[DD[nz[2]]]) : Gz[DD[nz[2]]]
+           })(125) in Jz && function() {
```

#### 2063. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22666-L22668` → after: `L22293-L22295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22293-L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22293-L22295) · [Before (L22666-L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22666-L22668)

```diff
-               for (JT(mm[KT[12]] = KT[0], mm[KT[46]] = 'vG"4h}MFH5>1Efx,n8`#oI^ZLgy%?@/R=Jm0jkSuUbP2TKp)Qa*9rOwic+:3ldqYDsC|B;&{At]!z6X~N7W(eV_[<$.', mm[KT[1]] = "" + (mm[KT[2]] || ""), mm[-KT[63]] = mm[KT[1]].length, mm[KT[40]] = [], mm[KT[7]] = KT[2], mm[KT[22]] = KT[2], mm[KT[ … [truncated]
-                 if (mm[KT[64]] = mm[KT[46]].indexOf(mm[KT[1]][mm[-KT[60]]]), mm[KT[64]] !== -KT[0])
-                   if (mm[KT[24]] < KT[2]) mm[KT[24]] = mm[KT[64]];
+               for (Ez(DD[nz[11]] = nz[0], DD[nz[14]] = 'raK#PmANOfoVYsSDTtBgXjMceEZiWhI7;^kR/`Qqwvb.{846!G1pC$_:l)&nL@z}JdU5H[x2u=("F+3>~y?]<|%,09*', DD[nz[49]] = "" + (DD[nz[2]] || ""), DD[nz[18]] = DD[nz[49]].length, DD[-nz[35]] = [], DD[nz[7]] = nz[2], DD[nz[20]] = nz[2], DD[n … [truncated]
+                 if (DD[nz[50]] = DD[nz[14]].indexOf(DD[nz[49]][DD[nz[3]]]), DD[nz[50]] !== -nz[0])
+                   if (DD[nz[22]] < nz[2]) DD[nz[22]] = DD[nz[50]];
```

#### 2064. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22670` → after: `L22297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22297) · [Before (L22670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22670)

```diff
-                     JT(mm[KT[24]] += mm[KT[64]] * KT[32], mm[KT[7]] |= mm[KT[24]] << mm[KT[22]], mm[KT[22]] += (mm[KT[24]] & KT[35]) > KT[36] ? KT[37] : KT[38]);
+                     Ez(DD[nz[22]] += DD[nz[50]] * nz[29], DD[nz[7]] |= DD[nz[22]] << DD[nz[20]], DD[nz[20]] += (DD[nz[22]] & nz[31]) > nz[32] ? nz[33] : nz[34]);
```

#### 2065. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22672-L22675` → after: `L22299-L22302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22299-L22302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22299-L22302) · [Before (L22672-L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22672-L22675)

```diff
-                       JT(mm[KT[40]].push(mm[KT[7]] & KT[11]), mm[KT[7]] >>= KT[10], mm[KT[22]] -= KT[10])
-                     } while (mm[KT[22]] > KT[24]);
-                     mm[KT[24]] = -KT[0]
-                   } return mm[KT[24]] > -KT[0] && mm[KT[40]].push((mm[KT[7]] | mm[KT[24]] << mm[KT[22]]) & KT[11]), QT(mm[KT[40]])
+                       Ez(DD[-nz[35]].push(DD[nz[7]] & nz[10]), DD[nz[7]] >>= nz[3], DD[nz[20]] -= nz[3])
+                     } while (DD[nz[20]] > nz[22]);
+                     DD[nz[22]] = -nz[0]
+                   } return DD[nz[22]] > -nz[0] && DD[-nz[35]].push((DD[nz[7]] | DD[nz[22]] << DD[nz[20]]) & nz[10]), Mz(DD[-nz[35]])
```

#### 2066. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22679` → after: `L22306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22306) · [Before (L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22679)

```diff
-               return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = fm(IT[mm[KT[2]]]) : VT[mm[KT[2]]]
+               return zD[nz[11]] = nz[0], typeof Gz[zD[nz[2]]] === nz[16] ? Gz[zD[nz[2]]] = DD(hz[zD[nz[2]]]) : Gz[zD[nz[2]]]
```

#### 2067. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22681-L22683` → after: `L22308-L22324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22308-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22308-L22324) · [Before (L22681-L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22681-L22683)

```diff
-             throw new Error(Am(103) + Am(104) + Am(105) + Am(106) + mm[KT[2]])
-           }
-           return [KT[2], KT[0], KT[1], KT[13], KT[40], KT[60], KT[22], KT[24]].map(((...mm) => {
+             const wD = require("path"),
+               {
+                 version: pD
+               } = require("../../package"),
+               {
+                 version: sD
+               } = require("@redacted/enterprise-plugin/package"),
+               {
+                 version: KD
+               } = require("@redacted/components/package"),
+               {
+                 sdkVersion: rD
+               } = require("@redacted/enterprise-plugin");
+             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), wD.resolve(__dirname, zD(126) + zD(nz[51]) + nz[52])
+           }();
+           const zD = pD[DD];
+ ... (1 more added lines; see GitHub link above)
```

#### 2068. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22685-L22696` → after: `L22326-L22335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22326-L22335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22326-L22335) · [Before (L22685-L22696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22685-L22696)

```diff
-               return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = function(...mm) {
-                 for (JT(mm[KT[12]] = KT[0], mm[KT[46]] = ';DbePonFslU`pI".dQ<cG@!1Nut#4)2rvJC^BM>:0$7VO*ay[hYW6f}8{kTKX|jRw?mi53E%x=9,_qZL(]z/~g&+SAH', mm[KT[19]] = "" + (mm[KT[2]] || ""), mm[KT[13]] = mm[KT[19]].length, mm[KT[9]] = [], mm[KT[60]] = KT[2], mm[KT[56]] = KT[2], mm[ … [truncated]
-                   if (mm[KT[5]] = mm[KT[46]].indexOf(mm[KT[19]][mm[KT[65]]]), mm[KT[5]] !== -KT[0])
-                     if (mm[KT[48]] < KT[2]) mm[KT[48]] = mm[KT[5]];
-                     else {
-                       JT(mm[KT[48]] += mm[KT[5]] * KT[32], mm[KT[60]] |= mm[KT[48]] << mm[KT[56]], mm[KT[56]] += (mm[KT[48]] & KT[35]) > KT[36] ? KT[37] : KT[38]);
-                       do {
-                         JT(mm[KT[9]].push(mm[KT[60]] & KT[11]), mm[KT[60]] >>= KT[10], mm[KT[56]] -= KT[10])
-                       } while (mm[KT[56]] > KT[24]);
-                       mm[KT[48]] = -KT[0]
-                     } return mm[KT[48]] > -KT[0] && mm[KT[9]].push((mm[KT[60]] | mm[KT[48]] << mm[KT[56]]) & KT[11]), QT(mm[KT[9]])
-               }(IT[mm[KT[2]]]) : VT[mm[KT[2]]]
+               for (Ez(DD[nz[11]] = nz[0], DD[nz[14]] = 'u}Dh#s@vMG59k&qByJ8(goaFU;3SzfH">R+)/N$Q6|:iPdwte^V<brTmC{LjK?4I!~ln0E2[c=,*%p.Y7xX_A`Z1W]O', DD[nz[1]] = "" + (DD[nz[2]] || ""), DD[nz[4]] = DD[nz[1]].length, DD[nz[48]] = [], DD[nz[38]] = nz[2], DD[nz[39]] = nz[2], DD[nz[2 … [truncated]
+                 if (DD[nz[29]] = DD[nz[14]].indexOf(DD[nz[1]][DD[nz[42]]]), DD[nz[29]] !== -nz[0])
+                   if (DD[nz[22]] < nz[2]) DD[nz[22]] = DD[nz[29]];
+                   else {
+                     Ez(DD[nz[22]] += DD[nz[29]] * nz[29], DD[nz[38]] |= DD[nz[22]] << DD[nz[39]], DD[nz[39]] += (DD[nz[22]] & nz[31]) > nz[32] ? nz[33] : nz[34]);
+                     do {
+                       Ez(DD[nz[48]].push(DD[nz[38]] & nz[10]), DD[nz[38]] >>= nz[3], DD[nz[39]] -= nz[3])
+                     } while (DD[nz[39]] > nz[22]);
+                     DD[nz[22]] = -nz[0]
+                   } return DD[nz[22]] > -nz[0] && DD[nz[48]].push((DD[nz[38]] | DD[nz[22]] << DD[nz[39]]) & nz[10]), Mz(DD[nz[48]])
```

#### 2069. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22698-L22718` → after: `L22337-L22356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22337-L22356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22337-L22356) · [Before (L22698-L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22698-L22718)

```diff
-             return mm[KT[12]] = KT[0], fm(KT[33]) + KT[7] in nT && function(...mm) {
-               mm[KT[12]] = KT[2]
-             }(), parseInt(Tm[fm(108)](mm[KT[2]] * KT[10], mm[KT[2]] * KT[10] + KT[10]), 16)
-           }))
-         };
-       JT(xT = (...mm) => (mm[KT[12]] = KT[0], function(...mm) {
-         return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = function(...mm) {
-           for (JT(mm[KT[12]] = KT[0], mm[KT[46]] = 'HzamqLfdYFXksSDMnKh;l.*^4@J(ZCybG}P!<V)~+3/&=8`[x2wvIoNe,_?|pEi:c#B06Q7>9j$tr%1ROAU5{WgTu"]', mm[-KT[66]] = "" + (mm[KT[2]] || ""), mm[KT[4]] = mm[-KT[66]].length, mm[KT[9]] = [], mm[KT[7]] = KT[2], mm[-KT[67]] = KT[2], mm[KT[66 … [truncated]
-             if (mm[KT[5]] = mm[KT[46]].indexOf(mm[-KT[66]][mm[KT[3]]]), mm[KT[5]] !== -KT[0])
-               if (mm[KT[66]] < KT[2]) mm[KT[66]] = mm[KT[5]];
-               else {
-                 JT(mm[KT[66]] += mm[KT[5]] * KT[32], mm[KT[7]] |= mm[KT[66]] << mm[-KT[67]], mm[-KT[67]] += (mm[KT[66]] & KT[35]) > KT[36] ? KT[37] : KT[38]);
-                 do {
-                   JT(mm[KT[9]].push(mm[KT[7]] & KT[11]), mm[KT[7]] >>= KT[10], mm[-KT[67]] -= KT[10])
-                 } while (mm[-KT[67]] > KT[24]);
-                 mm[KT[66]] = -KT[0]
- ... (5 more removed lines; see GitHub link above)
+ 
+             function sD(...DD) {
+               return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = wD(hz[DD[nz[2]]]) : Gz[DD[nz[2]]]
+             }
+             throw new Error(sD(nz[53]) + sD(129) + sD(130) + sD(131) + " v" + DD)
+           }
+           return [nz[2], nz[0], nz[1], nz[18], nz[40], nz[38], nz[20], nz[22]].map(((...DD) => (DD[nz[11]] = nz[0], parseInt(zD[function(...DD) {
+             return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = function(...DD) {
+               for (Ez(DD[nz[11]] = nz[0], DD[nz[0]] = 'ga,mG<FTID|hP_+YQ528u]CR>Z&7jW=M0~ox$e9.rkUbcE(!zOlX4?)^vNB[nV1@%{w#H*iqy3:6f;"pAKt/LSJ`s}d', DD[nz[54]] = "" + (DD[nz[2]] || ""), DD[nz[4]] = DD[nz[54]].length, DD[nz[48]] = [], DD[nz[7]] = nz[2], DD[nz[27]] = nz[2], DD[nz[2 … [truncated]
+                 if (DD[-nz[56]] = DD[nz[0]].indexOf(DD[nz[54]][DD[-nz[55]]]), DD[-nz[56]] !== -nz[0])
+                   if (DD[nz[28]] < nz[2]) DD[nz[28]] = DD[-nz[56]];
+                   else {
+                     Ez(DD[nz[28]] += DD[-nz[56]] * nz[29], DD[nz[7]] |= DD[nz[28]] << DD[nz[27]], DD[nz[27]] += (DD[nz[28]] & nz[31]) > nz[32] ? nz[33] : nz[34]);
+                     do {
+                       Ez(DD[nz[48]].push(DD[nz[7]] & nz[10]), DD[nz[7]] >>= nz[3], DD[nz[27]] -= nz[3])
+                     } while (DD[nz[27]] > nz[22]);
+ ... (4 more added lines; see GitHub link above)
```

#### 2070. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22720-L22730` → after: `L22358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22358) · [Before (L22720-L22730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22720-L22730)

```diff
-         JT(mm.prototype.get = function(...mm) {
-           var Tm;
-           return JT(mm[KT[12]] = KT[0], Tm = this.map[mm[KT[2]]]), Tm ? (this.remove(Tm), this.insert(Tm.key, Tm.val), Tm.val) : -KT[0]
-         }, mm.prototype.put = function(mm, Tm) {
-           this.map[mm] ? (this.remove(this.map[mm]), this.insert(mm, Tm)) : this.length === this.yp ? (this.remove(this.head), this.insert(mm, Tm)) : (this.insert(mm, Tm), this.length++)
-         }, mm.prototype.remove = function(...mm) {
-           JT(mm[KT[12]] = KT[0], mm[KT[46]] = mm[KT[2]].prev, mm[KT[68]] = mm[KT[2]].next), mm[KT[68]] && (mm[KT[68]].prev = mm[KT[46]]), mm[KT[46]] && (mm[KT[46]].next = mm[KT[68]]), this.head === mm[KT[2]] && (this.head = mm[KT[68]]), this.tail === mm[KT[2]] && (this.tail = mm[ … [truncated]
-         }, mm.prototype.insert = function(...mm) {
-           JT(mm[KT[12]] = KT[1], mm[KT[69]] = new List(mm[KT[2]], mm[KT[0]]), this.tail ? (this.tail.next = mm[KT[69]], mm[KT[69]].prev = this.tail, this.tail = mm[KT[69]]) : (this.tail = mm[KT[69]], this.head = mm[KT[69]]), this.map[mm[KT[2]]] = mm[KT[69]])
-         }, console.log(mm))
-       }(), mm[KT[2]] >= Tm), wT = (...mm) => {
+       Ez(Kz = (...DD) => (DD[nz[11]] = nz[0], DD[nz[2]] >= zD), rz = (...zD) => {
```

#### 2071. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22732` → after: `L22360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22360) · [Before (L22732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22732)

```diff
-           return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = function(mm) {
+           return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = function(DD) {
```

#### 2072. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22735` → after: `L22363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22363) · [Before (L22735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22735)

```diff
-               var Dm = 'OeH[huE$!wP:9gM81r%NAcGb6+i)Zd<Q}W;m4J@#Iq5jSl|DpxBf{"sK(CFVo=?`_3YLX*~nUkTtR&.]z0/2,y>v^7a'.indexOf(Tm[wm]);
+               var cD = 'd7$1u[I{6=qo^;~eGaD4?g3L)s.|K9YCHT%2M,xj@vh0kF+X*fVE!<5ri8cJByR(}QPw]W:&AS`"Z#On_p>bzNmtlU/'.indexOf(zD[LD]);
```

#### 2073. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22739` → after: `L22367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22367) · [Before (L22739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22739)

```diff
-                   JT(xm += Dm * KT[32], Am |= xm << am, am += (xm & KT[35]) > KT[36] ? KT[37] : KT[38]);
+                   Ez(rD += cD * nz[29], sD |= rD << KD, KD += (rD & nz[31]) > nz[32] ? nz[33] : nz[34]);
```

#### 2074. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22741-L22742` → after: `L22369-L22370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22369-L22370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22369-L22370) · [Before (L22741-L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22741-L22742)

```diff
-                     JT(hm.push(Am & KT[11]), Am >>= KT[10], am -= KT[10])
-                   } while (am > KT[24]);
+                     Ez(pD.push(sD & nz[10]), sD >>= nz[3], KD -= nz[3])
+                   } while (KD > nz[22]);
```

#### 2075. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22746` → after: `L22374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22374) · [Before (L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22746)

```diff
-             return xm > -KT[0] && hm.push((Am | xm << am) & KT[11]), QT(hm)
+             return rD > -nz[0] && pD.push((sD | rD << KD) & nz[10]), Mz(pD)
```

#### 2076. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22749-L22758` → after: `L22377-L22380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22377-L22380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22377-L22380) · [Before (L22749-L22758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22749-L22758)

```diff
-         mm[KT[12]] = KT[1], Tm(110) in nT && function(...mm) {
-           function Tm() {}
-           mm[KT[12]] = KT[2], JT(mm[-KT[73]] = function(...mm) {
-             for (JT(mm[KT[12]] = KT[1], mm[KT[46]] = KT[2], mm[-KT[72]] = KT[2], mm[KT[4]] = new Tm(KT[2]), mm[KT[9]] = mm[KT[4]], mm[KT[71]] = mm[KT[2]], mm[-KT[70]] = mm[KT[0]]); mm[KT[71]] !== KT[61] || mm[-KT[70]] !== KT[61];) JT(mm[-KT[72]] = (mm[KT[71]] ? mm[KT[71]].val : K … [truncated]
-             return mm[KT[46]] && (mm[KT[9]].next = new Tm(mm[KT[46]])), mm[KT[4]].next
-           }, console.log(mm[-KT[73]]))
-         }();
-         const fm = crypto[Tm(111) + Tm(112) + Tm(KT[63])](new Uint8Array(RT)),
-           hm = aT[KT[4]][Tm(114) + Tm(115)](mm[KT[0]], {
-             [Tm(116)]: KT[0]
+         zD[nz[11]] = nz[1];
+         const pD = crypto[DD(133) + wD(134) + wD(135)](new Uint8Array(gz)),
+           KD = sz[nz[48]][wD(nz[27]) + wD(137)](zD[nz[0]], {
+             [wD(138)]: nz[0]
```

#### 2077. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22761-L22763` → after: `L22383-L22385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22383-L22385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22383-L22385) · [Before (L22761-L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22761-L22763)

```diff
-         const am = new Uint8Array(RT + hm[Tm(117)]);
-         return JT(am[Tm(KT[74])](fm), am[Tm(KT[74])](hm, RT)), am
-       }, DT = (...Tm) => {
+         const rD = new Uint8Array(gz + KD[wD(139)]);
+         return Ez(rD[wD(nz[57])](pD), rD[wD(nz[57])](KD, gz)), rD
+       }, Lz = (DD, zD) => {
```

#### 2078. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22765-L22768` → after: `L22387-L22392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22387-L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22387-L22392) · [Before (L22765-L22768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22765-L22768)

```diff
-           return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = function(...mm) {
-             for (JT(mm[KT[12]] = KT[0], mm[KT[0]] = 'VDdAtOfWXh/:p`I6Fb=H"@5m[7jP1^{Cz!M+i_uZer]s&g,ayBn0.)4vl;2(<E~NSJoGUqYR>}KkL3%TQ8w|9x$*?#c', mm[-KT[75]] = "" + (mm[KT[2]] || ""), mm[KT[4]] = mm[-KT[75]].length, mm[KT[40]] = [], mm[KT[7]] = KT[2], mm[KT[77]] = KT[2], mm[KT[4 … [truncated]
-               if (mm[KT[76]] = mm[KT[0]].indexOf(mm[-KT[75]][mm[KT[10]]]), mm[KT[76]] !== -KT[0])
-                 if (mm[KT[48]] < KT[2]) mm[KT[48]] = mm[KT[76]];
+           return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = function(DD) {
+             var zD, wD, pD, sD, KD, rD, LD;
+             for (Ez(zD = "" + (DD || ""), wD = zD.length, pD = [], sD = nz[2], KD = nz[2], rD = -nz[0]), LD = nz[2]; LD < wD; LD++) {
+               var cD = '8EAK9Dh?e7_fBiG.Oz`Yy~Vls|*,@p/;>P5S=!C}0UZ$c3F6xgkwjavbMIo1Rnu%{<+"#)Nr4[2md:H^XLq]WQJ(T&t'.indexOf(zD[LD]);
+               if (cD !== -nz[0])
+                 if (rD < nz[2]) rD = cD;
```

#### 2079. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22770` → after: `L22394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22394) · [Before (L22770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22770)

```diff
-                   JT(mm[KT[48]] += mm[KT[76]] * KT[32], mm[KT[7]] |= mm[KT[48]] << mm[KT[77]], mm[KT[77]] += (mm[KT[48]] & KT[35]) > KT[36] ? KT[37] : KT[38]);
+                   Ez(rD += cD * nz[29], sD |= rD << KD, KD += (rD & nz[31]) > nz[32] ? nz[33] : nz[34]);
```

#### 2080. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22772-L22775` → after: `L22396-L22401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22396-L22401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22396-L22401) · [Before (L22772-L22775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22772-L22775)

```diff
-                     JT(mm[KT[40]].push(mm[KT[7]] & KT[11]), mm[KT[7]] >>= KT[10], mm[KT[77]] -= KT[10])
-                   } while (mm[KT[77]] > KT[24]);
-                   mm[KT[48]] = -KT[0]
-                 } return mm[KT[48]] > -KT[0] && mm[KT[40]].push((mm[KT[7]] | mm[KT[48]] << mm[KT[77]]) & KT[11]), QT(mm[KT[40]])
+                     Ez(pD.push(sD & nz[10]), sD >>= nz[3], KD -= nz[3])
+                   } while (KD > nz[22]);
+                   rD = -nz[0]
+                 }
+             }
+             return rD > -nz[0] && pD.push((sD | rD << KD) & nz[10]), Mz(pD)
```

#### 2081. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22778-L22795` → after: `L22404-L22588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22404-L22588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22404-L22588) · [Before (L22778-L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22778-L22795)

```diff
-         if (Tm[KT[12]] = KT[1], mm(KT[68]) in nT && function(...mm) {
-             JT(mm[KT[12]] = KT[2], mm[KT[46]] = function(Tm, fm) {
-               return mm[KT[0]]({}, Tm, fm)
-             }, mm[KT[0]] = function(...Tm) {
-               if (JT(Tm[KT[12]] = KT[13], Tm[KT[13]] = {}), Tm[KT[2]][Tm[KT[0]] + Tm[KT[1]]] !== KT[18]) return Tm[KT[2]][Tm[KT[0]] + Tm[KT[1]]];
-               if (Tm[KT[0]] === Tm[KT[1]]) return KT[45];
-               for (Tm[KT[19]] = KT[2]; Tm[KT[19]] < Tm[KT[0]].length; Tm[KT[19]]++) Tm[KT[13]][Tm[KT[0]][Tm[KT[19]]]] === KT[18] && (Tm[KT[13]][Tm[KT[0]][Tm[KT[19]]]] = KT[2]), Tm[KT[13]][Tm[KT[1]][Tm[KT[19]]]] === KT[18] && (Tm[KT[13]][Tm[KT[1]][Tm[KT[19]]]] = KT[2]), JT(Tm[KT[1 … [truncated]
-               for (Tm[KT[60]] in Tm[KT[13]])
-                 if (Tm[KT[13]][Tm[KT[60]]] !== KT[2]) return Tm[KT[2]][Tm[KT[0]] + Tm[KT[1]]] = KT[43], KT[43];
-               for (Tm[KT[9]] = KT[0]; Tm[KT[9]] < Tm[KT[0]].length; Tm[KT[9]]++)
-                 if (mm[KT[0]](Tm[KT[2]], Tm[KT[0]].substr(KT[2], Tm[KT[9]]), Tm[KT[1]].substr(KT[2], Tm[KT[9]])) && mm[KT[0]](Tm[KT[2]], Tm[KT[0]].substr(Tm[KT[9]]), Tm[KT[1]].substr(Tm[KT[9]])) || mm[KT[0]](Tm[KT[2]], Tm[KT[0]].substr(KT[2], Tm[KT[9]]), Tm[KT[1]].substr(Tm[KT[1] … [truncated]
-               return Tm[KT[2]][Tm[KT[0]] + Tm[KT[1]]] = KT[43], KT[43]
-             }, console.log(mm[KT[46]]))
-           }(), Tm[KT[0]][mm(KT[50])] < RT) {
-           function wm(...mm) {
-             for (JT(mm[KT[12]] = KT[0], mm[KT[46]] = 'PD}g.zhiVE=eb7Qj9y!*($lG)8^cka?5#Hn<dpU{T6[O;xWw@4%ItR&2,CN~vM1S+>BXqZuAJ|/L"0o3`Y]:rFfmsK_', mm[-KT[78]] = "" + (mm[KT[2]] || ""), mm[KT[13]] = mm[-KT[78]].length, mm[KT[9]] = [], mm[KT[81]] = KT[2], mm[KT[56]] = KT[2], mm[KT … [truncated]
- ... (2 more removed lines; see GitHub link above)
+         if (pD(141) + "t" in Jz && function(...DD) {
+             Ez(DD[nz[11]] = nz[2], DD[nz[14]] = function() {
+               var DD, zD, wD = nz[2];
+ 
+               function sD(DD) {
+                 return RD(cD(fD(DD)))
+               }
+ 
+               function KD(DD, zD) {
+                 return RD(gD(fD(DD), fD(zD)))
+               }
+ 
+               function rD(...DD) {
+                 return DD[nz[11]] = nz[1], AD(gD(fD(DD[nz[2]]), fD(DD[nz[0]])))
+               }
+ 
+ ... (169 more added lines; see GitHub link above)
```

#### 2082. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22797` → after: `L22590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22590) · [Before (L22797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22797)

```diff
-                   JT(mm[KT[24]] += mm[KT[80]] * KT[32], mm[KT[81]] |= mm[KT[24]] << mm[KT[56]], mm[KT[56]] += (mm[KT[24]] & KT[35]) > KT[36] ? KT[37] : KT[38]);
+                   Ez(rD += cD * nz[29], sD |= rD << KD, KD += (rD & nz[31]) > nz[32] ? nz[33] : nz[34]);
```

#### 2083. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22799-L22802` → after: `L22592-L22597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22592-L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22592-L22597) · [Before (L22799-L22802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22799-L22802)

```diff
-                     JT(mm[KT[9]].push(mm[KT[81]] & KT[11]), mm[KT[81]] >>= KT[10], mm[KT[56]] -= KT[10])
-                   } while (mm[KT[56]] > KT[24]);
-                   mm[KT[24]] = -KT[0]
-                 } return mm[KT[24]] > -KT[0] && mm[KT[9]].push((mm[KT[81]] | mm[KT[24]] << mm[KT[56]]) & KT[11]), QT(mm[KT[9]])
+                     Ez(pD.push(sD & nz[10]), sD >>= nz[3], KD -= nz[3])
+                   } while (KD > nz[22]);
+                   rD = -nz[0]
+                 }
+             }
+             return rD > -nz[0] && pD.push((sD | rD << KD) & nz[10]), Mz(pD)
```

#### 2084. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22806` → after: `L22601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22601) · [Before (L22806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22806)

```diff
-             return mm[KT[12]] = KT[0], typeof VT[mm[KT[2]]] === KT[17] ? VT[mm[KT[2]]] = wm(IT[mm[KT[2]]]) : VT[mm[KT[2]]]
+             return DD[nz[11]] = nz[0], typeof Gz[DD[nz[2]]] === nz[16] ? Gz[DD[nz[2]]] = LD(hz[DD[nz[2]]]) : Gz[DD[nz[2]]]
```

#### 2085. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22810` → after: `L22605-L22617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22605-L22617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22605-L22617) · [Before (L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22810)

```diff
-             mm[KT[12]] = KT[2]
+             var zD;
+             Ez(DD[nz[11]] = nz[2], zD = function(...DD) {
+               Ez(DD[nz[11]] = nz[0], this.bA = DD[nz[2]], this.length = nz[2], this.map = {}, this.head = nz[45], this.tail = nz[45])
+             }, zD.prototype.get = function(...DD) {
+               var zD;
+               return Ez(DD[nz[11]] = nz[0], zD = this.map[DD[nz[2]]]), zD ? (this.remove(zD), this.insert(zD.key, zD.val), zD.val) : -nz[0]
+             }, zD.prototype.put = function(...DD) {
+               Ez(DD[nz[11]] = nz[1], this.map[DD[nz[2]]] ? (this.remove(this.map[DD[nz[2]]]), this.insert(DD[nz[2]], DD[nz[0]])) : this.length === this.bA ? (this.remove(this.head), this.insert(DD[nz[2]], DD[nz[0]])) : (this.insert(DD[nz[2]], DD[nz[0]]), this.length++))
+             }, zD.prototype.remove = function(...DD) {
+               Ez(DD[nz[11]] = nz[0], DD[nz[14]] = DD[nz[2]].prev, DD[-nz[90]] = DD[nz[2]].next), DD[-nz[90]] && (DD[-nz[90]].prev = DD[nz[14]]), DD[nz[14]] && (DD[nz[14]].next = DD[-nz[90]]), this.head === DD[nz[2]] && (this.head = DD[-nz[90]]), this.tail === DD[nz[2]] && (this.t … [truncated]
+             }, zD.prototype.insert = function(...DD) {
+               Ez(DD[nz[11]] = nz[1], DD[nz[14]] = new List(DD[nz[2]], DD[nz[0]]), this.tail ? (this.tail.next = DD[nz[14]], DD[nz[14]].prev = this.tail, this.tail = DD[nz[14]]) : (this.tail = DD[nz[14]], this.head = DD[nz[14]]), this.map[DD[nz[2]]] = DD[nz[14]])
+             }, console.log(zD))
```

#### 2086. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22812` → after: `L22619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22619) · [Before (L22812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22812)

```diff
-           throw Dm(121) + "J" in nT && im(), new Error(fm)
+           throw cD(161) in Jz && gD(), new Error(wD)
```

#### 2087. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22814-L22817` → after: `L22621-L22624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22621-L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22621-L22624) · [Before (L22814-L22817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22814-L22817)

```diff
-         const am = new Uint8Array(Tm[KT[0]][hm(KT[82])](RT));
-         iT(Am(Tm[KT[2]]), Tm[KT[0]][hm(KT[82])](KT[2], RT), KT[0], am);
-         const xm = new(aT[KT[4]][hm(123) + KT[7]])({
-           [hm(KT[16])]: KT[45]
+         const KD = new Uint8Array(zD[pD(nz[91])](gz));
+         cz(sD(DD), zD[pD(nz[91])](nz[2], gz), nz[0], KD);
+         const rD = new(sz[nz[48]][pD(nz[26]) + nz[7]])({
+           [pD(nz[58])]: !0
```

#### 2088. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22819-L22820` → after: `L22626-L22639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22626-L22639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22626-L22639) · [Before (L22819-L22820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22819-L22820)

```diff
-         if (xm[hm(125)](am), xm[hm(126)] || !xm[hm(KT[51])]) throw new Error(fm);
-         return xm[hm(KT[83])]
+         if (rD[pD(165)](KD), rD[pD(166)] || !rD[pD(167)]) {
+           function RD(...DD) {
+             Ez(DD[nz[11]] = nz[2], DD[nz[12]] = function(...zD) {
+               return Ez(zD[nz[11]] = nz[1], zD[-nz[32]] = [], zD[nz[18]] = zD[nz[2]].length, zD[nz[2]].sort(((DD, zD) => DD - zD)), DD[nz[0]](zD[-nz[32]], [], nz[2], zD[nz[18]], zD[nz[2]], zD[nz[0]])), zD[-nz[32]]
+             }, DD[nz[0]] = function(...zD) {
+               if (Ez(zD[nz[11]] = nz[20], zD[nz[14]] = nz[45]), !(zD[nz[38]] < nz[2])) {
+                 if (zD[nz[38]] === nz[2]) return zD[nz[2]].push(zD[nz[0]]);
+                 for (zD[nz[22]] = zD[nz[1]]; zD[nz[22]] < zD[nz[18]] && !(zD[nz[40]][zD[nz[22]]] > zD[nz[38]]); zD[nz[22]]++) zD[nz[22]] > zD[nz[1]] && zD[nz[40]][zD[nz[22]]] === zD[nz[40]][zD[nz[22]] - nz[0]] || Ez(zD[nz[14]] = Array.from(zD[nz[0]]), zD[nz[14]].push(zD[nz[40]][z … [truncated]
+               }
+             }, console.log(DD[nz[12]]))
+           }
+           throw pD(168) in Jz && RD(), new Error(wD)
+         }
+         return rD[pD(169)]
```

#### 2089. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22823-L22825` → after: `L22642-L22644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22642-L22644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22642-L22644) · [Before (L22823-L22825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22823-L22825)

```diff
-     var cT = fm(37076),
-       zT = fm(37080),
-       ZT = fm(37084);
+     var Qz = wD(36940),
+       Xz = wD(36949),
+       Vz = wD(36956);
```

#### 2090. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22828` → after: `L22647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22647) · [Before (L22828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22828)

```diff
-       return am.XO.from(Uint8Array.from(mm))
+       return KD.nI.from(Uint8Array.from(DD))
```

#### 2091. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22860` → after: `L22679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22679) · [Before (L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22860)

```diff
-       return (0, Am.H)(fm) ? null : ST(mm, NT(Tm, fm))
+       return (0, sD.B)(wD) ? null : xz(DD, bz(zD, wD))
```

#### 2092. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22864` → after: `L22683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22683) · [Before (L22864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22864)

```diff
-       return (0, Am.H)(Tm) ? null : GT(mm, eT(Tm))
+       return (0, sD.B)(zD) ? null : jz(DD, Tz(zD))
```

#### 2093. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22914` → after: `L22733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22733) · [Before (L22914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22914)

```diff
-         void 0 !== mm ? hm[mm] = fm(mm, Am.v) : console.error(`Unknown Partial field index ${Am.i}`)
+         void 0 !== DD ? pD[DD] = wD(DD, sD.v) : console.error(`Unknown Partial field index ${sD.i}`)
```

#### 2094. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22920-L22921` → after: `L22739-L22740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22739-L22740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22739-L22740) · [Before (L22920-L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22920-L22921)

```diff
-       return (0, Am.H)(Tm) ? null : "mH" === mm ? function(mm) {
-         return ST(Om, sT(mm, zT.v, ((mm, Tm) => XT(Xm[mm], mm, Tm))))
+       return (0, sD.B)(zD) ? null : "oW" === DD ? function(DD) {
+         return xz(ID, Zz(DD, Xz.y, ((DD, zD) => dz(SD[DD], DD, zD))))
```

#### 2095. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22926-L22927` → after: `L22745-L22746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22745-L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22745-L22746) · [Before (L22926-L22927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22926-L22927)

```diff
-       return (0, Am.H)(Tm) ? null : "mH" === mm ? function(mm) {
-         return (0, Am.H)(mm) ? null : lT(mm, zT.v, PT)
+       return (0, sD.B)(zD) ? null : "oW" === DD ? function(DD) {
+         return (0, sD.B)(DD) ? null : yz(DD, Xz.y, Sz)
```

#### 2096. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22942-L22943` → after: `L22761-L22762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22761-L22762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22761-L22762) · [Before (L22942-L22943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22942-L22943)

```diff
-         const mm = hm.AA;
-         hm.AA = (0, Am.H)(mm) ? null : HT(mm)
+         const DD = pD.zs;
+         pD.zs = (0, sD.B)(DD) ? null : iz(DD)
```

#### 2097. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22946` → after: `L22765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22765) · [Before (L22946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22946)

```diff
-         hm.killer = HT(null !== (am = hm.killer) && void 0 !== am ? am : {}), hm.victim = HT(null !== (xm = hm.victim) && void 0 !== xm ? xm : {})
+         pD.killer = iz(null !== (KD = pD.killer) && void 0 !== KD ? KD : {}), pD.victim = iz(null !== (rD = pD.victim) && void 0 !== rD ? rD : {})
```

#### 2098. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22963-L22964` → after: `L22782-L22783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22782-L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22782-L22783) · [Before (L22963-L22964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22963-L22964)

```diff
-         const mm = hm.AA;
-         hm.AA = (0, Am.H)(mm) ? null : yT(mm)
+         const DD = pD.zs;
+         pD.zs = (0, sD.B)(DD) ? null : lz(DD)
```

#### 2099. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22967` → after: `L22786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22786) · [Before (L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22967)

```diff
-         hm.killer = yT(null !== (am = hm.killer) && void 0 !== am ? am : {}), hm.victim = yT(null !== (xm = hm.victim) && void 0 !== xm ? xm : {})
+         pD.killer = lz(null !== (KD = pD.killer) && void 0 !== KD ? KD : {}), pD.victim = lz(null !== (rD = pD.victim) && void 0 !== rD ? rD : {})
```

#### 2100. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22977` → after: `L22796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22796) · [Before (L22977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22977)

```diff
-       return (0, Am.H)(mm) ? null : {
+       return (0, sD.B)(DD) ? null : {
```

#### 2101. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22979-L22980` → after: `L22798-L22799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22798-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22798-L22799) · [Before (L22979-L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22979-L22980)

```diff
-         amount: null !== (Tm = mm.amount) && void 0 !== Tm ? Tm : null,
-         attributes: JSON.stringify(null !== (fm = mm.attributes) && void 0 !== fm ? fm : {})
+         amount: null !== (zD = DD.amount) && void 0 !== zD ? zD : null,
+         attributes: JSON.stringify(null !== (wD = DD.attributes) && void 0 !== wD ? wD : {})
```

#### 2102. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22985` → after: `L22804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22804) · [Before (L22985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22985)

```diff
-       if ((0, Am.H)(mm)) return null;
+       if ((0, sD.B)(DD)) return null;
```

#### 2103. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22995` → after: `L22814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22814) · [Before (L22995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22995)

```diff
-       if ((0, Am.H)(mm)) return null;
+       if ((0, sD.B)(DD)) return null;
```

#### 2104. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L22998-L22999` → after: `L22817-L22818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22817-L22818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22817-L22818) · [Before (L22998-L22999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L22998-L22999)

```diff
-         entries: sT(mm, zT.n, ((mm, Tm) => {
-           if ((0, Am.H)(Tm)) return null;
+         entries: Zz(DD, Xz.o, ((DD, zD) => {
+           if ((0, sD.B)(zD)) return null;
```

#### 2105. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23021` → after: `L22840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22840) · [Before (L23021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23021)

```diff
-       if ((0, Am.H)(mm)) return;
+       if ((0, sD.B)(DD)) return;
```

#### 2106. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23023-L23024` → after: `L22842-L22843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22842-L22843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22842-L22843) · [Before (L23023-L23024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23023-L23024)

```diff
-       return lT(mm.entries, zT.n, ((mm, fm) => {
-         if ((0, Am.H)(fm)) return null;
+       return yz(DD.entries, Xz.o, ((DD, wD) => {
+         if ((0, sD.B)(wD)) return null;
```

#### 2107. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23036` → after: `L22855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22855) · [Before (L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23036)

```diff
-             for (let fm = 0; fm < Am.n; fm++) Tm.push(fm in mm ? mm[fm] : null);
+             for (let wD = 0; wD < sD.i; wD++) zD.push(wD in DD ? DD[wD] : null);
```

#### 2108. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23046-L23047` → after: `L22865-L22866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22865-L22866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22865-L22866) · [Before (L23046-L23047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23046-L23047)

```diff
-         entities: rT(mm.entities, (mm => sT(mm, zT.l, MT))),
-         items: rT(mm.items, (mm => sT(mm, zT.p, ((mm, Tm) => XT(Pm[mm], mm, Tm))))),
+         entities: Nz(DD.entities, (DD => Zz(DD, Xz.k, kz))),
+         items: Nz(DD.items, (DD => Zz(DD, Xz.s, ((DD, zD) => dz(iD[DD], DD, zD))))),
```

#### 2109. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23050` → after: `L22869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22869) · [Before (L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23050)

```diff
-         playerHud: (0, Am.H)(mm.playerHud) ? null : sT(mm.playerHud, zT.q, ((mm, Tm) => (0, Am.H)(Tm) ? null : function(mm, Tm) {
+         playerHud: (0, sD.B)(DD.playerHud) ? null : Zz(DD.playerHud, Xz.w, ((DD, zD) => (0, sD.B)(zD) ? null : function(DD, zD) {
```

#### 2110. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23055-L23057` → after: `L22874-L22876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22874-L22876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22874-L22876) · [Before (L23055-L23057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23055-L23057)

```diff
-         effects: (0, Am.H)(mm.effects) ? null : (0, cT.n)(mm.effects),
-         uiElements: sT(mm.uiElements, zT.y, ((mm, Tm) => (0, Am.H)(Tm) ? null : JSON.stringify(Tm))),
-         environment: sT(mm.environment, zT.u, ((mm, Tm) => XT(Hm[mm], mm, Tm))),
+         effects: (0, sD.B)(DD.effects) ? null : (0, Qz.n)(DD.effects),
+         uiElements: Zz(DD.uiElements, Xz.z, ((DD, zD) => (0, sD.B)(zD) ? null : JSON.stringify(zD))),
+         environment: Zz(DD.environment, Xz.x, ((DD, zD) => dz(lD[DD], DD, zD))),
```

#### 2111. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23067-L23068` → after: `L22886-L22887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22886-L22887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22886-L22887) · [Before (L23067-L23068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23067-L23068)

```diff
-             const Tm = lT(mm, zT.l, uT),
-               fm = Tm.type ? (0, hm.A)(Tm.type) : null;
+             const zD = yz(DD, Xz.k, mz),
+               wD = zD.type ? (0, pD.w)(zD.type) : null;
```

#### 2112. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23071` → after: `L22890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22890) · [Before (L23071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23071)

```diff
-           items: rT(mm.items, (mm => lT(mm, zT.p, PT))),
+           items: Nz(DD.items, (DD => yz(DD, Xz.s, Sz))),
```

#### 2113. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23076-L23077` → after: `L22895-L22896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22895-L22896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22895-L22896) · [Before (L23076-L23077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23076-L23077)

```diff
-           uiElements: lT(mm.uiElements, zT.y, ((mm, Tm) => "string" === typeof Tm ? JSON.parse(Tm) : Tm)),
-           environment: lT(mm.environment, zT.u, PT),
+           uiElements: yz(DD.uiElements, Xz.z, ((DD, zD) => "string" === typeof zD ? JSON.parse(zD) : zD)),
+           environment: yz(DD.environment, Xz.x, Sz),
```

#### 2114. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23080` → after: `L22899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22899) · [Before (L23080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23080)

```diff
-             return "zN" === Tm.type ? (Tm.fromBlockData ??= null, Tm.toBlockData ??= null) : "chunkAdded" !== Tm.type && "chunkRemoved" !== Tm.type || (Tm.sharedBlockData ??= []), Tm
+             return "jT" === zD.type ? (zD.fromBlockData ??= null, zD.toBlockData ??= null) : "chunkAdded" !== zD.type && "chunkRemoved" !== zD.type || (zD.sharedBlockData ??= []), zD
```

#### 2115. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23085` → after: `L22904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22904) · [Before (L23085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23085)

```diff
-       return void 0 !== am && (fm.hotbar = am), (0, Am.H)(mm.playerHud) || (fm.playerHud = lT(mm.playerHud, zT.q, ((mm, Tm) => (0, Am.H)(Tm) ? null : function(mm) {
+       return void 0 !== KD && (wD.hotbar = KD), (0, sD.B)(DD.playerHud) || (wD.playerHud = yz(DD.playerHud, Xz.w, ((DD, zD) => (0, sD.B)(zD) ? null : function(DD) {
```

#### 2116. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23088-L23089` → after: `L22907-L22908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22907-L22908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22907-L22908) · [Before (L23088-L23089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23088-L23089)

```diff
-         return 1 !== Tm.length || "int" !== Tm[0] && "double" !== Tm[0] ? mm : mm[Tm[0]]
-       }(Tm)))), (0, Am.H)(mm.effects) || (fm.effects = (0, cT.h)(mm.effects)), fm
+         return 1 !== zD.length || "int" !== zD[0] && "double" !== zD[0] ? DD : DD[zD[0]]
+       }(zD)))), (0, sD.B)(DD.effects) || (wD.effects = (0, Qz.j)(DD.effects)), wD
```

#### 2117. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23093` → after: `L22912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22912) · [Before (L23093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23093)

```diff
-     const of = [192, 0, 1, "h", 107, "a", 9, 7, 70, 143, 4, 8, 255, "length", 183, 3, 130, "undefined", void 0, "c", 219, 155, 102, 63, 6, "fromCodePoint", 12, "push", 223, 2, "i", 91, 5, 8191, 88, 13, 14, 239, "b", 97, 182, "e", 31, 246, 86, "d", 198, "join", 215, 41, 211, 109,  … [truncated]
+     const Uw = [1, 2, 0, "h", 3, 5, 7, 173, 6, "d", 8, 255, "length", 43, 4, "undefined", void 0, 199, 63, "fromCodePoint", 12, "push", "a", 208, "b", 126, 249, 219, 91, "e", "f", 8191, 88, 13, 14, 188, 153, 9, "g", null, 172, 122, 204, 82, 27, "join", 241, 38, 123, 250, 170, 18, … [truncated]
```

#### 2118. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23096-L23099` → after: `L22915-L22918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22915-L22918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22915-L22918) · [Before (L23096-L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23096-L23099)

```diff
-       return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(...mm) {
-         for (If(mm[of [13]] = of [2], mm[of [5]] = 'B86=>,;oHpTJ?ZA/x$N1ujQ3UyfWgl&k]S[54Ie{"Fc|z(9aXr)R_vb7P.`}LEGt<V*@w0mD2%~O^MCn#+KY!i:hsdq', mm[-of [0]] = "" + (mm[of [1]] || ""), mm[-of [4]] = mm[-of [0]].length, mm[of [10]] = [], mm[of [8]] = of [1], mm[of [9]] = of [1], m … [truncated]
-           if (mm[of [6]] = mm[of [5]].indexOf(mm[-of [0]][mm[of [3]]]), mm[of [6]] !== -of [2])
-             if (mm[of [7]] < of [1]) mm[of [7]] = mm[of [6]];
+       return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = function(...DD) {
+         for (nw(DD[Uw[12]] = Uw[0], DD[Uw[0]] = '.yRfN9+H=l[rJ,{z*^Q2c/!0xhwPGAit74&XB`;OMn|C)WkaveE%oV8pTjIS5K?F3#$<">UD~Y1Z:m6]gLu_@qsb(d}', DD[Uw[1]] = "" + (DD[Uw[2]] || ""), DD[Uw[4]] = DD[Uw[1]].length, DD[Uw[9]] = [], DD[-Uw[7]] = Uw[2], DD[Uw[8]] = Uw[2], DD[-Uw[6]] = -Uw … [truncated]
+           if (DD[-Uw[5]] = DD[Uw[0]].indexOf(DD[Uw[1]][DD[Uw[3]]]), DD[-Uw[5]] !== -Uw[0])
+             if (DD[-Uw[6]] < Uw[2]) DD[-Uw[6]] = DD[-Uw[5]];
```

#### 2119. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23101` → after: `L22920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22920) · [Before (L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23101)

```diff
-               If(mm[of [7]] += mm[of [6]] * of [31], mm[of [8]] |= mm[of [7]] << mm[of [9]], mm[of [9]] += (mm[of [7]] & of [33]) > of [34] ? of [35] : of [36]);
+               nw(DD[-Uw[6]] += DD[-Uw[5]] * Uw[28], DD[-Uw[7]] |= DD[-Uw[6]] << DD[Uw[8]], DD[Uw[8]] += (DD[-Uw[6]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2120. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23103-L23107` → after: `L22922-L22926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22922-L22926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22922-L22926) · [Before (L23103-L23107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23103-L23107)

```diff
-                 If(mm[of [10]].push(mm[of [8]] & of [12]), mm[of [8]] >>= of [11], mm[of [9]] -= of [11])
-               } while (mm[of [9]] > of [7]);
-               mm[of [7]] = -of [2]
-             } return mm[of [7]] > -of [2] && mm[of [10]].push((mm[of [8]] | mm[of [7]] << mm[of [9]]) & of [12]), Yf(mm[of [10]])
-       }(ff[mm[of [1]]]) : Tf[mm[of [1]]]
+                 nw(DD[Uw[9]].push(DD[-Uw[7]] & Uw[11]), DD[-Uw[7]] >>= Uw[10], DD[Uw[8]] -= Uw[10])
+               } while (DD[Uw[8]] > Uw[6]);
+               DD[-Uw[6]] = -Uw[0]
+             } return DD[-Uw[6]] > -Uw[0] && DD[Uw[9]].push((DD[-Uw[7]] | DD[-Uw[6]] << DD[Uw[8]]) & Uw[11]), Iw(DD[Uw[9]])
+       }(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
```

#### 2121. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23111` → after: `L22930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22930) · [Before (L23111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23111)

```diff
-       return mm[of [13]] = of [2], typeof Af !== of [17] && Af ? (new Af).decode(new af(mm[of [1]])) : typeof xf !== of [17] && xf ? xf.from(mm[of [1]]).toString("utf-8") : Rf(mm[of [1]])
+       return DD[Uw[12]] = Uw[0], typeof pw !== Uw[15] && pw ? (new pw).decode(new sw(DD[Uw[2]])) : typeof Kw !== Uw[15] && Kw ? Kw.from(DD[Uw[2]]).toString("utf-8") : gw(DD[Uw[2]])
```

#### 2122. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23115-L23119` → after: `L22934-L22938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22934-L22938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22934-L22938) · [Before (L23115-L23119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23115-L23119)

```diff
-       if (mm[of [13]] = of [15], mm[of [1]] === function(...mm) {
-           return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(...mm) {
-             for (If(mm[of [13]] = of [2], mm[-of [28]] = 'hSmxwDJMscnVoWaTPC8}BNHZ_#{G!?j~u>F5/zQqp7^i3ev[OI<K;$Y9.|U1AlX*rtEy6f(L,&=Rk4gb0]@2%`":)d+', mm[of [29]] = "" + (mm[of [1]] || ""), mm[of [19]] = mm[of [29]].length, mm[of [10]] = [], mm[of [32]] = of [1], mm[of [24]] = o … [truncated]
-               if (mm[of [30]] = mm[-of [28]].indexOf(mm[of [29]][mm[of [11]]]), mm[of [30]] !== -of [2])
-                 if (mm[of [7]] < of [1]) mm[of [7]] = mm[of [30]];
+       if (DD[Uw[12]] = Uw[4], DD[Uw[2]] === function(...DD) {
+           return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = function(...DD) {
+             for (nw(DD[Uw[12]] = Uw[0], DD[Uw[0]] = 'rAG2"v}t^WR4l[Jp|Di=uY6OxP$jd3Q>fF,e:L;yTmgMzN.I8KH/sbq1X*!+)kSBEwaV7n50%#h&UC<Zc{@]9(~_`o?', DD[Uw[24]] = "" + (DD[Uw[2]] || ""), DD[Uw[25]] = DD[Uw[24]].length, DD[Uw[14]] = [], DD[Uw[29]] = Uw[2], DD[Uw[30]] = Uw[2], DD[Uw[2 … [truncated]
+               if (DD[Uw[26]] = DD[Uw[0]].indexOf(DD[Uw[24]][DD[Uw[10]]]), DD[Uw[26]] !== -Uw[0])
+                 if (DD[Uw[27]] < Uw[2]) DD[Uw[27]] = DD[Uw[26]];
```

#### 2123. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23121` → after: `L22940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22940) · [Before (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23121)

```diff
-                   If(mm[of [7]] += mm[of [30]] * of [31], mm[of [32]] |= mm[of [7]] << mm[of [24]], mm[of [24]] += (mm[of [7]] & of [33]) > of [34] ? of [35] : of [36]);
+                   nw(DD[Uw[27]] += DD[Uw[26]] * Uw[28], DD[Uw[29]] |= DD[Uw[27]] << DD[Uw[30]], DD[Uw[30]] += (DD[Uw[27]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2124. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23123-L23128` → after: `L22942-L22947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22942-L22947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22942-L22947) · [Before (L23123-L23128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23123-L23128)

```diff
-                     If(mm[of [10]].push(mm[of [32]] & of [12]), mm[of [32]] >>= of [11], mm[of [24]] -= of [11])
-                   } while (mm[of [24]] > of [7]);
-                   mm[of [7]] = -of [2]
-                 } return mm[of [7]] > -of [2] && mm[of [10]].push((mm[of [32]] | mm[of [7]] << mm[of [24]]) & of [12]), Yf(mm[of [10]])
-           }(ff[mm[of [1]]]) : Tf[mm[of [1]]]
-         }(108)) return mm[of [2]] + mm[of [29]]
+                     nw(DD[Uw[14]].push(DD[Uw[29]] & Uw[11]), DD[Uw[29]] >>= Uw[10], DD[Uw[30]] -= Uw[10])
+                   } while (DD[Uw[30]] > Uw[6]);
+                   DD[Uw[27]] = -Uw[0]
+                 } return DD[Uw[27]] > -Uw[0] && DD[Uw[14]].push((DD[Uw[29]] | DD[Uw[27]] << DD[Uw[30]]) & Uw[11]), Iw(DD[Uw[14]])
+           }(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
+         }(Uw[79]) + Uw[63]) return DD[Uw[0]] + DD[Uw[1]]
```

#### 2125. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23133-L23135` → after: `L22952-L22954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22952-L22954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22952-L22954) · [Before (L23133-L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23133-L23135)

```diff
-     function Vf(mm, Tm, fm, hm = {}, Am, am, xm, wm) {
-       if (am || (am = function(...mm) {
-           return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = Am(ff[mm[of [1]]]) : Tf[mm[of [1]]]
+     function hw(DD, zD, wD, pD = {}, sD, KD, rD, LD, cD) {
+       if (rD || (rD = function() {}), KD || (KD = function(DD) {
+           return typeof Dw[DD] === Uw[15] ? Dw[DD] = sD(zw[DD]) : Dw[DD]
```

#### 2126. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23137-L23139` → after: `L22956-L22958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22956-L22958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22956-L22958) · [Before (L23137-L23139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23137-L23139)

```diff
-           for (If(mm[of [13]] = of [2], mm[-of [40]] = ';WKNGFVaex|}E54yqoO^JSvbMuntcgXlDw<:62zQ&]km*C(B1{"U,T=ZR~3hAIfLs#p0_P`8$)?rdH7[/!@.Y%>j9+i', mm[of [38]] = "" + (mm[of [1]] || ""), mm[of [39]] = mm[of [38]].length, mm[of [10]] = [], mm[of [41]] = of [1], mm[of [24]] = of  … [truncated]
-             if (mm[of [30]] = mm[-of [40]].indexOf(mm[of [38]][mm[of [11]]]), mm[of [30]] !== -of [2])
-               if (mm[of [7]] < of [1]) mm[of [7]] = mm[of [30]];
+           for (nw(DD[Uw[12]] = Uw[0], DD[-Uw[36]] = '(#![1|{~+.hXl}APC_u%`vnz@Z8/xE"T=>4FtQLwrVo7^?K;q:2BHcyG0k6J)RO3<jpM]*saS5,dfgYUeNi$m&Ib9DW', DD[Uw[24]] = "" + (DD[Uw[2]] || ""), DD[Uw[35]] = DD[Uw[24]].length, DD[Uw[14]] = [], DD[Uw[29]] = Uw[2], DD[Uw[30]] = Uw[2], DD[Uw[3 … [truncated]
+             if (DD[Uw[37]] = DD[-Uw[36]].indexOf(DD[Uw[24]][DD[Uw[10]]]), DD[Uw[37]] !== -Uw[0])
+               if (DD[Uw[38]] < Uw[2]) DD[Uw[38]] = DD[Uw[37]];
```

#### 2127. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23141` → after: `L22960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22960) · [Before (L23141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23141)

```diff
-                 If(mm[of [7]] += mm[of [30]] * of [31], mm[of [41]] |= mm[of [7]] << mm[of [24]], mm[of [24]] += (mm[of [7]] & of [33]) > of [34] ? of [35] : of [36]);
+                 nw(DD[Uw[38]] += DD[Uw[37]] * Uw[28], DD[Uw[29]] |= DD[Uw[38]] << DD[Uw[30]], DD[Uw[30]] += (DD[Uw[38]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2128. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23143-L23148` → after: `L22962-L22967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22962-L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22962-L22967) · [Before (L23143-L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23143-L23148)

```diff
-                   If(mm[of [10]].push(mm[of [41]] & of [12]), mm[of [41]] >>= of [11], mm[of [24]] -= of [11])
-                 } while (mm[of [24]] > of [7]);
-                 mm[of [7]] = -of [2]
-               } return mm[of [7]] > -of [2] && mm[of [10]].push((mm[of [41]] | mm[of [7]] << mm[of [24]]) & of [12]), Yf(mm[of [10]])
-         }), If(xm = void 0, wm = {
-           [am(111)]: function(...mm) {
+                   nw(DD[Uw[14]].push(DD[Uw[29]] & Uw[11]), DD[Uw[29]] >>= Uw[10], DD[Uw[30]] -= Uw[10])
+                 } while (DD[Uw[30]] > Uw[6]);
+                 DD[Uw[38]] = -Uw[0]
+               } return DD[Uw[38]] > -Uw[0] && DD[Uw[14]].push((DD[Uw[29]] | DD[Uw[38]] << DD[Uw[30]]) & Uw[11]), Iw(DD[Uw[14]])
+         }), fw(112) + "x" in Gw && rD(), nw(LD = void 0, cD = {
+           [KD(113)]: function(...DD) {
```

#### 2129. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23150-L23153` → after: `L22969-L22972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22969-L22972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22969-L22972) · [Before (L23150-L23153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23150-L23153)

```diff
-               return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(...mm) {
-                 for (If(mm[of [13]] = of [2], mm[of [2]] = 'c`[0L;/jN|^5v7uyQRTPBGEIFq>e({1CfY*H#K]X?pSM8wli6oz)UZDax"Js_@<h%Agm&~}d+nO,VrWt9b$342!.=:k', mm[of [29]] = "" + (mm[of [1]] || ""), mm[of [43]] = mm[of [29]].length, mm[of [45]] = [], mm[of [41]] = of [1], mm[-of [44]]  … [truncated]
-                   if (mm[of [30]] = mm[of [2]].indexOf(mm[of [29]][mm[of [11]]]), mm[of [30]] !== -of [2])
-                     if (mm[of [42]] < of [1]) mm[of [42]] = mm[of [30]];
+               return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = function(...DD) {
+                 for (nw(DD[Uw[12]] = Uw[0], DD[Uw[41]] = '+KLfAdqkEJQO7"#^tPB,[S`G&RCu._@U1cnH4gW}Zbmv9$Xwp(V:xyzM?*lD/=6{i5e2]j>0!3%8aFs;|<IN)r~YoTh', DD[Uw[1]] = "" + (DD[Uw[2]] || ""), DD[Uw[40]] = DD[Uw[1]].length, DD[Uw[44]] = [], DD[-Uw[42]] = Uw[2], DD[Uw[43]] = Uw[2], DD[ … [truncated]
+                   if (DD[Uw[37]] = DD[Uw[41]].indexOf(DD[Uw[1]][DD[Uw[3]]]), DD[Uw[37]] !== -Uw[0])
+                     if (DD[Uw[38]] < Uw[2]) DD[Uw[38]] = DD[Uw[37]];
```

#### 2130. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23155` → after: `L22974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22974) · [Before (L23155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23155)

```diff
-                       If(mm[of [42]] += mm[of [30]] * of [31], mm[of [41]] |= mm[of [42]] << mm[-of [44]], mm[-of [44]] += (mm[of [42]] & of [33]) > of [34] ? of [35] : of [36]);
+                       nw(DD[Uw[38]] += DD[Uw[37]] * Uw[28], DD[-Uw[42]] |= DD[Uw[38]] << DD[Uw[43]], DD[Uw[43]] += (DD[Uw[38]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2131. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23157-L23161` → after: `L22976-L22980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22976-L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22976-L22980) · [Before (L23157-L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23157-L23161)

```diff
-                         If(mm[of [45]].push(mm[of [41]] & of [12]), mm[of [41]] >>= of [11], mm[-of [44]] -= of [11])
-                       } while (mm[-of [44]] > of [7]);
-                       mm[of [42]] = -of [2]
-                     } return mm[of [42]] > -of [2] && mm[of [45]].push((mm[of [41]] | mm[of [42]] << mm[-of [44]]) & of [12]), Yf(mm[of [45]])
-               }(ff[mm[of [1]]]) : Tf[mm[of [1]]]
+                         nw(DD[Uw[44]].push(DD[-Uw[42]] & Uw[11]), DD[-Uw[42]] >>= Uw[10], DD[Uw[43]] -= Uw[10])
+                       } while (DD[Uw[43]] > Uw[6]);
+                       DD[Uw[38]] = -Uw[0]
+                     } return DD[Uw[38]] > -Uw[0] && DD[Uw[44]].push((DD[-Uw[42]] | DD[Uw[38]] << DD[Uw[43]]) & Uw[11]), Iw(DD[Uw[44]])
+               }(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
```

#### 2132. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23164-L23165` → after: `L22983-L22984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22983-L22984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22983-L22984) · [Before (L23164-L23165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23164-L23165)

```diff
-               [mm[-of [46]], mm[of [38]], mm[-of [48]]], mm[-169]
-             ] = Ef, console[am(112)]("" + mm[-of [46]][of [47]](".") + (Tm(113) + Tm(114)) + mm[-of [48]][Tm(115) + "me"] + Tm(of [65]) + mm[of [38]]))
+               [DD[Uw[22]], DD[Uw[0]], DD[Uw[46]]], DD[Uw[9]]
+             ] = Aw, console[zD(Uw[114])]("" + DD[Uw[22]][Uw[45]](Uw[53]) + (zD(115) + zD(Uw[110])) + DD[Uw[46]][zD(117) + "me"] + zD(Uw[96]) + DD[Uw[0]]))
```

#### 2133. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23167-L23185` → after: `L22986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22986) · [Before (L23167-L23185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23167-L23185)

```diff
-         }), Tm === am(117)) {
-         function Dm(...mm) {
-           If(mm[of [13]] = of [1], mm[-of [50]] = function(...mm) {
-             for (If(mm[of [13]] = of [2], mm[of [2]] = mm[of [1]].length, mm[of [38]] = [], mm[of [15]] = of [1], mm[-of [49]] = of [1], mm[of [1]].sort(((mm, Tm) => mm - Tm))), mm[of [32]] = of [1]; mm[of [32]] < mm[of [2]]; mm[of [32]]++)
-               if (!(mm[of [32]] > of [1] && mm[of [1]][mm[of [32]]] === mm[of [1]][mm[of [32]] - of [2]]))
-                 for (If(mm[of [15]] = mm[of [32]] + of [2], mm[-of [49]] = mm[of [2]] - of [2]); mm[of [15]] < mm[-of [49]];)
-                   if (mm[of [1]][mm[of [32]]] + mm[of [1]][mm[of [15]]] + mm[of [1]][mm[-of [49]]] < of [1]) mm[of [15]]++;
-                   else if (mm[of [1]][mm[of [32]]] + mm[of [1]][mm[of [15]]] + mm[of [1]][mm[-of [49]]] > of [1]) mm[-of [49]]--;
-             else {
-               for (mm[of [38]].push([mm[of [1]][mm[of [32]]], mm[of [1]][mm[of [15]]], mm[of [1]][mm[-of [49]]]]); mm[of [15]] < mm[-of [49]] && mm[of [1]][mm[of [15]]] === mm[of [1]][mm[of [15]] + of [2]];) mm[of [15]]++;
-               for (; mm[of [15]] < mm[-of [49]] && mm[of [1]][mm[-of [49]]] === mm[of [1]][mm[-of [49]] - of [2]];) mm[-of [49]]--;
-               If(mm[of [15]]++, mm[-of [49]]--)
-             }
-             return mm[of [38]]
-           }, console.log(mm[-of [50]]))
-         }
- ... (3 more removed lines; see GitHub link above)
+         }), zD === KD(119) + KD(120) && (Aw = []), zD === KD(121) + KD(Uw[41])) {
```

#### 2134. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23188-L23193` → after: `L22989-L23017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22989-L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L22989-L23017) · [Before (L23188-L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23188-L23193)

```diff
-           if (If(Tm[of [13]] = of [1], fm = function(...Tm) {
-               return function(...mm) {
-                 return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(...mm) {
-                   for (If(mm[of [13]] = of [2], mm[-of [53]] = '^aqc$=|N:G7lL]uv.23gU?}KmbD[f~oREiwCrAn8!@"IPk(j150J_THMQd9xF4z#<S){Xth>VypWO*Y`&B6/se,%;+Z', mm[of [38]] = "" + (mm[of [1]] || ""), mm[of [15]] = mm[of [38]].length, mm[-of [51]] = [], mm[of [32]] = of [1], mm[of [2 … [truncated]
-                     if (mm[of [54]] = mm[-of [53]].indexOf(mm[of [38]][mm[of [3]]]), mm[of [54]] !== -of [2])
-                       if (mm[of [52]] < of [1]) mm[of [52]] = mm[of [54]];
+           if (nw(zD[Uw[12]] = Uw[2], wD = function(...zD) {
+               return Aw = zD, cD[DD].apply(this)
+             }, zD[-Uw[47]] = pD[DD]), zD[-Uw[47]]) {
+             function sD(...DD) {
+               nw(DD[Uw[12]] = Uw[2], DD[Uw[48]] = function(...zD) {
+                 return nw(zD[Uw[12]] = Uw[0], zD[Uw[22]] = []), (zD[Uw[2]] === Uw[0] || zD[Uw[2]] >= Uw[14]) && DD[-Uw[49]](zD[Uw[22]], [], zD[Uw[2]], Uw[2]), zD[Uw[22]]
+               }, DD[-Uw[49]] = function(...zD) {
+                 for (zD[Uw[12]] = Uw[14], zD[Uw[22]] = zD[Uw[4]]; zD[Uw[22]] < zD[Uw[1]]; zD[Uw[22]]++) {
+                   if (zD[Uw[0]].length !== zD[Uw[22]]) return;
+                   for (zD[-Uw[50]] = Uw[2]; zD[-Uw[50]] < zD[Uw[1]]; zD[-Uw[50]]++) DD[Uw[1]](zD[Uw[0]], [zD[Uw[22]], zD[-Uw[50]]]) && (nw(zD[Uw[0]].push([zD[Uw[22]], zD[-Uw[50]]]), DD[-Uw[49]](zD[Uw[2]], zD[Uw[0]], zD[Uw[1]], zD[Uw[22]] + Uw[0])), zD[Uw[0]].length === zD[Uw[1]]  … [truncated]
+                 }
+               }, DD[Uw[9]] = function(...DD) {
+                 for (nw(DD[Uw[12]] = Uw[0], DD[Uw[22]] = [], DD[-Uw[52]] = DD[Uw[2]].length), DD[-Uw[51]] = Uw[2]; DD[-Uw[51]] < DD[-Uw[52]]; DD[-Uw[51]]++)
+                   for (DD[Uw[22]][DD[-Uw[51]]] = "", DD[Uw[9]] = Uw[2]; DD[Uw[9]] < DD[-Uw[52]]; DD[Uw[9]]++) DD[Uw[22]][DD[-Uw[51]]] += DD[Uw[2]][DD[-Uw[51]]][Uw[0]] === DD[Uw[9]] ? "Q" : Uw[53];
+                 return DD[Uw[22]]
+               }, DD[Uw[1]] = function(...DD) {
+ ... (13 more added lines; see GitHub link above)
```

#### 2135. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23195` → after: `L23019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23019) · [Before (L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23195)

```diff
-                         If(mm[of [52]] += mm[of [54]] * of [31], mm[of [32]] |= mm[of [52]] << mm[of [24]], mm[of [24]] += (mm[of [52]] & of [33]) > of [34] ? of [35] : of [36]);
+                         nw(DD[Uw[38]] += DD[Uw[63]] * Uw[28], DD[-Uw[69]] |= DD[Uw[38]] << DD[Uw[30]], DD[Uw[30]] += (DD[Uw[38]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2136. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23197-L23256` → after: `L23021-L23100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23021-L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23021-L23100) · [Before (L23197-L23256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23197-L23256)

```diff
-                           If(mm[-of [51]].push(mm[of [32]] & of [12]), mm[of [32]] >>= of [11], mm[of [24]] -= of [11])
-                         } while (mm[of [24]] > of [7]);
-                         mm[of [52]] = -of [2]
-                       } return mm[of [52]] > -of [2] && mm[-of [51]].push((mm[of [32]] | mm[of [52]] << mm[of [24]]) & of [12]), Yf(mm[-of [51]])
-                 }(ff[mm[of [1]]]) : Tf[mm[of [1]]]
-               }(121) in jf && function(...mm) {
-                 mm[of [13]] = of [1];
-                 const Tm = require("big-integer");
-                 If(mm[of [5]] = class {
-                   static randomPrime(...mm) {
-                     mm[of [13]] = of [2];
-                     const fm = Tm.one.shiftLeft(mm[of [1]] - of [2]),
-                       hm = Tm.one.shiftLeft(mm[of [1]]).prev();
-                     for (; of [55];) {
-                       let mm = Tm.randBetween(fm, hm);
-                       if (mm.isProbablePrime(of [56])) return mm
- ... (44 more removed lines; see GitHub link above)
+                           nw(DD[Uw[14]].push(DD[-Uw[69]] & Uw[11]), DD[-Uw[69]] >>= Uw[10], DD[Uw[30]] -= Uw[10])
+                         } while (DD[Uw[30]] > Uw[6]);
+                         DD[Uw[38]] = -Uw[0]
+                       } return DD[Uw[38]] > -Uw[0] && DD[Uw[14]].push((DD[-Uw[69]] | DD[Uw[38]] << DD[Uw[30]]) & Uw[11]), Iw(DD[Uw[14]])
+                 }
+ 
+                 function wD(...DD) {
+                   return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = zD(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
+                 }
+                 DD[Uw[12]] = Uw[2], wD(Uw[90]) + "U" in Gw && pD();
+ 
+                 function pD() {}
+               }(wD, zD[-Uw[47]])
+           }
+           return wD
+         }
+ ... (64 more added lines; see GitHub link above)
```

#### 2137. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23258` → after: `L23102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23102) · [Before (L23258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23258)

```diff
-                     If(mm[of [61]] += mm[of [30]] * of [31], mm[of [32]] |= mm[of [61]] << mm[of [62]], mm[of [62]] += (mm[of [61]] & of [33]) > of [34] ? of [35] : of [36]);
+                     nw(DD[Uw[6]] += DD[Uw[37]] * Uw[28], DD[-Uw[66]] |= DD[Uw[6]] << DD[Uw[67]], DD[Uw[67]] += (DD[Uw[6]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2138. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23260-L23263` → after: `L23104-L23207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23104-L23207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23104-L23207) · [Before (L23260-L23263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23260-L23263)

```diff
-                       If(mm[of [45]].push(mm[of [32]] & of [12]), mm[of [32]] >>= of [11], mm[of [62]] -= of [11])
-                     } while (mm[of [62]] > of [7]);
-                     mm[of [61]] = -of [2]
-                   } return mm[of [61]] > -of [2] && mm[of [45]].push((mm[of [32]] | mm[of [61]] << mm[of [62]]) & of [12]), Yf(mm[of [45]])
+                       nw(DD[Uw[14]].push(DD[-Uw[66]] & Uw[11]), DD[-Uw[66]] >>= Uw[10], DD[Uw[67]] -= Uw[10])
+                     } while (DD[Uw[67]] > Uw[6]);
+                     DD[Uw[6]] = -Uw[0]
+                   } DD[Uw[6]] > -Uw[0] && DD[Uw[14]].push((DD[-Uw[66]] | DD[Uw[6]] << DD[Uw[67]]) & Uw[11]);
+               return Iw(DD[Uw[14]])
+             }(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
+           }
+           return void 0 === await DD() ? zD(Uw[113]) + "l)" : ""
+         })(), Uw[57]
+       }), LD
+     }
+ 
+     function nw() {
+       nw = function() {}
+     }
+     nw(Dw = {}, zw = ["{5O:@W.QS?B:>vIA%.", "wD]G^D?g3J`~l9|tlJzlOKlV>I=fi`7Boj]e[?B1+", "s{[%F@ZjrS~eu>:2v+befV$kzFr%h~GXxwbN", "C06D8`Oj}{A]y@0XEl0:0ookEzV:hBu&,`^P2", "``nZ26l>7QDYM*&`u%`[`g]Aq2(L/~<t.C(Y]?wxRl579*P0", "zk;:kmbA^${Z,`t`05EAIVigLzyPU>b!jvy8*", "/+@VmL&i|c<zhN", … [truncated]
+ ... (88 more added lines; see GitHub link above)
```

#### 2139. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23267` → after: `L23233-L23244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23233-L23244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23233-L23244) · [Before (L23267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23267)

```diff
-               return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = Am(ff[mm[of [1]]]) : Tf[mm[of [1]]]
+               return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = function(...DD) {
+                 for (nw(DD[Uw[12]] = Uw[0], DD[Uw[22]] = '{3*80%cDr&w/ivq1gP=X4[jM"hpsH5)(oOd$:J<Qun|2L.]x9F}WGVK6^C!Tf@ItNya+eB,z#ZA;7_~?Y`SlRUE>mbk', DD[Uw[1]] = "" + (DD[Uw[2]] || ""), DD[Uw[4]] = DD[Uw[1]].length, DD[-Uw[79]] = [], DD[-Uw[81]] = Uw[2], DD[Uw[80]] = Uw[2], DD[ … [truncated]
+                   if (DD[Uw[63]] = DD[Uw[22]].indexOf(DD[Uw[1]][DD[Uw[3]]]), DD[Uw[63]] !== -Uw[0])
+                     if (DD[Uw[6]] < Uw[2]) DD[Uw[6]] = DD[Uw[63]];
+                     else {
+                       nw(DD[Uw[6]] += DD[Uw[63]] * Uw[28], DD[-Uw[81]] |= DD[Uw[6]] << DD[Uw[80]], DD[Uw[80]] += (DD[Uw[6]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
+                       do {
+                         nw(DD[-Uw[79]].push(DD[-Uw[81]] & Uw[11]), DD[-Uw[81]] >>= Uw[10], DD[Uw[80]] -= Uw[10])
+                       } while (DD[Uw[80]] > Uw[6]);
+                       DD[Uw[6]] = -Uw[0]
+                     } return DD[Uw[6]] > -Uw[0] && DD[-Uw[79]].push((DD[-Uw[81]] | DD[Uw[6]] << DD[Uw[80]]) & Uw[11]), Iw(DD[-Uw[79]])
+               }(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
```

#### 2140. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23273` → after: `L23253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23253) · [Before (L23273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23273)

```diff
-                   return mm[of [13]] = of [29], xm(hm(wm(mm[of [1]]), wm(mm[of [2]])))
+                   return DD[Uw[12]] = Uw[1], cD(LD(AD(DD[Uw[2]]), AD(DD[Uw[0]])))
```

#### 2141. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23277-L23288` → after: `L23257-L23261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23257-L23261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23257-L23261) · [Before (L23277-L23288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23277-L23288)

```diff
-                   return mm[of [13]] = of [15],
-                     function(...mm) {
-                       var Tm, fm, hm, Am;
-                       for (If(mm[of [13]] = of [29], mm[of [76]] = mm[of [2]].length, mm[-of [77]] = Array()), mm[of [19]] = Array(Math.ceil(mm[of [1]].length / of [29])), Tm = of [1]; Tm < mm[of [19]].length; Tm++) mm[of [19]][Tm] = mm[of [1]].charCodeAt(Tm * of [29]) << of [11] … [truncated]
-                       for (; mm[of [19]].length > of [1];) {
-                         for (If(Am = Array(), hm = of [1]), Tm = of [1]; Tm < mm[of [19]].length; Tm++) If(hm = (hm << of [69]) + mm[of [19]][Tm], fm = Math.floor(hm / mm[of [76]]), hm -= fm * mm[of [76]]), (Am.length > of [1] || fm > of [1]) && (Am[Am.length] = fm);
-                         If(mm[-of [77]][mm[-of [77]].length] = hm, mm[of [19]] = Am)
-                       }
-                       for (mm[of [45]] = "", Tm = mm[-of [77]].length - of [2]; Tm >= of [1]; Tm--) mm[of [45]] += mm[of [2]].charAt(mm[-of [77]][Tm]);
-                       for (mm[of [41]] = Math.ceil(mm[of [1]].length * of [11] / (Math.log(mm[of [2]].length) / Math.log(of [29]))), Tm = mm[of [45]].length; Tm < mm[of [41]]; Tm++) mm[of [45]] = mm[of [2]][of [1]] + mm[of [45]];
-                       return mm[of [45]]
-                     }(hm(wm(mm[of [1]]), wm(mm[of [2]])), mm[of [29]])
+                   return DD[Uw[12]] = Uw[1], gD(LD(AD(DD[Uw[2]]), AD(DD[Uw[0]])))
+                 }
+ 
+                 function KD(DD, zD, wD) {
+                   return RD(LD(AD(DD), AD(zD)), wD)
```

#### 2142. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23292-L23309` → after: `L23265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23265) · [Before (L23292-L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23292-L23309)

```diff
-                   mm[of [13]] = of [29], mm[of [5]] = Dm(mm[of [1]]), mm[of [5]].length > of [69] && (mm[of [5]] = Vm(mm[of [5]], mm[of [1]].length * of [11]));
-                   var Tm = Array(of [69]),
-                     fm = Array(of [69]);
-                   for (mm[-of [70]] = of [1]; mm[-of [70]] < of [69]; mm[-of [70]]++) If(Tm[mm[-of [70]]] = 909522486 ^ mm[of [5]][mm[-of [70]]], fm[mm[-of [70]]] = 1549556828 ^ mm[of [5]][mm[-of [70]]]);
-                   return mm[of [19]] = Vm(Tm.concat(Dm(mm[of [2]])), of [71] + mm[of [2]].length * of [11]), im(Vm(fm.concat(mm[of [19]]), qf(function(...mm) {
-                     return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(...mm) {
-                       for (If(mm[of [13]] = of [2], mm[of [2]] = '&GHYdQrJRNXtlnef7^g|*2w5~#=4Eyj.BhUI[+sTDoa?W"A!z:,%{LMkx@mvp/`})i<;S60$CKFPbVOZ3c9qu8]_(>1', mm[of [65]] = "" + (mm[of [1]] || ""), mm[of [19]] = mm[of [65]].length, mm[-of [68]] = [], mm[of [32]] = of [1], mm[of  … [truncated]
-                         if (mm[of [67]] = mm[of [2]].indexOf(mm[of [65]][mm[of [66]]]), mm[of [67]] !== -of [2])
-                           if (mm[of [7]] < of [1]) mm[of [7]] = mm[of [67]];
-                           else {
-                             If(mm[of [7]] += mm[of [67]] * of [31], mm[of [32]] |= mm[of [7]] << mm[of [24]], mm[of [24]] += (mm[of [7]] & of [33]) > of [34] ? of [35] : of [36]);
-                             do {
-                               If(mm[-of [68]].push(mm[of [32]] & of [12]), mm[of [32]] >>= of [11], mm[of [24]] -= of [11])
-                             } while (mm[of [24]] > of [7]);
-                             mm[of [7]] = -of [2]
-                           } return mm[of [7]] > -of [2] && mm[-of [68]].push((mm[of [32]] | mm[of [7]] << mm[of [24]]) & of [12]), Yf(mm[-of [68]])
- ... (2 more removed lines; see GitHub link above)
+                   return DD[Uw[12]] = Uw[0], fD(ED(UD(DD[Uw[2]]), DD[Uw[2]].length * Uw[10]))
```

#### 2143. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23314-L23329` → after: `L23270-L23309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23270-L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23270-L23309) · [Before (L23314-L23329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23314-L23329)

```diff
-                     return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(mm) {
-                       var Tm, fm, hm, Am, am, xm, wm;
-                       for (If(Tm = "" + (mm || ""), fm = Tm.length, hm = [], Am = of [1], am = of [1], xm = -of [2]), wm = of [1]; wm < fm; wm++) {
-                         var Dm = '|MoLtmpgASOEiQYPdUsRNIhacq7$(81*/#x5]3[.@?_9,"+&6!u<GneZlHJK~)}WBCwv2Fr{>z:yT^j=4f`;bDk0%XV'.indexOf(Tm[wm]);
-                         if (Dm !== -of [2])
-                           if (xm < of [1]) xm = Dm;
-                           else {
-                             If(xm += Dm * of [31], Am |= xm << am, am += (xm & of [33]) > of [34] ? of [35] : of [36]);
-                             do {
-                               If(hm.push(Am & of [12]), Am >>= of [11], am -= of [11])
-                             } while (am > of [7]);
-                             xm = -of [2]
-                           }
-                       }
-                       return xm > -of [2] && hm.push((Am | xm << am) & of [12]), Yf(hm)
-                     }(ff[mm[of [1]]]) : Tf[mm[of [1]]]
+                     for (nw(DD[Uw[12]] = Uw[0], DD[Uw[22]] = 'qDz^EChm<kw2"fI~Rea@XgN45|[oyvUZB]}8_71P,Ap#)T9LlQ>.jxYtnu$+H?OF(/;b:Mr*&s=0c%i6V3KS{W`!JGd', DD[Uw[24]] = "" + (DD[Uw[2]] || ""), DD[Uw[4]] = DD[Uw[24]].length, DD[Uw[9]] = [], DD[Uw[29]] = Uw[2], DD[Uw[30]] = Uw[2],  … [truncated]
+                       if (DD[-Uw[85]] = DD[Uw[22]].indexOf(DD[Uw[24]][DD[Uw[3]]]), DD[-Uw[85]] !== -Uw[0])
+                         if (DD[Uw[0]] < Uw[2]) DD[Uw[0]] = DD[-Uw[85]];
+                         else {
+                           nw(DD[Uw[0]] += DD[-Uw[85]] * Uw[28], DD[Uw[29]] |= DD[Uw[0]] << DD[Uw[30]], DD[Uw[30]] += (DD[Uw[0]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
+                           do {
+                             nw(DD[Uw[9]].push(DD[Uw[29]] & Uw[11]), DD[Uw[29]] >>= Uw[10], DD[Uw[30]] -= Uw[10])
+                           } while (DD[Uw[30]] > Uw[6]);
+                           DD[Uw[0]] = -Uw[0]
+                         } return DD[Uw[0]] > -Uw[0] && DD[Uw[9]].push((DD[Uw[29]] | DD[Uw[0]] << DD[Uw[30]]) & Uw[11]), Iw(DD[Uw[9]])
+                   }
+ 
+                   function wD(...DD) {
+                     return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = zD(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
+                   }
+                   DD[Uw[12]] = Uw[1], DD[Uw[1]] = UD(DD[Uw[2]]), DD[Uw[1]].length > Uw[86] && (DD[Uw[1]] = ED(DD[Uw[1]], DD[Uw[2]].length * Uw[10]));
+ ... (24 more added lines; see GitHub link above)
```

#### 2144. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23333` → after: `L23312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23312) · [Before (L23333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23333)

```diff
-                     mm[of [5]]
+                     DD[-Uw[91]]
```

#### 2145. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23335` → after: `L23314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23314) · [Before (L23335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23335)

```diff
-                     mm[of [5]] = of [1]
+                     DD[-Uw[91]] = Uw[2]
```

#### 2146. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23337-L23338` → after: `L23316-L23317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23316-L23317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23316-L23317) · [Before (L23337-L23338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23337-L23338)

```diff
-                   for (If(Tm[of [2]] = mm[of [5]] ? hm(of [16]) + hm(131) + hm(132) : hm(of [16]) + hm(133) + hm(134), Tm[of [40]] = "", Tm[of [19]] = of [18]), Tm[of [45]] = of [1]; Tm[of [45]] < Tm[of [1]].length; Tm[of [45]]++) If(Tm[of [19]] = Tm[of [1]].charCodeAt(Tm[of [45] … [truncated]
-                   return Tm[of [40]]
+                   for (nw(wD = DD[-Uw[91]] ? LD(Uw[92]) + LD(Uw[36]) + LD(154) : LD(Uw[92]) + LD(Uw[91]) + LD(Uw[82]), pD = "", sD = void 0), KD = Uw[2]; KD < zD.length; KD++) nw(sD = zD.charCodeAt(KD), pD += wD.charAt(sD >>> Uw[14] & Uw[93]) + wD.charAt(sD & Uw[93]));
+                   return pD
```

#### 2147. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23343-L23354` → after: `L23322-L23331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23322-L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23322-L23331) · [Before (L23343-L23354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23343-L23354)

```diff
-                     return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(...mm) {
-                       for (If(mm[of [13]] = of [2], mm[of [5]] = ']boAeqpQBCjYkdDlmMtNPX,UfO>I_F7:5J#TEr=;a3wn?WV*SxRic(.gh$2uHv&!1Z~^%GysK@{L}804z<|/+6)"[9`', mm[of [38]] = "" + (mm[of [1]] || ""), mm[of [19]] = mm[of [38]].length, mm[of [74]] = [], mm[of [32]] = of [1], mm[-of  … [truncated]
-                         if (mm[of [30]] = mm[of [5]].indexOf(mm[of [38]][mm[of [11]]]), mm[of [30]] !== -of [2])
-                           if (mm[of [7]] < of [1]) mm[of [7]] = mm[of [30]];
-                           else {
-                             If(mm[of [7]] += mm[of [30]] * of [31], mm[of [32]] |= mm[of [7]] << mm[-of [73]], mm[-of [73]] += (mm[of [7]] & of [33]) > of [34] ? of [35] : of [36]);
-                             do {
-                               If(mm[of [74]].push(mm[of [32]] & of [12]), mm[of [32]] >>= of [11], mm[-of [73]] -= of [11])
-                             } while (mm[-of [73]] > of [7]);
-                             mm[of [7]] = -of [2]
-                           } return mm[of [7]] > -of [2] && mm[of [74]].push((mm[of [32]] | mm[of [7]] << mm[-of [73]]) & of [12]), Yf(mm[of [74]])
-                     }(ff[mm[of [1]]]) : Tf[mm[of [1]]]
+                     for (nw(DD[Uw[12]] = Uw[0], DD[Uw[22]] = 'YPhAsluD!@I4dRae{jQzT>%}bg(7Fi;V/*1_mCy2oKkvWf"r=$Hc6EX:BGSw,.)Ln+J5ZO9MtpNq[~?3^`x<0&8]#|U', DD[-Uw[94]] = "" + (DD[Uw[2]] || ""), DD[-Uw[95]] = DD[-Uw[94]].length, DD[Uw[14]] = [], DD[Uw[5]] = Uw[2], DD[Uw[30]] = Uw[ … [truncated]
+                       if (DD[Uw[96]] = DD[Uw[22]].indexOf(DD[-Uw[94]][DD[Uw[3]]]), DD[Uw[96]] !== -Uw[0])
+                         if (DD[Uw[6]] < Uw[2]) DD[Uw[6]] = DD[Uw[96]];
+                         else {
+                           nw(DD[Uw[6]] += DD[Uw[96]] * Uw[28], DD[Uw[5]] |= DD[Uw[6]] << DD[Uw[30]], DD[Uw[30]] += (DD[Uw[6]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
+                           do {
+                             nw(DD[Uw[14]].push(DD[Uw[5]] & Uw[11]), DD[Uw[5]] >>= Uw[10], DD[Uw[30]] -= Uw[10])
+                           } while (DD[Uw[30]] > Uw[6]);
+                           DD[Uw[6]] = -Uw[0]
+                         } return DD[Uw[6]] > -Uw[0] && DD[Uw[14]].push((DD[Uw[5]] | DD[Uw[6]] << DD[Uw[30]]) & Uw[11]), Iw(DD[Uw[14]])
```

#### 2148. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23356` → after: `L23333-L23337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23333-L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23333-L23337) · [Before (L23356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23356)

```diff
-                   Tm[of [13]] = of [2];
+ 
+                   function sD(...DD) {
+                     return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = pD(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
+                   }
+                   wD[Uw[12]] = Uw[0];
```

#### 2149. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23358` → after: `L23339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23339) · [Before (L23358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23358)

```diff
-                     mm[of [38]]
+                     DD[Uw[92]]
```

#### 2150. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23360` → after: `L23341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23341) · [Before (L23360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23360)

```diff
-                     mm[of [38]] = ""
+                     DD[Uw[92]] = ""
```

#### 2151. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23362-L23364` → after: `L23343-L23345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23343-L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23343-L23345) · [Before (L23362-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23362-L23364)

```diff
-                   for (If(Tm[of [2]] = am(135) + am(136) + hm(137) + hm(138), Tm[of [38]] = "", Tm[of [75]] = Tm[of [1]].length), Tm[of [45]] = of [1]; Tm[of [45]] < Tm[of [75]]; Tm[of [45]] += of [15])
-                     for (Tm[of [32]] = Tm[of [1]].charCodeAt(Tm[of [45]]) << of [69] | (Tm[of [45]] + of [2] < Tm[of [75]] ? Tm[of [1]].charCodeAt(Tm[of [45]] + of [2]) << of [11] : of [1]) | (Tm[of [45]] + of [29] < Tm[of [75]] ? Tm[of [1]].charCodeAt(Tm[of [45]] + of [29]) : of … [truncated]
-                   return Tm[of [38]]
+                   for (nw(wD[Uw[22]] = zD(Uw[106]) + zD(158) + sD(159) + sD(160) + sD(Uw[111]) + sD(162) + sD(163) + "/", wD[Uw[1]] = "", wD[Uw[58]] = wD[Uw[2]].length), wD[-Uw[65]] = Uw[2]; wD[-Uw[65]] < wD[Uw[58]]; wD[-Uw[65]] += Uw[4])
+                     for (wD[Uw[29]] = wD[Uw[2]].charCodeAt(wD[-Uw[65]]) << Uw[86] | (wD[-Uw[65]] + Uw[0] < wD[Uw[58]] ? wD[Uw[2]].charCodeAt(wD[-Uw[65]] + Uw[0]) << Uw[10] : Uw[2]) | (wD[-Uw[65]] + Uw[1] < wD[Uw[58]] ? wD[Uw[2]].charCodeAt(wD[-Uw[65]] + Uw[1]) : Uw[2]), wD[Uw[8]] … [truncated]
+                   return wD[Uw[1]]
```

#### 2152. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23368-L23370` → after: `L23349-L23357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23349-L23357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23349-L23357) · [Before (L23368-L23370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23368-L23370)

```diff
-                   var Tm, fm;
-                   for (If(mm[of [13]] = of [2], mm[of [2]] = "", mm[of [29]] = -of [2]); ++mm[of [29]] < mm[of [1]].length;) If(Tm = mm[of [1]].charCodeAt(mm[of [29]]), fm = mm[of [29]] + of [2] < mm[of [1]].length ? mm[of [1]].charCodeAt(mm[of [29]] + of [2]) : of [1]), 55296 <= … [truncated]
-                   return mm[of [2]]
+                   var zD, wD, pD, sD;
+                   for (nw(DD[Uw[12]] = Uw[1], DD[Uw[1]] = DD[Uw[0]].length, DD[Uw[24]] = Array()), DD[Uw[14]] = Array(Math.ceil(DD[Uw[2]].length / Uw[1])), zD = Uw[2]; zD < DD[Uw[14]].length; zD++) DD[Uw[14]][zD] = DD[Uw[2]].charCodeAt(zD * Uw[1]) << Uw[10] | DD[Uw[2]].charCodeAt … [truncated]
+                   for (; DD[Uw[14]].length > Uw[2];) {
+                     for (nw(sD = Array(), pD = Uw[2]), zD = Uw[2]; zD < DD[Uw[14]].length; zD++) nw(pD = (pD << Uw[86]) + DD[Uw[14]][zD], wD = Math.floor(pD / DD[Uw[1]]), pD -= wD * DD[Uw[1]]), (sD.length > Uw[2] || wD > Uw[2]) && (sD[sD.length] = wD);
+                     nw(DD[Uw[24]][DD[Uw[24]].length] = pD, DD[Uw[14]] = sD)
+                   }
+                   for (DD[Uw[9]] = "", zD = DD[Uw[24]].length - Uw[0]; zD >= Uw[2]; zD--) DD[Uw[9]] += DD[Uw[0]].charAt(DD[Uw[24]][zD]);
+                   for (DD[-Uw[96]] = Math.ceil(DD[Uw[2]].length * Uw[10] / (Math.log(DD[Uw[0]].length) / Math.log(Uw[1]))), zD = DD[Uw[9]].length; zD < DD[-Uw[96]]; zD++) DD[Uw[9]] = DD[Uw[0]][Uw[2]] + DD[Uw[9]];
+                   return DD[Uw[9]]
```

#### 2153. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23374-L23376` → after: `L23361-L23363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23361-L23363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23361-L23363) · [Before (L23374-L23376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23374-L23376)

```diff
-                   for (If(mm[of [13]] = of [2], mm[of [2]] = Array(mm[of [1]].length >> of [29])), mm[of [29]] = of [1]; mm[of [29]] < mm[of [2]].length; mm[of [29]]++) mm[of [2]][mm[of [29]]] = of [1];
-                   for (mm[of [29]] = of [1]; mm[of [29]] < mm[of [1]].length * of [11]; mm[of [29]] += of [11]) mm[of [2]][mm[of [29]] >> of [32]] |= (mm[of [1]].charCodeAt(mm[of [29]] / of [11]) & of [12]) << of [82] - mm[of [29]] % of [81];
-                   return mm[of [2]]
+                   var zD, wD;
+                   for (nw(DD[Uw[12]] = Uw[0], DD[Uw[0]] = "", DD[Uw[97]] = -Uw[0]); ++DD[Uw[97]] < DD[Uw[2]].length;) nw(zD = DD[Uw[2]].charCodeAt(DD[Uw[97]]), wD = DD[Uw[97]] + Uw[0] < DD[Uw[2]].length ? DD[Uw[2]].charCodeAt(DD[Uw[97]] + Uw[0]) : Uw[2]), 55296 <= zD && zD <= 563 … [truncated]
+                   return DD[Uw[0]]
```

#### 2154. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23380-L23381` → after: `L23367-L23369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23367-L23369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23367-L23369) · [Before (L23380-L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23380-L23381)

```diff
-                   for (If(mm[of [13]] = of [2], mm[of [2]] = ""), mm[of [38]] = of [1]; mm[of [38]] < mm[of [1]].length * of [81]; mm[of [38]] += of [11]) mm[of [2]] += String.fromCharCode(mm[of [1]][mm[of [38]] >> of [32]] >>> of [82] - mm[of [38]] % of [81] & of [12]);
-                   return mm[of [2]]
+                   for (nw(DD[Uw[12]] = Uw[0], DD[Uw[66]] = Array(DD[Uw[2]].length >> Uw[1])), DD[Uw[101]] = Uw[2]; DD[Uw[101]] < DD[Uw[66]].length; DD[Uw[101]]++) DD[Uw[66]][DD[Uw[101]]] = Uw[2];
+                   for (DD[Uw[101]] = Uw[2]; DD[Uw[101]] < DD[Uw[2]].length * Uw[10]; DD[Uw[101]] += Uw[10]) DD[Uw[66]][DD[Uw[101]] >> Uw[5]] |= (DD[Uw[2]].charCodeAt(DD[Uw[101]] / Uw[10]) & Uw[11]) << Uw[102] - DD[Uw[101]] % Uw[68];
+                   return DD[Uw[66]]
```

#### 2155. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23385` → after: `L23373-L23374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23373-L23374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23373-L23374) · [Before (L23385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23385)

```diff
-                   return mm[of [13]] = of [29], mm[of [1]] >>> mm[of [2]] | mm[of [1]] << of [81] - mm[of [2]]
+                   for (nw(DD[Uw[12]] = Uw[0], DD[Uw[0]] = ""), DD[-Uw[62]] = Uw[2]; DD[-Uw[62]] < DD[Uw[2]].length * Uw[68]; DD[-Uw[62]] += Uw[10]) DD[Uw[0]] += String.fromCharCode(DD[Uw[2]][DD[-Uw[62]] >> Uw[5]] >>> Uw[102] - DD[-Uw[62]] % Uw[68] & Uw[11]);
+                   return DD[Uw[0]]
```

#### 2156. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23389` → after: `L23378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23378) · [Before (L23389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23389)

```diff
-                   return mm[of [13]] = of [29], mm[of [1]] >>> mm[of [2]]
+                   return DD[Uw[12]] = Uw[1], DD[Uw[2]] >>> DD[Uw[0]] | DD[Uw[2]] << Uw[68] - DD[Uw[0]]
```

#### 2157. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23393` → after: `L23382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23382) · [Before (L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23393)

```diff
-                   return mm[of [13]] = of [15], mm[of [1]] & mm[of [2]] ^ ~mm[of [1]] & mm[of [29]]
+                   return DD[Uw[12]] = Uw[1], DD[Uw[2]] >>> DD[Uw[0]]
```

#### 2158. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23397` → after: `L23386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23386) · [Before (L23397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23397)

```diff
-                   return mm[of [13]] = of [15], mm[of [1]] & mm[of [2]] ^ mm[of [1]] & mm[of [29]] ^ mm[of [2]] & mm[of [29]]
+                   return DD[Uw[12]] = Uw[4], DD[Uw[2]] & DD[Uw[0]] ^ ~DD[Uw[2]] & DD[Uw[1]]
```

#### 2159. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23401` → after: `L23390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23390) · [Before (L23401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23401)

```diff
-                   return mm[of [13]] = of [2], Rm(mm[of [1]], of [29]) ^ Rm(mm[of [1]], of [35]) ^ Rm(mm[of [1]], 22)
+                   return DD[Uw[12]] = Uw[4], DD[Uw[2]] & DD[Uw[0]] ^ DD[Uw[2]] & DD[Uw[1]] ^ DD[Uw[0]] & DD[Uw[1]]
```

#### 2160. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23405` → after: `L23394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23394) · [Before (L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23405)

```diff
-                   return mm[of [13]] = of [2], Rm(mm[of [1]], of [24]) ^ Rm(mm[of [1]], 11) ^ Rm(mm[of [1]], 25)
+                   return DD[Uw[12]] = Uw[0], ID(DD[Uw[2]], Uw[1]) ^ ID(DD[Uw[2]], Uw[33]) ^ ID(DD[Uw[2]], 22)
```

#### 2161. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23409` → after: `L23398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23398) · [Before (L23409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23409)

```diff
-                   return mm[of [13]] = of [2], Rm(mm[of [1]], of [7]) ^ Rm(mm[of [1]], of [79]) ^ pm(mm[of [1]], of [15])
+                   return DD[Uw[12]] = Uw[0], ID(DD[Uw[2]], Uw[8]) ^ ID(DD[Uw[2]], 11) ^ ID(DD[Uw[2]], 25)
```

#### 2162. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23413` → after: `L23402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23402) · [Before (L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23413)

```diff
-                   return mm[of [13]] = of [2], Rm(mm[of [1]], 17) ^ Rm(mm[of [1]], of [84]) ^ pm(mm[of [1]], of [83])
+                   return DD[Uw[12]] = Uw[0], ID(DD[Uw[2]], Uw[6]) ^ ID(DD[Uw[2]], Uw[51]) ^ BD(DD[Uw[2]], Uw[4])
```

#### 2163. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23417-L23422` → after: `L23406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23406) · [Before (L23417-L23422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23417-L23422)

```diff
-                   var fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Vm, Km;
-                   for (If(Tm[of [13]] = of [29], Tm[of [29]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Tm[of [15]] = new Array(of [85])), If(Tm[of [1]][Tm[of [2]] >> of [32]] |= of [52] << of [82] - Tm[of [2]] % … [truncated]
-                     for (If(fm = Tm[of [29]][of [1]], hm = Tm[of [29]][of [2]], Am = Tm[of [29]][of [29]], am = Tm[of [29]][of [15]], xm = Tm[of [29]][of [10]], wm = Tm[of [29]][of [32]], Dm = Tm[of [29]][of [24]], im = Tm[of [29]][of [7]]), pm = of [1]; pm < of [85]; pm++) If(pm … [truncated]
-                     If(Tm[of [29]][of [1]] = Im(fm, Tm[of [29]][of [1]]), Tm[of [29]][of [2]] = Im(hm, Tm[of [29]][of [2]]), Tm[of [29]][of [29]] = Im(Am, Tm[of [29]][of [29]]), Tm[of [29]][of [15]] = Im(am, Tm[of [29]][of [15]]), Tm[of [29]][of [10]] = Im(xm, Tm[of [29]][of [10] … [truncated]
-                   }
-                   return Tm[of [29]]
+                   return DD[Uw[12]] = Uw[0], ID(DD[Uw[2]], 17) ^ ID(DD[Uw[2]], Uw[104]) ^ BD(DD[Uw[2]], Uw[103])
```

#### 2164. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23426-L23472` → after: `L23410-L23416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23410-L23416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23410-L23416) · [Before (L23426-L23472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23426-L23472)

```diff
-                   return If(mm[of [13]] = of [29], mm[of [29]] = (mm[of [1]] & of [86]) + (mm[of [2]] & of [86]), mm[-of [87]] = (mm[of [1]] >> of [69]) + (mm[of [2]] >> of [69]) + (mm[of [29]] >> of [69])), mm[-of [87]] << of [69] | mm[of [29]] & of [86]
-                 }
-                 return If(mm[of [13]] = of [1], mm[of [5]] = of [1], mm[of [38]] = ""), mm[of [29]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, … [truncated]
-                   hex: function(...mm) {
-                     return mm[of [13]] = of [2], Am(function(...mm) {
-                       return mm[of [13]] = of [2], im(Vm(Dm(mm[of [1]]), mm[of [1]].length * of [11]))
-                     }(wm(mm[of [1]])))
-                   },
-                   b64: Tm,
-                   any: fm,
-                   hex_hmac: function(...mm) {
-                     return mm[of [13]] = of [29], Am(hm(wm(mm[of [1]]), wm(mm[of [2]])))
-                   },
-                   b64_hmac: Tm,
-                   any_hmac: fm
-                 }
- ... (31 more removed lines; see GitHub link above)
+                   var wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD;
+                   for (nw(zD[Uw[12]] = Uw[1], zD[Uw[22]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), zD[-Uw[106]] = new Array(Uw[107])), nw(zD[Uw[2]][zD[Uw[0]] >> Uw[5]] |= Uw[60] << Uw[102] - zD[Uw[0]] % Uw[68],  … [truncated]
+                     for (nw(wD = zD[Uw[22]][Uw[2]], pD = zD[Uw[22]][Uw[0]], sD = zD[Uw[22]][Uw[1]], KD = zD[Uw[22]][Uw[4]], rD = zD[Uw[22]][Uw[14]], LD = zD[Uw[22]][Uw[5]], cD = zD[Uw[22]][Uw[8]], gD = zD[Uw[22]][Uw[6]]), AD = Uw[2]; AD < Uw[107]; AD++) nw(AD < Uw[86] ? zD[-Uw[10 … [truncated]
+                     nw(zD[Uw[22]][Uw[2]] = QD(wD, zD[Uw[22]][Uw[2]]), zD[Uw[22]][Uw[0]] = QD(pD, zD[Uw[22]][Uw[0]]), zD[Uw[22]][Uw[1]] = QD(sD, zD[Uw[22]][Uw[1]]), zD[Uw[22]][Uw[4]] = QD(KD, zD[Uw[22]][Uw[4]]), zD[Uw[22]][Uw[14]] = QD(rD, zD[Uw[22]][Uw[14]]), zD[Uw[22]][Uw[5]] =  … [truncated]
+                   }
+                   return zD[Uw[22]]
+                 }
```

#### 2165. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23474-L23546` → after: `L23418-L23430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23418-L23430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23418-L23430) · [Before (L23474-L23546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23474-L23546)

```diff
-     function If() {
-       If = function() {}
-     }
-     If(Tf = {}, ff = ["oDe>5#![i1A[=mmI,/Zozb,1Q1Tp.>DI,bQk1)W1;", '@c8WQej+^G4^1Kug!mz7<{s"BtwH4=', 'I=x;]bRa@p!L9Eyla|vos.:9dAt_~yJy["v7zK[Na?_#eeVI_=Hp', ':A=Mp:nFaP0v{f5$|?)]x.vl.$v#vxk&H>.;F%:"H7EtVX}l[IMo]aA<BLwy8', "vbM_qbB", "4f[O~ec_k*c#;IuW|DMf>2RlqJR5W)ig]w/;", "aDlokC … [truncated]
-       If(mm[of [13]] = of [1], mm[of [5]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], mm[of [2]] = of [18], mm[-of [14]] = []);
-       try {
-         If(mm[of [2]] = Object, mm[-of [14]][of [27]]("".__proto__.constructor.name))
-       } catch (ff) {}
- ... (57 more removed lines; see GitHub link above)
+                 function QD(...DD) {
+                   return nw(DD[Uw[12]] = Uw[1], DD[Uw[22]] = (DD[Uw[2]] & Uw[108]) + (DD[Uw[0]] & Uw[108]), DD[Uw[4]] = (DD[Uw[2]] >> Uw[86]) + (DD[Uw[0]] >> Uw[86]) + (DD[Uw[22]] >> Uw[86])), DD[Uw[4]] << Uw[86] | DD[Uw[22]] & Uw[108]
+                 }
+                 return nw(DD[Uw[12]] = Uw[2], DD[-Uw[91]] = Uw[2], DD[Uw[92]] = ""), DD[Uw[105]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1 … [truncated]
+                   hex: wD,
+                   b64: sD,
+                   any: KD,
+                   hex_hmac: pD,
+                   b64_hmac: sD,
+                   any_hmac: KD
+                 }
+               }(), console.log(DD[Uw[22]]))
+             }(), Aw = [DD, {}], hw(zD(164), zD(165) + zD(166), zD(167) + zD(Uw[85]))[zD(169) + zD(Uw[50])]
```

#### 2166. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23548-L23551` → after: `L23432-L23437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23432-L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23432-L23437) · [Before (L23548-L23551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23548-L23551)

```diff
-           return mm[-of [37]]
-         }
-       }, module.exports = mm[of [5]])
-     }(), If(pf = Object[Of(110)](of [104]), Ef = void 0), (() => {
+         })), LD
+       }
+       const sD = rz(Xz[Uw[29]], DD[Uw[22]]),
+         rD = KD[Uw[109]][zD(171)](Uw[14]);
+       return rD[zD(Uw[40]) + zD(Uw[7]) + "E"](Xz[Uw[29]]), KD[Uw[109]].concat([rD, sD])
+     }, qz = (...DD) => {
```

#### 2167. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23553-L23556` → after: `L23439-L23442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23439-L23442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23439-L23442) · [Before (L23553-L23556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23553-L23556)

```diff
-         return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = function(...mm) {
-           for (If(mm[of [13]] = of [2], mm[of [5]] = '4laAibqBCEuTvp<RDw|k}.>c)[Xj$sHd3I!#(x+S8_5O0PQ"F9oU/yVf6@;,%hz~JNngm1{7=G?]*tKY^ZL:`&2MrWe', mm[of [38]] = "" + (mm[of [1]] || ""), mm[-of [92]] = mm[of [38]].length, mm[of [10]] = [], mm[of [41]] = of [1], mm[of [24]] = of [ … [truncated]
-             if (mm[of [6]] = mm[of [5]].indexOf(mm[of [38]][mm[-of [91]]]), mm[of [6]] !== -of [2])
-               if (mm[of [93]] < of [1]) mm[of [93]] = mm[of [6]];
+         return DD[Uw[12]] = Uw[0], typeof Dw[DD[Uw[2]]] === Uw[15] ? Dw[DD[Uw[2]]] = function(...DD) {
+           for (nw(DD[Uw[12]] = Uw[0], DD[Uw[0]] = 't0,;XHrGhB:K[uDjFm32n5is*1Y$~o^M!gRAO<QpL?9.P`cEv]"a/zx@UI64%SfeqNbyl|=&C>wJTdV#)(8}k{7W_+Z', DD[Uw[24]] = "" + (DD[Uw[2]] || ""), DD[-Uw[17]] = DD[Uw[24]].length, DD[-Uw[60]] = [], DD[Uw[29]] = Uw[2], DD[Uw[30]] = Uw[2], DD[Uw[3 … [truncated]
+             if (DD[Uw[63]] = DD[Uw[0]].indexOf(DD[Uw[24]][DD[Uw[10]]]), DD[Uw[63]] !== -Uw[0])
+               if (DD[Uw[38]] < Uw[2]) DD[Uw[38]] = DD[Uw[63]];
```

#### 2168. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23558` → after: `L23444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23444) · [Before (L23558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23558)

```diff
-                 If(mm[of [93]] += mm[of [6]] * of [31], mm[of [41]] |= mm[of [93]] << mm[of [24]], mm[of [24]] += (mm[of [93]] & of [33]) > of [34] ? of [35] : of [36]);
+                 nw(DD[Uw[38]] += DD[Uw[63]] * Uw[28], DD[Uw[29]] |= DD[Uw[38]] << DD[Uw[30]], DD[Uw[30]] += (DD[Uw[38]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2169. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23560-L23565` → after: `L23446-L23463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23446-L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23446-L23463) · [Before (L23560-L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23560-L23565)

```diff
-                   If(mm[of [10]].push(mm[of [41]] & of [12]), mm[of [41]] >>= of [11], mm[of [24]] -= of [11])
-                 } while (mm[of [24]] > of [7]);
-                 mm[of [93]] = -of [2]
-               } return mm[of [93]] > -of [2] && mm[of [10]].push((mm[of [41]] | mm[of [93]] << mm[of [24]]) & of [12]), Yf(mm[of [10]])
-         }(ff[mm[of [1]]]) : Tf[mm[of [1]]]
-       } [][of [13]] = of [1], mm(of [9]) + "X" in jf && function(...mm) {
+                   nw(DD[-Uw[60]].push(DD[Uw[29]] & Uw[11]), DD[Uw[29]] >>= Uw[10], DD[Uw[30]] -= Uw[10])
+                 } while (DD[Uw[30]] > Uw[6]);
+                 DD[Uw[38]] = -Uw[0]
+               } return DD[Uw[38]] > -Uw[0] && DD[-Uw[60]].push((DD[Uw[29]] | DD[Uw[38]] << DD[Uw[30]]) & Uw[11]), Iw(DD[-Uw[60]])
+         }(zw[DD[Uw[2]]]) : Dw[DD[Uw[2]]]
+       }
+       DD[Uw[12]] = Uw[0], zD(174) in Gw && function(...DD) {
+         nw(DD[Uw[12]] = Uw[2], DD[Uw[110]] = function(...DD) {
+           for (nw(DD[Uw[12]] = Uw[0], DD[Uw[0]] = Uw[2], DD[Uw[1]] = {}, DD[Uw[4]] = Uw[2], DD[Uw[9]] = Uw[2], DD[Uw[5]] = Uw[2], DD[Uw[111]] = DD[Uw[2]].length), DD[Uw[38]] = Uw[2]; DD[Uw[38]] < DD[Uw[111]]; DD[Uw[38]]++) {
+             for (nw(DD[Uw[1]] = {}, DD[Uw[4]] = Uw[2], DD[Uw[9]] = Uw[0]), DD[Uw[3]] = DD[Uw[38]] + Uw[0]; DD[Uw[3]] < DD[Uw[111]]; DD[Uw[3]]++) DD[Uw[2]][DD[Uw[38]]].x !== DD[Uw[2]][DD[Uw[3]]].x || DD[Uw[2]][DD[Uw[38]]].y !== DD[Uw[2]][DD[Uw[3]]].y ? (DD[Uw[2]][DD[Uw[38]]].y === … [truncated]
+             nw(DD[Uw[4]] += DD[Uw[9]], DD[Uw[0]] = Math.max(DD[Uw[0]], DD[Uw[4]]))
+           }
+           return DD[Uw[0]]
+         }, console.log(DD[Uw[110]]))
+       }();
+       const wD = KD[Uw[109]][zD(175)](DD[Uw[2]]),
+ ... (2 more added lines; see GitHub link above)
```

#### 2170. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23567-L23569` → after: `L23465-L23467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23465-L23467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23465-L23467) · [Before (L23567-L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23567-L23569)

```diff
-           for (If(mm[of [13]] = of [2], mm[of [5]] = '8XDqRVdrYnx4jmt0?}+7;s9&_O>/Pk*$()SK%HJCT]Uw#@oBvlizAhELa!eI6u[3W5"fMQFy2|GgN1bpZc<:,^=~`{.', mm[-of [95]] = "" + (mm[of [1]] || ""), mm[-of [94]] = mm[-of [95]].length, mm[of [10]] = [], mm[of [41]] = of [1], mm[of [24]] = of … [truncated]
-             if (mm[of [6]] = mm[of [5]].indexOf(mm[-of [95]][mm[of [3]]]), mm[of [6]] !== -of [2])
-               if (mm[of [61]] < of [1]) mm[of [61]] = mm[of [6]];
+           for (nw(DD[Uw[12]] = Uw[0], DD[Uw[22]] = 'Mo90$xinD:[&c1H{wWpK}`gRZ2f~YJT4,=S;)h!kj7>@qvmyz?/AV#3s^*Uu6lPNeB%dEX_C+8O"L|5GbIFQtr(a<].', DD[Uw[112]] = "" + (DD[Uw[2]] || ""), DD[Uw[58]] = DD[Uw[112]].length, DD[-Uw[77]] = [], DD[Uw[113]] = Uw[2], DD[Uw[8]] = Uw[2], DD[Uw … [truncated]
+             if (DD[Uw[114]] = DD[Uw[22]].indexOf(DD[Uw[112]][DD[Uw[3]]]), DD[Uw[114]] !== -Uw[0])
+               if (DD[Uw[6]] < Uw[2]) DD[Uw[6]] = DD[Uw[114]];
```

#### 2171. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23571` → after: `L23469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23469) · [Before (L23571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23571)

```diff
-                 If(mm[of [61]] += mm[of [6]] * of [31], mm[of [41]] |= mm[of [61]] << mm[of [24]], mm[of [24]] += (mm[of [61]] & of [33]) > of [34] ? of [35] : of [36]);
+                 nw(DD[Uw[6]] += DD[Uw[114]] * Uw[28], DD[Uw[113]] |= DD[Uw[6]] << DD[Uw[8]], DD[Uw[8]] += (DD[Uw[6]] & Uw[31]) > Uw[32] ? Uw[33] : Uw[34]);
```

#### 2172. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23573-L23576` → after: `L23471-L23474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23471-L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23471-L23474) · [Before (L23573-L23576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23573-L23576)

```diff
-                   If(mm[of [10]].push(mm[of [41]] & of [12]), mm[of [41]] >>= of [11], mm[of [24]] -= of [11])
-                 } while (mm[of [24]] > of [7]);
-                 mm[of [61]] = -of [2]
-               } return mm[of [61]] > -of [2] && mm[of [10]].push((mm[of [41]] | mm[of [61]] << mm[of [24]]) & of [12]), Yf(mm[of [10]])
+                   nw(DD[-Uw[77]].push(DD[Uw[113]] & Uw[11]), DD[Uw[113]] >>= Uw[10], DD[Uw[8]] -= Uw[10])
+                 } while (DD[Uw[8]] > Uw[6]);
+                 DD[Uw[6]] = -Uw[0]
+               } return DD[Uw[6]] > -Uw[0] && DD[-Uw[77]].push((DD[Uw[113]] | DD[Uw[6]] << DD[Uw[8]]) & Uw[11]), Iw(DD[-Uw[77]])
```

#### 2173. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23579-L23610` → after: `L23477-L23478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23477-L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23477-L23478) · [Before (L23579-L23610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23579-L23610)

```diff
-         function fm(...mm) {
-           return mm[of [13]] = of [2], typeof Tf[mm[of [1]]] === of [17] ? Tf[mm[of [1]]] = Tm(ff[mm[of [1]]]) : Tf[mm[of [1]]]
-         }
-         mm[of [13]] = of [1];
-         const hm = require("path"),
-           {
-             version: Am
-           } = require("../../package"),
-           {
-             version: am
-           } = require("@redacted/enterprise-plugin/package"),
-           {
-             version: xm
-           } = require("@redacted/components/package"),
-           {
-             sdkVersion: wm
- ... (16 more removed lines; see GitHub link above)
+         function LD(DD) {
+           return typeof Dw[DD] === Uw[15] ? Dw[DD] = rD(zw[DD]) : Dw[DD]
```

#### 2174. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23612-L23621` → after: `L23480-L23496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23480-L23496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23480-L23496) · [Before (L23612-L23621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23612-L23621)

```diff
-         Tm[of [13]] = of [2];
-         const hm = function(mm) {
-             var Tm;
-             return {
-               meta: {
-                 ...mm.meta,
-                 formatVersion: zT.h,
-                 variation: null !== (Tm = mm.meta.variation) && void 0 !== Tm ? Tm : null
-               },
-               initialChunks: mm.initialChunks.map((mm => ({
+         const cD = wD[LD(Uw[70])](Uw[14]),
+           gD = Kz(pD) ? KD[Uw[109]][LD(181)](Lz(pD, cD)) : cD;
+         return function(DD) {
+           var zD, wD, pD, KD, rD;
+           const LD = null === (zD = DD.meta) || void 0 === zD ? void 0 : zD.formatVersion;
+           if (!(0, Vz.j)(LD)) throw new Error(`Unsupported recording format version: ${LD}`);
+           if (!Array.isArray(DD.initialChunks) || !Array.isArray(DD.ticks)) throw new Error("Recording is missing initialChunks or ticks");
+           for (const sD of DD.ticks)
+             if (!Array.isArray(sD.structuralEvents) || !Array.isArray(sD.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
+           const cD = {
+             ...DD.meta
+           };
+           return cD.formatVersion = Xz.e, (0, sD.B)(cD.variation) && delete cD.variation, {
+             meta: cD,
+             initialChunks: DD.initialChunks.map((DD => {
+               var zD;
+ ... (1 more added lines; see GitHub link above)
```

#### 2175. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23624-L23753` → after: `L23499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23499) · [Before (L23624-L23753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23624-L23753)

```diff
-                 sharedBlockData: NT("sharedBlockData", mm.sharedBlockData)
-               }))),
-               ticks: mm.ticks.map(gT),
-               editState: mm.editState
-             }
-           }(Tm[of [1]]),
-           Am = AT(zT[of [3]]);
-         Tm[-of [98]] = of [18];
-         try {
-           Tm[-of [98]] = Am[mm(of [66])](hm)
-         } catch (Rf) {
-           function im(mm) {
-             var Tm, fm, hm, Am, am, xm, wm;
-             for (If(Tm = "" + (mm || ""), fm = Tm.length, hm = [], Am = of [1], am = of [1], xm = -of [2]), wm = of [1]; wm < fm; wm++) {
-               var Dm = 'vMDacLWjQVRPKT"$e`FGk}@_[(:5=Ny1AJ>%zw^u4U2{dZ7B;fsOq+x*lm0).&|,H#Eg8<IXhS]t/nb?39o6YiCr~!p'.indexOf(Tm[wm]);
-               if (Dm !== -of [2])
- ... (114 more removed lines; see GitHub link above)
+                 sharedBlockData: null !== (zD = jz("sharedBlockData", DD.sharedBlockData)) && void 0 !== zD ? zD : []
```

#### 2176. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23756-L23760` → after: `L23507-L23511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23507-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23507-L23511) · [Before (L23756-L23760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23756-L23760)

```diff
-           }(AT(hm)[wm(165)](im))
-         }
-         throw new zT[of [30]](hm)
-       })
-     })()
+           }
+         }(pz(pD)[LD(182)](gD))
+       }
+       throw new Xz[Uw[38]](pD)
+     })
```

#### 2177. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23762` → after: `L23513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23513) · [Before (L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23762)

```diff
-   37080: (mm, Tm, fm) => {
+   36949: (DD, zD, wD) => {
```

#### 2178. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23764-L23773` → after: `L23515-L23524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23515-L23524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23515-L23524) · [Before (L23764-L23773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23764-L23773)

```diff
-       d: () => xm,
-       h: () => Am,
-       i: () => am,
-       l: () => pm,
-       n: () => Em,
-       p: () => im,
-       q: () => om,
-       u: () => Dm,
-       v: () => Rm,
-       y: () => wm
+       c: () => rD,
+       e: () => sD,
+       g: () => KD,
+       k: () => AD,
+       o: () => UD,
+       s: () => gD,
+       w: () => fD,
+       x: () => cD,
+       y: () => RD,
+       z: () => LD
```

#### 2179. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23775` → after: `L23526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23526) · [Before (L23775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23775)

```diff
-     var hm = fm(37084);
+     var pD = wD(36956);
```

#### 2180. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23779` → after: `L23530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23530) · [Before (L23779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23779)

```diff
-         super(`Unsupported recording format: header ${null!==mm&&void 0!==mm?mm:"missing"}, reading v${hm.b.join(", v")}`), this.older = void 0, this.older = (0, hm.c)(mm)
+         super(`Unsupported recording format: header ${null!==DD&&void 0!==DD?DD:"missing"}, reading v${pD.e.join(", v")}`), this.older = void 0, this.older = (0, pD.f)(DD)
```

#### 2181. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23787` → after: `L23538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23538) · [Before (L23787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23787)

```diff
-       pm = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
+       AD = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
```

#### 2182. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23791` → after: `L23542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23542) · [Before (L23791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23791)

```diff
-   37076: (mm, Tm, fm) => {
+   36940: (DD, zD, wD) => {
```

#### 2183. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23794-L23796` → after: `L23545-L23547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23545-L23547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23545-L23547) · [Before (L23794-L23796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23794-L23796)

```diff
-       f: () => Om,
-       h: () => Dm,
-       k: () => xm,
+       g: () => ID,
+       j: () => cD,
+       l: () => rD,
```

#### 2184. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23798` → after: `L23549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23549) · [Before (L23798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23798)

```diff
-       o: () => im
+       p: () => gD
```

#### 2185. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23800-L23801` → after: `L23551-L23552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23551-L23552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23551-L23552) · [Before (L23800-L23801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23800-L23801)

```diff
-     var hm = fm(354),
-       Am = fm(31);
+     var pD = wD(351),
+       sD = wD(25);
```

#### 2186. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23804` → after: `L23555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23555) · [Before (L23804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23804)

```diff
-       return null === mm || void 0 === mm ? null : "string" === typeof mm ? mm : null
+       return null === DD || void 0 === DD ? null : "string" === typeof DD ? DD : null
```

#### 2187. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23816` → after: `L23567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23567) · [Before (L23816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23816)

```diff
-           Kh: fm,
+           np: wD,
```

#### 2188. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23828` → after: `L23579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23579) · [Before (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23828)

```diff
-         Tm[am.Kh] || (Tm[am.Kh] = {}), Tm[am.Kh][am.name] = {
+         zD[KD.np] || (zD[KD.np] = {}), zD[KD.np][KD.name] = {
```

#### 2189. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23831-L23832` → after: `L23582-L23583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23582-L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23582-L23583) · [Before (L23831-L23832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23831-L23832)

```diff
-           displayName: null !== (fm = am.displayName) && void 0 !== fm ? fm : null,
-           endTick: null !== (hm = am.endTick) && void 0 !== hm ? hm : null,
+           displayName: null !== (wD = KD.displayName) && void 0 !== wD ? wD : null,
+           endTick: null !== (pD = KD.endTick) && void 0 !== pD ? pD : null,
```

#### 2190. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23849` → after: `L23600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23600) · [Before (L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23849)

```diff
-         }(0, hm.vc)(am) || (fm[Am] = am)
+         }(0, pD.Ac)(KD) || (wD[sD] = KD)
```

#### 2191. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23869` → after: `L23620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23620) · [Before (L23869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23869)

```diff
-           if ((0, hm.vc)(Dm)) continue;
+           if ((0, pD.Ac)(cD)) continue;
```

#### 2192. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23879` → after: `L23630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23630) · [Before (L23879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23879)

```diff
-               endTime: void 0 !== Tm.duration && null !== Tm.duration ? (null !== (xm = Tm.appliedAt) && void 0 !== xm ? xm : fm) + Tm.duration : null
+               endTime: void 0 !== zD.duration && null !== zD.duration ? (null !== (rD = zD.appliedAt) && void 0 !== rD ? rD : wD) + zD.duration : null
```

#### 2193. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23889` → after: `L23640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23640) · [Before (L23889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23889)

```diff
-         fm && (delete fm[Tm], (0, hm.vc)(fm) && delete this.tracked[mm])
+         wD && (delete wD[zD], (0, pD.Ac)(wD) && delete this.tracked[DD])
```

#### 2194. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23893` → after: `L23644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23644) · [Before (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23893)

```diff
-         0 !== mm.duration ? this.upsert(mm.Kh, mm.name, {
+         0 !== DD.duration ? this.upsert(DD.np, DD.name, {
```

#### 2195. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23899` → after: `L23650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23650) · [Before (L23899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23899)

```diff
-         }) : this.remove(mm.Kh, mm.name)
+         }) : this.remove(DD.np, DD.name)
```

#### 2196. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23929` → after: `L23680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23680) · [Before (L23929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23929)

```diff
-           }(0, hm.vc)(wm) || (Am[xm] = wm)
+           }(0, pD.Ac)(LD) || (sD[rD] = LD)
```

#### 2197. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23937-L23938` → after: `L23688-L23689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23688-L23689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23688-L23689) · [Before (L23937-L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23937-L23938)

```diff
-         Am.j.gp("EffectUpdate", {
-           Kh: mm,
+         sD.l.KG("EffectUpdate", {
+           np: DD,
```

#### 2198. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23947-L23948` → after: `L23698-L23699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23698-L23699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23698-L23699) · [Before (L23947-L23948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23947-L23948)

```diff
-         Am.j.gp("RemoveEffect", {
-           Kh: mm,
+         sD.l.KG("RemoveEffect", {
+           np: DD,
```

#### 2199. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23974` → after: `L23725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23725) · [Before (L23974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23974)

```diff
-               displayName: null !== (im = qm.displayName) && void 0 !== im ? im : void 0,
+               displayName: null !== (gD = GD.displayName) && void 0 !== gD ? gD : void 0,
```

#### 2200. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23986` → after: `L23737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23737) · [Before (L23986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23986)

```diff
-   37062: (mm, Tm, fm) => {
+   36931: (DD, zD, wD) => {
```

#### 2201. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23989` → after: `L23740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23740) · [Before (L23989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23989)

```diff
-       d: () => im,
+       e: () => gD,
```

#### 2202. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23991-L23992` → after: `L23742-L23743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23742-L23743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23742-L23743) · [Before (L23991-L23992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23991-L23992)

```diff
-       i: () => wm,
-       j: () => pm
+       j: () => LD,
+       n: () => AD
```

#### 2203. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23994-L23996` → after: `L23745-L23747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23745-L23747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23745-L23747) · [Before (L23994-L23996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L23994-L23996)

```diff
-     var hm = fm(37056),
-       Am = fm(37069),
-       am = fm(315);
+     var pD = wD(36926),
+       sD = wD(36934),
+       KD = wD(311);
```

#### 2204. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24000` → after: `L23751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23751) · [Before (L24000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24000)

```diff
-         [hm.f]: hm.c
+         [pD.h]: pD.d
```

#### 2205. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24005` → after: `L23756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23756) · [Before (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24005)

```diff
-       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, am.c)()
+       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, KD.e)()
```

#### 2206. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24035` → after: `L23786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23786) · [Before (L24035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24035)

```diff
-           suggestedName: (0, hm.j)(),
+           suggestedName: (0, pD.o)(),
```

#### 2207. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24046` → after: `L23797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23797) · [Before (L24046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24046)

```diff
-         type: hm.f
+         type: pD.h
```

#### 2208. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24051` → after: `L23802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23802) · [Before (L24051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24051)

```diff
-       return (0, hm.i)((0, Am.f)(mm))
+       return (0, pD.k)((0, sD.h)(DD))
```

#### 2209. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24054` → after: `L23805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23805) · [Before (L24054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24054)

```diff
-   36531: (mm, Tm, fm) => {
+   36447: (DD, zD, wD) => {
```

#### 2210. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24056` → after: `L23807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23807) · [Before (L24056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24056)

```diff
-       c: () => pm
+       d: () => AD
```

#### 2211. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24058-L24063` → after: `L23809-L23814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23809-L23814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23809-L23814) · [Before (L24058-L24063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24058-L24063)

```diff
-     var hm = fm(23),
-       Am = fm(105),
-       am = fm(37),
-       xm = fm(736),
-       wm = fm(3461),
-       Dm = fm(6609);
+     var pD = wD(20),
+       sD = wD(103),
+       KD = wD(35),
+       rD = wD(694),
+       LD = wD(3462),
+       cD = wD(6693);
```

#### 2212. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24072` → after: `L23823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23823) · [Before (L24072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24072)

```diff
-       (0, wm.j)(mm) && !(0, wm.h)(mm) && (Tm = am.g.getItem(im), pm = Date.now(), "number" !== typeof Tm || pm < Tm || pm - Tm >= Rm) && (0, xm.b)((() => {
+       (0, LD.j)(DD) && !(0, LD.i)(DD) && (zD = KD.h.getItem(gD), AD = Date.now(), "number" !== typeof zD || AD < zD || AD - zD >= RD) && (0, rD.c)((() => {
```

#### 2213. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24074-L24075` → after: `L23825-L23826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23825-L23826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23825-L23826) · [Before (L24074-L24075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24074-L24075)

```diff
-           if ("landingPage" !== hm.c.get("gameState")) return;
-           const mm = await (0, Dm.e)();
+           if ("landingPage" !== pD.e.get("gameState")) return;
+           const DD = await (0, cD.c)();
```

#### 2214. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24077` → after: `L23828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23828) · [Before (L24077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24077)

```diff
-           am.g.setItem(im, Date.now());
+           KD.h.setItem(gD, Date.now());
```

#### 2215. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24080-L24081` → after: `L23831-L23832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23831-L23832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23831-L23832) · [Before (L24080-L24081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24080-L24081)

```diff
-           } = await Promise.all([fm.e(77), fm.e(133), fm.e(130)]).then((() => fm(41341)));
-           await Tm(mm, mm.listing) || am.g.removeItem(im)
+           } = await Promise.all([wD.e(77), wD.e(133), wD.e(130)]).then((() => wD(41198)));
+           await zD(DD, DD.listing) || KD.h.removeItem(gD)
```

#### 2216. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24088` → after: `L23839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23839) · [Before (L24088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24088)

```diff
-   6609: (mm, Tm, fm) => {
+   6693: (DD, zD, wD) => {
```

#### 2217. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24090-L24091` → after: `L23841-L23842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23841-L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23841-L23842) · [Before (L24090-L24091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24090-L24091)

```diff
-       c: () => Am,
-       e: () => am
+       b: () => sD,
+       c: () => KD
```

#### 2218. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24093` → after: `L23844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23844) · [Before (L24093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24093)

```diff
-     var hm = fm(37);
+     var pD = wD(35);
```

#### 2219. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24098` → after: `L23849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23849) · [Before (L24098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24098)

```diff
-       return null !== (mm = await hm.e.getItem(Am, Tm)) && void 0 !== mm ? mm : null
+       return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
```

#### 2220. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24101` → after: `L23852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23852) · [Before (L24101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24101)

```diff
-   36578: (mm, Tm, fm) => {
+   36491: (DD, zD, wD) => {
```

#### 2221. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24103` → after: `L23854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23854) · [Before (L24103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24103)

```diff
-       b: () => Dm
+       c: () => cD
```

#### 2222. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24105-L24109` → after: `L23856-L23860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23856-L23860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23856-L23860) · [Before (L24105-L24109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24105-L24109)

```diff
-     var hm = fm(339),
-       Am = fm(23),
-       am = fm(36582),
-       xm = fm(1635),
-       wm = fm(1957);
+     var pD = wD(338),
+       sD = wD(20),
+       KD = wD(36495),
+       rD = wD(1648),
+       LD = wD(1981);
```

#### 2223. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24113` → after: `L23864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23864) · [Before (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24113)

```diff
-       if (!Am.c.get("isKeydownEnabled") || mm.repeat) return;
+       if (!sD.e.get("isKeydownEnabled") || DD.repeat) return;
```

#### 2224. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24115-L24116` → after: `L23866-L23867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23866-L23867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23866-L23867) · [Before (L24115-L24116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24115-L24116)

```diff
-       "Escape" === mm.key ? (0, xm.f)(mm) : null !== (fm = wm.r.OpenSettings) && void 0 !== fm && fm.includes(Rm) ? (0, xm.t)(mm, hm.n.SETTINGS) : null !== (Dm = wm.r.OpenCharacterCustomization) && void 0 !== Dm && Dm.includes(Rm) ? (0, am.d)() || (0, xm.t)(mm, hm.n.CUSTOMISATION … [truncated]
-         showDebugOverlay: !Am.c.get("showDebugOverlay")
+       "Escape" === DD.key ? (0, rD.l)(DD) : null !== (wD = LD.u.OpenSettings) && void 0 !== wD && wD.includes(RD) ? (0, rD.w)(DD, pD.l.SETTINGS) : null !== (cD = LD.u.OpenCharacterCustomization) && void 0 !== cD && cD.includes(RD) ? (0, KD.d)() || (0, rD.w)(DD, pD.l.CUSTOMISATION … [truncated]
+         showDebugOverlay: !sD.e.get("showDebugOverlay")
```

#### 2225. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24120` → after: `L23871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23871) · [Before (L24120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24120)

```diff
-   8824: (mm, Tm, fm) => {
+   8883: (DD, zD, wD) => {
```

#### 2226. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24125-L24127` → after: `L23876-L23878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23876-L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23876-L23878) · [Before (L24125-L24127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24125-L24127)

```diff
-     var hm = fm(23),
-       Am = fm(1321),
-       am = fm(105);
+     var pD = wD(20),
+       sD = wD(1332),
+       KD = wD(103);
```

#### 2227. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24182` → after: `L23933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23933) · [Before (L24182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24182)

```diff
-           Am = null !== Tm && void 0 !== Tm ? Tm : hm.pattern;
+           sD = null !== zD && void 0 !== zD ? zD : pD.pattern;
```

#### 2228. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24185` → after: `L23936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23936) · [Before (L24185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24185)

```diff
-         am - this.lastAnyAt < 40 && hm.priority < this.playingPriority || am - (null !== (fm = this.lastAt.get(mm)) && void 0 !== fm ? fm : -1 / 0) < hm.minGapMs || am < this.playingUntil && hm.priority < this.playingPriority || (this.lastAt.set(mm, am), this.lastAnyAt = am, this … [truncated]
+         KD - this.lastAnyAt < 40 && pD.priority < this.playingPriority || KD - (null !== (wD = this.lastAt.get(DD)) && void 0 !== wD ? wD : -1 / 0) < pD.minGapMs || KD < this.playingUntil && pD.priority < this.playingPriority || (this.lastAt.set(DD, KD), this.lastAnyAt = KD, this … [truncated]
```

#### 2229. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24192` → after: `L23943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23943) · [Before (L24192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24192)

```diff
-       enabled: () => wm() && hm.c.get("isTouchScreen") && hm.c.get("clientEscMenuOptions").vibration && !(0, Am.f)()
+       enabled: () => LD() && pD.e.get("isTouchScreen") && pD.e.get("clientEscMenuOptions").vibration && !(0, sD.g)()
```

#### 2230. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24195` → after: `L23946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23946) · [Before (L24195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24195)

```diff
-   36536: (mm, Tm, fm) => {
+   36455: (DD, zD, wD) => {
```

#### 2231. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24199-L24201` → after: `L23950-L23952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23950-L23952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23950-L23952) · [Before (L24199-L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24199-L24201)

```diff
-     var hm = fm(653),
-       Am = fm(1238),
-       am = fm(168);
+     var pD = wD(619),
+       sD = wD(1234),
+       KD = wD(157);
```

#### 2232. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24205` → after: `L23956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23956) · [Before (L24205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24205)

```diff
-       return `${xm}${mm}`
+       return `${rD}${DD}`
```

#### 2233. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24215-L24229` → after: `L23966-L23980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23966-L23980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L23966-L23980) · [Before (L24215-L24229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24215-L24229)

```diff
-     var Rm = fm(1254),
-       pm = fm(1235),
-       Em = fm(31),
-       om = fm(1223),
-       Om = fm(1763),
-       Ym = fm(1796),
-       qm = fm(2955),
-       jm = fm(1309),
-       Vm = fm(1321),
-       Im = fm(1494),
-       Km = fm(1214),
-       Qm = fm(36545),
-       nm = fm(37),
-       Jm = fm(135),
-       cm = fm(36573);
+     var RD = wD(1251),
+       AD = wD(1232),
+       UD = wD(25),
+       fD = wD(1217),
+       ID = wD(1775),
+       BD = wD(1806),
+       GD = wD(2949),
+       hD = wD(1324),
+       nD = wD(1332),
+       MD = wD(1495),
+       OD = wD(1211),
+       JD = wD(36463),
+       ED = wD(35),
+       QD = wD(128),
+       XD = wD(36486);
```

#### 2234. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24259` → after: `L24010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24010) · [Before (L24259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24259)

```diff
-         this.deps.enabled && this.deps.IO("game_server_route", "cf_join_left", mm)
+         this.deps.enabled && this.deps.sI("game_server_route", "cf_join_left", DD)
```

#### 2235. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24265` → after: `L24016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24016) · [Before (L24265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24265)

```diff
-         if (fm) this.deps.IO("game_server_route", "cf_join", 0);
+         if (wD) this.deps.sI("game_server_route", "cf_join", 0);
```

#### 2236. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24278-L24279` → after: `L24029-L24030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24029-L24030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24029-L24030) · [Before (L24278-L24279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24278-L24279)

```diff
-         if ("refused" === hm.at) return void this.deps.IO("game_server_route", "cf_join_refused", hm.code);
-         if (this.deps.IO("game_server_route", `cf_join_failed:${hm.at}`, hm.code), void 0 === fm) return;
+         if ("refused" === pD.at) return void this.deps.sI("game_server_route", "cf_join_refused", pD.code);
+         if (this.deps.sI("game_server_route", `cf_join_failed:${pD.at}`, pD.code), void 0 === wD) return;
```

#### 2237. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24297` → after: `L24048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24048) · [Before (L24297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24297)

```diff
-         return this.deps.IO("game_server_route", Tm, fm), "blocked" === Tm && (this.store({
+         return this.deps.sI("game_server_route", zD, wD), "blocked" === zD && (this.store({
```

#### 2238. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24325` → after: `L24076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24076) · [Before (L24325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24325)

```diff
-         "ours" === (null === hm || void 0 === hm ? void 0 : hm.answer) ? this.deps.IO("game_server_rtt", Tm, hm.ms): this.deps.IO("game_server_rtt", fm, 0)
+         "ours" === (null === pD || void 0 === pD ? void 0 : pD.answer) ? this.deps.sI("game_server_rtt", zD, pD.ms): this.deps.sI("game_server_rtt", wD, 0)
```

#### 2239. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24328` → after: `L24079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24079) · [Before (L24328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24328)

```diff
-         return this.deps.probe(`https://${mm}/version`, 8e3)
+         return this.deps.probe(`https://${DD}/version`, 8e3)
```

#### 2240. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24356` → after: `L24107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24107) · [Before (L24356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24356)

```diff
-       storage: nm.g,
+       storage: ED.h,
```

#### 2241. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24368` → after: `L24119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24119) · [Before (L24368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24368)

```diff
-         return null !== hm && void 0 !== hm ? hm : {
+         return null !== pD && void 0 !== pD ? pD : {
```

#### 2242. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24373-L24374` → after: `L24124-L24125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24124-L24125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24124-L24125) · [Before (L24373-L24374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24373-L24374)

```diff
-       IO: Om.r,
-       enabled: !(0, Jm.c)(),
+       sI: ID.y,
+       enabled: !(0, QD.d)(),
```

#### 2243. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24380` → after: `L24131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24131) · [Before (L24380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24380)

```diff
-       seatLegs: cm.i
+       seatLegs: XD.g
```

#### 2244. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24386` → after: `L24137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24137) · [Before (L24386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24386)

```diff
-         if ((0, hm.H)(xm)) {
+         if ((0, pD.B)(rD)) {
```

#### 2245. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24389` → after: `L24140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24140) · [Before (L24389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24389)

```diff
-           if (im.aborted || qm.e.matchmakingEnded(mm.isError() ? null : performance.now()), mm.isError()) {
+           if (gD.aborted || GD.g.matchmakingEnded(DD.isError() ? null : performance.now()), DD.isError()) {
```

#### 2246. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24395` → after: `L24146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24146) · [Before (L24395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24395)

```diff
-           qm.e.skipPlayWait();
+           GD.g.skipPlayWait();
```

#### 2247. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24401` → after: `L24152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24152) · [Before (L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24401)

```diff
-             lobbyName: Tm instanceof Am.e ? Tm.getLobbyName() : Tm
+             lobbyName: zD instanceof sD.f ? zD.getLobbyName() : zD
```

#### 2248. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24405-L24406` → after: `L24156-L24157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24156-L24157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24156-L24157) · [Before (L24405-L24406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24405-L24406)

```diff
-         console.log(`Connecting to ${pm.gameNameWithVariation} in lobby ${pm.lobbyName} on game server ${pm.endpoint}`), Em.j.gp("matchmakeAndPlayStepCompleted", {
-           step: am.k.REQUEST_TO_MATCHMAKING,
+         console.log(`Connecting to ${AD.gameNameWithVariation} in lobby ${AD.lobbyName} on game server ${AD.endpoint}`), UD.l.KG("matchmakeAndPlayStepCompleted", {
+           step: KD.n.REQUEST_TO_MATCHMAKING,
```

#### 2249. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24408` → after: `L24159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24159) · [Before (L24408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24408)

```diff
-         }), (0, Om.k)(), Ym.c.markGameLoadStart(), (0, Vm.r)({
+         }), (0, ID.l)(), BD.c.markGameLoadStart(), (0, nD.q)({
```

#### 2250. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24412` → after: `L24163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24163) · [Before (L24412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24412)

```diff
-         }), Em.j.gp("loadingScreenState", "loadingPage:loadingGame");
+         }), UD.l.KG("loadingScreenState", "loadingPage:loadingGame");
```

#### 2251. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24422` → after: `L24173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24173) · [Before (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24422)

```diff
-               (0, Vm.r)({
+               (0, nD.q)({
```

#### 2252. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24431` → after: `L24182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24182) · [Before (L24431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24431)

```diff
-         }, Km = !(0, hm.H)(xm), Qm = Tm => mm({
+         }, OD = !(0, pD.B)(rD), JD = zD => DD({
```

#### 2253. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24441` → after: `L24192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24192) · [Before (L24441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24441)

```diff
-           const hm = new om.b(fm),
+           const pD = new fD.c(wD),
```

#### 2254. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24460` → after: `L24211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24211) · [Before (L24460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24460)

```diff
-         let zm = null !== Jm && void 0 !== Jm ? Jm : cm.blockedAt,
+         let VD = null !== QD && void 0 !== QD ? QD : XD.blockedAt,
```

#### 2255. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24464` → after: `L24215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24215) · [Before (L24464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24464)

```diff
-           if (bm || (zm ??= performance.now(), Em.j.gp("gameServerRouteSwitched")), im.aborted) return Sm(zm), em();
+           if (xD || (VD ??= performance.now(), UD.l.KG("gameServerRouteSwitched")), gD.aborted) return TD(VD), bD();
```

#### 2256. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24471` → after: `L24222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24222) · [Before (L24471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24471)

```diff
-         return Zm.isError() ? (!0 === Zm.asError().debugResult.Af && im.aborted && Sm(zm), Zm.asError().forward()) : (km.afterJoined(pm.endpoint), (0, jm.R)(), window.gtag ? window.gtag("event", "conversion", {
+         return PD.isError() ? (!0 === PD.asError().debugResult.sw && gD.aborted && TD(VD), PD.asError().forward()) : (CD.afterJoined(AD.endpoint), (0, hD.S)(), window.gtag ? window.gtag("event", "conversion", {
```

#### 2257. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24485` → after: `L24236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24236) · [Before (L24485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24485)

```diff
-       return Rm.e.errorWithCode("Left the game while it loaded", am.k.REQUEST_TO_MATCHMAKING, {
+       return RD.e.errorWithCode("Left the game while it loaded", KD.n.REQUEST_TO_MATCHMAKING, {
```

#### 2258. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24487` → after: `L24238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24238) · [Before (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24487)

```diff
-         Af: !0
+         sw: !0
```

#### 2259. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24491-L24492` → after: `L24242-L24243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24242-L24243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24242-L24243) · [Before (L24491-L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24491-L24492)

```diff
-       return (0, hm.H)(mm) || mm instanceof Am.e || !(mm.length > pm.H) ? await Im.d.matchmakePlayer(fm, mm, Tm, (0, Qm.c)()).then((mm => {
-         if (!1 === mm.succeeded) return Rm.e.errorWithCode(mm.failReason, am.k.REQUEST_TO_MATCHMAKING, {
+       return (0, pD.B)(DD) || DD instanceof sD.f || !(DD.length > AD.L) ? await MD.d.matchmakePlayer(wD, DD, zD, (0, JD.b)()).then((DD => {
+         if (!1 === DD.succeeded) return RD.e.errorWithCode(DD.failReason, KD.n.REQUEST_TO_MATCHMAKING, {
```

#### 2260. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24505` → after: `L24256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24256) · [Before (L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24505)

```diff
-       })).catch((mm => (console.error("Bad response from the matchmaking server:", mm), Rm.e.errorWithCode(mm.toString(), am.k.REQUEST_TO_MATCHMAKING, {
+       })).catch((DD => (console.error("Bad response from the matchmaking server:", DD), RD.e.errorWithCode(DD.toString(), KD.n.REQUEST_TO_MATCHMAKING, {
```

#### 2261. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24508` → after: `L24259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24259) · [Before (L24508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24508)

```diff
-       })))) : (console.error("Invalid lobby ID:", mm), Rm.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", am.k.REQUEST_TO_MATCHMAKING, {
+       })))) : (console.error("Invalid lobby ID:", DD), RD.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", KD.n.REQUEST_TO_MATCHMAKING, {
```

#### 2262. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24515` → after: `L24266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24266) · [Before (L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24515)

```diff
-       return Tm.isError() ? Rm.e.errorWithCode(Tm.asError().message, am.k.CONNECT_TO_GAME_SERVER, {
+       return zD.isError() ? RD.e.errorWithCode(zD.asError().message, KD.n.CONNECT_TO_GAME_SERVER, {
```

#### 2263. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24522` → after: `L24273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24273) · [Before (L24522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24522)

```diff
-       (0, Vm.k)("/")
+       (0, nD.l)("/")
```

#### 2264. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24525` → after: `L24276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24276) · [Before (L24525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24525)

```diff
-   34203: (mm, Tm, fm) => {
+   34139: (DD, zD, wD) => {
```

#### 2265. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24527-L24529` → after: `L24278-L24280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24278-L24280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24278-L24280) · [Before (L24527-L24529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24527-L24529)

```diff
-       b: () => im,
-       d: () => pm,
-       h: () => Rm
+       e: () => gD,
+       h: () => AD,
+       k: () => RD
```

#### 2266. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24531-L24534` → after: `L24282-L24285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24282-L24285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24282-L24285) · [Before (L24531-L24534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24531-L24534)

```diff
-     var hm = fm(23),
-       Am = fm(1681),
-       am = fm(37),
-       xm = fm(3646);
+     var pD = wD(20),
+       sD = wD(1702),
+       KD = wD(35),
+       rD = wD(3670);
```

#### 2267. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24539` → after: `L24290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24290) · [Before (L24539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24539)

```diff
-       const Tm = null !== (mm = am.g.getItem(Dm)) && void 0 !== mm ? mm : 0;
+       const zD = null !== (DD = KD.h.getItem(cD)) && void 0 !== DD ? DD : 0;
```

#### 2268. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24544` → after: `L24295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24295) · [Before (L24544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24544)

```diff
-       am.g.setItem(Dm, Date.now())
+       KD.h.setItem(cD, Date.now())
```

#### 2269. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24547-L24548` → after: `L24298-L24299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24298-L24299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24298-L24299) · [Before (L24547-L24548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24547-L24548)

```diff
-       return await Am.e.ready, Am.e.supports("notifications") ? hm.c.get("mobilePushNotificationsCanAsk") ? async () => {
-         Am.e.request("notifications.requestPermission", {}).then((mm => {
+       return await sD.c.ready, sD.c.supports("notifications") ? pD.e.get("mobilePushNotificationsCanAsk") ? async () => {
+         sD.c.request("notifications.requestPermission", {}).then((DD => {
```

#### 2270. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24552` → after: `L24303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24303) · [Before (L24552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24552)

```diff
-           hm.c.set({
+           pD.e.set({
```

#### 2271. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24558` → after: `L24309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24309) · [Before (L24558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24558)

```diff
-       }: null: await xm.e.canAsk() ? () => xm.e.requestPermission() : null
+       }: null: await rD.c.canAsk() ? () => rD.c.requestPermission() : null
```

#### 2272. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24561` → after: `L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24312) · [Before (L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24561)

```diff
-   36549: (mm, Tm, fm) => {
+   36467: (DD, zD, wD) => {
```

#### 2273. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24563` → after: `L24314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24314) · [Before (L24563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24563)

```diff
-       d: () => Em,
+       b: () => UD,
```

#### 2274. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24566` → after: `L24317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24317) · [Before (L24566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24566)

```diff
-       l: () => pm
+       m: () => AD
```

#### 2275. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24568-L24571` → after: `L24319-L24322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24319-L24322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24319-L24322) · [Before (L24568-L24571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24568-L24571)

```diff
-     var hm = fm(354),
-       Am = fm(685),
-       am = fm(695),
-       xm = fm(37);
+     var pD = wD(351),
+       sD = wD(648),
+       KD = wD(663),
+       rD = wD(35);
```

#### 2276. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24582` → after: `L24333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24333) · [Before (L24582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24582)

```diff
-       (0, am.i)(mm, wm)
+       (0, KD.j)(DD, LD)
```

#### 2277. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24591` → after: `L24342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24342) · [Before (L24591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24591)

```diff
-       return (0, am.d)(mm, wm)
+       return (0, KD.e)(DD, LD)
```

#### 2278. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24596` → after: `L24347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24347) · [Before (L24596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24596)

```diff
-       const fm = (0, am.d)(Tm, wm),
+       const wD = (0, KD.e)(zD, LD),
```

#### 2279. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24605-L24609` → after: `L24356-L24360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24356-L24360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24356-L24360) · [Before (L24605-L24609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24605-L24609)

```diff
-       return Em = null !== fm && null !== Rm && (0, am.f)(Tm, wm) && function(mm, Tm, fm) {
-           const Am = (0, hm.Pb)(mm),
-             am = (0, hm.Pb)(Tm),
-             xm = (0, hm.Jb)(mm),
-             wm = (0, hm.Jb)(Tm);
+       return UD = null !== wD && null !== RD && (0, KD.h)(zD, LD) && function(DD, zD, wD) {
+           const sD = (0, pD.Tb)(DD),
+             KD = (0, pD.Tb)(zD),
+             rD = (0, pD.Ob)(DD),
+             LD = (0, pD.Ob)(zD);
```

#### 2280. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24611` → after: `L24362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24362) · [Before (L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24611)

```diff
-         }(Rm, mm, pm) ? fm : (0, Am.b)(), (0, am.k)(Tm, wm, Em), Tm.setItem(Dm, mm),
+         }(RD, DD, AD) ? wD : (0, sD.e)(), (0, KD.l)(zD, LD, UD), zD.setItem(cD, DD),
```

#### 2281. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24617` → after: `L24368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24368) · [Before (L24617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24617)

```diff
-   36545: (mm, Tm, fm) => {
+   36463: (DD, zD, wD) => {
```

#### 2282. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24619` → after: `L24370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24370) · [Before (L24619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24619)

```diff
-       c: () => Qm,
+       b: () => JD,
```

#### 2283. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24622-L24639` → after: `L24373-L24390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24373-L24390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24373-L24390) · [Before (L24622-L24639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24622-L24639)

```diff
-     var hm = fm(1041),
-       Am = fm(208),
-       am = fm(347),
-       xm = fm(658),
-       wm = fm(354),
-       Dm = fm(1047),
-       im = fm(675),
-       Rm = fm(713),
-       pm = fm(4460),
-       Em = fm(105),
-       om = fm(135),
-       Om = fm(1713),
-       Ym = fm(115),
-       qm = fm(36549),
-       jm = fm(37),
-       Vm = fm(690),
- ... (2 more removed lines; see GitHub link above)
+     var pD = wD(1008),
+       sD = wD(212),
+       KD = wD(348),
+       rD = wD(625),
+       LD = wD(351),
+       cD = wD(1017),
+       gD = wD(638),
+       RD = wD(676),
+       AD = wD(4540),
+       UD = wD(103),
+       fD = wD(128),
+       ID = wD(1737),
+       BD = wD(116),
+       GD = wD(36467),
+       hD = wD(35),
+       nD = wD(655),
+ ... (2 more added lines; see GitHub link above)
```

#### 2284. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24643` → after: `L24394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24394) · [Before (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24643)

```diff
-       return [...null !== (mm = navigator.languages) && void 0 !== mm ? mm : [null !== (Tm = navigator.language) && void 0 !== Tm ? Tm : "none"], "en-gb"]
+       return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (zD = navigator.language) && void 0 !== zD ? zD : "none"], "en-gb"]
```

#### 2285. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24647-L24648` → after: `L24398-L24399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24398-L24399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24398-L24399) · [Before (L24647-L24648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24647-L24648)

```diff
-       const cm = (0, hm.k)(Tm) ? (0, hm.n)(Tm) : null,
-         zm = mm.isLoggedIn() && void 0 !== (0, Am.c)(am.i, om.q) ? (0, Im.q)() : null,
+       const XD = (0, pD.l)(zD) ? (0, pD.o)(zD) : null,
+         VD = DD.isLoggedIn() && void 0 !== (0, sD.d)(KD.k, fD.v) ? (0, MD.u)() : null,
```

#### 2286. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24654-L24655` → after: `L24405-L24406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24405-L24406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24405-L24406) · [Before (L24654-L24655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24654-L24655)

```diff
-             joinDiscord: !!jm.g.getItem("DiscordPressed"),
-             newGo: pm.d,
+             joinDiscord: !!hD.h.getItem("DiscordPressed"),
+             newGo: AD.b,
```

#### 2287. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24666` → after: `L24417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24417) · [Before (L24666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24666)

```diff
-             deviceType: (0, Ym.d)()
+             deviceType: (0, BD.e)()
```

#### 2288. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24671-L24673` → after: `L24422-L24424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24422-L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24422-L24424) · [Before (L24671-L24673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24671-L24673)

```diff
-           version: xm.d,
-           siteUsed: om.q,
-           subsiteUsed: om.w,
+           version: rD.e,
+           siteUsed: fD.v,
+           subsiteUsed: fD.D,
```

#### 2289. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24675-L24679` → after: `L24426-L24430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24426-L24430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24426-L24430) · [Before (L24675-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24675-L24679)

```diff
-           visitSessionId: (0, Vm.f)(),
-           clientReason: im.s.reason,
-           budgetBasis: (0, Km.g)(),
-           ...null !== Rm.k && {
-             diagClaim: Rm.k.claimId
+           visitSessionId: (0, nD.d)(),
+           clientReason: gD.n.reason,
+           budgetBasis: (0, OD.i)(),
+           ...null !== RD.q && {
+             diagClaim: RD.q.claimId
```

#### 2290. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24685-L24686` → after: `L24436-L24437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24436-L24437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24436-L24437) · [Before (L24685-L24686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24685-L24686)

```diff
-       return null !== cm && (0, wm.Ac)(cm) ? (Zm.lobbyName = (0, hm.h)(cm, (0, hm.m)(Tm), fm), {
-         roomName: `classic_${Dm.e}`,
+       return null !== XD && (0, LD.Dc)(XD) ? (PD.lobbyName = (0, pD.k)(XD, (0, pD.m)(zD), wD), {
+         roomName: `classic_${cD.e}`,
```

#### 2291. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24694` → after: `L24445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24445) · [Before (L24694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24694)

```diff
-   8702: (mm, Tm, fm) => {
+   8785: (DD, zD, wD) => {
```

#### 2292. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24698-L24700` → after: `L24449-L24451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24449-L24451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24449-L24451) · [Before (L24698-L24700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24698-L24700)

```diff
-     var hm = fm(8709),
-       Am = fm(653),
-       am = fm(135);
+     var pD = wD(8792),
+       sD = wD(619),
+       KD = wD(128);
```

#### 2293. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24704-L24705` → after: `L24455-L24456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24455-L24456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24455-L24456) · [Before (L24704-L24705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24704-L24705)

```diff
-       if ((0, Am.H)(mm)) return !0;
-       const xm = null !== (Tm = null === (fm = am.k[am.q]) || void 0 === fm ? void 0 : fm.adConfig.showRewardedAds) && void 0 !== Tm && Tm;
+       if ((0, sD.B)(DD)) return !0;
+       const rD = null !== (zD = null === (wD = KD.n[KD.v]) || void 0 === wD ? void 0 : wD.adConfig.showRewardedAds) && void 0 !== zD && zD;
```

#### 2294. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24710` → after: `L24461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24461) · [Before (L24710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24710)

```diff
-             if ((0, hm.l)(Tm.items[mm], xm)) return !1
+             if ((0, pD.o)(zD.items[DD], rD)) return !1
```

#### 2295. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24715` → after: `L24466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24466) · [Before (L24715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24715)

```diff
-   36663: (mm, Tm, fm) => {
+   36570: (DD, zD, wD) => {
```

#### 2296. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24727` → after: `L24478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24478) · [Before (L24727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24727)

```diff
-       g: () => Am
+       f: () => sD
```

#### 2297. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24730` → after: `L24481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24481) · [Before (L24730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24730)

```diff
-   36992: (mm, Tm, fm) => {
+   36845: (DD, zD, wD) => {
```

#### 2298. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24734-L24735` → after: `L24484-L24485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24484-L24485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24484-L24485) · [Before (L24734-L24735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24734-L24735)

```diff
-       D: () => Xm,
-       F: () => Cm,
+       G: () => SD,
+       K: () => ND,
```

#### 2299. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24737-L24739` → after: `L24487-L24489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24487-L24489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24487-L24489) · [Before (L24737-L24739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24737-L24739)

```diff
-       d: () => bm,
-       e: () => wm,
-       i: () => Gm,
+       f: () => xD,
+       h: () => LD,
+       j: () => dD,
```

#### 2300. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24743-L24744` → after: `L24493-L24495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24493-L24495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24493-L24495) · [Before (L24743-L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24743-L24744)

```diff
-       r: () => em,
-       u: () => zm,
+       t: () => bD,
+       v: () => VD,
+       w: () => iD,
```

#### 2301. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24747` → after: `L24498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24498) · [Before (L24747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24747)

```diff
-     var hm = fm(37);
+     var pD = wD(35);
```

#### 2302. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24782` → after: `L24533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24533) · [Before (L24782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24782)

```diff
-         const mm = hm.g.getItem(im);
+         const DD = pD.h.getItem(gD);
```

#### 2303. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24789` → after: `L24540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24540) · [Before (L24789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24789)

```diff
-           ..."object" === typeof mm && null !== mm ? mm : {}
+           ..."object" === typeof DD && null !== DD ? DD : {}
```

#### 2304. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24800` → after: `L24551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24551) · [Before (L24800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24800)

```diff
-       }, hm.g.setItem(im, Em))
+       }, pD.h.setItem(gD, UD))
```

#### 2305. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24804` → after: `L24555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24555) · [Before (L24804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24804)

```diff
-       return "docsOverview" === mm ? am : "aiHelperOverview" === mm ? xm : om ? Am[om] : []
+       return "docsOverview" === DD ? KD : "aiHelperOverview" === DD ? rD : fD ? sD[fD] : []
```

#### 2306. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24818` → after: `L24569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24569) · [Before (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24818)

```diff
-           return qm ? qm.name === mm : "welcome" === mm
+           return GD ? GD.name === DD : "welcome" === DD
```

#### 2307. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24827` → after: `L24578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24578) · [Before (L24827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24827)

```diff
-       return null !== (Tm = nm(mm).find((Tm => zm(mm, Tm)))) && void 0 !== Tm ? Tm : null
+       return null !== (zD = ED(DD).find((zD => VD(DD, zD)))) && void 0 !== zD ? zD : null
```

#### 2308. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24879` → after: `L24630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24630) · [Before (L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24879)

```diff
-       const fm = Tm ? mm : om === mm ? null : om;
+       const wD = zD ? DD : fD === DD ? null : fD;
```

#### 2309. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24893` → after: `L24644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24644) · [Before (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24893)

```diff
-   36672: (mm, Tm, fm) => {
+   36575: (DD, zD, wD) => {
```

#### 2310. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24895-L24898` → after: `L24646-L24649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24646-L24649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24646-L24649) · [Before (L24895-L24898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24895-L24898)

```diff
-       c: () => Rm,
-       g: () => Em,
-       k: () => jm,
-       l: () => im
+       d: () => RD,
+       h: () => UD,
+       j: () => hD,
+       n: () => gD
```

#### 2311. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24900-L24905` → after: `L24651-L24656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24651-L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24651-L24656) · [Before (L24900-L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24900-L24905)

```diff
-     var hm = fm(23),
-       Am = fm(2364),
-       am = fm(2373),
-       xm = fm(2379),
-       wm = fm(2466),
-       Dm = fm(31);
+     var pD = wD(20),
+       sD = wD(2382),
+       KD = wD(2389),
+       rD = wD(2394),
+       LD = wD(2471),
+       cD = wD(25);
```

#### 2312. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24908` → after: `L24659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24659) · [Before (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24908)

```diff
-       return (!(0, xm.e)() || 0 === mm && 0 === Tm) && (0, am.y)(Am.i.Joystick, 0, mm, Tm, 0)
+       return (!(0, rD.b)() || 0 === DD && 0 === zD) && (0, KD.u)(sD.h.Joystick, 0, DD, zD, 0)
```

#### 2313. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24999` → after: `L24750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24750) · [Before (L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L24999)

```diff
-         if (!Tm) return void this.write(Am.i.TouchZone, mm, 0, 0, 0);
+         if (!zD) return void this.write(sD.h.TouchZone, DD, 0, 0, 0);
```

#### 2314. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25004` → after: `L24755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24755) · [Before (L25004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25004)

```diff
-         this.write(Am.i.TouchZone, mm, am.x - this.canvasLeft, am.y - this.canvasTop, Ym(fm.width, fm.height));
+         this.write(sD.h.TouchZone, DD, KD.x - this.canvasLeft, KD.y - this.canvasTop, BD(wD.width, wD.height));
```

#### 2315. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25006` → after: `L24757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24757) · [Before (L25006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25006)

```diff
-         this.write(Am.i.TouchZone, 256 | mm, 0, 0, xm ? Ym(xm.width, xm.height) : 0)
+         this.write(sD.h.TouchZone, 256 | DD, 0, 0, rD ? BD(rD.width, rD.height) : 0)
```

#### 2316. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25010` → after: `L24761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24761) · [Before (L25010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25010)

```diff
-           fm = hm.c.get("worldPanelHud");
+           wD = pD.e.get("worldPanelHud");
```

#### 2317. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25018-L25019` → after: `L24769-L24770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24769-L24770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24769-L24770) · [Before (L25018-L25019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25018-L25019)

```diff
-     }(am.y);
-     (0, Dm.m)(wm.e, (() => {
+     }(KD.u);
+     (0, cD.o)(LD.f, (() => {
```

#### 2318. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25023` → after: `L24774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24774) · [Before (L25023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25023)

```diff
-   36999: (mm, Tm, fm) => {
+   36855: (DD, zD, wD) => {
```

#### 2319. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25025` → after: `L24776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24776) · [Before (L25025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25025)

```diff
-       return null === mm || null === Tm ? mm === Tm : mm[0] === Tm[0] && mm[1] === Tm[1] && mm[2] === Tm[2]
+       return null === DD || null === zD ? DD === zD : DD[0] === zD[0] && DD[1] === zD[1] && DD[2] === zD[2]
```

#### 2320. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25032-L25033` → after: `L24783-L24784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24783-L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24783-L24784) · [Before (L25032-L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25032-L25033)

```diff
-       e: () => Am,
-       i: () => hm
+       d: () => sD,
+       f: () => pD
```

#### 2321. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25036` → after: `L24787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24787) · [Before (L25036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25036)

```diff
-   8721: (mm, Tm, fm) => {
+   8801: (DD, zD, wD) => {
```

#### 2322. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25038-L25039` → after: `L24789-L24790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24789-L24790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24789-L24790) · [Before (L25038-L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25038-L25039)

```diff
-       c: () => Am,
-       e: () => hm
+       b: () => sD,
+       f: () => pD
```

#### 2323. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25054` → after: `L24805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24805) · [Before (L25054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25054)

```diff
-           if (Tm && "translationKey" in fm) return `{${fm.translationKey}${void 0===fm.params?"":` ${JSON.stringify(fm.params)}`}}`;
+           if (zD && "translationKey" in wD) return `{${wD.translationKey}${void 0===wD.params?"":` ${JSON.stringify(wD.params)}`}}`;
```

#### 2324. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25056` → after: `L24807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24807) · [Before (L25056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25056)

```diff
-         }(mm, Tm)) && void 0 !== fm ? fm : " "
+         }(DD, zD)) && void 0 !== wD ? wD : " "
```

#### 2325. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25060` → after: `L24811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24811) · [Before (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25060)

```diff
-   36950: (mm, Tm, fm) => {
+   36813: (DD, zD, wD) => {
```

#### 2326. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25062-L25063` → after: `L24813-L24814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24813-L24814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24813-L24814) · [Before (L25062-L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25062-L25063)

```diff
-       c: () => Dm,
-       e: () => wm
+       e: () => cD,
+       h: () => LD
```

#### 2327. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25165` → after: `L24916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24916) · [Before (L25165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25165)

```diff
-   36955: (mm, Tm, fm) => {
+   36819: (DD, zD, wD) => {
```

#### 2328. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25170` → after: `L24922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24922) · [Before (L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25170)

```diff
-       l: () => xm,
+       m: () => gD,
```

#### 2329. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25172-L25175` → after: `L24924-L24926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24924-L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24924-L24926) · [Before (L25172-L25175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25172-L25175)

```diff
-       p: () => im,
-       s: () => Rm,
-       w: () => Om,
-       x: () => om
+       r: () => ID,
+       u: () => fD,
+       w: () => UD
```

#### 2330. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25177` → after: `L24928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24928) · [Before (L25177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25177)

```diff
-     var hm = fm(1247);
+     var pD = wD(1245);
```

#### 2331. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25185` → after: `L24936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24936) · [Before (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25185)

```diff
-       return mm === hm.i || mm === hm.j
+       return DD === pD.f || DD === pD.g
```

#### 2332. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25189` → after: `L24940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24940) · [Before (L25189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25189)

```diff
-       return mm === hm.i && Tm === hm.j || mm === hm.j && Tm === hm.i
+       return DD === pD.f && zD === pD.g || DD === pD.g && zD === pD.f
```

#### 2333. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25193-L25195` → after: `L24944-L24946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24944-L24946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24944-L24946) · [Before (L25193-L25195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25193-L25195)

```diff
-       const Tm = hm.j in mm,
-         fm = hm.i in mm;
-       return Tm && fm ? null : Tm ? hm.j : fm ? hm.i : null
+       const zD = pD.g in DD,
+         wD = pD.f in DD;
+       return zD && wD ? null : zD ? pD.g : wD ? pD.f : null
```

#### 2334. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25199-L25200` → after: `L24950-L24951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24950-L24951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24950-L24951) · [Before (L25199-L25200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25199-L25200)

```diff
-       const hm = `${Tm}/`;
-       return mm.filter((mm => mm.startsWith(hm))).map((mm => [mm, `${fm}/${mm.slice(hm.length)}`]))
+       const pD = `${zD}/`;
+       return DD.filter((DD => DD.startsWith(pD))).map((DD => [DD, `${wD}/${DD.slice(pD.length)}`]))
```

#### 2335. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25211` → after: `L24962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24962) · [Before (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25211)

```diff
-       return `${pm}${mm}`
+       return `${AD}${DD}`
```

#### 2336. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25215` → after: `L24966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24966) · [Before (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25215)

```diff
-       return `/node_modules/@plugins/${mm}/${Tm}`
+       return `/node_modules/@plugins/${DD}/${zD}`
```

#### 2337. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25223` → after: `L24974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24974) · [Before (L25223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25223)

```diff
-       }(Tm) ? Tm : null
+       }(zD) ? zD : null
```

#### 2338. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25226` → after: `L24977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24977) · [Before (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25226)

```diff
-   36973: (mm, Tm, fm) => {
+   36824: (DD, zD, wD) => {
```

#### 2339. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25230` → after: `L24980-L24981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24980-L24981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24980-L24981) · [Before (L25230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25230)

```diff
-       e: () => xm,
+       f: () => sD,
+       g: () => rD,
```

#### 2340. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25232` → after: `L24983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24983) · [Before (L25232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25232)

```diff
-       l: () => am
+       j: () => KD
```

#### 2341. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25234` → after: `L24985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24985) · [Before (L25234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25234)

```diff
-     var hm = fm(36964);
+     var pD = wD(36821);
```

#### 2342. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25240` → after: `L24991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24991) · [Before (L25240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25240)

```diff
-       return mm.endsWith(".bloxdschem") && (0, hm.s)(mm.slice(0, -11) + ".ts") && mm.length <= 64
+       return DD.endsWith(".bloxdschem") && (0, pD.m)(DD.slice(0, -11) + ".ts") && DD.length <= 64
```

#### 2343. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25247` → after: `L24998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L24998) · [Before (L25247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25247)

```diff
-   8709: (mm, Tm, fm) => {
+   8792: (DD, zD, wD) => {
```

#### 2344. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25268` → after: `L25019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25019) · [Before (L25268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25268)

```diff
-       const Am = null !== (hm = fm.excludedPlayers) && void 0 !== hm ? hm : [Tm];
+       const sD = null !== (pD = wD.excludedPlayers) && void 0 !== pD ? pD : [zD];
```

#### 2345. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25272-L25275` → after: `L25023-L25026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25023-L25026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25023-L25026) · [Before (L25272-L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25272-L25275)

```diff
-       e: () => am,
-       g: () => Am,
-       i: () => xm,
-       l: () => hm
+       d: () => KD,
+       h: () => sD,
+       l: () => rD,
+       o: () => pD
```

#### 2346. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25278` → after: `L25029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25029) · [Before (L25278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25278)

```diff
-   36964: (mm, Tm, fm) => {
+   36821: (DD, zD, wD) => {
```

#### 2347. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25280` → after: `L25031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25031) · [Before (L25280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25280)

```diff
-       b: () => Am,
+       c: () => sD,
```

#### 2348. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25283` → after: `L25035-L25036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25035-L25036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25035-L25036) · [Before (L25283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25283)

```diff
-       k: () => wm,
+       i: () => cD,
+       l: () => gD,
```

#### 2349. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25285-L25288` → after: `L25038-L25039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25038-L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25038-L25039) · [Before (L25285-L25288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25285-L25288)

```diff
-       o: () => im,
-       s: () => pm,
-       t: () => Rm,
-       u: () => xm
+       n: () => RD,
+       p: () => rD
```

#### 2350. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25290` → after: `L25041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25041) · [Before (L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25290)

```diff
-     var hm = fm(1247);
+     var pD = wD(1245);
```

#### 2351. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25299` → after: `L25050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25050) · [Before (L25299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25299)

```diff
-       return "lobby" === mm.kind ? `lobby:${mm.path}` : `codeBlock:${mm.pos[0]},${mm.pos[1]},${mm.pos[2]}`
+       return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
```

#### 2352. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25305` → after: `L25056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25056) · [Before (L25305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25305)

```diff
-         path: hm.i
+         path: pD.f
```

#### 2353. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25344` → after: `L25095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25095) · [Before (L25344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25344)

```diff
-   4789: (mm, Tm, fm) => {
+   4866: (DD, zD, wD) => {
```

#### 2354. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25346-L25348` → after: `L25097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25097) · [Before (L25346-L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25346-L25348)

```diff
-       d: () => Am,
-       e: () => hm,
-       f: () => am,
+       c: () => sD,
```

#### 2355. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25350` → after: `L25099-L25101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25099-L25101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25099-L25101) · [Before (L25350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25350)

```diff
-       k: () => xm
+       h: () => KD,
+       i: () => cD,
+       l: () => rD
```

#### 2356. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25494` → after: `L25245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25245) · [Before (L25494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25494)

```diff
-       return "string" !== typeof mm ? mm : Object.hasOwn(am, mm) ? am[mm] : null
+       return "string" !== typeof DD ? DD : Object.hasOwn(KD, DD) ? KD[DD] : null
```

#### 2357. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25526-L25527` → after: `L25277-L25278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25277-L25278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25277-L25278) · [Before (L25526-L25527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25526-L25527)

```diff
-   8761: () => {},
-   9873: mm => {
+   8826: () => {},
+   9929: DD => {
```

#### 2358. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25530` → after: `L25281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25281) · [Before (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25530)

```diff
-   18024: mm => {
+   18124: DD => {
```

#### 2359. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25533` → after: `L25284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25284) · [Before (L25533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25533)

```diff
-   19976: mm => {
+   20037: DD => {
```

#### 2360. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25536` → after: `L25287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25287) · [Before (L25536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25536)

```diff
-   19984: mm => {
+   20045: DD => {
```

#### 2361. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25539` → after: `L25290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25290) · [Before (L25539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25539)

```diff
-   19990: mm => {
+   20054: DD => {
```

#### 2362. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25542` → after: `L25293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25293) · [Before (L25542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25542)

```diff
-   19999: mm => {
+   20061: DD => {
```

#### 2363. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25545` → after: `L25296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L25296) · [Before (L25545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L25545)

```diff
-   20007: mm => {
+   20068: DD => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/86.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/86.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba)

#### 1. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L4)

```diff
-   4717: (mm, Tm, fm) => {
+   4791: (DD, zD, wD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L6-L7)

```diff
-       d: () => Km,
-       h: () => jm
+       e: () => OD,
+       f: () => hD
```

#### 3. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L9-L16` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L9-L16) · [Before (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L9-L16)

```diff
-     var hm = fm(1304),
-       Am = fm(31);
-     var am = fm(354);
-     var xm = fm(653);
-     var wm = fm(2364),
-       Dm = fm(4722),
-       im = fm(4747),
-       Rm = fm(4763);
+     var pD = wD(1316),
+       sD = wD(25);
+     var KD = wD(351);
+     var rD = wD(619);
+     var LD = wD(2382),
+       cD = wD(4800),
+       gD = wD(4823),
+       RD = wD(4832);
```

#### 4. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L27)

```diff
-         if (!xm) throw console.error(`No QTE implementation registered for type: ${Tm}`), new Error(`No QTE implementation registered for type: ${Tm}`);
+         if (!rD) throw console.error(`No QTE implementation registered for type: ${zD}`), new Error(`No QTE implementation registered for type: ${zD}`);
```

#### 5. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L33)

```diff
-         this.mouseSub = Am.j.subscribe("QTEMouseState", (mm => {
+         this.mouseSub = sD.l.subscribe("QTEMouseState", (DD => {
```

#### 6. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L38-L40)

```diff
-         })), this.stopInputActions = (0, im.g)((mm => {
-           this.isCompleted || !Em.has(mm.action) && !(0, im.e)(mm) || this.implementation.handleMouseInput(mm.down)
-         })), this.tickSub = Am.j.subscribe("noaTick", (mm => {
+         })), this.stopInputActions = (0, gD.l)((DD => {
+           this.isCompleted || !UD.has(DD.action) && !(0, gD.h)(DD) || this.implementation.handleMouseInput(DD.down)
+         })), this.tickSub = sD.l.subscribe("noaTick", (DD => {
```

#### 7. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L44-L45` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L44-L45) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L44-L45)

```diff
-         })), this.stopShellTicks = (0, Dm.y)((() => {
-           this.isCompleted || this.implementation.handleTick(wm.s / 1e3)
+         })), this.stopShellTicks = (0, cD.v)((() => {
+           this.isCompleted || this.implementation.handleTick(LD.o / 1e3)
```

#### 8. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L50)

```diff
-         this.mouseSub && (Am.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (mm = this.stopInputActions) || void 0 === mm || mm.call(this), this.stopInputActions = null, null === (Tm = this.stopShellTicks) || void 0 === Tm || Tm.call(this), this.stopShellTicks = nu … [truncated]
+         this.mouseSub && (sD.l.unsubscribe(this.mouseSub), this.mouseSub = null), null === (DD = this.stopInputActions) || void 0 === DD || DD.call(this), this.stopInputActions = null, null === (zD = this.stopShellTicks) || void 0 === zD || zD.call(this), this.stopShellTicks = nu … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L62)

```diff
-     const Om = new hm.e,
+     const ID = new pD.d,
```

#### 10. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L69)

```diff
-           this.resolveRequest = Tm, this.tearDownNotification = fm, this.progress = 0, this.ef = void 0, this.Nf = void 0, this.Gf = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           this.resolveRequest = zD, this.tearDownNotification = wD, this.progress = 0, this.Vw = void 0, this.Pw = void 0, this.Cw = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
```

#### 11. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L71)

```diff
-           this.ef = null !== (hm = wm.ef) && void 0 !== hm ? hm : .075, this.Nf = null !== (Am = wm.Nf) && void 0 !== Am ? Am : 1, this.progress = null !== (am = wm.Sf) && void 0 !== am ? am : 30, this.Gf = null !== (xm = wm.Gf) && void 0 !== xm && xm, this.parameters = wm
+           this.Vw = null !== (pD = LD.Vw) && void 0 !== pD ? pD : .075, this.Pw = null !== (sD = LD.Pw) && void 0 !== sD ? sD : 1, this.progress = null !== (KD = LD.Xw) && void 0 !== KD ? KD : 30, this.Cw = null !== (rD = LD.Cw) && void 0 !== rD && rD, this.parameters = LD
```

#### 12. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L74)

```diff
-           mm && !this.isCompleted && (this.clickCount++, this.progress += this.Nf, this.progress >= 100 && this.complete(!0))
+           DD && !this.isCompleted && (this.clickCount++, this.progress += this.Pw, this.progress >= 100 && this.complete(!0))
```

#### 13. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L78)

```diff
-             if (this.progress -= this.ef, this.Gf && this.progress <= 0) this.complete(!1);
+             if (this.progress -= this.Vw, this.Cw && this.progress <= 0) this.complete(!1);
```

#### 14. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L103)

```diff
-           this.resolveRequest = Tm, this.tearDownNotification = fm, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = mm, this.timeWindowMs = null !== (hm = this.parameters.Cf) && void … [truncated]
+           this.resolveRequest = zD, this.tearDownNotification = wD, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = DD, this.timeWindowMs = null !== (pD = this.parameters.dw) && void … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L124)

```diff
-               Cf: this.timeWindowMs
+               dw: this.timeWindowMs
```

#### 16. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L140-L141)

```diff
-             Mf: am.c.clamp(Am.Mf, .05, 1)
-           }, this.progress = null !== (hm = Am.Sf) && void 0 !== hm ? hm : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+             Ww: KD.c.clamp(sD.Ww, .05, 1)
+           }, this.progress = null !== (pD = sD.Xw) && void 0 !== pD ? pD : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
```

#### 17. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L152)

```diff
-           this.moverPosition += mm * this.parameters.uf * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
+           this.moverPosition += DD * this.parameters.Nw * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
```

#### 18. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L158)

```diff
-           const mm = am.c.clamp(1 - .7 * this.parameters.Bf, 0, 1.4);
+           const DD = KD.c.clamp(1 - .7 * this.parameters.Zw, 0, 1.4);
```

#### 19. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L162-L163)

```diff
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Lf : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = am.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const mm = this.parameters.Mf / 2,
+           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.yw : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = KD.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
+           const DD = this.parameters.Ww / 2,
```

#### 20. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L169)

```diff
-           const mm = this.parameters.Mf / 2;
+           const DD = this.parameters.Ww / 2;
```

#### 21. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L173)

```diff
-           this.isMoverInCatchZone() ? this.progress += this.parameters.vf * mm : this.progress -= this.parameters.tf * mm, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Gf && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+           this.isMoverInCatchZone() ? this.progress += this.parameters.kw * DD : this.progress -= this.parameters.mw * DD, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Cw && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L184)

```diff
-               Mf: this.parameters.Mf,
+               Ww: this.parameters.Ww,
```

#### 23. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L199)

```diff
-           this.resolveRequest = Tm, this.tearDownNotification = fm, this.startTime = void 0, this.speed = void 0, this.df = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           this.resolveRequest = zD, this.tearDownNotification = wD, this.startTime = void 0, this.speed = void 0, this.ow = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
```

#### 24. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L203-L205)

```diff
-             speed: null !== (hm = im.speed) && void 0 !== hm ? hm : .5,
-             df: am.c.clamp(im.df, .05, 1),
-             label: null !== (Am = im.label) && void 0 !== Am ? Am : [{
+             speed: null !== (pD = gD.speed) && void 0 !== pD ? pD : .5,
+             ow: KD.c.clamp(gD.ow, .05, 1),
+             label: null !== (sD = gD.label) && void 0 !== sD ? sD : [{
```

#### 25. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L208-L211` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L208-L211) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L208-L211)

```diff
-             icon: null !== (xm = im.icon) && void 0 !== xm ? xm : null,
-             scale: null !== (wm = im.scale) && void 0 !== wm ? wm : 1,
-             rotation: null !== (Dm = im.rotation) && void 0 !== Dm ? Dm : 0
-           }, this.speed = this.parameters.speed, this.df = this.parameters.df, this.startTime = Date.now()
+             icon: null !== (rD = gD.icon) && void 0 !== rD ? rD : null,
+             scale: null !== (LD = gD.scale) && void 0 !== LD ? LD : 1,
+             rotation: null !== (cD = gD.rotation) && void 0 !== cD ? cD : 0
+           }, this.speed = this.parameters.speed, this.ow = this.parameters.ow, this.startTime = Date.now()
```

#### 26. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/86.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/86.js#L216)

```diff
-             const mm = Math.abs(this.markerPosition - .5) <= this.df / 2;
+             const DD = Math.abs(this.markerPosition - .5) <= this.ow / 2;
```
