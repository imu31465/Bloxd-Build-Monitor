# Changed — Bundle Modifications Report (Part 116 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `116 / 116` (**106** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 115](part-115.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/main.js` (1728 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1623. `bundles/bloxd.io/main.js` (Changed code · before: `L25136-L25140` → after: `L25430-L25461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25430-L25461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25430-L25461) · [Before (L25136-L25140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25136-L25140)

```diff
-                     function wV(...eV) {
-                       function xV(...VV) {
-                         for (zV(VV[PV[12]] = PV[0], VV[PV[15]] = 'A#XK@k.9vfriUn?%|}`u1t{ZSl:"wyD8qpB+&(5])oH;L=IVT2EcG>WN_axC*PFMgOdYz6sQej4b3h7<R^,/~$0m!J[', VV[PV[1]] = "" + (VV[PV[2]] || ""), VV[PV[73]] = VV[PV[1]].length, VV[PV[9]] = [], VV[PV[57]] = PV[2], VV[PV[76]] = PV[2 … [truncated]
-                           if (VV[-PV[74]] = VV[PV[15]].indexOf(VV[PV[1]][VV[PV[28]]]), VV[-PV[74]] !== -PV[0])
-                             if (VV[-PV[75]] < PV[2]) VV[-PV[75]] = VV[-PV[74]];
+               function LH(...HH) {
+                 switch (HH[VH[12]] = VH[2], ((HH[VH[1]] & VH[39]) !== VH[1]) * VH[2] + (HH[VH[1]] < VH[1]) * VH[0]) {
+                   case VH[1]:
+                     return [HH[VH[1]] % VH[39], Math.trunc(HH[VH[1]] / VH[40])];
+                   case VH[2]:
+                     return [HH[VH[1]] % VH[39] - VH[39], Math.trunc(HH[VH[1]] / VH[40]) + VH[2]];
+                   case VH[0]:
+                     return [((HH[VH[1]] + VH[39]) % VH[39] + VH[39]) % VH[39], Math.round(HH[VH[1]] / VH[40])];
+                   case VH[21]:
+                     return [HH[VH[1]] % VH[39], Math.trunc(HH[VH[1]] / VH[40])]
+                 }
+               }
+               HH[VH[12]] = VH[1], kH(HH[VH[41]] = BH([VH[0], VH[10]]), HH[VH[2]] = BH([VH[2], VH[0]]), HH[VH[42]] = HH[VH[41]] + HH[VH[2]], HH[VH[21]] = HH[VH[42]] - HH[VH[2]], HH[VH[10]] = HH[VH[21]] * VH[0], HH[VH[8]] = HH[VH[10]] / VH[0], console.log(LH(HH[VH[42]])), console.l … [truncated]
+             }
+             oH(VH[37]) in bH && IH();
+             const fH = window[oH(VH[43])];
+ ... (16 more added lines; see GitHub link above)
```

#### 1624. `bundles/bloxd.io/main.js` (Changed code · before: `L25142` → after: `L25463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25463) · [Before (L25142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25142)

```diff
-                               zV(VV[-PV[75]] += VV[-PV[74]] * PV[30], VV[PV[57]] |= VV[-PV[75]] << VV[PV[76]], VV[PV[76]] += (VV[-PV[75]] & PV[32]) > PV[33] ? PV[34] : PV[35]);
+                               kH(HH[VH[47]] += HH[VH[6]] * VH[33], HH[-VH[48]] |= HH[VH[47]] << HH[VH[9]], HH[VH[9]] += (HH[VH[47]] & VH[36]) > VH[37] ? VH[13] : VH[38]);
```

#### 1625. `bundles/bloxd.io/main.js` (Changed code · before: `L25144-L25173` → after: `L25465-L25470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25465-L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25465-L25470) · [Before (L25144-L25173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25144-L25173)

```diff
-                                 zV(VV[PV[9]].push(VV[PV[57]] & PV[11]), VV[PV[57]] >>= PV[10], VV[PV[76]] -= PV[10])
-                               } while (VV[PV[76]] > PV[24]);
-                               VV[-PV[75]] = -PV[0]
-                             } return VV[-PV[75]] > -PV[0] && VV[PV[9]].push((VV[PV[57]] | VV[-PV[75]] << VV[PV[76]]) & PV[11]), NV(VV[PV[9]])
-                       }
- 
-                       function JV(...VV) {
-                         return VV[PV[12]] = PV[0], typeof kV[VV[PV[2]]] === PV[17] ? kV[VV[PV[2]]] = xV(bV[VV[PV[2]]]) : kV[VV[PV[2]]]
-                       }
-                       for (eV[PV[12]] = PV[0], zV(eV[PV[0]] = JV(PV[66]) + JV(123) + JV(124) + JV(125), eV[PV[1]] = "", eV[PV[4]] = eV[PV[2]].length), eV[PV[21]] = PV[2]; eV[PV[21]] < eV[PV[4]]; eV[PV[21]] += PV[4])
-                         for (eV[-PV[55]] = eV[PV[2]].charCodeAt(eV[PV[21]]) << PV[63] | (eV[PV[21]] + PV[0] < eV[PV[4]] ? eV[PV[2]].charCodeAt(eV[PV[21]] + PV[0]) << PV[10] : PV[2]) | (eV[PV[21]] + PV[1] < eV[PV[4]] ? eV[PV[2]].charCodeAt(eV[PV[21]] + PV[1]) : PV[2]), eV[PV[53]]  … [truncated]
-                       return eV[PV[1]]
-                     }
- 
-                     function ZV(...VV) {
-                       var eV, xV, JV, YV;
- ... (14 more removed lines; see GitHub link above)
+                                 kH(HH[VH[10]].push(HH[-VH[48]] & VH[11]), HH[-VH[48]] >>= VH[3], HH[VH[9]] -= VH[3])
+                               } while (HH[VH[9]] > VH[7]);
+                               HH[VH[47]] = -VH[2]
+                             } HH[VH[47]] > -VH[2] && HH[VH[10]].push((HH[-VH[48]] | HH[VH[47]] << HH[VH[9]]) & VH[11]);
+                         return OH(HH[VH[10]])
+                       }(QH[HH]) : uH[HH]
```

#### 1626. `bundles/bloxd.io/main.js` (Changed code · before: `L25175-L25267` → after: `L25472-L25474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25472-L25474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25472-L25474) · [Before (L25175-L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25175-L25267)

```diff
- 
-                     function rV(...VV) {
-                       for (zV(VV[PV[12]] = PV[0], VV[-PV[84]] = Array(VV[PV[2]].length >> PV[1])), VV[PV[19]] = PV[2]; VV[PV[19]] < VV[-PV[84]].length; VV[PV[19]]++) VV[-PV[84]][VV[PV[19]]] = PV[2];
-                       for (VV[PV[19]] = PV[2]; VV[PV[19]] < VV[PV[2]].length * PV[10]; VV[PV[19]] += PV[10]) VV[-PV[84]][VV[PV[19]] >> PV[48]] |= (VV[PV[2]].charCodeAt(VV[PV[19]] / PV[10]) & PV[11]) << PV[87] - VV[PV[19]] % PV[86];
-                       return VV[-PV[84]]
-                     }
- 
-                     function EV(...VV) {
-                       for (zV(VV[PV[12]] = PV[0], VV[-PV[5]] = ""), VV[PV[85]] = PV[2]; VV[PV[85]] < VV[PV[2]].length * PV[86]; VV[PV[85]] += PV[10]) VV[-PV[5]] += String.fromCharCode(VV[PV[2]][VV[PV[85]] >> PV[48]] >>> PV[87] - VV[PV[85]] % PV[86] & PV[11]);
-                       return VV[-PV[5]]
-                     }
- 
-                     function BV(...VV) {
-                       return VV[PV[12]] = PV[1], VV[PV[2]] >>> VV[PV[0]] | VV[PV[2]] << PV[86] - VV[PV[0]]
-                     }
- 
- ... (77 more removed lines; see GitHub link above)
+                     return void 0 === await HH() ? BH(95) + "l)" : ""
+                   })(), VH[49]
+                 }), (0, tH.h)()
```

#### 1627. `bundles/bloxd.io/main.js` (Changed code · before: `L25276` → after: `L25483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25483) · [Before (L25276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25276)

```diff
-         }, , , , (VV, eV, xV) => {
+         }, , (HH, BH, LH) => {
```

#### 1628. `bundles/bloxd.io/main.js` (Changed code · before: `L25280-L25281` → after: `L25487-L25488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25487-L25488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25487-L25488) · [Before (L25280-L25281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25280-L25281)

```diff
-             g: () => JV,
-             i: () => YV
+             e: () => AH,
+             h: () => rH
```

#### 1629. `bundles/bloxd.io/main.js` (Changed code · before: `L25284-L25299` → after: `L25491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25491) · [Before (L25284-L25299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25284-L25299)

```diff
-             const vV = [85, 0, 1, 228, 235, "a", 9, "g", "e", 4, "d", 8, 255, "length", 166, "c", "undefined", void 0, 2, 205, 63, 6, "fromCodePoint", 7, 12, "push", "b", 18, 76, "i", 91, 187, 8191, 88, 13, 14, 3, 104, 227, 172, 168, null, 229, "v2", 5, "h", 36, 22, 30, 20, 206,  … [truncated]
- 
-             function rV(...xV) {
-               return xV[vV[13]] = vV[2], typeof VV[xV[vV[1]]] === vV[16] ? VV[xV[vV[1]]] = function(...VV) {
-                 for (jV(VV[vV[13]] = vV[2], VV[vV[5]] = ':kBcSXNaMAoHDTu]!@Ex8i3tV9+esLZv$W_C)wp(*YUR"F};|={nQOf^/%2[jG7r~P<J6y0?.,I5&ldb4m1h#>qz`Kg', VV[-vV[0]] = "" + (VV[vV[1]] || ""), VV[-vV[4]] = VV[-vV[0]].length, VV[vV[10]] = [], VV[vV[8]] = vV[1], VV[vV[9]] = vV[1], VV[vV … [truncated]
-                   if (VV[vV[6]] = VV[vV[5]].indexOf(VV[-vV[0]][VV[-vV[3]]]), VV[vV[6]] !== -vV[2])
-                     if (VV[vV[7]] < vV[1]) VV[vV[7]] = VV[vV[6]];
-                     else {
-                       jV(VV[vV[7]] += VV[vV[6]] * vV[30], VV[vV[8]] |= VV[vV[7]] << VV[vV[9]], VV[vV[9]] += (VV[vV[7]] & vV[32]) > vV[33] ? vV[34] : vV[35]);
-                       do {
-                         jV(VV[vV[10]].push(VV[vV[8]] & vV[12]), VV[vV[8]] >>= vV[11], VV[vV[9]] -= vV[11])
-                       } while (VV[vV[9]] > vV[23]);
-                       VV[vV[7]] = -vV[2]
-                     } return VV[vV[7]] > -vV[2] && VV[vV[10]].push((VV[vV[8]] | VV[vV[7]] << VV[vV[9]]) & vV[12]), kV(VV[vV[10]])
-               }(eV[xV[vV[1]]]) : VV[xV[vV[1]]]
-             }
+             const GH = [0, 1, 8, 255, "length", 240, "c", 209, "a", 4, "undefined", void 0, 115, 63, 218, 6, "fromCodePoint", 7, 12, "push", "v2", 3, "b", 48, 205, 91, 5, 8191, 88, 13, 14, 187, 120, 127, !0, 128, 121, 122, "ty", 123, 124, 41, 158, 9, "g", "f", 118, 105, 35, "e",  … [truncated]
```

#### 1630. `bundles/bloxd.io/main.js` (Changed code · before: `L25302` → after: `L25494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25494) · [Before (L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25302)

```diff
-               return VV[vV[13]] = vV[2], typeof yV !== vV[16] && yV ? (new yV).decode(new pV(VV[vV[1]])) : typeof QV !== vV[16] && QV ? QV.from(VV[vV[1]]).toString("utf-8") : ZV(VV[vV[1]])
+               return HH[GH[4]] = GH[1], typeof hH !== GH[10] && hH ? (new hH).decode(new tH(HH[GH[0]])) : typeof zH !== GH[10] && zH ? zH.from(HH[GH[0]]).toString("utf-8") : XH(HH[GH[0]])
```

#### 1631. `bundles/bloxd.io/main.js` (Changed code · before: `L25306-L25307` → after: `L25498-L25499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25498-L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25498-L25499) · [Before (L25306-L25307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25306-L25307)

```diff
-             jV(VV = {}, eV = ["{Ax.lFOrLir,cc9t}7$A:#GCA2B.Uui_;Rclx{4VPD`DFS", "T6W5a7/6#f4rQcOs}+0vXIPk", "F7<nLQxOj@{Ed9rtlvFaB#&*`Pj/tB2Y+6>&E", "bnSalh5nI@2,2u~LNk", "3];s<}I27M", "R6DI`%NZou1{jh:ZXS$Ne[=T$<T1`[&(@k", ">[wS,bex~Da1@|@e:=4,^(NZWEX1_XT88k", 'FwOv.|;;2Hc5"e=eQA … [truncated]
-               jV(VV[vV[13]] = vV[1], VV[vV[5]] = [function() {
+             MH(HH = {}, BH = ["K)Rquq|~*i`$WPi&5$)C%", 'ic|CG_SZ0iTM)"Q', '3yzOqP.7.!u2""A%HG2eb?_gkd@h&Pa)~2T<^[e=i!9Kg0O)c>TvhDtNd]', ',WMQ>Y)imngwF"CN311s|(qBY.}BS8FdCS3&@B<g}Vo5LPEKn]NYme1d)>%', "h@(lJeA", "cX,_g:yOWhfekNT%9Bw+NMk|Mjts:%OG(z7DxyN~<gBBe$<vZ)hQC3;dZSAtT", "(3_v … [truncated]
+               MH(HH[GH[4]] = GH[0], HH[GH[8]] = [function() {
```

#### 1632. `bundles/bloxd.io/main.js` (Changed code · before: `L25315` → after: `L25507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25507) · [Before (L25315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25315)

```diff
-               }], VV[vV[14]] = vV[17], VV[vV[15]] = []);
+               }], HH[GH[5]] = GH[11], HH[GH[6]] = []);
```

#### 1633. `bundles/bloxd.io/main.js` (Changed code · before: `L25317` → after: `L25509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25509) · [Before (L25317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25317)

```diff
-                 jV(VV[vV[14]] = Object, VV[vV[15]][vV[25]]("".__proto__.constructor.name))
+                 MH(HH[GH[5]] = Object, HH[GH[6]][GH[19]]("".__proto__.constructor.name))
```

#### 1634. `bundles/bloxd.io/main.js` (Changed code · before: `L25319-L25322` → after: `L25511-L25514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25511-L25514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25511-L25514) · [Before (L25319-L25322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25319-L25322)

```diff
-               VV: for (VV[vV[10]] = vV[1]; VV[vV[10]] < VV[vV[5]][vV[13]]; VV[vV[10]]++) try {
-                 for (VV[vV[14]] = VV[vV[5]][VV[vV[10]]](), VV[vV[9]] = vV[1]; VV[vV[9]] < VV[vV[15]][vV[13]]; VV[vV[9]]++)
-                   if (typeof VV[vV[14]][VV[vV[15]][VV[vV[9]]]] === vV[16]) continue VV;
-                 return VV[vV[14]]
+               HH: for (HH[-GH[7]] = GH[0]; HH[-GH[7]] < HH[GH[8]][GH[4]]; HH[-GH[7]]++) try {
+                 for (HH[GH[5]] = HH[GH[8]][HH[-GH[7]]](), HH[GH[9]] = GH[0]; HH[GH[9]] < HH[GH[6]][GH[4]]; HH[GH[9]]++)
+                   if (typeof HH[GH[5]][HH[GH[6]][HH[GH[9]]]] === GH[10]) continue HH;
+                 return HH[GH[5]]
```

#### 1635. `bundles/bloxd.io/main.js` (Changed code · before: `L25324-L25326` → after: `L25516-L25519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25516-L25519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25516-L25519) · [Before (L25324-L25326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25324-L25326)

```diff
-               return VV[vV[14]] || this
-             }() || {}, yV = xV.TextDecoder, pV = xV.Uint8Array, QV = xV.nZ, nV = xV.String || String, wV = xV.Array || Array, ZV = function(...VV) {
-               return jV(VV[vV[13]] = vV[1], VV[vV[5]] = new wV(128), VV[vV[26]] = nV[vV[22]] || nV.fromCharCode, VV[vV[15]] = []),
+               return HH[GH[5]] || this
+             }() || {}, hH = LH.TextDecoder, tH = LH.Uint8Array, zH = LH.rX, CH = LH.String || String, EH = LH.Array || Array, XH = function() {
+               var HH, BH, LH = new EH(GH[35]);
+               return MH(HH = CH[GH[16]] || CH.fromCharCode, BH = []),
```

#### 1636. `bundles/bloxd.io/main.js` (Changed code · before: `L25328-L25329` → after: `L25521-L25522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25521-L25522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25521-L25522) · [Before (L25328-L25329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25328-L25329)

```diff
-                   for (jV(eV[vV[13]] = vV[2], eV[vV[19]] = vV[17], eV[vV[18]] = vV[17], eV[vV[15]] = eV[vV[1]][vV[13]], VV[vV[15]][vV[13]] = vV[1]), eV[vV[10]] = vV[1]; eV[vV[10]] < eV[vV[15]];) jV(eV[vV[18]] = eV[vV[1]][eV[vV[10]]++], eV[vV[18]] <= 127 ? eV[vV[19]] = eV[vV[18]]  … [truncated]
-                   return VV[vV[15]].join("")
+                   for (MH(AH[GH[4]] = GH[1], AH[GH[1]] = GH[11], AH[-GH[14]] = GH[11], AH[-GH[13]] = AH[GH[0]][GH[4]], BH[GH[4]] = GH[0]), AH[-GH[12]] = GH[0]; AH[-GH[12]] < AH[-GH[13]];) MH(AH[-GH[14]] = AH[GH[0]][AH[-GH[12]]++], AH[-GH[14]] <= GH[33] ? AH[GH[1]] = AH[-GH[14]] : … [truncated]
+                   return BH.join("")
```

#### 1637. `bundles/bloxd.io/main.js` (Changed code · before: `L25332-L25337` → after: `L25525-L25533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25525-L25533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25525-L25533) · [Before (L25332-L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25332-L25337)

```diff
-             let EV = vV[43];
-             JV = (...xV) => (xV[vV[13]] = vV[1], rV(vV[37]) + "Z" in bV && function(...xV) {
-               function JV(...VV) {
-                 for (jV(VV[vV[13]] = vV[2], VV[vV[5]] = 'KvtVkXGfobdaQL8ip%;x2./0u|=w`yZY&,9WONzms5#"A{j][D3M+:?$InF6}U<BqC^!(eT>hc~rg1PSJ@HR_47)El*', VV[vV[18]] = "" + (VV[vV[1]] || ""), VV[vV[15]] = VV[vV[18]].length, VV[vV[9]] = [], VV[vV[27]] = vV[1], VV[-vV[31]] = vV[1], VV[ … [truncated]
-                   if (VV[vV[29]] = VV[vV[5]].indexOf(VV[vV[18]][VV[-vV[28]]]), VV[vV[29]] !== -vV[2])
-                     if (VV[vV[23]] < vV[1]) VV[vV[23]] = VV[vV[29]];
+             let QH = GH[20];
+             AH = () => QH;
+             const WH = globalThis[function(...LH) {
+               return LH[GH[4]] = GH[1], typeof HH[LH[GH[0]]] === GH[10] ? HH[LH[GH[0]]] = function(HH) {
+                 var BH, LH, AH, rH, SH, hH, tH;
+                 for (MH(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GH[0], SH = GH[0], hH = -GH[1]), tH = GH[0]; tH < LH; tH++) {
+                   var zH = 'AT08^HOQjXs.]nhS"!dg5oRm%LcvC&t9lFK*N);a=bUGpW|ZE_D<qf>6#iV3$My@kzrI1w2+P?B7eY4,~:(x`{[u}J/'.indexOf(BH[tH]);
+                   if (zH !== -GH[1])
+                     if (hH < GH[0]) hH = zH;
```

#### 1638. `bundles/bloxd.io/main.js` (Changed code · before: `L25339` → after: `L25535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25535) · [Before (L25339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25339)

```diff
-                       jV(VV[vV[23]] += VV[vV[29]] * vV[30], VV[vV[27]] |= VV[vV[23]] << VV[-vV[31]], VV[-vV[31]] += (VV[vV[23]] & vV[32]) > vV[33] ? vV[34] : vV[35]);
+                       MH(hH += zH * GH[25], rH |= hH << SH, SH += (hH & GH[27]) > GH[28] ? GH[29] : GH[30]);
```

#### 1639. `bundles/bloxd.io/main.js` (Changed code · before: `L25341-L25427` → after: `L25537-L25540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25537-L25540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25537-L25540) · [Before (L25341-L25427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25341-L25427)

```diff
-                         jV(VV[vV[9]].push(VV[vV[27]] & vV[12]), VV[vV[27]] >>= vV[11], VV[-vV[31]] -= vV[11])
-                       } while (VV[-vV[31]] > vV[23]);
-                       VV[vV[23]] = -vV[2]
-                     } return VV[vV[23]] > -vV[2] && VV[vV[9]].push((VV[vV[27]] | VV[vV[23]] << VV[-vV[31]]) & vV[12]), kV(VV[vV[9]])
-               }
- 
-               function YV(...xV) {
-                 return xV[vV[13]] = vV[2], typeof VV[xV[vV[1]]] === vV[16] ? VV[xV[vV[1]]] = JV(eV[xV[vV[1]]]) : VV[xV[vV[1]]]
-               }
-               xV[vV[13]] = vV[1];
-               const UV = require("path"),
-                 {
-                   version: yV
-                 } = require("../../package"),
-                 {
-                   version: pV
- ... (71 more removed lines; see GitHub link above)
+                         MH(AH.push(rH & GH[3]), rH >>= GH[2], SH -= GH[2])
+                       } while (SH > GH[17]);
+                       hH = -GH[1]
+                     }
```

#### 1640. `bundles/bloxd.io/main.js` (Changed code · before: `L25429` → after: `L25542-L25547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25542-L25547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25542-L25547) · [Before (L25429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25429)

```diff
-               }), vV[59]) {
+                 return hH > -GH[1] && AH.push((rH | hH << SH) & GH[3]), YH(AH)
+               }(BH[LH[GH[0]]]) : HH[LH[GH[0]]]
+             }(119)];
+             if (MH(SH = () => WH, rH = () => {
+                 QH === GH[20] && (QH = "v3")
+               }), GH[34]) {
```

#### 1641. `bundles/bloxd.io/main.js` (Changed code · before: `L25431-L25433` → after: `L25549-L25551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25549-L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25549-L25551) · [Before (L25431-L25433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25431-L25433)

```diff
-                 for (jV(VV[vV[13]] = vV[2], VV[vV[2]] = '8_1(,]7<u!3m#`V/s.f:%bvGqUzt02hMZwW+cor|^a")EDdF~*OInHx9e>yX?CYBS}Ki$PL;5RT=6jg&QkJA@p[{4lN', VV[vV[26]] = "" + (VV[vV[1]] || ""), VV[vV[15]] = VV[vV[26]].length, VV[vV[10]] = [], VV[vV[44]] = vV[1], VV[vV[21]] = vV[1], VV[ … [truncated]
-                   if (VV[vV[6]] = VV[vV[2]].indexOf(VV[vV[26]][VV[vV[45]]]), VV[vV[6]] !== -vV[2])
-                     if (VV[vV[7]] < vV[1]) VV[vV[7]] = VV[vV[6]];
+                 for (MH(HH[GH[4]] = GH[1], HH[GH[1]] = ':u84>bV|O!J(vCK.f3&7*9;1@Hq6pkt]}T%{zl#g_^=XIDs$ZRQnUj[YM)o5L`i"yhFrB/ewEa+xc<PmAGN02?,W~dS', HH[GH[22]] = "" + (HH[GH[0]] || ""), HH[GH[21]] = HH[GH[22]].length, HH[-GH[31]] = [], HH[GH[26]] = GH[0], HH[GH[15]] = GH[0], HH[ … [truncated]
+                   if (HH[-GH[24]] = HH[GH[1]].indexOf(HH[GH[22]][HH[-GH[23]]]), HH[-GH[24]] !== -GH[1])
+                     if (HH[-GH[12]] < GH[0]) HH[-GH[12]] = HH[-GH[24]];
```

#### 1642. `bundles/bloxd.io/main.js` (Changed code · before: `L25435` → after: `L25553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25553) · [Before (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25435)

```diff
-                       jV(VV[vV[7]] += VV[vV[6]] * vV[30], VV[vV[44]] |= VV[vV[7]] << VV[vV[21]], VV[vV[21]] += (VV[vV[7]] & vV[32]) > vV[33] ? vV[34] : vV[35]);
+                       MH(HH[-GH[12]] += HH[-GH[24]] * GH[25], HH[GH[26]] |= HH[-GH[12]] << HH[GH[15]], HH[GH[15]] += (HH[-GH[12]] & GH[27]) > GH[28] ? GH[29] : GH[30]);
```

#### 1643. `bundles/bloxd.io/main.js` (Changed code · before: `L25437-L25440` → after: `L25555-L25558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25555-L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25555-L25558) · [Before (L25437-L25440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25437-L25440)

```diff
-                         jV(VV[vV[10]].push(VV[vV[44]] & vV[12]), VV[vV[44]] >>= vV[11], VV[vV[21]] -= vV[11])
-                       } while (VV[vV[21]] > vV[23]);
-                       VV[vV[7]] = -vV[2]
-                     } return VV[vV[7]] > -vV[2] && VV[vV[10]].push((VV[vV[44]] | VV[vV[7]] << VV[vV[21]]) & vV[12]), kV(VV[vV[10]])
+                         MH(HH[-GH[31]].push(HH[GH[26]] & GH[3]), HH[GH[26]] >>= GH[2], HH[GH[15]] -= GH[2])
+                       } while (HH[GH[15]] > GH[17]);
+                       HH[-GH[12]] = -GH[1]
+                     } return HH[-GH[12]] > -GH[1] && HH[-GH[31]].push((HH[GH[26]] | HH[-GH[12]] << HH[GH[15]]) & GH[3]), YH(HH[-GH[31]])
```

#### 1644. `bundles/bloxd.io/main.js` (Changed code · before: `L25444-L25500` → after: `L25562-L25578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25562-L25578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25562-L25578) · [Before (L25444-L25500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25444-L25500)

```diff
-                 return xV[vV[13]] = vV[2], typeof VV[xV[vV[1]]] === vV[16] ? VV[xV[vV[1]]] = qV(eV[xV[vV[1]]]) : VV[xV[vV[1]]]
-               }
-               let FV = window[rV(111)];
-               Object[tV(vV[60]) + tV(vV[61]) + vV[62]](window, tV(114), {
-                 [tV(vV[64])]: (...xV) => (xV[vV[13]] = vV[1], function(...xV) {
-                   return xV[vV[13]] = vV[2], typeof VV[xV[vV[1]]] === vV[16] ? VV[xV[vV[1]]] = function(...VV) {
-                     for (jV(VV[vV[13]] = vV[2], VV[vV[48]] = '#b&axEM~Y<L%+[cP"($1D|g7.q@pR=GkTOh>s`2?86CdnVXe;B!)_wUyvJuo^iNA:lF*/S9IZW]0HzQ,mjf35}tr{K4', VV[-vV[46]] = "" + (VV[vV[1]] || ""), VV[vV[36]] = VV[-vV[46]].length, VV[vV[51]] = [], VV[-vV[49]] = vV[1], VV[vV[50]] = vV … [truncated]
-                       if (VV[vV[29]] = VV[vV[48]].indexOf(VV[-vV[46]][VV[vV[47]]]), VV[vV[29]] !== -vV[2])
-                         if (VV[vV[23]] < vV[1]) VV[vV[23]] = VV[vV[29]];
-                         else {
-                           jV(VV[vV[23]] += VV[vV[29]] * vV[30], VV[-vV[49]] |= VV[vV[23]] << VV[vV[50]], VV[vV[50]] += (VV[vV[23]] & vV[32]) > vV[33] ? vV[34] : vV[35]);
-                           do {
-                             jV(VV[vV[51]].push(VV[-vV[49]] & vV[12]), VV[-vV[49]] >>= vV[11], VV[vV[50]] -= vV[11])
-                           } while (VV[vV[50]] > vV[23]);
-                           VV[vV[23]] = -vV[2]
-                         } return VV[vV[23]] > -vV[2] && VV[vV[51]].push((VV[-vV[49]] | VV[vV[23]] << VV[vV[50]]) & vV[12]), kV(VV[vV[51]])
- ... (41 more removed lines; see GitHub link above)
+                 return LH[GH[4]] = GH[1], typeof HH[LH[GH[0]]] === GH[10] ? HH[LH[GH[0]]] = xH(BH[LH[GH[0]]]) : HH[LH[GH[0]]]
+               }
+               let PH = window[vH(GH[32])];
+               Object[vH(GH[36]) + vH(GH[37]) + GH[38]](window, vH(GH[32]), {
+                 [vH(GH[39])]: () => PH,
+                 [vH(GH[40])]: (...HH) => {
+                   HH[GH[4]] = GH[1], vH(125) in uH && function(...HH) {
+                     MH(HH[GH[4]] = GH[0], HH[GH[8]] = function(...BH) {
+                       return MH(BH[GH[4]] = 2, BH[GH[8]] = [], BH[GH[21]] = BH[GH[0]].length, BH[GH[0]].sort(((HH, BH) => HH - BH)), HH[GH[1]](BH[GH[8]], [], GH[0], BH[GH[21]], BH[GH[0]], BH[GH[1]])), BH[GH[8]]
+                     }, HH[GH[1]] = function(BH, LH, AH, rH, SH, hH) {
+                       var tH, zH = null;
+                       if (!(hH < GH[0])) {
+                         if (hH === GH[0]) return BH.push(LH);
+                         for (tH = AH; tH < rH && !(SH[tH] > hH); tH++) tH > AH && SH[tH] === SH[tH - GH[1]] || MH(zH = Array.from(LH), zH.push(SH[tH]), HH[GH[1]](BH, zH, tH + GH[1], rH, SH, hH - SH[tH]))
+                       }
+                     }, console.log(HH[GH[8]]))
+ ... (1 more added lines; see GitHub link above)
```

#### 1645. `bundles/bloxd.io/main.js` (Changed code · before: `L25502` → after: `L25580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25580) · [Before (L25502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25502)

```diff
-                 [tV(vV[72]) + tV(vV[73])]: vV[59]
+                 [vH(GH[53]) + vH(GH[33])]: GH[34]
```

#### 1646. `bundles/bloxd.io/main.js` (Changed code · before: `L25504-L25512` → after: `L25582-L25590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25582-L25590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25582-L25590) · [Before (L25504-L25512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25504-L25512)

```diff
-               let TV = window[tV(vV[63])];
-               Object[tV(vV[60]) + tV(vV[61]) + vV[62]](window, tV(vV[63]), {
-                 [tV(vV[64])]: () => TV,
-                 [tV(vV[65])]: xV => {
-                   function JV(xV) {
-                     return typeof VV[xV] === vV[16] ? VV[xV] = function(...VV) {
-                       for (jV(VV[vV[13]] = vV[2], VV[vV[5]] = '?35_+.yv)}`z*><7eWD@S!QqOVAlJI$2K1][=pm/Ths9;Ei8xb6td%rPcBMfgX(ouL&kRaGC{|jnFHwY:~,Z#U4^N0"', VV[-vV[66]] = "" + (VV[vV[1]] || ""), VV[vV[36]] = VV[-vV[66]].length, VV[vV[68]] = [], VV[vV[8]] = vV[1], VV[vV[67]] = vV[ … [truncated]
-                         if (VV[vV[6]] = VV[vV[5]].indexOf(VV[-vV[66]][VV[vV[45]]]), VV[vV[6]] !== -vV[2])
-                           if (VV[vV[23]] < vV[1]) VV[vV[23]] = VV[vV[6]];
+               let TH = window[vH(GH[35])];
+               Object[vH(GH[36]) + vH(GH[37]) + GH[38]](window, vH(GH[35]), {
+                 [vH(GH[39])]: () => TH,
+                 [vH(GH[40])]: (...LH) => {
+                   if (LH[GH[4]] = GH[1], QH === GH[20]) {
+                     function AH(...HH) {
+                       for (MH(HH[GH[4]] = GH[1], HH[GH[8]] = '76@*&=|%]:5<SA>nFx"D~+RWsZo_cjfvQ0B$3{bru)l4ti[ykhPJUXgTz/,!^}NLVa1#OEq?I(CdwH8.GM;Ke9pY`m2', HH[GH[41]] = "" + (HH[GH[0]] || ""), HH[GH[21]] = HH[GH[41]].length, HH[-GH[46]] = [], HH[GH[26]] = GH[0], HH[GH[45]] = GH[0 … [truncated]
+                         if (HH[GH[43]] = HH[GH[8]].indexOf(HH[GH[41]][HH[-GH[42]]]), HH[GH[43]] !== -GH[1])
+                           if (HH[GH[44]] < GH[0]) HH[GH[44]] = HH[GH[43]];
```

#### 1647. `bundles/bloxd.io/main.js` (Changed code · before: `L25514` → after: `L25592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25592) · [Before (L25514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25514)

```diff
-                             jV(VV[vV[23]] += VV[vV[6]] * vV[30], VV[vV[8]] |= VV[vV[23]] << VV[vV[67]], VV[vV[67]] += (VV[vV[23]] & vV[32]) > vV[33] ? vV[34] : vV[35]);
+                             MH(HH[GH[44]] += HH[GH[43]] * GH[25], HH[GH[26]] |= HH[GH[44]] << HH[GH[45]], HH[GH[45]] += (HH[GH[44]] & GH[27]) > GH[28] ? GH[29] : GH[30]);
```

#### 1648. `bundles/bloxd.io/main.js` (Changed code · before: `L25516-L25546` → after: `L25594-L25646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25594-L25646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25594-L25646) · [Before (L25516-L25546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25516-L25546)

```diff
-                               jV(VV[vV[68]].push(VV[vV[8]] & vV[12]), VV[vV[8]] >>= vV[11], VV[vV[67]] -= vV[11])
-                             } while (VV[vV[67]] > vV[23]);
-                             VV[vV[23]] = -vV[2]
-                           } return VV[vV[23]] > -vV[2] && VV[vV[68]].push((VV[vV[8]] | VV[vV[23]] << VV[vV[67]]) & vV[12]), kV(VV[vV[68]])
-                     }(eV[xV]) : VV[xV]
-                   }
-                   if (JV(122) in bV && function(...VV) {
-                       var eV;
-                       jV(VV[vV[13]] = vV[1], eV = function(...VV) {
-                         jV(VV[vV[13]] = vV[2], this.Jv = VV[vV[1]], this.length = vV[1], this.map = {}, this.head = vV[41], this.tail = vV[41])
-                       }, eV.prototype.get = function(...VV) {
-                         var eV;
-                         return jV(VV[vV[13]] = vV[2], eV = this.map[VV[vV[1]]]), eV ? (this.remove(eV), this.insert(eV.key, eV.val), eV.val) : -vV[2]
-                       }, eV.prototype.put = function(...VV) {
-                         jV(VV[vV[13]] = vV[18], this.map[VV[vV[1]]] ? (this.remove(this.map[VV[vV[1]]]), this.insert(VV[vV[1]], VV[vV[2]])) : this.length === this.Jv ? (this.remove(this.head), this.insert(VV[vV[1]], VV[vV[2]])) : (this.insert(VV[vV[1]], VV[vV[2]]), this.length++) … [truncated]
-                       }, eV.prototype.remove = function(...VV) {
- ... (15 more removed lines; see GitHub link above)
+                               MH(HH[-GH[46]].push(HH[GH[26]] & GH[3]), HH[GH[26]] >>= GH[2], HH[GH[45]] -= GH[2])
+                             } while (HH[GH[45]] > GH[17]);
+                             HH[GH[44]] = -GH[1]
+                           } return HH[GH[44]] > -GH[1] && HH[-GH[46]].push((HH[GH[26]] | HH[GH[44]] << HH[GH[45]]) & GH[3]), YH(HH[-GH[46]])
+                     }
+ 
+                     function rH(...LH) {
+                       return LH[GH[4]] = GH[1], typeof HH[LH[GH[0]]] === GH[10] ? HH[LH[GH[0]]] = AH(BH[LH[GH[0]]]) : HH[LH[GH[0]]]
+                     }
+ 
+                     function SH(...LH) {
+                       function AH(LH) {
+                         return typeof HH[LH] === GH[10] ? HH[LH] = function(...HH) {
+                           for (MH(HH[GH[4]] = GH[1], HH[-GH[47]] = 'T%qanQ@kU4g[IhR!ALp*BV$j_8yoxE.?JGC0&f{;(t"b31DdYFOMs6lKW}#`<+NcHeS,/>wP:|X^=Zv9rm)]i~752uz', HH[-GH[7]] = "" + (HH[GH[0]] || ""), HH[GH[6]] = HH[-GH[7]].length, HH[-GH[51]] = [], HH[GH[49]] = GH[0], HH[-GH[50]]  … [truncated]
+                             if (HH[-GH[48]] = HH[-GH[47]].indexOf(HH[-GH[7]][HH[GH[2]]]), HH[-GH[48]] !== -GH[1])
+                               if (HH[GH[24]] < GH[0]) HH[GH[24]] = HH[-GH[48]];
+ ... (37 more added lines; see GitHub link above)
```

#### 1649. `bundles/bloxd.io/main.js` (Changed code · before: `L25548` → after: `L25648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25648) · [Before (L25548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25548)

```diff
-                     JV(123) in bV && YV(), EV = "v5"
+                     rH(129) in uH && SH(), QH = "v5"
```

#### 1650. `bundles/bloxd.io/main.js` (Changed code · before: `L25550` → after: `L25650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25650) · [Before (L25550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25550)

```diff
-                   TV = xV
+                   TH = LH[GH[0]]
```

#### 1651. `bundles/bloxd.io/main.js` (Changed code · before: `L25552` → after: `L25652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25652) · [Before (L25552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25552)

```diff
-                 [tV(vV[72]) + tV(vV[73])]: vV[59]
+                 [vH(GH[53]) + vH(GH[33])]: GH[34]
```

#### 1652. `bundles/bloxd.io/main.js` (Changed code · before: `L25560` → after: `L25660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25660) · [Before (L25560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25560)

```diff
-         }, , , , , , , (VV, eV, xV) => {
+         }, , , , , , , , (HH, BH, LH) => {
```

#### 1653. `bundles/bloxd.io/main.js` (Changed code · before: `L25563-L25564` → after: `L25663-L25664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25663-L25664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25663-L25664) · [Before (L25563-L25564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25563-L25564)

```diff
-             g: () => yV,
-             j: () => pV
+             f: () => hH,
+             g: () => tH
```

#### 1654. `bundles/bloxd.io/main.js` (Changed code · before: `L25566-L25567` → after: `L25666-L25667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25666-L25667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25666-L25667) · [Before (L25566-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25566-L25567)

```diff
-           var JV = xV(1293),
-             YV = xV(99);
+           var AH = LH(1206),
+             rH = LH(81);
```

#### 1655. `bundles/bloxd.io/main.js` (Changed code · before: `L25575` → after: `L25675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25675) · [Before (L25575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25575)

```diff
-             return null !== (xV = UV(VV, eV)) && void 0 !== xV ? xV : (0, JV.b)(VV, !YV.featureFlags.canSeeRealPlayerNames)
+             return null !== (LH = SH(HH, BH)) && void 0 !== LH ? LH : (0, AH.b)(HH, !rH.featureFlags.canSeeRealPlayerNames)
```

#### 1656. `bundles/bloxd.io/main.js` (Changed code · before: `L25583` → after: `L25683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25683) · [Before (L25583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25583)

```diff
-                 xV[JV] = "object" === typeof YV && null !== YV && "entityName" in YV ? yV(YV.entityName, eV) : String(null !== YV && void 0 !== YV ? YV : "")
+                 LH[AH] = "object" === typeof rH && null !== rH && "entityName" in rH ? hH(rH.entityName, BH) : String(null !== rH && void 0 !== rH ? rH : "")
```

#### 1657. `bundles/bloxd.io/main.js` (Changed code · before: `L25587` → after: `L25687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25687) · [Before (L25587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25587)

```diff
-         }, , , (VV, eV, xV) => {
+         }, , (HH, BH, LH) => {
```

#### 1658. `bundles/bloxd.io/main.js` (Changed code · before: `L25590-L25591` → after: `L25690-L25691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25690-L25691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25690-L25691) · [Before (L25590-L25591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25590-L25591)

```diff
-             d: () => QV,
-             f: () => yV,
+             c: () => zH,
+             e: () => hH,
```

#### 1659. `bundles/bloxd.io/main.js` (Changed code · before: `L25594` → after: `L25694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25694) · [Before (L25594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25594)

```diff
-             o: () => ZV
+             n: () => XH
```

#### 1660. `bundles/bloxd.io/main.js` (Changed code · before: `L25596-L25597` → after: `L25696-L25697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25696-L25697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25696-L25697) · [Before (L25596-L25597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25596-L25597)

```diff
-           var JV = xV(375),
-             YV = xV(1249);
+           var AH = LH(317),
+             rH = LH(1160);
```

#### 1661. `bundles/bloxd.io/main.js` (Changed code · before: `L25603` → after: `L25703-L25704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25703-L25704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25703-L25704) · [Before (L25603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25603)

```diff
-             return `${(0,JV.bc)(JV.zd)}${(0,JV.bc)(JV.Dd)}${Math.floor(Math.random()*Math.pow(10,pV))}`
+             const HH = Math.floor(Math.random() * Math.pow(10, tH));
+             return `${(0,AH.hc)(AH.Pd)}${(0,AH.hc)(AH.Rd)}${HH}`
```

#### 1662. `bundles/bloxd.io/main.js` (Changed code · before: `L25612-L25616` → after: `L25713-L25717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25713-L25717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25713-L25717) · [Before (L25612-L25616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25612-L25616)

```diff
-               QV = null === eV ? UV : `${UV}:${eV}`,
-               nV = null === eV ? yV : `${yV}:${eV}`,
-               wV = (0, YV.c)(QV, 0, JV.zd.length),
-               ZV = (0, YV.c)(nV, 0, JV.Dd.length),
-               vV = `${JV.zd[wV]}${JV.Dd[ZV]}`;
+               zH = null === BH ? SH : `${SH}:${BH}`,
+               CH = null === BH ? hH : `${hH}:${BH}`,
+               EH = (0, rH.b)(zH, 0, AH.Pd.length),
+               XH = (0, rH.b)(CH, 0, AH.Rd.length),
+               GH = `${AH.Pd[EH]}${AH.Rd[XH]}`;
```

#### 1663. `bundles/bloxd.io/main.js` (Changed code · before: `L25618` → after: `L25719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25719) · [Before (L25618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25618)

```diff
-             return `${vV}${(0,YV.c)(`${VV}:${eV}`,0,Math.pow(10,pV))}`
+             return `${GH}${(0,rH.b)(`${HH}:${BH}`,0,Math.pow(10,tH))}`
```

#### 1664. `bundles/bloxd.io/main.js` (Changed code · before: `L25634-L25637` → after: `L25735-L25738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25735-L25738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25735-L25738) · [Before (L25634-L25637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25634-L25637)

```diff
-           JV.zd.forEach((VV => {
-             if (VV.length > 7) throw new Error(`random name adjective ${VV} is too long`)
-           })), JV.Dd.forEach((VV => {
-             if (VV.length > 7) throw new Error(`random name noun ${VV} is too long`)
+           AH.Pd.forEach((HH => {
+             if (HH.length > 7) throw new Error(`random name adjective ${HH} is too long`)
+           })), AH.Rd.forEach((HH => {
+             if (HH.length > 7) throw new Error(`random name noun ${HH} is too long`)
```

#### 1665. `bundles/bloxd.io/main.js` (Changed code · before: `L25639` → after: `L25740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25740) · [Before (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25639)

```diff
-         }, , , , , , , (VV, eV, xV) => {
+         }, , , , , , (HH, BH, LH) => {
```

#### 1666. `bundles/bloxd.io/main.js` (Changed code · before: `L25641` → after: `L25742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25742) · [Before (L25641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25641)

```diff
-             e: () => wV
+             b: () => EH
```

#### 1667. `bundles/bloxd.io/main.js` (Changed code · before: `L25643-L25644` → after: `L25744-L25745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25744-L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25744-L25745) · [Before (L25643-L25644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25643-L25644)

```diff
-           var JV = xV(62),
-             YV = xV(1146),
+           var AH = LH(45),
+             rH = LH(1038),
```

#### 1668. `bundles/bloxd.io/main.js` (Changed code · before: `L25646-L25649` → after: `L25747-L25750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25747-L25750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25747-L25750) · [Before (L25646-L25649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25646-L25649)

```diff
-             yV = xV(1309),
-             pV = xV(27),
-             QV = xV(1315),
-             nV = xV(1321);
+             hH = LH(1214),
+             tH = LH(15),
+             zH = LH(1220),
+             CH = LH(1225);
```

#### 1669. `bundles/bloxd.io/main.js` (Changed code · before: `L25665` → after: `L25766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25766) · [Before (L25665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25665)

```diff
-             (0, yV.s)("popup", EV, kV ? null : xV);
+             (0, hH.r)("popup", WH, uH ? null : LH);
```

#### 1670. `bundles/bloxd.io/main.js` (Changed code · before: `L25668` → after: `L25769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25769) · [Before (L25668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25668)

```diff
-             } = (0, pV.l)(["isTouchScreen"]), qV = bV && jV;
+             } = (0, tH.m)(["isTouchScreen"]), vH = QH && xH;
```

#### 1671. `bundles/bloxd.io/main.js` (Changed code · before: `L25673` → after: `L25774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25774) · [Before (L25673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25673)

```diff
-               const xV = (0, QV.d)((xV => {
+               const LH = (0, zH.c)((LH => {
```

#### 1672. `bundles/bloxd.io/main.js` (Changed code · before: `L25678` → after: `L25779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25779) · [Before (L25678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25678)

```diff
-                 if (VV.style.setProperty("--visible-top", `${JV}px`), VV.style.setProperty("--visible-height", `${YV}px`), YV !== eV) {
+                 if (HH.style.setProperty("--visible-top", `${AH}px`), HH.style.setProperty("--visible-height", `${rH}px`), rH !== BH) {
```

#### 1673. `bundles/bloxd.io/main.js` (Changed code · before: `L25703` → after: `L25804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25804) · [Before (L25703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25703)

```diff
-                   className: `MiddleScreenPopup AnimFadeInScaleUp SmallTextLight ${ZV}`,
+                   className: `MiddleScreenPopup AnimFadeInScaleUp SmallTextLight ${XH}`,
```

#### 1674. `bundles/bloxd.io/main.js` (Changed code · before: `L25709` → after: `L25810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25810) · [Before (L25709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25709)

```diff
-         }, , , , , , , , , (VV, eV, xV) => {
+         }, , (HH, BH, LH) => {
```

#### 1675. `bundles/bloxd.io/main.js` (Changed code · before: `L25713-L25717` → after: `L25814-L25818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25814-L25818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25814-L25818) · [Before (L25713-L25717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25713-L25717)

```diff
-             g: () => vV,
-             k: () => ZV,
-             o: () => rV,
-             r: () => YV,
-             s: () => bV
+             h: () => GH,
+             i: () => XH,
+             m: () => YH,
+             q: () => rH,
+             r: () => QH
```

#### 1676. `bundles/bloxd.io/main.js` (Changed code · before: `L25719` → after: `L25820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25820) · [Before (L25719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25719)

```diff
-           var JV = xV(62);
+           var AH = LH(45);
```

#### 1677. `bundles/bloxd.io/main.js` (Changed code · before: `L25724` → after: `L25825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25825) · [Before (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25724)

```diff
-               return null === eV ? VV.id : "string" === typeof eV ? eV : eV()
+               return null === BH ? HH.id : "string" === typeof BH ? BH : BH()
```

#### 1678. `bundles/bloxd.io/main.js` (Changed code · before: `L25755` → after: `L25856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25856) · [Before (L25755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25755)

```diff
-             pV.current || (kV++, pV.current = `${VV}-${kV}`);
+             tH.current || (uH++, tH.current = `${HH}-${uH}`);
```

#### 1679. `bundles/bloxd.io/main.js` (Changed code · before: `L25776` → after: `L25877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25877) · [Before (L25776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25776)

```diff
-                   return "function" === typeof VV ? VV() : null !== VV && void 0 !== VV ? VV : xV
+                   return "function" === typeof HH ? HH() : null !== HH && void 0 !== HH ? HH : LH
```

#### 1680. `bundles/bloxd.io/main.js` (Changed code · before: `L25798` → after: `L25899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25899) · [Before (L25798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25798)

```diff
-             d: () => JV
+             c: () => AH
```

#### 1681. `bundles/bloxd.io/main.js` (Changed code · before: `L25800-L25804` → after: `L25901-L25905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25901-L25905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25901-L25905) · [Before (L25800-L25804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25800-L25804)

```diff
-         }, , , , , , (VV, eV, xV) => {
-           VV.exports = xV(1328)
-         }, , , , , , , (VV, eV, xV) => {
-           xV(72);
-           var JV = xV(62),
+         }, , , , , (HH, BH, LH) => {
+           HH.exports = LH(1234)
+         }, , , , , , , , , (HH, BH, LH) => {
+           LH(60);
+           var AH = LH(45),
```

#### 1682. `bundles/bloxd.io/main.js` (Changed code · before: `L25836` → after: `L25937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25937) · [Before (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25836)

```diff
-         }, , , , (VV, eV, xV) => {
+         }, , , , , , , (HH, BH, LH) => {
```

#### 1683. `bundles/bloxd.io/main.js` (Changed code · before: `L25842-L25844` → after: `L25943-L25944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25943-L25944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25943-L25944) · [Before (L25842-L25844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25842-L25844)

```diff
-             i: () => wV,
-             k: () => EV,
-             m: () => ZV,
+             j: () => GH,
+             l: () => EH,
```

#### 1684. `bundles/bloxd.io/main.js` (Changed code · before: `L25846` → after: `L25946-L25947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25946-L25947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25946-L25947) · [Before (L25846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25846)

```diff
-             r: () => rV
+             t: () => XH,
+             x: () => CH
```

#### 1685. `bundles/bloxd.io/main.js` (Changed code · before: `L25848-L25849` → after: `L25949-L25950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25949-L25950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25949-L25950) · [Before (L25848-L25849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25848-L25849)

```diff
-           var JV = xV(1339),
-             YV = xV(1348);
+           var AH = LH(1245),
+             rH = LH(1253);
```

#### 1686. `bundles/bloxd.io/main.js` (Changed code · before: `L25894` → after: `L25995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L25995) · [Before (L25894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25894)

```diff
-         }, , , , , , , (VV, eV, xV) => {
+         }, , , , (HH, BH, LH) => {
```

#### 1687. `bundles/bloxd.io/main.js` (Changed code · before: `L25917` → after: `L26018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26018) · [Before (L25917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25917)

```diff
-                   console.error(`Error in ${eV}:`, YV)
+                   console.error(`Error in ${BH}:`, rH)
```

#### 1688. `bundles/bloxd.io/main.js` (Changed code · before: `L25931` → after: `L26032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26032) · [Before (L25931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25931)

```diff
-         }, , , , , , , , , (VV, eV, xV) => {
+         }, , , , , , , , (HH, BH, LH) => {
```

#### 1689. `bundles/bloxd.io/main.js` (Changed code · before: `L25935` → after: `L26037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26037) · [Before (L25935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25935)

```diff
-             J: () => kV,
+             G: () => uH,
```

#### 1690. `bundles/bloxd.io/main.js` (Changed code · before: `L25941` → after: `L26042-L26043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26042-L26043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26042-L26043) · [Before (L25941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25941)

```diff
-             d: () => RV,
+             W: () => hH,
+             e: () => lH,
```

#### 1691. `bundles/bloxd.io/main.js` (Changed code · before: `L25943-L25945` → after: `L26045-L26046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26045-L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26045-L26046) · [Before (L25943-L25945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25943-L25945)

```diff
-             k: () => BV,
-             l: () => EV,
-             m: () => tV,
+             j: () => MH,
+             n: () => WH,
```

#### 1692. `bundles/bloxd.io/main.js` (Changed code · before: `L25949` → after: `L26050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26050) · [Before (L25949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25949)

```diff
-             y: () => GV
+             x: () => oH
```

#### 1693. `bundles/bloxd.io/main.js` (Changed code · before: `L25951-L25952` → after: `L26052-L26053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26052-L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26052-L26053) · [Before (L25951-L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25951-L25952)

```diff
-           var JV = xV(32),
-             YV = xV(1339);
+           var AH = LH(18),
+             rH = LH(1245);
```

#### 1694. `bundles/bloxd.io/main.js` (Changed code · before: `L25955` → after: `L26056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26056) · [Before (L25955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25955)

```diff
-             VV.left = eV ? `${eV.rect.left}px` : "0px", VV.top = eV ? `${eV.rect.top}px` : "0px", VV.right = eV ? "auto" : "0px", VV.bottom = eV ? "auto" : "0px", VV.width = eV ? `${eV.bufferSize.width}px` : "", VV.height = eV ? `${eV.bufferSize.height}px` : xV
+             HH.left = BH ? `${BH.rect.left}px` : "0px", HH.top = BH ? `${BH.rect.top}px` : "0px", HH.right = BH ? "auto" : "0px", HH.bottom = BH ? "auto" : "0px", HH.width = BH ? `${BH.bufferSize.width}px` : "", HH.height = BH ? `${BH.bufferSize.height}px` : LH
```

#### 1695. `bundles/bloxd.io/main.js` (Changed code · before: `L25961` → after: `L26062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26062) · [Before (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25961)

```diff
-             VV.transformOrigin = "0 0", VV.transform = 1 !== xV || 1 !== JV ? `scale(${xV}, ${JV})` : ""
+             HH.transformOrigin = "0 0", HH.transform = 1 !== LH || 1 !== AH ? `scale(${LH}, ${AH})` : ""
```

#### 1696. `bundles/bloxd.io/main.js` (Changed code · before: `L25970` → after: `L26071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26071) · [Before (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25970)

```diff
-               pV = VV ? eV : null
+               tH = HH ? BH : null
```

#### 1697. `bundles/bloxd.io/main.js` (Changed code · before: `L25997` → after: `L26098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26098) · [Before (L25997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L25997)

```diff
-             JV.h.QZ("gamePlayable")
+             AH.k.AX("gamePlayable")
```

#### 1698. `bundles/bloxd.io/main.js` (Changed code · before: `L26001` → after: `L26102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26102) · [Before (L26001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26001)

```diff
-             JV.h.QZ("gameJoined")
+             AH.k.AX("gameJoined")
```

#### 1699. `bundles/bloxd.io/main.js` (Changed code · before: `L26005` → after: `L26106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26106) · [Before (L26005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26005)

```diff
-             JV.h.QZ("wasmLoadStep", {
+             AH.k.AX("wasmLoadStep", {
```

#### 1700. `bundles/bloxd.io/main.js` (Changed code · before: `L26013` → after: `L26114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26114) · [Before (L26013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26013)

```diff
-             JV.h.QZ("viewWait", VV)
+             AH.k.AX("viewWait", HH)
```

#### 1701. `bundles/bloxd.io/main.js` (Changed code · before: `L26017` → after: `L26118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26118) · [Before (L26017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26017)

```diff
-             JV.h.QZ("joinAdHoldEnded")
+             AH.k.AX("joinAdHoldEnded")
```

#### 1702. `bundles/bloxd.io/main.js` (Changed code · before: `L26029` → after: `L26130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26130) · [Before (L26029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26029)

```diff
-               }, this.label = `a shell ${VV} listener`
+               }, this.label = `a shell ${HH} listener`
```

#### 1703. `bundles/bloxd.io/main.js` (Changed code · before: `L26073` → after: `L26174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26174) · [Before (L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26073)

```diff
-         }, , , , , (VV, eV, xV) => {
+         }, , , , , , , (HH, BH, LH) => {
```

#### 1704. `bundles/bloxd.io/main.js` (Changed code · before: `L26079` → after: `L26180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26180) · [Before (L26079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26079)

```diff
-             lb: () => sV,
+             TQ: () => sH,
```

#### 1705. `bundles/bloxd.io/main.js` (Changed code · before: `L26089-L26097` → after: `L26190-L26198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26190-L26198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26190-L26198) · [Before (L26089-L26097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26089-L26097)

```diff
-           var JV = xV(228),
-             YV = xV(660),
-             UV = xV(1238),
-             yV = xV(717),
-             pV = xV(707),
-             QV = xV(138),
-             nV = xV(1356),
-             wV = xV(701),
-             ZV = xV(1364);
+           var AH = LH(193),
+             rH = LH(625),
+             SH = LH(1139),
+             hH = LH(673),
+             tH = LH(666),
+             zH = LH(120),
+             CH = LH(1265),
+             EH = LH(656),
+             XH = LH(1270);
```

#### 1706. `bundles/bloxd.io/main.js` (Changed code · before: `L26111` → after: `L26212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26212) · [Before (L26111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26111)

```diff
-             return jV() && ((0, JV.h)() || VV() < rV)
+             return xH() && ((0, AH.e)() || HH() < YH)
```

#### 1707. `bundles/bloxd.io/main.js` (Changed code · before: `L26113-L26114` → after: `L26214-L26215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26214-L26215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26214-L26215) · [Before (L26113-L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26113-L26114)

```diff
-           const tV = qV() || jV() && (0, yV.m)(),
-             FV = null === yV.o ? 10 : 50,
+           const PH = vH() || xH() && (0, hH.o)(),
+             TH = null === hH.r ? 10 : 50,
```

#### 1708. `bundles/bloxd.io/main.js` (Changed code · before: `L26129` → after: `L26230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26230) · [Before (L26129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26129)

```diff
-             const xV = null !== (eV = VV.toLowerCase().split("/")[1]) && void 0 !== eV ? eV : "";
+             const LH = null !== (BH = HH.toLowerCase().split("/")[1]) && void 0 !== BH ? BH : "";
```

#### 1709. `bundles/bloxd.io/main.js` (Changed code · before: `L26147` → after: `L26248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26248) · [Before (L26147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26147)

```diff
-                   filename: `app:///wasm/${JV[1]}`,
+                   filename: `app:///wasm/${AH[1]}`,
```

#### 1710. `bundles/bloxd.io/main.js` (Changed code · before: `L26153` → after: `L26254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26254) · [Before (L26153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26153)

```diff
-                   filename: `app:///${VV.filename.slice(eV.length).split(/[?#]/)[0]}`
+                   filename: `app:///${HH.filename.slice(BH.length).split(/[?#]/)[0]}`
```

#### 1711. `bundles/bloxd.io/main.js` (Changed code · before: `L26178-L26179` → after: `L26279-L26280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26279-L26280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26279-L26280) · [Before (L26178-L26179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26178-L26179)

```diff
-                 const VV = (null !== (eV = null === YV || void 0 === YV ? void 0 : YV.frames) && void 0 !== eV ? eV : []).find((VV => bV.test(VV.filename)));
-                 if (VV && (xV = VV.filename, nV.e.some((VV => xV.includes(VV))))) return null
+                 const HH = (null !== (BH = null === AH || void 0 === AH ? void 0 : AH.frames) && void 0 !== BH ? BH : []).find((HH => QH.test(HH.filename)));
+                 if (HH && (0, CH.g)(HH.filename)) return null
```

#### 1712. `bundles/bloxd.io/main.js` (Changed code · before: `L26202-L26204` → after: `L26302-L26304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26302-L26304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26302-L26304) · [Before (L26202-L26204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26202-L26204)

```diff
-               JV && (xV.longest_script_source_url = (0, ZV.v)(JV));
-               YV && (xV.longest_script_invoker = (0, ZV.m)(YV, UV));
-               yV && (xV.longest_script_source_function_name = (0, ZV.i)(yV));
+               AH && (LH.longest_script_source_url = (0, XH.u)(AH));
+               rH && (LH.longest_script_invoker = (0, XH.k)(rH, SH));
+               hH && (LH.longest_script_source_function_name = (0, XH.h)(hH));
```

#### 1713. `bundles/bloxd.io/main.js` (Changed code · before: `L26263-L26264` → after: `L26363-L26364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26363-L26364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26363-L26364) · [Before (L26263-L26264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26263-L26264)

```diff
-             (MV ??= xV.e(36).then((() => xV(7238))).then((VV => VV.initializeFaro({
-               url: (0, QV.isDiscordClient)() ? `https://${UV.e.discordDomain}/jotunn/r` : vV,
+             (mH ??= LH.e(37).then((() => LH(7237))).then((HH => HH.initializeFaro({
+               url: (0, zH.isDiscordClient)() ? `https://${SH.e.discordDomain}/jotunn/r` : GH,
```

#### 1714. `bundles/bloxd.io/main.js` (Changed code · before: `L26267-L26269` → after: `L26367-L26369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26367-L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26367-L26369) · [Before (L26267-L26269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26267-L26269)

```diff
-                 version: String(YV.e),
-                 release: String(YV.e),
-                 environment: (0, JV.h)() ? "preprod" : "prod"
+                 version: String(rH.d),
+                 release: String(rH.d),
+                 environment: (0, AH.e)() ? "preprod" : "prod"
```

#### 1715. `bundles/bloxd.io/main.js` (Changed code · before: `L26287` → after: `L26387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26387) · [Before (L26287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26287)

```diff
-                   UV = null !== (eV = (0, wV.peekVisitSessionId)()) && void 0 !== eV ? eV : null === YV || void 0 === YV ? void 0 : YV.id;
+                   SH = null !== (BH = (0, EH.peekVisitSessionId)()) && void 0 !== BH ? BH : null === rH || void 0 === rH ? void 0 : rH.id;
```

#### 1716. `bundles/bloxd.io/main.js` (Changed code · before: `L26347` → after: `L26447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26447) · [Before (L26347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26347)

```diff
-                   ...(0, pV.c)(),
+                   ...(0, tH.e)(),
```

#### 1717. `bundles/bloxd.io/main.js` (Changed code · before: `L26351` → after: `L26451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26451) · [Before (L26351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26351)

```diff
-                   return VV instanceof Error ? VV : new Error("string" === typeof VV ? VV : String(VV))
+                   return HH instanceof Error ? HH : new Error("string" === typeof HH ? HH : String(HH))
```

#### 1718. `bundles/bloxd.io/main.js` (Changed code · before: `L26353-L26355` → after: `L26453-L26455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26453-L26455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26453-L26455) · [Before (L26353-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26353-L26355)

```diff
-                 YV = `${JV.name}: ${JV.message}`;
-               if ((0, nV.i)(YV)) return;
-               const UV = `${YV}|${JSON.stringify(xV)}`,
+                 rH = `${AH.name}: ${AH.message}`;
+               if ((0, CH.d)(rH)) return;
+               const SH = `${rH}|${JSON.stringify(LH)}`,
```

#### 1719. `bundles/bloxd.io/main.js` (Changed code · before: `L26372` → after: `L26472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26472) · [Before (L26372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26372)

```diff
-         }, , , (VV, eV, xV) => {
+         }, , , , , (HH, BH, LH) => {
```

#### 1720. `bundles/bloxd.io/main.js` (Changed code · before: `L26375-L26376` → after: `L26476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26476) · [Before (L26375-L26376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26375-L26376)

```diff
-             i: () => yV,
-             l: () => UV
+             g: () => rH
```

#### 1721. `bundles/bloxd.io/main.js` (Changed code · before: `L26378-L26379` → after: `L26478-L26483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26478-L26483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26478-L26483) · [Before (L26378-L26379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26378-L26379)

```diff
-           const JV = ["adinplay.com", "venatusmedia.com", "vntsm", "googlesyndication", "doubleclick.net", "aditude.io", "intergient.com", "playwire.com", "s.nitropay.com", "p.cpx.to", "gamemonetize.com", "gamedistribution.com", "solve.crazygames.com", "cmg-ads", "/mraid.js", "-e … [truncated]
-             YV = ["Cannot request fullscreen without transient activation", "Pending operation cancelled by requestFullscreen() call", "Permissions check failed", "Failed to execute 'lock'", "The user has exited the lock before this request", "Fullscreen request denied", "fullscr … [truncated]
+           const AH = ["adinplay.com", "venatusmedia.com", "vntsm", "googlesyndication", "doubleclick.net", "aditude.io", "intergient.com", "playwire.com", "gamemonetize.com", "gamedistribution.com", "solve.crazygames.com", "cmg-ads", "/mraid.js", "-extension://", "privacymanager. … [truncated]
+ 
+           function rH(HH) {
+             return AH.some((BH => HH.includes(BH)))
+           }
+           const SH = ["Cannot request fullscreen without transient activation", "Pending operation cancelled by requestFullscreen() call", "Permissions check failed", "Failed to execute 'lock'", "The user has exited the lock before this request", "Fullscreen request denied", "ful … [truncated]
```

#### 1722. `bundles/bloxd.io/main.js` (Changed code · before: `L26388` → after: `L26492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26492) · [Before (L26388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26388)

```diff
-         }, , , , , , , , (VV, eV, xV) => {
+         }, , , , , (HH, BH, LH) => {
```

#### 1723. `bundles/bloxd.io/main.js` (Changed code · before: `L26390` → after: `L26494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26494) · [Before (L26390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26390)

```diff
-             d: () => JV,
+             b: () => AH,
```

#### 1724. `bundles/bloxd.io/main.js` (Changed code · before: `L26392` → after: `L26496-L26497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26496-L26497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26496-L26497) · [Before (L26392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26392)

```diff
-             i: () => nV,
+             h: () => CH,
+             k: () => zH,
```

#### 1725. `bundles/bloxd.io/main.js` (Changed code · before: `L26395-L26396` → after: `L26500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26500) · [Before (L26395-L26396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26395-L26396)

```diff
-             s: () => UV,
-             v: () => pV
+             u: () => tH
```

#### 1726. `bundles/bloxd.io/main.js` (Changed code · before: `L26423` → after: `L26527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26527) · [Before (L26423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26423)

```diff
-             return "data:" === eV.protocol ? "data:" : "blob:" === eV.protocol ? `blob:${eV.origin}` : `${eV.protocol}//${eV.host}${eV.pathname}`.slice(0, YV)
+             return "data:" === BH.protocol ? "data:" : "blob:" === BH.protocol ? `blob:${BH.origin}` : `${BH.protocol}//${BH.host}${BH.pathname}`.slice(0, rH)
```

#### 1727. `bundles/bloxd.io/main.js` (Changed code · before: `L26427` → after: `L26531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26531) · [Before (L26427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26427)

```diff
-             return "classic-script" === eV || "module-script" === eV ? pV(VV) : VV.replace(/(\[src=)(.*)(\][^\]]*)$/, ((VV, eV, xV, JV) => `${eV}${function(VV){let eV;try{eV=new URL(VV)}catch{return""}return""===eV.host?"":`
+             return "classic-script" === BH || "module-script" === BH ? tH(HH) : HH.replace(/(\[src=)(.*)(\][^\]]*)$/, ((HH, BH, LH, AH) => `${BH}${function(HH){let BH;try{BH=new URL(HH)}catch{return""}return""===BH.host?"":`
```

#### 1728. `bundles/bloxd.io/main.js` (Changed code · before: `L26430` → after: `L26534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/main.js#L26534) · [Before (L26430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/main.js#L26430)

```diff
-                   } //${eV.host}`}(xV)}${JV}`)).slice(0,YV)}function nV(VV){return VV.slice(0,YV)}class wV{constructor(VV,eV){this.client=VV,this.send=eV,this.worst=null,this.longFrameCount=0,this.sent=!0,this.windowWorst=null,this.windowLongFrameCount=0}onEntry(VV){this.windowLo … [truncated]
+                   } //${BH.host}`}(LH)}${AH}`)).slice(0,rH)}function CH(HH){return HH.slice(0,rH)}class EH{constructor(HH,BH){this.client=HH,this.send=BH,this.worst=null,this.longFrameCount=0,this.sent=!0,this.windowWorst=null,this.windowLongFrameCount=0}onEntry(HH){this.windowLo … [truncated]
```
