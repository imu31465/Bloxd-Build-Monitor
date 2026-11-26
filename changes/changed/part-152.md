# Changed — Bundle Modifications Report (Part 152 / 161)

- **Updated at**: `2026-11-27T02:05 JST`
- **Part**: `152 / 161` (**382** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 151](part-151.md) · [Part 153 →](part-153.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (1125 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074)

#### 576. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5613-L5619` → after: `L5325-L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5325-L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5325-L5339) · [Before (L5613-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5613-L5619)

```diff
-               Eh(HH[zh[0]] = zh[1], HH[zh[3]] = function(...HH) {
-                 if (Eh(HH[zh[0]] = zh[2], HH[-zh[84]] = HH[zh[1]].length), HH[-zh[84]] < zh[15]) return zh[1];
-                 if (Eh(HH[zh[85]] = Math.max(...HH[zh[1]]), HH[-zh[86]] = Math.min(...HH[zh[1]])), HH[zh[85]] === HH[-zh[86]]) return zh[1];
-                 for (Eh(HH[zh[12]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MAX_SAFE_INTEGER), HH[zh[16]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MIN_SAFE_INTEGER), HH[zh[32]] = Math.ceil((HH[zh[85]] - HH[-zh[86]]) / (HH[-zh[84]] - zh[2])), HH[-zh[88]] = zh[1]), HH[-zh[87]] = zh … [truncated]
-                 for (Eh(HH[zh[46]] = Number.MIN_SAFE_INTEGER, HH[zh[89]] = HH[-zh[86]]), HH[zh[40]] = zh[1]; HH[zh[40]] < HH[-zh[84]] - zh[2]; HH[zh[40]]++) HH[zh[12]][HH[zh[40]]] === Number.MAX_SAFE_INTEGER && HH[zh[16]][HH[zh[40]]] === Number.MIN_SAFE_INTEGER || Eh(HH[zh[46]] = … [truncated]
-                 return HH[zh[46]] = Math.max(HH[zh[46]], HH[zh[85]] - HH[zh[89]]), HH[zh[46]]
-               }, console.log(HH[zh[3]]))
+               BB[Jo[0]] = Jo[1];
+               const OB = require("path"),
+                 {
+                   version: GB
+                 } = require("../../package"),
+                 {
+                   version: YB
+                 } = require("@redacted/enterprise-plugin/package"),
+                 {
+                   version: DB
+                 } = require("@redacted/components/package"),
+                 {
+                   sdkVersion: QB
+                 } = require("@redacted/enterprise-plugin");
+               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), OB.resolve(__dirname, "../redacted.js")
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5621-L5646` → after: `L5341-L5343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5341-L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5341-L5343) · [Before (L5621-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5621-L5646)

```diff
-             "bYkA95" + zh[83] in Ch && tH()
-           } else {
-             if ((zh[1], KS.n)(AH)) {
-               function zH() {
-                 var HH, BH, LH;
-                 Eh(HH = function(...AH) {
-                   for (AH[zh[0]] = zh[12], AH[zh[12]] = AH[zh[13]]; AH[zh[12]] < AH[zh[15]]; AH[zh[12]]++) {
-                     if (AH[zh[2]].length !== AH[zh[12]]) return;
-                     for (AH[zh[10]] = zh[1]; AH[zh[10]] < AH[zh[15]]; AH[zh[10]]++) LH(AH[zh[2]], [AH[zh[12]], AH[zh[10]]]) && (Eh(AH[zh[2]].push([AH[zh[12]], AH[zh[10]]]), HH(AH[zh[1]], AH[zh[2]], AH[zh[15]], AH[zh[12]] + zh[2])), AH[zh[2]].length === AH[zh[15]] && AH[zh[1]].pus … [truncated]
-                   }
-                 }, BH = function(HH) {
-                   var BH, LH, AH = [];
-                   for (BH = HH.length, LH = zh[1]; LH < BH; LH++) {
-                     var rH;
-                     for (AH[LH] = "", rH = zh[1]; rH < BH; rH++) AH[LH] += HH[LH][zh[2]] === rH ? zh[38] : zh[39]
-                   }
- ... (10 more removed lines; see GitHub link above)
+             if ("RYeK1R" + Jo[110] in Mo && JB(), uB < 8) {
+               function MB(...BB) {
+                 Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", BB[-Jo[71]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", BB[Jo[72]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d … [truncated]
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5648-L5651` → after: `L5345-L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5345-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5345-L5354) · [Before (L5648-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5648-L5651)

```diff
-               return "GQxeXyR" in Ch && zH(), void(eH = zh[31])
-             }
-             if ((zh[1], KS[zh[125]])(AH))
-               if (IH < 8) {
+               "_laJfB" + Jo[109] in Mo && MB(), Po(FB[QB] = Jo[12], KB[uB++] = QB, iB ||= (Jo[1], iQ[Jo[73]])(QB))
+             } else {
+               function PB(...BB) {
+                 Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
+                   return Po(OB[Jo[0]] = Jo[7], OB[Jo[7]] = {}), OB[Jo[2]].length !== OB[Jo[1]].length + OB[Jo[3]].length ? Jo[4] : BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], Jo[1], Jo[1], Jo[1], OB[Jo[7]])
+                 }, BB[-Jo[28]] = function(...OB) {
+                   return Po(OB[Jo[0]] = Jo[61], OB[Jo[61]] = Jo[4]), OB[Jo[16]] >= OB[Jo[2]].length ? Jo[12] : OB[Jo[47]]["" + OB[Jo[7]] + OB[Jo[21]] + OB[Jo[16]]] !== Jo[5] ? OB[Jo[47]]["" + OB[Jo[7]] + OB[Jo[21]] + OB[Jo[16]]] : (OB[Jo[2]][OB[Jo[16]]] === OB[Jo[1]][OB[Jo[7]]] & … [truncated]
+                 }, console.log(BB[Jo[13]]))
+               }
+               if ("JtmX4U" + Jo[82] in Mo && PB(), !iB && (Jo[1], iQ[Jo[73]])(QB)) {
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5653-L5712` → after: `L5356-L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5356-L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5356-L5383) · [Before (L5653-L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5653-L5712)

```diff
-                   Eh(HH[zh[0]] = zh[1], HH[zh[92]] = function(...BH) {
-                     return Eh(BH[zh[0]] = zh[13], BH[zh[3]] = {}), BH[zh[15]].length !== BH[zh[1]].length + BH[zh[2]].length ? zh[19] : HH[zh[91]](BH[zh[1]], BH[zh[2]], BH[zh[15]], zh[1], zh[1], zh[1], BH[zh[3]])
-                   }, HH[zh[91]] = function(...BH) {
-                     return Eh(BH[zh[0]] = zh[4], BH[zh[4]] = zh[19]), BH[zh[10]] >= BH[zh[15]].length ? zh[31] : BH[zh[32]]["" + BH[zh[13]] + BH[zh[12]] + BH[zh[10]]] !== zh[20] ? BH[zh[32]]["" + BH[zh[13]] + BH[zh[12]] + BH[zh[10]]] : (BH[zh[15]][BH[zh[10]]] === BH[zh[1]][BH[zh[ … [truncated]
-                   }, console.log(HH[zh[92]]))
-                 }
-                 "h90sXU" in Ch && CH(), Eh(KH[AH] = zh[31], oH[IH++] = AH, cH ||= (zh[1], KS[zh[111]])(AH))
-               } else {
-                 function EH() {
-                   ! function(...HH) {
-                     function BH(...HH) {
-                       for (Eh(HH[zh[0]] = zh[2], HH[zh[3]] = [], HH[zh[15]] = zh[1], HH[zh[93]] = HH[zh[1]].length, HH[zh[94]] = zh[20], HH[zh[10]] = zh[20]); HH[zh[15]] < HH[zh[93]];) Eh(HH[zh[94]] = HH[zh[1]].charCodeAt(HH[zh[15]]++), HH[zh[94]] >= zh[95] && HH[zh[94]] <= zh[96 … [truncated]
-                       return HH[zh[3]]
-                     }
- 
-                     function LH(...HH) {
- ... (44 more removed lines; see GitHub link above)
+                   function OB(...BB) {
+                     if (BB[Jo[0]] = Jo[3], !BB[Jo[1]]) return -Jo[3];
+                     const GB = OB(BB[Jo[1]].left),
+                       YB = OB(BB[Jo[1]].right),
+                       DB = Math.abs(GB - YB);
+                     if (GB === 1 / 0 || YB === 1 / 0 || DB > Jo[3]) return 1 / 0;
+                     return Math.max(GB, YB) + Jo[3]
+                   }
+                   BB[Jo[0]] = Jo[1], window.__GLOBAL__HELPERS__ = {
+                     buildCharacterMap: function(...BB) {
+                       BB[Jo[0]] = Jo[3];
+                       const OB = {};
+                       for (let GB of BB[Jo[1]].replace(/[^w]/g, "").toLowerCase()) OB[GB] = OB[GB] + Jo[3] || Jo[3];
+                       return OB
+                     },
+                     isAnagrams: function(...BB) {
+ ... (12 more added lines; see GitHub link above)
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5714` → after: `L5385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5385) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5714)

```diff
-                 "Np8XPB" in Ch && EH(), !cH && (zh[1], KS[zh[111]])(AH) && Eh(KH[AH] = zh[31], oH[8 - zh[2]] = AH, cH = zh[31])
+                 "nqY6L3" in Mo && zB(), Po(FB[QB] = Jo[12], KB[8 - Jo[3]] = QB, iB = Jo[12])
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5716-L5717` → after: `L5387-L5388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5387-L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5387-L5388) · [Before (L5716-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5716-L5717)

```diff
-             else lH < 4 && Eh(KH[AH] = zh[31], fH[lH++] = AH)
-           }
+             }
+           } else IB < 4 && Po(FB[QB] = Jo[12], mB[IB++] = QB)
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5719` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5390) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5719)

```diff
-         gH = (zh[1], cS[zh[89]])(HH),
+         rB = (Jo[1], LQ[Jo[132]])(BB),
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5724` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5395) · [Before (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5724)

```diff
-             return zh[20]
+             return Jo[5]
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5729` → after: `L5400-L5404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5400-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5400-L5404) · [Before (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5729)

```diff
-         })), typeof NH === zh[112] + zh[113]) {
+         })), typeof XB === Jo[74] + Jo[75]) {
+         function TO(...BB) {
+           BB[Jo[0]] = Jo[1]
+         }
+         "PcmwWY" + Jo[26] in Mo && TO();
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5738` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5413) · [Before (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5738)

```diff
-           for (const LH in BH)(zh[1], Qr[zh[114]])(Qr[zh[128]], BH, [LH]) && LH !== HH && qH(LH, BH[LH])
+           for (const OB in CO)(Jo[1], ZD[Jo[76]])(ZD[Jo[117]], CO, [OB]) && OB !== BB && gB(OB, CO[OB])
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5741-L5748` → after: `L5416-L5451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5416-L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5416-L5451) · [Before (L5741-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5741-L5748)

```diff
-       const RH = gH ? zh[15] : zh[2];
-       let jH = zh[19];
-       const nH = (...BH) => (BH[zh[0]] = zh[1], kH ? zh[31] : (Eh(BH[-zh[115]] = zh[19], jH = !UH((() => {
-           BH[-zh[115]] = rH[HH] !== qH
-         }))), BH[-zh[115]])),
-         FH = xH((() => {
-           const BH = (zh[1], Qr.J)(rH, HH);
-           return (BH === zh[21] || BH === void zh[1] ? void zh[1] : BH.configurable) !== zh[19] || typeof BH[zh[140]] !== zh[112] + zh[113] || bH !== RH
+       const wB = rB ? Jo[2] : Jo[3];
+       let EB = Jo[4];
+       const cB = (...OB) => {
+           if (OB[Jo[0]] = Jo[1], kB) {
+             function GB(...BB) {
+               Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
+                 return Po(OB[Jo[0]] = Jo[3], OB[Jo[13]] = []), (OB[Jo[1]] === Jo[3] || OB[Jo[1]] >= Jo[21]) && BB[Jo[3]](OB[Jo[13]], [], OB[Jo[1]], Jo[1]), OB[Jo[13]]
+               }, BB[Jo[3]] = function(...OB) {
+                 for (OB[Jo[0]] = Jo[21], OB[Jo[13]] = OB[Jo[7]]; OB[Jo[13]] < OB[Jo[2]]; OB[Jo[13]]++) {
+                   if (OB[Jo[3]].length !== OB[Jo[13]]) return;
+                   for (OB[Jo[77]] = Jo[1]; OB[Jo[77]] < OB[Jo[2]]; OB[Jo[77]]++) BB[Jo[26]](OB[Jo[3]], [OB[Jo[13]], OB[Jo[77]]]) && (Po(OB[Jo[3]].push([OB[Jo[13]], OB[Jo[77]]]), BB[Jo[3]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[13]] + Jo[3])), OB[Jo[3]].length === OB[Jo[2]] && OB[ … [truncated]
+                 }
+               }, BB[Jo[17]] = function(...BB) {
+                 for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = [], BB[Jo[15]] = BB[Jo[1]].length), BB[Jo[29]] = Jo[1]; BB[Jo[29]] < BB[Jo[15]]; BB[Jo[29]]++)
+                   for (BB[Jo[13]][BB[Jo[29]]] = "", BB[Jo[21]] = Jo[1]; BB[Jo[21]] < BB[Jo[15]]; BB[Jo[21]]++) BB[Jo[13]][BB[Jo[29]]] += BB[Jo[1]][BB[Jo[29]]][Jo[3]] === BB[Jo[21]] ? Jo[78] : Jo[79];
+                 return BB[Jo[13]]
+ ... (20 more added lines; see GitHub link above)
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5753` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5456) · [Before (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5753)

```diff
-             return navigator[zh[135] + "tSub"]
+             return navigator[Jo[127] + "tSub"]
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5760-L5764` → after: `L5463-L5516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5463-L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5463-L5516) · [Before (L5760-L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5760-L5764)

```diff
-         aH = dH === zh[21] ? ((...HH) => {
-           HH[zh[0]] = zh[1];
-           const BH = zh[5];
-           Eh(HH[-zh[117]] = zh[19], HH[zh[116]] = BH - zh[2]);
-           const LH = TextDecoder[zh[118] + zh[119]][zh[120]],
+         CB = bB === Jo[6] ? ((...BB) => {
+           BB[Jo[0]] = Jo[1], "nmHuQR" in Mo && function(...BB) {
+             BB[Jo[0]] = Jo[1];
+             const OB = require("big-integer");
+             Po(BB[Jo[13]] = class {
+               static randomPrime(...BB) {
+                 BB[Jo[0]] = Jo[3];
+                 const GB = OB.one.shiftLeft(BB[Jo[1]] - Jo[3]),
+                   YB = OB.one.shiftLeft(BB[Jo[1]]).prev();
+                 for (; Jo[12];) {
+                   let BB = OB.randBetween(GB, YB);
+                   if (BB.isProbablePrime(Jo[40])) return BB
+                 }
+               }
+               static generate(...BB) {
+                 BB[Jo[0]] = Jo[3];
+ ... (38 more added lines; see GitHub link above)
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5766` → after: `L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5518) · [Before (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5766)

```diff
-               HH[zh[116]]++, HH[zh[116]] === BH && (Hh((() => YH(zh[19]))) && (HH[-zh[117]] = zh[31]), HH[zh[116]] = zh[1]);
+               BB[Jo[3]]++, BB[Jo[3]] === OB && (Oo((() => lB(Jo[4]))) && (BB[Jo[85]] = Jo[12]), BB[Jo[3]] = Jo[1]);
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5768` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5520) · [Before (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5768)

```diff
-               return (zh[1], Qr[zh[114]])(LH, this, rH)
+               return (Jo[1], ZD[Jo[76]])(GB, this, DB)
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5771-L5776` → after: `L5523-L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5523-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5523-L5599) · [Before (L5771-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5771-L5776)

```diff
-             TextDecoder[zh[118] + zh[119]][zh[120]] = AH
-           })), () => HH[-zh[117]] ? zh[15] : Lh((() => TextDecoder[zh[118] + zh[119]][zh[120]] !== AH ? zh[32] : zh[1]))
-         })() : () => Lh((() => dH[zh[133] + zh[134]]())),
-         sH = (zh[1], HL[zh[150]])(),
-         JH = (zh[1], Qr[zh[74]])(zh[21]),
-         iH = (zh[1], Qr[zh[74]])(zh[21]);
+             TextDecoder[Jo[86] + Jo[87]][Jo[88]] = YB
+           })), () => {
+             if (BB[Jo[85]]) {
+               function OB() {
+                 ! function(...BB) {
+                   function OB(...BB) {
+                     for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = [], BB[-Jo[89]] = Jo[1], BB[Jo[7]] = BB[Jo[1]].length, BB[Jo[90]] = Jo[5], BB[Jo[93]] = Jo[5]); BB[-Jo[89]] < BB[Jo[7]];) Po(BB[Jo[90]] = BB[Jo[1]].charCodeAt(BB[-Jo[89]]++), BB[Jo[90]] >= Jo[91] && BB[Jo[90]] <= Jo[92]  … [truncated]
+                     return BB[Jo[13]]
+                   }
+ 
+                   function GB(...BB) {
+                     if (BB[Jo[0]] = Jo[3], BB[Jo[1]] >= Jo[91] && BB[Jo[1]] <= Jo[96]) throw Error("Lone surrogate U+" + BB[Jo[1]].toString(Jo[35]).toUpperCase() + " is not a scalar value")
+                   }
+ 
+                   function YB(...OB) {
+                     return OB[Jo[0]] = Jo[2], BB[Jo[13]](OB[Jo[1]] >> OB[Jo[3]] & Jo[43] | Jo[54])
+ ... (61 more added lines; see GitHub link above)
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5780-L5783` → after: `L5603-L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5603-L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5603-L5606) · [Before (L5780-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5780-L5783)

```diff
-       const BB = (zh[1], Qr[zh[74]])(zh[21]),
-         LB = (zh[1], Qr[zh[74]])(zh[21]);
-       let AB = zh[21],
-         rB = (zh[1], Qr[zh[74]])(zh[21]);
+       const OO = (Jo[1], ZD[Jo[32]])(Jo[6]),
+         GO = (Jo[1], ZD[Jo[32]])(Jo[6]);
+       let YO = Jo[6],
+         DO = (Jo[1], ZD[Jo[32]])(Jo[6]);
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5785` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5608) · [Before (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5785)

```diff
-           Eh(HH[zh[0]] = zh[15], JH[pH] = HH[zh[1]], iH[pH] = HH[zh[2]], pH++)
+           Po(BB[Jo[0]] = Jo[2], vB[xB] = BB[Jo[1]], sB[xB] = BB[Jo[3]], xB++)
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5787-L5789` → after: `L5610-L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5610-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5610-L5612) · [Before (L5787-L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5787-L5789)

```diff
-         hB = (...HH) => (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = zh[20]), (HH[zh[2]] = (iH[HH[zh[1]]] ? LB : BB)[JH[HH[zh[1]]]]) !== zh[21] && HH[zh[2]] !== void zh[1] ? HH[zh[2]] : -zh[2]),
-         tB = (zh[1], Qr[zh[22]])("d2lvNjQz"),
-         zB = (zh[1], Qr[zh[22]])("amtsa2plZndu"),
+         oO = (...BB) => (Po(BB[Jo[0]] = Jo[3], BB[Jo[3]] = Jo[5]), (BB[Jo[3]] = (sB[BB[Jo[1]]] ? GO : OO)[vB[BB[Jo[1]]]]) !== Jo[6] && BB[Jo[3]] !== void Jo[1] ? BB[Jo[3]] : -Jo[3]),
+         jO = (Jo[1], ZD[Jo[8]])("d2lvNjQz"),
+         yO = (Jo[1], ZD[Jo[8]])("amtsa2plZndu"),
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5791-L5793` → after: `L5614-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5614-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5614-L5616) · [Before (L5791-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5791-L5793)

```diff
-           [(zh[1], Qr[zh[22]])("aW9qZndlODNq"), "2"],
-           [(zh[1], Qr[zh[22]])("a3Bq"), zh[121]],
-           [(zh[1], Qr[zh[22]])("dXJocmZm"), zh[122]]
+           [(Jo[1], ZD[Jo[8]])("aW9qZndlODNq"), Jo[109]],
+           [(Jo[1], ZD[Jo[8]])("a3Bq"), Jo[110]],
+           [(Jo[1], ZD[Jo[8]])("dXJocmZm"), "5"]
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5796-L5797` → after: `L5619-L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5619-L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5619-L5620) · [Before (L5796-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5796-L5797)

```diff
-           [(zh[1], Qr[zh[22]])(zh[124] + zh[123]), zh[154]],
-           [(zh[1], Qr[zh[22]])(zh[124] + "w="), zh[74]]
+           [(Jo[1], ZD[Jo[8]])(Jo[112] + Jo[111]), Jo[32]],
+           [(Jo[1], ZD[Jo[8]])(Jo[112] + "w="), Jo[113]]
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5799-L5801` → after: `L5622-L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5622-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5622-L5624) · [Before (L5799-L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5799-L5801)

```diff
-         XB = (zh[1], Qr[zh[22]])("eTR5bnM="),
-         GB = (zh[1], Qr[zh[22]])("aHRleWpldA=="),
-         YB = (zh[1], Qr[zh[22]])("c2RmbGpneGxmY2pr"),
+         PO = (Jo[1], ZD[Jo[8]])("eTR5bnM="),
+         zO = (Jo[1], ZD[Jo[8]])("aHRleWpldA=="),
+         lO = (Jo[1], ZD[Jo[8]])("c2RmbGpneGxmY2pr"),
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5803-L5807` → after: `L5626-L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5626-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5626-L5630) · [Before (L5803-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5803-L5807)

```diff
-           [(zh[1], Qr[zh[22]])("a3NhZmR1"), zh[125]],
-           [(zh[1], Qr[zh[22]])("ZGZnYWFzZGFz"), zh[22]],
-           [YB, zh[127]],
-           [(zh[1], Qr[zh[22]])("bGFzZWRraGFz"), zh[126]],
-           [(zh[1], Qr[zh[22]])("cW16ZjhrM24="), zh[3]]
+           [(Jo[1], ZD[Jo[8]])("a3NhZmR1"), Jo[116]],
+           [(Jo[1], ZD[Jo[8]])("ZGZnYWFzZGFz"), Jo[114]],
+           [lO, Jo[8]],
+           [(Jo[1], ZD[Jo[8]])("bGFzZWRraGFz"), "u"],
+           [(Jo[1], ZD[Jo[8]])("cW16ZjhrM24="), Jo[13]]
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5810-L5812` → after: `L5633-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5633-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5633-L5635) · [Before (L5810-L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5810-L5812)

```diff
-           [XB, zh[141]],
-           [GB, zh[83]],
-           [(zh[1], Qr[zh[22]])("bmI3ZnEy"), zh[18]]
+           [PO, Jo[115]],
+           [zO, Jo[69]],
+           [(Jo[1], ZD[Jo[8]])("bmI3ZnEy"), Jo[15]]
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5814-L5815` → after: `L5637-L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5637-L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5637-L5638) · [Before (L5814-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5814-L5815)

```diff
-         WB = (zh[1], Qr[zh[22]])("bGtxM20="),
-         MB = (zh[1], Qr[zh[22]])("bWtxN3" + zh[123]),
+         ZO = (Jo[1], ZD[Jo[8]])("bGtxM20="),
+         NO = (Jo[1], ZD[Jo[8]])("bWtxN3" + Jo[111]),
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5817` → after: `L5640-L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5640-L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5640-L5647) · [Before (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5817)

```diff
-         vB = (() => {
+         WO = ((...BB) => {
+           BB[Jo[0]] = Jo[1], "QQniID" in Mo && function(...BB) {
+             Po(BB[Jo[0]] = Jo[1], BB[-Jo[56]] = function(...BB) {
+               for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = BB[Jo[1]].length, BB[Jo[15]] = [], BB[Jo[26]] = Jo[1]), BB[Jo[21]] = Jo[1]; BB[Jo[21]] < BB[Jo[13]]; BB[Jo[21]]++) BB[Jo[15]].push(BB[Jo[21]] !== Jo[1] && BB[Jo[1]][BB[Jo[21]]] > BB[Jo[1]][BB[Jo[21]] - Jo[3]] ? BB[Jo[15]][BB[J … [truncated]
+               for (BB[Jo[93]] = BB[Jo[13]] - Jo[3]; BB[Jo[93]] >= Jo[1]; BB[Jo[93]]--) BB[Jo[93]] !== BB[Jo[13]] - Jo[3] && BB[Jo[1]][BB[Jo[93]]] > BB[Jo[1]][BB[Jo[93]] + Jo[3]] && (BB[Jo[15]][BB[Jo[93]]] = Math.max(BB[Jo[15]][BB[Jo[93]]], BB[Jo[15]][BB[Jo[93]] + Jo[3]] + Jo[3])) … [truncated]
+               return BB[Jo[26]]
+             }, console.log(BB[-Jo[56]]))
+           }();
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5819-L5820` → after: `L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5649) · [Before (L5819-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5819-L5820)

```diff
-             var HH;
-             return (HH = rH[(zh[1], Qr[zh[22]])("V2ViU29ja2V0")]) === zh[21] || HH === void zh[1] ? void zh[1] : HH[zh[118] + zh[119]]
+             return BB[Jo[13]] = Jo[5], (BB[Jo[13]] = DB[(Jo[1], ZD[Jo[8]])("V2ViU29ja2V0")]) === Jo[6] || BB[Jo[13]] === void Jo[1] ? void Jo[1] : BB[Jo[13]][Jo[86] + Jo[87]]
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5822` → after: `L5651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5651) · [Before (L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5822)

```diff
-             return zh[20]
+             return Jo[5]
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5825-L5827` → after: `L5654-L5656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5654-L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5654-L5656) · [Before (L5825-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5825-L5827)

```diff
-         PB = ["send", "close", "addEventListener", "removeEventListener", zh[131] + zh[130] + zh[127]],
-         TB = ["onmessage", "onopen", "onclos" + zh[16], "onerro" + zh[125]];
-       let UB = zh[19];
+         AO = ["send", "close", "addEventListener", "removeEventListener", Jo[121] + Jo[120] + Jo[8]],
+         VO = ["onmessage", "onopen", "onclos" + Jo[93], "onerro" + Jo[116]];
+       let SO = Jo[4];
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5831-L5832` → after: `L5660-L5661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5660-L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5660-L5661) · [Before (L5831-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5831-L5832)

```diff
-           LH === zh[21] || UB || (UB = xH((() => {
-             if (vB !== zh[20] && (zh[1], Qr.K)(LH) !== vB) return zh[31];
+           GB === Jo[6] || SO || (SO = RB((() => {
+             if (WO !== Jo[5] && (Jo[1], ZD.N)(GB) !== WO) return Jo[12];
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5834` → after: `L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5663) · [Before (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5834)

```diff
-               if ((zh[1], Qr[zh[114]])(Qr[zh[128]], LH, [PB[HH]])) return zh[31];
+               if ((Jo[1], ZD[Jo[76]])(ZD[Jo[117]], GB, [AO[BB]])) return Jo[12];
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5836-L5837` → after: `L5665-L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5665-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5665-L5666) · [Before (L5836-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5836-L5837)

```diff
-               if (LH[TB[HH]] !== zh[21] && LH[TB[HH]] !== zh[20]) return zh[31];
-             return zh[19]
+               if (GB[VO[BB]] !== Jo[6] && GB[VO[BB]] !== Jo[5]) return Jo[12];
+             return Jo[4]
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5840-L5841` → after: `L5669-L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5669-L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5669-L5670) · [Before (L5840-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5840-L5841)

```diff
-         OB = (zh[1], Qr[zh[22]])("RXZlbnQ=");
-       let bB = UL[zh[129]][zh[145]],
+         UO = (Jo[1], ZD[Jo[8]])("RXZlbnQ=");
+       let fO = SG[Jo[119]][Jo[137]],
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5843-L5844` → after: `L5672-L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5672-L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5672-L5673) · [Before (L5843-L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5843-L5844)

```diff
-       const mB = () => kB++ === zh[10] ? (kB = zh[1], YH(zh[19]) ? UL[zh[16]].CheckFuncHit : zh[1]) : zh[1],
-         oB = (zh[1], Qr[zh[74]])(zh[21]),
+       const dO = () => kO++ === Jo[16] ? (kO = Jo[1], lB(Jo[4]) ? SG[Jo[85]].CheckFuncHit : Jo[1]) : Jo[1],
+         KO = (Jo[1], ZD[Jo[32]])(Jo[6]),
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5847-L5848` → after: `L5676-L5677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5676-L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5676-L5677) · [Before (L5847-L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5847-L5848)

```diff
-         const HH = (zh[1], Qr[zh[114]])(Qr.cb, AH, [zH]);
-         oB[zH] = HH >= 99 && HH <= zh[68] ? HH : zh[1]
+         const vO = (Jo[1], ZD[Jo[76]])(ZD.hb, YB, [HO]);
+         KO[HO] = vO >= 99 && vO <= 122 ? vO : Jo[1]
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5851` → after: `L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5680) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5851)

```diff
-           return typeof HH === zh[112] + zh[113] && (zh[1], Qr[zh[114]])(Qr.T, BH, [(LH = HH, (0, Qr.l)(Qr.y, LH, []))]) !== zh[21];
+           return typeof BB === Jo[74] + Jo[75] && (Jo[1], ZD[Jo[76]])(ZD.W, OB, [(GB = BB, (0, ZD.l)(ZD.y, GB, []))]) !== Jo[6];
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5857-L5859` → after: `L5686-L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5686-L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5686-L5688) · [Before (L5857-L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5857-L5859)

```diff
-           [Sh["Dispat" + zh[130] + zh[127]], () => !fB(EventTarget[zh[118] + zh[119]][zh[131] + zh[130] + zh[127]], lB)],
-           [Sh.PerformanceNow, () => !fB(performance[zh[132]], KB)],
-           [Sh.DateNow, () => !fB(Date[zh[132]], KB)]
+           [oo["Dispat" + Jo[120] + Jo[8]], () => !mO(EventTarget[Jo[86] + Jo[87]][Jo[121] + Jo[120] + Jo[8]], IO)],
+           [oo.PerformanceNow, () => !mO(performance[Jo[123]], FO)],
+           [oo["DateNo" + Jo[122]], () => !mO(Date[Jo[123]], FO)]
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5861` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5690) · [Before (L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5861)

```diff
-         eB = (zh[1], Qr[zh[74]])(zh[21]);
+         LO = (Jo[1], ZD[Jo[32]])(Jo[6]);
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5865-L5866` → after: `L5694-L5695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5694-L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5694-L5695) · [Before (L5865-L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5865-L5866)

```diff
-           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[21]);
-           const BH = Hh((() => (HH[zh[3]] = GH(zh[31]), HH[zh[3]] !== zh[21])));
+           Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = Jo[6]);
+           const OB = Oo((() => (BB[Jo[13]] = zB(Jo[12]), BB[Jo[13]] !== Jo[6])));
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5868` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5697) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5868)

```diff
-           return HH[zh[3]] !== zh[21] && uH === zh[21] && (LH = HH[zh[3]][zh[36]], AH = HH[zh[3]][zh[37]], uH = (0, KS.u)(aS(LH, AH))), BH
+           return BB[Jo[13]] !== Jo[6] && pB === Jo[6] && (GB = BB[Jo[13]][Jo[18]], YB = BB[Jo[13]][Jo[19]], pB = (0, iQ.v)(HQ(GB, YB))), OB
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5870` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5699) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5870)

```diff
-         [zh[133] + zh[134]]: (...HH) => {
+         [Jo[125] + Jo[126]]: (...BB) => {
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5873-L5876` → after: `L5702-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5702-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5702-L5705) · [Before (L5873-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5873-L5876)

```diff
-           if (BH === zh[15]) return zh[15];
-           if (OH[tB]) return zh[13];
-           const LH = Lh((() => rH[zB] ? zh[12] : zh[1]));
-           return LH !== zh[1] ? LH === zh[12] ? zh[12] : zh[1] : BH === Bh ? zh[1] : BH === zh[32] ? zh[32] : (PH(), AH = Function[zh[118] + zh[119]], SH = zh[139], hH = (...HH) => (HH[zh[0]] = zh[2], HH[zh[1]].writable !== zh[31]), Hh((() => {
+           if (OB === Jo[2]) return Jo[2];
+           if (UB[jO]) return Jo[7];
+           const GB = Yo((() => DB[yO] ? Jo[21] : Jo[1]));
+           return GB !== Jo[1] ? GB === Jo[21] ? Jo[21] : Jo[1] : OB === Go ? Jo[1] : OB === Jo[47] ? Jo[47] : (AB(), YB = Function[Jo[86] + Jo[87]], QB = Jo[131], oB = (...BB) => (BB[Jo[0]] = Jo[3], BB[Jo[1]].writable !== Jo[12]), Oo((() => {
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5879` → after: `L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5708) · [Before (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5879)

```diff
-           })) ? zh[4] : zh[1]);
+           })) ? Jo[61] : Jo[1]);
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5883-L5884` → after: `L5712-L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5712-L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5712-L5713) · [Before (L5883-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5883-L5884)

```diff
-         [zh[135] + "tSubChanged"]: (...HH) => {
-           if (HH[zh[0]] = zh[1], ZH === DH || jH) return zh[19];
+         [Jo[127] + "tSubChanged"]: (...BB) => {
+           if (BB[Jo[0]] = Jo[1], TB === aB || EB) return Jo[4];
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5888-L5889` → after: `L5717-L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5717-L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5717-L5718) · [Before (L5888-L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5888-L5889)

```diff
-         LX: (...HH) => {
-           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = IB);
+         sJ: (...BB) => {
+           Po(BB[Jo[0]] = Jo[1], BB[-Jo[124]] = uO);
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5892` → after: `L5721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5721) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5892)

```diff
-             LH[zh[1]] < HH[zh[3]] && xH(LH[zh[2]]) && (HH[zh[3]] = LH[zh[1]])
+             GB[Jo[1]] < BB[-Jo[124]] && RB(GB[Jo[3]]) && (BB[-Jo[124]] = GB[Jo[1]])
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5894` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5723) · [Before (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5894)

```diff
-           return HH[zh[3]] < IB ? oB[HH[zh[3]]] : zh[1]
+           return BB[-Jo[124]] < uO ? KO[BB[-Jo[124]]] : Jo[1]
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5896-L5897` → after: `L5725-L5726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5725-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5725-L5726) · [Before (L5896-L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5896-L5897)

```diff
-         PE: () => sH ? HL[zh[89]] : zh[44],
-         [zh[136] + zh[137] + "Subs"]: (...HH) => {
+         jM: () => HB ? BG[Jo[134]] : Jo[34],
+         [Jo[128] + Jo[129] + "Subs"]: (...BB) => {
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5899-L5900` → after: `L5728-L5729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5728-L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5728-L5729) · [Before (L5899-L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5899-L5900)

```diff
-           const BH = zH[zh[142]].YM[zh[136] + zh[137]];
-           return typeof BH === zh[138] && BH > zh[1] ? BH > zh[69] ? zh[69] : BH : zh[1]
+           const OB = yB[Jo[113]].zN[Jo[128] + Jo[129]];
+           return typeof OB === Jo[130] && OB > Jo[1] ? OB > Jo[66] ? Jo[66] : OB : Jo[1]
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5902-L5908` → after: `L5731-L5737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5731-L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5731-L5737) · [Before (L5902-L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5902-L5908)

```diff
-         ["getCom" + zh[153]]: (...HH) => {
-           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[20], pH = zh[1]);
-           for (let LH = zh[1]; LH < IH; LH++) SB(oH[LH], zh[31]);
-           for (let LH = zh[1]; LH < CB[zh[0]]; LH++) OH[CB[LH][zh[1]]] && SB(CB[LH][zh[2]], zh[31]);
-           const BH = Lh((() => yS(atob[zh[139]](), EH) ? zh[1] : zh[2]));
-           BH === zh[2] && SB(zh[29], zh[31]), PH();
-           const AH = BH === Bh ? Bh : Lh(((...HH) => {
+         ["getCom" + Jo[145]]: (...BB) => {
+           Po(BB[Jo[0]] = Jo[1], BB[Jo[136]] = Jo[5], xB = Jo[1]);
+           for (let GB = Jo[1]; GB < uB; GB++) QO(KB[GB], Jo[12]);
+           for (let GB = Jo[1]; GB < JO[Jo[0]]; GB++) UB[JO[GB][Jo[1]]] && QO(JO[GB][Jo[3]], Jo[12]);
+           const OB = Yo((() => Bo(atob[Jo[131]](), MB) ? Jo[1] : Jo[3]));
+           OB === Jo[3] && QO(Jo[132], Jo[12]), AB();
+           const YB = OB === Go ? Go : Yo(((...BB) => {
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5911` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5740) · [Before (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5911)

```diff
-             return BH === zh[20] ? Bh : BH[zh[140]] !== zh[20] ? zh[2] : zh[1]
+             return OB === Jo[5] ? Go : OB[Jo[133]] !== Jo[5] ? Jo[3] : Jo[1]
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5913` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5742) · [Before (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5913)

```diff
-           AH === zh[2] && SB(zh[143], zh[31]);
+           YB === Jo[3] && QO(Jo[85], Jo[12]);
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5915` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5744) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5915)

```diff
-           for (let LH = zh[1]; LH < EB[zh[0]] && !rH; LH++) OH[EB[LH][zh[1]]] && SB(EB[LH][zh[2]], zh[31]);
+           for (let GB = Jo[1]; GB < MO[Jo[0]] && !DB; GB++) UB[MO[GB][Jo[1]]] && QO(MO[GB][Jo[3]], Jo[12]);
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5917-L5918` → after: `L5746-L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5746-L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5746-L5747) · [Before (L5917-L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5917-L5918)

```diff
-           HH[zh[2]] = zh[21], IH === zh[1] && (lH > zh[1] ? HH[zh[2]] = fH[zh[1]] : eH ? HH[zh[2]] = "fp" : SH || (HH[zh[2]] = OH[XB] ? zh[141] : OH[GB] ? zh[83] : zh[21]));
-           for (let LH = zh[1]; LH < uB[zh[0]] && !rH; LH++) OH[uB[LH][zh[1]]] && SB(uB[LH][zh[2]], zh[31]);
+           BB[Jo[3]] = Jo[6], uB === Jo[1] && (IB > Jo[1] ? BB[Jo[3]] = mB[Jo[1]] : LB ? BB[Jo[3]] = "fp" : QB || (BB[Jo[3]] = UB[PO] ? Jo[115] : UB[zO] ? Jo[69] : Jo[6]));
+           for (let GB = Jo[1]; GB < pO[Jo[0]] && !DB; GB++) UB[pO[GB][Jo[1]]] && QO(pO[GB][Jo[3]], Jo[12]);
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5920-L5925` → after: `L5749-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5749-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5749-L5754) · [Before (L5920-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5920-L5925)

```diff
-             tH = (zh[1], gS[zh[8]])(),
-             zH = tH !== zh[21] && (zh[1], NB[zh[111]])(tH);
-           zH && !rH && SB(tH, zh[19]), FH && SB("ix", zh[19]), mH && SB("il", zh[19]);
-           for (let LH = zh[1]; LH < lH; LH++) SB(fH[LH], zh[31]);
-           for (let LH = zh[1]; LH < QB[zh[0]]; LH++) OH[QB[LH][zh[1]]] && SB(QB[LH][zh[2]], zh[31]);
-           OH[WB] && SB("mk:lk", zh[31]);
+             jB = (Jo[1], XQ[Jo[15]])(),
+             yB = jB !== Jo[6] && (Jo[1], XO[Jo[76]])(jB);
+           yB && !DB && QO(jB, Jo[4]), hB && QO("ix", Jo[4]), dB && QO("il", Jo[4]);
+           for (let GB = Jo[1]; GB < IB; GB++) QO(mB[GB], Jo[12]);
+           for (let GB = Jo[1]; GB < qO[Jo[0]]; GB++) UB[qO[GB][Jo[1]]] && QO(qO[GB][Jo[3]], Jo[12]);
+           UB[ZO] && QO("mk:lk", Jo[12]);
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5927` → after: `L5756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5756) · [Before (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5927)

```diff
-             HH[zh[0]] = zh[2];
+             BB[Jo[0]] = Jo[3], "PKmmOBY" in Mo && ([][Jo[0]] = Jo[1]);
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5930` → after: `L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5759) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5930)

```diff
-             return zh[21]
+             return Jo[6]
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5932-L5934` → after: `L5761-L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5761-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5761-L5763) · [Before (L5932-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5932-L5934)

```diff
-           if (CH !== zh[21] && SB(CH, zh[31]), LH !== zh[21] && TH(LH.emitReplaced) === zh[31] && SB("mk:em", zh[31]), UB && SB("3s", zh[19]), Qr.W && SB("3b", zh[19]), PH(), vH && SB("3d", zh[19]), rH && SB("3g", zh[19]), tH === zh[21] || zH || SB(tH, zh[19]), uH !== zh[21] && S … [truncated]
-             const HH = TH(LH[zh[133] + "mMeshHitStac" + zh[142]]);
-             typeof HH === zh[79] && (MH = function(HH, BH, LH) {
+           if (JB !== Jo[6] && QO(JB, Jo[12]), GB !== Jo[6] && VB(GB.emitReplaced) === Jo[12] && QO("mk:em", Jo[12]), SO && QO("3s", Jo[4]), ZD.Z && QO("3b", Jo[4]), AB(), WB && QO("3d", Jo[4]), DB && QO("3g", Jo[4]), jB === Jo[6] || yB || QO(jB, Jo[4]), pB !== Jo[6] && QO(pB, Jo[ … [truncated]
+             const BB = VB(GB[Jo[125] + "mMeshHitStac" + Jo[134]]);
+             typeof BB === Jo[68] && (NB = function(BB, OB, GB) {
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5937-L5938` → after: `L5766-L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5766-L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5766-L5767) · [Before (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5937-L5938)

```diff
-               return (0, KS.j)(aS(HH, AH < LH ? BH[AH] : null))
-             }(HH, XH, XH[zh[0]] - zh[2]))
+               return (0, iQ.k)(HQ(BB, YB < GB ? OB[YB] : null))
+             }(BB, PB, PB[Jo[0]] - Jo[3]))
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5941-L5944` → after: `L5770-L5773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5770-L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5770-L5773) · [Before (L5941-L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5941-L5944)

```diff
-           if (MH !== zh[21] && SB(MH, zh[19]), QH === zh[21] && HL[zh[143]] !== zh[21] && Eh((GH = HL[zh[143]], QH = (0, KS.g)(iS(GH).reader)), WH = pS(HL[zh[143]], TH((() => HL[zh[8]] === zh[21] ? zh[21] : (zh[1], Qr.db)(HL[zh[8]]))))), QH !== zh[21] && SB(QH, zh[19]), WH !== zh … [truncated]
-           if (HH[zh[2]] === zh[21] && iH[zh[1]] && !(zh[1], KS[zh[111]])(JH[zh[1]]))
-             for (let LH = zh[2]; LH < hH; LH++)
-               if (iH[LH] && (zh[1], KS[zh[111]])(JH[LH])) {
+           if (NB !== Jo[6] && QO(NB, Jo[4]), qB === Jo[6] && BG[Jo[85]] !== Jo[6] && Po((zB = BG[Jo[85]], qB = (0, iQ.h)(xQ(zB).reader)), ZB = tQ(BG[Jo[85]], VB((() => BG[Jo[17]] === Jo[6] ? Jo[6] : (Jo[1], ZD.jb)(BG[Jo[17]]))))), qB !== Jo[6] && QO(qB, Jo[4]), ZB !== Jo[6] && QO … [truncated]
+           if (BB[Jo[3]] === Jo[6] && sB[Jo[1]] && !(Jo[1], iQ[Jo[73]])(vB[Jo[1]]))
+             for (let GB = Jo[3]; GB < oB; GB++)
+               if (sB[GB] && (Jo[1], iQ[Jo[73]])(vB[GB])) {
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5946-L5947` → after: `L5775-L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5775-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5775-L5776) · [Before (L5946-L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5946-L5947)

```diff
-                 for (let BH = LH; BH > zh[1]; BH--) Eh(JH[BH] = JH[BH - zh[2]], iH[BH] = iH[BH - zh[2]]);
-                 Eh(JH[zh[1]] = HH, iH[zh[1]] = zh[31]);
+                 for (let OB = GB; OB > Jo[1]; OB--) Po(vB[OB] = vB[OB - Jo[3]], sB[OB] = sB[OB - Jo[3]]);
+                 Po(vB[Jo[1]] = BB, sB[Jo[1]] = Jo[12]);
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5949-L5951` → after: `L5778-L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5778-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5778-L5780) · [Before (L5949-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5949-L5951)

```diff
-               } if (Eh(HH[zh[15]] = zh[1], HH[zh[8]] = HH[zh[2]] === zh[21] ? zh[1] : hH), HH[zh[8]] > zh[1] && tH !== zh[21] && zH && !rH) {
-             for (let BH = HH[zh[8]]; BH > zh[1]; BH--) Eh(JH[BH] = JH[BH - zh[2]], iH[BH] = iH[BH - zh[2]]);
-             Eh(JH[zh[1]] = tH, iH[zh[1]] = zh[19], HH[zh[15]] = zh[2], HH[zh[8]]++)
+               } if (Po(BB[Jo[124]] = Jo[1], BB[Jo[17]] = BB[Jo[3]] === Jo[6] ? Jo[1] : oB), BB[Jo[17]] > Jo[1] && jB !== Jo[6] && yB && !DB) {
+             for (let OB = BB[Jo[17]]; OB > Jo[1]; OB--) Po(vB[OB] = vB[OB - Jo[3]], sB[OB] = sB[OB - Jo[3]]);
+             Po(vB[Jo[1]] = jB, sB[Jo[1]] = Jo[4], BB[Jo[124]] = Jo[3], BB[Jo[17]]++)
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5953-L5960` → after: `L5782-L5789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5782-L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5782-L5789) · [Before (L5953-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5953-L5960)

```diff
-           if (HH[zh[144]] = zh[1], yH++ % zh[15] === zh[2])
-             for (let LH = zh[2]; LH < pH; LH++) hB(LH) < hB(HH[zh[144]]) && (HH[zh[144]] = LH);
-           const YH = JH[HH[zh[144]]];
-           (iH[HH[zh[144]]] ? LB : BB)[YH] = HB++;
-           const xH = HH[zh[144]] >= HH[zh[15]] && HH[zh[144]] < HH[zh[8]];
-           if (!iH[HH[zh[144]]] || YH === HH[zh[2]] || HH[zh[144]] === zh[1] && !xH) return YH === zh[127] ? (zh[1], KS.x)(OH[YB], KS[zh[8]]) : YH;
-           const UH = (HH[zh[3]] = HH[zh[2]]) !== zh[21] && HH[zh[3]] !== void zh[1] ? HH[zh[3]] : JH[zh[1]];
-           return UH !== AB && Eh(AB = UH, rB = (zh[1], Qr[zh[74]])(zh[21])), rB[YH] ??= (zh[1], KS[zh[22]])(YH, UH)
+           if (BB[Jo[135]] = Jo[1], tB++ % Jo[2] === Jo[3])
+             for (let GB = Jo[3]; GB < xB; GB++) oO(GB) < oO(BB[Jo[135]]) && (BB[Jo[135]] = GB);
+           const lB = vB[BB[Jo[135]]];
+           (sB[BB[Jo[135]]] ? GO : OO)[lB] = BO++;
+           const RB = BB[Jo[135]] >= BB[Jo[124]] && BB[Jo[135]] < BB[Jo[17]];
+           if (!sB[BB[Jo[135]]] || lB === BB[Jo[3]] || BB[Jo[135]] === Jo[1] && !RB) return lB === Jo[8] ? (Jo[1], iQ[Jo[122]])(UB[lO], iQ[Jo[93]]) : lB;
+           const SB = (BB[Jo[136]] = BB[Jo[3]]) !== Jo[6] && BB[Jo[136]] !== void Jo[1] ? BB[Jo[136]] : vB[Jo[1]];
+           return SB !== YO && Po(YO = SB, DO = (Jo[1], ZD[Jo[32]])(Jo[6])), DO[lB] ??= (Jo[1], iQ[Jo[114]])(lB, SB)
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5963-L5964` → after: `L5792-L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5792-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5792-L5793) · [Before (L5963-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5963-L5964)

```diff
-       let RB = UL[zh[129]][zh[145]];
-       const jB = () => bB !== UL[zh[129]][zh[145]] ? bB : RB;
+       let wO = SG[Jo[119]][Jo[137]];
+       const EO = () => fO !== SG[Jo[119]][Jo[137]] ? fO : wO;
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5966` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5795) · [Before (L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5966)

```diff
-         FB = zh[15],
+         hO = Jo[2],
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5972` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5801) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5972)

```diff
-           HH[zh[0]] = zh[2];
+           BB[Jo[0]] = Jo[3];
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5975-L5976` → after: `L5804-L5805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5804-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5804-L5805) · [Before (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5975-L5976)

```diff
-             if (typeof BH === zh[112] + zh[113] && !(HH[zh[1]] instanceof BH) && !(zh[1], Qr.E)(HH[zh[1]])) return bB = UL[zh[129]].NotEvent, zh[1];
-             if (HH[zh[1]].isTrusted === zh[19]) return zh[1];
+             if (typeof OB === Jo[74] + Jo[75] && !(BB[Jo[1]] instanceof OB) && !(Jo[1], ZD[Jo[118]])(BB[Jo[1]])) return fO = SG[Jo[119]].NotEvent, Jo[1];
+             if (BB[Jo[1]].isTrusted === Jo[4]) return Jo[1];
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5979` → after: `L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5808) · [Before (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5979)

```diff
-             return LH < zh[65] ? (bB = UL[zh[129]]["FewPropertie" + zh[22]], zh[1]) : mB()
+             return GB < Jo[63] ? (fO = SG[Jo[119]]["FewPropertie" + Jo[114]], Jo[1]) : dO()
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5992` → after: `L5821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5821) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5992)

```diff
-           Eh(HH[zh[0]] = zh[15], HH[zh[15]] = zh[20]);
+           Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = Jo[5]);
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5994` → after: `L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5823) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5994)

```diff
-             HH[zh[15]] = HH[zh[2]]()
+             BB[Jo[2]] = BB[Jo[3]]()
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5996` → after: `L5825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5825) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5996)

```diff
-           eB[qB++] = [HH[zh[1]], () => !BH || HH[zh[2]]() !== HH[zh[15]]]
+           LO[gO++] = [BB[Jo[1]], () => !OB || BB[Jo[3]]() !== BB[Jo[2]]]
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5998` → after: `L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5827) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5998)

```diff
-         IX: (...HH) => {
+         kP: (...BB) => {
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6002-L6007` → after: `L5831-L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5831-L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5831-L5836) · [Before (L6002-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6002-L6007)

```diff
-             if (Eh(HH[zh[0]] = zh[2], HH[zh[146]] = zh[20], HH[zh[147]] = zh[20]), LH !== zh[21]) {
-               const BH = TH(LH.Mt),
-                 AH = "v3" === BH ? zh[13] : "v5" === BH ? zh[10] : "v6" === BH ? zh[32] : zh[15];
-               AH !== zh[15] && (FB = AH);
-               const rH = TH(LH["inbuil" + zh[151] + zh[152]]);
-               typeof rH === zh[138] && rH >= zh[1] && rH <= zh[40] && (rH | zh[1]) === rH && (DB = rH), Eh(HH[zh[146]] = TH(LH.reflectApplyHit), HH[zh[147]] = TH(LH.definerHit))
+             if (Po(BB[Jo[0]] = Jo[3], BB[-Jo[139]] = Jo[5], BB[Jo[15]] = Jo[5]), GB !== Jo[6]) {
+               const OB = VB(GB.Cy),
+                 YB = "v3" === OB ? Jo[7] : "v5" === OB ? Jo[16] : "v6" === OB ? Jo[47] : Jo[2];
+               YB !== Jo[2] && (hO = YB);
+               const DB = VB(GB["inbuil" + Jo[143] + Jo[144]]);
+               typeof DB === Jo[130] && DB >= Jo[1] && DB <= Jo[138] && (DB | Jo[1]) === DB && (aO = DB), Po(BB[-Jo[139]] = VB(GB.reflectApplyHit), BB[Jo[15]] = VB(GB.definerHit))
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6009` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5838) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6009)

```diff
-             const BH = HH[zh[1]] ? zh[52] : "11" === HH[zh[147]] ? zh[40] : "13" === HH[zh[147]] ? zh[148] : HH[zh[146]] !== zh[20] && HH[zh[146]] !== zh[21] ? zh[15] : "10" === HH[zh[147]] ? zh[65] : "12" === HH[zh[147]] ? zh[58] : zh[1];
+             const OB = BB[Jo[1]] ? Jo[44] : "11" === BB[Jo[15]] ? Jo[138] : "13" === BB[Jo[15]] ? Jo[140] : BB[-Jo[139]] !== Jo[5] && BB[-Jo[139]] !== Jo[6] ? Jo[2] : "10" === BB[Jo[15]] ? Jo[63] : "12" === BB[Jo[15]] ? Jo[55] : Jo[1];
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6011-L6012` → after: `L5840-L5841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5840-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5840-L5841) · [Before (L6011-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6011-L6012)

```diff
-           })(BH), nB++ % 10 === zh[1] && (VB(), Hh((() => !yS(rH[SH][zh[139]][zh[139]](), EH))) && (RB = RB === UL[zh[129]][zh[149]] ? UL[zh[129]][zh[149]] : UL[zh[129]].Fr), Hh((() => !yS(rH[SH][zh[139]](), EH))) && (RB = UL[zh[129]][zh[149]])), {
-             flags: BH ? UL[zh[16]].Butto : zh[1],
+           })(OB), cO++ % 10 === Jo[1] && (nO(), Oo((() => !Bo(DB[QB][Jo[131]][Jo[131]](), MB))) && (wO = wO === SG[Jo[119]][Jo[141]] ? SG[Jo[119]][Jo[141]] : SG[Jo[119]].Fr), Oo((() => !Bo(DB[QB][Jo[131]](), MB))) && (wO = SG[Jo[119]][Jo[141]])), {
+             flags: OB ? SG[Jo[85]].Butto : Jo[1],
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6014-L6017` → after: `L5843-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5843-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5843-L5846) · [Before (L6014-L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6014-L6017)

```diff
-               [UL[zh[150]].PhysicsVersion, FB],
-               [UL[zh[150]]["Inbuil" + zh[151] + zh[152]], DB],
-               [UL[zh[150]]["AltCom" + zh[153]], wB],
-               [UL[zh[150]]["ProbeUsedPro" + zh[154]], jB()]
+               [SG[Jo[142]].PhysicsVersion, hO],
+               [SG[Jo[142]]["Inbuil" + Jo[143] + Jo[144]], aO],
+               [SG[Jo[142]]["AltCom" + Jo[145]], eO],
+               [SG[Jo[142]]["ProbeUsedPro" + Jo[32]], EO()]
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6025` → after: `L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5854) · [Before (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6025)

```diff
-       Yh = gL.e,
+       qo = rG.h,
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6115` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5944) · [Before (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6115)

```diff
-         if (this.stopped) return WL.d;
+         if (this.stopped) return ZG.e;
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6144` → after: `L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5973) · [Before (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6144)

```diff
-               rH = ML(AH > 0 ? BH / AH : BH > 0 ? zH.volume : 0),
+               DB = NG(YB > 0 ? OB / YB : OB > 0 ? yB.volume : 0),
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6177` → after: `L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6006) · [Before (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6177)

```diff
-         client: String(IB.d)
+         client: String(uO.b)
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6221` → after: `L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6050) · [Before (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6221)

```diff
-           console.error(`${Xh} a startup listener threw`, BH)
+           console.error(`${zo} a startup listener threw`, OB)
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6301` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6130) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6301)

```diff
-       console.warn(`${Xh} chunk cancels from the server this session: ${HH}`)
+       console.warn(`${zo} chunk cancels from the server this session: ${BB}`)
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6315` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6144-L6146) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6315)

```diff
-       jz = null,
+       hy = null;
+     const ay = new WY.d;
+     let ey = "",
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6321` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6152) · [Before (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6321)

```diff
-           this.AX = HH, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.LX = !1
+           this.tM = BB, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.sJ = !1
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6327` → after: `L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6158) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6327)

```diff
-           (0, SL.b)(HH) && (this.lossPending = !1);
+           (0, QG.d)(BB) && (this.lossPending = !1);
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6329` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6160) · [Before (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6329)

```diff
-           this.lastFrameMs = LH, this.lossPending && BH && (0, SL.e)(HH) ? (null === this.undrawnSinceMs || AH > 1e3) && (this.undrawnSinceMs = LH) : this.undrawnSinceMs = null, this.show(this.LX || null !== this.undrawnSinceMs && LH - this.undrawnSinceMs >= 2e3)
+           this.lastFrameMs = GB, this.lossPending && OB && (0, QG.k)(BB) ? (null === this.undrawnSinceMs || YB > 1e3) && (this.undrawnSinceMs = GB) : this.undrawnSinceMs = null, this.show(this.sJ || null !== this.undrawnSinceMs && GB - this.undrawnSinceMs >= 2e3)
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6332` → after: `L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6163) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6332)

```diff
-           this.LX = HH, this.show(HH || this.shown)
+           this.sJ = BB, this.show(BB || this.shown)
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6335` → after: `L6166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6166) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6335)

```diff
-           this.LX = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
+           this.sJ = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6338` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6169) · [Before (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6338)

```diff
-           HH !== this.shown && (this.shown = HH, this.AX(HH))
+           BB !== this.shown && (this.shown = BB, this.tM(BB))
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6341` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6172) · [Before (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6341)

```diff
-         zH.k.AX(uH.h, HH)
+         yB.o.tM(pB.h, BB)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6346` → after: `L6177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6177) · [Before (L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6346)

```diff
-           this.XX = HH, this.now = BH, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
+           this.jP = BB, this.now = OB, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6356` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6187) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6356)

```diff
-           (0, SL.e)(HH) && BH && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
+           (0, QG.k)(BB) && OB && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6363` → after: `L6194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6194) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6363)

```diff
-           return null !== BH && HH - BH.atMs < 3e4 ? BH : null
+           return null !== OB && BB - OB.atMs < 3e4 ? OB : null
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6373` → after: `L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6204) · [Before (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6373)

```diff
-               firstLostAtMs: null !== (BH = null === AH || void 0 === AH ? void 0 : AH.firstLostAtMs) && void 0 !== BH ? BH : HH.lostAtMs,
+               firstLostAtMs: null !== (OB = null === YB || void 0 === YB ? void 0 : YB.firstLostAtMs) && void 0 !== OB ? OB : BB.lostAtMs,
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6377` → after: `L6208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6208) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6377)

```diff
-             this.XX(`webgl_restored_${rH}_${HH.delay}`, `WebGL2 context restored (${rH}, wasm)`)
+             this.jP(`webgl_restored_${DB}_${BB.delay}`, `WebGL2 context restored (${DB}, wasm)`)
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6385` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6216) · [Before (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6385)

```diff
-               AH = null === LH ? HH.delay : (0, hL.j)(this.now() - LH.firstLostAtMs),
+               YB = null === GB ? BB.delay : (0, oG.l)(this.now() - GB.firstLostAtMs),
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6387` → after: `L6218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6218) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6387)

```diff
-             this.XX(`webgl_rejoin_${rH}_${AH}`, "WebGL2 context not restored: rejoining (wasm)")
+             this.jP(`webgl_rejoin_${DB}_${YB}`, "WebGL2 context not restored: rejoining (wasm)")
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6395` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6226) · [Before (L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6395)

```diff
-             delay: (0, hL.j)(this.now() - HH),
+             delay: (0, oG.l)(this.now() - BB),
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6403` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6234) · [Before (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6403)

```diff
-           this.deps = HH, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
+           this.deps = BB, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6456` → after: `L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6287) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6456)

```diff
-           const BH = (0, tL.f)(this.storage);
+           const OB = (0, jG.i)(this.storage);
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6474-L6475` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6305-L6306) · [Before (L6474-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6474-L6475)

```diff
-             } = (0, tL.k)(HH, BH - LH);
-             this.deps.XX(AH, rH)
+             } = (0, jG.n)(BB, OB - GB);
+             this.deps.jP(YB, DB)
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6479` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6310) · [Before (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6479)

```diff
-           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(tL.b)
+           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(jG.e)
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6482` → after: `L6313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6313) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6482)

```diff
-           this.storage.setItem(tL.b, HH)
+           this.storage.setItem(jG.e, BB)
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6485-L6486` → after: `L6316-L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6316-L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6316-L6317) · [Before (L6485-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6485-L6486)

```diff
-         XX: SA.reportRenderRecovery,
-         probe: () => CL("rust_webgl1" === (0, ir.H)()),
+         jP: QY.reportRenderRecovery,
+         probe: () => JG("rust_webgl1" === (0, xD.I)()),
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6505` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6336) · [Before (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6505)

```diff
-         renderer: QL.b[BH]
+         renderer: qG.e[OB]
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6510` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6341) · [Before (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6510)

```diff
-       return Rh ??= Promise.all([LH.e(220), LH.e(170), LH.e(238), LH.e(49), LH.e(71)]).then((() => LH(54528))).then((HH => (Nh = HH, Object.assign(globalThis, {
+       return ho ??= Promise.all([GB.e(220), GB.e(170), GB.e(238), GB.e(49), GB.e(71)]).then((() => GB(54039))).then((BB => (co = BB, Object.assign(globalThis, {
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6518-L6519` → after: `L6349-L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6349-L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6349-L6350) · [Before (L6518-L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6518-L6519)

```diff
-       return gh ??= LH.e(69).then((() => LH(54546))).catch((HH => {
-         throw gh = null, new DH.d(HH)
+       return Eo ??= GB.e(69).then((() => GB(54057))).catch((BB => {
+         throw Eo = null, new aB.e(BB)
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6544-L6545` → after: `L6375-L6376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6375-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6375-L6376) · [Before (L6544-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6544-L6545)

```diff
-       qh || (qh = !0, wr.j.setHost(new LC), (0, CA.h)(), jr.i.setFollower(XE), Object.assign(globalThis, {
-         bloxdPreviews: wr.j
+       wo || (wo = !0, TD.i.setHost(new oJ), (0, JY.p)(), cD.g.setFollower(qM), Object.assign(globalThis, {
+         bloxdPreviews: TD.i
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6558` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6389) · [Before (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6558)

```diff
-       eh = !0, az = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), sz = !az, console.info(`${Xh} starting`), ch || (ch = !0, (0, uH.S)(new GL(VC, lC, yz)), (0, GH.l)(new YL), (0, uH.O)(new uL((() => performance.now() - kt))), (0, uH.G)()),  … [truncated]
+       Xo = !0, xy = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), ty = !xy, console.info(`${zo} starting`), ro || (ro = !0, (0, pB.N)(new zG(dJ, gJ, YJ)), (0, zB.m)(new lG), (0, pB.J)(new pG((() => performance.now() - uj))), (0, pB.A)()),  … [truncated]
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6561` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6392) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6561)

```diff
-         BH = th("1mg46dsj19d", (() => {
+         OB = yo("1jfbrwdbk5d", (() => {
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6563-L6564` → after: `L6394-L6395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6394-L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6394-L6395) · [Before (L6563-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6563-L6564)

```diff
-           return null !== (HH = null === (BH = Ht) || void 0 === BH ? void 0 : BH.ws) && void 0 !== HH ? HH : null
-         }), HH, "oxctydzlin")
+           return null !== (BB = null === (OB = Yj) || void 0 === OB ? void 0 : OB.ws) && void 0 !== BB ? BB : null
+         }), BB, "yuhqvdtpwj")
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6566` → after: `L6397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6397) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6566)

```diff
-         console.error(`${Xh} probes`, rH)
+         console.error(`${zo} probes`, DB)
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6570` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6401) · [Before (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6570)

```diff
-           BH = (0, Yr.h)();
+           OB = (0, pD.j)();
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6583` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6414) · [Before (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6583)

```diff
-             lobby: null !== (BH = LH.get("lobby")) && void 0 !== BH ? BH : null
+             lobby: null !== (OB = GB.get("lobby")) && void 0 !== OB ? OB : null
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6592` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6423) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6592)

```diff
-               await (0, DH.j)(HH), Jt = gC(new WebSocket(BH)), null !== Jt && nr.d.setGame(null), hC()
+               await (0, aB.m)(BB), xj = cJ(new WebSocket(OB)), null !== xj && hD.b.setGame(null), MJ()
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6594` → after: `L6425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6425) · [Before (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6594)

```diff
-               console.error(`${Xh} ?ws=${BH} did not attach`, rH)
+               console.error(`${zo} ?ws=${OB} did not attach`, DB)
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6601-L6602` → after: `L6432-L6433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6432-L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6432-L6433) · [Before (L6601-L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6601-L6602)

```diff
-         const EH = (0, ir._)();
-         let GH = await (0, ir.R)();
+         const MB = (0, xD.T)();
+         let zB = await (0, xD.P)();
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6605` → after: `L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6436) · [Before (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6605)

```diff
-             return !(0, FB.s)((0, FB.v)(), AE, HH, FB.e) && (0, FB.p)(AE, HH, FB.e)
+             return !(0, hO.n)((0, hO.p)(), jM, BB, hO.b) && (0, hO.j)(jM, BB, hO.b)
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6612` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6443) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6612)

```diff
-             console.warn(`${Xh} ${BH}: waiting for a WebGL context`);
+             console.warn(`${zo} ${OB}: waiting for a WebGL context`);
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6615` → after: `L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6446) · [Before (L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6615)

```diff
-                 sleep: (HH, BH) => (0, iB.d)(HH, BH).catch((() => {})),
+                 sleep: (BB, OB) => (0, sO.c)(BB, OB).catch((() => {})),
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6617` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6448) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6617)

```diff
-                   const HH = await (0, ir.cb)();
+                   const BB = await (0, xD.X)();
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6619` → after: `L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6450) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6619)

```diff
-                     XY: HH
+                     pl: BB
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6637` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6468) · [Before (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6637)

```diff
-                 detail: `${BH}; ${HH}`,
+                 detail: `${OB}; ${BB}`,
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6644` → after: `L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6475) · [Before (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6644)

```diff
-               } : ((0, EB.c)("/"), null)
+               } : ((0, MO.f)("/"), null)
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6647` → after: `L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6478) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6647)

```diff
-               XY: hH
+               pl: oB
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6649` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6480) · [Before (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6649)

```diff
-             if (!(0, gL.k)(hH)) {
+             if (!(0, rG.u)(oB)) {
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6651` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6482) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6651)

```diff
-               const HH = null !== (tH = null === hH || void 0 === hH ? void 0 : hH.backend) && void 0 !== tH ? tH : "none";
+               const BB = null !== (jB = null === oB || void 0 === oB ? void 0 : oB.backend) && void 0 !== jB ? jB : "none";
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6662` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6493) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6662)

```diff
-               }), null !== hH && (0, ir.W)(hH.backend)
+               }), null !== oB && (0, xD.S)(oB.backend)
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6677` → after: `L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6508) · [Before (L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6677)

```diff
-           GH = HH.XY
+           zB = BB.pl
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6680` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6511) · [Before (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6680)

```diff
-           const LH = (0, gL.k)(HH) ? rE(HH, BH) : null;
+           const GB = (0, rG.u)(BB) ? yM(BB, OB) : null;
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6682` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6513) · [Before (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6682)

```diff
-           console.warn(`${Xh} ${LH.detail}: picking again in ${HE} ms`), await new Promise((HH => {
+           console.warn(`${zo} ${GB.detail}: picking again in ${DM} ms`), await new Promise((BB => {
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6685-L6686` → after: `L6516-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6516-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6516-L6517) · [Before (L6685-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6685-L6686)

```diff
-           const AH = await (0, ir.cb)();
-           if (!(0, gL.k)(AH)) {
+           const YB = await (0, xD.X)();
+           if (!(0, rG.u)(YB)) {
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6690-L6691` → after: `L6521-L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6521-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6521-L6522) · [Before (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6690-L6691)

```diff
-               backend: null !== (rH = null === AH || void 0 === AH ? void 0 : AH.backend) && void 0 !== rH ? rH : "none"
-             }), null !== AH && (0, ir.W)(AH.backend)
+               backend: null !== (DB = null === YB || void 0 === YB ? void 0 : YB.backend) && void 0 !== DB ? DB : "none"
+             }), null !== YB && (0, xD.S)(YB.backend)
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6695` → after: `L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6526) · [Before (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6695)

```diff
-         if ((0, SA.setCrashBackend)((0, gL.k)(YH) ? "unsupported" : null !== (BH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== BH ? BH : "none"), (0, gL.k)(YH)) return function(HH) {
+         if ((0, QY.setCrashBackend)((0, rG.u)(lB) ? "unsupported" : null !== (OB = null === lB || void 0 === lB ? void 0 : lB.backend) && void 0 !== OB ? OB : "none"), (0, rG.u)(lB)) return function(BB) {
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6702` → after: `L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6533) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6702)

```diff
-           if (rH && (0, nB.v)()) return (0, SA.reportNoBackendRetry)("reload", BH, LH, AH), void hE(`${LH}, again after ${HE} ms`);
+           if (DB && (0, cO.p)()) return (0, QY.reportNoBackendRetry)("reload", OB, GB, YB), void MM(`${GB}, again after ${DM} ms`);
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6705` → after: `L6536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6536) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6705)

```diff
-             afterReload: String(nB.E)
+             afterReload: String(cO.x)
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6708` → after: `L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6539) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6708)

```diff
-         if ((0, xS.o)("render")) try {
+         if ((0, WQ.s)("render")) try {
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6711` → after: `L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6542) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6711)

```diff
-           } = await Promise.all([LH.e(89), LH.e(56)]).then((() => LH(5137)));
+           } = await Promise.all([GB.e(89), GB.e(56)]).then((() => GB(5152)));
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6716` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6547) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6716)

```diff
-         if ((0, xS.o)("renderlite")) try {
+         if ((0, WQ.s)("renderlite")) try {
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6719` → after: `L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6550) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6719)

```diff
-           } = await Promise.all([LH.e(300), LH.e(57)]).then((() => LH(54558)));
+           } = await Promise.all([GB.e(300), GB.e(57)]).then((() => GB(54067)));
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6724` → after: `L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6555) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6724)

```diff
-         if ((0, xS.o)("renderprobe")) try {
+         if ((0, WQ.s)("renderprobe")) try {
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6727` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6558) · [Before (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6727)

```diff
-           } = await LH.e(58).then((() => LH(54562)));
+           } = await GB.e(58).then((() => GB(54076)));
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6732` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6563) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6732)

```diff
-         if ("webgl" === (null === YH || void 0 === YH ? void 0 : YH.backend) && az && "address" !== nB.A.reason) {
+         if ("webgl" === (null === lB || void 0 === lB ? void 0 : lB.backend) && xy && "address" !== cO.u.reason) {
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6734-L6741` → after: `L6565-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6565-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6565-L6572) · [Before (L6734-L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6734-L6741)

```diff
-           null !== HH && (0, DB.h)(HH)
-         }
-         const uH = null !== (AH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== AH ? AH : null;
-         vz.adapter = null !== (SH = null === YH || void 0 === YH ? void 0 : YH.adapter) && void 0 !== SH ? SH : null, vz.boundAtMs = null, vz.indirectHangs = null, vz.restoresSkipped = null;
-         const QH = !(0, gL.Y)();
-         null === YH || (0, gL.C)(YH.reason) || console.info(`${Xh} drawing with ${YH.backend}: ${YH.reason}`);
-         const WH = (0, ir.D)();
-         mH("previews"), ih(!0), (0, DH.v)((HH => {
+           null !== BB && (0, aO.j)(BB)
+         }
+         const pB = null !== (YB = null === lB || void 0 === lB ? void 0 : lB.backend) && void 0 !== YB ? YB : null;
+         Vy.adapter = null !== (QB = null === lB || void 0 === lB ? void 0 : lB.adapter) && void 0 !== QB ? QB : null, Vy.boundAtMs = null, Vy.indirectHangs = null, Vy.restoresSkipped = null;
+         const qB = !(0, rG.gb)();
+         null === lB || (0, rG.K)(lB.reason) || console.info(`${zo} drawing with ${lB.backend}: ${lB.reason}`);
+         const ZB = (0, xD.G)();
+         dB("previews"), Bj(!0), (0, aB.u)((BB => {
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6745` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6576) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6745)

```diff
-               Tz = HH.rasterText, pt = HH.setTextLocalPlayer, HH.setTextLocalPlayer(null !== (BH = null === (LH = it) || void 0 === LH ? void 0 : LH.info.playerDbId) && void 0 !== BH ? BH : null), Uz = HH.drainTextRerasters, Vz = HH.loadTextIcons, HH.warmText((() => cz)), HH.text … [truncated]
+               ny = BB.rasterText, By = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (OB = null === (GB = tj) || void 0 === GB ? void 0 : GB.info.playerDbId) && void 0 !== OB ? OB : null), Uy = BB.drainTextRerasters, fy = BB.loadTextIcons, BB.warmText((() => gy)), BB.text … [truncated]
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6755-L6756` → after: `L6586-L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6586-L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6586-L6587) · [Before (L6755-L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6755-L6756)

```diff
-         })), (0, DH.m)(wh).catch((HH => {
-           console.warn(`${Xh} the game code did not load: a join asks again`, HH)
+         })), (0, aB.p)(Co).catch((BB => {
+           console.warn(`${zo} the game code did not load: a join asks again`, BB)
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6758` → after: `L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6589) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6758)

```diff
-         const MH = (0, ir.k)(YH);
+         const NB = (0, xD.m)(lB);
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6760` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6591) · [Before (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6760)

```diff
-         MH.catch((() => {})), "loading" === (0, cB.B)() && (IH(), mH("load"));
+         NB.catch((() => {})), "loading" === (0, iO.x)() && (uB(), dB("load"));
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6763` → after: `L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6594) · [Before (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6763)

```diff
-             const BH = null !== HH && void 0 !== HH ? HH : document.createElement("canvas");
+             const OB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6773` → after: `L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6604) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6773)

