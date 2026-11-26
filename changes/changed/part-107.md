# Changed — Bundle Modifications Report (Part 107 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `107 / 115` (**385** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 106](part-106.md) · [Part 108 →](part-108.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (1083 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074)

#### 526. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5355` → after: `L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5606) · [Before (L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5355)

```diff
-             return "fo4mhE" in QA && QU(), void(zU && (eU = yA[21]))
+             return "YHIDVn" in Ch && hH(), void(LH && (mH = zh[31]))
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5358-L5369` → after: `L5609-L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5609-L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5609-L5657) · [Before (L5358-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5358-L5369)

```diff
-           WU[XU[yA[1]]] = yA[21];
-           const cU = typeof XU[yA[2]] === yA[49] ? XU[yA[2]] : "" + XU[yA[2]];
-           if (!SU[cU]) {
-             if ((yA[1], CQ[yA[28]])(cU)) {
-               function AU(...UU) {
-                 function XU(UU) {
-                   if (!UU) return -yA[2];
-                   const zU = XU(UU.left),
-                     cU = XU(UU.right),
-                     yU = Math.abs(zU - cU);
-                   if (zU === 1 / 0 || cU === 1 / 0 || yU > yA[2]) return 1 / 0;
-                   return Math.max(zU, cU) + yA[2]
+           OH[BH[zh[1]]] = zh[31];
+           const AH = typeof BH[zh[2]] === zh[79] ? BH[zh[2]] : "" + BH[zh[2]];
+           if (KH[AH]) {
+             function tH(...HH) {
+               Eh(HH[zh[0]] = zh[1], HH[zh[3]] = function(...HH) {
+                 if (Eh(HH[zh[0]] = zh[2], HH[-zh[84]] = HH[zh[1]].length), HH[-zh[84]] < zh[15]) return zh[1];
+                 if (Eh(HH[zh[85]] = Math.max(...HH[zh[1]]), HH[-zh[86]] = Math.min(...HH[zh[1]])), HH[zh[85]] === HH[-zh[86]]) return zh[1];
+                 for (Eh(HH[zh[12]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MAX_SAFE_INTEGER), HH[zh[16]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MIN_SAFE_INTEGER), HH[zh[32]] = Math.ceil((HH[zh[85]] - HH[-zh[86]]) / (HH[-zh[84]] - zh[2])), HH[-zh[88]] = zh[1]), HH[-zh[87]] = zh … [truncated]
+                 for (Eh(HH[zh[46]] = Number.MIN_SAFE_INTEGER, HH[zh[89]] = HH[-zh[86]]), HH[zh[40]] = zh[1]; HH[zh[40]] < HH[-zh[84]] - zh[2]; HH[zh[40]]++) HH[zh[12]][HH[zh[40]]] === Number.MAX_SAFE_INTEGER && HH[zh[16]][HH[zh[40]]] === Number.MIN_SAFE_INTEGER || Eh(HH[zh[46]] = … [truncated]
+                 return HH[zh[46]] = Math.max(HH[zh[46]], HH[zh[85]] - HH[zh[89]]), HH[zh[46]]
+               }, console.log(HH[zh[3]]))
+             }
+             "bYkA95" + zh[83] in Ch && tH()
+           } else {
+             if ((zh[1], KS.n)(AH)) {
+               function zH() {
+ ... (33 more added lines; see GitHub link above)
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5371-L5388` → after: `L5659-L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5659-L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5659-L5712) · [Before (L5371-L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5371-L5388)

```diff
-                 UU[yA[0]] = yA[1], window[yA[50] + yA[51] + yA[52] + yA[53]] = {
-                   buildCharacterMap: function(UU) {
-                     const XU = {};
-                     for (let zU of UU.replace(/[^w]/g, "").toLowerCase()) XU[zU] = XU[zU] + yA[2] || yA[2];
-                     return XU
-                   },
-                   isAnagrams: function(...UU) {
-                     UU[yA[0]] = yA[4];
-                     const XU = buildCharMap(UU[yA[1]]),
-                       zU = buildCharMap(UU[yA[2]]);
-                     for (let cU in XU)
-                       if (XU[cU] !== zU[cU]) return yA[15];
-                     return Object.keys(XU).length !== Object.keys(zU).length ? yA[15] : yA[21]
-                   },
-                   isBalanced: function(...UU) {
-                     return UU[yA[0]] = yA[2], XU(UU[yA[1]]) !== 1 / 0
- ... (2 more removed lines; see GitHub link above)
+                 "h90sXU" in Ch && CH(), Eh(KH[AH] = zh[31], oH[IH++] = AH, cH ||= (zh[1], KS[zh[111]])(AH))
+               } else {
+                 function EH() {
+                   ! function(...HH) {
+                     function BH(...HH) {
+                       for (Eh(HH[zh[0]] = zh[2], HH[zh[3]] = [], HH[zh[15]] = zh[1], HH[zh[93]] = HH[zh[1]].length, HH[zh[94]] = zh[20], HH[zh[10]] = zh[20]); HH[zh[15]] < HH[zh[93]];) Eh(HH[zh[94]] = HH[zh[1]].charCodeAt(HH[zh[15]]++), HH[zh[94]] >= zh[95] && HH[zh[94]] <= zh[96 … [truncated]
+                       return HH[zh[3]]
+                     }
+ 
+                     function LH(...HH) {
+                       if (HH[zh[0]] = zh[2], HH[zh[1]] >= zh[95] && HH[zh[1]] <= zh[100]) throw Error("Lone surrogate U+" + HH[zh[1]].toString(zh[9]).toUpperCase() + " is not a scalar value")
+                     }
+ 
+                     function AH(...BH) {
+                       return BH[zh[0]] = zh[15], HH[-zh[99]](BH[zh[1]] >> BH[zh[2]] & zh[56] | zh[57])
+                     }
+ ... (38 more added lines; see GitHub link above)
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5391-L5392` → after: `L5716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5716) · [Before (L5391-L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5391-L5392)

```diff
-               return "Cs0vdf" in QA && AU(), void(uU = yA[21])
-             }(yA[1], CQ[yA[63]])(cU) ? wU < 8 ? AA(SU[cU] = yA[21], CU[wU++] = cU, rU ||= (yA[1], CQ[yA[54]])(cU)) : !rU && (yA[1], CQ[yA[54]])(cU) && AA(SU[cU] = yA[21], CU[8 - yA[2]] = cU, rU = yA[21]): OU < 4 && AA(SU[cU] = yA[21], qU[OU++] = cU)
+             else lH < 4 && Eh(KH[AH] = zh[31], fH[lH++] = AH)
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5395` → after: `L5719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5719) · [Before (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5395)

```diff
-         iU = (yA[1], wQ.l)(UU),
+         gH = (zh[1], cS[zh[89]])(HH),
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5400` → after: `L5724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5724) · [Before (L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5400)

```diff
-             return yA[5]
+             return zh[20]
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5405` → after: `L5729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5729) · [Before (L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5405)

```diff
-         })), typeof HU === yA[55] + yA[56]) {
+         })), typeof NH === zh[112] + zh[113]) {
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5414` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5738) · [Before (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5414)

```diff
-           for (const zU in XU)(yA[1], Ny[yA[28]])(Ny[yA[65]], XU, [zU]) && zU !== UU && fU(zU, XU[zU])
+           for (const LH in BH)(zh[1], Qr[zh[114]])(Qr[zh[128]], BH, [LH]) && LH !== HH && qH(LH, BH[LH])
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5417-L5425` → after: `L5741-L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5741-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5741-L5748) · [Before (L5417-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5417-L5425)

```diff
-       const MU = iU ? yA[4] : yA[2];
-       let vU = yA[15];
-       const VU = (...XU) => (XU[yA[0]] = yA[1], LU ? yA[21] : (AA(XU[yA[19]] = yA[15], vU = !RU((() => {
-           XU[yA[19]] = yU[UU] !== fU
-         }))), XU[yA[19]])),
-         sU = kU(((...XU) => {
-           XU[yA[0]] = yA[1];
-           const zU = (yA[1], Ny.P)(yU, UU);
-           return (zU === yA[3] || zU === void yA[1] ? void yA[1] : zU.configurable) !== yA[15] || typeof zU[yA[82]] !== yA[55] + yA[56] || dU !== MU
+       const RH = gH ? zh[15] : zh[2];
+       let jH = zh[19];
+       const nH = (...BH) => (BH[zh[0]] = zh[1], kH ? zh[31] : (Eh(BH[-zh[115]] = zh[19], jH = !UH((() => {
+           BH[-zh[115]] = rH[HH] !== qH
+         }))), BH[-zh[115]])),
+         FH = xH((() => {
+           const BH = (zh[1], Qr.J)(rH, HH);
+           return (BH === zh[21] || BH === void zh[1] ? void zh[1] : BH.configurable) !== zh[19] || typeof BH[zh[140]] !== zh[112] + zh[113] || bH !== RH
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5430` → after: `L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5753) · [Before (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5430)

```diff
-             return navigator[yA[75] + "tSub"]
+             return navigator[zh[135] + "tSub"]
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5437` → after: `L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5760) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5437)

```diff
-         JU = xU === yA[3] ? ((...UU) => {
+         aH = dH === zh[21] ? ((...HH) => {
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5439-L5440` → after: `L5762-L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5762-L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5762-L5764) · [Before (L5439-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5439-L5440)

```diff
-           AA(UU[yA[19]] = yA[15], UU[yA[57]] = 60 - yA[2]);
-           const XU = TextDecoder[yA[58] + yA[59]][yA[60]],
+           const BH = zh[5];
+           Eh(HH[-zh[117]] = zh[19], HH[zh[116]] = BH - zh[2]);
+           const LH = TextDecoder[zh[118] + zh[119]][zh[120]],
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5442` → after: `L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5766) · [Before (L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5442)

```diff
-               UU[yA[57]]++, 60 === UU[yA[57]] && (KQ((() => IU(yA[15]))) && (UU[yA[19]] = yA[21]), UU[yA[57]] = yA[1]);
+               HH[zh[116]]++, HH[zh[116]] === BH && (Hh((() => YH(zh[19]))) && (HH[-zh[117]] = zh[31]), HH[zh[116]] = zh[1]);
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5444` → after: `L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5768) · [Before (L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5444)

```diff
-               return (yA[1], Ny[yA[28]])(XU, this, cU)
+               return (zh[1], Qr[zh[114]])(LH, this, rH)
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5447-L5452` → after: `L5771-L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5771-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5771-L5776) · [Before (L5447-L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5447-L5452)

```diff
-             TextDecoder[yA[58] + yA[59]][yA[60]] = zU
-           })), () => UU[yA[19]] ? yA[4] : TQ((() => TextDecoder[yA[58] + yA[59]][yA[60]] !== zU ? yA[17] : yA[1]))
-         })() : () => TQ((() => xU[yA[73] + yA[74]]())),
-         jU = (yA[1], lX[yA[81]])(),
-         KU = (yA[1], Ny[yA[44]])(yA[3]),
-         bU = (yA[1], Ny[yA[44]])(yA[3]);
+             TextDecoder[zh[118] + zh[119]][zh[120]] = AH
+           })), () => HH[-zh[117]] ? zh[15] : Lh((() => TextDecoder[zh[118] + zh[119]][zh[120]] !== AH ? zh[32] : zh[1]))
+         })() : () => Lh((() => dH[zh[133] + zh[134]]())),
+         sH = (zh[1], HL[zh[150]])(),
+         JH = (zh[1], Qr[zh[74]])(zh[21]),
+         iH = (zh[1], Qr[zh[74]])(zh[21]);
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5456-L5459` → after: `L5780-L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5780-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5780-L5783) · [Before (L5456-L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5456-L5459)

```diff
-       const XX = (yA[1], Ny[yA[44]])(yA[3]),
-         zX = (yA[1], Ny[yA[44]])(yA[3]);
-       let cX = yA[3],
-         yX = (yA[1], Ny[yA[44]])(yA[3]);
+       const BB = (zh[1], Qr[zh[74]])(zh[21]),
+         LB = (zh[1], Qr[zh[74]])(zh[21]);
+       let AB = zh[21],
+         rB = (zh[1], Qr[zh[74]])(zh[21]);
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5461` → after: `L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5785) · [Before (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5461)

```diff
-           AA(UU[yA[0]] = yA[4], KU[TU] = UU[yA[1]], bU[TU] = UU[yA[2]], TU++)
+           Eh(HH[zh[0]] = zh[15], JH[pH] = HH[zh[1]], iH[pH] = HH[zh[2]], pH++)
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5463-L5465` → after: `L5787-L5789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5787-L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5787-L5789) · [Before (L5463-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5463-L5465)

```diff
-         AX = (...UU) => (AA(UU[yA[0]] = yA[2], UU[yA[19]] = yA[5]), (UU[yA[19]] = (bU[UU[yA[1]]] ? zX : XX)[KU[UU[yA[1]]]]) !== yA[3] && UU[yA[19]] !== void yA[1] ? UU[yA[19]] : -yA[2]),
-         FX = (yA[1], Ny[yA[7]])("d2lvNjQz"),
-         oX = (yA[1], Ny[yA[7]])("amtsa2plZndu"),
+         hB = (...HH) => (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = zh[20]), (HH[zh[2]] = (iH[HH[zh[1]]] ? LB : BB)[JH[HH[zh[1]]]]) !== zh[21] && HH[zh[2]] !== void zh[1] ? HH[zh[2]] : -zh[2]),
+         tB = (zh[1], Qr[zh[22]])("d2lvNjQz"),
+         zB = (zh[1], Qr[zh[22]])("amtsa2plZndu"),
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5467-L5469` → after: `L5791-L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5791-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5791-L5793) · [Before (L5467-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5467-L5469)

```diff
-           [(yA[1], Ny[yA[7]])("aW9qZndlODNq"), "2"],
-           [(yA[1], Ny[yA[7]])("a3Bq"), "4"],
-           [(yA[1], Ny[yA[7]])("dXJocmZm"), "5"]
+           [(zh[1], Qr[zh[22]])("aW9qZndlODNq"), "2"],
+           [(zh[1], Qr[zh[22]])("a3Bq"), zh[121]],
+           [(zh[1], Qr[zh[22]])("dXJocmZm"), zh[122]]
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5472-L5473` → after: `L5796-L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5796-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5796-L5797) · [Before (L5472-L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5472-L5473)

```diff
-           [(yA[1], Ny[yA[7]])(yA[62] + yA[61]), yA[28]],
-           [(yA[1], Ny[yA[7]])(yA[62] + "w="), yA[54]]
+           [(zh[1], Qr[zh[22]])(zh[124] + zh[123]), zh[154]],
+           [(zh[1], Qr[zh[22]])(zh[124] + "w="), zh[74]]
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5475-L5477` → after: `L5799-L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5799-L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5799-L5801) · [Before (L5475-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5475-L5477)

```diff
-         YX = (yA[1], Ny[yA[7]])("eTR5bnM="),
-         NX = (yA[1], Ny[yA[7]])("aHRleWpldA=="),
-         IX = (yA[1], Ny[yA[7]])("c2RmbGpneGxmY2pr"),
+         XB = (zh[1], Qr[zh[22]])("eTR5bnM="),
+         GB = (zh[1], Qr[zh[22]])("aHRleWpldA=="),
+         YB = (zh[1], Qr[zh[22]])("c2RmbGpneGxmY2pr"),
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5479-L5483` → after: `L5803-L5807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5803-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5803-L5807) · [Before (L5479-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5479-L5483)

```diff
-           [(yA[1], Ny[yA[7]])("a3NhZmR1"), yA[44]],
-           [(yA[1], Ny[yA[7]])("ZGZnYWFzZGFz"), yA[67]],
-           [IX, yA[63]],
-           [(yA[1], Ny[yA[7]])("bGFzZWRraGFz"), yA[7]],
-           [(yA[1], Ny[yA[7]])("cW16ZjhrM24="), yA[19]]
+           [(zh[1], Qr[zh[22]])("a3NhZmR1"), zh[125]],
+           [(zh[1], Qr[zh[22]])("ZGZnYWFzZGFz"), zh[22]],
+           [YB, zh[127]],
+           [(zh[1], Qr[zh[22]])("bGFzZWRraGFz"), zh[126]],
+           [(zh[1], Qr[zh[22]])("cW16ZjhrM24="), zh[3]]
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5487-L5488` → after: `L5812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5812) · [Before (L5487-L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5487-L5488)

```diff
-           [NX, yA[33]],
-           [(yA[1], Ny[yA[7]])("bmI3ZnEy"), yA[29]]
+           [(zh[1], Qr[zh[22]])("bmI3ZnEy"), zh[18]]
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5490-L5491` → after: `L5814-L5815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5814-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5814-L5815) · [Before (L5490-L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5490-L5491)

```diff
-         tX = (yA[1], Ny[yA[7]])("bGtxM20="),
-         gX = (yA[1], Ny[yA[7]])("bWtxN3" + yA[61]),
+         WB = (zh[1], Qr[zh[22]])("bGtxM20="),
+         MB = (zh[1], Qr[zh[22]])("bWtxN3" + zh[123]),
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5493-L5494` → after: `L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5817) · [Before (L5493-L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5493-L5494)

```diff
-         GX = ((...UU) => {
-           UU[yA[0]] = yA[1];
+         vB = (() => {
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5496` → after: `L5819-L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5819-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5819-L5820) · [Before (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5496)

```diff
-             return UU[yA[19]] = yA[5], (UU[yA[19]] = yU[(yA[1], Ny[yA[7]])("V2ViU29ja2V0")]) === yA[3] || UU[yA[19]] === void yA[1] ? void yA[1] : UU[yA[19]][yA[58] + yA[59]]
+             var HH;
+             return (HH = rH[(zh[1], Qr[zh[22]])("V2ViU29ja2V0")]) === zh[21] || HH === void zh[1] ? void zh[1] : HH[zh[118] + zh[119]]
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5498` → after: `L5822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5822) · [Before (L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5498)

```diff
-             return yA[5]
+             return zh[20]
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5501-L5503` → after: `L5825-L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5825-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5825-L5827) · [Before (L5501-L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5501-L5503)

```diff
-         BX = ["send", "close", "addEventListener", "removeEventListener", yA[69] + yA[68] + yA[63]],
-         ZX = ["onmessage", "onopen", "onclos" + yA[43], "onerro" + yA[44]];
-       let RX = yA[15];
+         PB = ["send", "close", "addEventListener", "removeEventListener", zh[131] + zh[130] + zh[127]],
+         TB = ["onmessage", "onopen", "onclos" + zh[16], "onerro" + zh[125]];
+       let UB = zh[19];
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5507-L5508` → after: `L5831-L5832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5831-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5831-L5832) · [Before (L5507-L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5507-L5508)

```diff
-           zU === yA[3] || RX || (RX = kU((() => {
-             if (GX !== yA[5] && (yA[1], Ny[yA[64]])(zU) !== GX) return yA[21];
+           LH === zh[21] || UB || (UB = xH((() => {
+             if (vB !== zh[20] && (zh[1], Qr.K)(LH) !== vB) return zh[31];
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5510` → after: `L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5834) · [Before (L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5510)

```diff
-               if ((yA[1], Ny[yA[28]])(Ny[yA[65]], zU, [BX[UU]])) return yA[21];
+               if ((zh[1], Qr[zh[114]])(Qr[zh[128]], LH, [PB[HH]])) return zh[31];
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5512-L5513` → after: `L5836-L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5836-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5836-L5837) · [Before (L5512-L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5512-L5513)

```diff
-               if (zU[ZX[UU]] !== yA[3] && zU[ZX[UU]] !== yA[5]) return yA[21];
-             return yA[15]
+               if (LH[TB[HH]] !== zh[21] && LH[TB[HH]] !== zh[20]) return zh[31];
+             return zh[19]
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5516-L5517` → after: `L5840-L5841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5840-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5840-L5841) · [Before (L5516-L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5516-L5517)

```diff
-         WX = (yA[1], Ny[yA[7]])("RXZlbnQ=");
-       let dX = Iz[yA[66]][yA[86]],
+         OB = (zh[1], Qr[zh[22]])("RXZlbnQ=");
+       let bB = UL[zh[129]][zh[145]],
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5519-L5520` → after: `L5843-L5844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5843-L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5843-L5844) · [Before (L5519-L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5519-L5520)

```diff
-       const eX = () => LX++ === yA[16] ? (LX = yA[1], IU(yA[15]) ? Iz[yA[43]].CheckFuncHit : yA[1]) : yA[1],
-         CX = (yA[1], Ny[yA[44]])(yA[3]),
+       const mB = () => kB++ === zh[10] ? (kB = zh[1], YH(zh[19]) ? UL[zh[16]].CheckFuncHit : zh[1]) : zh[1],
+         oB = (zh[1], Qr[zh[74]])(zh[21]),
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5523-L5524` → after: `L5847-L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5847-L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5847-L5848) · [Before (L5523-L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5523-L5524)

```diff
-         const UU = (yA[1], Ny[yA[28]])(Ny.bb, cU, [oU]);
-         CX[oU] = UU >= 99 && UU <= 122 ? UU : yA[1]
+         const HH = (zh[1], Qr[zh[114]])(Qr.cb, AH, [zH]);
+         oB[zH] = HH >= 99 && HH <= zh[68] ? HH : zh[1]
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5527` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5851) · [Before (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5527)

```diff
-           return typeof UU === yA[55] + yA[56] && (yA[1], Ny[yA[28]])(Ny.X, XU, [(zU = UU, (0, Ny.p)(Ny.y, zU, []))]) !== yA[3];
+           return typeof HH === zh[112] + zh[113] && (zh[1], Qr[zh[114]])(Qr.T, BH, [(LH = HH, (0, Qr.l)(Qr.y, LH, []))]) !== zh[21];
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5533-L5535` → after: `L5857-L5859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5857-L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5857-L5859) · [Before (L5533-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5533-L5535)

```diff
-           [XA["Dispat" + yA[68] + yA[63]], () => !OX(EventTarget[yA[58] + yA[59]][yA[69] + yA[68] + yA[63]], SX)],
-           [XA.PerformanceNow, () => !OX(performance[yA[71]], rX)],
-           [XA["DateNo" + yA[70]], () => !OX(Date[yA[71]], rX)]
+           [Sh["Dispat" + zh[130] + zh[127]], () => !fB(EventTarget[zh[118] + zh[119]][zh[131] + zh[130] + zh[127]], lB)],
+           [Sh.PerformanceNow, () => !fB(performance[zh[132]], KB)],
+           [Sh.DateNow, () => !fB(Date[zh[132]], KB)]
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5537` → after: `L5861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5861) · [Before (L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5537)

```diff
-         fX = (yA[1], Ny[yA[44]])(yA[3]);
+         eB = (zh[1], Qr[zh[74]])(zh[21]);
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5541-L5542` → after: `L5865-L5866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5865-L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5865-L5866) · [Before (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5541-L5542)

```diff
-           AA(UU[yA[0]] = yA[1], UU[yA[72]] = yA[3]);
-           const XU = KQ((() => (UU[yA[72]] = NU(yA[21]), UU[yA[72]] !== yA[3])));
+           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[21]);
+           const BH = Hh((() => (HH[zh[3]] = GH(zh[31]), HH[zh[3]] !== zh[21])));
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5544` → after: `L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5868) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5544)

```diff
-           return UU[yA[72]] !== yA[3] && pU === yA[3] && (zU = UU[yA[72]][yA[22]], cU = UU[yA[72]][yA[23]], pU = (0, CQ.A)(nQ(zU, cU))), XU
+           return HH[zh[3]] !== zh[21] && uH === zh[21] && (LH = HH[zh[3]][zh[36]], AH = HH[zh[3]][zh[37]], uH = (0, KS.u)(aS(LH, AH))), BH
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5546` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5870) · [Before (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5546)

```diff
-         [yA[73] + yA[74]]: (...UU) => {
+         [zh[133] + zh[134]]: (...HH) => {
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5549-L5552` → after: `L5873-L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5873-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5873-L5876) · [Before (L5549-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5549-L5552)

```diff
-           if (XU === yA[4]) return yA[4];
-           if (WU[FX]) return yA[6];
-           const zU = TQ((() => yU[oX] ? yA[18] : yA[1]));
-           return zU !== yA[1] ? zU === yA[18] ? yA[18] : yA[1] : XU === bQ ? yA[1] : XU === yA[17] ? yA[17] : (BU(), cU = Function[yA[58] + yA[59]], QU = yA[80], AU = (...UU) => (UU[yA[0]] = yA[2], UU[yA[1]].writable !== yA[21]), KQ((() => {
+           if (BH === zh[15]) return zh[15];
+           if (OH[tB]) return zh[13];
+           const LH = Lh((() => rH[zB] ? zh[12] : zh[1]));
+           return LH !== zh[1] ? LH === zh[12] ? zh[12] : zh[1] : BH === Bh ? zh[1] : BH === zh[32] ? zh[32] : (PH(), AH = Function[zh[118] + zh[119]], SH = zh[139], hH = (...HH) => (HH[zh[0]] = zh[2], HH[zh[1]].writable !== zh[31]), Hh((() => {
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5555` → after: `L5879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5879) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5555)

```diff
-           })) ? yA[39] : yA[1]);
+           })) ? zh[4] : zh[1]);
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5559-L5560` → after: `L5883-L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5883-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5883-L5884) · [Before (L5559-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5559-L5560)

```diff
-         [yA[75] + "tSubChanged"]: () => {
-           if (lU === nU || vU) return yA[15];
+         [zh[135] + "tSubChanged"]: (...HH) => {
+           if (HH[zh[0]] = zh[1], ZH === DH || jH) return zh[19];
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5564-L5565` → after: `L5888-L5889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5888-L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5888-L5889) · [Before (L5564-L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5564-L5565)

```diff
-         uD: (...UU) => {
-           AA(UU[yA[0]] = yA[1], UU[yA[19]] = qX);
+         LX: (...HH) => {
+           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = IB);
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5568` → after: `L5892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5892) · [Before (L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5568)

```diff
-             zU[yA[1]] < UU[yA[19]] && kU(zU[yA[2]]) && (UU[yA[19]] = zU[yA[1]])
+             LH[zh[1]] < HH[zh[3]] && xH(LH[zh[2]]) && (HH[zh[3]] = LH[zh[1]])
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5570` → after: `L5894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5894) · [Before (L5570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5570)

```diff
-           return UU[yA[19]] < qX ? CX[UU[yA[19]]] : yA[1]
+           return HH[zh[3]] < IB ? oB[HH[zh[3]]] : zh[1]
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5572-L5573` → after: `L5896-L5897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5896-L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5896-L5897) · [Before (L5572-L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5572-L5573)

```diff
-         UF: () => jU ? lX.h : 8,
-         [yA[76] + yA[77] + "Subs"]: (...UU) => {
+         PE: () => sH ? HL[zh[89]] : zh[44],
+         [zh[136] + zh[137] + "Subs"]: (...HH) => {
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5575-L5576` → after: `L5899-L5900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5899-L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5899-L5900) · [Before (L5575-L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5575-L5576)

```diff
-           const XU = oU[yA[84]].Dk[yA[76] + yA[77]];
-           return typeof XU === yA[78] && XU > yA[1] ? XU > yA[79] ? yA[79] : XU : yA[1]
+           const BH = zH[zh[142]].YM[zh[136] + zh[137]];
+           return typeof BH === zh[138] && BH > zh[1] ? BH > zh[69] ? zh[69] : BH : zh[1]
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5578-L5584` → after: `L5902-L5908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5902-L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5902-L5908) · [Before (L5578-L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5578-L5584)

```diff
-         ["getCom" + yA[91]]: (...UU) => {
-           AA(UU[yA[0]] = yA[1], UU[yA[19]] = yA[5], TU = yA[1]);
-           for (let zU = yA[1]; zU < wU; zU++) QX(CU[zU], yA[21]);
-           for (let zU = yA[1]; zU < DX[yA[0]]; zU++) WU[DX[zU][yA[1]]] && QX(DX[zU][yA[2]], yA[21]);
-           const XU = TQ((() => jQ(atob[yA[80]](), EU) ? yA[1] : yA[2]));
-           XU === yA[2] && QX(yA[81], yA[21]), BU();
-           const cU = XU === bQ ? bQ : TQ(((...UU) => {
+         ["getCom" + zh[153]]: (...HH) => {
+           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[20], pH = zh[1]);
+           for (let LH = zh[1]; LH < IH; LH++) SB(oH[LH], zh[31]);
+           for (let LH = zh[1]; LH < CB[zh[0]]; LH++) OH[CB[LH][zh[1]]] && SB(CB[LH][zh[2]], zh[31]);
+           const BH = Lh((() => yS(atob[zh[139]](), EH) ? zh[1] : zh[2]));
+           BH === zh[2] && SB(zh[29], zh[31]), PH();
+           const AH = BH === Bh ? Bh : Lh(((...HH) => {
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5587` → after: `L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5911) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5587)

```diff
-             return XU === yA[5] ? bQ : XU[yA[82]] !== yA[5] ? yA[2] : yA[1]
+             return BH === zh[20] ? Bh : BH[zh[140]] !== zh[20] ? zh[2] : zh[1]
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5589` → after: `L5913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5913) · [Before (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5589)

```diff
-           cU === yA[2] && QX(yA[40], yA[21]);
+           AH === zh[2] && SB(zh[143], zh[31]);
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5591` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5915) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5591)

```diff
-           for (let zU = yA[1]; zU < EX[yA[0]] && !yU; zU++) WU[EX[zU][yA[1]]] && QX(EX[zU][yA[2]], yA[21]);
+           for (let LH = zh[1]; LH < EB[zh[0]] && !rH; LH++) OH[EB[LH][zh[1]]] && SB(EB[LH][zh[2]], zh[31]);
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5593-L5594` → after: `L5917-L5918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5917-L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5917-L5918) · [Before (L5593-L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5593-L5594)

```diff
-           UU[yA[29]] = yA[3], wU === yA[1] && (OU > yA[1] ? UU[yA[29]] = qU[yA[1]] : uU ? UU[yA[29]] = "fp" : QU || (UU[yA[29]] = WU[YX] ? yA[83] : WU[NX] ? yA[33] : yA[3]));
-           for (let zU = yA[1]; zU < pX[yA[0]] && !yU; zU++) WU[pX[zU][yA[1]]] && QX(pX[zU][yA[2]], yA[21]);
+           HH[zh[2]] = zh[21], IH === zh[1] && (lH > zh[1] ? HH[zh[2]] = fH[zh[1]] : eH ? HH[zh[2]] = "fp" : SH || (HH[zh[2]] = OH[XB] ? zh[141] : OH[GB] ? zh[83] : zh[21]));
+           for (let LH = zh[1]; LH < uB[zh[0]] && !rH; LH++) OH[uB[LH][zh[1]]] && SB(uB[LH][zh[2]], zh[31]);
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5596-L5602` → after: `L5920-L5927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5920-L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5920-L5927) · [Before (L5596-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5596-L5602)

```diff
-             FU = (yA[1], SQ[yA[43]])(),
-             oU = FU !== yA[3] && (yA[1], wX[yA[28]])(FU);
-           oU && !yU && QX(FU, yA[15]), sU && QX("ix", yA[15]), eU && QX("il", yA[15]);
-           for (let zU = yA[1]; zU < OU; zU++) QX(qU[zU], yA[21]);
-           for (let zU = yA[1]; zU < aX[yA[0]]; zU++) WU[aX[zU][yA[1]]] && QX(aX[zU][yA[2]], yA[21]);
-           WU[tX] && QX("mk:lk", yA[21]);
-           const DU = (UU => {
+             tH = (zh[1], gS[zh[8]])(),
+             zH = tH !== zh[21] && (zh[1], NB[zh[111]])(tH);
+           zH && !rH && SB(tH, zh[19]), FH && SB("ix", zh[19]), mH && SB("il", zh[19]);
+           for (let LH = zh[1]; LH < lH; LH++) SB(fH[LH], zh[31]);
+           for (let LH = zh[1]; LH < QB[zh[0]]; LH++) OH[QB[LH][zh[1]]] && SB(QB[LH][zh[2]], zh[31]);
+           OH[WB] && SB("mk:lk", zh[31]);
+           const CH = ((...HH) => {
+             HH[zh[0]] = zh[2];
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5604-L5605` → after: `L5929-L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5929-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5929-L5930) · [Before (L5604-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5604-L5605)

```diff
-               if (UU === kX[XU]) return kX[XU];
-             return yA[3]
+               if (HH[zh[1]] === xB[BH]) return xB[BH];
+             return zh[21]
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5607-L5609` → after: `L5932-L5934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5932-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5932-L5934) · [Before (L5607-L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5607-L5609)

```diff
-           if (DU !== yA[3] && QX(DU, yA[21]), zU !== yA[3] && ZU(zU.emitReplaced) === yA[21] && QX("mk:em", yA[21]), RX && QX("3s", yA[15]), Ny.Y && QX("3b", yA[15]), BU(), GU && QX("3d", yA[15]), yU && QX("3g", yA[15]), FU === yA[3] || oU || QX(FU, yA[15]), pU !== yA[3] && QX(pU … [truncated]
-             const UU = ZU(zU[yA[73] + "mMeshHitStac" + yA[84]]);
-             typeof UU === yA[49] && (gU = function(UU, XU, zU) {
+           if (CH !== zh[21] && SB(CH, zh[31]), LH !== zh[21] && TH(LH.emitReplaced) === zh[31] && SB("mk:em", zh[31]), UB && SB("3s", zh[19]), Qr.W && SB("3b", zh[19]), PH(), vH && SB("3d", zh[19]), rH && SB("3g", zh[19]), tH === zh[21] || zH || SB(tH, zh[19]), uH !== zh[21] && S … [truncated]
+             const HH = TH(LH[zh[133] + "mMeshHitStac" + zh[142]]);
+             typeof HH === zh[79] && (MH = function(HH, BH, LH) {
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5612` → after: `L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5937) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5612)

```diff
-               return (0, CQ.m)(nQ(UU, cU < zU ? XU[cU] : null))
+               return (0, KS.j)(aS(HH, AH < LH ? BH[AH] : null))
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5616-L5617` → after: `L5941-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5941-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5941-L5942) · [Before (L5616-L5617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5616-L5617)

```diff
-           if (gU !== yA[3] && QX(gU, yA[15]), aU === yA[3] && lX[yA[43]] !== yA[3] && AA((NU = lX[yA[43]], aU = (0, CQ.k)(xQ(NU).reader)), tU = JQ(lX[yA[43]], ZU((() => lX[yA[29]] === yA[3] ? yA[3] : (yA[1], Ny.db)(lX[yA[29]]))))), aU !== yA[3] && QX(aU, yA[15]), tU !== yA[3] &&  … [truncated]
-           if (UU[yA[29]] === yA[3] && bU[yA[1]] && !(yA[1], CQ[yA[54]])(KU[yA[1]]))
+           if (MH !== zh[21] && SB(MH, zh[19]), QH === zh[21] && HL[zh[143]] !== zh[21] && Eh((GH = HL[zh[143]], QH = (0, KS.g)(iS(GH).reader)), WH = pS(HL[zh[143]], TH((() => HL[zh[8]] === zh[21] ? zh[21] : (zh[1], Qr.db)(HL[zh[8]]))))), QH !== zh[21] && SB(QH, zh[19]), WH !== zh … [truncated]
+           if (HH[zh[2]] === zh[21] && iH[zh[1]] && !(zh[1], KS[zh[111]])(JH[zh[1]]))
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5619` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5944) · [Before (L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5619)

```diff
-               if (bU[zU] && (yA[1], CQ[yA[54]])(KU[zU])) {
+               if (iH[LH] && (zh[1], KS[zh[111]])(JH[LH])) {
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5622` → after: `L5947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5947) · [Before (L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5622)

```diff
-                 AA(KU[yA[1]] = UU, bU[yA[1]] = yA[21]);
+                 Eh(JH[zh[1]] = HH, iH[zh[1]] = zh[31]);
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5624-L5626` → after: `L5949-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5949-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5949-L5951) · [Before (L5624-L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5624-L5626)

```diff
-               } if (AA(UU[yA[4]] = yA[1], UU[yA[85]] = UU[yA[29]] === yA[3] ? yA[1] : AU), UU[yA[85]] > yA[1] && FU !== yA[3] && oU && !yU) {
-             for (let XU = UU[yA[85]]; XU > yA[1]; XU--) AA(KU[XU] = KU[XU - yA[2]], bU[XU] = bU[XU - yA[2]]);
-             AA(KU[yA[1]] = FU, bU[yA[1]] = yA[15], UU[yA[4]] = yA[2], UU[yA[85]]++)
+               } if (Eh(HH[zh[15]] = zh[1], HH[zh[8]] = HH[zh[2]] === zh[21] ? zh[1] : hH), HH[zh[8]] > zh[1] && tH !== zh[21] && zH && !rH) {
+             for (let BH = HH[zh[8]]; BH > zh[1]; BH--) Eh(JH[BH] = JH[BH - zh[2]], iH[BH] = iH[BH - zh[2]]);
+             Eh(JH[zh[1]] = tH, iH[zh[1]] = zh[19], HH[zh[15]] = zh[2], HH[zh[8]]++)
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5628-L5635` → after: `L5953-L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5953-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5953-L5960) · [Before (L5628-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5628-L5635)

```diff
-           if (UU[yA[43]] = yA[1], hU++ % yA[4] === yA[2])
-             for (let zU = yA[2]; zU < TU; zU++) AX(zU) < AX(UU[yA[43]]) && (UU[yA[43]] = zU);
-           const IU = KU[UU[yA[43]]];
-           (bU[UU[yA[43]]] ? zX : XX)[IU] = UX++;
-           const kU = UU[yA[43]] >= UU[yA[4]] && UU[yA[43]] < UU[yA[85]];
-           if (!bU[UU[yA[43]]] || IU === UU[yA[29]] || UU[yA[43]] === yA[1] && !kU) return IU === yA[63] ? (yA[1], CQ.D)(WU[IX], CQ[yA[43]]) : IU;
-           const RU = (UU[yA[19]] = UU[yA[29]]) !== yA[3] && UU[yA[19]] !== void yA[1] ? UU[yA[19]] : KU[yA[1]];
-           return RU !== cX && AA(cX = RU, yX = (yA[1], Ny[yA[44]])(yA[3])), yX[IU] ??= (yA[1], CQ.x)(IU, RU)
+           if (HH[zh[144]] = zh[1], yH++ % zh[15] === zh[2])
+             for (let LH = zh[2]; LH < pH; LH++) hB(LH) < hB(HH[zh[144]]) && (HH[zh[144]] = LH);
+           const YH = JH[HH[zh[144]]];
+           (iH[HH[zh[144]]] ? LB : BB)[YH] = HB++;
+           const xH = HH[zh[144]] >= HH[zh[15]] && HH[zh[144]] < HH[zh[8]];
+           if (!iH[HH[zh[144]]] || YH === HH[zh[2]] || HH[zh[144]] === zh[1] && !xH) return YH === zh[127] ? (zh[1], KS.x)(OH[YB], KS[zh[8]]) : YH;
+           const UH = (HH[zh[3]] = HH[zh[2]]) !== zh[21] && HH[zh[3]] !== void zh[1] ? HH[zh[3]] : JH[zh[1]];
+           return UH !== AB && Eh(AB = UH, rB = (zh[1], Qr[zh[74]])(zh[21])), rB[YH] ??= (zh[1], KS[zh[22]])(YH, UH)
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5638-L5639` → after: `L5963-L5964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5963-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5963-L5964) · [Before (L5638-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5638-L5639)

```diff
-       let MX = Iz[yA[66]][yA[86]];
-       const vX = () => dX !== Iz[yA[66]][yA[86]] ? dX : MX;
+       let RB = UL[zh[129]][zh[145]];
+       const jB = () => bB !== UL[zh[129]][zh[145]] ? bB : RB;
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5641` → after: `L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5966) · [Before (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5641)

```diff
-         sX = yA[4],
+         FB = zh[15],
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5650-L5651` → after: `L5975-L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5975-L5976) · [Before (L5650-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5650-L5651)

```diff
-             if (typeof XU === yA[55] + yA[56] && !(UU[yA[1]] instanceof XU) && !(yA[1], Ny.G)(UU[yA[1]])) return dX = Iz[yA[66]].NotEvent, yA[1];
-             if (UU[yA[1]].isTrusted === yA[15]) return yA[1];
+             if (typeof BH === zh[112] + zh[113] && !(HH[zh[1]] instanceof BH) && !(zh[1], Qr.E)(HH[zh[1]])) return bB = UL[zh[129]].NotEvent, zh[1];
+             if (HH[zh[1]].isTrusted === zh[19]) return zh[1];
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5654` → after: `L5979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5979) · [Before (L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5654)

```diff
-             return zU < yA[46] ? (dX = Iz[yA[66]]["FewPropertie" + yA[67]], yA[1]) : eX()
+             return LH < zh[65] ? (bB = UL[zh[129]]["FewPropertie" + zh[22]], zh[1]) : mB()
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5667` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5992) · [Before (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5667)

```diff
-           AA(UU[yA[0]] = yA[4], UU[yA[4]] = yA[5]);
+           Eh(HH[zh[0]] = zh[15], HH[zh[15]] = zh[20]);
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5669` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5994) · [Before (L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5669)

```diff
-             UU[yA[4]] = UU[yA[2]]()
+             HH[zh[15]] = HH[zh[2]]()
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5671` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5996) · [Before (L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5671)

```diff
-           fX[iX++] = [UU[yA[1]], () => !XU || UU[yA[2]]() !== UU[yA[4]]]
+           eB[qB++] = [HH[zh[1]], () => !BH || HH[zh[2]]() !== HH[zh[15]]]
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5673` → after: `L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5998) · [Before (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5673)

```diff
-         LY: (...UU) => {
+         IX: (...HH) => {
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5677-L5682` → after: `L6002-L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6002-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6002-L6007) · [Before (L5677-L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5677-L5682)

```diff
-             if (AA(UU[yA[0]] = yA[2], UU[yA[19]] = yA[5], UU[yA[29]] = yA[5]), zU !== yA[3]) {
-               const XU = ZU(zU.CE),
-                 cU = "v3" === XU ? yA[6] : "v5" === XU ? yA[16] : "v6" === XU ? yA[17] : yA[4];
-               cU !== yA[4] && (sX = cU);
-               const yU = ZU(zU["inbuil" + yA[89] + yA[90]]);
-               typeof yU === yA[78] && yU >= yA[1] && yU <= yA[87] && (yU | yA[1]) === yU && (nX = yU), AA(UU[yA[19]] = ZU(zU.reflectApplyHit), UU[yA[29]] = ZU(zU.definerHit))
+             if (Eh(HH[zh[0]] = zh[2], HH[zh[146]] = zh[20], HH[zh[147]] = zh[20]), LH !== zh[21]) {
+               const BH = TH(LH.Mt),
+                 AH = "v3" === BH ? zh[13] : "v5" === BH ? zh[10] : "v6" === BH ? zh[32] : zh[15];
+               AH !== zh[15] && (FB = AH);
+               const rH = TH(LH["inbuil" + zh[151] + zh[152]]);
+               typeof rH === zh[138] && rH >= zh[1] && rH <= zh[40] && (rH | zh[1]) === rH && (DB = rH), Eh(HH[zh[146]] = TH(LH.reflectApplyHit), HH[zh[147]] = TH(LH.definerHit))
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5684` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6009) · [Before (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5684)

```diff
-             const XU = UU[yA[1]] ? 15 : "11" === UU[yA[29]] ? yA[87] : "13" === UU[yA[29]] ? 13 : UU[yA[19]] !== yA[5] && UU[yA[19]] !== yA[3] ? yA[4] : "10" === UU[yA[29]] ? yA[46] : "12" === UU[yA[29]] ? 12 : yA[1];
+             const BH = HH[zh[1]] ? zh[52] : "11" === HH[zh[147]] ? zh[40] : "13" === HH[zh[147]] ? zh[148] : HH[zh[146]] !== zh[20] && HH[zh[146]] !== zh[21] ? zh[15] : "10" === HH[zh[147]] ? zh[65] : "12" === HH[zh[147]] ? zh[58] : zh[1];
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5686-L5687` → after: `L6011-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6011-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6011-L6012) · [Before (L5686-L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5686-L5687)

```diff
-           })(XU), VX++ % 10 === yA[1] && (PX(), KQ((() => !jQ(yU[QU][yA[80]][yA[80]](), EU))) && (MX = MX === Iz[yA[66]][yA[88]] ? Iz[yA[66]][yA[88]] : Iz[yA[66]].Fr), KQ((() => !jQ(yU[QU][yA[80]](), EU))) && (MX = Iz[yA[66]][yA[88]])), {
-             flags: XU ? Iz[yA[43]].Butto : yA[1],
+           })(BH), nB++ % 10 === zh[1] && (VB(), Hh((() => !yS(rH[SH][zh[139]][zh[139]](), EH))) && (RB = RB === UL[zh[129]][zh[149]] ? UL[zh[129]][zh[149]] : UL[zh[129]].Fr), Hh((() => !yS(rH[SH][zh[139]](), EH))) && (RB = UL[zh[129]][zh[149]])), {
+             flags: BH ? UL[zh[16]].Butto : zh[1],
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5689-L5692` → after: `L6014-L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6014-L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6014-L6017) · [Before (L5689-L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5689-L5692)

```diff
-               [Iz[yA[81]].PhysicsVersion, sX],
-               [Iz[yA[81]]["Inbuil" + yA[89] + yA[90]], nX],
-               [Iz[yA[81]]["AltCom" + yA[91]], mX],
-               [Iz[yA[81]]["ProbeUsedPro" + yA[28]], vX()]
+               [UL[zh[150]].PhysicsVersion, FB],
+               [UL[zh[150]]["Inbuil" + zh[151] + zh[152]], DB],
+               [UL[zh[150]]["AltCom" + zh[153]], wB],
+               [UL[zh[150]]["ProbeUsedPro" + zh[154]], jB()]
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5700` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6025) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5700)

```diff
-       DA = ez.h,
+       Yh = gL.e,
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5819` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6144) · [Before (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5819)

```diff
-               yU = oz(cU > 0 ? XU / cU : XU > 0 ? oU.volume : 0),
+               rH = ML(AH > 0 ? BH / AH : BH > 0 ? zH.volume : 0),
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5849` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6174) · [Before (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5849)

```diff
-     }((0, xX.e)(), !0);
+     }((0, BL.d)(), !0);
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5896` → after: `L6221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6221) · [Before (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5896)

```diff
-           console.error(`${FA} a startup listener threw`, XU)
+           console.error(`${Xh} a startup listener threw`, BH)
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5976` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6301) · [Before (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5976)

```diff
-       console.warn(`${FA} chunk cancels from the server this session: ${UU}`)
+       console.warn(`${Xh} chunk cancels from the server this session: ${HH}`)
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5995` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6321) · [Before (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5995)

```diff
-           this.UY = UU, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.uD = !1
+           this.AX = HH, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.LX = !1
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6001` → after: `L6327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6327) · [Before (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6001)

```diff
-           (0, bX.c)(UU) && (this.lossPending = !1);
+           (0, SL.b)(HH) && (this.lossPending = !1);
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6003` → after: `L6329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6329) · [Before (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6003)

```diff
-           this.lastFrameMs = zU, this.lossPending && XU && (0, bX.j)(UU) ? (null === this.undrawnSinceMs || cU > 1e3) && (this.undrawnSinceMs = zU) : this.undrawnSinceMs = null, this.show(this.uD || null !== this.undrawnSinceMs && zU - this.undrawnSinceMs >= 2e3)
+           this.lastFrameMs = LH, this.lossPending && BH && (0, SL.e)(HH) ? (null === this.undrawnSinceMs || AH > 1e3) && (this.undrawnSinceMs = LH) : this.undrawnSinceMs = null, this.show(this.LX || null !== this.undrawnSinceMs && LH - this.undrawnSinceMs >= 2e3)
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6006` → after: `L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6332) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6006)

```diff
-           this.uD = UU, this.show(UU || this.shown)
+           this.LX = HH, this.show(HH || this.shown)
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6009` → after: `L6335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6335) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6009)

```diff
-           this.uD = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
+           this.LX = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6012` → after: `L6338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6338) · [Before (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6012)

```diff
-           UU !== this.shown && (this.shown = UU, this.UY(UU))
+           HH !== this.shown && (this.shown = HH, this.AX(HH))
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6015` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6341) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6015)

```diff
-         oU.k.UY(pU.d, UU)
+         zH.k.AX(uH.h, HH)
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6020` → after: `L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6346) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6020)

```diff
-           this.oY = UU, this.now = XU, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
+           this.XX = HH, this.now = BH, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6030` → after: `L6356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6356) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6030)

```diff
-           (0, bX.j)(UU) && XU && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
+           (0, SL.e)(HH) && BH && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6037` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6363) · [Before (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6037)

```diff
-           return null !== XU && UU - XU.atMs < 3e4 ? XU : null
+           return null !== BH && HH - BH.atMs < 3e4 ? BH : null
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6047` → after: `L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6373) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6047)

```diff
-               firstLostAtMs: null !== (XU = null === cU || void 0 === cU ? void 0 : cU.firstLostAtMs) && void 0 !== XU ? XU : UU.lostAtMs,
+               firstLostAtMs: null !== (BH = null === AH || void 0 === AH ? void 0 : AH.firstLostAtMs) && void 0 !== BH ? BH : HH.lostAtMs,
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6051` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6377) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6051)

```diff
-             this.oY(`webgl_restored_${yU}_${UU.delay}`, `WebGL2 context restored (${yU}, wasm)`)
+             this.XX(`webgl_restored_${rH}_${HH.delay}`, `WebGL2 context restored (${rH}, wasm)`)
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6059` → after: `L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6385) · [Before (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6059)

```diff
-               cU = null === zU ? UU.delay : (0, TX.m)(this.now() - zU.firstLostAtMs),
+               AH = null === LH ? HH.delay : (0, hL.j)(this.now() - LH.firstLostAtMs),
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6061` → after: `L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6387) · [Before (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6061)

```diff
-             this.oY(`webgl_rejoin_${yU}_${cU}`, "WebGL2 context not restored: rejoining (wasm)")
+             this.XX(`webgl_rejoin_${rH}_${AH}`, "WebGL2 context not restored: rejoining (wasm)")
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6069` → after: `L6395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6395) · [Before (L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6069)

```diff
-             delay: (0, TX.m)(this.now() - UU),
+             delay: (0, hL.j)(this.now() - HH),
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6077` → after: `L6403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6403) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6077)

```diff
-           this.deps = UU, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
+           this.deps = HH, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6108` → after: `L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6435) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6108)

```diff
-           if (null === this.firstLostAtMs && this.lost(), this.deps.probe()) return this.end("cleared_reload"), void UU();
+           if (null === this.firstLostAtMs && (BH ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void HH();
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6111` → after: `L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6438) · [Before (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6111)

```diff
-             zU = () => this.lastLostAtMs + jX.c + 5e3,
+             AH = () => this.lastLostAtMs + AL.b + 5e3,
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6147-L6148` → after: `L6474-L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6474-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6474-L6475) · [Before (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6147-L6148)

```diff
-             } = (0, hX.j)(UU, XU - zU);
-             this.deps.oY(cU, yU)
+             } = (0, tL.k)(HH, BH - LH);
+             this.deps.XX(AH, rH)
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6152` → after: `L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6479) · [Before (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6152)

```diff
-           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(hX.d)
+           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(tL.b)
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6155` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6482) · [Before (L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6155)

```diff
-           this.storage.setItem(hX.d, UU)
+           this.storage.setItem(tL.b, HH)
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6158-L6169` → after: `L6485-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6485-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6485-L6486) · [Before (L6158-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6158-L6169)

```diff
-         oY: Kz.reportRenderRecovery,
-         probe: () => function(UU) {
-           let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
-           try {
-             var zU;
-             const cU = XU(),
-               yU = UU ? cU.getContext("webgl") : cU.getContext("webgl2");
-             return null !== yU && (null === (zU = yU.getExtension("WEBGL_lose_context")) || void 0 === zU || zU.loseContext(), !0)
-           } catch {
-             return !1
-           }
-         }("rust_webgl1" === (0, xy.B)()),
+         XX: SA.reportRenderRecovery,
+         probe: () => CL("rust_webgl1" === (0, ir.H)()),
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6189` → after: `L6505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6505) · [Before (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6189)

```diff
-         renderer: Az.e[XU]
+         renderer: QL.b[BH]
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6194` → after: `L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6510) · [Before (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6194)

```diff
-       return uA ??= Promise.all([zU.e(215), zU.e(49), zU.e(168), zU.e(71)]).then((() => zU(53727))).then((UU => (rA = UU, Object.assign(globalThis, {
+       return Rh ??= Promise.all([LH.e(220), LH.e(170), LH.e(238), LH.e(49), LH.e(71)]).then((() => LH(54528))).then((HH => (Nh = HH, Object.assign(globalThis, {
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6202-L6203` → after: `L6518-L6519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6518-L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6518-L6519) · [Before (L6202-L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6202-L6203)

```diff
-       return SA ??= zU.e(69).then((() => zU(53743))).catch((UU => {
-         throw SA = null, new nU.b(UU)
+       return gh ??= LH.e(69).then((() => LH(54546))).catch((HH => {
+         throw gh = null, new DH.d(HH)
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6228-L6229` → after: `L6544-L6545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6544-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6544-L6545) · [Before (L6228-L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6228-L6229)

```diff
-       OA || (OA = !0, vy.i.setHost(new ho), (0, Uc.p)(), fy.d.setFollower(EE), Object.assign(globalThis, {
-         bloxdPreviews: vy.i
+       qh || (qh = !0, wr.j.setHost(new LC), (0, CA.h)(), jr.i.setFollower(XE), Object.assign(globalThis, {
+         bloxdPreviews: wr.j
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6242-L6259` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6558) · [Before (L6242-L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6242-L6259)

```diff
-       qA = !0, so = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), no = !so, console.info(`${FA} starting`), wA || (wA = !0, (0, pU.J)(new cz(BD, CD, Ko)), (0, NU.n)(new yz), (0, pU.H)(new Qz((() => performance.now() - RF))), (0, pU.z)()),  … [truncated]
-         let {
-           text: XU,
-           reload: zU
-         } = UU;
-         ! function(UU, XU) {
-           var zU, cU;
-           if (xo) return;
-           xo = !0, (0, zc.gb)(), null === (zU = Fo) || void 0 === zU || zU.abort(), Fo = null, iy.b.release();
-           const yU = so ? null !== (cU = UU.cancel) && void 0 !== cU ? cU : "general:back" : null;
-           Xy({
-             ...UU,
-             cancel: yU
-           }).then((UU => {
-             UU && XU && Jo ? ((0, SX.D)("reloadOntoJs"), (0, EX.j)(SX.L)) : UU && XU ? (0, EX.l)() : so && (0, EX.f)("/")
-           }))
- ... (2 more removed lines; see GitHub link above)
+       eh = !0, az = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), sz = !az, console.info(`${Xh} starting`), ch || (ch = !0, (0, uH.S)(new GL(VC, lC, yz)), (0, GH.l)(new YL), (0, uH.O)(new uL((() => performance.now() - kt))), (0, uH.G)()),  … [truncated]
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6262` → after: `L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6561) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6262)

```diff
-         XU = cA("yx721g5zt8", (() => {
+         BH = th("1mg46dsj19d", (() => {
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6264-L6265` → after: `L6563-L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6563-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6563-L6564) · [Before (L6264-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6264-L6265)

```diff
-           return null !== (UU = null === (XU = KA) || void 0 === XU ? void 0 : XU.ws) && void 0 !== UU ? UU : null
-         }), UU, "fuexskgmtl")
+           return null !== (HH = null === (BH = Ht) || void 0 === BH ? void 0 : BH.ws) && void 0 !== HH ? HH : null
+         }), HH, "oxctydzlin")
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6267` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6566) · [Before (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6267)

```diff
-         console.error(`${FA} probes`, yU)
+         console.error(`${Xh} probes`, rH)
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6270-L6271` → after: `L6569-L6570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6569-L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6569-L6570) · [Before (L6270-L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6270-L6271)

```diff
-         const UU = (0, Ey.o)(),
-           XU = (0, Ey.g)();
+         const HH = (0, Yr.n)(),
+           BH = (0, Yr.h)();
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6284` → after: `L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6583) · [Before (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6284)

```diff
-             lobby: null !== (XU = zU.get("lobby")) && void 0 !== XU ? XU : null
+             lobby: null !== (BH = LH.get("lobby")) && void 0 !== BH ? BH : null
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6293` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6592) · [Before (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6293)

```diff
-               await (0, nU.j)(UU), mF = rD(new WebSocket(XU)), null !== mF && iy.b.setGame(null), cD()
+               await (0, DH.j)(HH), Jt = gC(new WebSocket(BH)), null !== Jt && nr.d.setGame(null), hC()
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6295` → after: `L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6594) · [Before (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6295)

```diff
-               console.error(`${FA} ?ws=${XU} did not attach`, yU)
+               console.error(`${Xh} ?ws=${BH} did not attach`, rH)
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6302-L6304` → after: `L6601-L6603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6601-L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6601-L6603) · [Before (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6302-L6304)

```diff
-         const EU = (0, xy.V)();
-         let NU = await (0, xy.N)();
-         if (TD(NU, EU) && function() {
+         const EH = (0, ir._)();
+         let GH = await (0, ir.R)();
+         if (BE(GH) && function() {
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6306` → after: `L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6605) · [Before (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6306)

```diff
-             return !(0, rX.u)((0, rX.w)(), UE, UU, rX.c) && (0, rX.q)(UE, UU, rX.c)
+             return !(0, FB.s)((0, FB.v)(), AE, HH, FB.e) && (0, FB.p)(AE, HH, FB.e)
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6313` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6612) · [Before (L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6313)

```diff
-             console.warn(`${FA} ${XU}: waiting for a WebGL context`);
+             console.warn(`${Xh} ${BH}: waiting for a WebGL context`);
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6316` → after: `L6615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6615) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6316)

```diff
-                 sleep: (UU, XU) => (0, sX.e)(UU, XU).catch((() => {})),
+                 sleep: (HH, BH) => (0, iB.d)(HH, BH).catch((() => {})),
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6318-L6320` → after: `L6617-L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6617-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6617-L6619) · [Before (L6318-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6318-L6320)

```diff
-                   const UU = await (0, xy.X)();
-                   return TD(UU, !1) ? null : {
-                     DI: UU
+                   const HH = await (0, ir.cb)();
+                   return BE(HH) ? null : {
+                     XY: HH
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6324` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6623) · [Before (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6324)

```diff
-                   const XU = (0, Tc.o)();
+                   const BH = (0, VB.h)();
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6338` → after: `L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6637) · [Before (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6338)

```diff
-                 detail: `${XU}; ${UU}`,
+                 detail: `${BH}; ${HH}`,
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6345` → after: `L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6644) · [Before (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6345)

```diff
-               } : (QE() && ((0, SX.E)("noContext"), (0, SX.D)("decline")), (0, EX.f)("/"), null)
+               } : ((0, EB.c)("/"), null)
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6348` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6647) · [Before (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6348)

```diff
-               DI: AU
+               XY: hH
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6350` → after: `L6649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6649) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6350)

```diff
-             if (!(0, ez.r)(AU)) {
+             if (!(0, gL.k)(hH)) {
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6352` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6651) · [Before (L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6352)

```diff
-               const UU = null !== (FU = null === AU || void 0 === AU ? void 0 : AU.backend) && void 0 !== FU ? FU : "none";
+               const HH = null !== (tH = null === hH || void 0 === hH ? void 0 : hH.backend) && void 0 !== tH ? tH : "none";
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6363` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6662) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6363)

```diff
-               }), null !== AU && (0, xy.T)(AU.backend)
+               }), null !== hH && (0, ir.W)(hH.backend)
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6373` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6672) · [Before (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6373)

```diff
-             return (0, Kz.setCrashBackend)("unsupported"), KD("browser", "noContext", UU, {
+             return (0, SA.setCrashBackend)("unsupported"), yC("browser", EH ? "blockedAfterLoss" : "noContext", HH, {
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6378` → after: `L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6677) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6378)

```diff
-           NU = UU.DI
+           GH = HH.XY
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6381` → after: `L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6680) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6381)

```diff
-           const zU = (0, ez.r)(UU) ? XE(UU, XU) : null;
+           const LH = (0, gL.k)(HH) ? rE(HH, BH) : null;
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6383` → after: `L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6682) · [Before (L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6383)

```diff
-           console.warn(`${FA} ${zU.detail}: picking again in ${bD} ms`), await new Promise((UU => {
+           console.warn(`${Xh} ${LH.detail}: picking again in ${HE} ms`), await new Promise((HH => {
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6386-L6387` → after: `L6685-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6685-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6685-L6686) · [Before (L6386-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6386-L6387)

```diff
-           const cU = await (0, xy.X)();
-           if (!(0, ez.r)(cU)) {
+           const AH = await (0, ir.cb)();
+           if (!(0, gL.k)(AH)) {
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6391-L6392` → after: `L6690-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6690-L6691) · [Before (L6391-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6391-L6392)

```diff
-               backend: null !== (yU = null === cU || void 0 === cU ? void 0 : cU.backend) && void 0 !== yU ? yU : "none"
-             }), null !== cU && (0, xy.T)(cU.backend)
+               backend: null !== (rH = null === AH || void 0 === AH ? void 0 : AH.backend) && void 0 !== rH ? rH : "none"
+             }), null !== AH && (0, ir.W)(AH.backend)
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6396` → after: `L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6695) · [Before (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6396)

```diff
-         if ((0, Kz.setCrashBackend)((0, ez.r)(IU) ? "unsupported" : null !== (XU = null === IU || void 0 === IU ? void 0 : IU.backend) && void 0 !== XU ? XU : "none"), (0, ez.r)(IU)) return function(UU) {
+         if ((0, SA.setCrashBackend)((0, gL.k)(YH) ? "unsupported" : null !== (BH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== BH ? BH : "none"), (0, gL.k)(YH)) return function(HH) {
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6403` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6702) · [Before (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6403)

```diff
-           if (yU && (0, SX.o)()) return (0, Kz.reportNoBackendRetry)("reload", XU, zU, cU), void cE(`${zU}, again after ${bD} ms`);
+           if (rH && (0, nB.v)()) return (0, SA.reportNoBackendRetry)("reload", BH, LH, AH), void hE(`${LH}, again after ${HE} ms`);
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6406` → after: `L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6705) · [Before (L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6406)

```diff
-             afterReload: String(SX.z)
+             afterReload: String(nB.E)
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6409` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6708) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6409)

```diff
-         if ((0, pQ.q)("render")) try {
+         if ((0, xS.o)("render")) try {
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6412` → after: `L6711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6711) · [Before (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6412)

```diff
-           } = await Promise.all([zU.e(89), zU.e(56)]).then((() => zU(5164)));
+           } = await Promise.all([LH.e(89), LH.e(56)]).then((() => LH(5137)));
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6417` → after: `L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6716) · [Before (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6417)

```diff
-         if ((0, pQ.q)("renderlite")) try {
+         if ((0, xS.o)("renderlite")) try {
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6420` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6719) · [Before (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6420)

```diff
-           } = await Promise.all([zU.e(294), zU.e(57)]).then((() => zU(53755)));
+           } = await Promise.all([LH.e(300), LH.e(57)]).then((() => LH(54558)));
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6425` → after: `L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6724) · [Before (L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6425)

```diff
-         if ((0, pQ.q)("renderprobe")) try {
+         if ((0, xS.o)("renderprobe")) try {
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6428` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6727) · [Before (L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6428)

```diff
-           } = await zU.e(58).then((() => zU(53764)));
+           } = await LH.e(58).then((() => LH(54562)));
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6433` → after: `L6732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6732) · [Before (L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6433)

```diff
-         if ("webgl" === (null === IU || void 0 === IU ? void 0 : IU.backend) && so && "wasm" !== (0, SX.g)(window.location.search)) {
+         if ("webgl" === (null === YH || void 0 === YH ? void 0 : YH.backend) && az && "address" !== nB.A.reason) {
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6437-L6442` → after: `L6736-L6741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6736-L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6736-L6741) · [Before (L6437-L6442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6437-L6442)

```diff
-         const pU = null !== (cU = null === IU || void 0 === IU ? void 0 : IU.backend) && void 0 !== cU ? cU : null;
-         po.adapter = null !== (QU = null === IU || void 0 === IU ? void 0 : IU.adapter) && void 0 !== QU ? QU : null, po.boundAtMs = null, po.indirectHangs = null, po.restoresSkipped = null;
-         const aU = !(0, ez.nb)();
-         null === IU || (0, ez.I)(IU.reason) || console.info(`${FA} drawing with ${IU.backend}: ${IU.reason}`);
-         const tU = (0, xy.x)();
-         eU("previews"), xA(!0), (0, nU.s)((UU => {
+         const uH = null !== (AH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== AH ? AH : null;
+         vz.adapter = null !== (SH = null === YH || void 0 === YH ? void 0 : YH.adapter) && void 0 !== SH ? SH : null, vz.boundAtMs = null, vz.indirectHangs = null, vz.restoresSkipped = null;
+         const QH = !(0, gL.Y)();
+         null === YH || (0, gL.C)(YH.reason) || console.info(`${Xh} drawing with ${YH.backend}: ${YH.reason}`);
+         const WH = (0, ir.D)();
+         mH("previews"), ih(!0), (0, DH.v)((HH => {
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6446` → after: `L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6745) · [Before (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6446)

```diff
-               to = UU.rasterText, xF = UU.setTextLocalPlayer, UU.setTextLocalPlayer(null !== (XU = null === (zU = lF) || void 0 === zU ? void 0 : zU.info.playerDbId) && void 0 !== XU ? XU : null), go = UU.drainTextRerasters, ko = UU.loadTextIcons, UU.warmText((() => wo)), UU.text … [truncated]
+               Tz = HH.rasterText, pt = HH.setTextLocalPlayer, HH.setTextLocalPlayer(null !== (BH = null === (LH = it) || void 0 === LH ? void 0 : LH.info.playerDbId) && void 0 !== BH ? BH : null), Uz = HH.drainTextRerasters, Vz = HH.loadTextIcons, HH.warmText((() => cz)), HH.text … [truncated]
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6456-L6457` → after: `L6755-L6756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6755-L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6755-L6756) · [Before (L6456-L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6456-L6457)

```diff
-         })), (0, nU.l)(vA).catch((UU => {
-           console.warn(`${FA} the game code did not load: a join asks again`, UU)
+         })), (0, DH.m)(wh).catch((HH => {
+           console.warn(`${Xh} the game code did not load: a join asks again`, HH)
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6461` → after: `L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6760) · [Before (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6461)

```diff
-         gU.catch((() => {})), "loading" === (0, dX.A)() && (wU(), eU("load"));
+         MH.catch((() => {})), "loading" === (0, cB.B)() && (IH(), mH("load"));
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6464` → after: `L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6763) · [Before (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6464)

```diff
-             const XU = null !== UU && void 0 !== UU ? UU : document.createElement("canvas");
+             const BH = null !== HH && void 0 !== HH ? HH : document.createElement("canvas");
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6474` → after: `L6773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6773) · [Before (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6474)

```diff
-                     null === (UU = Lo) || void 0 === UU || UU.glContextLost(XU, zU, null !== (cU = null !== (yU = !1 === (null === (QU = fA) || void 0 === QU ? void 0 : QU.isStopped) ? fA.addDistanceInUse() : null) && void 0 !== yU ? yU : null === (AU = xE()) || void 0 === AU ? v … [truncated]
+                     null === (HH = fz) || void 0 === HH || HH.glContextLost(BH, LH, null !== (AH = null !== (rH = !1 === (null === (SH = jh) || void 0 === SH ? void 0 : SH.isStopped) ? jh.addDistanceInUse() : null) && void 0 !== rH ? rH : null === (hH = sE()) || void 0 === hH ? v … [truncated]
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6477` → after: `L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6776) · [Before (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6477)

```diff
-               }(XU), (0, cQ.l)();
+               }(BH), (0, tS.j)();
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6479-L6480` → after: `L6778-L6779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6778-L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6778-L6779) · [Before (L6479-L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6479-L6480)

```diff
-               cU = (0, zz.e)(zU);
-             XU.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, zQ.c)(XU, cU), (0, zz.b)(XU, zU), XU.width = cU.bufferWidth, XU.height = cU.bufferHeight;
+               AH = (0, XL.f)(LH);
+             BH.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, hS.f)(BH, AH), (0, XL.c)(BH, LH), BH.width = AH.bufferWidth, BH.height = AH.bufferHeight;
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6489` → after: `L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6788) · [Before (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6489)

```diff
-             (0, Kz.showUnsupported)((0, Tc.u)("fetch"), RQ.c.fetch, `the previews did not load: ${String(yU)}`)
+             (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the previews did not load: ${String(rH)}`)
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6492` → after: `L6791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6791) · [Before (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6492)

```diff
-         wU(), eU("loading" === (0, dX.A)() ? "load" : "build");
+         IH(), mH("loading" === (0, cB.B)() ? "load" : "build");
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6500` → after: `L6799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6799) · [Before (L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6500)

```diff
-             (0, Kz.showUnsupported)((0, Tc.u)("fetch"), RQ.c.fetch, `the ${null!==pU&&void 0!==pU?pU:"client"} build did not load: ${String(yU)}`)
+             (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the ${null!==uH&&void 0!==uH?uH:"client"} build did not load: ${String(rH)}`)
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6503-L6506` → after: `L6802-L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6802-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6802-L6805) · [Before (L6503-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6503-L6506)

```diff
-         const ZU = (0, xy.f)(),
-           RU = !ZU && !0 !== Uz.n.getItem(oA),
-           PU = !ZU && "loading" === (0, dX.A)();
-         eU("load"), await (0, Jy.e)(GU, {
+         const TH = (0, ir.h)(),
+           UH = !TH && !0 !== zL.f.getItem(Gh),
+           VH = !TH && "loading" === (0, cB.B)();
+         mH("load"), await (0, pr.d)(vH, {
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6508` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6807) · [Before (L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6508)

```diff
-         }), PU && !(0, dX.T)() && await (0, Jy.e)(GU, {
+         }), VH && !(0, cB.U)() && await (0, pr.d)(vH, {
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6513-L6516` → after: `L6812-L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6812-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6812-L6815) · [Before (L6513-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6513-L6516)

```diff
-         const LU = (0, dX.r)();
-         if (!(0, dX.T)() && ("compile" === LU || "instantiate" === LU) && (0, dX.N)()) {
-           const UU = (0, dX.j)();
-           console.warn(`${FA} the wasm client did not ${LU} here (${UU}): loading it again`);
+         const kH = (0, cB.q)();
+         if (!(0, cB.U)() && ("compile" === kH || "instantiate" === kH) && (0, cB.P)()) {
+           const HH = (0, cB.k)();
+           console.warn(`${Xh} the wasm client did not ${kH} here (${HH}): loading it again`);
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6523` → after: `L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6822) · [Before (L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6523)

```diff
-               if (UU.outOfMemory() && (zU = !0, "js" === UU.stepDownMemory())) return {
+               if (HH.outOfMemory() && (LH = !0, "spent" === HH.stepDownMemory())) return {
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6527` → after: `L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6826) · [Before (L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6527)

```diff
-                 toJs: !0
+                 spent: !0
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6533` → after: `L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6832) · [Before (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6533)

```diff
-                 toJs: !1
+                 spent: !1
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6540` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6839) · [Before (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6540)

```diff
-               toJs: !1
+               spent: !1
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6543-L6547` → after: `L6842-L6846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6842-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6842-L6846) · [Before (L6543-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6543-L6547)

```diff
-             sleep: UU => (0, sX.e)(UU),
-             outOfMemory: () => (0, tz.c)((0, dX.o)()),
-             retryable: dX.N,
-             stepDownMemory: () => "instantiate" !== (0, dX.r)() || !yE() || (0, lz.n)() ? "none" : "halve" === (0, lz.l)() ? "halved" : "js",
-             retry: Jy.i
+             sleep: HH => (0, iB.d)(HH),
+             outOfMemory: () => (0, bL.c)((0, cB.p)()),
+             retryable: cB.P,
+             stepDownMemory: () => "instantiate" !== (0, cB.q)() || !tE() || (0, BA.p)() ? "none" : "halve" === (0, BA.o)() ? "halved" : "spent",
+             retry: pr.h
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6549` → after: `L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6848) · [Before (L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6549)

```diff
-           WU = XU.outOfMemory, dU = XU.toJs;
+           OH = BH.outOfMemory, bH = BH.spent;
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6553` → after: `L6852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6852) · [Before (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6553)

```diff
-           } = XU, yU = cU ? UU : (0, dX.j)();
+           } = BH, rH = AH ? HH : (0, cB.k)();
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6565-L6570` → after: `L6864-L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6864-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6864-L6869) · [Before (L6565-L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6565-L6570)

```diff
-         if (!(0, dX.T)()) {
-           (0, dX.Q)() && "compile" !== LU && "instantiate" !== LU && Uz.n.setItem(oA, !0);
-           const UU = (0, dX.r)();
-           if (qU("instantiate" === UU || null === UU ? `instantiate_${CU((0,dX.o)())}` : UU), "call" === UU) nE({
-             site: wz.w,
-             error: (0, dX.o)(),
+         if (!(0, cB.U)()) {
+           (0, cB.S)() && "compile" !== kH && "instantiate" !== kH && zL.f.setItem(Gh, !0);
+           const HH = (0, cB.q)();
+           if (fH("instantiate" === HH || null === HH ? `instantiate_${oH((0,cB.p)())}` : HH), "call" === HH) wE({
+             site: RL.u,
+             error: (0, cB.p)(),
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6574` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6873) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6574)

```diff
-             const XU = null !== UU && void 0 !== UU ? UU : "instantiate",
+             const BH = null !== HH && void 0 !== HH ? HH : "instantiate",
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6576` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6875) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6576)

```diff
-                 (0, Kz.showUnsupported)((0, Tc.u)(XU), RQ.c[XU], (0, dX.j)())
+                 (0, SA.showUnsupported)((0, VB.o)(BH), kS.i[BH], (0, cB.k)())
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6578-L6593` → after: `L6877-L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6877-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6877-L6893) · [Before (L6578-L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6578-L6593)

```diff
-               cU = "compile" === LU || "instantiate" === LU ? LU : UU;
-             if ("compile" !== cU && "instantiate" !== cU || !QE())
-               if ("fetch" === XU) {
-                 const UU = [GU.url().href, qX.g.url().href];
-                 await AY({
-                   site: NA,
-                   error: (0, dX.j)(),
-                   urls: UU
-                 }, zU)
-               } else zU();
-             else {
-               const UU = (0, dX.j)(),
-                 XU = WU || (0, tz.c)((0, dX.o)());
-               if (XU && !dU && "js" !== (0, lz.l)(Date.now(), !0)) return (0, Kz.reportCountedLoadFallback)((0, Tc.u)(cU), RQ.c[cU], UU, "wasmReload"), cE(`the wasm client ran out of memory to ${cU} here (${UU})`), null;
-               (0, Kz.reportCountedLoadFallback)((0, Tc.u)(cU), RQ.c[cU], UU, XU ? "declined" : "pageAlone"), AE(`the wasm client did not ${cU} here (${UU})`, XU ? "oom" : null)
-             }
+               AH = "compile" === kH || "instantiate" === kH ? kH : HH;
+             if ("compile" === AH || "instantiate" === AH) {
+               const HH = OH || (0, bL.c)((0, cB.p)());
+               if (az && (HH && tE() ? !bH && "spent" !== (0, BA.o)(Date.now(), !0) : (0, nB.v)())) {
+                 const BH = (0, cB.k)();
+                 return (0, SA.reportLoadReload)((0, VB.o)(AH), kS.i[AH], BH), hE(`the wasm client ${HH?"ran out of memory to":"did not"} ${AH} here (${BH})`), null
+               }(0, SA.showUnsupported)(HH ? "memory" : (0, VB.o)(AH), kS.i[AH], (0, cB.k)())
+             } else if ("fetch" === BH) {
+               const HH = [vH.url().href, RB.e.url().href];
+               await zX({
+                 site: Wh,
+                 error: (0, cB.k)(),
+                 urls: HH
+               }, (() => {
+                 LH()
+               }))
+ ... (1 more added lines; see GitHub link above)
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6596-L6597` → after: `L6896-L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6896-L6897) · [Before (L6596-L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6596-L6597)

```diff
-         }(0, eX._)(GU.url()) && (0, Kz.reportUnstreamedCoreLoad)();
-         const SU = (0, dX.E)();
+         }(0, qB.S)(vH.url()) && (0, SA.reportUnstreamedCoreLoad)();
+         const KH = (0, cB.D)();
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6603` → after: `L6903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6903) · [Before (L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6603)

```diff
-             wasm: SU.sY()
+             wasm: KH.wX()
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6606-L6607` → after: `L6906-L6907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6906-L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6906-L6907) · [Before (L6606-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6606-L6607)

```diff
-             lt: UU
-           } = GU.bindings, XU = UU.KcU();
+             RW: HH
+           } = vH.bindings, BH = HH.XrH();
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6609-L6610` → after: `L6909-L6910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6909-L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6909-L6910) · [Before (L6609-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6609-L6610)

```diff
-             site: wz.d,
-             error: `core ABI ${XU}, page ABI ${Iz.y}`,
+             site: RL.e,
+             error: `core ABI ${BH}, page ABI ${UL.y}`,
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6613` → after: `L6913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6913) · [Before (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6613)

```diff
-           const [zU, cU] = (0, Iz.ze)();
+           const [LH, AH] = (0, UL.qe)();
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6616-L6617` → after: `L6916-L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6916-L6917) · [Before (L6616-L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6616-L6617)

```diff
-           return qU(`core_${CU(yU)}`), nE({
-             site: wz.d,
+           return fH(`core_${oH(rH)}`), wE({
+             site: RL.e,
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6623` → after: `L6923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6923) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6623)

```diff
-         const fU = new wz.h(rU, dX.x, {
+         const qH = new RL.h(cH, cB.u, {
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6628` → after: `L6928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6928) · [Before (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6628)

```diff
-                 if ("webgpu" !== XU || (0, xy.c)()) return !1;
+                 if ("webgpu" !== BH || (0, ir.e)()) return !1;
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6630-L6631` → after: `L6930-L6931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6930-L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6930-L6931) · [Before (L6630-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6630-L6631)

```diff
-                   if (UU.site === wz.e && (0, ez.t)(UU.error)) return "frames_refused";
-                   return UU.site === DA && (0, ez.x)(UU.error) ? "start_failed" : null
+                   if (HH.site === RL.g && (0, gL.n)(HH.error)) return "frames_refused";
+                   return HH.site === Yh && (0, gL.p)(HH.error) ? "start_failed" : null
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6634-L6635` → after: `L6934-L6935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6934-L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6934-L6935) · [Before (L6634-L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6634-L6635)

```diff
-                 if (null !== (0, ez.lb)(yU, cU, (0, Cz.c)(UU.error))) return (0, Kz.countRenderLost)(yU, UU.error, po), !1;
-                 return jX.J.reloaded(null, !1), (0, Kz.reportRenderReload)("webgpu", "start_failed" === yU ? 0 : 1, zU, {
+                 if (null !== (0, gL.X)(rH, AH, (0, NL.c)(HH.error))) return (0, SA.countRenderLost)(rH, HH.error, vz), !1;
+                 return AL.D.reloaded(null, !1), (0, SA.reportRenderReload)("webgpu", "start_failed" === rH ? 0 : 1, LH, {
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6652-L6653` → after: `L6952-L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6952-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6952-L6953) · [Before (L6652-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6652-L6653)

```diff
-               return XU === Iz.K.RenderDeviceLost
-             })) && ((0, xy.u)(), Mo.deviceLost(), "webgpu" === pU && ((0, Cz.f)(ao), jX.J.lost())), null === (zU = Lo) || void 0 === zU || zU.coreErrors(UU);
+               return BH === UL.F.RenderDeviceLost
+             })) && ((0, ir.w)(), wz.deviceLost(), "webgpu" === uH && ((0, NL.d)(Pz), AL.D.lost())), null === (LH = fz) || void 0 === LH || LH.coreErrors(HH);
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6657` → after: `L6957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6957) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6657)

```diff
-                 return UU === Iz.K.EnvUnknownSky ? (0, Kz.unknownSkyWords)(fX.d.get("skyBox")) : UU === Iz.K.RenderDeviceLost ? (0, Kz.deviceLossWords)(XU, po.boundAtMs) : null === (zU = ao) || void 0 === zU ? void 0 : zU.bcU(UU, XU)
+                 return HH === UL.F.EnvUnknownSky ? (0, SA.unknownSkyWords)(wB.e.get("skyBox")) : HH === UL.F.RenderDeviceLost ? (0, SA.deviceLossWords)(BH, vz.boundAtMs) : null === (LH = Pz) || void 0 === LH ? void 0 : LH.GrH(HH, BH)
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6664` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6964) · [Before (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6664)

```diff
-               return XU === Iz.K.EnvUnknownSky
+               return BH === UL.F.EnvUnknownSky
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6670-L6675` → after: `L6970-L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6970-L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6970-L6975) · [Before (L6670-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6670-L6675)

```diff
-               if ((0, xy.c)()) return;
-               const FU = XU === Iz.Yc.WEBGPU,
-                 oU = cU === Iz.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 DU = cU === Iz.Yc.RESTORE_LOST,
-                 EU = FU && (0, jX.o)(po.adapter, zU, "lost" === oU, DU),
-                 NU = (0, Cz.j)(ao);
+               if ((0, ir.e)()) return;
+               const tH = BH === UL.Vc.WEBGPU,
+                 zH = AH === UL.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 CH = AH === UL.Vc.RESTORE_LOST,
+                 EH = tH && (0, AL.q)(vz.adapter, LH, "lost" === zH, CH),
+                 GH = (0, NL.i)(Pz);
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6677` → after: `L6977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6977) · [Before (L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6677)

```diff
-               const IU = FU ? (0, ez.lb)(oU, yU, NU) : null;
+               const YH = tH ? (0, gL.X)(zH, rH, GH) : null;
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6680-L6681` → after: `L6980-L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6980-L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6980-L6981) · [Before (L6680-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6680-L6681)

```diff
-                 const XU = void 0 === NU ? "" : ` (${NU.message})`;
-                 return void UU.crash(Kz.RENDER_RELOAD_SITE, new Error(`${(0,Kz.renderReloadMessage)("webgpu",oU,zU)} and ${IU}${XU}`))
+                 const BH = void 0 === GH ? "" : ` (${GH.message})`;
+                 return void HH.crash(SA.RENDER_RELOAD_SITE, new Error(`${(0,SA.renderReloadMessage)("webgpu",zH,LH)} and ${YH}${BH}`))
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6684-L6686` → after: `L6984-L6992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6984-L6992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6984-L6992) · [Before (L6684-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6684-L6686)

```diff
-               "lost" === oU && (0, xy.u)();
-               FU || ((0, SX.y)(), vo.gaveUp());
-               (0, Kz.reportRenderReload)(pU, zU, VA, {
+               "lost" === zH && (0, ir.w)();
+               if (!tH) {
+                 if (Zz.gaveUp(), !(0, nB.v)()) {
+                   (0, SA.countRenderLost)(zH, GH, vz);
+                   const BH = void 0 === GH ? "" : ` (${GH.message})`;
+                   return void HH.crash(SA.RENDER_RELOAD_SITE, new SA.GraphicsLostError(`${(0,SA.renderReloadMessage)(uH,zH,LH)} and ${nB.f}${BH}`))
+                 }
+                 console.warn(`${Xh} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
+               }(0, SA.reportRenderReload)(uH, LH, Zh, {
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6694` → after: `L7000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7000) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6694)

```diff
-               }), (0, xy.n)();
+               }), (0, ir.q)();
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6698` → after: `L7004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7004) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6698)

```diff
-                 tU || (tU = !0, FU ? dE() : Vo.reload(dE))
+                 WH || (WH = !0, tH && "lost" !== zH ? kE() : dz.reload(kE, tH))
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6701` → after: `L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7007) · [Before (L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6701)

```diff
-               const GU = (0, YU.q)((() => {
+               const vH = (0, XH.o)((() => {
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6711` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7017) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6711)

```diff
-             UU.kind === Iz.W.SkyImages ? null === (XU = YF) || void 0 === XU || XU.onEvent(UU.payload) : UU.kind === Iz.W.EnvLighting && (NF = 1 === UU.payload[0])
+             HH.kind === UL.X.SkyImages ? null === (BH = Qt) || void 0 === BH || BH.onEvent(HH.payload) : HH.kind === UL.X.EnvLighting && (Wt = 1 === HH.payload[0])
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6733` → after: `L7039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7039) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6733)

```diff
-                   !1 !== XU || UU.isStopped ? !0 === XU && console.info(`${FA} terrain textures handed over again after the renderer lost them`) : console.warn(`${FA} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== BH || HH.isStopped ? !0 === BH && console.info(`${Xh} terrain textures handed over again after the renderer lost them`) : console.warn(`${Xh} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6745` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7051) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6745)

```diff
-               if (UU.forEachNetOut(ME), uE(UU), (0, wz.N)(UU, {
+               if (HH.forEachNetOut(jE), qE(HH), (0, RL.M)(HH, {
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6756-L6757` → after: `L7062-L7063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7062-L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7062-L7063) · [Before (L6756-L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6756-L6757)

```diff
-         if (fA = fU, null === (AU = Xz.d.wasmNetReady) || void 0 === AU || AU.call(Xz.d, (() => fU.isStopped ? 0 : fU.netKeptFrames)), null !== UU) {
-           fU.setAntiCheatProbes(hQ(dX.x, UU.checks)), UU.watchHeld(XA.CoreFrame, (() => fU.frame)), UU.watchHeld(XA.GlueFrame, (() => rU.frame));
+         if (jh = qH, null === (hH = EL.e.wasmNetReady) || void 0 === hH || hH.call(EL.e, (() => qH.isStopped ? 0 : qH.netKeptFrames)), null !== HH) {
+           qH.setAntiCheatProbes(Ah(cB.u, HH.checks)), HH.watchHeld(Sh.CoreFrame, (() => qH.frame)), HH.watchHeld(Sh.GlueFrame, (() => cH.frame));
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6761` → after: `L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7067) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6761)

```diff
-             zU.LY(UU.LY());
+             LH.IX(HH.IX());
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6763` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7069) · [Before (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6763)

```diff
-               zU.LY(UU.LY())
+               LH.IX(HH.IX())
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6765` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7071) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6765)

```diff
-             let QU = 6 * (0, Ny.U)() | 0;
+             let SH = 6 * (0, Qr.N)() | 0;
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6769` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7075) · [Before (L6769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6769)

```diff
-             (0, OQ.k)(AU);
+             (0, qS.f)(hH);
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6774` → after: `L7080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7080) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6774)

```diff
-             return (0, qQ.f)(FU), {
+             return (0, eS.g)(tH), {
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6781` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7087) · [Before (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6781)

```diff
-                 zU.value(Iz.g.ProbeUsedProp, UU.usedProp()), 0 !== cU && zU.setFlags(cU)
+                 LH.value(UL.h.ProbeUsedProp, HH.usedProp()), 0 !== AH && LH.setFlags(AH)
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6784` → after: `L7090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7090) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6784)

```diff
-                 (0, Ny.ab)(yU), (0, OQ.i)(AU), (0, qQ.d)(FU)
+                 (0, Qr.$)(rH), (0, qS.c)(hH), (0, eS.d)(tH)
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6795` → after: `L7101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7101) · [Before (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6795)

```diff
-         eA = (UU, XU, zU) => fU.rings.cmd.writeCmd(UU, XU, zU), CA = UU => fU.rings.cmd.growForCmd(UU), OF = !1, oE(), (0, nU.u)(fU, {
+         lh = (HH, BH, LH) => qH.rings.cmd.writeCmd(HH, BH, LH), Kh = HH => qH.rings.cmd.growForCmd(HH), qt = !1, CE(), (0, DH.x)(qH, {
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6797` → after: `L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7103) · [Before (L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6797)

```diff
-           memory: dX.x,
+           memory: cB.u,
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6806` → after: `L7115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7115) · [Before (L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6806)

```diff
-           options: fX.d,
+           options: wB.e,
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6819` → after: `L7128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7128) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6819)

```diff
-             return null !== (null !== (XU = null === (zU = DE()) || void 0 === zU ? void 0 : zU.modelUrl(UU)) && void 0 !== XU ? XU : null)
+             return null !== (null !== (BH = null === (LH = EE()) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null)
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6823` → after: `L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7132) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6823)

```diff
-         }), (0, sU.D)({
+         }), (0, FH.J)({
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6834` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7143) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6834)

```diff
-             (0, Ec.c)()
+             (0, UB.e)()
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6840` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7149) · [Before (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6840)

```diff
-         }), FF = (0, sU.t)((() => {
+         }), Xt = (0, FH.v)((() => {
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6842-L6843` → after: `L7151-L7152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7151-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7151-L7152) · [Before (L6842-L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6842-L6843)

```diff
-           const XU = (0, nU.f)();
-           null === (UU = (0, nU.o)()) || void 0 === UU || UU.followCursorAim(!0 === (null === XU || void 0 === XU ? void 0 : XU.isSessionLive) ? XU : null)
+           const BH = (0, DH.i)();
+           null === (HH = (0, DH.r)()) || void 0 === HH || HH.followCursorAim(!0 === (null === BH || void 0 === BH ? void 0 : BH.isSessionLive) ? BH : null)
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6849` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7158) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6849)

```diff
-         const HU = (0, lz.j)(),
+         const NH = (0, BA.g)(),
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6851-L6852` → after: `L7160-L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7160-L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7160-L7161) · [Before (L6851-L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6851-L6852)

```diff
-         yF = HU.basis, (0, Fc.l)((0, Xc.d)(null === MU ? null : (0, mz.s)(MU), (0, Xc.g)())), cF = MU;
-         const vU = (0, CX.e)();
+         zt = NH.basis, (0, WA.i)((0, EA.d)(null === RH ? null : (0, HA.n)(RH), (0, EA.k)())), tt = RH;
+         const jH = (0, gB.c)();
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6856-L6857` → after: `L7165-L7166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7165-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7165-L7166) · [Before (L6856-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6856-L6857)

```diff
-         const xU = new Wy.d(vU, (() => rU.Ag()), (UU => {
-           fU.crash(wz.o, UU)
+         const dH = new mr.b(jH, (() => cH.HM()), (HH => {
+           qH.crash(RL.n, HH)
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6859` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7168) · [Before (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6859)

```diff
-         XF = xU, zF = xU, null !== MU && xU.setCeiling(Math.min((0, Wy.r)(MU), VU, (0, lz.k)()));
+         St = dH, ht = dH, null !== RH && dH.setCeiling(Math.min((0, mr.o)(RH), nH, (0, BA.k)()));
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6863` → after: `L7172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7172) · [Before (L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6863)

```diff
-             return null !== XU && (null === cF || XU < cF) && (cF = XU, (0, Fc.l)((0, Xc.d)((0, mz.s)(XU), (0, Xc.g)()))), XU
+             return null !== BH && (null === tt || BH < tt) && (tt = BH, (0, WA.i)((0, EA.d)((0, HA.n)(BH), (0, EA.k)()))), BH
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6865` → after: `L7174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7174) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6865)

```diff
-             1 === XU ? (0, Kz.reportMemoryShed)(UU, zU, VA) : console.warn(`${FA} wasm memory: shed again (${UU}): shed ${XU}`, zU.wasmMemoryShed)
+             1 === BH ? (0, SA.reportMemoryShed)(HH, LH, Zh) : console.warn(`${Xh} wasm memory: shed again (${HH}): shed ${BH}`, LH.wasmMemoryShed)
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6867` → after: `L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7176) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6867)

```diff
-           const UU = (0, ez.Y)(SU);
+           const HH = (0, gL.M)(KH);
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6869` → after: `L7178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7178) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6869)

```diff
-             storedChunks: () => rU.TcU(),
+             storedChunks: () => cH.YrH(),
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6872` → after: `L7181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7181) · [Before (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6872)

```diff
-               return null !== (XU = null === UU || void 0 === UU ? void 0 : UU.hcU()) && void 0 !== XU ? XU : 0
+               return null !== (BH = null === HH || void 0 === HH ? void 0 : HH.urH()) && void 0 !== BH ? BH : 0
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6882-L6884` → after: `L7191-L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7191-L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7191-L7193) · [Before (L6882-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6882-L6884)

```diff
-         const [JU, jU] = (0, hz.d)();
-         Co = (0, Xc.k)((UU => {
-           const XU = (0, Xc.o)(UU, (0, Xc.g)());
+         const [aH, sH] = (0, zA.g)();
+         Kz = (0, EA.o)((HH => {
+           const BH = (0, EA.u)(HH, (0, EA.k)());
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6889-L6892` → after: `L7198-L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7198-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7198-L7201) · [Before (L6889-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6889-L6892)

```diff
-         }), fU.setAmbientOcclusion(!0 !== Uz.k.getItem("disableAmbientOcclusion")), fU.setPoseLod(!0 !== Uz.k.getItem(WX.R)), fU.setDebugLog(Iz.P.Look, !0), fU.setDebugLog(Iz.P.CameraSet, !0), (0, tQ.startLookDebug)("wasm", {
-           look: () => fU.takeDebugLog(Iz.P.Look),
-           cameraSets: () => fU.takeDebugLog(Iz.P.CameraSet)
-         }), (0, pQ.q)("remesh") && (fU.setDebugLog(Iz.P.Remesh, !0), KU = () => fU.takeDebugLog(Iz.P.Remesh), ZQ = new BQ((0, gQ.n)(), KU));
+         }), qH.setAmbientOcclusion(!0 !== zL.e.getItem("disableAmbientOcclusion")), qH.setPoseLod(!0 !== zL.e.getItem(KB.W)), qH.setDebugLog(UL.N.Look, !0), qH.setDebugLog(UL.N.CameraSet, !0), (0, PS.startLookDebug)("wasm", {
+           look: () => qH.takeDebugLog(UL.N.Look),
+           cameraSets: () => qH.takeDebugLog(UL.N.CameraSet)
+         }), (0, xS.o)("remesh") && (qH.setDebugLog(UL.N.Remesh, !0), JH = () => qH.takeDebugLog(UL.N.Remesh), bS = new OS((0, TS.n)(), JH));
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6896-L6898` → after: `L7205-L7207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7205-L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7205-L7207) · [Before (L6896-L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6896-L6898)

```diff
-             QU = UU => Uz.k.getItem(UU);
-           yU.sync(QU, XU), (0, KX.Q)();
-           const AU = (0, oU.n)("customBindingsChanged", (() => {
+             SH = HH => zL.e.getItem(HH);
+           rH.sync(SH, BH), (0, rL.S)();
+           const hH = (0, zH.m)("customBindingsChanged", (() => {
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6901` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7210) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6901)

```diff
-           (0, Yc.u)(XU);
+           (0, vA.s)(BH);
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6903` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7212) · [Before (L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6903)

```diff
-             DU = (0, sU.t)((() => {
+             CH = (0, FH.v)((() => {
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6905` → after: `L7214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7214) · [Before (L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6905)

```diff
-               FU.size > 0 && mc() && !0 === (null === (UU = (0, nU.f)()) || void 0 === UU ? void 0 : UU.localPlayerAlive()) && oU.k.UY("usedKeyboard")
+               tH.size > 0 && yA() && !0 === (null === (HH = (0, DH.i)()) || void 0 === HH ? void 0 : HH.localPlayerAlive()) && zH.k.AX("usedKeyboard")
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6907` → after: `L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7216) · [Before (L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6907)

```diff
-             EU = qc.c.heldSizer((() => (0, zz.g)(UU))),
+             EH = RA.e.heldSizer((() => (0, XL.l)(HH))),
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6911` → after: `L7220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7220) · [Before (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6911)

```diff
-                 yU.moves(UU) && (FU.add(UU), mc() && oU.k.UY("usedKeyboard"))
+                 rH.moves(HH) && (tH.add(HH), yA() && zH.k.AX("usedKeyboard"))
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6920` → after: `L7229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7229) · [Before (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6920)

```diff
-                 sc.j.measure(UU.getBoundingClientRect()), (0, Oc.k)()
+                 iA.h.measure(HH.getBoundingClientRect()), (0, jA.m)()
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6924-L6925` → after: `L7233-L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7233-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7233-L7234) · [Before (L6924-L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6924-L6925)

```diff
-                 const zU = (0, zz.k)(UU, XU),
-                   cU = qc.c.onRelease(XU);
+                 const LH = (0, XL.o)(HH, BH),
+                   AH = RA.e.onRelease(BH);
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6931` → after: `L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7240) · [Before (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6931)

```diff
-                 sc.j.measure(UU.getBoundingClientRect())
+                 iA.h.measure(HH.getBoundingClientRect())
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6934` → after: `L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7243) · [Before (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6934)

```diff
-               touchUiShown: () => YX.e.get("isTouchScreen"),
+               touchUiShown: () => XB.c.get("isTouchScreen"),
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6941` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7250) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6941)

```diff
-             NU = (0, fz.c)(XU);
+             GH = (0, ZL.e)(BH);
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6943` → after: `L7252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7252) · [Before (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6943)

```diff
-             AU(), DU(), (0, Yc.u)(null), NU(), YU()
+             hH(), CH(), (0, vA.s)(null), GH(), XH()
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6948` → after: `L7257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7257) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6948)

```diff
-           })), !CF && (0, Kc.c)(UU, yU) && (0, Kc.b)((() => {
+           })), !Kt && (0, rr.g)(HH, rH) && (0, rr.e)((() => {
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6959-L6960` → after: `L7268-L7269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7268-L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7268-L7269) · [Before (L6959-L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6959-L6960)

```diff
-         (0, dX._)((() => {
-           "call" === (0, dX.r)() && fU.crash(wz.w, (0, dX.o)())
+         (0, cB.Y)((() => {
+           "call" === (0, cB.q)() && qH.crash(RL.u, (0, cB.p)())
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6962` → after: `L7271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7271) · [Before (L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6962)

```diff
-         const hU = (0, wz.Q)(fU.rings.worker, (() => {
+         const yH = (0, RL.O)(qH.rings.worker, (() => {
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6972` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7281) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6972)

```diff
-             module: (0, dX.y)(),
+             module: (0, cB.x)(),
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6974` → after: `L7283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7283) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6974)

```diff
-               const XU = (0, nU.o)();
+               const BH = (0, DH.r)();
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6993` → after: `L7302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7302) · [Before (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6993)

```diff
-                 if (!cU || XU) return void zU.oY(cU);
+                 if (!AH || BH) return void LH.XX(AH);
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6995` → after: `L7304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7304) · [Before (L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6995)

```diff
-                   zU.oY(!0)
+                   LH.XX(!0)
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7004-L7005` → after: `L7313-L7314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7313-L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7313-L7314) · [Before (L7004-L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7004-L7005)

```diff
-                   site: wz.J,
-                   error: new Error(`a world-gen worker's load failed (${UU}): ${QU}`),
+                   site: RL.E,
+                   error: new Error(`a world-gen worker's load failed (${HH}): ${SH}`),
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7018` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7327) · [Before (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7018)

```diff
-                 oY: XU => {
+                 XX: BH => {
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7020-L7021` → after: `L7329-L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7329-L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7329-L7330) · [Before (L7020-L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7020-L7021)

```diff
-                     build: (0, Ey.g)(),
-                     ageMs: (0, zc.H)()
+                     build: (0, Yr.h)(),
+                     ageMs: (0, XA.x)()
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7027` → after: `L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7336) · [Before (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7027)

```diff
-               (0, Kz.reportWorkerStartTimeout)(wz.J, UU, VA)
+               (0, SA.reportWorkerStartTimeout)(RL.E, HH, Zh)
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7042` → after: `L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7351) · [Before (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7042)

```diff
-                 UU.rings.worker.writeWorkerRecord(zU, cU, yU, 0, QU, AU) || UU.crash(wz.J, `a world-gen record of kind ${cU} did not fit the worker-in ring`)
+                 HH.rings.worker.writeWorkerRecord(LH, AH, rH, 0, SH, hH) || HH.crash(RL.E, `a world-gen record of kind ${AH} did not fit the worker-in ring`)
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7048` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7357) · [Before (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7048)

```diff
-             module: (0, dX.y)(),
+             module: (0, cB.x)(),
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7052` → after: `L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7361) · [Before (L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7052)

```diff
-               }, XU] = await Promise.all([zU.e(48).then((() => zU(53809))), Promise.resolve().then((() => zU(97))).then((UU => {
+               }, BH] = await Promise.all([LH.e(48).then((() => LH(54602))), Promise.resolve().then((() => LH(81))).then((HH => {
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7060-L7061` → after: `L7369-L7370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7369-L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7369-L7370) · [Before (L7060-L7061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7060-L7061)

```diff
-                 count: (0, mX.i)(XU),
-                 maxKeptLightStates: XU || (0, nX.l)() ? 1 : void 0
+                 count: (0, yB.f)(BH),
+                 maxKeptLightStates: BH || (0, pB.k)() ? 1 : void 0
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7065-L7066` → after: `L7374-L7375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7374-L7375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7374-L7375) · [Before (L7065-L7066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7065-L7066)

```diff
-               (0, Oc.i)(), hE(UU, (() => {
-                 UU.rings.worker.writeWorkerRecord(zU, cU, yU, QU, AU, FU) || UU.crash(wz.r, `a meshing record of kind ${cU} did not fit the worker-in ring`)
+               (0, jA.k)(), BX(HH, (() => {
+                 HH.rings.worker.writeWorkerRecord(LH, AH, rH, SH, hH, tH) || HH.crash(RL.p, `a meshing record of kind ${AH} did not fit the worker-in ring`)
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7070` → after: `L7379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7379) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7070)

```diff
-               (0, Kz.reportWorkerLost)(wz.r, UU, VA)
+               (0, SA.reportWorkerLost)(RL.p, HH, Zh)
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7076` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7385) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7076)

```diff
-               (0, Kz.reportWorkerStartTimeout)(wz.r, UU, VA)
+               (0, SA.reportWorkerStartTimeout)(RL.p, HH, Zh)
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7088` → after: `L7397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7397) · [Before (L7088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7088)

```diff
-                 UU.crash(wz.r, void 0 === zU ? XU : new Error(XU, {
+                 HH.crash(RL.p, void 0 === LH ? BH : new Error(BH, {
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7093` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7402) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7093)

```diff
-                 site: wz.r,
+                 site: RL.p,
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7099` → after: `L7408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7408) · [Before (L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7099)

```diff
-         const UX = (0, Hy.p)(vX.clientSideServerUrls.staticUrl, {
+         const HB = (0, Fr.j)(sB.clientSideServerUrls.staticUrl, {
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7110` → after: `L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7419) · [Before (L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7110)

```diff
-               return null !== (XU = null === (zU = DE()) || void 0 === zU ? void 0 : zU.modelUrl(UU)) && void 0 !== XU ? XU : null
+               return null !== (BH = null === (LH = EE()) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7116` → after: `L7425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7425) · [Before (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7116)

```diff
-               return null !== (cU = null === (yU = XU()) || void 0 === yU ? void 0 : yU.drawnUrl(zU)) && void 0 !== cU ? cU : UU.url(zU)
+               return null !== (AH = null === (rH = BH()) || void 0 === rH ? void 0 : rH.drawnUrl(LH)) && void 0 !== AH ? AH : HH.url(LH)
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7118` → after: `L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7427) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7118)

```diff
-             return (0, fy.f)((0, Ly.p)(cU), zU)
+             return (0, jr.l)((0, Ir.m)(AH), LH)
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7120-L7121` → after: `L7429-L7430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7429-L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7429-L7430) · [Before (L7120-L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7120-L7121)

```diff
-           zX = new Ly.g(XX, (UU => {
-             console.warn(`${FA} image ${UU.key.kind}:${UU.key.index}:${UU.key.word} failed`, UU.error)
+           LB = new Ir.f(BB, (HH => {
+             console.warn(`${Xh} image ${HH.key.kind}:${HH.key.index}:${HH.key.word} failed`, HH.error)
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7124` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7433) · [Before (L7124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7124)

```diff
-           void 0 === XU ? console.warn(`${FA} ${UU}`) : YE(UU, XU)
+           void 0 === BH ? console.warn(`${Xh} ${HH}`) : GE(HH, BH)
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7126` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7435) · [Before (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7126)

```diff
-         const cX = new uy.i(UX, function(UU, XU) {
+         const AB = new Rr.k(HB, function(HH, BH) {
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7149` → after: `L7458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7458) · [Before (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7149)

```diff
-             FU = zU.e(50).then((() => zU(53818))).then((UU => {
+             tH = LH.e(50).then((() => LH(54607))).then((HH => {
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7162` → after: `L7471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7471) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7162)

```diff
-             return null !== (cU = null === zU || void 0 === zU ? void 0 : zU.build(UU, XU)) && void 0 !== cU ? cU : (0, My.s)(UU, "the model workers did not load")
+             return null !== (AH = null === LH || void 0 === LH ? void 0 : LH.build(HH, BH)) && void 0 !== AH ? AH : (0, Dr.p)(HH, "the model workers did not load")
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7180` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7489) · [Before (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7180)

```diff
-             console.warn(`${FA} the texture pack's model file ${UU} failed: the shipped one loads`, XU)
+             console.warn(`${Xh} the texture pack's model file ${HH} failed: the shipped one loads`, BH)
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7184` → after: `L7493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7493) · [Before (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7184)

```diff
-         const yX = new wy.d(fU);
+         const rB = new cr.f(qH);
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7193` → after: `L7502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7502) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7193)

```diff
-             site: wz.F,
+             site: RL.B,
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7200` → after: `L7509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7509) · [Before (L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7200)

```diff
-           null !== UU && (UU || fU.isStopped || console.warn(`${FA} the core refused the terrain textures: terrain draws untextured`), BF(fU))
+           null !== HH && (HH || qH.isStopped || console.warn(`${Xh} the core refused the terrain textures: terrain draws untextured`), Ot(qH))
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7203` → after: `L7512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7512) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7203)

```diff
-           console.warn(`${FA} ${UU}`, ...void 0 === XU ? [] : [XU])
+           console.warn(`${Xh} ${HH}`, ...void 0 === BH ? [] : [BH])
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7213` → after: `L7522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7522) · [Before (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7213)

```diff
-               EU = !0, null === (UU = DU) || void 0 === UU || UU(), null === (XU = FU) || void 0 === XU || XU(), iy.b.setSettled(null), null !== sA && yD.clear(sA)
+               EH = !0, null === (HH = CH) || void 0 === HH || HH(), null === (BH = tH) || void 0 === BH || BH(), nr.d.setSettled(null), null !== dh && tC.clear(dh)
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7217` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7526) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7217)

```diff
-             null !== DU && Promise.all([zU.e(219), zU.e(53)]).then((() => zU(53771))).then((zU => {
+             null !== CH && Promise.all([LH.e(225), LH.e(53)]).then((() => LH(54568))).then((LH => {
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7231` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7540) · [Before (L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7231)

```diff
-                   (0, fy.e)(yU), AU.feed((() => async function(UU) {
+                   (0, jr.j)(rH), hH.feed((() => async function(HH) {
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7234-L7235` → after: `L7543-L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7543-L7544) · [Before (L7234-L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7234-L7235)

```diff
-                   }(IU.assets))), (0, ry.k)(IU.files()), QU.refresh().then((UU => {
-                     null !== UU && console.info(`${FA} texture pack models: ${UU.resent} of ${UU.delivered} files written again, ${UU.refetched} refetched`)
+                   }(YH.assets))), (0, Nr.l)(YH.files()), SH.refresh().then((HH => {
+                     null !== HH && console.info(`${Xh} texture pack models: ${HH.resent} of ${HH.delivered} files written again, ${HH.refetched} refetched`)
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7240` → after: `L7549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7549) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7240)

```diff
-                   (iy.b.setSettled({
+                   (nr.d.setSettled({
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7244` → after: `L7553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7553) · [Before (L7244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7244)

```diff
-                     const cU = null === UU.gameSource && (0, bz.g)(UU.pack);
+                     const AH = null === HH.gameSource && (0, hA.c)(HH.pack);
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7248` → after: `L7557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7557) · [Before (L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7248)

```diff
-                     oU.k.UY(jz.c, {
+                     zH.k.AX(rA.e, {
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7256` → after: `L7565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7565) · [Before (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7256)

```diff
-                       XU && UU && console.info(`${FA} the texture pack's animations are in (${Object.keys(UU).length} files)`)
+                       BH && HH && console.info(`${Xh} the texture pack's animations are in (${Object.keys(HH).length} files)`)
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7261` → after: `L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7570) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7261)

```diff
-                   iy.b.setSettled(null)
+                   nr.d.setSettled(null)
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7264` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7573) · [Before (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7264)

```diff
-                 maxTextureSize: () => Promise.resolve((0, ez.pb)(document.createElement("canvas")))
+                 maxTextureSize: () => Promise.resolve((0, gL.ab)(document.createElement("canvas")))
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7268` → after: `L7577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7577) · [Before (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7268)

```diff
-               console.warn(`${FA} the texture pack's terrain didn't load: the built atlas stays`, UU)
+               console.warn(`${Xh} the texture pack's terrain didn't load: the built atlas stays`, HH)
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7276` → after: `L7585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7585) · [Before (L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7276)

```diff
-             (MX ??= zU.e(65).then((() => zU(53827))).then((UU => {
+             (aB ??= LH.e(65).then((() => LH(54612))).then((HH => {
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7284` → after: `L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7593) · [Before (L7284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7284)

```diff
-               fU.setTextureLayers(UU) || fU.isStopped || (console.warn(`${FA} the core refused the texture names: textured Boxes draw textureNotFound`), AX())
+               qH.setTextureLayers(HH) || qH.isStopped || (console.warn(`${Xh} the core refused the texture names: textured Boxes draw textureNotFound`), hB())
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7292` → after: `L7601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7601) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7292)

```diff
-                 console.warn(`${FA} the texture names didn't load, so textured Boxes draw textureNotFound`, XU), AX()
+                 console.warn(`${Xh} the texture names didn't load, so textured Boxes draw textureNotFound`, BH), hB()
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7302-L7303` → after: `L7611-L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7611-L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7611-L7612) · [Before (L7302-L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7302-L7303)

```diff
-             const oU = (0, ez.Y)(zU);
-             if (null === oU) return UU.crash(DA, new Error(`this ${cU} build has no openRenderer`)), !1;
+             const zH = (0, gL.M)(LH);
+             if (null === zH) return HH.crash(Yh, new Error(`this ${AH} build has no openRenderer`)), !1;
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7308-L7309` → after: `L7617-L7618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7617-L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7617-L7618) · [Before (L7308-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7308-L7309)

```diff
-               const yU = null !== (EU = null === (YU = rA) || void 0 === YU ? void 0 : YU.pagePreviews()) && void 0 !== EU ? EU : null,
-                 FU = null !== (NU = null === (IU = rA) || void 0 === IU ? void 0 : IU.previewModule(zU)) && void 0 !== NU ? NU : null;
+               const rH = null !== (EH = null === (XH = Nh) || void 0 === XH ? void 0 : XH.pagePreviews()) && void 0 !== EH ? EH : null,
+                 tH = null !== (GH = null === (YH = Nh) || void 0 === YH ? void 0 : YH.previewModule(LH)) && void 0 !== GH ? GH : null;
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7311-L7313` → after: `L7620-L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7620-L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7620-L7622) · [Before (L7311-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7311-L7313)

```diff
-                 null === yU || void 0 === yU || yU.endSession(!1), DU = (0, zz.d)().sampleCount, await (0, ez.j)(XU, oU, AU, FE, DU, await QU);
-                 const UU = (0, ez.p)(zU);
-                 null === UU && console.warn(`${FA} this ${cU} build has no image registry: sky and model images won't show`), (0, Cy.i)(UU)
+                 null === rH || void 0 === rH || rH.endSession(!1), CH = (0, XL.d)().sampleCount, await (0, gL.f)(BH, zH, hH, zE, CH, await SH);
+                 const HH = (0, gL.j)(LH);
+                 null === HH && console.warn(`${Xh} this ${AH} build has no image registry: sky and model images won't show`), (0, Kr.d)(HH)
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7315-L7316` → after: `L7624-L7625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7624-L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7624-L7625) · [Before (L7315-L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7315-L7316)

```diff
-                 (0, xy.c)() && await (0, EX.n)();
-                 const zU = (0, xy.F)();
+                 (0, ir.e)() && await (0, EB.j)();
+                 const LH = (0, ir.K)();
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7318-L7319` → after: `L7627-L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7627-L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7627-L7629) · [Before (L7318-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7318-L7319)

```diff
-                   const XU = (0, Cz.j)(oU);
-                   return UU.crash(Kz.RENDER_RELOAD_SITE, new Error(`${zU}${void 0===XU?"":` (${XU.message})`}`)), !1
+                   const BH = (0, NL.i)(zH),
+                     AH = `${LH.why}${void 0===BH?"":` (${BH.message})`}`;
+                   return HH.crash(SA.RENDER_RELOAD_SITE, LH.webgpu ? new Error(AH) : new SA.GraphicsLostError(AH)), !1
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7321` → after: `L7631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7631) · [Before (L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7321)

```diff
-                 DU = await yU.bindSession(FU, XU, (async UU => (0, ez.B)(oU, DA, AU, UU, FE, await QU)))
+                 CH = await rH.bindSession(tH, BH, (async HH => (0, gL.q)(zH, Yh, hH, HH, zE, await SH)))
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7338` → after: `L7648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7648) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7338)

```diff
-                   return null !== (UU = yU.call(zU)) && void 0 !== UU ? UU : null
+                   return null !== (HH = rH.call(LH)) && void 0 !== HH ? HH : null
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7344` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7654) · [Before (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7344)

```diff
-             return po.boundAtMs = null !== (FU = (0, xy.I)()) && void 0 !== FU ? FU : pU, po.indirectHangs = (0, xy.v)(), po.restoresSkipped = (0, xy.M)(), console.info(`${FA} ${cU} renderer bound at ${Math.round(pU)} ms`), !UU.isStopped
+             return vz.boundAtMs = null !== (tH = (0, ir.N)()) && void 0 !== tH ? tH : uH, vz.indirectHangs = (0, ir.z)(), vz.restoresSkipped = (0, ir.Q)(), console.info(`${Xh} ${AH} renderer bound at ${Math.round(uH)} ms`), !HH.isStopped
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7348` → after: `L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7658) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7348)

```diff
-           (0, wX.F)(pU);
+           (0, NB.C)(uH);
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7350` → after: `L7660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7660) · [Before (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7350)

```diff
-           zU.e(210).then((() => zU(34748))).then((XU => {
+           LH.e(214).then((() => LH(34856))).then((BH => {
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7363` → after: `L7673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7673) · [Before (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7363)

```diff
-                   "screenshot" === XU && null === QU ? await (0, sy.i)(UU, cU, yU) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
+                   "screenshot" === BH && null === SH ? await (0, dr.f)(HH, AH, rH) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7366` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7676) · [Before (L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7366)

```diff
-                 capturePhoto: (XU, zU, cU) => (0, sy.e)(UU, XU, zU, cU)
+                 capturePhoto: (BH, LH, AH) => (0, dr.c)(HH, BH, LH, AH)
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7372` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7682) · [Before (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7372)

```diff
-                 BY: XU,
+                 VX: BH,
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7374` → after: `L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7684) · [Before (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7374)

```diff
-                   (0, Yc.C)(Iz.tb.Resize, 0, UU / zU, XU / zU, (0, Yc.m)(zU))
+                   (0, vA.A)(UL.tb.Resize, 0, HH / LH, BH / LH, (0, vA.m)(LH))
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7377-L7378` → after: `L7687-L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7687-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7687-L7688) · [Before (L7377-L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7377-L7378)

```diff
-                   const XU = (0, zz.g)(UU);
-                   null !== XU && (0, Yc.C)(Iz.tb.Resize, 0, XU.cssWidth, XU.cssHeight, (0, Yc.m)(XU.renderScale))
+                   const BH = (0, XL.l)(HH);
+                   null !== BH && (0, vA.A)(UL.tb.Resize, 0, BH.cssWidth, BH.cssHeight, (0, vA.m)(BH.renderScale))
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7386` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7696) · [Before (L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7386)

```diff
-             console.warn(`${FA} the developer tools didn't load: no captures this session`, UU)
+             console.warn(`${Xh} the developer tools didn't load: no captures this session`, HH)
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7388` → after: `L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7698) · [Before (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7388)

```diff
-           const XU = "webgpu" === pU && null !== (oX = null === IU || void 0 === IU || null === (NX = IU.adapter) || void 0 === NX ? void 0 : NX.vendor) && void 0 !== oX ? oX : null;
+           const BH = "webgpu" === uH && null !== (zB = null === YH || void 0 === YH || null === (GB = YH.adapter) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== zB ? zB : null;
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7392` → after: `L7702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7702) · [Before (L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7392)

```diff
-             fallbackReason: null !== (IX = null === IU || void 0 === IU ? void 0 : IU.reason) && void 0 !== IX ? IX : null,
+             fallbackReason: null !== (YB = null === YH || void 0 === YH ? void 0 : YH.reason) && void 0 !== YB ? YB : null,
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7396` → after: `L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7706) · [Before (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7396)

```diff
-             (0, Oc.r)(pU, kU, XU)
+             (0, jA.v)(uH, xH, BH)
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7398` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7708) · [Before (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7398)

```diff
-             (0, Oc.u)(), console.error(`${FA} the quality steps didn't start`, yU)
+             (0, jA.x)(), console.error(`${Xh} the quality steps didn't start`, rH)
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7405-L7407` → after: `L7715-L7717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7715-L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7715-L7717) · [Before (L7405-L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7405-L7407)

```diff
-         aX && console.warn(`${FA} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
-         const tX = (0, DX.c)(IU, (0, jX.l)());
-         if ((0, pQ.q)("webgpuloss")) {
+         QB && console.warn(`${Xh} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
+         const WB = (0, CB.f)(YH, (0, AL.l)());
+         if ((0, xS.o)("webgpuloss")) {
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7411-L7412` → after: `L7721-L7722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7721-L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7721-L7722) · [Before (L7411-L7412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7411-L7412)

```diff
-             reason: null !== (gX = null === IU || void 0 === IU ? void 0 : IU.reason) && void 0 !== gX ? gX : null,
-             source: null !== (kX = null === IU || void 0 === IU ? void 0 : IU.source) && void 0 !== kX ? kX : null,
+             reason: null !== (MB = null === YH || void 0 === YH ? void 0 : YH.reason) && void 0 !== MB ? MB : null,
+             source: null !== (xB = null === YH || void 0 === YH ? void 0 : YH.source) && void 0 !== xB ? xB : null,
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7421-L7422` → after: `L7731-L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7731-L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7731-L7732) · [Before (L7421-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7421-L7422)

```diff
-         if (tF = (0, DX.g)(GX ? fU : null, GX && null !== (FU = null === (DU = rA) || void 0 === DU ? void 0 : DU.pagePreviews().Fp) && void 0 !== FU ? FU : null, tX, YE), jo) return null;
-         if (xU.reserveAtJoin((0, Wy.o)(null !== MU && void 0 !== MU ? MU : mz.j)), fU.isStopped) return null;
+         if (Pt = (0, CB.g)(vB ? qH : null, vB && null !== (tH = null === (CH = Nh) || void 0 === CH ? void 0 : CH.pagePreviews().Cu) && void 0 !== tH ? tH : null, WB, GE), pz) return null;
+         if (dH.reserveAtJoin((0, mr.n)(null !== RH && void 0 !== RH ? RH : HA.f)), qH.isStopped) return null;
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7432` → after: `L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7742) · [Before (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7432)

```diff
-             if (fU.writePendingInput(), (0, sU.c)(UU, wE), GE(!1, UU), null !== Wo) try {
+             if (qH.writePendingInput(), (0, FH.d)(HH, fE), PE(!1, HH), null !== Iz) try {
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7438` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7748) · [Before (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7438)

```diff
-           } else CE(fU, no, "budget") && ((0, bX.j)(fU.lastFrameKind) && fE() && (0, sU.c)(UU, wE), GE(no && Ho, UU), Mo.frame(fU.lastFrameKind, no && fE(), UU), vo.frame(fU.lastFrameKind, no && fE()), (0, bX.c)(fU.lastFrameKind) && jX.J.drew(), lE(fU), xU.afterFrame(), requestAn … [truncated]
+           } else IE(qH, sz, "budget") && ((0, SL.e)(qH.lastFrameKind) && gE() && (0, FH.d)(HH, fE), PE(sz && Dz, HH), wz.frame(qH.lastFrameKind, sz && gE(), HH), Zz.frame(qH.lastFrameKind, sz && gE()), (0, SL.b)(qH.lastFrameKind) && AL.D.drew(), aE(qH), dH.afterFrame(), requestAn … [truncated]
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7448` → after: `L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7758) · [Before (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7448)

```diff
-               console.info(`${nc} input ${XU} ${zU?"down":"up"} press ${cU} at ${performance.now().toFixed(1)}`)
+               console.info(`${pA} input ${BH} ${LH?"down":"up"} press ${AH} at ${performance.now().toFixed(1)}`)
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7471` → after: `L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7781) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7471)

```diff
-         (cU(VA), xA(null !== UU), null !== UU && (ZU = performance.now()), mA(UU), null === UU) ? null === (XU = rA) || void 0 === XU || XU.pagePreviews().endSession(null === (0, dX.r)()): GF("booted")
+         (AH(Zh), ih(null !== HH), null !== HH && (TH = performance.now()), sh(HH), null === HH) ? null === (BH = Nh) || void 0 === BH || BH.pagePreviews().endSession(null === (0, cB.q)()): Vt("booted")
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7489` → after: `L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7799) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7489)

```diff
-         console.warn(`${FA} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, UU)
+         console.warn(`${Xh} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, HH)
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7494` → after: `L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7804) · [Before (L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7494)

```diff
-         this.deps = UU, this.latest = 0, this.uD = null
+         this.deps = HH, this.latest = 0, this.LX = null
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7504` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7814) · [Before (L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7504)

```diff
-         if ((null === (cU = this.uD) || void 0 === cU ? void 0 : cU.module) === UU && (0, Rz.oe)(this.uD.files, XU)) return !1;
+         if ((null === (AH = this.LX) || void 0 === AH ? void 0 : AH.module) === HH && (0, lL.ne)(this.LX.files, BH)) return !1;
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7514` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7824) · [Before (L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7514)

```diff
-           return this.uD = {
+           return this.LX = {
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7520` → after: `L7830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7830) · [Before (L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7520)

```diff
-                 ("error" === UU[XU] ? console.error : console.warn)(`Animation for the texture pack: ${UU[XU+1]}: ${UU[XU+2]}`)
+                 ("error" === HH[BH] ? console.error : console.warn)(`Animation for the texture pack: ${HH[BH+1]}: ${HH[BH+2]}`)
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7527-L7528` → after: `L7837-L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7837-L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7837-L7838) · [Before (L7527-L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7527-L7528)

```diff
-           const cU = (null !== (AU = this.deps.retryAfterMs) && void 0 !== AU ? AU : Wz)[zU];
-           return void 0 === cU || FU instanceof dz || (0, Pz.i)(UU) || setTimeout((() => {
+           const AH = (null !== (hH = this.deps.retryAfterMs) && void 0 !== hH ? hH : cL)[LH];
+           return void 0 === AH || tH instanceof eL || (0, KL.k)(HH) || setTimeout((() => {
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7535` → after: `L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7845) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7535)

```diff
-           return UU.jcU(XU)
+           return HH.ErH(BH)
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7537` → after: `L7847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7847) · [Before (L7537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7537)

```diff
-           throw (0, Pz.k)(UU, zU), zU
+           throw (0, KL.o)(HH, LH), LH
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7544-L7545` → after: `L7854-L7855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7854-L7855) · [Before (L7544-L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7544-L7545)

```diff
-         const XU = this.uD;
-         if (this.uD = null, (null === XU || void 0 === XU ? void 0 : XU.module) === UU && !(0, Pz.i)(UU)) try {
+         const BH = this.LX;
+         if (this.LX = null, (null === BH || void 0 === BH ? void 0 : BH.module) === HH && !(0, KL.k)(HH)) try {
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7550` → after: `L7860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7860) · [Before (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7550)

```diff
-       compiler: kz.d,
+       compiler: mL.e,
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7566` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7876) · [Before (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7566)

```diff
-           } = await zU.e(297).then((() => zU(53747)));
+           } = await LH.e(125).then((() => LH(54549)));
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7587-L7589` → after: `L7897-L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7897-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7897-L7899) · [Before (L7587-L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7587-L7589)

```diff
-       const EU = iy.b.rejoinHold();
-       sF = null, (0, Qc.g)();
-       const YU = (0, zc.cb)("wasm", bE);
+       const EH = nr.d.rejoinHold();
+       dt = null, (0, uA.h)();
+       const XH = (0, XA.Y)("wasm", yE);
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7597` → after: `L7907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7907) · [Before (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7597)

```diff
-           kind: "QU"
+           kind: "xB"
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7602` → after: `L7912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7912) · [Before (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7602)

```diff
-         if (IU = performance.now(), !oU()) KE(null !== (aU = null === (eU = UU.target.session) || void 0 === eU ? void 0 : eU.gameNameWithVariation) && void 0 !== aU ? aU : null);
+         if (YH = performance.now(), !zH()) pE(null !== (QH = null === (mH = HH.target.session) || void 0 === mH ? void 0 : mH.gameNameWithVariation) && void 0 !== QH ? QH : null);
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7611` → after: `L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7921) · [Before (L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7611)

```diff
-           OU(), UU || dU || null !== WU && "ok" !== WU || (dU = !0, (0, pU.n)("wasm_boot_wait", performance.now(), `${PU}:${XU()}:${(0,tU.m)()}`)), LU++;
+           lH(), HH || bH || null !== OH && "ok" !== OH || (bH = !0, (0, uH.v)("wasm_boot_wait", performance.now(), `${VH}:${BH()}:${(0,WH.p)()}`)), kH++;
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7626` → after: `L7936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7936) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7626)

```diff
-             if (gU.c.markGameEngineConstructed(), RU) return;
+             if (MH.e.markGameEngineConstructed(), UH) return;
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7628-L7629` → after: `L7938-L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7938-L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7938-L7939) · [Before (L7628-L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7628-L7629)

```diff
-             const cU = Math.max(UU, null !== (XU = GU) && void 0 !== XU ? XU : UU);
-             (0, kU.g)("ready", Math.max(0, (null !== (zU = BU) && void 0 !== zU ? zU : cU) - cU) / 1e3)
+             const AH = Math.max(HH, null !== (BH = vH) && void 0 !== BH ? BH : HH);
+             (0, xH.h)("ready", Math.max(0, (null !== (LH = PH) && void 0 !== LH ? LH : AH) - AH) / 1e3)
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7631` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7941) · [Before (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7631)

```diff
-           if (null !== BU && null !== ZU ? (0, pU.n)("wasm_core_ready", ZU) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), UU.target.session && (0, PQ.c)(UU.target.session.gameNameWithVariation)) null === (CU = TA) || void 0 === CU || CU … [truncated]
+           if (null !== PH && null !== TH ? (0, uH.v)("wasm_core_ready", TH) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), HH.target.session && (0, mS.b)(HH.target.session.gameNameWithVariation)) null === (oH = Lt) || void 0 === oH || oH … [truncated]
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7634` → after: `L7944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7944) · [Before (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7634)

```diff
-           kind: "QU"
+           kind: "xB"
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7649` → after: `L7959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7959) · [Before (L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7649)

```diff
-             NU = null !== (XU = null === (zU = UU.session) || void 0 === zU ? void 0 : zU.gameNameWithVariation) && void 0 !== XU ? XU : null;
+             GH = null !== (BH = null === (LH = HH.session) || void 0 === LH ? void 0 : LH.gameNameWithVariation) && void 0 !== BH ? BH : null;
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7655` → after: `L7965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7965) · [Before (L7655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7655)

```diff
-             (0, VX.h)(YU, (0, VX.e)(yU))
+             (0, JB.k)(XH, (0, JB.g)(rH))
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7666` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7976) · [Before (L7666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7666)

```diff
-               if ((0, pQ.q)("webgpuloss")) {
+               if ((0, xS.o)("webgpuloss")) {
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7671` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7981) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7671)

```diff
-               if (null !== XU) throw new DX.b(XU)
+               if (null !== BH) throw new CB.c(BH)
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7691-L7692` → after: `L8001-L8002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8001-L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8001-L8002) · [Before (L7691-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7691-L7692)

```diff
-                 if (!(UU instanceof UX.c)) return UU;
-                 if ("roomError" === UU.stage && null !== Eo) return FD(new UX.c(UU.message, UU.stage, UU.code, Eo), UU);
+                 if (!(HH instanceof HB.d)) return HH;
+                 if ("roomError" === HH.stage && null !== Qz) return EC(new HB.d(HH.message, HH.stage, HH.code, Qz), HH);
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7694` → after: `L8004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8004) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7694)

```diff
-                 return void 0 === XU ? UU : FD(new UX.c(UU.message, UU.stage, XU.code, null, UU.socketOpened), UU)
+                 return void 0 === BH ? HH : EC(new HB.d(HH.message, HH.stage, BH.code, null, HH.socketOpened), HH)
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7706-L7707` → after: `L8016-L8017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8016-L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8016-L8017) · [Before (L7706-L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7706-L7707)

```diff
-                 game: null !== (zU = null === yU || void 0 === yU ? void 0 : yU.gameNameWithVariation) && void 0 !== zU ? zU : UU.roomName,
-                 lobby: String(null !== QU && void 0 !== QU ? QU : null),
+                 game: null !== (LH = null === rH || void 0 === rH ? void 0 : rH.gameNameWithVariation) && void 0 !== LH ? LH : HH.roomName,
+                 lobby: String(null !== SH && void 0 !== SH ? SH : null),
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7709` → after: `L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8019) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7709)

```diff
-                 postCookies: null !== (cU = UU.postCookies) && void 0 !== cU ? cU : null
+                 postCookies: null !== (AH = HH.postCookies) && void 0 !== AH ? AH : null
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7717` → after: `L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8027) · [Before (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7717)

```diff
-                 game: null !== (tU = null === (gU = UU.session) || void 0 === gU ? void 0 : gU.gameNameWithVariation) && void 0 !== tU ? tU : "",
+                 game: null !== (WH = null === (MH = HH.session) || void 0 === MH ? void 0 : MH.gameNameWithVariation) && void 0 !== WH ? WH : "",
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7719` → after: `L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8029) · [Before (L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7719)

```diff
-                 rejoinedAt: oU ? NU : null,
+                 rejoinedAt: zH ? GH : null,
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7761` → after: `L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8071) · [Before (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7761)

```diff
-                           console.warn(`${FA} the held seat of a game left while it reconnected couldn't be released`, yU)
+                           console.warn(`${Xh} the held seat of a game left while it reconnected couldn't be released`, rH)
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7766` → after: `L8076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8076) · [Before (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7766)

```diff
-                     nC: UU => {
+                     IK: HH => {
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7782-L7783` → after: `L8092-L8093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8092-L8093) · [Before (L7782-L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7782-L7783)

```diff
-                         console.warn(`${FA} gave up reconnecting (${zU.reason}, ${zU.attempts} attempts)`, zU.lastError), (0, Kz.reportReconnectGaveUp)(zU, VA);
-                         const QU = null !== (cU = null === (yU = JF) || void 0 === yU ? void 0 : yU.rejoin) && void 0 !== cU ? cU : null;
+                         console.warn(`${Xh} gave up reconnecting (${LH.reason}, ${LH.attempts} attempts)`, LH.lastError), (0, SA.reportReconnectGaveUp)(LH, Zh);
+                         const SH = null !== (AH = null === (rH = yt) || void 0 === rH ? void 0 : rH.rejoin) && void 0 !== AH ? AH : null;
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7802-L7804` → after: `L8112-L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8112-L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8112-L8114) · [Before (L7802-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7802-L7804)

```diff
-               }(DU, UU.endpoint), performance.mark(IA), (0, pU.n)("wasm_joined", NU), setTimeout((() => {
-                 MF === DU && (0, pU.f)()
-               }), 0), cD(), console.info(`${FA} joined ${UU.roomName} as ${DU.seat.sessionId} at ${Math.round(performance.now())} ms`);
+               }(CH, HH.endpoint), performance.mark(Mh), (0, uH.v)("wasm_joined", GH), setTimeout((() => {
+                 Dt === CH && (0, uH.j)()
+               }), 0), hC(), console.info(`${Xh} joined ${HH.roomName} as ${CH.seat.sessionId} at ${Math.round(performance.now())} ms`);
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7825` → after: `L8135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8135) · [Before (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7825)

```diff
-           kind: "QU"
+           kind: "xB"
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7831` → after: `L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8141) · [Before (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7831)

```diff
-             console.warn(`${FA} the cached traffic code could not be dropped`, UU)
+             console.warn(`${Xh} the cached traffic code could not be dropped`, HH)
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7835` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8145) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7835)

```diff
-         if (SU instanceof DX.b) return zU(SU, performance.now() - IU), {
+         if (KH instanceof CB.c) return LH(KH, performance.now() - YH), {
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7840-L7845` → after: `L8150-L8151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8150-L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8150-L8151) · [Before (L7840-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7840-L7845)

```diff
-         if (SU instanceof UX.c && SU.code === cU.e.wasmClientNotAllowed.code && so) return AE("this server refused the wasm client to this account", "refused"), {
-           kind: "failed",
-           error: SU,
-           reloading: !0
-         };
-         const UU = SU instanceof UX.c && SU.code === cU.e.outdatedVersion.code,
+         const HH = KH instanceof HB.d && KH.code === AH.e.wasmClientNotAllowed.code,
+           BH = KH instanceof HB.d && KH.code === AH.e.outdatedVersion.code,
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7852` → after: `L8158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8158) · [Before (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7852)

```diff
-             zU(SU, performance.now() - IU)
+             HH && (0, nB.G)(), LH(KH, performance.now() - YH)
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7863` → after: `L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8169) · [Before (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7863)

```diff
-         NU || YU.end(), iy.b.releaseHold(EU);
+         GH || XH.end(), nr.d.releaseHold(EH);
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7878` → after: `L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8184) · [Before (L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7878)

```diff
-       return (0, VX.l)(XU), new Promise(((zU, cU) => {
+       return (0, JB.t)(BH), new Promise(((LH, AH) => {
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7880` → after: `L8186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8186) · [Before (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7880)

```diff
-           cU((0, VX.e)(XU))
+           AH((0, JB.g)(BH))
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7901` → after: `L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8207) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7901)

```diff
-       }(), null === KA || KA.left) || (KA.left = !0, null === (cU = (0, nU.f)()) || void 0 === cU || cU.socketLeft(), (0, NU.o)({
+       }(), null === Ht || Ht.left) || (Ht.left = !0, null === (AH = (0, DH.i)()) || void 0 === AH || AH.socketLeft(), (0, GH.p)({
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7904` → after: `L8210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8210) · [Before (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7904)

```diff
-       VF && (0, VX.h)(VF, new DOMException("the join was left", "AbortError")), aD(null !== UU), null === (XU = tF) || void 0 === XU || XU.leave();
+       Zt && (0, JB.k)(Zt, new DOMException("the join was left", "AbortError")), xC(null !== HH), null === (BH = Pt) || void 0 === BH || BH.leave();
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7906` → after: `L8212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8212) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7906)

```diff
-       null !== UU && iy.b.setGame(UU.game), ND(null, null !== (zU = null === UU || void 0 === UU ? void 0 : UU.controller) && void 0 !== zU ? zU : null), null === yU || void 0 === yU || yU.leave(), pD(0), (0, iX.f)()
+       null !== HH && nr.d.setGame(HH.game), QC(null, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.controller) && void 0 !== LH ? LH : null), null === rH || void 0 === rH || rH.leave(), MC(0), (0, ZB.e)()
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7910` → after: `L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8216) · [Before (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7910)

```diff
-       MF = UU, VF = XU, null === MF && null === VF && iy.b.setGame(void 0)
+       Dt = HH, Zt = BH, null === Dt && null === Zt && nr.d.setGame(void 0)
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7919` → after: `L8225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8225) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7919)

```diff
-       return null !== eA && !jo && null !== XU && !XU.isStopped && (!!eA(UX.h, 0, (0, UX.u)(UU)) && (OF = !0, 0 === UU || CF || CE(XU, !1, "all"), !0))
+       return null !== lh && !pz && null !== BH && !BH.isStopped && (!!lh(HB.j, 0, (0, HB.z)(HH)) && (qt = !0, 0 === HH || Kt || IE(BH, !1, "all"), !0))
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7924-L7925` → after: `L8230-L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8230-L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8230-L8231) · [Before (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7924-L7925)

```diff
-       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, zc.i)();
-       const zU = null !== (UU = null === (XU = JF) || void 0 === XU ? void 0 : XU.overflow) && void 0 !== UU ? UU : null;
+       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, XA.d)();
+       const LH = null !== (HH = null === (BH = yt) || void 0 === BH ? void 0 : BH.overflow) && void 0 !== HH ? HH : null;
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7934` → after: `L8240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8240) · [Before (L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7934)

```diff
-       console.warn(`${FA} the event buffer refused records in ${XU} frames (categories ${UU})`), jo || (null !== JF ? kD(JF, UU, XU) : null !== VF && function(UU, XU, zU) {
+       console.warn(`${Xh} the event buffer refused records in ${BH} frames (categories ${HH})`), pz || (null !== yt ? TC(yt, HH, BH) : null !== Zt && function(HH, BH, LH) {
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7937-L7938` → after: `L8243-L8244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8243-L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8243-L8244) · [Before (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7937-L7938)

```diff
-           return null === UU ? "drop" : UU.activated ? "keep" : 0 !== (XU & pz.t.NetSession) ? "fail" : "drop"
-         }((null === (cU = Qo) || void 0 === cU ? void 0 : cU.join) === UU ? Qo : null, XU);
+           return null === HH ? "drop" : HH.activated ? "keep" : 0 !== (BH & VL.z.NetSession) ? "fail" : "drop"
+         }((null === (AH = Ez) || void 0 === AH ? void 0 : AH.join) === HH ? Ez : null, BH);
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7942` → after: `L8248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8248) · [Before (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7942)

```diff
-         } : "fail" === yU && (0, VX.h)(UU, new Error("the join's net session was lost to an event overflow"))
+         } : "fail" === rH && (0, JB.k)(HH, new Error("the join's net session was lost to an event overflow"))
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7955` → after: `L8261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8261) · [Before (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7955)

```diff
-         if (0 === (UU & pz.t.NetSession)) return "none";
+         if (0 === (HH & VL.z.NetSession)) return "none";
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7961` → after: `L8267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8267) · [Before (L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7961)

```diff
-         const XU = "rejoin" === yU && performance.now() - Ao >= hU.f;
+         const BH = "rejoin" === rH && performance.now() - Xz >= yH.e;
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7982` → after: `L8288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8288) · [Before (L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7982)

```diff
-         "landingPage" === XU ? (null === zU || void 0 === zU || zU.stopWorkers(), null === cU || void 0 === cU || cU.stopWorker(), null === yU || void 0 === yU || yU.stopWorkers()) : ((0, YX.k)(XU) || "inGame" === XU) && (null === zU || void 0 === zU || zU.restartWorkers(), null  … [truncated]
+         "landingPage" === BH ? (null === LH || void 0 === LH || LH.stopWorkers(), null === AH || void 0 === AH || AH.stopWorker(), null === rH || void 0 === rH || rH.stopWorkers()) : ((0, XB.j)(BH) || "inGame" === BH) && (null === LH || void 0 === LH || LH.restartWorkers(), null  … [truncated]
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7987` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8293) · [Before (L7987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7987)

```diff
-       }, YX.e.get("gameState"))
+       }, XB.c.get("gameState"))
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8001` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8307) · [Before (L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8001)

```diff
-         cU = null !== (XU = UU.joinOptions.lobbyName) && void 0 !== XU ? XU : null;
+         AH = null !== (BH = HH.joinOptions.lobbyName) && void 0 !== BH ? BH : null;
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8008` → after: `L8314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8314) · [Before (L8008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8008)

```diff
-       return zU.e(297).then((() => zU(53747))).then((UU => {
+       return LH.e(125).then((() => LH(54549))).then((HH => {
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8014` → after: `L8320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8320) · [Before (L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8014)

```diff
-         console.warn(`${FA} the cached traffic code could not be dropped`, UU)
+         console.warn(`${Xh} the cached traffic code could not be dropped`, HH)
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8032-L8033` → after: `L8338-L8339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8338-L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8338-L8339) · [Before (L8032-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8032-L8033)

```diff
-       const EU = (0, hU.l)(XU, (0, Yy.f)(UU));
-       if (console.info(`${FA} the game's connection closed with code ${XU} (${null!==(QU=EU.name)&&void 0!==QU?QU:"unrecognised"})`), XU === cU.e.gameOrPluginKick.code || AU || (0, Kz.reportDisconnect)(EU, VA, {
+       const EH = (0, yH.l)(BH, (0, ur.g)(HH));
+       if (console.info(`${Xh} the game's connection closed with code ${BH} (${null!==(SH=EH.name)&&void 0!==SH?SH:"unrecognised"})`), BH === AH.e.gameOrPluginKick.code || hH || (0, SA.reportDisconnect)(EH, Zh, {
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8039` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8345) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8039)

```diff
-           zU = new Error(`the game's connection closed with code ${XU}`),
+           LH = new Error(`the game's connection closed with code ${BH}`),
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8051-L8052` → after: `L8357-L8358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8357-L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8357-L8358) · [Before (L8051-L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8051-L8052)

```diff
-       const YU = EU.canReconnect ? FU : null,
-         NU = null !== YU && EU.automaticallyReconnect && performance.now() - Ao >= hU.f;
+       const XH = EH.canReconnect ? tH : null,
+         GH = null !== XH && EH.automaticallyReconnect && performance.now() - Xz >= yH.e;
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8063` → after: `L8369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8369) · [Before (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8063)

```diff
-       iy.b.unwantedLeave(zU && null !== XU && 0 === oo.size), null === (cU = Fo) || void 0 === cU || cU.abort();
+       nr.d.unwantedLeave(LH && null !== BH && 0 === Yz.size), null === (AH = Gz) || void 0 === AH || AH.abort();
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8090-L8092` → after: `L8396-L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8396-L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8396-L8398) · [Before (L8090-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8090-L8092)

```diff
-           console.error(`${FA} an unwanted-leave listener threw`, oU)
-         } else Xy((0, Tc.k)(UU, null !== AU, zU), QU.signal).then((XU => {
-           XU && (null !== AU ? AU() : UU.requiresRefresh && (0, EX.l)())
+           console.error(`${Xh} an unwanted-leave listener threw`, zH)
+         } else mB((0, VB.g)(HH, null !== hH, LH), SH.signal).then((BH => {
+           BH && (null !== hH ? hH() : HH.requiresRefresh && (0, EB.f)())
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8126` → after: `L8432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8432) · [Before (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8126)

```diff
-           aux: Iz.dc.AdEnd,
+           aux: UL.cc.AdEnd,
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8155` → after: `L8461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8461) · [Before (L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8155)

```diff
-       if (UU.readyState === WebSocket.CLOSING || UU.readyState === WebSocket.CLOSED) return console.warn(`${FA} a closing or closed socket can't be attached`), null;
+       if (HH.readyState === WebSocket.CLOSING || HH.readyState === WebSocket.CLOSED) return console.warn(`${Xh} a closing or closed socket can't be attached`), null;
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8157-L8159` → after: `L8463-L8465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8463-L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8463-L8465) · [Before (L8157-L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8157-L8159)

```diff
-       if (!yU || yU.isStopped) return console.warn(`${FA} no core is running to attach a socket to`), UU.close(), null;
-       if (null === (0, nU.f)()) return console.warn(`${FA} the game has not started to attach a socket to`), UU.close(), null;
-       if (ZF > Iz.w) return console.warn(`${FA} this core has attached all the sockets it can; reload to play on`), UU.close(), null;
+       if (!rH || rH.isStopped) return console.warn(`${Xh} no core is running to attach a socket to`), HH.close(), null;
+       if (null === (0, DH.i)()) return console.warn(`${Xh} the game has not started to attach a socket to`), HH.close(), null;
+       if (bt > UL.w) return console.warn(`${Xh} this core has attached all the sockets it can; reload to play on`), HH.close(), null;
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8163-L8164` → after: `L8469-L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8469-L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8469-L8470) · [Before (L8163-L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8163-L8164)

```diff
-       if (!jD(yU, "open", QU, cU ? Iz.ac.Resume : 0)) return UU.close(), null;
-       cU || fX.d.reset(), Qo = null === VF ? null : {
+       if (!pC(rH, "open", SH, AH ? UL.bc.Resume : 0)) return HH.close(), null;
+       AH || wB.e.reset(), Ez = null === Zt ? null : {
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8169` → after: `L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8475) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8169)

```diff
-       const AU = new sz.d((() => {
+       const hH = new pL.c((() => {
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8191` → after: `L8497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8497) · [Before (L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8191)

```diff
-             AU.heard(), FU.token = null !== (XU = (0, nz.b)(zU)) && void 0 !== XU ? XU : FU.token,
+             hH.heard(), tH.token = null !== (BH = (0, yL.d)(LH)) && void 0 !== BH ? BH : tH.token,
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8194` → after: `L8500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8500) · [Before (L8194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8194)

```diff
-                   UU.rings.net.writeFrame(XU, zU) || UU.crash(wz.t, `a socket frame of ${zU.byteLength} bytes did not fit the net-in ring`)
+                   HH.rings.net.writeFrame(BH, LH) || HH.crash(RL.q, `a socket frame of ${LH.byteLength} bytes did not fit the net-in ring`)
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8203` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8509) · [Before (L8203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8203)

```diff
-           cU || (0, pU.n)("wasm_socket_open", performance.now());
+           AH || (0, uH.v)("wasm_socket_open", performance.now());
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8213` → after: `L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8519) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8213)

```diff
-       return UU.addEventListener("message", oU), UU.addEventListener("open", DU), UU.addEventListener("close", EU), KA = FU, null === (XU = (0, nU.f)()) || void 0 === XU || XU.socketAttached(QU), (0, NU.o)({
+       return HH.addEventListener("message", zH), HH.addEventListener("open", CH), HH.addEventListener("close", EH), Ht = tH, null === (BH = (0, DH.i)()) || void 0 === BH || BH.socketAttached(SH), (0, GH.p)({
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8237-L8238` → after: `L8543-L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8543-L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8543-L8544) · [Before (L8237-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8237-L8238)

```diff
-         token: `${cU.roomId}:${XU.token}`
-       }), jD(UU, "close", XU.conn), null === (zU = (0, nU.f)()) || void 0 === zU || zU.socketDetached(XU.conn), !0
+         token: `${AH.roomId}:${BH.token}`
+       }), pC(HH, "close", BH.conn), null === (LH = (0, DH.i)()) || void 0 === LH || LH.socketDetached(BH.conn), !0
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8247` → after: `L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8553) · [Before (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8247)

```diff
-         uD: AU,
+         LX: hH,
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8252-L8253` → after: `L8558-L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8558-L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8558-L8559) · [Before (L8252-L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8252-L8253)

```diff
-       if (!jD(UU, "close", XU.conn, Iz.C.Held)) return !0;
-       console.warn(`${FA} the game's connection ${yU?"went silent":`dropped with code ${zU}`}, holding it`);
+       if (!pC(HH, "close", BH.conn, UL.z.Held)) return !0;
+       console.warn(`${Xh} the game's connection ${rH?"went silent":`dropped with code ${LH}`}, holding it`);
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8261` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8567) · [Before (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8261)

```diff
-         token: `${AU.roomId}:${FU}`
+         token: `${hH.roomId}:${tH}`
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8269-L8270` → after: `L8575-L8576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8575-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8575-L8576) · [Before (L8269-L8270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8269-L8270)

```diff
-       return null === zU || null === yU || jo || UU.left || yU.conn !== UU.conn || null === QU || "" === QU ? null : (0, cU.i)(XU) && zU.resume.canHoldSeat() ? {
-         uD: zU,
+       return null === LH || null === rH || pz || HH.left || rH.conn !== HH.conn || null === SH || "" === SH ? null : (0, AH.k)(BH) && LH.resume.canHoldSeat() ? {
+         LX: LH,
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8279` → after: `L8585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8585) · [Before (L8279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8279)

```diff
-       null === (zU = (0, nU.f)()) || void 0 === zU || zU.closeGame(UU), (0, Ty.b)().close(UU), XU || (0, NU.o)({
+       null === (LH = (0, DH.i)()) || void 0 === LH || LH.closeGame(HH), (0, LS.d)().close(HH), BH || (0, GH.p)({
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8287-L8288` → after: `L8593-L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8593-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8593-L8594) · [Before (L8287-L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8287-L8288)

```diff
-       const XU = (0, nU.f)();
-       jo || null === XU || XU.nC(UU) ? zo = null : performance.now() - SF.pause >= PA && (SF.pause = performance.now(), console.warn(`${FA} the cmd ring had no room for SetPaused(${UU}): written before the next frame`))
+       const BH = (0, DH.i)();
+       pz || null === BH || BH.IK(HH) ? tz = null : performance.now() - gt.pause >= mh && (gt.pause = performance.now(), console.warn(`${Xh} the cmd ring had no room for SetPaused(${HH}): written before the next frame`))
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8301` → after: `L8607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8607) · [Before (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8301)

```diff
-       UU.heldConn = 0, UU.pendingHold = null, jF === UU && (jF = null), "left" === XU ? UU.resume.leave() : UU.resume.dispose(), 0 === Xo || (null === (zU = KA) || void 0 === zU ? void 0 : zU.conn) !== Xo || "left" === XU && (null === (cU = MF) || void 0 === cU ? void 0 : cU.conn … [truncated]
+       HH.heldConn = 0, HH.pendingHold = null, Hz === HH && (Hz = null), "left" === BH ? HH.resume.leave() : HH.resume.dispose(), 0 === hz || (null === (LH = Ht) || void 0 === LH ? void 0 : LH.conn) !== hz || "left" === BH && (null === (AH = Dt) || void 0 === AH ? void 0 : AH.conn … [truncated]
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8330` → after: `L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8636) · [Before (L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8330)

```diff
-       (null === zU || void 0 === zU ? void 0 : zU.conn) === UU && (zU.left = !0, null === (XU = (0, nU.f)()) || void 0 === XU || XU.socketLeft(), (0, NU.o)({
+       (null === LH || void 0 === LH ? void 0 : LH.conn) === HH && (LH.left = !0, null === (BH = (0, DH.i)()) || void 0 === BH || BH.socketLeft(), (0, GH.p)({
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8334` → after: `L8640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8640) · [Before (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8334)

```diff
-       }), UX.g) : uD())
+       }), HB.f) : NC())
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8344` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8650) · [Before (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8344)

```diff
-         yU = "open" === XU ? QU.writeOpen(zU, cU) : QU.writeClose(zU, cU), yU || UU.crash(wz.t, `a socket ${XU} did not fit the net-in ring`)
+         rH = "open" === BH ? SH.writeOpen(LH, AH) : SH.writeClose(LH, AH), rH || HH.crash(RL.q, `a socket ${BH} did not fit the net-in ring`)
```