```diff
-                     null === (HH = fz) || void 0 === HH || HH.glContextLost(BH, LH, null !== (AH = null !== (rH = !1 === (null === (SH = jh) || void 0 === SH ? void 0 : SH.isStopped) ? jh.addDistanceInUse() : null) && void 0 !== rH ? rH : null === (hH = sE()) || void 0 === hH ? v … [truncated]
+                     null === (BB = Fy) || void 0 === BB || BB.glContextLost(OB, GB, null !== (YB = null !== (DB = !1 === (null === (QB = ao) || void 0 === QB ? void 0 : QB.isStopped) ? ao.addDistanceInUse() : null) && void 0 !== DB ? DB : null === (oB = GP()) || void 0 === oB ? v … [truncated]
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6776-L6779` → after: `L6607-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6607-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6607-L6610) · [Before (L6776-L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6776-L6779)

```diff
-               }(BH), (0, tS.j)();
-             const LH = (0, XL.d)(),
-               AH = (0, XL.f)(LH);
-             BH.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, hS.f)(BH, AH), (0, XL.c)(BH, LH), BH.width = AH.bufferWidth, BH.height = AH.bufferHeight;
+               }(OB), (0, yQ.k)();
+             const GB = (0, PG.i)(),
+               YB = (0, PG.l)(GB);
+             OB.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, jQ.g)(OB, YB), (0, PG.e)(OB, GB), OB.width = YB.bufferWidth, OB.height = YB.bufferHeight;
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6788` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6619) · [Before (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6788)

```diff
-             (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the previews did not load: ${String(rH)}`)
+             (0, QY.showUnsupported)((0, nO.p)("fetch"), dQ.e.fetch, `the previews did not load: ${String(DB)}`)
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6791` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6622) · [Before (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6791)

```diff
-         IH(), mH("loading" === (0, cB.B)() ? "load" : "build");
+         uB(), dB("loading" === (0, iO.x)() ? "load" : "build");
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6799` → after: `L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6630) · [Before (L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6799)

```diff
-             (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the ${null!==uH&&void 0!==uH?uH:"client"} build did not load: ${String(rH)}`)
+             (0, QY.showUnsupported)((0, nO.p)("fetch"), dQ.e.fetch, `the ${null!==pB&&void 0!==pB?pB:"client"} build did not load: ${String(DB)}`)
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6802-L6805` → after: `L6633-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6633-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6633-L6636) · [Before (L6802-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6802-L6805)

```diff
-         const TH = (0, ir.h)(),
-           UH = !TH && !0 !== zL.f.getItem(Gh),
-           VH = !TH && "loading" === (0, cB.B)();
-         mH("load"), await (0, pr.d)(vH, {
+         const VB = (0, xD.g)(),
+           SB = !VB && !0 !== yG.i.getItem(po),
+           nB = !VB && "loading" === (0, iO.x)();
+         dB("load"), await (0, tD.b)(WB, {
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6807` → after: `L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6638) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6807)

```diff
-         }), VH && !(0, cB.U)() && await (0, pr.d)(vH, {
+         }), nB && !(0, iO.S)() && await (0, tD.b)(WB, {
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6812-L6815` → after: `L6643-L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6643-L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6643-L6646) · [Before (L6812-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6812-L6815)

```diff
-         const kH = (0, cB.q)();
-         if (!(0, cB.U)() && ("compile" === kH || "instantiate" === kH) && (0, cB.P)()) {
-           const HH = (0, cB.k)();
-           console.warn(`${Xh} the wasm client did not ${kH} here (${HH}): loading it again`);
+         const kB = (0, iO.n)();
+         if (!(0, iO.S)() && ("compile" === kB || "instantiate" === kB) && (0, iO.M)()) {
+           const BB = (0, iO.g)();
+           console.warn(`${zo} the wasm client did not ${kB} here (${BB}): loading it again`);
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6842-L6846` → after: `L6673-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6673-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6673-L6677) · [Before (L6842-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6842-L6846)

```diff
-             sleep: HH => (0, iB.d)(HH),
-             outOfMemory: () => (0, bL.c)((0, cB.p)()),
-             retryable: cB.P,
-             stepDownMemory: () => "instantiate" !== (0, cB.q)() || !tE() || (0, BA.p)() ? "none" : "halve" === (0, BA.o)() ? "halved" : "spent",
-             retry: pr.h
+             sleep: BB => (0, sO.c)(BB),
+             outOfMemory: () => (0, fG.c)((0, iO.l)()),
+             retryable: iO.M,
+             stepDownMemory: () => "instantiate" !== (0, iO.n)() || !PM() || (0, OY.s)() ? "none" : "halve" === (0, OY.p)() ? "halved" : "spent",
+             retry: tD.e
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6852` → after: `L6683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6683) · [Before (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6852)

```diff
-           } = BH, rH = AH ? HH : (0, cB.k)();
+           } = OB, DB = YB ? BB : (0, iO.g)();
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6864-L6869` → after: `L6695-L6700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6695-L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6695-L6700) · [Before (L6864-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6864-L6869)

```diff
-         if (!(0, cB.U)()) {
-           (0, cB.S)() && "compile" !== kH && "instantiate" !== kH && zL.f.setItem(Gh, !0);
-           const HH = (0, cB.q)();
-           if (fH("instantiate" === HH || null === HH ? `instantiate_${oH((0,cB.p)())}` : HH), "call" === HH) wE({
-             site: RL.u,
-             error: (0, cB.p)(),
+         if (!(0, iO.S)()) {
+           (0, iO.O)() && "compile" !== kB && "instantiate" !== kB && yG.i.setItem(po, !0);
+           const BB = (0, iO.n)();
+           if (mB("instantiate" === BB || null === BB ? `instantiate_${KB((0,iO.l)())}` : BB), "call" === BB) xM({
+             site: wG.s,
+             error: (0, iO.l)(),
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6873` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6704) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6873)

```diff
-             const BH = null !== HH && void 0 !== HH ? HH : "instantiate",
+             const OB = null !== BB && void 0 !== BB ? BB : "instantiate",
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6875` → after: `L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6706) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6875)

```diff
-                 (0, SA.showUnsupported)((0, VB.o)(BH), kS.i[BH], (0, cB.k)())
+                 (0, QY.showUnsupported)((0, nO.p)(OB), dQ.e[OB], (0, iO.g)())
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6877` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6708) · [Before (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6877)

```diff
-               AH = "compile" === kH || "instantiate" === kH ? kH : HH;
+               YB = "compile" === kB || "instantiate" === kB ? kB : BB;
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6879-L6883` → after: `L6710-L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6710-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6710-L6714) · [Before (L6879-L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6879-L6883)

```diff
-               const HH = OH || (0, bL.c)((0, cB.p)());
-               if (az && (HH && tE() ? !bH && "spent" !== (0, BA.o)(Date.now(), !0) : (0, nB.v)())) {
-                 const BH = (0, cB.k)();
-                 return (0, SA.reportLoadReload)((0, VB.o)(AH), kS.i[AH], BH), hE(`the wasm client ${HH?"ran out of memory to":"did not"} ${AH} here (${BH})`), null
-               }(0, SA.showUnsupported)(HH ? "memory" : (0, VB.o)(AH), kS.i[AH], (0, cB.k)())
+               const BB = UB || (0, fG.c)((0, iO.l)());
+               if (xy && (BB && PM() ? !fB && "spent" !== (0, OY.p)(Date.now(), !0) : (0, cO.p)())) {
+                 const OB = (0, iO.g)();
+                 return (0, QY.reportLoadReload)((0, nO.p)(YB), dQ.e[YB], OB), MM(`the wasm client ${BB?"ran out of memory to":"did not"} ${YB} here (${OB})`), null
+               }(0, QY.showUnsupported)(BB ? "memory" : (0, nO.p)(YB), dQ.e[YB], (0, iO.g)())
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6888` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6719) · [Before (L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6888)

```diff
-                 error: (0, cB.k)(),
+                 error: (0, iO.g)(),
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6897` → after: `L6728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6728) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6897)

```diff
-         const KH = (0, cB.D)();
+         const FB = (0, iO.A)();
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6903` → after: `L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6734) · [Before (L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6903)

```diff
-             wasm: KH.wX()
+             wasm: FB.eP()
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6906-L6910` → after: `L6737-L6741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6737-L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6737-L6741) · [Before (L6906-L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6906-L6910)

```diff
-             RW: HH
-           } = vH.bindings, BH = HH.XrH();
-           if (BH !== UL.y) return fH("core_other"), wE({
-             site: RL.e,
-             error: `core ABI ${BH}, page ABI ${UL.y}`,
+             EZ: BB
+           } = WB.bindings, OB = BB.ADB();
+           if (OB !== SG.x) return mB("core_other"), xM({
+             site: wG.d,
+             error: `core ABI ${OB}, page ABI ${SG.x}`,
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6913` → after: `L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6744) · [Before (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6913)

```diff
-           const [LH, AH] = (0, UL.qe)();
+           const [GB, YB] = (0, SG.me)();
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6916-L6917` → after: `L6747-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6747-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6747-L6748) · [Before (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6916-L6917)

```diff
-           return fH(`core_${oH(rH)}`), wE({
-             site: RL.e,
+           return mB(`core_${KB(DB)}`), xM({
+             site: wG.d,
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6923` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6754) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6923)

```diff
-         const qH = new RL.h(cH, cB.u, {
+         const gB = new wG.g(iB, iO.u, {
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6928` → after: `L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6759) · [Before (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6928)

```diff
-                 if ("webgpu" !== BH || (0, ir.e)()) return !1;
+                 if ("webgpu" !== OB || (0, xD.c)()) return !1;
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6930-L6931` → after: `L6761-L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6761-L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6761-L6762) · [Before (L6930-L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6930-L6931)

```diff
-                   if (HH.site === RL.g && (0, gL.n)(HH.error)) return "frames_refused";
-                   return HH.site === Yh && (0, gL.p)(HH.error) ? "start_failed" : null
+                   if (BB.site === wG.e && (0, rG.v)(BB.error)) return "frames_refused";
+                   return BB.site === qo && (0, rG.y)(BB.error) ? "start_failed" : null
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6934-L6935` → after: `L6765-L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6765-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6765-L6766) · [Before (L6934-L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6934-L6935)

```diff
-                 if (null !== (0, gL.X)(rH, AH, (0, NL.c)(HH.error))) return (0, SA.countRenderLost)(rH, HH.error, vz), !1;
-                 return AL.D.reloaded(null, !1), (0, SA.reportRenderReload)("webgpu", "start_failed" === rH ? 0 : 1, LH, {
+                 if (null !== (0, rG.eb)(DB, YB, (0, XG.c)(BB.error))) return (0, QY.countRenderLost)(DB, BB.error, Vy), !1;
+                 return YG.C.reloaded(null, !1), (0, QY.reportRenderReload)("webgpu", "start_failed" === DB ? 0 : 1, GB, {
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6952-L6953` → after: `L6783-L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6783-L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6783-L6784) · [Before (L6952-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6952-L6953)

```diff
-               return BH === UL.F.RenderDeviceLost
-             })) && ((0, ir.w)(), wz.deviceLost(), "webgpu" === uH && ((0, NL.d)(Pz), AL.D.lost())), null === (LH = fz) || void 0 === LH || LH.coreErrors(HH);
+               return OB === SG.I.RenderDeviceLost
+             })) && ((0, xD.D)(), Hy.deviceLost(), "webgpu" === pB && ((0, XG.d)(Sy), YG.C.lost())), null === (GB = Fy) || void 0 === GB || GB.coreErrors(BB);
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6957` → after: `L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6788) · [Before (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6957)

```diff
-                 return HH === UL.F.EnvUnknownSky ? (0, SA.unknownSkyWords)(wB.e.get("skyBox")) : HH === UL.F.RenderDeviceLost ? (0, SA.deviceLossWords)(BH, vz.boundAtMs) : null === (LH = Pz) || void 0 === LH ? void 0 : LH.GrH(HH, BH)
+                 return BB === SG.I.EnvUnknownSky ? (0, QY.unknownSkyWords)(eO.e.get("skyBox")) : BB === SG.I.RenderDeviceLost ? (0, QY.deviceLossWords)(OB, Vy.boundAtMs) : null === (GB = Sy) || void 0 === GB ? void 0 : GB.VDB(BB, OB)
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6964` → after: `L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6795) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6964)

```diff
-               return BH === UL.F.EnvUnknownSky
+               return OB === SG.I.EnvUnknownSky
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6970-L6975` → after: `L6801-L6806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6801-L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6801-L6806) · [Before (L6970-L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6970-L6975)

```diff
-               if ((0, ir.e)()) return;
-               const tH = BH === UL.Vc.WEBGPU,
-                 zH = AH === UL.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 CH = AH === UL.Vc.RESTORE_LOST,
-                 EH = tH && (0, AL.q)(vz.adapter, LH, "lost" === zH, CH),
-                 GH = (0, NL.i)(Pz);
+               if ((0, xD.c)()) return;
+               const jB = OB === SG.dd.WEBGPU,
+                 yB = YB === SG.dd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 JB = YB === SG.dd.RESTORE_LOST,
+                 MB = jB && (0, YG.r)(Vy.adapter, GB, "lost" === yB, JB),
+                 zB = (0, XG.l)(Sy);
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6977` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6808) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6977)

```diff
-               const YH = tH ? (0, gL.X)(zH, rH, GH) : null;
+               const lB = jB ? (0, rG.eb)(yB, DB, zB) : null;
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6980-L6981` → after: `L6811-L6812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6811-L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6811-L6812) · [Before (L6980-L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6980-L6981)

```diff
-                 const BH = void 0 === GH ? "" : ` (${GH.message})`;
-                 return void HH.crash(SA.RENDER_RELOAD_SITE, new Error(`${(0,SA.renderReloadMessage)("webgpu",zH,LH)} and ${YH}${BH}`))
+                 const OB = void 0 === zB ? "" : ` (${zB.message})`;
+                 return void BB.crash(QY.RENDER_RELOAD_SITE, new Error(`${(0,QY.renderReloadMessage)("webgpu",yB,GB)} and ${lB}${OB}`))
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6984` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6815) · [Before (L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6984)

```diff
-               "lost" === zH && (0, ir.w)();
+               "lost" === yB && (0, xD.D)();
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6986` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6817) · [Before (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6986)

```diff
-                 if (Zz.gaveUp(), !(0, nB.v)()) {
+                 if (vy.gaveUp(), !(0, cO.p)()) {
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6988-L6989` → after: `L6819-L6820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6819-L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6819-L6820) · [Before (L6988-L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6988-L6989)

```diff
-                   const BH = void 0 === GH ? "" : ` (${GH.message})`;
-                   return void HH.crash(SA.RENDER_RELOAD_SITE, new SA.GraphicsLostError(`${(0,SA.renderReloadMessage)(uH,zH,LH)} and ${nB.f}${BH}`))
+                   const OB = void 0 === zB ? "" : ` (${zB.message})`;
+                   return void BB.crash(QY.RENDER_RELOAD_SITE, new QY.GraphicsLostError(`${(0,QY.renderReloadMessage)(pB,yB,GB)} and ${cO.f}${OB}`))
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6991` → after: `L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6822) · [Before (L6991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6991)

```diff
-                 console.warn(`${Xh} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
+                 console.warn(`${zo} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7000-L7001` → after: `L6831-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6831-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6831-L6832) · [Before (L7000-L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7000-L7001)

```diff
-               }), (0, ir.q)();
-               const QH = (0, XH.e)();
+               }), (0, xD.s)();
+               const qB = (0, PB.g)();
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7007` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6838) · [Before (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7007)

```diff
-               const vH = (0, XH.o)((() => {
+               const WB = (0, PB.l)((() => {
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7017` → after: `L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6848) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7017)

```diff
-             HH.kind === UL.X.SkyImages ? null === (BH = Qt) || void 0 === BH || BH.onEvent(HH.payload) : HH.kind === UL.X.EnvLighting && (Wt = 1 === HH.payload[0])
+             BB.kind === SG.Y.SkyImages ? null === (OB = Rj) || void 0 === OB || OB.onEvent(BB.payload) : BB.kind === SG.Y.EnvLighting && (Wj = 1 === BB.payload[0])
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7039` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6870) · [Before (L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7039)

```diff
-                   !1 !== BH || HH.isStopped ? !0 === BH && console.info(`${Xh} terrain textures handed over again after the renderer lost them`) : console.warn(`${Xh} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== OB || BB.isStopped ? !0 === OB && console.info(`${zo} terrain textures handed over again after the renderer lost them`) : console.warn(`${zo} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7051` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6882) · [Before (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7051)

```diff
-               if (HH.forEachNetOut(jE), qE(HH), (0, RL.M)(HH, {
+               if (BB.forEachNetOut(CM), aM(BB), (0, wG.L)(BB, {
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7067-L7069` → after: `L6898-L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6898-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6898-L6900) · [Before (L7067-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7067-L7069)

```diff
-             LH.IX(HH.IX());
-             const rH = (0, Qr.Z)((() => {
-               LH.IX(HH.IX())
+             GB.kP(BB.kP());
+             const DB = (0, ZD.ab)((() => {
+               GB.kP(BB.kP())
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7071` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6902) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7071)

```diff
-             let SH = 6 * (0, Qr.N)() | 0;
+             let QB = 6 * (0, ZD.P)() | 0;
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7075` → after: `L6906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6906) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7075)

```diff
-             (0, qS.f)(hH);
+             (0, rQ.d)(oB);
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7080` → after: `L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6911) · [Before (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7080)

```diff
-             return (0, eS.g)(tH), {
+             return (0, gQ.j)(jB), {
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7087` → after: `L6918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6918) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7087)

```diff
-                 LH.value(UL.h.ProbeUsedProp, HH.usedProp()), 0 !== AH && LH.setFlags(AH)
+                 GB.value(SG.i.ProbeUsedProp, BB.usedProp()), 0 !== YB && GB.setFlags(YB)
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7090` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6921) · [Before (L7090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7090)

```diff
-                 (0, Qr.$)(rH), (0, qS.c)(hH), (0, eS.d)(tH)
+                 (0, ZD.eb)(DB), (0, rQ.c)(oB), (0, gQ.f)(jB)
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7096` → after: `L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6927) · [Before (L7096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7096)

```diff
-               AH = qH.rings.input.writeRecord(UL.tb.AntiCheat, HH, BH, LH, 0)
+               YB = gB.rings.input.writeRecord(SG.ub.AntiCheat, BB, OB, GB, 0)
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7101` → after: `L6932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6932) · [Before (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7101)

```diff
-         lh = (HH, BH, LH) => qH.rings.cmd.writeCmd(HH, BH, LH), Kh = HH => qH.rings.cmd.growForCmd(HH), qt = !1, CE(), (0, DH.x)(qH, {
+         Lo = (BB, OB, GB) => gB.rings.cmd.writeCmd(BB, OB, GB), go = BB => gB.rings.cmd.growForCmd(BB), wj = !1, lM(), (0, aB.v)(gB, {
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7128` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6959) · [Before (L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7128)

```diff
-             return null !== (null !== (BH = null === (LH = EE()) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null)
+             return null !== (null !== (OB = null === (GB = pM()) || void 0 === GB ? void 0 : GB.modelUrl(BB)) && void 0 !== OB ? OB : null)
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7132` → after: `L6963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6963) · [Before (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7132)

```diff
-         }), (0, FH.J)({
+         }), (0, hB.M)({
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7143` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6974) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7143)

```diff
-             (0, UB.e)()
+             (0, SO.b)()
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7149` → after: `L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6980) · [Before (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7149)

```diff
-         }), Xt = (0, FH.v)((() => {
+         }), pj = (0, hB.z)((() => {
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7151-L7152` → after: `L6982-L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6982-L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6982-L6983) · [Before (L7151-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7151-L7152)

```diff
-           const BH = (0, DH.i)();
-           null === (HH = (0, DH.r)()) || void 0 === HH || HH.followCursorAim(!0 === (null === BH || void 0 === BH ? void 0 : BH.isSessionLive) ? BH : null)
+           const OB = (0, aB.j)();
+           null === (BB = (0, aB.s)()) || void 0 === BB || BB.followCursorAim(!0 === (null === OB || void 0 === OB ? void 0 : OB.isSessionLive) ? OB : null)
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7158-L7161` → after: `L6989-L6992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6989-L6992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6989-L6992) · [Before (L7158-L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7158-L7161)

```diff
-         const NH = (0, BA.g)(),
-           RH = (0, BA.d)(qH, NH);
-         zt = NH.basis, (0, WA.i)((0, EA.d)(null === RH ? null : (0, HA.n)(RH), (0, EA.k)())), tt = RH;
-         const jH = (0, gB.c)();
+         const XB = (0, OY.l)(),
+           wB = (0, OY.f)(gB, XB);
+         Pj = XB.basis, (0, ZY.e)((0, MY.d)(null === wB ? null : (0, BY.r)(wB), (0, MY.i)())), Mj = wB;
+         const EB = (0, rO.b)();
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7165-L7166` → after: `L6996-L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6996-L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6996-L6997) · [Before (L7165-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7165-L7166)

```diff
-         const dH = new mr.b(jH, (() => cH.HM()), (HH => {
-           qH.crash(RL.n, HH)
+         const bB = new KD.e(EB, (() => iB.ON()), (BB => {
+           gB.crash(wG.k, BB)
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7168` → after: `L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6999) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7168)

```diff
-         St = dH, ht = dH, null !== RH && dH.setCeiling(Math.min((0, mr.o)(RH), nH, (0, BA.k)()));
+         yj = bB, Jj = bB, null !== wB && bB.setCeiling(Math.min((0, KD.n)(wB), cB, (0, OY.o)()));
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7172` → after: `L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7003) · [Before (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7172)

```diff
-             return null !== BH && (null === tt || BH < tt) && (tt = BH, (0, WA.i)((0, EA.d)((0, HA.n)(BH), (0, EA.k)()))), BH
+             return null !== OB && (null === Mj || OB < Mj) && (Mj = OB, (0, ZY.e)((0, MY.d)((0, BY.r)(OB), (0, MY.i)()))), OB
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7174` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7005) · [Before (L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7174)

```diff
-             1 === BH ? (0, SA.reportMemoryShed)(HH, LH, Zh) : console.warn(`${Xh} wasm memory: shed again (${HH}): shed ${BH}`, LH.wasmMemoryShed)
+             1 === OB ? (0, QY.reportMemoryShed)(BB, GB, Ho) : console.warn(`${zo} wasm memory: shed again (${BB}): shed ${OB}`, GB.wasmMemoryShed)
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7176` → after: `L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7007) · [Before (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7176)

```diff
-           const HH = (0, gL.M)(KH);
+           const BB = (0, rG.W)(FB);
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7178` → after: `L7009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7009) · [Before (L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7178)

```diff
-             storedChunks: () => cH.YrH(),
+             storedChunks: () => iB.SDB(),
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7181` → after: `L7012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7012) · [Before (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7181)

```diff
-               return null !== (BH = null === HH || void 0 === HH ? void 0 : HH.urH()) && void 0 !== BH ? BH : 0
+               return null !== (OB = null === BB || void 0 === BB ? void 0 : BB.nDB()) && void 0 !== OB ? OB : 0
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7184` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7015) · [Before (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7184)

```diff
-           })), (0, QA.g)("wasm", dH, (() => {
+           })), (0, qY.k)("wasm", bB, (() => {
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7190-L7193` → after: `L7021-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7021-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7021-L7024) · [Before (L7190-L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7190-L7193)

```diff
-         })), window.addEventListener("pagehide", mE), window.addEventListener("pagehide", oE), !1;
-         const [aH, sH] = (0, zA.g)();
-         Kz = (0, EA.o)((HH => {
-           const BH = (0, EA.u)(HH, (0, EA.k)());
+         })), document.addEventListener("visibilitychange", wM), window.addEventListener("pagehide", EM), window.addEventListener("pagehide", IM), window.addEventListener("pagehide", FM), !1;
+         const [CB, HB] = (0, yY.h)();
+         Ly = (0, MY.m)((BB => {
+           const OB = (0, MY.p)(BB, (0, MY.i)());
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7198` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7029) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7198)

```diff
-         }), qH.setAmbientOcclusion(!0 !== zL.e.getItem("disableAmbientOcclusion")), qH.setPoseLod(!0 !== zL.e.getItem(KB.W)), qH.setDebugLog(UL.N.Look, !0), qH.setDebugLog(UL.N.CameraSet, !0), (0, PS.startLookDebug)("wasm", {
+         }), gB.setAmbientOcclusion(!0 !== yG.g.getItem("disableAmbientOcclusion")), gB.setPoseLod(!0 !== yG.g.getItem(FO.R)), gB.setDebugLog(SG.N.Look, !0), gB.setDebugLog(SG.N.CameraSet, !0), (0, VQ.startLookDebug)("wasm", {
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7201` → after: `L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7032) · [Before (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7201)

```diff
-         }), (0, xS.o)("remesh") && (qH.setDebugLog(UL.N.Remesh, !0), JH = () => qH.takeDebugLog(UL.N.Remesh), bS = new OS((0, TS.n)(), JH));
+         }), (0, WQ.s)("remesh") && (gB.setDebugLog(SG.N.Remesh, !0), vB = () => gB.takeDebugLog(SG.N.Remesh), kQ = new fQ((0, SQ.h)(), vB));
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7205-L7207` → after: `L7036-L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7036-L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7036-L7038) · [Before (L7205-L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7205-L7207)

```diff
-             SH = HH => zL.e.getItem(HH);
-           rH.sync(SH, BH), (0, rL.S)();
-           const hH = (0, zH.m)("customBindingsChanged", (() => {
+             QB = BB => yG.g.getItem(BB);
+           DB.sync(QB, OB), (0, DG.L)();
+           const oB = (0, yB.p)("customBindingsChanged", (() => {
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7210` → after: `L7041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7041) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7210)

```diff
-           (0, vA.s)(BH);
+           (0, AY.k)(OB);
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7212` → after: `L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7043) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7212)

```diff
-             CH = (0, FH.v)((() => {
+             JB = (0, hB.z)((() => {
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7214` → after: `L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7045) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7214)

```diff
-               tH.size > 0 && yA() && !0 === (null === (HH = (0, DH.i)()) || void 0 === HH ? void 0 : HH.localPlayerAlive()) && zH.k.AX("usedKeyboard")
+               jB.size > 0 && BD() && !0 === (null === (BB = (0, aB.j)()) || void 0 === BB ? void 0 : BB.localPlayerAlive()) && yB.o.tM("usedKeyboard")
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7216` → after: `L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7047) · [Before (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7216)

```diff
-             EH = RA.e.heldSizer((() => (0, XL.l)(HH))),
+             MB = EY.b.heldSizer((() => (0, PG.p)(BB))),
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7220` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7051) · [Before (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7220)

```diff
-                 rH.moves(HH) && (tH.add(HH), yA() && zH.k.AX("usedKeyboard"))
+                 DB.moves(BB) && (jB.add(BB), BD() && yB.o.tM("usedKeyboard"))
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7229` → after: `L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7060) · [Before (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7229)

```diff
-                 iA.h.measure(HH.getBoundingClientRect()), (0, jA.m)()
+                 xY.f.measure(BB.getBoundingClientRect()), (0, cY.l)()
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7233-L7234` → after: `L7064-L7065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7064-L7065) · [Before (L7233-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7233-L7234)

```diff
-                 const LH = (0, XL.o)(HH, BH),
-                   AH = RA.e.onRelease(BH);
+                 const GB = (0, PG.s)(BB, OB),
+                   YB = EY.b.onRelease(OB);
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7240` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7071) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7240)

```diff
-                 iA.h.measure(HH.getBoundingClientRect())
+                 xY.f.measure(BB.getBoundingClientRect())
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7252` → after: `L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7083) · [Before (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7252)

```diff
-             hH(), CH(), (0, vA.s)(null), GH(), XH()
+             oB(), JB(), (0, AY.k)(null), zB(), PB()
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7257` → after: `L7088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7088) · [Before (L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7257)

```diff
-           })), !Kt && (0, rr.g)(HH, rH) && (0, rr.e)((() => {
+           })), !gj && (0, QD.f)(BB, DB) && (0, QD.c)((() => {
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7268-L7269` → after: `L7099-L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7099-L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7099-L7100) · [Before (L7268-L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7268-L7269)

```diff
-         (0, cB.Y)((() => {
-           "call" === (0, cB.q)() && qH.crash(RL.u, (0, cB.p)())
+         (0, iO.U)((() => {
+           "call" === (0, iO.n)() && gB.crash(wG.s, (0, iO.l)())
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7271` → after: `L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7102) · [Before (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7271)

```diff
-         const yH = (0, RL.O)(qH.rings.worker, (() => {
+         const tB = (0, wG.M)(gB.rings.worker, (() => {
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7281` → after: `L7112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7112) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7281)

```diff
-             module: (0, cB.x)(),
+             module: (0, iO.v)(),
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7283` → after: `L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7114) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7283)

```diff
-               const BH = (0, DH.r)();
+               const OB = (0, aB.s)();
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7302` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7133) · [Before (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7302)

```diff
-                 if (!AH || BH) return void LH.XX(AH);
+                 if (!YB || OB) return void GB.jP(YB);
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7304` → after: `L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7135) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7304)

```diff
-                   LH.XX(!0)
+                   GB.jP(!0)
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7313-L7314` → after: `L7144-L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7144-L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7144-L7145) · [Before (L7313-L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7313-L7314)

```diff
-                   site: RL.E,
-                   error: new Error(`a world-gen worker's load failed (${HH}): ${SH}`),
+                   site: wG.C,
+                   error: new Error(`a world-gen worker's load failed (${BB}): ${QB}`),
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7327` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7158) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7327)

```diff
-                 XX: BH => {
+                 jP: OB => {
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7329` → after: `L7160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7160) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7329)

```diff
-                     build: (0, Yr.h)(),
+                     build: (0, pD.j)(),
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7336` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7167) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7336)

```diff
-               (0, SA.reportWorkerStartTimeout)(RL.E, HH, Zh)
+               (0, QY.reportWorkerStartTimeout)(wG.C, BB, Ho)
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7351` → after: `L7182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7182) · [Before (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7351)

```diff
-                 HH.rings.worker.writeWorkerRecord(LH, AH, rH, 0, SH, hH) || HH.crash(RL.E, `a world-gen record of kind ${AH} did not fit the worker-in ring`)
+                 BB.rings.worker.writeWorkerRecord(GB, YB, DB, 0, QB, oB) || BB.crash(wG.C, `a world-gen record of kind ${YB} did not fit the worker-in ring`)
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7357` → after: `L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7188) · [Before (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7357)

```diff
-             module: (0, cB.x)(),
+             module: (0, iO.v)(),
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7361` → after: `L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7192) · [Before (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7361)

```diff
-               }, BH] = await Promise.all([LH.e(48).then((() => LH(54602))), Promise.resolve().then((() => LH(81))).then((HH => {
+               }, OB] = await Promise.all([GB.e(48).then((() => GB(54108))), Promise.resolve().then((() => GB(92))).then((BB => {
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7369-L7370` → after: `L7200-L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7200-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7200-L7201) · [Before (L7369-L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7369-L7370)

```diff
-                 count: (0, yB.f)(BH),
-                 maxKeptLightStates: BH || (0, pB.k)() ? 1 : void 0
+                 count: (0, tO.g)(OB),
+                 maxKeptLightStates: OB || (0, xO.i)() ? 1 : void 0
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7374-L7375` → after: `L7205-L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7205-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7205-L7206) · [Before (L7374-L7375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7374-L7375)

```diff
-               (0, jA.k)(), BX(HH, (() => {
-                 HH.rings.worker.writeWorkerRecord(LH, AH, rH, SH, hH, tH) || HH.crash(RL.p, `a meshing record of kind ${AH} did not fit the worker-in ring`)
+               (0, cY.h)(), yP(BB, (() => {
+                 BB.rings.worker.writeWorkerRecord(GB, YB, DB, QB, oB, jB) || BB.crash(wG.l, `a meshing record of kind ${YB} did not fit the worker-in ring`)
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7379` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7210) · [Before (L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7379)

```diff
-               (0, SA.reportWorkerLost)(RL.p, HH, Zh)
+               (0, QY.reportWorkerLost)(wG.l, BB, Ho)
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7385` → after: `L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7216) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7385)

```diff
-               (0, SA.reportWorkerStartTimeout)(RL.p, HH, Zh)
+               (0, QY.reportWorkerStartTimeout)(wG.l, BB, Ho)
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7397` → after: `L7228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7228) · [Before (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7397)

```diff
-                 HH.crash(RL.p, void 0 === LH ? BH : new Error(BH, {
+                 BB.crash(wG.l, void 0 === GB ? OB : new Error(OB, {
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7402` → after: `L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7233) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7402)

```diff
-                 site: RL.p,
+                 site: wG.l,
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7408` → after: `L7239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7239) · [Before (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7408)

```diff
-         const HB = (0, Fr.j)(sB.clientSideServerUrls.staticUrl, {
+         const BO = (0, aD.n)(HO.clientSideServerUrls.staticUrl, {
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7419` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7250) · [Before (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7419)

```diff
-               return null !== (BH = null === (LH = EE()) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null
+               return null !== (OB = null === (GB = pM()) || void 0 === GB ? void 0 : GB.modelUrl(BB)) && void 0 !== OB ? OB : null
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7425` → after: `L7256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7256) · [Before (L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7425)

```diff
-               return null !== (AH = null === (rH = BH()) || void 0 === rH ? void 0 : rH.drawnUrl(LH)) && void 0 !== AH ? AH : HH.url(LH)
+               return null !== (YB = null === (DB = OB()) || void 0 === DB ? void 0 : DB.drawnUrl(GB)) && void 0 !== YB ? YB : BB.url(GB)
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7427` → after: `L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7258) · [Before (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7427)

```diff
-             return (0, jr.l)((0, Ir.m)(AH), LH)
+             return (0, cD.l)((0, mD.q)(YB), GB)
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7429-L7430` → after: `L7260-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7260-L7261) · [Before (L7429-L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7429-L7430)

```diff
-           LB = new Ir.f(BB, (HH => {
-             console.warn(`${Xh} image ${HH.key.kind}:${HH.key.index}:${HH.key.word} failed`, HH.error)
+           GO = new mD.h(OO, (BB => {
+             console.warn(`${zo} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7433` → after: `L7264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7264) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7433)

```diff
-           void 0 === BH ? console.warn(`${Xh} ${HH}`) : GE(HH, BH)
+           void 0 === OB ? console.warn(`${zo} ${BB}`) : ZM(BB, OB)
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7435` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7266) · [Before (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7435)

```diff
-         const AB = new Rr.k(HB, function(HH, BH) {
+         const YO = new ED.f(BO, function(BB, OB) {
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7458` → after: `L7289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7289) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7458)

```diff
-             tH = LH.e(50).then((() => LH(54607))).then((HH => {
+             jB = GB.e(50).then((() => GB(54113))).then((BB => {
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7471` → after: `L7302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7302) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7471)

```diff
-             return null !== (AH = null === LH || void 0 === LH ? void 0 : LH.build(HH, BH)) && void 0 !== AH ? AH : (0, Dr.p)(HH, "the model workers did not load")
+             return null !== (YB = null === GB || void 0 === GB ? void 0 : GB.build(BB, OB)) && void 0 !== YB ? YB : (0, eD.o)(BB, "the model workers did not load")
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7489` → after: `L7320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7320) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7489)

```diff
-             console.warn(`${Xh} the texture pack's model file ${HH} failed: the shipped one loads`, BH)
+             console.warn(`${zo} the texture pack's model file ${BB} failed: the shipped one loads`, OB)
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7493` → after: `L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7324) · [Before (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7493)

```diff
-         const rB = new cr.f(qH);
+         const DO = new LD.i(gB);
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7502` → after: `L7333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7333) · [Before (L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7502)

```diff
-             site: RL.B,
+             site: wG.z,
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7509` → after: `L7340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7340) · [Before (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7509)

```diff
-           null !== HH && (HH || qH.isStopped || console.warn(`${Xh} the core refused the terrain textures: terrain draws untextured`), Ot(qH))
+           null !== BB && (BB || gB.isStopped || console.warn(`${zo} the core refused the terrain textures: terrain draws untextured`), dj(gB))
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7512` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7343) · [Before (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7512)

```diff
-           console.warn(`${Xh} ${HH}`, ...void 0 === BH ? [] : [BH])
+           console.warn(`${zo} ${BB}`, ...void 0 === OB ? [] : [OB])
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7522` → after: `L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7353) · [Before (L7522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7522)

```diff
-               EH = !0, null === (HH = CH) || void 0 === HH || HH(), null === (BH = tH) || void 0 === BH || BH(), nr.d.setSettled(null), null !== dh && tC.clear(dh)
+               MB = !0, null === (BB = JB) || void 0 === BB || BB(), null === (OB = jB) || void 0 === OB || OB(), hD.b.setSettled(null), null !== vo && PJ.clear(vo)
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7526` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7357) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7526)

```diff
-             null !== CH && Promise.all([LH.e(225), LH.e(53)]).then((() => LH(54568))).then((LH => {
+             null !== JB && Promise.all([GB.e(225), GB.e(53)]).then((() => GB(54083))).then((GB => {
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7543-L7544` → after: `L7374-L7375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7374-L7375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7374-L7375) · [Before (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7543-L7544)

```diff
-                   }(YH.assets))), (0, Nr.l)(YH.files()), SH.refresh().then((HH => {
-                     null !== HH && console.info(`${Xh} texture pack models: ${HH.resent} of ${HH.delivered} files written again, ${HH.refetched} refetched`)
+                   }(lB.assets))), (0, wD.o)(lB.files()), QB.refresh().then((BB => {
+                     null !== BB && console.info(`${zo} texture pack models: ${BB.resent} of ${BB.delivered} files written again, ${BB.refetched} refetched`)
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7549` → after: `L7380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7380) · [Before (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7549)

```diff
-                   (nr.d.setSettled({
+                   (hD.b.setSettled({
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7553` → after: `L7384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7384) · [Before (L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7553)

```diff
-                     const AH = null === HH.gameSource && (0, hA.c)(HH.pack);
+                     const YB = null === BB.gameSource && (0, oY.f)(BB.pack);
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7557` → after: `L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7388) · [Before (L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7557)

```diff
-                     zH.k.AX(rA.e, {
+                     yB.o.tM(DY.e, {
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7565` → after: `L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7396) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7565)

```diff
-                       BH && HH && console.info(`${Xh} the texture pack's animations are in (${Object.keys(HH).length} files)`)
+                       OB && BB && console.info(`${zo} the texture pack's animations are in (${Object.keys(BB).length} files)`)
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7570` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7401) · [Before (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7570)

```diff
-                   nr.d.setSettled(null)
+                   hD.b.setSettled(null)
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7573` → after: `L7404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7404) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7573)

```diff
-                 maxTextureSize: () => Promise.resolve((0, gL.ab)(document.createElement("canvas")))
+                 maxTextureSize: () => Promise.resolve((0, rG.lb)(document.createElement("canvas")))
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7577` → after: `L7408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7408) · [Before (L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7577)

```diff
-               console.warn(`${Xh} the texture pack's terrain didn't load: the built atlas stays`, HH)
+               console.warn(`${zo} the texture pack's terrain didn't load: the built atlas stays`, BB)
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7585` → after: `L7416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7416) · [Before (L7585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7585)

```diff
-             (aB ??= LH.e(65).then((() => LH(54612))).then((HH => {
+             (CO ??= GB.e(65).then((() => GB(54118))).then((BB => {
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7593` → after: `L7424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7424) · [Before (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7593)

```diff
-               qH.setTextureLayers(HH) || qH.isStopped || (console.warn(`${Xh} the core refused the texture names: textured Boxes draw textureNotFound`), hB())
+               gB.setTextureLayers(BB) || gB.isStopped || (console.warn(`${zo} the core refused the texture names: textured Boxes draw textureNotFound`), oO())
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7601` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7432) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7601)

```diff
-                 console.warn(`${Xh} the texture names didn't load, so textured Boxes draw textureNotFound`, BH), hB()
+                 console.warn(`${zo} the texture names didn't load, so textured Boxes draw textureNotFound`, OB), oO()
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7611-L7612` → after: `L7442-L7443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7442-L7443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7442-L7443) · [Before (L7611-L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7611-L7612)

```diff
-             const zH = (0, gL.M)(LH);
-             if (null === zH) return HH.crash(Yh, new Error(`this ${AH} build has no openRenderer`)), !1;
+             const yB = (0, rG.W)(GB);
+             if (null === yB) return BB.crash(qo, new Error(`this ${YB} build has no openRenderer`)), !1;
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7617-L7618` → after: `L7448-L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7448-L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7448-L7449) · [Before (L7617-L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7617-L7618)

```diff
-               const rH = null !== (EH = null === (XH = Nh) || void 0 === XH ? void 0 : XH.pagePreviews()) && void 0 !== EH ? EH : null,
-                 tH = null !== (GH = null === (YH = Nh) || void 0 === YH ? void 0 : YH.previewModule(LH)) && void 0 !== GH ? GH : null;
+               const DB = null !== (MB = null === (PB = co) || void 0 === PB ? void 0 : PB.pagePreviews()) && void 0 !== MB ? MB : null,
+                 jB = null !== (zB = null === (lB = co) || void 0 === lB ? void 0 : lB.previewModule(GB)) && void 0 !== zB ? zB : null;
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7620-L7622` → after: `L7451-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7451-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7451-L7453) · [Before (L7620-L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7620-L7622)

```diff
-                 null === rH || void 0 === rH || rH.endSession(!1), CH = (0, XL.d)().sampleCount, await (0, gL.f)(BH, zH, hH, zE, CH, await SH);
-                 const HH = (0, gL.j)(LH);
-                 null === HH && console.warn(`${Xh} this ${AH} build has no image registry: sky and model images won't show`), (0, Kr.d)(HH)
+                 null === DB || void 0 === DB || DB.endSession(!1), JB = (0, PG.i)().sampleCount, await (0, rG.k)(OB, yB, oB, zM, JB, await QB);
+                 const BB = (0, rG.r)(GB);
+                 null === BB && console.warn(`${zo} this ${YB} build has no image registry: sky and model images won't show`), (0, iD.h)(BB)
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7624` → after: `L7455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7455) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7624)

```diff
-                 (0, ir.e)() && await (0, EB.j)();
+                 (0, xD.c)() && await (0, MO.k)();
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7627-L7628` → after: `L7458-L7459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7458-L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7458-L7459) · [Before (L7627-L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7627-L7628)

```diff
-                   const BH = (0, NL.i)(zH),
-                     AH = `${LH.why}${void 0===BH?"":` (${BH.message})`}`;
+                   const OB = (0, XG.l)(yB),
+                     YB = `${GB.why}${void 0===OB?"":` (${OB.message})`}`;
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7631` → after: `L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7462) · [Before (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7631)

```diff
-                 CH = await rH.bindSession(tH, BH, (async HH => (0, gL.q)(zH, Yh, hH, HH, zE, await SH)))
+                 JB = await DB.bindSession(jB, OB, (async BB => (0, rG.B)(yB, qo, oB, BB, zM, await QB)))
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7648` → after: `L7479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7479) · [Before (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7648)

```diff
-                   return null !== (HH = rH.call(LH)) && void 0 !== HH ? HH : null
+                   return null !== (BB = DB.call(GB)) && void 0 !== BB ? BB : null
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7654` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7485) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7654)

```diff
-             return vz.boundAtMs = null !== (tH = (0, ir.N)()) && void 0 !== tH ? tH : uH, vz.indirectHangs = (0, ir.z)(), vz.restoresSkipped = (0, ir.Q)(), console.info(`${Xh} ${AH} renderer bound at ${Math.round(uH)} ms`), !HH.isStopped
+             return Vy.boundAtMs = null !== (jB = (0, xD.L)()) && void 0 !== jB ? jB : pB, Vy.indirectHangs = (0, xD.E)(), Vy.restoresSkipped = (0, xD.O)(), console.info(`${zo} ${YB} renderer bound at ${Math.round(pB)} ms`), !BB.isStopped
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7660` → after: `L7491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7491) · [Before (L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7660)

```diff
-           LH.e(214).then((() => LH(34856))).then((BH => {
+           GB.e(214).then((() => GB(34668))).then((OB => {
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7673` → after: `L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7504) · [Before (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7673)

```diff
-                   "screenshot" === BH && null === SH ? await (0, dr.f)(HH, AH, rH) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
+                   "screenshot" === OB && null === QB ? await (0, CD.h)(BB, YB, DB) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7676` → after: `L7507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7507) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7676)

```diff
-                 capturePhoto: (BH, LH, AH) => (0, dr.c)(HH, BH, LH, AH)
+                 capturePhoto: (OB, GB, YB) => (0, CD.e)(BB, OB, GB, YB)
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7682` → after: `L7513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7513) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7682)

```diff
-                 VX: BH,
+                 WP: OB,
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7684` → after: `L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7515) · [Before (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7684)

```diff
-                   (0, vA.A)(UL.tb.Resize, 0, HH / LH, BH / LH, (0, vA.m)(LH))
+                   (0, AY.r)(SG.ub.Resize, 0, BB / GB, OB / GB, (0, AY.h)(GB))
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7687-L7688` → after: `L7518-L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7518-L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7518-L7519) · [Before (L7687-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7687-L7688)

```diff
-                   const BH = (0, XL.l)(HH);
-                   null !== BH && (0, vA.A)(UL.tb.Resize, 0, BH.cssWidth, BH.cssHeight, (0, vA.m)(BH.renderScale))
+                   const OB = (0, PG.p)(BB);
+                   null !== OB && (0, AY.r)(SG.ub.Resize, 0, OB.cssWidth, OB.cssHeight, (0, AY.h)(OB.renderScale))
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7696` → after: `L7527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7527) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7696)

```diff
-             console.warn(`${Xh} the developer tools didn't load: no captures this session`, HH)
+             console.warn(`${zo} the developer tools didn't load: no captures this session`, BB)
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7698` → after: `L7529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7529) · [Before (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7698)

```diff
-           const BH = "webgpu" === uH && null !== (zB = null === YH || void 0 === YH || null === (GB = YH.adapter) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== zB ? zB : null;
+           const OB = "webgpu" === pB && null !== (yO = null === lB || void 0 === lB || null === (zO = lB.adapter) || void 0 === zO ? void 0 : zO.vendor) && void 0 !== yO ? yO : null;
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7702` → after: `L7533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7533) · [Before (L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7702)

```diff
-             fallbackReason: null !== (YB = null === YH || void 0 === YH ? void 0 : YH.reason) && void 0 !== YB ? YB : null,
+             fallbackReason: null !== (lO = null === lB || void 0 === lB ? void 0 : lB.reason) && void 0 !== lO ? lO : null,
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7708` → after: `L7539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7539) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7708)

```diff
-             (0, jA.x)(), console.error(`${Xh} the quality steps didn't start`, rH)
+             (0, cY.z)(), console.error(`${zo} the quality steps didn't start`, DB)
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7715-L7717` → after: `L7546-L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7546-L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7546-L7548) · [Before (L7715-L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7715-L7717)

```diff
-         QB && console.warn(`${Xh} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
-         const WB = (0, CB.f)(YH, (0, AL.l)());
-         if ((0, xS.o)("webgpuloss")) {
+         qO && console.warn(`${zo} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
+         const ZO = (0, JO.e)(lB, (0, YG.l)());
+         if ((0, WQ.s)("webgpuloss")) {
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7721-L7722` → after: `L7552-L7553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7552-L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7552-L7553) · [Before (L7721-L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7721-L7722)

```diff
-             reason: null !== (MB = null === YH || void 0 === YH ? void 0 : YH.reason) && void 0 !== MB ? MB : null,
-             source: null !== (xB = null === YH || void 0 === YH ? void 0 : YH.source) && void 0 !== xB ? xB : null,
+             reason: null !== (NO = null === lB || void 0 === lB ? void 0 : lB.reason) && void 0 !== NO ? NO : null,
+             source: null !== (RO = null === lB || void 0 === lB ? void 0 : lB.source) && void 0 !== RO ? RO : null,
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7726` → after: `L7557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7557) · [Before (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7726)

```diff
-           (0, vS.b)((BH => {
+           (0, AQ.d)((OB => {
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7731-L7732` → after: `L7562-L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7562-L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7562-L7563) · [Before (L7731-L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7731-L7732)

```diff
-         if (Pt = (0, CB.g)(vB ? qH : null, vB && null !== (tH = null === (CH = Nh) || void 0 === CH ? void 0 : CH.pagePreviews().Cu) && void 0 !== tH ? tH : null, WB, GE), pz) return null;
-         if (dH.reserveAtJoin((0, mr.n)(null !== RH && void 0 !== RH ? RH : HA.f)), qH.isStopped) return null;
+         if (nj = (0, JO.g)(WO ? gB : null, WO && null !== (jB = null === (JB = co) || void 0 === JB ? void 0 : JB.pagePreviews().zp) && void 0 !== jB ? jB : null, ZO, ZM), GJ) return null;
+         if (bB.reserveAtJoin((0, KD.m)(null !== wB && void 0 !== wB ? wB : BY.h)), gB.isStopped) return null;
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7742` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7573) · [Before (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7742)

```diff
-             if (qH.writePendingInput(), (0, FH.d)(HH, fE), PE(!1, HH), null !== Iz) try {
+             if (gB.writePendingInput(), (0, hB.e)(BB, LM), UM(!1, BB), null !== Iy) try {
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7748` → after: `L7579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7579) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7748)

```diff
-           } else IE(qH, sz, "budget") && ((0, SL.e)(qH.lastFrameKind) && gE() && (0, FH.d)(HH, fE), PE(sz && Dz, HH), wz.frame(qH.lastFrameKind, sz && gE(), HH), Zz.frame(qH.lastFrameKind, sz && gE()), (0, SL.b)(qH.lastFrameKind) && AL.D.drew(), aE(qH), dH.afterFrame(), requestAn … [truncated]
+           } else iM(gB, ty, "budget") && ((0, QG.k)(gB.lastFrameKind) && eM() && (0, hB.e)(BB, LM), UM(ty && Cy, BB), Hy.frame(gB.lastFrameKind, ty && eM(), BB), vy.frame(gB.lastFrameKind, ty && eM()), (0, QG.d)(gB.lastFrameKind) && YG.C.drew(), OP(gB), bB.afterFrame(), requestAn … [truncated]
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7752` → after: `L7583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7583) · [Before (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7752)

```diff
-           if (HH.has("inputLog") && (0, JA.k)((HH => {
+           if (BB.has("inputLog") && (0, sY.g)((BB => {
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7758` → after: `L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7589) · [Before (L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7758)

```diff
-               console.info(`${pA} input ${BH} ${LH?"down":"up"} press ${AH} at ${performance.now().toFixed(1)}`)
+               console.info(`${tY} input ${OB} ${GB?"down":"up"} press ${YB} at ${performance.now().toFixed(1)}`)
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7781` → after: `L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7612) · [Before (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7781)

```diff
-         (AH(Zh), ih(null !== HH), null !== HH && (TH = performance.now()), sh(HH), null === HH) ? null === (BH = Nh) || void 0 === BH || BH.pagePreviews().endSession(null === (0, cB.q)()): Vt("booted")
+         (YB(Ho), Bj(null !== BB), null !== BB && (VB = performance.now()), xo(BB), null === BB) ? null === (OB = co) || void 0 === OB || OB.pagePreviews().endSession(null === (0, iO.n)()): kj("booted")
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7799` → after: `L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7630) · [Before (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7799)

```diff
-         console.warn(`${Xh} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, HH)
+         console.warn(`${zo} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, BB)
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7804` → after: `L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7635) · [Before (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7804)

```diff
-         this.deps = HH, this.latest = 0, this.LX = null
+         this.deps = BB, this.latest = 0, this.sJ = null
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7814` → after: `L7645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7645) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7814)

```diff
-         if ((null === (AH = this.LX) || void 0 === AH ? void 0 : AH.module) === HH && (0, lL.ne)(this.LX.files, BH)) return !1;
+         if ((null === (YB = this.sJ) || void 0 === YB ? void 0 : YB.module) === BB && (0, IG.Fe)(this.sJ.files, OB)) return !1;
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7824` → after: `L7655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7655) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7824)

```diff
-           return this.LX = {
+           return this.sJ = {
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7830` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7661) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7830)

```diff
-                 ("error" === HH[BH] ? console.error : console.warn)(`Animation for the texture pack: ${HH[BH+1]}: ${HH[BH+2]}`)
+                 ("error" === BB[OB] ? console.error : console.warn)(`Animation for the texture pack: ${BB[OB+1]}: ${BB[OB+2]}`)
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7837-L7838` → after: `L7668-L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7668-L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7668-L7669) · [Before (L7837-L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7837-L7838)

```diff
-           const AH = (null !== (hH = this.deps.retryAfterMs) && void 0 !== hH ? hH : cL)[LH];
-           return void 0 === AH || tH instanceof eL || (0, KL.k)(HH) || setTimeout((() => {
+           const YB = (null !== (oB = this.deps.retryAfterMs) && void 0 !== oB ? oB : iG)[GB];
+           return void 0 === YB || jB instanceof LG || (0, FG.m)(BB) || setTimeout((() => {
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7845` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7676) · [Before (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7845)

```diff
-           return HH.ErH(BH)
+           return BB.WDB(OB)
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7847` → after: `L7678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7678) · [Before (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7847)

```diff
-           throw (0, KL.o)(HH, LH), LH
+           throw (0, FG.q)(BB, GB), GB
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7854-L7855` → after: `L7685-L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7685-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7685-L7686) · [Before (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7854-L7855)

```diff
-         const BH = this.LX;
-         if (this.LX = null, (null === BH || void 0 === BH ? void 0 : BH.module) === HH && !(0, KL.k)(HH)) try {
+         const OB = this.sJ;
+         if (this.sJ = null, (null === OB || void 0 === OB ? void 0 : OB.module) === BB && !(0, FG.m)(BB)) try {
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7860` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7691) · [Before (L7860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7860)

```diff
-       compiler: mL.e,
+       compiler: dG.b,
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7876` → after: `L7707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7707) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7876)

```diff
-           } = await LH.e(125).then((() => LH(54549)));
+           } = await GB.e(125).then((() => GB(54064)));
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7897-L7899` → after: `L7728-L7730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7728-L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7728-L7730) · [Before (L7897-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7897-L7899)

```diff
-       const EH = nr.d.rejoinHold();
-       dt = null, (0, uA.h)();
-       const XH = (0, XA.Y)("wasm", yE);
+       const MB = hD.b.rejoinHold();
+       vj = null, (0, pY.i)();
+       const PB = (0, PY.W)("wasm", oP);
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7907` → after: `L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7738) · [Before (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7907)

```diff
-           kind: "xB"
+           kind: "rB"
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7912` → after: `L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7743) · [Before (L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7912)

```diff
-         if (YH = performance.now(), !zH()) pE(null !== (QH = null === (mH = HH.target.session) || void 0 === mH ? void 0 : mH.gameNameWithVariation) && void 0 !== QH ? QH : null);
+         if (lB = performance.now(), !yB()) QP(null !== (qB = null === (dB = BB.target.session) || void 0 === dB ? void 0 : dB.gameNameWithVariation) && void 0 !== qB ? qB : null);
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7921` → after: `L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7752) · [Before (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7921)

```diff
-           lH(), HH || bH || null !== OH && "ok" !== OH || (bH = !0, (0, uH.v)("wasm_boot_wait", performance.now(), `${VH}:${BH()}:${(0,WH.p)()}`)), kH++;
+           IB(), BB || fB || null !== UB && "ok" !== UB || (fB = !0, (0, pB.p)("wasm_boot_wait", performance.now(), `${nB}:${OB()}:${(0,ZB.o)()}`)), kB++;
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7926` → after: `L7757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7757) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7926)

```diff
-         }(ah, eB.i), null === tH || void 0 === tH || tH.addEventListener("abort", EH, {
+         }(so, LO.h), null === jB || void 0 === jB || jB.addEventListener("abort", MB, {
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7936` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7767) · [Before (L7936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7936)

```diff
-             if (MH.e.markGameEngineConstructed(), UH) return;
+             if (NB.b.markGameEngineConstructed(), SB) return;
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7938-L7939` → after: `L7769-L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7769-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7769-L7770) · [Before (L7938-L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7938-L7939)

```diff
-             const AH = Math.max(HH, null !== (BH = vH) && void 0 !== BH ? BH : HH);
-             (0, xH.h)("ready", Math.max(0, (null !== (LH = PH) && void 0 !== LH ? LH : AH) - AH) / 1e3)
+             const YB = Math.max(BB, null !== (OB = WB) && void 0 !== OB ? OB : BB);
+             (0, RB.i)("ready", Math.max(0, (null !== (GB = AB) && void 0 !== GB ? GB : YB) - YB) / 1e3)
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7941` → after: `L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7772) · [Before (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7941)

```diff
-           if (null !== PH && null !== TH ? (0, uH.v)("wasm_core_ready", TH) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), HH.target.session && (0, mS.b)(HH.target.session.gameNameWithVariation)) null === (oH = Lt) || void 0 === oH || oH … [truncated]
+           if (null !== AB && null !== VB ? (0, pB.p)("wasm_core_ready", VB) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), BB.target.session && (0, KQ.b)(BB.target.session.gameNameWithVariation)) null === (KB = Qj) || void 0 === KB || KB … [truncated]
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7944` → after: `L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7775) · [Before (L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7944)

```diff
-           kind: "xB"
+           kind: "rB"
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7959` → after: `L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7790) · [Before (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7959)

```diff
-             GH = null !== (BH = null === (LH = HH.session) || void 0 === LH ? void 0 : LH.gameNameWithVariation) && void 0 !== BH ? BH : null;
+             zB = null !== (OB = null === (GB = BB.session) || void 0 === GB ? void 0 : GB.gameNameWithVariation) && void 0 !== OB ? OB : null;
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7965` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7796) · [Before (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7965)

```diff
-             (0, JB.k)(XH, (0, JB.g)(rH))
+             (0, vO.l)(PB, (0, vO.i)(DB))
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7976` → after: `L7807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7807) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7976)

```diff
-               if ((0, xS.o)("webgpuloss")) {
+               if ((0, WQ.s)("webgpuloss")) {
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7979` → after: `L7810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7810) · [Before (L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7979)

```diff
-                 (0, vS.b)((HH => HH.noteWasmJoin(LH, BH, AH)))
+                 (0, AQ.d)((BB => BB.noteWasmJoin(GB, OB, YB)))
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7981` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7812) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7981)

```diff
-               if (null !== BH) throw new CB.c(BH)
+               if (null !== OB) throw new JO.d(OB)
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7985` → after: `L7816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7816) · [Before (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7985)

```diff
-             }] = await GC(Promise.all([(0, DH.j)(BH), XC(HH), null === tH || void 0 === tH ? void 0 : tH(), BC()]), XH.signal), AH = HH.session, rH = AH ? {
+             }] = await ZJ(Promise.all([(0, aB.m)(OB), qJ(BB), null === jB || void 0 === jB ? void 0 : jB(), QJ()]), PB.signal), YB = BB.session, DB = YB ? {
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8004` → after: `L7835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7835) · [Before (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8004)

```diff
-                 return void 0 === BH ? HH : EC(new HB.d(HH.message, HH.stage, BH.code, null, HH.socketOpened), HH)
+                 return void 0 === OB ? BB : pJ(new BO.d(BB.message, BB.stage, OB.code, null, BB.socketOpened), BB)
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8016-L8017` → after: `L7847-L7848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7847-L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7847-L7848) · [Before (L8016-L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8016-L8017)

```diff
-                 game: null !== (LH = null === rH || void 0 === rH ? void 0 : rH.gameNameWithVariation) && void 0 !== LH ? LH : HH.roomName,
-                 lobby: String(null !== SH && void 0 !== SH ? SH : null),
+                 game: null !== (GB = null === DB || void 0 === DB ? void 0 : DB.gameNameWithVariation) && void 0 !== GB ? GB : BB.roomName,
+                 lobby: String(null !== QB && void 0 !== QB ? QB : null),
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8019` → after: `L7850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7850) · [Before (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8019)

```diff
-                 postCookies: null !== (AH = HH.postCookies) && void 0 !== AH ? AH : null
+                 postCookies: null !== (YB = BB.postCookies) && void 0 !== YB ? YB : null
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8027` → after: `L7858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7858) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8027)

```diff
-                 game: null !== (WH = null === (MH = HH.session) || void 0 === MH ? void 0 : MH.gameNameWithVariation) && void 0 !== WH ? WH : "",
+                 game: null !== (ZB = null === (NB = BB.session) || void 0 === NB ? void 0 : NB.gameNameWithVariation) && void 0 !== ZB ? ZB : "",
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8029` → after: `L7860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7860) · [Before (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8029)

```diff
-                 rejoinedAt: zH ? GH : null,
+                 rejoinedAt: yB ? zB : null,
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8071` → after: `L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7902) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8071)

```diff
-                           console.warn(`${Xh} the held seat of a game left while it reconnected couldn't be released`, rH)
+                           console.warn(`${zo} the held seat of a game left while it reconnected couldn't be released`, DB)
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8076` → after: `L7907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7907) · [Before (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8076)

```diff
-                     IK: HH => {
+                     NK: BB => {
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8092-L8093` → after: `L7923-L7924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7923-L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7923-L7924) · [Before (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8092-L8093)

```diff
-                         console.warn(`${Xh} gave up reconnecting (${LH.reason}, ${LH.attempts} attempts)`, LH.lastError), (0, SA.reportReconnectGaveUp)(LH, Zh);
-                         const SH = null !== (AH = null === (rH = yt) || void 0 === rH ? void 0 : rH.rejoin) && void 0 !== AH ? AH : null;
+                         console.warn(`${zo} gave up reconnecting (${GB.reason}, ${GB.attempts} attempts)`, GB.lastError), (0, QY.reportReconnectGaveUp)(GB, Ho);
+                         const QB = null !== (YB = null === (DB = Oy) || void 0 === DB ? void 0 : DB.rejoin) && void 0 !== YB ? YB : null;
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8112-L8114` → after: `L7943-L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7943-L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7943-L7945) · [Before (L8112-L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8112-L8114)

```diff
-               }(CH, HH.endpoint), performance.mark(Mh), (0, uH.v)("wasm_joined", GH), setTimeout((() => {
-                 Dt === CH && (0, uH.j)()
-               }), 0), hC(), console.info(`${Xh} joined ${HH.roomName} as ${CH.seat.sessionId} at ${Math.round(performance.now())} ms`);
+               }(JB, BB.endpoint), performance.mark(Wo), (0, pB.p)("wasm_joined", zB), setTimeout((() => {
+                 bj === JB && (0, pB.i)()
+               }), 0), MJ(), console.info(`${zo} joined ${BB.roomName} as ${JB.seat.sessionId} at ${Math.round(performance.now())} ms`);
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8135` → after: `L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7966) · [Before (L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8135)

```diff
-           kind: "xB"
+           kind: "rB"
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8141` → after: `L7972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7972) · [Before (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8141)

```diff
-             console.warn(`${Xh} the cached traffic code could not be dropped`, HH)
+             console.warn(`${zo} the cached traffic code could not be dropped`, BB)
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8145` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7976) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8145)

```diff
-         if (KH instanceof CB.c) return LH(KH, performance.now() - YH), {
+         if (FB instanceof JO.d) return GB(FB, performance.now() - lB), {
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8150-L8151` → after: `L7981-L7982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7981-L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7981-L7982) · [Before (L8150-L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8150-L8151)

```diff
-         const HH = KH instanceof HB.d && KH.code === AH.e.wasmClientNotAllowed.code,
-           BH = KH instanceof HB.d && KH.code === AH.e.outdatedVersion.code,
+         const BB = FB instanceof BO.d && FB.code === YB.c.wasmClientNotAllowed.code,
+           OB = FB instanceof BO.d && FB.code === YB.c.outdatedVersion.code,
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8158` → after: `L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7989) · [Before (L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8158)

```diff
-             HH && (0, nB.G)(), LH(KH, performance.now() - YH)
+             BB && (0, cO.z)(), GB(FB, performance.now() - lB)
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8169` → after: `L8000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8000) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8169)

```diff
-         GH || XH.end(), nr.d.releaseHold(EH);
+         zB || PB.end(), hD.b.releaseHold(MB);
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8180` → after: `L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8011) · [Before (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8180)

```diff
-       return HH.session ? (0, DH.n)(wh, HH.session.gameNameWithVariation) : Promise.resolve()
+       return BB.session ? (0, aB.r)(Co, BB.session.gameNameWithVariation) : Promise.resolve()
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8184` → after: `L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8015) · [Before (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8184)

```diff
-       return (0, JB.t)(BH), new Promise(((LH, AH) => {
+       return (0, vO.r)(OB), new Promise(((GB, YB) => {
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8186` → after: `L8017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8017) · [Before (L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8186)

```diff
-           AH((0, JB.g)(BH))
+           YB((0, vO.i)(OB))
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8204` → after: `L8035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8035) · [Before (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8204)

```diff
-       (function() {
+       (XM(null === BB ? "left" : "replaced"), function() {
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8207` → after: `L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8038) · [Before (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8207)

```diff
-       }(), null === Ht || Ht.left) || (Ht.left = !0, null === (AH = (0, DH.i)()) || void 0 === AH || AH.socketLeft(), (0, GH.p)({
+       }(), null === Yj || Yj.left) || (Yj.left = !0, null === (YB = (0, aB.j)()) || void 0 === YB || YB.socketLeft(), (0, zB.n)({
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8210` → after: `L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8041) · [Before (L8210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8210)

```diff
-       Zt && (0, JB.k)(Zt, new DOMException("the join was left", "AbortError")), xC(null !== HH), null === (BH = Pt) || void 0 === BH || BH.leave();
+       Hj && (0, vO.l)(Hj, new DOMException("the join was left", "AbortError")), SJ(null !== BB), null === (OB = nj) || void 0 === OB || OB.leave();
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8212` → after: `L8043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8043) · [Before (L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8212)

```diff
-       null !== HH && nr.d.setGame(HH.game), QC(null, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.controller) && void 0 !== LH ? LH : null), null === rH || void 0 === rH || rH.leave(), MC(0), (0, ZB.e)()
+       null !== BB && hD.b.setGame(BB.game), WJ(null, null !== (GB = null === BB || void 0 === BB ? void 0 : BB.controller) && void 0 !== GB ? GB : null), null === DB || void 0 === DB || DB.leave(), VJ(0), (0, TO.h)()
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8216` → after: `L8047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8047) · [Before (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8216)

```diff
-       Dt = HH, Zt = BH, null === Dt && null === Zt && nr.d.setGame(void 0)
+       bj = BB, Hj = OB, null === bj && null === Hj && hD.b.setGame(void 0)
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8225` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8056) · [Before (L8225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8225)

```diff
-       return null !== lh && !pz && null !== BH && !BH.isStopped && (!!lh(HB.j, 0, (0, HB.z)(HH)) && (qt = !0, 0 === HH || Kt || IE(BH, !1, "all"), !0))
+       return null !== Lo && !GJ && null !== OB && !OB.isStopped && (!!Lo(BO.g, 0, (0, BO.v)(BB)) && (wj = !0, 0 === BB || gj || iM(OB, !1, "all"), !0))
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8230-L8231` → after: `L8061-L8062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8061-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8061-L8062) · [Before (L8230-L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8230-L8231)

```diff
-       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, XA.d)();
-       const LH = null !== (HH = null === (BH = yt) || void 0 === BH ? void 0 : BH.overflow) && void 0 !== HH ? HH : null;
+       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, PY.g)();
+       const GB = null !== (BB = null === (OB = Oy) || void 0 === OB ? void 0 : OB.overflow) && void 0 !== BB ? BB : null;
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8240` → after: `L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8071) · [Before (L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8240)

```diff
-       console.warn(`${Xh} the event buffer refused records in ${BH} frames (categories ${HH})`), pz || (null !== yt ? TC(yt, HH, BH) : null !== Zt && function(HH, BH, LH) {
+       console.warn(`${zo} the event buffer refused records in ${OB} frames (categories ${BB})`), GJ || (null !== Oy ? fJ(Oy, BB, OB) : null !== Hj && function(BB, OB, GB) {
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8243-L8244` → after: `L8074-L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8074-L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8074-L8075) · [Before (L8243-L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8243-L8244)

```diff
-           return null === HH ? "drop" : HH.activated ? "keep" : 0 !== (BH & VL.z.NetSession) ? "fail" : "drop"
-         }((null === (AH = Ez) || void 0 === AH ? void 0 : AH.join) === HH ? Ez : null, BH);
+           return null === BB ? "drop" : BB.activated ? "keep" : 0 !== (OB & nG.A.NetSession) ? "fail" : "drop"
+         }((null === (YB = zy) || void 0 === YB ? void 0 : YB.join) === BB ? zy : null, OB);
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8248` → after: `L8079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8079) · [Before (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8248)

```diff
-         } : "fail" === rH && (0, JB.k)(HH, new Error("the join's net session was lost to an event overflow"))
+         } : "fail" === DB && (0, vO.l)(BB, new Error("the join's net session was lost to an event overflow"))
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8261` → after: `L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8092) · [Before (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8261)

```diff
-         if (0 === (HH & VL.z.NetSession)) return "none";
+         if (0 === (BB & nG.A.NetSession)) return "none";
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8288` → after: `L8119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8119) · [Before (L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8288)

```diff
-         "landingPage" === BH ? (null === LH || void 0 === LH || LH.stopWorkers(), null === AH || void 0 === AH || AH.stopWorker(), null === rH || void 0 === rH || rH.stopWorkers()) : ((0, XB.j)(BH) || "inGame" === BH) && (null === LH || void 0 === LH || LH.restartWorkers(), null  … [truncated]
+         "landingPage" === OB ? (null === GB || void 0 === GB || GB.stopWorkers(), null === YB || void 0 === YB || YB.stopWorker(), null === DB || void 0 === DB || DB.stopWorkers()) : ((0, PO.k)(OB) || "inGame" === OB) && (null === GB || void 0 === GB || GB.restartWorkers(), null  … [truncated]
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8307` → after: `L8138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8138) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8307)

```diff
-         AH = null !== (BH = HH.joinOptions.lobbyName) && void 0 !== BH ? BH : null;
+         YB = null !== (OB = BB.joinOptions.lobbyName) && void 0 !== OB ? OB : null;
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8314` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8145) · [Before (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8314)

```diff
-       return LH.e(125).then((() => LH(54549))).then((HH => {
+       return GB.e(125).then((() => GB(54064))).then((BB => {
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8320` → after: `L8151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8151) · [Before (L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8320)

```diff
-         console.warn(`${Xh} the cached traffic code could not be dropped`, HH)
+         console.warn(`${zo} the cached traffic code could not be dropped`, BB)
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8338-L8339` → after: `L8170-L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8170-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8170-L8171) · [Before (L8338-L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8338-L8339)

```diff
-       const EH = (0, yH.l)(BH, (0, ur.g)(HH));
-       if (console.info(`${Xh} the game's connection closed with code ${BH} (${null!==(SH=EH.name)&&void 0!==SH?SH:"unrecognised"})`), BH === AH.e.gameOrPluginKick.code || hH || (0, SA.reportDisconnect)(EH, Zh, {
+       const MB = (0, tB.i)(OB, (0, qD.h)(BB));
+       if (console.info(`${zo} the game's connection closed with code ${OB} (${null!==(QB=MB.name)&&void 0!==QB?QB:"unrecognised"})`), OB === YB.c.gameOrPluginKick.code || oB || (0, QY.reportDisconnect)(MB, Ho, {
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8345` → after: `L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8177) · [Before (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8345)

```diff
-           LH = new Error(`the game's connection closed with code ${BH}`),
+           GB = new Error(`the game's connection closed with code ${OB}`),
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8357` → after: `L8189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8189) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8357)

```diff
-       const XH = EH.canReconnect ? tH : null,
+       const PB = MB.canReconnect ? jB : null,
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8369` → after: `L8201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8201) · [Before (L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8369)

```diff
-       nr.d.unwantedLeave(LH && null !== BH && 0 === Yz.size), null === (AH = Gz) || void 0 === AH || AH.abort();
+       hD.b.unwantedLeave(GB && null !== OB && 0 === qy.size), null === (YB = py) || void 0 === YB || YB.abort();
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8396` → after: `L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8228) · [Before (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8396)

```diff
-           console.error(`${Xh} an unwanted-leave listener threw`, zH)
+           console.error(`${zo} an unwanted-leave listener threw`, yB)
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8398` → after: `L8230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8230) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8398)

```diff
-           BH && (null !== hH ? hH() : HH.requiresRefresh && (0, EB.f)())
+           OB && (null !== oB ? oB() : BB.requiresRefresh && (0, MO.g)())
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8432` → after: `L8264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8264) · [Before (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8432)

```diff
-           aux: UL.cc.AdEnd,
+           aux: SG.kc.AdEnd,
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8461` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8293) · [Before (L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8461)

```diff
-       if (HH.readyState === WebSocket.CLOSING || HH.readyState === WebSocket.CLOSED) return console.warn(`${Xh} a closing or closed socket can't be attached`), null;
+       if (BB.readyState === WebSocket.CLOSING || BB.readyState === WebSocket.CLOSED) return console.warn(`${zo} a closing or closed socket can't be attached`), null;
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8463-L8465` → after: `L8295-L8297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8295-L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8295-L8297) · [Before (L8463-L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8463-L8465)

```diff
-       if (!rH || rH.isStopped) return console.warn(`${Xh} no core is running to attach a socket to`), HH.close(), null;
-       if (null === (0, DH.i)()) return console.warn(`${Xh} the game has not started to attach a socket to`), HH.close(), null;
-       if (bt > UL.w) return console.warn(`${Xh} this core has attached all the sockets it can; reload to play on`), HH.close(), null;
+       if (!DB || DB.isStopped) return console.warn(`${zo} no core is running to attach a socket to`), BB.close(), null;
+       if (null === (0, aB.j)()) return console.warn(`${zo} the game has not started to attach a socket to`), BB.close(), null;
+       if (Kj > SG.t) return console.warn(`${zo} this core has attached all the sockets it can; reload to play on`), BB.close(), null;
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8469` → after: `L8301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8301) · [Before (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8469)

```diff
-       if (!pC(rH, "open", SH, AH ? UL.bc.Resume : 0)) return HH.close(), null;
+       if (!GM(DB, "open", QB, YB ? SG.hc.Resume : 0)) return BB.close(), null;
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8475` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8307) · [Before (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8475)

```diff
-       const hH = new pL.c((() => {
+       const oB = new xG.d((() => {
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8497` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8329) · [Before (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8497)

```diff
-             hH.heard(), tH.token = null !== (BH = (0, yL.d)(LH)) && void 0 !== BH ? BH : tH.token,
+             oB.heard(), jB.token = null !== (OB = (0, tG.d)(GB)) && void 0 !== OB ? OB : jB.token,
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8500` → after: `L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8332) · [Before (L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8500)

```diff
-                   HH.rings.net.writeFrame(BH, LH) || HH.crash(RL.q, `a socket frame of ${LH.byteLength} bytes did not fit the net-in ring`)
+                   BB.rings.net.writeFrame(OB, GB) || BB.crash(wG.o, `a socket frame of ${GB.byteLength} bytes did not fit the net-in ring`)
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8509` → after: `L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8341) · [Before (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8509)

```diff
-           AH || (0, uH.v)("wasm_socket_open", performance.now());
+           YB || (0, pB.p)("wasm_socket_open", performance.now());
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8519` → after: `L8351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8351) · [Before (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8519)

```diff
-       return HH.addEventListener("message", zH), HH.addEventListener("open", CH), HH.addEventListener("close", EH), Ht = tH, null === (BH = (0, DH.i)()) || void 0 === BH || BH.socketAttached(SH), (0, GH.p)({
+       return BB.addEventListener("message", yB), BB.addEventListener("open", JB), BB.addEventListener("close", MB), Yj = jB, null === (OB = (0, aB.j)()) || void 0 === OB || OB.socketAttached(QB), (0, zB.n)({
```

#### 948. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8543-L8544` → after: `L8375-L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8375-L8376) · [Before (L8543-L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8543-L8544)

```diff
-         token: `${AH.roomId}:${BH.token}`
-       }), pC(HH, "close", BH.conn), null === (LH = (0, DH.i)()) || void 0 === LH || LH.socketDetached(BH.conn), !0
+         token: `${YB.roomId}:${OB.token}`
+       }), GM(BB, "close", OB.conn), null === (GB = (0, aB.j)()) || void 0 === GB || GB.socketDetached(OB.conn), !0
```

#### 949. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8553` → after: `L8385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8385) · [Before (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8553)

```diff
-         LX: hH,
+         sJ: oB,
```

#### 950. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8558-L8559` → after: `L8390-L8391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8390-L8391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8390-L8391) · [Before (L8558-L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8558-L8559)

```diff
-       if (!pC(HH, "close", BH.conn, UL.z.Held)) return !0;
-       console.warn(`${Xh} the game's connection ${rH?"went silent":`dropped with code ${LH}`}, holding it`);
+       if (!GM(BB, "close", OB.conn, SG.B.Held)) return !0;
+       console.warn(`${zo} the game's connection ${DB?"went silent":`dropped with code ${GB}`}, holding it`);
```

#### 951. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8565` → after: `L8397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8397) · [Before (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8565)

```diff
-       return (0, SA.reportDisconnect)((0, yH.l)(LH), Zh, EH, rH ? "silent" : void 0), hH.heldConn = BH.conn, hH.dropCode = LH, hH.pendingHold = {
+       return (0, QY.reportDisconnect)((0, tB.i)(GB), Ho, MB, DB ? "silent" : void 0), oB.heldConn = OB.conn, oB.dropCode = GB, oB.pendingHold = {
```

#### 952. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8567` → after: `L8399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8399) · [Before (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8567)

```diff
-         token: `${hH.roomId}:${tH}`
+         token: `${oB.roomId}:${jB}`
```

#### 953. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8575-L8576` → after: `L8407-L8408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8407-L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8407-L8408) · [Before (L8575-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8575-L8576)

```diff
-       return null === LH || null === rH || pz || HH.left || rH.conn !== HH.conn || null === SH || "" === SH ? null : (0, AH.k)(BH) && LH.resume.canHoldSeat() ? {
-         LX: LH,
+       return null === GB || null === DB || GJ || BB.left || DB.conn !== BB.conn || null === QB || "" === QB ? null : (0, YB.j)(OB) && GB.resume.canHoldSeat() ? {
+         sJ: GB,
```

#### 954. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8585` → after: `L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8417) · [Before (L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8585)

```diff
-       null === (LH = (0, DH.i)()) || void 0 === LH || LH.closeGame(HH), (0, LS.d)().close(HH), BH || (0, GH.p)({
+       null === (GB = (0, aB.j)()) || void 0 === GB || GB.closeGame(BB), (0, YQ.c)().close(BB), OB || (0, zB.n)({
```

#### 955. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8593-L8594` → after: `L8425-L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8425-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8425-L8426) · [Before (L8593-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8593-L8594)

```diff
-       const BH = (0, DH.i)();
-       pz || null === BH || BH.IK(HH) ? tz = null : performance.now() - gt.pause >= mh && (gt.pause = performance.now(), console.warn(`${Xh} the cmd ring had no room for SetPaused(${HH}): written before the next frame`))
+       const OB = (0, aB.j)();
+       GJ || null === OB || OB.NK(BB) ? Jy = null : performance.now() - Ej.pause >= mo && (Ej.pause = performance.now(), console.warn(`${zo} the cmd ring had no room for SetPaused(${BB}): written before the next frame`))
```

#### 956. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8607` → after: `L8439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8439) · [Before (L8607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8607)

```diff
-       HH.heldConn = 0, HH.pendingHold = null, Hz === HH && (Hz = null), "left" === BH ? HH.resume.leave() : HH.resume.dispose(), 0 === hz || (null === (LH = Ht) || void 0 === LH ? void 0 : LH.conn) !== hz || "left" === BH && (null === (AH = Dt) || void 0 === AH ? void 0 : AH.conn … [truncated]
+       BB.heldConn = 0, BB.pendingHold = null, Gy === BB && (Gy = null), "left" === OB ? BB.resume.leave() : BB.resume.dispose(), 0 === yy || (null === (GB = Yj) || void 0 === GB ? void 0 : GB.conn) !== yy || "left" === OB && (null === (YB = bj) || void 0 === YB ? void 0 : YB.conn … [truncated]
```

#### 957. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8636` → after: `L8468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8468) · [Before (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8636)

```diff
-       (null === LH || void 0 === LH ? void 0 : LH.conn) === HH && (LH.left = !0, null === (BH = (0, DH.i)()) || void 0 === BH || BH.socketLeft(), (0, GH.p)({
+       (null === GB || void 0 === GB ? void 0 : GB.conn) === BB && (GB.left = !0, null === (OB = (0, aB.j)()) || void 0 === OB || OB.socketLeft(), (0, zB.n)({
```
